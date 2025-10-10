import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  Brain, 
  MessageCircle, 
  Calendar, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Globe, 
  Lock, 
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Smile,
  Frown,
  Meh,
  Activity,
  Moon,
  Sun,
  Coffee,
  BookOpen,
  Music,
  Camera,
  FileText,
  Phone,
  Video,
  Send,
  ThumbsUp,
  ThumbsDown,
  RefreshCw
} from 'lucide-react';

const AIMentalHealthCompanionPage: React.FC = () => {
  const [currentMood, setCurrentMood] = useState<string | null>(null);
  const [isChatting, setIsChatting] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  const moodOptions = [
    { id: 'happy', icon: Smile, label: 'Happy', color: 'text-yellow-400', bgColor: 'bg-yellow-400/10' },
    { id: 'sad', icon: Frown, label: 'Sad', color: 'text-blue-400', bgColor: 'bg-blue-400/10' },
    { id: 'neutral', icon: Meh, label: 'Neutral', color: 'text-gray-400', bgColor: 'bg-gray-400/10' },
    { id: 'anxious', icon: Activity, label: 'Anxious', color: 'text-orange-400', bgColor: 'bg-orange-400/10' },
    { id: 'calm', icon: Moon, label: 'Calm', color: 'text-purple-400', bgColor: 'bg-purple-400/10' },
    { id: 'energetic', icon: Sun, label: 'Energetic', color: 'text-green-400', bgColor: 'bg-green-400/10' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Therapy Sessions',
      description: 'Personalized therapy sessions with advanced AI that adapts to your emotional needs and progress'
    },
    {
      icon: Heart,
      title: 'Mood Tracking & Analysis',
      description: 'Comprehensive mood tracking with insights and patterns to help you understand your emotional well-being'
    },
    {
      icon: MessageCircle,
      title: '24/7 Emotional Support',
      description: 'Always-available AI companion ready to listen, provide support, and guide you through difficult moments'
    },
    {
      icon: BarChart3,
      title: 'Progress Monitoring',
      description: 'Detailed analytics and progress tracking to help you see improvements in your mental health journey'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'End-to-end encryption and HIPAA-compliant data protection to keep your mental health data secure'
    },
    {
      icon: Users,
      title: 'Professional Integration',
      description: 'Seamless integration with licensed therapists and mental health professionals when needed'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$19',
      period: '/month',
      description: 'Essential mental health support for individuals',
      features: [
        'Daily mood tracking',
        'Basic AI therapy sessions',
        'Mood insights & reports',
        'Crisis support chat',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$49',
      period: '/month',
      description: 'Comprehensive mental health companion with advanced features',
      features: [
        'Unlimited mood tracking',
        'Advanced AI therapy sessions',
        'Detailed progress analytics',
        '24/7 crisis support',
        'Voice & video sessions',
        'Meditation & mindfulness',
        'Sleep tracking',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For mental health professionals and organizations',
      features: [
        'All Premium features',
        'Client management tools',
        'Professional analytics',
        'Integration with EHR systems',
        'Custom therapy protocols',
        'Team collaboration',
        'API access',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const handleMoodSelection = (moodId: string) => {
    setCurrentMood(moodId);
    // Simulate mood tracking
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'ai',
        message: `I see you're feeling ${moodOptions.find(m => m.id === moodId)?.label.toLowerCase()}. How can I help you today?`,
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    const userMessage = {
      type: 'user',
      message: chatMessage,
      timestamp: new Date()
    };
    
    setChatHistory(prev => [...prev, userMessage]);
    setChatMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        message: "I understand how you're feeling. Let's work through this together. Can you tell me more about what's on your mind?",
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const startVoiceSession = () => {
    setIsRecording(true);
    // Simulate voice recording
    setTimeout(() => {
      setIsRecording(false);
      setChatHistory(prev => [...prev, {
        type: 'ai',
        message: "I heard your voice message. I'm here to listen and help. How are you feeling right now?",
        timestamp: new Date()
      }]);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>AI Mental Health Companion Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered mental health support and wellness tracking. 24/7 emotional support, mood tracking, therapy sessions, and progress monitoring with privacy protection." />
        <meta name="keywords" content="AI mental health, therapy app, mood tracking, emotional support, mental wellness, AI therapy, mental health companion" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-mental-health-companion" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-pink-400/10 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Mental Health & Wellness
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                AI Mental Health Companion Pro
              </h1>
              
              <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Your personal AI companion for mental wellness. Get 24/7 emotional support, 
                track your mood, and access professional-grade therapy tools in a safe, private environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Try the AI Companion</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    How are you feeling today?
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {moodOptions.map((mood) => (
                      <button
                        key={mood.id}
                        onClick={() => handleMoodSelection(mood.id)}
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          currentMood === mood.id
                            ? `${mood.bgColor} border-pink-400/50 ring-2 ring-pink-400/30`
                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <mood.icon className={`w-8 h-8 mx-auto mb-2 ${mood.color}`} />
                        <p className={`text-sm font-medium ${mood.color}`}>{mood.label}</p>
                      </button>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <button
                      onClick={startVoiceSession}
                      disabled={isRecording}
                      className="w-full flex items-center justify-center px-4 py-3 bg-pink-500/20 text-pink-400 rounded-lg hover:bg-pink-500/30 transition-colors disabled:opacity-50"
                    >
                      {isRecording ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Recording...
                        </>
                      ) : (
                        <>
                          <Mic className="w-4 h-4 mr-2" />
                          Voice Message
                        </>
                      )}
                    </button>
                    
                    <button className="w-full flex items-center justify-center px-4 py-3 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
                      <Video className="w-4 h-4 mr-2" />
                      Video Session
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Chat with AI Companion
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-lg h-64 p-4 mb-4 overflow-y-auto">
                    {chatHistory.length === 0 ? (
                      <div className="text-center text-gray-400 h-full flex items-center justify-center">
                        <div>
                          <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p>Start a conversation with your AI companion</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {chatHistory.map((message, index) => (
                          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs p-3 rounded-lg ${
                              message.type === 'user' 
                                ? 'bg-pink-500 text-white' 
                                : 'bg-white/10 text-gray-300'
                            }`}>
                              <p className="text-sm">{message.message}</p>
                              <p className="text-xs opacity-70 mt-1">
                                {message.timestamp.toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!chatMessage.trim()}
                      className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                Comprehensive Mental Health Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI companion uses advanced natural language processing and emotional intelligence 
                to provide personalized mental health support and guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                Choose Your Wellness Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Invest in your mental health with our flexible pricing plans. 
                All plans include privacy protection and secure data handling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-pink-400/50 ring-2 ring-pink-400/30' : 'border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-12 border border-pink-400/20">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Your Mental Health Matters
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Take the first step towards better mental wellness. Our AI companion is here to support you 
                on your journey to improved mental health and emotional well-being.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-pink-400 mr-2" />
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center">
                    <Lock className="w-4 h-4 text-pink-400 mr-2" />
                    <span>End-to-end encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIMentalHealthCompanionPage;