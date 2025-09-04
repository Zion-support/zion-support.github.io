import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 'ai-powered-marketplaces-the-future-of-digital-commerce',
      title: 'AI-Powered Marketplaces: The Future of Digital Commerce',
      excerpt: 'Discover how artificial intelligence is revolutionizing e-commerce platforms and creating personalized shopping experiences.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      image: '/images/blog/ai-marketplaces.jpg',
      featured: true
    },
    {
      id: 'blockchain-technology-in-modern-business-solutions',
      title: 'Blockchain Technology in Modern Business Solutions',
      excerpt: 'Explore the transformative potential of blockchain technology across various industries and business applications.',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'Blockchain',
      readTime: '6 min read',
      image: '/images/blog/blockchain-business.jpg'
    },
    {
      id: 'cloud-native-architecture-best-practices',
      title: 'Cloud-Native Architecture: Best Practices for 2024',
      excerpt: 'Learn the essential principles and best practices for building scalable, resilient cloud-native applications.',
      author: 'David Kim',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '10 min read',
      image: '/images/blog/cloud-architecture.jpg'
    },
    {
      id: 'cybersecurity-trends-for-2024-and-beyond',
      title: 'Cybersecurity Trends for 2024 and Beyond',
      excerpt: 'Stay ahead of emerging threats with insights into the latest cybersecurity trends and protective measures.',
      author: 'Emily Rodriguez',
      date: '2024-01-08',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/images/blog/cybersecurity-trends.jpg'
    },
    {
      id: 'data-analytics-in-digital-transformation',
      title: 'Data Analytics in Digital Transformation',
      excerpt: 'How data-driven insights are powering successful digital transformation initiatives across industries.',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      category: 'Data Analytics',
      readTime: '9 min read',
      image: '/images/blog/data-analytics.jpg'
    },
    {
      id: 'devops-automation-strategies-for-modern-teams',
      title: 'DevOps Automation Strategies for Modern Teams',
      excerpt: 'Streamline your development workflow with proven DevOps automation strategies and tools.',
      author: 'David Kim',
      date: '2024-01-03',
      category: 'DevOps',
      readTime: '8 min read',
      image: '/images/blog/devops-automation.jpg'
    },
    {
      id: 'machine-learning-applications-in-enterprise-software',
      title: 'Machine Learning Applications in Enterprise Software',
      excerpt: 'Real-world applications of machine learning that are transforming enterprise software development.',
      author: 'Michael Chen',
      date: '2024-01-01',
      category: 'AI & Machine Learning',
      readTime: '11 min read',
      image: '/images/blog/ml-enterprise.jpg'
    },
    {
      id: 'microservices-architecture-benefits-and-challenges',
      title: 'Microservices Architecture: Benefits and Challenges',
      excerpt: 'Understanding the advantages and potential pitfalls of adopting microservices architecture.',
      author: 'Emily Rodriguez',
      date: '2023-12-28',
      category: 'Software Architecture',
      readTime: '7 min read',
      image: '/images/blog/microservices.jpg'
    },
    {
      id: 'quantum-computing-implications-for-business',
      title: 'Quantum Computing: Implications for Business',
      excerpt: 'Exploring how quantum computing will reshape business operations and competitive landscapes.',
      author: 'Sarah Johnson',
      date: '2023-12-25',
      category: 'Emerging Tech',
      readTime: '9 min read',
      image: '/images/blog/quantum-computing.jpg'
    },
    {
      id: 'sustainable-technology-green-computing-solutions',
      title: 'Sustainable Technology: Green Computing Solutions',
      excerpt: 'Innovative approaches to reducing the environmental impact of technology infrastructure.',
      author: 'David Kim',
      date: '2023-12-22',
      category: 'Sustainability',
      readTime: '6 min read',
      image: '/images/blog/green-computing.jpg'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Blockchain',
    'Cloud Computing',
    'Cybersecurity',
    'Data Analytics',
    'DevOps',
    'Software Architecture',
    'Emerging Tech',
    'Sustainability'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, blockchain, cloud computing, cybersecurity, data analytics, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Insights, trends, and innovations in technology from our expert team. 
              Stay ahead of the curve with cutting-edge knowledge and practical solutions.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 5).map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        index === 0 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Article</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>
              
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-8 h-8" />
                        </div>
                        <p className="text-lg font-semibold">Featured Post</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      <Link href={`/blog/${featuredPost.id}`}>
                        <span className="hover:text-blue-600 transition-colors">
                          {featuredPost.title}
                        </span>
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(featuredPost.date)}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${featuredPost.id}`}
                    >
                      <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Latest Articles</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our collection of insights, tutorials, and thought leadership content 
                covering the latest in technology and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <p className="text-sm">Blog Post</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      <Link href={`/blog/${post.id}`}>
                        <span className="hover:text-blue-600 transition-colors">
                          {post.title}
                        </span>
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                    >
                      <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights, 
              trends, and innovations in technology.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Have a Story to Share?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for guest contributors and industry experts 
              to share their insights and experiences.
            </p>
            <Link href="/contact"><span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contribute to Our Blog
            </span></Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;