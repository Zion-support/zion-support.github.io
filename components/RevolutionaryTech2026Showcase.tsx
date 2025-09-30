import React from 'react';
import Link from 'next/link';

const RevolutionaryTech2026Showcase: React.FC = () => {
  const technologies = [
    {
      icon: '🧠',
      title: 'Neural Interface Systems',
      description: 'Direct human-AI collaboration through advanced neural interfaces',
      benefits: ['300% Productivity', 'Real-time Learning', 'Intuitive Control'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Lightning AI Processing',
      description: 'Sub-millisecond AI responses with edge computing optimization',
      benefits: ['0.001s Response', '99.9% Uptime', 'Global Scale'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🌐',
      title: 'Metaverse AI Integration',
      description: 'Seamless AI integration across virtual and physical worlds',
      benefits: ['Immersive Experience', 'Cross-Platform', 'Infinite Scale'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🔮',
      title: 'Predictive Intelligence',
      description: 'AI that predicts and prevents problems before they occur',
      benefits: ['99% Accuracy', 'Proactive Solutions', 'Risk Elimination'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '🛡️',
      title: 'Quantum Security AI',
      description: 'Unbreakable security powered by quantum encryption',
      benefits: ['Zero Breaches', 'Future-Proof', 'Global Compliance'],
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: '🚀',
      title: 'Autonomous Innovation',
      description: 'AI systems that continuously innovate and improve themselves',
      benefits: ['Self-Evolving', 'Continuous Growth', 'Unlimited Potential'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            REVOLUTIONARY TECH 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The Most Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {' '}AI Technologies
            </span>
            <br />
            Ever Created
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience breakthrough technologies that are reshaping the future of enterprise computing, 
            artificial intelligence, and human-machine collaboration.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{tech.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                {tech.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tech.description}
              </p>
              <div className="space-y-3">
                {tech.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">Experience the Future Today</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              See these revolutionary technologies in action with our interactive AI 2026 demo platform. 
              No installation required - experience the future in your browser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo/ai-2026-interactive-experience"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                🎮 Try Interactive Demo
              </Link>
              <Link
                href="/case-studies/ai-2026-revolutionary-implementation"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                📊 View Success Stories
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600 font-semibold">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600 font-semibold">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-2">$2B+</div>
            <div className="text-gray-600 font-semibold">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 font-semibold">AI Innovation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTech2026Showcase;