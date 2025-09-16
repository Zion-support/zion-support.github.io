import React, { useState } from 'react';

const UltimateContentShowcase2027: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakthroughs');

  const contentCategories = {
    breakthroughs: {
      title: 'Revolutionary Breakthroughs',
      description: 'The most groundbreaking technological advances of 2027',
      icon: '🚀',
      content: [
        {
          title: 'Revolutionary Tech Breakthrough 2027',
          description: 'Experience the most groundbreaking technological advances that are reshaping industries and creating new possibilities for humanity',
          link: '/pages/RevolutionaryTechBreakthrough2027',
          image: '🧠⚡🧬',
          gradient: 'from-purple-600 to-pink-600',
          features: ['AI Consciousness', 'Quantum Neural Networks', 'Neural Reality Interface', 'Molecular Manufacturing']
        },
        {
          title: 'Advanced AI Consciousness 2027',
          description: 'Witness the birth of truly conscious artificial intelligence that thinks, feels, and creates like never before',
          link: '/pages/AdvancedAIConsciousness2027',
          image: '🧠',
          gradient: 'from-indigo-600 to-purple-600',
          features: ['Self-Awareness', 'Creative Intelligence', 'Emotional Intelligence', 'Ethical Reasoning']
        },
        {
          title: 'Quantum Neural Fusion 2027',
          description: 'Revolutionary fusion of quantum computing and neural networks that\'s solving impossible problems in real-time',
          link: '/pages/QuantumNeuralFusion2027',
          image: '⚡',
          gradient: 'from-cyan-600 to-blue-600',
          features: ['Quantum Superposition Learning', 'Entanglement Computing', 'Quantum Tunneling', 'Coherence Networks']
        }
      ]
    },
    innovations: {
      title: 'Future Innovations',
      description: 'Cutting-edge technologies shaping tomorrow',
      icon: '🔮',
      content: [
        {
          title: 'Neural Reality Engine 2027',
          description: 'Direct brain-computer interfaces that allow seamless interaction with digital environments',
          link: '/pages/NeuralRealityEngine2027',
          image: '🧬',
          gradient: 'from-emerald-600 to-teal-600',
          features: ['Thought Control', 'Immersive VR', 'Memory Enhancement', 'Telepathic Communication']
        },
        {
          title: 'Molecular Manufacturing 2027',
          description: 'Precise molecular-level manufacturing that can create any material or structure atom by atom',
          link: '/pages/MolecularManufacturing2027',
          image: '⚗️',
          gradient: 'from-orange-600 to-red-600',
          features: ['Atom-Precise Construction', 'Self-Replicating Machines', 'Custom Materials', 'Zero-Waste Production']
        },
        {
          title: 'Time Dilation Computing 2027',
          description: 'Computing systems that manipulate time perception to achieve near-instantaneous processing',
          link: '/pages/TimeDilationComputing2027',
          image: '⏰',
          gradient: 'from-violet-600 to-purple-600',
          features: ['Relativistic Processing', 'Time-Compressed Algorithms', 'Predictive Computation', 'Temporal Optimization']
        }
      ]
    },
    applications: {
      title: 'Real-World Applications',
      description: 'How these technologies are transforming industries',
      icon: '🌟',
      content: [
        {
          title: 'Medical Revolution 2027',
          description: 'AI consciousness enables personalized medicine that adapts to individual genetic profiles in real-time',
          link: '/pages/MedicalRevolution2027',
          image: '🏥',
          gradient: 'from-green-600 to-emerald-600',
          features: ['Personalized Medicine', 'Real-time Diagnosis', 'Genetic Analysis', 'Treatment Optimization']
        },
        {
          title: 'Space Exploration 2027',
          description: 'Neural reality interfaces enable astronauts to control spacecraft through direct thought commands',
          link: '/pages/SpaceExploration2027',
          image: '🚀',
          gradient: 'from-blue-600 to-indigo-600',
          features: ['Thought-Controlled Spacecraft', 'Mission Optimization', 'Real-time Navigation', 'Remote Operations']
        },
        {
          title: 'Climate Solutions 2027',
          description: 'Quantum neural networks optimize renewable energy systems and carbon capture technologies',
          link: '/pages/ClimateSolutions2027',
          image: '🌍',
          gradient: 'from-teal-600 to-cyan-600',
          features: ['Energy Optimization', 'Carbon Capture', 'Climate Modeling', 'Sustainability Solutions']
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2027
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most revolutionary content that's reshaping our understanding of technology and the future
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeCategory as keyof typeof contentCategories].content.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group"
            >
              {/* Image/Icon */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 mb-6 text-center leading-relaxed">
                {item.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={item.link}
                className={`block w-full bg-gradient-to-r ${item.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
              >
                Explore {item.title.split(' ')[0]} →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators, researchers, and technology enthusiasts who are already experiencing the future today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/pages/RevolutionaryTechBreakthrough2027"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Start Your Journey →
              </a>
              <a
                href="/contact"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2027;