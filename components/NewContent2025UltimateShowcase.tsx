import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  const newContent = [
    {
      title: "Revolutionary Case Studies",
      description: "Real success stories with 400-500% ROI achievements",
      icon: "📊",
      link: "/case-studies",
      highlight: "NEW"
    },
    {
      title: "2025 Technology Trends",
      description: "AI Consciousness, Quantum-Neural Computing & More",
      icon: "🚀",
      link: "/technology-trends",
      highlight: "BREAKTHROUGH"
    },
    {
      title: "Client Testimonials",
      description: "Industry leaders share their transformation stories",
      icon: "💬",
      link: "/testimonials",
      highlight: "FEATURED"
    },
    {
      title: "AI Solutions Portfolio",
      description: "Comprehensive suite of next-gen AI technologies",
      icon: "🤖",
      link: "/ai-solutions",
      highlight: "EXPANDED"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎉 NEW CONTENT LAUNCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Our Latest Breakthroughs
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Explore revolutionary case studies, cutting-edge technology trends, and inspiring client success stories that showcase the future of AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newContent.map((content, index) => (
            <Link key={index} href={content.link} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 group-hover:scale-105 transform">
                <div className="text-5xl mb-4">{content.icon}</div>
                
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {content.highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {content.description}
                </p>

                <div className="mt-6 flex items-center text-white group-hover:text-yellow-300 transition-colors">
                  <span className="font-semibold">Explore Now</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl font-bold text-yellow-300 mb-2">15+</div>
            <div className="text-lg opacity-90">New Case Studies</div>
            <div className="text-sm opacity-75 mt-2">Real ROI achievements</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl font-bold text-green-300 mb-2">6</div>
            <div className="text-lg opacity-90">Revolutionary Tech Trends</div>
            <div className="text-sm opacity-75 mt-2">2025 breakthroughs</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl font-bold text-blue-300 mb-2">500%</div>
            <div className="text-lg opacity-90">Average ROI</div>
            <div className="text-sm opacity-75 mt-2">Proven results</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of industry leaders who have already revolutionized their operations with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Success Stories
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;