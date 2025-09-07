import React from 'react';

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Comprehensive AI and technology solutions designed to transform your business operations.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">01</div>
            <h3 className="text-xl font-bold text-white mb-4">Discovery & Assessment</h3>
            <p className="text-gray-300">
              We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">02</div>
            <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>
            <p className="text-gray-300">
              Our experts design custom AI solutions tailored to your specific business needs and objectives.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">03</div>
            <h3 className="text-xl font-bold text-white mb-4">Development & Testing</h3>
            <p className="text-gray-300">
              We develop and rigorously test your AI solution to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">04</div>
            <h3 className="text-xl font-bold text-white mb-4">Deployment & Training</h3>
            <p className="text-gray-300">
              Seamless deployment with comprehensive training for your team to maximize solution adoption.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and discover how our solutions can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}