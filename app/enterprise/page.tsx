import React from 'react';

const EnterprisePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium neon-glow">
              Advanced AI and IT Solutions for Large Organizations
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your enterprise with our proven AI solutions. Achieve $100M+ cost savings, 
              500% productivity gains, and 99.9% system uptime with enterprise-grade security and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Automation</h3>
              <p className="text-gray-300 mb-4">
                Automate complex business processes with intelligent AI systems that learn and adapt.
              </p>
              <div className="text-2xl font-bold text-cyan-400 neon-text">95% Efficiency</div>
            </div>

            <div className="cyber-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 mb-4">
                Bank-level security with end-to-end encryption and compliance with industry standards.
              </p>
              <div className="text-2xl font-bold text-purple-400 neon-text">99.9% Uptime</div>
            </div>

            <div className="cyber-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-4">
                Real-time insights and predictive analytics to drive data-driven decision making.
              </p>
              <div className="text-2xl font-bold text-pink-400 neon-text">300% ROI</div>
            </div>
          </div>

          <div className="text-center">
            <div className="cyber-card p-8 rounded-xl max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4 neon-text">Ready to Transform Your Enterprise?</h2>
              <p className="text-gray-300 mb-6">
                Get started with our enterprise AI solutions today and see the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button hover:scale-105 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:neon-glow"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage;
