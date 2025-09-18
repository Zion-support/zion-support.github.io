<<<<<<< HEAD
import { motion } from 'framer-motion';
import {
    ArrowRight, BookOpen,
    Calendar,
    Eye,
    Search,
    User
} from 'lucide-react';
import React, { useState } from 'react';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 45 },
    { id: 'ai', name: 'AI & Machine Learning', count: 18 },
    { id: 'quantum', name: 'Quantum Computing', count: 12 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 7 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      views: 1247,
      featured: true,
      tags: ['AI', 'Business', 'Trends', '2025'],
      image: '/images/blog/ai-business-trends.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s New in 2025',
      excerpt: 'Explore the latest developments in quantum computing and their implications for the tech industry.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      views: 892,
      featured: true,
      tags: ['Quantum Computing', 'Research', 'Innovation'],
      image: '/images/blog/quantum-breakthroughs.jpg'
    },
    {
      id: 3,
      title: 'Building Secure Cloud Infrastructure: Best Practices',
      excerpt: 'Learn the essential security practices for building and maintaining robust cloud infrastructure.',
      category: 'cloud',
      author: 'Alex Thompson',
      date: '2025-01-10',
      readTime: '6 min read',
      views: 567,
      featured: false,
      tags: ['Cloud Security', 'Infrastructure', 'Best Practices'],
      image: '/images/blog/cloud-security.jpg'
    },
    {
      id: 4,
      title: 'AI-Powered Cybersecurity: The Next Generation of Protection',
      excerpt: 'How artificial intelligence is revolutionizing cybersecurity and threat detection.',
      category: 'cybersecurity',
      author: 'Dr. Emily Watson',
      date: '2025-01-08',
      readTime: '10 min read',
      views: 734,
      featured: false,
      tags: ['AI', 'Cybersecurity', 'Threat Detection'],
      image: '/images/blog/ai-cybersecurity.jpg'
    },
    {
      id: 5,
      title: 'Micro SaaS Success Stories: Lessons from the Field',
      excerpt: 'Real-world examples of successful micro SaaS businesses and the strategies that made them thrive.',
      category: 'ai',
      author: 'David Kim',
      date: '2025-01-05',
      readTime: '7 min read',
      views: 445,
      featured: false,
      tags: ['Micro SaaS', 'Success Stories', 'Business Strategy'],
      image: '/images/blog/micro-saas-success.jpg'
    },
    {
      id: 6,
      title: 'The Impact of Edge Computing on IoT Applications',
      excerpt: 'Understanding how edge computing is transforming IoT deployments and improving performance.',
      category: 'cloud',
      author: 'Lisa Chen',
      date: '2025-01-03',
      readTime: '9 min read',
      views: 389,
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Performance'],
      image: '/images/blog/edge-computing-iot.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

=======

const Blog: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Blog - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
