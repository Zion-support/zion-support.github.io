'use client';

export interface Message {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

export const messageHandler = {
  // Show success message
  success: (title: string, message: string, duration = 5000) => {
    console.log(`✅ ${title}: ${message}`);
    // In a real app, you would dispatch to a notification system
  },

  // Show error message
  error: (title: string, message: string, duration = 7000) => {
    console.error(`❌ ${title}: ${message}`);
    // In a real app, you would dispatch to a notification system
  },

  // Show warning message
  warning: (title: string, message: string, duration = 6000) => {
    console.warn(`⚠️ ${title}: ${message}`);
    // In a real app, you would dispatch to a notification system
  },

  // Show info message
  info: (title: string, message: string, duration = 5000) => {
    console.info(`ℹ️ ${title}: ${message}`);
    // In a real app, you would dispatch to a notification system
  },

  // Create message object
  createMessage: (
    type: Message['type'],
    title: string,
    message: string,
    duration?: number
  ): Message => ({
    id: Math.random().toString(36).substr(2, 9),
    type,
    title,
    message,
    duration
  })
};

export default messageHandler;