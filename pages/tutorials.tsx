import React from 'react';
import Head from 'next/head';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Users, 
  Star,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ExternalLink,
  Brain,
  Shield,
  Cpu,
  Zap,
  Cloud,
  Database,
  Target,
  TrendingUp,
  Award,
  Video,
  FileText,
  Code,
  Download,
  Eye,
  Calendar,
  Tag,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  PlayCircle,
  Bookmark,
  Share2,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

export default function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI: A Beginner's Guide to Machine Learning",
      description: "Learn the fundamentals of artificial intelligence and machine learning from scratch. This comprehensive tutorial covers everything from basic concepts to your first AI model.",
      author: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      duration: "4 hours",
      level: "Beginner",
      category: "AI & Machine Learning",
      rating: 4.9,
      students: 1247,
      lastUpdated: "December 2024",
      topics: ["AI Fundamentals", "Machine Learning Basics", "Python for AI", "First Model"],
      image: "/images/tutorials/ai-beginners.jpg",
      videoUrl: "#",
      downloadUrl: "#",
      isFeatured: true,
      isFree: true
    },
    {
      id: 2,
      title: "Cybersecurity Essentials: Protecting Your Digital Assets",
      description: "Master the fundamentals of cybersecurity and learn how to protect yourself and your organization from common threats and attacks.",
      author: "Alex Johnson",
      role: "Chief Security Officer",
      duration: "6 hours",
      level: "Intermediate",
      category: "Cybersecurity",
      rating: 4.8,
      students: 892,
      lastUpdated: "November 2024",
      topics: ["Threat Detection", "Security Best Practices", "Incident Response", "Security Tools"],
      image: "/images/tutorials/cybersecurity-essentials.jpg",
      videoUrl: "#",
      downloadUrl: "#",
      isFeatured: true,
      isFree: false
    },
    {
      id: 3,
      title: "Quantum Computing Fundamentals: Understanding the Future of Computing",
      description: "Dive into the world of quantum computing and understand how it will revolutionize various industries and solve complex problems.",
      author: "Dr. Michael Rodriguez",
      role: "Quantum Research Lead",
      duration: "8 hours",
      level: "Advanced",
      category: "Quantum Technology",
      rating: 4.7,
      students: 456,
      lastUpdated: "October 2024",
      topics: ["Quantum Mechanics", "Qubits", "Quantum Algorithms", "Quantum Programming"],
      image: "/images/tutorials/quantum-fundamentals.jpg",
      videoUrl: "#",
      downloadUrl: "#",
      isFeatured: false,
      isFree: false
    },
    {
      id: 4,
      title: "Cloud Migration: From On-Premises to Cloud-Native",
      description: "Learn how to successfully migrate your applications and infrastructure to the cloud while minimizing downtime and maximizing benefits.",
      author: "David Kim",
      role: "Cloud Architect",
      duration: "5 hours",
      level: "Intermediate",
      category: "Cloud & DevOps",
      rating: 4.6,
      students: 678,
      lastUpdated: "September 2024",
      topics: ["Migration Strategy", "Cloud Platforms", "Cost Optimization", "Security"],
      image: "/images/tutorials/cloud-migration.jpg",
      videoUrl: "#",
      downloadUrl: "#",
      isFeatured: false,
      isFree: false
    },
    {
      id: 5,
      title: "Digital Transformation: A Step-by-Step Guide",
      description: "Transform your business digitally with this comprehensive guide covering strategy, implementation, and measuring success.",
      author: "Lisa Thompson",
      role: "Digital Strategy Director",
      duration: "7 hours",
      level: "Intermediate",
      category: "Digital Transformation",
      rating: 4.8,
      students: 543,
      lastUpdated: "August 2024",
      topics: ["Strategy Development", "Change Management", "Technology Selection", "ROI Measurement"],
      image: "/images/tutorials/digital-transformation.jpg",
      videoUrl: "#",
      downloadUrl: "#",
      isFeatured: false,
      isFree: false
    },
    {
      id: 6,
      title: "Building Resilient IT Infrastructure",
      description: "Design and implement IT infrastructure that can withstand any challenge and provide optimal performance for your organization.",
      author: "Emma Wilson",
      role: "Infrastructure Engineer",
      duration: "6 hours",
      level: "Advanced",
      category: "IT Infrastructure",
      rating: 4.7,
      students: 389,
      lastUpdated: "July 2024",
      topics: ["High Availability", "Disaster Recovery", "Performance Optimization", "Monitoring"],
      image: "/images/tutorials/it-infrastructure.jpg",
      videoUrl: "#",
      downloadUrl: "#",
      isFeatured: false,
      isFree: false
    }
  ];

  const categories = [
    { name: "All", count: 6, active: true },
    { name: "AI & Machine Learning", count: 1, active: false },
    { name: "Cybersecurity", count: 1, active: false },
    { name: "Quantum Technology", count: 1, active: false },
    { name: "Cloud & DevOps", count: 1, active: false },
    { name: "Digital Transformation", count: 1, active: false },
    { name: "IT Infrastructure", count: 1, active: false }
  ];

  const levels = [
    { name: "All Levels", active: true },
    { name: "Beginner", active: false },
    { name: "Intermediate", active: false },
    { name: "Advanced", active: false }
  ];

  const featuredTutorials = tutorials.filter(tutorial => tutorial.isFeatured);

  return (
    <>
      <Head>
        <title>Tutorials & Learning | Zion Tech Group</title>
        <meta name="description" content="Master cutting-edge technology with our comprehensive tutorials on AI, cybersecurity, quantum computing, cloud migration, and digital transformation. Learn from industry experts." />
        <meta name="keywords" content="tutorials, learning, AI, cybersecurity, quantum computing, cloud migration, digital transformation, technology education" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tutorials & Learning | Zion Tech Group" />
        <meta property="og:description" content="Master cutting-edge technology with our comprehensive tutorials on AI, cybersecurity, quantum computing, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/tutorials" />
        <link rel="canonical" href="https://ziontechgroup.com/tutorials" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Technology</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn from industry experts with our comprehensive tutorials on AI, cybersecurity, quantum computing, 
              cloud migration, and digital transformation. Start your journey to becoming a tech expert today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Start Learning</span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Browse Tutorials</span>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Tutorials</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/30 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full">
                        {tutorial.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        {tutorial.isFree && (
                          <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs font-medium rounded-full">
                            Free
                          </span>
                        )}
                        <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-xs font-medium rounded-full flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-current" />
                          <span>Featured</span>
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base mb-6 line-clamp-3">
                      {tutorial.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{tutorial.author}, {tutorial.role}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{tutorial.duration} • {tutorial.level}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{tutorial.students.toLocaleString()} students enrolled</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{tutorial.rating} rating</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-white mb-2">What You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tutorial.topics.map((topic, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2">
                        <PlayCircle className="h-4 w-4" />
                        <span>{tutorial.isFree ? 'Start Learning' : 'Enroll Now'}</span>
                      </button>
                      <button className="px-4 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200">
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      category.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {levels.map((level) => (
                  <button
                    key={level.name}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      level.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Tutorials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">All Tutorials</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <span>Sort by:</span>
                  <button className="flex items-center space-x-1 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200">
                    <span>Popularity</span>
                    <SortDesc className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full">
                        {tutorial.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        {tutorial.isFree && (
                          <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs font-medium rounded-full">
                            Free
                          </span>
                        )}
                        {tutorial.isFeatured && (
                          <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs font-medium rounded-full flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-current" />
                            <span>Featured</span>
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{tutorial.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{tutorial.duration} • {tutorial.level}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{tutorial.students.toLocaleString()} students</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600/30 transition-all duration-200 flex items-center justify-center space-x-1">
                        <PlayCircle className="h-4 w-4" />
                        <span>{tutorial.isFree ? 'Start' : 'Enroll'}</span>
                      </button>
                      <button className="px-3 py-2 bg-gray-600/20 text-gray-400 text-sm font-medium rounded-lg hover:bg-gray-600/30 transition-all duration-200">
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated with New Tutorials</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and get notified about new tutorials, learning resources, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners who are already mastering cutting-edge technology with our expert-led tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Browse All Tutorials
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                Contact Our Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}