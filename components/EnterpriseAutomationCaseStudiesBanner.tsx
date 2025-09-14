import React from 'react';
import Link from 'next/link';

const EnterpriseAutomationCaseStudiesBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M40 40c0-22.091-17.909-40-40-40s-40 17.909-40 40 17.909 40 40 40 40-17.909 40-40zM40 0c22.091 0 40 17.909 40 40s-17.909 40-40 40S0 62.091 0 40 17.909 0 40 0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500 bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📊 REAL-WORLD SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Enterprise Automation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Case Studies 2027
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how leading organizations achieved remarkable results through intelligent automation. 
            Real metrics, proven strategies, and actionable insights from successful implementations.
          </p>
        </div>
        
        {/* Case Study Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Manufacturing Case Study */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🏭</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Global Manufacturing Corp</h3>
                <p className="text-gray-300">$15B Revenue • 50K+ Employees</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Cost Reduction:</span>
                <span className="text-2xl font-bold text-green-400">$450M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Efficiency Increase:</span>
                <span className="text-2xl font-bold text-blue-400">25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Defect Rate:</span>
                <span className="text-2xl font-bold text-purple-400">15% → 2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">ROI:</span>
                <span className="text-2xl font-bold text-yellow-400">340%</span>
              </div>
            </div>
            
            <Link
              href="/blog/enterprise-automation-case-studies-2027"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              Read Full Case Study →
            </Link>
          </div>
          
          {/* Financial Services Case Study */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🏦</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Investment Banking</h3>
                <p className="text-gray-300">$500B AUM • 25K+ Employees</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Cost Savings:</span>
                <span className="text-2xl font-bold text-green-400">$180M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Processing Time:</span>
                <span className="text-2xl font-bold text-blue-400">4-6h → 30s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Client Onboarding:</span>
                <span className="text-2xl font-bold text-purple-400">2-3w → 2-3d</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">ROI:</span>
                <span className="text-2xl font-bold text-yellow-400">280%</span>
              </div>
            </div>
            
            <Link
              href="/blog/enterprise-automation-case-studies-2027"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
            >
              Read Full Case Study →
            </Link>
          </div>
        </div>
        
        {/* Success Metrics Grid */}
        <div className="bg-white bg-opacity-5 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Industry Success Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">Manufacturing</div>
              <div className="text-2xl font-bold text-yellow-400">340%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Financial</div>
              <div className="text-2xl font-bold text-yellow-400">280%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Healthcare</div>
              <div className="text-2xl font-bold text-yellow-400">220%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">Retail</div>
              <div className="text-2xl font-bold text-yellow-400">310%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Technology</div>
              <div className="text-2xl font-bold text-yellow-400">250%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
          </div>
        </div>
        
        {/* Key Success Factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">🎯</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Strategic Leadership</h4>
            <p className="text-gray-300">Executive sponsorship and clear vision drive successful automation initiatives across all case studies.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">🔄</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Phased Implementation</h4>
            <p className="text-gray-300">Successful organizations follow pilot → proof of concept → full-scale deployment methodology.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">📊</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Measurable Results</h4>
            <p className="text-gray-300">Clear metrics and continuous monitoring ensure automation delivers expected business value.</p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/enterprise-automation-case-studies-2027"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-10 py-4 rounded-lg font-bold text-xl hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read All Case Studies →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Start Your Automation Journey
            </Link>
          </div>
          
          <p className="text-gray-400 text-lg">
            Learn from industry leaders who've transformed their operations.
            <span className="text-white font-semibold"> Your automation success story starts here.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseAutomationCaseStudiesBanner;