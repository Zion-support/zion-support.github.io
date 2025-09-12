import React from 'react';
import Link from 'next/link';

export default function ContentShowcasePage() {
  const featuredArticles = [
    {
      id: 'ai-transformation-roadmap-2025',
      title: 'AI Transformation Roadmap 2025: Your Complete Implementation Guide',
      excerpt: 'Transform your organization with a proven AI implementation roadmap. Learn from successful enterprise transformations and avoid common pitfalls.',
      readTime: '25 min read',
      category: 'AI Strategy',
      featured: true,
      new: true,
      icon: '🗺️',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'ai-customer-experience-revolution-2025',
      title: 'AI Customer Experience Revolution 2025: The Future of Customer Engagement',
      excerpt: 'Discover how AI is revolutionizing customer experience across industries. Learn proven strategies to create personalized, predictive, and proactive customer journeys.',
      readTime: '20 min read',
      category: 'Customer Experience',
      featured: true,
      new: true,
      icon: '🎯',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'ai-data-strategy-enterprise-2025',
      title: 'AI Data Strategy for Enterprise 2025: Building the Foundation for Success',
      excerpt: 'Master the art of enterprise data strategy in the AI era. Learn how to build robust, scalable data foundations that power intelligent business decisions.',
      readTime: '22 min read',
      category: 'Data Strategy',
      featured: true,
      new: true,
      icon: '📊',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'ai-startup-funding-masterclass-2025',
      title: 'AI Startup Funding Masterclass 2025: From Idea to Series A',
      excerpt: 'Master the art of raising capital for AI startups. Learn proven strategies, pitch frameworks, and investor insights that have helped 500+ AI companies secure $2B+ in funding.',
      readTime: '28 min read',
      category: 'Startup Funding',
      featured: true,
      new: true,
      icon: '💰',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'ai-sustainability-green-tech-2025',
      title: 'AI Sustainability & Green Tech 2025: Building Eco-Friendly AI Systems',
      excerpt: 'Discover how to build sustainable AI systems that reduce environmental impact while maximizing business value. Learn proven strategies for green AI implementation.',
      readTime: '24 min read',
      category: 'Sustainability',
      featured: true,
      new: true,
      icon: '🌱',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const featuredResources = [
    {
      id: 'ai-transformation-checklist-2025',
      title: 'AI Transformation Checklist 2025',
      excerpt: 'Your comprehensive guide to successful AI implementation. This 150+ item checklist covers everything from strategy and governance to technical implementation.',
      pages: '25 pages',
      downloads: '10K+ downloads',
      icon: '📋',
      color: 'from-blue-500 to-cyan-600',
      new: true
    },
    {
      id: 'green-ai-implementation-guide-2025',
      title: 'Green AI Implementation Guide 2025',
      excerpt: 'Build sustainable AI systems that reduce environmental impact while maximizing performance. This comprehensive guide provides actionable strategies for carbon-neutral AI operations.',
      pages: '120 pages',
      downloads: '5K+ downloads',
      icon: '🌍',
      color: 'from-green-500 to-emerald-600',
      new: true
    },
    {
      id: 'ai-startup-funding-playbook-2025',
      title: 'AI Startup Funding Playbook 2025',
      excerpt: 'Master the art of raising capital for AI startups. This comprehensive playbook provides proven strategies, templates, and insights from 500+ successful AI funding rounds.',
      pages: '150 pages',
      downloads: '8K+ downloads',
      icon: '🚀',
      color: 'from-purple-500 to-pink-600',
      new: true
    }
  ];

  const caseStudies = [
    {
      id: 'ai-automation-manufacturing-success-2025',
      title: 'AI Automation in Manufacturing: 40% Cost Reduction Success Story',
      excerpt: 'How a Fortune 500 manufacturing company achieved 40% cost reduction and 60% faster processing times through AI automation.',
      industry: 'Manufacturing',
      savings: '$2.3M annual savings',
      icon: '🏭',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'ai-healthcare-diagnosis-success-2025',
      title: 'Healthcare AI Diagnosis: 95% Accuracy Achievement',
      excerpt: 'Revolutionary AI system achieving 95% accuracy in medical diagnosis with 80% faster processing times.',
      industry: 'Healthcare',
      savings: '80% faster diagnosis',
      icon: '🏥',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'ai-financial-services-transformation-success-2025',
      title: 'Financial Services AI Transformation: $50M Cost Savings',
      excerpt: 'Complete AI transformation in financial services resulting in $50M cost savings and 300% efficiency gains.',
      industry: 'Financial Services',
      savings: '$50M cost savings',
      icon: '🏦',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-indigo-50 to-purple-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6'>
              <span className='text-sm font-medium'>Content Showcase</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold text-gray-900 mb-6'>
              🎯 Latest AI & Business Content
            </h1>
            <p className='text-2xl md:text-3xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Discover our comprehensive collection of expert insights, implementation guides, 
              and proven strategies for AI transformation and business growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/blog'
                className='bg-indigo-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors text-lg shadow-lg'
              >
                📚 Browse All Articles
              </Link>
              <Link
                href='/resources'
                className='border-2 border-indigo-600 text-indigo-600 px-10 py-4 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition-colors text-lg'
              >
                📋 Download Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              📚 Featured Articles
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our latest comprehensive guides covering AI transformation, customer experience, 
              data strategy, startup funding, and sustainability.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.id}`} className='group'>
                <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105'>
                  <div className={`aspect-video bg-gradient-to-br ${article.color} flex items-center justify-center relative`}>
                    <div className='text-6xl'>{article.icon}</div>
                    {article.new && (
                      <div className='absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                        NEW
                      </div>
                    )}
                    {article.featured && (
                      <div className='absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                        FEATURED
                      </div>
                    )}
                  </div>
                  <div className='p-8'>
                    <div className='flex items-center gap-3 mb-4'>
                      <span className='bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full'>
                        {article.category}
                      </span>
                      <span className='text-gray-500 text-sm'>{article.readTime}</span>
                    </div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight'>
                      {article.title}
                    </h3>
                    <p className='text-gray-600 mb-6 leading-relaxed'>
                      {article.excerpt}
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-indigo-600 font-semibold group-hover:underline'>
                        Read Article →
                      </span>
                      <span className='text-gray-400 text-sm'>January 2025</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link
              href='/blog'
              className='inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg'
            >
              View All Articles
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              📋 Free Resources & Guides
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Download our comprehensive guides, checklists, and templates to accelerate 
              your AI implementation and business growth.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {featuredResources.map((resource) => (
              <Link key={resource.id} href={`/resources/${resource.id}`} className='group'>
                <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105'>
                  <div className={`aspect-video bg-gradient-to-br ${resource.color} flex items-center justify-center relative`}>
                    <div className='text-6xl'>{resource.icon}</div>
                    {resource.new && (
                      <div className='absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                        NEW
                      </div>
                    )}
                    <div className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                      FREE
                    </div>
                  </div>
                  <div className='p-8'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight'>
                      {resource.title}
                    </h3>
                    <p className='text-gray-600 mb-6 leading-relaxed'>
                      {resource.excerpt}
                    </p>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-gray-500 text-sm'>{resource.pages}</span>
                      <span className='text-gray-500 text-sm'>{resource.downloads}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-indigo-600 font-semibold group-hover:underline'>
                        Download Free →
                      </span>
                      <span className='text-gray-400 text-sm'>PDF</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link
              href='/resources'
              className='inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg'
            >
              Browse All Resources
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              🏆 Success Stories & Case Studies
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Real results from our AI implementations across various industries. 
              Learn from successful transformations and proven strategies.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {caseStudies.map((caseStudy) => (
              <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`} className='group'>
                <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105'>
                  <div className={`aspect-video bg-gradient-to-br ${caseStudy.color} flex items-center justify-center relative`}>
                    <div className='text-6xl'>{caseStudy.icon}</div>
                    <div className='absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                      SUCCESS
                    </div>
                  </div>
                  <div className='p-8'>
                    <div className='flex items-center gap-3 mb-4'>
                      <span className='bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full'>
                        {caseStudy.industry}
                      </span>
                      <span className='text-green-600 text-sm font-bold'>{caseStudy.savings}</span>
                    </div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight'>
                      {caseStudy.title}
                    </h3>
                    <p className='text-gray-600 mb-6 leading-relaxed'>
                      {caseStudy.excerpt}
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-indigo-600 font-semibold group-hover:underline'>
                        Read Case Study →
                      </span>
                      <span className='text-gray-400 text-sm'>Detailed Analysis</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link
              href='/case-studies'
              className='inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg'
            >
              View All Case Studies
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            📧 Stay Updated with Latest Content
          </h2>
          <p className='text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto'>
            Get weekly updates on new articles, resources, and case studies. 
            Join 15,000+ professionals who trust our content.
          </p>
          <div className='max-w-md mx-auto flex gap-4'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white'
            />
            <button className='bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
              Subscribe
            </button>
          </div>
          <p className='text-sm text-white opacity-75 mt-4'>
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
}