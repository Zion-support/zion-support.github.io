'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Brain, Zap, BarChart, Shield } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Automate complex business processes with AI-powered decision making.',
      benefits: ['Process optimization', 'Error reduction', 'Cost savings', 'Scalability']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks and improve operational efficiency.',
      benefits: ['Task automation', 'Workflow optimization', 'Time savings', 'Productivity boost']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Monitor and analyze automation performance with detailed insights.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Optimization suggestions', 'ROI tracking']
    },
    {
      icon: Shield,
      title: 'Secure Automation',
      description: 'Enterprise-grade security for all automated processes.',
      benefits: ['Data protection', 'Access controls', 'Audit trails', 'Compliance']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Solutions - Zion Tech Group</title>
        <meta name="description" content="Automate your business processes with AI-powered solutions for workflow optimization and intelligent automation." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automate your business processes with AI-powered solutions for workflow 
              optimization and intelligent automation that drives efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Powerful AI Automation Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with our AI automation solutions today and see the difference.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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