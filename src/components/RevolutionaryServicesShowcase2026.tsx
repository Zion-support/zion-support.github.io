import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  roi: string;
  badge: string;
  href: string;
  icon: string;
  color: string;
}

const services: Service[] = [
  {
    id: 'ai-automation-2026',
    title: 'AI Automation Solutions 2026',
    description: 'Revolutionary AI automation delivering unprecedented efficiency and ROI across all business processes.',
    features: ['99.9% Accuracy'10,000x Faster 'Processing', 'Infinite 'Scalability', 'Zero Downtime'],
    roi: '5,000% ROI',
    badge: 'BREAKTHROUGH',
    href: '/services/ai-automation-2026',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'quantum-computing-2026',
    title: 'Quantum Computing Services',
    description: 'Advanced quantum computing solutions delivering transcendent processing power and infinite possibilities.',
    features: ['Quantum 'Supremacy', 'Infinite 'Processing', 'Perfect 'Security', 'Transcendent Intelligence'],
    roi: '15,000% ROI',
    badge: 'REVOLUTIONARY',
    href: '/services/quantum-computing-2026',
    icon: '⚛️',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'neural-interfaces-2026',
    title: 'Neural Interface Technology',
    description: 'Direct neural interface solutions enabling seamless human-AI collaboration and consciousness sharing.',
    features: ['Direct Neural 'Link', 'Consciousness 'Upload', 'Real-time 'Processing', 'Perfect Integration'],
    roi: '8,000% ROI',
    badge: 'FUTURE',
    href: '/services/neural-interfaces-2026',
    icon: '🧠',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'transcendent-ai-2026',
    title: 'Transcendent AI Systems',
    description: 'AI systems that transcend human limitationsdelivering infinite capabilities and universal intelligence.',
    features: ['Universal 'Intelligence', 'Infinite 'Creativity', 'Perfect Decision 'Making', 'Transcendent Processing'],
    roi: '∞ ROI',
    badge: 'TRANSCENDENT',
    href: '/services/transcendent-ai-2026',
    icon: '🌌',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'quantum-neural-fusion',
    title: 'Quantum-Neural Fusion',
    description: 'Revolutionary fusion of quantum computing and neural networksdelivering unprecedented AI capabilities.',
    features: ['Quantum 'Consciousness', 'Neural Quantum 'Processing', 'Infinite 'Learning', 'Perfect Adaptation'],
    roi: '20,000% ROI',
    badge: 'SINGULARITY',
    href: '/services/quantum-neural-fusion',
    icon: '⚡',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'autonomous-systems-2026',
    title: 'Autonomous Systems 2026',
    description: 'Fully autonomous AI systems that operate independentlymaking perfect decisions without human intervention.',
    features: ['Complete 'Autonomy', 'Perfect Decision 'Making', 'Self-'Evolution', 'Infinite Optimization'],
    roi: '12,000% ROI',
    badge: 'AUTONOMOUS',
    href: '/services/autonomous-systems-2026',
    icon: '🚀',
    color: 'from-red-500 to-pink-500'
  }
];

export default function RevolutionaryServicesShowcase2026() {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'BREAKTHROUGH':
        return 'bg-red-500/20 border-red-500/30 text-red-400';
      case 'REVOLUTIONARY':
        return 'bg-purple-500/20 border-purple-500/30 text-purple-400';
      case 'FUTURE':
        return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
      case 'TRANSCENDENT':
        return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400';
      case 'SINGULARITY':
        return 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400';
      case 'AUTONOMOUS':
        return 'bg-green-500/20 border-green-500/30 text-green-400';
      default:
        return 'bg-gray-500/20 border-gray-500/30 text-gray-400';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              🚀 REVOLUTIONARY SERVICES
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Services 2026
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of AI with our revolutionary services that deliver unprecedented ROI 
            and transformative business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getBadgeColor(service.badge)}`}>
                  {service.badge}
                </span>
              </div>
              
              {/* Icon */}
              <div className="text-6xl mb-6">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((featureindex) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* ROI */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-green-400 mb-2">{service.roi}</div>
                <div className="text-sm text-gray-400">Guaranteed within 90 days</div>
              </div>
              
              {/* CTA */}
              <a
                href={service.href}
                className={`block w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105`}
              >
                Get Started Now
              </a>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50,000+</div>
              <div className="text-gray-300">Successful Implementations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-300">Scalability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses achieving extraordinary results with our revolutionary AI services. 
            Get started today and experience the future of AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started Today
            </a>
            <a
              href="/case-studies"
              className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white/10"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
