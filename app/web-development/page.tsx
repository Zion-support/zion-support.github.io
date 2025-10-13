import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { ArrowRight, IconComponent, Star, Star, Star, Star, Star, CheckCircle, Clock, ArrowRight, Code } from 'lucide-react';


const WebDevelopmentPage = () => {
  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const services = [
    {
      id: 'frontend-development',
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Vue, and Angular.',
      icon: Code,
      features: ['React Applications', 'Vue.js Development', 'Angular Solutions', 'Progressive Web Apps'],
      price: 'Starting at $2,500'
    },
    {
      id: 'backend-development',
      title: 'Backend Development',
      description: 'Robust server-side applications and APIs for your business needs.',
      icon: Database,
      features: ['Node.js APIs', 'Python/Django', 'PHP/Laravel', 'Microservices'],
      price: 'Starting at $3,000'
    },
    {
      id: 'full-stack-development',
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend and everything in between.',
      icon: Globe,
      features: ['End-to-End Solutions', 'Database Design', 'API Integration', 'Deployment'],
      price: 'Starting at $5,000'
    },
    {
      id: 'mobile-web-apps',
      title: 'Mobile Web Apps',
      description: 'Cross-platform mobile applications that work on all devices.',
      icon: Smartphone,
      features: ['Responsive Design', 'Mobile Optimization', 'Touch Interfaces', 'Offline Support'],
      price: 'Starting at $3,500'
    },
    {
      id: 'e-commerce-solutions',
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management.',
      icon: Shield,
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Security'],
      price: 'Starting at $4,500'
    },
    {
      id: 'web-optimization',
      title: 'Web Optimization',
      description: 'Performance optimization and SEO improvements for existing websites.',
      icon: Zap,
      features: ['Speed Optimization', 'SEO Enhancement', 'Security Updates', 'Analytics'],
      price: 'Starting at $1,500'
    }
  ];

  
  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and mobile web applications."
        keywords="web development, frontend development, backend development, full-stack development, mobile web apps, e-commerce"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional web development services to bring your ideas to life with modern, scalable, and secure web applications.
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
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="w-12 h-12 text-blue-400" />
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature.title}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-blue-400">{service.price}</span>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>2-8 weeks</span>
                  </div>
                </div>
                
                <Link 
                  to={`/${service.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Web Application?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom web solution that meets your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              Start Your Project
            </Link>
            <Link 
              to="/pricing" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;