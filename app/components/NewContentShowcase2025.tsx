import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our latest insights into the most cutting-edge AI technologies and transformations 
            that are reshaping industries in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Neural Interface Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-3xl">🧠</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Neural Interface Revolution</h3>
                <p className="text-purple-600 font-semibold">Ultimate Guide + Case Study</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Discover how neural interfaces are revolutionizing human-computer interaction with 99.7% accuracy. 
              Learn from Fortune 500 success stories achieving 450% ROI.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">450%</div>
                <div className="text-sm text-gray-600">ROI Achieved</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">99.7%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/blog/ai-2025-neural-interface-revolution-ultimate-guide"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-center"
              >
                Read Guide
              </Link>
              <Link
                href="/case-studies/ai-2025-neural-interface-fortune-500-transformation-ultimate-success"
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
              >
                View Case Study
              </Link>
            </div>
          </div>

          {/* Autonomous Vehicles Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-3xl">🚗</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Autonomous Vehicles</h3>
                <p className="text-green-600 font-semibold">Ultimate Guide + Case Study</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Explore Level 5 autonomous vehicle technology transforming logistics and transportation. 
              Learn from global logistics success achieving 380% ROI.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">380%</div>
                <div className="text-sm text-gray-600">ROI Achieved</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">99.97%</div>
                <div className="text-sm text-gray-600">Safety Record</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/blog/ai-2025-autonomous-vehicles-revolution-ultimate-guide"
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 text-center"
              >
                Read Guide
              </Link>
              <Link
                href="/case-studies/ai-2025-autonomous-vehicles-logistics-transformation-ultimate-success"
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 text-center"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">More Revolutionary Content Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Agents Revolution</h4>
              <p className="text-sm text-gray-600">Autonomous AI agents transforming business operations</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quantum AI Breakthrough</h4>
              <p className="text-sm text-gray-600">Quantum computing meets artificial intelligence</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Edge AI Revolution</h4>
              <p className="text-sm text-gray-600">Distributed AI processing at the edge</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;