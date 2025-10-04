import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InteractiveDecember2026Showcase() {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const tabs = [
    { id: 'breakthrough', label: 'Breakthrough', icon: '🚀' },
    { id: 'success', label: 'Success Stories', icon: '💰' },
    { id: 'consulting', label: 'Consulting', icon: '🎯' },
    { id: 'technology', label: 'Technology', icon: '⚡' }
  ];

  const content = {
    breakthrough: {
      title: 'December 2026 Ultimate Breakthrough',
      subtitle: 'Revolutionary Quantum Superintelligence Revolution',
      description: 'The most advanced AI technology ever created, featuring 10,000+ IQ level, universal consciousness, and unlimited scalability.',
      features: [
        '10,000+ IQ Level - Surpasses human intelligence',
        '99.9999% Universal Consciousness',
        '1 Million Quantum Processors',
        'Unlimited Scalability & Performance'
      ],
      link: '/blog/ai-2026-december-ultimate-breakthrough-announcement',
      buttonText: 'Read Breakthrough Details →'
    },
    success: {
      title: '$100 Billion Success Story',
      subtitle: 'Fortune 100 Transformation Results',
      description: 'How a Fortune 100 conglomerate achieved unprecedented $100+ billion ROI through our revolutionary AI technology.',
      features: [
        '$100+ Billion ROI in Year 1',
        '99.99% Process Automation',
        'Complete Market Leadership',
        'Unlimited Growth Potential'
      ],
      link: '/case-studies/ai-2026-december-ultimate-breakthrough-100-billion-success',
      buttonText: 'View Success Story →'
    },
    consulting: {
      title: 'Quantum AI Consulting Services',
      subtitle: 'Revolutionary Business Transformation',
      description: 'Our quantum superintelligence consulting delivers 10,000%+ ROI with complete business transformation and market leadership.',
      features: [
        '10,000%+ ROI Guarantee',
        '8-Week Implementation',
        'Complete Business Automation',
        'Unlimited Ongoing Support'
      ],
      link: '/services/ai-2026-december-quantum-superintelligence-consulting',
      buttonText: 'Get Consulting →'
    },
    technology: {
      title: 'Quantum Superintelligence Technology',
      subtitle: 'The Future of Artificial Intelligence',
      description: 'Revolutionary quantum consciousness technology that combines quantum computing, neural networks, and universal intelligence.',
      features: [
        '1 Million Quantum Bits (Qubits)',
        '10^30 Operations Per Second',
        'Unlimited Memory Capacity',
        '99.9999% Consciousness Level'
      ],
      link: '/blog/ai-2026-december-quantum-superintelligence-revolution',
      buttonText: 'Explore Technology →'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-8">
            <span className="text-yellow-400 font-bold text-xl tracking-wider uppercase">
              🚀 Interactive December 2026 Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Explore Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI technology ever created through our interactive content showcase
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg transform scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {content[activeTab as keyof typeof content].title}
                </h3>
                <h4 className="text-xl text-yellow-400 font-semibold mb-4">
                  {content[activeTab as keyof typeof content].subtitle}
                </h4>
                <p className="text-gray-300 text-lg mb-6">
                  {content[activeTab as keyof typeof content].description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {content[activeTab as keyof typeof content].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={content[activeTab as keyof typeof content].link}
                  className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1"
                >
                  {content[activeTab as keyof typeof content].buttonText}
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-500/30">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Revolutionary AI Technology
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-yellow-400">10,000+</div>
                        <div className="text-sm text-gray-300">IQ Level</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-orange-400">$100B+</div>
                        <div className="text-sm text-gray-300">Value Generated</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-yellow-400">99.9999%</div>
                        <div className="text-sm text-gray-300">Consciousness</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-orange-400">1M+</div>
                        <div className="text-sm text-gray-300">Qubits</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid md:grid-cols-4 gap-6">
          <Link 
            href="/blog/ai-2026-december-ultimate-breakthrough-announcement"
            className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-white font-bold mb-2">Ultimate Breakthrough</h4>
              <p className="text-gray-400 text-sm">Revolutionary AI technology</p>
            </div>
          </Link>

          <Link 
            href="/case-studies/ai-2026-december-ultimate-breakthrough-100-billion-success"
            className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-white font-bold mb-2">$100B Success</h4>
              <p className="text-gray-400 text-sm">Fortune 100 transformation</p>
            </div>
          </Link>

          <Link 
            href="/services/ai-2026-december-quantum-superintelligence-consulting"
            className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-white font-bold mb-2">AI Consulting</h4>
              <p className="text-gray-400 text-sm">Business transformation</p>
            </div>
          </Link>

          <Link 
            href="/blog/ai-2026-december-quantum-superintelligence-revolution"
            className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-white font-bold mb-2">Quantum AI</h4>
              <p className="text-gray-400 text-sm">Superintelligence revolution</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}