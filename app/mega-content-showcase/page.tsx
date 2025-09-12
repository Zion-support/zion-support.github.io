import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';
import { 
  BookOpenIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  PlayIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function MegaContentShowcase() {
  const contentCategories = [
    {
      title: "🚀 Revolutionary AI Breakthroughs",
      description: "Latest AI innovations transforming industries",
      count: "25+ Articles",
      color: "from-blue-500 to-purple-600",
      items: [
        {
          title: "AI 2025: Revolutionary Breakthroughs",
          description: "Groundbreaking AI innovations reshaping entire industries and unlocking unprecedented possibilities",
          href: "/blog/ai-2025-revolutionary-breakthroughs",
          type: "Article",
          readTime: "12 min",
          featured: true
        },
        {
          title: "Advanced RAG Systems 2025",
          description: "Production-ready implementation guide for retrieval-augmented generation systems",
          href: "/blog/ai-2025-advanced-rag-systems",
          type: "Article",
          readTime: "25 min"
        },
        {
          title: "AI Multimodal Revolution 2025",
          description: "Vision, voice, and text integration transforming human-computer interaction",
          href: "/blog/ai-2025-multimodal-revolution",
          type: "Article",
          readTime: "28 min"
        }
      ]
    },
    {
      title: "🏭 Manufacturing Success Stories",
      description: "Real-world AI transformation results",
      count: "15+ Case Studies",
      color: "from-green-500 to-blue-600",
      items: [
        {
          title: "$200M Manufacturing Success Story",
          description: "Complete case study: Fortune 500 manufacturer achieves massive cost savings",
          href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
          type: "Case Study",
          readTime: "18 min",
          featured: true
        },
        {
          title: "AI Manufacturing Automation Success",
          description: "How smart factories achieve 99.9% efficiency with AI-driven systems",
          href: "/case-studies/ai-manufacturing-automation-success-2025",
          type: "Case Study",
          readTime: "15 min"
        }
      ]
    },
    {
      title: "🤖 AI Solutions & Services",
      description: "Cutting-edge AI service offerings",
      count: "20+ Services",
      color: "from-purple-500 to-pink-600",
      items: [
        {
          title: "AI Autonomous Systems 2025",
          description: "Revolutionary automation solutions delivering 99.9% uptime and 60% cost reduction",
          href: "/services/ai-autonomous-systems-2025",
          type: "Service",
          readTime: "8 min",
          featured: true
        },
        {
          title: "AI Agent Orchestration",
          description: "Enterprise-grade AI agent coordination and management platform",
          href: "/services/ai-agent-orchestration",
          type: "Service",
          readTime: "10 min"
        }
      ]
    },
    {
      title: "🎓 Implementation Guides",
      description: "Step-by-step AI implementation",
      count: "30+ Guides",
      color: "from-orange-500 to-red-600",
      items: [
        {
          title: "AI Implementation Masterclass 2025",
          description: "Complete roadmap for enterprise AI transformation success",
          href: "/webinars/ai-2025-implementation-masterclass",
          type: "Webinar",
          readTime: "45 min"
        },
        {
          title: "AI Strategy Planning Guide",
          description: "Strategic framework for AI adoption and scaling",
          href: "/blog/ai-2025-go-to-market-playbook",
          type: "Guide",
          readTime: "20 min"
        }
      ]
    }
  ];

  const featuredContent = [
    {
      title: "AI 2025: Revolutionary Breakthroughs",
      description: "Groundbreaking AI innovations reshaping entire industries and unlocking unprecedented possibilities",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: "🚀",
      category: "Revolutionary AI",
      readTime: "12 min read",
      type: "Article"
    },
    {
      title: "$200M Manufacturing Success Story",
      description: "Complete case study: Fortune 500 manufacturer achieves massive cost savings through AI",
      href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
      icon: "🏭",
      category: "Success Story",
      readTime: "18 min read",
      type: "Case Study"
    },
    {
      title: "AI Autonomous Systems 2025",
      description: "Revolutionary automation solutions delivering 99.9% uptime and 60% cost reduction",
      href: "/services/ai-autonomous-systems-2025",
      icon: "🤖",
      category: "AI Solutions",
      readTime: "8 min read",
      type: "Service"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Mega Content Showcase - Revolutionary AI Resources 2025"
        description="Explore our comprehensive collection of AI breakthroughs, success stories, and implementation guides. 200+ articles, 50+ case studies, and cutting-edge solutions."
        keywords="AI content showcase, AI resources, AI articles, AI case studies, AI implementation guides, AI solutions"
        url="/mega-content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <StarIcon className="h-5 w-5 mr-2" />
            🎉 MEGA CONTENT DROP
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Showcase</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive collection of cutting-edge AI content: breakthrough research, 
            real-world success stories, and expert implementation guides to accelerate your AI transformation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
              <div className="text-sm text-gray-600">Articles</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Case Studies</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
              <div className="text-sm text-gray-600">Services</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-1">30+</div>
              <div className="text-sm text-gray-600">Guides</div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌟 Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform">{content.icon}</div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">FEATURED</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">NEW</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {content.readTime}
                      </span>
                      <span className="flex items-center">
                        <DocumentTextIcon className="h-4 w-4 mr-1" />
                        {content.type}
                      </span>
                    </div>
                    <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                      {content.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">📚 Content Categories</h2>
          <div className="space-y-16">
            {contentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Total Content</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {category.count}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Link key={itemIndex} href={item.href} className="group">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          {item.featured && (
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold ml-2">
                              FEATURED
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center">
                              <ClockIcon className="h-3 w-3 mr-1" />
                              {item.readTime}
                            </span>
                            <span className="flex items-center">
                              <DocumentTextIcon className="h-3 w-3 mr-1" />
                              {item.type}
                            </span>
                          </div>
                          <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Link
                    href={category.title.includes('Breakthroughs') ? '/blog' :
                          category.title.includes('Success') ? '/case-studies' :
                          category.title.includes('Solutions') ? '/services' : '/resources'}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    View All {category.title.split(' ')[0]}
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Search & Filter */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔍 Find Exactly What You Need</h3>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, case studies, services, and guides..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
              <div className="flex flex-wrap gap-3 mt-4 justify-center">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  AI Breakthroughs
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  Manufacturing
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  Healthcare
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  Finance
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  Implementation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Don't just read about AI transformation—experience it. Our expert consultants can help you 
              implement these breakthrough technologies in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center"
              >
                Start Your AI Journey
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-16 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Quick Access</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <BookOpenIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold group-hover:text-blue-600">All Articles</h4>
                <p className="text-sm text-gray-600 mt-1">200+ AI articles</p>
              </div>
            </Link>
            <Link href="/case-studies" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <ChartBarIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold group-hover:text-blue-600">Case Studies</h4>
                <p className="text-sm text-gray-600 mt-1">50+ success stories</p>
              </div>
            </Link>
            <Link href="/services" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <DocumentTextIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold group-hover:text-blue-600">AI Services</h4>
                <p className="text-sm text-gray-600 mt-1">20+ solutions</p>
              </div>
            </Link>
            <Link href="/webinars" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <PlayIcon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold group-hover:text-blue-600">Webinars</h4>
                <p className="text-sm text-gray-600 mt-1">Live sessions</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}