import React from 'react';

const July2026ContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 July 2026 Revolutionary Content
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Explore the Future of Autonomous Intelligence
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring the world's first truly autonomous AI system, 
            real-world success stories, and comprehensive consulting services that deliver unprecedented business value.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Blog Article */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Intelligence Revolution</h3>
            <p className="text-gray-300 mb-6">
              The world's first fully autonomous AI intelligence system achieving 99.9% self-governance 
              and delivering unprecedented business transformation.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">99.9% Self-Governance</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">$5.2B Value</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">450% ROI</span>
            </div>
            <a 
              href="/blog/ai-2026-july-mega-breakthrough-autonomous-intelligence"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Read Full Article →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$5.2B Fortune 500 Success</h3>
            <p className="text-gray-300 mb-6">
              See how a Fortune 500 manufacturing leader achieved unprecedented results with autonomous intelligence, 
              delivering $5.2 billion in measurable value and 450% ROI.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">$5.2B Value</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">450% ROI</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">1.2 Month Payback</span>
            </div>
            <a 
              href="/case-studies/fortune-500-autonomous-intelligence-5b-success"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              View Case Study →
            </a>
          </div>

          {/* Consulting Services */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Consulting Services</h3>
            <p className="text-gray-300 mb-6">
              Transform your business with our comprehensive autonomous intelligence consulting services. 
              Achieve 99.9% self-governance and unprecedented business value.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">Guaranteed ROI</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">24/7 Support</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">Free Consultation</span>
            </div>
            <a 
              href="/services/autonomous-intelligence-consulting"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Get Started →
            </a>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 ROI Calculator</h3>
            <p className="text-gray-300 mb-6">
              Calculate your potential return on investment with our autonomous intelligence system. 
              See how much value you could generate for your organization.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">450%</div>
                <div className="text-xs text-purple-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">1.2</div>
                <div className="text-xs text-blue-300">Month Payback</div>
              </div>
            </div>
            <a 
              href="/tools/roi-calculator"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Calculate Your ROI →
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">📊 Live Demo</h3>
            <p className="text-gray-300 mb-6">
              Experience autonomous intelligence in action with our interactive demo. 
              See how our system makes complex decisions and optimizes business processes in real-time.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9%</div>
                <div className="text-xs text-blue-300">Self-Governance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">1000x</div>
                <div className="text-xs text-cyan-300">Speed Improvement</div>
              </div>
            </div>
            <a 
              href="/demo/autonomous-intelligence"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Try Live Demo →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Join the Fortune 500 leaders who have revolutionized their operations with autonomous intelligence. 
              Get your free consultation today and discover how to achieve unprecedented business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Schedule Free Consultation
              </a>
              <a 
                href="/blog/ai-2026-july-mega-breakthrough-autonomous-intelligence" 
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Read Latest Breakthrough →
              </a>
              <a 
                href="/case-studies/fortune-500-autonomous-intelligence-5b-success" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View $5.2B Success Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default July2026ContentShowcaseBanner;