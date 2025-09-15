import React from 'react';

const NewContentShowcase2026: React.FC = () => {
  const newContent = [
    {
      title: "Advanced Robotics 2026",
      description: "Revolutionary autonomous robotics with human-like intelligence and seamless collaboration",
      icon: "🤖",
      link: "/pages/AdvancedRobotics2026",
      gradient: "from-blue-600 to-purple-600",
      features: ["Cognitive Intelligence", "Advanced Mobility", "Human Collaboration"]
    },
    {
      title: "Space Technology Innovation",
      description: "Pioneering space technologies for interplanetary exploration and colonization",
      icon: "🚀",
      link: "/pages/SpaceTechInnovation2026",
      gradient: "from-cyan-600 to-purple-600",
      features: ["Mars Colonization", "Lunar Gateway", "Interstellar Travel"]
    },
    {
      title: "Biotech Revolution 2026",
      description: "Groundbreaking gene editing, synthetic biology, and personalized medicine",
      icon: "🧬",
      link: "/pages/BiotechRevolution2026",
      gradient: "from-green-600 to-emerald-600",
      features: ["Precision Gene Editing", "Synthetic Biology", "Personalized Medicine"]
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Next-generation data analytics with AI-powered insights and predictive modeling",
      icon: "📊",
      link: "/pages/AdvancedAnalyticsDashboard2026",
      gradient: "from-indigo-600 to-pink-600",
      features: ["Real-time Analytics", "Predictive Modeling", "AI Insights"]
    },
    {
      title: "Comprehensive Tech Insights",
      description: "In-depth analysis of emerging technologies and their impact on industries",
      icon: "🔍",
      link: "/pages/ComprehensiveTechInsights2026",
      gradient: "from-purple-600 to-pink-600",
      features: ["Market Analysis", "Trend Forecasting", "Technology Reviews"]
    },
    {
      title: "Revolutionary Tech Blog",
      description: "Latest insights, breakthroughs, and expert opinions on cutting-edge technology",
      icon: "📚",
      link: "/pages/RevolutionaryTechBlog2026",
      gradient: "from-orange-600 to-red-600",
      features: ["Expert Analysis", "Industry News", "Innovation Spotlights"]
    }
  ];

  return (
    <div className="w-full">
      {/* Main Showcase Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BRAND NEW CONTENT • JANUARY 2026
            </div>
            <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Showcase 2026</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the future with our groundbreaking new content covering advanced robotics, 
              space technology, biotechnology, and cutting-edge analytics
            </p>
          </div>
          
          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-xl font-bold text-center mb-2">Advanced Robotics</h3>
              <p className="text-cyan-100 text-center text-sm mb-4">Human-like intelligence and collaboration</p>
              <a href="/pages/AdvancedRobotics2026" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
                Explore →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🚀</div>
              <h3 className="text-xl font-bold text-center mb-2">Space Technology</h3>
              <p className="text-purple-100 text-center text-sm mb-4">Interplanetary exploration and colonization</p>
              <a href="/pages/SpaceTechInnovation2026" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
                Explore →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧬</div>
              <h3 className="text-xl font-bold text-center mb-2">Biotechnology</h3>
              <p className="text-emerald-100 text-center text-sm mb-4">Gene editing and personalized medicine</p>
              <a href="/pages/BiotechRevolution2026" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
                Explore →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newContent.map((content, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{content.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{content.title}</h3>
              <p className="text-gray-600 mb-6">{content.description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {content.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href={content.link} 
              className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
            >
              Explore {content.title} →
            </a>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">📚 Additional Resources</h3>
          <p className="text-xl text-gray-600">Dive deeper into the future of technology</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="/pages/ComprehensiveCaseStudies2026" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-3">📈</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h4>
            <p className="text-sm text-gray-600">Real-world implementations and success stories</p>
          </a>
          
          <a href="/pages/TechTrends2026" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Tech Trends</h4>
            <p className="text-sm text-gray-600">Latest trends and market analysis</p>
          </a>
          
          <a href="/pages/InnovationShowcase2026" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-3">💡</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation Showcase</h4>
            <p className="text-sm text-gray-600">Cutting-edge innovations and breakthroughs</p>
          </a>
          
          <a href="/pages/ComprehensiveBlog2026" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-3">📝</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Tech Blog</h4>
            <p className="text-sm text-gray-600">Expert insights and industry news</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;