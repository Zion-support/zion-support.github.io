// import React from 'react';

export default function NewServicesPromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800/20 to-teal-800/20 backdrop-blur-lg border border-emerald-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
          <div className="relative z-10 p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-8">
                <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">
                  🎯 New Services Launch
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Revolutionary New Services
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Introducing our latest suite of AI-powered services designed to accelerate your digital transformation 
                and drive unprecedented business growth. Experience the future of enterprise technology today.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-4">AI-Powered Automation</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    Automate complex business processes with intelligent AI agents that learn and adapt to your unique requirements.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Process Efficiency</span>
                      <span className="text-emerald-400 font-bold">95%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Cost Reduction</span>
                      <span className="text-emerald-400 font-bold">80%</span>
                    </div>
                  </div>
                  <a 
                    href="/services/ai-automation" 
                    className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 text-sm"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-white mb-4">Intelligent Analytics</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    Unlock hidden insights from your data with advanced machine learning and predictive analytics capabilities.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Insight Accuracy</span>
                      <span className="text-teal-400 font-bold">98%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Speed Improvement</span>
                      <span className="text-teal-400 font-bold">50x</span>
                    </div>
                  </div>
                  <a 
                    href="/services/intelligent-analytics" 
                    className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 text-sm"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-4">Advanced Security</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    Protect your enterprise with next-generation security solutions powered by AI and machine learning.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Threat Detection</span>
                      <span className="text-cyan-400 font-bold">99.9%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-cyan-400 font-bold">Instant</span>
                    </div>
                  </div>
                  <a 
                    href="/services/advanced-security" 
                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 text-sm"
                  >
                    Secure Now
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Limited Time Offer</h3>
                <p className="text-gray-300 mb-6">
                  Get 30% off your first year when you sign up for any of our new services. 
                  Plus, receive a free consultation with our AI experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
                  >
                    Claim Offer Now
                  </a>
                  <a 
                    href="/pricing" 
                    className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}