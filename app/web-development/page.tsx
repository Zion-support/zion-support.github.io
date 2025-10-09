'use client';
import React from 'react';
import { Code, Zap, Target, BarChart, Cloud, Users, Award, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const WebDevelopmentPage: React.FC = () => {
  const features = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      benefits: ['React/Vue/Angular', 'Responsive design', 'Performance optimization']
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side applications and APIs',
      icon: Cloud,
      benefits: ['Node.js/Python/Java', 'RESTful APIs', 'Microservices']
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs',
      icon: Target,
      benefits: ['Third-party APIs', 'Payment gateways', 'Social media integration']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize your web application for speed and efficiency',
      icon: Zap,
      benefits: ['Speed optimization', 'SEO optimization', 'Caching strategies']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, API integration, and performance optimization. Modern web applications that drive results."
        keywords={['web development', 'frontend development', 'backend development', 'API integration', 'web applications', 'performance optimization']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build modern, scalable web applications with our expert development team. 
              From frontend to backend, we create web solutions that drive business growth.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$1,200/month</div>
            <p className="text-gray-300">Complete web development solutions</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Development Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Build Your Web Application Today</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our web applications have achieved 99.9% uptime and 50% faster load times. 
                Let's create the perfect web solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
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