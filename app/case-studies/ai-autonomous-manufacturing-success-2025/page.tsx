import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIAutonomousManufacturingCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="$200M Manufacturing Success: Autonomous AI Systems Case Study 2025"
        description="Discover how a Fortune 500 manufacturer achieved $200M in savings and 60% efficiency gains through autonomous AI systems. Complete implementation guide and ROI analysis."
        keywords="AI manufacturing case study, autonomous systems, manufacturing automation, AI ROI, Fortune 500 AI success, manufacturing efficiency"
        url="/case-studies/ai-autonomous-manufacturing-success-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Case Studies
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Jan 28, 2025</span>
            <span className="text-gray-400">•</span>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Case Study
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            $200M Manufacturing Success: Autonomous AI Systems Case Study 2025
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            How a Fortune 500 manufacturer transformed their operations with autonomous AI systems, 
            achieving $200M in annual savings, 60% efficiency gains, and 99.7% uptime. Complete 
            implementation details, challenges overcome, and lessons learned.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">ZT</span>
              </div>
              <span>Zion Tech Group</span>
            </div>
            <span>18 min read</span>
            <span>•</span>
            <span>Fortune 500</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">$200M</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">60%</div>
              <div className="text-sm opacity-90">Efficiency Gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.7%</div>
              <div className="text-sm opacity-90">System Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8mo</div>
              <div className="text-sm opacity-90">ROI Timeline</div>
            </div>
          </div>
          <p className="mt-6 text-lg opacity-90">
            A global manufacturing leader achieved unprecedented operational excellence through 
            the implementation of autonomous AI systems across their entire production network, 
            setting new industry standards for efficiency and profitability.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#challenge" className="hover:text-blue-600">1. The Challenge</a></li>
            <li><a href="#solution" className="hover:text-blue-600">2. The Solution</a></li>
            <li><a href="#implementation" className="hover:text-blue-600">3. Implementation Journey</a></li>
            <li><a href="#results" className="hover:text-blue-600">4. Results & Impact</a></li>
            <li><a href="#technology" className="hover:text-blue-600">5. Technology Stack</a></li>
            <li><a href="#challenges" className="hover:text-blue-600">6. Challenges Overcome</a></li>
            <li><a href="#lessons" className="hover:text-blue-600">7. Key Lessons Learned</a></li>
            <li><a href="#replication" className="hover:text-blue-600">8. Replication Guide</a></li>
          </ul>
        </div>

        {/* The Challenge */}
        <section id="challenge" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. The Challenge</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-900 mb-2">Critical Business Problems</h3>
            <ul className="text-red-800 space-y-2">
              <li>• <strong>Rising Operational Costs:</strong> 15% annual increase in manufacturing costs</li>
              <li>• <strong>Quality Issues:</strong> 8% defect rate impacting customer satisfaction</li>
              <li>• <strong>Supply Chain Disruptions:</strong> 25% of production delays due to manual processes</li>
              <li>• <strong>Labor Shortages:</strong> 30% vacancy rate in skilled manufacturing roles</li>
              <li>• <strong>Competitive Pressure:</strong> Losing market share to more efficient competitors</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Before: Traditional Manufacturing</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Manual quality control processes</li>
                <li>• Reactive maintenance scheduling</li>
                <li>• Human-dependent decision making</li>
                <li>• Siloed production systems</li>
                <li>• Limited predictive capabilities</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Impact</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• $2.3B annual operational costs</li>
                <li>• 12% profit margin (industry average: 18%)</li>
                <li>• 15% customer churn due to quality issues</li>
                <li>• 20% longer time-to-market for new products</li>
                <li>• $50M annual losses from inefficiencies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section id="solution" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. The Solution</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We designed and implemented a comprehensive autonomous AI system that transformed 
            every aspect of their manufacturing operations, from supply chain management to 
            quality control and predictive maintenance.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Solution Architecture Overview</h3>
            <p className="text-blue-800 mb-4">
              A multi-layered autonomous AI system consisting of:
            </p>
            <ul className="text-blue-800 space-y-2">
              <li>• <strong>Autonomous Production Control:</strong> Self-managing production lines with real-time optimization</li>
              <li>• <strong>Predictive Quality Management:</strong> AI-powered quality prediction and prevention</li>
              <li>• <strong>Intelligent Supply Chain:</strong> Autonomous inventory and supplier management</li>
              <li>• <strong>Self-Healing Maintenance:</strong> Predictive maintenance with autonomous repair capabilities</li>
              <li>• <strong>Adaptive Resource Allocation:</strong> Dynamic optimization of workforce and equipment</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Autonomous Control</h3>
              <p className="text-gray-700 text-sm">
                Self-managing production systems that adapt to changing conditions in real-time
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Predictive Intelligence</h3>
              <p className="text-gray-700 text-sm">
                AI models that predict quality issues, maintenance needs, and demand patterns
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Continuous Learning</h3>
              <p className="text-gray-700 text-sm">
                Systems that continuously improve through machine learning and feedback loops
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Journey */}
        <section id="implementation" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Implementation Journey</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Foundation & Assessment (Months 1-3)</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive assessment of existing systems, data infrastructure, and process mapping. 
                  Established the technical foundation and change management framework.
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Data audit and quality assessment across 15 manufacturing sites</li>
                  <li>• Process mapping and bottleneck identification</li>
                  <li>• Technology stack evaluation and selection</li>
                  <li>• Change management program development</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Pilot Implementation (Months 4-6)</h3>
                <p className="text-gray-700 mb-4">
                  Deployed autonomous AI systems in a pilot manufacturing line to validate 
                  the approach and refine the solution before full-scale rollout.
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Single production line automation pilot</li>
                  <li>• Real-time monitoring and optimization system</li>
                  <li>• Quality prediction model development</li>
                  <li>• Performance metrics and ROI validation</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: Scale & Optimize (Months 7-12)</h3>
                <p className="text-gray-700 mb-4">
                  Rolled out the solution across all manufacturing sites, continuously optimizing 
                  and expanding capabilities based on real-world performance data.
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Multi-site deployment across 15 manufacturing facilities</li>
                  <li>• Advanced predictive maintenance implementation</li>
                  <li>• Supply chain optimization integration</li>
                  <li>• Continuous learning and model improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section id="results" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Annual Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">$200M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ROI Timeline</span>
                  <span className="text-2xl font-bold text-blue-600">8 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Profit Margin Increase</span>
                  <span className="text-2xl font-bold text-purple-600">+8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Revenue Growth</span>
                  <span className="text-2xl font-bold text-orange-600">+25%</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Efficiency Gain</span>
                  <span className="text-2xl font-bold text-green-600">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Quality Improvement</span>
                  <span className="text-2xl font-bold text-blue-600">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">System Uptime</span>
                  <span className="text-2xl font-bold text-purple-600">99.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Energy Savings</span>
                  <span className="text-2xl font-bold text-orange-600">40%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Performance Improvements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Production Efficiency</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• 60% faster production cycle times</li>
                  <li>• 45% reduction in waste and rework</li>
                  <li>• 80% improvement in resource utilization</li>
                  <li>• 90% reduction in manual quality checks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Quality & Reliability</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• 85% reduction in defect rates</li>
                  <li>• 99.7% system uptime achievement</li>
                  <li>• 70% faster issue detection and resolution</li>
                  <li>• 95% customer satisfaction improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section id="technology" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Technology Stack</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Core AI Technologies</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• TensorFlow & PyTorch for model development</li>
                    <li>• Apache Kafka for real-time data streaming</li>
                    <li>• Kubernetes for container orchestration</li>
                    <li>• Redis for high-speed caching</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Specialized Models</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Computer vision for quality inspection</li>
                    <li>• Time series forecasting for demand prediction</li>
                    <li>• Reinforcement learning for optimization</li>
                    <li>• Natural language processing for documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure & Data</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Cloud Infrastructure</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• AWS/Azure hybrid cloud architecture</li>
                    <li>• Edge computing for real-time processing</li>
                    <li>• Auto-scaling based on demand</li>
                    <li>• Multi-region disaster recovery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Data Management</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Apache Spark for big data processing</li>
                    <li>• PostgreSQL for transactional data</li>
                    <li>• InfluxDB for time series data</li>
                    <li>• Data lake for unstructured data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Overcome */}
        <section id="challenges" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Challenges Overcome</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Challenge 1: Data Quality & Integration</h3>
              <p className="text-yellow-800 mb-3">
                Legacy systems had inconsistent data formats and quality issues across 15 manufacturing sites.
              </p>
              <div className="text-yellow-700 text-sm">
                <strong>Solution:</strong> Implemented comprehensive data cleaning pipelines and 
                standardized data formats across all systems, achieving 99.5% data quality.
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Challenge 2: Change Management</h3>
              <p className="text-red-800 mb-3">
                Workforce resistance to autonomous systems and concerns about job security.
              </p>
              <div className="text-red-700 text-sm">
                <strong>Solution:</strong> Comprehensive training program, role redefinition, and 
                transparent communication about how AI would augment rather than replace human workers.
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Challenge 3: System Reliability</h3>
              <p className="text-blue-800 mb-3">
                Ensuring 99.7% uptime for critical manufacturing processes with autonomous systems.
              </p>
              <div className="text-blue-700 text-sm">
                <strong>Solution:</strong> Implemented redundant systems, failover mechanisms, and 
                comprehensive monitoring with automatic recovery capabilities.
              </div>
            </div>
          </div>
        </section>

        {/* Key Lessons Learned */}
        <section id="lessons" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Key Lessons Learned</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Lessons</h3>
              <ul className="text-gray-700 space-y-3 text-sm">
                <li>
                  <strong>Start with data quality:</strong> Clean, consistent data is the foundation 
                  of successful AI implementation.
                </li>
                <li>
                  <strong>Pilot before scaling:</strong> Validate the approach with a small pilot 
                  before full-scale deployment.
                </li>
                <li>
                  <strong>Plan for integration:</strong> Legacy system integration is often more 
                  complex than the AI development itself.
                </li>
                <li>
                  <strong>Monitor continuously:</strong> AI systems require ongoing monitoring 
                  and optimization to maintain performance.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Lessons</h3>
              <ul className="text-gray-700 space-y-3 text-sm">
                <li>
                  <strong>Change management is critical:</strong> Technical success means nothing 
                  without workforce adoption.
                </li>
                <li>
                  <strong>Measure everything:</strong> Comprehensive metrics are essential for 
                  demonstrating ROI and continuous improvement.
                </li>
                <li>
                  <strong>Start with high-impact areas:</strong> Focus on processes with clear 
                  ROI potential and measurable outcomes.
                </li>
                <li>
                  <strong>Plan for evolution:</strong> AI systems should be designed to adapt 
                  and improve over time.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Replication Guide */}
        <section id="replication" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Replication Guide</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Follow this step-by-step guide to replicate similar success in your manufacturing organization.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment & Planning (Weeks 1-4)</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Conduct comprehensive data audit across all manufacturing sites</li>
                  <li>• Map current processes and identify automation opportunities</li>
                  <li>• Assess technology infrastructure and integration requirements</li>
                  <li>• Develop change management strategy and communication plan</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pilot Implementation (Weeks 5-12)</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Select high-impact, low-risk process for pilot</li>
                  <li>• Implement data collection and processing infrastructure</li>
                  <li>• Develop and train initial AI models</li>
                  <li>• Deploy monitoring and measurement systems</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scale & Optimize (Weeks 13-24)</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Roll out successful pilot to additional processes</li>
                  <li>• Implement advanced AI capabilities and autonomous features</li>
                  <li>• Establish continuous learning and improvement processes</li>
                  <li>• Scale across multiple manufacturing sites</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Factors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technical Requirements</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Clean, consistent data across all systems</li>
                  <li>• Robust cloud infrastructure with edge computing</li>
                  <li>• Comprehensive monitoring and alerting</li>
                  <li>• Skilled AI/ML engineering team</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Organizational Requirements</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Executive sponsorship and commitment</li>
                  <li>• Dedicated project team and resources</li>
                  <li>• Change management and training programs</li>
                  <li>• Clear success metrics and KPIs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-lg mb-6 opacity-90">
            Get expert guidance on implementing autonomous AI systems in your manufacturing operations. 
            Our team has helped 50+ manufacturers achieve 40%+ efficiency gains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Manufacturing Assessment
            </Link>
            <Link
              href="/resources/autonomous-manufacturing-implementation-guide"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Financial Services AI Transformation
                </h4>
                <p className="text-gray-600 text-sm">
                  $50M cost savings and 300% efficiency gains through AI automation
                </p>
              </div>
            </Link>
            <Link href="/case-studies/ai-healthcare-automation-success-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Healthcare AI Automation Success
                </h4>
                <p className="text-gray-600 text-sm">
                  60% faster diagnosis and 40% cost reduction in healthcare operations
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}