import React from 'react'
import Link from 'next/link'

const RevolutionaryAI2025Showcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Revolutionary AI Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Transform Your Business with AI</h3>
            <p className="text-xl text-gray-300 mb-8">
              Our cutting-edge AI solutions are designed to revolutionize how businesses operate, 
              making them more efficient, intelligent, and profitable.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-4"></div>
                <span className="text-lg">500% ROI achieved by our clients</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-lg">60% reduction in operational costs</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-purple-500 rounded-full mr-4"></div>
                <span className="text-lg">340% increase in productivity</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors mt-8"
            >
              Get Your Free Consultation
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.7%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-gray-300">Downtime Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Decisions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Error Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAI2025Showcase;