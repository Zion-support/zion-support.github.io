import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
            Transform your business with our cutting-edge technology and achieve unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              📧 Email Us
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300 text-sm mb-2">
              📍 364 E Main St STE 1008, Middletown, DE 19709
            </p>
            <p className="text-gray-300 text-sm">
              ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;