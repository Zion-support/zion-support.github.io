import React from 'react';
import Link from 'next/link';

export default function SuccessStoriesShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🏆</span>
            <span className="font-semibold">Proven Success</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Real Results from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
              Real Companies
            </span>
          </h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies and industry leaders achieved unprecedented success 
            through AI transformation. See the strategies, results, and lessons learned from 
            $2.3B+ in value creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$2.3B</div>
              <div className="text-sm text-green-100 mb-4">Total Value Created</div>
              <div className="text-xs text-green-200">Fortune 500 Manufacturing</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">340%</div>
              <div className="text-sm text-green-100 mb-4">Average ROI</div>
              <div className="text-xs text-green-200">Across All Industries</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-sm text-green-100 mb-4">Process Automation</div>
              <div className="text-xs text-green-200">Enterprise Operations</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-sm text-green-100 mb-4">Successful Projects</div>
              <div className="text-xs text-green-200">Global Implementation</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/case-studies/fortune-500-ai-transformation-2027" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3">Fortune 500 Manufacturing</h3>
              <p className="text-green-100 mb-4 text-sm leading-relaxed">
                Comprehensive AI transformation achieving $2.3B value creation, 340% ROI, 
                and 95% process automation across all operations.
              </p>
              <div className="flex items-center text-white font-semibold group-hover:text-yellow-300 transition-colors">
                <span>Read Full Case Study</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-3">Financial Services</h3>
              <p className="text-green-100 mb-4 text-sm leading-relaxed">
                AI-powered fraud detection achieving 99.9% accuracy, 50% faster processing, 
                and $5M in annual savings through automated security systems.
              </p>
              <div className="flex items-center text-white font-semibold group-hover:text-yellow-300 transition-colors">
                <span>View Success Story</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3">Healthcare Innovation</h3>
              <p className="text-green-100 mb-4 text-sm leading-relaxed">
                Medical AI achieving 95% diagnostic accuracy, 70% faster treatment delivery, 
                and $8M in operational savings through predictive analytics.
              </p>
              <div className="flex items-center text-white font-semibold group-hover:text-yellow-300 transition-colors">
                <span>Explore Results</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/case-studies"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Success Stories
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Success Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}