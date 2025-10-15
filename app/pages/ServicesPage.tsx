import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Brain, 
  Server, 
  Cloud, 
  Shield, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Users,
  Award,
  Clock,
  Globe,
  TrendingUp,
  BarChart3,
  Target,
  Rocket,
  Cpu,
  Database,
  Lock,
  Eye,
  MessageSquare,
  FileText,
  Code,
  Bot,
  Lightbulb,
  PieChart,
  Activity,
  Smartphone,
  Network,
  RefreshCw,
  Sparkles
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Zap className="w-5 h-5" /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai', name: 'AI Solutions', icon: <Brain className="w-5 h-5" /> },
    { id: 'it', name: 'IT Services', icon: <Server className="w-5 h-5" /> },
    { id: '5g', name: '5G Solutions', icon: <Cloud className="w-5 h-5" /> }
  ];

  const services = [
    {
      id: 'micro-saas-solutions',
      title: 'Micro SAAS Solutions',
      category: 'micro-saas',
      description: 'Powerful, scalable micro SAAS applications that grow with your business',
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      features: [
        'AI-Powered Applications',
        'Scalable Architecture',
        'Cost-Effective Solutions',
        'Real-time Analytics',
        'Custom Integrations',
        '24/7 Support'
      ],
      pricing: 'From $29/month',
      link: '/micro-saas-solutions',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      category: 'ai',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      features: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automation',
        'Custom AI Models'
      ],
      pricing: 'Custom Pricing',
      link: '/ai-solutions',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'it-solutions',
      title: 'IT Services',
      category: 'it',
      description: 'Comprehensive IT solutions for digital transformation',
      icon: <Server className="w-12 h-12 text-green-400" />,
      features: [
        'Cloud Infrastructure',
        'Cybersecurity',
        'Web Development',
        'Mobile Development',
        'DevOps & Automation',
        'Digital Transformation'
      ],
      pricing: 'Custom Pricing',
      link: '/it-solutions',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: '5g-solutions',
      title: '5G Solutions',
      category: '5g',
      description: 'Next-generation 5G infrastructure and applications',
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      features: [
        '5G Implementation',
        'Edge Computing',
        'IoT Integration',
        'Smart City Solutions',
        'Private Networks',
        'Performance Optimization'
      ],
      pricing: 'Custom Pricing',
      link: '/5g-solutions',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const microSaasServices = [
    {
      title: 'AI Accounting Assistant Pro',
      description: 'Intelligent accounting automation with AI-powered bookkeeping',
      price: '$29/month',
      features: ['Automated invoicing', 'Expense tracking', 'Financial reporting'],
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'AI Content Moderation Pro',
      description: 'Advanced content moderation with AI-powered detection',
      price: '$49/month',
      features: ['Real-time scanning', 'Multi-language support', 'Custom rules'],
      icon: <Shield className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'AI Climate Solutions Pro',
      description: 'Climate monitoring and sustainability management',
      price: '$79/month',
      features: ['Carbon tracking', 'Sustainability reports', 'Risk assessment'],
      icon: <Globe className="w-8 h-8 text-green-400" />
    },
    {
      title: 'AI Business Intelligence Pro',
      description: 'Advanced BI platform with AI-powered insights',
      price: '$149/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom KPIs'],
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />
    }
  ];

  const aiServices = [
    {
      title: 'AI Smart Contracts',
      description: 'Blockchain smart contracts enhanced with AI',
      price: 'Custom',
      features: ['Automated execution', 'Risk assessment', 'Compliance monitoring'],
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'AI Voice Assistant',
      description: 'Enterprise-grade conversational AI',
      price: 'Custom',
      features: ['Multi-language support', 'Custom training', 'API integration'],
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'AI Computer Vision',
      description: 'Image recognition and visual analytics',
      price: 'Custom',
      features: ['Object detection', 'Facial recognition', 'Quality inspection'],
      icon: <Eye className="w-8 h-8 text-green-400" />
    },
    {
      title: 'AI Automation Platform',
      description: 'Intelligent process automation',
      price: 'Custom',
      features: ['Workflow automation', 'RPA integration', 'Performance monitoring'],
      icon: <Bot className="w-8 h-8 text-blue-400" />
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Cloud migration and management services',
      price: 'Custom',
      features: ['AWS, Azure, GCP', 'Cost optimization', '24/7 monitoring'],
      icon: <Cloud className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions',
      price: 'Custom',
      features: ['Threat detection', 'Vulnerability assessments', 'SOC monitoring'],
      icon: <Shield className="w-8 h-8 text-red-400" />
    },
    {
      title: 'Web Development',
      description: 'Custom web applications',
      price: 'Custom',
      features: ['Modern frameworks', 'Mobile responsive', 'SEO optimized'],
      icon: <Code className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform apps',
      price: 'Custom',
      features: ['iOS & Android', 'React Native', 'App store optimization'],
      icon: <Smartphone className="w-8 h-8 text-blue-400" />
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including micro SAAS solutions, AI services, IT solutions, and 5G solutions. Transform your business with our expert technology services." />
        <meta name="keywords" content="technology services, micro SAAS, AI solutions, IT services, 5G solutions, cloud services, cybersecurity, web development, mobile development" />
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
                Our Services
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technology Services</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Transform your business with our comprehensive suite of technology services. 
                From micro SAAS solutions to AI services, we provide the expertise you need to succeed.
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
                  Get Consultation
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

        {/* Main Services Grid */}
        <section className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-cyan-400 font-semibold">{service.pricing}</div>
                      <Link
                        to={service.link}
                        className="group/link inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Sections */}
        {selectedCategory === 'all' && (
          <>
            {/* Micro SAAS Services */}
            <section className="relative z-10 py-16 bg-slate-800/30">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span> Solutions
                  </h2>
                  <p className="text-xl text-gray-300">Powerful, scalable applications for your business</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {microSaasServices.map((service, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group">
                      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="space-y-1 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* AI Services */}
            <section className="relative z-10 py-16">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Solutions</span>
                  </h2>
                  <p className="text-xl text-gray-300">Cutting-edge artificial intelligence for your business</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {aiServices.map((service, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 group">
                      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="space-y-1 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-purple-400 font-semibold text-sm">{service.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* IT Services */}
            <section className="relative z-10 py-16 bg-slate-800/30">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">IT Services</span>
                  </h2>
                  <p className="text-xl text-gray-300">Comprehensive technology solutions for your business</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {itServices.map((service, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300 group">
                      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="space-y-1 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-green-400 font-semibold text-sm">{service.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

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
                    Let our expert team help you choose the right technology solutions for your business needs.
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

export default ServicesPage;