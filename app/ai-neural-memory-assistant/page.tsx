'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  MemoryStick, 
  Zap, 
  BarChart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  Activity,
  PieChart,
  LineChart,
  AlertTriangle,
  Globe,
  Cpu,
  Database,
  FileText,
  Smartphone,
  Mail,
  MapPin,
  Phone,
  Clock,
  Search,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Shield,
  Settings,
  Calendar,
  MessageSquare,
  Eye,
  Headphones,
  Mic,
  Camera,
  Video,
  Image,
  Music,
  Download,
  Upload,
  Share,
  Lock,
  Unlock,
  RefreshCw,
  Trash2,
  Edit,
  Save,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Grip,
  MousePointer,
  Hand,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Grid,
  Table,
  Columns,
  Rows,
  Filter,
  SortAsc,
  SortDesc,
  Search as SearchIcon,
  Filter as FilterIcon,
  Sort as SortIcon,
  MoreHorizontal,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp,
  ChevronsDown,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ArrowUpRight,
  ArrowDownRight,
  ArrowDownLeft,
  ArrowUpLeft,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight,
  MoveLeft,
  MoveRight,
  MoveUp,
  MoveDown,
  RotateCcw as RotateLeft,
  RotateCw as RotateRight,
  FlipHorizontal,
  FlipVertical,
  Maximize2,
  Minimize2,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Star as StarIcon,
  Heart,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Diamond,
  Sparkles,
  Flame,
  Droplet,
  Snowflake,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  Wind,
  Tornado,
  Hurricane,
  Earthquake,
  Volcano,
  Mountain,
  Waves,
  TreePine,
  TreeDeciduous,
  Flower,
  Leaf,
  Seedling,
  Sprout,
  Cactus,
  PalmTree,
  Bamboo,
  Rose,
  Tulip,
  Sunflower,
  Cherry,
  Apple,
  Banana,
  Orange,
  Lemon,
  Lime,
  Grape,
  Strawberry,
  Blueberry,
  Raspberry,
  Blackberry,
  Watermelon,
  Pineapple,
  Mango,
  Peach,
  Pear,
  Plum,
  Apricot,
  Kiwi,
  Avocado,
  Coconut,
  Pomegranate,
  Fig,
  Date,
  Raisin,
  Cranberry,
  Pomegranate as PomegranateIcon,
  Fig as FigIcon,
  Date as DateIcon,
  Raisin as RaisinIcon,
  Cranberry as CranberryIcon,
  Pomegranate as PomegranateIcon2,
  Fig as FigIcon2,
  Date as DateIcon2,
  Raisin as RaisinIcon2,
  Cranberry as CranberryIcon2
} from 'lucide-react';

const AINeuralMemoryAssistantPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Neural Memory Networks',
      description: 'Advanced AI that learns and remembers everything you teach it, creating a personalized knowledge base',
      benefits: [
        'Infinite memory capacity',
        'Contextual understanding',
        'Pattern recognition',
        'Predictive suggestions',
        'Cross-reference capabilities',
        'Semantic search'
      ],
      impact: '10x better memory recall'
    },
    {
      icon: Search,
      title: 'Intelligent Search & Retrieval',
      description: 'Find any information instantly using natural language queries and semantic understanding',
      benefits: [
        'Natural language queries',
        'Fuzzy search capabilities',
        'Contextual results',
        'Related content discovery',
        'Voice search support',
        'Image and document search'
      ],
      impact: '95% search accuracy'
    },
    {
      icon: Lightbulb,
      title: 'Smart Suggestions & Insights',
      description: 'Get proactive recommendations and insights based on your patterns and preferences',
      benefits: [
        'Proactive recommendations',
        'Pattern analysis',
        'Trend identification',
        'Opportunity detection',
        'Risk assessment',
        'Optimization suggestions'
      ],
      impact: '40% productivity increase'
    },
    {
      icon: Zap,
      title: 'Real-time Learning',
      description: 'Continuously learns from your interactions and adapts to your working style',
      benefits: [
        'Continuous learning',
        'Adaptive algorithms',
        'Personalized responses',
        'Behavioral analysis',
        'Preference learning',
        'Style adaptation'
      ],
      impact: '60% faster task completion'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal Assistant',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 10GB memory storage',
        'Basic AI capabilities',
        'Email support',
        'Mobile app access',
        'Basic integrations',
        'Standard search'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional Memory',
      price: '$79',
      period: '/month',
      description: 'Advanced features for professionals and growing teams',
      features: [
        'Up to 100GB memory storage',
        'Advanced AI capabilities',
        'Priority support',
        'All platform access',
        'Advanced integrations',
        'Smart suggestions',
        'Team collaboration',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise Intelligence',
      price: '$199',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited memory storage',
        'Full AI suite',
        '24/7 dedicated support',
        'White-label options',
        'Custom integrations',
        'Advanced analytics',
        'On-premise deployment',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const capabilities = [
    {
      title: 'Memory Capacity',
      description: 'Store and retrieve unlimited information with perfect accuracy',
      impact: 'Unlimited storage',
      icon: Database
    },
    {
      title: 'Learning Speed',
      description: 'Learn from interactions and adapt in real-time',
      impact: 'Real-time learning',
      icon: Zap
    },
    {
      title: 'Search Accuracy',
      description: 'Find exactly what you need with semantic understanding',
      impact: '95% accuracy',
      icon: Target
    },
    {
      title: 'Productivity Boost',
      description: 'Increase productivity with intelligent automation',
      impact: '40% improvement',
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Research Director',
      company: 'Innovation Labs',
      content: 'The AI Neural Memory Assistant has revolutionized how I work. It remembers everything I teach it and provides instant, relevant suggestions. My productivity has increased by 50%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'TechStart Inc',
      content: 'This is like having a personal AI assistant that never forgets. It has become an indispensable part of my daily workflow. The search capabilities are incredible.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Professor',
      company: 'University Research Center',
      content: 'As a researcher, I deal with vast amounts of information daily. This AI assistant helps me organize, search, and retrieve information instantly. It\'s a game-changer.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Research & Development',
      description: 'Store research findings, track experiments, and get intelligent insights',
      icon: BookOpen,
      benefits: ['Organize research data', 'Track experiment results', 'Generate insights', 'Collaborate with team']
    },
    {
      title: 'Business Intelligence',
      description: 'Analyze business data, track KPIs, and make data-driven decisions',
      icon: BarChart,
      benefits: ['Data analysis', 'KPI tracking', 'Trend identification', 'Strategic planning']
    },
    {
      title: 'Personal Productivity',
      description: 'Manage tasks, remember important dates, and optimize daily routines',
      icon: Calendar,
      benefits: ['Task management', 'Schedule optimization', 'Habit tracking', 'Goal setting']
    },
    {
      title: 'Content Creation',
      description: 'Store ideas, research topics, and create compelling content',
      icon: FileText,
      benefits: ['Idea management', 'Content research', 'Writing assistance', 'Publishing workflow']
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI Neural Memory Assistant</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Your Personal
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> AI Memory</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Never forget anything again. Our AI Neural Memory Assistant learns, remembers, and helps you access 
              information instantly. Transform how you work with intelligent memory augmentation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <MemoryStick className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Infinite Memory</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <Search className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Smart Search</span>
              </div>
              <div className="flex items-center space-x-2 bg-indigo-500/20 px-4 py-2 rounded-lg">
                <Lightbulb className="w-5 h-5 text-indigo-400" />
                <span className="text-white font-medium">AI Insights</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-bold hover:bg-purple-400 hover:text-white transition-all inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Memory Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology that understands, learns, and remembers everything you need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-purple-400">{feature.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Whether you're a researcher, business professional, or creative, our AI assistant adapts to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1 text-sm">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-gray-400">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from our AI Neural Memory Assistant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{capability.impact}</div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Memory Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your memory needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Professionals
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what users say about our AI Neural Memory Assistant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-purple-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Memory?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their productivity with AI-powered memory augmentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
          <div className="mt-8 text-purple-100">
            <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
            <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AINeuralMemoryAssistantPage;