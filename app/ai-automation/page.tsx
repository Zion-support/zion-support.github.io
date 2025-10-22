'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Shield, Brain, BarChart } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'AI-powered automation that learns and adapts to your business processes.',
      benefits: ['Process learning', 'Adaptive workflows', 'Smart decision making', 'Continuous optimization']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate complex business workflows with intelligent process management.',
      benefits: ['Workflow design', 'Process automation', 'Task scheduling', 'Resource optimization']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Monitor and optimize automation performance with detailed analytics.',
      benefits: ['Performance tracking', 'Efficiency metrics', 'ROI analysis', 'Optimization insights']
    },
    {
      icon: Shield,
      title: 'Secure Automation',
      description: 'Enterprise-grade security for all automated processes and data.',
      benefits: ['Data protection', 'Access controls', 'Audit trails', 'Compliance support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Solutions - Zion Tech Group</title>
        <meta name="description" content="Streamline your business with AI-powered automation, intelligent workflows, and process optimization for maximum efficiency." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Automation Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Streamline your business with AI-powered automation and intelligent workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Automation Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI automation platform can transform your business processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI automation platform.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiAutomationPage;