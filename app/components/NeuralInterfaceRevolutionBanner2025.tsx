import React from 'react';
import Link from 'next/link';

const NeuralInterfaceRevolutionBanner2025: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🧠 NEURAL INTERFACE REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of Human-Computer Interaction is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how neural interfaces are revolutionizing decision-making, productivity, and human potential in 2025. 
            Experience the ultimate guide to brain-computer integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold">Neural Interface Technology</h3>
            </div>
            <p className="text-lg opacity-90 mb-6">
              Advanced brain-computer integration with 99.7% accuracy, enabling direct communication between human minds and digital systems.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Non-invasive EEG sensors with 10,000+ contact points
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Real-time neural pattern recognition
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                AI-powered decision support algorithms
              </li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold">Proven Business Results</h3>
            </div>
            <p className="text-lg opacity-90 mb-6">
              Fortune 500 companies are achieving extraordinary results with neural interface technology.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">450%</div>
                <div className="text-sm opacity-90">ROI Achieved</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400">75%</div>
                <div className="text-sm opacity-90">Faster Decisions</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-400">95%</div>
                <div className="text-sm opacity-90">Accuracy Improvement</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-400">$12.3M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-neural-interface-revolution-ultimate-guide"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Read the Ultimate Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-neural-interface-fortune-500-transformation-ultimate-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View Success Story
            </Link>
          </div>
          <p className="text-sm opacity-75">
            Join the neural interface revolution and transform your organization's decision-making capabilities
          </p>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterfaceRevolutionBanner2025;