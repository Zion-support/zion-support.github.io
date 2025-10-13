import React from 'react';
import { Code, Globe, Smartphone, Monitor, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const WebDevelopmentPage = () => {
  const services = [
    {
      title: 'Custom Web Applications',
      description: 'Build scalable, high-performance web applications tailored to your business needs',
      features: ['React/Next.js Development', 'Node.js Backend', 'Database Design', 'API Integration'],
      icon: <Code className="w-8 h-8" />,
      price: 'From $5,000'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Create powerful online stores with advanced features and seamless user experience',
      features: ['Shopping Cart Integration', 'Payment Processing', 'Inventory Management', 'Order Tracking'],
      icon: <Globe className="w-8 h-8" />,
      price: 'From $8,000'
    },
    {
      title: 'Mobile-Responsive Design',
      description: 'Ensure your website looks perfect on all devices with responsive design principles',
      features: ['Mobile-First Approach', 'Cross-Browser Compatibility', 'Performance Optimization', 'SEO Ready'],
      icon: <Smartphone className="w-8 h-8" />,
      price: 'From $3,000'
    },
    {
      title: 'Progressive Web Apps',
      description: 'Build app-like experiences that work offline and provide native app functionality',
      features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Fast Loading'],
      icon: <Monitor className="w-8 h-8" />,
      price: 'From $6,000'
    }
  ];

  const technologies = [
    'React & Next.js',
    'Node.js & Express',
    'TypeScript',
    'MongoDB & PostgreSQL',
    'AWS & Azure',
    'Docker & Kubernetes'
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan'
    },
    {
      step: '2',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your project'
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'Build your application with rigorous testing at every step'
    },
    {
      step: '4',
      title: 'Deployment & Support',
      description: 'Launch your project and provide ongoing maintenance and support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development - Zion Tech Group | Custom Web Solutions"
        description="Professional web development services including custom web applications, e-commerce solutions, and mobile-responsive design. Transform your digital presence with our expert team."
        keywords="web development, custom web applications, e-commerce, responsive design, React, Node.js, web solutions"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Web Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your digital presence with our expert web development services. 
            We create custom web applications that drive business growth and deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              to="/contact"
              variant="primary"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              to="/demo"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View Portfolio
            </FuturisticButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions designed to meet your business objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-center mb-4">
                  <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                </div>
                
                <FuturisticButton
                  to="/contact"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build modern, scalable web applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              to="/contact"
              variant="primary"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              to="/case-studies"
              variant="outline"
              size="lg"
              icon={<Star className="w-5 h-5" />}
            >
              View Case Studies
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;