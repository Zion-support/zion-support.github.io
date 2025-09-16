import React, { useState } from 'react';

const InteractiveContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const contentCategories = {
    ai: {
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'AI Consciousness Revolution',
          description: 'Breakthrough AI systems achieving genuine consciousness and self-awareness',
          link: '/pages/RevolutionaryTechShowcase2025',
          features: ['True self-awareness', 'Creative consciousness', 'Collaborative intelligence']
        },
        {
          title: 'Synthetic Intelligence',
          description: 'AI agents with synthetic consciousness creating autonomous systems',
          link: '/pages/RevolutionaryTechShowcase2025',
          features: ['Autonomous AI agents', 'Synthetic consciousness', 'Collective intelligence']
        }
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Quantum Supremacy',
          description: 'Quantum computers solving problems impossible for classical computers',
          link: '/pages/RevolutionaryTechShowcase2025',
          features: ['1000+ logical qubits', 'Quantum error correction', 'Exponential speed gains']
        },
        {
          title: 'Quantum AI Integration',
          description: 'Combining quantum computing with artificial intelligence',
          link: '/pages/RevolutionaryTechShowcase2025',
          features: ['Quantum neural networks', 'Quantum optimization', 'Quantum machine learning']
        }
      ]
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      content: [
        {
          title: 'Brain-Computer Interfaces',
          description: 'Direct brain-computer communication enabling thought-controlled devices',
          link: '/pages/RevolutionaryTechShowcase2025',
          features: ['Non-invasive BCI', 'Thought control', 'Neural feedback']
        },
        {
          title: 'Neural Enhancement',
          description: 'Augmenting human capabilities through neural interface technology',
          link: '/pages/RevolutionaryTechShowcase2025',
          features: ['Cognitive enhancement', 'Memory augmentation', 'Sensory expansion']
        }
      ]
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      color: 'from-indigo-600 to-purple-600',
      content: [
        {
          title: 'Space Colonization',
          description: 'Advanced technologies enabling human settlement beyond Earth',
          link: '/pages/RevolutionaryTechShowcase2025',
          features: ['Space habitats', 'Life support systems', 'Resource extraction']
        },
        {
          title: 'Interplanetary Travel',
          description: 'Revolutionary propulsion systems for rapid space travel',
          link: '/pages/RevolutionaryTechShowcase2025',
          features: ['Advanced propulsion', 'Faster-than-light concepts', 'Space tourism']
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Content Showcase 2025</h2>
          <p className="text-xl opacity-90">Explore our revolutionary technologies through interactive experiences</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">
              {contentCategories[activeTab as keyof typeof contentCategories].title}
            </h3>
            <p className="text-lg opacity-90">
              Discover the latest innovations in {contentCategories[activeTab as keyof typeof contentCategories].title.toLowerCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/80 mb-4">{item.description}</p>
                <ul className="text-white/70 space-y-1 mb-6 text-sm">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
                <a
                  href={item.link}
                  className={`inline-block bg-gradient-to-r ${contentCategories[activeTab as keyof typeof contentCategories].color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore {item.title} →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-6">
            Join thousands of innovators exploring these revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Explore All Technologies →
            </a>
            <a
              href="/pages/UltimateInnovationHub2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
            >
              Join Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;