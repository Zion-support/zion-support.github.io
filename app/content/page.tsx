import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  ArrowRightIcon,
  ClockIcon,
  TagIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const ContentPage = () => {
  const contentCategories = [
    {
      id: 'ai-automation',
      name: 'AI Automation',
      count: 25,
      description: 'Comprehensive guides on implementing AI automation across your business',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      count: 18,
      description: 'Latest breakthroughs and applications in quantum computing technology',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      count: 12,
      description: 'Cutting-edge neural interface technologies and their applications',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'cloud-computing',
      name: 'Cloud Computing',
      count: 30,
      description: 'Cloud infrastructure optimization and best practices',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS',
      count: 22,
      description: 'Building and scaling successful micro SaaS businesses',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'case-studies',
      name: 'Case Studies',
      count: 15,
      description: 'Real-world success stories and implementation examples',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI Consciousness: The Next Frontier in Artificial Intelligence",
      description: "Explore the latest research on AI consciousness and its implications for human-AI collaboration.",
      category: "AI Automation",
      readTime: "15 min read",
      publishDate: "2025-01-15",
      views: 12500,
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Supremacy in Business: Real-World Applications",
      description: "Discover how quantum computing is revolutionizing business optimization and problem-solving.",
      category: "Quantum Computing",
      readTime: "12 min read",
      publishDate: "2025-01-12",
      views: 8900,
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Revolution: Direct Brain-Computer Communication",
      description: "Learn about the latest advances in neural interface technology and its practical applications.",
      category: "Neural Interfaces",
      readTime: "18 min read",
      publishDate: "2025-01-10",
      views: 15600,
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Infrastructure Optimization: A Complete Guide",
      description: "Master cloud optimization techniques to reduce costs and improve performance.",
      category: "Cloud Computing",
      readTime: "20 min read",
      publishDate: "2025-01-08",
      views: 9800,
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Content Library - Zion Tech Group"
        description="Explore our comprehensive library of AI, quantum computing, neural interface, and technology content."
        keywords="AI content, quantum computing articles, neural interface guides, technology insights, case studies"
        url="/content"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Content Library
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover insights, guides, and case studies covering the latest in AI, quantum computing, 
              neural interfaces, and cutting-edge technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search content..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all">
                <FunnelIcon className="w-5 h-5" />
                All Categories
              </button>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all">
                <ClockIcon className="w-5 h-5" />
                Latest
              </button>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all">
                <EyeIcon className="w-5 h-5" />
                Most Popular
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCategories.map((category) => (
              <Link
                key={category.id}
                href={`/content/category/${category.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className={`h-32 bg-gradient-to-r ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} articles</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                    Explore Articles
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Content
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredContent.map((content) => (
              <div
                key={content.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  content.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-full">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {content.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {content.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {content.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {content.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{content.publishDate}</span>
                        <span className="flex items-center gap-1">
                          <EyeIcon className="w-4 h-4" />
                          {content.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/content/${content.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                    >
                      Read Article
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get notified when we publish new articles, case studies, and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 max-w-md px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentPage;