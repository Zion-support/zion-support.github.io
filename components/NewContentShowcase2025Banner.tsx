import React from 'react';
import Link from 'next/link';
ArrowRightStarTrendingUpUsersZap

export default function NewContentShowcase2025Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-300" />
            New Content Available
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Latest AI Innovations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              & Success Stories
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore groundbreaking AI technologiesreal-world case studiesand proven strategies that are transforming businesses worldwide.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center text-white/90">
              <TrendingUp className="w-5 h-5 mr-2 text-green-300" />
              <span className="text-lg font-semibold">15,000% ROI</span>
            </div>
            <div className="flex items-center text-white/90">
              <Users className="w-5 h-5 mr-2 text-blue-300" />
              <span className="text-lg font-semibold">500+ Companies</span>
            </div>
            <div className="flex items-center text-white/90">
              <Zap className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-lg font-semibold">Latest Tech</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-2025-latest-innovations-showcase"
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                Explore Innovations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/case-studies/ai-2025-mega-enterprise-transformation-success"
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Featured Content Preview */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Latest AI Innovations</h3>
              <p className="text-white/80 mb-4">
                Neural interfacesquantum AI fusionand autonomous business systems revolutionizing industries.
              </p>
              <div className="flex items-center text-yellow-300 text-sm font-medium">
                <Star className="w-4 h-4 mr-1" />
                <span>Featured Content</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Mega Enterprise Success</h3>
              <p className="text-white/80 mb-4">
                Fortune 500 company achieves 15,000% ROI through comprehensive AI transformation.
              </p>
              <div className="flex items-center text-green-300 text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>15,000% ROI</span>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80">
            <Link href="/blog" className="hover:text-white transition-colors">
              All Blog Posts
            </Link>
            <span className="text-white/40">•</span>
            <Link href="/case-studies" className="hover:text-white transition-colors">
              All Case Studies
            </Link>
            <span className="text-white/40">•</span>
            <Link href="/ai-tools" className="hover:text-white transition-colors">
              AI Tools
            </Link>
            <span className="text-white/40">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}