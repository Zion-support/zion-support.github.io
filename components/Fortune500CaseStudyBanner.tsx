import React from 'react';
import Link from 'next/link';

export default function Fortune500CaseStudyBanner() {
  return (
    <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fortune 500 AI Transformation Success
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            340% ROI in 12 Months Through Comprehensive AI Implementation. 
            Learn how a leading manufacturing company achieved unprecedented results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-sm opacity-90">ROI in 12 Months</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">$2.3B</div>
            <div className="text-sm opacity-90">Cost Savings</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">25%</div>
            <div className="text-sm opacity-90">Revenue Increase</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">60%</div>
            <div className="text-sm opacity-90">Efficiency Improvement</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3">Key Achievements</h3>
            <ul className="text-sm opacity-90 space-y-2">
              <li>• 45% reduction in production downtime</li>
              <li>• 35% improvement in delivery times</li>
              <li>• 80% reduction in response time</li>
              <li>• 90% customer satisfaction score</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3">Technologies Deployed</h3>
            <ul className="text-sm opacity-90 space-y-2">
              <li>• Machine Learning Platforms</li>
              <li>• Intelligent Automation</li>
              <li>• Predictive Analytics</li>
              <li>• AI-Powered Customer Service</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold mb-3 text-center">Implementation Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-300 mb-1">1-3</div>
              <div className="text-xs opacity-90">Months</div>
              <div className="text-xs opacity-75">Foundation & Training</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-300 mb-1">4-6</div>
              <div className="text-xs opacity-90">Months</div>
              <div className="text-xs opacity-75">Core Systems</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-300 mb-1">7-9</div>
              <div className="text-xs opacity-90">Months</div>
              <div className="text-xs opacity-75">Advanced Features</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-300 mb-1">10-12</div>
              <div className="text-xs opacity-90">Months</div>
              <div className="text-xs opacity-75">Optimization</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies/fortune-500-ai-transformation-success"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}