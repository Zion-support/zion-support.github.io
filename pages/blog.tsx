import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  Clock,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Code,
  Cloud,
  Shield
} from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    title: "The Future of AI in Business: Trends and Predictions for 2024",
    excerpt: "Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "/api/placeholder/800/400",
    slug: "future-of-ai-in-business-2024"
  };

  const blogPosts = [
    {
      title: "Building Scalable Microservices Architecture",
      excerpt: "Learn how to design and implement microservices that can handle millions of requests.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Architecture",
      image: "/api/placeholder/400/250",
      slug: "scalable-microservices-architecture"
    },
    {
      title: "Cloud Security Best Practices for 2024",
      excerpt: "Essential security measures every organization should implement in their cloud infrastructure.",
      author: "Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Security",
      image: "/api/placeholder/400/250",
      slug: "cloud-security-best-practices-2024"
    },
    {
      title: "The Rise of No-Code Development Platforms",
      excerpt: "How no-code platforms are democratizing software development and what it means for businesses.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Development",
      image: "/api/placeholder/400/250",
      slug: "rise-of-nocode-development-platforms"
    },
    {
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Strategies for leveraging big data to drive business decisions and improve performance.",
      author: "Sarah Johnson",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Data Analytics",
      image: "/api/placeholder/400/250",
      slug: "data-analytics-turning-information-into-insights"
    },
    {
      title: "Mobile-First Design: Why It Matters in 2024",
      excerpt: "The importance of mobile-first design and how it impacts user experience and business success.",
      author: "Emily Rodriguez",
      date: "December 3, 2024",
      readTime: "4 min read",
      category: "Design",
      image: "/api/placeholder/400/250",
      slug: "mobile-first-design-why-it-matters-2024"
    },
    {
      title: "DevOps Culture: Building Better Software Faster",
      excerpt: "How adopting DevOps practices can accelerate development cycles and improve product quality.",
      author: "Michael Chen",
      date: "December 1, 2024",
      readTime: "6 min read",
      category: "DevOps",
      image: "/api/placeholder/400/250",
      slug: "devops-culture-building-better-software-faster"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: Lightbulb, count: 12 },
    { name: "Cloud Computing", icon: Cloud, count: 8 },
    { name: "Security", icon: Shield, count: 6 },
    { name: "Development", icon: Code, count: 15 },
    { name: "Data Analytics", icon: TrendingUp, count: 9 },
    { name: "DevOps", icon: BookOpen, count: 7 }
  ];

  const popularTags = [
    "React", "Node.js", "AWS", "Docker", "Kubernetes", "Python", 
    "Machine Learning", "Cybersecurity", "API Design", "Microservices"
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights, tutorials, and trends in technology from Zion Tech Group's expert team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Technology Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Insights, tutorials, and industry trends from our team of technology experts. 
                Stay ahead of the curve with our latest articles.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                Featured Article
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-3">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span>{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg opacity-90">Featured Article</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white opacity-80" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-blue-100 text-blue-800 text-xs mr-2">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" size="sm">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories and Tags */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Categories */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <category.icon className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count} articles</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter and never miss the latest technology insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;