'use client';

import { useState } from 'react';

const engines = [
  {
    version: 'V266',
    name: 'Knowledge Distiller',
    icon: '🧠',
    description: 'Extracts key knowledge from email threads, builds team knowledge base, detects expert insights automatically.',
    features: ['Knowledge extraction', 'Expert insight detection', 'Thread summarization', 'KB auto-building']
  },
  {
    version: 'V267',
    name: 'A/B Response Tester',
    icon: '🔬',
    description: 'Tests response variations, tracks performance metrics, learns optimal patterns per contact.',
    features: ['Response variants', 'Performance tracking', 'Style learning', 'Contact preferences']
  },
  {
    version: 'V268',
    name: 'Relationship Graph',
    icon: '🔗',
    description: 'Maps organizational relationships, identifies decision-makers, suggests optimal communication paths.',
    features: ['Relationship mapping', 'Influence scoring', 'Decision-maker detection', 'Path optimization']
  },
  {
    version: 'V269',
    name: 'Time Zone Intelligence',
    icon: '🌍',
    description: 'Smart global scheduling, working hours detection, optimal meeting time finder across timezones.',
    features: ['Timezone detection', 'Working hours', 'Meeting finder', 'Overlap analysis']
  },
  {
    version: 'V270',
    name: 'Phishing Defense',
    icon: '🛡️',
    description: 'ML-powered phishing detection, sender reputation, URL safety, auto-quarantine threats.',
    features: ['ML detection', 'Sender reputation', 'URL safety', 'Auto-quarantine']
  }
];

export default function V266V270Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Email Intelligence V33: Engines V266-V270
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            72 autonomous engines analyzing every email case-by-case with mandatory reply-all enforcement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
          {engines.map((engine, idx) => (
            <button
              key={engine.version}
              onClick={() => setActiveEngine(idx)}
              className={`p-4 rounded-xl transition-all ${
                activeEngine === idx
                  ? 'bg-white shadow-lg scale-105 border-2 border-purple-500'
                  : 'bg-white/50 hover:bg-white/80 border border-gray-200'
              }`}
            >
              <div className="text-3xl mb-2">{engine.icon}</div>
              <div className="font-semibold text-sm">{engine.version}</div>
              <div className="text-xs text-gray-600 mt-1">{engine.name}</div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">{engines[activeEngine].icon}</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">
                {engines[activeEngine].version}: {engines[activeEngine].name}
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                {engines[activeEngine].description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {engines[activeEngine].features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Case-by-case analysis</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Reply-all enforcement</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Autonomous operation</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            All 72 engines work together to provide comprehensive email intelligence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-colors"
            >
              Explore All 1,295 Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
