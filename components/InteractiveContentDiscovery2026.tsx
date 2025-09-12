import React, { useState } from 'react';
import Link from 'next/link';

const contentCategories = [
  {
    id: 'ai-2026',
    name: 'AI 2026 Breakthroughs',
    color: 'from-purple-500 to-pink-500',
    icon: '🚀',
    description: 'Revolutionary AI breakthroughs with proven ROI',
    content: [
      {
        title: 'Quantum-Neural Fusion',
        roi: '15,000%',
        difficulty: 'Expert',
        link: '/blog/quantum-neural-fusion-2026'
      },
      {
        title: 'Autonomous Manufacturing',
        roi: '8,500%',
        difficulty: 'Expert',
        link: '/blog/autonomous-manufacturing-revolution'
      },
      {
        title: 'Neural Interface Healthcare',
        roi: '95% Success',
        difficulty: 'Advanced',
        link: '/blog/neural-interface-healthcare'
      }
    ]
  },
  {
    id: 'ai-2027',
    name: 'AI 2027 Predictions',
    color: 'from-cyan-500 to-purple-500',
    icon: '🔮',
    description: 'Future predictions with implementation strategies',
    content: [
      {
        title: 'Neural Synthesis Technology',
        roi: '99.7% Accuracy',
        difficulty: 'Revolutionary',
        link: '/blog/neural-synthesis-breakthrough-2027'
      },
      {
        title: 'Quantum-AI Fusion',
        roi: '8,000%',
        difficulty: 'Expert',
        link: '/blog/quantum-ai-fusion-2027'
      },
      {
        title: 'Autonomous Decision Systems',
        roi: '98% Accuracy',
        difficulty: 'Transformative',
        link: '/blog/autonomous-decision-systems'
      }
    ]
  },
  {
    id: 'ai-2028-2030',
    name: 'AI 2028-2030',
    color: 'from-pink-500 to-indigo-500',
    icon: '🌌',
    description: 'Quantum neural breakthroughs & consciousness AI',
    content: [
      {
        title: 'Consciousness AI',
        roi: '∞ ROI',
        difficulty: 'Revolutionary',
        link: '/blog/consciousness-ai-2030'
      },
      {
        title: 'Space Exploration AI',
        roi: '5,000%',
        difficulty: 'Expert',
        link: '/blog/space-exploration-ai-2029'
      },
      {
        title: 'Multi-Dimensional AI',
        roi: '88% Probability',
        difficulty: 'Revolutionary',
        link: '/blog/dimensional-ai-2030'
      }
    ]
  }
];

const tools = [
  {
    name: 'AI 2026 ROI Calculator',
    description: 'Calculate potential ROI for AI implementations',
    icon: '🧮',
    link: '/tools/ai-2026-roi-calculator'
  },
  {
    name: 'Quantum Readiness Assessment',
    description: 'Assess your quantum AI readiness',
    icon: '⚛️',
    link: '/tools/quantum-readiness-assessment'
  },
  {
    name: 'Neural Interface Simulator',
    description: 'Simulate neural interface implementations',
    icon: '🧠',
    link: '/tools/neural-interface-simulator'
  }
];

export default function InteractiveContentDiscovery2026() {
  const [selectedCategory, setSelectedCategory] = useState('ai-2026');
  const [hoveredItem, setHoveredItem] = useState(null);

  const currentCategory = contentCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our revolutionary AI content through interactive discovery. 
            Find exactly what you need based on your interests and expertise level.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Selected Category Content */}
        {currentCategory && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentCategory.icon} {currentCategory.name}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {currentCategory.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.content.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                      {item.roi}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                      {item.difficulty}
                    </span>
                  </div>
                  
                  <Link 
                    href={item.link}
                    className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-300 ${
                      hoveredItem === index
                        ? `bg-gradient-to-r ${currentCategory.color} text-white transform scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Read Article
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🛠️ Interactive Tools
            </h3>
            <p className="text-lg text-gray-600">
              Use our advanced tools to plan and implement AI breakthroughs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.link}
                className="group bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Join thousands of organizations already implementing AI breakthroughs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                href="/webinars/ai-2026-2030-revolutionary-breakthroughs"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 border-2 border-white/30"
              >
                Watch Webinar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}