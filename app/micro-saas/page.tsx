'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Mail, 
  MessageSquare, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Lock, 
  TrendingUp, 
  Target, 
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink,
  Phone,
  Clock,
  Award
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Revolutionary AI-powered content creation for blogs, social media, emails, and marketing materials with 50+ templates.',
      icon: FileText,
      price: '$199',
      period: '/month',
      features: [
        '50+ Content Templates',
        'Multi-language Support',
        'SEO Optimization',
        'Brand Voice Training',
        'Plagiarism Checker',
        'Social Media Scheduling',
        'Analytics Dashboard',
        'API Access'
      ],
      category: 'Content & Marketing',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      popular: true
    },
    {
      id: 'ai-chat-assistant',
      name: 'AI Chat Assistant Suite',
      description: 'Intelligent customer support automation with natural language processing and multi-channel integration.',
      icon: MessageSquare,
      price: '$299',
      period: '/month',
      features: [
        '24/7 Customer Support',
        'Multi-language Support',
        'CRM Integration',
        'Sentiment Analysis',
        'Live Chat Handoff',
        'Knowledge Base',
        'Custom Training',
        'Analytics & Reports'
      ],
      category: 'Customer Support',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      popular: false
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator Studio',
      description: 'Professional AI image creation with advanced editing tools, style transfer, and high-resolution output.',
      icon: Image,
      price: '$149',
      period: '/month',
      features: [
        '50+ Art Styles',
        'High-Resolution Output',
        'Batch Processing',
        'Background Removal',
        'Style Transfer',
        'Commercial License',
        'API Integration',
        'Cloud Storage'
      ],
      category: 'Design & Media',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      popular: false
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor Pro',
      description: 'Automated video editing with AI-powered features, auto-captioning, and professional templates.',
      icon: Video,
      price: '$399',
      period: '/month',
      features: [
        'Auto Video Editing',
        'AI Caption Generation',
        'Voice Synthesis',
        'Background Music',
        'Transitions & Effects',
        '4K Export',
        'Social Media Formats',
        'Collaboration Tools'
      ],
      category: 'Design & Media',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      popular: true
    },
    {
      id: 'ai-data-analyzer',
      name: 'AI Data Analyzer',
      description: 'Advanced data analysis and visualization with predictive insights and automated reporting.',
      icon: BarChart,
      price: '$249',
      period: '/month',
      features: [
        'Predictive Analytics',
        'Data Visualization',
        'Automated Reports',
        'Real-time Dashboards',
        'Data Import/Export',
        'Custom Metrics',
        'Alert System',
        'API Integration'
      ],
      category: 'Analytics & BI',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      popular: false
    },
    {
      id: 'ai-email-marketer',
      name: 'AI Email Marketing Pro',
      description: 'Intelligent email marketing automation with personalization, A/B testing, and advanced analytics.',
      icon: Mail,
      price: '$179',
      period: '/month',
      features: [
        'AI Personalization',
        'A/B Testing',
        'Send Time Optimization',
        'Subject Line AI',
        'List Segmentation',
        'Drip Campaigns',
        'Analytics Dashboard',
        'Integration Hub'
      ],
      category: 'Marketing',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      popular: false
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant',
      description: 'Intelligent coding assistant with code generation, debugging, and documentation automation.',
      icon: Code,
      price: '$199',
      period: '/month',
      features: [
        'Code Generation',
        'Bug Detection',
        'Auto Documentation',
        'Code Review',
        'Refactoring Suggestions',
        'Multi-language Support',
        'IDE Integration',
        'Team Collaboration'
      ],
      category: 'Development',
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600',
      popular: false
    },
    {
      id: 'ai-database-manager',
      name: 'AI Database Manager',
      description: 'Intelligent database management with automated optimization, monitoring, and performance tuning.',
      icon: Database,
      price: '$329',
      period: '/month',
      features: [
        'Auto Optimization',
        'Performance Monitoring',
        'Query Optimization',
        'Backup Automation',
        'Security Scanning',
        'Migration Tools',
        'Real-time Alerts',
        'Multi-DB Support'
      ],
      category: 'Infrastructure',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      popular: false
    },
    {
      id: 'ai-mobile-app-builder',
      name: 'AI Mobile App Builder',
      description: 'No-code mobile app development with AI-powered features and cross-platform deployment.',
      icon: Smartphone,
      price: '$499',
      period: '/month',
      features: [
        'No-Code Development',
        'Cross-Platform',
        'AI Features Integration',
        'App Store Publishing',
        'Push Notifications',
        'Analytics Integration',
        'Custom Backend',
        'White-label Options'
      ],
      category: 'Development',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      popular: true
    },
    {
      id: 'ai-website-builder',
      name: 'AI Website Builder Pro',
      description: 'Intelligent website creation with AI design suggestions, SEO optimization, and performance monitoring.',
      icon: Globe,
      price: '$299',
      period: '/month',
      features: [
        'AI Design Suggestions',
        'SEO Optimization',
        'Performance Monitoring',
        'E-commerce Integration',
        'Custom Domains',
        'SSL Certificates',
        'CDN Integration',
        'Analytics Dashboard'
      ],
      category: 'Web Development',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      popular: false
    },
    {
      id: 'ai-security-scanner',
      name: 'AI Security Scanner',
      description: 'Advanced security scanning and vulnerability assessment with automated threat detection.',
      icon: Shield,
      price: '$399',
      period: '/month',
      features: [
        'Vulnerability Scanning',
        'Threat Detection',
        'Compliance Checking',
        'Penetration Testing',
        'Security Reports',
        'Real-time Monitoring',
        'Incident Response',
        'Team Notifications'
      ],
      category: 'Security',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      popular: false
    },
    {
      id: 'ai-workflow-automator',
      name: 'AI Workflow Automator',
      description: 'Intelligent business process automation with custom workflows and integration capabilities.',
      icon: Settings,
      price: '$249',
      period: '/month',
      features: [
        'Custom Workflows',
        'API Integrations',
        'Conditional Logic',
        'Task Automation',
        'Team Collaboration',
        'Progress Tracking',
        'Error Handling',
        'Analytics Dashboard'
      ],
      category: 'Automation',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600',
      popular: false
    }
  ];

  const categories = [
    'All Services',
    'Content & Marketing',
    'Customer Support',
    'Design & Media',
    'Analytics & BI',
    'Marketing',
    'Development',
    'Infrastructure',
    'Web Development',
    'Security',
    'Automation'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = microSaasServices.filter(service => service.popular);

  return (
    <>
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group"
        description="50+ AI-powered micro SAAS applications for modern businesses. Affordable, powerful tools for content creation, automation, analytics, and more."
        keywords={['micro saas', 'ai tools', 'business applications', 'automation', 'content creation', 'analytics']}
        canonicalUrl="https://ziontechgroup.com/micro-saas"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              50+ AI-Powered Business Applications
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS applications. 
              From content creation to automation, we have the tools you need to succeed.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search micro SAAS services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-cyan-500/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
          </section>

          {/* Popular Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Most Popular Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service) => (
                <div key={service.id} className="quantum-card p-6 energy-pulse relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className={`w-8 h-8 ${service.textColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 neon-text">{service.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {service.price}
                      <span className="text-lg text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <a
                      href={`/contact?service=${service.id}`}
                      className={`inline-block w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r ${service.color} hover:shadow-lg`}
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              All Micro SAAS Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <service.icon className={`w-6 h-6 ${service.textColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1 neon-text">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-xs text-gray-400">{service.category}</div>
                  </div>

                  <div className="text-center">
                    <a
                      href={`/contact?service=${service.id}`}
                      className={`inline-block w-full py-2 px-4 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r ${service.color} hover:shadow-lg text-sm`}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Pricing Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">$199</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>5 Micro SAAS Apps</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Basic Support</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Standard Features</span>
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="quantum-card p-8 text-center energy-pulse relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    ⭐ Recommended
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">$499</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>15 Micro SAAS Apps</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Advanced Features</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>API Access</span>
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card hologram-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">$999</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Unlimited Apps</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>24/7 Support</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Custom Features</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>White-label Options</span>
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and get a customized solution for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="cyber-card hologram-card p-6 text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Get detailed information</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6 text-center">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                <p className="text-gray-300 mb-4">We're here to help</p>
                <p className="text-cyan-400 font-semibold">Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>

            <div className="cyber-card hologram-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Get Free Consultation</h3>
              <p className="text-gray-300 mb-6">
                Schedule a free 30-minute consultation to discuss your business needs and discover 
                which micro SAAS solutions are perfect for you.
              </p>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                Schedule Free Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;