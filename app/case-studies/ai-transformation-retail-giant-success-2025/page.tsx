import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth',
  description: 'Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.',
  keywords: 'AI transformation case study, retail AI success, Fortune 500 AI implementation, AI ROI, retail automation, AI revenue growth',
};

export default function RetailGiantAITransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Fortune 500 Success Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              15 min read
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Fortune 500
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              $2.3B Revenue Growth
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-700 mb-6">
            A leading global retail chain with 2,500+ stores across 15 countries transformed their operations through comprehensive AI implementation, achieving unprecedented results in revenue growth, operational efficiency, and customer satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$2.3B</div>
              <div className="text-sm text-gray-600">Additional Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-sm text-gray-600">Operational Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">38%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Company Background */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-700 mb-4">
              Facing intense competition from e-commerce giants and changing consumer behaviors, this Fortune 500 retail chain needed to transform their operations to remain competitive. Key challenges included:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Declining foot traffic and in-store sales</li>
              <li>Inefficient inventory management leading to stockouts and overstock</li>
              <li>High operational costs and labor inefficiencies</li>
              <li>Limited personalization capabilities for customer experience</li>
              <li>Manual processes slowing down decision-making</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Profile</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Industry:</strong> Retail & Consumer Goods</li>
                <li><strong>Revenue:</strong> $45B+ annually</li>
                <li><strong>Stores:</strong> 2,500+ locations</li>
                <li><strong>Countries:</strong> 15 international markets</li>
                <li><strong>Employees:</strong> 180,000+ worldwide</li>
                <li><strong>Customers:</strong> 50M+ active customers</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pre-Transformation Metrics</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Revenue Growth:</strong> 2.3% YoY</li>
                <li><strong>Operating Margin:</strong> 8.2%</li>
                <li><strong>Inventory Turnover:</strong> 6.2x annually</li>
                <li><strong>Customer Satisfaction:</strong> 78%</li>
                <li><strong>Employee Productivity:</strong> Baseline</li>
                <li><strong>Digital Sales:</strong> 15% of total revenue</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Transformation Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Transformation Strategy</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            The transformation was executed through a comprehensive 18-month AI implementation program across six key areas, with a total investment of $180M.
          </p>

          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">1. Intelligent Inventory Management</h3>
              <p className="text-blue-800 mb-3">Implemented AI-powered demand forecasting and automated replenishment systems.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Technologies Used</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Machine Learning demand forecasting</li>
                    <li>• Computer vision for shelf monitoring</li>
                    <li>• IoT sensors for real-time tracking</li>
                    <li>• Automated replenishment algorithms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Results Achieved</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 35% reduction in stockouts</li>
                    <li>• 28% decrease in overstock</li>
                    <li>• 42% improvement in inventory turnover</li>
                    <li>• $180M in inventory cost savings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">2. Personalized Customer Experience</h3>
              <p className="text-green-800 mb-3">Deployed AI-driven personalization engines across all customer touchpoints.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Technologies Used</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Recommendation engines</li>
                    <li>• Natural language processing</li>
                    <li>• Computer vision for visual search</li>
                    <li>• Predictive analytics for behavior</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Results Achieved</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 67% increase in conversion rates</li>
                    <li>• 52% improvement in customer lifetime value</li>
                    <li>• 89% customer satisfaction with recommendations</li>
                    <li>• $450M additional revenue from personalization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">3. Automated Operations</h3>
              <p className="text-purple-800 mb-3">Implemented AI-powered automation across supply chain, logistics, and store operations.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Technologies Used</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Robotic process automation (RPA)</li>
                    <li>• Computer vision for quality control</li>
                    <li>• Predictive maintenance systems</li>
                    <li>• Autonomous mobile robots (AMRs)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Results Achieved</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• 45% reduction in operational costs</li>
                    <li>• 38% improvement in process efficiency</li>
                    <li>• 72% reduction in manual errors</li>
                    <li>• $320M in operational cost savings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">4. Dynamic Pricing & Revenue Optimization</h3>
              <p className="text-orange-800 mb-3">Deployed AI-powered dynamic pricing and revenue management systems.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Technologies Used</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Machine learning pricing algorithms</li>
                    <li>• Real-time market analysis</li>
                    <li>• Competitive intelligence systems</li>
                    <li>• Demand elasticity modeling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Results Achieved</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• 18% increase in average order value</li>
                    <li>• 24% improvement in profit margins</li>
                    <li>• 31% reduction in price markdowns</li>
                    <li>• $280M additional revenue from pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phase 1: Foundation (Months 1-3)</h4>
                <p className="text-gray-600 mb-2">Data infrastructure setup, team training, and pilot project initiation</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Established data lakes and processing pipelines</li>
                  <li>• Trained 200+ employees on AI fundamentals</li>
                  <li>• Launched pilot in 50 stores across 3 regions</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phase 2: Core Implementation (Months 4-9)</h4>
                <p className="text-gray-600 mb-2">Deployed core AI systems across inventory, pricing, and customer experience</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Rolled out inventory management AI to 500 stores</li>
                  <li>• Implemented personalized recommendations platform</li>
                  <li>• Launched dynamic pricing system</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phase 3: Scale & Optimize (Months 10-18)</h4>
                <p className="text-gray-600 mb-2">Full-scale deployment and continuous optimization across all locations</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Deployed AI systems to all 2,500+ stores</li>
                  <li>• Implemented advanced automation and robotics</li>
                  <li>• Optimized algorithms based on performance data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results & ROI */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & ROI Analysis</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financial Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Revenue Growth</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Additional Revenue</span>
                    <span className="text-2xl font-bold text-green-600">$2.3B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenue Growth Rate</span>
                    <span className="text-xl font-semibold text-blue-600">+18.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Digital Revenue Share</span>
                    <span className="text-xl font-semibold text-purple-600">42%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Cost Savings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Operational Cost Reduction</span>
                    <span className="text-2xl font-bold text-green-600">$320M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Inventory Cost Savings</span>
                    <span className="text-xl font-semibold text-blue-600">$180M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Cost Savings</span>
                    <span className="text-xl font-semibold text-purple-600">$500M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Operational Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Efficiency Improvement</span>
                  <span className="font-semibold text-green-600">45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Process Automation</span>
                  <span className="font-semibold text-blue-600">78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Error Reduction</span>
                  <span className="font-semibold text-purple-600">72%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Decision Speed</span>
                  <span className="font-semibold text-orange-600">85%</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Satisfaction Score</span>
                  <span className="font-semibold text-green-600">92%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="font-semibold text-blue-600">+67%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer Lifetime Value</span>
                  <span className="font-semibold text-purple-600">+52%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Retention Rate</span>
                  <span className="font-semibold text-orange-600">+38%</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Investment</span>
                  <span className="font-semibold text-gray-900">$180M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Returns</span>
                  <span className="font-semibold text-green-600">$2.8B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI</span>
                  <span className="font-semibold text-blue-600">1,456%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="font-semibold text-purple-600">8 months</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Learnings & Best Practices</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">1. Data Quality is Critical</h3>
              <p className="text-blue-800 mb-3">Investing in data quality and governance from the beginning was crucial for AI success.</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Establish data quality standards and monitoring</li>
                <li>• Implement robust data governance frameworks</li>
                <li>• Ensure data privacy and security compliance</li>
                <li>• Create single source of truth for all data</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">2. Change Management is Essential</h3>
              <p className="text-green-800 mb-3">Successful AI transformation requires comprehensive change management and employee engagement.</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Communicate vision and benefits clearly</li>
                <li>• Provide extensive training and support</li>
                <li>• Involve employees in the transformation process</li>
                <li>• Celebrate successes and learn from failures</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">3. Start Small, Scale Fast</h3>
              <p className="text-purple-800 mb-3">Pilot projects and iterative scaling proved more effective than big-bang implementations.</p>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Begin with high-impact, low-risk use cases</li>
                <li>• Learn and iterate quickly from pilot results</li>
                <li>• Scale successful initiatives across the organization</li>
                <li>• Maintain flexibility to adapt and pivot</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg mb-6">
            Learn how our proven AI transformation methodology can deliver similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your AI Transformation
            </Link>
            <Link 
              href="/resources" 
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Download Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}