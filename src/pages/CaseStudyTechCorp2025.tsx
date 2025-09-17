import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudyTechCorp2025: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TechCorp 2025: AI Transformation Success Story | ZionTech Group</title>
        <meta name="description" content="Discover how TechCorp achieved 500% ROI through our comprehensive AI transformation strategy, reducing costs by 60% while increasing productivity by 300%." />
        <meta name="keywords" content="AI transformation, case study, ROI, business automation, TechCorp, success story" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                TechCorp 2025: AI Transformation Success Story
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                How a Fortune 500 company achieved 500% ROI through comprehensive AI transformation, 
                reducing operational costs by 60% while increasing productivity by 300%.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="bg-blue-500/20 px-3 py-1 rounded-full">500% ROI</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full">60% Cost Reduction</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full">300% Productivity Increase</span>
                <span className="bg-yellow-500/20 px-3 py-1 rounded-full">6 Month Implementation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-lg text-gray-600 mb-6">
                  TechCorp, a leading technology company with 50,000+ employees across 40 countries, 
                  faced significant operational challenges that threatened their market position.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Manual processes consuming 70% of workforce time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Data silos preventing effective decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Rising operational costs outpacing revenue growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Customer satisfaction declining due to slow response times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>Competitive pressure from AI-native companies</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Metrics Before AI Implementation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Manual Process Time</span>
                    <span className="font-semibold text-red-600">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Response Time</span>
                    <span className="font-semibold text-red-600">48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-red-600">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Operational Efficiency</span>
                    <span className="font-semibold text-red-600">45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our AI Transformation Solution</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implemented a comprehensive AI ecosystem that transformed every aspect of TechCorp's operations, 
                from customer service to supply chain management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Automation</h3>
                <p className="text-gray-600">
                  Deployed AI-powered automation across 200+ business processes, reducing manual work by 85%.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Implemented advanced analytics to predict market trends and optimize resource allocation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Customer Service</h3>
                <p className="text-gray-600">
                  Deployed conversational AI that handles 80% of customer inquiries with 95% satisfaction.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Optimization</h3>
                <p className="text-gray-600">
                  AI continuously optimizes workflows, reducing bottlenecks and improving efficiency.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Compliance</h3>
                <p className="text-gray-600">
                  AI-powered security systems provide real-time threat detection and compliance monitoring.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Integration</h3>
                <p className="text-gray-600">
                  Unified data from 40+ systems into a single AI-powered analytics platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Transformation Results</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                The results exceeded all expectations, delivering unprecedented value and positioning TechCorp as an industry leader.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500%</div>
                <div className="text-blue-100">ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-blue-100">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-blue-100">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-100">Customer Satisfaction</div>
              </div>
            </div>
            
            <div className="mt-16 grid lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Key Performance Improvements</h3>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Response time reduced from 48 hours to 2 hours</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Manual processes reduced from 70% to 15%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Customer satisfaction increased from 68% to 95%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Operational efficiency improved from 45% to 90%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Data processing speed increased by 1000%</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Financial Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-blue-100">Annual Cost Savings</span>
                    <span className="text-white font-semibold">$50M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Revenue Increase</span>
                    <span className="text-white font-semibold">$120M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Implementation Cost</span>
                    <span className="text-white font-semibold">$25M</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-4">
                    <span className="text-blue-100 font-semibold">Net Benefit</span>
                    <span className="text-white font-bold text-xl">$145M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl text-gray-900 mb-8">
              "The AI transformation led by ZionTech Group has been nothing short of revolutionary. 
              We've not only achieved our goals but exceeded them by 200%. The ROI has been incredible, 
              and our team is more productive and engaged than ever before."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-left">
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already achieved remarkable results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Start Your AI Journey
              </a>
              <a
                href="/services"
                className="border border-gray-600 hover:border-gray-500 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyTechCorp2025;