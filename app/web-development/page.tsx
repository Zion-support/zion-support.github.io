'use client';
import React from 'react';
import { Code, Smartphone, Globe, Database, Shield, BarChart, Users, CheckCircle, ArrowRight, Cloud, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
const $1: React.FC = () => {;
  const webServices = [,;
    {,;
      title: 'Frontend Development',;
      description: 'Modern, responsive web applications with cutting-edge technologies',;
      icon: Code,;
      price: '$1,200/month',;
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],;
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],;}
      color: 'text-blue-400'},;
    {;
      title: 'Backend Development',;
      description: 'Scalable server-side solutions and API development',;
      icon: Database,;
      price: '$1,500/month',;
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],;
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],;}
      color: 'text-green-400'},;
    {;
      title: 'Full-Stack Development',;
      description: 'Complete web solutions from frontend to backend',;
      icon: Globe,;
      price: '$2,200/month',;
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],;
      benefits: ['Unified solution', 'Faster development', 'Better performance'],;}
      color: 'text-purple-400'},;
    {;
      title: 'E-commerce Development',;
      description: 'Custom e-commerce platforms and online stores',;
      icon: Smartphone,;
      price: '$1,800/month',;
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],;
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],;}
      color: 'text-orange-400'},;
    {;
      title: 'Maintenance & Support',;
      description: 'Ongoing maintenance and support for your web applications',;
      icon: Users,;
      price: '$500/month',;
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],;}
      color: 'text-gray-400'}
  ];

        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'React', 'Node.js']}
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
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}

                        ))}
                      </ul>
                    </div>
                  )}

          {/* Technologies */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-300">{tech.description}</p>
                </div>
              ))}

          {/* Process */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}

