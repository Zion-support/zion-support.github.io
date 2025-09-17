import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const AI2026UltimateContentHub = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough 2026",
      description: "Revolutionary advances in AI consciousness that are reshaping how we interact with intelligent systems.",
      image: "/images/ai-consciousness-2026.jpg",
      category: "AI Research",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Business Automation Guide",
      description: "Complete guide to implementing quantum-powered automation in your enterprise.",
      image: "/images/quantum-automation-2026.jpg",
      category: "Business Automation",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Implementation",
      description: "Step-by-step guide to integrating neural interfaces in your organization.",
      image: "/images/neural-interface-2026.jpg",
      category: "Neural Tech",
      readTime: "15 min read",
      featured: true
    },
    {
      id: 4,
      title: "Autonomous Enterprise Systems",
      description: "Building self-managing organizations with AI-powered autonomous systems.",
      image: "/images/autonomous-enterprise-2026.jpg",
      category: "Enterprise AI",
      readTime: "10 min read",
      featured: true
    }
  ];

  const categories = [
    { name: "AI Research", count: 45, icon: Brain },
    { name: "Business Automation", count: 32, icon: Zap },
    { name: "Neural Technology", count: 28, icon: Target },
    { name: "Enterprise Solutions", count: 67, icon: TrendingUp },
    { name: "Quantum Computing", count: 23, icon: Globe },
    { name: "AI Ethics", count: 19, icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2026
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ultimate Content Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most comprehensive collection of AI insights, breakthroughs, and revolutionary technologies 
              that are shaping the future of business and society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Content
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Content</h2>
          <p className="text-xl text-gray-300">Handpicked articles and insights from our AI experts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredContent.map((content) => (
            <div key={content.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src={content.image} 
                  alt={content.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {content.category}
                </span>
                <span className="text-gray-400 text-sm">{content.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{content.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{content.description}</p>
              <Link 
                to={`/content/${content.id}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Content Categories</h2>
          <p className="text-xl text-gray-300">Explore content by category</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <category.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-gray-400 text-sm">{category.count} articles</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">2M+</div>
              <div className="text-gray-300">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Expert Authors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Reader Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated with AI 2026</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest AI insights, breakthroughs, and revolutionary content delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026UltimateContentHub;