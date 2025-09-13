import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Retail Transformation: 300% Revenue Growth Case Study',
  description: 'How a major retail chain achieved 300% revenue growth and 60% cost reduction through AI-powered personalization and automation.',
  keywords: 'AI retail transformation, retail AI case study, AI personalization, retail automation, AI ROI',
};

export default function AIRetailTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-purple-600 mb-4">
            <span>Case Study</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>January 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Retail Transformation: 300% Revenue Growth Case Study
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How a major retail chain achieved 300% revenue growth and 60% cost reduction through AI-powered personalization, inventory optimization, and customer experience automation.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 The Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
                <div className="text-gray-600">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">12x</div>
                <div className="text-gray-600">ROI in 18 months</div>
              </div>
        </section>

        {/* Implementation Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Process</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Analysis (Months 1-2)</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive analysis of current systems, customer behavior patterns, 
                  and business processes to identify optimization opportunities.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Customer journey mapping</li>
                    <li>• Data audit and quality assessment</li>
                    <li>• Process analysis and optimization opportunities</li>
                    <li>• Technology stack evaluation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Solution Design (Months 3-4)</h3>
                <p className="text-gray-700 mb-4">
                  Custom AI solution design tailored to specific business needs, including 
                  architecture planning and technology selection.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• AI architecture design</li>
                    <li>• Data pipeline development</li>
                    <li>• Model selection and training</li>
                    <li>• Integration planning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pilot Implementation (Months 5-8)</h3>
                <p className="text-gray-700 mb-4">
                  Phased rollout starting with 10 pilot stores to validate AI solutions 
                  and refine implementation approach.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pilot store selection and setup</li>
                    <li>• AI model training and validation</li>
                    <li>• Staff training and change management</li>
                    <li>• Performance monitoring and optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Deployment (Months 9-18)</h3>
                <p className="text-gray-700 mb-4">
                  Complete rollout across all 200 stores with continuous monitoring, 
                  optimization, and support.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Gradual rollout to all locations</li>
                    <li>• Performance monitoring and analytics</li>
                    <li>• Continuous optimization</li>
                    <li>• Staff training and support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions Implemented */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Solutions Implemented</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Recommendations</h3>
              <p className="text-gray-600 mb-4">
                AI-powered recommendation engine that analyzes customer behavior, purchase 
                history, and preferences to suggest relevant products.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Result: 45% increase in average order value
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Demand Forecasting</h3>
              <p className="text-gray-600 mb-4">
                Predictive analytics system that forecasts demand for products across 
                different locations and time periods.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Result: 60% reduction in stockouts
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Customer Service</h3>
              <p className="text-gray-600 mb-4">
                AI chatbot and virtual assistant that handles customer inquiries, 
                complaints, and support requests 24/7.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Result: 80% reduction in support tickets
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive dashboard providing real-time insights into sales, 
                customer behavior, and operational metrics.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Result: 50% faster decision making
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            TechCorp faced multiple challenges that threatened their market position and 
            profitability. The retail landscape was rapidly changing, and traditional 
            approaches were no longer sufficient.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Problems</h3>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-red-900 mb-2">Declining Sales and Revenue</h4>
              <p className="text-red-800">
                Sales had been declining by 5% year-over-year for three consecutive years. 
                Customers were increasingly turning to online retailers and competitors with 
                better digital experiences.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-orange-900 mb-2">Poor Customer Experience</h4>
              <p className="text-orange-800">
                Customer satisfaction scores were below 60%, with complaints about long wait 
                times, difficulty finding products, and lack of personalized service.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-2">Inefficient Operations</h4>
              <p className="text-yellow-800">
                High operational costs due to manual processes, inventory mismanagement, 
                and inefficient staff allocation across stores.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">Lack of Digital Innovation</h4>
              <p className="text-purple-800">
                No digital tools for customers to search, compare, or get recommendations. 
                The company was falling behind competitors who had invested in technology.
              </p>
