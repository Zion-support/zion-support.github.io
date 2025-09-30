import React from 'react';
import Link from 'next/link';

export function RevolutionaryContent2026Banner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & Insights for 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover cutting-edge AI strategies, enterprise transformation guides, and real-world success stories that are reshaping industries in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">AI Enterprise Transformation</h3>
                  <p className="text-sm opacity-80">Complete 2026 Guide</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Master AI enterprise transformation with proven strategies achieving 300% ROI and 70% cost reduction.
              </p>
              <div className="flex items-center text-blue-300 font-semibold group-hover:text-white transition-colors">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-edge-computing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">AI Edge Computing</h3>
                  <p className="text-sm opacity-80">Real-Time Intelligence</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Achieve sub-50ms response times with AI processing at the edge for autonomous vehicles and IoT.
              </p>
              <div className="flex items-center text-cyan-300 font-semibold group-hover:text-white transition-colors">
                Learn More →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-finance-automation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Finance Automation Success</h3>
                  <p className="text-sm opacity-80">$3M Savings Case Study</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                See how we achieved 95% process automation and $3M annual savings for a Fortune 500 company.
              </p>
              <div className="flex items-center text-green-300 font-semibold group-hover:text-white transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All 2026 Content
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIEnterpriseTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                Featured Article
              </span>
              <span className="text-gray-500 text-sm">20 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI Enterprise Transformation 2026: Complete Implementation Guide
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Master AI enterprise transformation with our comprehensive 2026 guide. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with proven strategies and implementation roadmaps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-enterprise-transformation-2026"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Read Complete Guide
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </span>
                <span>300% ROI achievable within 12 months</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </span>
                <span>70% cost reduction through intelligent automation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </span>
                <span>90% efficiency gains in core business processes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </span>
                <span>5-step framework for successful transformation</span>
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
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">AUTONOMOUS AI SYSTEMS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Future is Autonomous: AI Systems That Work 24/7
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how autonomous AI systems are revolutionizing industries with self-managing, self-optimizing, and self-healing capabilities that deliver unprecedented efficiency and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Self-Managing</h3>
            <p className="text-gray-600 text-center mb-4">
              AI systems that automatically configure, monitor, and optimize themselves without human intervention.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Self-Optimizing</h3>
            <p className="text-gray-600 text-center mb-4">
              Continuous learning and adaptation to improve performance and efficiency over time.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">40%</div>
              <div className="text-sm text-gray-500">Performance Gain</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Self-Healing</h3>
            <p className="text-gray-600 text-center mb-4">
              Automatic detection and resolution of issues to maintain optimal system performance.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">95%</div>
              <div className="text-sm text-gray-500">Issue Resolution</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services/autonomous-ai-systems"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Autonomous AI Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ManufacturingTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Manufacturing AI Transformation</h2>
            <p className="text-lg mb-6 opacity-90">
              See how AI is revolutionizing manufacturing with intelligent automation, predictive maintenance, and quality optimization that delivers measurable results.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold">60%</div>
                <div className="text-sm opacity-80">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">90%</div>
                <div className="text-sm opacity-80">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">$12M</div>
                <div className="text-sm opacity-80">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm opacity-80">Quality Improvement</div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-supply-chain-optimization-2025"
              className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Success Story
            </Link>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Case Study
              </span>
              <span className="text-gray-500 text-sm">Manufacturing</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually through AI-powered supply chain optimization.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>Intelligent demand forecasting with 95% accuracy</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>Automated inventory optimization reducing waste by 70%</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>Predictive maintenance preventing 90% of equipment failures</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>Real-time quality control with 99.7% defect detection</div>
              </li>
            </ul>
            <Link
              href="/case-studies/ai-supply-chain-optimization-2025"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Read Full Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIEnterpriseServicesBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">ENTERPRISE AI SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive AI Services for Enterprise Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From strategy to implementation, our comprehensive AI services help enterprises achieve digital transformation with measurable ROI and sustainable competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">AI Strategy</h3>
            <p className="text-gray-600 text-sm mb-4">
              Comprehensive AI strategy development and roadmap creation for enterprise transformation.
            </p>
            <div className="text-2xl font-bold text-indigo-600">300%</div>
            <div className="text-xs text-gray-500">ROI Guaranteed</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation</h3>
            <p className="text-gray-600 text-sm mb-4">
              End-to-end AI solution implementation with proven methodologies and best practices.
            </p>
            <div className="text-2xl font-bold text-purple-600">90%</div>
            <div className="text-xs text-gray-500">Success Rate</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Analytics</h3>
            <p className="text-gray-600 text-sm mb-4">
              Advanced AI analytics and insights for data-driven decision making and optimization.
            </p>
            <div className="text-2xl font-bold text-teal-600">70%</div>
            <div className="text-xs text-gray-500">Cost Reduction</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Support</h3>
            <p className="text-gray-600 text-sm mb-4">
              24/7 AI system monitoring, maintenance, and optimization for maximum performance.
            </p>
            <div className="text-2xl font-bold text-pink-600">99.9%</div>
            <div className="text-xs text-gray-500">Uptime</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LatestContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest content, case studies, and AI innovations that are transforming industries in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  New Article
                </span>
                <span className="text-sm text-gray-500">20 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Enterprise Transformation 2026: Complete Implementation Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-edge-computing-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Innovation
                </span>
                <span className="text-sm text-gray-500">15 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                AI Edge Computing 2026: Real-Time Intelligence at the Edge
              </h3>
              <p className="text-gray-600 mb-4">
                Achieve sub-50ms response times with AI processing at the edge. Perfect for autonomous vehicles and IoT applications.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold">
                Learn More →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-finance-automation-success" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">Financial Services</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Finance Automation: 95% Process Reduction & $3M Savings
              </h3>
              <p className="text-gray-600 mb-4">
                See how a Fortune 500 company achieved 95% process automation and $3M annual savings with our AI solutions.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Content
          </Link>
        </div>
      </div>
    </section>
  );
}

export function InteractiveAICalculatorBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">INTERACTIVE TOOL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI ROI Calculator: Calculate Your Potential Savings
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover how much your organization could save with AI automation. Get instant, personalized ROI calculations based on your industry and company size.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Industry</label>
              <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50">
                <option value="">Select Industry</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="finance">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Company Size</label>
              <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50">
                <option value="">Select Size</option>
                <option value="small">1-50 employees</option>
                <option value="medium">51-500 employees</option>
                <option value="large">501-5000 employees</option>
                <option value="enterprise">5000+ employees</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Calculate My AI ROI
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm opacity-80">
            Get detailed results and personalized recommendations in under 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
}

export function AIInnovationShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">AI INNOVATION SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Technologies Shaping 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI innovations that are transforming industries and creating new possibilities for business growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Generative AI</h3>
            <p className="text-gray-600 text-center mb-4">
              Create content, code, and solutions with AI that understands context and generates human-like outputs.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-violet-600">85%</div>
              <div className="text-sm text-gray-500">Productivity Increase</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Predictive Analytics</h3>
            <p className="text-gray-600 text-center mb-4">
              Anticipate future trends, customer behavior, and market changes with advanced predictive modeling.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">92%</div>
              <div className="text-sm text-gray-500">Accuracy Rate</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Autonomous Agents</h3>
            <p className="text-gray-600 text-center mb-4">
              Deploy AI agents that work independently to complete complex tasks and make intelligent decisions.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">24/7</div>
              <div className="text-sm text-gray-500">Operation</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-violet-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-violet-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore AI Innovations
          </Link>
        </div>
      </div>
    </section>
  );
}