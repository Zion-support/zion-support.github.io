'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

=======
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';


interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}


const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

=======
  const blogPosts: BlogPost[] = useMemo(() => [
=======
const blogPosts: BlogPost[] = useMemo(() => [

    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming enterprise operations and what businesses need to know.',
      content: 'Full article content here...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      tags: ['AI', 'Enterprise', 'Technology'],
      image: '/api/placeholder/400/200',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud successfully.',
      content: 'Full article content here...',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud',
      tags: ['Cloud', 'Migration', 'Infrastructure'],
      image: '/api/placeholder/400/200',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'The latest cybersecurity threats and how to protect your organization.',
      content: 'Full article content here...',
      author: 'Alex Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'Security', 'Trends'],
      image: '/api/placeholder/400/200',
      featured: true
    }
  ], []);
  const categories = ['all', 'AI', 'Cloud', 'Security', 'Development', 'DevOps'];

  useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, blogPosts]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights and updates from Zion Tech Group.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Blog posts coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
