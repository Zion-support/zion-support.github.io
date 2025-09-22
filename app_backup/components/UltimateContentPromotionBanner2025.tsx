import React from 'react';
import Link from 'next/link';

const UltimateContentPromotionBanner2025: React.FC = () => {
  const features = [
    {
      title: "AI Automation Solutions",
      description: "Transform your business with intelligent automation",
      icon: "🤖",
      stats: "500+ Projects Delivered",
      link: "/services/ai-automation"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions for growth",
      icon: "☁️",
      stats: "99.9% Uptime Guarantee",
      link: "/services/cloud-infrastructure"
    },
    {
      title: "Micro SaaS Development",
      description: "Custom applications that solve real problems",
      icon: "💼",
      stats: "340% Average ROI",
      link: "/services/micro-saas"
    },
    {
      title: "AI Consulting",
      description: "Expert guidance for your AI transformation",
      icon: "🧠",
      stats: "98% Client Satisfaction",
      link: "/services/consulting"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">🚀 2025 ULTIMATE BREAKTHROUGH</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Revolutionary AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join 500+ companies that achieved extraordinary results with our cutting-edge AI solutions. 
            Average ROI increase of 340% and 98% client satisfaction rate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start Your AI Transformation
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
            >
              Try Interactive Demo
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4" />
              </svg>
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-300">500+</div>
              <div className="text-blue-100 text-sm">Projects Delivered</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-300">340%</div>
              <div className="text-blue-100 text-sm">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-300">98%</div>
              <div className="text-blue-100 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-300">24/7</div>
              <div className="text-blue-100 text-sm">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-lg p-2 mb-4">
                  <span className="text-xs font-semibold text-white">{feature.stats}</span>
                </div>
                <Link 
                  href={feature.link}
                  className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join industry leaders who are already experiencing the AI revolution. 
              Get your free consultation and discover how AI can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm"
              >
                View Success Stories
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentPromotionBanner2025;