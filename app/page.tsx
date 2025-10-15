import React from 'react';
import SEOHead from './components/SEOHead';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI solutions, micro-SaaS development, IT services, and cloud infrastructure. Transform your business with cutting-edge technology."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Started
              </a>
              <a 
                href="/services" 
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Cutting-edge artificial intelligence solutions to automate and optimize your business processes.
                </p>
                <a href="/ai-solutions" className="text-purple-400 hover:text-purple-300">
                  Learn More →
                </a>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Micro-SaaS Development</h3>
                <p className="text-gray-300 mb-4">
                  Custom micro-SaaS applications tailored to your specific business needs.
                </p>
                <a href="/micro-saas-solutions" className="text-purple-400 hover:text-purple-300">
                  Learn More →
                </a>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">IT Services</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive IT services including cloud infrastructure, cybersecurity, and support.
                </p>
                <a href="/it-solutions" className="text-purple-400 hover:text-purple-300">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can help you achieve your goals.
            </p>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
