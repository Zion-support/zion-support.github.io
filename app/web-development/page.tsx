import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Globe, Smartphone, Zap, Shield, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      name: 'Custom Web Applications',
      description: 'Build powerful, scalable web applications tailored to your business needs.',
      icon: <Code className="w-8 h-8" />,
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Development'],
      price: 'From $5,000'
    },
    {
      name: 'E-commerce Solutions',
      description: 'Create stunning online stores with advanced shopping cart and payment integration.',
      icon: <Globe className="w-8 h-8" />,
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
      price: 'From $3,000'
    },
    {
      name: 'Mobile-First Design',
      description: 'Responsive websites that look perfect on all devices and screen sizes.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Responsive Design', 'Mobile Optimization', 'Touch-Friendly UI', 'Fast Loading'],
      price: 'From $2,000'
    },
    {
      name: 'Performance Optimization',
      description: 'Speed up your website with advanced optimization techniques and best practices.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Speed Optimization', 'SEO Enhancement', 'Image Optimization', 'Caching'],
      price: 'From $1,500'
    },
    {
      name: 'Security Implementation',
      description: 'Protect your website with enterprise-grade security measures and monitoring.',
      icon: <Shield className="w-8 h-8" />,
      features: ['SSL Certificates', 'Security Headers', 'Vulnerability Scanning', 'Monitoring'],
      price: 'From $1,000'
    },
    {
      name: 'Analytics Integration',
      description: 'Track and analyze your website performance with comprehensive analytics.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Google Analytics', 'Custom Dashboards', 'User Tracking', 'Conversion Analysis'],
      price: 'From $500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development Services - Zion Tech Group | Custom Web Solutions"
        description="Professional web development services including custom applications, e-commerce solutions, and mobile-first responsive design."
        keywords="web development, custom web applications, e-commerce, responsive design, web optimization"
        canonical="https://ziontechgroup.com/web-development"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Web Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your digital presence with our comprehensive web development services. 
            From custom applications to e-commerce solutions, we build websites that drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105">
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert developers bring your vision to life with cutting-edge technology and modern design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/portfolio"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              View Our Work
              <Globe className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
