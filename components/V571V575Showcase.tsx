'use client';

import React from 'react';

export default function V571V575Showcase() {
  const engines = [
    {
      id: 'V571',
      name: 'Email Knowledge Graph Builder',
      icon: '🕸️',
      description: 'Automatically builds relationship maps from email communications and identifies key stakeholders',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'V572',
      name: 'Multilingual Email Assistant',
      icon: '🌐',
      description: 'Real-time translation for 100+ languages with cultural context awareness and tone adaptation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'V573',
      name: 'Email Accessibility Checker',
      icon: '♿',
      description: 'Ensures emails meet WCAG 2.1 standards with screen reader compatibility and color contrast optimization',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'V574',
      name: 'Email Carbon Footprint Tracker',
      icon: '🌱',
      description: 'Calculates environmental impact of email communications and suggests optimization strategies',
      color: 'from-lime-500 to-green-500'
    },
    {
      id: 'V575',
      name: 'Email Negotiation Assistant',
      icon: '🤝',
      description: 'Analyzes negotiation patterns and suggests optimal counter-offers with leverage point identification',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Email Intelligence Engines V571-V575
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-powered email intelligence with knowledge graphs, multilingual support, accessibility, sustainability tracking, and negotiation assistance
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold">
              375 Total Engines
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold">
              2,621 Services
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold">
              100% Reply-All Enforced
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${engine.color} flex items-center justify-center text-3xl mb-4`}>
                {engine.icon}
              </div>
              <div className="mb-2">
                <span className="text-xs font-bold text-purple-400">{engine.id}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{engine.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Knowledge graph relationship mapping',
              '100+ language translation',
              'WCAG 2.1 accessibility compliance',
              'Carbon footprint calculation',
              'Negotiation pattern analysis',
              'Cultural context awareness',
              'Screen reader optimization',
              'Sustainability reporting',
              'Leverage point identification'
            ].map((capability, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Enhance Your Email Intelligence?
            </h3>
            <p className="text-gray-200 mb-6">
              Get started with our advanced email intelligence platform today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="/services"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore All Services
              </a>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            <p className="mb-2">📱 +1 302 464 0950 | 📧 kleber@ziontechgroup.com</p>
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </section>
  );
}
