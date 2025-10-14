'use client';

export interface Message {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

export class MessageHandler {
  private messages: Message[] = [];
  private listeners: Array<(messages: Message[]) => void> = [];

  addMessage(message: Omit<Message, 'id'>) {
    const newMessage: Message = {
      ...message,
      id: Math.random().toString(36).substr(2, 9)
    };

    this.messages.push(newMessage);
    this.notifyListeners();

    // Auto-remove message after duration
    if (message.duration) {
      setTimeout(() => {
        this.removeMessage(newMessage.id);
      }, message.duration);
    }

    return newMessage.id;
  }

  removeMessage(id: string) {
    this.messages = this.messages.filter(msg => msg.id !== id);
    this.notifyListeners();
  }

  clearMessages() {
    this.messages = [];
    this.notifyListeners();
  }

  getMessages() {
    return [...this.messages];
  }

  subscribe(listener: (messages: Message[]) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener([...this.messages]));
  }
}

export const messageHandler = new MessageHandler();
export default messageHandler;