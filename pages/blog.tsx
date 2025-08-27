import Head from 'next/head'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Zap,
  Shield,
  Cloud,
  Brain
} from 'lucide-react'

export default function Blog() {
  const title = 'Blog — Zion Tech Group'
  const description = 'Insights, updates, and thought leadership on AI, cloud computing, cybersecurity, and technology innovation.'
  
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI Autonomous Systems in Enterprise',
      excerpt: 'How autonomous AI agents are transforming business operations and what it means for the future of work.',
      author: 'Zion Tech Team',
      date: '2024-08-26',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Autonomous Systems', 'Enterprise', 'Innovation'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Zero-Trust Security: Beyond the Buzzword',
      excerpt: 'Implementing true zero-trust architecture in modern cloud environments and why it\'s essential for every organization.',
      author: 'Security Team',
      date: '2024-08-24',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Zero Trust', 'Cloud Security', 'Compliance'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Cloud-Native Architecture: Best Practices for 2024',
      excerpt: 'Key principles and patterns for building scalable, resilient applications in the cloud era.',
      author: 'Cloud Team',
      date: '2024-08-22',
      readTime: '10 min read',
      category: 'Cloud & DevOps',
      tags: ['Cloud', 'Architecture', 'DevOps', 'Scalability'],
      featured: true,
      image: '/api/placeholder/600/400'
    }
  ]

  const recentPosts = [
    {
      id: 4,
      title: 'Building Production-Ready AI Models: A Practical Guide',
      excerpt: 'From development to deployment: ensuring your AI models are ready for production use.',
      author: 'AI Team',
      date: '2024-08-20',
      readTime: '12 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Machine Learning', 'Production', 'MLOps']
    },
    {
      id: 5,
      title: 'Micro SaaS: The Future of Business Software',
      excerpt: 'Why focused, specialized software solutions are gaining traction and how to build them.',
      author: 'Product Team',
      date: '2024-08-18',
      readTime: '7 min read',
      category: 'Product & Strategy',
      tags: ['SaaS', 'Product Strategy', 'Business', 'Innovation']
    },
    {
      id: 6,
      title: 'Data Pipeline Engineering: From Raw Data to Insights',
      excerpt: 'Designing robust data pipelines that transform raw data into actionable business intelligence.',
      author: 'Data Team',
      date: '2024-08-16',
      readTime: '9 min read',
      category: 'Data & Analytics',
      tags: ['Data Engineering', 'ETL', 'Analytics', 'Big Data']
    },
    {
      id: 7,
      title: 'Kubernetes Security: Protecting Your Containerized Applications',
      excerpt: 'Essential security practices for securing Kubernetes clusters and containerized workloads.',
      author: 'DevOps Team',
      date: '2024-08-14',
      readTime: '11 min read',
      category: 'Cloud & DevOps',
      tags: ['Kubernetes', 'Security', 'Containers', 'DevOps']
    },
    {
      id: 8,
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'How edge computing is revolutionizing IoT and what it means for real-time applications.',
      author: 'IoT Team',
      date: '2024-08-12',
      readTime: '8 min read',
      category: 'Emerging Tech',
      tags: ['IoT', 'Edge Computing', 'Real-time', 'Innovation']
    },
    {
      id: 9,
      title: 'Quantum Computing: Preparing for the Next Computing Revolution',
      excerpt: 'Understanding quantum computing fundamentals and preparing your organization for quantum advantage.',
      author: 'Research Team',
      date: '2024-08-10',
      readTime: '15 min read',
      category: 'Emerging Tech',
      tags: ['Quantum Computing', 'Research', 'Future Tech', 'Innovation']
    }
  ]

  const categories = [
    { name: 'AI & Machine Learning', icon: Brain, count: 15, color: 'from-blue-500 to-purple-600' },
    { name: 'Cloud & DevOps', icon: Cloud, count: 12, color: 'from-green-500 to-blue-600' },
    { name: 'Cybersecurity', icon: Shield, count: 10, color: 'from-red-500 to-orange-600' },
    { name: 'Data & Analytics', icon: TrendingUp, count: 8, color: 'from-purple-500 to-pink-600' },
    { name: 'Product & Strategy', icon: Zap, count: 6, color: 'from-yellow-500 to-orange-600' },
    { name: 'Emerging Tech', icon: TrendingUp, count: 5, color: 'from-indigo-500 to-purple-600' }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/blog/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog/" />
      </Head>
      
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Insights &
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovation
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
            >
              Stay ahead of the curve with our latest insights on AI, cloud computing, 
              cybersecurity, and emerging technologies.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-medium text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.count} articles</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Articles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and insightful articles on cutting-edge technology topics.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-zion-blue to-zion-purple relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-blue/80 to-zion-purple/80 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">ZT</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple font-medium group-hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with our most recent insights and analysis on technology trends.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-zion-blue to-zion-purple relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-blue/80 to-zion-purple/80 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">ZT</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={`/blog/${post.id}`}
                        className="text-zion-cyan hover:text-zion-purple font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                      >
                        Read →
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-zion-slate-light mb-8"
            >
              Get the latest insights on AI, cloud computing, and cybersecurity 
              delivered directly to your inbox.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="px-6 py-3 bg-white text-zion-blue-dark rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}