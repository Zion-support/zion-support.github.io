import React from 'react';
import Link from 'next/link';

export function AIEnterpriseTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 New Article
              </span>
              <span className="text-white/80 text-sm">Published Jan 20, 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              AI Enterprise Transformation 2026: Complete Implementation Guide
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Master AI enterprise transformation with our comprehensive 2026 guide. Achieve 300% ROI, 
              90% efficiency gains, and $50M+ savings with proven strategies and implementation frameworks.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">300% ROI</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">90% Efficiency</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">$50M+ Savings</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-enterprise-transformation-2026"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Full Guide →
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>5-phase AI transformation framework</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Proven ROI metrics and success stories</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Common pitfalls and how to avoid them</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Implementation roadmap and timeline</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Best practices from 500+ implementations</span>
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
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🤖 Featured Article
              </span>
              <span className="text-white/80 text-sm">Published Jan 20, 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              AI Autonomous Systems 2026: The Future of Enterprise Automation
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Discover how self-managing AI agents are revolutionizing enterprise operations, 
              achieving 95% automation rates and delivering unprecedented efficiency gains.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">95% Automation</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">80% Cost Reduction</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">99.7% Accuracy</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-autonomous-systems-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Full Article →
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Get Free Assessment
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Revolutionary Capabilities</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">🤖</span>
                <span>95% autonomous operation with minimal human intervention</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">⚡</span>
                <span>80% reduction in operational costs through intelligent automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">🎯</span>
                <span>99.7% accuracy in decision-making and process execution</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">🔄</span>
                <span>Real-time self-optimization and continuous improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ManufacturingTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🏭 Success Story
              </span>
              <span className="text-white/80 text-sm">Published Jan 20, 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Manufacturing AI Transformation: $12M Savings & 95% Automation
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              See how a global manufacturing company achieved $12M annual savings, 95% automation rate, 
              and 78% cost reduction with our AI transformation solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/20 px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">$12M</div>
                <div className="text-sm text-white/80">Annual Savings</div>
              </div>
              <div className="bg-white/20 px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-white/80">Automation</div>
              </div>
              <div className="bg-white/20 px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">78%</div>
                <div className="text-sm text-white/80">Cost Reduction</div>
              </div>
              <div className="bg-white/20 px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">99.2%</div>
                <div className="text-sm text-white/80">Accuracy</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/manufacturing-ai-transformation-success"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                View Case Study →
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Get Free Assessment
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Client Results</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/90">ROI Achieved:</span>
                <span className="text-2xl font-bold text-green-400">340%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Payback Period:</span>
                <span className="text-2xl font-bold text-green-400">8 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Processes Automated:</span>
                <span className="text-2xl font-bold text-green-400">200+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Time Reduction:</span>
                <span className="text-2xl font-bold text-green-400">90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIEnterpriseServicesBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🚀 New Services
            </span>
            <span className="text-white/80 text-sm">Available Now</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            AI Enterprise Services 2026: Complete Transformation Suite
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transform your enterprise with our comprehensive AI services suite. From strategy to implementation, 
            we deliver measurable results that drive growth and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI Strategy & Consulting</h3>
            <p className="text-white/90 mb-4">
              Comprehensive AI strategy development, readiness assessment, and transformation roadmap creation.
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• AI readiness assessment</li>
              <li>• Strategic roadmap development</li>
              <li>• ROI projection and business case</li>
              <li>• Technology stack evaluation</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">AI Implementation</h3>
            <p className="text-white/90 mb-4">
              End-to-end AI solution implementation with proven methodologies and best practices.
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Custom AI model development</li>
              <li>• System integration and deployment</li>
              <li>• Data pipeline optimization</li>
              <li>• Performance monitoring and tuning</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3">AI Operations & Support</h3>
            <p className="text-white/90 mb-4">
              Ongoing AI system management, optimization, and continuous improvement services.
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• 24/7 AI system monitoring</li>
              <li>• Continuous model optimization</li>
              <li>• Performance analytics and reporting</li>
              <li>• Ongoing training and support</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Services →
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LatestContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              📚 Latest Content
            </span>
            <span className="text-white/80 text-sm">Updated Daily</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Stay Ahead with Our Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI strategies, real-world case studies, and industry insights 
            that help you stay competitive in the AI-driven future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-500 px-2 py-1 rounded text-xs font-semibold">Article</span>
                <span className="text-white/60 text-sm">25 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                AI Enterprise Transformation 2026
              </h3>
              <p className="text-white/80 mb-4">
                Complete implementation guide with proven strategies for 300% ROI and $50M+ savings.
              </p>
              <div className="text-blue-300 font-semibold">Read Article →</div>
            </div>
          </Link>
          
          <Link href="/blog/ai-autonomous-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-500 px-2 py-1 rounded text-xs font-semibold">Article</span>
                <span className="text-white/60 text-sm">22 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                AI Autonomous Systems 2026
              </h3>
              <p className="text-white/80 mb-4">
                Discover self-managing AI agents achieving 95% automation and 80% cost reduction.
              </p>
              <div className="text-purple-300 font-semibold">Read Article →</div>
            </div>
          </Link>
          
          <Link href="/case-studies/manufacturing-ai-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-500 px-2 py-1 rounded text-xs font-semibold">Case Study</span>
                <span className="text-white/60 text-sm">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                Manufacturing AI Success
              </h3>
              <p className="text-white/80 mb-4">
                $12M savings and 95% automation achieved by global manufacturing company.
              </p>
              <div className="text-green-300 font-semibold">View Case Study →</div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Content →
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Browse Case Studies →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InteractiveAICalculatorBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🧮 Interactive Tool
              </span>
              <span className="text-white/80 text-sm">Free to Use</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              AI ROI Calculator: Discover Your Transformation Potential
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Calculate your potential AI transformation ROI in minutes. Get personalized insights 
              and recommendations based on your industry, size, and current processes.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Instant Results</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Industry-Specific</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Free Assessment</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                Try Calculator Now →
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors text-center"
              >
                Get Expert Consultation
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">What You'll Get</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">📊</span>
                <span>Personalized ROI projection based on your data</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">🎯</span>
                <span>Industry-specific recommendations and benchmarks</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">⚡</span>
                <span>Implementation timeline and resource requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">💡</span>
                <span>Priority use cases and quick wins identification</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">📈</span>
                <span>Detailed cost-benefit analysis and projections</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIInnovationShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🚀 Innovation Showcase
            </span>
            <span className="text-white/80 text-sm">Cutting-Edge AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Revolutionary AI Innovations Transforming Industries
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore breakthrough AI technologies and innovations that are reshaping how businesses 
            operate, compete, and deliver value to customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Cognitive AI Systems</h3>
            <p className="text-white/90 mb-4">
              Advanced AI that can understand context, reason about complex problems, and make 
              human-like decisions in real-time.
            </p>
            <div className="text-sm text-white/80">
              <strong>Impact:</strong> 85% improvement in decision accuracy
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">Multimodal AI Integration</h3>
            <p className="text-white/90 mb-4">
              AI systems that seamlessly process text, images, voice, and video to provide 
              comprehensive understanding and responses.
            </p>
            <div className="text-sm text-white/80">
              <strong>Impact:</strong> 250% efficiency gains in customer service
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Edge AI Computing</h3>
            <p className="text-white/90 mb-4">
              Real-time AI processing at the edge of networks with sub-50ms response times 
              for mission-critical applications.
            </p>
            <div className="text-sm text-white/80">
              <strong>Impact:</strong> 99.9% uptime for autonomous systems
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Security</h3>
            <p className="text-white/90 mb-4">
              Autonomous threat detection and response systems that protect against 
              sophisticated cyber attacks 24/7.
            </p>
            <div className="text-sm text-white/80">
              <strong>Impact:</strong> 99.7% threat detection accuracy
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3">Self-Optimizing Systems</h3>
            <p className="text-white/90 mb-4">
              AI systems that continuously monitor, analyze, and optimize their own 
              performance without human intervention.
            </p>
            <div className="text-sm text-white/80">
              <strong>Impact:</strong> 95% autonomous operation capability
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
            <p className="text-white/90 mb-4">
              Advanced forecasting models that predict future trends, behaviors, and 
              outcomes with unprecedented accuracy.
            </p>
            <div className="text-sm text-white/80">
              <strong>Impact:</strong> 90% improvement in forecasting accuracy
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore AI Services →
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              Discuss Your Innovation Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}