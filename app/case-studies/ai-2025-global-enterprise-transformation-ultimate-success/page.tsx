import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, DollarSign, Users, Clock, Target, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Enterprise AI Transformation: $2.5B Revenue Increase Case Study',
  description: 'Discover how a Fortune 100 company achieved unprecedented growth through comprehensive AI transformation, increasing revenue by $2.5B and reducing operational costs by 60% in just 18 months.',
  keywords: 'AI transformation, enterprise success, Fortune 100, revenue growth, cost reduction, automation, business transformation',
  openGraph: {
    title: 'Global Enterprise AI Transformation: $2.5B Success',
    description: 'Fortune 100 company achieves $2.5B revenue increase through AI transformation.',
    type: 'article',
  },
};

export default function GlobalEnterpriseTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-green-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Global Enterprise
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                AI Transformation Success
              </span>
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              How a Fortune 100 company achieved unprecedented growth through comprehensive AI transformation, 
              increasing revenue by $2.5B and reducing operational costs by 60% in just 18 months.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                <span>$2.5B Revenue Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Fortune 100 Company</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>18 Month Timeline</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/case-studies" className="text-white hover:text-blue-300 transition-colors">
                All Case Studies
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">
                Start Your Transformation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Summary */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-blue-400" />
              Executive Summary
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A leading Fortune 100 global manufacturing company embarked on a comprehensive AI transformation 
              journey that resulted in unprecedented business success. Through strategic implementation of 
              advanced AI technologies, the company achieved remarkable results across all key performance indicators.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-900/40 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="h-6 w-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Revenue Growth</h3>
                </div>
                <p className="text-3xl font-bold text-green-400 mb-2">$2.5B</p>
                <p className="text-blue-200 text-sm">Increase in annual revenue</p>
              </div>
              
              <div className="bg-green-900/40 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Cost Reduction</h3>
                </div>
                <p className="text-3xl font-bold text-blue-400 mb-2">60%</p>
                <p className="text-green-200 text-sm">Reduction in operational costs</p>
              </div>
              
              <div className="bg-purple-900/40 rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Timeline</h3>
                </div>
                <p className="text-3xl font-bold text-purple-400 mb-2">18</p>
                <p className="text-purple-200 text-sm">Months to full implementation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">The Challenge</h2>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Initial Business Challenges</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-3">Operational Inefficiencies</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Manual processes causing delays and errors</li>
                  <li>• Inefficient supply chain management</li>
                  <li>• High operational costs across all departments</li>
                  <li>• Limited visibility into real-time operations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Market Pressures</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Intense competition from emerging markets</li>
                  <li>• Customer demand for faster delivery times</li>
                  <li>• Need for personalized customer experiences</li>
                  <li>• Pressure to reduce environmental impact</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30">
            <h4 className="text-lg font-semibold text-white mb-3">Critical Business Impact</h4>
            <p className="text-red-200">
              Without intervention, the company projected a 15% decline in market share over the next 3 years, 
              with operational costs continuing to rise by 8% annually. The need for transformation was urgent 
              and comprehensive.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">The AI Transformation Solution</h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md rounded-xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Phase 1: Foundation & Assessment (Months 1-3)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Infrastructure Setup</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Cloud-native AI platform deployment</li>
                    <li>• Data integration and quality assessment</li>
                    <li>• Security and compliance framework</li>
                    <li>• Change management program initiation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Initial Implementations</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Predictive maintenance systems</li>
                    <li>• Automated quality control processes</li>
                    <li>• Basic customer service chatbots</li>
                    <li>• Supply chain optimization algorithms</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-r from-purple-900/50 to-green-900/50 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Phase 2: Advanced Automation (Months 4-9)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Manufacturing Excellence</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Autonomous production line optimization</li>
                    <li>• Real-time quality prediction systems</li>
                    <li>• Energy consumption optimization</li>
                    <li>• Predictive equipment maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Customer Experience</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Personalized product recommendations</li>
                    <li>• AI-powered customer support</li>
                    <li>• Dynamic pricing optimization</li>
                    <li>• Predictive demand forecasting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 backdrop-blur-md rounded-xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Phase 3: Full Integration (Months 10-18)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Autonomous Operations</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Self-optimizing supply chain networks</li>
                    <li>• Autonomous decision-making systems</li>
                    <li>• AI-driven strategic planning</li>
                    <li>• Real-time market adaptation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-teal-400 mb-3">Innovation Acceleration</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• AI-assisted product development</li>
                    <li>• Automated R&D processes</li>
                    <li>• Predictive market analysis</li>
                    <li>• Continuous optimization algorithms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Transformation Results</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Financial Impact */}
            <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 backdrop-blur-md rounded-xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-400" />
                Financial Impact
              </h3>
              
              <div className="space-y-4">
                <div className="bg-green-900/40 rounded-lg p-4 border border-green-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-green-200">Revenue Increase</span>
                    <span className="text-2xl font-bold text-green-400">$2.5B</span>
                  </div>
                </div>
                
                <div className="bg-blue-900/40 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Cost Reduction</span>
                    <span className="text-2xl font-bold text-blue-400">60%</span>
                  </div>
                </div>
                
                <div className="bg-purple-900/40 rounded-lg p-4 border border-purple-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">ROI</span>
                    <span className="text-2xl font-bold text-purple-400">850%</span>
                  </div>
                </div>
                
                <div className="bg-teal-900/40 rounded-lg p-4 border border-teal-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-teal-200">Payback Period</span>
                    <span className="text-2xl font-bold text-teal-400">8 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Impact */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-md rounded-xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                Operational Impact
              </h3>
              
              <div className="space-y-4">
                <div className="bg-blue-900/40 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Production Efficiency</span>
                    <span className="text-2xl font-bold text-blue-400">+75%</span>
                  </div>
                </div>
                
                <div className="bg-purple-900/40 rounded-lg p-4 border border-purple-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Quality Improvement</span>
                    <span className="text-2xl font-bold text-purple-400">+90%</span>
                  </div>
                </div>
                
                <div className="bg-green-900/40 rounded-lg p-4 border border-green-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-green-200">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-green-400">+85%</span>
                  </div>
                </div>
                
                <div className="bg-teal-900/40 rounded-lg p-4 border border-teal-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-teal-200">Time to Market</span>
                    <span className="text-2xl font-bold text-teal-400">-65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-purple-400" />
              Key Achievements
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-purple-900/40 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Workforce Transformation</h4>
                <p className="text-purple-200 text-sm">
                  Upskilled 15,000 employees in AI technologies, creating a future-ready workforce
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-900/40 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Market Leadership</h4>
                <p className="text-blue-200 text-sm">
                  Achieved #1 market position in 3 key product categories through AI optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-900/40 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Sustainability Impact</h4>
                <p className="text-green-200 text-sm">
                  Reduced carbon footprint by 40% through optimized operations and energy usage
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Lessons Learned & Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Critical Success Factors</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Strong executive sponsorship and change management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Phased implementation approach with measurable milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Investment in workforce training and development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Robust data governance and security framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Continuous monitoring and optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Implementation Challenges</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-semibold">Challenge:</span>
                  <span>Data silos and quality issues across departments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-semibold">Solution:</span>
                  <span>Comprehensive data integration platform with quality controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-semibold">Challenge:</span>
                  <span>Resistance to change from traditional workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-semibold">Solution:</span>
                  <span>Extensive training programs and gradual transition approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-semibold">Challenge:</span>
                  <span>Integration complexity with legacy systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-semibold">Solution:</span>
                  <span>API-first architecture with gradual system modernization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-green-900 rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-blue-200 mb-6">
              Discover how Zion Tech Group can help you achieve similar transformation results 
              through our proven AI implementation methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link 
                href="/case-studies"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}