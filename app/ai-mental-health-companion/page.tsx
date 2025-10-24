<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Mental Health Companion - Zion Tech Group</title>
        <meta name="description" content="Ai Mental Health Companion solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Mental Health Companion</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai mental health companion solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
=======
interface MentalHealthCompanionProps {}
  className?: string;
}

export default function MentalHealthCompanion({ className = '' }: MentalHealthCompanionProps) {}
  const [currentMood, setCurrentMood] = useState('neutral');
  const [chatMessages, setChatMessages] = useState<any[]>([]);</any></<<<any>const</any></any> [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [moodHistory, setMoodHistory] = useState<any[]>([]);</any></<<<any>const</any></any> [isAnalyzing, setIsAnalyzing] = useState(false);

  const moods = [
    { id: 'happy', label: 'Happy', icon: Smile, color: 'text-yellow-400' },
    { id: 'sad', label: 'Sad', icon: Frown, color: 'text-blue-400' },
    { id: 'anxious', label: 'Anxious', icon: Worried, color: 'text-orange-400' },
    { id: 'calm', label: 'Calm', icon: Calm, color: 'text-green-400' },
    { id: 'angry', label: 'Angry', icon: Angry, color: 'text-red-400' },
    { id: 'excited', label: 'Excited', icon: Excited, color: 'text-pink-400' },
    { id: 'tired', label: 'Tired', icon: Meh, color: 'text-gray-400' },
    { id: 'confident', label: 'Confident', icon: Confident, color: 'text-purple-400' }
  ];

  const features = [
    {}
      title: "24/7 AI Companion",
      description: "Always available mental health support powered by advanced AI",
      icon: Heart;
      price: "Included"},
    {}
      title: "Mood Tracking",
      description: "Track your daily mood and emotional patterns over time",
      icon: BarChart3;
      price: "Included"},
    {}
      title: "Crisis Support",
      description: "Immediate support and resources during mental health crises",
      icon: Shield;
      price: "Included"},
    {}
      title: "Therapy Sessions",
      description: "AI-powered therapy sessions with evidence-based techniques",
      icon: MessageCircle;
      price: "Included"},
    {}
      title: "Progress Monitoring",
      description: "Track your mental health journey and celebrate milestones",
      icon: Target;
      price: "Included"},
    {}
      title: "Professional Referrals",
      description: "Connect with licensed mental health professionals when needed",
      icon: Users;
      price: "Pro Feature"}
  ];

  const pricingPlans = [
    {}
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Essential mental health support for individuals",
      features: [
        "AI companion chat",
        "Mood tracking",
        "Basic therapy sessions",
        "Crisis support",
        "Email support"
      ],
      popular: false;
    },
    {}
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Comprehensive mental health support with advanced features",
      features: [
        "Advanced AI companion",
        "Detailed mood analytics",
        "Full therapy sessions",
        "Crisis support",
        "Progress tracking",
        "Professional referrals",
        "Priority support"
      ],
      popular: true;
    },
    {}
      name: "Family",
      price: "$99",
      period: "/month",
      description: "Mental health support for the whole family",
      features: [
        "Up to 5 family members",
        "Family mood tracking",
        "Group therapy sessions",
        "Crisis support",
        "Family progress reports",
        "Professional referrals",
        "24/7 support",
        "Custom family plans"
      ],
      popular: false;
    }
  ];

  const handleMoodSelection = (moodId: string) => {}
    setCurrentMood(moodId);
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
      content: userInput;
      timestamp: new Date()};

    setChatMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsTyping(true);

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

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 ${className}`}></div>
      <Helmet></Helmet>
        <title>AI Mental Health Companion Pro - 24/7 Mental Health Support | Zion Tech Group</title>
        <meta name="description" content="AI-powered mental health companion with mood tracking, therapy sessions, and crisis support. Get 24/7 mental health support with our advanced AI technology." />
        <meta name="keywords" content="mental health, AI therapy, mood tracking, mental health support, crisis support, therapy sessions, emotional wellness" />)
        <link rel="canonical" href="https: //ziontechgroup.com/ai-mental-health-companion" />)
      </Helmet>)
),
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center bg-pink-500/10 border border-pink-400/20 rounded-full px-6 py-3 mb-8"></div>
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-pink-300 font-medium">AI Mental Health Companion Pro</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Mental Health Companion
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai mental health companion solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
=======
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text"></h1>
              24/7 Mental Health Support;
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"></p>
              Your AI-Powered Mental Health Companion;
            </p>,
,
            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">,
              Get compassionate, professional mental health support anytime, anywhere.
              Track your mood, engage in therapy sessions, and access crisis support with our advanced AI technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"></button>
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" />
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"></button>
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </button>,
            </div>,
,
            {/* Stats */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Your Mental Health Companion
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto"></p>
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
                  <div className="grid grid-cols-2 gap-4"></div>
                    {moods.map((mood) => (</div>
                    {moods.map((mood) => (}
                      <button
                        key={mood.id}
                        onClick={() => handleMoodSelection(mood.id)}
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
                      {moodHistory.slice(-5).map((entry) => (}
                        <div key={entry.id} className="flex items-center justify-between text-sm"></div>
                          <span className="text-gray-300"></span>
                            {entry.timestamp.toLocaleDateString()}
                          </span>
                          <span className="text-pink-400 capitalize"></span>
                            {entry.mood}
                          </span>
                        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                      ))}
                    </ul>
                  )}
                </div>
<<<<<<< HEAD
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
=======
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
                            <p className="text-xs opacity-70 mt-1"></p>
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
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
                    ></button>
                      Send;
                    </button>,
                  </div>,
,
                  {/* Crisis Support Button */}
                  <button;
                    onClick={handleCrisisSupport}
                    className="w-full bg-red-500 hover: bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  ></button>
                    Crisis Support;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
      </div>,
,
      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Mental Health Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive mental health support powered by advanced AI technology;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
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
                </div>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
=======
      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Mental Health Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the mental health support plan that's right for you;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-pink-400/50 ring-2 ring-pink-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-pink-400/50 ring-2 ring-pink-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-pink-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"></span>
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

                <ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center"></li>
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}></button>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Start Your Mental Health Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Contact our mental health team to learn more about our AI companion;
            </p>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <Phone className="w-5 h-5 text-pink-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-pink-400 transition-colors"></a>
                      +1 (302) 464-0950;
                    </a>
                  </div>
                  <div className="flex items-center"></div>
                    <Mail className="w-5 h-5 text-pink-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-pink-400 transition-colors"></a>
                      kleber@ziontechgroup.com;
                    </a>
                  </div>
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
                <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"></button>
                  Start Free Trial;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
      </div>,
    </div>);
};

export default AIMentalHealthCompanionPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AimentalhealthcompanionPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Mental Health Companion - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Mental Health Companion</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai mental health companion services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
