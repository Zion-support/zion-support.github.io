import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  BarChart3, 
  Smartphone, 
  Database, 
  Settings, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  TrendingUp,
  Clock,
  Award,
  Lock,
  Cpu,
  Layers,
  Target,
  Rocket,
  Lightbulb,
  PieChart,
  FileText,
  MessageSquare,
  Bot,
  Workflow,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Monitor,
  Server,
  Network,
  Wifi,
  Cloud,
  Terminal,
  GitBranch,
  Bug,
  Wrench,
  Play,
  Pause,
  Square,
  RotateCcw,
  Save,
  Copy,
  Paste,
  Scissors,
  Undo,
  Redo,
  Search as SearchIcon,
  Replace,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code2,
  Brackets,
  Parentheses,
  Braces,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  User,
  UserCheck,
  UserPlus,
  UserX,
  Users2,
  UserCircle,
  UserCog,
  UserSearch,
  UserMinus,
  UserEdit,
  UserShield,
  Award as AwardIcon,
  Clock as TimeIcon
} from 'lucide-react';

const AICodeAssistantPro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Intelligent Code Generation',
      description: 'Generate high-quality code in 50+ programming languages using advanced AI models trained on millions of code repositories.',
      benefits: ['50+ Languages', 'Context-aware generation', 'Best practices', 'Error-free code']
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'Advanced Bug Detection',
      description: 'Automatically detect and fix bugs, security vulnerabilities, and performance issues in your codebase.',
      benefits: ['Real-time analysis', 'Security scanning', 'Performance optimization', 'Automated fixes']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'AI-powered code optimization suggestions to improve performance, reduce memory usage, and enhance scalability.',
      benefits: ['Performance metrics', 'Optimization suggestions', 'Memory analysis', 'Scalability improvements']
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'IDE Integration',
      description: 'Seamlessly integrate with popular IDEs including VS Code, IntelliJ, Sublime Text, and more.',
      benefits: ['VS Code extension', 'IntelliJ plugin', 'Sublime Text support', 'Custom IDE support']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning Models',
      description: 'Advanced ML models trained on your specific codebase to provide personalized suggestions and improvements.',
      benefits: ['Custom training', 'Personalized suggestions', 'Learning from usage', 'Continuous improvement']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with code encryption, compliance checking, and secure cloud processing.',
      benefits: ['Code encryption', 'Compliance checking', 'Secure processing', 'Audit trails']
    }
  ];

  const supportedLanguages = [
    { name: 'JavaScript', icon: '🟨', level: 'Expert' },
    { name: 'Python', icon: '🐍', level: 'Expert' },
    { name: 'TypeScript', icon: '🔷', level: 'Expert' },
    { name: 'Java', icon: '☕', level: 'Expert' },
    { name: 'C++', icon: '⚡', level: 'Advanced' },
    { name: 'C#', icon: '🔷', level: 'Advanced' },
    { name: 'Go', icon: '🐹', level: 'Advanced' },
    { name: 'Rust', icon: '🦀', level: 'Advanced' },
    { name: 'PHP', icon: '🐘', level: 'Advanced' },
    { name: 'Ruby', icon: '💎', level: 'Advanced' },
    { name: 'Swift', icon: '🍎', level: 'Intermediate' },
    { name: 'Kotlin', icon: '🟣', level: 'Intermediate' },
    { name: 'Scala', icon: '🔴', level: 'Intermediate' },
    { name: 'R', icon: '📊', level: 'Intermediate' },
    { name: 'MATLAB', icon: '🧮', level: 'Intermediate' }
  ];

  const pricingTiers = [
    {
      name: 'Developer',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'All 50+ languages',
        'Basic AI suggestions',
        'Bug detection',
        'Email support',
        '10 projects',
        '1GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Everything in Developer',
        'Advanced AI models',
        'Performance optimization',
        'Priority support',
        'Unlimited projects',
        '10GB storage',
        'Team collaboration',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom ML models',
        'On-premise deployment',
        '24/7 dedicated support',
        'Unlimited storage',
        'White-label options',
        'Advanced security',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Programming Languages', icon: <Code className="w-6 h-6" /> },
    { number: '99.5%', label: 'Code Accuracy', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '10x', label: 'Faster Development', icon: <Zap className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Assistance', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Intelligent code generation, debugging, and optimization with support for 50+ programming languages. Boost your development productivity with AI-powered coding assistance." />
        <meta name="keywords" content="AI code assistant, code generation, debugging, programming, IDE integration, machine learning, code optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  AI-Powered Development Assistant
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Code Assistant Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize your coding experience with intelligent code generation, debugging, and optimization. 
                  Support for 50+ programming languages with AI-powered suggestions that boost productivity.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Trial
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-400">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Modern Development</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to accelerate your development workflow and write better code
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Supported Languages Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Support for <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">50+ Languages</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  From popular languages to specialized ones, we support the tools you use every day
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {supportedLanguages.map((language, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 text-center"
                  >
                    <div className="text-4xl mb-3">{language.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{language.name}</h3>
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      language.level === 'Expert' 
                        ? 'bg-green-500/20 text-green-400' 
                        : language.level === 'Advanced'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {language.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your development needs. All plans include our core AI features.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingTiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 relative ${
                      tier.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10 scale-105' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Supercharge Your Development?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Contact us today to start your free trial and experience the future of AI-powered development.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AICodeAssistantPro;