import React from 'react';
import Link from 'next/link';

const NewContentShowcase2026: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW CONTENT 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Insights for the Future
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI, quantum computing, and enterprise automation that are reshaping industries in 2026.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Article 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-4 left-6">
                <span className="bg-white bg-opacity-90 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  AI & Automation
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI 2026: The Enterprise Transformation Revolution
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover how AI is revolutionizing enterprise operations in 2026 with autonomous systems, quantum computing, and next-generation automation that's transforming businesses worldwide.
              </p>
              
              <div className="flex items-center justify-between">
                <Link 
                  href="/blog/ai-2026-enterprise-transformation-revolution"
                  className="text-purple-600 hover:text-purple-800 font-semibold flex items-center"
                >
                  Read Full Article →
                </Link>
                <span className="text-sm text-gray-500">15 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-4 left-6">
                <span className="bg-white bg-opacity-90 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Quantum Computing
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quantum Computing Business Applications: The 2026 Breakthrough
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore how quantum computing is revolutionizing business operations in 2026 with practical applications, real-world case studies, and implementation strategies.
              </p>
              
              <div className="flex items-center justify-between">
                <Link 
                  href="/blog/quantum-computing-business-applications-2026"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                >
                  Read Full Article →
                </Link>
                <span className="text-sm text-gray-500">12 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📈 SUCCESS STORY</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              AI Automation Success: 340% ROI Achievement
            </h3>
            
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Discover how a Fortune 500 company transformed their operations with AI automation, achieving 340% ROI, 60% cost reduction, and 95% process automation.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">340%</div>
                <div className="text-sm opacity-90">ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$2.3B</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-sm opacity-90">Process Automation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
            </div>
            
            <Link 
              href="/case-studies/ai-automation-enterprise-success-story"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Case Study →
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">🔮</div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Future Predictions</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get insights into what the future holds for AI, quantum computing, and enterprise automation.
            </p>
            <Link href="/resources" className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
              Explore Resources →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">🛠️</div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Implementation Guides</h4>
            <p className="text-gray-600 text-sm mb-4">
              Step-by-step guides to implement AI and quantum technologies in your organization.
            </p>
            <Link href="/tools" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
              View Tools →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">📊</div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">ROI Calculator</h4>
            <p className="text-gray-600 text-sm mb-4">
              Calculate the potential ROI of implementing AI automation in your business.
            </p>
            <Link href="/tools/ai-2026-roi-calculator" className="text-green-600 hover:text-green-800 font-semibold text-sm">
              Calculate ROI →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already leveraging cutting-edge AI and quantum technologies to achieve unprecedented results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;