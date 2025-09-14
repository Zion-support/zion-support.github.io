import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateSecurityBanner = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🛡️ NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI 2025 Cybersecurity Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how AI is revolutionizing cybersecurity with advanced threat detection
            automated response systemsand next-generation security solutions that protect your enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">Advanced Threat Detection</h3>
            <p className="text-sm opacity-90">
              AI-powered systems that identify threats in milliseconds with 99.9% accuracy
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Automated Response</h3>
            <p className="text-sm opacity-90">
              Instant containment and remediation of security incidents using AI
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
            <p className="text-sm opacity-90">
              Anticipate and prevent security incidents before they occur
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Real-World Success Stories</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">95% reduction in false positive alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">80% faster threat detection and response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">100% prevention of data breaches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">$15M annual savings in security operations</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Threat Detection Accuracy</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-cybersecurity-revolution-ultimate-guide"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Full Guide
            </Link>
            <Link
              href="/services/ai-security"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Get AI Security Solutions
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 500+ enterprises already protected by AI-powered cybersecurity
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateSecurityBanner;