import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Brain, Code, Smartphone, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and data-driven insights.',
      services: ['AI Content Generation', 'Chatbot Development', 'Predictive Analytics', 'Computer Vision'],
      link: '/ai-services',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure for your business.',
      services: ['Cloud Migration', 'Infrastructure Setup', 'Security Solutions', 'Cost Optimization'],
      link: '/cloud-services',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and monitoring.',
      services: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management'],
      link: '/cybersecurity',
      color: 'from-red-600 to-pink-600'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions for ultra-fast and reliable networks.',
      services: ['Network Design', 'Infrastructure Setup', 'IoT Integration', 'Edge Computing'],
      link: '/5g-implementation',
      color: 'from-purple-600 to-violet-600'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your business needs.',
      services: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      link: '/custom-development',
      color: 'from-orange-600 to-yellow-600'
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics solutions.',
      services: ['Data Warehousing', 'Business Intelligence', 'Predictive Modeling', 'Custom Dashboards'],
      link: '/data-analytics',
      color: 'from-cyan-600 to-blue-600'
    }
  ];

  const microSAAS = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'AI Task Manager',
      pricing: '$19/month',
      description: 'Intelligent task management with AI prioritization'
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: 'AI Expense Tracker',
      pricing: '$15/month',
      description: 'Automated expense tracking with receipt scanning'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'AI Password Manager',
      pricing: '$12/month',
      description: 'Secure password management with AI security'
    },
    {
      icon: <Code className="w-6 h-6 text-orange-500" />,
      title: 'AI Invoice Generator',
      pricing: '$25/month',
      description: 'Automated invoice creation with AI templates'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and current infrastructure to understand your requirements.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a customized solution that aligns with your business goals and budget.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your ongoing operations.'
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing support and optimization to ensure your solution continues to deliver value.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cloud services, cybersecurity, 5G implementation, and custom development. Transform your business today." />
        <meta name="keywords" content="technology services, AI solutions, cloud services, cybersecurity, 5G implementation, custom development, data analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
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
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Service Categories</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From AI and cloud solutions to cybersecurity and custom development, we offer comprehensive technology services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={category.link}
                  className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Micro SAAS Solutions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Affordable, specialized applications designed to solve specific business challenges with AI intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {microSAAS.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{app.title}</h3>
                    <p className="text-blue-400 font-medium">{app.pricing}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/micro-saas-services" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center"
            >
              View All Micro SAAS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for your investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and discover how our technology solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore AI Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;