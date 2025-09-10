
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/400/250',
      slug: 'future-ai-business-trends-2024',
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small to Medium Businesses',
      excerpt: 'Learn essential cybersecurity strategies to protect your business from evolving threats and ensure data security in the digital age.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-best-practices-smb',
    },
    {
      id: 3,
      title: 'Cloud Migration: A Complete Guide for Enterprise Success',
      excerpt: 'Discover the step-by-step process of migrating to the cloud, including planning, execution, and optimization strategies.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/400/250',
      slug: 'cloud-migration-complete-guide',
    },
    {
      id: 4,
      title: 'Building Scalable Micro SaaS Applications: Architecture Patterns',
      excerpt: 'Learn the key architectural patterns and best practices for building scalable micro SaaS applications that can grow with your business.',
      author: 'David Thompson',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Software Development',
      image: '/api/placeholder/400/250',
      slug: 'scalable-micro-saas-architecture',
    },
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Software Development',
    'Data Analytics',
  ];

  return (
    <div className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and digital transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group"
          >
            View All Posts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSection;
