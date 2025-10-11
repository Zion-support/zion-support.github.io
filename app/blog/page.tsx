<<<<<<< HEAD
import React, {useState} from 'react'
import {Helmet} from 'react-helmet-async'
import {Calendar, Clock, User, ArrowRight, Search, Filter, Tag} from 'lucide-react'
=======
'use client';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BlogPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
<<<<<<< HEAD
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
      image: '/blog/digital-transformation.jpg'}
  ]

  const filteredPosts = blogPosts.filter(post => {const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory})

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    
=======
    {
      icon: BarChart,
      title: 'Feature 2', 
      description: 'Description for feature 2.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      icon: CheckCircle,
      title: 'Feature 3',
      description: 'Description for feature 3.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5
      <Helmet>
        <title>Blog Page - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions for modern businesses." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Blog Page
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD

    </Navigation>
  </Helmet>
=======
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the powerful features that make our solutions stand out.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of working with industry leaders.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-lg font-medium text-gray-900">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5
