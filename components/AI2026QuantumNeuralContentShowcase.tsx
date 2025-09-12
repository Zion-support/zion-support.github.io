import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Atom, Brain, Zap, Target, TrendingUp, Users, Award, CheckCircle, ExternalLink } from 'lucide-react';

const AI2026QuantumNeuralContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');

  const quantumContent = {
    breakthroughs: [
      {
        id: 1,
        title: 'Quantum-Neural Fusion Technology',
        description: 'Revolutionary fusion of quantum computing with neural networks achieving 99.7% accuracy in complex problem solving.',
        category: 'Technology',
        roi: '15,000%',
        accuracy: '99.7%',
        icon: Atom,
        color: 'from-purple-500 to-indigo-500',
        href: '/ai-2026-quantum-neural-fusion',
        featured: true
      },
      {
        id: 2,
        title: 'Quantum Entanglement Processing',
        description: 'Revolutionary quantum entanglement algorithms that enable instant data correlation across systems.',
        category: 'Processing',
        roi: '20,000%',
        accuracy: '99.9%',
        icon: Zap,
        color: 'from-yellow-500 to-orange-500',
        href: '/blog/ai-2026-quantum-entanglement',
        featured: true
      },
      {
        id: 3,
        title: 'Hybrid Quantum-Classical AI',
        description: 'Seamless integration of quantum and classical computing for optimal performance and reliability.',
        category: 'Architecture',
        roi: '18,000%',
        accuracy: '98.5%',
        icon: Brain,
        color: 'from-green-500 to-teal-500',
        href: '/blog/ai-2026-hybrid-architecture',
        featured: false
      },
      {
        id: 4,
        title: 'Quantum Machine Learning',
        description: 'Advanced ML algorithms that leverage quantum computing for exponential speed improvements.',
        category: 'Machine Learning',
        roi: '12,000%',
        accuracy: '97.8%',
        icon: Target,
        color: 'from-blue-500 to-cyan-500',
        href: '/blog/ai-2026-quantum-ml',
        featured: false
      }
    ],
    caseStudies: [
      {
        id: 1,
        company: 'Global Manufacturing Corp',
        industry: 'Manufacturing',
        challenge: 'Complex supply chain optimization',
        solution: 'Quantum-Neural Fusion AI',
        results: '15,000% ROI, 99.7% accuracy',
        timeframe: '6 months',
        href: '/case-studies/ai-2026-quantum-manufacturing-success',
        featured: true
      },
      {
        id: 2,
        company: 'Fortune 500 Financial Services',
        industry: 'Financial Services',
        challenge: 'Risk assessment and fraud detection',
        solution: 'Quantum Entanglement Processing',
        results: '25,000% ROI, 99.9% accuracy',
        timeframe: '4 months',
        href: '/case-studies/ai-2026-quantum-finance-breakthrough',
        featured: true
      },
      {
        id: 3,
        company: 'Global Healthcare Network',
        industry: 'Healthcare',
        challenge: 'Drug discovery and molecular simulation',
        solution: 'Hybrid Quantum-Classical AI',
        results: '30,000% ROI, 98.5% accuracy',
        timeframe: '8 months',
        href: '/case-studies/ai-2026-quantum-healthcare-revolution',
        featured: false
      },
      {
        id: 4,
        company: 'Energy Sector Leader',
        industry: 'Energy',
        challenge: 'Smart grid optimization',
        solution: 'Quantum Machine Learning',
        results: '28,000% ROI, 97.8% accuracy',
        timeframe: '5 months',
        href: '/case-studies/ai-2026-quantum-energy-transformation',
        featured: false
      }
    ],
    resources: [
      {
        id: 1,
        title: 'AI 2026 Quantum Implementation Guide',
        description: 'Complete guide to implementing quantum-neural fusion technology in your organization.',
        type: 'Implementation Guide',
        pages: '150+',
        href: '/resources/ai-2026-quantum-implementation-guide',
        featured: true
      },
      {
        id: 2,
        title: 'Quantum ROI Calculator 2026',
        description: 'Calculate your potential ROI with quantum-neural fusion technology.',
        type: 'Tool',
        interactive: true,
        href: '/tools/ai-2026-quantum-roi-calculator',
        featured: true
      },
      {
        id: 3,
        title: 'Quantum Security Protocols',
        description: 'Advanced security measures for quantum computing environments.',
        type: 'Security Guide',
        pages: '75+',
        href: '/resources/ai-2026-quantum-security',
        featured: false
      },
      {
        id: 4,
        title: 'Quantum Training Academy',
        description: 'Comprehensive training program for quantum AI implementation teams.',
        type: 'Training',
        duration: '40 hours',
        href: '/academy/ai-2026-quantum-training',
        featured: false
      }
    ]
  };

  const tabs = [
    { id: 'breakthroughs', label: 'Breakthroughs', count: quantumContent.breakthroughs.length },
    { id: 'caseStudies', label: 'Success Stories', count: quantumContent.caseStudies.length },
    { id: 'resources', label: 'Resources', count: quantumContent.resources.length }
  ];

  const renderContent = () => {
    const content = quantumContent[activeTab as keyof typeof quantumContent];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item: any) => (
          <div key={item.id} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${item.featured ? 'ring-2 ring-purple-500' : ''}`}>
            {item.featured && (
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4 mr-1" />
                Featured
              </div>
            )}
            
            {item.icon && (
              <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
            )}
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            
            <div className="space-y-2 mb-4">
              {item.category && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Category:</span>
                  <span className="text-sm font-semibold text-purple-600">{item.category}</span>
                </div>
              )}
              {item.industry && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Industry:</span>
                  <span className="text-sm font-semibold text-blue-600">{item.industry}</span>
                </div>
              )}
              {item.type && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Type:</span>
                  <span className="text-sm font-semibold text-green-600">{item.type}</span>
                </div>
              )}
              {item.roi && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">ROI:</span>
                  <span className="text-sm font-bold text-green-600">{item.roi}</span>
                </div>
              )}
              {item.accuracy && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Accuracy:</span>
                  <span className="text-sm font-bold text-blue-600">{item.accuracy}</span>
                </div>
              )}
            </div>
            
            <Link
              href={item.href}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
            >
              Learn More
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-semibold mb-4 animate-pulse">
            ⚛️ QUANTUM-NEURAL FUSION 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Quantum AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most advanced quantum-neural fusion technology and discover how it's transforming industries worldwide.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        {renderContent()}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Quantum AI?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join the quantum revolution and transform your business with the most advanced AI technology available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-2026-quantum-neural-fusion"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Quantum AI
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026QuantumNeuralContentShowcase;