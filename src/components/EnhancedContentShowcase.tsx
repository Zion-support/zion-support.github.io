import React, { useState } from 'react';

const EnhancedContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');

  const contentCategories = {
    breakthroughs: {
      title: "Revolutionary Breakthroughs",
      icon: "🌟",
      color: "purple",
      content: [
        {
          title: "Conscious AI Systems",
          description: "Self-aware AI with emotional intelligence",
          link: "/pages/RevolutionaryTechBreakthrough2025",
          stats: "99.7% Accuracy",
          gradient: "from-purple-600 to-pink-600"
        },
        {
          title: "Quantum Neural Networks",
          description: "Fusion of quantum computing and neural networks",
          link: "/pages/RevolutionaryTechBreakthrough2025",
          stats: "1000x Faster",
          gradient: "from-cyan-600 to-blue-600"
        },
        {
          title: "Neural Reality Engine",
          description: "Direct brain-computer interfaces",
          link: "/pages/RevolutionaryTechBreakthrough2025",
          stats: "Full Immersion",
          gradient: "from-emerald-600 to-teal-600"
        }
      ]
    },
    innovations: {
      title: "Next-Gen Innovations",
      icon: "🚀",
      color: "indigo",
      content: [
        {
          title: "Autonomous AI Systems",
          description: "Self-evolving AI without human intervention",
          link: "/pages/NextGenInnovationHub2026",
          stats: "24/7 Learning",
          gradient: "from-indigo-600 to-purple-600"
        },
        {
          title: "Metaverse Integration",
          description: "Seamless physical-virtual world integration",
          link: "/pages/NextGenInnovationHub2026",
          stats: "Holographic UI",
          gradient: "from-cyan-600 to-blue-600"
        },
        {
          title: "Biotech Revolution",
          description: "AI-powered biotechnology solutions",
          link: "/pages/NextGenInnovationHub2026",
          stats: "Personalized Medicine",
          gradient: "from-emerald-600 to-teal-600"
        }
      ]
    },
    showcase: {
      title: "Ultimate Showcase",
      icon: "🎯",
      color: "blue",
      content: [
        {
          title: "Interactive Demos",
          description: "Experience technologies in action",
          link: "/pages/UltimateTechShowcase2026",
          stats: "Live Demo",
          gradient: "from-blue-600 to-indigo-600"
        },
        {
          title: "Quantum Simulator",
          description: "Interactive quantum computing concepts",
          link: "/pages/UltimateTechShowcase2026",
          stats: "Real-time",
          gradient: "from-purple-600 to-pink-600"
        },
        {
          title: "Bio AI Lab",
          description: "Explore biotechnology with AI",
          link: "/pages/UltimateTechShowcase2026",
          stats: "Hands-on",
          gradient: "from-green-600 to-emerald-600"
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-600",
        hover: "hover:bg-purple-50"
      },
      indigo: {
        bg: "bg-indigo-600",
        text: "text-indigo-600",
        border: "border-indigo-600",
        hover: "hover:bg-indigo-50"
      },
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-600",
        hover: "hover:bg-blue-50"
      }
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const currentCategory = contentCategories[activeTab as keyof typeof contentCategories];
  const colorClasses = getColorClasses(currentCategory.color);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Enhanced Content Showcase</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary content across breakthrough technologies, next-gen innovations, and interactive showcases
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-50 px-8 py-4">
        <div className="flex justify-center space-x-2">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `${colorClasses.bg} text-white shadow-lg`
                  : `text-gray-600 hover:bg-gray-200`
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.content.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
            >
              <div className="mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${colorClasses.bg} text-white mb-3`}>
                  {item.stats}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
              </div>
              
              <a
                href={item.link}
                className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
              >
                Explore Content
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-8 py-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Explore?</h3>
          <p className="text-gray-600 mb-4">
            Dive deeper into our revolutionary content and discover the future of technology
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              View All Breakthroughs
            </a>
            <a
              href="/pages/NextGenInnovationHub2026"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors font-semibold"
            >
              Explore Innovations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;