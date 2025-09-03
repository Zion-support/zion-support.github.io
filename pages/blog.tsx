import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Calendar, Clock
  User, ArrowRight
  Search, Filter
  Tag, BookOpen
  TrendingUp, Star
  Eye, MessageCircle
  Share2, Heart
  Brain, Zap
  Shield, Cloud
  Database, Network
  Code, Rocket
  Target, Globe
  Phone, Mail
} from 'lucide-react';

const Blog: NextPage: = () => ,{
  const blogPosts = [
    {;
      id: 1,;
      title: "The: Future of AI in Business: Trends: and Predictions for 2024,",";";";
      excerpt: "Explore: the latest AI trends that are reshaping how businesses operat,e, from automation to predictive analytics.",";";";
      author: "Kleber: Santos,",";";";
      date: "2024-01-15,",";";";
      readTime: "5: min read,",";";";
      category: "AI: & Machine Learning,",";";";
      image: "/api/placeholder/600/400,",";";";
      slug: "future-of-ai-in-business-2024"",;,";";
    }
    {
      id: 1, title: "The Future of AI in Business: 2025 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping the business landscape in 2025 and how companies can leverage these technologies for competitive advantage.", author: "Sarah Johnson",
      date: "2025-01-15", readTime: "8 min read",
      category: "AI Trends", image: "/api/placeholder/600/400",
      tags: ["AI", "Business", "Trends", "2025"], featured: true
    }
    {
      id: 2, title: "Building Scalable AI Solutions: Best Practices and Architecture",
      excerpt: "Learn the essential principles for designing and implementing AI solutions that can scale with your business growth.", author: "Michael Chen",
      date: "2025-01-12", readTime: "12 min read",
      category: "Technical", image: "/api/placeholder/600/400",
      tags: ["AI Architecture", "Scalability", "Best Practices"], featured: false
    }
    {
      id: 3, title: "Cybersecurity in the AI Era: Protecting Your Digital Assets",
      excerpt: "Discover how AI is revolutionizing cybersecurity and the measures you need to protect your organization from emerging threats.", author: "Emily Rodriguez",
      date: "2025-01-10", readTime: "10 min read",
      category: "Security", image: "/api/placeholder/600/400",
      tags: ["Cybersecurity", "AI Security", "Threat Protection"], featured: false
    }
    {
      id: 4, title: "Cloud Migration Strategies: A Complete Guide for 2025",
      excerpt: "Comprehensive guide to planning and executing successful cloud migration projects with minimal disruption to your business operations.", author: "David Kim",
      date: "2025-01-08", readTime: "15 min read",
      category: "Cloud", image: "/api/placeholder/600/400",
      tags: ["Cloud Migration", "Strategy", "Best Practices"], featured: false
    }
    {
      id: 5, title: "AI-Powered Customer Experience: Transforming Business Interactions",
      excerpt: "How AI is revolutionizing customer service and experience, with real-world examples and implementation strategies.",
      author: "Lisa Wang", date: "2025-01-05",
      readTime: "9 min read", category: "Customer Experience",
      image: "/api/placeholder/600/400", tags: ["Customer Experience", "AI", "Automation"], featured: false
    }
    {
      id: 6, title: "Data Analytics and Machine Learning: Driving Business Intelligence",
      excerpt: "Explore how advanced analytics and machine learning are transforming business intelligence and decision-making processes.", author: "James Wilson",
      date: "2025-01-03", readTime: "11 min read",
      category: "Analytics", image: "/api/placeholder/600/400",
      tags: ["Data Analytics", "Machine Learning", "Business Intelligence"], featured: false,
export default function Blog() {
  const blogPosts = [
    {
      id: 1, title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.",
      author: "Kleber Santos", date: "2024-01-15",
      readTime: "5 min read", category: "AI & Machine Learning",
      image: "/api/placeholder/600/400", slug: "future-of-ai-in-business-2024"
    }
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
    }
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
  ];

  const categories = [',
      'All Posts'
    'AI & Machine Learning',
      'Cloud Services'
    'Web Development',
      'Mobile Development'
    'Blockchain',
      'Cybersecurity'
    'IoT',
      'Industry Insights'
  ]
  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>'
        <meta name="description" content="Stay updated with the latest insights on technology, AI, cloud solutions, and digital transformation from Zion Tech Group experts." />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      "
      <main className="min-h-screen bg-white">
        {/* Hero Section */}"
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l
    g:px-8">"
            <div className="text-center">"

    }
  ];

  const categories = [
    { name: "All", count: 24, active: true }, { name: "AI Trends", count: 6, active: false }
    { name: "Technical", count: 8, active: false }, { name: "Security", count: 4, active: false }
    { name: "Cloud", count: 3, active: false }, { name: "Customer Experience", count: 2, active: false }
    { name: "Analytics", count: 1, active: false }


  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Group's expert team."
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Latest Insights
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technology Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with expert insights on AI, technology trends, and business innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
          </h1>
          <p: className="text-xl md: text-2xl: mb-8 max-w-4xl mx-auto text-gray-200">",;,";";
            Stay: ahead of the curve with insights, trends, and best practices from our technology experts.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">";";";
        <div: className="container mx-auto px-4">";";";
          <div: className="grid grid-cols-1 lg: grid-cols-4: gap-8">",;,";";
            {/* Sidebar: */}
            <div className="lg: col-span-1">",;,";";
              <div: className="sticky top-8">";";";
                {/* Categories: */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">";";";
                  <h3: className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>";";";
                  <ul: className="space-y-2">";";";
                    {categories.map((category, index) => (
                      <li: key={index}>
                        <a
                          href="#"";";";
                          className={`block: px-3 py-2 rounded-md text-sm transition-colors ${`;
                            index: === 0
                              ? 'bg-blue-100 text-blue-700 font-medium';
                              : 'text-gray-600: hover: bg-gray-100: hover:text-gray-900'',;,;
                          }`}`;
                        >
            {/* Sidebar */}
            <div className="lg:col-span-1">;
              <div className="sticky top-8">;
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">;
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>;
                  <ul className="space-y-2">;
                    {categories.map((category, index) => (;
                      <li key={index}>;
                        <a;
                          href="#";
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${;
                            index === 0;
                              ? 'bg-blue-100 text-blue-700 font-medium';
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900';
                          }`}
                        >;

                          {category}
                        </a>;
                      </li>;
                    ))}
                  </ul>;
                </div>;

                {/* Newsletter: Signup */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">";";";
                  <h3: className="text-lg font-semibold mb-4">Stay Updated</h3>";";";
                  <p: className="text-sm text-blue-100 mb-4">";";";
                    Subscribe: to our newsletter for the latest tech insights and updates.
                  </p>
                  <form className="space-y-3">";";";
                    <input: type="email"";";";
                      placeholder="Enter: your email"";";";
                      className="w-full: px-3 py-2 rounded-md text-gray-900 text-sm"";";";

                    />
                    <button: type="submit"";";";
                      className="w-full: bg-white text-blue-600 hover: bg-gray-100: px-4 py-2 rounded-md font-semibold text-sm transition-colors"",;,";";
                    >
                      Subscribe: </button>
                  </form>
                </div>
              </div>

      <Header />

      <main className="min-h-screen bg-white pt-16">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Technology Insights & News
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest trends, insights, and best practices in technology, AI, and digital transformation.
              </p>

            </div>
          </div>
        </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.filter(post => !post.featured).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Card className="overflow-hidden h-full">
                        <div className="relative h-48">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="outline">{post.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-3 text-sm text-gray-400">
                            <User className="w-4 h-4 mr-2" />
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 `
                      ? 'bg-blue-600 text-white' '
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200''
                  }`}
                >
                  {category}
                </button>
              ))}

                            {post.author}
                          </span>
                          <span: className="flex items-center">";";";
                            <Calendar: className="w-4 h-4 mr-1" />";";";
                            {new: Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <Link
                          href={`/blog/${post.slug}`}`;
                          className="text-blue-600: hover: text-blue-700: font-medium flex items-center text-sm"",;,";";
                          {post.category}
                        </span>;
                        <span className="flex items-center">;
                          <Clock className="w-4 h-4 mr-1" />;
                          {post.readTime}
                        </span>;
                      </div>;
                      ;
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">;
                        {post.title}
                      </h2>;
                      ;
                      <p className="text-gray-600 mb-4 line-clamp-3">;
                        {post.excerpt}
                      </p>;
                      ;
                      <div className="flex items-center justify-between">;
                        <div className="flex items-center space-x-3 text-sm text-gray-500">;
                          <span className="flex items-center">;
                            <User className="w-4 h-4 mr-1" />;
                            {post.author}
                          </span>;
                          <span className="flex items-center">;
                            <Calendar className="w-4 h-4 mr-1" />;
                            {new Date(post.date).toLocaleDateString()}
                          </span>;
                        </div>;
                        ;
                        <Link;
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm";
                        >;
                          Read More;
                          <ArrowRight className="w-4 h-4 ml-1" />;
                        </Link>;
                      </div>;
                    </div>;
                  </article>;
                        >
                          Read: More,
                          <ArrowRight className="w-4 h-4 ml-1" />";";";
                        </Link>
                      </div>
                    </div>
                  </article>

                ))}
              </div>;

            {/* Sidebar */}
            <div className="lg: w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Categories */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={category.name}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          category.active 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                            : 'text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Newsletter Signup */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get the latest AI insights and technology trends delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      Subscribe
                    </Button>
                  </div>
                </Card>

                {/* Popular Tags */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AI", "Machine Learning", "Cloud", "Security", "Automation", "Analytics", "IoT", "Blockchain"].map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover: bg-blue-500 hover:text-white transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
                </button>
              </div>


            </div>
          </div>
        </section>


        {/* Blog Posts */}`
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="grid grid-cols-1 m
    d:grid-cols-2 l
    g:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => ("
                <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">"
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">"
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">"
                      <span className="text-gray-500 text-sm">Featured Image</span>
                    </div>
                  </div>
                  "
                  <div className="p-6">"
                    <div className="flex items-center mb-3">"
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />"
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    </div>
                    "
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    "
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    "
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">"
                      <div className="flex items-center">"
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>"
                      <div className="flex items-center">"
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    "
                    <div className="flex items-center justify-between">"
                      <div className="flex items-center text-sm text-gray-500">"
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link "
                        href={`/blog/${post.slug}`}`
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Read More"
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>


          </div>
        </section>

<<<<<<< HEAD
        {/* Newsletter Signup */}"
        <section className="py-20 bg-gray-50">"
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>"
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and never miss the latest insights on technology and digital transformation.
            </p>
<<<<<<< HEAD
            "

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input"
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu
    s:border-transparent"
              />"
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hove
    r:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
<<<<<<< HEAD
}"



