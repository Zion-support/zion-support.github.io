import React from 'react';
import Link from 'next/link';

const BreakthroughTechnologies2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M50 0c27.614 0 50 22.386 50 50s-22.386 50-50 50S0 77.614 0 50 22.386 0 50 0zm0 10c22.091 0 40 17.909 40 40s-17.909 40-40 40S10 72.091 10 50 27.909 10 50 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-8 py-3 mb-8 shadow-lg">
            <span className="text-black font-bold text-lg">🌟 BREAKTHROUGH TECHNOLOGIES 2025</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Revolutionary
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              AI Technologies
            </span>
            <span className="block text-3xl md:text-4xl font-light mt-4 text-blue-200">
              Transforming Business in 2025
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the cutting-edge technologies that are revolutionizing industries worldwide. 
            From <span className="text-yellow-300 font-semibold">Quantum AI</span> to <span className="text-cyan-300 font-semibold">Neural Interfaces</span>, 
            explore the future of business transformation.
          </p>
          
          {/* Technology Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Quantum AI */}
            <div className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum AI</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolutionary quantum computing integration achieving 800% ROI through optimization and simulation.
              </p>
              <div className="space-y-2 text-sm text-cyan-300">
                <div>• Quantum Machine Learning</div>
                <div>• Optimization Algorithms</div>
                <div>• Quantum Simulation</div>
              </div>
            </div>
            
            {/* Neural Interfaces */}
            <div className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Interfaces</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Direct brain-computer interfaces enabling unprecedented human-AI collaboration and control.
              </p>
              <div className="space-y-2 text-sm text-purple-300">
                <div>• Brain-Computer Interfaces</div>
                <div>• Neural Command Systems</div>
                <div>• Cognitive Enhancement</div>
              </div>
            </div>
            
            {/* Autonomous Systems */}
            <div className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Self-managing AI systems that optimize operations and adapt to changing conditions autonomously.
              </p>
              <div className="space-y-2 text-sm text-green-300">
                <div>• Self-Optimizing Operations</div>
                <div>• Adaptive Intelligence</div>
                <div>• Autonomous Decision Making</div>
              </div>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white border-opacity-10">
            <h3 className="text-2xl font-bold text-white mb-8">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">800%</div>
                <div className="text-gray-300">ROI Achievement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
                <div className="text-gray-300">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">$58M</div>
                <div className="text-gray-300">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Content Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <Link 
              href="/content/blog/ai-2025-enterprise-automation-success-stories-ultimate-guide"
              className="group bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">📈</span>
                  <h4 className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors">
                    Success Stories Guide
                  </h4>
                </div>
                <p className="text-black opacity-80 mb-4">
                  Comprehensive guide featuring real-world AI automation success stories with detailed metrics and implementation strategies.
                </p>
                <div className="flex items-center text-black font-semibold">
                  <span>Explore Guide</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/content/case-studies/quantum-ai-2026-business-transformation-case-study"
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">⚡</span>
                  <h4 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                    Quantum AI Case Study
                  </h4>
                </div>
                <p className="text-white opacity-90 mb-4">
                  Complete case study documenting Fortune 500 company's quantum AI transformation achieving 800% ROI.
                </p>
                <div className="flex items-center text-white font-semibold">
                  <span>View Case Study</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-10 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Technologies
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
          
          {/* Innovation Badge */}
          <div className="mt-16 pt-8 border-t border-white border-opacity-20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white opacity-70">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                <span className="font-semibold">Industry Leader</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                <span className="font-semibold">Innovation Pioneer</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                <span className="font-semibold">Award Winning</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🌍</span>
                <span className="font-semibold">Global Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400 bg-opacity-10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-purple-400 bg-opacity-10 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-10 w-28 h-28 bg-orange-400 bg-opacity-10 rounded-full blur-2xl animate-pulse delay-1500"></div>
    </section>
  );
};

export default BreakthroughTechnologies2025PromotionBanner;