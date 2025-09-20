import { useState, useCallback, useRef } from 'react';

interface AIAssistantMessage {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  metadata?: {
    suggestions?: string[];
    actions?: AIAction[];
    confidence?: number;
  };
}

interface AIAction {
  id: string;
  label: string;
  action: string;
  parameters?: Record<string, any>;
}

interface AIAssistantConfig {
  model: 'gpt-4' | 'claude-3' | 'custom';
  temperature: number;
  maxTokens: number;
  contextWindow: number;
  enableSuggestions: boolean;
  enableActions: boolean;
}

export class AdvancedAIAssistant {
  private messages: AIAssistantMessage[] = [];
  private config: AIAssistantConfig;
  private context: string = '';
  
  constructor(config: AIAssistantConfig) {
    this.config = config;
    this.addSystemMessage('You are an advanced AI assistant for Zion Tech Group, specializing in AI automation, micro SaaS, and cutting-edge technology solutions.');
  }
  
  private addSystemMessage(content: string): void {
    this.messages.push({
      id: Date.now().toString(),
      type: 'system',
      content,
      timestamp: new Date(),
    });
  }
  
  public async processMessage(userMessage: string): Promise<AIAssistantMessage> {
    const userMsg: AIAssistantMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: userMessage,
      timestamp: new Date(),
    };
    
    this.messages.push(userMsg);
    
    try {
      const response = await this.callAI(userMessage);
      const assistantMsg: AIAssistantMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.content,
        timestamp: new Date(),
        metadata: {
          suggestions: response.suggestions,
          actions: response.actions,
          confidence: response.confidence,
        },
      };
      
      this.messages.push(assistantMsg);
      return assistantMsg;
    } catch (error) {
      console.error('AI Assistant Error:', error);
      throw error;
    }
  }
  
  private async callAI(message: string): Promise<any> {
    const response = await fetch('/api/ai/assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        config: this.config,
        context: this.getContext(),
        conversationHistory: this.messages.slice(-10), // Last 10 messages
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to get AI response');
    }
    
    return await response.json();
  }
  
  private getContext(): string {
    return this.context + '\n\nRecent conversation:\n' + 
           this.messages.slice(-5).map(msg => 
             `${msg.type}: ${msg.content}`
           ).join('\n');
  }
  
  public updateContext(newContext: string): void {
    this.context = newContext;
  }
  
  public getConversationHistory(): AIAssistantMessage[] {
    return [...this.messages];
  }
  
  public clearHistory(): void {
    this.messages = [];
    this.addSystemMessage('You are an advanced AI assistant for Zion Tech Group, specializing in AI automation, micro SaaS, and cutting-edge technology solutions.');
  }
  
  public async generateSuggestions(context: string): Promise<string[]> {
    try {
      const response = await fetch('/api/ai/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          context,
          config: this.config,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate suggestions');
      }
      
      const data = await response.json();
      return data.suggestions || [];
    } catch (error) {
      console.error('Failed to generate suggestions:', error);
      return [];
    }
  }
}

// React Hook for Advanced AI Assistant
export const useAdvancedAIAssistant = (config: AIAssistantConfig) => {
  const [assistant] = useState(() => new AdvancedAIAssistant(config));
  const [messages, setMessages] = useState<AIAssistantMessage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const sendMessage = useCallback(async (message: string) => {
    setIsProcessing(true);
    setError(null);
    
    try {
      const response = await assistant.processMessage(message);
      setMessages(assistant.getConversationHistory());
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  }, [assistant]);
  
  const generateSuggestions = useCallback(async (context: string) => {
    try {
      return await assistant.generateSuggestions(context);
    } catch (err) {
      console.error('Failed to generate suggestions:', err);
      return [];
    }
  }, [assistant]);
  
  const clearHistory = useCallback(() => {
    assistant.clearHistory();
    setMessages(assistant.getConversationHistory());
  }, [assistant]);
  
  const updateContext = useCallback((context: string) => {
    assistant.updateContext(context);
  }, [assistant]);
  
  return {
    assistant,
    messages,
    isProcessing,
    error,
    sendMessage,
    generateSuggestions,
    clearHistory,
    updateContext,
  };
};
