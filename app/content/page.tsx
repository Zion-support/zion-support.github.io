import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';

export const metadata = {
  title: 'Ultimate AI Content Collection 2025 | Zion Tech Group',
  description: 'Discover the most comprehensive collection of AI insights, case studies, and breakthrough technologies transforming businesses worldwide.',
  keywords: ['AI content', 'business transformation', 'case studies', 'AI insights', 'technology trends', '2025'],
};

export default function ContentPage() {
  const contentCategories = [
    {
      title: "AI Automation Revolution",
      description: "Transform your business with intelligent automation solutions",
      icon: "🤖",
      color: "from-purple-500 to-blue-500",
      articles: [
        {
          title: "AI 2025 Ultimate Automation Revolution",
          description: "Transform your business with 50,000% ROI through intelligent automation",
          href: "/ai-2025-ultimate-automation-revolution",
          readTime: "8 min read",
          featured: true
        },
        {
          title: "Fortune 500 AI Transformation Case Study",
          description: "Real-world success story: 800% ROI in 6 months",
          href: "/fortune-500-ai-transformation",
          readTime: "15 min read",
          featured: true
        }
      ]
    },
    {
      title: "Quantum Computing Breakthrough",
      description: "Next-generation computational power for complex problem solving",
      icon: "⚡",
      color: "from-indigo-500 to-purple-500",
      articles: [
        {
          title: "Quantum Computing 2026 Breakthrough",
          description: "Discover how quantum computing will revolutionize business operations",
          href: "/quantum-computing-2026-breakthrough",
          readTime: "12 min read",
          featured: true
        }
      ]
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces for enhanced productivity",
      icon: "🧠",
      color: "from-green-500 to-teal-500",
      articles: [
        {
          title: "Neural Interface Revolution 2025",
          description: "Direct brain-computer interfaces for enhanced productivity",
          href: "/neural-interface-revolution-2025",
          readTime: "10 min read",
          featured: false
        }
      ]
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing business operations with AI oversight",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      articles: [
        {
          title: "Autonomous Business Systems 2026",
          description: "Self-managing business operations with AI oversight",
          href: "/autonomous-business-systems-2026",
          readTime: "9 min read",
          featured: false
        }
      ]
    },
    {
      title: "Synthetic Intelligence",
      description: "Next-generation AI that thinks and learns like humans",
      icon: "🔮",
      color: "from-pink-500 to-rose-500",
      articles: [
        {
          title: "Synthetic Intelligence Breakthrough",
          description: "Next-generation AI that thinks and learns like humans",
          href: "/synthetic-intelligence-breakthrough",
          readTime: "11 min read",
          featured: false
        }
      ]
    }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="Ultimate AI Content Collection 2025"
        description="Discover the most comprehensive collection of AI insights, case studies, and breakthrough technologies transforming businesses worldwide."
        keywords="AI content, business transformation, case studies, AI insights, technology trends, 2025"
        url="/content"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">📚 ULTIMATE CONTENT COLLECTION 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                The Most Comprehensive AI Content Collection
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover cutting-edge insights, real-world case studies, and breakthrough technologies 
                that are transforming businesses worldwide with unprecedented ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 rounded-t-xl text-white`}>
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="opacity-90">{category.description}</p>
                  </div>
                  
                  {/* Articles */}
                  <div className="p-6">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className={`mb-6 pb-6 ${articleIndex < category.articles.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        {article.featured && (
                          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                            FEATURED
                          </div>
                        )}
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h4>
                        <p className="text-gray-600 mb-3 text-sm">{article.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-sm">{article.readTime}</span>
                          <Link
                            href={article.href}
                            className="text-purple-600 font-semibold hover:text-purple-800 transition-colors text-sm"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Content</h2>
              <p className="text-xl text-gray-600">Our most popular and impactful content</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Article 1 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-t-xl text-white">
                  <div className="text-3xl mb-2">🤖</div>
                  <div className="inline-flex items-center bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-3">
                    FEATURED
                  </div>
                  <h3 className="text-xl font-bold">AI 2025 Ultimate Automation Revolution</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Transform your business with 50,000% ROI through intelligent automation solutions that revolutionize operations.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">8 min read</span>
                    <Link
                      href="/ai-2025-ultimate-automation-revolution"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors text-sm"
                    >
                      Read Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Featured Article 2 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-t-xl text-white">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="inline-flex items-center bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-3">
                    FEATURED
                  </div>
                  <h3 className="text-xl font-bold">Fortune 500 AI Transformation</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Real-world success story: How a Fortune 500 company achieved 800% ROI in just 6 months.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">15 min read</span>
                    <Link
                      href="/fortune-500-ai-transformation"
                      className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-colors text-sm"
                    >
                      Read Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Featured Article 3 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-t-xl text-white">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="inline-flex items-center bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-3">
                    FEATURED
                  </div>
                  <h3 className="text-xl font-bold">Quantum Computing 2026</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Discover how quantum computing will revolutionize business operations with unprecedented computational power.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">12 min read</span>
                    <Link
                      href="/quantum-computing-2026-breakthrough"
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-colors text-sm"
                    >
                      Read Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already benefiting from our AI solutions and content insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}