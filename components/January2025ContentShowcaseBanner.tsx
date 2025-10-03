import React from 'react';

const January2025ContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🎯 JANUARY 2025 CONTENT SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Latest AI Innovations & Success Stories
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our newest content featuring revolutionary autonomous systems, proven case studies, 
            and comprehensive implementation services that have generated billions in enterprise value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">📚</div>
              <h3 className="text-xl font-bold text-white">Latest Blog Posts</h3>
            </div>
            <div className="space-y-3 mb-6">
              <a 
                href="/blog/ai-2025-january-next-gen-autonomous-systems-revolution"
                className="block p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors"
              >
                <div className="text-blue-400 font-semibold text-sm mb-1">Next-Gen Autonomous Systems</div>
                <div className="text-gray-300 text-xs">$127B Enterprise Transformation</div>
              </a>
              <a 
                href="/blog/ai-2026-january-revolutionary-breakthroughs"
                className="block p-3 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                <div className="text-purple-400 font-semibold text-sm mb-1">AI 2026 Breakthroughs</div>
                <div className="text-gray-300 text-xs">100,000x Performance Improvements</div>
              </a>
              <a 
                href="/blog/ai-2025-enterprise-deployment-best-practices"
                className="block p-3 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors"
              >
                <div className="text-green-400 font-semibold text-sm mb-1">Enterprise Deployment</div>
                <div className="text-gray-300 text-xs">Best Practices Guide</div>
              </a>
            </div>
            <a 
              href="/blog"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              View All Articles →
            </a>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">💼</div>
              <h3 className="text-xl font-bold text-white">Success Stories</h3>
            </div>
            <div className="space-y-3 mb-6">
              <a 
                href="/case-studies/ai-2025-january-global-tech-autonomous-transformation-89-billion-success"
                className="block p-3 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors"
              >
                <div className="text-green-400 font-semibold text-sm mb-1">Global Tech Giant</div>
                <div className="text-gray-300 text-xs">$89B Autonomous Transformation</div>
              </a>
              <a 
                href="/case-studies/ai-2025-oct-automotive-quantum-edge-transformation-327-billion-success"
                className="block p-3 bg-orange-500/10 rounded-lg hover:bg-orange-500/20 transition-colors"
              >
                <div className="text-orange-400 font-semibold text-sm mb-1">Automotive Revolution</div>
                <div className="text-gray-300 text-xs">$327B Quantum Edge Success</div>
              </a>
              <a 
                href="/case-studies/ai-2025-oct-pharmaceutical-ai-drug-discovery-87-billion-success"
                className="block p-3 bg-pink-500/10 rounded-lg hover:bg-pink-500/20 transition-colors"
              >
                <div className="text-pink-400 font-semibold text-sm mb-1">Pharmaceutical AI</div>
                <div className="text-gray-300 text-xs">$87B Drug Discovery Success</div>
              </a>
            </div>
            <a 
              href="/case-studies"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              View All Case Studies →
            </a>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">⚡</div>
              <h3 className="text-xl font-bold text-white">Services</h3>
            </div>
            <div className="space-y-3 mb-6">
              <a 
                href="/services/next-gen-autonomous-systems-implementation"
                className="block p-3 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                <div className="text-purple-400 font-semibold text-sm mb-1">Autonomous Systems</div>
                <div className="text-gray-300 text-xs">99.9% Operational Autonomy</div>
              </a>
              <a 
                href="/services/ai-consulting-and-strategy"
                className="block p-3 bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20 transition-colors"
              >
                <div className="text-indigo-400 font-semibold text-sm mb-1">AI Consulting</div>
                <div className="text-gray-300 text-xs">Strategic AI Implementation</div>
              </a>
              <a 
                href="/services/enterprise-ai-transformation"
                className="block p-3 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                <div className="text-cyan-400 font-semibold text-sm mb-1">Enterprise Transformation</div>
                <div className="text-gray-300 text-xs">Complete AI Overhaul</div>
              </a>
            </div>
            <a 
              href="/services"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Explore All Services →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              🚀 Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-4">
              Join hundreds of Fortune 500 companies that have achieved unprecedented success with our AI solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a 
                href="/about" 
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Learn About Zion Tech
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025ContentShowcaseBanner;