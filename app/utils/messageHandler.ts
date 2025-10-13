// Message handler to prevent async response errors
export class MessageHandler {
  private static instance: MessageHandler;
  private pendingMessages: Map<string, any> = new Map();

  static getInstance(): MessageHandler {
    if (!MessageHandler.instance) {
      MessageHandler.instance = new MessageHandler();
    }
    return MessageHandler.instance;
  }

  constructor() {
    this.setupMessageListener();
  }

  private setupMessageListener(): void {
    // Listen for messages from browser extensions or other sources
    window.addEventListener('message', (event) => {
      // Handle messages that might cause async response errors
      if (event.data && typeof event.data === 'object') {
        this.handleMessage(event);
      }
    });

    // Listen for chrome extension messages
    if (typeof chrome !== 'undefined' && chrome.runtime) {
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        // Always send a response to prevent async response errors
        try {
          this.handleChromeMessage(message, sender, sendResponse);
          return true; // Indicate we will send a response asynchronously
        } catch (error) {
          console.warn('Chrome message handling error:', error);
          sendResponse({ error: 'Message handling failed' });
          return false;
        }
      });
    }
  }

  private handleMessage(event: MessageEvent): void {
    const { data, source, origin } = event;
    
    // Handle specific message types that might cause issues
    if (data.type === 'LAUNCHDARKLY_INIT') {
      // Handle LaunchDarkly initialization
      console.log('LaunchDarkly client initialized');
      return;
    }

    // Handle other message types as needed
    if (data.type && data.type.startsWith('EXTENSION_')) {
      console.log('Extension message received:', data.type);
    }
  }

  private handleChromeMessage(message: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void): void {
    // Handle different message types
    switch (message.type) {
      case 'PING':
        sendResponse({ status: 'pong' });
        break;
      case 'GET_DATA':
        sendResponse({ data: 'No data available' });
        break;
      default:
        sendResponse({ error: 'Unknown message type' });
    }
  }

  public sendMessage(target: Window, message: any, targetOrigin: string = '*'): void {
    try {
      target.postMessage(message, targetOrigin);
    } catch (error) {
      console.warn('Failed to send message:', error);
    }
  }

  public addMessageListener(type: string, handler: (data: any) => void): void {
    const messageHandler = (event: MessageEvent) => {
      if (event.data && event.data.type === type) {
        handler(event.data);
      }
    };
    
    window.addEventListener('message', messageHandler);
    
    // Store for cleanup
    this.pendingMessages.set(type, messageHandler);
  }

  public removeMessageListener(type: string): void {
    const handler = this.pendingMessages.get(type);
    if (handler) {
      window.removeEventListener('message', handler);
      this.pendingMessages.delete(type);
    }
  }

  public cleanup(): void {
    this.pendingMessages.forEach((handler) => {
      window.removeEventListener('message', handler);
    });
    this.pendingMessages.clear();
  }
}

// Initialize the message handler
export const messageHandler = MessageHandler.getInstance();

// Export for use in components
export default messageHandler;