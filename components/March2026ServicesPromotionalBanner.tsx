import React from 'react';

const March2026ServicesPromotionalBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
            <span className="text-amber-400 font-bold text-xl tracking-wider uppercase">
              🚀 March 2026: Revolutionary AI Services Now Available!
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Transform Your Enterprise with Advanced AI Solutions
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive AI consulting services that deliver measurable results: 
            <span className="text-amber-400 font-bold"> 98% automation</span>, 
            <span className="text-orange-400 font-bold"> $3.8B+ value creation</span>, and 
            <span className="text-red-400 font-bold"> 99% operational excellence</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300">
            <div className="text-5xl mb-6">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Multimodal AI Automation</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI that combines computer vision, natural language processing, and robotic automation 
              for unified intelligence and unprecedented business value.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li>• 98% Enterprise Automation</li>
              <li>• 99.9% Visual Recognition</li>
              <li>• 50+ Language Support</li>
              <li>• $3.8B Measured Value</li>
            </ul>
            <a
              href="/services/multimodal-ai-automation-consulting"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Get Consulting →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous AI Agents</h3>
            <p className="text-gray-300 mb-6">
              Self-managing AI agents that operate independently, making strategic decisions and executing 
              complex business processes with complete autonomy and exceptional results.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li>• 99% Operational Autonomy</li>
              <li>• Zero Human Intervention</li>
              <li>• 24/7 Continuous Operation</li>
              <li>• $5B+ Value Creation</li>
            </ul>
            <a
              href="/services/ai-automation-consulting"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Learn More →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
            <div className="text-5xl mb-6">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum-Neural AI</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum-enhanced neural networks that deliver 1000x processing speed 
              improvements and 95% decision accuracy for unprecedented business performance.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li>• 1000x Processing Speed</li>
              <li>• 95% Decision Accuracy</li>
              <li>• Real-Time Optimization</li>
              <li>• $2.3B Client Savings</li>
            </ul>
            <a
              href="/services/quantum-ai-consulting"
              className="inline-block bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Explore →
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30">
              <div className="text-3xl font-extrabold text-amber-400 mb-2">98%</div>
              <div className="text-sm text-amber-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
              <div className="text-3xl font-extrabold text-orange-400 mb-2">$8.6B</div>
              <div className="text-sm text-orange-300">Total Value Created</div>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <div className="text-3xl font-extrabold text-red-400 mb-2">99%</div>
              <div className="text-sm text-red-300">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <div className="text-3xl font-extrabold text-pink-400 mb-2">300%</div>
              <div className="text-sm text-pink-300">ROI Average</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1"
            >
              Get Free Consultation →
            </a>
            <a
              href="/services"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1"
            >
              View All Services →
            </a>
            <a
              href="/case-studies"
              className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              See Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default March2026ServicesPromotionalBanner;