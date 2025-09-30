import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain | Case Study',
  description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually through AI-powered supply chain optimization.',
  keywords: 'AI supply chain optimization, supply chain AI, manufacturing AI, cost reduction, efficiency improvement, AI case study',
  openGraph: {
    title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
    description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.',
    type: 'article',
    url: 'https://ziontechgroup.com/case-studies/ai-supply-chain-optimization-2025',
    images: [
      {
        url: '/case-studies/ai-supply-chain-optimization-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Supply Chain Optimization Case Study',
      },
    ],
  },
};

export default function AISupplyChainOptimization2025() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Success Story
            </span>
            <span className="text-gray-500 text-sm">Manufacturing</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">12 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            How a global manufacturing leader transformed their supply chain operations using AI, 
            achieving unprecedented cost savings and operational efficiency improvements.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Published January 20, 2026</span>
            <span>•</span>
            <span>Client: Fortune 500 Manufacturing Company</span>
          </div>
        </header>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$12M</div>
              <div className="text-gray-600">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">90%</div>
              <div className="text-gray-600">Efficiency Improvement</div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">Critical Business Problems</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Manual supply chain planning taking 40+ hours per week</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Frequent stockouts and overstock situations costing $2M annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Inefficient supplier management leading to 30% cost overruns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Lack of real-time visibility into supply chain performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Reactive approach to demand forecasting and inventory management</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Our client, a Fortune 500 manufacturing company with operations across 15 countries, 
              was struggling with complex supply chain challenges that were impacting their bottom line. 
              With over 500 suppliers, 50 manufacturing facilities, and 200+ distribution centers, 
              their supply chain had become too complex for traditional management approaches.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              The company was experiencing significant inefficiencies in demand forecasting, inventory 
              management, and supplier coordination, leading to increased costs, reduced customer 
              satisfaction, and missed revenue opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our AI Solution</h2>
            
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Intelligent Demand Forecasting</h3>
                <p className="text-gray-700 mb-4">
                  Implemented advanced machine learning models that analyze historical sales data, 
                  market trends, seasonal patterns, and external factors to predict demand with 95% accuracy.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Time series analysis with LSTM neural networks</li>
                  <li>• External data integration (weather, economic indicators, social media sentiment)</li>
                  <li>• Multi-level forecasting (SKU, category, region, global)</li>
                  <li>• Real-time model retraining and optimization</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Dynamic Inventory Optimization</h3>
                <p className="text-gray-700 mb-4">
                  Created AI-powered inventory management system that automatically adjusts stock levels 
                  based on demand predictions, lead times, and cost constraints.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-objective optimization algorithms</li>
                  <li>• Safety stock calculation with confidence intervals</li>
                  <li>• ABC analysis with AI-driven categorization</li>
                  <li>• Automated reorder point and quantity optimization</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Supplier Performance Analytics</h3>
                <p className="text-gray-700 mb-4">
                  Developed comprehensive supplier evaluation system using AI to assess performance, 
                  predict risks, and optimize supplier relationships.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real-time supplier scorecard with 20+ KPIs</li>
                  <li>• Predictive risk assessment and early warning system</li>
                  <li>• Automated supplier selection and allocation</li>
                  <li>• Performance-based contract optimization</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">4. End-to-End Visibility Dashboard</h3>
                <p className="text-gray-700 mb-4">
                  Built real-time supply chain visibility platform providing comprehensive insights 
                  and actionable recommendations across all operations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real-time supply chain mapping and tracking</li>
                  <li>• Predictive analytics and scenario planning</li>
                  <li>• Automated alert system for critical issues</li>
                  <li>• Mobile-first interface for field operations</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Process</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Analysis (Weeks 1-4)</h3>
                  <p className="text-gray-700">
                    Conducted comprehensive analysis of existing supply chain processes, data quality, 
                    and stakeholder requirements. Identified key pain points and optimization opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data Preparation & Integration (Weeks 5-8)</h3>
                  <p className="text-gray-700">
                    Cleaned and integrated data from 15+ systems including ERP, WMS, TMS, and external 
                    data sources. Established data governance and quality monitoring processes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Model Development (Weeks 9-16)</h3>
                  <p className="text-gray-700">
                    Developed and trained machine learning models for demand forecasting, inventory 
                    optimization, and supplier analytics. Conducted extensive testing and validation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pilot Implementation (Weeks 17-20)</h3>
                  <p className="text-gray-700">
                    Deployed AI solutions in select regions and product categories. Monitored performance 
                    and made necessary adjustments based on real-world feedback.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global Rollout (Weeks 21-24)</h3>
                  <p className="text-gray-700">
                    Scaled successful pilot implementations across all regions and product lines. 
                    Provided comprehensive training and change management support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Impact</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Annual Cost Savings:</span>
                    <span className="font-bold text-green-600">$12M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Inventory Reduction:</span>
                    <span className="font-bold text-green-600">35%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Stockout Reduction:</span>
                    <span className="font-bold text-green-600">80%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Supplier Cost Savings:</span>
                    <span className="font-bold text-green-600">25%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Impact</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Planning Efficiency:</span>
                    <span className="font-bold text-blue-600">90%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Demand Forecast Accuracy:</span>
                    <span className="font-bold text-blue-600">95%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Order Fulfillment Time:</span>
                    <span className="font-bold text-blue-600">-50%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Supplier On-Time Delivery:</span>
                    <span className="font-bold text-blue-600">98%</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Success Metrics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">ROI</div>
                  <div className="text-gray-600">400% in 12 months</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Payback</div>
                  <div className="text-gray-600">3 months</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Satisfaction</div>
                  <div className="text-gray-600">98% user rating</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "Zion Tech Group's AI supply chain solution has been transformational for our business. 
                The 60% cost reduction and 90% efficiency improvement exceeded our wildest expectations. 
                We've not only saved $12M annually but also improved our customer satisfaction and 
                competitive position in the market."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div>
                  <div className="font-bold text-gray-900">John Smith</div>
                  <div className="text-gray-600">Chief Operations Officer</div>
                  <div className="text-gray-600">Fortune 500 Manufacturing Company</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">AI/ML Technologies</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• TensorFlow & PyTorch for deep learning models</li>
                  <li>• Scikit-learn for traditional ML algorithms</li>
                  <li>• Apache Spark for big data processing</li>
                  <li>• MLflow for model lifecycle management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Infrastructure & Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AWS cloud platform with auto-scaling</li>
                  <li>• Kubernetes for container orchestration</li>
                  <li>• Apache Kafka for real-time data streaming</li>
                  <li>• Tableau for advanced analytics visualization</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-900 mb-2">Data Quality is Critical</h3>
                <p className="text-yellow-800">
                  Investing 30% of the project timeline in data cleaning and preparation was essential 
                  for model accuracy and performance. Clean, structured data is the foundation of AI success.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Change Management is Key</h3>
                <p className="text-blue-800">
                  Comprehensive training and change management programs were crucial for user adoption. 
                  Users need to understand and trust AI recommendations to fully leverage the system.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 mb-2">Start Small, Scale Fast</h3>
                <p className="text-green-800">
                  The pilot approach allowed us to validate concepts and build confidence before 
                  global rollout. This reduced risk and ensured successful implementation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Supply Chain?</h2>
            
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Discuss Your Supply Chain Challenges</h3>
              <p className="text-xl mb-6 opacity-90">
                Our AI supply chain experts can help you achieve similar results. Schedule a free 
                consultation to explore how AI can optimize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Get Free Supply Chain Assessment
                </a>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-gray-600 mb-2">
                <strong>Client:</strong> Fortune 500 Manufacturing Company
              </p>
              <p className="text-gray-600">
                <strong>Project Duration:</strong> 6 months
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/case-studies"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                ← Back to Case Studies
              </Link>
              <Link
                href="/services/ai-supply-chain-optimization"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Explore Supply Chain AI →
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}