'use client';
import React from 'react';
import { Code, Zap, BarChart, Shield, Settings, Cloud } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Vue, and cutting-edge technologies',
      icon: Code,
      features: ['React/Vue/Angular', 'TypeScript', 'Responsive Design', 'Progressive Web Apps'],
      benefits: ['Modern user experience', 'Cross-browser compatibility', 'Mobile-first design']
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side applications with Node.js, Python, and cloud-native architectures',
      icon: Zap,
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Cloud Integration'],
      benefits: ['Scalable architecture', 'High performance', 'Cloud-ready']
    },
    {
      title: 'Full-Stack Solutions',
      description: 'End-to-end web applications with seamless frontend and backend integration',
      icon: BarChart,
      features: ['Full-Stack Development', 'Database Integration', 'API Development', 'Deployment'],
      benefits: ['Unified solution', 'Faster development', 'Better integration']
    },
    {
      title: 'Performance Optimization',
      description: 'Advanced optimization techniques for lightning-fast web applications',
      icon: Settings,
      features: ['Code Splitting', 'Lazy Loading', 'Caching Strategies', 'CDN Integration'],
      benefits: ['Faster load times', 'Better SEO', 'Improved user experience']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack solutions, and performance optimization. Build modern, scalable web applications."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'React', 'Node.js', 'performance optimization']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Web Development Services
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Build Modern, Scalable Web Applications
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our web development services create high-performance, scalable web applications 
              using modern technologies and best practices that drive business growth.
            </p>
          </section>

          {/* Web Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
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
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Web Application?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our web development experts help you create a modern, scalable web application that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Web Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WebDevelopmentPage;