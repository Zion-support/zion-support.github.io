import React from "react";

const newsCategories = [
  { name: 'Company News', count: 12, color: 'bg-blue-100 text-blue-800' },
  { name: 'Product Updates', count: 8, color: 'bg-green-100 text-green-800' },
  { name: 'Industry Insights', count: 15, color: 'bg-purple-100 text-purple-800' },
  { name: 'Partnerships', count: 6, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Awards', count: 4, color: 'bg-red-100 text-red-800' },
  { name: 'Events', count: 10, color: 'bg-indigo-100 text-indigo-800' }
];

const featuredNews = [
  {
    id: 1,
    title: 'Zion Tech Group Launches Revolutionary AI-Powered Analytics Platform',
    excerpt: 'Our new AI analytics platform transforms how businesses process and understand their data, delivering insights 10x faster than traditional methods.',
    category: 'Product Updates',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    readTime: '5 min read',
    image: '/api/placeholder/600/400',
    featured: true,
    tags: ['AI', 'Analytics', 'Product Launch']
  },
  {
    id: 2,
    title: 'Partnership with Microsoft Azure Expands Cloud Solutions Portfolio',
    excerpt: 'Strategic partnership enables us to offer enhanced cloud migration services and enterprise-grade security solutions.',
    category: 'Partnerships',
    author: 'Michael Chen',
    date: '2025-01-12',
    readTime: '3 min read',
    image: '/api/placeholder/600/400',
    featured: true,
    tags: ['Partnership', 'Cloud', 'Microsoft']
  },
  {
    id: 3,
    title: 'Zion Tech Group Wins "Best AI Solutions Provider" Award',
    excerpt: 'Recognition from Tech Industry Awards for our innovative AI services and exceptional client satisfaction rates.',
    category: 'Awards',
    author: 'Emily Rodriguez',
    date: '2025-01-10',
    readTime: '4 min read',
    image: '/api/placeholder/600/400',
    featured: true,
    tags: ['Award', 'Recognition', 'AI']
  }
];

const recentNews = [
  {
    id: 4,
    title: 'New Micro SaaS Solutions for Small Businesses',
    excerpt: 'Affordable, scalable solutions designed specifically for small and medium enterprises.',
    category: 'Product Updates',
    author: 'David Kim',
    date: '2025-01-08',
    readTime: '3 min read',
    tags: ['Micro SaaS', 'SMB', 'Product']
  },
  {
    id: 5,
    title: 'Cybersecurity Trends for 2025: What Businesses Need to Know',
    excerpt: 'Expert analysis of emerging cybersecurity threats and how to protect your organization.',
    category: 'Industry Insights',
    author: 'Lisa Wang',
    date: '2025-01-05',
    readTime: '6 min read',
    tags: ['Cybersecurity', 'Trends', 'Security']
  },
  {
    id: 6,
    title: 'Zion Tech Group Expands Team with 25 New Hires',
    excerpt: 'Growing our team to meet increasing demand for AI and IT services across all industries.',
    category: 'Company News',
    author: 'James Wilson',
    date: '2025-01-03',
    readTime: '2 min read',
    tags: ['Hiring', 'Growth', 'Team']
  },
  {
    id: 7,
    title: 'Upcoming Webinar: AI Implementation Best Practices',
    excerpt: 'Join our experts for a comprehensive guide to implementing AI solutions in your organization.',
    category: 'Events',
    author: 'Maria Garcia',
    date: '2025-01-01',
    readTime: '1 min read',
    tags: ['Webinar', 'AI', 'Education']
  }
];

const stats = [
  { number: '150+', label: 'News Articles' },
  { number: '50+', label: 'Industry Awards' },
  { number: '25+', label: 'Product Launches' },
  { number: '100+', label: 'Partnerships' }
];

export default function NewsPage() {
  return (
<div className={className || ""}>
      <h1>News</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default News;
