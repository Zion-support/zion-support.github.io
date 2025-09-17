import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
const BusinessAutomationGuide2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
            🚀 NEW: Complete Business Automation Guide 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Transform Your Business with 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Automation</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the proven roadmap to automate 80% of your business operations and achieve 300% productivity gains
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Automation Journey
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-lg">
              Download Guide PDF
            </button>
          </div>
        </div>
        {/* Key Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🎯 Why Business Automation Matters in 2025</h2>
            <p className="text-xl text-gray-300">Companies using AI automation see dramatic improvements in efficiency and profitability</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">300% Productivity Increase</h3>
              <p className="text-gray-300 mb-4">Automate repetitive tasks and focus your team on high-value strategic work</p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Automated data entry and processing</li>
                <li>• Smart document management</li>
                <li>• Intelligent customer support</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">60% Cost Reduction</h3>
              <p className="text-gray-300 mb-4">Eliminate manual processes and reduce operational expenses significantly</p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• Reduced labor costs</li>
                <li>• Lower error rates</li>
                <li>• Streamlined workflows</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Operations</h3>
              <p className="text-gray-300 mb-4">Keep your business running around the clock with intelligent automation</p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• Continuous monitoring</li>
                <li>• Instant responses</li>
                <li>• Global scalability</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Automation Roadmap */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🗺️ Your 90-Day Automation Roadmap</h2>
            <p className="text-xl text-gray-300">Follow our proven step-by-step process to transform your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <h3 className="text-2xl font-bold text-white">Assessment & Planning</h3>
              </div>
              <p className="text-gray-300 mb-4">Weeks 1-2: Analyze current processes and identify automation opportunities</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Process mapping and analysis</li>
                <li>• ROI calculations</li>
                <li>• Technology stack selection</li>
                <li>• Team training plan</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <h3 className="text-2xl font-bold text-white">Pilot Implementation</h3>
              </div>
              <p className="text-gray-300 mb-4">Weeks 3-8: Start with high-impact, low-risk automation projects</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Email marketing automation</li>
                <li>• Customer onboarding flows</li>
                <li>• Basic data processing</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <h3 className="text-2xl font-bold text-white">Scale & Optimize</h3>
              </div>
              <p className="text-gray-300 mb-4">Weeks 9-12: Expand automation across all departments and optimize performance</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Advanced AI integrations</li>
                <li>• Cross-department workflows</li>
                <li>• Predictive analytics</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Success Stories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🏆 Real Success Stories</h2>
            <p className="text-xl text-gray-300">See how businesses transformed with our automation solutions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🏢</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Fortune 500 Manufacturing</h3>
                  <p className="text-purple-200">$50M+ Revenue Company</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-purple-200 text-sm">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">$2.3M</div>
                  <div className="text-purple-200 text-sm">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.8%</div>
                  <div className="text-purple-200 text-sm">Accuracy Rate</div>
                </div>
              </div>
              <p className="text-purple-100 mb-4">"Automated our entire supply chain management, reducing manual errors by 99% and processing time by 85%."</p>
              <p className="text-purple-300 text-sm">- Sarah Johnson, CTO</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🏪</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">E-commerce Retailer</h3>
                  <p className="text-cyan-200">$10M+ Revenue Company</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">300%</div>
                  <div className="text-cyan-200 text-sm">Sales Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-cyan-200 text-sm">Customer Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-cyan-200 text-sm">Reduced Costs</div>
                </div>
              </div>
              <p className="text-cyan-100 mb-4">"AI-powered customer service and inventory management tripled our sales while cutting operational costs in half."</p>
              <p className="text-cyan-300 text-sm">- Mike Chen, CEO</p>
            </div>
          </div>
        </section>
        {/* Implementation Tools */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🛠️ Automation Tools & Technologies</h2>
            <p className="text-xl text-gray-300">Cutting-edge tools to accelerate your automation journey</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Agents</h3>
              <p className="text-gray-300 text-sm">Autonomous AI workers that handle complex business processes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-2">Workflow Automation</h3>
              <p className="text-gray-300 text-sm">Streamline multi-step processes with intelligent workflows</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Data Analytics</h3>
              <p className="text-gray-300 text-sm">Real-time insights and predictive analytics for better decisions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-2">API Integration</h3>
              <p className="text-gray-300 text-sm">Seamlessly connect all your business systems and tools</p>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using AI automation to achieve unprecedented growth and efficiency
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-lg">
                Download Complete Guide
              </button>
            </div>
            <div className="mt-8 text-white/80">
              <p>📞 Call us at +1 (555) 123-4567 or email automation@ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
const BusinessAutomationGuide2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-6">
              📘 COMPLETE BUSINESS GUIDE • 2025
            </div>
            <h1 className="text-5xl font-bold mb-6">
              🚀 Business Automation Guide 2025
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Complete 90-day roadmap to automate 80% of your business operations and achieve 300% productivity gains
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#roadmap" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                View 90-Day Roadmap
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Get Custom Plan
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Key Benefits */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🎯 Why Automate Your Business?</h2>
          <p className="text-xl text-gray-600">Transform your operations with proven automation strategies</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">300% Productivity Increase</h3>
            <p className="text-gray-600 mb-6 text-center">
              Automate repetitive tasks and focus on high-value activities that drive growth
            </p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Eliminate manual data entry
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Automated customer support
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Streamlined workflows
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">💰</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">80% Cost Reduction</h3>
            <p className="text-gray-600 mb-6 text-center">
              Reduce operational costs while maintaining quality and improving efficiency
            </p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Lower labor costs
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Reduced error rates
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Faster processing times
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">24/7 Operations</h3>
            <p className="text-gray-600 mb-6 text-center">
              Run your business around the clock with automated systems that never sleep
            </p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Continuous monitoring
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Instant response times
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Global availability
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 90-Day Roadmap */}
      <div id="roadmap" className="bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🗓️ 90-Day Automation Roadmap</h2>
            <p className="text-xl text-gray-600">Step-by-step guide to transform your business operations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Month 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Month 1: Foundation</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Week 1-2: Assessment</h4>
                    <p className="text-gray-600 text-sm">Analyze current processes and identify automation opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Week 3-4: Planning</h4>
                    <p className="text-gray-600 text-sm">Develop automation strategy and select tools</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Expected Results:</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• 25% reduction in manual tasks</li>
                  <li>• Process documentation completed</li>
                  <li>• Automation tools selected</li>
                </ul>
              </div>
            </div>
            {/* Month 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Month 2: Implementation</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Week 1-2: Setup</h4>
                    <p className="text-gray-600 text-sm">Install and configure automation tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Week 3-4: Testing</h4>
                    <p className="text-gray-600 text-sm">Test and refine automated processes</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Expected Results:</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• 50% of processes automated</li>
                  <li>• Error rates reduced by 60%</li>
                  <li>• Processing time cut in half</li>
                </ul>
              </div>
            </div>
            {/* Month 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Month 3: Optimization</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Week 1-2: Scale</h4>
                    <p className="text-gray-600 text-sm">Expand automation to remaining processes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Week 3-4: Optimize</h4>
                    <p className="text-gray-600 text-sm">Fine-tune and optimize performance</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Expected Results:</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• 80% of operations automated</li>
                  <li>• 300% productivity increase</li>
                  <li>• 80% cost reduction achieved</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Automation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🤖 Automation Categories</h2>
          <p className="text-xl text-gray-600">Comprehensive automation across all business functions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Data Processing</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Automated data entry and validation</li>
              <li>• Report generation and distribution</li>
              <li>• Data analysis and insights</li>
              <li>• Database management</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Customer Service</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Chatbot and AI assistants</li>
              <li>• Ticket routing and management</li>
              <li>• Email automation</li>
              <li>• Customer feedback analysis</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Financial Operations</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Invoice processing</li>
              <li>• Payment automation</li>
              <li>• Expense management</li>
              <li>• Financial reporting</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Supply Chain</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Inventory management</li>
              <li>• Order processing</li>
              <li>• Vendor management</li>
              <li>• Logistics optimization</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Human Resources</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Recruitment automation</li>
              <li>• Employee onboarding</li>
              <li>• Performance tracking</li>
              <li>• Payroll processing</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Marketing & Sales</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Lead generation and nurturing</li>
              <li>• Social media automation</li>
              <li>• Email marketing campaigns</li>
              <li>• Sales pipeline management</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Success Stories */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
            <p className="text-xl opacity-90">Real results from businesses that implemented our automation guide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">+400%</span>
                <span className="text-sm ml-2 opacity-75">Productivity</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Tech Startup</h3>
              <p className="opacity-90 mb-4">Automated customer onboarding and support, reducing response time from 24 hours to 5 minutes.</p>
              <div className="text-sm opacity-75">
                "Our team can now focus on product development instead of repetitive tasks."
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">-75%</span>
                <span className="text-sm ml-2 opacity-75">Costs</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Manufacturing Company</h3>
              <p className="opacity-90 mb-4">Automated inventory management and order processing, eliminating manual errors and delays.</p>
              <div className="text-sm opacity-75">
                "We've reduced operational costs by 75% while improving accuracy."
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">24/7</span>
                <span className="text-sm ml-2 opacity-75">Operations</span>
              </div>
              <h3 className="text-xl font-bold mb-2">E-commerce Business</h3>
              <p className="opacity-90 mb-4">Automated order processing, customer service, and inventory management for round-the-clock operations.</p>
              <div className="text-sm opacity-75">
                "We can now serve customers globally without increasing our team size."
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl p-12 shadow-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their operations with our proven 90-day automation roadmap
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Your Custom Plan
            </a>
            <a href="/pages/InnovationLanding2025" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
              Explore More Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );

export default BusinessAutomationGuide2025;