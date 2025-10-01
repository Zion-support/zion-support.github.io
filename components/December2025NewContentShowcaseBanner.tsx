import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';

const December2025NewContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
              <span className="text-white font-bold text-lg tracking-wider uppercase animate-pulse">
                🚀 NEW DECEMBER 2025 BREAKTHROUGHS
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
              Revolutionary Autonomous Systems & Edge Intelligence
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto font-semibold">
              Discover the latest breakthroughs achieving 99.9% automation, $500M ROI, and 50x performance improvements
            </p>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-extrabold text-white mb-1">99.9%</div>
              <div className="text-xs text-blue-100">Autonomous Operations</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-extrabold text-white mb-1">$500M</div>
              <div className="text-xs text-blue-100">ROI Achievement</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-extrabold text-white mb-1">50x</div>
              <div className="text-xs text-blue-100">Edge Performance</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-extrabold text-white mb-1">70%</div>
              <div className="text-xs text-blue-100">Cost Reduction</div>
            </div>
          </div>

          {/* Content showcase grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Autonomous Cloud Operations */}
            <Link href="/blog/ai-2025-december-autonomous-cloud-operations" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">CLOUD OPS</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Autonomous Cloud Operations</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Revolutionary breakthrough achieving 99.9% uptime, 70% cost reduction, and complete self-healing infrastructure through advanced AI orchestration.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-blue-200">12 min read</div>
                  <div className="text-cyan-300 text-sm font-semibold group-hover:text-cyan-200">Read More →</div>
                </div>
              </div>
            </Link>

            {/* Edge Intelligence Revolution */}
            <Link href="/blog/ai-2025-december-edge-intelligence-revolution" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">EDGE AI</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Edge Intelligence Revolution</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Discover how edge intelligence systems are delivering 50x performance improvements, real-time decision making, and autonomous edge computing capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-blue-200">15 min read</div>
                  <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Read More →</div>
                </div>
              </div>
            </Link>

            {/* Success Story */}
            <Link href="/case-studies/ai-2025-december-autonomous-systems-500-million-success" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$500M</span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">SUCCESS</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">$500M Success Story</h3>
                <p className="text-blue-100 text-sm mb-4">
                  How a Fortune 100 global conglomerate achieved $500M ROI through revolutionary autonomous systems implementation with 99.9% automation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-blue-200">18 min read</div>
                  <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read More →</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2025-december-autonomous-cloud-operations" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Autonomous Cloud Ops
            </Link>
            <Link 
              href="/blog/ai-2025-december-edge-intelligence-revolution" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover Edge Intelligence
            </Link>
            <Link 
              href="/case-studies/ai-2025-december-autonomous-systems-500-million-success" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View $500M Success Story
            </Link>
          </div>

          {/* Additional links */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">
                All Blog Posts →
              </Link>
              <Link href="/case-studies" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">
                All Case Studies →
              </Link>
              <Link href="/services" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">
                Our Services →
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">
                Get Started →
              </Link>
=======

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
            <a
              href="/blog/ai-2025-december-enterprise-ai-transformation-guide"
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/50"
            >
              Read Full Guide →
            </a>
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
            <a
              href="/case-studies/manufacturing-ai-transformation-86-million-success"
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-xl font-bold text-white mb-2">AI Cost Optimization Mastery</h4>
            <p className="text-gray-300 text-sm mb-4">Reduce AI expenses by 78% while scaling performance with proven optimization strategies.</p>
            <a 
              href="/blog/ai-2025-december-ai-cost-optimization-mastery"
              className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Learn More →
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-bold text-white mb-2">90-Day AI Accelerator</h4>
            <p className="text-gray-300 text-sm mb-4">Proven program delivering measurable results in 90 days with ongoing support.</p>
            <a 
              href="/services/90-day-ai-accelerator-program"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Get Started →
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-xl font-bold text-white mb-2">ROI Measurement Framework</h4>
            <p className="text-gray-300 text-sm mb-4">Comprehensive framework for measuring AI transformation ROI across all business dimensions.</p>
            <a 
              href="/resources/ai-roi-measurement-framework"
              className="inline-block bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Download Guide →
            </a>
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
              <a
                href="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/50"
              >
                Get Free Consultation →
              </a>
              <a
                href="/case-studies"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                View All Case Studies →
              </a>
              <a
                href="/blog"
                className="border-2 border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Explore All Content →
              </a>
>>>>>>> origin/cursor/create-and-deploy-new-content-b9d8
            </div>
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
};

export default December2025NewContentShowcaseBanner;
=======
}
>>>>>>> origin/cursor/create-and-deploy-new-content-b9d8
