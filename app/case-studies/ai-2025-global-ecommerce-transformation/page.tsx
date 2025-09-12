import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export const metadata = {
  title: 'Global E-commerce Giant: $2.1B AI Transformation Success - Zion Tech Group',
  description: 'Discover how a global e-commerce leader achieved $2.1B in value creation through comprehensive AI transformation, increasing revenue by 340% and reducing costs by 60%.',
  keywords: 'e-commerce AI transformation, AI case study, business transformation, AI success story',
};

export default function GlobalEcommerceTransformation() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Global E-commerce Giant: $2.1B AI Transformation Success"
        description="Discover how a global e-commerce leader achieved $2.1B in value creation through comprehensive AI transformation, increasing revenue by 340% and reducing costs by 60%."
        keywords="e-commerce AI transformation, AI case study, business transformation, AI success story"
        url="/case-studies/ai-2025-global-ecommerce-transformation"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Global E-commerce Giant: $2.1B AI Transformation Success
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            How a leading global e-commerce platform achieved unprecedented growth through comprehensive AI transformation, creating $2.1B in value while revolutionizing customer experience and operational efficiency.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
            <span>Published: January 2025</span>
            <span className="mx-2">•</span>
            <span>20 min read</span>
            <span className="mx-2">•</span>
            <span>Confidential Case Study</span>
          </div>
        </div>

        {/* Key Results Banner */}
        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Transformation Results</h2>
            <p className="text-xl opacity-90">Comprehensive AI implementation across all business functions</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.1B</div>
              <div className="text-sm opacity-90">Total Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">340%</div>
              <div className="text-sm opacity-90">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-blue-800 mb-4">
            This case study examines the comprehensive AI transformation of a global e-commerce leader with operations across 50+ countries, serving over 200 million customers. Facing intense competition and evolving customer expectations, the company embarked on a revolutionary AI transformation journey that resulted in unprecedented business value creation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Challenge</h3>
              <p className="text-blue-800">
                Declining market share, increasing operational costs, and customer satisfaction issues in a highly competitive global e-commerce market.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Solution</h3>
              <p className="text-blue-800">
                Comprehensive AI transformation across customer experience, supply chain, operations, and business intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Company Background */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Profile</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Global e-commerce platform operating in 50+ countries</li>
                <li>• 200+ million active customers worldwide</li>
                <li>• $15+ billion annual revenue before transformation</li>
                <li>• 50,000+ employees across all regions</li>
                <li>• 2+ million products across multiple categories</li>
                <li>• 15+ years of market presence</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Position</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Top 3 global e-commerce platform</li>
                <li>• Market leader in 15+ countries</li>
                <li>• Strong presence in emerging markets</li>
                <li>• Diversified product portfolio</li>
                <li>• Established logistics and fulfillment network</li>
                <li>• Strong brand recognition and customer loyalty</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Challenges</h2>
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-3">Declining Market Share</h3>
              <p className="text-red-800 mb-3">
                The company was losing market share to more agile competitors who were leveraging AI and advanced technologies to provide superior customer experiences and operational efficiency.
              </p>
              <ul className="text-red-700 space-y-1">
                <li>• 15% market share decline over 3 years</li>
                <li>• Customer acquisition costs increasing by 40%</li>
                <li>• Customer lifetime value decreasing by 25%</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Operational Inefficiencies</h3>
              <p className="text-orange-800 mb-3">
                Manual processes and legacy systems were creating significant operational bottlenecks and cost inefficiencies across the organization.
              </p>
              <ul className="text-orange-700 space-y-1">
                <li>• 60% of processes still manual or semi-automated</li>
                <li>• Average order processing time: 24 hours</li>
                <li>• Customer service response time: 48 hours</li>
                <li>• Inventory management accuracy: 78%</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Customer Experience Issues</h3>
              <p className="text-yellow-800 mb-3">
                Customers were experiencing suboptimal shopping experiences due to poor personalization, slow response times, and limited support options.
              </p>
              <ul className="text-yellow-700 space-y-1">
                <li>• Customer satisfaction score: 3.2/5</li>
                <li>• Cart abandonment rate: 68%</li>
                <li>• Customer support resolution time: 72 hours</li>
                <li>• Product recommendation accuracy: 35%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Transformation Strategy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Transformation Strategy</h2>
          <p className="text-lg text-gray-700 mb-8">
            The company developed a comprehensive 3-phase AI transformation strategy, focusing on high-impact areas that would deliver immediate value while building the foundation for long-term competitive advantage.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <h3 className="text-2xl font-semibold text-gray-900">Phase 1: Customer Experience Revolution (Months 1-6)</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Focus on transforming customer-facing experiences through AI-powered personalization, chatbots, and recommendation systems.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Initiatives:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• AI-powered product recommendations</li>
                    <li>• Intelligent chatbots and virtual assistants</li>
                    <li>• Dynamic pricing optimization</li>
                    <li>• Personalized marketing campaigns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 45% increase in conversion rate</li>
                    <li>• 60% reduction in cart abandonment</li>
                    <li>• 80% improvement in customer satisfaction</li>
                    <li>• $180M additional revenue</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <h3 className="text-2xl font-semibold text-gray-900">Phase 2: Operational Excellence (Months 7-12)</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Automate and optimize internal operations including supply chain, inventory management, and customer service.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Initiatives:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Automated inventory management</li>
                    <li>• AI-powered demand forecasting</li>
                    <li>• Intelligent logistics optimization</li>
                    <li>• Automated customer service workflows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 50% reduction in operational costs</li>
                    <li>• 90% improvement in inventory accuracy</li>
                    <li>• 70% faster order processing</li>
                    <li>• $320M cost savings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <h3 className="text-2xl font-semibold text-gray-900">Phase 3: Advanced Intelligence (Months 13-18)</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Implement advanced AI capabilities including predictive analytics, autonomous decision-making, and continuous optimization.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Initiatives:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Predictive customer behavior modeling</li>
                    <li>• Autonomous business process optimization</li>
                    <li>• Advanced fraud detection systems</li>
                    <li>• Real-time market intelligence</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 95% fraud detection accuracy</li>
                    <li>• 85% improvement in decision speed</li>
                    <li>• 40% increase in market responsiveness</li>
                    <li>• $1.6B additional value creation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Implementation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI/ML Technologies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Machine Learning: TensorFlow, PyTorch, Scikit-learn</li>
                <li>• Deep Learning: Neural networks, CNNs, RNNs</li>
                <li>• Natural Language Processing: BERT, GPT models</li>
                <li>• Computer Vision: Image recognition, object detection</li>
                <li>• Recommendation Systems: Collaborative filtering, content-based</li>
                <li>• Time Series Analysis: ARIMA, LSTM, Prophet</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure & Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cloud Platform: AWS, Azure, Google Cloud</li>
                <li>• Data Processing: Apache Spark, Kafka, Airflow</li>
                <li>• Data Storage: Data lakes, data warehouses</li>
                <li>• MLOps: MLflow, Kubeflow, Docker</li>
                <li>• Monitoring: Prometheus, Grafana, ELK Stack</li>
                <li>• APIs: RESTful, GraphQL, microservices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transformation Results</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Value Created:</span>
                  <span className="font-bold text-green-600">$2.1B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue Increase:</span>
                  <span className="font-bold text-green-600">340%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cost Reduction:</span>
                  <span className="font-bold text-green-600">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI:</span>
                  <span className="font-bold text-green-600">450%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payback Period:</span>
                  <span className="font-bold text-green-600">8 months</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Process Automation:</span>
                  <span className="font-bold text-blue-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Processing Time:</span>
                  <span className="font-bold text-blue-600">-70%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inventory Accuracy:</span>
                  <span className="font-bold text-blue-600">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer Response Time:</span>
                  <span className="font-bold text-blue-600">-80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">System Uptime:</span>
                  <span className="font-bold text-blue-600">99.9%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Experience</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer Satisfaction:</span>
                  <span className="font-bold text-purple-600">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conversion Rate:</span>
                  <span className="font-bold text-purple-600">+45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cart Abandonment:</span>
                  <span className="font-bold text-purple-600">-60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer Retention:</span>
                  <span className="font-bold text-purple-600">+35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NPS Score:</span>
                  <span className="font-bold text-purple-600">+40</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">New AI Features:</span>
                  <span className="font-bold text-orange-600">150+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Data Processing Speed:</span>
                  <span className="font-bold text-orange-600">+500%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prediction Accuracy:</span>
                  <span className="font-bold text-orange-600">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Model Deployment Time:</span>
                  <span className="font-bold text-orange-600">-80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Team Size:</span>
                  <span className="font-bold text-orange-600">+300%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Success Factors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Success Factors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Leadership</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Strong CEO commitment and sponsorship</li>
                <li>• Dedicated AI transformation team</li>
                <li>• Clear vision and communication</li>
                <li>• Adequate budget allocation</li>
                <li>• Risk tolerance and innovation culture</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Strategy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cloud-first architecture approach</li>
                <li>• API-driven integration strategy</li>
                <li>• Scalable and flexible infrastructure</li>
                <li>• Data quality and governance</li>
                <li>• Security and compliance focus</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Change Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Comprehensive training programs</li>
                <li>• Employee engagement initiatives</li>
                <li>• Gradual rollout strategy</li>
                <li>• Continuous feedback loops</li>
                <li>• Success celebration and recognition</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">What Worked Well</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Phased approach allowed for learning and adaptation</li>
                <li>• Strong data foundation enabled better AI outcomes</li>
                <li>• Cross-functional teams improved collaboration</li>
                <li>• Customer-centric approach drove adoption</li>
                <li>• Continuous monitoring and optimization</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Challenges Overcome</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Legacy system integration complexity</li>
                <li>• Data quality and consistency issues</li>
                <li>• Change resistance from employees</li>
                <li>• Talent acquisition and retention</li>
                <li>• Regulatory and compliance requirements</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Recommendations for Others</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Start with high-impact, low-risk initiatives</li>
                <li>• Invest heavily in data quality and governance</li>
                <li>• Build strong internal AI capabilities</li>
                <li>• Focus on change management from day one</li>
                <li>• Measure and communicate value regularly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Roadmap</h2>
          <p className="text-lg text-gray-700 mb-6">
            The company continues to invest in AI innovation, with plans for advanced capabilities including autonomous operations, predictive customer service, and next-generation personalization.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Next 12 Months</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Autonomous supply chain optimization</li>
                <li>• Advanced predictive analytics</li>
                <li>• Voice and visual search capabilities</li>
                <li>• Real-time personalization engine</li>
                <li>• AI-powered fraud prevention</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Vision</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fully autonomous e-commerce platform</li>
                <li>• AI-driven product development</li>
                <li>• Predictive customer lifecycle management</li>
                <li>• Advanced market intelligence</li>
                <li>• Next-generation customer experiences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 opacity-90">
            Learn how Zion Tech Group can help you achieve similar transformation results with our proven AI implementation methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services/ai-automation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="mt-16 border-t pt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-2025-fortune-500-quantum-transformation" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Fortune 500 Quantum Transformation
                </h4>
                <p className="text-gray-600">
                  $3.2B value creation through quantum computing and AI integration.
                </p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2025-financial-services-ai-transformation-success" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Financial Services AI Success
                </h4>
                <p className="text-gray-600">
                  How a leading bank achieved 380% efficiency gains with AI automation.
                </p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2025-manufacturing-transformation-success" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Manufacturing Transformation
                </h4>
                <p className="text-gray-600">
                  Smart manufacturing revolution with 520% efficiency improvements.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}