import React from 'react';
import Link from 'next/link';

export function AIEnterpriseTransformationBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 2026 Innovation
            </span>
            <span className="text-blue-200 text-sm">Enterprise AI Revolution</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            AI Enterprise Transformation 2026: The Future is Now
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover how leading enterprises are achieving 400% ROI, 85% cost reduction, and complete digital transformation with next-generation AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-blue-500/20">
            <div className="text-5xl mb-6">🏢</div>
            <h3 className="text-2xl font-bold mb-4">Enterprise AI Platform</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Complete AI transformation platform with autonomous systems, predictive analytics, and intelligent automation.
            </p>
            <div className="bg-green-500/20 rounded-lg p-4 mb-4">
              <div className="text-3xl font-bold text-green-300">400%</div>
              <div className="text-green-200">Average ROI</div>
            </div>
            <Link
              href="/blog/ai-enterprise-transformation-2026"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Read Full Guide →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-blue-500/20">
            <div className="text-5xl mb-6">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous AI Systems</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Self-managing AI agents that handle complex business processes with 99.9% accuracy and zero human intervention.
            </p>
            <div className="bg-purple-500/20 rounded-lg p-4 mb-4">
              <div className="text-3xl font-bold text-purple-300">99.9%</div>
              <div className="text-purple-200">Automation Accuracy</div>
            </div>
            <Link
              href="/case-studies/autonomous-ai-systems-2026"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              View Case Study →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-blue-500/20">
            <div className="text-5xl mb-6">📊</div>
            <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Advanced forecasting and decision-making with 95% accuracy in business predictions and market analysis.
            </p>
            <div className="bg-orange-500/20 rounded-lg p-4 mb-4">
              <div className="text-3xl font-bold text-orange-300">95%</div>
              <div className="text-orange-200">Prediction Accuracy</div>
            </div>
            <Link
              href="/services/ai-predictive-analytics"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              Get Analytics Demo →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/services/ai-enterprise-transformation"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Start Your AI Transformation →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIAutonomousSystemsBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                🤖 Revolutionary Tech
              </span>
              <span className="text-purple-200 text-sm">Autonomous AI 2026</span>
            </div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Autonomous AI Systems: The Next Frontier
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Experience the future with self-managing AI systems that operate independently, make intelligent decisions, and deliver unprecedented results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-purple-200">Autonomous Operation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-purple-200">Uptime Guarantee</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/autonomous-ai-systems-2026"
                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
              >
                Learn About Autonomous AI →
              </Link>
              <Link
                href="/demo/autonomous-systems"
                className="border-2 border-purple-400 text-purple-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-purple-900 transition-colors inline-flex items-center justify-center"
              >
                Live Demo
              </Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6">Key Capabilities:</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🧠</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Self-Learning AI</h4>
                  <p className="text-purple-200">Continuously improves performance without human intervention</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Real-time Decision Making</h4>
                  <p className="text-purple-200">Instant responses to complex business scenarios</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🔄</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Adaptive Workflows</h4>
                  <p className="text-purple-200">Automatically adjusts processes based on changing conditions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Predictive Maintenance</h4>
                  <p className="text-purple-200">Proactive system optimization and issue prevention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ManufacturingTransformationBanner() {
  return (
    <section className="bg-gradient-to-r from-green-900 to-teal-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold">
              🏭 Industry 4.0
            </span>
            <span className="text-green-200 text-sm">Smart Manufacturing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Manufacturing AI Transformation: $50M+ Savings Achieved
          </h2>
          <p className="text-2xl text-green-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            See how global manufacturers are revolutionizing their operations with AI-powered smart manufacturing, achieving unprecedented efficiency and cost savings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-500/20">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">Production Efficiency</h3>
            <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
            <p className="text-green-200 text-sm">Improvement in throughput</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-500/20">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">Cost Reduction</h3>
            <div className="text-4xl font-bold text-blue-400 mb-2">70%</div>
            <p className="text-green-200 text-sm">Reduction in operational costs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-500/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Quality Control</h3>
            <div className="text-4xl font-bold text-purple-400 mb-2">99.8%</div>
            <p className="text-green-200 text-sm">Defect detection accuracy</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-500/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Predictive Maintenance</h3>
            <div className="text-4xl font-bold text-orange-400 mb-2">90%</div>
            <p className="text-green-200 text-sm">Reduction in downtime</p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-green-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Success Story: Global Auto Manufacturer</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>$50M annual savings achieved</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>85% improvement in production efficiency</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>99.8% quality control accuracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>90% reduction in unplanned downtime</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/case-studies/manufacturing-ai-transformation-2026"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                View Full Case Study →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/services/manufacturing-ai-transformation"
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-green-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Transform Your Manufacturing →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIEnterpriseServicesBanner() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              🏢 Enterprise Services
            </span>
            <span className="text-blue-200 text-sm">Complete AI Solutions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Comprehensive AI Enterprise Services Portfolio
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            From strategy to implementation, we provide end-to-end AI solutions that drive measurable business results and competitive advantage for enterprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold mb-4">AI Strategy & Consulting</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Strategic planning, roadmap development, and ROI optimization for enterprise AI transformation initiatives.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• AI readiness assessment</li>
              <li>• Custom implementation roadmap</li>
              <li>• ROI forecasting and optimization</li>
              <li>• Change management strategies</li>
            </ul>
            <Link
              href="/services/ai-strategy-consulting"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Strategy Consultation →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="text-5xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold mb-4">AI Implementation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              End-to-end AI solution deployment with enterprise-grade security, scalability, and performance optimization.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Custom AI model development</li>
              <li>• Enterprise integration services</li>
              <li>• Performance optimization</li>
              <li>• Training and support</li>
            </ul>
            <Link
              href="/services/ai-implementation"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              Start Implementation →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-4">AI Optimization</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Continuous improvement and optimization of existing AI systems for maximum performance and ROI.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Performance monitoring</li>
              <li>• Model retraining and updates</li>
              <li>• Cost optimization</li>
              <li>• Scaling and expansion</li>
            </ul>
            <Link
              href="/services/ai-optimization"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              Optimize Your AI →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/enterprise"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Explore Enterprise Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LatestContentShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
              📚 Latest Content
            </span>
            <span className="text-indigo-200 text-sm">Fresh Insights Daily</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Latest AI Insights & Industry Breakthroughs
          </h2>
          <p className="text-2xl text-indigo-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            Stay ahead with cutting-edge AI research, industry breakthroughs, and practical implementation guides from our expert team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/blog/ai-multimodal-integration-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all border border-indigo-500/20 group-hover:border-indigo-400/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-500 px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-indigo-200 text-sm">25 min read</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                AI Multimodal Integration 2026: The Future of Enterprise AI
              </h3>
              <p className="text-indigo-200 mb-6 leading-relaxed">
                Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration. Achieve 300% efficiency gains.
              </p>
              <div className="flex items-center text-purple-300 font-semibold group-hover:text-purple-200 transition-colors">
                Read Full Article →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/autonomous-ai-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all border border-indigo-500/20 group-hover:border-indigo-400/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-indigo-200 text-sm">Enterprise AI</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors">
                Autonomous AI Systems: 400% ROI in 6 Months
              </h3>
              <p className="text-indigo-200 mb-6 leading-relaxed">
                See how a Fortune 500 company achieved 400% ROI and complete process automation with our autonomous AI systems.
              </p>
              <div className="flex items-center text-green-300 font-semibold group-hover:text-green-200 transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-edge-computing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all border border-indigo-500/20 group-hover:border-indigo-400/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-500 px-3 py-1 rounded-full text-xs font-semibold">
                  Tech Innovation
                </span>
                <span className="text-indigo-200 text-sm">18 min read</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                AI Edge Computing 2026: Sub-10ms Response Times
              </h3>
              <p className="text-indigo-200 mb-6 leading-relaxed">
                Explore the latest advances in edge AI computing that deliver sub-10ms response times for real-time applications.
              </p>
              <div className="flex items-center text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                Read Innovation Guide →
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Explore All Content →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function InteractiveAICalculatorBanner() {
  return (
    <section className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              🧮 Interactive Tool
            </span>
            <span className="text-orange-200 text-sm">ROI Calculator</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Calculate Your AI Transformation ROI
          </h2>
          <p className="text-2xl text-orange-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the potential savings and ROI of AI transformation for your business with our interactive calculator.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-orange-500/20 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">AI ROI Calculator Features:</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Industry-Specific Calculations</h4>
                    <p className="text-orange-200">Tailored ROI estimates for your industry</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Cost-Benefit Analysis</h4>
                    <p className="text-orange-200">Detailed breakdown of costs and savings</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⏱️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Timeline Projections</h4>
                    <p className="text-orange-200">ROI timeline and payback period</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Growth Projections</h4>
                    <p className="text-orange-200">Revenue growth and efficiency gains</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-8 text-center">
              <div className="text-6xl font-bold text-green-400 mb-4">400%</div>
              <div className="text-xl text-orange-200 mb-6">Average ROI Achieved</div>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span>Implementation Cost:</span>
                  <span className="font-bold">$500K - $2M</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Savings:</span>
                  <span className="font-bold text-green-400">$2M - $10M</span>
                </div>
                <div className="flex justify-between">
                  <span>Payback Period:</span>
                  <span className="font-bold">6-12 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/ai-roi-calculator"
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Calculate Your ROI Now →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIInnovationShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-cyan-900 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-cyan-600 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Innovation Hub
            </span>
            <span className="text-cyan-200 text-sm">Cutting-Edge AI</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            AI Innovation Showcase 2026
          </h2>
          <p className="text-2xl text-cyan-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            Explore the latest AI innovations, breakthrough technologies, and revolutionary solutions that are reshaping industries worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-xl font-bold mb-4">Neural Architecture Search</h3>
            <p className="text-cyan-200 mb-6">Automated AI model design with 50% better performance</p>
            <div className="bg-green-500/20 rounded-lg p-4 mb-4">
              <div className="text-2xl font-bold text-green-300">50%</div>
              <div className="text-green-200 text-sm">Performance Boost</div>
            </div>
            <Link
              href="/blog/neural-architecture-search-2026"
              className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
            <div className="text-5xl mb-6">🔄</div>
            <h3 className="text-xl font-bold mb-4">Federated Learning</h3>
            <p className="text-cyan-200 mb-6">Privacy-preserving AI training across organizations</p>
            <div className="bg-blue-500/20 rounded-lg p-4 mb-4">
              <div className="text-2xl font-bold text-blue-300">99%</div>
              <div className="text-blue-200 text-sm">Privacy Protection</div>
            </div>
            <Link
              href="/blog/federated-learning-2026"
              className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-xl font-bold mb-4">Quantum AI</h3>
            <p className="text-cyan-200 mb-6">Quantum-enhanced machine learning algorithms</p>
            <div className="bg-purple-500/20 rounded-lg p-4 mb-4">
              <div className="text-2xl font-bold text-purple-300">1000x</div>
              <div className="text-purple-200 text-sm">Speed Increase</div>
            </div>
            <Link
              href="/blog/quantum-ai-2026"
              className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
            <div className="text-5xl mb-6">🌐</div>
            <h3 className="text-xl font-bold mb-4">Edge AI Networks</h3>
            <p className="text-cyan-200 mb-6">Distributed AI processing with sub-millisecond latency</p>
            <div className="bg-orange-500/20 rounded-lg p-4 mb-4">
              <div className="text-2xl font-bold text-orange-300">0.1ms</div>
              <div className="text-orange-200 text-sm">Response Time</div>
            </div>
            <Link
              href="/blog/edge-ai-networks-2026"
              className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/innovation"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-cyan-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Explore All Innovations →
          </Link>
        </div>
      </div>
    </section>
  );
}