import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with AI-Powered Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Zion Tech Group delivers cutting-edge AI and IT solutions that drive innovation,
            efficiency, and growth for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Advanced artificial intelligence solutions including machine learning, natural
                language processing, and predictive analytics.
              </p>
              <div className="space-y-2">
                <Link
                  to="/services/ai-services"
                  className="block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  AI Services →
                </Link>
                <Link
                  to="/solutions/ai"
                  className="block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Advanced AI Solutions →
                </Link>
              </div>
            </div>

            {/* Micro SaaS */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-6">
                Scalable software-as-a-service solutions that adapt and grow with your business
                needs.
              </p>
              <div className="space-y-2">
                <Link
                  to="/services/micro-saas"
                  className="block text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Micro SaaS →
                </Link>
                <Link
                  to="/solutions/saas"
                  className="block text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Innovative Micro SaaS →
                </Link>
              </div>
            </div>

            {/* IT Services */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT infrastructure, cloud solutions, and enterprise-grade security
                services.
              </p>
              <div className="space-y-2">
                <Link
                  to="/services/it-services"
                  className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  IT Services →
                </Link>
                <Link
                  to="/solutions/it"
                  className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Comprehensive IT Solutions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge AI and technology solutions that keep you ahead of the competition.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Speed</h3>
              <p className="text-gray-600">
                Rapid deployment and implementation to accelerate your digital transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security measures to protect your data and operations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600">
                Scalable solutions that grow with your business and drive measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts help you implement AI-powered solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
