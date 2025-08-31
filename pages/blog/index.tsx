import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2024",
      excerpt: "Discover the latest AI trends that are transforming how businesses operate and compete in the digital landscape.",
      category: "Artificial Intelligence",
      author: "Kleber Santos",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      slug: "future-of-ai-business-2024"
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential strategies and best practices for successful cloud migration projects.",
      category: "Cloud Computing",
      author: "Sarah Johnson",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      slug: "cloud-migration-best-practices"
    },
    {
      id: 3,
      title: "Cybersecurity Threats in 2024: What You Need to Know",
      excerpt: "Stay ahead of the latest cybersecurity threats and learn how to protect your business.",
      category: "Cybersecurity",
      author: "Michael Chen",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "cybersecurity-threats-2024"
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Explore the latest technologies and frameworks for building scalable web applications.",
      category: "Web Development",
      author: "Emily Rodriguez",
      date: "2024-01-01",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      slug: "scalable-web-applications"
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: Benefits and Use Cases",
      excerpt: "Understand how edge computing is revolutionizing data processing and delivery.",
      category: "Technology",
      author: "David Kim",
      date: "2023-12-28",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      slug: "rise-of-edge-computing"
    },
    {
      id: 6,
      title: "Data Privacy Regulations: Compliance Strategies for Businesses",
      excerpt: "Navigate the complex landscape of data privacy regulations and ensure compliance.",
      category: "Compliance",
      author: "Lisa Wang",
      date: "2023-12-20",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      slug: "data-privacy-regulations"
    }
  ];

  const categories = [
    "All Posts",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Web Development",
    "Technology",
    "Compliance"
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI trends, cloud computing, cybersecurity, web development, Zion Tech Group" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest technology trends, insights, and best practices 
            from our team of experts.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    index === 0
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm font-semibold mb-2">FEATURED POST</div>
                    <h2 className="text-3xl font-bold mb-4">The Future of AI in Business: Trends to Watch in 2024</h2>
                    <p className="text-blue-100 mb-6">
                      Discover the latest AI trends that are transforming how businesses operate and compete in the digital landscape.
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span>By Kleber Santos</span>
                      <span>•</span>
                      <span>Jan 15, 2024</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">Artificial Intelligence</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      As we move into 2024, artificial intelligence continues to reshape the business landscape. 
                      From automated customer service to predictive analytics, AI is becoming an integral part 
                      of modern business operations. In this comprehensive guide, we'll explore the key trends 
                      that will define AI adoption in the coming year.
                    </p>
                    <Link href="/blog/future-of-ai-business-2024">
                      <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Tag className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-semibold text-sm">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">By {post.author}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm cursor-pointer">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest technology insights and updates directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;