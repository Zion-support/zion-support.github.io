import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Play, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  BookOpen,
  Code,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Target,
  CheckCircle,
  Star,
  MessageSquare,
  FileText,
  Building,
  Heart,
  DollarSign,
  Settings,
  Network,
  Lock,
  Eye,
  Phone,
  Mail,
  MapPin,
  Zap,
  Award,
  Users,
  Globe,
  TrendingUp,
  Calendar,
  Download,
  ExternalLink
} from 'lucide-react';
import Layout from '../components/Layout';

const tutorialCategories = [
  { name: 'AI & Machine Learning', count: 15, color: 'bg-blue-100 text-blue-800' },
  { name: 'Web Development', count: 12, color: 'bg-green-100 text-green-800' },
  { name: 'Cloud Computing', count: 8, color: 'bg-purple-100 text-purple-800' },
  { name: 'Cybersecurity', count: 10, color: 'bg-red-100 text-red-800' },
  { name: 'Data Analytics', count: 7, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Mobile Development', count: 6, color: 'bg-indigo-100 text-indigo-800' }
];

const featuredTutorials = [
  {
    id: 1,
    title: 'Getting Started with AI: A Complete Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of artificial intelligence, from basic concepts to practical implementation.',
    category: 'AI & Machine Learning',
    author: 'Dr. Sarah Chen',
    duration: '2 hours',
    difficulty: 'Beginner',
    rating: 4.8,
    students: 1250,
    featured: true,
    tags: ['AI', 'Machine Learning', 'Beginner', 'Fundamentals'],
    videoUrl: '/tutorials/ai-beginners-guide'
  },
  {
    id: 2,
    title: 'Building Secure Web Applications: Best Practices',
    excerpt: 'Comprehensive guide to implementing security best practices in modern web applications.',
    category: 'Web Development',
    author: 'Michael Rodriguez',
    duration: '3 hours',
    difficulty: 'Intermediate',
    rating: 4.9,
    students: 980,
    featured: true,
    tags: ['Security', 'Web Development', 'Best Practices'],
    videoUrl: '/tutorials/secure-web-apps'
  },
  {
    id: 3,
    title: 'Cloud Migration Strategies: AWS, Azure, and GCP',
    excerpt: 'Step-by-step guide to migrating your applications to the cloud using major cloud providers.',
    category: 'Cloud Computing',
    author: 'Lisa Wang',
    duration: '4 hours',
    difficulty: 'Advanced',
    rating: 4.7,
    students: 2100,
    featured: true,
    tags: ['Cloud Migration', 'AWS', 'Azure', 'GCP'],
    videoUrl: '/tutorials/cloud-migration'
  }
];

const recentTutorials = [
  {
    id: 4,
    title: 'Introduction to React: Building Your First App',
    excerpt: 'Learn React fundamentals by building a complete web application from scratch.',
    category: 'Web Development',
    author: 'David Kim',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    rating: 4.6,
    students: 750,
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: 5,
    title: 'Data Visualization with Python and Matplotlib',
    excerpt: 'Create stunning data visualizations using Python and popular visualization libraries.',
    category: 'Data Analytics',
    author: 'Maria Garcia',
    duration: '1.5 hours',
    difficulty: 'Intermediate',
    rating: 4.5,
    students: 890,
    tags: ['Python', 'Data Visualization', 'Matplotlib']
  },
  {
    id: 6,
    title: 'Mobile App Development with React Native',
    excerpt: 'Build cross-platform mobile applications using React Native framework.',
    category: 'Mobile Development',
    author: 'James Wilson',
    duration: '3.5 hours',
    difficulty: 'Intermediate',
    rating: 4.8,
    students: 1100,
    tags: ['React Native', 'Mobile Development', 'Cross-platform']
  },
  {
    id: 7,
    title: 'Cybersecurity Fundamentals: Protecting Your Data',
    excerpt: 'Essential cybersecurity concepts and practices to protect your digital assets.',
    category: 'Cybersecurity',
    author: 'Emily Johnson',
    duration: '2 hours',
    difficulty: 'Beginner',
    rating: 4.7,
    students: 650,
    tags: ['Cybersecurity', 'Data Protection', 'Security']
  }
];

const stats = [
  { number: '50+', label: 'Tutorials' },
  { number: '10K+', label: 'Students' },
  { number: '100+', label: 'Hours of Content' },
  { number: '4.8', label: 'Average Rating' }
=======
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { 
  BookOpen, 
  ArrowRight,
  Play,
  Clock,
  User,
  Star,
  CheckCircle,
  Video,
  FileText,
  Code,
  Settings,
  Globe,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
=======
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, Clock, User, Star, ArrowRight, Search, Filter, BookOpen, Video, FileText } from 'lucide-react';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

const tutorials = [
  {
<<<<<<< HEAD
    title: "Getting Started",
    description: "Begin your journey with our platform",
    icon: Play,
    color: "blue",
    tutorials: [
      {
        title: "Quick Start Guide",
        description: "Get up and running in 5 minutes",
        duration: "5 min",
        difficulty: "Beginner",
        type: "Video",
        rating: 4.8
      },
      {
        title: "Platform Overview",
        description: "Understanding the main features",
        duration: "10 min",
        difficulty: "Beginner",
        type: "Video",
        rating: 4.7
      },
      {
        title: "First Project Setup",
        description: "Create your first project",
        duration: "15 min",
        difficulty: "Beginner",
        type: "Tutorial",
        rating: 4.9
      }
    ]
  },
  {
    title: "API Integration",
    description: "Learn to integrate with our APIs",
    icon: Code,
    color: "green",
    tutorials: [
      {
        title: "Authentication Setup",
        description: "Set up API authentication",
        duration: "20 min",
        difficulty: "Intermediate",
        type: "Tutorial",
        rating: 4.6
      },
      {
        title: "REST API Basics",
        description: "Making your first API calls",
        duration: "25 min",
        difficulty: "Intermediate",
        type: "Video",
        rating: 4.8
      },
      {
        title: "Webhook Configuration",
        description: "Setting up real-time notifications",
        duration: "30 min",
        difficulty: "Advanced",
        type: "Tutorial",
        rating: 4.7
      }
    ]
  },
  {
    title: "AI Services",
    description: "Master our AI and machine learning features",
    icon: Zap,
    color: "purple",
    tutorials: [
      {
        title: "AI Model Training",
        description: "Train your first AI model",
        duration: "45 min",
        difficulty: "Advanced",
        type: "Video",
        rating: 4.9
      },
      {
        title: "Natural Language Processing",
        description: "Implement NLP solutions",
        duration: "35 min",
        difficulty: "Advanced",
        type: "Tutorial",
        rating: 4.8
      },
      {
        title: "Computer Vision Basics",
        description: "Image recognition and analysis",
        duration: "40 min",
        difficulty: "Advanced",
        type: "Video",
        rating: 4.7
      }
    ]
  },
  {
    title: "Cloud Services",
    description: "Deploy and manage cloud infrastructure",
    icon: Globe,
    color: "orange",
    tutorials: [
      {
        title: "Cloud Deployment",
        description: "Deploy to AWS, Azure, or GCP",
        duration: "30 min",
        difficulty: "Intermediate",
        type: "Tutorial",
        rating: 4.6
      },
      {
        title: "Container Orchestration",
        description: "Using Docker and Kubernetes",
        duration: "50 min",
        difficulty: "Advanced",
        type: "Video",
        rating: 4.8
      },
      {
        title: "Monitoring & Logging",
        description: "Set up monitoring and alerts",
        duration: "25 min",
        difficulty: "Intermediate",
        type: "Tutorial",
        rating: 4.7
      }
    ]
  }
];

const featuredTutorials = [
  {
    title: "Complete Platform Walkthrough",
    description: "A comprehensive guide covering all major features and capabilities",
    duration: "60 min",
    difficulty: "All Levels",
    type: "Video Series",
    rating: 4.9,
    views: 1250,
    featured: true
  },
  {
    title: "Building Your First AI Application",
    description: "Step-by-step guide to creating an AI-powered application",
    duration: "90 min",
    difficulty: "Intermediate",
    type: "Tutorial",
    rating: 4.8,
    views: 980,
    featured: true
  },
  {
    title: "Enterprise Security Best Practices",
    description: "Implementing security measures for enterprise applications",
    duration: "45 min",
    difficulty: "Advanced",
    type: "Video",
    rating: 4.7,
    views: 750,
    featured: true
  }
];

const difficultyLevels = [
  { name: "Beginner", color: "green", description: "No prior experience required" },
  { name: "Intermediate", color: "yellow", description: "Some technical knowledge helpful" },
  { name: "Advanced", color: "red", description: "Strong technical background required" }
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
];

export default function TutorialsPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="Tutorials - Zion Tech Group"
      description="Learn from our comprehensive collection of tutorials covering AI, web development, cloud computing, cybersecurity, and more."
      keywords="tutorials, learning, AI, web development, cloud computing, cybersecurity, programming, technology education"
      canonical="https://ziontechgroup.com/tutorials"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
=======
    <MainLayout 
      title="Tutorials - Zion Tech Group"
      description="Step-by-step tutorials and video guides to help you master Zion Tech Group's platform and services."
      keywords="tutorials, video guides, learning, documentation, how-to, step-by-step, training"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
=======
    id: 1,
    title: 'Getting Started with AI: A Complete Beginner\'s Guide',
    description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch. Perfect for beginners with no prior experience.',
    instructor: 'Dr. Sarah Johnson',
    duration: '2 hours 30 minutes',
    level: 'Beginner',
    category: 'Artificial Intelligence',
    rating: 4.8,
    students: 1250,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: true,
    modules: 12,
    price: 'Free'
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices',
    description: 'Master cloud security fundamentals and learn how to protect your infrastructure from common threats.',
    instructor: 'Michael Chen',
    duration: '1 hour 45 minutes',
    level: 'Intermediate',
    category: 'Cybersecurity',
    rating: 4.7,
    students: 890,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 8,
    price: 'Free'
  },
  {
    id: 3,
    title: 'Building Scalable Microservices',
    description: 'Learn how to design and implement microservices architecture that can scale with your business.',
    instructor: 'David Rodriguez',
    duration: '3 hours 15 minutes',
    level: 'Advanced',
    category: 'Software Development',
    rating: 4.9,
    students: 1100,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 15,
    price: '$99'
  },
  {
    id: 4,
    title: 'Data Analytics with Python',
    description: 'Complete guide to data analysis using Python, pandas, and visualization libraries.',
    instructor: 'Emily Watson',
    duration: '4 hours',
    level: 'Intermediate',
    category: 'Data Science',
    rating: 4.6,
    students: 750,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 20,
    price: '$149'
  },
  {
    id: 5,
    title: 'DevOps Fundamentals',
    description: 'Introduction to DevOps practices, tools, and methodologies for modern software development.',
    instructor: 'Alex Thompson',
    duration: '2 hours 20 minutes',
    level: 'Beginner',
    category: 'DevOps',
    rating: 4.5,
    students: 980,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 10,
    price: 'Free'
  },
  {
    id: 6,
    title: 'Blockchain Development Basics',
    description: 'Learn the fundamentals of blockchain technology and smart contract development.',
    instructor: 'Lisa Park',
    duration: '3 hours 30 minutes',
    level: 'Intermediate',
    category: 'Blockchain',
    rating: 4.7,
    students: 650,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 18,
    price: '$199'
  },
  {
    id: 7,
    title: 'API Design and Documentation',
    description: 'Best practices for designing, building, and documenting RESTful APIs.',
    instructor: 'John Smith',
    duration: '1 hour 30 minutes',
    level: 'Intermediate',
    category: 'Software Development',
    rating: 4.4,
    students: 720,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 7,
    price: 'Free'
  },
  {
    id: 8,
    title: 'Machine Learning Model Deployment',
    description: 'Learn how to deploy machine learning models to production environments.',
    instructor: 'Dr. Sarah Johnson',
    duration: '2 hours 45 minutes',
    level: 'Advanced',
    category: 'Artificial Intelligence',
    rating: 4.8,
    students: 540,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 14,
    price: '$179'
  }
];

const categories = [
  'All',
  'Artificial Intelligence',
  'Cybersecurity',
  'Software Development',
  'Data Science',
  'DevOps',
  'Blockchain',
  'Cloud Computing'
];

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const featuredTutorial = tutorials.find(tutorial => tutorial.featured);
const regularTutorials = tutorials.filter(tutorial => !tutorial.featured);

export default function TutorialsPage() {
  return (
    <MainLayout
      title="Tutorials - Zion Tech Group"
      description="Learn from our experts with comprehensive video tutorials and hands-on guides on the latest technologies."
      keywords="tutorials, learning, video courses, technology training, AI, cybersecurity, software development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tutorials
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn from industry experts with our comprehensive collection of tutorials and guides
=======
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Tutorials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Guides</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Learn to master our platform with step-by-step tutorials, video guides, and hands-on examples. 
                From beginner basics to advanced techniques.
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Learn from Experts
                <span className="block text-yellow-400">Master New Skills</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Access our comprehensive video tutorials and hands-on guides on the latest technologies.
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#tutorials"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse Tutorials
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tutorial Categories</h2>
              <p className="text-lg text-gray-600">Browse tutorials by topic</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tutorialCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                    {category.name}
=======
<<<<<<< HEAD
        {/* Featured Tutorials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and highly-rated tutorials to get you started.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded text-sm font-medium">
                      Featured
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {tutorial.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{tutorial.views} views</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium">
                      {tutorial.type}
                    </span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Tutorial
                  </button>
                </motion.div>
              ))}
=======
        {/* Featured Tutorial */}
        {featuredTutorial && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Tutorial</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="relative">
                      <img
                        src={featuredTutorial.thumbnail}
                        alt={featuredTutorial.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-4">
                          <Play className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredTutorial.category}
                      </span>
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                        {featuredTutorial.level}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredTutorial.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredTutorial.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredTutorial.instructor}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredTutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {featuredTutorial.modules} modules
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600">{featuredTutorial.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {featuredTutorial.students} students enrolled
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-gray-900">{featuredTutorial.price}</span>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                          <Play className="w-4 h-4 mr-2" />
                          Start Learning
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Categories</option>
                  {categories.slice(1).map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Levels</option>
                  {levels.slice(1).map((level, index) => (
                    <option key={index} value={level}>{level}</option>
                  ))}
                </select>
              </div>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Tutorial Categories */}
        <section id="tutorials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find tutorials organized by topic and skill level.
              </p>
            </motion.div>

            <div className="space-y-12">
              {tutorialCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.tutorials.map((tutorial, tutorialIndex) => (
                      <div key={tutorialIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                            tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-600'
                          }`}>
                            {tutorial.difficulty}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Star className="w-3 h-3 text-yellow-400 mr-1" />
                            {tutorial.rating}
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {tutorial.title}
                        </h4>
                        
                        <p className="text-gray-600 text-sm mb-3">
                          {tutorial.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{tutorial.duration}</span>
                          </div>
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                            {tutorial.type}
                          </span>
                        </div>
                        
                        <button className="w-full text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Start Tutorial →
                        </button>
                      </div>
                    ))}
=======
        {/* Tutorials Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Tutorials</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularTutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Play className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-900 text-white px-2 py-1 rounded text-sm">
                        {tutorial.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.category}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                        {tutorial.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {tutorial.instructor}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600">{tutorial.rating}</span>
                        <span className="text-sm text-gray-500 ml-2">({tutorial.students})</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{tutorial.price}</div>
                        <div className="text-sm text-gray-500">{tutorial.modules} modules</div>
                      </div>
                    </div>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                  <div className="text-sm text-gray-500">tutorials</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Featured Tutorials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tutorials</h2>
              <p className="text-xl text-gray-600">Our most popular and comprehensive tutorials</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <motion.article
                  key={tutorial.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {tutorial.category}
                      </span>
                      <span className="text-sm text-gray-500">{tutorial.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {tutorial.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {tutorial.author}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {tutorial.rating}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tutorial.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {tutorial.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <a
                      href={tutorial.videoUrl}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Tutorial
                    </a>
                  </div>
                </motion.article>
=======
<<<<<<< HEAD
        {/* Difficulty Levels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Level
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find tutorials that match your experience level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {difficultyLevels.map((level, index) => (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-${level.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <CheckCircle className={`w-8 h-8 text-${level.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {level.name}
                  </h3>
                  <p className="text-gray-600">
                    {level.description}
                  </p>
                </motion.div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Recent Tutorials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Tutorials</h2>
              <p className="text-xl text-gray-600">Latest tutorials and guides</p>
            </div>
            
            <div className="space-y-6">
              {recentTutorials.map((tutorial, index) => (
                <motion.article
                  key={tutorial.id}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full mr-3">
                          {tutorial.category}
                        </span>
                        <span className="text-sm text-gray-500">{tutorial.duration}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {tutorial.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-3">
                        {tutorial.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tutorial.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{tutorial.author}</span>
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        <span className="mr-4">{tutorial.rating}</span>
                        <Users className="w-4 h-4 mr-1" />
                        <span className="mr-4">{tutorial.students.toLocaleString()} students</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {tutorial.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <a
                      href={tutorial.videoUrl}
                      className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a
                href="/tutorials/archive"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                View All Tutorials <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Learning</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Get notified when we publish new tutorials and learning content
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Learn?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Start with our beginner tutorials or jump into advanced topics. 
                Our comprehensive learning resources will help you master our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#tutorials"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Get Help
                </Link>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              </div>
            </div>
          </div>
        </section>
=======
        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who are advancing their careers with our expert-led tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/training"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Training
              </Link>
            </div>
          </div>
        </section>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
      </div>
<<<<<<< HEAD
    </Layout>
=======
    </MainLayout>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  );
}