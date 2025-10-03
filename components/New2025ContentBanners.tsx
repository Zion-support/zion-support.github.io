'use client';
import { Link } from 'react-router-dom';
import React from 'react';

export const DigitalTwinsPromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-2xl">🔮</span>
              <span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
                NEW ARTICLE
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">
              AI-Powered Digital Twins: 95% Prediction Accuracy & $5M+ Savings
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Real-time simulation, predictive maintenance, and 60% reduction in downtime
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/ai-powered-digital-twins-2025"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-center whitespace-nowrap"
            >
              Read Article →
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all text-center whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServerlessAIPromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-2xl">☁️</span>
              <span className="inline-flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
                FEATURED GUIDE
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">
              Serverless AI Architecture: Infinite Scale & 90% Cost Reduction
            </h3>
            <p className="text-purple-100 text-sm md:text-base">
              Zero ops, auto-scaling, and pay-per-use pricing for AI workloads
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/serverless-ai-architecture-2025"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl text-center whitespace-nowrap"
            >
              Read Guide →
            </Link>
            <Link
              href="/services/cloud-migration"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all text-center whitespace-nowrap"
            >
              Cloud Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CybersecurityAIPromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-2xl">🛡️</span>
              <span className="inline-flex h-2 w-2 rounded-full bg-red-300 animate-pulse"></span>
              <span className="bg-red-300 text-red-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
                SECURITY ESSENTIAL
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">
              AI Cybersecurity: 10x Faster Threat Detection & 99.9% Accuracy
            </h3>
            <p className="text-orange-100 text-sm md:text-base">
              Autonomous response prevents breaches in seconds, saving $5M+ annually
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/ai-enhanced-cybersecurity-2025"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all shadow-lg hover:shadow-xl text-center whitespace-nowrap"
            >
              Read Article →
            </Link>
            <Link
              href="/services/cybersecurity-consulting"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all text-center whitespace-nowrap"
            >
              Security Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ComprehensiveNewContentShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
            <span className="animate-pulse">✨</span>
            <span className="font-bold">NEW SEPTEMBER 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest AI & Cloud Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our newest comprehensive guides on cutting-edge AI and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/blog/ai-powered-digital-twins-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
                <div className="text-5xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold mb-2">AI-Powered Digital Twins</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold">
                    NEW
                  </span>
                  <span className="text-blue-100 text-sm">12 min read</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Achieve 95% prediction accuracy, 60% downtime reduction, and $5M+ annual savings 
                  with real-time simulation and predictive maintenance.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>95% failure prediction accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>60% reduction in downtime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>$5M+ annual cost savings</span>
                  </div>
                </div>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read Full Article →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/serverless-ai-architecture-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 text-white">
                <div className="text-5xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-2">Serverless AI Architecture</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                  <span className="text-purple-100 text-sm">15 min read</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Master infinite scalability, 90% cost reduction, and zero operational overhead 
                  with serverless AI deployment patterns.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Infinite auto-scaling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>90% cost reduction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Zero ops overhead</span>
                  </div>
                </div>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read Full Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-enhanced-cybersecurity-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 p-8 text-white">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-2">AI-Enhanced Cybersecurity</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-300 text-red-900 px-3 py-1 rounded-full text-xs font-bold">
                    ESSENTIAL
                  </span>
                  <span className="text-orange-100 text-sm">14 min read</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Detect threats 10x faster with 99.9% accuracy. Autonomous response systems 
                  prevent breaches in seconds, saving $5M+ annually.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600">✓</span>
                    <span>10x faster threat detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600">✓</span>
                    <span>99.9% detection accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600">✓</span>
                    <span>Autonomous response in seconds</span>
                  </div>
                </div>
                <div className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  Read Security Guide →
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
};