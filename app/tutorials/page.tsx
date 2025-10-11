<<<<<<< HEAD
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Play, ArrowRight, Clock, Users, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
=======
import { Play, Clock, User, ArrowRight, BookOpen, Code, Database, Cloud, Shield } from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  author: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd

const TutorialsPage: React.FC = () => {
  const tutorials: Tutorial[] = [
    {
<<<<<<< HEAD
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',
      level: 'Beginner',
      duration: '2 hours',
      category: 'AI/ML',
      rating: 4.8,
      students: 1250
    },
    {
      title: 'Cloud Architecture Fundamentals',
      description: 'Master cloud computing concepts and design scalable, reliable systems.',
      level: 'Intermediate',
      duration: '3 hours',
      category: 'Cloud',
      rating: 4.9,
      students: 980
    },
    {
      title: 'Web Development with React',
      description: 'Build modern web applications using React and modern development practices.',
      level: 'Beginner',
      duration: '4 hours',
      category: 'Web Dev',
      rating: 4.7,
      students: 2100
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Protect your applications and data with industry-standard security measures.',
      level: 'Intermediate',
      duration: '2.5 hours',
      category: 'Security',
      rating: 4.8,
      students: 750
    },
    {
      title: 'Database Design & Optimization',
      description: 'Design efficient databases and optimize performance for large-scale applications.',
      level: 'Advanced',
      duration: '3.5 hours',
      category: 'Database',
      rating: 4.9,
      students: 650
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automate your development workflow with modern DevOps practices and tools.',
      level: 'Intermediate',
      duration: '3 hours',
      category: 'DevOps',
      rating: 4.6,
      students: 890
=======
      id: '1',
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of artificial intelligence and machine learning development.',
      duration: '2h 30m',
      level: 'Beginner',
      author: 'Dr. Sarah Johnson',
      category: 'AI/ML',
      thumbnail: '/tutorials/ai-fundamentals.jpg',
      videoUrl: '/tutorials/ai-fundamentals'
    },
    {
      id: '2',
      title: 'Building Scalable Web Applications',
      description: 'Master the art of creating web applications that can handle millions of users.',
      duration: '3h 15m',
      level: 'Intermediate',
      author: 'Mike Chen',
      category: 'Web Development',
      thumbnail: '/tutorials/scalable-web.jpg',
      videoUrl: '/tutorials/scalable-web'
    },
    {
      id: '3',
      title: 'Cloud Infrastructure Best Practices',
      description: 'Learn how to design and implement robust cloud infrastructure solutions.',
      duration: '4h 00m',
      level: 'Advanced',
      author: 'Alex Rodriguez',
      category: 'Cloud Computing',
      thumbnail: '/tutorials/cloud-infrastructure.jpg',
      videoUrl: '/tutorials/cloud-infrastructure'
    },
    {
      id: '4',
      title: 'Database Design and Optimization',
      description: 'Master database design principles and performance optimization techniques.',
      duration: '2h 45m',
      level: 'Intermediate',
      author: 'Emily Davis',
      category: 'Database',
      thumbnail: '/tutorials/database-design.jpg',
      videoUrl: '/tutorials/database-design'
    },
    {
      id: '5',
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts and practices for developers.',
      duration: '3h 30m',
      level: 'Beginner',
      author: 'James Wilson',
      category: 'Security',
      thumbnail: '/tutorials/cybersecurity.jpg',
      videoUrl: '/tutorials/cybersecurity'
    },
    {
      id: '6',
      title: 'API Development and Integration',
      description: 'Build and integrate RESTful APIs for modern applications.',
      duration: '2h 15m',
      level: 'Intermediate',
      author: 'Lisa Thompson',
      category: 'API Development',
      thumbnail: '/tutorials/api-development.jpg',
      videoUrl: '/tutorials/api-development'
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
    }
  ]

<<<<<<< HEAD
  const categories = ['All', 'AI/ML', 'Cloud', 'Web Dev', 'Security', 'Database', 'DevOps']
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
  const categories = [
    { name: 'All', icon: BookOpen, count: tutorials.length },
    { name: 'AI/ML', icon: Code, count: tutorials.filter(t => t.category === 'AI/ML').length },
    { name: 'Web Development', icon: Code, count: tutorials.filter(t => t.category === 'Web Development').length },
    { name: 'Cloud Computing', icon: Cloud, count: tutorials.filter(t => t.category === 'Cloud Computing').length },
    { name: 'Database', icon: Database, count: tutorials.filter(t => t.category === 'Database').length },
    { name: 'Security', icon: Shield, count: tutorials.filter(t => t.category === 'Security').length }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd

const PagePage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
=======
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta name="description" content="Comprehensive tutorials on AI, cloud computing, web development, cybersecurity, and more. Learn from industry experts and advance your tech skills." />
        <meta name="keywords" content="tutorials, learning, AI, cloud computing, web development, cybersecurity, database, DevOps, tech skills" />
      </Helmet>
      
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
=======
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials. From AI to cloud computing, learn from industry experts and advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Learning
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Browse All Tutorials
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PagePage;
=======
        {/* Tutorials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">{tutorial.category}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-300">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {tutorial.students} students
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105">
                    <Play className="w-4 h-4 inline mr-2" />
                    Start Learning
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Learn?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your learning journey with our comprehensive tutorials and expert guidance.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <ArrowRight className="w-5 h-5 inline mr-2" />
              Get Started
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TutorialsPage
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Grow</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and hands-on learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Learning
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Browse Categories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <category.icon className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-white font-medium">{category.name}</span>
                <span className="ml-2 text-gray-400 text-sm">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Tutorials
            </h2>
            <p className="text-xl text-gray-300">
              Learn from industry experts and build real-world skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                    <Play className="w-16 h-16 text-white/80" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {tutorial.author}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Watch Tutorial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers who are already advancing their skills with our tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Get Started Free
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              View All Tutorials
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TutorialsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
