import React from 'react';
import Link from 'next/link';

const Latest2026InnovationsBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full text-sm font-semibold text-indigo-800 mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Latest 2026 Innovations
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">AI Technologies</span> Now Available
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge AI innovations that are transforming industries and creating unprecedented 
            opportunities for enterprise growth and efficiency.
          </p>
        </div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/blog/ai-revolution-2026-next-frontier" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-indigo-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    AI Revolution 2026
                  </h3>
                  <p className="text-gray-500 text-sm">Featured Innovation</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore autonomous AI agents, neural interfaces, and predictive intelligence systems that are 
                achieving 300% productivity gains and revolutionizing enterprise operations.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Revolutionary
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Enterprise AI
                  </span>
                </div>
                <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/quantum-ai-breakthrough-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-purple-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    Quantum AI Breakthrough
                  </h3>
                  <p className="text-gray-500 text-sm">Computational Revolution</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover how quantum-enhanced AI is solving impossible optimization problems in seconds, 
                delivering 500x faster results and transforming computational capabilities.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Quantum Computing
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Breakthrough
                  </span>
                </div>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/global-manufacturing-ai-transformation" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    Manufacturing Transformation
                  </h3>
                  <p className="text-gray-500 text-sm">Success Story</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency improvements 
                through comprehensive AI transformation across 47 countries.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    $50M Savings
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    95% Efficiency
                  </span>
                </div>
                <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Innovation Metrics */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Innovation Impact Metrics</h3>
            <p className="text-indigo-100 text-lg">Real results from cutting-edge AI implementations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">500x</div>
              <div className="text-white font-semibold">Faster Processing</div>
              <div className="text-indigo-200 text-sm">Quantum AI algorithms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">$50M</div>
              <div className="text-white font-semibold">Annual Savings</div>
              <div className="text-indigo-200 text-sm">Manufacturing optimization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-white font-semibold">Efficiency Gains</div>
              <div className="text-indigo-200 text-sm">Process automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-300 mb-2">300%</div>
              <div className="text-white font-semibold">Productivity Boost</div>
              <div className="text-indigo-200 text-sm">Neural interfaces</div>
            </div>
          </div>
        </div>

        {/* Technology Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Next-Generation AI Technologies</h3>
            <p className="text-gray-600 text-lg">Discover the technologies that are reshaping the future of enterprise operations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🧠</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Autonomous AI Agents</h4>
              <p className="text-sm text-gray-600">Independent decision-making systems achieving 95% operational efficiency</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚛️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Quantum Computing</h4>
              <p className="text-sm text-gray-600">Exponential speedup for complex optimization problems</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔮</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Predictive Intelligence</h4>
              <p className="text-sm text-gray-600">92% accuracy in forecasting market trends and behaviors</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔗</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Neural Interfaces</h4>
              <p className="text-sm text-gray-600">Direct human-AI collaboration with 300% productivity gains</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Implement Revolutionary AI Technologies?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Join the AI revolution and discover how cutting-edge technologies can transform your operations, 
              reduce costs, and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <Link
                href="/services"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest2026InnovationsBanner;