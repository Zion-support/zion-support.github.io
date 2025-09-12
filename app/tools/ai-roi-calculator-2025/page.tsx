import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import InteractiveROICalculator2025 from '../../../components/InteractiveROICalculator2025';

export default function AIROICalculator2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO
        title="AI ROI Calculator 2025 - Calculate Your AI Investment Returns | Zion Tech Group"
        description="Free AI ROI calculator to estimate returns on your AI investment. Get personalized insights based on your industry, company size, and expected efficiency gains."
        keywords="AI ROI calculator, AI investment returns, AI business case, AI ROI analysis, artificial intelligence ROI"
        url="/tools/ai-roi-calculator-2025"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">📊 Free AI Tool</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI ROI Calculator
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> 2025</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Calculate the potential return on investment for your AI transformation project. 
            Get personalized insights based on your industry, company size, and business objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">💰</span> Free to Use
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">⚡</span> Instant Results
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">🎯</span> Industry-Specific
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">📈</span> Data-Driven Insights
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <InteractiveROICalculator2025 />
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI ROI Calculator uses industry benchmarks, real-world case studies, and advanced algorithms 
              to provide accurate projections for your AI investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Input Your Data</h3>
              <p className="text-gray-600">
                Provide your company size, industry, revenue, and AI implementation budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Set Expectations</h3>
              <p className="text-gray-600">
                Define your expected efficiency gains and revenue growth targets.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Analysis</h3>
              <p className="text-gray-600">
                Receive comprehensive ROI calculations and industry-specific insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Implementation</h3>
              <p className="text-gray-600">
                Use results to build your AI transformation strategy and business case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry AI ROI Benchmarks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on real-world implementations across various industries, here are the typical ROI ranges 
              you can expect from AI transformation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average ROI</span>
                  <span className="text-2xl font-bold text-green-600">340%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="text-lg font-semibold text-blue-600">18 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Efficiency Gains</span>
                  <span className="text-lg font-semibold text-purple-600">45%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Diagnostic AI, process automation, and predictive analytics drive significant cost savings and improved patient outcomes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average ROI</span>
                  <span className="text-2xl font-bold text-green-600">280%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="text-lg font-semibold text-blue-600">24 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Efficiency Gains</span>
                  <span className="text-lg font-semibold text-purple-600">35%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Predictive maintenance, quality control, and supply chain optimization reduce downtime and improve productivity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Finance</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average ROI</span>
                  <span className="text-2xl font-bold text-green-600">420%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="text-lg font-semibold text-blue-600">15 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Efficiency Gains</span>
                  <span className="text-lg font-semibold text-purple-600">60%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Fraud detection, algorithmic trading, and automated compliance deliver rapid returns through risk reduction and process automation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average ROI</span>
                  <span className="text-2xl font-bold text-green-600">250%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="text-lg font-semibold text-blue-600">20 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Efficiency Gains</span>
                  <span className="text-lg font-semibold text-purple-600">30%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Demand forecasting, personalized recommendations, and inventory optimization improve customer experience and reduce costs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average ROI</span>
                  <span className="text-2xl font-bold text-green-600">380%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="text-lg font-semibold text-blue-600">12 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Efficiency Gains</span>
                  <span className="text-lg font-semibold text-purple-600">50%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                DevOps automation, code generation, and intelligent testing accelerate development cycles and improve software quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average ROI</span>
                  <span className="text-2xl font-bold text-green-600">220%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="text-lg font-semibold text-blue-600">28 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Efficiency Gains</span>
                  <span className="text-lg font-semibold text-purple-600">25%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Personalized learning, administrative automation, and predictive analytics improve student outcomes and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how companies across different industries have achieved remarkable returns on their AI investments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🏥</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Regional Healthcare System</h3>
                  <p className="text-gray-600">15,000+ employees</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">340%</div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$2.3M</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">18</div>
                  <div className="text-sm text-gray-600">Months Payback</div>
                </div>
              </div>
              <p className="text-gray-700">
                "AI transformed our diagnostic capabilities and operational efficiency. The ROI exceeded our wildest expectations."
              </p>
              <div className="mt-4 text-sm text-gray-600">
                — Chief Technology Officer
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🏭</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Global Manufacturing Company</h3>
                  <p className="text-gray-600">25,000+ employees</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">280%</div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$5.1M</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">22</div>
                  <div className="text-sm text-gray-600">Months Payback</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Predictive maintenance and quality control AI reduced downtime by 65% and improved our bottom line significantly."
              </p>
              <div className="mt-4 text-sm text-gray-600">
                — VP of Operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Calculate Your AI ROI?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Use our free calculator above to get personalized insights for your AI transformation project. 
            Need help interpreting the results or planning your implementation?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}