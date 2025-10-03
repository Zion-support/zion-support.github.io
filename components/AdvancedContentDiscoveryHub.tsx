import React, { useState } from 'react';
import Link from 'next/link';

const AdvancedContentDiscoveryHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: 'All Content',
    quantum: 'Quantum AI',
    autonomous: 'Autonomous Systems',
    generative: 'Generative AI',
    business: 'Business Intelligence',
    case: 'Case Studies',
    services: 'Services'
  };

  const featuredContent = [
    {
      id: 1,
      title: "Quantum AI Business Intelligence: $847B Breakthrough
      category: "quantum
      type: "blog
      description: "Discover how quantum-enhanced AI is revolutionizing business intelligence with 99.97% accuracy predictions.
      readTime: "12 min read
      featured: true,
      url: "/blog/ai-2025-december-quantum-ai-business-intelligence-breakthrough"
    },
    {
      id: 2,
      title: "Autonomous Enterprise Operations: $2.3T Revolution
      category: "autonomous
      type: "blog
      description: "Transform your business with 99.99% automation, self-healing systems, and continuous optimization.
      readTime: "15 min read
      featured: true,
      url: "/blog/ai-2025-december-autonomous-enterprise-operations-revolution"
    },
    {
      id: 3,
      title: "Generative AI Enterprise Transformation: 2026 Roadmap
      category: "generative
      type: "blog
      description: "Master enterprise generative AI implementation with comprehensive strategy and deployment guide.
      readTime: "18 min read
      featured: true,
      url: "/blog/ai-2025-december-generative-ai-enterprise-transformation-2026"
    },
    {
      id: 4,
      title: "Global Finance: $500B Quantum AI Success
      category: "quantum
      type: "case-study
      description: "Fortune 50 financial services leader achieves 99.97% prediction accuracy and $500B value creation.
      readTime: "20 min read
      featured: true,
      url: "/case-studies/ai-2025-december-global-finance-quantum-ai-transformation-500-billion-success"
    },
    {
      id: 5,
      title: "Manufacturing: $340B Autonomous Operations
      category: "autonomous
      type: "case-study
      description: "Global manufacturer achieves 99.99% process automation and zero-downtime operations.
      readTime: "22 min read
      featured: true,
      url: "/case-studies/ai-2025-december-manufacturing-autonomous-operations-340-billion-success"
    },
    {
      id: 6,
      title: "Quantum AI Business Intelligence Consulting
      category: "services
      type: "service
      description: "End-to-end quantum AI transformation with guaranteed 2,890% ROI and 99.97% accuracy.
      readTime: "Service
      featured: true,
      url: "/services/ai-2025-december-quantum-ai-business-intelligence-consulting"
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'quantum': return '⚛️';
      case 'autonomous': return '🤖';
      case 'generative': return '🎨';
      case 'business': return '📊';
      case 'case': return '🏆';
      case 'services': return '⚡';
      default: return '📚';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'service': return '🛠️';
      default: return '📄';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🧠 Advanced Content Discovery Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI insights, success stories, and cutting-edge solutions. 
            Discover content tailored to your specific needs and industry.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {getCategoryIcon(key)} {label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {getCategoryIcon(item.category)} {contentCategories[item.category as keyof typeof contentCategories]}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>

                {/* Content Type */}
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{getTypeIcon(item.type)}</span>
                  <span className="text-gray-600 font-medium capitalize">
                    {item.type === 'case-study' ? 'Case Study' : item.type}
                  </span>
                  {item.featured && (
                    <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Action Button */}
                <Link 
                  href={item.url}
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  {item.type === 'service' ? 'Explore Service' : 'Read More'}
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📈 Content Library Statistics
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Blog Posts</div>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">89+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">45+</div>
              <div className="text-gray-600">Services</div>
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">$2.3T</div>
              <div className="text-gray-600">Total Value Created</div>
            </div>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            🔥 Trending Topics
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚛️</div>
              <h4 className="font-bold mb-2">Quantum AI</h4>
              <p className="text-blue-200 text-sm">
                Revolutionary quantum-enhanced AI systems delivering 99.97% accuracy
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="font-bold mb-2">Autonomous Operations</h4>
              <p className="text-blue-200 text-sm">
                Self-healing, self-optimizing business systems achieving 99.99% automation
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-bold mb-2">Generative AI</h4>
              <p className="text-blue-200 text-sm">
                Enterprise transformation with 340% ROI and 89% efficiency gains
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-1 rounded-full inline-block">
            <Link 
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center">
              🚀 Get Personalized Recommendations
              <span className="ml-2">→</span>
            </Link>
          </div>
          <p className="text-gray-600 mt-4">
            Let our AI experts help you find the perfect content for your transformation journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedContentDiscoveryHub;