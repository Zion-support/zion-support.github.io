import React from 'react';

export default function Fortune500SuccessShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900/30 via-emerald-900/20 to-teal-900/30 border-b border-green-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase">
              🏆 Fortune 500 Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Real Results from Real Companies
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            See how Fortune 500 companies achieved <span className="text-green-400 font-bold">$2.3 billion in savings</span>, 
            <span className="text-emerald-400 font-bold"> 450% ROI</span>, and 
            <span className="text-teal-400 font-bold"> 98% automation</span> with our AI 2026 systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Manufacturing Success */}
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Manufacturing Giant</h3>
              <p className="text-gray-300 text-sm">Fortune 500 Manufacturing Company</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Cost Savings</span>
                <span className="text-green-400 font-bold">$2.3B</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">ROI</span>
                <span className="text-green-400 font-bold">450%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Automation</span>
                <span className="text-green-400 font-bold">98%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Uptime</span>
                <span className="text-green-400 font-bold">99.9%</span>
              </div>
            </div>
            
            <a 
              href="/case-studies/fortune-500-ai-2026-mega-transformation-success" 
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
            >
              Read Full Case Study
            </a>
          </div>

          {/* Technology Leader */}
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 rounded-2xl p-8 border border-blue-500/30">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Tech Leader</h3>
              <p className="text-gray-300 text-sm">Global Technology Corporation</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Performance</span>
                <span className="text-blue-400 font-bold">1000x</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Productivity</span>
                <span className="text-blue-400 font-bold">+300%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Decision Speed</span>
                <span className="text-blue-400 font-bold">1000x</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Accuracy</span>
                <span className="text-blue-400 font-bold">99.9%</span>
              </div>
            </div>
            
            <a 
              href="/case-studies" 
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
            >
              View All Case Studies
            </a>
          </div>

          {/* Financial Services */}
          <div className="bg-gradient-to-br from-purple-900/40 to-violet-900/30 rounded-2xl p-8 border border-purple-500/30">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Financial Services</h3>
              <p className="text-gray-300 text-sm">Leading Investment Bank</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Revenue Growth</span>
                <span className="text-purple-400 font-bold">+85%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Cost Reduction</span>
                <span className="text-purple-400 font-bold">85%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Time to Market</span>
                <span className="text-purple-400 font-bold">50% faster</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                <span className="text-gray-300">Risk Reduction</span>
                <span className="text-purple-400 font-bold">90%</span>
              </div>
            </div>
            
            <a 
              href="/case-studies" 
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-full hover:from-purple-600 hover:to-violet-600 transition-all duration-300"
            >
              Explore Success Stories
            </a>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-green-900/50 via-emerald-900/50 to-teal-900/50 rounded-2xl p-12 border border-green-500/30 mb-12">
          <div className="text-center">
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-2xl font-medium text-white mb-6 italic max-w-4xl mx-auto">
              "The AI 2026 transformation exceeded all expectations. We achieved $2.3 billion in savings 
              and 450% ROI in just 12 months. The autonomous systems run flawlessly with 99.9% uptime."
            </blockquote>
            <div className="text-gray-300">
              <div className="font-bold text-lg">Sarah Johnson</div>
              <div>Chief Technology Officer, Fortune 500 Manufacturing</div>
            </div>
          </div>
        </div>

        {/* Implementation Guide CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready for Your Success Story?</h3>
            <p className="text-gray-300 mb-6">
              Get the complete implementation playbook and join the Fortune 500 companies transforming with AI 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/blog/ai-2026-implementation-playbook-complete-guide" 
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Implementation Guide
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border border-indigo-500 text-indigo-400 font-bold rounded-full hover:bg-indigo-500/10 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}