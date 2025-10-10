'use client';

  const blogPosts: BlogPost[] = [
    {
id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Technology'],
      image: '/images/blog/ai-enterprise.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Strategies for Modern Businesses',
      excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud while maintaining security and performance.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Infrastructure'],
      image: '/images/blog/cloud-migration.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every organization should implement to protect against evolving cyber threats.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Best Practices', '2024'],
      image: '/images/blog/cybersecurity.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'How to successfully navigate digital transformation and modernize your business processes.',
      content: 'Full article content...',
      author: 'Emma Wilson',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Digital Transformation',
      tags: ['Digital', 'Transformation', 'Business'],
      image: '/images/blog/digital-transformation.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'The Rise of Edge Computing',
      excerpt: 'Understanding edge computing and its impact on data processing and application performance.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2023-12-20',
      readTime: '4 min read',
      category: 'Technology',
      tags: ['Edge Computing', 'Performance', 'Data'],
      image: '/images/blog/edge-computing.jpg',
      featured: false
    },
    {
      id: '6',
      title: 'Building Scalable Web Applications',
      excerpt: 'Best practices for creating web applications that can handle growth and high traffic.',
      content: 'Full article content...',
      author: 'Lisa Park',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Development',
      tags: ['Web Development', 'Scalability', 'Performance'],
      image: '/images/blog/scalable-web.jpg',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>

      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration that minimizes downtime and maximizes benefits.',
      author: 'Cloud Solutions Team',
      date: '2024-01-10',
      category: 'Cloud Services',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is both enhancing cybersecurity capabilities and creating new challenges that businesses must address.',
      author: 'Security Team',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Micro SaaS Solutions: Building Scalable AI-Powered Tools',
      excerpt: 'Learn how to create and scale micro SaaS applications that leverage AI to solve specific business problems.',
      author: 'Product Team',
      date: '2024-01-01',
      category: 'Micro SaaS',
      readTime: '7 min read'
    }
  ];
  const categories = ['All', 'AI & Technology', 'Cloud Services', 'Cybersecurity', 'Micro SaaS', 'Industry Insights'];

            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
{/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
{/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-blue-500">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                          Featured;
  </
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          #{tag},
</div>
        </div>
      </section>

