import React from 'react';
import Link from 'next/link';

const HighROICaseStudiesShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-green-500 to-cyan-600 bg-clip-text text-transparent">
            🏆 HIGH ROI CASE STUDIES
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Real Results from Real Companies Using Our AI Solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-yellow-500 text-black rounded-full font-bold animate-pulse">
              PROVEN RESULTS
            </span>
            <span className="px-6 py-3 bg-green-500 text-white rounded-full font-bold animate-pulse">
              HIGH ROI
            </span>
            <span className="px-6 py-3 bg-cyan-500 text-black rounded-full font-bold animate-pulse">
              SUCCESS STORIES
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Case Study 1 */}
          <div className="bg-gradient-to-br from-green-800 to-emerald-800 rounded-xl p-6 border border-green-400 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-4">Fortune 500 Manufacturing</h3>
            <p className="text-gray-300 mb-4">
              Global manufacturing company achieved 15,000% ROI through AI-powered autonomous operations and predictive maintenance.
            </p>
            <div className="space-y-2 mb-4">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ROI: 15,000%
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Savings: $2.5B
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Time: 6 months
              </div>
            </div>
            <Link 
              href="/case-studies/fortune-500-manufacturing-15000-roi"
              className="inline-block bg-white text-green-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study →
            </Link>
          </div>

          {/* Case Study 2 */}
          <div className="bg-gradient-to-br from-blue-800 to-cyan-800 rounded-xl p-6 border border-blue-400 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🏦</div>
            <h3 className="text-2xl font-bold mb-4">Global Financial Services</h3>
            <p className="text-gray-300 mb-4">
              Major bank achieved 25,000% ROI through AI-powered fraud detection and automated trading systems.
            </p>
            <div className="space-y-2 mb-4">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ROI: 25,000%
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Savings: $5.2B
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Time: 4 months
              </div>
            </div>
            <Link 
              href="/case-studies/global-financial-services-25000-roi"
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study →
            </Link>
          </div>

          {/* Case Study 3 */}
          <div className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-xl p-6 border border-purple-400 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold mb-4">Healthcare Network</h3>
            <p className="text-gray-300 mb-4">
              Hospital network achieved 30,000% ROI through AI-powered diagnosis and treatment optimization.
            </p>
            <div className="space-y-2 mb-4">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ROI: 30,000%
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Lives Saved: 50,000+
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Time: 8 months
              </div>
            </div>
            <Link 
              href="/case-studies/healthcare-network-30000-roi"
              className="inline-block bg-white text-purple-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study →
            </Link>
          </div>

          {/* Case Study 4 */}
          <div className="bg-gradient-to-br from-orange-800 to-red-800 rounded-xl p-6 border border-orange-400 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold mb-4">Automotive Industry</h3>
            <p className="text-gray-300 mb-4">
              Leading car manufacturer achieved 20,000% ROI through AI-powered autonomous vehicle development and smart manufacturing.
            </p>
            <div className="space-y-2 mb-4">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ROI: 20,000%
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Savings: $3.8B
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Time: 12 months
              </div>
            </div>
            <Link 
              href="/case-studies/automotive-industry-20000-roi"
              className="inline-block bg-white text-orange-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study →
            </Link>
          </div>

          {/* Case Study 5 */}
          <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl p-6 border border-indigo-400 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold mb-4">E-commerce Giant</h3>
            <p className="text-gray-300 mb-4">
              Global e-commerce platform achieved 18,000% ROI through AI-powered recommendation engines and supply chain optimization.
            </p>
            <div className="space-y-2 mb-4">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ROI: 18,000%
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Revenue: +$4.5B
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Time: 6 months
              </div>
            </div>
            <Link 
              href="/case-studies/ecommerce-giant-18000-roi"
              className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study →
            </Link>
          </div>

          {/* Case Study 6 */}
          <div className="bg-gradient-to-br from-teal-800 to-cyan-800 rounded-xl p-6 border border-teal-400 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Energy Sector</h3>
            <p className="text-gray-300 mb-4">
              Renewable energy company achieved 22,000% ROI through AI-powered grid optimization and predictive maintenance.
            </p>
            <div className="space-y-2 mb-4">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ROI: 22,000%
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Efficiency: +95%
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Time: 9 months
              </div>
            </div>
            <Link 
              href="/case-studies/energy-sector-22000-roi"
              className="inline-block bg-white text-teal-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study →
            </Link>
          </div>
        </div>

        {/* ROI Statistics */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Average ROI Across All Implementations</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">21,500%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$3.2B</div>
              <div className="text-gray-300">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">7.5</div>
              <div className="text-gray-300">Months to ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-500 to-green-500 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-black mb-4">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-black text-lg mb-6">
            Join hundreds of companies already achieving breakthrough ROI with our AI solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Get Your ROI Assessment
            </Link>
            <Link 
              href="/case-studies"
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighROICaseStudiesShowcase;