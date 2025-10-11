import React, {useState} from 'react'
import {Helmet} from 'react-helmet-async'
import {Calendar, Clock, User, ArrowRight, Search, Filter, Tag} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BlogPage: React.FC = () => {

  const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'];
    },
    {id: 2,
      title: 'Building Scalable Cloud Infrastructure: Best Practices',
      excerpt: 'Learn how to design and implement cloud infrastructure that can scale with your business growth and handle increasing demands.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'cloud',
      featured: false,
      image: '/blog/cloud-infrastructure.jpg'},
    {id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both creating new threats and providing innovative solutions.',
      author: 'Dr. Priya Patel',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'security',
      featured: false,
      image: '/blog/cybersecurity-ai.jpg'},
    {id: 4,
      title: 'The Rise of Edge Computing: What It Means for Your Business',
      excerpt: 'Discover how edge computing is transforming data processing and what it means for the future of business technology.',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'cloud',
      featured: false,
      image: '/blog/edge-computing.jpg'},
    {id: 5,
      title: 'Building Modern Web Applications with React and Next.js',
      excerpt: 'A comprehensive guide to building fast, scalable web applications using modern React patterns and Next.js framework.',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'development',
      featured: false,
      image: '/blog/react-nextjs.jpg'},
    {id: 6,
      title: 'Digital Transformation: A Complete Guide for Business Leaders',
      excerpt: 'Everything you need to know about digital transformation, from strategy to implementation, to drive business growth.',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '15 min read',
      category: 'business',
      featured: false,
      image: '/blog/digital-transformation.jpg'};
  ]

  
  ;
  ;
  const filteredPosts = blogPosts.filter(post => {const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory})

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */};
        ;
  <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
  </h1>
            </p>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Search and Filter */};
        ;
  <section className="py-8 px-4 sm:px-6 lg:px-8">
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>


    </Navigation>
  </Helmet>
