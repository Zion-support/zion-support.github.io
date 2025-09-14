import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The AI Revolution is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Join thousands of enterprises already achieving breakthrough results with our 
            cutting-edge AI solutions and proven implementation strategies.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-lg text-gray-200">Enterprises Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">$2.8B</div>
            <div className="text-lg text-gray-200">Total Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">340%</div>
            <div className="text-lg text-gray-200">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg text-gray-200">Success Rate</div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Cloud Native Architecture */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">☁️</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Cloud-Native Architecture Revolution</h3>
                <p className="text-gray-200 mb-4 text-lg">
                  Achieve 10x performance gains and 80% cost reductions through AI-powered 
                  cloud architectures. Real-world implementations delivering unprecedented results.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="text-sm bg-green-500 px-3 py-1 rounded-full">10x Performance</span>
                    <span className="text-sm bg-blue-500 px-3 py-1 rounded-full">80% Cost Reduction</span>
                  </div>
                  <Link 
                    href="/blog/ai-2025-cloud-native-architecture-revolution"
                    className="text-cyan-300 hover:text-white font-semibold text-lg"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Data Analytics Breakthrough */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">📊</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Data Analytics Breakthrough</h3>
                <p className="text-gray-200 mb-4 text-lg">
                  Unlock 15x faster insights and 95% accuracy improvements with AI-powered 
                  analytics. Transform your data into competitive advantage.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="text-sm bg-green-500 px-3 py-1 rounded-full">15x Faster</span>
                    <span className="text-sm bg-blue-500 px-3 py-1 rounded-full">95% Accuracy</span>
                  </div>
                  <Link 
                    href="/blog/ai-2025-data-analytics-breakthrough"
                    className="text-cyan-300 hover:text-white font-semibold text-lg"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Experience Transformation */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🎯</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Customer Experience Transformation</h3>
                <p className="text-gray-200 mb-4 text-lg">
                  Deliver 25x personalization and 95% satisfaction rates through AI-powered 
                  customer experience solutions. Revolutionize how you engage customers.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="text-sm bg-green-500 px-3 py-1 rounded-full">25x Personalization</span>
                    <span className="text-sm bg-blue-500 px-3 py-1 rounded-full">95% Satisfaction</span>
                  </div>
                  <Link 
                    href="/blog/ai-2025-customer-experience-transformation"
                    className="text-cyan-300 hover:text-white font-semibold text-lg"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Fortune 500 Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🏆</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Fortune 500 Success Story</h3>
                <p className="text-gray-200 mb-4 text-lg">
                  Discover how a Fortune 500 manufacturing company achieved $50M in cost savings 
                  and 340% ROI through comprehensive AI transformation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="text-sm bg-green-500 px-3 py-1 rounded-full">$50M Savings</span>
                    <span className="text-sm bg-blue-500 px-3 py-1 rounded-full">340% ROI</span>
                  </div>
                  <Link 
                    href="/case-studies/fortune-500-manufacturing-ai-transformation"
                    className="text-cyan-300 hover:text-white font-semibold text-lg"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the AI Revolution?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Don't get left behind. Start your AI transformation journey today and achieve 
            breakthrough results like our Fortune 500 clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-emerald-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore AI Solutions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;