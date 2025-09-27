import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestam,
    p: Date;
  type?: 'text' | 'image' | 'file' | 'link';
  metadata?: {
    fileName?: string;
    fileSize?: number;
    imageUrl?: string;
    linkUrl?: string;
    linkTitle?: string;  };
}

interface ChatSystemProps {
  className?: string;
  onMessageSend?: (message: Message) => void;
  onMessageReceive?: (messag,
    e: Message) => void;
  placeholder?: string;
  maxMessages?: number;
  enableFileUpload?: boolean;
  enableImageUpload?: boolean;
  botName?: string;
  userAvatar?: string;
  botAvatar?: string;}

export const ChatSystem: React.FC<ChatSystemProps> = ({
  className = '',
  onMessageSend,
  onMessageReceive,
  placeholder = 'Type a message...',
  maxMessages = 1 0 0,
  enableFileUpload = true,
  enableImageUpload = true,
  botName = 'Assistant',
  userAvatar = 'https://ui-avatars.com/api/?name=User&background=random',
  botAvatar = 'https://ui-avatars.com/api/?name=Bot&background=random'}) => {;
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {;    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();  }, [messages, scrollToBottom]);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      i,
    d: 'welcome',      text: `Hello! I'm ${botName}. How can I help you today?`,
      sender: 'bot',
      timestamp: new Date();
    };
    setMessages([welcomeMessage]);
  }, [botName]);

  const handleSendMessage = useCallback(async (text: string) => {;
    if (!text.trim()) return;

    const userMessage: Message = {
      i,
    d: Date.now().toString(),
      text: text.trim(),
      sender: 'user',      timestamp: new Date()};
    };

    setMessages(prev => [...prev, userMessage].slice(-maxMessages));
    setInputText('');
    setIsTyping(true);

    if (onMessageSend) {
      onMessageSend(userMessage);    }

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        i,
    d: (Date.now() + 1).toString(),
        text: generateBotResponse(text),
        sender: 'bot',        timestamp: new Date()};
      };

      setMessages(prev => [...prev, botResponse].slice(-maxMessages));
      setIsTyping(false);

      if (onMessageReceive) {
        onMessageReceive(botResponse);      }
    }, 10 0 0 + Math.random() * 20 0 0);
  }, [maxMessages, onMessageSend, onMessageReceive]);

  const generateBotResponse = (userText: string): string => {
    const responses = [
      "That's interesting! Can you tell me more about that?",      I understand. How can I help you with that?"",      That's a great question. Let me think about that..."",      I see what you mean. What would you like to do next?"",      Thanks for sharing that with me. Is there anything else I can help with?"",      I'm here to help! What else would you like to know?"",      That sounds important. Can you provide more details?"",      I appreciate you reaching out. How can I assist you further?"",      That's a good point. What are your thoughts on this?"",      I'm listening. Please continue..."";
    ];

    // Simple keyword-based responses
    if (userText.toLowerCase().includes('hello') || userText.toLowerCase().includes('hi')) {      return Hello! Nice to meet you. How can I help you today?"";    }
    if (userText.toLowerCase().includes('help')) {      return I'm here to help! You can ask me questions, share information, or just chat. What would you like to know?"";    }
    if (userText.toLowerCase().includes('thank')) {      return You're welcome! I'm glad I could help. Is there anything else you'd like to know?"";    }
    if (userText.toLowerCase().includes('bye') || userText.toLowerCase().includes('goodbye')) {      return Goodbye! It was nice chatting with you. Feel free to come back anytime!"";    }

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault();
      handleSendMessage(inputText);    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0];
    if (!file) return;

    const fileMessage: Message = {
      i,    d: Date.now().toString(),}
      text: `📎 ${file.name}`,
      sender: 'user',
      timestamp: new Date(),
      type: 'file',
      metadata: {
        fileNam,
    e: file.name,
        fileSize: file.size      };
    };

    setMessages(prev => [...prev, fileMessage].slice(-maxMessages));
    
    if (onMessageSend) {
      onMessageSend(fileMessage);    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageMessage: Message = {
        i,
    d: Date.now().toString(),
        text: '📷 Image shared',
        sender: 'user',
        timestamp: new Date(),
        type: 'image',
        metadata: {
          imageUr,    l: event.target?.result as string}
        };
      };

      setMessages(prev => [...prev, imageMessage].slice(-maxMessages));
      
      if (onMessageSend) {
        onMessageSend(imageMessage);      }
    };
    reader.readAsDataURL(file);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';    }
  };

  const formatTime = (date: Date) => {;    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderMessage = (message: Message) => {;
    const isUser = message.sender === 'user';
    const isBot = message.sender === 'bot';
    const isSystem = message.sender === 'system';

    if (isSystem) {      return (        <div key = {message.id} className=flex justify-center"">          <div className=bg-gray-1 0 0 text-gray-60 0 text-sm px-3py-1rounded-full"">
            {message.text}
          </div>
        </div>;
      );
    }

    return (
      <div
        key = {message.id}
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      >
        <div className={`flex max-w-xs lg:max-w-md ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
          <div className={`flex-shrink-0 ${isUser ? 'ml-3' : 'mr-3'}`}
            <Image              className=h-8w-8rounded-full""
              src={isUser ? userAvatar : botAvatar}
              alt={isUser ? 'User' : botName}
              width={32}
              height={32}
            />
          </div>
          <div className={`${isUser ? 'text-right' : 'text-left'}`}
            <div
              className = {`px-4 py-2rounded-lg ${
                isUser
                  ? 'bg-blue-60 0 text-white'                  : 'bg-gray-20 0 text-gray-8 0 0'}
              }`}
            >
              {message.type === 'image' && message.metadata?.imageUrl && (                <div className=mb-2"">
                  <Image                    src={message.metadata.imageUrl}                    alt=Shared image""                    className=max-w-full h-auto rounded""
                    width={3 0 0}
                    height={2 0 0}
                  />
                </div>
              )}
              {message.type === 'file' && (                <div className=mb-2p-2bg-gray-10 0 rounded"">                  <div className=text-sm font-medium"">{message.metadata?.fileName}</div>                  <div className=text-xs text-gray-5 0 0"">
                    {message.metadata?.fileSize ? `${(message.metadata.fileSize / 10 2 4).toFixed(1)} KB` : ''}
                  </div>
                </div>
              )}              <p className=text-sm"">{message.text}</p>
            </div>
            <div className={`text-xs text-gray-50 0 mt-1 ${isUser ? 'text-right' : 'text-left'}`}
              {formatTime(message.timestamp)}
            </div>
          </div>
        </div>
      </div>;
    );
  };

  return (
    <div className = {`flex flex-col h-9 6 bg-white rounded-lg shadow-sm border border-gray-2 0 0 ${className}`}
      {/* Header */}      <div className=flex items-center justify-between p-4border-b border-gray-2 0 0"">        <div className=flex items-center"">
          <Image            className=h-8w-8rounded-full mr-3""
            src={botAvatar}
            alt={botName}
            width={32}
            height={32}
          />
          <div>            <h 3 className=text-sm font-medium text-gray-9 0 0"" id="botname">{botName}</h3>            <div className=flex items-center"">
              <div className={`h-2w-2rounded-full mr-2 ${isConnected ? 'bg-green-4 0 0' : 'bg-red-4 0 0'}`}</div>              <span className=text-xs text-gray-5 0 0"">
                {isConnected ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
        </div>        <div className=flex space-x-2"">
          {enableFileUpload && (
            <button              onClick={() => fileInputRef.current?.click()}              className=p-2text-gray-40 0 hover:text-gray-6 0 0""              title=Upload file""
            >              <svg className=h-5w-5"" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">                <path strokeLinecap=round"" strokeLinejoin="round" strokeWidth={2} d="M 1 5.1 7 2 7 l-6.58 6 6.586a 2 2 0 1 0 2.82 8 2.82 8 l6.4 1 4-6.58 6 a4 4 0 0 0-5.6 5 6-5.65 6 l-6.41 5 6.585a 6 6 0 1 0 8.48 6 8.48 6 L 2 0.5 1 3" />
              </svg>
            </button>
          )}
          {enableImageUpload && (
            <button              onClick={() => fileInputRef.current?.click()}              className=p-2text-gray-40 0 hover:text-gray-6 0 0""              title=Upload image""
            >              <svg className=h-5w-5"" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">                <path strokeLinecap=round"" strokeLinejoin="round" strokeWidth={2} d="M 4 1 6 l4.5 8 6-4.586a 2 2 0 0 1 2.828 0 L1 6 1 6 m-2-2l1.5 8 6-1.586a 2 2 0 0 1 2.828 0 L2 0 1 4 m-6-6h.01M620h12a 2 2 0 0 0 2-2V 6 a2 2 0 0 0-2-2H 6 a2 2 0 0 0-22v12a22 0 0 0 2 2 z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Messages */}      <div className=flex-1overflow-y-auto p-4space-y-4"">
        {messages.map(renderMessage)}
        {isTyping && (          <div className=flex justify-start"">            <div className=flex items-center"">
              <Image                className=h-8w-8rounded-full mr-3""                src={botAvatar}
                alt={botName}
                width={32}
                height={32}
              />              <div className=bg-gray-20 0 text-gray-80 0 px-4 py-2rounded-lg"">                <div className=flex space-x-1"">                  <div className=w-2h-2bg-gray-50 0 rounded-full animate-bounce""></div>                  <div className=w-2h-2bg-gray-50 0 rounded-full animate-bounce"" style={{ animationDelay: '0.1s' }}></div>                  <div className=w-2h-2bg-gray-50 0 rounded-full animate-bounce"" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}      <div className=p-4border-t border-gray-2 0 0"">        <div className=flex space-x-2"">
          <input            type=text""
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}            className=flex-1px-3py-2border border-gray-30 0 rounded-md focus: outline-none focus:ring-2focu,
    s:ring-blue-5 0 0""
            disabled = {!isConnected}            aria-label=Type your message""
          />
          <button
            onClick={() => handleSendMessage(inputText)}            aria-label=Send message""
            disabled={!inputText.trim() || !isConnected}            className=px-4 py-2bg-blue-60 0 text-white rounded-md hover: bg-blue-70 0 disabled:opacity-5 0 disable,
    d:cursor-not-allowed transition-colors""
          >
            Send
          </button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}        type=file""
        onChange={enableImageUpload ? handleImageUpload : handleFileUpload}
        accept={enableImageUpload ? 'image/*' : '*'}        className=hidden""        aria-label=Upload file""
      />
    </div>;
  );
};