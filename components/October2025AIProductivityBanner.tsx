import React from 'react';
import { Link } from 'react-router-dom';

const October2025AIProductivityBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 JUST PUBLISHED: OCTOBER 2025 - AI PRODUCTIVITY REVOLUTION
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Transform Your Business with AI-Powered Productivity
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Discover how leading companies achieve 10x productivity gains and $50M+ savings with AI code assistants and customer success platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* AI Code Assistants */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">👨‍💻</span>
              <h3 className="text-2xl font-bold">AI Code Assistants Revolution</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Learn how AI-powered code assistants deliver 12x developer productivity, 68% faster time-to-market, and $32M in annual savings
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>10x productivity gains proven</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>87% fewer production bugs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>68% faster feature delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>$32M success story included</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-oct-01-generative-ai-code-assistant-revolution"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-center font-bold transition-colors"
              >
                Read Complete Guide →
              </Link>
              <Link
                href="/case-studies/ai-2025-oct-01-tech-startup-ai-code-assistant-32m-success"
                className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg text-center font-bold transition-colors"
              >
                View $32M Success Story →
              </Link>
            </div>
          </div>

          {/* AI Customer Success */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎯</span>
              <h3 className="text-2xl font-bold">AI Customer Success Platform</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Discover how AI-powered customer success delivers 97.5% retention, 8x CS productivity, and $18M in prevented churn
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>95%+ retention rates achieved</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>8x CS team productivity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>92% churn prediction accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>$18M churn prevented annually</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-oct-01-ai-powered-customer-success-platform"
                className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-center font-bold transition-colors"
              >
                Read Complete Guide →
              </Link>
              <Link
                href="/case-studies/ai-2025-oct-01-saas-company-ai-customer-success-18m-success"
                className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg text-center font-bold transition-colors"
              >
                View $18M Success Story →
              </Link>
            </div>
          </div>
        </div>

        {/* Combined Value Proposition */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-300/50">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Combined Impact: $50M+ in Annual Value
            </h3>
            <p className="text-xl mb-6 opacity-90">
              These proven AI solutions deliver transformative results across development and customer success
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">10x</div>
                <div className="text-sm opacity-90">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">97.5%</div>
                <div className="text-sm opacity-90">Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">540%</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">$50M+</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-indigo-900 hover:bg-yellow-300 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Get Free AI Strategy Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>

        {/* Explore Content Hub */}
        <div className="text-center mt-10">
          <Link
            href="/content-hub"
            className="inline-flex items-center gap-2 text-white hover:text-yellow-300 text-lg font-semibold transition-colors"
          >
            Explore More AI Content & Resources
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default October2025AIProductivityBanner;
