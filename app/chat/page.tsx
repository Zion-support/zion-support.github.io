import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  UserIcon,
  ClockIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Array<{id: number, text: string, sender: 'user' | 'bot', timestamp: Date}>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Simulate connection
    const timer = setTimeout(() => {
      setIsConnected(true);
      // Add welcome message
      setMessages([{
        id: 1,
        text: "Hello! I'm here to help you with any questions about our AI and IT solutions. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date()
      }]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user' as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me connect you with one of our experts who can provide detailed information about that.",
        "I understand you're interested in our services. Our team specializes in AI solutions, cloud infrastructure, and cybersecurity. Would you like to schedule a consultation?",
        "Thank you for your interest! I can help you get started with a free consultation. What specific solution are you looking for?",
        "I'd be happy to provide more details about our pricing and packages. Let me connect you with our sales team for a personalized quote.",
        "That's an excellent use case for our solutions! We've helped many businesses with similar challenges. Would you like to see some case studies?"
      ];

      const botResponse = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot' as const,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance',
      action: 'tel:+13024640950'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPinIcon,
      title: 'Office Visit',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit our headquarters',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Live Chat - Get Instant Support | Zion Tech Group</title>
        <meta name="description" content="Get instant support and answers to your questions about our AI and IT solutions through our live chat service." />
        <meta name="keywords" content="live chat, support, help, instant assistance, customer service, AI solutions, IT support" />
        <meta property="og:title" content="Live Chat - Get Instant Support" />
        <meta property="og:description" content="Get instant support and answers to your questions about our AI and IT solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/chat" />
        <link rel="canonical" href="https://ziontechgroup.com/chat" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Live
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {' '}Chat Support
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Get instant answers to your questions about our AI and IT solutions. 
                Our expert team is here to help you 24/7.
              </p>
              <div className="flex items-center justify-center space-x-4 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">Online Now</span>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-700/50 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Zion Tech Support</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    <ClockIcon className="w-4 h-4 inline mr-1" />
                    {new Date().toLocaleTimeString()}
                  </div>
                </div>

                {/* Messages */}
                <div className="h-96 overflow-y-auto mb-6 space-y-4 pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                            : 'bg-slate-600 text-gray-100'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-600 text-gray-100 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Form */}
                <form onSubmit={handleSendMessage} className="flex space-x-4">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="flex-1 px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled={!isConnected}
                  />
                  <button
                    type="submit"
                    disabled={!isConnected || !inputMessage.trim()}
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 disabled:cursor-not-allowed flex items-center"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Other Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Prefer a different way to get in touch? We're available through multiple channels.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-slate-800/50 hover:bg-slate-700/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-purple-400 font-medium mb-2">{method.details}</p>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  <a
                    href={method.action}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    <CheckCircleIcon className="w-4 h-4 mr-1" />
                    Contact Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChatPage;