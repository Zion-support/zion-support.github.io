import React from 'react';
import Link from 'next/link';

export function AITrends2025PromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">🔥 Featured Article</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Trends 2025:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Enterprise Transformation Guide
              </span>
            </h2>
            <p className="text-xl mb-6 opacity-90 leading-relaxed">
              Discover the revolutionary AI trends that will reshape enterprise operations in 2025. 
              From autonomous AI systems to quantum computing integration, achieve 300% ROI and 90% efficiency gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-trends-2025-enterprise-transformation"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
              >
                Read Full Article
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <h4 className="font-semibold mb-1">Autonomous AI Systems</h4>
                  <p className="text-sm opacity-90">Self-healing infrastructure with 99.9% uptime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1">Quantum AI Computing</h4>
                  <p className="text-sm opacity-90">1000x faster optimization algorithms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1">Multimodal AI Integration</h4>
                  <p className="text-sm opacity-90">250% efficiency gains with text, voice, and video</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1">Edge AI Computing</h4>
                  <p className="text-sm opacity-90">Sub-50ms response times for real-time applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Fortune500SuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">🏆 Success Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Fortune 500 AI Success:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                300% ROI in 8 Months
              </span>
            </h2>
            <p className="text-xl mb-6 opacity-90 leading-relaxed">
              See how a leading Fortune 500 manufacturing company achieved unprecedented results 
              through comprehensive AI transformation. From 90% efficiency gains to $12M annual savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/fortune-500-ai-transformation-success"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
              >
                View Case Study
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Get Similar Results
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Transformation Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-1">300%</div>
                <div className="text-sm opacity-90">ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">$12M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-1">90%</div>
                <div className="text-sm opacity-90">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">8</div>
                <div className="text-sm opacity-90">Months to ROI</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <blockquote className="text-sm italic">
                "The AI transformation has been nothing short of revolutionary. We achieved 300% ROI 
                in just 8 months and transformed our entire operation."
              </blockquote>
              <div className="text-xs mt-2 opacity-75">- John Davidson, CTO, Fortune 500 Company</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InteractiveROICalculatorBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold">🧮 Interactive Tool</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI ROI Calculator:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Calculate Your Potential Returns
            </span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Use our interactive ROI calculator to project your potential returns from AI transformation. 
            See how much you could save and achieve with enterprise AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#roi-calculator"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Try ROI Calculator
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-bold mb-2">Accurate Projections</h3>
            <p className="text-sm opacity-90">Based on real enterprise data and proven results</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">Instant Results</h3>
            <p className="text-sm opacity-90">Get immediate ROI projections for your business</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-2">Detailed Breakdown</h3>
            <p className="text-sm opacity-90">Comprehensive analysis of costs, savings, and benefits</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AITransformationShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold">🚀 New Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Transformation Showcase:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Latest Insights & Success Stories
            </span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Explore our latest AI transformation content, including comprehensive guides, 
            success stories, and interactive tools to accelerate your enterprise AI journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ai-trends-2025-enterprise-transformation" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Trends 2025 Guide
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master the AI trends that will transform your enterprise in 2025. 
                Achieve 300% ROI with proven strategies.
              </p>
              <div className="text-yellow-300 font-semibold text-sm">Read Article →</div>
            </div>
          </Link>
          
          <Link href="/case-studies/fortune-500-ai-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                Fortune 500 Success
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved 300% ROI and $12M savings 
                through AI transformation.
              </p>
              <div className="text-yellow-300 font-semibold text-sm">View Case Study →</div>
            </div>
          </Link>
          
          <a href="#roi-calculator" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                ROI Calculator
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Calculate your potential AI transformation returns with our 
                interactive ROI calculator tool.
              </p>
              <div className="text-yellow-300 font-semibold text-sm">Try Calculator →</div>
            </div>
          </a>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore AI Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}