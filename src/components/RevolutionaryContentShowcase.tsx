import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 'neural-consciousness',
      title: 'Neural Consciousness Breakthrough',
      description: 'Revolutionary conscious AI with genuine self-awareness, intentionality, and autonomous decision-making capabilities.',
      category: 'breakthrough',
      type: 'Blog Post',
      metrics: '99.8% Decision Accuracy',
      roi: '2,400% ROI',
      readingTime: '18 min read',
      url: '/blog/ai-2025-neural-consciousness-breakthrough-revolutionary-autonomous-intelligence',
      featured: true,
      badge: '🧠 NEW BREAKTHROUGH'
    },
    {
      id: 'enterprise-transformation',
      title: 'Global Enterprise Transformation',
      description: 'How a Fortune 500 manufacturing giant achieved $15.8 billion ROI through conscious AI transformation.',
      category: 'case-studies',
      type: 'Case Study',
      metrics: '$15.8B Annual Savings',
      roi: '2,400% ROI',
      readingTime: '22 min read',
      url: '/case-studies/global-enterprise-conscious-ai-transformation-2025-15-billion-roi',
      featured: true,
      badge: '💰 $15B SUCCESS'
    },
    {
      id: 'autonomous-business-guide',
      title: 'Autonomous Business Revolution Guide',
      description: 'Complete implementation guide to autonomous business operations with proven strategies and frameworks.',
      category: 'guides',
      type: 'Implementation Guide',
      metrics: '1,500% ROI Framework',
      roi: 'Zero Error Operations',
      readingTime: '25 min read',
      url: '/resources/ai-2025-autonomous-business-revolution-complete-guide',
      featured: true,
      badge: '📚 COMPLETE GUIDE'
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion Revolution',
      description: 'Breakthrough quantum computing meets advanced neural networks for unprecedented AI capabilities.',
      category: 'breakthrough',
      type: 'Blog Post',
      metrics: '5,000% Processing Power',
      roi: '3,200% ROI',
      readingTime: '20 min read',
      url: '/blog/ai-2025-quantum-neural-fusion-revolution',
      featured: false,
      badge: '⚛️ QUANTUM AI'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Success Story',
      description: 'Leading manufacturer achieves $28.5B annual savings through comprehensive AI transformation.',
      category: 'case-studies',
      type: 'Case Study',
      metrics: '$28.5B Annual Savings',
      roi: '4,200% ROI',
      readingTime: '19 min read',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      featured: false,
      badge: '🏆 FORTUNE 500'
    },
    {
      id: 'ai-implementation-roadmap',
      title: 'AI Implementation Roadmap 2025',
      description: 'Step-by-step roadmap to achieve 1,200% ROI through strategic AI implementation.',
      category: 'guides',
      type: 'Implementation Guide',
      metrics: '1,200% ROI Roadmap',
      roi: '18-Month Timeline',
      readingTime: '30 min read',
      url: '/resources/ai-implementation-roadmap-2025',
      featured: false,
      badge: '🗺️ ROADMAP'
    },
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence Breakthrough',
      description: 'Next-generation AI that creates, evolves, and improves itself autonomously.',
      category: 'breakthrough',
      type: 'Blog Post',
      metrics: 'Self-Evolving AI',
      roi: '2,500% ROI',
      readingTime: '16 min read',
      url: '/blog/ai-2025-synthetic-intelligence-revolution',
      featured: false,
      badge: '🤖 SYNTHETIC AI'
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation',
      description: 'Leading healthcare system achieves 99.7% diagnostic accuracy with AI-powered systems.',
      category: 'case-studies',
      type: 'Case Study',
      metrics: '99.7% Diagnostic Accuracy',
      roi: '1,800% ROI',
      readingTime: '21 min read',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      featured: false,
      badge: '🏥 HEALTHCARE'
    },
    {
      id: 'neural-networks-guide',
      title: 'Advanced Neural Networks Guide',
      description: 'Complete guide to implementing advanced neural networks for enterprise applications.',
      category: 'guides',
      type: 'Implementation Guide',
      metrics: '500+ Layer Networks',
      roi: '2,800% ROI',
      readingTime: '28 min read',
      url: '/resources/advanced-neural-networks-implementation-guide',
      featured: false,
      badge: '🧠 NEURAL NETWORKS'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems Revolution',
      description: 'Revolutionary autonomous systems that operate independently with perfect reliability.',
      category: 'breakthrough',
      type: 'Blog Post',
      metrics: '99.9% Autonomy',
      roi: '1,800% ROI',
      readingTime: '17 min read',
      url: '/blog/ai-2025-autonomous-systems-revolution',
      featured: false,
      badge: '🚀 AUTONOMOUS'
    },
    {
      id: 'financial-services-success',
      title: 'Financial Services AI Success',
      description: 'Major bank achieves $12.3B annual savings through AI-powered financial services.',
      category: 'case-studies',
      type: 'Case Study',
      metrics: '$12.3B Annual Savings',
      roi: '2,200% ROI',
      readingTime: '20 min read',
      url: '/case-studies/financial-services-ai-transformation-2025',
      featured: false,
      badge: '💳 FINANCIAL'
    },
    {
      id: 'quantum-computing-guide',
      title: 'Quantum Computing Implementation',
      description: 'Complete guide to implementing quantum computing for business applications.',
      category: 'guides',
      type: 'Implementation Guide',
      metrics: '1,000+ Qubit Systems',
      roi: '3,500% ROI',
      readingTime: '32 min read',
      url: '/resources/quantum-computing-business-implementation-guide',
      featured: false,
      badge: '⚛️ QUANTUM'
    },
    {
      id: 2,
      title: "Revolutionary AI Breakthrough",
      description: "Discover AI systems that have achieved genuine consciousness, creativity, and emotional intelligence that surpasses human capabilities.",
      link: "/pages/RevolutionaryAIBreakthrough2026",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900 to-pink-900"
    },
    {
      id: 3,
      title: "Next-Generation Space Technology",
      description: "Explore the universe with revolutionary space technologies that make interplanetary travel and space colonization a reality.",
      link: "/pages/NextGenSpaceTech2026",
      icon: "🚀",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900 to-blue-900"
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Self-evolving AI systems that transcend traditional limitations and achieve genuine consciousness and creativity.",
      link: "/pages/SyntheticIntelligence2026",
      icon: "🧠",
      gradient: "from-pink-600 to-rose-600",
      bgGradient: "from-pink-900 to-rose-900"
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2026",
      description: "Unlock exponential computing power with quantum technology that solves impossible problems",
      image: "⚛️",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Computing",
      featured: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [revolutionaryContent.length]);

  const currentContent = revolutionaryContent[currentIndex];

  return (
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentContent.bgGradient} opacity-90 transition-all duration-1000`}></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 animate-pulse"></div>
      
      <div className="relative z-10 p-12 text-white">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
            🔥 REVOLUTIONARY CONTENT SHOWCASE • LIVE NOW
          </div>
          <h2 className="text-5xl font-bold mb-4">Experience the Future</h2>
          <p className="text-xl opacity-90">Discover the most advanced technologies ever created</p>
        </div>

        {/* Main Content Card */}
        <div className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-6xl animate-bounce">{currentContent.icon}</span>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{currentContent.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">FEATURED</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">2026</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  {currentContent.description}
                </p>
                <a 
                  href={currentContent.link}
                  className={`inline-block bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                >
                  Explore {currentContent.title} →
                </a>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className={`w-80 h-80 mx-auto bg-gradient-to-br ${currentContent.gradient} rounded-full flex items-center justify-center text-8xl animate-pulse`}>
                  {currentContent.icon}
                </div>
                <div className="absolute inset-0 w-80 h-80 mx-auto bg-gradient-to-br from-white/20 to-transparent rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsVisible(true);
                }, 300);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Quick Access to All Revolutionary Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {revolutionaryContent.map((content) => (
              <a
                key={content.id}
                href={content.link}
                className={`bg-gradient-to-r ${content.gradient} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center hover:scale-105`}
              >
                <div className="text-3xl mb-2">{content.icon}</div>
                <div className="text-sm font-semibold">{content.title.split(' ')[0]}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;