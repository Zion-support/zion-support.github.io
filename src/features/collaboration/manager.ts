import { useState, useEffect, useRef } from 'react';

interface CollaborationUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  cursor?: { x: number; y: number };
  selection?: { start: number; end: number };
  isActive: boolean;
  lastSeen: Date;
}

interface CollaborationEvent {
  type: 'cursor_move' | 'selection_change' | 'user_join' | 'user_leave' | 'content_change';
  userId: string;
  data: any;
  timestamp: Date;
}

export class RealTimeCollaborationManager {
  private ws: WebSocket | null = null;
  private users: Map<string, CollaborationUser> = new Map();
  private eventHandlers: Map<string, Function[]> = new Map();
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 1000;
  
  constructor(private roomId: string, private userId: string) {
    this.connect();
  }
  
  private connect(): void {
    try {
      this.ws = new WebSocket(`wss://api.ziontechgroup.com/collaboration/${this.roomId}`);
      
      this.ws.onopen = () => {
        console.log('🔗 Connected to collaboration server');
        this.reconnectAttempts = 0;
        this.sendEvent('user_join', { userId: this.userId });
      };
      
      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handleIncomingEvent(data);
        } catch (error) {
          console.error('Failed to parse collaboration event:', error);
        }
      };
      
      this.ws.onclose = () => {
        console.log('🔌 Collaboration connection closed');
        this.handleReconnect();
      };
      
      this.ws.onerror = (error) => {
        console.error('Collaboration WebSocket error:', error);
      };
    } catch (error) {
      console.error('Failed to connect to collaboration server:', error);
      this.handleReconnect();
    }
  }
  
  private handleReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => {
        console.log(`🔄 Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
        this.connect();
      }, this.reconnectInterval * this.reconnectAttempts);
    }
  }
  
  private handleIncomingEvent(event: CollaborationEvent): void {
    switch (event.type) {
      case 'user_join':
        this.users.set(event.userId, {
          id: event.userId,
          name: event.data.name,
          email: event.data.email,
          isActive: true,
          lastSeen: new Date(),
        });
        this.emit('user_join', event.data);
        break;
        
      case 'user_leave':
        const user = this.users.get(event.userId);
        if (user) {
          user.isActive = false;
          user.lastSeen = new Date();
          this.emit('user_leave', event.data);
        }
        break;
        
      case 'cursor_move':
        const cursorUser = this.users.get(event.userId);
        if (cursorUser) {
          cursorUser.cursor = event.data;
          this.emit('cursor_move', { user: cursorUser, cursor: event.data });
        }
        break;
        
      case 'selection_change':
        const selectionUser = this.users.get(event.userId);
        if (selectionUser) {
          selectionUser.selection = event.data;
          this.emit('selection_change', { user: selectionUser, selection: event.data });
        }
        break;
        
      case 'content_change':
        this.emit('content_change', event.data);
        break;
    }
  }
  
  public sendEvent(type: string, data: any): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const event: CollaborationEvent = {
        type: type as any,
        userId: this.userId,
        data,
        timestamp: new Date(),
      };
      this.ws.send(JSON.stringify(event));
    }
  }
  
  public on(event: string, handler: Function): void {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }
    this.eventHandlers.get(event)!.push(handler);
  }
  
  public off(event: string, handler: Function): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }
  
  private emit(event: string, data: any): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.forEach(handler => {
        try {
          handler(data);
        } catch (error) {
          console.error('Error in collaboration event handler:', error);
        }
      });
    }
  }
  
  public getActiveUsers(): CollaborationUser[] {
    return Array.from(this.users.values()).filter(user => user.isActive);
  }
  
  public getUser(userId: string): CollaborationUser | undefined {
    return this.users.get(userId);
  }
  
  public disconnect(): void {
    if (this.ws) {
      this.sendEvent('user_leave', { userId: this.userId });
      this.ws.close();
      this.ws = null;
    }
  }
}

// React Hook for Real-time Collaboration
export const useRealTimeCollaboration = (roomId: string, userId: string) => {
  const [collaborationManager] = useState(() => new RealTimeCollaborationManager(roomId, userId));
  const [activeUsers, setActiveUsers] = useState<CollaborationUser[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  
  useEffect(() => {
    collaborationManager.on('user_join', (data) => {
      setActiveUsers(collaborationManager.getActiveUsers());
    });
    
    collaborationManager.on('user_leave', (data) => {
      setActiveUsers(collaborationManager.getActiveUsers());
    });
    
    return () => {
      collaborationManager.disconnect();
    };
  }, [collaborationManager]);
  
  const sendCursorMove = (cursor: { x: number; y: number }) => {
    collaborationManager.sendEvent('cursor_move', cursor);
  };
  
  const sendSelectionChange = (selection: { start: number; end: number }) => {
    collaborationManager.sendEvent('selection_change', selection);
  };
  
  const sendContentChange = (content: any) => {
    collaborationManager.sendEvent('content_change', content);
  };
  
  return {
    collaborationManager,
    activeUsers,
    isConnected,
    sendCursorMove,
    sendSelectionChange,
    sendContentChange,
  };
};
