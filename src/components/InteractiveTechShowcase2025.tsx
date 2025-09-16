import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState('ai');
=======
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techCategories = [
    {
      title: "AI & Consciousness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      technologies: [
        {
          name: "AI Consciousness Revolution",
          description: "First AI systems achieving genuine consciousness and self-awareness",
          link: "/pages/RevolutionaryTechBreakthrough2025",
          features: ["Self-awareness", "Creative thinking", "Emotional intelligence"]
        },
        {
          name: "Neural Interface Technology",
          description: "Direct brain-computer communication enabling thought control",
          link: "/pages/RevolutionaryTechBreakthrough2025",
          features: ["Non-invasive BCI", "Thought control", "Memory enhancement"]
        }
      ]
    },
    {
      title: "Space Technology",
      icon: "🚀",
      color: "from-cyan-600 to-blue-600",
      technologies: [
        {
          name: "Interplanetary Travel",
          description: "Advanced propulsion systems enabling rapid travel between planets",
          link: "/pages/NextGenSpaceTech2026",
          features: ["Nuclear propulsion", "Mars transit", "Reusable spacecraft"]
        },
        {
          name: "Space Habitats",
          description: "Self-sustaining space colonies with advanced life support",
          link: "/pages/NextGenSpaceTech2026",
          features: ["Modular design", "Life support", "Artificial gravity"]
        }
      ]
    },
    {
      title: "Biotechnology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      technologies: [
        {
          name: "Gene Therapy Revolution",
          description: "Advanced gene editing curing diseases and enhancing capabilities",
          link: "/pages/AdvancedBiotechRevolution2026",
          features: ["CRISPR 3.0", "Disease cure", "Human enhancement"]
        },
        {
          name: "Regenerative Medicine",
          description: "Stem cell therapies regenerating organs and reversing aging",
          link: "/pages/AdvancedBiotechRevolution2026",
          features: ["Organ regeneration", "Anti-aging", "Tissue engineering"]
        }
      ]
>>>>>>> cursor/create-and-deploy-new-content-de2c
    }
  };

  return (
<<<<<<< HEAD
          </div>
        </div>

              Schedule Demo
            </button>
=======
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">🌟 Interactive Technology Showcase 2025</h2>
        <p className="text-xl text-purple-200">Explore our revolutionary technologies with interactive features</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {techCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === index
                ? `bg-gradient-to-r ${category.color} text-white`
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Technology Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {techCategories[activeTab].technologies.map((tech, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${techCategories[activeTab].color}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
              </div>
              <div className="text-4xl opacity-60">{techCategories[activeTab].icon}</div>
            </div>

            {/* Features List */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
              <div className="flex flex-wrap gap-2">
                {tech.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="flex items-center justify-between">
              <a
                href={tech.link}
                className={`bg-gradient-to-r ${techCategories[activeTab].color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
              >
                Explore Technology →
              </a>
              <div className="flex space-x-2">
                <button className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                  ⭐
                </button>
                <button className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                  📤
                </button>
              </div>
            </div>

            {/* Hover Effect */}
            {hoveredCard === index && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="mt-12 bg-gradient-to-r from-white/10 to-transparent rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white text-center mb-6">Revolutionary Impact</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">300%</div>
            <div className="text-purple-200">Productivity Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">99.9%</div>
            <div className="text-cyan-200">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-300 mb-2">95%</div>
            <div className="text-emerald-200">Disease Cure Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div className="text-yellow-200">Autonomous Operation</div>
>>>>>>> cursor/create-and-deploy-new-content-de2c
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
          Experience All Technologies →
        </button>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;