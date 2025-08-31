import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const Blog: NextPage = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise Applications',
      excerpt: 'Discover how artificial intelligence is transforming enterprise software and what businesses need to know to stay competitive.',
      author: 'Sarah Mitchell',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/400/250',
      slug: 'future-of-ai-enterprise'
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies for 2024',
      excerpt: 'Learn the best practices and strategies for migrating your infrastructure to the cloud while minimizing downtime and costs.',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Cloud Solutions',
      image: '/api/placeholder/400/250',
      slug: 'cloud-migration-strategies-2024'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends Every Business Should Know',
      excerpt: 'Stay ahead of the latest cybersecurity threats and trends that could impact your business in the coming year.',
      author: 'John Davis',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-trends-2024'
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Explore the principles and best practices for designing and implementing scalable microservices architectures.',
      author: 'David Wilson',
      date: 'February 28, 2024',
      readTime: '8 min read',
      category: 'Architecture',
      slug: 'scalable-microservices-architecture'
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'How edge computing is revolutionizing IoT applications and enabling real-time processing at the network edge.',
      author: 'Lisa Thompson',
      date: 'February 22, 2024',
      readTime: '4 min read',
      category: 'IoT',
      slug: 'edge-computing-iot-applications'
    },
    {
      id: 6,
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'A comprehensive guide to digital transformation strategies that drive business growth and innovation.',
      author: 'Robert Johnson',
      date: 'February 15, 2024',
      readTime: '10 min read',
      category: 'Digital Transformation',
      slug: 'digital-transformation-complete-guide'
    },
    {
      id: 7,
      title: 'Blockchain Technology in Modern Business Solutions',
      excerpt: 'Understanding how blockchain technology is being integrated into modern business solutions and use cases.',
      author: 'Emily Brown',
      date: 'February 8, 2024',
      readTime: '6 min read',
      category: 'Blockchain',
      slug: 'blockchain-modern-business-solutions'
    },
    {
      id: 8,
      title: 'DevOps Best Practices for Modern Teams',
      excerpt: 'Essential DevOps practices that help teams deliver software faster and more reliably.',
      author: 'Alex Rodriguez',
      date: 'February 1, 2024',
      readTime: '7 min read',
      category: 'DevOps',
      slug: 'devops-best-practices-modern-teams'
    },
    {
      id: 9,
      title: 'Data Analytics in Digital Transformation',
      excerpt: 'How data analytics is driving digital transformation initiatives and enabling data-driven decision making.',
      author: 'Maria Garcia',
      date: 'January 25, 2024',
      readTime: '5 min read',
      category: 'Data Analytics',
      slug: 'data-analytics-digital-transformation'
    }
  ];

  const categories = [
    { name: 'AI & Machine Learning', count: 12, color: 'blue' },
    { name: 'Cloud Solutions', count: 8, color: 'purple' },
    { name: 'Cybersecurity', count: 10, color: 'red' },
    { name: 'Digital Transformation', count: 15, color: 'green' },
    { name: 'Blockchain', count: 6, color: 'yellow' },
    { name: 'DevOps', count: 9, color: 'indigo' },
    { name: 'IoT', count: 7, color: 'pink' },
    { name: 'Data Analytics', count: 11, color: 'teal' }
  ];

  const getCategoryColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-800',
      purple: 'bg-purple-100 text-purple-800',
      red: 'bg-red-100 text-red-800',
      green: 'bg-green-100 text-green-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      indigo: 'bg-indigo-100 text-indigo-800',
      pink: 'bg-pink-100 text-pink-800',
      teal: 'bg-teal-100 text-teal-800'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-800';
  };

  return (
    <MainLayout 
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology from Zion Tech Group's expert team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Insights, trends, and best practices in technology from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest insights and expert perspectives on technology trends and innovations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Featured</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category.toLowerCase().includes('ai') ? 'blue' : post.category.toLowerCase().includes('cloud') ? 'purple' : 'red')}`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="hover:text-blue-600 transition-colors cursor-pointer">
                        {post.title}
                      </span>
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                <p className="text-gray-600">Stay updated with our latest insights and expert perspectives.</p>
              </div>
              
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category.toLowerCase().includes('ai') ? 'blue' : post.category.toLowerCase().includes('cloud') ? 'purple' : post.category.toLowerCase().includes('cyber') ? 'red' : 'green')}`}>
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          <Link href={`/blog/${post.slug}`}>
                            <span className="hover:text-blue-600 transition-colors cursor-pointer">
                              {post.title}
                            </span>
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          
                          <Link href={`/blog/${post.slug}`}>
                            <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Link key={index} href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                        <span className="flex items-center">
                          <Tag className="w-4 h-4 mr-2" />
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Get the latest insights and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Technology Trends</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights, trends, and best practices in technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center">
                Get in Touch
              </span>
            </Link>
            <Link href="/services">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center">
                Explore Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;