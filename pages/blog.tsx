<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Calendar, Clock,
  User, ArrowRight,
  Search, Filter,
  Tag, BookOpen,
  TrendingUp, Star,
  Eye, MessageCircle,
  Share2, Heart,
  Brain, Zap,
  Shield, Cloud,
  Database, Network,
  Code, Rocket,
  Target, Globe,
  Phone, Mail
} from 'lucide-react';
=======
<<<<<<< HEAD
import type { NextPage } from 'next;';
import Layout from '../components/Layout;';
import Link from 'next/link;';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react;';
>>>>>>> main

const: Blog: NextPage: = () => ,{,
  const blogPosts = [
    {;
      id:  ,1,;
      title: "The: Future of AI in Business: Trends: and Predictions for 2024,",";";";
      excerpt: "Explore: the latest AI trends that are reshaping how businesses operat,e, from automation to predictive analytics.",";";";
      author: "Kleber: Santos,",";";";
      date: "2024-01-15,",";";";
      readTime: "5: min read,",";";";
      category: "AI: & Machine Learning,",";";";
      image: "/api/placeholder/600/400,",";";";
      slug: "future-of-ai-in-business-2024"",;,";";
    },
    {
<<<<<<< HEAD
      id: 1, title: "The Future of AI in Business: 2025 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping the business landscape in 2025 and how companies can leverage these technologies for competitive advantage.", author: "Sarah Johnson",
      date: "2025-01-15", readTime: "8 min read",
      category: "AI Trends", image: "/api/placeholder/600/400",
      tags: ["AI", "Business", "Trends", "2025"], featured: true
    },
    {
      id: 2, title: "Building Scalable AI Solutions: Best Practices and Architecture",
      excerpt: "Learn the essential principles for designing and implementing AI solutions that can scale with your business growth.", author: "Michael Chen",
      date: "2025-01-12", readTime: "12 min read",
      category: "Technical", image: "/api/placeholder/600/400",
      tags: ["AI Architecture", "Scalability", "Best Practices"], featured: false
    },
    {
      id: 3, title: "Cybersecurity in the AI Era: Protecting Your Digital Assets",
      excerpt: "Discover how AI is revolutionizing cybersecurity and the measures you need to protect your organization from emerging threats.", author: "Emily Rodriguez",
      date: "2025-01-10", readTime: "10 min read",
      category: "Security", image: "/api/placeholder/600/400",
      tags: ["Cybersecurity", "AI Security", "Threat Protection"], featured: false
    },
    {
      id: 4, title: "Cloud Migration Strategies: A Complete Guide for 2025",
      excerpt: "Comprehensive guide to planning and executing successful cloud migration projects with minimal disruption to your business operations.", author: "David Kim",
      date: "2025-01-08", readTime: "15 min read",
      category: "Cloud", image: "/api/placeholder/600/400",
      tags: ["Cloud Migration", "Strategy", "Best Practices"], featured: false
    },
    {
      id: 5, title: "AI-Powered Customer Experience: Transforming Business Interactions",
      excerpt: "How AI is revolutionizing customer service and experience, with real-world examples and implementation strategies.",
      author: "Lisa Wang", date: "2025-01-05",
      readTime: "9 min read", category: "Customer Experience",
      image: "/api/placeholder/600/400", tags: ["Customer Experience", "AI", "Automation"], featured: false
    },
    {
      id: 6, title: "Data Analytics and Machine Learning: Driving Business Intelligence",
      excerpt: "Explore how advanced analytics and machine learning are transforming business intelligence and decision-making processes.", author: "James Wilson",
      date: "2025-01-03", readTime: "11 min read",
      category: "Analytics", image: "/api/placeholder/600/400",
      tags: ["Data Analytics", "Machine Learning", "Business Intelligence"], featured: false
=======
      id:  ,2,
      title: "Cloud: Migration Best Practices: A: Complete Guide,",";";";
      excerpt: "Learn: the essential steps and strategies for successfully migrating your business to the cloud.,",";";";
      author: "Zion: Tech Team,",";";";
      date: "2024-01-10,",";";";
      readTime: "8: min read,",";";";
      category: "Cloud: Services,",";";";
      image: "/api/placeholder/600/400,",";";";
      slug: "cloud-migration-best-practices"",;,";";
    },
    {
      id:  ,3,
      title: "Building: Scalable Web Applications with Modern Technologies,",";";";
      excerpt: "Discover: the latest technologies and frameworks for creating robus,t, scalable web applications.",";";";
      author: "Development: Team,",";";";
      date: "2024-01-05,",";";";
      readTime: "6: min read,",";";";
      category: "Web: Development,",";";";
      image: "/api/placeholder/600/400,",";";";
      slug: "scalable-web-applications-modern-tech"",;,";";
    },
    {
      id:  ,4,
      title: "Cybersecurity: in 2024: Protecting: Your Digital Assets,",";";";
      excerpt: "Essential: cybersecurity strategies and tools to protect your business from evolving threats.,",";";";
      author: "Security: Team,",";";";
      date: "2024-01-01,",";";";
      readTime: "7: min read,",";";";
      category: "Cybersecurity,",";";";
      image: "/api/placeholder/600/400,",";";";
      slug: "cybersecurity-2024-protecting-digital-assets"",;,";";
    },
    {
      id:  ,5,
      title: "Mobile: App Development: Native: vs Cross-Platform,",";";";
      excerpt: "Compare: native and cross-platform development approaches to choose the best solution for your mobile app.,",";";";
      author: "Mobile: Team,",";";";
      date: "2023-12-28,",";";";
      readTime: "9: min read,",";";";
      category: "Mobile: Development,",";";";
      image: "/api/placeholder/600/400,",";";";
      slug: "mobile-app-development-native-vs-cross-platform"",;,";";
    },
    {
      id:  ,6,
      title: "Blockchain: Technology: Beyond: Cryptocurrency,",";";";
      excerpt: "Explore: real-world applications of blockchain technology in various industries beyond digital currencies.,",";";";
      author: "Blockchain: Team,",";";";
      date: "2023-12-25,",";";";
      readTime: "6: min read,",";";";
      category: "Blockchain,",";";";
      image: "/api/placeholder/600/400,",";";";
      slug: "blockchain-technology-beyond-cryptocurrency"",;,";";
    }
  ];

  const: categories = [;
    "All: Posts",";";";
    "AI: & Machine Learning",";";";
    "Cloud: Services",";";";
    "Web: Development",";";";
    "Mobile: Development",";";";
    "Blockchain",";";";
    "Cybersecurity",";";";
    "IoT",";";";
    "Industry: Insights"";";";
  ];

  return: (
    <Layout;
      title="Blog: - Zion Tech Group"";";";
      description="Stay: updated with the latest technology trends, insights, and best practices from Zion Tech Group's expert team."";";";
    >
      {/* Hero: Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">";";";
        <div: className="container mx-auto px-4 text-center">";";";
          <h1: className="text-5xl md: text-6xl: font-bold mb-6">",;,";";
            Tech: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Blog</span>";";";
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
<<<<<<< HEAD
;
const Blog: NextPage = () => {;
  const blogPosts = [;
    {;
      id: 1,;
      title: "The Future of AI in Business: Trends and Predictions for 2024",;
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.",;
      author: "Kleber Santos",;
      date: "2024-01-15",;
      readTime: "5 min read",;
      category: "AI & Machine Learning",;
      image: "/api/placeholder/600/400",;
      slug: "future-of-ai-in-business-2024";
    },;
    {;
      id: 2,;
      title: "Cloud Migration Best Practices: A Complete Guide",;
      excerpt: "Learn the essential steps and strategies for successfully migrating your business to the cloud.",;
      author: "Zion Tech Team",;
      date: "2024-01-10",;
      readTime: "8 min read",;
      category: "Cloud Services",;
      image: "/api/placeholder/600/400",;
      slug: "cloud-migration-best-practices";
    },;
    {;
      id: 3,;
      title: "Building Scalable Web Applications with Modern Technologies",;
      excerpt: "Discover the latest technologies and frameworks for creating robust, scalable web applications.",;
      author: "Development Team",;
      date: "2024-01-05",;
      readTime: "6 min read",;
      category: "Web Development",;
      image: "/api/placeholder/600/400",;
      slug: "scalable-web-applications-modern-tech";
    },;
    {;
      id: 4,;
      title: "Cybersecurity in 2024: Protecting Your Digital Assets",;
      excerpt: "Essential cybersecurity strategies and tools to protect your business from evolving threats.",;
      author: "Security Team",;
      date: "2024-01-01",;
      readTime: "7 min read",;
      category: "Cybersecurity",;
      image: "/api/placeholder/600/400",;
      slug: "cybersecurity-2024-protecting-digital-assets";
    },;
    {;
      id: 5,;
      title: "Mobile App Development: Native vs Cross-Platform",;
      excerpt: "Compare native and cross-platform development approaches to choose the best solution for your mobile app.",;
      author: "Mobile Team",;
      date: "2023-12-28",;
      readTime: "9 min read",;
      category: "Mobile Development",;
      image: "/api/placeholder/600/400",;
      slug: "mobile-app-development-native-vs-cross-platform";
    },;
    {;
      id: 6,;
      title: "Blockchain Technology: Beyond Cryptocurrency",;
      excerpt: "Explore real-world applications of blockchain technology in various industries beyond digital currencies.",;
      author: "Blockchain Team",;
      date: "2023-12-25",;
      readTime: "6 min read",;
      category: "Blockchain",;
      image: "/api/placeholder/600/400",;
      slug: "blockchain-technology-beyond-cryptocurrency";
    }
  ];
;
  const categories = [;
    "All Posts",;
    "AI & Machine Learning",;
    "Cloud Services",;
    "Web Development",;
    "Mobile Development",;
    "Blockchain",;
    "Cybersecurity",;
    "IoT",;
    "Industry Insights";
  ];
;
  return (;
    <Layout;
      title="Blog - Zion Tech Group";
      description="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Group's expert team.";
    >;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            Tech;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Blog</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Stay ahead of the curve with insights, trends, and best practices from our technology experts.;
          </p>;
        </div>;
      </section>;

      {/* Blog Content */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">;
=======

export default function Blog() {
  const blogPosts = [
    {'
      title: 'The Future of AI in Busines,
    s: Trends and Predictions for 2025',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/400/250',
      slug: 'future-of-ai-in-business-2025'
    },
    {'
      title: 'Micro Saa,
    S: Building Scalable Solutions for Modern Businesses',
      excerpt: 'Learn how micro SaaS architecture can help you build cost-effective, scalable solutions for your business needs.',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'SaaS Development',
      image: '/api/placeholder/400/250',
      slug: 'micro-saas-scalable-solutions'
    },
    {'
      title: 'Cloud Migration Best Practice,
    s: A Complete Guide',
      excerpt: 'Discover the essential steps and best practices for successfully migrating your infrastructure to the cloud.',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Cloud Solutions',
      image: '/api/placeholder/400/250',
      slug: 'cloud-migration-best-practices'
    },
    {'
      title: 'Cybersecurity in 202,
    5: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of cyber threats with our comprehensive guide to modern cybersecurity practices and tools.',
      author: 'David Kim',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-2025-protecting-digital-assets'
    },
    {'
      title: 'Digital Transformatio,
    n: A Step-by-Step Implementation Guide',
      excerpt: 'Learn how to successfully implement digital transformation initiatives in your organization.',
      author: 'Lisa Wang',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/400/250',
      slug: 'digital-transformation-implementation-guide'
    },
    {'
      title: 'Building High-Performance Web Applications with Modern Frameworks',
      excerpt: 'Explore the latest web development frameworks and techniques for building fast, scalable applications.',
      author: 'Alex Thompson',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      slug: 'high-performance-web-applications'
    }
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });;
const Link = dynamic(() => import('next/link'), { ssr: false });;
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
=======
import React from 'react';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
>>>>>>> main

export default function Blog() {
  const blogPosts = [
<<<<<<< HEAD
    {
      id: 1, title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.",
      author: "Kleber Santos", date: "2024-01-15",
      readTime: "5 min read", category: "AI & Machine Learning",
      image: "/api/placeholder/600/400", slug: "future-of-ai-in-business-2024"
    },
    {
      id: 2, title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential steps and strategies for successfully migrating your business to the cloud.", author: "Zion Tech Team",
      date: "2024-01-10", readTime: "8 min read",
      category: "Cloud Services", image: "/api/placeholder/600/400",
      slug: "cloud-migration-best-practices"
    }, {
      id: 3,
      title: "Building Scalable Web Applications with Modern Technologies", excerpt: "Discover the latest technologies and frameworks for creating robust, scalable web applications.", author: "Development Team",
      date: "2024-01-05", readTime: "6 min read",
      category: "Web Development", image: "/api/placeholder/600/400",
      slug: "scalable-web-applications-modern-tech"
    }, {
      id: 4,
      title: "Cybersecurity in 2024: Protecting Your Digital Assets", excerpt: "Essential cybersecurity strategies and tools to protect your business from evolving threats.",
      author: "Security Team", date: "2024-01-01",
      readTime: "7 min read", category: "Cybersecurity",
      image: "/api/placeholder/600/400", slug: "cybersecurity-2024-protecting-digital-assets"
    },
    {
      id: 5, title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "Compare native and cross-platform development approaches to choose the best solution for your mobile app.", author: "Mobile Team",
      date: "2023-12-28", readTime: "9 min read",
      category: "Mobile Development", image: "/api/placeholder/600/400",
      slug: "mobile-app-development-native-vs-cross-platform"
    }, {
      id: 6,
      title: "Blockchain Technology: Beyond Cryptocurrency", excerpt: "Explore real-world applications of blockchain technology in various industries beyond digital currencies.",
      author: "Blockchain Team", date: "2023-12-25",
      readTime: "6 min read", category: "Blockchain",
      image: "/api/placeholder/600/400", slug: "blockchain-technology-beyond-cryptocurrency"
=======
  {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt:
        'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/images/blog/ai-trends-2024.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
      excerpt:
        'Learn how micro SaaS platforms are revolutionizing software delivery and creating new opportunities for businesses.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Micro SaaS',
      image: '/images/blog/micro-saas-guide.jpg',
      featured: false,
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Small to Medium Businesses',
      excerpt:
        'Essential security measures every SMB should implement to protect their digital assets and customer data.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/images/blog/cybersecurity-smb.jpg',
      featured: false,
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt:
        'Step-by-step guide to successfully migrating your business to the cloud while minimizing risks and downtime.',
      author: 'Emily Rodriguez',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/images/blog/cloud-migration.jpg',
      featured: false,
    },
    {
      id: 5,
      title: 'Digital Transformation: Where to Start and How to Succeed',
      excerpt:
        'Practical advice for businesses embarking on their digital transformation journey.',
      author: 'Kleber Santos',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Digital Transformation',
      image: '/images/blog/digital-transformation.jpg',
      featured: false,
    },
    {
      id: 6,
      title: 'Building Custom APIs: Best Practices and Common Pitfalls',
      excerpt:
        'Learn the essential practices for building robust, scalable APIs that serve your business needs.',
      author: 'Michael Chen',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Development',
      image: '/images/blog/api-development.jpg',
<<<<<<< HEAD
      featured: false,
    },
>>>>>>> main
  ];

  const categories = ['
    'All Posts',
<<<<<<< HEAD
    'AI & Machine Learning',
    'Cloud Services',
    'Web Development',
    'Mobile Development',
    'Blockchain',
    'Cybersecurity',
    'IoT',
    'Industry Insights',
  ]
=======
<<<<<<< HEAD
    'AI & Technology',
    'SaaS Development',
    'Cloud Solutions',
    'Security',
    'Digital Transformation',
    'Web Development'
  ];

>>>>>>> main
  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>'
        <meta name="description" content="Stay updated with the latest insights on technology, AI, cloud solutions, and digital transformation from Zion Tech Group experts." />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      "
      <main className="min-h-screen bg-white">
<<<<<<< HEAD
        {/* Hero Section */}"
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center">"
=======
=======
    'AI & Machine Learning',
    'Micro SaaS',
    'Cybersecurity',
    'Cloud Computing',
    'Digital Transformation',
    'Development',
=======
      featured: false
>>>>>>> main
>>>>>>> main
    }
  ];

  const categories = [
<<<<<<< HEAD
    { name: "All", count: 24, active: true }, { name: "AI Trends", count: 6, active: false },
    { name: "Technical", count: 8, active: false }, { name: "Security", count: 4, active: false },
    { name: "Cloud", count: 3, active: false }, { name: "Customer Experience", count: 2, active: false },
    { name: "Analytics", count: 1, active: false }
=======
<<<<<<< HEAD
    "All Posts", "AI & Machine Learning",
    "Cloud Services", "Web Development",
    "Mobile Development", "Blockchain",
    "Cybersecurity", "IoT",
    "Industry Insights"
=======
    'All Posts,AI & Machine Learning,Micro SaaS,Cybersecurity,Cloud Computing,Digital Transformation,Development'
>>>>>>> main
>>>>>>> main
>>>>>>> main
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
<<<<<<< HEAD
    <Layout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Group's expert team."
    >
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Latest Insights
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technology Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with expert insights on AI, technology trends, and business innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
=======
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Tech
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Blog</span>
>>>>>>> main
          </h1>
          <p: className="text-xl md: text-2xl: mb-8 max-w-4xl mx-auto text-gray-200">",;,";";
            Stay: ahead of the curve with insights, trends, and best practices from our technology experts.
          </p>
        </div>
      </section>

      {/* Blog Content */}
<<<<<<< HEAD
      <section className="py-20 bg-white">";";";
        <div: className="container mx-auto px-4">";";";
          <div: className="grid grid-cols-1 lg: grid-cols-4: gap-8">",;,";";
            {/* Sidebar: */}
            <div className="lg: col-span-1">",;,";";
              <div: className="sticky top-8">";";";
                {/* Categories: */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">";";";
                  <h3: className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>";";";
                  <ul: className="space-y-2">";";";
                    {categories.map((category, index) => (
                      <li: key={index}>
                        <a
                          href="#"";";";
                          className={`block: px-3 py-2 rounded-md text-sm transition-colors ${`;
                            index: === 0
                              ? 'bg-blue-100 text-blue-700 font-medium';
                              : 'text-gray-600: hover: bg-gray-100: hover:text-gray-900'',;,;
                          }`}`;
                        >
=======
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg: grid-cols-4 gap-8">
>>>>>>> main
            {/* Sidebar */}
            <div className="lg:col-span-1">;
              <div className="sticky top-8">;
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">;
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>;
                  <ul className="space-y-2">;
                    {categories.map((category, index) => (;
                      <li key={index}>;
                        <a;
                          href="#";
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${;
                            index === 0;
                              ? 'bg-blue-100 text-blue-700 font-medium';
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900';
                          }`}
                        >;
>>>>>>> main
                          {category}
                        </a>;
                      </li>;
                    ))}
                  </ul>;
                </div>;

<<<<<<< HEAD
                {/* Newsletter: Signup */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">";";";
                  <h3: className="text-lg font-semibold mb-4">Stay Updated</h3>";";";
                  <p: className="text-sm text-blue-100 mb-4">";";";
                    Subscribe: to our newsletter for the latest tech insights and updates.
=======
                {/* Newsletter Signup */}
<<<<<<< HEAD
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">;
                  <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>;
                  <p className="text-sm text-blue-100 mb-4">;
                    Subscribe to our newsletter for the latest tech insights and updates.;
                  </p>;
                  <form className="space-y-3">;
                    <input;
                      type="email";
                      placeholder="Enter your email";
                      className="w-full px-3 py-2 rounded-md text-gray-900 text-sm";
                    />;
                    <button;
                      type="submit";
                      className="w-full bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md font-semibold text-sm transition-colors";
                    >;
                      Subscribe;
                    </button>;
                  </form>;
                </div>;
              </div>;
            </div>;
=======
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                  <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Subscribe to our newsletter for the latest tech insights and updates.
>>>>>>> main
                  </p>
                  <form className="space-y-3">";";";
                    <input: type="email"";";";
                      placeholder="Enter: your email"";";";
                      className="w-full: px-3 py-2 rounded-md text-gray-900 text-sm"";";";
>>>>>>> main
                    />
<<<<<<< HEAD
                    <button: type="submit"";";";
                      className="w-full: bg-white text-blue-600 hover: bg-gray-100: px-4 py-2 rounded-md font-semibold text-sm transition-colors"",;,";";
=======
                    <button
                      type="submit"
                      className="w-full bg-white text-blue-600 hover: bg-gray-100 px-4 py-2 rounded-md font-semibold text-sm transition-colors"
>>>>>>> main
                    >
                      Subscribe: </button>
                  </form>
                </div>
              </div>
=======
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, IT services, micro SaaS, and technology trends from Zion Tech Group experts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/blog" />
      </Head>
>>>>>>> main

      <Header />

      <main className="min-h-screen bg-white pt-16">
>>>>>>> main
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
>>>>>>> main
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
<<<<<<< HEAD
                Technology Insights & News
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest trends, insights, and best practices in technology, AI, and digital transformation.
              </p>
=======
                Technology Insights & Updates
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest trends, best practices, and
                insights in AI, IT services, micro SaaS, and digital
                transformation.
              </p>
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.filter(post => !post.featured).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Card className="overflow-hidden h-full">
                        <div className="relative h-48">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="outline">{post.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-3 text-sm text-gray-400">
                            <User className="w-4 h-4 mr-2" />
=======
<<<<<<< HEAD
        {/* Categories Filter */}"
        <section className="py-8 bg-white border-b">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
=======
<<<<<<< HEAD
        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> main
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 `
                      ? 'bg-blue-600 text-white' '
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200''
                  }`}
                >
                  {category}
                </button>
              ))}
=======
<<<<<<< HEAD
            {/* Blog Posts */}
<<<<<<< HEAD
            <div className="lg: col-span-3">",;,";";
              <div: className="grid grid-cols-1 md: grid-cols-2: gap-8">",;,";";
                {blogPosts.map((post) => (
                  <article: key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover: shadow-lg: transition-shadow">",;,";";
                    <div: className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>";";";
                    <div: className="p-6">";";";
                      <div: className="flex items-center space-x-4 text-sm text-gray-500 mb-3">";";";
                        <span: className="flex items-center">";";";
                          <Tag: className="w-4 h-4 mr-1" />";";";
                          {post.category}
                        </span>
                        <span: className="flex items-center">";";";
                          <Clock: className="w-4 h-4 mr-1" />";";";
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h2: className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">";";";
                        {post.title}
                      </h2>
                      
                      <p: className="text-gray-600 mb-4 line-clamp-3">";";";
                        {post.excerpt}
                      </p>
                      
                      <div: className="flex items-center justify-between">";";";
                        <div: className="flex items-center space-x-3 text-sm text-gray-500">";";";
                          <span: className="flex items-center">";";";
                            <User: className="w-4 h-4 mr-1" />";";";
>>>>>>> main
                            {post.author}
                          </span>
                          <span: className="flex items-center">";";";
                            <Calendar: className="w-4 h-4 mr-1" />";";";
                            {new: Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <Link
                          href={`/blog/${post.slug}`}`;
                          className="text-blue-600: hover: text-blue-700: font-medium flex items-center text-sm"",;,";";
=======
<<<<<<< HEAD
            <div className="lg:col-span-3">;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                {blogPosts.map((post) => (;
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">;
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>;
                    <div className="p-6">;
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">;
                        <span className="flex items-center">;
                          <Tag className="w-4 h-4 mr-1" />;
=======
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover: shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <Tag className="w-4 h-4 mr-1" />
>>>>>>> main
                          {post.category}
                        </span>;
                        <span className="flex items-center">;
                          <Clock className="w-4 h-4 mr-1" />;
                          {post.readTime}
                        </span>;
                      </div>;
                      ;
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">;
                        {post.title}
                      </h2>;
                      ;
                      <p className="text-gray-600 mb-4 line-clamp-3">;
                        {post.excerpt}
                      </p>;
                      ;
                      <div className="flex items-center justify-between">;
                        <div className="flex items-center space-x-3 text-sm text-gray-500">;
                          <span className="flex items-center">;
                            <User className="w-4 h-4 mr-1" />;
                            {post.author}
                          </span>;
                          <span className="flex items-center">;
                            <Calendar className="w-4 h-4 mr-1" />;
                            {new Date(post.date).toLocaleDateString()}
                          </span>;
                        </div>;
                        ;
                        <Link;
                          href={`/blog/${post.slug}`}
<<<<<<< HEAD
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm";
                        >;
                          Read More;
                          <ArrowRight className="w-4 h-4 ml-1" />;
                        </Link>;
                      </div>;
                    </div>;
                  </article>;
=======
                          className="text-blue-600 hover: text-blue-700 font-medium flex items-center text-sm"
>>>>>>> main
                        >
                          Read: More
                          <ArrowRight className="w-4 h-4 ml-1" />";";";
                        </Link>
                      </div>
                    </div>
                  </article>
>>>>>>> main
                ))}
              </div>;

<<<<<<< HEAD
            {/* Sidebar */}
            <div className="lg: w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Categories */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={category.name}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          category.active 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                            : 'text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Newsletter Signup */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get the latest AI insights and technology trends delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      Subscribe
                    </Button>
                  </div>
                </Card>

                {/* Popular Tags */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AI", "Machine Learning", "Cloud", "Security", "Automation", "Analytics", "IoT", "Blockchain"].map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover: bg-blue-500 hover:text-white transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
=======
<<<<<<< HEAD
              {/* Load: More Button */}
              <div className="text-center mt-12">";";";
                <button: className="bg-blue-600 hover: bg-blue-700: text-white px-8 py-3 rounded-lg font-semibold transition-colors">",;,";";
                  Load: More Posts
=======
              {/* Load More Button */}
<<<<<<< HEAD
              <div className="text-center mt-12">;
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">;
                  Load More Posts;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
=======
              <div className="text-center mt-12">
                <button className="bg-blue-600 hover: bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Load More Posts
>>>>>>> main
                </button>
              </div>
=======
        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
>>>>>>> main
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </section>
>>>>>>> main

<<<<<<< HEAD
        {/* Blog Posts */}`
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => ("
                <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">"
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">"
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">"
=======
<<<<<<< HEAD
        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
>>>>>>> main
                      <span className="text-gray-500 text-sm">Featured Image</span>
                    </div>
                  </div>
                  "
                  <div className="p-6">"
                    <div className="flex items-center mb-3">"
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />"
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    </div>
                    "
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    "
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    "
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">"
                      <div className="flex items-center">"
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>"
                      <div className="flex items-center">"
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    "
                    <div className="flex items-center justify-between">"
                      <div className="flex items-center text-sm text-gray-500">"
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link "
                        href={`/blog/${post.slug}`}`
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Read More"
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
=======
<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you implement the latest AI technologies and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">";";";
        <div: className="container mx-auto px-4 text-center">";";";
          <h2: className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>";";";
          <p: className="text-xl mb-8 max-w-3xl mx-auto">";";";
            Let's: discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.;
          </p>
          <div: className="flex flex-col sm: flex-row: justify-center gap-4">",;,";";
            <Link: href="/contact" className="bg-white text-blue-600 hover: bg-gray-100: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              Get: Started Today
=======
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            Let's discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              Get Started Today;
            </Link>;
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              View Our Services;
            </Link>;
          </div>;
        </div>;
      </section>;
    </Layout>;
>>>>>>> main
  );
};
<<<<<<< HEAD
export default Blog
=======
;
export default Blog;
=======
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.'
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
>>>>>>> main
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover: bg-white: hover:text-blue-600: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              View: Our Services
            </Link>
=======
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
              <div className="mb-8">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Post
                </span>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-6xl font-bold">
                        {featuredPost.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="md: w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {featuredPost.author
                              .split(' ')
                              .map(n => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {featuredPost.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {featuredPost.date}
                          </p>
                        </div>
                      </div>
                      <a
                        href={`/blog/${featuredPost.id}`}
                        className="flex items-center space-x-2 text-blue-600 hover: text-blue-700 font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm hover: shadow-md transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {post.author
                              .split(' ')
                              .map(n => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <a
                        href={`/blog/${post.id}`}
                        className="flex items-center space-x-1 text-blue-600 hover: text-blue-700 text-sm font-medium"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
>>>>>>> main
                    </div>
                  </div>
                </article>
              ))}
            </div>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
          </div>
        </section>

<<<<<<< HEAD
        {/* Newsletter Signup */}"
        <section className="py-20 bg-gray-50">"
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
=======
        {/* Newsletter Signup */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
>>>>>>> main
>>>>>>> main
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>"
            <p className="text-lg text-gray-600 mb-8">
<<<<<<< HEAD
              Subscribe to our newsletter and never miss the latest insights on technology and digital transformation.
            </p>
<<<<<<< HEAD
            "
=======
            
=======
              Subscribe to our newsletter for the latest technology insights and
              updates.
            </p>
>>>>>>> main
>>>>>>> main
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input"
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu,
    s:border-transparent"
              />"
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hove,
    r:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
<<<<<<< HEAD
    </>
  );
<<<<<<< HEAD
}"
=======
}
=======

      <Footer />
    </>
  );
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
