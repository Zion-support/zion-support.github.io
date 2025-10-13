import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, Shield, Cloud, Brain, Zap, Database, 
  Mail, Users, Code, FileText, TrendingUp, Lock,
  ArrowRight, Star, CheckCircle, Clock, DollarSign,
  Smartphone, Globe, Settings, Target, PieChart
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      tagline: 'AI-Powered Business Intelligence Platform',
      description: 'Transform your data into actionable insights with our advanced analytics platform featuring real-time dashboards, predictive analytics, and automated reporting.',
      price: { monthly: 29, yearly: 290, enterprise: 'Custom' },
      features: [
        'Real-time data visualization',
        'Predictive analytics & forecasting',
        'Automated report generation',
        'Custom dashboard builder',
        'API integrations (50+ platforms)',
        'Advanced data modeling',
        'White-label options',
        '24/7 priority support'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Analytics',
      rating: 4.9,
      users: '2,500+',
      link: '/zion-analytics-pro',
      popular: true
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      tagline: 'Enterprise-Grade Cybersecurity Protection',
      description: 'Comprehensive security suite protecting your digital assets with AI-powered threat detection, automated incident response, and compliance management.',
      price: { monthly: 49, yearly: 490, enterprise: 'Custom' },
      features: [
        'AI-powered threat detection',
        'Automated incident response',
        'Compliance monitoring (GDPR, HIPAA)',
        'Vulnerability scanning',
        'Security awareness training',
        'Penetration testing',
        '24/7 security monitoring',
        'Incident response team'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      rating: 4.8,
      users: '1,800+',
      link: '/zion-security-shield',
      popular: true
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      tagline: 'Secure Cloud Storage & Collaboration',
      description: 'Enterprise-grade cloud storage with advanced security, real-time collaboration, and seamless file management across all your devices.',
      price: { monthly: 9, yearly: 90, enterprise: 'Custom' },
      features: [
        'Unlimited storage capacity',
        'End-to-end encryption',
        'Real-time collaboration',
        'Version control & history',
        'Advanced sharing controls',
        'Mobile & desktop sync',
        'API access',
        '99.9% uptime SLA'
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Storage',
      rating: 4.7,
      users: '5,200+',
      link: '/zion-cloud-vault',
      popular: false
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      tagline: 'AI-Powered Content Creation Suite',
      description: 'Create engaging content at scale with AI-powered writing, design, and video tools. Perfect for marketing teams and content creators.',
      price: { monthly: 39, yearly: 390, enterprise: 'Custom' },
      features: [
        'AI content generation',
        'Multi-format support (text, video, images)',
        'Brand voice customization',
        'SEO optimization tools',
        'Content calendar management',
        'Team collaboration features',
        'Analytics & performance tracking',
        'Template library (1000+ templates)'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Content',
      rating: 4.8,
      users: '3,100+',
      link: '/zion-content-studio',
      popular: true
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      tagline: 'Universal Data Integration Platform',
      description: 'Seamlessly connect and synchronize data across all your business applications with our powerful integration platform.',
      price: { monthly: 19, yearly: 190, enterprise: 'Custom' },
      features: [
        '200+ pre-built connectors',
        'Real-time data synchronization',
        'Custom API integrations',
        'Data transformation tools',
        'Error handling & retry logic',
        'Data quality monitoring',
        'Scheduled sync options',
        'Enterprise security standards'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      category: 'Integration',
      rating: 4.6,
      users: '1,900+',
      link: '/zion-data-sync',
      popular: false
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      tagline: 'Advanced Lead Generation & Management',
      description: 'Capture, nurture, and convert leads with our comprehensive lead management platform featuring AI-powered lead scoring and automated workflows.',
      price: { monthly: 24, yearly: 240, enterprise: 'Custom' },
      features: [
        'AI-powered lead scoring',
        'Automated email sequences',
        'Landing page builder',
        'CRM integration',
        'Lead tracking & analytics',
        'A/B testing tools',
        'Social media integration',
        'Advanced segmentation'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'Marketing',
      rating: 4.7,
      users: '2,200+',
      link: '/zion-lead-magnet',
      popular: false
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      tagline: 'Comprehensive Project Management Suite',
      description: 'Streamline your project workflows with our all-in-one project management platform featuring AI-powered insights and team collaboration tools.',
      price: { monthly: 34, yearly: 340, enterprise: 'Custom' },
      features: [
        'AI-powered project insights',
        'Gantt charts & timeline views',
        'Resource management',
        'Time tracking & reporting',
        'Team collaboration tools',
        'Budget tracking',
        'Risk assessment',
        'Custom workflows'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'Productivity',
      rating: 4.8,
      users: '1,700+',
      link: '/zion-project-master',
      popular: false
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      tagline: 'Intelligent Email Marketing Platform',
      description: 'Create, send, and optimize email campaigns with our AI-powered email marketing platform featuring advanced automation and personalization.',
      price: { monthly: 14, yearly: 140, enterprise: 'Custom' },
      features: [
        'AI-powered email optimization',
        'Advanced automation workflows',
        'Personalization engine',
        'A/B testing tools',
        'Email template library',
        'Subscriber segmentation',
        'Deliverability optimization',
        'Detailed analytics & reporting'
      ],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'Marketing',
      rating: 4.5,
      users: '3,800+',
      link: '/zion-email-automation',
      popular: false
    },
    {
      id: 'zion-crm-ai',
      name: 'Zion CRM AI',
      tagline: 'AI-Enhanced Customer Relationship Management',
      description: 'Revolutionize your customer relationships with our AI-powered CRM featuring predictive analytics, automated follow-ups, and intelligent insights.',
      price: { monthly: 44, yearly: 440, enterprise: 'Custom' },
      features: [
        'AI-powered lead scoring',
        'Predictive analytics',
        'Automated follow-up sequences',
        'Customer journey mapping',
        'Sales forecasting',
        'Integration ecosystem',
        'Mobile CRM app',
        'Advanced reporting suite'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'CRM',
      rating: 4.9,
      users: '1,200+',
      link: '/zion-crm-ai',
      popular: true
    },
    {
      id: 'zion-finance-tracker',
      name: 'Zion Finance Tracker',
      tagline: 'AI-Powered Financial Management',
      description: 'Take control of your finances with our intelligent financial tracking platform featuring automated categorization, budgeting, and investment insights.',
      price: { monthly: 19, yearly: 190, enterprise: 'Custom' },
      features: [
        'AI-powered expense categorization',
        'Automated budget tracking',
        'Investment portfolio analysis',
        'Bill payment reminders',
        'Financial goal setting',
        'Tax preparation tools',
        'Multi-currency support',
        'Bank-level security'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      category: 'Finance',
      rating: 4.6,
      users: '2,800+',
      link: '/zion-finance-tracker',
      popular: false
    },
    {
      id: 'zion-social-scheduler',
      name: 'Zion Social Scheduler',
      tagline: 'AI-Powered Social Media Management',
      description: 'Manage all your social media accounts from one platform with AI-powered content suggestions, optimal posting times, and performance analytics.',
      price: { monthly: 29, yearly: 290, enterprise: 'Custom' },
      features: [
        'AI content suggestions',
        'Optimal posting time analysis',
        'Multi-platform scheduling',
        'Hashtag optimization',
        'Engagement analytics',
        'Competitor analysis',
        'Content calendar',
        'Team collaboration tools'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-sky-500 to-blue-500',
      category: 'Social Media',
      rating: 4.7,
      users: '4,100+',
      link: '/zion-social-scheduler',
      popular: false
    },
    {
      id: 'zion-inventory-pro',
      name: 'Zion Inventory Pro',
      tagline: 'Smart Inventory Management System',
      description: 'Optimize your inventory with AI-powered demand forecasting, automated reorder points, and real-time tracking across multiple locations.',
      price: { monthly: 39, yearly: 390, enterprise: 'Custom' },
      features: [
        'AI demand forecasting',
        'Automated reorder points',
        'Multi-location tracking',
        'Barcode scanning',
        'Supplier management',
        'Cost tracking & analysis',
        'Reporting & analytics',
        'Mobile inventory app'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-amber-500 to-yellow-500',
      category: 'Inventory',
      rating: 4.8,
      users: '1,500+',
      link: '/zion-inventory-pro',
      popular: false
    }
  ];

  const categories = ['All', 'Analytics', 'Security', 'Storage', 'Content', 'Integration', 'Marketing', 'Productivity', 'CRM', 'Finance', 'Social Media', 'Inventory'];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Powerful Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations. From analytics to security, we have the tools you need." />
        <meta name="keywords" content="micro saas, business software, analytics, security, cloud storage, content creation, project management, CRM, marketing automation" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SAAS solutions to transform your business operations. Start your free trial today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">12 Powerful Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, ready-to-use software solutions that transform your business operations. 
              From analytics to security, we have the tools you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    product.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {product.icon}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-semibold">{product.rating}</span>
                      </div>
                      <div className="text-gray-400 text-sm">{product.users} users</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-cyan-400 text-sm font-medium mb-2">{product.tagline}</p>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-white font-bold text-lg">${product.price.monthly}</span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      or ${product.price.yearly}/year (save 17%)
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-cyan-400 text-sm font-medium">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={product.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Start Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;