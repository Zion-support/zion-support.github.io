import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Micro SAAS Platform',
      excerpt: 'Our new micro SAAS platform offers 50+ AI-powered tools for modern businesses, starting at just $79/month.',
      content: 'Zion Tech Group is excited to announce the launch of our comprehensive micro SAAS platform, featuring over 50 AI-powered tools designed to streamline business operations and boost productivity. The platform includes everything from AI code review assistants to automated marketing tools, all accessible through a single subscription.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'Product Launch',
      image: '🚀',
      tags: ['AI', 'Micro SAAS', 'Product Launch', 'Innovation']
    },
    {
      id: 2,
      title: 'AI Healthcare Solutions Achieve 99.5% Accuracy in Medical Imaging',
      excerpt: 'Our AI healthcare solutions have reached a new milestone in medical imaging accuracy, helping doctors diagnose conditions faster and more accurately.',
      content: 'Zion Tech Group\'s AI healthcare solutions have achieved a remarkable 99.5% accuracy rate in medical imaging analysis. This breakthrough is helping healthcare providers diagnose conditions more quickly and accurately, ultimately improving patient outcomes and reducing healthcare costs.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      category: 'Healthcare AI',
      image: '🏥',
      tags: ['Healthcare', 'AI', 'Medical Imaging', 'Innovation']
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthrough: New Algorithm Reduces Processing Time by 90%',
      excerpt: 'Our quantum computing team has developed a revolutionary algorithm that dramatically reduces processing time for complex calculations.',
      content: 'Zion Tech Group\'s quantum computing division has achieved a major breakthrough with a new algorithm that reduces processing time for complex calculations by 90%. This advancement opens up new possibilities for solving previously intractable problems in fields like cryptography, optimization, and scientific simulation.',
      author: 'Michael Chen',
      date: '2024-01-05',
      category: 'Quantum Computing',
      image: '⚛️',
      tags: ['Quantum Computing', 'Algorithm', 'Innovation', 'Technology']
    },
    {
      id: 4,
      title: 'Client Success Story: E-commerce Platform Sees 340% ROI with AI Personalization',
      excerpt: 'TechRetail Inc. achieved remarkable results using our AI personalization solutions, increasing conversion rates by 85% and reducing customer acquisition costs by 65%.',
      content: 'TechRetail Inc., a leading e-commerce platform, partnered with Zion Tech Group to implement AI-powered personalization solutions. The results were extraordinary: a 340% ROI, 85% increase in conversion rates, and 65% reduction in customer acquisition costs. This case study demonstrates the transformative power of AI in e-commerce.',
      author: 'David Kim',
      date: '2024-01-01',
      category: 'Case Study',
      image: '🛒',
      tags: ['Case Study', 'E-commerce', 'AI', 'ROI', 'Success']
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Global Operations with New European Office',
      excerpt: 'We\'re excited to announce the opening of our new European office in London, bringing our AI and IT solutions closer to European clients.',
      content: 'Zion Tech Group is expanding its global presence with the opening of a new European office in London. This expansion will allow us to better serve our European clients and provide more localized support for our AI and IT solutions. The new office will house our European sales, support, and development teams.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-20',
      category: 'Company News',
      image: '🌍',
      tags: ['Expansion', 'Global', 'Europe', 'Growth']
    },
    {
      id: 6,
      title: 'AI Cybersecurity Solutions Prevent $2.3M in Potential Losses',
      excerpt: 'Our AI-powered cybersecurity solutions have successfully prevented over $2.3M in potential losses for our clients in the past quarter.',
      content: 'Zion Tech Group\'s AI cybersecurity solutions have demonstrated exceptional performance, preventing over $2.3M in potential losses for our clients in the past quarter. Our advanced threat detection and prevention systems use machine learning to identify and neutralize threats before they can cause damage.',
      author: 'Dr. Emily Rodriguez',
      date: '2023-12-15',
      category: 'Cybersecurity',
      image: '🔒',
      tags: ['Cybersecurity', 'AI', 'Threat Prevention', 'Security']
    }
  ];

  const categories = [...new Set(newsArticles.map(article => article.category))];

  return (
    <>
      <Helmet>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Discover our latest AI innovations, client success stories, and industry developments." />
        <meta name="keywords" content="AI news, technology updates, Zion Tech Group news, AI innovations, tech announcements" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & Updates
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Stay informed with the latest developments in AI, technology, and our company
              </p>
            </div>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Article */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{newsArticles[0].image}</div>
                      <div>
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {newsArticles[0].category}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {newsArticles[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">{newsArticles[0].excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{newsArticles[0].author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(newsArticles[0].date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-gray-700 mb-6">{newsArticles[0].content}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {newsArticles[0].tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button key={index} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors">
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Articles</h3>
                  <div className="space-y-4">
                    {newsArticles.slice(1, 4).map((article) => (
                      <div key={article.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex items-center mb-2">
                          <div className="text-2xl mr-3">{article.image}</div>
                          <div>
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          {article.title}
                        </h4>
                        <p className="text-gray-600 text-xs mb-2">{article.excerpt}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* All Articles Grid */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">{article.image}</div>
                        <div>
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <User className="w-3 h-3 mr-1" />
                        <span className="mr-3">{article.author}</span>
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100">
              Subscribe to our newsletter for the latest AI insights and company updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsPage;