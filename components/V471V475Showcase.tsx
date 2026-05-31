'use client';
import React from 'react';

export default function V471V475Showcase() {
  const engines = [
    { version: 'V471', name: 'Sentiment Trend Tracker', icon: '📈', desc: 'Track sentiment evolution across email threads and detect relationship health', features: ['Thread tracking', 'Escalation detection', 'Relationship scoring', 'Trend analysis'] },
    { version: 'V472', name: 'Priority Queue Manager', icon: '🎯', desc: 'Intelligent email prioritization with VIP recognition and deadline detection', features: ['Priority scoring', 'VIP recognition', 'Smart queuing', '60% faster response'] },
    { version: 'V473', name: 'Smart Auto-Responder', icon: '🤖', desc: 'Context-aware auto-replies that are personalized and intelligent', features: ['Context detection', 'Personalized replies', 'Follow-up scheduling', 'Smart templates'] },
    { version: 'V474', name: 'Integration Hub', icon: '🔗', desc: 'Connect email with CRM, calendar, project tools, and accounting', features: ['CRM sync', 'Calendar integration', 'Task creation', 'Auto-invoicing'] },
    { version: 'V475', name: 'Compliance Checker', icon: '⚖️', desc: 'Real-time GDPR, HIPAA, PCI-DSS, and SOX compliance validation', features: ['PII/PHI detection', 'Auto-redaction', 'Audit trails', 'Compliance scoring'] }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Latest: V471-V475 Email Intelligence</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines: Sentiment Tracking, Priority Queue, Smart Auto-Responder, Integration Hub, and Compliance Checker
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {engines.map((e, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <div className="text-4xl mb-3">{e.icon}</div>
              <div className="inline-block px-2 py-1 bg-violet-500 text-white text-xs font-bold rounded-full mb-2">{e.version}</div>
              <h3 className="text-lg font-bold text-white mb-2">{e.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{e.desc}</p>
              <ul className="space-y-1">
                {e.features.map((f, fi) => (
                  <li key={fi} className="text-gray-300 text-xs flex items-start">
                    <span className="text-green-400 mr-1">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🎯 Platform Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl font-bold text-violet-400">275+</div>
              <div className="text-gray-400 text-sm">AI Engines</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl font-bold text-violet-400">2,253+</div>
              <div className="text-gray-400 text-sm">Services</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-gray-400 text-sm">Reply-All</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl font-bold text-violet-400">60%</div>
              <div className="text-gray-400 text-sm">Faster Response</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl font-bold text-violet-400">15h+</div>
              <div className="text-gray-400 text-sm">Saved Weekly</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Email?</h3>
            <div className="space-y-2 text-left text-gray-200">
              <p>📞 <strong>Call:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Visit:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
