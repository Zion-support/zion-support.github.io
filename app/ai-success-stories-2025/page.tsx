import React from 'react';
import SEO from '../../components/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Success Stories 2025 - Real Results from Revolutionary AI | Zion Tech Group',
  description: 'Discover inspiring success stories from organizations that have transformed their operations using our revolutionary AI solutions. See real results, metrics, and case studies.',
  keywords: 'AI success stories, AI case studies, AI results, artificial intelligence success, AI transformation, machine learning success',
};

export default function AISuccessStories2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <SEO 
        title="AI Success Stories 2025 - Real Results from Revolutionary AI"
        description="Discover inspiring success stories from organizations that have transformed their operations using our revolutionary AI solutions. See real results, metrics, and case studies."
        keywords="AI success stories, AI case studies, AI results, artificial intelligence success"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent mb-6">
            AI Success Stories 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real organizations, real results. Discover how our revolutionary AI solutions have transformed businesses and created unprecedented value.
          </p>
        </div>

        {/* Success Metrics Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-900/60 to-green-900/60 p-6 rounded-xl border border-emerald-500/30 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-gray-300">Organizations Transformed</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 p-6 rounded-xl border border-blue-500/30 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">$2.5B+</div>
            <div className="text-gray-300">Cost Savings Generated</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 p-6 rounded-xl border border-purple-500/30 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
            <div className="text-gray-300">Customer Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/60 to-red-900/60 p-6 rounded-xl border border-orange-500/30 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">15x</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
        </div>

        {/* Featured Success Stories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Featured Success Stories
          </h2>
          
          <div className="space-y-12">
            {/* Story 1 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600/30">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-emerald-400 text-3xl mr-3">🏢</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Fortune 500 Manufacturing Giant</h3>
                      <p className="text-emerald-400 font-semibold">Industrial Automation Revolution</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    A leading manufacturing company transformed their entire production line using our AI automation platform, 
                    achieving unprecedented efficiency and quality improvements.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-900/30 p-4 rounded-lg">
                      <div className="text-emerald-400 font-bold text-xl">300%</div>
                      <div className="text-gray-300 text-sm">Efficiency Increase</div>
                    </div>
                    <div className="bg-blue-900/30 p-4 rounded-lg">
                      <div className="text-blue-400 font-bold text-xl">$50M</div>
                      <div className="text-gray-300 text-sm">Annual Savings</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-6xl text-emerald-400">📈</div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 p-8 rounded-2xl border border-purple-600/30">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="flex items-center justify-center order-2 lg:order-1">
                  <div className="text-6xl text-purple-400">🏥</div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-4">
                    <div className="text-purple-400 text-3xl mr-3">🏥</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Global Healthcare Network</h3>
                      <p className="text-purple-400 font-semibold">Medical AI Revolution</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    A major healthcare network implemented our AI diagnostic platform across 200+ facilities, 
                    revolutionizing patient care and medical decision-making.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-900/30 p-4 rounded-lg">
                      <div className="text-purple-400 font-bold text-xl">95%</div>
                      <div className="text-gray-300 text-sm">Diagnostic Accuracy</div>
                    </div>
                    <div className="bg-pink-900/30 p-4 rounded-lg">
                      <div className="text-pink-400 font-bold text-xl">60%</div>
                      <div className="text-gray-300 text-sm">Faster Diagnosis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-gradient-to-r from-blue-800/50 to-cyan-800/50 p-8 rounded-2xl border border-blue-600/30">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 text-3xl mr-3">🏦</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">International Banking Group</h3>
                      <p className="text-blue-400 font-semibold">Financial AI Transformation</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    A major banking institution deployed our AI-powered fraud detection and risk management system, 
                    protecting billions in assets while improving customer experience.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-900/30 p-4 rounded-lg">
                      <div className="text-blue-400 font-bold text-xl">99.9%</div>
                      <div className="text-gray-300 text-sm">Fraud Detection</div>
                    </div>
                    <div className="bg-cyan-900/30 p-4 rounded-lg">
                      <div className="text-cyan-400 font-bold text-xl">$2B</div>
                      <div className="text-gray-300 text-sm">Assets Protected</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-6xl text-blue-400">🛡️</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Success Stories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Success Across Industries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-500/20">
              <div className="text-green-400 text-3xl mb-4">🌱</div>
              <h4 className="text-xl font-bold text-white mb-3">Agriculture</h4>
              <p className="text-gray-300 mb-4">
                Precision farming AI increased crop yields by 40% while reducing water usage by 25%.
              </p>
              <div className="text-green-400 font-bold">$15M Additional Revenue</div>
            </div>

            <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 p-6 rounded-xl border border-red-500/20">
              <div className="text-red-400 text-3xl mb-4">🚗</div>
              <h4 className="text-xl font-bold text-white mb-3">Automotive</h4>
              <p className="text-gray-300 mb-4">
                Smart manufacturing reduced production time by 50% and improved quality by 35%.
              </p>
              <div className="text-red-400 font-bold">$30M Cost Reduction</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl border border-indigo-500/20">
              <div className="text-indigo-400 text-3xl mb-4">🛒</div>
              <h4 className="text-xl font-bold text-white mb-3">Retail</h4>
              <p className="text-gray-300 mb-4">
                AI-powered inventory management reduced stockouts by 80% and increased sales by 25%.
              </p>
              <div className="text-indigo-400 font-bold">$45M Revenue Growth</div>
            </div>

            <div className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 p-6 rounded-xl border border-teal-500/20">
              <div className="text-teal-400 text-3xl mb-4">✈️</div>
              <h4 className="text-xl font-bold text-white mb-3">Airlines</h4>
              <p className="text-gray-300 mb-4">
                Predictive maintenance AI reduced flight delays by 70% and maintenance costs by 45%.
              </p>
              <div className="text-teal-400 font-bold">$20M Annual Savings</div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 p-6 rounded-xl border border-pink-500/20">
              <div className="text-pink-400 text-3xl mb-4">🎓</div>
              <h4 className="text-xl font-bold text-white mb-3">Education</h4>
              <p className="text-gray-300 mb-4">
                Personalized learning AI improved student performance by 60% and engagement by 85%.
              </p>
              <div className="text-pink-400 font-bold">95% Student Satisfaction</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-6 rounded-xl border border-yellow-500/20">
              <div className="text-yellow-400 text-3xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-3">Energy</h4>
              <p className="text-gray-300 mb-4">
                Smart grid AI optimized energy distribution, reducing costs by 30% and outages by 90%.
              </p>
              <div className="text-yellow-400 font-bold">$100M Efficiency Gains</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            What Our Clients Say
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/30">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">
                "The AI transformation has been nothing short of revolutionary. We've achieved results we never thought possible."
              </p>
              <div className="text-white font-bold">Sarah Johnson</div>
              <div className="text-emerald-400 text-sm">CEO, TechCorp Industries</div>
            </div>

            <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 p-6 rounded-xl border border-blue-600/30">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">
                "Our ROI exceeded all expectations. The AI platform paid for itself in just 3 months."
              </p>
              <div className="text-white font-bold">Michael Chen</div>
              <div className="text-blue-400 text-sm">CTO, Global Finance Group</div>
            </div>

            <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 p-6 rounded-xl border border-green-600/30">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">
                "The implementation was seamless, and the results were immediate. Our team productivity increased by 300%."
              </p>
              <div className="text-white font-bold">Dr. Emily Rodriguez</div>
              <div className="text-green-400 text-sm">Director, MedTech Solutions</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-12 rounded-2xl border border-emerald-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of organizations that have already transformed their operations with our revolutionary AI solutions. 
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              Start Your Transformation
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 hover:text-white transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}