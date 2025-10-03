import React from 'react';
import { Link } from 'react-router-dom';

export default function December2025NewContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-violet-900/30 via-purple-900/30 to-indigo-900/30 backdrop-blur-sm border-b border-violet-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 mb-6">
            <span className="text-violet-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW DECEMBER 2025 CONTENT NOW LIVE!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Latest Enterprise AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the newest strategies, frameworks, and real-world success stories from leading enterprises 
            achieving unprecedented results with AI transformation and cost optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-violet-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-white font-bold text-xl">💰</span>
              </div>
              <div>
                <span className="text-violet-400 font-semibold text-sm">NEW BLOG POST</span>
                <span className="text-gray-400 text-sm ml-2">December 15, 2025</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise AI Transformation Playbook: From Strategy to ROI
            </h3>
            <p className="text-gray-300 mb-6">
              A comprehensive guide to successfully transforming your enterprise with AI, featuring proven frameworks, 
              real-world case studies, and actionable strategies that deliver measurable business results.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-violet-500/20 rounded-lg p-3">
                <div className="text-xl font-bold text-violet-400 mb-1">340%</div>
                <p className="text-gray-300 text-sm">Operational efficiency gain</p>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3">
                <div className="text-xl font-bold text-purple-400 mb-1">90</div>
                <p className="text-gray-300 text-sm">Days to first ROI</p>
              </div>
            </div>
            <Link
              href="/blog/ai-2025-december-enterprise-ai-transformation-guide"
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/50"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🏭</span>
              </div>
              <div>
                <span className="text-purple-400 font-semibold text-sm">NEW CASE STUDY</span>
                <span className="text-gray-400 text-sm ml-2">December 2025</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              $86M Manufacturing Transformation Success Story
            </h3>
            <p className="text-gray-300 mb-6">
              Discover how a leading manufacturing company achieved $86 million in value creation through 
              comprehensive AI transformation, including predictive maintenance and supply chain optimization.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-500/20 rounded-lg p-3">
                <div className="text-xl font-bold text-purple-400 mb-1">$86M</div>
                <p className="text-gray-300 text-sm">Value created</p>
              </div>
              <div className="bg-indigo-500/20 rounded-lg p-3">
                <div className="text-xl font-bold text-indigo-400 mb-1">67%</div>
                <p className="text-gray-300 text-sm">Downtime reduction</p>
              </div>
            </div>
            <Link
              href="/case-studies/manufacturing-ai-transformation-86-million-success"
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-xl font-bold text-white mb-2">AI Cost Optimization Mastery</h4>
            <p className="text-gray-300 text-sm mb-4">Reduce AI expenses by 78% while scaling performance with proven optimization strategies.</p>
            <Link 
              href="/blog/ai-2025-december-ai-cost-optimization-mastery"
              className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Learn More →
            </Link>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-bold text-white mb-2">90-Day AI Accelerator</h4>
            <p className="text-gray-300 text-sm mb-4">Proven program delivering measurable results in 90 days with ongoing support.</p>
            <Link 
              href="/services/90-day-ai-accelerator-program"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Get Started →
            </Link>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-xl font-bold text-white mb-2">ROI Measurement Framework</h4>
            <p className="text-gray-300 text-sm mb-4">Comprehensive framework for measuring AI transformation ROI across all business dimensions.</p>
            <Link 
              href="/resources/ai-roi-measurement-framework"
              className="inline-block bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Download Guide →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the 500+ enterprises that have successfully transformed their operations with our proven 
              AI strategies and frameworks. Get started with a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/50"
              >
                Get Free Consultation →
              </Link>
              <Link
                href="/case-studies"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                View All Case Studies →
              </Link>
              <Link
                href="/blog"
                className="border-2 border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Explore All Content →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
