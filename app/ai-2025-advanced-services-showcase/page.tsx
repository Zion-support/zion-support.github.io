import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

const AI2025AdvancedServicesShowcasePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <SEO
        title="AI 2025 Advanced Services Showcase - Premium AI Solutions & Services"
        description="Explore our comprehensive suite of advanced AI services for 2025. From machine learning consulting to intelligent automation, discover premium solutions that drive business transformation."
        keywords="AI services 2025, advanced AI, machine learning consulting, intelligent automation, AI solutions, business transformation"
      />
      
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white animate-pulse shadow-lg">
                  🏆 PREMIUM SERVICES
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                AI 2025 Advanced Services Showcase
              </h1>
              
              <p className="text-2xl md:text-3xl mb-12 text-gray-200 max-w-5xl mx-auto leading-relaxed">
                Unlock the full potential of artificial intelligence with our comprehensive suite of premium services designed to accelerate your digital transformation and maximize ROI.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xl rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Request Consultation
                </Link>
                <Link 
                  href="/ai-2025-next-generation-solutions" 
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-300 font-bold text-xl rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Premium AI Services Portfolio
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Strategy Consulting</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive AI strategy development and roadmap planning to align technology with business objectives.
                </p>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Strategic Planning
                  </div>
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ROI Optimization
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Machine Learning Development</h3>
                <p className="text-gray-300 mb-6">
                  Custom ML models and algorithms tailored to your specific business needs and data requirements.
                </p>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Custom Models
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Advanced Analytics
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Intelligent Automation</h3>
                <p className="text-gray-300 mb-6">
                  End-to-end automation solutions that streamline operations and reduce manual workload by up to 95%.
                </p>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Process Automation
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    95% Efficiency Gain
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-gradient-to-br from-orange-800/50 to-red-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 hover:border-orange-400 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Data Intelligence</h3>
                <p className="text-gray-300 mb-6">
                  Advanced data analytics and insights extraction to drive informed decision-making and business growth.
                </p>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Predictive Analytics
                  </div>
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Real-time Insights
                  </div>
                </div>
              </div>

              {/* Service 5 */}
              <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Security & Compliance</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive security frameworks and compliance solutions to protect your AI infrastructure and data.
                </p>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Enterprise Security
                  </div>
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Compliance Ready
                  </div>
                </div>
              </div>

              {/* Service 6 */}
              <div className="bg-gradient-to-br from-teal-800/50 to-green-800/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30 hover:border-teal-400 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Implementation</h3>
                <p className="text-gray-300 mb-6">
                  Complete AI solution deployment and integration services with ongoing support and optimization.
                </p>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    End-to-End Deployment
                  </div>
                  <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">Fortune 500</div>
                <div className="text-white font-semibold mb-4">Global Manufacturing</div>
                <p className="text-gray-300 mb-4">
                  Reduced operational costs by 60% and increased productivity by 300% through intelligent automation.
                </p>
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  $50M+ Savings
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">Tech Startup</div>
                <div className="text-white font-semibold mb-4">E-commerce Platform</div>
                <p className="text-gray-300 mb-4">
                  Achieved 99.9% prediction accuracy and 10x faster customer service response times.
                </p>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  10x Growth
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">Healthcare</div>
                <div className="text-white font-semibold mb-4">Medical Diagnosis</div>
                <p className="text-gray-300 mb-4">
                  Improved diagnostic accuracy by 95% and reduced processing time from hours to minutes.
                </p>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  95% Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Service Tiers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
                <h3 className="text-2xl font-bold mb-4 text-white">Starter</h3>
                <div className="text-4xl font-bold text-emerald-400 mb-6">$5,000<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>✓ AI Strategy Consultation</li>
                  <li>✓ Basic Automation Setup</li>
                  <li>✓ Monthly Progress Reports</li>
                  <li>✓ Email Support</li>
                </ul>
                <Link href="/contact" className="w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold py-3 rounded-full text-center block hover:from-gray-700 hover:to-slate-700 transition-all duration-300">
                  Get Started
                </Link>
              </div>

              {/* Professional */}
              <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 transform scale-105">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 text-center">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Professional</h3>
                <div className="text-4xl font-bold text-emerald-400 mb-6">$15,000<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>✓ Everything in Starter</li>
                  <li>✓ Custom ML Development</li>
                  <li>✓ Advanced Analytics</li>
                  <li>✓ Priority Support</li>
                  <li>✓ Weekly Consultations</li>
                </ul>
                <Link href="/contact" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 rounded-full text-center block hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                  Choose Professional
                </Link>
              </div>

              {/* Enterprise */}
              <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold mb-4 text-white">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>✓ Everything in Professional</li>
                  <li>✓ Dedicated AI Team</li>
                  <li>✓ 24/7 Support</li>
                  <li>✓ Custom Development</li>
                  <li>✓ On-site Consultation</li>
                </ul>
                <Link href="/contact" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-full text-center block hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/30 to-teal-900/30">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the AI revolution with our premium services. Get a free consultation and discover how our advanced AI solutions can accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact" 
                className="px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xl rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/ai-2025-next-generation-solutions" 
                className="px-10 py-5 border-2 border-emerald-400 text-emerald-300 font-bold text-xl rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025AdvancedServicesShowcasePage;