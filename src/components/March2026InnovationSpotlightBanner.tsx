import React from 'react';

const March2026InnovationSpotlightBanner = () => {
  const innovations = [
    {
      title: 'Neural-Synaptic Fusion AI',
      description: 'Revolutionary brain-computer interface achieving 99.98% neural accuracy',
      impact: '500% cognitive enhancement',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Quantum Temporal Computing',
      description: 'Processing information across multiple time dimensions simultaneously',
      impact: '1000x temporal efficiency',
      icon: '⏰',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Autonomous Reality Synthesis',
      description: 'AI systems that create and manage parallel digital realities',
      impact: '$5.2B market creation',
      icon: '🌌',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8">

            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🚀 MARCH 2026: INNOVATION SPOTLIGHT
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            The Innovation Revolution
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Witness the most revolutionary technological breakthroughs of our time. These innovations 
            are reshaping reality itself and creating unprecedented opportunities for human advancement.
          </p>

          {/* Innovation Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { value: '99.98%', label: 'Neural Accuracy', icon: '🧠', color: 'text-purple-400' },
              { value: '1000x', label: 'Processing Speed', icon: '⚡', color: 'text-indigo-400' },
              { value: '$5.2B', label: 'Market Creation', icon: '💰', color: 'text-blue-400' },
              { value: '500%', label: 'Enhancement', icon: '📈', color: 'text-emerald-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (

            <div
key={index}

              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${innovation.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <div className="relative p-8">
                {/* Innovation Icon */}
                <div className="text-6xl mb-6 text-center group-hover:animate-pulse">
                  {innovation.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight text-center">
                  {innovation.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-center leading-relaxed">
                  {innovation.description}
                </p>

                {/* Impact */}
                <div className="text-center mb-6">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${innovation.color} text-white text-sm font-bold`}>",
      Impact: {innovation.impact}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={`/innovations/${innovation.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r ${innovation.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1`}
                >
                  <span>Explore Innovation</span>

                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-extrabold text-white mb-4">
              Revolutionary Success Stories
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how our innovations are transforming industries and creating unprecedented value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'NeuroTech Global',
                achievement: '500% Cognitive Enhancement',
                revenue: '$2.1B Revenue Growth',
                icon: '>'
              },
              {
                company: 'Quantum Dynamics',
                achievement: '1000x Processing Speed',
                revenue: '$3.8B Market Value',
                icon: '>'
              },
              {
                company: 'Reality Synthesis Corp',
                achievement: '$5.2B Market Creation',
                revenue: '98% Customer Satisfaction',
      icon: '>'
              }
            ].map((story, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-400 mb-4 flex justify-center">
                  {story.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{story.company}</h4>
                <p className="text-purple-400 font-semibold mb-1">{story.achievement}</p>
                <p className="text-gray-400 text-sm">{story.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Join the Innovation Revolution
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Be part of the future. Get exclusive access to revolutionary innovations, 
                early research insights, and transformative technologies that are reshaping our world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/innovations"
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                >

                  <span>Explore All Innovations</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Partner With Us</span>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default March2026InnovationSpotlightBanner;