'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  NewspaperIcon,
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
  TagIcon,
  ClockIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Advanced AI Cybersecurity Suite",
      excerpt: "Our new AI-powered cybersecurity solution provides real-time threat detection and automated response capabilities for enterprise clients.",
      content: "Zion Tech Group is proud to announce the launch of our revolutionary AI Cybersecurity Suite, designed to provide enterprise-level protection against evolving cyber threats. This cutting-edge solution combines machine learning algorithms with real-time monitoring to detect and respond to security incidents automatically.",
      author: "Kleber Santos",
      date: "2024-01-15",
      category: "Product Launch",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "5G Network Infrastructure Project Completed for Major City",
      excerpt: "Successfully deployed comprehensive 5G infrastructure for smart city initiatives, improving connectivity and enabling IoT applications.",
      content: "We're excited to announce the successful completion of our 5G network infrastructure project for a major metropolitan area. This deployment includes over 500 5G base stations and supports smart city applications including traffic management, environmental monitoring, and public safety systems.",
      author: "Sarah Johnson",
      date: "2024-01-10",
      category: "Project Update",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Saves Client $2M Annually",
      excerpt: "Our cloud optimization strategies helped a Fortune 500 company reduce infrastructure costs by 40% while improving performance.",
      content: "A recent cloud migration project for a Fortune 500 client resulted in significant cost savings and performance improvements. By implementing our multi-cloud strategy and automated scaling solutions, we helped the client reduce their infrastructure costs by 40% while improving application performance by 60%.",
      author: "David Thompson",
      date: "2024-01-08",
      category: "Case Study",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "New Micro SaaS Platform for Small Businesses",
      excerpt: "Introducing our new micro SaaS platform designed specifically for small and medium businesses to streamline operations.",
      content: "We've launched a new micro SaaS platform that provides small and medium businesses with affordable access to enterprise-level tools. The platform includes modules for project management, customer relationship management, and business analytics, all designed to scale with growing businesses.",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "Product Launch",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Cybersecurity Training Program Launched",
      excerpt: "New comprehensive cybersecurity training program helps organizations build internal security expertise and awareness.",
      content: "Our new cybersecurity training program is designed to help organizations build internal security expertise. The program includes hands-on training, simulated attacks, and certification opportunities for IT professionals and end-users alike.",
      author: "Michael Chen",
      date: "2024-01-03",
      category: "Training",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Partnership with Leading Cloud Provider",
      excerpt: "Strategic partnership with major cloud provider enables enhanced service offerings and expanded capabilities.",
      content: "We're excited to announce our strategic partnership with a leading cloud provider, which will enable us to offer enhanced cloud services and expanded capabilities to our clients. This partnership includes access to advanced cloud technologies and dedicated support resources.",
      author: "Kleber Santos",
      date: "2024-01-01",
      category: "Partnership",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = ["All", "Product Launch", "Project Update", "Case Study", "Training", "Partnership"];

  return (
    <>
      <Helmet>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, product launches, and project updates from Zion Tech Group. Read about our innovations in AI, cybersecurity, and cloud solutions." />
        <meta name="keywords" content="news, updates, product launches, project updates, case studies, AI, cybersecurity, cloud solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay informed with the latest news and updates from Zion Tech Group
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover our latest product launches, project updates, case studies, and industry insights 
              that showcase our commitment to innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            {newsArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <NewspaperIcon className="w-24 h-24 text-white opacity-50" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <UserIcon className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link 
                        to={`/news/${article.id}`}
                        className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2"
                      >
                        Read More <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article) => (
                <div key={article.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <NewspaperIcon className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link 
                        to={`/news/${article.id}`}
                        className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2"
                      >
                        Read More <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Subscribe to our newsletter for the latest news, updates, and insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-semibold">
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}