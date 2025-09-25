import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 animate-pulse">
            <span className="text-sm font-bold">🔥 REVOLUTIONARY BREAKTHROUGH 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of Business is Here
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience unprecedented growth with our revolutionary AI solutions that deliver 
            <span className="text-yellow-400 font-bold"> 50,000% ROI</span> and transform your business into an autonomous powerhouse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50,000%</div>
              <div className="text-lg">Average ROI Increase</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-lg">Accuracy Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-lg">Autonomous Operation</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Start Your Revolution
            </Link>
            <Link
              href="/ai-2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Explore AI Solutions
            </Link>
          </div>

          <div className="mt-12 text-sm opacity-75">
            <p>Join 10,000+ businesses already transforming with our revolutionary AI technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;