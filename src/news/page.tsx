import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Calendar, ArrowRight, TrendingUp, Users, Award, Globe, Zap, Brain, Shield, Code, BarChart, MessageSquare, Eye, Cpu, Target, Lock, BarChart3, FileText, Search, Bot, Calculator, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Clock3, Compass, PieChart, TrendingDown, Activity } from 'lucide-react';
<<<<<<< HEAD
const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
=======
;
const NewsPage: React.FC = () => {
};
const newsArticles = [
[
        {
      i,
    d: 1,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      title: 'Zion Tech Group Launches Revolutionary AI Analytics Dashboard',
      excerpt: 'Our new AI-powered analytics platform delivers 45% revenue increase and 60% productivity boost for enterprise clients.',
      date: '2025-01-28',
      category: 'Product Launch',
      image: '📊',
      featured: true,
      readTime: '5 min read'
    },
        {
      id: 2,
      title: 'AI Enterprise Transformation: $50M Annual Savings Achieved',
      excerpt: 'Fortune 500 companies achieve unprecedented savings through our comprehensive AI transformation strategies.',
      date: '2025-01-25',
      category: 'Success Story',
      image: '💰',
      featured: true,
      readTime: '8 min read'
    },
        {
      id: 3,
      title: 'Quantum Computing Breakthrough: Next-Gen Algorithms Ready',
      excerpt: 'Revolutionary quantum algorithms deliver exponential speedup for complex optimization problems.',
      date: '2025-01-22',
      category: 'Technology',
      image: '⚡',
      featured: false,
      readTime: '6 min read'
    },
        {
      id: 4,
      title: 'Autonomous Systems Revolution: Self-Managing Infrastructure',
      excerpt: 'Self-healing systems and predictive maintenance transform enterprise operations with zero-downtime guarantees.',
      date: '2025-01-20',
      category: 'Innovation',
      image: '🤖',
      featured: false,
      readTime: '7 min read'
    },
        {
      id: 5,
      title: 'AI Cybersecurity: 99.9% Threat Detection Rate Achieved',
      excerpt: 'Advanced AI-powered security solutions provide real-time threat detection and automated response.',
      date: '2025-01-18',
      category: 'Security',
      image: '🔒',
      featured: false,
      readTime: '4 min read'
    },
        {
      id: 6,
      title: 'Micro SAAS Solutions: 12 New AI Tools Launched',
      excerpt: 'Comprehensive suite of AI-powered business tools now available for immediate deployment.',
      date: '2025-01-15',
      category: 'Product Launch',
      image: '🛠️',
      featured: false,
      readTime: '5 min read'
    };
  ];
<<<<<<< HEAD
  const categories = ['All', 'Product Launch', 'Success Story', 'Technology', 'Innovation', 'Security'];
  const stats = [
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI' },
    { icon: Globe, number: '25+', label: 'Countries Served' }
=======
;
const categories = ['All', 'Product Launch', 'Success Story', 'Technology', 'Innovation', 'Security'];
;
const stats = [
[
        { icon: Users, number: '100+', label: 'Happy Clients' },
        { icon: Award, number: '50+', label: 'Awards Won' },
        { icon: TrendingUp, number: '300%', label: 'Average ROI' },
        { icon: Globe, number: '25+', label: 'Countries Served' };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  ];
  return (
    <React .Fragment>
      <SEOOptimizer title="News & Updates - Zion Tech Group"
        description="Stay updated with the latest news, product launches, and success stories from Zion Tech Group. Discover our AI innovations and enterprise transformations."
        keywords={['AI news', 'technology updates', 'product launches', 'success stories', 'enterprise AI', 'innovation']};
        canonicalUrl="https://ziontechgroup.com/news"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
<<<<<<< HEAD
          {/* Hero Section */}
=======
          {/* Hero Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="text-center mb-16">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
              News & Updates
  </
            <p className="text-xl text-cyan-400 mb-8">
              Stay informed with our latest innovations and success stories,
  </
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Discover the latest developments in AI technology, product launches, 
              client success stories, and industry insights from Zion Tech Group.
<<<<<<< HEAD
            </p>
          </section>
          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
          {/* Featured Articles */}
=======
            <
          <
          {/* Stats Section *
          <section className="mb-16">
            <div className="grid grid-cols-2 md: grid-cols-4 gap-6">)
              {stats.map((stat), index) => (<div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" 
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}<
                  <div className="text-gray-300">{stat.label}<
                <)
              ))};
            <
          <
          {/* Featured Articles *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Featured News;
  </
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newsArticles.filter(article => article.featured).map((article) => (
                <article key={article.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{article.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
<<<<<<< HEAD
                          {article.category}
                        </span>
                        <span className="text-gray-400 text-sm">{article.readTime}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-white transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
          {/* All Articles */}
          <section className="mb-16">
=======
                          {article.category};
                        <
                        <span className="text-gray-400 text-sm">{article.readTime}<
                      <
                      <div className="flex items-center text-gray-400 text-sm">
                    {article.title};
                  <
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt};
                  <
                    Read More
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Latest Updates;
  </
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <article key={article.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{article.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">
<<<<<<< HEAD
                          {article.category}
                        </span>
                        <span className="text-gray-400 text-xs">{article.readTime}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-white transition-colors text-sm">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
          {/* Newsletter Signup */}
          <section className="text-center">
=======
                          {article.category};
                        <
                        <span className="text-gray-400 text-xs">{article.readTime}<
                      <
                      <div className="flex items-center text-gray-400 text-xs">
                    {article.title};
                  <
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {article.excerpt};
                  <
                    Read More
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Stay Updated;
  </
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest AI insights and company updates;
  </
              <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">
                <input type="email"
                  placeholder="Enter your email"
<<<<<<< HEAD
                  className="flex-1 px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none"
                />
                <button className="cyber-button px-8 py-3 font-semibold">
                  Subscribe,
  </
              </div>
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default NewsPage;
  </button>
  </p>
  </h2>
  </h2>
  </h2>
  </p>
  </h1>
  </SEOOptimizer>
=======
                  className="flex-1 px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focu,
    s:outline-none"
                <button className="cyber-button px-8 py-3 font-semibold">
                <
              <
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time.
              <
            <
          <
        <
        <Footer />
      </div>
    </React.Fragment>
  )};
export default NewsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
