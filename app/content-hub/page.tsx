import React, { useState } from 'react';
import Link from 'next/link';

export default function ContentHub() {
  const [activeTab, setActiveTab] = useState('all');

  const content = {
    articles: [
      {
        title: 'AI Neural Interfaces 2026: Next-Generation Brain-Computer Integration',
        slug: '/blog/ai-neural-interfaces-2026',
        category: 'AI Technology',
        readTime: '25 min',
        views: '2.3K',
        isNew: true,
        featured: true
      },
      {
        title: 'AI Space Technology 2026: Autonomous Space Operations & Interplanetary AI',
        slug: '/blog/ai-space-tech-2026',
        category: 'Space Technology',
        readTime: '30 min',
        views: '1.8K',
        isNew: true,
        featured: true
      },
      {
        title: 'AI Synthetic Data 2026: Privacy-Preserving AI Training & Data Generation',
        slug: '/blog/ai-synthetic-data-2026',
        category: 'AI Privacy',
        readTime: '25 min',
        views: '3.1K',
        isNew: true,
        featured: true
      },
      {
        title: 'AI Cognitive Computing 2026: Advanced Reasoning & Decision Making',
        slug: '/blog/ai-cognitive-computing-2026',
        category: 'AI Technology',
        readTime: '28 min',
        views: '2.1K',
        isNew: true,
        featured: false
      },
      {
        title: 'AI Federated Learning 2026: Collaborative AI Without Data Sharing',
        slug: '/blog/ai-federated-learning-2026',
        category: 'AI Privacy',
        readTime: '22 min',
        views: '1.9K',
        isNew: true,
        featured: false
      }
    ],
    caseStudies: [
      {
        title: 'AI Neural Interface Success 2026: $15M ROI Case Study',
        slug: '/case-studies/ai-neural-interface-success-2026',
        company: 'Fortune 500 Manufacturing',
        roi: '$15M',
        industry: 'Manufacturing',
        isNew: true,
        featured: true
      },
      {
        title: 'AI Space Technology Success 2026: 99.9% Mission Success Rate',
        slug: '/case-studies/ai-space-tech-success-2026',
        company: 'Space Technology Corp',
        roi: '$25M',
        industry: 'Space Technology',
        isNew: true,
        featured: true
      },
      {
        title: 'AI Synthetic Data Success 2026: Privacy-Preserving AI Training',
        slug: '/case-studies/ai-synthetic-data-success-2026',
        company: 'Healthcare AI Solutions',
        roi: '$12M',
        industry: 'Healthcare',
        isNew: true,
        featured: false
      }
    ]
  };

  const categories = ['All', 'AI Technology', 'Space Technology', 'AI Privacy', 'Manufacturing', 'Healthcare'];

  const filteredContent = {
    articles: activeTab === 'all' ? content.articles : content.articles.filter(article => article.category === activeTab),
    caseStudies: activeTab === 'all' ? content.caseStudies : content.caseStudies.filter(study => study.industry === activeTab)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 AI CONTENT HUB 2026
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the latest AI innovations, transformation guides, case studies, and real-world success stories 
            that are reshaping businesses in 2026. From neural interfaces to space technology, 
            explore comprehensive resources to accelerate your AI journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">8</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
            <div className="text-gray-600">New 2026 Content</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$52M+</div>
            <div className="text-gray-600">Total ROI Documented</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category === 'All' ? 'all' : category)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === (category === 'All' ? 'all' : category)
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredContent.articles.filter(article => article.featured).map((article, index) => (
              <Link key={index} href={article.slug} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    {article.isNew && (
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        NEW 2026
                      </span>
                    )}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>⏱️ {article.readTime} read</span>
                    <span>👁️ {article.views} views</span>
                  </div>
                  <p className="text-gray-600">
                    Explore the latest innovations in {article.category.toLowerCase()} and discover how they're transforming businesses in 2026.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.articles.map((article, index) => (
              <Link key={index} href={article.slug} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    {article.isNew && (
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        NEW
                      </span>
                    )}
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span>⏱️ {article.readTime}</span>
                    <span>👁️ {article.views}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Discover the latest innovations and applications in {article.category.toLowerCase()}.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.caseStudies.map((study, index) => (
              <Link key={index} href={study.slug} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    {study.isNew && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        NEW
                      </span>
                    )}
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span>🏢 {study.company}</span>
                    <span>💰 {study.roi} ROI</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    See how {study.company} achieved remarkable results with AI transformation.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our AI solutions can revolutionize your operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}