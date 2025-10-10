'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Brain, Zap, Settings, ArrowRight } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['80% process efficiency', 'Zero human error', '24/7 operation']
    },
    {
      icon: Brain,
      title: 'AI-Powered Workflows',
      description: 'Smart workflow automation that adapts and learns from your business patterns',
      benefits: ['Adaptive learning', 'Smart routing', 'Predictive maintenance']
    },
    {
      icon: Zap,
      title: 'Real-time Automation',
      description: 'Instant response automation for time-critical business operations',
      benefits: ['Sub-second response', 'Real-time monitoring', 'Instant notifications']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Professional AI automation services powered by advanced AI and cutting-edge technology." />
        <meta name="keywords" content="ai automation, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with intelligent automation powered by advanced AI technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <service.icon className="text-cyan-400 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="text-green-400 mr-2" size={16} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutomationPage;