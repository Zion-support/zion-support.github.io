import React from 'react';
import { Link } from 'react-router-dom';

const October2025AIEnterpriseHighlightBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
            ⭐ FEATURED CONTENT
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm">
            October 1, 2025
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
          Enterprise AI Transformation
          <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Implementation Guides
          </span>
        </h2>

        <p className="text-xl text-center mb-10 text-white/80 max-w-3xl mx-auto">
          Three comprehensive guides helping Fortune 1000 companies accelerate AI adoption
          with proven frameworks and measurable results
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🛡️</span>
              
            </div>
            <h3 className="text-xl font-bold mb-3">
              Enterprise AI Governance
            </h3>
            <ul className="space-y-2 mb-6 text-white/70">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>99.8% compliance rates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>340% faster deployments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>$47M cost savings</span>
              </li>
            </ul>
            <Link
              to="/blog/ai-2025-october-enterprise-ai-governance-framework"
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              Read Framework →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🧠</span>
              
            </div>
            <h3 className="text-xl font-bold mb-3">
              Multimodal AI Systems
            </h3>
            <ul className="space-y-2 mb-6 text-white/70">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>450% productivity increase</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>$89M ROI in 18 months</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>92% accuracy improvement</span>
              </li>
            </ul>
            <Link
              to="/blog/ai-2025-october-multimodal-ai-enterprise-deployment"
              className="block w-full text-center bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Explore Guide →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">⚡</span>
              <span className="px-3 py-1 bg-green-500/30 rounded-lg text-xs font-bold">EDGE AI</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Edge AI Deployment
            </h3>
            <ul className="space-y-2 mb-6 text-white/70">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Sub-millisecond latency</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>$156M cost reduction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>99.9% uptime achieved</span>
              </li>
            </ul>
            <Link
              to="/blog/ai-2025-october-edge-ai-deployment-revolution"
              className="block w-full text-center bg-gradient-to-r from-green-500 to-teal-500 px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all"
            >
              Discover More →
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-white/70">Fortune 1000</div>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div>
              <div className="text-2xl font-bold">$292M</div>
              <div className="text-sm text-white/70">Combined ROI</div>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div>
              <div className="text-2xl font-bold">50K+</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025AIEnterpriseHighlightBanner;
