<<<<<<< HEAD
import type { NextPage } from 'next';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });;
const Link = dynamic(() => import('next/link'), { ssr: false });;
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
=======
import React from 'react';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
>>>>>>> main

export default function Blog() {
  const blogPosts = [
<<<<<<< HEAD
    {
      id: 1, title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.",
      author: "Kleber Santos", date: "2024-01-15",
      readTime: "5 min read", category: "AI & Machine Learning",
      image: "/api/placeholder/600/400", slug: "future-of-ai-in-business-2024"
    },
    {
      id: 2, title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential steps and strategies for successfully migrating your business to the cloud.", author: "Zion Tech Team",
      date: "2024-01-10", readTime: "8 min read",
      category: "Cloud Services", image: "/api/placeholder/600/400",
      slug: "cloud-migration-best-practices"
    }, {
      id: 3,
      title: "Building Scalable Web Applications with Modern Technologies", excerpt: "Discover the latest technologies and frameworks for creating robust, scalable web applications.", author: "Development Team",
      date: "2024-01-05", readTime: "6 min read",
      category: "Web Development", image: "/api/placeholder/600/400",
      slug: "scalable-web-applications-modern-tech"
    }, {
      id: 4,
      title: "Cybersecurity in 2024: Protecting Your Digital Assets", excerpt: "Essential cybersecurity strategies and tools to protect your business from evolving threats.",
      author: "Security Team", date: "2024-01-01",
      readTime: "7 min read", category: "Cybersecurity",
      image: "/api/placeholder/600/400", slug: "cybersecurity-2024-protecting-digital-assets"
    },
    {
      id: 5, title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "Compare native and cross-platform development approaches to choose the best solution for your mobile app.", author: "Mobile Team",
      date: "2023-12-28", readTime: "9 min read",
      category: "Mobile Development", image: "/api/placeholder/600/400",
      slug: "mobile-app-development-native-vs-cross-platform"
    }, {
      id: 6,
      title: "Blockchain Technology: Beyond Cryptocurrency", excerpt: "Explore real-world applications of blockchain technology in various industries beyond digital currencies.",
      author: "Blockchain Team", date: "2023-12-25",
      readTime: "6 min read", category: "Blockchain",
      image: "/api/placeholder/600/400", slug: "blockchain-technology-beyond-cryptocurrency"
=======
  {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt:
        'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/images/blog/ai-trends-2024.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
      excerpt:
        'Learn how micro SaaS platforms are revolutionizing software delivery and creating new opportunities for businesses.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Micro SaaS',
      image: '/images/blog/micro-saas-guide.jpg',
      featured: false,
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Small to Medium Businesses',
      excerpt:
        'Essential security measures every SMB should implement to protect their digital assets and customer data.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/images/blog/cybersecurity-smb.jpg',
      featured: false,
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt:
        'Step-by-step guide to successfully migrating your business to the cloud while minimizing risks and downtime.',
      author: 'Emily Rodriguez',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/images/blog/cloud-migration.jpg',
      featured: false,
    },
    {
      id: 5,
      title: 'Digital Transformation: Where to Start and How to Succeed',
      excerpt:
        'Practical advice for businesses embarking on their digital transformation journey.',
      author: 'Kleber Santos',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Digital Transformation',
      image: '/images/blog/digital-transformation.jpg',
      featured: false,
    },
    {
      id: 6,
      title: 'Building Custom APIs: Best Practices and Common Pitfalls',
      excerpt:
        'Learn the essential practices for building robust, scalable APIs that serve your business needs.',
      author: 'Michael Chen',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Development',
      image: '/images/blog/api-development.jpg',
<<<<<<< HEAD
      featured: false,
    },
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Micro SaaS',
    'Cybersecurity',
    'Cloud Computing',
    'Digital Transformation',
    'Development',
=======
      featured: false
>>>>>>> main
    }
  ];

  const categories = [
<<<<<<< HEAD
    "All Posts", "AI & Machine Learning",
    "Cloud Services", "Web Development",
    "Mobile Development", "Blockchain",
    "Cybersecurity", "IoT",
    "Industry Insights"
=======
    'All Posts,AI & Machine Learning,Micro SaaS,Cybersecurity,Cloud Computing,Digital Transformation,Development'
>>>>>>> main
>>>>>>> main
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
<<<<<<< HEAD
    <Layout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Group's expert team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Tech
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Blog</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Stay ahead of the curve with insights, trends, and best practices from our technology experts.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg: grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                            index === 0
                              ? 'bg-blue-100 text-blue-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                  <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Subscribe to our newsletter for the latest tech insights and updates.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-md text-gray-900 text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-blue-600 hover: bg-gray-100 px-4 py-2 rounded-md font-semibold text-sm transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
=======
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, IT services, micro SaaS, and technology trends from Zion Tech Group experts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/blog" />
      </Head>

      <Header />

      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Technology Insights & Updates
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest trends, best practices, and
                insights in AI, IT services, micro SaaS, and digital
                transformation.
              </p>
>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover: shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <Tag className="w-4 h-4 mr-1" />
                          {post.category}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover: text-blue-700 font-medium flex items-center text-sm"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-blue-600 hover: bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Load More Posts
                </button>
              </div>
=======
        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.'
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View Our Services
            </Link>
=======
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
              <div className="mb-8">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Post
                </span>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-6xl font-bold">
                        {featuredPost.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="md: w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {featuredPost.author
                              .split(' ')
                              .map(n => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {featuredPost.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {featuredPost.date}
                          </p>
                        </div>
                      </div>
                      <a
                        href={`/blog/${featuredPost.id}`}
                        className="flex items-center space-x-2 text-blue-600 hover: text-blue-700 font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm hover: shadow-md transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {post.author
                              .split(' ')
                              .map(n => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <a
                        href={`/blog/${post.id}`}
                        className="flex items-center space-x-1 text-blue-600 hover: text-blue-700 text-sm font-medium"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
>>>>>>> main
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest technology insights and
              updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
