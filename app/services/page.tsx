import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Cloud, Code, Database, Network, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ServicesPage = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: Code,
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization']
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime.',
      icon: Cloud,
      features: ['AWS & Azure', 'Data Migration', 'Security & Compliance']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business.',
      icon: Shield,
      features: ['Threat Detection', 'Security Audits', 'Incident Response']
    },
    {
      id: 'database-management',
      title: 'Database Management',
      description: 'Optimized database solutions for better performance and reliability.',
      icon: Database,
      features: ['Performance Tuning', 'Backup & Recovery', 'Data Security']
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      description: 'Robust network solutions for seamless connectivity.',
      icon: Network,
      features: ['Network Design', 'Security Implementation', 'Monitoring & Support']
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: Smartphone,
      features: ['iOS & Android', 'Cross-platform', 'App Store Optimization']
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including web development, cloud migration, cybersecurity, and infrastructure solutions."
        keywords="IT services, web development, cloud migration, cybersecurity, database management, network infrastructure"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions designed to modernize your business infrastructure and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/${service.id}`}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300">We analyze your requirements and current infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-300">We create a detailed roadmap for your project</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">We execute the solution with regular updates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">4</div>
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <p className="text-gray-300">We provide ongoing maintenance and support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT services can help your business achieve its technology goals.
          </p>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Shield className="w-5 h-5" />
            Start Your IT Transformation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
