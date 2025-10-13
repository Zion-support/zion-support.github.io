// Message Handler utility
export interface Message {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  timestamp: Date;
}

export class MessageHandler {
  private messages: Message[] = [];

  addMessage(type: Message['type'], message: string): void {
    const msg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      message,
      timestamp: new Date()
    };
    this.messages.push(msg);
  }

  getMessages(): Message[] {
    return [...this.messages];
  }

  clearMessages(): void {
    this.messages = [];
  }
}

export default MessageHandler;