'use client';
import React from 'react';
import { CheckCircle, Star, Zap, Clock, Users, BarChart3 } from 'lucide-react';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    'Intelligent workflow design and automation',
    '500+ pre-built integrations',
    'AI-powered decision making',
    'Custom workflow builder',
    'Real-time monitoring and analytics',
    'Error handling and exception management',
    'Multi-user collaboration',
    'Version control and rollback',
    'Scheduled and triggered workflows',
    'API and webhook support'
  ];

  const benefits = [
    {
      title: '90% Time Savings',
      description: 'Automate repetitive tasks and processes',
      icon: '⏰'
    },
    {
      title: '500+ Integrations',
      description: 'Connect with all your favorite tools',
      icon: '🔗'
    },
    {
      title: 'AI-Powered',
      description: 'Intelligent decision making and optimization',
      icon: '🤖'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track performance and identify bottlenecks',
      icon: '📊'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Workflow Automation
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Automate any business process with intelligent workflows
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Transform your business operations with AI-powered workflow automation that saves time, 
            reduces errors, and boosts productivity across your entire organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Free Trial
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Powerful Automation Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Core Features</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl mr-4">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12 neon-text">
            Simple Pricing
          </h2>
          
          <div className="cyber-card hologram-card p-8">
            <div className="text-4xl font-bold text-cyan-400 mb-4">Starting at $99/month</div>
            <p className="text-gray-300 mb-8">
              Includes unlimited workflows, 500+ integrations, and AI-powered optimization
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Unlimited</div>
                <div className="text-gray-400">Workflows</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">AI-Powered</div>
                <div className="text-gray-400">Optimization</div>
              </div>
            </div>
            
            <button className="cyber-button px-8 py-4 text-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start automating your business processes today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AIWorkflowAutomationPage;