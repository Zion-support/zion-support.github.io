import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, Clock, Users, Play, ExternalLink, Filter } from 'lucide-react';

const Webinars: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'Development'];

  const webinars = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation: Real-World Success Stories',
      description: 'Learn how leading companies are leveraging AI to drive innovation and growth. Join us for insights from industry experts and real-world case studies.',
      speaker: 'Dr. Sarah Johnson',
      speakerTitle: 'Chief AI Officer, TechCorp',
      date: '2025-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      category: 'AI & Machine Learning',
      type: 'upcoming',
      attendees: 0,
      maxAttendees: 500,
      image: '/webinars/ai-transformation.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      description: 'Comprehensive guide to successful cloud migration strategies, common pitfalls to avoid, and best practices for seamless transitions.',
      speaker: 'Michael Chen',
      speakerTitle: 'Senior Cloud Architect, CloudTech Solutions',
      date: '2025-02-20',
      time: '3:00 PM EST',
      duration: '45 minutes',
      category: 'Cloud Computing',
      type: 'upcoming',
      attendees: 0,
      maxAttendees: 300,
      image: '/webinars/cloud-migration.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of Remote Work',
      description: 'Essential security measures and best practices for protecting your organization in today\'s distributed work environment.',
      speaker: 'Emily Watson',
      speakerTitle: 'Cybersecurity Expert, SecureNet',
      date: '2025-02-25',
      time: '1:00 PM EST',
      duration: '50 minutes',
      category: 'Cybersecurity',
      type: 'upcoming',
      attendees: 0,
      maxAttendees: 400,
      image: '/webinars/cybersecurity-remote.jpg'
    },
    {
      id: 4,
      title: 'Building Scalable Microservices Architecture',
      description: 'Learn how to design and implement microservices that can scale with your business growth and technical requirements.',
      speaker: 'Alex Rodriguez',
      speakerTitle: 'Principal Software Engineer, MicroTech',
      date: '2025-01-30',
      time: '2:30 PM EST',
      duration: '55 minutes',
      category: 'Development',
      type: 'upcoming',
      attendees: 0,
      maxAttendees: 350,
      image: '/webinars/microservices.jpg'
    },
    {
      id: 5,
      title: 'Digital Transformation: Success Stories from 2024',
      description: 'Real-world case studies of successful digital transformations and the key factors that led to their success.',
      speaker: 'David Kim',
      speakerTitle: 'Digital Transformation Consultant',
      date: '2025-01-25',
      time: '2:00 PM EST',
      duration: '60 minutes',
      category: 'Digital Transformation',
      type: 'upcoming',
      attendees: 0,
      maxAttendees: 500,
      image: '/webinars/digital-transformation.jpg'
    },
    {
      id: 6,
      title: 'The Future of AI in Business: Trends for 2025',
      description: 'Explore the latest AI trends that are transforming businesses and how to prepare your organization for the AI revolution.',
      speaker: 'Dr. Lisa Thompson',
      speakerTitle: 'AI Research Director, FutureTech',
      date: '2025-01-20',
      time: '3:00 PM EST',
      duration: '45 minutes',
      category: 'AI & Machine Learning',
      type: 'upcoming',
      attendees: 0,
      maxAttendees: 600,
      image: '/webinars/ai-future.jpg'
    }
  ];

  const pastWebinars = [
    {
      id: 7,
      title: 'Introduction to Machine Learning for Business Leaders',
      description: 'A comprehensive introduction to machine learning concepts and their practical applications in business.',
      speaker: 'Dr. John Smith',
      speakerTitle: 'ML Research Scientist',
      date: '2025-01-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      category: 'AI & Machine Learning',
      type: 'past',
      attendees: 450,
      maxAttendees: 500,
      recordingUrl: '/recordings/ml-intro-2025-01-15',
      image: '/webinars/ml-intro.jpg'
    },
    {
      id: 8,
      title: 'Cloud Security Best Practices',
      description: 'Essential security measures for cloud environments and how to implement them effectively.',
      speaker: 'Sarah Wilson',
      speakerTitle: 'Cloud Security Architect',
      date: '2025-01-10',
      time: '1:30 PM EST',
      duration: '50 minutes',
      category: 'Cloud Computing',
      type: 'past',
      attendees: 320,
      maxAttendees: 400,
      recordingUrl: '/recordings/cloud-security-2025-01-10',
      image: '/webinars/cloud-security.jpg'
    }
  ];

  const filteredWebinars = webinars.filter(webinar => 
    selectedCategory === 'All' || webinar.category === selectedCategory
  );

  const filteredPastWebinars = pastWebinars.filter(webinar => 
    selectedCategory === 'All' || webinar.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return 'bg-purple-100 text-purple-800';
      case 'Cloud Computing':
        return 'bg-blue-100 text-blue-800';
      case 'Cybersecurity':
        return 'bg-red-100 text-red-800';
      case 'Digital Transformation':
        return 'bg-green-100 text-green-800';
      case 'Development':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on technology trends, best practices, and industry insights. Learn from leading professionals in AI, cloud computing, and more."
      keywords="webinars, technology training, AI webinars, cloud computing, cybersecurity, digital transformation, online learning"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Play className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Webinars</h1>
              <p className="text-xl text-gray-200 mb-8">
                Learn from industry experts and stay ahead of technology trends with our comprehensive webinar series.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-900">Filter by Category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Upcoming Webinars</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredWebinars.map((webinar) => (
                  <div key={webinar.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(webinar.category)}`}>
                          {webinar.category}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          Upcoming
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Speaker</h4>
                        <p className="text-gray-600">{webinar.speaker}</p>
                        <p className="text-sm text-gray-500">{webinar.speakerTitle}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(webinar.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {webinar.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {webinar.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {webinar.attendees}/{webinar.maxAttendees} registered
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Past Webinars</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPastWebinars.map((webinar) => (
                  <div key={webinar.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(webinar.category)}`}>
                          {webinar.category}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                          Past Event
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Speaker</h4>
                        <p className="text-gray-600">{webinar.speaker}</p>
                        <p className="text-sm text-gray-500">{webinar.speakerTitle}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(webinar.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {webinar.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {webinar.attendees} attendees
                        </div>
                      </div>
                      
                      <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Recording
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl mb-8 text-blue-100">
                Subscribe to our newsletter and never miss an upcoming webinar or important technology update.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-r-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Webinars;