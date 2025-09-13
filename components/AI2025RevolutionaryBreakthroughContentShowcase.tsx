import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Cpu, Network, Shield, TrendingUp } from 'lucide-react';

const AI2025RevolutionaryBreakthroughContentShowcase: React.FC = () => {
  const breakthroughContent = [
    {
      id: 1,
      title: "Neural Architecture Revolution 2025",
      description: "Discover the latest breakthroughs in neural network architectures that are revolutionizing AI capabilities",
      category: "AI Architecture",
      icon: Brain,
      featured: true,
      readTime: "8 min read",
      publishDate: "2025-01-15",
      tags: ["Neural Networks", "Deep Learning", "AI Research"],
      link: "/ai-2025-breakthrough-content-showcase/neural-architecture-revolution"
    },
    {
      id: 2,
      title: "Quantum-AI Fusion Breakthrough",
      description: "Explore the convergence of quantum computing and artificial intelligence creating unprecedented processing power",
      category: "Quantum AI",
      icon: Cpu,
      featured: true,
      readTime: "12 min read",
      publishDate: "2025-01-14",
      tags: ["Quantum Computing", "AI Fusion", "Next-Gen Processing"],
      link: "/ai-2025-breakthrough-content-showcase/quantum-ai-fusion"
    },
    {
      id: 3,
      title: "Autonomous Systems Revolution",
      description: "Learn about the next generation of autonomous systems that can operate independently with human-level decision making",
      category: "Autonomous Systems",
      icon: Zap,
      featured: true,
      readTime: "10 min read",
      publishDate: "2025-01-13",
      tags: ["Autonomous AI", "Self-Learning", "Decision Making"],
      link: "/ai-2025-breakthrough-content-showcase/autonomous-systems"
    },
    {
      id: 4,
      title: "Edge AI Transformation",
      description: "Discover how edge AI is transforming industries with real-time processing capabilities at the network edge",
      category: "Edge Computing",
      icon: Network,
      featured: false,
      readTime: "6 min read",
      publishDate: "2025-01-12",
      tags: ["Edge Computing", "Real-time AI", "IoT Integration"],
      link: "/ai-2025-breakthrough-content-showcase/edge-ai-transformation"
    },
    {
      id: 5,
      title: "AI Security & Trust Framework",
      description: "Comprehensive guide to building secure and trustworthy AI systems for enterprise applications",
      category: "AI Security",
      icon: Shield,
      featured: false,
      readTime: "9 min read",
      publishDate: "2025-01-11",
      tags: ["AI Security", "Trust Framework", "Enterprise AI"],
      link: "/ai-2025-breakthrough-content-showcase/ai-security-framework"
    },
    {
      id: 6,
      title: "Predictive Analytics Revolution",
      description: "Advanced predictive analytics techniques that are transforming business intelligence and decision making",
      category: "Analytics",
      icon: TrendingUp,
      featured: false,
      readTime: "7 min read",
      publishDate: "2025-01-10",
      tags: ["Predictive Analytics", "Business Intelligence", "Data Science"],
      link: "/ai-2025-breakthrough-content-showcase/predictive-analytics"
    }
  ];

  const featuredContent = breakthroughContent.filter(content => content.featured);
  const regularContent = breakthroughContent.filter(content => !content.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2025 Revolutionary Breakthrough Content
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore the most groundbreaking AI developments and innovations that are shaping the future of technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              Latest Research
            </span>
            <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
              Industry Insights
            </span>
            <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
              Future Predictions
            </span>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Breakthrough Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content) => {
              const IconComponent = content.icon;
              return (
                <div
                  key={content.id}
                  className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-600/20 rounded-xl mr-4">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-purple-300 text-sm font-medium">
                        {content.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs mt-1">
                        <span>{content.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{content.publishDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={content.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regular Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Latest AI Breakthrough Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularContent.map((content) => {
              const IconComponent = content.icon;
              return (
                <div
                  key={content.id}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                      <IconComponent className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-blue-300 text-sm font-medium">
                        {content.category}
                      </span>
                      <div className="text-gray-400 text-xs">
                        {content.readTime} • {content.publishDate}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {content.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={content.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with AI Breakthroughs
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to the latest AI research, breakthrough technologies, and industry insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-2025-breakthrough-content-showcase"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link
                to="/newsletter-signup"
                className="border border-white/20 hover:border-purple-500/50 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-600/10"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025RevolutionaryBreakthroughContentShowcase;