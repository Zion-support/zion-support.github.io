import React from 'react';

const AIInnovationAdvertisingBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 border-y border-blue-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-sm tracking-wider uppercase animate-pulse">
              🔥 LIMITED TIME OFFER - 2026 AI REVOLUTION
            </span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Exclusive AI Innovation Access
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get early access to our breakthrough AI technologies and transform your enterprise with cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Features */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">What You'll Get:</h3>
            <div className="space-y-4">
              {[
                {
                  icon: '⚡',
                  title: 'Quantum-Neural AI Access',
                  description: '1000x faster processing with quantum-classical hybrid systems'
                },
                {
                  icon: '🧠',
                  title: 'Meta-Cognitive AI Framework',
                  description: 'Self-aware AI that thinks about its own thinking processes'
                },
                {
                  icon: '🤖',
                  title: 'Autonomous Operations Suite',
                  description: '98% automation rate with self-healing and self-optimizing systems'
                },
                {
                  icon: '🛡️',
                  title: 'Enterprise Security Package',
                  description: 'Military-grade security for AI systems and data protection'
                },
                {
                  icon: '📊',
                  title: 'Real-time Analytics Dashboard',
                  description: 'Live monitoring and optimization of all AI operations'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Pricing & CTA */}
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
                <span className="text-red-400 font-bold text-sm">⚡ FLASH SALE</span>
              </div>
              <div className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                50% OFF
              </div>
              <div className="text-gray-400 text-lg mb-4">For the first 100 enterprises</div>
              <div className="text-2xl text-white font-bold">
                $50,000/month <span className="text-lg text-gray-400 line-through">$100,000/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Full AI Innovation Suite Access</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">24/7 Enterprise Support</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Custom AI Model Development</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Dedicated AI Engineer</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">ROI Guarantee: 300%+ in 6 months</span>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="/contact?offer=ai-innovation-50" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 text-center block"
              >
                Claim Your 50% Discount Now
              </a>
              <a 
                href="/schedule-demo" 
                className="w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block"
              >
                Schedule Free Demo
              </a>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-400">
                ⏰ Offer expires in 48 hours • Limited to 100 enterprises
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Trusted by Industry Leaders</h3>
            <p className="text-gray-400">Join 500+ enterprises already transforming with our AI solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                company: 'Fortune 500 Tech Giant',
                result: '300% ROI increase',
                testimonial: 'Zion Tech Group\'s AI solutions revolutionized our operations'
              },
              {
                company: 'Global Financial Institution',
                result: '$50M cost savings',
                testimonial: 'The autonomous systems reduced our operational costs dramatically'
              },
              {
                company: 'Leading Healthcare System',
                result: '99.9% uptime achieved',
      testimonial: 'Meta-cognitive AI improved our decision-making accuracy by 95%'
              }
            ].map((testimonial, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.testimonial}"</p>
                <div className="text-blue-400 font-semibold">{testimonial.company}</div>
                <div className="text-green-400 text-sm font-bold">{testimonial.result}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationAdvertisingBanner;