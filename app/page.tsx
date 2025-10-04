import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = React.memo(function HomePage() {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
            and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$2M+</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured New Content Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-4">
              <span className="text-2xl mr-2">✨</span>
              JUST PUBLISHED — October 2025
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest AI Transformation Success Stories
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real-world implementations delivering millions in savings and unprecedented accuracy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
