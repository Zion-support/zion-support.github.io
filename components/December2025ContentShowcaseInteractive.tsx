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
    <section className="text-left">
      <div className="text-left">
        <div className="text-left">
          <div className="text-left">
            <span className="text-left">
              🚀 DECEMBER 2025 BREAKTHROUGH CONTENT SHOWCASE
            <
          </div>
          
          <h2 className="text-left">
            Revolutionary AI Breakthroughs
          </h2>
          
          <p className="text-left">
            Explore the latest AI innovations that are transforming enterprise operations with proven results and breakthrough performance metrics.
          </p>

          {/* Interactive Tabs */}
          <div className="text-left">
            <div className="text-left">
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
        <div className="text-left">
          <div className="text-left">
            {/* Left Side - Content Info */}
            <div>
              <h3 className="text-left">
                {currentContent.title}
              </h3>
              <p className="text-left">
                {currentContent.subtitle}
              </p>

              {/* Key Features */}
              <div className="text-left">
                <h4 className="text-left">Key Features:</h4>
                <ul className="text-left">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="text-left">
                      <div className="text-left"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="text-left">
                <a 
                  href={currentContent.blogLink}
                  className="text-left"
                >
                  Read Full Article →
                </a>
                <a 
                  href={currentContent.caseStudyLink}
                  className="text-left"
                >
                  View Case Study →
                </a>
              </div>
            </div>

            {/* Right Side - Metrics */}
            <div>
              <div className="text-left">
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
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">🏭</div>
              <div>
                <div className="text-left">MANUFACTURING SUCCESS</div>
                <h4 className="text-left">Fortune 500 Manufacturing Leader</h4>
              </div>
            </div>
            <p className="text-left">
              Achieved $127M in annual savings through autonomous enterprise systems with 98.7% operational autonomy.
            </p>
            <div className="text-left">
              <span className="text-left">$127M Savings<
              <span className="text-left">98.7% Autonomy<
              <span className="text-left">270% ROI<
            </div>
          </div>

          <div className="text-left">
            <div className="text-left">
              <div className="text-left">🏦</div>
              <div>
                <div className="text-left">FINANCIAL SERVICES SUCCESS</div>
                <h4 className="text-left">Global Financial Services Leader</h4>
              </div>
            </div>
            <p className="text-left">
              Created $89M in value through quantum business intelligence with 99.4% decision accuracy.
            </p>
            <div className="text-left">
              <span className="text-left">$89M Value<
              <span className="text-left">99.4% Accuracy<
              <span className="text-left">233% ROI<
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-left">
          <h3 className="text-left">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-left">
            Join leading Fortune 500 companies in achieving breakthrough results through revolutionary AI technologies. 
            Get your personalized consultation and discover how to achieve similar success.
          </p>
          <div className="text-left">
            <a 
              href="/contact"
              className="text-left"
            >
              Start Your Transformation
            </a>
            <a 
              href="/services"
              className="text-left"
            >
              Explore Our Solutions →
            </a>
            <a 
              href="/case-studies"
              className="text-left"
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