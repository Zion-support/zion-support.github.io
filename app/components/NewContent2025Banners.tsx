import React from 'react';
import Link from 'next/link';

export function AI2025BreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                🚀 New Article
              </span>
              <span className="text-white/80 text-sm">25 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              AI 2025 Enterprise Breakthrough: The $50B Transformation Revolution
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Discover how AI is creating a $50B enterprise transformation market in 2025. 
              Learn about breakthrough technologies, implementation strategies, and real-world success stories.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">$50B</div>
                <div className="text-sm text-white/80">Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">300%</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm text-white/80">Cost Reduction</div>
              </div>
            </div>
            <Link
              href="/blog/ai-2025-enterprise-breakthrough"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Read Full Article →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span>Multimodal AI Integration achieving 250% efficiency gains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span>Autonomous AI Agents with 90% process automation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span>Edge AI Computing with sub-50ms response times</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span>Real-world success stories and implementation roadmaps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIAutonomousSystemsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                🤖 New Article
              </span>
              <span className="text-white/80 text-sm">20 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              AI Autonomous Systems 2025: Self-Managing Enterprise Operations
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Explore how AI autonomous systems are revolutionizing enterprise operations with self-managing 
              workflows, intelligent automation, and minimal human intervention.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm text-white/80">Process Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Autonomous Operation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-white/80">Uptime Reliability</div>
              </div>
            </div>
            <Link
              href="/blog/ai-autonomous-systems-2025"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Read Full Article →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4">Industry Applications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold">Manufacturing</div>
                <div className="text-sm text-white/80">95% automation</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">Finance</div>
                <div className="text-sm text-white/80">99.9% accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">Healthcare</div>
                <div className="text-sm text-white/80">35% better outcomes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">Retail</div>
                <div className="text-sm text-white/80">60% revenue increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AITransformationSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                📈 Success Story
              </span>
              <span className="text-white/80 text-sm">15 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              AI Transformation Mega Success: 500% ROI in 6 Months
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Discover how GlobalCorp achieved 500% ROI through comprehensive AI transformation. 
              Learn about their implementation strategy, challenges overcome, and lessons learned.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">500%</div>
                <div className="text-sm text-white/80">ROI in 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$15M</div>
                <div className="text-sm text-white/80">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">80%</div>
                <div className="text-sm text-white/80">Efficiency Gain</div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-transformation-mega-success-2025"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Case Study →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4">Transformation Results</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex justify-between">
                <span>Process Automation Rate</span>
                <span className="font-bold">95%</span>
              </li>
              <li className="flex justify-between">
                <span>Quality Defect Reduction</span>
                <span className="font-bold">90%</span>
              </li>
              <li className="flex justify-between">
                <span>Order Processing Time</span>
                <span className="font-bold">-75%</span>
              </li>
              <li className="flex justify-between">
                <span>Supply Chain Accuracy</span>
                <span className="font-bold">98%</span>
              </li>
              <li className="flex justify-between">
                <span>Operational Cost Reduction</span>
                <span className="font-bold">40%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LatestContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest AI Insights & Breakthroughs
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay ahead with our latest content, case studies, and AI innovations that are transforming industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                Featured Article
              </span>
              <span className="text-white/80 text-sm">25 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI 2025 Enterprise Breakthrough
            </h3>
            <p className="text-white/90 mb-4">
              Discover how AI is creating a $50B enterprise transformation market with breakthrough technologies.
            </p>
            <Link
              href="/blog/ai-2025-enterprise-breakthrough"
              className="text-white font-semibold hover:text-white/80 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                New Article
              </span>
              <span className="text-white/80 text-sm">20 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Autonomous Systems 2025
            </h3>
            <p className="text-white/90 mb-4">
              Explore self-managing AI systems that revolutionize enterprise operations with 90% automation.
            </p>
            <Link
              href="/blog/ai-autonomous-systems-2025"
              className="text-white font-semibold hover:text-white/80 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                Success Story
              </span>
              <span className="text-white/80 text-sm">15 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Transformation Mega Success
            </h3>
            <p className="text-white/90 mb-4">
              See how GlobalCorp achieved 500% ROI in 6 months with comprehensive AI transformation.
            </p>
            <Link
              href="/case-studies/ai-transformation-mega-success-2025"
              className="text-white font-semibold hover:text-white/80 transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-block bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Content →
          </Link>
        </div>
      </div>
    </section>
  );
}