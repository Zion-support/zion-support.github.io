import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Factory, TrendingUp, Clock, DollarSign, CheckCircle, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Manufacturing Transformation: $2.8B Cost Savings Case Study',
  description: 'Discover how a Fortune 500 manufacturing company achieved $2.8B in cost savings and 45% efficiency gains through comprehensive AI transformation. Real results, proven strategies.',
  keywords: 'AI manufacturing, manufacturing AI transformation, industrial AI, smart manufacturing, AI case study',
  openGraph: {
    title: 'AI Manufacturing Transformation: $2.8B Cost Savings Case Study',
    description: 'Discover how a Fortune 500 manufacturing company achieved $2.8B in cost savings and 45% efficiency gains through comprehensive AI transformation. Real results, proven strategies.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
  },
};

export default function AIManufacturingTransformation2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Factory className="w-4 h-4 mr-2" />
            Manufacturing Case Study
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Manufacturing Transformation: $2.8B Cost Savings Case Study
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            How a Fortune 500 manufacturing company achieved unprecedented results through 
            comprehensive AI transformation, reducing costs by $2.8B and improving efficiency by 45%.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>📅 January 17, 2025</span>
            <span>⏱️ 20 min read</span>
            <span>👥 4.2k views</span>
            <span>💬 156 comments</span>
          </div>
        </div>

        {/* Key Results */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Transformation Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2.8B</div>
              <p className="text-gray-600">Total Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <p className="text-gray-600">Efficiency Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">78%</div>
              <p className="text-gray-600">Quality Defect Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-gray-600">Automated Operations</p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Background</h3>
              <p className="text-gray-700 mb-4">
                A Fortune 500 global manufacturing company with operations across 15 countries, 
                producing automotive components, industrial machinery, and consumer electronics. 
                The company faced increasing pressure from competitors and rising operational costs.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• 50,000+ employees worldwide</li>
                <li>• 25 manufacturing facilities</li>
                <li>• $12B annual revenue</li>
                <li>• 40+ years in business</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Rising operational costs and declining profit margins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Quality control issues affecting customer satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Inefficient production planning and resource allocation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Manual processes causing delays and errors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Difficulty predicting maintenance needs and equipment failures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Transformation Strategy */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Transformation Strategy</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 1: Foundation (Months 1-6)</h3>
              <p className="text-gray-700 mb-4">
                Established AI infrastructure and data governance frameworks across all manufacturing facilities.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">Key Initiatives:</p>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Implemented IoT sensors across production lines</li>
                  <li>• Created centralized data lake for manufacturing data</li>
                  <li>• Established AI/ML platform and development environment</li>
                  <li>• Trained 500+ employees on AI fundamentals</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 2: Pilot Programs (Months 7-12)</h3>
              <p className="text-gray-700 mb-4">
                Launched targeted AI pilots in high-impact areas to prove value and build organizational confidence.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800 font-medium">Pilot Projects:</p>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Predictive maintenance for critical equipment</li>
                  <li>• Quality control automation using computer vision</li>
                  <li>• Demand forecasting and production planning</li>
                  <li>• Supply chain optimization algorithms</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 3: Scale & Optimize (Months 13-24)</h3>
              <p className="text-gray-700 mb-4">
                Scaled successful pilots across all facilities and implemented advanced AI capabilities.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-800 font-medium">Scale Initiatives:</p>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• Deployed AI solutions across all 25 facilities</li>
                  <li>• Implemented autonomous production lines</li>
                  <li>• Created AI-powered digital twins</li>
                  <li>• Established continuous learning systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* AI Solutions Implemented */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Solutions Implemented</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Predictive Maintenance</h3>
                <p className="text-sm text-blue-800 mb-3">
                  AI-powered system that predicts equipment failures before they occur, 
                  reducing unplanned downtime by 65%.
                </p>
                <div className="text-sm text-blue-700">
                  <p><strong>Results:</strong> $800M in maintenance cost savings</p>
                  <p><strong>Technology:</strong> Machine learning, IoT sensors, time series analysis</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Quality Control Automation</h3>
                <p className="text-sm text-green-800 mb-3">
                  Computer vision system that automatically detects defects in real-time, 
                  improving quality by 78% and reducing waste by 45%.
                </p>
                <div className="text-sm text-green-700">
                  <p><strong>Results:</strong> $600M in quality cost savings</p>
                  <p><strong>Technology:</strong> Computer vision, deep learning, real-time processing</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Production Optimization</h3>
                <p className="text-sm text-purple-800 mb-3">
                  AI system that optimizes production schedules, resource allocation, and 
                  inventory management, increasing efficiency by 45%.
                </p>
                <div className="text-sm text-purple-700">
                  <p><strong>Results:</strong> $900M in operational cost savings</p>
                  <p><strong>Technology:</strong> Optimization algorithms, demand forecasting, resource planning</p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Supply Chain Intelligence</h3>
                <p className="text-sm text-orange-800 mb-3">
                  AI-powered supply chain optimization that reduces costs, improves delivery 
                  times, and minimizes disruptions.
                </p>
                <div className="text-sm text-orange-700">
                  <p><strong>Results:</strong> $500M in supply chain savings</p>
                  <p><strong>Technology:</strong> Network optimization, demand sensing, risk management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Results & Impact</h2>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-green-800 font-medium">Total Cost Savings</span>
                    <span className="text-green-600 font-bold text-xl">$2.8B</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-blue-800 font-medium">ROI on AI Investment</span>
                    <span className="text-blue-600 font-bold text-xl">340%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="text-purple-800 font-medium">Payback Period</span>
                    <span className="text-purple-600 font-bold text-xl">18 months</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-green-800 font-medium">Efficiency Improvement</span>
                    <span className="text-green-600 font-bold text-xl">45%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-blue-800 font-medium">Quality Defect Reduction</span>
                    <span className="text-blue-600 font-bold text-xl">78%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="text-purple-800 font-medium">Unplanned Downtime</span>
                    <span className="text-purple-600 font-bold text-xl">-65%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
                  <p className="text-gray-600">On-time Delivery Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">92%</div>
                  <p className="text-gray-600">Customer Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">40%</div>
                  <p className="text-gray-600">Faster Order Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Lessons Learned</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start with Data Quality</h3>
              <p className="text-gray-700">
                The foundation of successful AI implementation is high-quality, clean data. 
                Invest in data governance and quality assurance from the beginning.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Change Management is Critical</h3>
              <p className="text-gray-700">
                Employee buy-in and training are essential for AI success. Involve teams in 
                the design process and provide comprehensive training programs.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Small, Scale Fast</h3>
              <p className="text-gray-700">
                Begin with pilot projects to prove value, then scale successful initiatives 
                across the organization. This approach reduces risk and builds confidence.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Measure Everything</h3>
              <p className="text-gray-700">
                Establish clear KPIs and measurement frameworks before implementation. 
                Continuous monitoring and optimization are key to sustained success.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI/ML Platforms</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• TensorFlow & PyTorch</li>
                <li>• Azure Machine Learning</li>
                <li>• AWS SageMaker</li>
                <li>• Custom ML pipelines</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Infrastructure</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Apache Kafka</li>
                <li>• Azure Data Lake</li>
                <li>• Apache Spark</li>
                <li>• Real-time streaming</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">IoT & Sensors</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Industrial IoT sensors</li>
                <li>• Edge computing devices</li>
                <li>• Real-time data collection</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Manufacturing?</h2>
          <p className="text-xl mb-6">
            Learn how to achieve similar results with AI transformation in your manufacturing operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Manufacturing AI Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/resources/manufacturing-ai-transformation-guide-2025" 
              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download Transformation Guide
            </Link>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Financial Services Transformation</h4>
                <p className="text-gray-600 text-sm">How a major bank achieved $50M in cost savings through AI automation.</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Healthcare Diagnosis Breakthrough</h4>
                <p className="text-gray-600 text-sm">Revolutionary AI system improves diagnostic accuracy by 40%.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}