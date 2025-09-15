import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025ShowcaseBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Transforming Industries
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Explore cutting-edge AI innovations that are revolutionizing business operations
            from neural interfaces to sustainable technology solutions. Discover the future of AI today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Neural Interfaces Card */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🧠</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-gray-200 mb-6">
              Direct brain-computer interfaces enabling 300% productivity gains through thought-controlled systems.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Accuracy Rate</span>
                <span className="text-lg font-bold text-purple-400">99.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Response Time</span>
                <span className="text-lg font-bold text-blue-400">&lt; 50ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Productivity Boost</span>
                <span className="text-lg font-bold text-green-400">300%</span>
              </div>
            </div>
            
            <Link
              href="/blog/ai-2025-neural-interfaces-revolution-ultimate-guide"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-400 transition-colors"
            >
              Explore Neural Interfaces →
            </Link>
          </div>
          
          {/* Sustainable AI Card */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🌱</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Sustainable AI</h3>
            <p className="text-gray-200 mb-6">
              Green AI solutions achieving 85% carbon reduction and 300% ROI through sustainable technology.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Carbon Reduction</span>
                <span className="text-lg font-bold text-green-400">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">ROI Achievement</span>
                <span className="text-lg font-bold text-blue-400">300%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Energy Savings</span>
                <span className="text-lg font-bold text-yellow-400">70%</span>
              </div>
            </div>
            
            <Link
              href="/blog/ai-2025-sustainable-technology-revolution-complete-guide"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-400 transition-colors"
            >
              Explore Sustainable AI →
            </Link>
          </div>
          
          {/* Success Stories Card */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🏆</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <p className="text-gray-200 mb-6">
              Fortune 500 companies achieving unprecedented success through AI transformation and innovation.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Fortune 500 Clients</span>
                <span className="text-lg font-bold text-yellow-400">50+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Average ROI</span>
                <span className="text-lg font-bold text-green-400">340%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Success Rate</span>
                <span className="text-lg font-bold text-blue-400">98%</span>
              </div>
            </div>
            
            <Link
              href="/case-studies/fortune-500-sustainable-ai-transformation-2025-ultimate-success"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-400 transition-colors"
            >
              View Success Stories →
            </Link>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-200 mb-8">
              Join industry leaders who are revolutionizing their operations with cutting-edge AI technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025ShowcaseBanner;