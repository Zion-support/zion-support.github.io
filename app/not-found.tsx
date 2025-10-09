'use client';
import React from 'react';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEOEnhancer from './components/SEOEnhancer';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOEnhancer
        title="Page Not Found - 404 | Zion Tech Group"
        description="The page you're looking for doesn't exist. Explore our AI solutions, IT services, and technology resources to find what you need."
        keywords={['404', 'page not found', 'zion tech group', 'ai solutions', 'it services']}
        canonicalUrl="https://ziontechgroup.com/404"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* 404 Animation */}
            <div className="mb-8">
              <div className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                404
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-4 neon-text">
                Page Not Found
              </div>
              <p className="text-lg text-gray-300 mb-8">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, our AI solutions are still here to help!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <a
                href="/"
                className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <Home className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Home</h3>
                <p className="text-gray-300 text-sm">Return to our homepage</p>
              </a>

              <a
                href="/services"
                className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <Search className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Services</h3>
                <p className="text-gray-300 text-sm">Explore our AI solutions</p>
              </a>

              <a
                href="/contact"
                className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <HelpCircle className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
                <p className="text-gray-300 text-sm">Get help from our team</p>
              </a>

              <a
                href="/blog"
                className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <Search className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Blog</h3>
                <p className="text-gray-300 text-sm">Read our latest insights</p>
              </a>
            </div>

            {/* Popular Pages */}
            <div className="cyber-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 neon-text">Popular Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "AI Services", href: "/ai-services", description: "Advanced AI solutions" },
                  { name: "IT Services", href: "/it-services", description: "Comprehensive IT support" },
                  { name: "About Us", href: "/about", description: "Learn about our company" },
                  { name: "Case Studies", href: "/case-studies", description: "Success stories" },
                  { name: "AI Project Manager", href: "/ai-project-manager", description: "AI-powered project management" },
                  { name: "AI Analytics", href: "/ai-analytics", description: "Data analytics solutions" }
                ].map((page, index) => (
                  <a
                    key={index}
                    href={page.href}
                    className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300 group"
                  >
                    <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                      {page.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{page.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Search Section */}
            <div className="cyber-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 neon-text">Search Our Site</h2>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for AI solutions, services, or content..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button className="w-full mt-4 cyber-button py-3 font-semibold hover:scale-105 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4 neon-text">Still Can't Find What You're Looking For?</h2>
              <p className="text-gray-300 mb-6">
                Our AI-powered support team is here to help. Contact us and we'll guide you to the right solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Contact Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8">
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mx-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;