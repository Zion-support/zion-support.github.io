import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Resources 2025"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Expert insights, implementation guides, and real-world success stories to accelerate your growth."
        keywords="AI content, business resources, AI articles, case studies, implementation guides, AI insights"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🚀 FRESH CONTENT - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest AI insights, implementation guides, and real-world success stories. 
            Expert content designed to accelerate your AI transformation journey in 2025.
          </p>
        </header>

        {/* Featured Content */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎯 Featured This Week
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our most popular and impactful content, handpicked by our experts to help you 
                stay ahead in the rapidly evolving AI landscape.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/ai-2025-neural-interfaces" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
                  <h3 className="text-lg font-semibold mb-2">AI Neural Interfaces 2025</h3>
                  <p className="text-sm opacity-90 mb-3">The future of brain-computer integration and direct neural communication</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>🔥 Hot Topic</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-space-technology" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">AI Space Technology Revolution</h3>
                  <p className="text-sm opacity-90 mb-3">Autonomous space missions and interplanetary AI systems</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>22 min read</span>
                    <span className="mx-2">•</span>
                    <span>🌟 Exclusive</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-augmented-reality" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🥽</div>
                  <h3 className="text-lg font-semibold mb-2">AI Augmented Reality 2025</h3>
                  <p className="text-sm opacity-90 mb-3">The future of immersive computing and spatial intelligence</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>20 min read</span>
                    <span className="mx-2">•</span>
                    <span>🔥 Hot Topic</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/ai-2025-financial-services-transformation" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">💰</div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-green-600">Financial Services AI Transformation</h3>
                    <p className="text-sm text-gray-600">Fortune 500 Company Success Story</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Discover how a leading financial services company achieved $2.3B revenue increase 
                  through comprehensive AI implementation, including customer service automation, 
                  fraud detection, and personalized financial services.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4 text-sm">
                    <span className="text-green-600 font-semibold">$2.3B Revenue Increase</span>
                    <span className="text-blue-600 font-semibold">45% Cost Reduction</span>
                    <span className="text-purple-600 font-semibold">300% ROI</span>
                  </div>
                  <div className="text-blue-600 font-medium group-hover:underline">Read Case Study →</div>
                </div>
              </div>
            </Link>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">More Success Stories Coming Soon</h3>
              <p className="text-gray-700 mb-4">
                We're constantly adding new case studies showcasing real-world AI transformations 
                across various industries. Stay tuned for more inspiring success stories.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/resources/ai-2025-implementation-master-guide" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">📚</div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600">AI Implementation Master Guide 2025</h3>
                    <p className="text-sm text-gray-600">Complete Enterprise Roadmap</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  The ultimate 150-page guide for AI implementation success. Includes step-by-step 
                  roadmaps, best practices, tools, templates, and real-world case studies to 
                  transform your organization with AI.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span>150 pages</span>
                    <span className="mx-2">•</span>
                    <span>45 min read</span>
                    <span className="mx-2">•</span>
                    <span>🎯 Essential</span>
                  </div>
                  <div className="text-blue-600 font-medium group-hover:underline">Download Guide →</div>
                </div>
              </div>
            </Link>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Resource Library</h3>
              <p className="text-gray-700 mb-4">
                Access our complete collection of AI resources including implementation guides, 
                checklists, templates, tools, and frameworks to accelerate your AI journey.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Implementation Guides</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Master Implementation Guide</li>
                    <li>• Industry-Specific Guides</li>
                    <li>• Technology Stack Guides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools & Templates</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Project Templates</li>
                    <li>• Assessment Checklists</li>
                    <li>• ROI Calculators</li>
                  </ul>
                </div>
              </div>
              <Link
                href="/resources"
                className="inline-flex items-center text-purple-600 font-medium hover:underline mt-4"
              >
                Explore All Resources →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/blog" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Latest Articles</h3>
              <p className="text-gray-600 mb-4">Expert insights on AI trends, implementation strategies, and business transformation.</p>
              <div className="text-blue-600 font-medium group-hover:underline">Browse Articles →</div>
            </div>
          </Link>
          
          <Link href="/resources" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Free Resources</h3>
              <p className="text-gray-600 mb-4">Downloadable guides, templates, checklists, and tools to accelerate your AI journey.</p>
              <div className="text-green-600 font-medium group-hover:underline">View Resources →</div>
            </div>
          </Link>
          
          <Link href="/case-studies" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600">Success Stories</h3>
              <p className="text-gray-600 mb-4">Real-world case studies showcasing AI transformations and measurable business results.</p>
              <div className="text-purple-600 font-medium group-hover:underline">Read Case Studies →</div>
            </div>
          </Link>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest AI Insights
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </section>
      </div>
    </div>
  );
}