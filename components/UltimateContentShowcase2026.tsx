'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-revolution');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contentSections = {
    'ai-revolution': {
      title: 'AI Revolution 2026',
      description: 'Discover the next generation of artificial intelligence breakthroughs',
      content: [
        {
          title: 'Neural Superintelligence',
          description: 'Advanced AI systems with human-level cognitive capabilities',
          icon: '🧠',
          features: ['Consciousness AI', 'Advanced Reasoning', 'Emotional Intelligence', 'Creative Problem Solving']
        },
        {
          title: 'Quantum-Neural Fusion',
          description: 'Revolutionary combination of quantum computing and neural networks',
          icon: '⚛️',
          features: ['Quantum Processing', 'Neural Optimization', 'Exponential Speed', 'Advanced Learning']
        },
        {
          title: 'Autonomous Business Systems',
          description: 'Self-managing business operations powered by AI',
          icon: '🤖',
          features: ['Self-Healing Systems', 'Predictive Maintenance', 'Automated Decision Making', 'Continuous Optimization']
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Breakthroughs',
      description: 'Revolutionary quantum technologies transforming business operations',
      content: [
        {
          title: 'Quantum Optimization',
          description: 'Solve complex business problems with quantum algorithms',
          icon: '🔬',
          features: ['Supply Chain Optimization', 'Financial Modeling', 'Risk Analysis', 'Resource Allocation']
        },
        {
          title: 'Quantum Security',
          description: 'Unbreakable encryption for enterprise data protection',
          icon: '🔐',
          features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Secure Communications', 'Data Integrity']
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Accelerated AI training with quantum processors',
          icon: '⚡',
          features: ['Faster Training', 'Complex Pattern Recognition', 'Quantum Neural Networks', 'Advanced Analytics']
        }
      ]
    },
    'neural-interfaces': {
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces for enhanced productivity',
      content: [
        {
          title: 'Thought-Controlled Systems',
          description: 'Control devices and applications through neural signals',
          icon: '🎯',
          features: ['Mind-Computer Interface', 'Neural Command Processing', 'Intuitive Control', 'Enhanced Accessibility']
        },
        {
          title: 'Cognitive Enhancement',
          description: 'Augment human intelligence with AI assistance',
          icon: '💡',
          features: ['Memory Augmentation', 'Enhanced Learning', 'Creative Assistance', 'Decision Support']
        },
        {
          title: 'Neural Data Analytics',
          description: 'Analyze brain patterns for business insights',
          icon: '📊',
          features: ['Neural Pattern Recognition', 'Cognitive Load Analysis', 'Performance Optimization', 'Wellness Monitoring']
        }
      ]
    }
  };

  return (
    <div className={`py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore revolutionary AI technologies, quantum computing breakthroughs, and neural interface innovations 
            that are transforming businesses worldwide with proven ROI results.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contentSections[activeTab as keyof typeof contentSections].content.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already experiencing 500%+ ROI with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;