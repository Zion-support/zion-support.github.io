import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
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
  Brain,
  Database,
  Cloud,
  Lock,
  Cpu,
  Globe,
  Award,
  Sparkles
} from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai', name: 'AI-Powered', icon: <Brain className="w-5 h-5" /> },
    { id: 'business', name: 'Business', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'productivity', name: 'Productivity', icon: <Target className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const microSaasSolutions = [
    {
      id: 'ai-accounting-assistant',
      title: 'AI Accounting Assistant Pro',
      category: 'ai',
      description: 'Intelligent accounting automation with AI-powered bookkeeping, expense tracking, and financial reporting',
      features: [
        'Automated invoice processing',
        'Smart expense categorization',
        'Real-time financial insights',
        'Tax preparation assistance',
        'Multi-currency support',
        'Bank reconciliation',
        'Financial forecasting',
        'Compliance monitoring'
      ],
      pricing: {
        starter: { price: '$29', period: '/month', features: ['Up to 100 transactions', 'Basic AI features', 'Email support'] },
        professional: { price: '$79', period: '/month', features: ['Up to 1000 transactions', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited transactions', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      rating: 4.9,
      users: '2,500+',
      link: '/ai-accounting-assistant'
    },
    {
      id: 'ai-content-moderation-pro',
      title: 'AI Content Moderation Pro',
      category: 'ai',
      description: 'Advanced content moderation platform with AI-powered detection of inappropriate content across multiple formats',
      features: [
        'Real-time content scanning',
        'Multi-language support',
        'Image and video analysis',
        'Custom moderation rules',
        'API integration',
        'Detailed analytics',
        'Bulk content processing',
        'Compliance reporting'
      ],
      pricing: {
        starter: { price: '$49', period: '/month', features: ['10K content checks', 'Basic AI models', 'Standard support'] },
        professional: { price: '$149', period: '/month', features: ['100K content checks', 'Advanced AI', 'Priority support', 'Custom rules'] },
        enterprise: { price: '$399', period: '/month', features: ['Unlimited checks', 'Custom AI training', '24/7 support', 'On-premise option'] }
      },
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      rating: 4.8,
      users: '1,800+',
      link: '/ai-content-moderation-pro'
    },
    {
      id: 'ai-climate-solutions-pro',
      title: 'AI Climate Solutions Pro',
      category: 'ai',
      description: 'Comprehensive climate monitoring and sustainability management platform powered by AI',
      features: [
        'Carbon footprint tracking',
        'Sustainability reporting',
        'Climate risk assessment',
        'Energy optimization',
        'Waste management',
        'Supply chain analysis',
        'Compliance monitoring',
        'Predictive analytics'
      ],
      pricing: {
        starter: { price: '$79', period: '/month', features: ['Basic tracking', 'Standard reports', 'Email support'] },
        professional: { price: '$199', period: '/month', features: ['Advanced analytics', 'Custom reports', 'API access', 'Priority support'] },
        enterprise: { price: '$499', period: '/month', features: ['Full suite', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Globe className="w-8 h-8 text-green-400" />,
      rating: 4.9,
      users: '3,200+',
      link: '/ai-climate-solutions-pro'
    },
    {
      id: 'ai-agricultural-intelligence-pro',
      title: 'AI Agricultural Intelligence Pro',
      category: 'ai',
      description: 'Smart farming solution with AI-powered crop monitoring, yield prediction, and resource optimization',
      features: [
        'Crop health monitoring',
        'Yield prediction models',
        'Weather integration',
        'Soil analysis',
        'Pest detection',
        'Irrigation optimization',
        'Market price tracking',
        'Farm management tools'
      ],
      pricing: {
        starter: { price: '$99', period: '/month', features: ['Up to 100 acres', 'Basic AI features', 'Standard support'] },
        professional: { price: '$249', period: '/month', features: ['Up to 500 acres', 'Advanced AI', 'API access', 'Priority support'] },
        enterprise: { price: '$599', period: '/month', features: ['Unlimited acres', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      rating: 4.8,
      users: '1,500+',
      link: '/ai-agricultural-intelligence-pro'
    },
    {
      id: 'ai-business-intelligence-pro',
      title: 'AI Business Intelligence Pro',
      category: 'business',
      description: 'Advanced business intelligence platform with AI-powered insights, reporting, and data visualization',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom KPI tracking',
        'Data integration',
        'Automated reporting',
        'Natural language queries',
        'Mobile app access',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: '$149', period: '/month', features: ['5 users', 'Basic dashboards', 'Standard support'] },
        professional: { price: '$299', period: '/month', features: ['25 users', 'Advanced analytics', 'API access', 'Priority support'] },
        enterprise: { price: '$699', period: '/month', features: ['Unlimited users', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      rating: 4.9,
      users: '4,100+',
      link: '/ai-business-intelligence-pro'
    },
    {
      id: 'ai-code-assistant-pro',
      title: 'AI Code Assistant Pro',
      category: 'productivity',
      description: 'Intelligent coding assistant with AI-powered code generation, debugging, and optimization suggestions',
      features: [
        'Code generation',
        'Bug detection',
        'Code optimization',
        'Documentation generation',
        'Multi-language support',
        'IDE integration',
        'Code review assistance',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: '$199', period: '/month', features: ['Individual license', 'Basic AI features', 'Standard support'] },
        professional: { price: '$399', period: '/month', features: ['Team license', 'Advanced AI', 'API access', 'Priority support'] },
        enterprise: { price: '$999', period: '/month', features: ['Unlimited licenses', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      rating: 4.9,
      users: '5,200+',
      link: '/ai-code-assistant-pro'
    },
    {
      id: 'ai-content-generation-pro',
      title: 'AI Content Generation Pro',
      category: 'productivity',
      description: 'Advanced content creation platform with AI-powered writing, editing, and optimization tools',
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
        starter: { price: '$79', period: '/month', features: ['10K words/month', 'Basic AI features', 'Standard support'] },
        professional: { price: '$199', period: '/month', features: ['50K words/month', 'Advanced AI', 'API access', 'Priority support'] },
        enterprise: { price: '$499', period: '/month', features: ['Unlimited words', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <Sparkles className="w-8 h-8 text-pink-400" />,
      rating: 4.8,
      users: '3,800+',
      link: '/ai-content-generation-pro'
    },
    {
      id: 'ai-analytics-dashboard-pro',
      title: 'AI Analytics Dashboard Pro',
      category: 'analytics',
      description: 'Comprehensive analytics platform with AI-powered insights, automated reporting, and predictive analytics',
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
        starter: { price: '$99', period: '/month', features: ['5 data sources', 'Basic dashboards', 'Standard support'] },
        professional: { price: '$249', period: '/month', features: ['25 data sources', 'Advanced analytics', 'API access', 'Priority support'] },
        enterprise: { price: '$599', period: '/month', features: ['Unlimited sources', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      rating: 4.9,
      users: '2,900+',
      link: '/ai-analytics-dashboard-pro'
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? microSaasSolutions 
    : microSaasSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SAAS solutions. From accounting automation to content generation, transform your business with our innovative platforms." />
        <meta name="keywords" content="micro SAAS, AI solutions, business automation, accounting software, content generation, analytics dashboard, climate solutions, agricultural intelligence" />
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
                <Zap className="w-4 h-4 mr-2" />
                Micro SAAS Solutions
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Transform your business with our comprehensive suite of AI-powered micro SAAS applications. 
                From accounting automation to content generation, we provide the tools you need to scale and succeed.
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
                  Get Quote
                </a>
              </div>
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
                            <span className="text-sm text-gray-400">{solution.users} users</span>
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
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of businesses already using our micro SAAS solutions to accelerate growth and efficiency
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

export default MicroSaaSSolutionsPage;