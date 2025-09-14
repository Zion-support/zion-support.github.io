import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ultimate Content Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the most comprehensive collection of AI 2025 insights, revolutionary breakthroughs, 
            and real-world success stories that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Revolutionary AI Breakthroughs</h3>
            <p className="text-lg opacity-90 mb-6">
              Explore cutting-edge AI technologies including Quantum-Neural Fusion, 
              Autonomous Business Intelligence, and Neural Interface Integration.
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-breakthrough-ultimate-content-showcase"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI 2026 Guide</h3>
            <p className="text-lg opacity-90 mb-6">
              The definitive guide to Quantum AI business transformation. 
              Learn how quantum computing is revolutionizing operations and competitive advantage.
            </p>
            <Link 
              href="/blog/quantum-ai-2026-business-transformation-ultimate-guide"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
            >
              Explore Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-4">Fortune 500 Success Story</h3>
            <p className="text-lg opacity-90 mb-6">
              How a Fortune 500 company achieved $2.3 billion in cost savings 
              through comprehensive AI transformation in just 18 months.
            </p>
            <Link 
              href="/case-studies/fortune-500-ai-transformation-success"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-6">
              Join thousands of companies already leveraging our AI solutions for unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcaseBanner;