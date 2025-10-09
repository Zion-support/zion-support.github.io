import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Advanced AI & Technology Solutions
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leading provider of enterprise AI solutions, digital transformation, and cutting-edge technology services. 
            Transform your business with our proven strategies delivering $50M+ annual savings and 95% process automation.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white bg-opacity-60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">AI-Powered Solutions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
            </div>
            <div className="bg-white bg-opacity-60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Proven Results</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
            </div>
            <div className="bg-white bg-opacity-60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Enterprise Security</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-6 text-center">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">AI Services</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Starting at $1,500/month</div>
                <a href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-6 text-center">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Quantum Computing</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Next-generation quantum computing capabilities for complex problem solving and optimization.
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Custom Pricing</div>
                <a href="/quantum-computing" className="text-purple-600 hover:text-purple-700 font-medium">
                  Learn More →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-6 text-center">🔄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Autonomous Systems</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Self-managing and self-optimizing systems for enterprise operations and infrastructure.
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Starting at $2,500/month</div>
                <a href="/autonomous-systems" className="text-green-600 hover:text-green-700 font-medium">
                  Learn More →
                </a>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/services"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              View All Services
            </a>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-indigo-600 text-white py-16 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our AI solutions and see the difference in your first month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13026009898"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Call: (302) 600-9898
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}