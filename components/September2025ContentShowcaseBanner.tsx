import React from 'react';

export default function September2025ContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 border-y border-emerald-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 mb-6 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 September 2025 Latest Content Released!
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Transform Your Enterprise with Proven AI Strategies
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the latest insights, success stories, and acceleration programs that are helping 
            leading enterprises achieve <span className="text-emerald-400 font-bold">10x deployment velocity</span> and 
            <span className="text-cyan-400 font-bold"> $8.5B+ in measurable value</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">📚</div>
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold mb-4">
              NEW GUIDE
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise Deployment Mastery
            </h3>
            <p className="text-gray-300 mb-6">
              September 2025 strategic guide revealing how leading enterprises achieve 95% deployment success 
              rates and 10x faster time-to-production with proven methodologies.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li>✓ Automated Infrastructure at Scale</li>
              <li>✓ MLOps Excellence Framework</li>
              <li>✓ Security & Compliance Best Practices</li>
              <li>✓ $18M Average Annual Value</li>
            </ul>
            <a 
              href="/blog/ai-2025-september-30-enterprise-deployment-mastery"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
            >
              Read Full Guide →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">💎</div>
            <div className="inline-block px-4 py-2 rounded-full bg-teal-500/20 text-teal-400 text-sm font-bold mb-4">
              SUCCESS STORY
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              $8.5B Retail Transformation
            </h3>
            <p className="text-gray-300 mb-6">
              Fortune 100 global retailer achieves unprecedented results through comprehensive AI transformation: 
              87% stockout reduction, 340% conversion increase, 99.99% uptime.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li>✓ $8.5B Total Value Generated</li>
              <li>✓ 21-Month Transformation Timeline</li>
              <li>✓ 2.8M SKUs Optimized Real-Time</li>
              <li>✓ 1,200+ Locations Deployed</li>
            </ul>
            <a 
              href="/case-studies/ai-2025-september-global-retail-transformation-8-5-billion-success"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50"
            >
              View Case Study →
            </a>
          </div>

          {/* Service */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">🚀</div>
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-bold mb-4">
              NEW PROGRAM
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Deployment Acceleration
            </h3>
            <p className="text-gray-300 mb-6">
              Move from AI experimentation to production-scale deployment with our comprehensive 6-12 month 
              program delivering 10-15x ROI and 95% success rates.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li>✓ 10x Faster Deployment Velocity</li>
              <li>✓ Production in Week 8</li>
              <li>✓ 95% Success Rate Guaranteed</li>
              <li>✓ Complete Knowledge Transfer</li>
            </ul>
            <a 
              href="/services/ai-2025-september-deployment-acceleration-program"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Accelerate Your AI Journey?
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Join the leading enterprises achieving breakthrough results with Zion Tech Group's proven 
            AI deployment strategies and comprehensive support programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="/services/ai-2025-september-deployment-acceleration-program"
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore Acceleration Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
