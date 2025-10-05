import React from 'react';
import { Link } from 'react-router-dom';

const January2026RevolutionaryContentBanner: React.FC = () => {
  const revolutionaryContent = [
    {
      title: 'Next-Generation Enterprise Automation: The 2026 AI Revolution',
      description: '98% Automation Rate, 1000x Processing Speed, $2.5B Cost Savings',
      slug: 'ai-2026-next-generation-enterprise-automation',
      category: 'AI Innovation',
      emoji: '🚀',
      highlight: 'BREAKTHROUGH',
      impact: '98% Automation',
      type: 'blog',
      readTime: '15 min',
    },
    {
      title: 'Quantum AI Breakthrough: Revolutionary Computing Paradigm',
      description: '10^18 Operations/sec, 99.9% Accuracy, $10B Market Value',
      slug: 'quantum-ai-breakthrough-2026-revolutionary-computing',
      category: 'Quantum Computing',
      emoji: '⚡',
      highlight: 'REVOLUTIONARY',
      impact: '10^18 Ops/sec',
      type: 'case-study',
      readTime: '22 min',
    },
    {
      title: 'Autonomous Neural Networks: Self-Evolving AI Systems',
      description: '99.97% Accuracy, Self-Healing, Infinite Scalability',
      slug: 'autonomous-neural-networks-2026-self-evolving-ai',
      category: 'Neural Networks',
      emoji: '🧠',
      highlight: 'INNOVATION',
      impact: '99.97% Accuracy',
      type: 'research',
      readTime: '18 min',
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🔥 JANUARY 2026 REVOLUTIONARY CONTENT</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Discover breakthrough AI innovations, quantum computing advances, and autonomous systems that are reshaping the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {revolutionaryContent.map((content, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{content.emoji}</div>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  {content.highlight}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {content.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {content.description}
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{content.impact}</div>
                  <div className="text-sm text-blue-200">Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">{content.readTime}</div>
                  <div className="text-sm text-blue-200">Read Time</div>
                </div>
              </div>

              <div className="mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {content.category}
                </span>
              </div>

              <Link
                to={`/${content.type}/${content.slug}`}
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
            Explore All Revolutionary Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default January2026RevolutionaryContentBanner;