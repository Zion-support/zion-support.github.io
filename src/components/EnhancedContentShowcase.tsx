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
          description: "Direct brain-computer interface technology",
          link: "/pages/RevolutionaryTechBreakthrough2025",
          stats: "Real-time",
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
          description: "Self-evolving AI with independent decision making",
          link: "/pages/NextGenInnovationHub2026",
          stats: "24/7 Active",
          gradient: "from-indigo-600 to-purple-600"
        },
        {
          title: "Metaverse Integration",
          description: "Seamless virtual and physical world convergence",
          link: "/pages/NextGenInnovationHub2026",
          stats: "Infinite Scale",
          gradient: "from-violet-600 to-fuchsia-600"
        },
        {
          title: "Biotech Revolution",
          description: "AI-powered biological system optimization",
          link: "/pages/NextGenInnovationHub2026",
          stats: "Life Extension",
          gradient: "from-green-600 to-emerald-600"
        }
      ]
    },
    showcases: {
      title: "Ultimate Showcases",
      icon: "🎯",
      color: "blue",
      content: [
        {
          title: "Interactive Demos",
          description: "Hands-on experience with cutting-edge technology",
          link: "/pages/UltimateTechShowcase2026",
          stats: "Live Demo",
          gradient: "from-blue-600 to-cyan-600"
        },
        {
          title: "Technology Previews",
          description: "Exclusive access to future innovations",
          link: "/pages/UltimateTechShowcase2026",
          stats: "Exclusive",
          gradient: "from-rose-600 to-pink-600"
        },
        {
          title: "Industry Impact",
          description: "Real-world applications and transformations",
          link: "/pages/UltimateTechShowcase2026",
          stats: "Global Impact",
          gradient: "from-orange-600 to-red-600"
        }
      ]
    }
  };

  const colorClasses = {
    purple: {
      bg: "bg-purple-500",
      text: "text-purple-600",
      border: "border-purple-200"
    },
    indigo: {
      bg: "bg-indigo-500",
      text: "text-indigo-600",
      border: "border-indigo-200"
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-200"
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold text-white mb-6">
            🚀 ENHANCED CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of cutting-edge technology content, 
            breakthrough innovations, and interactive showcases.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {Object.entries(contentCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `${colorClasses[category.color as keyof typeof colorClasses].bg} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${item.gradient} text-white mb-3`}>
                  {item.stats}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
              </div>
              <a
                href={item.link}
                className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
              >
                Explore Now
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of innovators exploring the next generation of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pages/RevolutionaryTechBreakthrough2025"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Start Exploring
              </a>
              <a
                href="/pages/UltimateTechShowcase2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                View All Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;