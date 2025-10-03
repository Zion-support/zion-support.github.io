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
    <div className="text-left">
      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <h2 className="text-left">
            🧠 Advanced Content Discovery Hub
          </h2>
          <p className="text-left">
            Explore our comprehensive library of AI insights, success stories, and cutting-edge solutions. 
            Discover content tailored to your specific needs and industry.
          </p>
        </div>

        {/* Category Filter */}
        <div className="text-left">
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
        <div className="text-left">
          {filteredContent.map((item) => (
            <div 
              key={item.id} 
              className="text-left"
            >
              <div className="text-left">
                {/* Category Badge */}
                <div className="text-left">
                  <span className="text-left">
                    {getCategoryIcon(item.category)} {contentCategories[item.category as keyof typeof contentCategories]}
                  <
                  <span className="text-left">{item.readTime}<
                </div>

                {/* Content Type */}
                <div className="text-left">
                  <span className="text-left">{getTypeIcon(item.type)}<
                  <span className="text-left">
                    {item.type === 'case-study' ? 'Case Study' : item.type}
                  <
                  {item.featured && (
                    <span className="text-left">
                      FEATURED
                    <
                  )}
                </div>

                {/* Title */}
                <h3 className="text-left">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-left">
                  {item.description}
                </p>

                {/* Action Button */}
                <Link 
                  href={item.url}
                  className="text-left"
                >
                  {item.type === 'service' ? 'Explore Service' : 'Read More'}
                  <span className="text-left">→<
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="text-left">
          <h3 className="text-left">
            📈 Content Library Statistics
          </h3>
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">150+</div>
              <div className="text-left">Blog Posts</div>
            </div>
            <div className="text-left">
              <div className="text-left">89+</div>
              <div className="text-left">Case Studies</div>
            </div>
            <div className="text-left">
              <div className="text-left">45+</div>
              <div className="text-left">Services</div>
            </div>
            <div className="text-left">
              <div className="text-left">$2.3T</div>
              <div className="text-left">Total Value Created</div>
            </div>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="text-left">
          <h3 className="text-left">
            🔥 Trending Topics
          </h3>
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">⚛️</div>
              <h4 className="text-left">Quantum AI</h4>
              <p className="text-left">
                Revolutionary quantum-enhanced AI systems delivering 99.97% accuracy
              </p>
            </div>
            <div className="text-left">
              <div className="text-left">🤖</div>
              <h4 className="text-left">Autonomous Operations</h4>
              <p className="text-left">
                Self-healing, self-optimizing business systems achieving 99.99% automation
              </p>
            </div>
            <div className="text-left">
              <div className="text-left">🎨</div>
              <h4 className="text-left">Generative AI</h4>
              <p className="text-left">
                Enterprise transformation with 340% ROI and 89% efficiency gains
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-left">
          <div className="text-left">
            <Link 
              href="/contact"
              className="text-left"
            >
              🚀 Get Personalized Recommendations
              <span className="text-left">→<
            </Link>
          </div>
          <p className="text-left">
            Let our AI experts help you find the perfect content for your transformation journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedContentDiscoveryHub;