import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  ArrowRight,
  Calendar,
  User,
  Tag,
  ExternalLink,
  Clock,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Shield
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const newsCategories = [
  { name: "All News", count: 45, active: true },
  { name: "Company Updates", count: 12, active: false },
  { name: "Product Releases", count: 8, active: false },
  { name: "Industry News", count: 15, active: false },
  { name: "Partnerships", count: 6, active: false },
  { name: "Awards", count: 4, active: false }
];

const featuredNews = [
  {
    title: "Zion Tech Group Launches Next-Generation AI Platform",
    excerpt: "Revolutionary AI platform with advanced machine learning capabilities now available for enterprise clients",
    category: "Product Releases",
    date: "2024-01-15",
    author: "Sarah Johnson",
    readTime: "5 min read",
    image: "/images/news/ai-platform-launch.jpg",
    featured: true,
    href: "/news/ai-platform-launch"
  },
  {
    title: "Partnership with Microsoft Azure Expands Cloud Capabilities",
    excerpt: "Strategic partnership brings enhanced cloud infrastructure and AI services to our clients",
    category: "Partnerships",
    date: "2024-01-10",
    author: "Michael Chen",
    readTime: "3 min read",
    image: "/images/news/microsoft-partnership.jpg",
    featured: true,
    href: "/news/microsoft-partnership"
  }
];

const recentNews = [
  {
    title: "Zion Tech Group Wins 'Best AI Solution' Award",
    excerpt: "Recognized for innovation in artificial intelligence and machine learning solutions",
    category: "Awards",
    date: "2024-01-08",
    author: "Emily Rodriguez",
    readTime: "4 min read",
    href: "/news/best-ai-solution-award"
  },
  {
    title: "New Office Opens in San Francisco",
    excerpt: "Expanding our presence on the West Coast to better serve our growing client base",
    category: "Company Updates",
    date: "2024-01-05",
    author: "David Kim",
    readTime: "3 min read",
    href: "/news/san-francisco-office"
  },
  {
    title: "Industry Report: AI Adoption Trends in 2024",
    excerpt: "Our latest research reveals key trends in enterprise AI adoption and implementation",
    category: "Industry News",
    date: "2024-01-03",
    author: "Lisa Wang",
    readTime: "6 min read",
    href: "/news/ai-adoption-trends-2024"
  },
  {
    title: "Security Update: Enhanced Data Protection Features",
    excerpt: "New security features provide even stronger protection for client data and applications",
    category: "Product Releases",
    date: "2024-01-01",
    author: "James Wilson",
    readTime: "4 min read",
    href: "/news/security-update-january"
  },
  {
    title: "Client Success: Healthcare AI Implementation",
    excerpt: "Case study highlights successful AI implementation at major healthcare provider",
    category: "Company Updates",
    date: "2023-12-28",
    author: "Maria Garcia",
    readTime: "5 min read",
    href: "/news/healthcare-ai-case-study"
  },
  {
    title: "Holiday Schedule and Support Availability",
    excerpt: "Information about our holiday schedule and continued support services",
    category: "Company Updates",
    date: "2023-12-20",
    author: "Support Team",
    readTime: "2 min read",
    href: "/news/holiday-schedule-2023"
  }
];

const pressReleases = [
  {
    title: "Zion Tech Group Announces $50M Series B Funding Round",
    excerpt: "Funding will accelerate product development and market expansion",
    date: "2024-01-12",
    href: "/news/series-b-funding"
  },
  {
    title: "New CEO Appointed to Lead Next Phase of Growth",
    excerpt: "Industry veteran brings extensive experience in AI and cloud technologies",
    date: "2024-01-05",
    href: "/news/new-ceo-appointment"
  },
  {
    title: "Partnership with Leading Cloud Providers Announced",
    excerpt: "Strategic partnerships expand our global reach and service capabilities",
    date: "2023-12-15",
    href: "/news/cloud-provider-partnerships"
  }
];

export default function NewsPage() {
  return (
    <MainLayout 
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Read about our product releases, partnerships, and industry developments."
      keywords="news, updates, announcements, press releases, company news, product releases, partnerships, industry news"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updates</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Stay informed with the latest news, announcements, and insights 
                from Zion Tech Group and the technology industry.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="#featured-news"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Read Latest News <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Subscribe to Updates
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {newsCategories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News Section */}
        <section id="featured-news" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">News</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Latest announcements and important updates from our team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                        <Calendar className="w-4 h-4 ml-4 mr-2" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <Link 
                        href={article.href}
                        className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                      >
                        Read More <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">News</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay up to date with our latest news and announcements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentNews.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {article.author}
                    </div>
                    <Link 
                      href={article.href}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                    >
                      Read More <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Press <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Releases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Official announcements and press releases from Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      Press Release
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(release.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {release.excerpt}
                  </p>

                  <Link 
                    href={release.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                  >
                    Read Press Release <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and never miss important updates, 
                product releases, and industry insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Subscribe to Newsletter <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}