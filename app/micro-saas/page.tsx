'use client';
import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Calendar, 
  FileText, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  TrendingUp,
  Globe,
  Lock,
  Brain,
  Cloud,
  Code,
  Smartphone,
  Mail,
  MessageSquare,
  Settings,
  Target,
  DollarSign,
  Rocket,
  Sparkles,
  Cpu,
  Database,
  Eye,
  Mic,
  Video,
  Camera,
  Music,
  Palette,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Compass,
  Navigation as NavIcon,
  PieChart,
  Activity,
  Phone,
  MapPin
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    {
      id: 1,
      name: 'AI Project Manager Pro',
      description: 'Revolutionary project management with quantum-inspired algorithms, real-time collaboration, and predictive analytics. Trusted by 25,000+ teams worldwide.',
      icon: BarChart,
      price: '$199/month',
      originalPrice: '$299/month',
      features: [
        'Quantum task optimization',
        'Real-time collaboration',
        'Predictive analytics',
        'AI risk assessment',
        'Resource optimization',
        'Gantt charts',
        'Time tracking',
        'Team insights'
      ],
      benefits: [
        '60% productivity increase',
        '85% fewer delays',
        '95% planning accuracy',
        '40% cost reduction'
      ],
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '25,000+',
      freeTrial: '30 days',
      link: 'https://ziontechgroup.com/ai-project-manager',
      capabilities: [
        'Smart task prioritization',
        'Automated resource allocation',
        'Predictive timeline generation',
        'Real-time team performance analytics'
      ]
    },
    {
      id: 2,
      name: 'AI Smart Calendar Pro',
      description: 'Advanced calendar AI that learns your work patterns, optimizes meetings, and prevents burnout. Used by 18,000+ professionals.',
      icon: Calendar,
      price: '$89/month',
      originalPrice: '$129/month',
      features: [
        'Smart scheduling',
        'Meeting optimization',
        'Conflict resolution',
        'Time blocking',
        'Integration with 50+ apps',
        'Burnout prevention',
        'Productivity insights',
        'Automated follow-ups'
      ],
      benefits: [
        '40% time saved',
        '90% fewer conflicts',
        '25% more productive meetings',
        'Zero double-bookings'
      ],
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '18,000+',
      freeTrial: '14 days',
      link: 'https://ziontechgroup.com/ai-smart-calendar',
      capabilities: [
        'Pattern recognition and learning',
        'Intelligent meeting suggestions',
        'Automatic time zone handling',
        'Work-life balance optimization'
      ]
    },
    {
      id: 3,
      name: 'AI Content Writer Pro',
      description: 'Professional content creation powered by advanced AI models. Generate high-quality content in 50+ languages with SEO optimization.',
      icon: FileText,
      price: '$129/month',
      originalPrice: '$199/month',
      features: [
        'Multi-language support',
        'SEO optimization',
        'Brand voice training',
        'Content templates',
        'Plagiarism detection',
        'Grammar checking',
        'Tone adjustment',
        'Bulk generation'
      ],
      benefits: [
        '80% faster content creation',
        '95% accuracy rate',
        '50% cost reduction',
        'Unlimited revisions'
      ],
      popular: false,
      category: 'Content',
      rating: 4.7,
      users: '12,000+',
      freeTrial: '7 days',
      link: 'https://ziontechgroup.com/ai-content-writer',
      capabilities: [
        'Natural language generation',
        'SEO keyword integration',
        'Brand consistency maintenance',
        'Multi-format content creation'
      ]
    },
    {
      id: 4,
      name: 'AI Video Generator Pro',
      description: 'Create professional videos in minutes with AI-powered editing, voice synthesis, and automated scene generation.',
      icon: Video,
      price: '$199/month',
      originalPrice: '$299/month',
      features: [
        'AI video editing',
        'Voice synthesis',
        'Scene generation',
        'Auto-captioning',
        'Multi-format export',
        'Template library',
        'Brand customization',
        'Batch processing'
      ],
      benefits: [
        '90% faster video creation',
        'Professional quality output',
        '70% cost reduction',
        'Unlimited video length'
      ],
      popular: true,
      category: 'Content',
      rating: 4.8,
      users: '8,500+',
      freeTrial: '14 days',
      link: 'https://ziontechgroup.com/ai-video-generator',
      capabilities: [
        'Automated video scripting',
        'Intelligent scene transitions',
        'Voice cloning technology',
        'Real-time rendering'
      ]
    },
    {
      id: 5,
      name: 'AI Social Media Manager Pro',
      description: 'Automated social media management with AI-powered content creation, posting optimization, and engagement tracking.',
      icon: MessageSquare,
      price: '$99/month',
      originalPrice: '$149/month',
      features: [
        'Content generation',
        'Multi-platform posting',
        'Engagement tracking',
        'Hashtag optimization',
        'Analytics reports',
        'Scheduling',
        'Brand voice training',
        'Trend analysis'
      ],
      benefits: [
        '400% more engagement',
        '70% time saved',
        '200% follower growth',
        '85% better reach'
      ],
      popular: true,
      category: 'Marketing',
      rating: 4.9,
      users: '15,000+',
      freeTrial: '10 days',
      link: 'https://ziontechgroup.com/ai-social-media-manager',
      capabilities: [
        'Cross-platform content adaptation',
        'Optimal posting time prediction',
        'Engagement rate optimization',
        'Viral content identification'
      ]
    },
    {
      id: 6,
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing platform with AI-powered personalization, A/B testing, and performance optimization.',
      icon: Mail,
      price: '$79/month',
      originalPrice: '$119/month',
      features: [
        'AI content generation',
        'Send time optimization',
        'A/B testing',
        'Segmentation',
        'Analytics dashboard',
        'Template library',
        'Automation workflows',
        'Deliverability tools'
      ],
      benefits: [
        '300% higher open rates',
        '250% more clicks',
        '180% increase in conversions',
        '60% time saved'
      ],
      popular: true,
      category: 'Marketing',
      rating: 4.8,
      users: '8,000+',
      freeTrial: '14 days',
      link: 'https://ziontechgroup.com/ai-email-marketing',
      capabilities: [
        'Personalized content generation',
        'Optimal send time prediction',
        'Subject line optimization',
        'Audience behavior analysis'
      ]
    },
    {
      id: 7,
      name: 'AI CRM Assistant Pro',
      description: 'Intelligent CRM with AI-powered lead scoring, automated follow-ups, and predictive analytics for sales teams.',
      icon: Users,
      price: '$149/month',
      originalPrice: '$199/month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'CRM integration',
        'Revenue optimization',
        'Pipeline management',
        'Customer insights',
        'Performance analytics'
      ],
      benefits: [
        '250% more qualified leads',
        '180% increase in conversions',
        '90% time saved on admin',
        '35% revenue growth'
      ],
      popular: true,
      category: 'Business',
      rating: 4.9,
      users: '12,000+',
      freeTrial: '21 days',
      link: 'https://ziontechgroup.com/ai-crm-assistant',
      capabilities: [
        'Predictive lead scoring',
        'Automated email sequences',
        'Sales opportunity identification',
        'Customer lifetime value prediction'
      ]
    },
    {
      id: 8,
      name: 'AI Financial Analyzer Pro',
      description: 'Advanced financial analysis with AI-powered insights, forecasting, and investment recommendations.',
      icon: DollarSign,
      price: '$299/month',
      originalPrice: '$399/month',
      features: [
        'Financial forecasting',
        'Risk assessment',
        'Investment analysis',
        'Portfolio optimization',
        'Market trend analysis',
        'Automated reporting',
        'Compliance monitoring',
        'Real-time alerts'
      ],
      benefits: [
        '95% accuracy in forecasts',
        '200% better investment returns',
        '80% time saved on analysis',
        'Zero compliance issues'
      ],
      popular: false,
      category: 'Finance',
      rating: 4.8,
      users: '3,500+',
      freeTrial: '30 days',
      link: 'https://ziontechgroup.com/ai-financial-analyzer',
      capabilities: [
        'Machine learning predictions',
        'Risk factor analysis',
        'Market sentiment tracking',
        'Automated rebalancing'
      ]
    },
    {
      id: 9,
      name: 'AI Code Assistant Pro',
      description: 'Intelligent coding assistant with AI-powered code generation, debugging, and optimization for developers.',
      icon: Code,
      price: '$99/month',
      originalPrice: '$149/month',
      features: [
        'Code generation',
        'Bug detection',
        'Code optimization',
        'Documentation generation',
        'Multi-language support',
        'IDE integration',
        'Code review',
        'Performance analysis'
      ],
      benefits: [
        '70% faster development',
        '90% fewer bugs',
        '50% time saved',
        'Improved code quality'
      ],
      popular: true,
      category: 'Development',
      rating: 4.9,
      users: '20,000+',
      freeTrial: '14 days',
      link: 'https://ziontechgroup.com/ai-code-assistant',
      capabilities: [
        'Natural language to code',
        'Automated testing generation',
        'Code pattern recognition',
        'Performance optimization suggestions'
      ]
    },
    {
      id: 10,
      name: 'AI Cybersecurity Monitor Pro',
      description: 'Advanced security monitoring with AI-powered threat detection, automated incident response, and compliance reporting.',
      icon: Shield,
      price: '$249/month',
      originalPrice: '$349/month',
      features: [
        'Threat detection',
        'Incident response',
        'Compliance reporting',
        'Real-time monitoring',
        'Risk assessment',
        'Automated alerts',
        'Forensic analysis',
        'Integration support'
      ],
      benefits: [
        '95% threat detection',
        '80% faster response',
        '100% compliance',
        '70% cost reduction'
      ],
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '1,500+',
      freeTrial: '30 days',
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor',
      capabilities: [
        'Behavioral anomaly detection',
        'Automated threat response',
        'Compliance gap analysis',
        'Security posture assessment'
      ]
    },
    {
      id: 11,
      name: 'AI Password Manager Pro',
      description: 'Secure password management with AI-powered security analysis, breach monitoring, and automated password generation.',
      icon: Lock,
      price: '$49/month',
      originalPrice: '$79/month',
      features: [
        'Password generation',
        'Security analysis',
        'Breach monitoring',
        'Multi-device sync',
        'Biometric login',
        'Secure sharing',
        'Dark web monitoring',
        'Family plans'
      ],
      benefits: [
        '100% secure storage',
        'Zero password breaches',
        '90% time saved',
        'Unlimited passwords'
      ],
      popular: false,
      category: 'Security',
      rating: 4.7,
      users: '5,000+',
      freeTrial: '7 days',
      link: 'https://ziontechgroup.com/ai-password-manager',
      capabilities: [
        'AI-powered security scoring',
        'Automated password rotation',
        'Breach notification system',
        'Weak password detection'
      ]
    },
    {
      id: 12,
      name: 'AI Voice Cloning Studio Pro',
      description: 'Professional voice cloning and synthesis platform for content creators, marketers, and businesses.',
      icon: Mic,
      price: '$149/month',
      originalPrice: '$199/month',
      features: [
        'Voice cloning',
        'Text-to-speech',
        'Emotion control',
        'Multiple languages',
        'Real-time processing',
        'API integration',
        'Custom voices',
        'Batch processing'
      ],
      benefits: [
        '95% voice accuracy',
        '80% cost reduction',
        '10x faster production',
        'Unlimited usage'
      ],
      popular: false,
      category: 'Creative',
      rating: 4.7,
      users: '2,500+',
      freeTrial: '3 days',
      link: 'https://ziontechgroup.com/ai-voice-cloning-studio',
      capabilities: [
        'Neural voice synthesis',
        'Emotional tone control',
        'Multi-language support',
        'Real-time voice conversion'
      ]
    }
  ];

  const categories = ['all', ...new Set(microSaasServices.map(service => service.category))];

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const benefits = [
    {
      icon: TrendingUp,
      stat: '300%',
      title: 'Average ROI Increase',
      description: 'Our clients see significant returns on investment within the first quarter'
    },
    {
      icon: Users,
      stat: '50K+',
      title: 'Active Users',
      description: 'Trusted by businesses worldwide for their critical operations'
    },
    {
      icon: Award,
      stat: '99.9%',
      title: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability with comprehensive SLA coverage'
    },
    {
      icon: Target,
      stat: '24/7',
      title: 'Support',
      description: 'Round-the-clock assistance from our expert technical team'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'AI Project Manager Pro transformed our team productivity. We now complete projects 40% faster with better quality.',
      rating: 5,
      avatar: '/images/testimonials/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'GrowthCorp',
      content: 'The AI Email Marketing Pro increased our open rates by 300%. It\'s like having a marketing genius on our team.',
      rating: 5,
      avatar: '/images/testimonials/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'DataFlow Systems',
      content: 'AI Analytics Dashboard gave us insights we never had before. Our decision-making is now data-driven.',
      rating: 5,
      avatar: '/images/testimonials/emily.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-3000"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI-Powered Micro SAAS Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful AI-driven tools for modern businesses. Streamline operations, boost productivity, and drive growth with our intelligent micro SAAS applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-text">{benefit.stat}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                service.popular ? 'ring-2 ring-cyan-400/50' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-gray-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-green-300">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating} ({service.users})</span>
                  </div>
                  <span className="text-sm text-cyan-400 font-semibold">
                    {service.freeTrial} free trial
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all block text-center inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={`mb-20 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI-powered micro SAAS solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;