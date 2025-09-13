import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingUp, Users, DollarSign, Target, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Retail Transformation: 400% Revenue Growth Case Study | Zion Tech Group',
  description: 'Discover how a major retail chain achieved 400% revenue growth through AI-powered personalization, inventory optimization, and customer experience enhancement.',
  keywords: 'AI retail transformation, retail AI case study, AI personalization, retail automation, AI customer experience',
  openGraph: {
    title: 'AI Retail Transformation: 400% Revenue Growth Case Study',
    description: 'Discover how a major retail chain achieved 400% revenue growth through AI.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              January 17, 2025
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              18 min read
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              Zion Tech Group
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Retail Transformation: 400% Revenue Growth Breakthrough
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            How a major retail chain leveraged AI-powered personalization, inventory optimization, 
            and customer experience enhancement to achieve unprecedented growth and market dominance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Executive Summary */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Executive Summary</h2>
            <p className="text-xl leading-relaxed mb-6">
              A Fortune 500 retail chain transformed their business operations through comprehensive AI 
              implementation, achieving 400% revenue growth, 60% improvement in customer satisfaction, 
              and 45% reduction in operational costs within 18 months.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-3xl font-bold">400%</div>
                <div className="text-sm">Revenue Growth</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-3xl font-bold">60%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-3xl font-bold">45%</div>
                <div className="text-sm">Cost Reduction</div>
              </div>
            </div>
          </div>

          {/* Key Results */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold">Revenue Impact</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• $2.4B additional annual revenue</li>
                <li>• 35% increase in average order value</li>
                <li>• 280% growth in online sales</li>
                <li>• 150% increase in customer lifetime value</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-3">
                <Users className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold">Customer Experience</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• 60% improvement in satisfaction scores</li>
                <li>• 85% reduction in customer complaints</li>
                <li>• 40% increase in repeat purchase rate</li>
                <li>• 90% improvement in recommendation scores</li>
              </ul>
            </div>
          </div>

          {/* Challenge Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Critical Business Problems</h3>
              <p className="text-red-700">
                The retail chain was facing declining sales, high customer churn, inefficient inventory 
                management, and increasing operational costs. Traditional approaches were no longer 
                sufficient to compete in the digital-first retail landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Challenges</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Declining sales and market share</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>High customer churn rate (35% annually)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Inefficient inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Rising operational costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Poor customer experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Challenges</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Legacy systems and data silos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Limited real-time analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Manual processes and workflows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Inconsistent customer data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Limited personalization capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The AI-Powered Solution</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We implemented a comprehensive AI transformation strategy that addressed every aspect of 
              the retail operation, from customer experience to supply chain optimization.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. AI-Powered Personalization Engine</h3>
                <p className="text-gray-700 mb-4">
                  Deployed machine learning algorithms to analyze customer behavior, preferences, and 
                  purchase history, enabling hyper-personalized shopping experiences across all channels.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Real-time product recommendations</li>
                      <li>• Dynamic pricing optimization</li>
                      <li>• Personalized marketing campaigns</li>
                      <li>• Customized store layouts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 35% increase in conversion rate</li>
                      <li>• 280% growth in online sales</li>
                      <li>• 60% improvement in customer satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Intelligent Inventory Management</h3>
                <p className="text-gray-700 mb-4">
                  Implemented AI-driven demand forecasting and inventory optimization systems that 
                  reduced stockouts by 80% while minimizing excess inventory.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Predictive demand forecasting</li>
                      <li>• Automated reorder points</li>
                      <li>• Seasonal trend analysis</li>
                      <li>• Supplier performance optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 80% reduction in stockouts</li>
                      <li>• 30% decrease in excess inventory</li>
                      <li>• 25% improvement in inventory turnover</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Customer Experience Enhancement</h3>
                <p className="text-gray-700 mb-4">
                  Deployed AI chatbots, virtual assistants, and intelligent customer service systems 
                  that provided 24/7 support and personalized assistance.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• AI-powered chatbots and virtual assistants</li>
                      <li>• Intelligent product search and discovery</li>
                      <li>• Automated customer support</li>
                      <li>• Personalized shopping guidance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 85% reduction in customer complaints</li>
                      <li>• 90% improvement in recommendation scores</li>
                      <li>• 40% increase in repeat purchase rate</li>
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
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 1: Foundation (Months 1-3)</h3>
                  <p className="text-gray-700 mb-2">
                    Data integration, system architecture setup, and initial AI model development.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <strong>Key Deliverables:</strong> Data pipeline, basic personalization engine, pilot store implementation
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 2: Core Implementation (Months 4-9)</h3>
                  <p className="text-gray-700 mb-2">
                    Full-scale deployment of personalization, inventory management, and customer experience systems.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <strong>Key Deliverables:</strong> Complete AI platform, 50% store rollout, initial performance metrics
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 3: Optimization (Months 10-18)</h3>
                  <p className="text-gray-700 mb-2">
                    Full deployment, continuous optimization, and advanced AI feature implementation.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <strong>Key Deliverables:</strong> 100% store rollout, advanced analytics, full ROI achievement
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Measurable Results</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Additional Annual Revenue</span>
                    <span className="text-2xl font-bold text-green-600">$2.4B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">ROI on AI Investment</span>
                    <span className="text-2xl font-bold text-green-600">1,200%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cost Savings</span>
                    <span className="text-2xl font-bold text-green-600">$180M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Payback Period</span>
                    <span className="text-2xl font-bold text-green-600">8 months</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-blue-600">+60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Conversion Rate</span>
                    <span className="text-2xl font-bold text-blue-600">+35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Inventory Turnover</span>
                    <span className="text-2xl font-bold text-blue-600">+25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Stockout Reduction</span>
                    <span className="text-2xl font-bold text-blue-600">-80%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Success Factors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Executive leadership commitment and support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Comprehensive data integration strategy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Phased implementation approach</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Continuous monitoring and optimization</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Employee training and change management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Customer-centric design approach</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Scalable technology architecture</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Performance measurement and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl mt-12">
            <h2 className="text-3xl font-bold mb-4">Transform Your Retail Business</h2>
            <p className="text-xl mb-6">
              Ready to achieve similar results? Our AI retail transformation experts can help you 
              implement the same proven strategies that delivered 400% revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/ai-retail-transformation"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
              >
                Explore Retail AI Services
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>

      {/* Footer Actions */}
      <div className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/case-studies/ai-2025-financial-services-transformation"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← Previous: Financial Services
              </Link>
              <Link 
                href="/case-studies/ai-2025-healthcare-diagnosis-breakthrough"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Next: Healthcare Breakthrough →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}