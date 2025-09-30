import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContent2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-3 mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Revolutionary Content 2026</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}Revolutionary AI Content
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Access cutting-edge AI insights, implementation guides, and success stories that are reshaping enterprise operations. 
            Join thousands of professionals who are already transforming their businesses with our expert content.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Latest Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View Success Stories
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              📊
            </div>
            <h3 className="text-xl font-bold mb-2">AI Analytics</h3>
            <p className="text-blue-200 text-sm">Advanced data insights and predictive analytics</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              ⚙️
            </div>
            <h3 className="text-xl font-bold mb-2">Automation</h3>
            <p className="text-blue-200 text-sm">Intelligent process automation and optimization</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              🤖
            </div>
            <h3 className="text-xl font-bold mb-2">AI Agents</h3>
            <p className="text-blue-200 text-sm">Autonomous AI systems and intelligent assistants</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-blue-200 text-sm">Cutting-edge AI technologies and trends</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">300%</div>
              <div className="text-blue-200">Average ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-blue-200">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$12M</div>
              <div className="text-blue-200">Average Annual Savings</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-200 mb-6">
            Join 10,000+ professionals who trust our AI expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}