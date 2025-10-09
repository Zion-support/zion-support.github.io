'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IndustriesPage: React.FC = () => {
  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered medical solutions, drug discovery, and patient care optimization.',
      icon: '🏥',
      solutions: ['Medical Imaging AI', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance'],
      caseStudy: 'Reduced diagnostic time by 60% for a major hospital network'
    },
    {
      name: 'Financial Services',
      description: 'Advanced fintech solutions for trading, fraud detection, and risk management.',
      icon: '💰',
      solutions: ['Algorithmic Trading', 'Fraud Detection', 'Risk Assessment', 'Regulatory Compliance'],
      caseStudy: 'Prevented $2M+ in fraudulent transactions for a leading bank'
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing with predictive maintenance and quality control.',
      icon: '🏭',
      solutions: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Robotic Automation'],
      caseStudy: 'Increased production efficiency by 35% for automotive manufacturer'
    },
    {
      name: 'Retail & E-commerce',
      description: 'Personalized shopping experiences and intelligent inventory management.',
      icon: '🛒',
      solutions: ['Personalization Engine', 'Inventory Optimization', 'Demand Forecasting', 'Customer Analytics'],
      caseStudy: 'Boosted online sales by 45% through AI personalization'
    },
    {
      name: 'Education',
      description: 'Intelligent learning platforms and personalized educational experiences.',
      icon: '🎓',
      solutions: ['Adaptive Learning', 'Student Analytics', 'Content Generation', 'Assessment Tools'],
      caseStudy: 'Improved student outcomes by 40% with adaptive learning'
    },
    {
      name: 'Government',
      description: 'Smart city solutions and public service optimization.',
      icon: '🏛️',
      solutions: ['Smart City Infrastructure', 'Public Service Automation', 'Data Analytics', 'Citizen Engagement'],
      caseStudy: 'Reduced response time by 50% for emergency services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized AI solutions tailored to meet the unique challenges and opportunities in your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
              <p className="text-gray-600 mb-6">{industry.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Success Story:</h4>
                <p className="text-sm text-gray-600">{industry.caseStudy}</p>
              </div>

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
          <h2 className="text-3xl font-bold text-white mb-8">Don't See Your Industry?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We work with businesses across all sectors. Let's discuss how AI can transform your industry.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Schedule a Consultation
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;