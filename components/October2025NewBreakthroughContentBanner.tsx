import React from 'react';
import { Link } from 'react-router-dom';

const October2025NewBreakthroughContentBanner = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 opacity-90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0wIDMwdi0zMGgyek0wIDM2aDMwdjJIMHYtMnptMzAgMHYySDMwdi0yem0tMzAgMGgzMHYySDAgdi0yem0zMCAwaC0yVjBoMnYzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold mb-6 animate-pulse">
            <span className="text-2xl">🚀</span>
            <span>JUST PUBLISHED: OCTOBER 1, 2025</span>
            <span className="text-2xl">🚀</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            3 Revolutionary AI Breakthroughs
            <br />
            <span className="text-yellow-300">$10.4B Combined Value Created</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Master the cutting-edge technologies transforming enterprises in 2025:
            <br />
            <strong className="text-yellow-200">Sustainable AI • Multi-Agent Mesh Networks • Cyber Resilience</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Sustainable AI */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Sustainable AI Infrastructure
            </h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-green-300 font-bold text-xl">70%</span>
                <span className="text-sm">Energy Reduction</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-green-300 font-bold text-xl">$2.4B</span>
                <span className="text-sm">Cost Savings</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-green-300 font-bold text-xl">100%</span>
                <span className="text-sm">Carbon Neutral</span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6">
              Build carbon-neutral AI systems with green computing strategies. Achieve massive energy reductions while maintaining performance.
            </p>
            <Link 
              to="/blog/sustainable-ai-green-computing-revolution"
              className="inline-block w-full text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Card 2: Multi-Agent Mesh Networks */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="text-5xl mb-4">🕸️</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Multi-Agent Mesh Networks
            </h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-purple-300 font-bold text-xl">99.9%</span>
                <span className="text-sm">System Reliability</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-purple-300 font-bold text-xl">&lt;10ms</span>
                <span className="text-sm">Coordination Latency</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-purple-300 font-bold text-xl">$3.2B</span>
                <span className="text-sm">Enterprise Value</span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6">
              Enable autonomous agents to coordinate in real-time without central control. Power autonomous fleets and smart cities.
            </p>
            <Link 
              to="/blog/multi-agent-mesh-networks-coordination"
              className="inline-block w-full text-center bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Architecture →
            </Link>
          </div>

          {/* Card 3: Cyber Resilience */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              AI-Powered Cyber Resilience
            </h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-red-300 font-bold text-xl">99.7%</span>
                <span className="text-sm">Threat Detection</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-red-300 font-bold text-xl">&lt;1s</span>
                <span className="text-sm">Response Time</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-red-300 font-bold text-xl">$4.8B</span>
                <span className="text-sm">Attacks Prevented</span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6">
              Autonomous zero-day defense with behavioral analytics and predictive intelligence. Stop attacks before damage occurs.
            </p>
            <Link 
              to="/blog/cyber-resilience-zero-day-defense"
              className="inline-block w-full text-center bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Discover Solutions →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              These aren't just concepts—they're proven solutions with billions in documented value.
              <br />
              <strong className="text-yellow-300">Schedule a consultation to get started today.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Free Consultation
              </Link>
              <Link
                to="/services"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">$10.4B</div>
            <div className="text-white/80 text-sm mt-1">Combined Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">99%+</div>
            <div className="text-white/80 text-sm mt-1">Success Rates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">3,200+</div>
            <div className="text-white/80 text-sm mt-1">Deployments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">85%</div>
            <div className="text-white/80 text-sm mt-1">Cost Reduction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025NewBreakthroughContentBanner;
