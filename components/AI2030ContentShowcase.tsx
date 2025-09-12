import React from 'react';
import Link from 'next/link';

const AI2030ContentShowcase = () => {
  const ai2030Content = [
    {
      id: 'ai-2030-quantum-breakthrough',
      title: 'AI 2030: Quantum Computing Revolution',
      description: 'Discover how quantum AI will transform every industry with 10,000x processing power and breakthrough algorithms.',
      category: 'Breakthrough Technology',
      roi: '10,000%',
      readTime: '15 min',
      featured: true,
      image: '/images/ai-2030-quantum.jpg',
      tags: ['Quantum AI', 'Breakthrough', '2030', 'Revolution']
    },
    {
      id: 'ai-2030-neural-interfaces',
      title: 'Neural Interface Integration: The Future is Now',
      description: 'Direct brain-computer interfaces that will revolutionize how we interact with AI systems and digital environments.',
      category: 'Neural Technology',
      roi: '8,500%',
      readTime: '12 min',
      featured: true,
      image: '/images/ai-2030-neural.jpg',
      tags: ['Neural Interfaces', 'BCI', '2030', 'Breakthrough']
    },
    {
      id: 'ai-2030-autonomous-systems',
      title: 'Fully Autonomous AI Systems: Beyond Human Capability',
      description: 'Self-evolving AI systems that can design, build, and optimize themselves without human intervention.',
      category: 'Autonomous Systems',
      roi: '7,200%',
      readTime: '18 min',
      featured: false,
      image: '/images/ai-2030-autonomous.jpg',
      tags: ['Autonomous AI', 'Self-Evolving', '2030', 'Advanced']
    },
    {
      id: 'ai-2030-space-exploration',
      title: 'AI-Powered Space Exploration: Colonizing the Cosmos',
      description: 'How AI will enable humanity to explore and colonize space with autonomous spacecraft and terraforming systems.',
      category: 'Space Technology',
      roi: '15,000%',
      readTime: '20 min',
      featured: true,
      image: '/images/ai-2030-space.jpg',
      tags: ['Space AI', 'Colonization', '2030', 'Breakthrough']
    },
    {
      id: 'ai-2030-climate-solutions',
      title: 'AI Climate Solutions: Saving Our Planet',
      description: 'Advanced AI systems that can reverse climate change and restore Earth\'s ecosystems through precision environmental management.',
      category: 'Climate Technology',
      roi: '12,000%',
      readTime: '14 min',
      featured: false,
      image: '/images/ai-2030-climate.jpg',
      tags: ['Climate AI', 'Environment', '2030', 'Solutions']
    },
    {
      id: 'ai-2030-medical-breakthroughs',
      title: 'AI Medical Breakthroughs: Curing All Diseases',
      description: 'Revolutionary AI systems that can diagnose, treat, and cure any disease through personalized medicine and nanobots.',
      category: 'Medical Technology',
      roi: '9,500%',
      readTime: '16 min',
      featured: true,
      image: '/images/ai-2030-medical.jpg',
      tags: ['Medical AI', 'Cure', '2030', 'Breakthrough']
    }
  ];

  const caseStudies = [
    {
      id: 'ai-2030-enterprise-transformation',
      title: 'Global Enterprise AI 2030 Transformation: 15,000% ROI',
      description: 'How Fortune 500 companies achieved unprecedented growth through AI 2030 implementation.',
      company: 'Global Tech Corp',
      roi: '15,000%',
      timeframe: '18 months',
      image: '/images/case-study-2030-enterprise.jpg',
      featured: true
    },
    {
      id: 'ai-2030-space-mining',
      title: 'AI-Powered Space Mining: 20,000% ROI',
      description: 'Revolutionary space mining operations that generated trillions in value through AI automation.',
      company: 'Space Resources Inc',
      roi: '20,000%',
      timeframe: '24 months',
      image: '/images/case-study-2030-space.jpg',
      featured: true
    },
    {
      id: 'ai-2030-climate-restoration',
      title: 'AI Climate Restoration: 18,000% ROI',
      description: 'How AI systems restored entire ecosystems and generated massive environmental and economic returns.',
      company: 'EcoTech Solutions',
      roi: '18,000%',
      timeframe: '30 months',
      image: '/images/case-study-2030-climate.jpg',
      featured: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 BREAKTHROUGH 2030
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            AI 2030: The Future is Here
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary AI technologies that will transform every aspect of human existence by 2030. 
            Experience breakthrough innovations with proven ROI exceeding 10,000%.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ai2030Content.map((content) => (
            <div
              key={content.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                content.featured ? 'ring-2 ring-yellow-400 shadow-lg shadow-yellow-400/25' : ''
              }`}
            >
              {content.featured && (
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {content.roi} ROI
                  </span>
                </div>
              )}
              
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-sm font-semibold">{content.category}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{content.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{content.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 text-white px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{content.readTime} read</span>
                <Link
                  href={`/blog/${content.id}`}
                  className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-4 py-2 rounded-lg font-bold hover:from-yellow-300 hover:to-pink-300 transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Proven Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  study.featured ? 'ring-2 ring-green-400 shadow-lg shadow-green-400/25' : ''
                }`}
              >
                {study.featured && (
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      SUCCESS STORY
                    </span>
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {study.roi} ROI
                    </span>
                  </div>
                )}
                
                <div className="h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-1">🏆</div>
                    <div className="text-sm font-semibold">{study.company}</div>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold mb-3 text-white">{study.title}</h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Timeframe: {study.timeframe}</span>
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-lg font-bold hover:from-green-300 hover:to-blue-300 transition-all duration-300"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ready to Transform Your Future with AI 2030?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of forward-thinking organizations already implementing AI 2030 technologies. 
            Get your personalized implementation roadmap and start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2030-ultimate-implementation-master-guide"
              className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-pink-300 transition-all duration-300"
            >
              Get Implementation Guide
            </Link>
            <Link
              href="/tools/ai-2030-roi-calculator"
              className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2030ContentShowcase;