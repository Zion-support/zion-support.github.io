import React from 'react';

const March2026ContentShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            March 2026 Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest revolutionary AI breakthroughs, success stories, and consulting services 
            that are transforming enterprise operations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">March 2026 AI Breakthroughs</h3>
            <p className="text-gray-300 mb-6">
              Discover the groundbreaking AI innovations that are revolutionizing enterprise operations 
              with meta-cognitive reasoning, quantum neural networks, and autonomous operations.
            </p>
            <div className="space-y-2 mb-6 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Meta-Cognitive AI Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Quantum-Enhanced Neural Networks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Autonomous Enterprise Operations</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2026-march-revolutionary-breakthroughs"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Read Full Article →
            </a>
          </div>

          {/* Case Study Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$3.2B Success Story</h3>
            <p className="text-gray-300 mb-6">
              Learn how a Fortune 500 manufacturing conglomerate achieved unprecedented results 
              with our March 2026 AI breakthrough suite, generating $3.2B in measurable value.
            </p>
            <div className="space-y-2 mb-6 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>$3.2B Total Value Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span>99.5% Operational Efficiency</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                <span>1.2 Month Payback Period</span>
              </div>
            </div>
            <a 
              href="/case-studies/ai-2026-march-breakthrough-mega-success"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              View Case Study →
            </a>
          </div>

          {/* Consulting Services Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Consulting Services</h3>
            <p className="text-gray-300 mb-6">
              Transform your organization with our comprehensive AI consulting services, 
              featuring meta-cognitive strategy, quantum analytics, and autonomous operations.
            </p>
            <div className="space-y-2 mb-6 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Meta-Cognitive AI Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Quantum-Enhanced Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Autonomous Operations Consulting</span>
              </div>
            </div>
            <a 
              href="/services/ai-2026-march-breakthrough-consulting"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Get Consulting →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with March 2026 AI Breakthroughs?
            </h3>
            <p className="text-purple-200 text-lg mb-6">
              Join the AI revolution and discover how our revolutionary technologies can deliver 
              unprecedented results for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </a>
              <a
                href="/blog/ai-2026-march-revolutionary-breakthroughs"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Read Latest Breakthroughs
              </a>
              <a
                href="/case-studies/ai-2026-march-breakthrough-mega-success"
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                View $3.2B Success Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default March2026ContentShowcase;