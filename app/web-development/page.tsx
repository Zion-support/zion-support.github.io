'use client';
import React from 'react';
import { Code, Globe, Zap, Shield, BarChart, Settings, Smartphone, Palette } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Vue, and Angular',
      icon: Code,
      features: ['React/Vue/Angular', 'Responsive Design', 'Progressive Web Apps', 'Performance Optimization']
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side applications and APIs using Node.js, Python, and more',
      icon: Settings,
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Integration']
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend and database',
      icon: Globe,
      features: ['End-to-End Development', 'Database Design', 'API Development', 'Deployment']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Custom e-commerce platforms and online store development',
      icon: BarChart,
      features: ['Custom Stores', 'Payment Integration', 'Inventory Management', 'Analytics']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Build modern, scalable web applications."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'web applications']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Web Development
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Build Modern Web Applications
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Professional web development services for modern, scalable applications. 
              From frontend to backend, we create web solutions that drive business success.
            </p>
          </section>

          {/* Web Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Web Development?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">High Performance</h3>
                <p className="text-gray-300">Optimized web applications that load fast and perform smoothly across all devices.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Responsive Design</h3>
                <p className="text-gray-300">Mobile-first design that looks great on all screen sizes and devices.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Secure & Scalable</h3>
                <p className="text-gray-300">Enterprise-grade security and architecture that scales with your business.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Web Application?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our web development experts help you create a powerful, modern web application. 
              Get a free consultation and discover how we can bring your web vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WebDevelopmentPage;