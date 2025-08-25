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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
              </div>
            </motion.div>
          </div>
        </section>

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
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs Grid */}
        <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}