import React from 'react';
import Link from 'next/link';

const EnhancedContentPromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-semibold">🎯 ENHANCED CONTENT 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Unlock the Power of
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Next-Generation Technology
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
            Access comprehensive guides, real-world case studies, and expert insights 
            that will accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-30 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4">Comprehensive Guides</h3>
            <p className="text-lg opacity-90 mb-6">
              In-depth guides covering AI automation, quantum computing, and business transformation strategies.
            </p>
            <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
            <div className="text-sm opacity-80">Expert Guides</div>
          </div>

          <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-30 text-center">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Case Studies</h3>
            <p className="text-lg opacity-90 mb-6">
              Real-world success stories showing measurable results and proven implementation strategies.
            </p>
            <div className="text-3xl font-bold text-yellow-300 mb-2">25+</div>
            <div className="text-sm opacity-80">Success Stories</div>
          </div>

          <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-30 text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">ROI Focused</h3>
            <p className="text-lg opacity-90 mb-6">
              Every piece of content is designed to deliver measurable business value and competitive advantages.
            </p>
            <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>

          <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-30 text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Latest Trends</h3>
            <p className="text-lg opacity-90 mb-6">
              Stay ahead with cutting-edge insights on emerging technologies and industry best practices.
            </p>
            <div className="text-3xl font-bold text-yellow-300 mb-2">2025</div>
            <div className="text-sm opacity-80">Latest Updates</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-12 border border-white border-opacity-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of companies that have already transformed their operations 
                with our proven AI and technology solutions. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services →
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
                <div className="text-lg opacity-90">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">98%</div>
                <div className="text-lg opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">$2.5B+</div>
                <div className="text-lg opacity-90">Value Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-lg opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContentPromotionBanner;