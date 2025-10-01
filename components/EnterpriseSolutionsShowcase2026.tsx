import React from 'react';

export default function EnterpriseSolutionsShowcase2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/50 to-indigo-900/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🏢 Enterprise Solutions Showcase 2026
            </span>
          </div>
          <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Enterprise-Grade AI Solutions
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI transformation solutions designed for Fortune 500 companies and large-scale enterprise operations.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* AI Strategy & Consulting */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-3xl font-bold text-white mb-4">AI Strategy & Consulting</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Comprehensive AI transformation roadmaps tailored to your organization's unique needs and industry requirements.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-indigo-400">✓</span>
                <span className="text-gray-300">AI Readiness Assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-indigo-400">✓</span>
                <span className="text-gray-300">Custom Implementation Roadmap</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-indigo-400">✓</span>
                <span className="text-gray-300">Executive Training & Workshops</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-indigo-400">✓</span>
                <span className="text-gray-300">Change Management Support</span>
              </div>
            </div>
            <div className="bg-indigo-500/10 rounded-xl p-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-1">300%</div>
                <div className="text-gray-400 text-sm">Average ROI Achieved</div>
              </div>
            </div>
            <a 
              href="/services/ai-strategy-consulting" 
              className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Get Strategy Consultation →
            </a>
          </div>

          {/* Custom AI Development */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="text-6xl mb-6">⚙️</div>
            <h3 className="text-3xl font-bold text-white mb-4">Custom AI Development</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Bespoke AI solutions built specifically for your enterprise needs, from custom models to full-scale AI platforms.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span className="text-gray-300">Custom LLM Development</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span className="text-gray-300">Enterprise AI Platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span className="text-gray-300">MLOps & Deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span className="text-gray-300">24/7 Support & Maintenance</span>
              </div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">95%</div>
                <div className="text-gray-400 text-sm">Implementation Success Rate</div>
              </div>
            </div>
            <a 
              href="/services/custom-ai-development" 
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Start Custom Development →
            </a>
          </div>

          {/* AI Security & Governance */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-6xl mb-6">🛡️</div>
            <h3 className="text-3xl font-bold text-white mb-4">AI Security & Governance</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Comprehensive security frameworks and governance models to ensure safe, compliant, and ethical AI deployment.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-purple-400">✓</span>
                <span className="text-gray-300">AI Risk Assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">✓</span>
                <span className="text-gray-300">Compliance Framework</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">✓</span>
                <span className="text-gray-300">Ethical AI Guidelines</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">✓</span>
                <span className="text-gray-300">Security Monitoring</span>
              </div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
                <div className="text-gray-400 text-sm">Compliance Achievement</div>
              </div>
            </div>
            <a 
              href="/services/ai-security-governance" 
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Secure Your AI Systems →
            </a>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/30 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Enterprise Success Stories</h3>
            <p className="text-xl text-gray-300">Real results from Fortune 500 companies using our AI solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'Global Manufacturing Corp',
                industry: 'Manufacturing',
                challenge: 'Production optimization and predictive maintenance',
                solution: 'Meta-Cognitive AI for autonomous operations',
                result: '$75M annual savings, 99.5% uptime',
                logo: '🏭'
              },
              {
                company: 'International Healthcare Group',
                industry: 'Healthcare',
                challenge: 'Patient diagnosis and treatment optimization',
                solution: 'Quantum-Neural Networks for medical imaging',
                result: '40% faster diagnosis, 95% accuracy improvement',
                logo: '🏥'
              },
              {
                company: 'Mega Financial Services',
                industry: 'Finance',
                challenge: 'Fraud detection and risk management',
                solution: 'Autonomous AI agents for real-time monitoring',
                result: '98% fraud prevention, $200M risk reduction',
                logo: '🏦'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-4xl mb-4">{story.logo}</div>
                <h4 className="text-xl font-bold text-white mb-2">{story.company}</h4>
                <p className="text-indigo-400 font-semibold mb-3">{story.industry}</p>
                <div className="space-y-2 mb-4 text-sm">
                  <div>
                    <span className="text-gray-400">Challenge: </span>
                    <span className="text-gray-300">{story.challenge}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Solution: </span>
                    <span className="text-gray-300">{story.solution}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Result: </span>
                    <span className="text-green-400 font-semibold">{story.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-8">Our Proven Implementation Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Assessment', description: 'AI readiness evaluation and strategy development', icon: '🔍' },
              { step: '2', title: 'Planning', description: 'Custom roadmap and implementation timeline', icon: '📋' },
              { step: '3', title: 'Development', description: 'AI solution development and testing', icon: '⚙️' },
              { step: '4', title: 'Deployment', description: 'Production deployment and optimization', icon: '🚀' }
            ].map((phase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-4xl mb-4">{phase.icon}</div>
                <div className="text-2xl font-bold text-indigo-400 mb-2">Step {phase.step}</div>
                <h4 className="text-xl font-bold text-white mb-3">{phase.title}</h4>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 500+ leading organizations that trust Zion Tech Group for their AI transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/enterprise-consultation" 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Schedule Enterprise Consultation
            </a>
            <a 
              href="/enterprise-case-studies" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Enterprise Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}