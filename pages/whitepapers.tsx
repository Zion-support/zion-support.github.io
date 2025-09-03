import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Download, FileText, Calendar, User, Eye, ArrowRight, Search } from 'lucide-react';

export default function Whitepapers() {
  const whitepapers = [
    {
      id: 'ai-business-transformation',
      title: 'AI-Powered Business Transformation: A Complete Guide',
      description: 'Comprehensive guide to implementing AI solutions that drive real business value and competitive advantage.',
      author: 'Sarah Johnson',
      date: '2024-01-20',
      category: 'Artificial Intelligence',
      pages: 45,
      downloads: '12.5k',
      rating: 4.8,
      featured: true,
      topics: ['Machine Learning', 'Business Strategy', 'Digital Transformation', 'ROI Analysis']
    },
    {
      id: 'cloud-migration-strategies',
      title: 'Cloud Migration Strategies for Enterprise Success',
      description: 'Best practices and proven strategies for successful cloud migration in enterprise environments.',
      author: 'Michael Chen',
      date: '2024-01-15',
      category: 'Cloud Computing',
      pages: 32,
      downloads: '8.2k',
      rating: 4.6,
      featured: true,
      topics: ['Cloud Architecture', 'Migration Planning', 'Cost Optimization', 'Security']
    },
    {
      id: 'micro-saas-development',
      title: 'Building Scalable Micro SaaS Solutions',
      description: 'Complete guide to developing, launching, and scaling micro SaaS applications for maximum impact.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'Software Development',
      pages: 38,
      downloads: '6.8k',
      rating: 4.7,
      featured: false,
      topics: ['SaaS Development', 'Scalability', 'Product Strategy', 'Market Analysis']
    },
    {
      id: 'cybersecurity-best-practices',
      title: 'Enterprise Cybersecurity Best Practices 2024',
      description: 'Updated security frameworks and best practices for protecting enterprise systems and data.',
      author: 'David Kim',
      date: '2024-01-05',
      category: 'Cybersecurity',
      pages: 28,
      downloads: '9.1k',
      rating: 4.9,
      featured: true,
      topics: ['Security Frameworks', 'Threat Detection', 'Compliance', 'Risk Management']
    },
    {
      id: 'data-analytics-implementation',
      title: 'Data Analytics Implementation Guide',
      description: 'Step-by-step guide to implementing effective data analytics solutions in your organization.',
      author: 'Lisa Thompson',
      date: '2023-12-28',
      category: 'Data Analytics',
      pages: 35,
      downloads: '5.4k',
      rating: 4.5,
      featured: false,
      topics: ['Data Strategy', 'Analytics Tools', 'Business Intelligence', 'Data Governance']
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Cloud Computing', 'Software Development', 'Cybersecurity', 'Data Analytics'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredWhitepapers = whitepapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Access our comprehensive white papers on AI, cloud computing, cybersecurity, and software development best practices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/whitepapers" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                White Papers & <span className="text-blue-600">Research</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Access our comprehensive research and insights on the latest technology trends, 
                best practices, and industry solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search white papers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWhitepapers.map((paper) => (
                <div key={paper.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    {paper.featured && (
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                        Featured
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {paper.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="w-4 h-4 mr-1" />
                        {paper.pages} pages
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="w-4 h-4 mr-1" />
                        {paper.downloads}
                      </div>
                      <div className="flex items-center text-sm text-yellow-500">
                        <Eye className="w-4 h-4 mr-1" />
                        {paper.rating}
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredWhitepapers.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No white papers found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Our Latest Research
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to access new white papers, 
              industry insights, and technology updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}