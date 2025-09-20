<<<<<<< HEAD
import React from 'react',

const News: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>News | Zion Tech Group</title>,
        <meta name="description" content="News - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">News</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),};
export default News;
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, ArrowRight, Search,
  Filter, TrendingUp, Award, Zap, Globe, Building,
  Heart, Coins, Factory, Users, Brain, Shield
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const News = (props: any) => {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [searchQuery, setSearchQuery] = useState<any>('');

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Healthcare Platform',
      excerpt: 'Our new healthcare analytics platform combines machine learning with predictive analytics to transform patient care and operational efficiency.',
      content: 'Zion Tech Group is proud to announce the launch of our revolutionary AI-powered healthcare platform. This comprehensive solution leverages advanced machine learning algorithms to provide predictive analytics for patient outcomes, resource optimization, and real-time monitoring capabilities. The platform has already demonstrated remarkable results in early trials, showing a 35% reduction in patient readmission rates and 40% improvement in resource utilization.',
      category: 'product-launch',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/images/news/healthcare-platform-launch.jpg',
      featured: true,
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Product Launch']
    },
    {
      id: 2,
      title: 'Zion Tech Group Named "AI Company of the Year" at Tech Innovation Awards',
      excerpt: 'We are honored to receive this prestigious recognition for our contributions to AI innovation and business transformation.',
      content: 'Zion Tech Group has been named "AI Company of the Year" at the prestigious Tech Innovation Awards 2024. This recognition celebrates our commitment to advancing artificial intelligence technology and our success in helping businesses across industries achieve digital transformation. The award committee highlighted our innovative approach to AI democratization and our track record of successful implementations.',
      category: 'awards',
      author: 'Marcus Rodriguez',
      date: '2024-01-10',
      readTime: '3 min read',
      image: '/images/news/ai-company-award.jpg',
      featured: true,
      tags: ['Awards', 'AI Innovation', 'Recognition', 'Business Transformation']
    },
    {
      id: 3,
      title: 'New Partnership with Global Manufacturing Leaders',
      excerpt: 'Strategic collaboration to bring AI-powered manufacturing solutions to industry leaders worldwide.',
      content: 'Zion Tech Group has announced a strategic partnership with leading global manufacturing companies to deploy our AI-powered manufacturing solutions. This collaboration will bring cutting-edge IoT platforms, predictive maintenance systems, and smart factory solutions to manufacturing facilities worldwide. The partnership aims to accelerate Industry 4.0 adoption and drive operational excellence.',
      category: 'partnerships',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '4 min read',
      image: '/images/news/manufacturing-partnership.jpg',
      featured: false,
      tags: ['Partnerships', 'Manufacturing', 'IoT', 'Industry 4.0']
    },
    {
      id: 4,
      title: 'Quantum Computing Breakthrough in Financial Services',
      excerpt: 'Our quantum computing team achieves significant milestone in portfolio optimization algorithms.',
      content: 'Zion Tech Group\'s quantum computing division has achieved a major breakthrough in financial portfolio optimization. Our new hybrid quantum-classical algorithms have demonstrated 1000x faster processing speeds compared to traditional methods, enabling real-time portfolio optimization for high-frequency trading applications. This breakthrough positions us at the forefront of quantum computing in financial services.',
      category: 'research',
      author: 'Dr. Emily Watson',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/images/news/quantum-breakthrough.jpg',
      featured: false,
      tags: ['Quantum Computing', 'Financial Services', 'Research', 'Innovation']
    },
    {
      id: 5,
      title: 'Expansion to European Markets',
      excerpt: 'Zion Tech Group opens new offices in London, Berlin, and Paris to serve European clients.',
      content: 'Zion Tech Group is expanding its global presence with new offices in key European markets. Our new locations in London, Berlin, and Paris will enable us to better serve European clients and strengthen our partnerships with local technology companies. This expansion reflects our commitment to global growth and our confidence in the European technology market.',
      category: 'company',
      author: 'Lisa Park',
      date: '2024-01-03',
      readTime: '3 min read',
      image: '/images/news/european-expansion.jpg',
      featured: false,
      tags: ['Expansion', 'Europe', 'Global Growth', 'International Markets']
    },
    {
      id: 6,
      title: 'Cybersecurity Platform Achieves Industry Certification',
      excerpt: 'Our AI-powered cybersecurity platform receives top industry certifications for enterprise security.',
      content: 'Zion Tech Group\'s AI-powered cybersecurity platform has achieved industry-leading certifications, including ISO 27001, SOC 2 Type II, and FedRAMP authorization. These certifications validate our platform\'s security capabilities and compliance with international standards. Our cybersecurity solutions now meet the highest security requirements for enterprise and government clients.',
      category: 'security',
      author: 'Alex Thompson',
      date: '2024-01-01',
      readTime: '4 min read',
      image: '/images/news/cybersecurity-certification.jpg',
      featured: false,
      tags: ['Cybersecurity', 'Certification', 'Compliance', 'Enterprise Security']
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: Globe, count: newsArticles.length },
    { id: 'product-launch', name: 'Product Launches', icon: Zap, count: newsArticles.filter(article => article.category === 'product-launch').length },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: newsArticles.filter(article => article.category === 'awards').length },
    { id: 'partnerships', name: 'Partnerships', icon: Building, count: newsArticles.filter(article => article.category === 'partnerships').length },
    { id: 'research', name: 'Research & Innovation', icon: Brain, count: newsArticles.filter(article => article.category === 'research').length },
    { id: 'company', name: 'Company News', icon: Users, count: newsArticles.filter(article => article.category === 'company').length },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: newsArticles.filter(article => article.category === 'security').length }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const formatDate = (props: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>News | Zion Tech Group</title>
        <meta name="description" content="News - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">News</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default News;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
