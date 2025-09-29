import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, Star, Zap, Users, Target, Award, ChevronRight } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide';
  category: string;
  readTime: string;
  metrics: {
    primary: string;
    secondary: string;
    label: string;
  };
  href: string;
  featured: boolean;
  new: boolean;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  industry: string[];
}

const recommendations: Recommendation[] = [
  {
    id: 'ai-mega-trends-2026',
    title: 'AI Mega Trends 2026: The Future of Enterprise Intelligence',
    description: 'Discover the 10 mega trends shaping AI in 2026. From autonomous systems to quantum computing, explore how these trends will transform your business.',
    type: 'article',
    category: 'AI Trends',
    readTime: '28 min',
    metrics: { primary: '$12T', secondary: '45%', label: 'Market Value' },
    href: '/blog/ai-2026-mega-trends',
    featured: true,
    new: true,
    tags: ['AI Trends', 'Enterprise', 'Future Tech'],
    difficulty: 'intermediate',
    industry: ['All Industries', 'Technology', 'Manufacturing']
  },
  {
    id: 'ai-transformation-mega-success',
    title: 'AI Transformation Mega Success 2026: $15M ROI in 12 Months',
    description: 'See how a Fortune 500 manufacturing company achieved $15M ROI through comprehensive AI transformation, including autonomous systems and quantum optimization.',
    type: 'case-study',
    category: 'Fortune 500',
    readTime: '18 min',
    metrics: { primary: '$15M', secondary: '95%', label: 'ROI' },
    href: '/case-studies/ai-transformation-mega-success-2026',
    featured: true,
    new: true,
    tags: ['ROI', 'Transformation', 'Fortune 500'],
    difficulty: 'advanced',
    industry: ['Manufacturing', 'Fortune 500', 'Enterprise']
  },
  {
    id: 'ai-agent-orchestration-2026',
    title: 'AI Agent Orchestration 2026: Multi-Agent System Architecture',
    description: 'Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns and enterprise-grade coordination strategies.',
    type: 'guide',
    category: 'AI Orchestration',
    readTime: '22 min',
    metrics: { primary: '95%', secondary: '$5M+', label: 'Automation' },
    href: '/blog/ai-agent-orchestration-2026',
    featured: true,
    new: true,
    tags: ['AI Agents', 'Orchestration', 'Architecture'],
    difficulty: 'advanced',
    industry: ['Technology', 'Software', 'Enterprise']
  },
  {
    id: 'ai-autonomous-enterprise-2026',
    title: 'AI Autonomous Enterprise 2026: Complete Business Transformation Guide',
    description: 'Transform your enterprise with autonomous AI systems. Learn how to achieve 95% automation, $10M+ ROI, and zero-touch operations across all business functions.',
    type: 'guide',
    category: 'Enterprise AI',
    readTime: '32 min',
    metrics: { primary: '95%', secondary: '$10M+', label: 'Automation' },
    href: '/blog/ai-autonomous-enterprise-2026',
    featured: true,
    new: true,
    tags: ['Autonomous', 'Enterprise', 'Transformation'],
    difficulty: 'advanced',
    industry: ['Enterprise', 'All Industries', 'Fortune 500']
  },
  {
    id: 'ai-sustainability-green-tech-2026',
    title: 'AI Sustainability & Green Tech 2026: Carbon-Neutral Operations',
    description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology and green AI practices.',
    type: 'article',
    category: 'Sustainability',
    readTime: '18 min',
    metrics: { primary: '80%', secondary: '$2M+', label: 'Energy Saved' },
    href: '/blog/ai-sustainability-green-tech-2026',
    featured: false,
    new: true,
    tags: ['Sustainability', 'Green Tech', 'Environment'],
    difficulty: 'intermediate',
    industry: ['All Industries', 'Manufacturing', 'Technology']
  },
  {
    id: 'ai-quantum-computing-2026',
    title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities that transform enterprise operations.',
    type: 'article',
    category: 'Quantum Computing',
    readTime: '25 min',
    metrics: { primary: '1000x', secondary: '95%', label: 'Faster' },
    href: '/blog/ai-quantum-computing-2026',
    featured: false,
    new: true,
    tags: ['Quantum Computing', 'AI', 'Optimization'],
    difficulty: 'advanced',
    industry: ['Technology', 'Finance', 'Research']
  }
];

export default function InteractiveContentRecommendation2026() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All Levels');
  const [selectedType, setSelectedType] = useState<string>('All Types');
  const [filteredRecommendations, setFilteredRecommendations] = useState<Recommendation[]>(recommendations);

  const industries = ['All Industries', 'Technology', 'Manufacturing', 'Finance', 'Healthcare', 'Retail', 'Enterprise', 'Fortune 500', 'Software', 'Research'];
  const difficulties = ['All Levels', 'beginner', 'intermediate', 'advanced'];
  const types = ['All Types', 'article', 'case-study', 'guide'];

  useEffect(() => {
    let filtered = recommendations;

    if (selectedIndustry !== 'All Industries') {
      filtered = filtered.filter(rec => rec.industry.includes(selectedIndustry));
    }

    if (selectedDifficulty !== 'All Levels') {
      filtered = filtered.filter(rec => rec.difficulty === selectedDifficulty);
    }

    if (selectedType !== 'All Types') {
      filtered = filtered.filter(rec => rec.type === selectedType);
    }

    setFilteredRecommendations(filtered);
  }, [selectedIndustry, selectedDifficulty, selectedType]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return <TrendingUp className="w-4 h-4" />;
      case 'case-study': return <Award className="w-4 h-4" />;
      case 'guide': return <Target className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-teal-500';
      case 'guide': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-6">
            <span className="w-4 h-4">🎯</span>
            <span>AI-POWERED RECOMMENDATIONS</span>
            <span className="w-4 h-4">🎯</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Personalized Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Recommendations
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover content tailored to your industry, expertise level, and interests. 
            Our AI analyzes your preferences to suggest the most relevant articles, 
            case studies, and implementation guides.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Customize Your Recommendations</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Industry Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Industry</label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Expertise Level</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'All Levels' ? 'All Levels' : 
                     difficulty === 'beginner' ? 'Beginner' :
                     difficulty === 'intermediate' ? 'Intermediate' : 'Advanced'}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Content Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'All Types' ? 'All Types' :
                     type === 'article' ? 'Articles' :
                     type === 'case-study' ? 'Case Studies' : 'Guides'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-indigo-600">{filteredRecommendations.length}</span> recommendations
              {selectedIndustry !== 'All Industries' && ` for ${selectedIndustry}`}
              {selectedDifficulty !== 'All Levels' && ` at ${selectedDifficulty} level`}
              {selectedType !== 'All Types' && ` (${selectedType}s)`}
            </p>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredRecommendations.map((item, index) => (
            <Link key={item.id} href={item.href} className="group">
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                item.featured ? 'border-indigo-200 hover:border-indigo-300' : 'border-gray-100 hover:border-gray-200'
              } hover:scale-105`}>
                {/* Header */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 bg-gradient-to-r ${getTypeColor(item.type)} rounded-lg flex items-center justify-center text-white`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {item.type === 'case-study' ? 'Case Study' : item.type === 'guide' ? 'Guide' : 'Article'}
                        </div>
                        <div className="text-xs text-gray-400">{item.category}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {item.new && (
                        <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          NEW 2026
                        </span>
                      )}
                      {item.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Difficulty Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty === 'beginner' ? 'Beginner' :
                       item.difficulty === 'intermediate' ? 'Intermediate' : 'Advanced'}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{item.industry[0]}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">{item.metrics.primary}</div>
                        <div className="text-xs text-gray-500">{item.metrics.label}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{item.metrics.secondary}</div>
                        <div className="text-xs text-gray-500">Impact</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">10K+ views</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredRecommendations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No recommendations found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more content recommendations.
            </p>
            <button
              onClick={() => {
                setSelectedIndustry('All Industries');
                setSelectedDifficulty('All Levels');
                setSelectedType('All Types');
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Need More Personalized Recommendations?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our AI experts can provide custom content recommendations based on your 
              specific business needs and transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="w-5 h-5 mr-2">💬</span>
                Get Custom Recommendations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105"
              >
                <span className="w-5 h-5 mr-2">📚</span>
                Browse All Content
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}