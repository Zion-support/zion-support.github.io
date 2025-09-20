'use client';

import React, { useState, useEffect, useRef } from 'react';

interface User {
  id: string,
  name: string,
  avatar: string,
  status: 'online' | 'away' | 'busy' | 'offline',
  role: string,
  lastSeen: string,
}

interface Message {
  id: string,
  text: string,
  user: User,
  timestamp: Date,
  type: 'message' | 'system' | 'file' | 'code',
  reactions?: { emoji: string, users: string[] }[],
}

interface File {
  id: string,
  name: string,
  type: string,
  size: number,
  uploadedBy: User,
  uploadedAt: Date,
  url: string,
}

const RealTimeCollaboration: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [messages, setMessages] = useState<Message[]>([]);

  const [files, setFiles] = useState<File[]>([]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState<string[]>([]);

  const [activeUsers, setActiveUsers] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate real-time data
    const mockUsers: User[] = [
      {
        id: '1',
        name: 'John Smith',
        avatar: '👨‍💻',
        status: 'online',
        role: 'Lead Developer',
        lastSeen: 'now'
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        avatar: '👩‍💼',
        status: 'online',
        role: 'Project Manager',
        lastSeen: 'now'
      },
      {
        id: '3',
        name: 'Mike Chen',
        avatar: '👨‍🔬',
        status: 'away',
        role: 'AI Researcher',
        lastSeen: '5 min ago'
      },
      {
        id: '4',
        name: 'Lisa Wang',
        avatar: '👩‍🎨',
        status: 'busy',
        role: 'UX Designer',
        lastSeen: '2 min ago'
      }
    ]);

  const mockMessages: Message[] = [
      {
        id: '1',
        text: 'Welcome to the AI Solutions workspace! Let\'s collaborate on our latest project.',
        user: mockUsers[0],
        timestamp: new Date(Date.now() - 3600000),
        type: 'system'
      },
      {
        id: '2',
        text: 'I\'ve completed the initial API design. Here\'s the documentation:',
        user: mockUsers[0],
        timestamp: new Date(Date.now() - 1800000),
        type: 'message'
      },
      {
        id: '3',
        text: 'Great work John! I\'ll review the API docs and provide feedback.',
        user: mockUsers[1],
        timestamp: new Date(Date.now() - 1200000),
        type: 'message'
      },
      {
        id: '4',
        text: '```typescript\ninterface AIService {\n  process(data: any): Promise<AIResult>,\n  train(model: Model): Promise<void>,\n}\n```',
        user: mockUsers[0],
        timestamp: new Date(Date.now() - 600000),
        type: 'code'
      },
      {
        id: '5',
        text: 'The UI mockups are ready for review. Should I share them here?',
        user: mockUsers[3],
        timestamp: new Date(Date.now() - 300000),
        type: 'message'
      }
    ]);

  const mockFiles: File[] = [
      {
        id: '1',
        name: 'API_Documentation.pdf',
        type: 'pdf',
        size: 2048000,
        uploadedBy: mockUsers[0],
        uploadedAt: new Date(Date.now() - 1800000),
        url: '#'
      },
      {
        id: '2',
        name: 'UI_Mockups.fig',
        type: 'figma',
        size: 5120000,
        uploadedBy: mockUsers[3],
        uploadedAt: new Date(Date.now() - 300000),
        url: '#'
      },
      {
        id: '3',
        name: 'Research_Notes.md',
        type: 'markdown',
        size: 128000,
        uploadedBy: mockUsers[2],
        uploadedAt: new Date(Date.now() - 900000),
        url: '#'
      }
    ]);

    setUsers(mockUsers);
    setMessages(mockMessages);
    setFiles(mockFiles);
    setActiveUsers(['1', '2']);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const newActive = [...prev];
        if (Math.random() > 0.7) {
          const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
          if (!newActive.includes(randomUser.id)) {
            newActive.push(randomUser.id);
          }
        }
        return newActive;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      user: users[0], // Current user
      timestamp: new Date(),
      type: 'message'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simulate typing indicators
    setIsTyping(['2', '3']);
    setTimeout(() => {
      setIsTyping([]);
      // Simulate response
      const responses = [
        'Thanks for the update!',
        'I\'ll take a look at that.',
        'Great idea!',
        'Let me check the code.',
        'Perfect timing!'
      ];
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        user: users[Math.floor(Math.random() * (users.length - 1)) + 1],
        timestamp: new Date(),
        type: 'message'
      };
      setMessages(prev => [...prev, response]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) : any => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(),
      handleSendMessage();
    }
  };

  const getStatusColor = (status: string) : any => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'busy': return 'bg-red-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const formatFileSize = (bytes: number) : any => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Real-Time Collaboration Workspace</h2>
          <p className="text-xl text-gray-300">
            Work together seamlessly with live updates and instant communication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Users Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Team Members</h3>
              <div className="space-y-3">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                        {user.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${getStatusColor(user.status)}`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.role}</p>
                      <p className="text-xs text-gray-500">{user.lastSeen}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Files Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Shared Files</h3>
              <div className="space-y-3">
                {files.map((file) => (
                  <div key={file.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-xs">
                      {file.type === 'pdf' ? '📄' : file.type === 'figma' ? '🎨' : '📝'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <p className="text-xs text-gray-400">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">AI Solutions Project</h3>
                    <p className="text-sm text-gray-300">
                      {activeUsers.length} members online • {messages.length} messages
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isTyping.length > 0 && (
                      <div className="flex items-center space-x-1 text-sm text-gray-300">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce"></div>
                          <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span>
                          {isTyping.map(id => users.find(u => u.id === id)?.name).join(', ')} typing...
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.user.id === '1' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${message.user.id === '1' ? 'order-2' : 'order-1'}`}>
                      {message.type !== 'system' && (
                        <div className={`flex items-center space-x-2 mb-1 ${message.user.id === '1' ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-sm text-gray-300">{message.user.name}</span>
                          <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-lg ${
                          message.type === 'system'
                            ? 'bg-blue-600/20 text-blue-200 text-center'
                            : message.user.id === '1'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/10 text-gray-100'
                        }`}
                      >
                        {message.type === 'code' ? (
                          <pre className="text-sm font-mono whitespace-pre-wrap">{message.text}</pre>
                        ) : (
                          <p className="text-sm">{message.text}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to collaborate on your next AI project?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
            Start Collaboration
          </button>
        </div>
      </div>
    </section>
  );
  };

export default RealTimeCollaboration;