import React from 'react';
import Link from 'next/link';

const NewContent2026UltimateShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and enterprise automation. 
            Transform your business with cutting-edge insights and implementation guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Generative AI Enterprise Revolution</h3>
            <p className="text-gray-300 mb-6">
              Discover how generative AI is revolutionizing enterprise automation in 2025, 
              delivering unprecedented efficiency gains and competitive advantages.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Generative AI</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Enterprise</span>
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">Automation</span>
            </div>
            <Link 
              href="/blog/ai-2025-generative-ai-enterprise-automation-revolution"
              className="inline-flex items-center text-white font-semibold hover:text-purple-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          {/* Quantum ML Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Machine Learning Revolution</h3>
            <p className="text-gray-300 mb-6">
              Explore the groundbreaking convergence of quantum computing and machine learning 
              that's reshaping AI capabilities in 2026.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Quantum AI</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Machine Learning</span>
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">2026</span>
            </div>
            <Link 
              href="/blog/ai-2026-quantum-machine-learning-revolution"
              className="inline-flex items-center text-white font-semibold hover:text-purple-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          {/* Enterprise Mastery Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-4">Enterprise Automation Mastery</h3>
            <p className="text-gray-300 mb-6">
              Master enterprise automation in 2026 with this comprehensive guide covering 
              strategy, implementation, and optimization.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Enterprise</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Automation</span>
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">Mastery</span>
            </div>
            <Link 
              href="/resources/ai-2026-enterprise-automation-mastery"
              className="inline-flex items-center text-white font-semibold hover:text-purple-300 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500-1000%</div>
            <div className="text-gray-300">ROI Within 18 Months</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">80-95%</div>
            <div className="text-gray-300">Reduction in Manual Processes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">60-80%</div>
            <div className="text-gray-300">Improvement in Efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">40-60%</div>
            <div className="text-gray-300">Increase in Productivity</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations already leveraging our AI solutions and content 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026UltimateShowcase;