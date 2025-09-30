import React from 'react';

const NewContent2026AdvertisingMegaBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🎯 NEW: 2026 AI Breakthrough Content
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Innovations
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Explore our latest breakthrough content covering <span className="text-indigo-400 font-bold">Meta-Cognitive AI</span>, 
            <span className="text-purple-400 font-bold"> Quantum Computing</span>, and 
            <span className="text-pink-400 font-bold"> Enterprise Transformation</span> success stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: 'AI Breakthrough Announcement',
              description: 'January 2026 revolutionary Meta-Cognitive AI breakthrough with 1000x improvements',
              href: '/blog/ai-2026-january-breakthrough-announcement',
              icon: '🚀',
              color: 'from-purple-500 to-blue-500',
              hoverColor: 'hover:border-purple-500/50'
            },
            {
              title: 'Quantum AI Transformation',
              description: 'Enterprise Quantum AI delivering 1000x computational advantages and optimization',
              href: '/blog/quantum-ai-2026-enterprise-transformation',
              icon: '⚛️',
              color: 'from-cyan-500 to-blue-500',
              hoverColor: 'hover:border-cyan-500/50'
            },
            {
              title: '$2.3B Success Case Study',
              description: 'Fortune 500 company achieving $2.3B savings with breakthrough AI technologies',
              href: '/case-studies/fortune-500-ai-2026-breakthrough-mega-success',
              icon: '💰',
              color: 'from-green-500 to-emerald-500',
              hoverColor: 'hover:border-green-500/50'
            },
            {
              title: 'AI Innovation Labs',
              description: 'Revolutionary product development with 10x faster time-to-market and 85% cost reduction',
              href: '/blog/ai-innovation-labs-product-development-2025',
              icon: '🧪',
              color: 'from-orange-500 to-red-500',
              hoverColor: 'hover:border-orange-500/50'
            }
          ].map((content, index) => (
            <a
              key={index}
              href={content.href}
              className={`group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 ${content.hoverColor} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20`}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                {content.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                {content.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {content.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-semibold text-sm group-hover:text-indigo-300 transition-colors duration-300">
                  Read More →
                </span>
                <div className={`w-8 h-8 bg-gradient-to-r ${content.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-6 text-indigo-400">🎯 Ready to Transform Your Enterprise?</h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
            Join 500+ leading organizations already implementing our breakthrough AI technologies. 
            Get started with a free assessment and personalized implementation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Get Free Assessment →
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View All Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026AdvertisingMegaBanner;