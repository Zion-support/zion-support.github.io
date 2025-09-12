import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import ErrorBoundary from '../../components/ErrorBoundary';

export default function ContentShowcasePage() {
  const featuredContent = [
    {
      title: "AI Industry Disruption 2025",
      description: "How AI is reshaping every sector with real impact data and actionable insights for business leaders.",
      href: "/blog/ai-2025-industry-disruption",
      icon: "🏭",
      category: "AI & Technology",
      readTime: "25 min read",
      date: "Jan 30, 2025",
      type: "Article",
      featured: true
    },
    {
      title: "AI Trends 2025 Predictions",
      description: "15 predictions that will shape the future of technology. From multimodal AI to edge computing, discover what's coming next.",
      href: "/blog/ai-trends-2025-predictions",
      icon: "🔮",
      category: "AI Predictions",
      readTime: "28 min read",
      date: "Jan 30, 2025",
      type: "Article",
      featured: true
    },
    {
      title: "Fortune 500 AI Success",
      description: "$50M savings and 300% ROI in 18 months. Complete case study with implementation details and lessons learned.",
      href: "/case-studies/ai-transformation-fortune-500-success-2025",
      icon: "🏆",
      category: "Success Story",
      readTime: "Case Study",
      date: "Jan 30, 2025",
      type: "Case Study",
      featured: true
    },
    {
      title: "AI Retail Personalization",
      description: "300% revenue growth through intelligent customer experiences and personalized recommendations.",
      href: "/blog/ai-retail-personalization-2025",
      icon: "🛍️",
      category: "Retail AI",
      readTime: "15 min read",
      date: "Jan 30, 2025",
      type: "Article",
      featured: true
    }
  ];

  const latestArticles = [
    {
      title: "AI Implementation Master Guide 2025",
      description: "Complete 150+ page resource with proven strategies, templates, and frameworks for successful AI implementation.",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      category: "Free Guide",
      readTime: "150+ pages",
      date: "Jan 30, 2025",
      type: "Resource"
    },
    {
      title: "AI Retail Personalization Playbook",
      description: "200+ page implementation guide with proven strategies for 300% revenue growth through AI personalization.",
      href: "/resources/ai-retail-personalization-playbook-2025",
      icon: "📋",
      category: "Free Playbook",
      readTime: "200+ pages",
      date: "Jan 30, 2025",
      type: "Resource"
    },
    {
      title: "AI Customer Support Automation",
      description: "80% faster response times and 60% cost reduction through intelligent automation and AI-powered support systems.",
      href: "/blog/ai-customer-support-automation-2025",
      icon: "🎧",
      category: "AI Automation",
      readTime: "12 min read",
      date: "Jan 29, 2025",
      type: "Article"
    }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="Content Showcase - Latest AI & Tech Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI and technology resources, case studies, and implementation guides. Free downloads, expert insights, and proven strategies."
        keywords="AI resources, technology guides, case studies, implementation guides, free downloads, expert content"
        url="/content-showcase"
      />
      <StructuredData
        type="WebPage"
        data={{
          headline: "Latest AI & Tech Content Showcase",
          description: "Discover Zion Tech Group's newest blog posts, case studies, and free resources on AI, cloud, and digital transformation. Stay informed with our expert insights.",
          url: "https://zion.app/content-showcase",
          publisher: {
            "@type": "Organization",
            name: "Zion Tech Group",
            logo: {
              "@type": "ImageObject",
              url: "https://zion.app/images/zion-tech-group-logo.png"
            }
          }
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🚀 FRESH CONTENT</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Content Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover our latest AI insights, case studies, and resources. From cutting-edge 
                research to real-world success stories, find everything you need to accelerate 
                your AI transformation in 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Browse All Articles
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  Download Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Banner */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 30, 2025</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 Revolutionary AI Content Just Dropped
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                New this week: AI Industry Disruption Analysis, 2025 AI Trends Predictions, Fortune 500 Success Story, 
                AI Retail Personalization Guide, and comprehensive implementation playbooks. Expert insights to accelerate your growth.
              </p>
            </div>

            {/* Featured Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredContent.map((content, index) => (
                <Link key={index} href={content.href} className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{content.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{content.description}</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>{content.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>New</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find the content that matters most to your role and industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Articles */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Articles</h3>
                  <p className="text-gray-600">Expert insights and analysis on AI trends, implementation, and best practices</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Articles:</span>
                    <span className="font-semibold text-blue-600">75+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">New This Month:</span>
                    <span className="font-semibold text-green-600">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average Read Time:</span>
                    <span className="font-semibold text-purple-600">15 min</span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Browse Articles
                </Link>
              </div>

              {/* Case Studies */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
                  <p className="text-gray-600">Real-world success stories and detailed implementation examples</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Case Studies:</span>
                    <span className="font-semibold text-green-600">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average ROI:</span>
                    <span className="font-semibold text-green-600">340%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Industries Covered:</span>
                    <span className="font-semibold text-purple-600">12+</span>
                  </div>
                </div>
                <Link
                  href="/case-studies"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Resources</h3>
                  <p className="text-gray-600">Templates, checklists, guides, and tools to accelerate your AI journey</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Resources:</span>
                    <span className="font-semibold text-purple-600">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Downloads:</span>
                    <span className="font-semibold text-green-600">25K+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Free Downloads:</span>
                    <span className="font-semibold text-blue-600">100%</span>
                  </div>
                </div>
                <Link
                  href="/resources"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Download Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest Articles & Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay up-to-date with our latest insights and analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article, index) => (
                <Link key={index} href={article.href} className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                      <div className="text-8xl">{article.icon}</div>
                      <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        NEW
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.readTime}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 font-bold text-sm">ZT</span>
                          </div>
                          <span className="text-sm text-gray-600">Zion Tech Group</span>
                        </div>
                        <span className="text-purple-600 font-medium group-hover:underline">
                          {article.type === 'Resource' ? 'Download →' : 'Read Article →'}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                View All Articles
                <span>→</span>
              </Link>
            </div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="mr-2">📚</span>
            CONTENT SHOWCASE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI & Tech Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of expert insights, implementation guides, case studies, 
            and free resources to accelerate your AI and technology transformation journey.
          </p>
        </header>

        {/* Featured Content Banner */}
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔥 JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 Fresh Content Just Dropped
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              New this week: AI Voice Assistants, Manufacturing Robotics, Healthcare AI Success Stories, 
              and comprehensive implementation guides. Expert insights to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Blog Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Blog Articles</h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Articles
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-voice-assistants-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎤</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Technology
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Voice Assistants 2025: The Future of Conversational AI
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore how AI voice assistants are revolutionizing business operations, customer service, 
                    and user experiences in 2025. From multimodal capabilities to enterprise integration strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-robotics-manufacturing-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">🤖</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Manufacturing & AI
                    </span>
                    <span className="text-gray-500 text-sm">22 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Robotics in Manufacturing 2025: Revolutionizing Production Lines
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore how AI-powered robotics is transforming manufacturing operations, from collaborative 
                    robots to predictive maintenance and smart factory implementations.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-multimodal-applications-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎯</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Technology
                    </span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Multimodal Applications 2025: Beyond Text to Vision, Audio, and Beyond
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore the future of AI with multimodal applications that combine text, vision, 
                    audio, and more. Learn implementation strategies and best practices for 2025.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Case Studies</h2>
            <Link
              href="/case-studies"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Case Studies
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏥</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Healthcare & AI
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Healthcare Diagnosis Success: 95% Accuracy Achieved
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a major healthcare provider transformed patient care with AI-powered diagnostic systems, 
                    achieving unprecedented accuracy and efficiency in medical diagnosis.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">Diagnostic Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">60%</div>
                      <div className="text-sm text-gray-600">Faster Diagnosis</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏦</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    POPULAR
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Financial Services
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Financial Services AI Transformation: $50M Cost Savings
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete transformation of financial services operations with AI, achieving 
                    $50M cost savings and 300% efficiency gains through intelligent automation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">$50M</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">300%</div>
                      <div className="text-sm text-gray-600">Efficiency Gains</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-retail-transformation-success-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">🛒</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    SUCCESS
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Retail & E-commerce
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 25, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Retail AI Transformation: 300% Revenue Growth
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a major retail chain achieved 300% revenue growth and 60% cost reduction 
                    through comprehensive AI implementation and automation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">300%</div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">60%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 p-6">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Financial Services AI Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  $50M cost savings and 300% efficiency gains in financial services
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Financial Services</span>
                  <span>💼 Enterprise</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-ecommerce-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-6xl">🛒</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      E-commerce
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    E-commerce AI Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    300% revenue growth and 60% cost reduction through 
                    AI-powered personalization and automation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
>>>>>>> cursor/create-and-deploy-new-content-fa2c
          </div>
        </div>

        {/* Free Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources & Tools</h2>
            <Link
              href="/resources"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Resources
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/resources/ai-voice-implementation-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Voice Implementation Guide</h3>
                <p className="text-gray-600 text-sm mb-3">Complete 150-page guide to implementing AI voice assistants</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Implementation Checklist</h3>
                <p className="text-gray-600 text-sm mb-3">Step-by-step checklist for successful AI implementation</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>Popular</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-roi-calculator-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI ROI Calculator</h3>
                <p className="text-gray-600 text-sm mb-3">Calculate potential return on investment for AI projects</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Free Tool</span>
                  <span className="mx-2">•</span>
                  <span>Interactive</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Security Checklist</h3>
                <p className="text-gray-600 text-sm mb-3">Essential security measures for AI systems</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>Essential</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Content Impact by the Numbers</h2>
            <p className="text-xl opacity-90">
              Our content has helped thousands of professionals and organizations succeed with AI and technology.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-gray-300">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100K+</div>
              <div className="text-gray-300">Downloads</div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-831d
  );
}