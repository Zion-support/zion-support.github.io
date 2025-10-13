import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight, Globe, Smartphone, Database, Shield, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const WebDevelopmentPage = () => {
  const webServices = [
    {
      name: 'Custom Web Applications',
      description: 'Build scalable, high-performance web applications tailored to your business needs',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Responsive Web Design',
      description: 'Create beautiful, mobile-first websites that work perfectly on all devices',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'E-commerce Solutions',
      description: 'Powerful online stores with advanced features and seamless user experience',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Database Integration',
      description: 'Secure and efficient database solutions for your web applications',
      icon: <Database className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Security Implementation',
      description: 'Comprehensive security measures to protect your web applications',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Performance Optimization',
      description: 'Fast-loading websites optimized for speed and user experience',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Web Development Services - Custom Websites & Applications | Zion Tech Group"
        description="Professional web development services including custom websites, web applications, e-commerce solutions, and more. Modern, responsive, and secure web solutions."
        keywords="web development, custom websites, web applications, responsive design, e-commerce, database integration, web security"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Code className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Professional Web Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Web Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Create stunning, high-performance websites and web applications that drive business growth. 
            From concept to deployment, we deliver exceptional web solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              View Services
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive web development solutions designed to meet your business objectives and exceed user expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Next Web Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our experienced web development team bring your vision to life. 
            Get started with a free consultation and project estimate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/services"
              variant="outline"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              View All Services
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;