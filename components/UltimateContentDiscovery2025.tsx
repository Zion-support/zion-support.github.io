import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Star, 
  Clock, 
  Users,
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  Calculator,
  BarChart3,
  Lightbulb,
  Zap,
  Target,
  Award
} from 'lucide-react';

const UltimateContentDiscovery2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Content', icon: BookOpen },
    { id: 'ai-2025', label: 'AI 2025', icon: Brain },
    { id: 'ai-2026', label: 'AI 2026', icon: Zap },
    { id: 'ai-2030', label: 'AI 2030', icon: Target },
    { id: 'case-studies', label: 'Case Studies', icon: BarChart3 },
    { id: 'guides', label: 'Implementation Guides', icon: FileText },
    { id: 'tools', label: 'AI Tools', icon: Calculator },
    { id: 'webinars', label: 'Webinars', icon: Video },
    { id: 'trends', label: 'Future Trends', icon: TrendingUp }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI 2031 Future Predictions: The Ultimate Breakthrough Guide",
      description: "Discover the revolutionary AI technologies that will transform every industry by 2031. Exclusive insights from leading experts.",
      category: "ai-2030",
      type: "guide",
      rating: 5,
      views: "125K",
      readTime: "15 min",
      isNew: true,
      isBreakthrough: true,
      tags: ["AI", "Future", "Breakthrough", "2031"],
      url: "/blog/ai-2031-future-predictions"
    },
    {
      id: 2,
      title: "10,000% ROI Enterprise Success: Fortune 500 Case Study",
      description: "How a Fortune 500 company achieved unprecedented ROI with our AI solutions. Real numbers, real results.",
      category: "case-studies",
      type: "case-study",
      rating: 5,
      views: "98K",
      readTime: "12 min",
      isNew: true,
      isBreakthrough: true,
      tags: ["ROI", "Enterprise", "Success", "Fortune 500"],
      url: "/case-studies/ai-2031-enterprise-transformation-breakthrough"
    },
    {
      id: 3,
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "Complete toolkit for implementing AI solutions in 2025. Includes templates, checklists, and expert guidance.",
      category: "guides",
      type: "toolkit",
      rating: 5,
      views: "87K",
      readTime: "25 min",
      isNew: true,
      tags: ["Implementation", "Toolkit", "2025", "Guide"],
      url: "/resources/ai-2025-ultimate-implementation-toolkit"
    },
    {
      id: 4,
      title: "Quantum Computing Revolution: The Future of AI",
      description: "Explore how quantum computing will revolutionize AI capabilities and what it means for your business.",
      category: "trends",
      type: "article",
      rating: 5,
      views: "76K",
      readTime: "18 min",
      isNew: false,
      isBreakthrough: true,
      tags: ["Quantum", "Computing", "Revolution", "Future"],
      url: "/blog/ai-2025-quantum-machine-learning-breakthrough"
    },
    {
      id: 5,
      title: "AI ROI Calculator 2026: Measure Your Success",
      description: "Interactive calculator to measure potential ROI from AI implementations. Get personalized projections.",
      category: "tools",
      type: "calculator",
      rating: 5,
      views: "65K",
      readTime: "5 min",
      isNew: true,
      tags: ["ROI", "Calculator", "2026", "Tool"],
      url: "/tools/ai-roi-calculator-2026"
    },
    {
      id: 6,
      title: "Future of Work: AI-Powered Teams Webinar",
      description: "Exclusive webinar featuring industry leaders discussing the future of AI-powered teams and collaboration.",
      category: "webinars",
      type: "webinar",
      rating: 5,
      views: "45K",
      readTime: "60 min",
      isNew: true,
      tags: ["Webinar", "Future", "Teams", "Collaboration"],
      url: "/webinars/future-of-work-ai-powered-teams"
    }
  ];

  const filteredContent = featuredContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return FileText;
      case 'case-study': return BarChart3;
      case 'toolkit': return Lightbulb;
      case 'article': return BookOpen;
      case 'calculator': return Calculator;
      case 'webinar': return Video;
      default: return BookOpen;
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-6 py-3 mb-6">
            <Search className="w-5 h-5" />
            <span className="text-sm font-semibold">ULTIMATE CONTENT DISCOVERY 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Perfect
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Content Match
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive library of AI resources, case studies, and tools. 
            Find exactly what you need to accelerate your AI journey.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search content, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Articles & Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">150+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">AI Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">25+</div>
              <div className="text-gray-600">Webinars</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            const CategoryIcon = categories.find(cat => cat.id === item.category)?.icon || BookOpen;
            
            return (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                      <TypeIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500 capitalize">{item.type.replace('-', ' ')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {item.isNew && (
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {item.isBreakthrough && (
                      <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full">
                        BREAKTHROUGH
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <Link
                  to={item.url}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Content
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our AI experts can help you find the perfect resources for your specific needs. 
            Get personalized recommendations and exclusive access to premium content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Get Personalized Recommendations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/resources"
              className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center gap-2"
            >
              Browse All Resources
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentDiscovery2025;