import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Mail, 
  MessageSquare, 
  Eye, 
  Settings, 
  Database, 
  Globe, 
  Smartphone,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-chatbot-enterprise',
      title: 'Enterprise AI Chatbot',
      description: 'Advanced conversational AI for customer service and internal operations with natural language processing.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard', '24/7 availability'],
      price: '$199/month',
      link: '/ai-chatbot-enterprise',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      category: 'Conversational AI',
      popular: true
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Solutions',
      description: 'Image recognition and analysis for various business applications including quality control and security.',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Quality inspection', 'Real-time processing'],
      price: '$149/month',
      link: '/ai-computer-vision',
      icon: <Eye className="w-8 h-8 text-green-500" />,
      category: 'Computer Vision',
      popular: false
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation for repetitive business processes and workflows with machine learning optimization.',
      features: ['Workflow automation', 'RPA integration', 'Process optimization', 'Custom solutions', 'Performance monitoring'],
      price: '$299/month',
      link: '/ai-automation',
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      category: 'Process Automation',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights for data-driven decisions.',
      features: ['Real-time monitoring', 'Predictive analytics', 'Custom dashboards', 'Automated reports', 'Data visualization'],
      price: '$49/month',
      link: '/ai-analytics-dashboard',
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      category: 'Analytics',
      popular: false
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice matching', 'Content scheduling', 'Plagiarism detection'],
      price: '$29/month',
      link: '/ai-content-generator',
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      category: 'Content Creation',
      popular: true
    },
    {
      id: 'ai-cybersecurity-monitor',
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and security monitoring with real-time alerts and automated responses.',
      features: ['Threat detection', 'Real-time monitoring', 'Automated responses', 'Compliance reporting', 'Incident response'],
      price: '$79/month',
      link: '/ai-cybersecurity-monitor',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      category: 'Cybersecurity',
      popular: false
    },
    {
      id: 'ai-crm-assistant',
      title: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with automated follow-ups and lead scoring.',
      features: ['Lead scoring', 'Automated follow-ups', 'Customer insights', 'Sales forecasting', 'Integration capabilities'],
      price: '$39/month',
      link: '/ai-crm-assistant',
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      category: 'CRM',
      popular: false
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization and automated optimization for better engagement.',
      features: ['Personalization', 'A/B testing', 'Automated sequences', 'Performance analytics', 'Segmentation'],
      price: '$35/month',
      link: '/ai-email-marketing',
      icon: <Mail className="w-8 h-8 text-pink-500" />,
      category: 'Marketing',
      popular: false
    },
    {
      id: 'ai-document-processor',
      title: 'AI Document Processor',
      description: 'Automated document processing with OCR, data extraction, and intelligent categorization.',
      features: ['OCR technology', 'Data extraction', 'Smart categorization', 'Batch processing', 'API integration'],
      price: '$45/month',
      link: '/ai-document-processor',
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      category: 'Document Processing',
      popular: false
    }
  ];

  const enterpriseSolutions = [
    {
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business needs and requirements.',
      price: 'Starting at $15,000',
      features: ['Custom model training', 'API development', 'Integration support', 'Ongoing maintenance'],
      icon: <Brain className="w-12 h-12 text-blue-500" />
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Expert guidance on AI implementation strategy and digital transformation roadmap.',
      price: 'Starting at $200/hour',
      features: ['Strategy development', 'Technology assessment', 'Implementation planning', 'Training & support'],
      icon: <Globe className="w-12 h-12 text-green-500" />
    },
    {
      title: 'AI Integration Services',
      description: 'Seamless integration of AI solutions into your existing systems and workflows.',
      price: 'Starting at $5,000',
      features: ['System integration', 'Data migration', 'API development', 'Testing & validation'],
      icon: <Settings className="w-12 h-12 text-purple-500" />
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
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, computer vision, automation, analytics, and custom AI development solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, computer vision, AI automation, AI analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get AI Consultation
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Services & Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive artificial intelligence solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
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

      {/* Enterprise Solutions */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Custom AI development and consulting services for large-scale implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">{solution.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{solution.description}</p>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">{solution.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`mailto:${contactInfo.email}?subject=Inquiry about ${solution.title}`}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver cutting-edge AI solutions with proven results and exceptional support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Implementation</h3>
              <p className="text-gray-300">Quick deployment with minimal disruption to your operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all AI solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-300">Tailored AI solutions designed for your specific needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can revolutionize your business operations and drive growth.
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

export default AIServicesPage;