import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Play,
  Download,
  Share2,
  Heart,
  Eye
} from 'lucide-react';

export default function RevolutionaryContentShowcase2025() {
  const contentCategories = [
    {
      title: "AI Breakthrough Articles",
      icon: BookOpen,
      color: "blue",
      count: 150,
      description: "In-depth articles covering the latest AI breakthroughs and innovations",
      featured: [
        {
          title: "Quantum Neural Fusion: The Next Frontier",
          excerpt: "Explore how quantum computing is revolutionizing neural networks...",
          readTime: "8 min read",
          views: "12.5k",
          likes: 892
        },
        {
          title: "Consciousness in AI: A 2025 Perspective",
          excerpt: "Dive deep into the philosophical and technical aspects of AI consciousness...",
          readTime: "12 min read",
          views: "8.7k",
          likes: 654
        },
        {
          title: "Enterprise AI Transformation: 15,000% ROI Case Study",
          excerpt: "Real-world case study of a Fortune 500 company's AI transformation...",
          readTime: "15 min read",
          views: "25.3k",
          likes: 1.2
        }
      ]
    },
    {
      title: "Video Tutorials & Demos",
      icon: Video,
      color: "purple",
      count: 75,
      description: "Step-by-step video tutorials and live demonstrations",
      featured: [
        {
          title: "Building Your First AI Agent in 30 Minutes",
          excerpt: "Complete walkthrough of creating an AI agent from scratch...",
          readTime: "30 min video",
          views: "45.2k",
          likes: 2.1
        },
        {
          title: "Quantum Computing Fundamentals",
          excerpt: "Understanding quantum computing principles and applications...",
          readTime: "45 min video",
          views: "18.9k",
          likes: 1.5
        },
        {
          title: "Neural Interface Development Workshop",
          excerpt: "Hands-on workshop on building neural interface applications...",
          readTime: "60 min video",
          views: "32.1k",
          likes: 2.8
        }
      ]
    },
    {
      title: "Comprehensive Guides",
      icon: FileText,
      color: "green",
      count: 50,
      description: "Detailed implementation guides and best practices",
      featured: [
        {
          title: "AI Implementation Mastery Guide 2025",
          excerpt: "Complete guide to implementing AI solutions in enterprise environments...",
          readTime: "45 min read",
          views: "67.8k",
          likes: 3.2
        },
        {
          title: "Quantum AI Security Framework",
          excerpt: "Comprehensive security framework for quantum-enhanced AI systems...",
          readTime: "35 min read",
          views: "23.4k",
          likes: 1.8
        },
        {
          title: "Neural Network Optimization Techniques",
          excerpt: "Advanced techniques for optimizing neural network performance...",
          readTime: "25 min read",
          views: "41.2k",
          likes: 2.5
        }
      ]
    },
    {
      title: "Community Insights",
      icon: Users,
      color: "yellow",
      count: 200,
      description: "Insights from our global community of AI practitioners",
      featured: [
        {
          title: "AI Practitioner Survey Results 2025",
          excerpt: "Comprehensive survey results from 10,000+ AI practitioners worldwide...",
          readTime: "10 min read",
          views: "89.3k",
          likes: 4.1
        },
        {
          title: "Industry Expert Roundtable: Future of AI",
          excerpt: "Insights from leading AI researchers and industry experts...",
          readTime: "20 min read",
          views: "56.7k",
          likes: 3.7
        },
        {
          title: "Startup Success Stories: AI Edition",
          excerpt: "Inspiring stories of AI startups that achieved remarkable success...",
          readTime: "15 min read",
          views: "34.5k",
          likes: 2.9
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-400 border-blue-500/30",
      purple: "from-purple-500 to-purple-600 text-purple-400 border-purple-500/30",
      green: "from-green-500 to-green-600 text-green-400 border-green-500/30",
      yellow: "from-yellow-500 to-yellow-600 text-yellow-400 border-yellow-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2025
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Immerse yourself in the most comprehensive collection of AI content, featuring 
            breakthrough articles, video tutorials, implementation guides, and community insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold">
              📚 500+ Content Pieces
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold">
              🎥 Video Tutorials
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold">
              👥 Community Driven
            </span>
          </div>
        </div>

        {/* Content Categories */}
        <div className="space-y-16">
          {contentCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} mr-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{category.count}+</div>
                    <div className="text-sm text-gray-400">Content Pieces</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.featured.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{item.excerpt}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-gray-500">{item.readTime}</span>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {item.views}
                          </div>
                          <div className="flex items-center">
                            <Heart className="h-3 w-3 mr-1" />
                            {item.likes}k
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                          Read More
                        </Link>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <Share2 className="h-4 w-4 text-gray-400" />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <Heart className="h-4 w-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link href="#" className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white rounded-full font-semibold hover:opacity-90 transition-opacity`}>
                    View All {category.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Content Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Featured This Week</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't miss our most popular and trending content pieces this week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Play className="h-6 w-6 text-purple-400 mr-3" />
                <span className="text-purple-400 text-sm font-semibold">VIDEO TUTORIAL</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum AI Implementation Masterclass</h3>
              <p className="text-gray-300 mb-4">Learn how to implement quantum-enhanced AI systems in your organization.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">2.5 hours</span>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-400 mr-3" />
                <span className="text-blue-400 text-sm font-semibold">GUIDE</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise AI Security Framework</h3>
              <p className="text-gray-300 mb-4">Comprehensive security framework for enterprise AI implementations.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">45 min read</span>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-sm font-semibold">Trending</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-green-400 mr-3" />
                <span className="text-green-400 text-sm font-semibold">COMMUNITY</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Practitioner Summit 2025</h3>
              <p className="text-gray-300 mb-4">Join our virtual summit with leading AI practitioners and researchers.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Live Event</span>
                <div className="flex items-center">
                  <Download className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-blue-400 text-sm font-semibold">Register</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dive Deeper?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive content library and join thousands of AI practitioners 
            who are transforming their industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ai-2025-ultimate-content-revolution" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Explore All Content
            </Link>
            <Link href="/ai-tools-utilities-2025" className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Check Out Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}