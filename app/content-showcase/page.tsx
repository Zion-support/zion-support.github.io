import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import InteractiveContentDiscoveryWidget2025 from '../../components/InteractiveContentDiscoveryWidget2025';

export const metadata: Metadata = {
  title: 'Content Showcase - Revolutionary AI Solutions & Resources',
  description: 'Explore our comprehensive library of AI breakthrough content, case studies, resources, and webinars. Discover revolutionary AI solutions delivering extraordinary ROI.',
  keywords: 'AI content, case studies, resources, webinars, AI solutions, breakthrough technology, ROI success stories',
};

export default function ContentShowcase() {
  const featuredContent = [
    {
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 2,500-5,000% ROI with 99.9% accuracy and 10,000x faster processing',
      category: 'AI 2025',
      type: 'Blog',
      roi: '2,500-5,000%',
      featured: true,
      url: '/ai-2025-ultimate-breakthrough-revolution',
      icon: '🚀',
      image: '/images/ai-2025-breakthrough.jpg'
    },
    {
      title: 'Global Transformation Breakthrough',
      description: 'Fortune 500 company achieves 10,000% ROI in 6 months with our revolutionary AI implementation',
      category: 'Case Study',
      type: 'Case Study',
      roi: '10,000%',
      featured: true,
      url: '/case-studies/ai-2025-global-transformation-breakthrough',
      icon: '🏆',
      image: '/images/global-transformation.jpg'
    },
    {
      title: 'AI 2026 Quantum-Neural Fusion',
      description: 'Breakthrough quantum-neural integration delivering 15,000% ROI with transcendent intelligence',
      category: 'AI 2026',
      type: 'Blog',
      roi: '15,000%',
      featured: true,
      url: '/ai-2026-quantum-neural-fusion-breakthrough',
      icon: '⚛️',
      image: '/images/quantum-neural.jpg'
    }
  ];

  const contentCategories = [
    {
      title: 'AI 2025 Breakthroughs',
      description: 'Revolutionary AI solutions and predictions for 2025',
      count: 25,
      icon: '🚀',
      color: 'from-red-500 to-pink-500',
      url: '/ai-2025-content'
    },
    {
      title: 'AI 2026-2030 Predictions',
      description: 'Future AI technologies and breakthrough predictions',
      count: 18,
      icon: '🔮',
      color: 'from-purple-500 to-indigo-500',
      url: '/ai-2026-2030-content'
    },
    {
      title: 'Success Stories',
      description: 'Real-world case studies with documented ROI results',
      count: 32,
      icon: '🏆',
      color: 'from-green-500 to-emerald-500',
      url: '/case-studies'
    },
    {
      title: 'Implementation Resources',
      description: 'Guides, toolkits, and resources for AI implementation',
      count: 15,
      icon: '📚',
      color: 'from-blue-500 to-cyan-500',
      url: '/resources'
    },
    {
      title: 'Expert Webinars',
      description: 'Live sessions with AI experts and breakthrough demonstrations',
      count: 12,
      icon: '🔥',
      color: 'from-orange-500 to-red-500',
      url: '/webinars'
    },
    {
      title: 'Tools & Calculators',
      description: 'Interactive tools for ROI calculation and AI readiness assessment',
      count: 8,
      icon: '🛠️',
      color: 'from-yellow-500 to-orange-500',
      url: '/tools'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full mb-6">
            📚 CONTENT SHOWCASE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Library
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore our comprehensive collection of AI breakthrough content, case studies, resources, 
            and webinars. Discover revolutionary solutions delivering extraordinary ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#interactive-discovery"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              🔍 Explore Content
            </Link>
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all transform hover:scale-105"
            >
              🚀 Latest Breakthrough
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful content showcasing revolutionary AI breakthroughs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link
                key={index}
                href={content.url}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">{content.icon}</div>
                  </div>
                  {content.featured && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {content.category}
                    </span>
                    <span className="text-sm font-bold text-green-600">
                      {content.roi} ROI
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-800">
                    Read More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Content Discovery */}
      <section id="interactive-discovery" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive Content Discovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our advanced search and filtering system to find exactly the content you need.
            </p>
          </div>
          <InteractiveContentDiscoveryWidget2025 />
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Content Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse content by category to find exactly what you're looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCategories.map((category, index) => (
              <Link
                key={index}
                href={category.url}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-purple-600">
                    {category.count} items
                  </span>
                  <svg className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Content Library Statistics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive content library continues to grow with revolutionary AI insights and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">110+</div>
              <div className="text-white text-lg">Content Items</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-white text-lg">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-white text-lg">Implementation Guides</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-white text-lg">Monthly Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your AI transformation journey with our revolutionary breakthrough technology and comprehensive resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              🚀 Explore Breakthrough
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 border-2 border-purple-600"
            >
              📞 Get Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}