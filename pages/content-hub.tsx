<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from '../lib/CompatLink';

const ContentHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', count: 156 },
    { id: 'blog', name: 'Blog Posts', count: 42 },
    { id: 'guides', name: 'Guides & Tutorials', count: 28 },
    { id: 'case-studies', name: 'Case Studies', count: 15 },
    { id: 'whitepapers', name: 'Whitepapers', count: 12 },
    { id: 'videos', name: 'Videos', count: 23 },
    { id: 'webinars', name: 'Webinars', count: 8 },
    { id: 'news', name: 'News & Updates', count: 28 },
  ];

  const featuredContent = [
    {
      id: 19,
      title: 'Agentic Evidence Graphs',
      excerpt: 'Connect evals, traces, policy events, and incidents into an auditable graph.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '6 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 18,
      title: 'Reliable Agent Change Windows',
      excerpt: 'Define and enforce safe change windows tied to SLOs and eval gates.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '6 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 17,
      title: 'Governed Agent Operations Checklist',
      excerpt: 'A pragmatic, audit‑ready checklist for safe, observable agent operations.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '6 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 16,
      title: 'Safe Autonomy in Production',
      excerpt: 'Deploy agents with guardrails, SLOs, and audit‑ready evidence.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '7 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 15,
      title: 'Evidence Hub in Practice',
      excerpt: 'Centralize evals, traces, and policy events to ship safely.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '6 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 12,
      title: 'Agentic Benchmarking Field Guide',
      excerpt: 'Design production-like benchmarks with SLIs, scenarios, and eval gates.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '8 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 10,
      title: 'Enterprise Automation Strategy 2025',
      excerpt: 'Practical governance and platform patterns to scale AI automation safely.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '8 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 1,
      title: 'The Future of AI in Business Automation',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and what it means for your organization.',
      category: 'blog',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 2,
      title: 'Complete Guide to Cloud Migration',
      excerpt: 'A comprehensive step-by-step guide to migrating your infrastructure to the cloud safely and efficiently.',
      category: 'guides',
      author: 'Mike Rodriguez',
      date: '2025-01-12',
      readTime: '15 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'How Company X Increased Efficiency by 300%',
      excerpt: 'Real-world case study showing how strategic automation transformed business operations.',
      category: 'case-studies',
      author: 'Analytics Team',
      date: '2025-01-10',
      readTime: '12 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
  ];

  const recentContent = [
    {
      id: 20,
      title: 'Agentic Evidence Graphs',
      excerpt: 'Connect evals, traces, policy events, and incidents into an auditable graph.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '6 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 19,
      title: 'Reliable Agent Change Windows',
      excerpt: 'Define and enforce safe change windows tied to SLOs and eval gates.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '6 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 18,
      title: 'Governed Agent Operations Checklist',
      excerpt: 'A pragmatic, audit‑ready checklist for safe, observable agent operations.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '6 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 17,
      title: 'Safe Autonomy in Production',
      excerpt: 'Deploy agents with guardrails, SLOs, and audit‑ready evidence.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '7 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 16,
      title: 'Evidence Hub in Practice',
      excerpt: 'Centralize evals, traces, and policy events to ship safely.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '6 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 13,
      title: 'Operationalizing AI Safety Controls',
      excerpt: 'Translate policies into runtime controls and evidence-driven audits.',
      category: 'blog',
      author: 'Governance Team',
      date: '2025-09-16',
      readTime: '7 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 11,
      title: 'Enterprise Automation Strategy 2025',
      excerpt: 'Proven playbooks to scale AI automation with guardrails and SLOs.',
      category: 'blog',
      author: 'Platform Team',
      date: '2025-09-16',
      readTime: '8 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 4,
      title: 'Top 10 Security Best Practices for 2025',
      excerpt: 'Essential security measures every organization should implement to protect against emerging threats.',
      category: 'guides',
      author: 'Security Team',
      date: '2025-01-14',
      readTime: '10 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 5,
      title: 'Understanding DevOps Culture',
      excerpt: 'Learn how to build a successful DevOps culture that drives innovation and collaboration.',
      category: 'blog',
      author: 'Jenny Thompson',
      date: '2025-01-13',
      readTime: '6 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 6,
      title: 'Webinar: Scaling Your Business with Automation',
      excerpt: 'Join industry experts as they discuss strategies for scaling operations through intelligent automation.',
      category: 'webinars',
      author: 'Expert Panel',
      date: '2025-01-11',
      readTime: '60 min',
      image: '/api/placeholder/300/200',
    },
    {
      id: 7,
      title: 'The Impact of Edge Computing on IoT',
      excerpt: 'Exploring how edge computing is transforming IoT deployments and enabling real-time processing.',
      category: 'whitepapers',
      author: 'Research Team',
      date: '2025-01-09',
      readTime: '20 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 8,
      title: 'Weekly Tech News Roundup',
      excerpt: 'Stay updated with the latest technology trends, product launches, and industry developments.',
      category: 'news',
      author: 'News Team',
      date: '2025-01-08',
      readTime: '5 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 9,
      title: 'Building Resilient Microservices',
      excerpt: 'Architecture patterns and best practices for creating robust, scalable microservice systems.',
      category: 'guides',
      author: 'Architecture Team',
      date: '2025-01-07',
      readTime: '18 min read',
      image: '/api/placeholder/300/200',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      blog: 'bg-blue-100 text-blue-800',
      guides: 'bg-green-100 text-green-800',
      'case-studies': 'bg-purple-100 text-purple-800',
      whitepapers: 'bg-orange-100 text-orange-800',
      videos: 'bg-red-100 text-red-800',
      webinars: 'bg-indigo-100 text-indigo-800',
      news: 'bg-gray-100 text-gray-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      blog: 'Blog Posts',
      guides: 'Guides & Tutorials',
      'case-studies': 'Case Studies',
      whitepapers: 'Whitepapers',
      videos: 'Videos',
      webinars: 'Webinars',
      news: 'News & Updates',
    };
    return names[category] || category;
  };

  const filteredContent = recentContent.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const content-hub: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>content-hub | Zion Tech Group</title>
        <meta name="description" content="content-hub - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">content-hub</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default content-hub;