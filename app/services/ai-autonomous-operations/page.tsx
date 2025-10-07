import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Autonomous Operations Services | Zion Tech Group',
  description: 'Transform your enterprise with fully autonomous AI operations. Achieve 95% automation rates and $2M+ annual savings with our cutting-edge solutions.',
  keywords: 'AI autonomous operations, enterprise automation, AI services, process automation, intelligent automation',
  openGraph: {
    title: 'AI Autonomous Operations Services',
    description: 'Transform your enterprise with fully autonomous AI operations. Achieve 95% automation rates and $2M+ annual savings with our cutting-edge solutions.',
    type: 'article',
  },
};

export default function AIAutonomousOperationsService() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
              <span className="text-purple-400 font-bold text-sm tracking-wider uppercase">
                ⚡ New Service • January 20, 2025
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              AI Autonomous Operations Services
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your enterprise with fully autonomous AI operations. Achieve <span className="font-bold text-purple-300">95% automation rates</span> and <span className="font-bold text-green-300">$2M+ annual savings</span> with our cutting-edge solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="#features" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Service Overview */}
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4 text-purple-400">🎯 Service Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our AI Autonomous Operations service revolutionizes how enterprises operate by implementing intelligent automation systems that can make decisions, learn from data, and optimize processes without human intervention. This cutting-edge solution delivers unprecedented efficiency, cost savings, and competitive advantage.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">95%</div>
                <div className="text-sm text-gray-400">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">$2M+</div>
                <div className="text-sm text-gray-400">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">300%</div>
                <div className="text-sm text-gray-400">ROI</div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <section id="features" className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">🚀 Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Autonomous Decision-Making</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI systems that make complex business decisions in real-time, processing thousands of variables to optimize operations and reduce costs.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Predictive Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced machine learning models that predict maintenance needs, demand patterns, and quality issues before they occur.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Real-Time Optimization</h3>
                <p className="text-gray-300 leading-relaxed">
                  Continuous optimization of processes, resources, and workflows to achieve maximum efficiency and performance.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">Intelligent Security</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-powered security systems that detect and respond to threats in real-time, ensuring business continuity.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-orange-400">Advanced Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deep insights and actionable intelligence from your operational data to drive strategic decision-making.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3 text-pink-400">Self-Healing Systems</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automated systems that detect and resolve issues without human intervention, ensuring 99.9% uptime.
                </p>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">📋 Implementation Process</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Discovery & Assessment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Comprehensive analysis of your current operations, processes, and technology stack to identify automation opportunities and create a strategic roadmap.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Process audit and documentation</li>
                    <li>• Technology assessment</li>
                    <li>• ROI analysis and projections</li>
                    <li>• Strategic roadmap development</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Design & Architecture</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Custom AI system design tailored to your specific needs, including architecture planning, technology selection, and integration strategies.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• AI system architecture design</li>
                    <li>• Technology stack selection</li>
                    <li>• Integration planning</li>
                    <li>• Security and compliance design</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">Pilot Implementation</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Deploy AI systems in controlled environments to validate performance, measure results, and refine the solution before full-scale deployment.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Controlled environment deployment</li>
                    <li>• Performance monitoring</li>
                    <li>• Results validation</li>
                    <li>• Solution refinement</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-orange-400">Full Deployment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Scale successful pilots across your entire organization with comprehensive training, support, and continuous optimization.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Organization-wide deployment</li>
                    <li>• Team training and support</li>
                    <li>• Performance optimization</li>
                    <li>• Ongoing maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">💰 Pricing Tiers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Starter</h3>
                <div className="text-4xl font-bold mb-6 text-white">$50K<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Up to 10 processes automated
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Basic predictive analytics
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Monthly performance reports
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center block"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/50 rounded-xl p-8 hover:border-purple-500/70 transition-all duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Professional</h3>
                <div className="text-4xl font-bold mb-6 text-white">$150K<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Up to 50 processes automated
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Advanced AI analytics
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Real-time monitoring
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Custom integrations
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center block"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Enterprise</h3>
                <div className="text-4xl font-bold mb-6 text-white">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Unlimited processes
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Full AI autonomy
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Dedicated support team
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    Custom AI models
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    24/7 monitoring
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center block"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the autonomous operations revolution. Get a free consultation and discover how your organization can achieve 95% automation and $2M+ in annual savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Get Free Consultation
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">© 2025 Zion Tech Group. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}