import React from 'react';

export function FeatureHighlights() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms connect you with the perfect talent and services',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: '🌍',
      title: 'Global Talent Network',
      description: 'Access skilled professionals from 150+ countries worldwide',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      icon: '🔒',
      title: 'Verified & Secure',
      description: 'All profiles and transactions are verified and secure',
      color: 'from-zion-green to-zion-blue'
    },
    {
      icon: '⚡',
      title: 'Instant Response',
      description: 'Get responses within minutes, not days',
      color: 'from-zion-orange to-zion-red'
    }
  ];

  const achievements = [
    { icon: '🏆', number: '50+', label: 'Industry Awards' },
    { icon: '👥', number: '1M+', label: 'Active Users' },
    { icon: '📈', number: '300%', label: 'Growth Rate' },
    { icon: '⭐', number: '4.9/5', label: 'User Rating' }
  ];

  return (
    <section className="py-20 bg-zion-slate-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience the next generation of technology solutions with our innovative platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-12">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{achievement.number}</div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>);
}
