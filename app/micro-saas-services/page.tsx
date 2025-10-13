import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  Calendar, 
  Mail, 
  Package, 
  Clock, 
  Globe, 
  Zap, 
  Brain, 
  Heart, 
  Receipt, 
  TrendingUp, 
  Cpu, 
  Database, 
  FileText, 
  Smartphone, 
  Monitor,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  Award,
  DollarSign
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaaSServicesPage = () => {
  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.',
      price: 'From $299/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Advanced filtering and segmentation',
        'Export to multiple formats',
        '24/7 monitoring and alerts'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Analytics',
      popular: true,
      link: '/zion-analytics-pro'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection, automated response, and comprehensive security monitoring for your business.',
      price: 'From $499/month',
      features: [
        'AI-powered threat detection',
        'Real-time security monitoring',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance reporting',
        'Multi-layer protection',
        'Security awareness training',
        '24/7 security operations center'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      popular: true,
      link: '/zion-security-shield'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features for modern teams.',
      price: 'From $99/month',
      features: [
        'End-to-end encryption',
        'Unlimited storage capacity',
        'Advanced file sharing',
        'Version control and history',
        'Team collaboration tools',
        'Mobile and desktop sync',
        'API integration',
        '99.9% uptime guarantee'
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Storage',
      popular: true,
      link: '/zion-cloud-vault'
    },
    {
      id: 'zion-ai-crm-pro',
      name: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive customer insights.',
      price: 'From $199/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Predictive customer insights',
        'Multi-channel communication',
        'Sales pipeline management',
        'Customer segmentation',
        'Integration with 100+ tools',
        'Advanced reporting and analytics'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'CRM',
      popular: true,
      link: '/zion-ai-crm-pro'
    },
    {
      id: 'zion-ai-marketing-automation-pro',
      name: 'Zion AI Marketing Automation Pro',
      description: 'AI-powered marketing automation with predictive content generation, multi-channel orchestration, and intelligent campaign optimization.',
      price: 'From $149/month',
      features: [
        'AI content generation',
        'Multi-channel campaign orchestration',
        'Predictive audience targeting',
        'Automated A/B testing',
        'Lead nurturing workflows',
        'Social media automation',
        'Email marketing automation',
        'Performance analytics and optimization'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'Marketing',
      popular: true,
      link: '/zion-ai-marketing-automation-pro'
    },
    {
      id: 'zion-ai-project-manager-pro',
      name: 'Zion AI Project Manager Pro',
      description: 'AI-powered project management with intelligent task prioritization, resource allocation, and automated progress tracking.',
      price: 'From $99/month',
      features: [
        'AI task prioritization',
        'Intelligent resource allocation',
        'Automated progress tracking',
        'Risk prediction and mitigation',
        'Team collaboration tools',
        'Time tracking and reporting',
        'Integration with popular tools',
        'Custom workflow automation'
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      category: 'Project Management',
      popular: true,
      link: '/zion-ai-project-manager-pro'
    },
    {
      id: 'zion-ai-email-analyzer',
      name: 'Zion AI Email Analyzer',
      description: 'Intelligent email analysis tool that categorizes, prioritizes, and provides insights on your email communications using advanced AI.',
      price: 'From $79/month',
      features: [
        'AI email categorization',
        'Sentiment analysis',
        'Priority scoring',
        'Spam and phishing detection',
        'Email response suggestions',
        'Communication analytics',
        'Team email insights',
        'Integration with major email providers'
      ],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'Communication',
      popular: false,
      link: '/zion-ai-email-analyzer'
    },
    {
      id: 'zion-smart-inventory-optimizer',
      name: 'Zion Smart Inventory Optimizer',
      description: 'AI-powered inventory management that predicts demand, optimizes stock levels, and reduces waste through intelligent forecasting.',
      price: 'From $129/month',
      features: [
        'AI demand forecasting',
        'Automated reorder points',
        'Waste reduction optimization',
        'Multi-location inventory tracking',
        'Supplier performance analytics',
        'Seasonal trend analysis',
        'Integration with POS systems',
        'Real-time inventory alerts'
      ],
      icon: <Package className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      category: 'Inventory',
      popular: false,
      link: '/zion-smart-inventory-optimizer'
    },
    {
      id: 'zion-ai-customer-sentiment-tracker',
      name: 'Zion AI Customer Sentiment Tracker',
      description: 'Real-time customer sentiment analysis across all channels with automated alerts and actionable insights for improving customer experience.',
      price: 'From $89/month',
      features: [
        'Real-time sentiment analysis',
        'Multi-channel monitoring',
        'Automated alert system',
        'Trend analysis and reporting',
        'Customer feedback categorization',
        'Competitor sentiment tracking',
        'Integration with social media',
        'Custom dashboard and reports'
      ],
      icon: <Heart className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'Customer Experience',
      popular: false,
      link: '/zion-ai-customer-sentiment-tracker'
    },
    {
      id: 'zion-smart-expense-categorizer',
      name: 'Zion Smart Expense Categorizer',
      description: 'AI-powered expense management that automatically categorizes, tracks, and analyzes business expenses with intelligent insights.',
      price: 'From $59/month',
      features: [
        'AI expense categorization',
        'Receipt scanning and OCR',
        'Automated expense reporting',
        'Policy compliance checking',
        'Spending pattern analysis',
        'Budget tracking and alerts',
        'Integration with accounting software',
        'Mobile expense capture'
      ],
      icon: <Receipt className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'Finance',
      popular: false,
      link: '/zion-smart-expense-categorizer'
    },
    {
      id: 'zion-ai-content-studio',
      name: 'Zion AI Content Studio',
      description: 'Comprehensive content creation platform with AI-powered writing, design, and optimization tools for all your marketing needs.',
      price: 'From $179/month',
      features: [
        'AI content generation',
        'Multi-format content creation',
        'Brand voice consistency',
        'SEO optimization',
        'Content calendar management',
        'Collaboration tools',
        'Performance analytics',
        'Template library'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'Content',
      popular: false,
      link: '/zion-ai-content-studio'
    },
    {
      id: 'zion-ai-data-sync',
      name: 'Zion AI Data Sync',
      description: 'Intelligent data synchronization platform that automatically connects and syncs data across all your business applications.',
      price: 'From $119/month',
      features: [
        'Automated data synchronization',
        'Real-time data updates',
        'Data transformation and mapping',
        'Error detection and correction',
        'Multi-platform integration',
        'Data quality monitoring',
        'Custom sync rules',
        'Comprehensive logging and reporting'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'Integration',
      popular: false,
      link: '/zion-ai-data-sync'
    }
  ];

  const categories = [
    { name: 'All', count: microSaasServices.length },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length },
    { name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length },
    { name: 'Storage', count: microSaasServices.filter(s => s.category === 'Storage').length },
    { name: 'CRM', count: microSaasServices.filter(s => s.category === 'CRM').length },
    { name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length },
    { name: 'Project Management', count: microSaasServices.filter(s => s.category === 'Project Management').length },
    { name: 'Communication', count: microSaasServices.filter(s => s.category === 'Communication').length },
    { name: 'Inventory', count: microSaasServices.filter(s => s.category === 'Inventory').length },
    { name: 'Customer Experience', count: microSaasServices.filter(s => s.category === 'Customer Experience').length },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length },
    { name: 'Content', count: microSaasServices.filter(s => s.category === 'Content').length },
    { name: 'Integration', count: microSaasServices.filter(s => s.category === 'Integration').length }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions"
        description="Discover our comprehensive suite of micro SAAS services designed to streamline your business operations. From AI analytics to project management, we have the tools you need."
        keywords="micro SAAS, business software, AI tools, project management, analytics, CRM, marketing automation, cloud storage, cybersecurity"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From analytics to project management, we have the tools you need to succeed.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our extensive collection of AI-powered micro SAAS solutions designed to 
              streamline your business operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400">
                    {service.category}
                  </span>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-gray-400">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaSServicesPage;