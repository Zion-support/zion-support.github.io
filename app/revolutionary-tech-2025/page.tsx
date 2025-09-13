import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import { ArrowRight, ExternalLink, Star, Clock, Users, TrendingUp, Download, Share2, Zap, Brain, Cpu, Database, Shield, Globe } from 'lucide-react';

const RevolutionaryTech2025Page: React.FC = () => {
  const techCategories = [
    {
      id: 1,
      title: "AI-Powered Automation",
      description: "Intelligent systems that automate complex processes with human-level decision making",
      icon: Brain,
      color: "from-blue-500 to-purple-500",
      solutions: 25,
      impact: "85% efficiency gain"
    },
    {
      id: 2,
      title: "Edge Computing",
      description: "Ultra-fast processing at the edge for real-time applications and IoT devices",
      icon: Cpu,
      color: "from-green-500 to-teal-500",
      solutions: 18,
      impact: "10x faster processing"
    },
    {
      id: 3,
      title: "Quantum Databases",
      description: "Next-generation data storage and retrieval with quantum-enhanced performance",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      solutions: 12,
      impact: "99.99% uptime"
    },
    {
      id: 4,
      title: "Zero-Trust Security",
      description: "Advanced security frameworks that protect against evolving cyber threats",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      solutions: 20,
      impact: "99.9% threat detection"
    },
    {
      id: 5,
      title: "Distributed Systems",
      description: "Scalable architectures that work seamlessly across global networks",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      solutions: 15,
      impact: "Global scalability"
    },
    {
      id: 6,
      title: "Real-time Processing",
      description: "Ultra-low latency systems for mission-critical applications",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      solutions: 22,
      impact: "Sub-millisecond response"
    }
  ];

  const featuredSolutions = [
    {
      id: 1,
      title: "Neural Process Automation",
      description: "AI-powered automation that learns and adapts to complex business processes without human intervention.",
      category: "AI-Powered Automation",
      readTime: "20 min",
      views: "45.2K",
      rating: 4.9,
      featured: true,
      image: "/api/placeholder/600/300",
      benefits: ["85% efficiency gain", "60% cost reduction", "99.9% accuracy"]
    },
    {
      id: 2,
      title: "Quantum-Enhanced Analytics",
      description: "Revolutionary data analytics powered by quantum computing for unprecedented insights.",
      category: "Quantum Databases",
      readTime: "25 min",
      views: "38.7K",
      rating: 4.8,
      featured: true,
      image: "/api/placeholder/600/300",
      benefits: ["10,000x faster queries", "Unlimited scalability", "Real-time insights"]
    },
    {
      id: 3,
      title: "Edge AI Deployment Platform",
      description: "Complete platform for deploying AI models at the edge with minimal latency and maximum performance.",
      category: "Edge Computing",
      readTime: "30 min",
      views: "52.1K",
      rating: 4.9,
      featured: true,
      image: "/api/placeholder/600/300",
      benefits: ["Sub-10ms latency", "Offline capability", "Auto-scaling"]
    }
  ];

  const implementationGuides = [
    {
      id: 1,
      title: "AI Implementation Roadmap 2025",
      description: "Step-by-step guide to implementing AI solutions in your organization",
      readTime: "45 min",
      difficulty: "Intermediate",
      downloads: "12.3K",
      rating: 4.8
    },
    {
      id: 2,
      title: "Edge Computing Architecture Guide",
      description: "Complete guide to building scalable edge computing infrastructure",
      readTime: "35 min",
      difficulty: "Advanced",
      downloads: "8.9K",
      rating: 4.7
    },
    {
      id: 3,
      title: "Quantum Computing Primer",
      description: "Introduction to quantum computing and its business applications",
      readTime: "40 min",
      difficulty: "Beginner",
      downloads: "15.6K",
      rating: 4.9
    },
    {
      id: 4,
      title: "Security Framework Implementation",
      description: "Implementing zero-trust security across your entire infrastructure",
      readTime: "50 min",
      difficulty: "Advanced",
      downloads: "9.4K",
      rating: 4.6
    }
  ];

  return (
    <ErrorBoundary>
      <SEO 
        title="Revolutionary Technology 2025 - Zion Tech Group"
        description="Discover the most advanced technological breakthroughs that are reshaping industries, transforming businesses, and creating unprecedented opportunities for growth and innovation."
        keywords="revolutionary technology 2025, AI automation, edge computing, quantum databases, zero-trust security, distributed systems"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Revolutionary Technology 2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover the most advanced technological breakthroughs that are reshaping industries, 
                transforming businesses, and creating unprecedented opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="#solutions" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Get Implementation Help
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Categories */}
        <section id="solutions" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore cutting-edge technologies that are transforming businesses and industries worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-cyan-400 font-semibold">
                          {category.solutions} Solutions
                        </span>
                        <span className="text-green-400 text-sm font-medium">
                          {category.impact}
                        </span>
                      </div>
                      <Link 
                        to={`/tech-category/${category.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful and innovative technology solutions that are driving business transformation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredSolutions.map((solution) => (
                <div key={solution.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/80 text-white text-sm font-medium rounded-full">
                        {solution.category}
                      </span>
                    </div>
                    {solution.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center text-orange-400 text-sm">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          Featured
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white/80">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{solution.readTime}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {solution.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.benefits.map((benefit, index) => (
                          <span key={index} className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{solution.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{solution.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/solution/${solution.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                      >
                        View Solution
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Guides */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Implementation Guides
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Step-by-step guides to help you implement revolutionary technologies in your organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {implementationGuides.map((guide) => (
                <div key={guide.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full">
                      {guide.difficulty}
                    </span>
                    <span className="text-sm text-gray-400">{guide.downloads} downloads</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {guide.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{guide.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{guide.rating}</span>
                      </div>
                    </div>
                    <Link 
                      to={`/guide/${guide.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Implement Revolutionary Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our revolutionary technology solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Implementation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/case-studies" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default RevolutionaryTech2025Page;