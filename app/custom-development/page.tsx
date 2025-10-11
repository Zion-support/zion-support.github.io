'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Settings, Zap, Shield, CheckCircle, ArrowRight, Wrench, Database, Smartphone, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CustomDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from scratch to meet your specific business requirements and objectives.',
      benefits: ['Bespoke solutions', 'Scalable architecture', 'Modern technologies', 'Full lifecycle support']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration of new systems with existing infrastructure and third-party applications.',
      benefits: ['API development', 'Data migration', 'Legacy modernization', 'Cloud integration']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance existing systems with performance improvements, scalability enhancements, and efficiency upgrades.',
      benefits: ['Code optimization', 'Database tuning', 'Caching strategies', 'Load balancing']
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Comprehensive security measures and best practices to protect your applications and data.',
      benefits: ['Security audits', 'Vulnerability testing', 'Compliance standards', 'Data encryption']
    }
  ];

  const technologies = [
    'React & Next.js',
    'Node.js & Express',
    'Python & Django',
    'Java & Spring Boot',
    'C# & .NET',
    'PHP & Laravel',
    'PostgreSQL & MongoDB',
    'AWS & Azure',
    'Docker & Kubernetes',
    'Microservices Architecture'
  ];

  return (
    <>
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Bespoke software development solutions tailored to your unique business needs and requirements." />
        <meta name="keywords" content="custom development, software development, bespoke solutions, system integration, performance optimization" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Development</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into powerful, scalable software solutions with our expert custom development services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive custom development solutions designed to drive your business forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks for modern, scalable solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center justify-center bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <span className="text-white text-center">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and create a solution that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CustomDevelopmentPage;