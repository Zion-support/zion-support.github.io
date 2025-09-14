"use client";
import React{ useState } from 'react';
import Link from 'next/link';
import { 
  Search
  Filter
  Brain
  Atom
  Bot
  Zap
  TrendingUp,
  Star,
  ArrowRight,
  Clock,
  Users,
  Award,
  Lightbulb,
  Shield,
  Globe,
  Cpu
} from 'lucide-react';

const NewContentDiscoveryWidget2026 = () => {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2026 Breakthrough Showcase",
      description: "Discover revolutionary AI breakthroughs including quantum-enhanced neural networks and transcendent intelligence platforms.",
      category: "ai-breakthroughs",
      icon: <Brain className="h-6 w-6" />,
      url: "/ai-2026-breakthrough-showcase",
      tags: ["AI"Neural Networks"Quantum AI"Transcendent Intelligence"],
      readTime: "8 min read",
      featured: true,
      stats: { views: "25K"rating: 4.9 }
    },
    {
      id: 2,
      title: "Quantum Computing Solutions 2026",
      description: "Explore error-corrected quantum computersquantum machine learningand quantum-AI fusion technologies.",
      category: "quantum-computing",
      icon: <Atom className="h-6 w-6" />,
      url: "/quantum-computing-solutions-2026",
      tags: ["Quantum Computing"Error Correction"Quantum ML"Quantum Internet"],
      readTime: "12 min read",
      featured: true,
      stats: { views: "18K"rating: 4.8 }
    },
    {
      id: 3,
      title: "Advanced Automation Solutions 2026",
      description: "Revolutionary automation systems including intelligent process automation and autonomous business systems.",
      category: "automation",
      icon: <Bot className="h-6 w-6" />,
      url: "/advanced-automation-solutions-2026",
      tags: ["Automation"Process Automation"Autonomous Systems"Workflow AI"],
      readTime: "10 min read",
      featured: true,
      stats: { views: "22K"rating: 4.9 }
    },
    {
      id: 4,
      title: "Quantum-AI Fusion Breakthroughs",
      description: "Hybrid systems combining quantum computing with artificial intelligence for unprecedented capabilities.",
      category: "quantum-computing",
      icon: <Cpu className="h-6 w-6" />,
      url: "/quantum-ai-fusion-2026-breakthrough",
      tags: ["Quantum AI"Hybrid Systems"Computational Power"AI Enhancement"],
      readTime: "15 min read",
      featured: false,
      stats: { views: "12K"rating: 4.7 }
    },
    {
      id: 5,
      title: "Autonomous Business Intelligence",
      description: "Self-evolving business intelligence systems that make decisions and optimize operations autonomously.",
      category: "ai-breakthroughs",
      icon: <Lightbulb className="h-6 w-6" />,
      url: "/autonomous-business-intelligence-2026",
      tags: ["Business Intelligence"Autonomous Systems"Decision Making"Self-Evolution"],
      readTime: "9 min read",
      featured: false,
      stats: { views: "15K"rating: 4.6 }
    },
    {
      id: 6,
      title: "Quantum Security Revolution",
      description: "Unbreakable quantum cryptography and quantum key distribution systems for ultimate security.",
      category: "quantum-computing",
      icon: <Shield className="h-6 w-6" />,
      url: "/quantum-security-revolution-2026",
      tags: ["Quantum Security"Cryptography"Key Distribution"Unbreakable Encryption"],
      readTime: "11 min read",
      featured: false,
      stats: { views: "8K"rating: 4.8 }
    }
  ];

  const categories = [
    { id: 'all'name: 'All Content'icon: <Globe className="h-4 w-4" /> },
    { id: 'ai-breakthroughs'name: 'AI Breakthroughs'icon: <Brain className="h-4 w-4" /> },
    { id: 'quantum-computing'name: 'Quantum Computing'icon: <Atom className="h-4 w-4" /> },
    { id: 'automation'name: 'Automation'icon: <Bot className="h-4 w-4" /> }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredContent = filteredContent.filter(item => item.featured);
  const regularContent = filteredContent.filter(item => !item.featured);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Revolutionary Content
          </h2>
          <p className="text-gray-600">
            Explore the latest AI breakthroughsquantum computing solutionsand automation technologies
          </p>
        </div>
        <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">
          <Star className="h-4 w-4 mr-2" />
          New 2026
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search contentagsor technologies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span className="ml-2 hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Content */}
      {featuredContent.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Star className="h-5 w-5 mr-2 text-yellow-500" />
            Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((item) => (
              <div key={item.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:border-blue-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.readTime}
                        <span className="mx-2">•</span>
                        <Users className="h-3 w-3 mr-1" />
                        {item.stats.views}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(03).map((tagindex) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        {item.stats.rating}
                      </div>
                    </div>
                    <Link 
                      href={item.url}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Content */}
      {regularContent.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
            Latest Content
          </h3>
          <div className="space-y-4">
            {regularContent.map((item) => (
              <div key={item.id} className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.readTime}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(04).map((tagindex) => (
                          <span key={index} className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full border">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={item.url}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-500">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* View All CTA */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <Link 
          href="/content-showcase"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
        >
          <Globe className="h-5 w-5 mr-2" />
          View All Content
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default NewContentDiscoveryWidget2026;