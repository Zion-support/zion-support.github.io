import React, { useState } from 'react';

export default function October2025BreakthroughContentHub() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Content', icon: '📚', count: 47 },
    { id: 'autonomous', name: 'Autonomous Systems', icon: '🤖', count: 12 },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️', count: 8 },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢', count: 15 },
    { id: 'security', name: 'Security', icon: '🔐', count: 7 },
    { id: 'success', name: 'Success Stories', icon: '📈', count: 5 },
  ];
  
  const content = [
    {
      category: 'autonomous',
      title: 'Ultimate AI Revolution Platform',
      description: '$127B value creation across 8,400+ enterprises',
      roi: '12,847%',
      badge: 'JUST PUBLISHED',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      category: 'enterprise',
      title: 'Next-Gen Enterprise AI Platform',
      description: '$42.7B enterprise value, 99.96% uptime SLA',
      roi: '2,847%',
      badge: 'NEW',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      category: 'quantum',
      title: 'Quantum-Enhanced Neural Processing',
      description: '10,000x faster computation for enterprise scenarios',
      roi: '8,420%',
      badge: 'BREAKTHROUGH',
      gradient: 'from-pink-600 to-purple-600'
    },
    {
      category: 'security',
      title: 'Zero-Trust Security Architecture',
      description: '99.999% threat prevention, real-time response',
      roi: '4,250%',
      badge: 'NEW',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      category: 'success',
      title: 'Fortune 500 Transformation',
      description: '$3.2B savings, 99.97% autonomy achieved',
      roi: '847%',
      badge: 'CASE STUDY',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      category: 'autonomous',
      title: 'Cognitive AI Systems',
      description: 'Self-learning AI with continuous improvement',
      roi: '6,340%',
      badge: 'FEATURED',
      gradient: 'from-indigo-600 to-purple-600'
    },
  ];
  
  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);
  
  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-sm uppercase tracking-wider mb-6 animate-pulse">
            🎯 OCTOBER 2025 CONTENT HUB
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6">
            Breakthrough AI Content Library
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most comprehensive collection of enterprise AI solutions, 
            success stories, and implementation guides ever created.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
              <span className="ml-2 text-xs opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-2xl font-black text-green-400">{item.roi}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
                
                <div className="pt-4 flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg text-sm hover:shadow-lg transition-all">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-white/10 text-white font-semibold rounded-lg text-sm hover:bg-white/20 transition-all">
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-12 border border-purple-500/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 8,400+ companies that have already revolutionized their operations with our AI platform. 
            Get started today and see results within 90 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full text-lg hover:scale-110 transition-transform shadow-2xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all border border-white/30">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
