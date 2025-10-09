'use client';
import React from 'react';
import { Code, Globe, Zap, Shield, BarChart, Settings, Cpu, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with React, Vue, and Angular',
      icon: Code,
      features: ['React/Vue/Angular', 'TypeScript', 'Responsive design', 'Performance optimization']
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side applications and APIs',
      icon: Cpu,
      features: ['Node.js/Python/Java', 'RESTful APIs', 'Microservices', 'Database integration']
    },
    {
      title: 'Full-Stack Development',
      description: 'End-to-end web application development',
      icon: Globe,
      features: ['Complete solutions', 'Database design', 'API development', 'Deployment']
    },
    {
      title: 'E-commerce Development',
      description: 'Custom e-commerce platforms and online stores',
      icon: BarChart,
      features: ['Shopping cart', 'Payment integration', 'Inventory management', 'Order processing']
    }
  ];

  const technologies = [
    {
      title: 'Frontend Technologies',
      description: 'React, Vue.js, Angular, TypeScript, Next.js',
      icon: Code,
      useCase: 'User interface development'
    },
    {
      title: 'Backend Technologies',
      description: 'Node.js, Python, Java, PHP, .NET',
      icon: Cpu,
      useCase: 'Server-side development'
    },
    {
      title: 'Databases',
      description: 'MySQL, PostgreSQL, MongoDB, Redis',
      icon: Database,
      useCase: 'Data storage and management'
    },
    {
      title: 'Cloud Platforms',
      description: 'AWS, Azure, Google Cloud, Vercel',
      icon: Globe,
      useCase: 'Scalable deployment'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern web applications with cutting-edge technologies."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'web applications']}
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
              Web Development
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Modern Web Applications and Digital Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Create powerful web applications that drive business growth. From frontend to backend, 
              we build modern, scalable web solutions using cutting-edge technologies and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Web Development Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Web Development Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Technologies We Use
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{tech.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{tech.description}</p>
                  <div className="text-cyan-400 font-semibold text-xs">{tech.useCase}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Web Development Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Basic Website</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$1,200<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Simple website</li>
                  <li>Basic UI/UX design</li>
                  <li>Responsive design</li>
                  <li>Content management</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-cyan-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional Web App</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$2,999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced web application</li>
                  <li>Custom UI/UX design</li>
                  <li>Backend development</li>
                  <li>Database integration</li>
                  <li>API development</li>
                  <li>Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise Platform</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Complex web platform</li>
                  <li>Microservices architecture</li>
                  <li>Advanced features</li>
                  <li>Custom integrations</li>
                  <li>White-label solutions</li>
                  <li>Dedicated team</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Web Application?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our web development experts help you create a powerful online presence.
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