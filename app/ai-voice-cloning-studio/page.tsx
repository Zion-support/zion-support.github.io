import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, 
  Clock, Shield, Code, Database, Mail, Settings, Globe, 
  Smartphone, Monitor, Target, TrendingUp, FileText, Lock, 
  Server, Cpu, Network, HardDrive, Headphones, Award, Rocket, 
  Sparkles, Bot, Wifi, Phone, Laptop, Camera, Music, Gamepad2,
  ShoppingCart, CreditCard, MapPin, Calendar, MessageSquare,
  PieChart, LineChart, Activity, Layers, Eye, Search, Filter,
  Download, Upload, Share2, Copy, Edit, Trash2, Plus, Minus,
  ChevronRight, ExternalLink, Play, Pause, Volume2, VolumeX,
  Zap,   Cpu as Processor, MemoryStick, Cpu as Chip, Cpu as CircuitBoard,
  Volume1, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, PlayCircle,
  PauseCircle, SkipForward, SkipBack, Repeat, Shuffle, Radio, BookOpen
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIVoiceCloningStudioPage = () => {
  const features = [
    {
      title: "Voice Cloning Technology",
      description: "Create realistic voice clones with 95% accuracy using advanced neural networks and deep learning algorithms.",
      icon: <Mic className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-language Support",
      description: "Support for 50+ languages with native pronunciation, accent adaptation, and cultural context preservation.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Synthesis",
      description: "Generate voice content in real-time with ultra-low latency for live applications and streaming.",
      icon: <PlayCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Emotion Control",
      description: "Control emotional tone, emphasis, and expression to match the intended message and context.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Voice Training",
      description: "Advanced voice training algorithms that learn and adapt to specific speaking patterns and styles.",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "API Integration",
      description: "Seamless integration with existing applications through comprehensive REST and GraphQL APIs.",
      icon: <Code className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      originalPrice: "$59",
      period: "per month",
      description: "Perfect for content creators and small businesses",
      features: [
        "Up to 5 voice clones",
        "10 hours of voice generation",
        "Basic emotion control",
        "5 languages supported",
        "Email support",
        "Standard quality output"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      originalPrice: "$159",
      period: "per month",
      description: "Ideal for professional content creators and agencies",
      features: [
        "Up to 20 voice clones",
        "50 hours of voice generation",
        "Advanced emotion control",
        "25 languages supported",
        "Priority support",
        "High quality output",
        "API access",
        "Custom voice training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      originalPrice: "$399",
      period: "per month",
      description: "Complete solution for large organizations and media companies",
      features: [
        "Unlimited voice clones",
        "Unlimited voice generation",
        "Premium emotion control",
        "50+ languages supported",
        "24/7 dedicated support",
        "Ultra high quality output",
        "Full API access",
        "Custom voice training",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Content Creation",
      description: "Create engaging audio content for podcasts, videos, audiobooks, and social media with consistent voice branding.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Podcast Production", "Video Narration", "Audiobook Creation", "Social Media Content"]
    },
    {
      title: "Accessibility & Inclusion",
      description: "Provide voice assistance for individuals with speech impairments or those who prefer audio content.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Speech Assistance", "Audio Learning", "Accessibility Tools", "Inclusive Communication"]
    },
    {
      title: "E-learning & Training",
      description: "Create personalized learning experiences with custom voice narration for educational content.",
      icon: <BookOpen className="w-6 h-6" />,
      benefits: ["Online Courses", "Training Materials", "Language Learning", "Educational Content"]
    },
    {
      title: "Customer Service",
      description: "Implement intelligent voice assistants and automated customer service with natural-sounding voices.",
      icon: <Headphones className="w-6 h-6" />,
      benefits: ["Voice Assistants", "IVR Systems", "Customer Support", "Automated Responses"]
    },
    {
      title: "Entertainment & Media",
      description: "Create immersive entertainment experiences with character voices, dubbing, and voice acting.",
      icon: <Music className="w-6 h-6" />,
      benefits: ["Character Voices", "Dubbing Services", "Voice Acting", "Interactive Media"]
    },
    {
      title: "Marketing & Advertising",
      description: "Develop compelling marketing campaigns with consistent brand voice across all audio channels.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Radio Ads", "Video Marketing", "Brand Consistency", "Audio Campaigns"]
    }
  ];

  const technicalSpecs = [
    { spec: "Voice Accuracy", value: "95%" },
    { spec: "Generation Speed", value: "Real-time" },
    { spec: "Supported Languages", value: "50+" },
    { spec: "Audio Quality", value: "Studio Grade" },
    { spec: "API Response Time", value: "< 200ms" },
    { spec: "Uptime SLA", value: "99.9%" }
  ];

  const voiceSamples = [
    {
      name: "Professional Male",
      description: "Clear, authoritative voice perfect for business presentations and educational content.",
      accent: "American English",
      category: "Business"
    },
    {
      name: "Friendly Female",
      description: "Warm, approachable voice ideal for customer service and casual content.",
      accent: "British English",
      category: "Customer Service"
    },
    {
      name: "Energetic Youth",
      description: "Dynamic, engaging voice perfect for marketing and entertainment content.",
      accent: "Australian English",
      category: "Marketing"
    },
    {
      name: "Calm Narrator",
      description: "Soothing, professional voice excellent for audiobooks and meditation content.",
      accent: "Canadian English",
      category: "Narration"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO 
        title="AI Voice Cloning Studio - Professional Voice Synthesis | Zion Tech Group"
        description="Professional voice synthesis with 95% accuracy and multi-language support. Create realistic voice clones for content creation, accessibility, and business applications."
        keywords="voice cloning, voice synthesis, text-to-speech, AI voice, voice generation, content creation, accessibility, voice technology, neural networks"
        canonical="https://ziontechgroup.com/ai-voice-cloning-studio"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Professional Voice Synthesis Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Voice Cloning Studio
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Professional voice synthesis with 95% accuracy and multi-language support. 
              Create realistic voice clones for content creation, accessibility, and business applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Mic className="w-5 h-5 mr-2" />
                Start Voice Cloning
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Listen to Samples
              </Link>
            </div>
            
            {/* Technical Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mic className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">{spec.value}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{spec.spec}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Samples Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Voice Samples
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the quality and variety of our AI-generated voices across different styles and languages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {voiceSamples.map((sample, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                      <Volume2Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {sample.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-xs">{sample.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {sample.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{sample.accent}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <PlayCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful voice synthesis capabilities powered by cutting-edge AI and machine learning technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Use Cases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our voice cloning technology is transforming industries and creating new possibilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Choose Your Plan
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your voice cloning needs. All plans include our core technology with varying levels of features and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">{plan.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-cyan-500/25' 
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Amazing Voices?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start creating professional voice content today. Contact us for a personalized demonstration and consultation.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Start Voice Cloning
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Listen to Samples
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIVoiceCloningStudioPage;