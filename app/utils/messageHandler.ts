'use client';

export interface Message {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const messageHandler = {
  show: (message: Omit<Message, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const fullMessage: Message = {
      id,
      duration: 5000,
      ...message
    };

    // In a real implementation, you would dispatch to a message store
    // For now, we'll use console.log
    console.log('Message:', fullMessage);
    
    return id;
  },

  success: (title: string, message: string, options?: Partial<Message>) => {
    return messageHandler.show({
      type: 'success',
      title,
      message,
      ...options
    });
  },

  error: (title: string, message: string, options?: Partial<Message>) => {
    return messageHandler.show({
      type: 'error',
      title,
      message,
      ...options
    });
  },

  warning: (title: string, message: string, options?: Partial<Message>) => {
    return messageHandler.show({
      type: 'warning',
      title,
      message,
      ...options
    });
  },

  info: (title: string, message: string, options?: Partial<Message>) => {
    return messageHandler.show({
      type: 'info',
      title,
      message,
      ...options
    });
  }
};

export default messageHandler;