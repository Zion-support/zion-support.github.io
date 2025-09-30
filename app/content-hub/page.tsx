import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Hub - AI Insights, Case Studies & Resources | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI insights, implementation guides, case studies, and resources. Stay ahead with the latest AI trends and best practices.',
  keywords: 'AI content, AI insights, case studies, AI resources, AI guides, enterprise AI',
  openGraph: {
    title: 'Content Hub - AI Insights, Case Studies & Resources',
    description: 'Explore our comprehensive collection of AI insights, implementation guides, case studies, and resources.',
    type: 'website',
  },
};

export default function ContentHub() {
  const blogPosts = [
    {
      title: 'AI Enterprise Transformation 2026',
      description: 'Complete implementation guide for enterprise AI transformation. Achieve 300% ROI, 90% automation, and $10M+ annual savings.',
      href: '/blog/ai-enterprise-transformation-2026',
      category: 'Enterprise AI',
      readTime: '15 min read',
      featured: true,
    },
    {
      title: 'AI Implementation Best Practices 2026',
      description: 'Master AI implementation with proven best practices from 500+ successful deployments. Learn essential strategies.',
      href: '/blog/ai-implementation-best-practices-2026',
      category: 'Implementation',
      readTime: '12 min read',
      featured: true,
    },
    {
      title: 'AI Trends 2026: The Future of Enterprise AI',
      description: 'Discover the latest AI trends shaping enterprise transformation. From autonomous operations to edge intelligence.',
      href: '/blog/ai-trends-2026',
      category: 'Trends',
      readTime: '18 min read',
      featured: false,
    },
  ];

  const caseStudies = [
    {
      title: 'Fortune 500 AI Transformation Success',
      description: 'How a Fortune 500 company achieved $50M ROI, 90% automation, and 300% efficiency gains through comprehensive AI transformation.',
      href: '/case-studies/fortune-500-ai-transformation-success-2026',
      industry: 'Manufacturing',
      roi: '$50M',
      featured: true,
    },
    {
      title: 'AI Manufacturing Excellence 2026',
      description: 'How a mid-size manufacturer achieved 200% efficiency gains with AI-powered automation and predictive maintenance.',
      href: '/case-studies/ai-manufacturing-excellence-2026',
      industry: 'Manufacturing',
      roi: '200%',
      featured: false,
    },
    {
      title: 'AI Supply Chain Optimization 2025',
      description: 'Supply chain transformation delivering 60% cost reduction and 80% efficiency gains through intelligent automation.',
      href: '/case-studies/ai-supply-chain-optimization-2025',
      industry: 'Supply Chain',
      roi: '60%',
      featured: false,
    },
  ];

  const resources = [
    {
      title: 'AI Readiness Assessment Tool',
      description: 'Evaluate your organization\'s AI readiness with our comprehensive assessment framework.',
      href: '/resources/ai-readiness-assessment',
      type: 'Tool',
    },
    {
      title: 'AI Implementation Checklist',
      description: 'Step-by-step checklist for successful AI implementation based on 500+ deployments.',
      href: '/resources/ai-implementation-checklist',
      type: 'Guide',
    },
    {
      title: 'AI ROI Calculator',
      description: 'Calculate potential ROI from AI investments with our interactive calculator.',
      href: '/resources/ai-roi-calculator',
      type: 'Calculator',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Hub
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our comprehensive collection of AI insights, implementation guides, 
              case studies, and resources to accelerate your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get AI Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful content, handpicked to help you succeed with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Link key={index} href={post.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-indigo-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {caseStudies.filter(study => study.featured).map((study, index) => (
              <Link key={index} href={study.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-purple-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Case Study
                    </span>
                    <span className="text-sm text-gray-500">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-purple-600">
                      ROI: {study.roi}
                    </div>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                      <span>Read More</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest AI trends, insights, and implementation strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={post.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-indigo-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of successful AI implementations across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={index} href={study.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-purple-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Case Study
                    </span>
                    <span className="text-sm text-gray-500">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-purple-600">
                      ROI: {study.roi}
                    </div>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                      <span>Read More</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our free tools, guides, and resources to accelerate your AI journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-green-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    <span>Download</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get the latest AI trends, implementation guides, and success stories delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-indigo-200 mt-3">
              Join 10,000+ AI professionals getting our weekly insights
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}