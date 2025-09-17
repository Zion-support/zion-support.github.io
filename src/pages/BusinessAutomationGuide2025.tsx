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
    </div>
  );
};

export default BusinessAutomationGuide2025;