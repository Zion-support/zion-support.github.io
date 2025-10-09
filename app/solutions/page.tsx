'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Business Automation',
      description: 'Transform your business processes with intelligent automation that learns and adapts.',
      features: ['Process Automation', 'Decision Intelligence', 'Exception Handling', 'Performance Analytics'],
      icon: '🤖'
    },
    {
      title: 'Enterprise AI Platform',
      description: 'Comprehensive AI infrastructure for large-scale enterprise deployments.',
      features: ['Scalable Architecture', 'Multi-tenant Support', 'Advanced Security', 'Custom Integrations'],
      icon: '🏢'
    },
    {
      title: 'Data Intelligence Suite',
      description: 'Turn your data into actionable insights with advanced analytics and visualization.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Interactive Dashboards', 'Data Governance'],
      icon: '📊'
    },
    {
      title: 'Customer Experience AI',
      description: 'Enhance customer interactions with intelligent chatbots and personalization.',
      features: ['Smart Chatbots', 'Personalization Engine', 'Sentiment Analysis', 'Omnichannel Support'],
      icon: '💬'
    },
    {
      title: 'Marketing Intelligence',
      description: 'Optimize your marketing campaigns with AI-driven insights and automation.',
      features: ['Campaign Optimization', 'Audience Segmentation', 'Content Generation', 'ROI Tracking'],
      icon: '📈'
    },
    {
      title: 'Operational Excellence',
      description: 'Streamline operations with intelligent monitoring and predictive maintenance.',
      features: ['Predictive Maintenance', 'Resource Optimization', 'Quality Assurance', 'Cost Reduction'],
      icon: '⚙️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block w-full text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Get Started Today
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;