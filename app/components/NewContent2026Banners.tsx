import React from 'react';
import Link from 'next/link';

export function QuantumAIBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">⚡</span>
            <span className="font-semibold">Revolutionary Breakthrough</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Quantum AI Breakthrough 2026
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            The most significant AI breakthrough in history is here. Quantum AI delivers 1000x performance gains, 
            solves previously impossible problems, and transforms enterprise operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-quantum-ai-breakthrough"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Read the Breakthrough Article
            </Link>
            <Link
              href="/case-studies/quantum-ai-enterprise-transformation-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View $50M Success Story
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">1000x</div>
            <div className="text-sm opacity-90">Performance Improvement</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">$50M+</div>
            <div className="text-sm opacity-90">Average Enterprise Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-sm opacity-90">Problem-Solving Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GenerativeAIRevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Featured Article</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Generative AI Revolution 2026
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Discover how Generative AI is revolutionizing enterprise operations with 400% adoption growth, 
            300-500% ROI, and 85% cost reduction across all industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-generative-ai-revolution"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Read the Full Article
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">400%</div>
            <div className="text-sm opacity-90">Enterprise Adoption Growth</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">300-500%</div>
            <div className="text-sm opacity-90">Average ROI in 6 Months</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">85%</div>
            <div className="text-sm opacity-90">Cost Reduction Achieved</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AI2026InnovationShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🧠</span>
            <span className="font-semibold">Latest Innovations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI 2026 Innovation Showcase
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Explore the cutting-edge AI innovations that are transforming industries. From quantum computing 
            to autonomous systems, discover the future of enterprise AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Innovations
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">⚡</div>
            <div className="font-semibold mb-2">Quantum AI</div>
            <div className="text-sm opacity-90">1000x Performance</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">🤖</div>
            <div className="font-semibold mb-2">Autonomous Systems</div>
            <div className="text-sm opacity-90">Self-Managing AI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">🧠</div>
            <div className="font-semibold mb-2">Neural Interfaces</div>
            <div className="text-sm opacity-90">Direct AI Control</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">🌍</div>
            <div className="font-semibold mb-2">Sustainability AI</div>
            <div className="text-sm opacity-90">Green Technology</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AI2026TransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Transformation Guide</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Complete AI 2026 Transformation Guide
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Master the complete AI transformation journey with our comprehensive guide. From strategy 
            development to implementation, achieve 300% ROI and revolutionize your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/services"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Transformation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">📊</div>
            <div className="font-semibold mb-2">Assessment</div>
            <div className="text-sm opacity-90">AI Opportunity Analysis</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">🎯</div>
            <div className="font-semibold mb-2">Strategy</div>
            <div className="text-sm opacity-90">Implementation Roadmap</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">⚙️</div>
            <div className="font-semibold mb-2">Deployment</div>
            <div className="text-sm opacity-90">AI System Integration</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">📈</div>
            <div className="font-semibold mb-2">Optimization</div>
            <div className="text-sm opacity-90">Continuous Improvement</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AI2026SuccessStoriesBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🏆</span>
            <span className="font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI 2026 Success Stories
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            See how leading companies are achieving unprecedented results with AI 2026 technologies. 
            Real stories, real results, real transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/case-studies"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View All Success Stories
            </Link>
            <Link
              href="/case-studies/quantum-ai-enterprise-transformation-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              $50M Quantum AI Success
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">$50M</div>
            <div className="text-sm opacity-90 mb-2">Quantum AI Savings</div>
            <div className="text-xs opacity-75">Fortune 500 Manufacturing</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">1000x</div>
            <div className="text-sm opacity-90 mb-2">Performance Gain</div>
            <div className="text-xs opacity-75">Financial Services</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-sm opacity-90 mb-2">Accuracy Rate</div>
            <div className="text-xs opacity-75">Healthcare AI</div>
          </div>
        </div>
      </div>
    </section>
  );
}