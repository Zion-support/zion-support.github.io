import React from 'react';
import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileText,
  Download,
  Calendar,
  User,
  Eye,
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  Star,
  Clock,
  Tag
} from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
  }
];

const categories = [
];

export default function WhitePapersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All White Papers' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Development' },
    { id: 'business', name: 'Business Strategy' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence in Business',
      description: 'A comprehensive analysis of how AI is transforming business operations, including case studies, implementation strategies, and ROI calculations.',
      category: 'ai',
      author: 'Dr. Sarah Johnson',
      authorTitle: 'AI Research Director',
      publishDate: '2024-01-10',
      readTime: '15 min read',
      downloads: 2450,
      views: 8900,
      rating: 4.8,
      tags: ['AI', 'Machine Learning', 'Business Transformation', 'ROI'],
      image: '/api/placeholder/400/250',
      pdfUrl: '#',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies for Enterprise',
      description: 'Best practices and proven methodologies for migrating enterprise applications to the cloud while ensuring security and performance.',
      category: 'cloud',
      author: 'Mike Chen',
      authorTitle: 'Cloud Solutions Architect',
      publishDate: '2024-01-05',
      readTime: '12 min read',
      downloads: 1890,
      views: 7200,
      rating: 4.7,
      tags: ['Cloud Computing', 'Migration', 'Enterprise', 'Security'],
      image: '/api/placeholder/400/250',
      pdfUrl: '#',
      isFeatured: true
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of Remote Work',
      description: 'An in-depth look at the security challenges and solutions for organizations transitioning to remote and hybrid work models.',
      category: 'security',
      author: 'Alex Rodriguez',
      authorTitle: 'Chief Security Officer',
      publishDate: '2023-12-28',
      readTime: '18 min read',
      downloads: 3200,
      views: 12500,
      rating: 4.9,
      tags: ['Cybersecurity', 'Remote Work', 'Zero Trust', 'Compliance'],
      image: '/api/placeholder/400/250',
      pdfUrl: '#',
      isFeatured: false
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications',
      description: 'Technical guide covering architecture patterns, performance optimization, and scalability best practices for modern web applications.',
      category: 'development',
      author: 'Emily Watson',
      authorTitle: 'Senior Full-Stack Developer',
      publishDate: '2023-12-20',
      readTime: '20 min read',
      downloads: 1650,
      views: 6800,
      rating: 4.6,
      tags: ['Web Development', 'Scalability', 'Architecture', 'Performance'],
      image: '/api/placeholder/400/250',
      pdfUrl: '#',
      isFeatured: false
    },
    {
      id: 5,
      title: 'Digital Transformation Roadmap',
      description: 'A strategic framework for organizations looking to embark on digital transformation initiatives, with practical implementation guidelines.',
      category: 'business',
      author: 'David Kim',
      authorTitle: 'Digital Transformation Consultant',
      publishDate: '2023-12-15',
      readTime: '14 min read',
      downloads: 2100,
      views: 9500,
      rating: 4.8,
      tags: ['Digital Transformation', 'Strategy', 'Change Management', 'Technology'],
      image: '/api/placeholder/400/250',
      pdfUrl: '#',
      isFeatured: true
    },
    {
      id: 6,
      title: 'Machine Learning Model Deployment Best Practices',
      description: 'Comprehensive guide to deploying ML models in production environments, covering MLOps, monitoring, and maintenance strategies.',
      category: 'ai',
      author: 'Dr. Sarah Johnson',
      authorTitle: 'AI Research Director',
      publishDate: '2023-12-10',
      readTime: '16 min read',
      downloads: 1780,
      views: 7600,
      rating: 4.7,
      tags: ['Machine Learning', 'MLOps', 'Deployment', 'Production'],
      image: '/api/placeholder/400/250',
      pdfUrl: '#',
      isFeatured: false
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPapers = whitePapers.filter(paper => paper.isFeatured);

  return (
                </Link>
              </div>
            </motion.div>
          </div>
  );
}