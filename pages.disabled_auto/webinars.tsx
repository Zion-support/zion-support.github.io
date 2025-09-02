import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, Clock, Users, Play, ArrowRight, Search, Filter } from 'lucide-react';

const Webinars: NextPage = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI Revolution in Business: Practical Implementation Strategies',
      description: 'Learn how to implement AI solutions in your business with real-world examples and best practices.',
      speaker: 'Dr. Sarah Johnson',
      speakerTitle: 'Chief AI Officer',
      date: '2025-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      attendees: 150,
      category: 'AI & Machine Learning',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Masterclass: From Planning to Execution',
      description: 'Comprehensive guide to successful cloud migration with step-by-step implementation strategies.',
      speaker: 'Michael Chen',
      speakerTitle: 'Cloud Solutions Architect',
      date: '2025-02-22',
      time: '3:00 PM EST',
      duration: '90 minutes',
      attendees: 89,
      category: 'Cloud Computing',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for 2025',
      description: 'Stay ahead of emerging threats with the latest cybersecurity strategies and tools.',
      speaker: 'Emily Watson',
      speakerTitle: 'Security Expert',
      date: '2025-03-01',
      time: '1:00 PM EST',
      duration: '45 minutes',
      attendees: 203,
      category: 'Cybersecurity',
      featured: false
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Digital Transformation: A Roadmap for Success',
      description: 'Learn how to successfully navigate digital transformation in your organization.',
      speaker: 'Alex Thompson',
      speakerTitle: 'Digital Transformation Lead',
      date: '2025-01-20',
      duration: '75 minutes',
      views: '1.2k',
      category: 'Digital Transformation'
    },
    {
      id: 5,
      title: 'Microservices Architecture: Design Patterns and Best Practices',
      description: 'Deep dive into microservices architecture with practical implementation examples.',
      speaker: 'David Rodriguez',
      speakerTitle: 'Senior Software Architect',
      date: '2025-01-15',
      duration: '80 minutes',
      views: '956',
      category: 'Software Architecture'
    },
    {
      id: 6,
      title: 'Data Analytics for Business Intelligence',
      description: 'Transform your data into actionable business insights with advanced analytics.',
      speaker: 'Lisa Park',
      speakerTitle: 'Data Analytics Specialist',
      date: '2025-01-10',
      duration: '65 minutes',
      views: '1.4k',
      category: 'Data Analytics'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'Software Architecture', 'Data Analytics'];

  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on technology trends, best practices, and industry insights."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Calendar className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Webinars</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Join our expert-led webinars and learn from industry leaders about the latest technology trends, 
            best practices, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Categories</option>
                  {categories.slice(1).map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Webinar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Webinar</h2>
            {(() => {
              const featured = upcomingWebinars.find(wb => wb.featured);
              return (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Calendar className="w-16 h-16 mx-auto mb-4" />
                          <p className="text-lg font-semibold">Live Webinar</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {featured?.category}
                        </span>
                        <span className="text-gray-500 text-sm">{featured?.duration}</span>
                        <span className="text-gray-500 text-sm">{featured?.attendees} registered</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{featured?.title}</h3>
                      <p className="text-gray-600 mb-6">{featured?.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {featured?.speaker.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{featured?.speaker}</p>
                            <p className="text-sm text-gray-500">{featured?.speakerTitle}</p>
                          </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Upcoming Webinars</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.filter(wb => !wb.featured).map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Calendar className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Live Event</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {webinar.category}
                      </span>
                      <span className="text-gray-500 text-xs">{webinar.duration}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{webinar.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{webinar.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(webinar.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Clock className="w-4 h-4" />
                        {webinar.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {webinar.attendees} registered
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-semibold">
                          {webinar.speaker.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{webinar.speaker}</p>
                          <p className="text-xs text-gray-500">{webinar.speakerTitle}</p>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm">
                        <Calendar className="w-3 h-3" />
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Past Webinars</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Recorded</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        {webinar.category}
                      </span>
                      <span className="text-gray-500 text-xs">{webinar.duration}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{webinar.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{webinar.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(webinar.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {webinar.views} views
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-semibold">
                          {webinar.speaker.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{webinar.speaker}</p>
                          <p className="text-xs text-gray-500">{webinar.speakerTitle}</p>
                        </div>
                      </div>
                      <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm">
                        <Play className="w-3 h-3" />
                        Watch
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and be the first to know about upcoming webinars and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Webinars;