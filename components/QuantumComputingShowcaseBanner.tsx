import React from 'react';
import Link from 'next/link';

const QuantumComputingShowcaseBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M50 50c0-27.614-22.386-50-50-50s-50 22.386-50 50 22.386 50 50 50 50-22.386 50-50zM50 0c27.614 0 50 22.386 50 50s-22.386 50-50 50S0 77.614 0 50 22.386 0 50 0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500 bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚡ QUANTUM COMPUTING ENTERPRISE GUIDE</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Quantum Computing
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover how quantum computing will revolutionize enterprise operations. 
            Our comprehensive 2027 guide covers implementation strategies, ROI analysis, 
            and real-world use cases for forward-thinking organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Use Cases */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Financial Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Portfolio optimization with quantum algorithms</li>
              <li>• Risk assessment 1000x faster</li>
              <li>• Fraud detection with quantum ML</li>
              <li>• Real-time market analysis</li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🏥</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Healthcare & Pharma</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Drug discovery in 3-5 years vs 15 years</li>
              <li>• Protein folding simulation</li>
              <li>• Personalized medicine optimization</li>
              <li>• Genomic analysis acceleration</li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🏭</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Supply chain optimization</li>
              <li>• Production scheduling intelligence</li>
              <li>• Quality control enhancement</li>
              <li>• Predictive maintenance systems</li>
            </ul>
          </div>
        </div>
        
        {/* ROI Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Proven ROI Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">340%</div>
                <div className="text-gray-200">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">18mo</div>
                <div className="text-gray-200">Payback Period</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50%</div>
                <div className="text-gray-200">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-gray-200">Speed Improvement</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Implementation Timeline */}
        <div className="bg-white bg-opacity-5 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Implementation Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Assessment Phase</h4>
              <p className="text-gray-300">Months 1-3</p>
              <p className="text-sm text-gray-400 mt-2">Quantum readiness evaluation and use case identification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Pilot Development</h4>
              <p className="text-gray-300">Months 4-9</p>
              <p className="text-sm text-gray-400 mt-2">Proof of concept development and validation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Production Scale</h4>
              <p className="text-gray-300">Months 10-18</p>
              <p className="text-sm text-gray-400 mt-2">Full-scale implementation and optimization</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/quantum-computing-enterprise-guide-2027"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-4 rounded-lg font-bold text-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Complete Guide →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-xl hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Get Quantum Strategy Consultation
            </Link>
          </div>
          
          <p className="text-gray-400 text-lg">
            Join industry leaders preparing for the quantum revolution. 
            <span className="text-white font-semibold"> Start your quantum journey today.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingShowcaseBanner;