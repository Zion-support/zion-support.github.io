'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code,
  MessageSquare,
  Globe,
  Smartphone,
  BarChart3,
  Settings,
  Lock,
  TrendingUp,
  Target,
  Lightbulb,
  Database,
  Cpu,
  Mail,
  Calendar,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  Save,
  Share2,
  Copy,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Bell,
  User,
  Users2,
  Building,
  Home,
  Phone,
  Mail as MailIcon,
  MapPin,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Laptop,
  Monitor,
  Tablet,
  Watch,
  Headphones,
  Camera,
  Mic,
  Video,
  Image,
  Music,
  Film,
  Book,
  BookOpen,
  File,
  Folder,
  FolderOpen,
  Archive,
  Trash,
  Recycle,
  RotateCcw,
  RotateCw,
  Move,
  Copy as CopyIcon,
  Scissors,
  PenTool,
  Brush,
  Palette,
  Layers,
  Grid,
  Layout,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link as LinkIcon,
  Unlink,
  List,
  ListOrdered,
  Quote,
  Code2,
  Terminal,
  Command,
  Keyboard,
  Mouse,
  Touchpad,
  Wifi,
  Bluetooth,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Volume2,
  VolumeX,
  Volume1,
  Mute,
  Unmute,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  FastForward,
  Rewind,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  FastForward as FastForwardIcon,
  Rewind as RewindIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Volume1 as Volume1Icon,
  Mute as MuteIcon,
  Unmute as UnmuteIcon,
  PlayCircle as PlayCircleIcon,
  PauseCircle as PauseCircleIcon,
  StopCircle as StopCircleIcon,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Repeat as RepeatIcon2,
  Shuffle as ShuffleIcon2,
  FastForward as FastForwardIcon2,
  Rewind as RewindIcon2
} from 'lucide-react';

const ZionChatAiPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'Powered by GPT-4, Claude, and custom trained models for superior conversation quality',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Communicate in 50+ languages with automatic translation and cultural context awareness',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Settings,
      title: 'Custom Training',
      description: 'Train the AI on your specific data, industry knowledge, and company policies',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track conversation metrics, user satisfaction, and performance insights',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, GDPR compliance, and SOC 2 Type II certification',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamless integration with your existing systems and third-party applications',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI models (GPT-3.5)',
        '5 languages supported',
        'Email support',
        'Basic analytics',
        'Standard response time'
      ],
      limitations: [
        'Limited custom training',
        'Basic integrations only',
        'Standard uptime SLA'
      ],
      popular: false,
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI models (GPT-4, Claude)',
        '50+ languages supported',
        'Priority support',
        'Advanced analytics & insights',
        'Custom branding',
        'API access',
        'Custom training available'
      ],
      limitations: [
        'Limited to 5 custom models',
        'Standard integrations'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited conversations',
        'All AI models + custom training',
        'Unlimited languages',
        'Dedicated support manager',
        'Advanced analytics & reporting',
        'White-label solution',
        'Full API access',
        'Unlimited custom models',
        '99.9% uptime SLA',
        'On-premise deployment option'
      ],
      limitations: [],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Zion Chat AI transformed our customer support. Response times improved by 80% and customer satisfaction increased to 95%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations, GlobalCorp',
      content: 'The multi-language support is incredible. We can now serve customers in 15 different languages seamlessly.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Manager, SaaSPro',
      content: 'The custom training feature allowed us to create a chatbot that truly understands our product and industry.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer support with intelligent routing and escalation',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sales Assistant',
      description: 'AI-powered sales qualification and lead generation',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Internal Helpdesk',
      description: 'Employee support for IT, HR, and general inquiries',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'E-commerce Assistant',
      description: 'Product recommendations and shopping assistance',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Chat AI Pro - Advanced AI Chatbot Solution</title>
        <meta name="description" content="Advanced AI chatbot with natural language processing, multi-language support, custom training, and enterprise security. Starting at $29/month." />
        <meta name="keywords" content="AI chatbot, natural language processing, customer support, multi-language, custom training, enterprise security" />
        <meta property="og:title" content="Zion Chat AI Pro - Advanced AI Chatbot Solution" />
        <meta property="og:description" content="Advanced AI chatbot with natural language processing, multi-language support, custom training, and enterprise security. Starting at $29/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-chat-ai" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Chat AI Pro",
            "description": "Advanced AI chatbot with natural language processing, multi-language support, custom training, and enterprise security",
            "url": "https://ziontechgroup.com/zion-chat-ai",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "29",
                "priceCurrency": "USD",
                "billingIncrement": "P1M"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                AI Chatbot Solution
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Zion Chat AI Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Advanced AI chatbot with natural language processing, multi-language support, and custom training capabilities for superior customer engagement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="#demo"
                  className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Watch Demo
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">GPT-4</div>
                  <div className="text-gray-400 text-sm">AI Models</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Languages</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">SOC 2</div>
                  <div className="text-gray-400 text-sm">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and manage intelligent chatbots that deliver exceptional user experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Use Case</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From customer support to sales assistance, our AI chatbot adapts to your specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 relative ${
                    plan.popular ? 'ring-2 ring-purple-400/50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center text-gray-500">
                        <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        {limitation}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'border border-gray-600 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Customer Experience?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of AI-driven conversations. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact"
                    className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionChatAiPage;