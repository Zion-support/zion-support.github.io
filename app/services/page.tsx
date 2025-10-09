import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, CheckCircle, ArrowRight, Globe, Database, Smartphone, Settings, Lock, TrendingUp, Star, Award, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      category: 'AI Solutions',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence services to automate and optimize your business processes.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Process Automation'
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      category: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Scalable and secure cloud solutions to support your growing business needs.',
      features: [
        'AWS/Azure/GCP Migration',
        'DevOps Implementation',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Cloud Security',
        'Cost Optimization'
      ],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Management',
        'Incident Response',
        'Penetration Testing',
        'Security Training'
      ],
      color: 'from-red-400 to-pink-500'
    },
    {
      category: 'Custom Development',
      icon: Code,
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'Database Design',
        'System Integration',
        'Legacy Modernization'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      category: 'Data Analytics',
      icon: BarChart,
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'Real-time Analytics',
        'Machine Learning',
        'Data Warehousing',
        'Predictive Modeling'
      ],
      color: 'from-purple-400 to-violet-500'
    },
    {
      category: 'IT Consulting',
      icon: Users,
      description: 'Strategic IT consulting to align technology with your business objectives.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'IT Assessment',
        'Project Management',
        'Change Management',
        'Training & Support'
      ],
      color: 'from-orange-400 to-amber-500'
    }
  ];

  const aiServices = [
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'IT Support', url: '/it-support', description: 'Comprehensive IT support' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT consulting' }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services to transform your business operations." />
        <meta name="keywords" content="AI services, IT consulting, cloud infrastructure, cybersecurity, custom development, data analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT services to transform your business operations and drive growth.
              </p>
            </div>
            
            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.category}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-gray-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of AI-powered solutions designed to revolutionize your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <ArrowRight className="w-5 h-5 text-cyan-400 mt-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services to keep your technology infrastructure running smoothly and securely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <ArrowRight className="w-5 h-5 text-cyan-400 mt-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;