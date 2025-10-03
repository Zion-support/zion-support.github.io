import React, { useState } from 'react';

const December2025ContentShowcaseInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'autonomous' | 'quantum'>('autonomous');

  const autonomousContent = {
    title: "Revolutionary Autonomous Enterprise Systems
    subtitle: "Achieve 98.7% Operational Autonomy with $127M in Proven Savings
    metrics: [
      { label: "Operational Autonomy", value: "98.7%", color: "blue" },
      { label: "Annual Savings", value: "$127M", color: "purple" },
      { label: "ROI", value: "270%", color: "green" },
      { label: "Payback Period", value: "4.4 months", color: "orange" }
    ],
    features: [
      "Self-Governing Business Logic Engine
      "Cognitive Process Automation
      "Quantum-Enhanced Decision Matrix
      "Predictive Business Intelligence"
    ],
    blogLink: "/blog/ai-2025-december-revolutionary-autonomous-enterprise-breakthrough
    caseStudyLink: "/case-studies/ai-2025-december-autonomous-enterprise-127-million-success"
  };

  const quantumContent = {
    title: "Quantum Business Intelligence Revolution
    subtitle: "Transform Enterprise Decision-Making with 99.4% Accuracy and $89M in Value Creation
    metrics: [
      { label: "Decision Accuracy", value: "99.4%", color: "blue" },
      { label: "Value Creation", value: "$89M", color: "purple" },
      { label: "Processing Speed", value: "10,000x", color: "green" },
      { label: "Response Time", value: "<1ms", color: "orange" }
    ],
    features: [
      "Quantum Decision Matrix Engine
      "Hyperdimensional Data Processing
      "Consciousness-Level Business Understanding
      "Real-Time Market Analysis"
    ],
    blogLink: "/blog/ai-2025-december-quantum-business-intelligence-revolution
    caseStudyLink: "/case-studies/ai-2025-december-quantum-business-intelligence-89-million-success"
  };

  const currentContent = activeTab === 'autonomous' ? autonomousContent : quantumContent;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 DECEMBER 2025 BREAKTHROUGH CONTENT SHOWCASE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Explore the latest AI innovations that are transforming enterprise operations with proven results and breakthrough performance metrics.
          </p>

          {/* Interactive Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700/50">
              <button
                onClick={() => setActiveTab('autonomous')}
                className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                  activeTab === 'autonomous'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                🤖 Autonomous Enterprise
              </button>
              <button
                onClick={() => setActiveTab('quantum')}
                className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                  activeTab === 'quantum'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                ⚛️ Quantum Intelligence
              </button>
            </div>
          </div>
        </div>

        {/* Content Display */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content Info */}
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                {currentContent.title}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {currentContent.subtitle}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={currentContent.blogLink}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  Read Full Article →
                </a>
                <a 
                  href={currentContent.caseStudyLink}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  View Case Study →
                </a>
              </div>
            </div>

            {/* Right Side - Metrics */}
            <div>
              <div className="grid grid-cols-2 gap-6">
                {currentContent.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-r ${
                      metric.color === 'blue' ? 'from-blue-500/20 to-blue-600/20 border-blue-500/30' :
                      metric.color === 'purple' ? 'from-purple-500/20 to-purple-600/20 border-purple-500/30' :
                      metric.color === 'green' ? 'from-green-500/20 to-green-600/20 border-green-500/30' :
                      'from-orange-500/20 to-orange-600/20 border-orange-500/30'
                    } backdrop-blur-sm rounded-xl p-6 border`}
                  >
                    <div className={`text-3xl font-extrabold mb-2 ${
                      metric.color === 'blue' ? 'text-blue-400' :
                      metric.color === 'purple' ? 'text-purple-400' :
                      metric.color === 'green' ? 'text-green-400' :
                      'text-orange-400'
                    }`}>
                      {metric.value}
                    </div>
                    <div className={`text-sm font-semibold ${
                      metric.color === 'blue' ? 'text-blue-300' :
                      metric.color === 'purple' ? 'text-purple-300' :
                      metric.color === 'green' ? 'text-green-300' :
                      'text-orange-300'
                    }`}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🏭</div>
              <div>
                <div className="text-blue-400 font-bold text-sm uppercase tracking-wider">MANUFACTURING SUCCESS</div>
                <h4 className="text-xl font-bold text-white">Fortune 500 Manufacturing Leader</h4>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Achieved $127M in annual savings through autonomous enterprise systems with 98.7% operational autonomy.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">$127M Savings</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">98.7% Autonomy</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">270% ROI</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🏦</div>
              <div>
                <div className="text-purple-400 font-bold text-sm uppercase tracking-wider">FINANCIAL SERVICES SUCCESS</div>
                <h4 className="text-xl font-bold text-white">Global Financial Services Leader</h4>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Created $89M in value through quantum business intelligence with 99.4% decision accuracy.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">$89M Value</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">99.4% Accuracy</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">233% ROI</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading Fortune 500 companies in achieving breakthrough results through revolutionary AI technologies. 
            Get your personalized consultation and discover how to achieve similar success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Start Your Transformation
            </a>
            <a 
              href="/services" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Explore Our Solutions →
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View All Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default December2025ContentShowcaseInteractive;