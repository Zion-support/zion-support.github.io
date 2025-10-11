'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { Brain, Cloud, Code, Zap, Shield, Database, Smartphone, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced AI analytics solutions for data-driven insights and decision making.',
      features: ['Predictive Analytics', 'Machine Learning Models', 'Real-time Insights']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline workflows and increase efficiency.',
      features: ['Workflow Automation', 'Smart Scheduling', 'Process Optimization']
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions to protect your business from threats.',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring']
    },
    {
      icon: Database,
      title: 'AI Data Analytics',
      description: 'Comprehensive data analytics powered by artificial intelligence.',
      features: ['Data Mining', 'Pattern Recognition', 'Business Intelligence']
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern business needs.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cloud Management']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps']
    },
    {
      icon: Globe,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management.',
      features: ['CI/CD Setup', 'Containerization', 'Monitoring & Logging']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb items={[{ label: 'Services' }]} />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business 
              and drive innovation across all operations.
            </p>
          </div>

          {/* AI Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact our experts to discuss your project requirements and get a customized solution.
              </p>
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;