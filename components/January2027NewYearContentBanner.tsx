import React from 'react';

const January2027NewYearContentBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm border-b border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🎉 NEW YEAR 2027: REVOLUTIONARY AI BREAKTHROUGHS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Future of AI Starts Now
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover groundbreaking AI innovations that are reshaping industries: 
            Quantum Neural Networks, Autonomous Business Intelligence, and Next-Gen Enterprise Automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Networks</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum-enhanced neural architectures achieving 99.97% accuracy 
              and processing speeds 10,000x faster than traditional AI systems.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Processing Speed</span>
                <span className="text-indigo-400 font-bold">10,000x Faster</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Accuracy Rate</span>
                <span className="text-indigo-400 font-bold">99.97%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Energy Efficiency</span>
                <span className="text-indigo-400 font-bold">95% Reduction</span>
              </div>
            </div>
            <a 
              href="/blog/quantum-neural-networks-2027-revolution"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Explore Quantum AI →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-5xl mb-6">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous BI Revolution</h3>
            <p className="text-gray-300 mb-6">
              Self-evolving business intelligence systems that automatically adapt, 
              learn, and optimize enterprise operations without human intervention.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Automation Rate</span>
                <span className="text-purple-400 font-bold">98.5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Decision Speed</span>
                <span className="text-purple-400 font-bold">Sub-second</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Cost Savings</span>
                <span className="text-purple-400 font-bold">$2.4B ROI</span>
              </div>
            </div>
            <a 
              href="/case-studies/autonomous-bi-fortune-500-success-2027"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              View Success Story →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Next-Gen Automation</h3>
            <p className="text-gray-300 mb-6">
              Advanced enterprise automation platforms that orchestrate complex workflows, 
              predict outcomes, and deliver unprecedented operational efficiency.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Efficiency Gain</span>
                <span className="text-pink-400 font-bold">340%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Error Reduction</span>
                <span className="text-pink-400 font-bold">99.8%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Time Savings</span>
                <span className="text-pink-400 font-bold">87% Faster</span>
              </div>
            </div>
            <a 
              href="/services/next-gen-automation-platform"
              className="inline-block bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-400 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Get Started →
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Ready to Transform Your Business in 2027?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Join the AI revolution with our comprehensive suite of cutting-edge solutions. 
              From quantum computing to autonomous operations, we're your partner in the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
              >
                Schedule Consultation
              </a>
              <a
                href="/blog/ai-2027-roadmap"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Read 2027 AI Roadmap
              </a>
              <a
                href="/case-studies"
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2027NewYearContentBanner;