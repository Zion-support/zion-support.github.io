import React from 'react';

import { Link } from 'react-router-dom';

import Navigation from '../components
import Footer from '../components
import SEOOptimizer from '../components
import { Calendar, ArrowRight, TrendingUp, Users, Award, Globe, Zap, Brain, Shield, Code, BarChart, MessageSquare, Eye, Cpu, Target, Lock, BarChart3, FileText, Search, Bot, Calculator, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Clock3, Compass, PieChart, TrendingDown, Activity } from 'lucide-react;

;

const NewsPage: React.FC = () => {';

const newsArticles = [;';

    {
      i,
    d: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Analytics Dashboard',
      excerpt: 'Our new AI-powered analytics platform delivers 45% revenue increase and 60% productivity boost for enterprise clients.',
      date: '2025-01-28',
      category: 'Product Launch',
      image: '📊',
      featured: true,
      readTime: 5 min read
    },
    {
      id: 2,
      title: 'AI Enterprise Transformatio,
    n: $50M Annual Savings Achieved',
      excerpt: 'Fortune 500 companies achieve unprecedented savings through our comprehensive AI transformation strategies.',
      date: '2025-01-25',
      category: 'Success Story',
      image: '💰',
      featured: true,
      readTime: 8 min read
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthroug,
    h: Next-Gen Algorithms Ready',
      excerpt: 'Revolutionary quantum algorithms deliver exponential speedup for complex optimization problems.',
      date: '2025-01-22',
      category: 'Technology',
      image: '⚡',
      featured: false,
      readTime: 6 min read
    },
    {
      id: 4,
      title: 'Autonomous Systems Revolutio,
    n: Self-Managing Infrastructure',
      excerpt: 'Self-healing systems and predictive maintenance transform enterprise operations with zero-downtime guarantees.',
      date: '2025-01-20',
      category: 'Innovation',
      image: '🤖',
      featured: false,
      readTime: 7 min read
    },
    {
      id: 5,
      title: 'AI Cybersecurit,
    y: 99.9% Threat Detection Rate Achieved',
      excerpt: 'Advanced AI-powered security solutions provide real-time threat detection and automated response.',
      date: '2025-01-18',
      category: 'Security',
      image: '🔒',
      featured: false,
      readTime: 4 min read
    },
    {
      id: 6,
      title: 'Micro SAAS Solution,
    s: 12 New AI Tools Launched',
      excerpt: 'Comprehensive suite of AI-powered business tools now available for immediate deployment.',
      date: '2025-01-15',
      category: 'Product Launch',
      image: '🛠️',
      featured: false,
      readTime: 5 min read
    }

  ];

;

const categories = ['All', 'Product Launch', 'Success Story', 'Technology', 'Innovation', 'Security];;

;

const stats = [;;

    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI' },
    { icon: Globe, number: '25+', label: 'Countries Served' }

  ];

  return (

    <React.Fragment>
      <SEOOptimizer
        title="News & Updates - Zion Tech Group"
        description="Stay updated with the latest news, product launches, and success stories from Zion Tech Group. Discover our AI innovations and enterprise transformations."
        keywords={['AI news', 'technology updates', 'product launches', 'success stories', 'enterprise AI', 'innovation']}

        canonicalUrl="https://ziontechgroup.com/news"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              News & Updates
            <
            <p className="text-xl text-cyan-400 mb-8">
              Stay informed with our latest innovations and success stories
            <
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Discover the latest developments in AI technology, product launches, 
              client success stories, and industry insights from Zion Tech Group.
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
              ))}

            <
          <

          {/* Featured Articles *
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Featured News
            <
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newsArticles.filter(article => article.featured).map((article) => (<article key={article.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{article.image}<
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}

                        <
                        <span className="text-gray-400 text-sm">{article.readTime}<
                      <
                      <div className="flex items-center text-gray-400 text-sm">
                        
                    {article.title}

                  <
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}

                  <
                  
                    Read More
                    
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Latest Updates
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-6">
              {newsArticles.map((article) => (<article key={article.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{article.image}<
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          {article.category}

                        <
                        <span className="text-gray-400 text-xs">{article.readTime}<
                      <
                      <div className="flex items-center text-gray-400 text-xs">
                        
                    {article.title}

                  <
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {article.excerpt}

                  <
                  
                    Read More
                    
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Stay Updated
              <
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest AI insights and company updates
              <
              <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
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
