import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2025: React.FC = () => {
  const highlights = [
    {
      title: "🎭 Multimodal AI Revolution",
      description: "Unified vision-language-audio processing with 98% accuracy",
      link: "/blog/multimodal-ai-revolution-2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "⛓️ Blockchain-AI Integration",
      description: "Trustless intelligence with decentralized governance",
      link: "/blog/blockchain-ai-integration-2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "🌱 Green AI & Sustainability",
      description: "Carbon-neutral ML with 90% emissions reduction",
      link: "/blog/green-ai-sustainability-2025",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "🤖 AutoML & Self-Improving Systems",
      description: "AI that designs and optimizes itself continuously",
      link: "/blog/automl-self-improving-systems-2025",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "🔮 Predictive Maintenance AI",
      description: "99.9% uptime with self-healing infrastructure",
      link: "/blog/predictive-maintenance-ai-2025",
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "🎯 AI Talent Acquisition",
      description: "Automated hiring with 95% candidate match accuracy",
      link: "/blog/ai-talent-acquisition-2025",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🚀 NEW CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Discover breakthrough AI innovations, quantum computing advances, and autonomous systems that are reshaping the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {highlight.title.split(' ')[0]}
                </div>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  NEW
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {highlight.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {highlight.description}
              </p>

              <Link
                to={highlight.link}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors group-hover:bg-white/30"
              >
                Read Full Article
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/content"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
          >
            Explore All New Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;