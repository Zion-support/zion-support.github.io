import EnhancedSEO from '../components/EnhancedSEO';
  const blogPosts = [
      image: "/images/blog/ai-business-2024.jpg",
      featured: true
      excerpt: "Essential security measures every small business should implement to protect their digital assets.",
      content: "In today's digital landscape, small businesses are increasingly targeted by cybercriminals...",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "cybersecurity",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-small-business.jpg",
      featured: false
      title: 'Micro SAAS: The New Era of Business Software',
      excerpt: 'Discover how micro SAAS solutions are revolutionizing the way businesses operate and scale.',
      author: 'Sarah Johnson',
      date: 'December 10, 2024',
      category: 'Business',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: '5G Technology: Transforming Industries and Creating Opportunities',
      excerpt: 'Learn about the impact of 5G technology on various industries and the opportunities it presents.',
      author: 'Mike Chen',
      date: 'December 5, 2024',
      category: 'Technology',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential cybersecurity measures every small business should implement to protect their data and operations.',
      author: 'Alex Rodriguez',
      date: 'November 28, 2024',
      category: 'Security',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cloud Migration: A Step-by-Step Guide',
      excerpt: 'Complete guide to migrating your business to the cloud safely and efficiently.',
      author: 'Emily Davis',
      date: 'November 20, 2024',
      category: 'Cloud Computing',
      readTime: '10 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'The Rise of Edge Computing: What It Means for Your Business',
      excerpt: 'Understanding edge computing and its implications for modern business operations.',
      author: 'David Kim',
      date: 'November 15, 2024',
      category: 'Technology',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Business', 'Security', 'Cloud Computing', 'Technology'];

  return (
    <>
      <Helmet>
        <title>Tech Insights & Innovation Blog | Zion Tech Group</title>
        <meta name="description" content="Stay ahead with the latest trends, insights, and best practices in AI, cybersecurity, cloud computing, and technology innovation." />
        <meta name="keywords" content="tech blog, AI insights, cybersecurity, cloud computing, technology trends, innovation" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Tech Insights & Innovation</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest trends, insights, and best practices in AI, cybersecurity, cloud computing, and technology innovation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
                />
              </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, industry insights, and expert analysis from Zion Tech Group."
        keywords="technology blog, AI insights, business technology, cybersecurity, cloud computing, 5G technology"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed with the latest technology trends, industry insights, and expert analysis from our team of professionals.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
          </div>
        </section>
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
            {filteredPosts.map((post) => (
                  
                  <Link
                    to={`/blog/${post.slug || post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest technology insights and industry updates.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
  )
}

export default BlogPage
