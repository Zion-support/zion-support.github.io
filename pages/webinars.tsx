import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { Calendar, Clock, Users, Play, ArrowRight, Tag, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Webinars: NextPage = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Implementation Strategies',
      description: 'Join our experts as they discuss the latest AI trends, practical implementation strategies, and real-world case studies from enterprise deployments.',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'Chief AI Officer',
      date: '2025-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      attendees: 0,
      maxAttendees: 500,
      category: 'Artificial Intelligence',
      level: 'Intermediate',
      image: '/webinars/ai-enterprise-future.jpg',
      slug: 'ai-enterprise-trends-implementation',
      tags: ['AI', 'Enterprise', 'Machine Learning', 'Strategy']
    },
    {
      id: 2,
      title: 'Quantum Computing: From Theory to Practical Applications',
      description: 'Explore the current state of quantum computing and learn about practical applications that are already transforming industries today.',
      speaker: 'Michael Rodriguez',
      speakerTitle: 'Quantum Computing Specialist',
      date: '2025-02-22',
      time: '3:00 PM EST',
      duration: '45 minutes',
      attendees: 0,
      maxAttendees: 300,
      category: 'Quantum Computing',
      level: 'Advanced',
      image: '/webinars/quantum-computing-applications.jpg',
      slug: 'quantum-computing-theory-practice',
      tags: ['Quantum Computing', 'Advanced Technology', 'Research']
    },
    {
      id: 3,
      title: 'Building Scalable Micro SaaS Applications',
      description: 'Learn the secrets to building and scaling profitable micro SaaS applications, from initial concept to market success.',
      speaker: 'Emily Watson',
      speakerTitle: 'Micro SaaS Expert',
      date: '2025-03-01',
      time: '1:00 PM EST',
      duration: '75 minutes',
      attendees: 0,
      maxAttendees: 400,
      category: 'Micro SaaS',
      level: 'Beginner',
      image: '/webinars/micro-saas-scalable.jpg',
      slug: 'building-scalable-micro-saas',
      tags: ['Micro SaaS', 'Startup', 'Business Strategy', 'Development']
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Blockchain Infrastructure for Modern Enterprises',
      description: 'Comprehensive overview of blockchain infrastructure design and implementation for enterprise environments.',
      speaker: 'Alex Thompson',
      speakerTitle: 'Blockchain Architect',
      date: '2025-01-20',
      duration: '60 minutes',
      attendees: 450,
      category: 'Blockchain',
      level: 'Intermediate',
      image: '/webinars/blockchain-enterprise.jpg',
      slug: 'blockchain-infrastructure-enterprises',
      recordingUrl: '/recordings/blockchain-infrastructure-enterprises',
      tags: ['Blockchain', 'Infrastructure', 'Enterprise']
    },
    {
      id: 5,
      title: 'Cloud Migration Best Practices and Strategies',
      description: 'Learn proven strategies for successful cloud migration, including planning, execution, and optimization techniques.',
      speaker: 'David Kim',
      speakerTitle: 'Cloud Solutions Architect',
      date: '2025-01-15',
      duration: '50 minutes',
      attendees: 520,
      category: 'Cloud Computing',
      level: 'Intermediate',
      image: '/webinars/cloud-migration-best-practices.jpg',
      slug: 'cloud-migration-best-practices',
      recordingUrl: '/recordings/cloud-migration-best-practices',
      tags: ['Cloud Computing', 'Migration', 'Best Practices']
    },
    {
      id: 6,
      title: 'AI-Powered Cybersecurity: Threats and Defenses',
      description: 'Understanding the evolving landscape of AI-powered cyber threats and the defensive strategies to protect against them.',
      speaker: 'Lisa Park',
      speakerTitle: 'Cybersecurity Expert',
      date: '2025-01-10',
      duration: '55 minutes',
      attendees: 380,
      category: 'Cybersecurity',
      level: 'Advanced',
      image: '/webinars/ai-cybersecurity-threats.jpg',
      slug: 'ai-cybersecurity-threats-defenses',
      recordingUrl: '/recordings/ai-cybersecurity-threats-defenses',
      tags: ['Cybersecurity', 'AI', 'Threat Analysis']
=======
import { Calendar, Clock, Users, Play, ArrowRight, Search, Tag, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Webinars: NextPage = () => {
  const webinars = [
    {
      id: 1,
      title: "AI Revolution: Transforming Business Operations in 2025",
      description: "Join our experts as they discuss the latest AI trends and how businesses can leverage artificial intelligence to drive growth and efficiency.",
      speaker: "Dr. Sarah Chen",
      speakerTitle: "Chief AI Officer",
      date: "February 15, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      category: "Artificial Intelligence",
      attendees: "1,200+",
      status: "upcoming",
      featured: true,
      topics: ["Machine Learning", "Business Automation", "AI Strategy", "ROI"]
    },
    {
      id: 2,
      title: "Cloud Migration Masterclass: From Planning to Execution",
      description: "Learn the essential steps for successful cloud migration, including cost optimization, security considerations, and best practices.",
      speaker: "Michael Rodriguez",
      speakerTitle: "Cloud Solutions Architect",
      date: "February 8, 2025",
      time: "1:00 PM EST",
      duration: "45 minutes",
      category: "Cloud Computing",
      attendees: "850+",
      status: "upcoming",
      featured: false,
      topics: ["AWS", "Azure", "Migration Strategy", "Cost Optimization"]
    },
    {
      id: 3,
      title: "Cybersecurity in the Remote Work Era",
      description: "Explore the latest cybersecurity challenges and solutions for protecting distributed teams and remote work environments.",
      speaker: "Alex Thompson",
      speakerTitle: "Cybersecurity Expert",
      date: "January 25, 2025",
      time: "3:00 PM EST",
      duration: "50 minutes",
      category: "Cybersecurity",
      attendees: "950+",
      status: "recorded",
      featured: false,
      topics: ["Zero Trust", "Remote Security", "Threat Protection", "Compliance"]
    },
    {
      id: 4,
      title: "Building Scalable Microservices Architecture",
      description: "A deep dive into designing and implementing microservices that can scale with your business growth and changing requirements.",
      speaker: "Jennifer Liu",
      speakerTitle: "Senior Software Architect",
      date: "January 18, 2025",
      time: "2:30 PM EST",
      duration: "55 minutes",
      category: "Software Development",
      attendees: "720+",
      status: "recorded",
      featured: false,
      topics: ["Microservices", "API Design", "Scalability", "DevOps"]
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier",
      description: "Discover the potential of quantum computing and its implications for various industries and business applications.",
      speaker: "Dr. Robert Kim",
      speakerTitle: "Quantum Computing Researcher",
      date: "January 10, 2025",
      time: "4:00 PM EST",
      duration: "65 minutes",
      category: "Emerging Technologies",
      attendees: "1,100+",
      status: "recorded",
      featured: false,
      topics: ["Quantum Computing", "Business Applications", "Future Technology", "Innovation"]
    },
    {
      id: 6,
      title: "Data Analytics and Business Intelligence Trends",
      description: "Learn how modern data analytics and BI tools can transform your decision-making process and drive business growth.",
      speaker: "Maria Garcia",
      speakerTitle: "Data Analytics Director",
      date: "December 28, 2024",
      time: "1:30 PM EST",
      duration: "40 minutes",
      category: "Data Analytics",
      attendees: "680+",
      status: "recorded",
      featured: false,
      topics: ["Big Data", "Business Intelligence", "Analytics", "Data Visualization"]
>>>>>>> main
    }
  ];

  const categories = [
<<<<<<< HEAD
    'All Webinars',
    'Artificial Intelligence',
    'Quantum Computing',
    'Micro SaaS',
    'Blockchain',
    'Cloud Computing',
    'Cybersecurity'
  ];

  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars covering the latest trends and technologies in AI, quantum computing, blockchain, and more."
      keywords="webinars, technology education, AI training, quantum computing, blockchain, cloud computing, cybersecurity"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert-Led Technology Webinars
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn from industry experts through interactive webinars covering cutting-edge technologies, 
            best practices, and real-world implementation strategies.
          </motion.p>
        </div>
      </section>

      {/* Webinars Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button className="text-gray-600 hover:text-blue-600 transition-colors text-left w-full">
                          {category}
                        </button>
=======
    "All Webinars",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Software Development",
    "Emerging Technologies",
    "Data Analytics"
  ];

  const upcomingWebinars = webinars.filter(webinar => webinar.status === 'upcoming');
  const recordedWebinars = webinars.filter(webinar => webinar.status === 'recorded');
  const featuredWebinar = webinars.find(webinar => webinar.featured);

  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on technology trends, best practices, and industry insights. Learn from leading professionals in AI, cloud computing, cybersecurity, and more."
      keywords="webinars, technology training, AI webinars, cloud computing, cybersecurity, software development, online learning"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white bg-opacity-20 rounded-full">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Webinars</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                Join our expert-led webinars and learn from industry leaders about the latest 
                technology trends, best practices, and innovative solutions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search webinars..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              
              {/* Featured Webinar */}
              {featuredWebinar && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Webinar</h2>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="w-16 h-16 mx-auto mb-4" />
                        <span className="text-lg font-semibold">Featured Webinar</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {featuredWebinar.category}
                        </span>
                        <span className={`ml-3 px-3 py-1 rounded-full text-sm font-medium ${
                          featuredWebinar.status === 'upcoming' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {featuredWebinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredWebinar.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{featuredWebinar.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredWebinar.topics.map((topic, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="space-y-2 mb-4 md:mb-0">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="font-medium">{featuredWebinar.speaker}</span>
                            <span className="ml-2 text-gray-500">- {featuredWebinar.speakerTitle}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            {featuredWebinar.date} at {featuredWebinar.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            {featuredWebinar.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {featuredWebinar.attendees} registered
                          </div>
                        </div>
                        <button className={`px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center ${
                          featuredWebinar.status === 'upcoming'
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-gray-600 hover:bg-gray-700 text-white'
                        }`}>
                          {featuredWebinar.status === 'upcoming' ? (
                            <>
                              <Calendar className="mr-2 w-5 h-5" />
                              Register Now
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 w-5 h-5" />
                              Watch Recording
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Upcoming Webinars */}
              {upcomingWebinars.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Webinars</h2>
                  <div className="space-y-6">
                    {upcomingWebinars.filter(w => !w.featured).map((webinar) => (
                      <div key={webinar.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/4">
                            <div className="h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                              <div className="text-center text-white">
                                <Calendar className="w-8 h-8 mx-auto mb-2" />
                                <span className="text-sm font-semibold">Upcoming</span>
                              </div>
                            </div>
                          </div>
                          <div className="md:w-3/4">
                            <div className="flex items-center mb-3">
                              <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                                {webinar.category}
                              </span>
                              <span className="ml-3 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                                Upcoming
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                            <p className="text-gray-600 mb-4">{webinar.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {webinar.topics.map((topic, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                  {topic}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-1" />
                                  {webinar.speaker}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {webinar.date}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {webinar.time}
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-1" />
                                  {webinar.attendees}
                                </div>
                              </div>
                              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center">
                                <Calendar className="mr-1 w-4 h-4" />
                                Register
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recorded Webinars */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recorded Webinars</h2>
                <div className="space-y-6">
                  {recordedWebinars.map((webinar) => (
                    <div key={webinar.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                          <div className="h-32 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                            <div className="text-center text-white">
                              <Play className="w-8 h-8 mx-auto mb-2" />
                              <span className="text-sm font-semibold">Watch Now</span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <div className="flex items-center mb-3">
                            <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                              {webinar.category}
                            </span>
                            <span className="ml-3 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                              Recorded
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                          <p className="text-gray-600 mb-4">{webinar.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {webinar.topics.map((topic, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                {topic}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {webinar.speaker}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {webinar.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {webinar.duration}
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {webinar.attendees}
                              </div>
                            </div>
                            <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                              <Play className="mr-1 w-4 h-4" />
                              Watch Recording
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-8">
                
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className={`block py-2 px-3 rounded-lg transition-colors ${
                            index === 0 
                              ? 'bg-blue-100 text-blue-800 font-medium' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </a>
>>>>>>> main
                      </li>
                    ))}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Webinar Stats */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Webinar Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Attendees:</span>
                      <span className="font-semibold">2,500+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Upcoming:</span>
                      <span className="font-semibold">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recordings:</span>
                      <span className="font-semibold">15+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. Rating:</span>
                      <span className="font-semibold">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Webinars Content */}
            <div className="lg:col-span-3">
              {/* Upcoming Webinars */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Upcoming Webinars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {upcomingWebinars.map((webinar, index) => (
                    <motion.article
                      key={webinar.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Calendar className="w-12 h-12 mx-auto mb-2" />
                          <div className="text-lg font-bold">{webinar.category}</div>
                          <div className="text-sm opacity-80">Upcoming</div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Tag className="w-3 h-3 mr-1" />
                            {webinar.category}
                          </span>
                          <span className="text-sm text-gray-500">{webinar.level}</span>
                        </div>
                        
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">
                          {webinar.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                          {webinar.description}
                        </p>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {webinar.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4 space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="font-medium">{webinar.speaker}</span>
                            <span className="text-gray-500 ml-1">- {webinar.speakerTitle}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(webinar.date).toLocaleDateString()} at {webinar.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{webinar.duration}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Registered: {webinar.attendees}</span>
                            <span>Max: {webinar.maxAttendees}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${(webinar.attendees / webinar.maxAttendees) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Register Now
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Past Webinars */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Past Webinars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {pastWebinars.map((webinar, index) => (
                    <motion.article
                      key={webinar.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="h-48 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Play className="w-12 h-12 mx-auto mb-2" />
                          <div className="text-lg font-bold">{webinar.category}</div>
                          <div className="text-sm opacity-80">Recording Available</div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Tag className="w-3 h-3 mr-1" />
                            {webinar.category}
                          </span>
                          <span className="text-sm text-gray-500">{webinar.level}</span>
                        </div>
                        
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">
                          {webinar.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                          {webinar.description}
                        </p>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {webinar.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4 space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="font-medium">{webinar.speaker}</span>
                            <span className="text-gray-500 ml-1">- {webinar.speakerTitle}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(webinar.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{webinar.duration}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            <span>{webinar.attendees} attendees</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                            <Play className="w-4 h-4 mr-2" />
                            Watch Recording
                          </button>
                          <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors px-4 py-2">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Share
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
=======
                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="mb-4 text-blue-100">
                    Get notified about upcoming webinars and new content.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Webinar Stats */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Webinar Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Attendees</span>
                      <span className="font-semibold">5.5K+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Webinars Hosted</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average Rating</span>
                      <span className="font-semibold">4.9/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Upcoming Events</span>
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
>>>>>>> main
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Never Miss a Webinar
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to get notified about upcoming webinars and access to exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
=======
      </div>
>>>>>>> main
    </MainLayout>
  );
};

export default Webinars;