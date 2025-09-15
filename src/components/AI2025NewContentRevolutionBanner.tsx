import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2025NewContentRevolutionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            <span className="mr-2">🚀</span>
            NEW 2025 CONTENT REVOLUTION
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-blue-300 bg-clip-text text-transparent">
            Revolutionary AI Content
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-200">
            Transform Your Business with Cutting-Edge AI Insights
          </h3>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI technology with our comprehensive guides covering 
            <span className="text-yellow-300 font-semibold"> Generative Automation</span>
            <span className="text-blue-300 font-semibold"> Autonomous Operations</span>and 
            <span className="text-purple-300 font-semibold"> Quantum AI</span> transformations.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Generative Automation Card */}
          <div className="bg-gradient-to-br from-purple-800 to-purple-900 p-8 rounded-2xl shadow-2xl border border-purple-600 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">Generative Automation Revolution</h4>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Complete guide to implementing generative AI automation that creates contentprocessesand solutions dynamically.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-green-300">
                <span className="mr-2">✓</span>
                <span>75% reduction in content creation time</span>
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="mr-2">✓</span>
                <span>300% increase in content output</span>
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="mr-2">✓</span>
                <span>40% improvement in engagement rates</span>
              </div>
            </div>
            <a 
              href="/content/blog/ai-2025-generative-automation-revolution-complete-guide"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
            >
              Read Complete Guide
            </a>
          </div>

          {/* Autonomous Operations Card */}
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 rounded-2xl shadow-2xl border border-blue-600 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">Autonomous Business Operations</h4>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Revolutionary guide to self-managing organizations that operate with unprecedented efficiency and intelligence.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-green-300">
                <span className="mr-2">✓</span>
                <span>45-65% reduction in operational costs</span>
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="mr-2">✓</span>
                <span>80% faster decision-making processes</span>
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="mr-2">✓</span>
                <span>90% improvement in task completion</span>
              </div>
            </div>
            <a 
              href="/content/blog/ai-2025-autonomous-business-operations-revolution"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
            >
              Explore Revolution
            </a>
          </div>

          {/* Quantum AI Card */}
          <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 p-8 rounded-2xl shadow-2xl border border-indigo-600 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🔮</div>
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">Quantum AI Transformation</h4>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Next frontier in business transformation with quantum computing and AI convergence for breakthrough results.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-green-300">
                <span className="mr-2">✓</span>
                <span>10x improvement in computational speed</span>
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="mr-2">✓</span>
                <span>95% accuracy in quantum algorithms</span>
              </div>
              <div className="flex items-center text-sm text-green-300">
                <span className="mr-2">✓</span>
                <span>50-80% reduction in computational costs</span>
              </div>
            </div>
            <a 
              href="/content/blog/ai-2025-quantum-ai-business-transformation"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
            >
              Discover Future
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-8 rounded-2xl shadow-2xl">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h4>
            <p className="text-lg mb-6 text-black/80">
              Get exclusive access to implementation guidesROI calculatorsand expert consultations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services/ai-automation"
                className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Explore AI Services
              </a>
              <a
                href="/contact"
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-yellow-400 transition-colors duration-300"
              >
                Get Expert Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300">AI Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
            <div className="text-gray-300">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025NewContentRevolutionBanner;