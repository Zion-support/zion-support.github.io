import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Play, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  BarChart3,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Zap,
  Database,
  Cloud,
  Lock,
  Cpu,
  Globe,
  Award,
  Sparkles,
  Eye,
  MessageSquare,
  FileText,
  Code,
  Image,
  Video,
  Mic,
  Search,
  Filter,
  Settings,
  Layers,
  Network,
  Bot,
  Lightbulb,
  PieChart,
  Activity
} from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All AI Solutions', icon: <Brain className="w-5 h-5" /> },
    { id: 'machine-learning', name: 'Machine Learning', icon: <Cpu className="w-5 h-5" /> },
    { id: 'nlp', name: 'Natural Language', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'computer-vision', name: 'Computer Vision', icon: <Eye className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Bot className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> }
  ];

  const aiSolutions = [
    {
      id: 'ai-smart-contracts',
      title: 'AI Smart Contracts Platform',
      category: 'automation',
      description: 'Revolutionary blockchain smart contracts enhanced with AI for automated decision-making and execution',
      features: [
        'AI-powered contract optimization',
        'Automated dispute resolution',
        'Smart risk assessment',
        'Dynamic pricing algorithms',
        'Multi-blockchain support',
        'Real-time monitoring',
        'Compliance automation',
        'Predictive analytics'
      ],
      pricing: {
        starter: { price: '$2,999', period: '/month', features: ['Up to 100 contracts', 'Basic AI features', 'Email support'] },
        professional: { price: '$7,999', period: '/month', features: ['Up to 1000 contracts', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: '$19,999', period: '/month', features: ['Unlimited contracts', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      rating: 4.9,
      users: '150+',
      link: '/ai-smart-contracts'
    },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant Enterprise',
      category: 'nlp',
      description: 'Advanced conversational AI with natural language processing for enterprise-grade voice interactions',
      features: [
        'Multi-language support',
        'Custom voice training',
        'Integration APIs',
        'Real-time transcription',
        'Sentiment analysis',
        'Context awareness',
        'Multi-channel support',
        'Analytics dashboard'
      ],
      pricing: {
        starter: { price: '$1,999', period: '/month', features: ['Up to 10K interactions', 'Basic NLP', 'Standard support'] },
        professional: { price: '$4,999', period: '/month', features: ['Up to 100K interactions', 'Advanced NLP', 'Priority support', 'Custom training'] },
        enterprise: { price: '$12,999', period: '/month', features: ['Unlimited interactions', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Mic className="w-8 h-8 text-purple-400" />,
      rating: 4.8,
      users: '320+',
      link: '/ai-voice-assistant'
    },
    {
      id: 'ai-predictive-maintenance',
      title: 'AI Predictive Maintenance System',
      category: 'machine-learning',
      description: 'Intelligent maintenance prediction using machine learning to prevent equipment failures and optimize operations',
      features: [
        'IoT sensor integration',
        'Failure prediction models',
        'Maintenance scheduling',
        'Cost optimization',
        'Real-time monitoring',
        'Alert system',
        'Performance analytics',
        'Custom reporting'
      ],
      pricing: {
        starter: { price: '$3,499', period: '/month', features: ['Up to 50 assets', 'Basic ML models', 'Standard support'] },
        professional: { price: '$8,999', period: '/month', features: ['Up to 500 assets', 'Advanced ML', 'Priority support', 'Custom models'] },
        enterprise: { price: '$22,999', period: '/month', features: ['Unlimited assets', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Activity className="w-8 h-8 text-green-400" />,
      rating: 4.9,
      users: '280+',
      link: '/ai-predictive-maintenance'
    },
    {
      id: 'ai-personalized-learning',
      title: 'AI Personalized Learning Platform',
      category: 'machine-learning',
      description: 'Adaptive learning system that personalizes educational content and tracks progress using AI',
      features: [
        'Adaptive content delivery',
        'Learning path optimization',
        'Progress tracking',
        'Skill assessment',
        'Gamification elements',
        'Multi-modal learning',
        'Performance analytics',
        'Instructor dashboard'
      ],
      pricing: {
        starter: { price: '$2,499', period: '/month', features: ['Up to 1K learners', 'Basic personalization', 'Standard support'] },
        professional: { price: '$6,999', period: '/month', features: ['Up to 10K learners', 'Advanced AI', 'Priority support', 'Custom content'] },
        enterprise: { price: '$17,999', period: '/month', features: ['Unlimited learners', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      rating: 4.8,
      users: '450+',
      link: '/ai-personalized-learning'
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Suite',
      category: 'computer-vision',
      description: 'Comprehensive computer vision platform for image recognition, object detection, and visual analytics',
      features: [
        'Object detection & recognition',
        'Facial recognition',
        'OCR capabilities',
        'Quality inspection',
        'Real-time processing',
        'Custom model training',
        'API integration',
        'Analytics dashboard'
      ],
      pricing: {
        starter: { price: '$1,999', period: '/month', features: ['Up to 10K images', 'Basic models', 'Standard support'] },
        professional: { price: '$4,999', period: '/month', features: ['Up to 100K images', 'Advanced models', 'Priority support', 'Custom training'] },
        enterprise: { price: '$12,999', period: '/month', features: ['Unlimited images', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      rating: 4.9,
      users: '380+',
      link: '/ai-computer-vision'
    },
    {
      id: 'ai-content-generation-pro',
      title: 'AI Content Generation Pro',
      category: 'nlp',
      description: 'Advanced content creation platform with AI-powered writing, editing, and optimization for all content types',
      features: [
        'Multi-format content creation',
        'SEO optimization',
        'Brand voice training',
        'Plagiarism detection',
        'Content scheduling',
        'Team collaboration',
        'Analytics dashboard',
        'API integration'
      ],
      pricing: {
        starter: { price: '$999', period: '/month', features: ['10K words/month', 'Basic AI features', 'Standard support'] },
        professional: { price: '$2,499', period: '/month', features: ['50K words/month', 'Advanced AI', 'Priority support', 'Custom training'] },
        enterprise: { price: '$6,999', period: '/month', features: ['Unlimited words', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <FileText className="w-8 h-8 text-pink-400" />,
      rating: 4.8,
      users: '1,200+',
      link: '/ai-content-generation-pro'
    },
    {
      id: 'ai-conversational-ai',
      title: 'AI Conversational AI Platform',
      category: 'nlp',
      description: 'Enterprise-grade conversational AI platform for chatbots, virtual assistants, and customer service automation',
      features: [
        'Multi-channel deployment',
        'Natural language understanding',
        'Context management',
        'Intent recognition',
        'Sentiment analysis',
        'Human handoff',
        'Analytics & reporting',
        'Custom integrations'
      ],
      pricing: {
        starter: { price: '$1,499', period: '/month', features: ['Up to 5K conversations', 'Basic NLP', 'Standard support'] },
        professional: { price: '$3,999', period: '/month', features: ['Up to 50K conversations', 'Advanced NLP', 'Priority support', 'Custom training'] },
        enterprise: { price: '$9,999', period: '/month', features: ['Unlimited conversations', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <MessageSquare className="w-8 h-8 text-indigo-400" />,
      rating: 4.9,
      users: '680+',
      link: '/ai-conversational-ai'
    },
    {
      id: 'ai-analytics-dashboard-pro',
      title: 'AI Analytics Dashboard Pro',
      category: 'analytics',
      description: 'Intelligent analytics platform with AI-powered insights, automated reporting, and predictive analytics',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Automated insights',
        'Custom dashboards',
        'Data integration',
        'Mobile app access',
        'Team sharing',
        'API access'
      ],
      pricing: {
        starter: { price: '$1,299', period: '/month', features: ['5 data sources', 'Basic dashboards', 'Standard support'] },
        professional: { price: '$3,499', period: '/month', features: ['25 data sources', 'Advanced analytics', 'Priority support', 'Custom models'] },
        enterprise: { price: '$8,999', period: '/month', features: ['Unlimited sources', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <PieChart className="w-8 h-8 text-emerald-400" />,
      rating: 4.9,
      users: '520+',
      link: '/ai-analytics-dashboard-pro'
    },
    {
      id: 'ai-automation-platform',
      title: 'AI Automation Platform',
      category: 'automation',
      description: 'Comprehensive automation platform that uses AI to streamline business processes and workflows',
      features: [
        'Workflow automation',
        'Process optimization',
        'RPA integration',
        'Decision automation',
        'Exception handling',
        'Performance monitoring',
        'Custom workflows',
        'API integrations'
      ],
      pricing: {
        starter: { price: '$2,999', period: '/month', features: ['Up to 10 workflows', 'Basic automation', 'Standard support'] },
        professional: { price: '$7,999', period: '/month', features: ['Up to 100 workflows', 'Advanced AI', 'Priority support', 'Custom development'] },
        enterprise: { price: '$19,999', period: '/month', features: ['Unlimited workflows', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Bot className="w-8 h-8 text-orange-400" />,
      rating: 4.8,
      users: '340+',
      link: '/ai-automation-platform'
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? aiSolutions 
    : aiSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI solutions including machine learning, natural language processing, computer vision, and automation platforms. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, computer vision, automation, predictive analytics, conversational AI, smart contracts" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI Solutions
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Harness the power of artificial intelligence with our comprehensive suite of AI solutions. 
                From machine learning to computer vision, we provide cutting-edge AI technology to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="group inline-flex items-center justify-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get AI Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Overview */}
        <section className="relative z-10 py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions cover the full spectrum of artificial intelligence technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Cpu className="w-12 h-12 text-cyan-400" />,
                  title: 'Machine Learning',
                  description: 'Advanced ML algorithms for predictive analytics and pattern recognition'
                },
                {
                  icon: <MessageSquare className="w-12 h-12 text-purple-400" />,
                  title: 'Natural Language Processing',
                  description: 'Intelligent text analysis, sentiment analysis, and language understanding'
                },
                {
                  icon: <Eye className="w-12 h-12 text-green-400" />,
                  title: 'Computer Vision',
                  description: 'Image recognition, object detection, and visual analytics'
                },
                {
                  icon: <Bot className="w-12 h-12 text-blue-400" />,
                  title: 'Automation',
                  description: 'Intelligent process automation and workflow optimization'
                }
              ].map((capability, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="relative z-10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <div key={solution.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {solution.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(solution.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">{solution.rating}</span>
                            <span className="text-sm text-gray-400">•</span>
                            <span className="text-sm text-gray-400">{solution.users} clients</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {solution.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                      {solution.features.length > 4 && (
                        <div className="text-sm text-cyan-400">
                          +{solution.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-white mb-2">
                        From {solution.pricing.starter.price}
                        <span className="text-lg text-gray-400">{solution.pricing.starter.period}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {solution.pricing.starter.features[0]}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <Link
                        to={solution.link}
                        className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                      >
                        View Details
                      </Link>
                      <a
                        href="tel:+13024640950"
                        className="block w-full text-center py-3 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Ready to Harness AI Power?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Transform your business with our cutting-edge AI solutions. Get started with a free consultation today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+13024640950"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call +1 302 464 0950
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="group inline-flex items-center justify-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </a>
                  </div>
                  <div className="mt-8 text-sm text-gray-400">
                    <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                    <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;