import React from 'react';
import { CheckCircle, Zap, Shield, Globe, Brain, Server, Cloud, Database, Lock, BarChart3, Users, Settings, DollarSign, Star, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool with SEO optimization and brand voice matching.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content analytics'],
      pricing: 'Starting at $29/month',
      link: '/micro-saas-services/ai-content-writer'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      pricing: 'Starting at $49/month',
      link: '/micro-saas-services/ai-analytics-dashboard'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead scoring and qualification with CRM integration and follow-up automation.',
      features: ['Lead scoring', 'CRM integration', 'Email automation', 'Performance tracking'],
      pricing: 'Starting at $39/month',
      link: '/micro-saas-services/ai-lead-generation'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and priority handling.',
      features: ['Smart responses', 'Email scheduling', 'Priority filtering', 'Template library'],
      pricing: 'Starting at $19/month',
      link: '/micro-saas-services/ai-email-assistant'
    }
  ];

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration with 99.9% uptime guarantee and 24/7 monitoring.',
      features: ['AWS/Azure/GCP migration', 'Cost optimization', 'Security compliance', 'Disaster recovery'],
      pricing: 'Custom pricing based on infrastructure',
      link: '/it-services/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including penetration testing and compliance auditing.',
      features: ['Penetration testing', 'Security audits', 'Compliance management', 'Incident response'],
      pricing: 'Starting at $2,500/month',
      link: '/it-services/cybersecurity-audit'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'IT Infrastructure Design',
      description: 'Scalable infrastructure solutions with high availability and performance optimization.',
      features: ['Network design', 'Server optimization', 'Load balancing', 'Monitoring setup'],
      pricing: 'Starting at $5,000/project',
      link: '/it-services/infrastructure-design'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Expert database administration with backup, recovery, and performance tuning.',
      features: ['Database optimization', 'Backup strategies', 'Performance tuning', 'Security hardening'],
      pricing: 'Starting at $1,500/month',
      link: '/it-services/database-management'
    }
  ];

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, recommendation systems, and automation.',
      features: ['Custom model development', 'Data preprocessing', 'Model training', 'API integration'],
      pricing: 'Starting at $10,000/project',
      link: '/ai-services/machine-learning'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline business processes and reduce manual work.',
      features: ['Workflow automation', 'RPA implementation', 'Integration services', 'Monitoring'],
      pricing: 'Starting at $3,000/month',
      link: '/ai-services/process-automation'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Advanced analytics solutions for forecasting, trend analysis, and business intelligence.',
      features: ['Forecasting models', 'Trend analysis', 'Risk assessment', 'Custom dashboards'],
      pricing: 'Starting at $5,000/month',
      link: '/ai-services/predictive-analytics'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Customer Experience AI',
      description: 'AI-powered customer service solutions with chatbots and sentiment analysis.',
      features: ['Chatbot development', 'Sentiment analysis', 'Customer insights', 'Support automation'],
      pricing: 'Starting at $2,500/month',
      link: '/ai-services/customer-experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and micro SAAS services. From cloud migration to AI solutions, we help businesses transform with cutting-edge technology." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud migration, cybersecurity, machine learning, automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From micro SAAS solutions to enterprise AI implementations, we provide end-to-end technology services to accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Micro SAAS Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Affordable, powerful tools designed for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold text-sm mb-4">{service.pricing}</div>
                  <Link 
                    to={service.link}
                    className="text-white text-sm hover:text-blue-400 transition-colors flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Services & Solutions</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enterprise-grade infrastructure and support services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold text-sm mb-4">{service.pricing}</div>
                  <Link 
                    to={service.link}
                    className="text-white text-sm hover:text-blue-400 transition-colors flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Services & Solutions</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge artificial intelligence to transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold text-sm mb-4">{service.pricing}</div>
                  <Link 
                    to={service.link}
                    className="text-white text-sm hover:text-blue-400 transition-colors flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how our services can accelerate your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;