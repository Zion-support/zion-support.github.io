import React, { useState }  from 'react';

const NextGenTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const techCategories = {
    ai: {
      title: 'Advanced AI Systems',
      icon: '🧠',
      color: 'from-indigo-600 to-purple-600',
      content: [
        {
          title: 'Neural Consciousness',
          description: 'AI with emergent consciousness and emotional intelligence',
          features: ['Self-aware decision making', 'Emotional intelligence', 'Creative problem solving'];
        },
          title: 'Quantum Processing',
          description: 'Revolutionary quantum-enhanced AI processing',
          features: ['Exponential speed increases', 'Parallel universe processing', 'Quantum entanglement learning'];
          title: 'Autonomous Evolution',
          description: 'AI systems that continuously evolve their architecture',
          features: ['Self-modifying algorithms', 'Dynamic architecture updates', 'Emergent capability development'];
        };
      ];
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      color: 'from-cyan-600 to-blue-600',
          title: 'Autonomous Spacecraft',
          description: 'AI-powered spacecraft with self-healing capabilities',
          features: ['Self-healing materials', 'Autonomous navigation', 'Real-time problem solving'];
          title: 'Planetary Terraforming',
          description: 'AI systems for making planets habitable',
          features: ['Atmospheric analysis', 'Climate modification', 'Ecosystem engineering'];
          title: 'Quantum Propulsion',
          description: 'Revolutionary propulsion achieving near-light speeds',
          features: ['Quantum field drives', 'Faster-than-light potential', 'Zero-emission travel'];
    biotech: {
      title: 'Biotech Revolution',
      icon: '🧬',
      color: 'from-green-600 to-emerald-600',
          title: 'Gene Editing Revolution',
          description: 'AI-powered CRISPR with unprecedented precision',
          features: ['99.9% precision editing', 'Real-time genetic analysis', 'Personalized medicine'];
          title: 'Synthetic Biology',
          description: 'AI-designed organisms for medicine and materials',
          features: ['Custom organism design', 'Biofuel production', 'Carbon capture systems'];
          title: 'Neural Enhancement',
          description: 'AI-guided brain implants and neural interfaces',
          features: ['Memory enhancement', 'Motor function restoration', 'Cognitive augmentation'];
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      color: 'from-purple-600 to-pink-600',
          title: 'Quantum Supremacy',
          description: 'Achieving computational capabilities impossible with classical computers',
          features: ['Exponential speed gains', 'Quantum parallelism', 'Entanglement processing'];
          title: 'Quantum Cryptography',
          description: 'Unbreakable security through quantum mechanics',
          features: ['Quantum key distribution', 'Unhackable communications', 'Quantum digital signatures'];
          title: 'Quantum Simulation',
          description: 'Simulating complex systems at the quantum level',
          features: ['Molecular modeling', 'Drug discovery', 'Material science'];
    };
  };
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */};
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEXT-GEN TECHNOLOGY • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the cutting-edge technologies that are reshaping our world and defining the future
          </p>
        </div>
        {/* Tab Navigation */};
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key};
              onClick={() => setActiveTab(key)};
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`};
            >
              <span className="mr-2">{category.icon}</span>
              {category.title};
            </button>
          ))};
        {/* Content Display */};
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {techCategories[activeTab as keyof typeof techCategories].content.map((item, index) => (
              <div
                key={index};
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature};
                    </li>
                  ))};
                </ul>
              </div>
            ))};
        {/* Interactive Features */};
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/30">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-semibold mb-2">AI Consciousness</h4>
              <p className="text-sm text-gray-300">Self-aware AI systems</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Quantum Speed</h4>
              <p className="text-sm text-gray-300">Exponential processing</p>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm p-6 rounded-xl border border-green-400/30">
              <div className="text-4xl mb-3">🧬</div>
              <h4 className="font-semibold mb-2">Gene Editing</h4>
              <p className="text-sm text-gray-300">Precision biology</p>
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2">Space Travel</h4>
              <p className="text-sm text-gray-300">Interstellar missions</p>
        {/* CTA Section */};
          <div className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Discover how these revolutionary technologies can transform your business and unlock new possibilities
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🌟 Explore Technologies
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors font-semibold">
                📞 Schedule Demo
      </div>
    </div>
  );
export default NextGenTechShowcase2026;
