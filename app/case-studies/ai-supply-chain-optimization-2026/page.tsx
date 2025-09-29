import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Supply Chain Optimization: 85% Efficiency Gain & $5M Savings',
  description: 'See how we helped a global manufacturer achieve 85% efficiency improvement and $5M annual savings with AI-powered supply chain optimization.',
  keywords: 'AI supply chain, supply chain optimization, manufacturing AI, logistics AI, efficiency improvement',
};

export default function AISupplyChainCaseStudyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/case-studies" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Case Studies
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
            Success Story
          </span>
          <span>Published January 20, 2026</span>
          <span>•</span>
          <span>Manufacturing</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Supply Chain Optimization: 85% Efficiency Gain & $5M Savings
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Discover how we transformed a global manufacturer's supply chain operations with AI, 
          achieving unprecedented efficiency gains and cost savings.
        </p>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$5M</div>
              <div className="text-gray-600">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Reduced Inventory Costs</div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Company Profile</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Industry:</strong> Global Manufacturing</li>
                <li><strong>Size:</strong> 50,000+ employees</li>
                <li><strong>Revenue:</strong> $2.5B annually</li>
                <li><strong>Locations:</strong> 25+ countries</li>
                <li><strong>Products:</strong> Industrial equipment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Challenge</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Complex global supply chain</li>
                <li>• Manual planning processes</li>
                <li>• High inventory carrying costs</li>
                <li>• Frequent stockouts and delays</li>
                <li>• Limited visibility into operations</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
        
        <p className="mb-6">
          Our client, a global manufacturing company, faced significant challenges in managing 
          their complex supply chain operations. With operations spanning 25+ countries and 
          thousands of suppliers, they struggled with:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Manual Planning:</strong> Supply chain planning was done manually using spreadsheets, leading to inefficiencies and errors</li>
          <li><strong>High Inventory Costs:</strong> Overstocking to avoid stockouts resulted in $50M+ in excess inventory</li>
          <li><strong>Poor Visibility:</strong> Limited real-time visibility into supply chain operations and performance</li>
          <li><strong>Frequent Disruptions:</strong> Supply chain disruptions caused production delays and customer dissatisfaction</li>
          <li><strong>Complex Coordination:</strong> Difficulty coordinating between multiple suppliers, warehouses, and distribution centers</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
        
        <p className="mb-6">
          We developed a comprehensive AI-powered supply chain optimization platform that 
          transformed their operations from reactive to predictive.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Components Implemented</h3>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-3">1. Demand Forecasting AI</h4>
            <p className="text-gray-600 mb-4">
              Advanced machine learning models that predict demand with 95% accuracy, considering 
              seasonality, market trends, and external factors.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Time series analysis with LSTM neural networks</li>
              <li>• Integration of external data sources (weather, economic indicators)</li>
              <li>• Real-time demand adjustment based on market changes</li>
              <li>• Multi-level forecasting (SKU, category, region)</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-3">2. Inventory Optimization Engine</h4>
            <p className="text-gray-600 mb-4">
              Intelligent inventory management system that optimizes stock levels across the 
              entire supply chain network.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Multi-echelon inventory optimization</li>
              <li>• Safety stock calculations with demand variability</li>
              <li>• ABC analysis with dynamic categorization</li>
              <li>• Automated reorder point calculations</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-3">3. Supply Chain Visibility Platform</h4>
            <p className="text-gray-600 mb-4">
              Real-time dashboard providing end-to-end visibility into supply chain operations 
              and performance.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Real-time tracking of shipments and inventory</li>
              <li>• Predictive alerts for potential disruptions</li>
              <li>• Performance analytics and KPI monitoring</li>
              <li>• Mobile app for field operations</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-3">4. Route Optimization AI</h4>
            <p className="text-gray-600 mb-4">
              Advanced algorithms that optimize transportation routes and logistics operations 
              for maximum efficiency.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Dynamic route optimization with real-time traffic data</li>
              <li>• Load consolidation algorithms</li>
              <li>• Multi-modal transportation planning</li>
              <li>• Carbon footprint optimization</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Process</h2>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-sm text-gray-600">Analyzed current processes and data quality</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pilot</h3>
              <p className="text-sm text-gray-600">Deployed AI solution in one region</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Scale</h3>
              <p className="text-sm text-gray-600">Rolled out globally across all regions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Optimize</h3>
              <p className="text-sm text-gray-600">Continuous improvement and fine-tuning</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Results Achieved</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Improvements</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-gray-600">Supply Chain Efficiency</span>
                <span className="font-bold text-green-600">+85%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">Demand Forecast Accuracy</span>
                <span className="font-bold text-green-600">95%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">Inventory Turnover</span>
                <span className="font-bold text-green-600">+60%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">Stockout Reduction</span>
                <span className="font-bold text-green-600">-80%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">Order Fulfillment Time</span>
                <span className="font-bold text-green-600">-45%</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Impact</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-gray-600">Annual Cost Savings</span>
                <span className="font-bold text-green-600">$5M</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">Inventory Cost Reduction</span>
                <span className="font-bold text-green-600">$30M</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">Transportation Savings</span>
                <span className="font-bold text-green-600">$2M</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">Labor Cost Reduction</span>
                <span className="font-bold text-green-600">$1.5M</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">ROI</span>
                <span className="font-bold text-green-600">400%</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Testimonial</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <blockquote className="text-lg text-gray-700 italic mb-4">
            "The AI supply chain optimization solution has transformed our operations. We've seen 
            incredible improvements in efficiency and cost savings. The system's predictive capabilities 
            have helped us avoid disruptions and optimize our inventory levels like never before."
          </blockquote>
          <div className="flex items-center">
            <div>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-600">VP of Supply Chain Operations</div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-3">AI/ML Technologies</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• TensorFlow & PyTorch</li>
              <li>• Scikit-learn</li>
              <li>• Apache Spark</li>
              <li>• Kubernetes</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Cloud Infrastructure</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• AWS/Azure/GCP</li>
              <li>• Docker Containers</li>
              <li>• Microservices Architecture</li>
              <li>• API Gateway</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Data & Analytics</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Real-time Data Streaming</li>
              <li>• Data Lake Architecture</li>
              <li>• Business Intelligence Tools</li>
              <li>• Custom Dashboards</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-3">Ready to Optimize Your Supply Chain?</h3>
          <p className="text-green-800 mb-4">
            Our AI supply chain experts can help you achieve similar results. Get a free 
            consultation and custom optimization plan for your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Case Studies</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/case-studies/manufacturing-ai-transformation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 mb-2">Manufacturing AI Transformation</h4>
            <p className="text-gray-600 text-sm">See how we transformed a manufacturing operation</p>
          </Link>
          <Link href="/case-studies/logistics-automation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 mb-2">Logistics Automation Success</h4>
            <p className="text-gray-600 text-sm">Automated logistics with 90% efficiency gain</p>
          </Link>
        </div>
      </article>
    </div>
  );
}