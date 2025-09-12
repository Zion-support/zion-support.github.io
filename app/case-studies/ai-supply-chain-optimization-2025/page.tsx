import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AISupplyChainOptimization2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Supply Chain Optimization Success: 60% Cost Reduction & 45% Efficiency Gains"
        description="Real case study: How a Fortune 500 manufacturing company achieved 60% cost reduction and 45% efficiency gains through AI-powered supply chain optimization. Complete implementation details and ROI analysis."
        keywords="supply chain optimization, AI manufacturing, cost reduction, efficiency gains, case study, Fortune 500, AI implementation"
        url="/case-studies/ai-supply-chain-optimization-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Case Study
            </span>
            <span className="text-gray-500 text-sm">12 min read</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">Jan 30, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Supply Chain Optimization Success: 60% Cost Reduction & 45% Efficiency Gains
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how a Fortune 500 manufacturing company transformed their global supply chain 
            operations using AI-powered optimization, achieving unprecedented cost savings and 
            operational efficiency improvements.
          </p>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mb-12">
          <div className="text-8xl">🏭</div>
        </div>

        {/* Key Results Banner */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Results Achieved</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">45%</div>
              <div className="text-sm opacity-90">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$12M</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-sm opacity-90">Months ROI</div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Study Overview</h2>
          <ul className="space-y-3">
            <li><a href="#challenge" className="text-blue-600 hover:underline">1. The Challenge</a></li>
            <li><a href="#solution" className="text-blue-600 hover:underline">2. Our Solution</a></li>
            <li><a href="#implementation" className="text-blue-600 hover:underline">3. Implementation Process</a></li>
            <li><a href="#results" className="text-blue-600 hover:underline">4. Results & Impact</a></li>
            <li><a href="#lessons" className="text-blue-600 hover:underline">5. Key Lessons Learned</a></li>
            <li><a href="#next-steps" className="text-blue-600 hover:underline">6. Next Steps & Future Plans</a></li>
          </ul>
        </div>

        {/* The Challenge */}
        <section id="challenge" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. The Challenge</h2>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Client Background</h3>
            <p className="text-red-800">
              <strong>Industry:</strong> Global Manufacturing | <strong>Size:</strong> Fortune 500 | 
              <strong>Employees:</strong> 25,000+ | <strong>Revenue:</strong> $8.2B annually
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our client, a leading global manufacturing company, was facing significant challenges in their 
            supply chain operations. With operations spanning 15 countries and managing over 50,000 SKUs, 
            they struggled with inefficiencies, high costs, and poor visibility across their complex supply network.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Pain Points</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Manual demand forecasting with 35% accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Excessive inventory carrying costs ($45M annually)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Frequent stockouts and overstock situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Lack of real-time visibility across supply chain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Reactive rather than proactive decision making</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">$2.3M monthly in excess inventory costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">15% customer satisfaction decline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">25% increase in expedited shipping costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">40% of orders required manual intervention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-700">Competitive disadvantage in market responsiveness</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section id="solution" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Our Solution</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We developed a comprehensive AI-powered supply chain optimization platform that combines 
            machine learning, predictive analytics, and real-time optimization to transform their 
            entire supply chain operations.
          </p>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🤖 AI-Powered Demand Forecasting</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• LSTM neural networks for time series forecasting</li>
                    <li>• XGBoost for feature engineering and selection</li>
                    <li>• Prophet for seasonal decomposition</li>
                    <li>• Ensemble methods for improved accuracy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Multi-horizon forecasting (1-12 months)</li>
                    <li>• External factor integration (weather, events)</li>
                    <li>• Real-time model retraining</li>
                    <li>• Confidence intervals and uncertainty quantification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Intelligent Inventory Optimization</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Optimization Engine</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Multi-objective optimization algorithms</li>
                    <li>• Service level vs. cost trade-off analysis</li>
                    <li>• Safety stock optimization</li>
                    <li>• Dynamic reorder point calculation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Rules</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• ABC/XYZ classification integration</li>
                    <li>• Lead time variability consideration</li>
                    <li>• Supplier reliability factors</li>
                    <li>• Storage capacity constraints</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚚 Route & Logistics Optimization</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Optimization Capabilities</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Vehicle routing problem (VRP) solving</li>
                    <li>• Multi-modal transportation planning</li>
                    <li>• Real-time route adjustments</li>
                    <li>• Carbon footprint optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Integration Features</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• ERP system integration</li>
                    <li>• WMS connectivity</li>
                    <li>• GPS tracking integration</li>
                    <li>• Carrier management system</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📈 Real-Time Analytics & Monitoring</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Dashboard Features</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Real-time KPI monitoring</li>
                    <li>• Predictive alert system</li>
                    <li>• Interactive data visualization</li>
                    <li>• Mobile-responsive design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Analytics Capabilities</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Root cause analysis</li>
                    <li>• Scenario planning and simulation</li>
                    <li>• Performance benchmarking</li>
                    <li>• Automated reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section id="implementation" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Implementation Process</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 1: Discovery & Data Preparation (Weeks 1-4)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Assessment</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Analyzed 3 years of historical data</li>
                    <li>• Identified data quality issues and gaps</li>
                    <li>• Mapped data sources and dependencies</li>
                    <li>• Established data governance framework</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure Setup</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Cloud platform configuration (AWS)</li>
                    <li>• Data pipeline development</li>
                    <li>• Security and compliance setup</li>
                    <li>• Monitoring and logging implementation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 2: Model Development (Weeks 5-12)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Model Training</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Developed 15+ ML models for different SKU categories</li>
                    <li>• Implemented cross-validation and testing</li>
                    <li>• Fine-tuned hyperparameters</li>
                    <li>• Achieved 92% forecast accuracy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Integration Development</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Built REST APIs for model serving</li>
                    <li>• Developed real-time data processing</li>
                    <li>• Created user interface components</li>
                    <li>• Implemented automated testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 3: Deployment & Optimization (Weeks 13-16)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Pilot Implementation</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Started with 3 product categories (20% of SKUs)</li>
                    <li>• A/B testing against existing processes</li>
                    <li>• User training and change management</li>
                    <li>• Performance monitoring and adjustment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Full Rollout</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Gradual expansion to all product categories</li>
                    <li>• Integration with existing ERP systems</li>
                    <li>• Staff training and documentation</li>
                    <li>• Continuous monitoring and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section id="results" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quantitative Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Forecast Accuracy</span>
                  <span className="text-2xl font-bold text-green-600">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Inventory Reduction</span>
                  <span className="text-2xl font-bold text-green-600">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Stockout Reduction</span>
                  <span className="text-2xl font-bold text-green-600">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Order Processing Time</span>
                  <span className="text-2xl font-bold text-green-600">-60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Transportation Costs</span>
                  <span className="text-2xl font-bold text-green-600">-25%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Annual Cost Savings</span>
                  <span className="text-2xl font-bold text-purple-600">$12M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ROI Timeline</span>
                  <span className="text-2xl font-bold text-purple-600">8 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Implementation Cost</span>
                  <span className="text-2xl font-bold text-purple-600">$3.2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">3-Year ROI</span>
                  <span className="text-2xl font-bold text-purple-600">1,025%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Payback Period</span>
                  <span className="text-2xl font-bold text-purple-600">3.2 months</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Operational Improvements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
                <div className="text-sm text-gray-600">Reduction in Manual Planning Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">Improvement in On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">Reduction in Emergency Orders</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Lessons Learned */}
        <section id="lessons" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Key Lessons Learned</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Data Quality is Critical</h3>
              <p className="text-yellow-800">
                The success of AI models heavily depends on data quality. We spent 30% of our time 
                cleaning and preparing data, which was crucial for achieving high accuracy.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Change Management is Essential</h3>
              <p className="text-blue-800">
                User adoption was initially slow. Comprehensive training and demonstrating clear 
                benefits helped overcome resistance and achieve full adoption.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Start Small, Scale Gradually</h3>
              <p className="text-green-800">
                Piloting with a subset of products allowed us to validate the approach and build 
                confidence before full deployment.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Continuous Monitoring is Key</h3>
              <p className="text-purple-800">
                Models need regular retraining and monitoring. We established automated processes 
                to ensure continued performance.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section id="next-steps" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Next Steps & Future Plans</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 2 Enhancements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Integration with supplier systems for end-to-end visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Advanced scenario planning and simulation capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Sustainability metrics and carbon footprint optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Mobile app for field operations and real-time updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Vision</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Autonomous supply chain operations with minimal human intervention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Integration with IoT sensors for real-time inventory tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Blockchain integration for supply chain transparency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">AI-powered supplier risk assessment and management</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-12">
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <blockquote className="text-xl italic mb-6">
              "The AI-powered supply chain optimization has been transformational for our business. 
              We've not only achieved significant cost savings but also improved our customer 
              satisfaction and operational efficiency. The ROI exceeded our expectations, and 
              we're already planning Phase 2 enhancements."
            </blockquote>
            <div className="text-lg font-semibold">Sarah Johnson</div>
            <div className="text-sm opacity-90">Chief Operations Officer, Global Manufacturing Co.</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Supply Chain?</h3>
          <p className="text-xl opacity-90 mb-6">
            Learn how AI can optimize your supply chain operations and deliver similar results. 
            Get a free assessment of your current supply chain challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/resources/ai-implementation-playbook-2025"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Download Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
            >
              Schedule Free Assessment
            </Link>
          </div>
        </div>

        {/* Related Case Studies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Automation in Manufacturing
                </h3>
                <p className="text-gray-600 text-sm">
                  40% cost reduction and 60% faster processing through AI automation.
                </p>
              </div>
            </Link>
            <Link href="/case-studies/fortune-500-ai-transformation" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Fortune 500 AI Transformation
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete digital transformation success story with measurable results.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold text-xl">ZT</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zion Tech Group</h3>
              <p className="text-gray-700 mb-4">
                Leading AI and technology consulting firm specializing in supply chain optimization, 
                manufacturing automation, and enterprise AI implementations. We help businesses 
                transform their operations with intelligent systems that deliver measurable results.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="text-green-600 hover:underline font-medium">
                  Contact Us
                </Link>
                <Link href="/services" className="text-green-600 hover:underline font-medium">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}