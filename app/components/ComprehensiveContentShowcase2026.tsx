import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, TrendingUp, Star, BookOpen, Zap, Shield, Brain, Globe, ArrowRight, Brain } from 'lucide-react';

const ComprehensiveContentShowcase2026 = () => {
  const contentCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400/30",
      bgColor: "bg-purple-500/10",
      articles: [
        {
          title: "AI 2025: Enterprise Transformation Guide",
          description: "Complete guide to implementing AI solutions and automation strategies",
          readTime: "12 min",
          href: "/blog/ai-2025-enterprise-ai-transformation-ultimate-guide",
          featured: true
        },
        {
          title: "Generative AI Enterprise Revolution",
          description: "How generative AI is transforming business operations",
          readTime: "8 min",
          href: "/blog/ai-2025-generative-ai-enterprise-revolution",
          featured: false
        },
        {
          title: "Machine Learning Operations (MLOps)",
          description: "Advanced MLOps strategies for production AI systems",
          readTime: "10 min",
          href: "/blog/ai-2025-machine-learning-operations-mlops-breakthrough",
          featured: false
        }
      ]
    },
    {
      title: "Quantum Computing",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-400/30",
      bgColor: "bg-blue-500/10",
      articles: [
        {
          title: "Quantum Computing Business Revolution",
          description: "How quantum computing is transforming business operations",
          readTime: "10 min",
          href: "/blog/quantum-computing-2025-business-revolution",
          featured: true
        },
        {
          title: "Quantum AI Business Revolution",
          description: "Quantum-enhanced AI for unprecedented business capabilities",
          readTime: "9 min",
          href: "/blog/ai-2026-quantum-ai-business-revolution",
          featured: false
        },
        {
          title: "Quantum Computing Breakthrough",
          description: "Latest quantum computing advances and applications",
          readTime: "11 min",
          href: "/blog/ai-2026-quantum-computing-breakthrough",
          featured: false
        }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-400/30",
      bgColor: "bg-green-500/10",
      articles: [
        {
          title: "AI Cybersecurity Next-Generation Protection",
          description: "AI-powered threat detection and quantum-resistant security",
          readTime: "11 min",
          href: "/blog/ai-cybersecurity-2025-next-generation-protection",
          featured: true
        },
        {
          title: "Cybersecurity Revolution Ultimate Guide",
          description: "Comprehensive cybersecurity strategies for 2025",
          readTime: "13 min",
          href: "/blog/ai-2025-cybersecurity-revolution-ultimate-guide",
          featured: false
        },
        {
          title: "Quantum Cybersecurity Breakthrough",
          description: "Quantum-resistant security protocols and implementations",
          readTime: "12 min",
          href: "/blog/ai-2026-quantum-cybersecurity-breakthrough-ultimate-guide",
          featured: false
        }
      ]
    },
    {
      title: "Enterprise Automation",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-400/30",
      bgColor: "bg-orange-500/10",
      articles: [
        {
          title: "Enterprise Automation Revolution",
          description: "Complete guide to enterprise automation transformation",
          readTime: "9 min",
          href: "/blog/ai-2025-enterprise-automation-revolution",
          featured: true
        },
        {
          title: "Autonomous Business Revolution",
          description: "Building fully autonomous business operations",
          readTime: "14 min",
          href: "/blog/ai-2025-autonomous-business-revolution-complete-guide",
          featured: false
        },
        {
          title: "Enterprise Automation Breakthrough",
          description: "Advanced automation strategies for 2026",
          readTime: "10 min",
          href: "/blog/ai-2026-enterprise-automation-breakthrough",
          featured: false
        }
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-8 py-4 mb-8">
            <BookOpen className="w-6 h-6 text-white mr-3" />
            <span className="text-lg font-bold text-white">📚 COMPREHENSIVE CONTENT LIBRARY 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Master the Future of Technology
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of cutting-edge content covering AI, quantum computing, 
            cybersecurity, and enterprise automation. Stay ahead with expert insights and practical guides.
          </p>
        </div>

        {/* Content Categories */}
        <div className="space-y-16">
          {contentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-8`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-white/80 text-lg">Expert insights and practical implementation guides</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{category.articles.length}</div>
                    <div className="text-white/80 text-sm">Articles</div>
                  </div>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.articles.map((article, articleIndex) => (
                    <div 
                      key={articleIndex}
                      className={`${article.featured ? 'ring-2 ring-purple-500' : ''} bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group`}
                    >
                      {article.featured && (
                        <div className="flex items-center mb-4">
                          <Star className="w-5 h-5 text-yellow-500 mr-2" />
                          <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                            FEATURED
                          </span>
                        </div>
                      )}
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-2" />
                          {article.readTime}
                        </div>
                        
                        <Link 
                          href={article.href}
                          className="flex items-center text-purple-600 hover:text-purple-800 font-semibold group-hover:translate-x-1 transition-all duration-200"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Content Impact Statistics</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-sm text-gray-300">Expert Articles</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">500K+</div>
              <div className="text-sm text-gray-300">Monthly Readers</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Reader Satisfaction</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-12 py-6 mb-8 group hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl">
            <BookOpen className="w-8 h-8 text-white mr-4 group-hover:animate-pulse" />
            <span className="text-2xl font-bold text-white">Access All Premium Content</span>
            <ArrowRight className="w-6 h-6 text-white ml-4 group-hover:translate-x-2 transition-transform duration-200" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Browse All Articles
            </Link>
            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-600 hover:text-white transition-colors shadow-xl"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveContentShowcase2026;