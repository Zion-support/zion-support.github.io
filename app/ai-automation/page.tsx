'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Brain, Zap, Users, BarChart3, Shield } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      title: 'Workflow Automation',
      description: 'Automate complex business processes and workflows with intelligent decision-making capabilities.'
    },
    {
      title: 'AI-Powered Logic',
      description: 'Smart automation that learns and adapts to your business patterns and requirements.'
    },
    {
      title: 'Rapid Deployment',
      description: 'Deploy automation solutions quickly with our drag-and-drop workflow builder.'
    },
    {
      title: 'Team Integration',
      description: 'Seamlessly integrate with your existing tools and team workflows.'
    },
    {
      title: 'Performance Monitoring',
      description: 'Track automation performance, efficiency gains, and ROI metrics.'
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime and data protection.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="AI Automation services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-automation, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent automation solutions that learn, adapt, and scale with your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
            >
              Get Started with AI Automation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAutomationPage;
