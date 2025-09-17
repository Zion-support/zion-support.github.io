import React, { useState }  from 'react';
import { Link }  from 'react-router-dom';
const UltimateContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const content = [
    {
      id: "1",
      title: "AI Innovation Hub",
      description: "Explore cutting-edge AI technologies and their applications",
      icon: "🤖",
      category: "ai",
      link: "/pages/AIInnovationHub2026"
    },
    {
      id: "2",
      title: "Quantum Computing",
      description: "Revolutionary quantum technologies transforming computing",
      icon: "⚛️",
      category: "quantum",
      link: "/pages/QuantumComputingGuide2026"
    },
    {
      id: "3",
      title: "Advanced Analytics",
      description: "Data-driven insights and predictive analytics",
      icon: "📊",
      category: "analytics",
      link: "/pages/AdvancedAnalyticsDashboard2026"
    },
    {
      id: "4",
      title: "Biotech Revolution",
      description: "Breakthrough biotechnology and life sciences",
      icon: "🧬",
      category: "biotech",
      link: "/pages/BiotechRevolution2026"
    },
    {
      id: "5",
      title: "Space Technology",
      description: "Advanced space exploration and technology",
      icon: "🚀",
      category: "space",
      link: "/pages/SpaceTechInnovation2026"
    },
    {
      id: "6",
      title: "Neural Interfaces",
      description: "Brain-computer interface technologies",
      icon: "🧠",
      category: "neural",
      link: "/pages/NeuralInterfaceRevolution2026"
    }
  ];
  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.category === activeTab);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the latest breakthroughs in technology and innovation that are reshaping our world.
          </p>
        </div>
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'ai', 'quantum', 'analytics', 'biotech', 'space', 'neural'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6">{item.description}</p>
              <Link
                to={item.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-transform duration-300"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Explore the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in discovering the technologies that will shape tomorrow's world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  }
];
export default UltimateContentShowcase2026;
