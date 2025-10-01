import React from 'react';

export default function October2025RealTimeIntelligenceBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-900/30 via-red-900/30 to-pink-900/30 backdrop-blur-sm border-b border-orange-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6 animate-pulse">
            <span className="text-orange-400 font-bold text-xl tracking-wider uppercase">
              ⚡ NEW: October 1, 2025 - Real-Time Intelligence Revolution
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Continuous Intelligence: Make Instant AI-Powered Decisions at Scale
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your enterprise with continuous intelligence systems that process 50M events per second, 
            deliver insights in under 100ms, and enable autonomous decision-making that drives $723M in revenue.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-3xl font-extrabold text-orange-400 mb-2">&lt;80ms</div>
            <div className="text-gray-300 text-sm">End-to-End Decision Latency</div>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-lg rounded-xl p-6 border border-red-500/30 hover:border-red-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <div className="text-3xl font-extrabold text-red-400 mb-2">50M</div>
            <div className="text-gray-300 text-sm">Events Processed Per Second</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">💰</div>
            <div className="text-3xl font-extrabold text-pink-400 mb-2">$723M</div>
            <div className="text-gray-300 text-sm">Annual Revenue Impact</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">📈</div>
            <div className="text-3xl font-extrabold text-purple-400 mb-2">156%</div>
            <div className="text-gray-300 text-sm">Conversion Rate Increase</div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Enterprise Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30">
              <div className="text-3xl mb-3">💳</div>
              <h4 className="text-lg font-bold text-orange-400 mb-2">Financial Services</h4>
              <p className="text-gray-300 text-sm mb-4">
                Real-time fraud detection scoring transactions in &lt;50ms, blocking fraudulent purchases before processing. 
                89% reduction in fraud losses, $127M annual savings.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-red-500/30">
              <div className="text-3xl mb-3">🛒</div>
              <h4 className="text-lg font-bold text-red-400 mb-2">E-Commerce</h4>
              <p className="text-gray-300 text-sm mb-4">
                Dynamic pricing adjusting every 5 seconds based on demand, competition, and inventory. 34% margin 
                improvement, $298M additional revenue.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="text-lg font-bold text-pink-400 mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm mb-4">
                Predictive maintenance with IoT sensors streaming real-time data. 78% reduction in unplanned downtime, 
                $189M annual savings.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">📘</div>
              <div className="text-orange-400 font-bold text-sm tracking-wider uppercase">Architecture Guide</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Build Continuous Intelligence Platforms That Scale
            </h3>
            <p className="text-gray-300 mb-6">
              Learn real-time data ingestion with Kafka, stream processing with Flink, online ML inference, and 
              action orchestration. Complete implementation roadmap from foundation to production.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300 text-xs">Stream Processing</span>
              <span className="bg-red-500/20 px-3 py-1 rounded-full text-red-300 text-xs">Real-Time ML</span>
              <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-300 text-xs">Event-Driven</span>
            </div>
            <a 
              href="/blog/ai-2025-october-continuous-intelligence-real-time-analytics"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
            >
              Read Architecture Guide →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">💼</div>
              <div className="text-red-400 font-bold text-sm tracking-wider uppercase">Fortune 500 Success</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Global Retailer Achieves $723M Revenue Growth with Real-Time Intelligence
            </h3>
            <p className="text-gray-300 mb-6">
              How a Fortune 500 retailer deployed continuous intelligence to personalize experiences for 100M users, 
              optimize pricing in real-time, and detect fraud instantly—all in under 80ms.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-orange-500/10 rounded-lg p-3">
                <div className="text-xl font-bold text-orange-400">$723M</div>
                <div className="text-xs text-gray-300">Revenue Increase</div>
              </div>
              <div className="bg-red-500/10 rounded-lg p-3">
                <div className="text-xl font-bold text-red-400">156%</div>
                <div className="text-xs text-gray-300">Conversion Growth</div>
              </div>
            </div>
            <a 
              href="/case-studies/retail-continuous-intelligence-success-2025"
              className="inline-block bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 mb-8">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Technical Stack</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-orange-400 font-bold mb-2">Ingestion</div>
              <div className="text-gray-300 text-sm">Apache Kafka • AWS Kinesis • CDC</div>
            </div>
            <div>
              <div className="text-red-400 font-bold mb-2">Processing</div>
              <div className="text-gray-300 text-sm">Apache Flink • Stateful Streams</div>
            </div>
            <div>
              <div className="text-pink-400 font-bold mb-2">ML Serving</div>
              <div className="text-gray-300 text-sm">TensorFlow • Triton • Tecton</div>
            </div>
            <div>
              <div className="text-purple-400 font-bold mb-2">Orchestration</div>
              <div className="text-gray-300 text-sm">Temporal • Rule Engines</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with Real-Time Intelligence?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our continuous intelligence experts help enterprises build production-ready real-time systems that process 
            millions of events per second and deliver instant, AI-powered insights.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1"
          >
            Schedule Real-Time Intelligence Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
