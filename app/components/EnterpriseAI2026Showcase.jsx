import React from 'react';
import Link from 'next/link';

const EnterpriseAI2026Showcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">🏢 ENTERPRISE AI 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Enterprise with AI
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are leveraging cutting-edge AI technologies to achieve unprecedented growth and operational efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Analytics</h3>
            <p className="text-gray-600 mb-4">Advanced predictive analytics and business intelligence solutions that drive data-driven decision making.</p>
            <Link href="/content/ai-analytics-enterprise-2026" className="text-blue-600 font-semibold hover:text-blue-800">Read Guide →</Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Process Automation</h3>
            <p className="text-gray-600 mb-4">Intelligent automation solutions that streamline workflows and eliminate manual processes.</p>
            <Link href="/content/process-automation-2026" className="text-purple-600 font-semibold hover:text-purple-800">Explore →</Link>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Security</h3>
            <p className="text-gray-600 mb-4">Next-generation cybersecurity solutions powered by AI to protect your enterprise assets.</p>
            <Link href="/content/ai-security-enterprise-2026" className="text-green-600 font-semibold hover:text-green-800">Learn More →</Link>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Experience</h3>
            <p className="text-gray-600 mb-4">AI-driven customer service and engagement solutions that deliver personalized experiences.</p>
            <Link href="/content/ai-customer-experience-2026" className="text-orange-600 font-semibold hover:text-orange-800">Discover →</Link>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
            <p className="text-gray-600 mb-4">AI-powered optimization solutions that maximize efficiency and reduce operational costs.</p>
            <Link href="/content/performance-optimization-2026" className="text-red-600 font-semibold hover:text-red-800">Optimize →</Link>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Planning</h3>
            <p className="text-gray-600 mb-4">AI-assisted strategic planning and decision support systems for long-term success.</p>
            <Link href="/content/strategic-planning-ai-2026" className="text-indigo-600 font-semibold hover:text-indigo-800">Plan →</Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/content/enterprise-ai-transformation-2026"
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-lg shadow-lg"
          >
            Start Your AI Transformation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseAI2026Showcase;