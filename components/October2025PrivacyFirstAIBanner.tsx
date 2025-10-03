import React from 'react';

export default function October2025PrivacyFirstAIBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-indigo-900/30 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🔒 NEW: October 1, 2025 - Privacy-First AI Revolution
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Federated Learning: Train AI Models Without Sharing Data
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover how Fortune 500 enterprises achieve 94% accuracy while keeping data on-device, reduce compliance 
            risks by 87%, and enable collaborative AI across organizations—all while maintaining privacy.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">🔒</div>
            <div className="text-3xl font-extrabold text-cyan-400 mb-2">94%</div>
            <div className="text-gray-300 text-sm">Model Accuracy with Privacy Preservation</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">⚖️</div>
            <div className="text-3xl font-extrabold text-blue-400 mb-2">87%</div>
            <div className="text-gray-300 text-sm">Reduction in Compliance Risk</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">💰</div>
            <div className="text-3xl font-extrabold text-indigo-400 mb-2">$312M</div>
            <div className="text-gray-300 text-sm">Annual Cost Savings</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">🏥</div>
            <div className="text-3xl font-extrabold text-purple-400 mb-2">$418M</div>
            <div className="text-gray-300 text-sm">Healthcare Consortium Value</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">📘</div>
              <div className="text-cyan-400 font-bold text-sm tracking-wider uppercase">Technical Deep-Dive</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Federated Learning Architecture & Implementation Blueprint
            </h3>
            <p className="text-gray-300 mb-6">
              Master distributed training frameworks, privacy-enhancing technologies, secure aggregation protocols, 
              and differential privacy. Learn implementation patterns from enterprise deployments.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-xs">Federated Learning</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-xs">Privacy-Preserving ML</span>
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-xs">GDPR Compliance</span>
            </div>
            <a 
              href="/blog/ai-2025-october-federated-learning-privacy-revolution"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              Read Technical Guide →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">💼</div>
              <div className="text-blue-400 font-bold text-sm tracking-wider uppercase">Success Story</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              15 Hospitals Achieve 94% Diagnostic Accuracy Without Sharing Patient Data
            </h3>
            <p className="text-gray-300 mb-6">
              How HealthAlliance consortium deployed federated learning across 15 institutions to train breakthrough 
              AI diagnostic models while maintaining HIPAA compliance and protecting patient privacy.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-cyan-500/10 rounded-lg p-3">
                <div className="text-xl font-bold text-cyan-400">$418M</div>
                <div className="text-xs text-gray-300">Total Value Created</div>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-3">
                <div className="text-xl font-bold text-blue-400">Zero</div>
                <div className="text-xs text-gray-300">Records Shared</div>
              </div>
            </div>
            <a 
              href="/case-studies/healthcare-federated-learning-success-2025"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Implement Privacy-First AI in Your Organization?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our federated learning experts help enterprises deploy production-ready privacy-preserving AI systems 
            that maintain accuracy while protecting sensitive data and ensuring regulatory compliance.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
          >
            Schedule Privacy-First AI Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
