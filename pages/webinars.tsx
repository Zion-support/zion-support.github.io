import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
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
    }
  ];

  const categories = [
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
                      </li>
                    ))}
                  </ul>
                </div>

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
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </MainLayout>
  );
};

export default Webinars;