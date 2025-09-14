import React from 'react';
import Link from 'next/link';

const NewContent2027Showcase: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2027 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Breakthroughs 2027
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI innovations, quantum computing breakthroughs, and neural interface technologies 
            that will transform your business in 2027.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interface Revolution</h3>
            <p className="text-gray-200 mb-6">
              Direct brain-computer interfaces enabling unprecedented human-AI collaboration and cognitive enhancement.
            </p>
            <Link 
              href="/ai-2030-future-vision/neural-interfaces" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Explore Technology
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI Fusion</h3>
            <p className="text-gray-200 mb-6">
              Revolutionary quantum computing combined with AI for solving previously impossible computational challenges.
            </p>
            <Link 
              href="/quantum-ai-2026-breakthrough" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous AI Systems</h3>
            <p className="text-gray-200 mb-6">
              Self-evolving AI systems that can learn, adapt, and operate independently across complex business environments.
            </p>
            <Link 
              href="/autonomous-business-systems-2026" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Discover Solutions
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6">
              Join 500+ companies already leveraging these breakthrough technologies for unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2027Showcase;