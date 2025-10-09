'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      title: 'Intelligent Process Automation',
      description: 'Automate complex business processes with AI that learns and adapts to your workflows.',
      icon: '⚙️'
    },
    {
      title: 'Decision Intelligence',
      description: 'AI-powered decision making that considers multiple variables and business rules.',
      icon: '🧠'
    },
    {
      title: 'Exception Handling',
      description: 'Smart handling of edge cases and exceptions with human-like problem solving.',
      icon: '🔧'
    },
    {
      title: 'Performance Analytics',
      description: 'Real-time monitoring and optimization of automated processes.',
      icon: '📊'
    }
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Improve process accuracy by 95%',
    'Decrease processing time by 70%',
    'Lower operational costs by 60%',
    '24/7 automated operations',
    'Scalable across all departments'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with intelligent automation that learns, adapts, and optimizes your processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with a free consultation to identify automation opportunities in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAutomationPage;