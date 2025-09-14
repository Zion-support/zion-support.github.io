import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Quantum Computing Breakthrough: The Next Frontier',
  description: 'Explore the revolutionary quantum computing breakthroughs of 2025 and how they\'re transforming AI capabilities. Quantum supremacy, quantum AI, and practical applications.',
  keywords: 'quantum computing, quantum AI, quantum supremacy, quantum algorithms, quantum machine learning, 2025 breakthrough',
};

export default function QuantumComputingBreakthrough2025() {
  const quantumBreakthroughs = [
    {
      title: 'Quantum Error Correction Milestone',
      description: 'Achieved 99.9% quantum error correction, making practical quantum computing viable',
      impact: 'Enables reliable quantum algorithms for real-world applications',
      applications: ['Drug discovery', 'Financial modeling', 'Climate simulation', 'Cryptography']
    },
    {
      title: 'Quantum Machine Learning Acceleration',
      description: '1000x speedup in machine learning training using quantum algorithms',
      impact: 'Revolutionizes AI model training and optimization processes',
      applications: ['Neural network training', 'Pattern recognition', 'Optimization problems', 'Data analysis']
    },
    {
      title: 'Quantum-Classical Hybrid Systems',
      description: 'Seamless integration of quantum and classical computing architectures',
      impact: 'Bridges the gap between quantum potential and practical implementation',
      applications: ['Hybrid algorithms', 'Quantum simulation', 'Optimization', 'Machine learning']
    },
    {
      title: 'Quantum Internet Infrastructure',
      description: 'First quantum internet network connecting major research centers globally',
      impact: 'Enables secure quantum communication and distributed quantum computing',
      applications: ['Quantum cryptography', 'Distributed computing', 'Secure communication', 'Quantum sensing']
    }
  ];

  const practicalApplications = [
    {
      industry: 'Healthcare',
      useCase: 'Drug Discovery & Molecular Simulation',
      description: 'Quantum computers can simulate molecular interactions at the quantum level, accelerating drug discovery by 1000x',
      benefits: ['Faster drug development', 'More accurate molecular modeling', 'Reduced R&D costs', 'Personalized medicine']
    },
    {
      industry: 'Finance',
      useCase: 'Portfolio Optimization & Risk Analysis',
      description: 'Quantum algorithms can solve complex optimization problems in seconds that would take classical computers years',
      benefits: ['Real-time portfolio optimization', 'Advanced risk modeling', 'Fraud detection', 'Algorithmic trading']
    },
    {
      industry: 'Climate Science',
      useCase: 'Climate Modeling & Carbon Capture',
      description: 'Quantum simulation enables accurate modeling of complex climate systems and carbon capture mechanisms',
      benefits: ['Accurate climate predictions', 'Carbon capture optimization', 'Renewable energy optimization', 'Environmental monitoring']
    },
    {
      industry: 'Cybersecurity',
      useCase: 'Quantum Cryptography & Security',
      description: 'Quantum key distribution provides unbreakable encryption for secure communications',
      benefits: ['Unbreakable encryption', 'Quantum key distribution', 'Secure communications', 'Future-proof security']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI 2025 Quantum Computing Breakthrough
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              The quantum revolution is here. Discover how 2025's breakthrough quantum 
              computing technologies are transforming AI capabilities and opening new 
              frontiers in computation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              >
                Explore Quantum Solutions
              </Link>
              <Link
                href="/services"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-lg"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthroughs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              2025 Quantum Computing Breakthroughs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These groundbreaking achievements are reshaping the landscape of computing 
              and artificial intelligence, opening doors to previously impossible applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumBreakthroughs.map((breakthrough, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{breakthrough.title}</h3>
                <p className="text-gray-600 mb-6">{breakthrough.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact:</h4>
                  <p className="text-gray-600">{breakthrough.impact}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {breakthrough.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Quantum Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantum computing isn't just theoretical anymore. These practical applications 
              are already transforming industries and creating new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practicalApplications.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{app.industry}</h3>
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">{app.useCase}</h4>
                  <p className="text-gray-600">{app.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Quantum Future is Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're at the threshold of a new era in computing. The quantum revolution 
              is not coming—it's here, and it's transforming everything we know about 
              artificial intelligence and computation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1000x</div>
                <div className="text-lg">Faster Processing</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-lg">Error Correction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-lg">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Embrace the Quantum Future?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Don't get left behind in the quantum revolution. Start exploring quantum 
            computing solutions for your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Quantum Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Explore Quantum Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}