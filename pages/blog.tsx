import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { 
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Star,
  Eye,
  MessageCircle,
  Share2,
  BookOpen,
  Lightbulb,
  Zap,
  Shield,
  Cloud,
  Brain,
  Code,
  Database,
  Smartphone,
  Globe,
  Lock,
  Settings,
  BarChart3,
  Target,
  Rocket,
  CheckCircle
} from 'lucide-react';

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI in Business: 2025 Trends and Predictions",
    excerpt: "Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the rapidly evolving digital landscape.",
    content: "Artificial intelligence continues to revolutionize how businesses operate, from customer service automation to predictive analytics and decision-making processes. In 2025, we're seeing unprecedented adoption of AI technologies across all sectors...",
    author: "Dr. Sarah Chen",
    authorRole: "AI Research Director",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "🧠",
    tags: ["AI", "Machine Learning", "Business Strategy", "Technology Trends"],
    views: 1250,
    likes: 89,
    comments: 23
  };

  const blogPosts = [
    {
      title: "Micro SaaS: The New Era of Software Development",
      excerpt: "Learn why micro SaaS solutions are becoming the preferred choice for modern businesses and how to get started with your own platform.",
      author: "Michael Rodriguez",
      authorRole: "SaaS Specialist",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Business Strategy",
      image: "📱",
      tags: ["Micro SaaS", "Software Development", "Business Growth"],
      views: 980,
      likes: 67,
      comments: 15,
      featured: true
    },
    {
      title: "Cybersecurity Best Practices for 2025",
      excerpt: "Essential security measures every business should implement to protect against evolving cyber threats and ensure data protection.",
      author: "Alex Thompson",
      authorRole: "Cybersecurity Expert",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Security",
      image: "🔒",
      tags: ["Cybersecurity", "Data Protection", "Best Practices"],
      views: 1100,
      likes: 78,
      comments: 19,
      featured: true
    },
    {
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Step-by-step guide to successfully migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.",
      author: "Jennifer Liu",
      authorRole: "Cloud Solutions Architect",
      date: "January 8, 2025",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "☁️",
      tags: ["Cloud Migration", "Enterprise", "Infrastructure"],
      views: 850,
      likes: 54,
      comments: 12,
      featured: false
    },
    {
      title: "Building Scalable Microservices Architecture",
      excerpt: "Learn how to design and implement microservices that can scale with your business growth and changing requirements.",
      author: "David Park",
      authorRole: "Software Architect",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Software Development",
      image: "⚙️",
      tags: ["Microservices", "Architecture", "Scalability"],
      views: 720,
      likes: 45,
      comments: 8,
      featured: false
    },
    {
      title: "The Rise of Edge Computing in 2025",
      excerpt: "Explore how edge computing is transforming data processing and enabling real-time applications across industries.",
      author: "Maria Garcia",
      authorRole: "Edge Computing Specialist",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Technology Trends",
      image: "🌐",
      tags: ["Edge Computing", "Real-time Processing", "IoT"],
      views: 650,
      likes: 38,
      comments: 6,
      featured: false
    },
    {
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Discover how advanced analytics can help your business make data-driven decisions and gain competitive advantages.",
      author: "Robert Kim",
      authorRole: "Data Scientist",
      date: "December 30, 2024",
      readTime: "8 min read",
      category: "Data Science",
      image: "📊",
      tags: ["Data Analytics", "Business Intelligence", "Insights"],
      views: 920,
      likes: 62,
      comments: 14,
      featured: false
    }
  ];

  const categories = [
    { name: "AI & Technology", count: 15, icon: Brain },
    { name: "Business Strategy", count: 12, icon: Target },
    { name: "Security", count: 8, icon: Shield },
    { name: "Cloud Computing", count: 10, icon: Cloud },
    { name: "Software Development", count: 18, icon: Code },
    { name: "Data Science", count: 7, icon: BarChart3 }
  ];

  const popularTags = [
    "AI", "Machine Learning", "Micro SaaS", "Cloud Migration", "Cybersecurity", 
    "Data Analytics", "Business Growth", "Technology Trends", "Software Development", 
    "Digital Transformation", "Automation", "Best Practices"
  ];

  const newsletterSignup = {
    title: "Stay Updated with Latest Tech Insights",
    description: "Get weekly updates on technology trends, best practices, and industry insights delivered to your inbox.",
    subscribers: "2,500+",
    benefits: [
      "Weekly tech insights and trends",
      "Exclusive industry reports",
      "Early access to new content",
      "Expert tips and best practices"
    ]
  };

  return (
    <>
      <Head>
        <title>Tech Blog - Zion Tech Group | Latest Technology Insights & Trends</title>
        <meta name="description" content="Stay ahead with our latest articles on AI, cloud computing, cybersecurity, micro SaaS, and technology trends. Expert insights from industry professionals." />
        <meta name="keywords" content="tech blog, AI insights, cloud computing, cybersecurity, micro SaaS, technology trends, business strategy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Insights & Trends
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, 
                micro SaaS, and the latest technology trends shaping the future of business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#featured" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Read Latest Articles
                </Link>
                <Link href="#newsletter" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Subscribe to Newsletter
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section id="featured" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
              <p className="text-xl text-gray-600">Our most popular and insightful content</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-pink-500 p-8 flex items-center justify-center">
                  <div className="text-8xl">{featuredPost.image}</div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full mr-4">
                      {featuredPost.category}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                        <div className="text-sm text-gray-600">{featuredPost.authorRole}</div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views} views
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {featuredPost.comments} comments
                      </div>
                    </div>
                    <Link 
                      href="/blog/ai-future-business-2025" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search articles..." 
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                            {post.category}
                          </span>
                          {post.featured && (
                            <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="text-4xl mb-4">{post.image}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{post.author}</div>
                              <div className="text-xs text-gray-600">{post.authorRole}</div>
                            </div>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            <div className="flex items-center mb-1">
                              <Calendar className="w-3 h-3 mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {post.views}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </div>
                          </div>
                          <Link 
                            href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                          >
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Load More Articles
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-8 space-y-8">
                  {/* Categories */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                          <Link 
                            key={index}
                            href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          >
                            <div className="flex items-center">
                              <IconComponent className="w-5 h-5 text-blue-600 mr-3" />
                              <span className="text-gray-900">{category.name}</span>
                            </div>
                            <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                              {category.count}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <Link 
                          key={index}
                          href={`/blog/tag/${tag.toLowerCase()}`}
                          className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div id="newsletter" className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg text-white">
                    <h3 className="text-xl font-bold mb-2">{newsletterSignup.title}</h3>
                    <p className="text-blue-100 mb-4">{newsletterSignup.description}</p>
                    <div className="mb-4">
                      <div className="text-sm text-blue-200 mb-2">Join {newsletterSignup.subscribers} subscribers</div>
                      <ul className="text-sm text-blue-100 space-y-1">
                        {newsletterSignup.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                      />
                      <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Don't just read about technology trends - implement them. Let us help you turn insights into action.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}