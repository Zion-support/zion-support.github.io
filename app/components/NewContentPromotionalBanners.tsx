import React from 'react';
import Link from 'next/link';

export function AIEnterpriseAdoptionBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 New Article
              </span>
              <span className="text-blue-200 text-sm">20 min read</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Enterprise Adoption 2025: Complete Implementation Guide
            </h2>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI with our step-by-step guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-enterprise-adoption-2025"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Read Full Guide →
              </Link>
              <Link
                href="/services/ai-consulting"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Get AI Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Key Insights:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>300% average ROI in 12 months</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>70% reduction in implementation time</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>95% success rate with our framework</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AITrends2025Banner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              📊 Featured Article
            </span>
            <span className="text-purple-200 text-sm">15 min read</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Trends 2025: Top 10 Predictions & Industry Insights
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies that will revolutionize your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold mb-2">Autonomous Agents</h3>
            <p className="text-sm text-purple-200">Self-executing AI workflows</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-bold mb-2">Edge Computing</h3>
            <p className="text-sm text-purple-200">Sub-50ms response times</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">Generative AI</h3>
            <p className="text-sm text-purple-200">Creative content automation</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-trends-2025-predictions"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            Explore All Trends →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SupplyChainOptimizationBanner() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🏭 Success Story
              </span>
              <span className="text-green-200 text-sm">Manufacturing</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
            </h2>
            <p className="text-xl text-green-100 mb-6 leading-relaxed">
              See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually with our AI optimization platform.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">60%</div>
                <div className="text-sm text-green-200">Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">$12M</div>
                <div className="text-sm text-green-200">Annual Savings</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-supply-chain-optimization-2025"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                View Case Study →
              </Link>
              <Link
                href="/services/supply-chain-optimization"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
              >
                Get Optimization Audit
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Implementation Results:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Inventory Optimization</span>
                <span className="font-bold">85% improvement</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Delivery Time</span>
                <span className="font-bold">45% faster</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Forecast Accuracy</span>
                <span className="font-bold">92% accuracy</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Operational Efficiency</span>
                <span className="font-bold">90% gain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIBusinessTransformationBanner() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
            🚀 New Service
          </span>
          <span className="text-orange-200 text-sm">Enterprise AI</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          AI Business Transformation: Complete Enterprise Solution
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
          Transform your entire business with our comprehensive AI platform. From strategy to implementation, we deliver measurable results in 90 days.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold mb-2">AI Strategy</h3>
            <p className="text-sm text-orange-200">Custom roadmap development</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-lg font-bold mb-2">Implementation</h3>
            <p className="text-sm text-orange-200">End-to-end deployment</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-lg font-bold mb-2">Optimization</h3>
            <p className="text-sm text-orange-200">Continuous improvement</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold mb-2">ROI Tracking</h3>
            <p className="text-sm text-orange-200">Measurable results</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services/ai-business-transformation"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            Start Transformation →
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AICustomerExperienceBanner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🎯 Featured Solution
              </span>
              <span className="text-indigo-200 text-sm">Customer Experience</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI-Powered Customer Experience Revolution
            </h2>
            <p className="text-xl text-indigo-100 mb-6 leading-relaxed">
              Transform customer interactions with intelligent automation. Achieve 80% faster response times, 90% cost reduction, and 95% customer satisfaction.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>80% faster response times</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>90% cost reduction in support</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>95% customer satisfaction rate</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-customer-experience"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Transform CX →
              </Link>
              <Link
                href="/demo"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center"
              >
                Book Demo
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Key Features:</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🤖</span>
                </div>
                <div>
                  <h4 className="font-semibold">AI Chatbots</h4>
                  <p className="text-sm text-indigo-200">24/7 intelligent support</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold">Predictive Analytics</h4>
                  <p className="text-sm text-indigo-200">Anticipate customer needs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold">Personalization</h4>
                  <p className="text-sm text-indigo-200">Tailored experiences</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold">Real-time Insights</h4>
                  <p className="text-sm text-indigo-200">Instant feedback analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EnterpriseAITransformationBanner() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              🏢 Enterprise Solution
            </span>
            <span className="text-gray-300 text-sm">Large Scale AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Enterprise AI Transformation Platform
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Scale AI across your entire organization with our enterprise-grade platform. Designed for Fortune 500 companies seeking comprehensive digital transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Scalable cloud architecture</li>
              <li>• Enterprise security compliance</li>
              <li>• 99.9% uptime guarantee</li>
              <li>• Global deployment support</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-4">Integration</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Legacy system integration</li>
              <li>• API-first architecture</li>
              <li>• Real-time data processing</li>
              <li>• Seamless workflow automation</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-4">Analytics</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Advanced AI models</li>
              <li>• Predictive analytics</li>
              <li>• Real-time dashboards</li>
              <li>• Custom reporting suite</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/enterprise"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
          >
            Enterprise Demo →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LatestAIInsightsBanner() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              📚 Latest Insights
            </span>
            <span className="text-cyan-200 text-sm">Updated Daily</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Latest AI Insights & Industry Updates
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with cutting-edge AI research, industry breakthroughs, and practical implementation guides from our expert team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/llm-cost-optimization-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-500 px-2 py-1 rounded-full text-xs font-semibold">
                  Popular
                </span>
                <span className="text-cyan-200 text-sm">9 min read</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-200 transition-colors">
                LLM Cost Optimization in 2025: Practical Strategies
              </h3>
              <p className="text-cyan-200 text-sm">
                Cut LLM spend by 30–70% with routing, caching, and quantization patterns.
              </p>
            </div>
          </Link>
          
          <Link href="/blog/edge-llm-latency-patterns" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-500 px-2 py-1 rounded-full text-xs font-semibold">
                  New
                </span>
                <span className="text-cyan-200 text-sm">7 min read</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-200 transition-colors">
                Edge LLM Latency Patterns: Sub-200ms Interactions
              </h3>
              <p className="text-cyan-200 text-sm">
                Streaming, prefetch, and edge compute patterns for instant-feel AI UX.
              </p>
            </div>
          </Link>
          
          <Link href="/blog/genai-guardrails-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-500 px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </span>
                <span className="text-cyan-200 text-sm">11 min read</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-200 transition-colors">
                GenAI Guardrails 2025: Practical Playbook for Reliable AI
              </h3>
              <p className="text-cyan-200 text-sm">
                Practical patterns to ship safe, reliable, and auditable GenAI systems.
              </p>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            View All Insights →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIServicesShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🛠️ Our Services
            </span>
            <span className="text-emerald-200 text-sm">Complete AI Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Comprehensive AI Services Portfolio
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            From strategy to implementation, we provide end-to-end AI solutions that drive measurable business results and competitive advantage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold mb-2">AI Strategy</h3>
            <p className="text-sm text-emerald-200 mb-4">Strategic planning and roadmap development</p>
            <Link
              href="/services/ai-strategy"
              className="text-white font-semibold hover:text-emerald-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-lg font-bold mb-2">Implementation</h3>
            <p className="text-sm text-emerald-200 mb-4">End-to-end AI solution deployment</p>
            <Link
              href="/services/ai-implementation"
              className="text-white font-semibold hover:text-emerald-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-bold mb-2">Analytics</h3>
            <p className="text-sm text-emerald-200 mb-4">Advanced data analytics and insights</p>
            <Link
              href="/services/ai-analytics"
              className="text-white font-semibold hover:text-emerald-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-bold mb-2">Optimization</h3>
            <p className="text-sm text-emerald-200 mb-4">Performance tuning and scaling</p>
            <Link
              href="/services/ai-optimization"
              className="text-white font-semibold hover:text-emerald-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/services"
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIWorkflowAutomationBanner() {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                ⚙️ Automation
              </span>
              <span className="text-violet-200 text-sm">Workflow Intelligence</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Workflow Automation: 80% Process Reduction
            </h2>
            <p className="text-xl text-violet-100 mb-6 leading-relaxed">
              Automate complex business processes with intelligent workflow design. Reduce manual work by 80% while improving accuracy and speed.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>80% reduction in manual processes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>95% accuracy in automated decisions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>300% faster process execution</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/workflow-automation"
                className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Automate Workflows →
              </Link>
              <Link
                href="/demo/workflow-automation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors inline-flex items-center justify-center"
              >
                Live Demo
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Automation Capabilities:</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📋</span>
                </div>
                <div>
                  <h4 className="font-semibold">Document Processing</h4>
                  <p className="text-sm text-violet-200">Automated data extraction and validation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🔄</span>
                </div>
                <div>
                  <h4 className="font-semibold">Process Orchestration</h4>
                  <p className="text-sm text-violet-200">Intelligent workflow coordination</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold">Smart Routing</h4>
                  <p className="text-sm text-violet-200">Intelligent task assignment</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold">Performance Analytics</h4>
                  <p className="text-sm text-violet-200">Real-time process monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EnterpriseAISecurityBanner() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🛡️ Security
            </span>
            <span className="text-red-200 text-sm">Enterprise Grade</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Enterprise AI Security & Compliance
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your AI investments with enterprise-grade security, compliance frameworks, and advanced threat detection. SOC 2, GDPR, and HIPAA compliant.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-4">Data Protection</h3>
            <ul className="space-y-2 text-red-200 text-left">
              <li>• End-to-end encryption</li>
              <li>• Zero-trust architecture</li>
              <li>• Data residency controls</li>
              <li>• Privacy by design</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-4">Compliance</h3>
            <ul className="space-y-2 text-red-200 text-left">
              <li>• SOC 2 Type II certified</li>
              <li>• GDPR compliant</li>
              <li>• HIPAA ready</li>
              <li>• ISO 27001 aligned</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-4">Threat Detection</h3>
            <ul className="space-y-2 text-red-200 text-left">
              <li>• AI-powered monitoring</li>
              <li>• Real-time threat analysis</li>
              <li>• Automated incident response</li>
              <li>• Security analytics</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/security"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            Security Audit →
          </Link>
        </div>
      </div>
    </section>
  );
}