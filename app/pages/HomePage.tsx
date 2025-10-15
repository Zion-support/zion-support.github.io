import React from 'react';
import SEOHead from '../components/SEOHead';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "description": "Advanced AI and IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital transformation.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ziontechgroup.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Leading provider of AI solutions, IT services, cybersecurity, cloud infrastructure, and digital transformation for modern businesses."
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/ai-solutions" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Explore AI Solutions
              </a>
              <a 
                href="/contact" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Cutting-edge artificial intelligence solutions for automation, analytics, and intelligent decision-making.
                </p>
                <a href="/ai-solutions" className="text-blue-400 hover:text-blue-300">Learn More →</a>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-xl font-semibold mb-4">IT Services</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive IT infrastructure, support, and consulting services for your business needs.
                </p>
                <a href="/it-solutions" className="text-blue-400 hover:text-blue-300">Learn More →</a>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Advanced security solutions to protect your business from evolving cyber threats.
                </p>
                <a href="/cybersecurity" className="text-blue-400 hover:text-blue-300">Learn More →</a>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud solutions and infrastructure management for modern businesses.
                </p>
                <a href="/cloud-solutions" className="text-blue-400 hover:text-blue-300">Learn More →</a>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Micro SaaS</h3>
                <p className="text-gray-300 mb-4">
                  Custom micro SaaS applications tailored to your specific business requirements.
                </p>
                <a href="/micro-saas-solutions" className="text-blue-400 hover:text-blue-300">Learn More →</a>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-xl font-semibold mb-4">5G Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Next-generation 5G technology solutions for enhanced connectivity and performance.
                </p>
                <a href="/5g-solutions" className="text-blue-400 hover:text-blue-300">Learn More →</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can drive your business forward.
            </p>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Start Your Project Today
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;