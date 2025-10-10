'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
<<<<<<< HEAD
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    {}
      title: "24/7 AI Companion",
      description: "Always available mental health support powered by advanced AI",
      icon: Heart,
      price: "Included"},
    {}
      title: "Mood Tracking",
      description: "Track your daily mood and emotional patterns over time",
      icon: BarChart3,
      price: "Included"},
    {}
      title: "Crisis Support",
      description: "Immediate support and resources during mental health crises",
      icon: Shield,
      price: "Included"},
    {}
      title: "Therapy Sessions",
      description: "AI-powered therapy sessions with evidence-based techniques",
      icon: MessageCircle,
      price: "Included"},
    {}
      title: "Progress Monitoring",
      description: "Track your mental health journey and celebrate milestones",
      icon: Target,
      price: "Included"},
    {}
      title: "Professional Referrals",
      description: "Connect with licensed mental health professionals when needed",
      icon: Users,
      price: "Pro Feature"}
  ];

  const pricingPlans = [
    {
      name: "Basic"
    {}
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Essential mental health support for individuals",
      features: [,
        "AI companion chat",
        "Mood tracking",
        "Basic therapy sessions",
        "Crisis support",
        "Email support"
      ],
      popular: false,
    },
    {
      name: "Professional"
    {}
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Comprehensive mental health support with advanced features",
      features: [,
        "Advanced AI companion",
        "Detailed mood analytics",
        "Full therapy sessions",
        "Crisis support",
        "Progress tracking",
        "Professional referrals",
        "Priority support"
      ],
      popular: true,
    },
    {
      name: "Family"
    {}
      name: "Family",
      price: "$99",
      period: "/month",
      description: "Mental health support for the whole family",
      features: [,
        "Up to 5 family members",
        "Family mood tracking",
        "Group therapy sessions",
        "Crisis support",
        "Family progress reports",
        "Professional referrals",
        "24/7 support",
        "Custom family plans"
      ],
      popular: false,
    }
  ];

  const handleMoodSelection = (moodId: string) => {}
    setCurrentMood(moodId);
    const newMoodEntry = {
      id: Date.now()
      mood: moodId,
    const newMoodEntry = {}
      id: Date.now(),
      mood: moodId,
      timestamp: new Date(),
      note: ''};
    setMoodHistory(prev => [...prev, newMoodEntry]);
  };

  const handleSendMessage = async () => {}
    if (!userInput.trim()) return;

    const userMessage = {}
      id: Date.now(),
      type: 'user',
      content: userInput,
      timestamp: new Date()};

    setChatMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsTyping(true);

    // Simulate AI response;
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1;
    // Simulate AI response
    setTimeout(() => {}
      const aiResponse = {}
        id: Date.now() + 1,
        type: 'ai',
        content: "I understand how you're feeling. It's important to acknowledge your emotions. Would you like to talk about what's on your mind?",
        timestamp: new Date()};
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleCrisisSupport = () => {}
    const crisisMessage = {}
      id: Date.now(),
      type: 'system',
      content: "Crisis support activated. Please know that you're not alone. If you're having thoughts of self-harm, please contact the National Suicide Prevention Lifeline at 988 or text HOME to 741741.",
      timestamp: new Date()};
    setChatMessages(prev => [...prev, crisisMessage]);
  };

  return(<div className={`min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 ${className}`}>
  return (</div>
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 ${className}`}></div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
      <div className="relative py-20 overflow-hidden"></div>
      <div className="relative py-20 overflow-hidden"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center bg-pink-500/10 border border-pink-400/20 rounded-full px-6 py-3 mb-8"></div>
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-pink-300 font-medium">AI Mental Health Companion Pro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              24/7 Mental Health Support;</h1>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>

            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-12"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" /></div>
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </button>,
            </div>,
,
            {/* Stats */}
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-400">User Satisfaction</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
                <div className="text-gray-400">Lives Improved</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">HIPAA</div>
                <div className="text-gray-400">Compliant</div>
              </div>
            </div>,
          </div>,
        </div>,
      </div>,
,
      {/* Mental Health Companion Interface */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Your Mental Health Companion;
            </h2>,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
              Track your mood, chat with your AI companion, and access professional support;
            </p>
          </div>

          <div className="max-w-6xl mx-auto"></div>
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-12">,
              {/* Mood Tracking Section */}</div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
      <div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Your Mental Health Companion
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Track your mood, chat with your AI companion, and access professional support
            </p>
          </div>

          <div className="max-w-6xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
              {/* Mood Tracking Section */}</div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center"></h3>
                  <Heart className="w-8 h-8 text-pink-400 mr-3" />
                  How are you feeling today?
                </h3>

                <div className="space-y-6"></div>
                  <div className="grid grid-cols-2 gap-4">
                    {moods.map((mood) => (</div>
                      <button;
                    {moods.map((mood) => (</div>
                    {moods.map((mood) => (}
                      <button
                        key={mood.id}
                        onClick={() => handleMoodSelection(mood.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          currentMood === mood.id;
                            ? 'border-pink-400 bg-pink-400/10'}
                            : 'border-white/20 hover:border-pink-400/50'}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${}
                          currentMood === mood.id
                            ? 'border-pink-400 bg-pink-400/10'
                            : 'border-white/20 hover:border-pink-400/50'
                        }`}
                      >
                        <mood.icon className={`w-8 h-8 mx-auto mb-2 ${mood.color}`} /></moo>
                        <p className="text-white text-sm font-medium">{mood.label}</p>
                      </button>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-lg p-4"></div>
                    <h4 className="text-white font-semibold mb-2">Mood History</h4>
                    <div className="space-y-2"></div>
                      {moodHistory.slice(-5).map((entry) => (</div>
                        <div key={entry.id} className="flex items-center justify-between text-sm"></div>
                      {moodHistory.slice(-5).map((entry) => (}
                        <div key={entry.id} className="flex items-center justify-between text-sm"></div>
                          <span className="text-gray-300">
                            {entry.timestamp.toLocaleDateString()}
                          </span>
                          <span className="text-pink-400 capitalize"></span>
                            {entry.mood}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center"></h3>
                  <MessageCircle className="w-8 h-8 text-pink-400 mr-3" />
                  Chat with Your AI Companion;
                </h3>

                <div className="space-y-4"></div>
                  {/* Chat Messages */}</div>
                  <div className="h-64 overflow-y-auto space-y-4 mb-4"></div>
                    {chatMessages.length === 0 ? (</div>
                      <div className="text-center py-8"></div>
                    {chatMessages.length === 0 ? (}
                      <div className="text-center py-8"></div>
                        <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400">Start a conversation with your AI companion</p>
                      </div>
                    ) : (
                      chatMessages.map((message) => (
                        <div;
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        ></div>
                          <div;
                        ></div>
                          <div
                            className={`max-w-xs px-4 py-2 rounded-lg ${
                            className={`max-w-xs px-4 py-2 rounded-lg ${}
                              message.type === 'user'
                                ? 'bg-pink-500 text-white'
                                : message.type === 'system'
                                ? 'bg-red-500 text-white'}
                                : 'bg-white/10 text-gray-300'}
                            }`}
                          ></div>
                            <p className="text-sm">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                    {isTyping && (
                      <div className="flex justify-start"></div>
                        <div className="bg-white/10 text-gray-300 px-4 py-2 rounded-lg"></div>
                          <div className="flex space-x-1"></div>
                    {isTyping && (}
                      <div className="flex justify-start"></div>
                        <div className="bg-white/10 text-gray-300 px-4 py-2 rounded-lg"></div>
                          <div className="flex space-x-1"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1 s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2 s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="flex space-x-2"></div>
                    <input;
                  <div className="flex space-x-2"></div>
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}</input></<<<input>onKeyPress</input></input>={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20",
                    />,
                    <button;
                      onClick={handleSendMessage}
                      disabled={!userInput.trim()}
                      className="bg-pink-500 hover: bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send;
                    </button>,
                  </div>,
,
                  {/* Crisis Support Button */}
                  <button;
                    onClick={handleCrisisSupport}
                    className="w-full bg-red-500 hover: bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Crisis Support;
                  </button>
                </div>
              </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
      <div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Mental Health Features;
      <div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Mental Health Features
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: bg-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between"></div>
                  <span className="text-pink-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Mental Health Plans;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Mental Health Plans
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {pricingPlans.map((plan, index) => (</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-pink-400/50 ring-2 ring-pink-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-pink-400/50 ring-2 ring-pink-400/30' : 'border-white/10'}`}>
                {plan.popular && (}</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-pink-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover: from-pink-600 hover:to-purple-700 transform hover:scale-105'}
                    : 'bg-white/10 text-white hover:bg-white/20'}
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Start Your Mental Health Journey;
      <div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Start Your Mental Health Journey
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <Phone className="w-5 h-5 text-pink-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-pink-400 transition-colors">
                      +1 (302) 464-0950;
                    </a>
                  </div>
                  <div className="flex items-center"></div>
                    <Mail className="w-5 h-5 text-pink-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                      kleber@ziontechgroup.com;
                    </a>
                  </div>
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-pink-400 mr-3 mt-1" />,
                    <div className="text-gray-300">,</div>
                      <div>364 E Main St STE 1008</div>,
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-pink-400 mr-3 mt-1" />
                    <div className="text-gray-300"></div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Free 14-day trial</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">HIPAA compliant</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 support</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Crisis support</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial;
                </button>
              </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;