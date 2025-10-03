// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2026NewContentMegaBanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-8xl animate-pulse">🚀</span>
            <h2 className="text-6xl md:text-7xl font-black">5 GROUNDBREAKING NEW PUBLICATIONS!</h2>
            <span className="text-8xl animate-pulse">🎯</span>
          </div>
          <p className="text-5xl font-bold mb-6">
            October 2026 — Revolutionary AI Innovations Just Released
          </p>
          <p className="text-3xl opacity-95 max-w-5xl mx-auto">
            Reinforcement Learning • Generative Design • Conversational AI • Enterprise Success Stories
          </p>
        </div>

        {/* Featured New Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Blog Post 1: Reinforcement Learning */}
          <Link to="/blog/ai-reinforcement-learning-enterprise-2026" className="group">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all hover:scale-105 transform">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                    🔥 NEW BREAKTHROUGH
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  AI Reinforcement Learning Enterprise 2026
                </h3>
                <p className="text-xl opacity-95">
                  400% ROI through intelligent optimization
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  Discover how Fortune 500 companies achieve $250M+ savings with deep reinforcement learning systems 
                  delivering 95% decision accuracy and fully autonomous optimization.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600">400%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">95%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">$250M+</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                </div>
                <div className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors">
                  Read Full Guide →
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Post 2: Generative Design */}
          <Link to="/blog/ai-generative-design-enterprise-2026" className="group">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all hover:scale-105 transform">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                    🎨 INNOVATION 2026
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  AI Generative Design Enterprise 2026
                </h3>
                <p className="text-xl opacity-95">
                  10x faster innovation & $100M+ savings
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  Transform product development with AI generative design achieving 10x faster design cycles, 
                  92% cost reduction, and breakthrough innovations impossible with traditional methods.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600">10x</div>
                    <div className="text-sm text-gray-600">Faster</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-600">92%</div>
                    <div className="text-sm text-gray-600">Cost ↓</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">$100M+</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                </div>
                <div className="block w-full bg-purple-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors">
                  Read Full Guide →
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Post 3: Conversational AI */}
          <Link to="/blog/ai-conversational-intelligence-enterprise-2026" className="group">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all hover:scale-105 transform">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                    🤖 AI BREAKTHROUGH
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  Conversational AI Enterprise 2026
                </h3>
                <p className="text-xl opacity-95">
                  97% accuracy & $180M savings
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  Next-generation conversational AI handling 10M+ conversations daily with 97% intent accuracy, 
                  24/7 availability, and delivering $180M+ annual savings.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600">97%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600">10M+</div>
                    <div className="text-sm text-gray-600">Daily</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">$180M+</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                </div>
                <div className="block w-full bg-green-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors">
                  Read Full Guide →
                </div>
              </div>
            </div>
          </Link>

          {/* Case Study 1: Retail */}
          <Link to="/case-studies/retail-giant-ai-transformation-2026" className="group">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all hover:scale-105 transform border-4 border-orange-300">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-white text-orange-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                    🏆 SUCCESS STORY
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  Retail Giant: $320M ROI
                </h3>
                <p className="text-xl opacity-95">
                  Fortune 100 transformation success
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  How a Fortune 100 retail chain achieved $320M annual ROI, 450% revenue growth, and 94% customer 
                  satisfaction through comprehensive AI transformation across 2,400 stores.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600">$320M</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600">450%</div>
                    <div className="text-sm text-gray-600">Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-gray-600">CSAT</div>
                  </div>
                </div>
                <div className="block w-full bg-orange-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors">
                  Read Success Story →
                </div>
              </div>
            </div>
          </Link>

          {/* Case Study 2: Logistics */}
          <Link to="/case-studies/logistics-ai-autonomous-operations-2026" className="group">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all hover:scale-105 transform border-4 border-indigo-300">
              <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-white text-indigo-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                    🏆 SUCCESS STORY
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  Logistics: $240M ROI
                </h3>
                <p className="text-xl opacity-95">
                  95% autonomous operations achieved
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  Fortune 500 logistics company achieved $240M ROI, 95% autonomous operations, and 99.7% on-time 
                  delivery through AI transformation of 38K vehicles and 280 warehouses.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600">$240M</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">95%</div>
                    <div className="text-sm text-gray-600">Autonomous</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">99.7%</div>
                    <div className="text-sm text-gray-600">On-Time</div>
                  </div>
                </div>
                <div className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors">
                  Read Success Story →
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white/10 backdrop-blur-lg rounded-3xl p-12 border-2 border-white/30">
          <h3 className="text-5xl font-bold mb-6">Ready to Achieve Similar Results?</h3>
          <p className="text-3xl mb-10 opacity-95 max-w-4xl mx-auto">
            Schedule a free consultation with our AI transformation experts and discover how we can help 
            your organization achieve 300%+ ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-white hover:text-indigo-600 transition-all hover:scale-105"
            >
              📧 Schedule Consultation
            </a>
          </div>
          <p className="mt-8 text-xl opacity-90">
            🌟 Join 500+ enterprises transforming with AI | 📍 Trusted by Fortune 500 companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
}