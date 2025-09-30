import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-700 text-sm font-semibold">🔥 REVOLUTIONARY CONTENT</span>
            <span className="text-purple-500 text-sm">•</span>
            <span className="text-blue-700 text-sm font-semibold">BREAKTHROUGH INSIGHTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Transform Your Business Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough AI technologies, success stories, and implementation guides that are 
            transforming enterprises worldwide with unprecedented ROI and efficiency gains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* AI 2027 Breakthrough Technologies */}
          <Link href="/blog/ai-2027-breakthrough-technologies" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-purple-300">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-2xl text-white">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI 2027 Breakthrough Technologies</h3>
                    <p className="text-purple-200 text-sm">Revolutionary Innovation Guide</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Explore neural quantum computing, autonomous decision systems, and predictive intelligence networks 
                  that deliver 1000x faster processing and 500% ROI.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">1000x</div>
                      <div className="text-gray-500 text-xs">Faster</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">500%</div>
                      <div className="text-gray-500 text-xs">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">99.9%</div>
                      <div className="text-gray-500 text-xs">Accuracy</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Published Jan 20, 2027</div>
                  <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Fortune 500 Success Story */}
          <Link href="/case-studies/fortune-500-ai-transformation-2027" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-green-300">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-2xl text-white">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Fortune 500 Success Story</h3>
                    <p className="text-green-200 text-sm">$200M Savings & 400% ROI</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  See how a Fortune 500 manufacturing company achieved $200M annual savings and 400% ROI 
                  through comprehensive AI transformation using breakthrough 2027 technologies.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">$200M</div>
                      <div className="text-gray-500 text-xs">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">400%</div>
                      <div className="text-gray-500 text-xs">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">95%</div>
                      <div className="text-gray-500 text-xs">Efficiency</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Fortune 500 Case Study</div>
                  <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    View Case Study →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* AI Implementation Guide */}
          <Link href="/services/ai-2027-breakthrough-solutions" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-300">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-2xl text-white">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI 2027 Solutions</h3>
                    <p className="text-indigo-200 text-sm">Implementation Services</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Transform your enterprise with breakthrough AI technologies. Our expert team delivers 
                  comprehensive implementation services for maximum ROI and competitive advantage.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-indigo-600">8</div>
                      <div className="text-gray-500 text-xs">Months ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">24/7</div>
                      <div className="text-gray-500 text-xs">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">99.9%</div>
                      <div className="text-gray-500 text-xs">Uptime</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Expert Implementation</div>
                  <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                    Get Started →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Revolutionary Results Across Industries</h3>
            <p className="text-gray-300 text-lg">See the transformative impact of breakthrough AI technologies</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprises Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.5B+</div>
              <div className="text-gray-300">Total Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join the ranks of industry leaders who have achieved extraordinary results with our breakthrough AI technologies. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/ai-2027-breakthrough-solutions"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore AI Solutions
              </Link>
              <Link
                href="/blog/ai-2027-breakthrough-technologies"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Read Breakthrough Guide
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <p className="text-purple-200 text-sm mt-6">
              Free consultation • Custom implementation • Guaranteed ROI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}