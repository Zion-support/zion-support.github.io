<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Video, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink,
  Clock, Star, CheckCircle, Play
} from 'lucide-react';

export default function Training() {
  const trainingPrograms = [
    {
      title: 'AI Consciousness Development Masterclass',
      description: 'Comprehensive training on developing AI systems with genuine consciousness and emotional intelligence',
      duration: '8 weeks',
      level: 'Advanced',
      format: 'Online + Live Sessions',
      instructor: 'Dr. Sarah Chen',
      price: '$2,999',
      rating: 4.9,
      students: 156,
      icon: <Brain className="w-8 h-8 text-violet-500" />,
      category: 'AI & Consciousness',
      featured: true
    },
    {
      title: 'Quantum Computing Fundamentals',
      description: 'Learn the basics of quantum computing and its applications in AI and technology',
      duration: '6 weeks',
      level: 'Intermediate',
      format: 'Online Self-Paced',
      instructor: 'Dr. Michael Rodriguez',
      price: '$1,499',
      rating: 4.8,
      students: 234,
      icon: <Atom className="w-8 h-8 text-blue-500" />,
      category: 'Quantum Technology',
      featured: false
    },
    {
      title: 'Autonomous Business Operations',
      description: 'Master the implementation and management of AI-powered autonomous business systems',
      duration: '10 weeks',
      level: 'Advanced',
      format: 'Hybrid Learning',
      instructor: 'Alexandra Thompson',
      price: '$3,499',
      rating: 4.9,
      students: 89,
      icon: <Rocket className="w-8 h-8 text-teal-500" />,
      category: 'Business Automation',
      featured: false
    },
    {
      title: 'AI-Powered IT Asset Management',
      description: 'Learn to implement and optimize AI-driven IT infrastructure management solutions',
      duration: '5 weeks',
      level: 'Intermediate',
      format: 'Online + Workshops',
      instructor: 'David Kim',
      price: '$1,999',
      rating: 4.7,
      students: 167,
      icon: <Shield className="w-8 h-8 text-green-500" />,
      category: 'IT Management',
      featured: false
    },
    {
      title: 'Quantum Neural Networks',
      description: 'Advanced course on quantum-enhanced neural networks and their applications',
      duration: '12 weeks',
      level: 'Expert',
      format: 'Intensive Program',
      instructor: 'Dr. James Wilson',
      price: '$4,999',
      rating: 5.0,
      students: 45,
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      category: 'Quantum AI',
      featured: false
    },
    {
      title: 'AI Ethics & Governance',
      description: 'Essential training on responsible AI development and ethical considerations',
      duration: '4 weeks',
      level: 'All Levels',
      format: 'Online',
      instructor: 'Dr. Emily Watson',
      price: '$999',
      rating: 4.8,
      students: 312,
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      category: 'AI Ethics',
      featured: false
    }
  ];

  const categories = [
    { name: 'All Programs', count: trainingPrograms.length, active: true },
    { name: 'AI & Consciousness', count: 1, active: false },
    { name: 'Quantum Technology', count: 1, active: false },
    { name: 'Business Automation', count: 1, active: false },
    { name: 'IT Management', count: 1, active: false },
    { name: 'Quantum AI', count: 1, active: false },
    { name: 'AI Ethics', count: 1, active: false }
  ];

  const learningPaths = [
    {
      title: 'AI Consciousness Specialist',
      description: 'Complete path to becoming an expert in AI consciousness development',
      courses: ['AI Consciousness Development Masterclass', 'AI Ethics & Governance', 'Advanced Neural Networks'],
      duration: '6 months',
      certification: 'AI Consciousness Specialist Certificate',
      icon: <Brain className="w-8 h-8 text-violet-500" />
    },
    {
      title: 'Quantum AI Engineer',
      description: 'Comprehensive training in quantum computing and AI integration',
      courses: ['Quantum Computing Fundamentals', 'Quantum Neural Networks', 'Quantum AI Fusion'],
      duration: '8 months',
      certification: 'Quantum AI Engineer Certificate',
      icon: <Atom className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Business Automation Expert',
      description: 'Master the art of autonomous business operations and AI integration',
      courses: ['Autonomous Business Operations', 'AI-Powered IT Asset Management', 'Business Intelligence'],
      duration: '7 months',
      certification: 'Business Automation Expert Certificate',
      icon: <Rocket className="w-8 h-8 text-teal-500" />
    }
  ];

  return (
    <>
      <Head>
        <title>Training & Education - Zion Tech Group</title>
        <meta name="description" content="Comprehensive training programs in AI consciousness, quantum computing, and technology innovation. Learn from industry experts and earn certifications." />
        <meta name="keywords" content="training, education, AI training, quantum computing courses, technology education, AI consciousness, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com/training" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
=======
import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Users, Clock, Award, BookOpen, Video, 
  Headphones, Code, Brain, Atom, Rocket, Shield, Zap,
  Star, CheckCircle, ArrowRight, ChevronDown, ChevronUp,
  Play, Download, ExternalLink, Calendar, MapPin, DollarSign,
  TrendingUp, Target, Lightbulb, Building, Globe, Server
} from 'lucide-react';

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const trainingCategories = [
    { id: 'all', name: 'All Programs', count: 24 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 8 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6 },
    { id: 'autonomous-ops', name: 'Autonomous Operations', count: 5 },
    { id: 'enterprise-it', name: 'Enterprise IT', count: 5 }
  ];

  const featuredPrograms = [
    {
      id: 1,
      title: 'AI Consciousness Developer Certification',
      description: 'Master the fundamentals of AI consciousness development and earn industry-recognized certification.',
      category: 'ai-consciousness',
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      price: '$2,999',
      rating: 4.9,
      students: '1,247',
      featured: true,
      icon: <Brain className="w-12 h-12" />,
      highlights: [
        'Hands-on AI consciousness platform development',
        'Real-world project implementation',
        'Expert mentorship and support',
        'Industry-recognized certification',
        'Lifetime access to course materials'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Implementation Specialist',
      description: 'Learn to implement quantum computing solutions in enterprise environments with practical applications.',
      category: 'quantum-computing',
      duration: '16 weeks',
      level: 'Advanced',
      price: '$3,499',
      rating: 4.8,
      students: '892',
      featured: true,
      icon: <Atom className="w-12 h-12" />,
      highlights: [
        'Quantum algorithm development',
        'Enterprise integration strategies',
        'Performance optimization techniques',
        'Security and compliance considerations',
        'Hands-on quantum simulator access'
      ]
    },
    {
      id: 3,
      title: 'Autonomous Business Operations Master',
      description: 'Transform your organization with fully autonomous business operations and AI-driven automation.',
      category: 'autonomous-ops',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,499',
      rating: 4.9,
      students: '1,156',
      featured: true,
      icon: <Rocket className="w-12 h-12" />,
      highlights: [
        'Business process automation design',
        'AI-powered decision making systems',
        'Change management strategies',
        'ROI measurement and optimization',
        'Industry best practices and case studies'
      ]
    }
  ];

  const allPrograms = [
    // AI Consciousness Programs
    {
      id: 4,
      title: 'AI Consciousness Fundamentals',
      description: 'Introduction to artificial consciousness concepts and basic implementation.',
      category: 'ai-consciousness',
      duration: '6 weeks',
      level: 'Beginner',
      price: '$1,299',
      rating: 4.7,
      students: '2,341',
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 5,
      title: 'Advanced AI Consciousness Architecture',
      description: 'Deep dive into complex AI consciousness system design and optimization.',
      category: 'ai-consciousness',
      duration: '14 weeks',
      level: 'Advanced',
      price: '$3,999',
      rating: 4.9,
      students: '567',
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 6,
      title: 'AI Ethics and Governance',
      description: 'Learn responsible AI development practices and governance frameworks.',
      category: 'ai-consciousness',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,899',
      rating: 4.8,
      students: '1,023',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 7,
      title: 'AI Consciousness API Development',
      description: 'Build robust APIs for AI consciousness applications and services.',
      category: 'ai-consciousness',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,199',
      rating: 4.7,
      students: '789',
      icon: <Code className="w-8 h-8" />
    },

    // Quantum Computing Programs
    {
      id: 8,
      title: 'Quantum Computing Basics',
      description: 'Foundation course covering quantum mechanics and computing principles.',
      category: 'quantum-computing',
      duration: '8 weeks',
      level: 'Beginner',
      price: '$1,599',
      rating: 4.6,
      students: '1,456',
      icon: <Atom className="w-8 h-8" />
    },
    {
      id: 9,
      title: 'Quantum Machine Learning',
      description: 'Combine quantum computing with machine learning for breakthrough applications.',
      category: 'quantum-computing',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$3,299',
      rating: 4.8,
      students: '423',
      icon: <Atom className="w-8 h-8" />
    },
    {
      id: 10,
      title: 'Quantum Security and Cryptography',
      description: 'Implement quantum-resistant security solutions and cryptographic protocols.',
      category: 'quantum-computing',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,399',
      rating: 4.7,
      students: '678',
      icon: <Shield className="w-8 h-8" />
    },

    // Autonomous Operations Programs
    {
      id: 11,
      title: 'Business Process Automation',
      description: 'Learn to automate complex business processes with AI and robotics.',
      category: 'autonomous-ops',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,999',
      rating: 4.8,
      students: '945',
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 12,
      title: 'Autonomous Decision Systems',
      description: 'Design and implement AI-powered autonomous decision-making systems.',
      category: 'autonomous-ops',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$2,999',
      rating: 4.9,
      students: '567',
      icon: <Target className="w-8 h-8" />
    },

    // Enterprise IT Programs
    {
      id: 13,
      title: 'Enterprise AI Integration',
      description: 'Integrate AI solutions into existing enterprise infrastructure and systems.',
      category: 'enterprise-it',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,299',
      rating: 4.7,
      students: '823',
      icon: <Building className="w-8 h-8" />
    },
    {
      id: 14,
      title: 'Cloud-Native AI Development',
      description: 'Build and deploy AI applications using cloud-native technologies and practices.',
      category: 'enterprise-it',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,899',
      rating: 4.6,
      students: '1,134',
      icon: <Server className="w-8 h-8" />
    },
    {
      id: 15,
      title: 'DevOps for AI Systems',
      description: 'Implement DevOps practices specifically for AI and machine learning systems.',
      category: 'enterprise-it',
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$1,599',
      rating: 4.8,
      students: '756',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const filteredPrograms = allPrograms.filter(program => 
    selectedCategory === 'all' || program.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    const icons = {
      'ai-consciousness': <Brain className="w-6 h-6" />,
      'quantum-computing': <Atom className="w-6 h-6" />,
      'autonomous-ops': <Rocket className="w-6 h-6" />,
      'enterprise-it': <Building className="w-6 h-6" />
    };
    return icons[category as keyof typeof icons] || <GraduationCap className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'ai-consciousness': 'cyan',
      'quantum-computing': 'purple',
      'autonomous-ops': 'green',
      'enterprise-it': 'blue'
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  const toggleProgram = (id: number) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

  return (
    <Layout>
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Master AI consciousness, quantum computing, and autonomous operations with our comprehensive training programs. Earn industry-recognized certifications and advance your career."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
>>>>>>> autobot/2025-08-24T03-49-38-332Z
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4 mr-2" />
                Expert-Led Training
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
                Training & Education
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Master the future of technology with our comprehensive training programs in AI consciousness, 
                quantum computing, and autonomous business operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#programs" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Explore Programs
                  <BookOpen className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Program */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Training Program</h2>
              
              {trainingPrograms.filter(program => program.featured).map((program, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium rounded-full">
                          {program.category}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{program.title}</h3>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{program.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          {program.duration}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Users className="w-4 h-4 mr-2" />
                          {program.level}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Video className="w-4 h-4 mr-2" />
                          {program.format}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Star className="w-4 h-4 mr-2" />
                          {program.rating}/5.0
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-sm text-gray-400">Instructor</div>
                          <div className="text-white font-semibold">{program.instructor}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Students Enrolled</div>
                          <div className="text-white font-semibold">{program.students}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl font-bold text-purple-400">{program.price}</div>
                        <Link 
                          href={`/training/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200"
                        >
                          Enroll Now
                          <Play className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        {program.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Learning Paths</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {learningPaths.map((path, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{path.icon}</div>
                      <h3 className="text-xl font-bold text-white">{path.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{path.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Courses Included:</div>
                      <ul className="space-y-1">
                        {path.courses.map((course, courseIndex) => (
                          <li key={courseIndex} className="text-gray-300 text-xs flex items-center">
                            <CheckCircle className="w-3 h-3 mr-2 text-purple-400" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="text-gray-400">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {path.duration}
                      </div>
                      <div className="text-purple-400 font-semibold">
                        {path.certification}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/training/path/${path.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                    >
                      View Learning Path
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                ))}
=======
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Training & Certification
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Master the future of technology with our comprehensive training programs in AI consciousness, quantum computing, and autonomous operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Expert-Led Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Industry Certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Global Community</span>
                </div>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Categories Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
=======
        {/* Category Filters */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {trainingCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
>>>>>>> autobot/2025-08-24T03-49-38-332Z
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Training Programs Grid */}
        <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
=======
        {/* Featured Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
>>>>>>> autobot/2025-08-24T03-49-38-332Z
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">All Training Programs</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {trainingPrograms.filter(program => !program.featured).map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{program.icon}</div>
                      <div>
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium rounded-full">
                          {program.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{program.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{program.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-3 h-3 mr-1" />
                        {program.level}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Star className="w-3 h-3 mr-1" />
                        {program.rating}/5.0
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-3 h-3 mr-1" />
                        {program.students}
=======
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Programs
              </h2>
              <p className="text-xl text-gray-400">
                Our most popular and comprehensive training programs
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    {program.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 bg-${getCategoryColor(program.category)}-500/20 text-${getCategoryColor(program.category)}-400 rounded-full text-sm border border-${getCategoryColor(program.category)}-500/30`}>
                        {program.category.replace('-', ' ')}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {program.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{program.students} students</span>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
<<<<<<< HEAD
                      <div className="text-lg font-bold text-purple-400">{program.price}</div>
                      <div className="text-gray-400 text-sm">{program.instructor}</div>
                    </div>
                    
                    <Link 
                      href={`/training/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                    >
                      Learn More
                      <Play className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
=======
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{program.rating}</span>
                      </div>
                      <span className="text-2xl font-bold text-cyan-400">{program.price}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {program.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href="#"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Programs */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
>>>>>>> autobot/2025-08-24T03-49-38-332Z
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Training?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Expert Instructors',
                    description: 'Learn from industry leaders and researchers at the forefront of AI and quantum technology',
                    icon: <Award className="w-8 h-8 text-purple-400" />
                  },
                  {
                    title: 'Hands-on Experience',
                    description: 'Gain practical experience with real-world projects and cutting-edge technology',
                    icon: <Sparkles className="w-8 h-8 text-pink-400" />
                  },
                  {
                    title: 'Industry Recognition',
                    description: 'Earn certificates that are recognized by leading technology companies worldwide',
                    icon: <CheckCircle className="w-8 h-8 text-green-400" />
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
=======
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                All Training Programs
              </h2>
              <p className="text-xl text-gray-400">
                Comprehensive collection of training programs across all technology domains
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        {program.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 bg-${getCategoryColor(program.category)}-500/20 text-${getCategoryColor(program.category)}-400 rounded text-xs border border-${getCategoryColor(program.category)}-500/30`}>
                            {program.category.replace('-', ' ')}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {program.level}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {program.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{program.students} students</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span>{program.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right flex-shrink-0">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">
                          {program.price}
                        </div>
                        <button
                          onClick={() => toggleProgram(program.id)}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {expandedProgram === program.id ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {expandedProgram === program.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-semibold mb-3">What You'll Learn</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Core concepts and principles</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Hands-on practical exercises</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Real-world project implementation</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Industry best practices</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-semibold mb-3">Program Details</h4>
                            <div className="space-y-2 text-sm text-gray-300">
                              <div className="flex justify-between">
                                <span>Duration:</span>
                                <span className="text-white">{program.duration}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Level:</span>
                                <span className="text-white">{program.level}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Format:</span>
                                <span className="text-white">Online + Live Sessions</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Support:</span>
                                <span className="text-white">24/7 Community + Mentors</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex gap-3">
                          <a
                            href="#"
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            Enroll Now
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                          >
                            Learn More
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Learning Paths
              </h2>
              <p className="text-xl text-gray-400">
                Structured learning journeys to master complete technology domains
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI Consciousness Expert',
                  description: 'Complete path from fundamentals to advanced AI consciousness development.',
                  duration: '6-12 months',
                  courses: 8,
                  level: 'Beginner to Expert',
                  icon: <Brain className="w-12 h-12" />,
                  color: 'cyan',
                  path: [
                    'AI Consciousness Fundamentals',
                    'Consciousness Architecture Design',
                    'Advanced Implementation',
                    'Ethics and Governance',
                    'API Development',
                    'System Optimization',
                    'Real-world Applications',
                    'Expert Certification'
                  ]
                },
                {
                  title: 'Quantum Computing Specialist',
                  description: 'Master quantum computing from basic principles to enterprise implementation.',
                  duration: '8-16 months',
                  courses: 6,
                  level: 'Intermediate to Expert',
                  icon: <Atom className="w-12 h-12" />,
                  color: 'purple',
                  path: [
                    'Quantum Computing Basics',
                    'Quantum Algorithms',
                    'Machine Learning Integration',
                    'Security Implementation',
                    'Enterprise Solutions',
                    'Advanced Applications'
                  ]
                },
                {
                  title: 'Autonomous Operations Leader',
                  description: 'Lead the transformation to fully autonomous business operations.',
                  duration: '6-10 months',
                  courses: 5,
                  level: 'Intermediate to Advanced',
                  icon: <Rocket className="w-12 h-12" />,
                  color: 'green',
                  path: [
                    'Business Process Analysis',
                    'Automation Strategy',
                    'System Implementation',
                    'Change Management',
                    'Performance Optimization'
                  ]
                }
              ].map((path, index) => (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 bg-${path.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {path.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {path.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {path.description}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{path.courses} courses</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {path.path.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-bold">
                          {stepIndex + 1}
                        </div>
                        <span className="text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="#"
                    className={`w-full inline-flex items-center justify-center gap-2 bg-${path.color}-500/20 text-${path.color}-400 font-bold py-3 px-6 rounded-xl border border-${path.color}-500/30 hover:bg-${path.color}-500 hover:text-white transition-all duration-300`}
                  >
                    Start Learning Path
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
=======
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
>>>>>>> autobot/2025-08-24T03-49-38-332Z
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Master the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey to becoming an expert in AI consciousness, quantum computing, 
                and autonomous business operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 transform hover:scale-105">
                  Start Learning
                  <GraduationCap className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                  Schedule Consultation
                </Link>
=======
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of professionals who have already mastered the future of technology. Start your learning journey today and earn industry-recognized certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Personalized Guidance
                </a>
                <a
                  href="/resources"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Explore Free Resources
                </a>
>>>>>>> autobot/2025-08-24T03-49-38-332Z
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
  );
}
=======
    </Layout>
  );
};

export default Training;
>>>>>>> autobot/2025-08-24T03-49-38-332Z
