import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function NewBlogPosts2025Banner() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 NEW BLOG POSTS 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Insights
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI technologyquantum computingand autonomous systems. 
            Stay ahead of the curve with expert insights and real-world implementation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Blog Post 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold mr-3">
                FEATURED
              </div>
              <span className="text-sm opacity-80">January 2025</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              AI 2025 Next-Generation Autonomous Systems
            </h3>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Explore revolutionary autonomous AI systems that are transforming industries with 99.8% autonomous decision-making
              real-time market adaptationand predictive business intelligence with 98.5% accuracy.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">Autonomous AI</span>
              <span className="bg-purple-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">Business Transformation</span>
              <span className="bg-green-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">Predictive Analytics</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">4,200%</div>
                <div className="text-sm opacity-80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                <div className="text-sm opacity-80">Operational Uptime</div>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-next-generation-autonomous-systems"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Article →
            </a>
          </div>

          {/* Featured Blog Post 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                BREAKTHROUGH
              </div>
              <span className="text-sm opacity-80">January 2025</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Quantum AI 2025 Business Breakthrough
            </h3>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Discover how quantum AI is delivering unprecedented breakthroughs in business performance with quantum neural networks 
              processing 50 billion calculations per second and 99.9% accurate predictions.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-indigo-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">Quantum Computing</span>
              <span className="bg-pink-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">Business Intelligence</span>
              <span className="bg-cyan-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">Competitive Advantage</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">5,800%</div>
                <div className="text-sm opacity-80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">99.95%</div>
                <div className="text-sm opacity-80">Operational Accuracy</div>
              </div>
            </div>
            <a 
              href="/blog/quantum-ai-2025-business-breakthrough"
              className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Article →
            </a>
          </div>
        </div>

        {/* Key Insights Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Key Insights from Our Latest Research</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-3">Autonomous Revolution</h4>
              <p className="opacity-90">
                Next-generation AI systems are achieving 99.8% autonomous decision-making capabilities
                revolutionizing how businesses operate and compete.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h4 className="text-xl font-bold mb-3">Quantum Breakthrough</h4>
              <p className="opacity-90">
                Quantum AI is delivering 1000x faster processing speeds and 99.9% accurate predictions
                creating unprecedented competitive advantages.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-3">Business Impact</h4>
              <p className="opacity-90">
                Companies implementing these technologies are seeing average ROI increases of 4,200-5,800% 
                within 12-18 months of deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Implement These Breakthroughs?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get expert consultation and implementation support to transform your business with the latest AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Start Your Transformation
            </a>
            <a
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg"
            >
              Explore More Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}