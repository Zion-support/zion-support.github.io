import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Cloud, 
  Database, 
  Smartphone, 
  Lock, 
  BarChart3, 
  Users, 
  Settings, 
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Clock
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice matching', 'Content scheduling'],
      price: '$29/month',
      link: '/ai-content-generator',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      category: 'AI Services'
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      features: ['Real-time monitoring', 'Predictive analytics', 'Custom dashboards', 'Automated reports'],
      price: '$49/month',
      link: '/ai-analytics-dashboard',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      category: 'AI Services'
    },
    {
      id: 'ai-crm-assistant',
      title: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with automated follow-ups and lead scoring.',
      features: ['Lead scoring', 'Automated follow-ups', 'Customer insights', 'Sales forecasting'],
      price: '$39/month',
      link: '/ai-crm-assistant',
      icon: <Users className="w-8 h-8 text-purple-500" />,
      category: 'AI Services'
    },
    {
      id: 'ai-cybersecurity-monitor',
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and security monitoring with real-time alerts.',
      features: ['Threat detection', 'Real-time monitoring', 'Automated responses', 'Compliance reporting'],
      price: '$79/month',
      link: '/ai-cybersecurity-monitor',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      category: 'Security'
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization and automated optimization.',
      features: ['Personalization', 'A/B testing', 'Automated sequences', 'Performance analytics'],
      price: '$35/month',
      link: '/ai-email-marketing',
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      category: 'Marketing'
    },
    {
      id: 'ai-document-processor',
      title: 'AI Document Processor',
      description: 'Automated document processing with OCR, data extraction, and intelligent categorization.',
      features: ['OCR technology', 'Data extraction', 'Smart categorization', 'Batch processing'],
      price: '$45/month',
      link: '/ai-document-processor',
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      category: 'Productivity'
    }
  ];

  const itServices = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      features: ['Zero downtime migration', 'Security enhancement', 'Cost optimization', '24/7 support'],
      price: 'Starting at $2,500',
      link: '/cloud-migration',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      category: 'Cloud Services'
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Audit & Assessment',
      description: 'Comprehensive security assessment and vulnerability testing for your infrastructure.',
      features: ['Vulnerability assessment', 'Penetration testing', 'Compliance audit', 'Security recommendations'],
      price: 'Starting at $1,500',
      link: '/it-services/cybersecurity-audit',
      icon: <Lock className="w-8 h-8 text-red-500" />,
      category: 'Security'
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX design.',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'Modern UI/UX', 'App store optimization'],
      price: 'Starting at $5,000',
      link: '/mobile-development',
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      category: 'Development'
    },
    {
      id: 'database-optimization',
      title: 'Database Optimization',
      description: 'Performance tuning and optimization for existing database systems.',
      features: ['Performance tuning', 'Query optimization', 'Index optimization', 'Monitoring setup'],
      price: 'Starting at $1,200',
      link: '/database-management',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      category: 'Database'
    }
  ];

  const aiServices = [
    {
      id: 'ai-chatbot-enterprise',
      title: 'Enterprise AI Chatbot',
      description: 'Advanced conversational AI for customer service and internal operations.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      price: '$199/month',
      link: '/ai-chatbot-enterprise',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      category: 'AI Solutions'
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Solutions',
      description: 'Image recognition and analysis for various business applications.',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Quality inspection'],
      price: '$149/month',
      link: '/ai-computer-vision',
      icon: <Globe className="w-8 h-8 text-green-500" />,
      category: 'AI Solutions'
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation for repetitive business processes and workflows.',
      features: ['Workflow automation', 'RPA integration', 'Process optimization', 'Custom solutions'],
      price: '$299/month',
      link: '/ai-automation',
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      category: 'AI Solutions'
    }
  ];

  const contactInfo = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SAAS solutions, cloud migration, cybersecurity, and digital transformation services." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud migration, cybersecurity, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive AI and IT services designed to accelerate your digital transformation and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Micro SAAS Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Affordable, scalable software solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.category}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Services & Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional IT services to optimize your infrastructure and operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.category}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge artificial intelligence solutions for enterprise applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.category}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and get a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.phone}
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
              <div className="mt-6 text-white/80">
                <p className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;