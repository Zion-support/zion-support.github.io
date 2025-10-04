import React from 'react';

// SEO metadata will be handled by the HTML head in the main layout

const HomePage = React.memo(function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                Zion Tech Group
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Home</a>
              <a href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Services</a>
              <a href="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Blog</a>
              <a href="/case-studies" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Case Studies</a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Contact</a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🚀 Leading AI Innovation Since 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-indigo-600 block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/services"
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                Explore Our Services
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 font-medium">
                Call +1 302 464 0950
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core AI Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive unprecedented growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Business Intelligence</h3>
                <p className="text-gray-600 mb-6">
                  Advanced analytics and machine learning solutions that provide actionable insights for strategic decision-making.
                </p>
                <a href="/services/ai-business-intelligence-2025" className="text-indigo-600 font-medium hover:text-indigo-700">
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Automation</h3>
                <p className="text-gray-600 mb-6">
                  Streamline operations with intelligent automation solutions that reduce costs and increase efficiency.
                </p>
                <a href="/services/ai-cloud-infrastructure-2025" className="text-indigo-600 font-medium hover:text-indigo-700">
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Cybersecurity</h3>
                <p className="text-gray-600 mb-6">
                  Protect your digital assets with advanced AI-powered security solutions and threat detection systems.
                </p>
                <a href="/services/ai-cybersecurity-2025" className="text-indigo-600 font-medium hover:text-indigo-700">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest AI Content & Insights
              </h2>
              <p className="text-lg text-gray-600">
                Discover our latest AI insights, case studies, and success stories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/blog/ai-enterprise-transformation-2026" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured Article
                    </span>
                    <span className="text-gray-500 text-sm">20 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    AI Enterprise Transformation 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps.
                  </p>
                  <div className="text-indigo-600 font-medium group-hover:text-indigo-700">
                    Read Article →
                  </div>
                </div>
              </a>

              <a href="/blog/ai-autonomous-systems-2026" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      New Article
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    AI Autonomous Systems 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master autonomous AI systems with 300% ROI strategies and enterprise-ready deployment patterns.
                  </p>
                  <div className="text-indigo-600 font-medium group-hover:text-indigo-700">
                    Read Article →
                  </div>
                </div>
              </a>

              <a href="/case-studies/manufacturing-ai-transformation-2026" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Success Story
                    </span>
                    <span className="text-gray-500 text-sm">Manufacturing</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    Manufacturing AI Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement.
                  </p>
                  <div className="text-indigo-600 font-medium group-hover:text-indigo-700">
                    View Case Study →
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">
                Leading provider of AI-powered enterprise solutions and digital transformation services.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  📞 +1 302 464 0950
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/ai-business-intelligence-2025" className="text-gray-300 hover:text-white transition-colors">AI Business Intelligence</a></li>
                <li><a href="/services/ai-cloud-infrastructure-2025" className="text-gray-300 hover:text-white transition-colors">Cloud Automation</a></li>
                <li><a href="/services/ai-cybersecurity-2025" className="text-gray-300 hover:text-white transition-colors">AI Cybersecurity</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">All Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="/guides" className="text-gray-300 hover:text-white transition-colors">Guides</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300 mb-4">
                Ready to transform your business with AI? Let's discuss your project.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2026 Zion Tech Group. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default HomePage;