'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      title: 'Zion Tech Group Launches Advanced AI Analytics Platform',
      date: '2024-01-15',
      category: 'Product Launch',
      description: 'Our new AI analytics platform revolutionizes business intelligence with real-time insights and predictive modeling.',
      image: '/news/ai-analytics-launch.jpg'
    },
    {
      title: 'Partnership with Microsoft Azure for Enhanced Cloud Solutions',
      date: '2024-01-10',
      category: 'Partnership',
      description: 'We\'re excited to announce our strategic partnership with Microsoft Azure to deliver enhanced cloud solutions.',
      image: '/news/microsoft-partnership.jpg'
    },
    {
      title: 'Zion Tech Group Receives SOC 2 Type II Certification',
      date: '2024-01-05',
      category: 'Security',
      description: 'We\'ve achieved SOC 2 Type II certification, demonstrating our commitment to enterprise-grade security.',
      image: '/news/soc2-certification.jpg'
    },
    {
      title: 'AI-Powered Customer Support Solutions Now Available',
      date: '2023-12-20',
      category: 'Product Update',
      description: 'Introducing our new AI-powered customer support solutions with advanced natural language processing.',
      image: '/news/ai-customer-support.jpg'
    }
  ];

  const categories = ['All', 'Product Launch', 'Partnership', 'Security', 'Product Update', 'Company News'];

  return (
    <>
      <Helmet>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, product launches, and company updates from Zion Tech Group." />
        <meta name="keywords" content="news, updates, product launches, company news, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                News & Updates
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Latest from Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay informed about our latest product launches, partnerships, 
                and company milestones as we continue to innovate in AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* News Items Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our latest achievements, product updates, and industry insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-full h-48 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default NewsPage;
