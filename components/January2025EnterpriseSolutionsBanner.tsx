// import React from 'react';

const January2025EnterpriseSolutionsBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🏢 January 2025: Enterprise AI Solutions
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Comprehensive AI Solutions for Modern Enterprises
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Transform your enterprise with our comprehensive suite of AI solutions designed for scalability, 
            security, and measurable business impact. From deployment to optimization, we've got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🚀</div>
                <h3 className="text-2xl font-bold text-white">AI Strategy & Consulting</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Develop a comprehensive AI strategy tailored to your business objectives. Our experts work with you 
                to identify opportunities, assess readiness, and create a roadmap for successful AI implementation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                  <div className="text-blue-400 font-bold text-lg">$2.3M</div>
                  <div className="text-blue-300 text-sm">Average Savings</div>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <div className="text-purple-400 font-bold text-lg">95%</div>
                  <div className="text-purple-300 text-sm">Success Rate</div>
                </div>
              </div>
              <a 
                href="/services/ai-strategy-consulting"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">⚙️</div>
                <h3 className="text-2xl font-bold text-white">Implementation & Deployment</h3>
              </div>
              <p className="text-gray-300 mb-6">
                From pilot projects to enterprise-wide deployment, we handle every aspect of AI implementation. 
                Our proven methodologies ensure smooth transitions and minimal disruption to your operations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <div className="text-green-400 font-bold text-lg">6 Weeks</div>
                  <div className="text-green-300 text-sm">Average Timeline</div>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
                  <div className="text-orange-400 font-bold text-lg">99.9%</div>
                  <div className="text-orange-300 text-sm">Uptime</div>
                </div>
              </div>
              <a 
                href="/services/ai-implementation"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Get Started →
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🛡️</div>
                <h3 className="text-2xl font-bold text-white">Security & Compliance</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Ensure your AI systems meet the highest security standards and regulatory requirements. 
                Our comprehensive security framework protects your data and maintains compliance across all jurisdictions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <div className="text-purple-400 font-bold text-lg">99.97%</div>
                  <div className="text-purple-300 text-sm">Security Score</div>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                  <div className="text-red-400 font-bold text-lg">Zero</div>
                  <div className="text-red-300 text-sm">Breaches</div>
                </div>
              </div>
              <a 
                href="/services/ai-security-compliance"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Secure Now →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">📈</div>
                <h3 className="text-2xl font-bold text-white">Optimization & Support</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Continuous optimization and 24/7 support to ensure your AI systems perform at peak efficiency. 
                Our team monitors, maintains, and enhances your AI infrastructure for maximum ROI.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                  <div className="text-cyan-400 font-bold text-lg">24/7</div>
                  <div className="text-cyan-300 text-sm">Support</div>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                  <div className="text-yellow-400 font-bold text-lg">15%</div>
                  <div className="text-yellow-300 text-sm">Performance Boost</div>
                </div>
              </div>
              <a 
                href="/services/ai-optimization-support"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Optimize Now →
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-6">Why Choose Our Enterprise AI Solutions?</h3>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-xl font-bold text-white mb-2">Proven Track Record</h4>
                <p className="text-gray-300 text-sm">500+ successful enterprise deployments</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h4 className="text-xl font-bold text-white mb-2">Custom Solutions</h4>
                <p className="text-gray-300 text-sm">Tailored to your specific business needs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-white mb-2">Rapid Deployment</h4>
                <p className="text-gray-300 text-sm">Get up and running in weeks, not months</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-white mb-2">Guaranteed ROI</h4>
                <p className="text-gray-300 text-sm">Average 8.5x return on investment</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Start Your AI Journey
              </a>
              <a 
                href="/case-studies"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
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

export default January2025EnterpriseSolutionsBanner;