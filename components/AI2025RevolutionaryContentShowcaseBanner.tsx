import React from 'react';
import Link from 'next/link';
ArrowRightBrainZapTargetGlobeUsersTrendingUpStar

export default function AI2025RevolutionaryContentShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 text-sm font-medium mb-8">
            <Brain className="h-5 w-5 mr-2" />
            REVOLUTIONARY AI CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of AI is
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Here Today
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover groundbreaking AI technologiesenterprise solutionsand transformation strategies 
            that are revolutionizing industries and reshaping the future of business.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ultimate Business Transformation</h3>
                  <p className="text-gray-400">Revolutionary AI Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Transform your business with cutting-edge AI solutions that deliver unprecedented results. 
                Join thousands of companies achieving 300% ROI with our advanced AI platform.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">300%</div>
                  <div className="text-sm text-gray-400">Average ROI</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">99.7%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
              </div>
              <Link 
                href="/ai-2025-ultimate-business-transformation"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Explore Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mr-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Enterprise Automation Mastery</h3>
                  <p className="text-gray-400">Scale & Security Focused</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Master enterprise automation with our comprehensive AI platform. Built for scale
                securityand performance with 99.9% uptime guarantee.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["500+ Clients"99.9% Uptime"24/7 Support"Enterprise Security"].map((tagindex) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                href="/ai-2025-enterprise-automation-mastery"
                className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Stats & Features */}
          <div className="space-y-8">
            {/* Stats Section */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Impact by Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "10,000+"label: "Businesses Transformed"icon: <Globe className="h-6 w-6 text-blue-400" /> },
                  { number: "$2.5B+"label: "Cost Savings Delivered"icon: <TrendingUp className="h-6 w-6 text-green-400" /> },
                  { number: "99.9%"label: "Client Satisfaction"icon: <Star className="h-6 w-6 text-yellow-400" /> },
                  { number: "24/7"label: "Global Support"icon: <Users className="h-6 w-6 text-purple-400" /> }
                ].map((statindex) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Explore More Content</h3>
              <div className="space-y-4">
                {[
                  { title: "AI 2025 Ultimate Breakthrough"link: "/ai-2025-ultimate-breakthrough"icon: <Brain className="h-5 w-5 text-indigo-400" /> },
                  { title: "Quantum Computing Solutions"link: "/quantum-computing-2025"icon: <Target className="h-5 w-5 text-purple-400" /> },
                  { title: "Neural Interface Revolution"link: "/ai-2025-neural-interface-revolution"icon: <Zap className="h-5 w-5 text-cyan-400" /> },
                  { title: "Future Technology Predictions"link: "/ai-2025-2030-predictions"icon: <Star className="h-5 w-5 text-yellow-400" /> }
                ].map((itemindex) => (
                  <Link 
                    key={index}
                    href={item.link}
                    className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    {item.icon}
                    <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">{item.title}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the AI Revolution?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't get left behind. Start your AI transformation journey today and discover 
              how our revolutionary solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              <Link 
                href="/ai-2025-ultimate-breakthrough" 
                className="border-2 border-white/20 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}