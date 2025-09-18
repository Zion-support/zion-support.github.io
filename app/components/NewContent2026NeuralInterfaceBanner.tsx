import React from 'react';
import Link from 'next/link';

export default function NewContent2026NeuralInterfaceBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🧠 BREAKTHROUGH TECHNOLOGY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Neural Interface Business Transformation
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover how brain-computer interfaces are revolutionizing enterprise operations, 
            enabling direct neural control of AI systems and unprecedented human-AI collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📈</span>
            </div>
            <h3 className="text-xl font-bold mb-2">200-300% Productivity Increase</h3>
            <p className="text-white text-opacity-90 mb-4">
              Knowledge workers achieve unprecedented productivity gains through direct neural-AI collaboration.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">60% Faster Decision Making</h3>
            <p className="text-white text-opacity-90 mb-4">
              Executives process complex data and make strategic decisions at unprecedented speeds.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">300% Faster Creative Work</h3>
            <p className="text-white text-opacity-90 mb-4">
              Designers and creatives translate abstract concepts directly into digital designs.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-white text-opacity-90">
                Learn how neural interfaces can revolutionize your organization's operations and drive unprecedented business value.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog/ai-2026-neural-interface-business-transformation" 
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Full Article
              </Link>
              <Link 
                href="/services/neural-interface-consulting" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-80">Accuracy Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-80">AI Collaboration</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold">40%</div>
              <div className="text-sm opacity-80">Error Reduction</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold">50%</div>
              <div className="text-sm opacity-80">Training Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}