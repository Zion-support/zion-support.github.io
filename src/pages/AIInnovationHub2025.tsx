import React from 'react';

const AIInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            AI Innovation Hub <span className="gradient-text">2025</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the cutting-edge AI innovations that are reshaping industries and transforming the future of technology.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Revolutionary AI Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI Innovation Hub showcases the most advanced artificial intelligence technologies, 
                from machine learning breakthroughs to autonomous systems that are changing the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Neural Networks
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Deep Learning
                </span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  Computer Vision
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl h-80 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-xl font-semibold">AI Innovation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Neural Networks</h3>
            <p className="text-gray-600">
              State-of-the-art neural network architectures that push the boundaries of what's possible with AI.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Development</h3>
            <p className="text-gray-600">
              Cutting-edge research initiatives that are shaping the future of artificial intelligence.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Processing</h3>
            <p className="text-gray-600">
              Ultra-fast AI processing capabilities for real-time applications and decision making.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure AI</h3>
            <p className="text-gray-600">
              Enterprise-grade security measures to protect AI systems and sensitive data.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
            <p className="text-gray-600">
              AI solutions that scale seamlessly from small projects to enterprise-wide implementations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Custom AI Models</h3>
            <p className="text-gray-600">
              Tailored AI models designed specifically for your business needs and use cases.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Innovate with AI?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join us in exploring the limitless possibilities of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationHub2025;