'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, Settings, Phone, ArrowRight, Bot, Cpu, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'Process Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities',
      features: ['Workflow automation', 'Decision trees', 'Exception handling', 'Performance monitoring']
    },
    {
      icon: Cpu,
      title: 'Data Processing',
      description: 'Automated data processing and analysis with AI insights',
      features: ['Data extraction', 'Pattern recognition', 'Predictive analytics', 'Real-time processing']
    },
    {
      icon: Target,
      title: 'Task Automation',
      description: 'Automated task execution and scheduling with intelligent prioritization',
      features: ['Task scheduling', 'Priority management', 'Resource allocation', 'Progress tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation Solutions - Zion Tech Group</title>
        <meta name="description" content="Intelligent automation of business processes with decision-making capabilities and exception handling." />
      </Helmet>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-flicker-enhanced cyber-text-enhanced">
            AI Automation Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow-enhanced">
            Intelligent Process Automation
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with intelligent automation that learns, adapts, and optimizes your processes. 
            Achieve 80% process automation and 60% cost reduction.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Automation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card quantum-field p-6 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <service.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 neon-flicker-enhanced">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Automate Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our AI automation solutions. Contact us for a free consultation and automation assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

AIAutomationPage.displayName = 'AIAutomationPage';
export default AIAutomationPage;
