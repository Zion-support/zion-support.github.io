import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Code, Shield, Smartphone, BarChart3, Database } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence services for your business',
      link: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      link: '/cloud-infrastructure',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'Cloud Migration']
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your specifications',
      link: '/web-development',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions',
      link: '/cybersecurity-solutions',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      link: '/mobile-development',
      features: ['iOS Apps', 'Android Apps', 'React Native', 'Flutter']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights',
      link: '/data-analytics-bi',
      features: ['Business Intelligence', 'Data Visualization', 'ETL Processes', 'Real-time Analytics']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud infrastructure, custom development, cybersecurity, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and stay ahead of the competition.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}