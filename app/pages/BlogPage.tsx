import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/api/placeholder/600/300',
      slug: 'future-ai-business-trends-2024'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small and Medium Businesses',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats and data breaches.',
      author: 'Security Team',
      date: '2024-01-10',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/api/placeholder/600/300',
      slug: 'cybersecurity-best-practices-smb'
    }
}