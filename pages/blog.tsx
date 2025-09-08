import React from 'react'
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends That Will Dominate 2025',
      excerpt: 'Discover the top AI automation trends that will reshape business operations and drive innovation across industries.',
      author: 'Zion Tech Team',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Automation',
      tags: ['AI', 'Automation', 'Trends', '2025'],
      featured: true,
      image: '/blog/ai-automation-trends.jpg'
    },
    {
      id: 'cloud-native-security',
      title: 'Building Secure Cloud-Native Applications',
      excerpt: 'Learn the essential security practices for developing and deploying cloud-native applications in today\'s threat landscape.',
      author: 'Security Team',
      date: '2025-01-10',
      readTime: '12 min read',
      category: 'Cybersecurity',
      tags: ['Cloud', 'Security', 'DevOps', 'Best Practices'],
      featured: false,
      image: '/blog/cloud-security.jpg'
    },
    {
      id: 'quantum-computing-future',
      title: 'The Future of Quantum Computing in Enterprise',
      excerpt: 'Explore how quantum computing will revolutionize enterprise applications and what businesses need to prepare for.',
      author: 'Innovation Lab',
      date: '2025-01-08',
      readTime: '10 min read',
      category: 'Emerging Tech',
      tags: ['Quantum', 'Computing', 'Enterprise', 'Future'],
      featured: false,
      image: '/blog/quantum-computing.jpg'
    },
    {
      id: 'devops-automation-best-practices',
      title: 'DevOps Automation: Best Practices for 2025',
      excerpt: 'Master the essential DevOps automation practices that will streamline your development and deployment processes.',
      author: 'DevOps Team',
      date: '2025-01-05',
      readTime: '15 min read',
      category: 'DevOps',
      tags: ['DevOps', 'Automation', 'CI/CD', 'Best Practices'],
      featured: false,
      image: '/blog/devops-automation.jpg'
    },
    {
      id: 'ai-ethics-governance',
      title: 'AI Ethics and Governance: A Business Imperative',
      excerpt: 'Understand why AI ethics and governance are critical for business success and how to implement them effectively.',
      author: 'AI Ethics Team',
      date: '2025-01-03',
      readTime: '11 min read',
      category: 'AI & Ethics',
      tags: ['AI Ethics', 'Governance', 'Compliance', 'Business'],
      featured: false,
      image: '/blog/ai-ethics.jpg'
    },
    {
      id: 'cybersecurity-threat-landscape',
      title: '2025 Cybersecurity Threat Landscape Analysis',
      excerpt: 'Stay ahead of emerging cyber threats with our comprehensive analysis of the 2025 threat landscape.',
      author: 'Cybersecurity Team',
      date: '2024-12-28',
      readTime: '14 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'Threats', 'Analysis', '2025'],
      featured: false,
      image: '/blog/cyber-threats.jpg'
    }
  ]

  const categories = [
    { name: 'All', count: blogPosts.length },
    { name: 'AI & Automation', count: 2 },
    { name: 'Cybersecurity', count: 2 },
    { name: 'Cloud & DevOps', count: 2 },
    { name: 'Emerging Tech', count: 1 },
    { name: 'AI & Ethics', count: 1 }
  ]

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;