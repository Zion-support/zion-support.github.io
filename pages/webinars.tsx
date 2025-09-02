import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, Clock, Users, Play, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';

const Webinars: NextPage = () => {
  const upcomingWebinars = [
    {
      id: 'ai-business-strategy',
      title: 'AI Strategy for Business Leaders: From Vision to Implementation',
      description: 'Learn how to develop and execute an AI strategy that drives real business value and competitive advantage.',
      speaker: 'Dr. Sarah Johnson',
      speakerTitle: 'Chief AI Officer, TechVision',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      attendees: 1250,
      category: 'Artificial Intelligence',
      level: 'Intermediate',
      featured: true
    },
    {
      id: 'cloud-security-best-practices',
      title: 'Cloud Security Best Practices for 2024',
      description: 'Essential security strategies and tools to protect your cloud infrastructure and data.',
      speaker: 'Michael Chen',
      speakerTitle: 'Security Architect, CloudSecure',
      date: '2024-02-20',
      time: '3:00 PM EST',
      duration: '45 minutes',
      attendees: 890,
      category: 'Cybersecurity',
      level: 'Advanced',
      featured: true
    },
    {
      id: 'microservices-design-patterns',
      title: 'Microservices Design Patterns and Anti-Patterns',
      description: 'Learn the essential design patterns for building scalable microservices architectures.',
      speaker: 'Emily Watson',
      speakerTitle: 'Senior Software Architect, MicroTech',
      date: '2024-02-25',
      time: '1:00 PM EST',
      duration: '75 minutes',
      attendees: 650,
      category: 'Software Architecture',
      level: 'Advanced',
      featured: false
    }
  ];

  const pastWebinars = [
    {
      id: 'digital-transformation-guide',
      title: 'Digital Transformation: A Complete Guide for Enterprises',
      description: 'Comprehensive strategies for successful digital transformation initiatives.',
      speaker: 'Alex Thompson',
      speakerTitle: 'Digital Transformation Consultant',
      date: '2024-01-30',
      duration: '90 minutes',
      attendees: 2100,
      category: 'Digital Transformation',
      level: 'Beginner',
      recording: true
    },
    {
      id: 'data-analytics-insights',
      title: 'Turning Data into Business Insights: Analytics Best Practices',
      description: 'How to leverage data analytics to drive informed business decisions.',
      speaker: 'Lisa Park',
      speakerTitle: 'Data Analytics Director, DataCorp',
      date: '2024-01-25',
      duration: '60 minutes',
      attendees: 1800,
      category: 'Data Analytics',
      level: 'Intermediate',
      recording: true
    },
    {
      id: 'mobile-app-optimization',
      title: 'Mobile App Performance Optimization Techniques',
      description: 'Advanced techniques for optimizing mobile app performance and user experience.',
      speaker: 'David Rodriguez',
      speakerTitle: 'Mobile Development Lead, AppTech',
      date: '2024-01-20',
      duration: '45 minutes',
      attendees: 1200,
      category: 'Mobile Development',
      level: 'Advanced',
      recording: true
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Cybersecurity', 'Software Architecture', 'Digital Transformation', 'Data Analytics', 'Mobile Development'];

  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars and learn about the latest technology trends and best practices."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Webinars</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Learn from industry experts and stay ahead of technology trends with our comprehensive webinar series.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select className="pl-12 pr-8 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>All Categories</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our live sessions and interact with industry experts.
            </p>
          </div>

          <div className="space-y-8">
            {upcomingWebinars.filter(webinar => webinar.featured).map((webinar) => (
              <div key={webinar.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {webinar.category}
                      </span>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {webinar.level}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{webinar.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{webinar.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Speaker:</h4>
                      <p className="text-gray-600">{webinar.speaker} - {webinar.speakerTitle}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-500">Date</div>
                          <div className="font-semibold text-gray-900">{new Date(webinar.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-500">Time</div>
                          <div className="font-semibold text-gray-900">{webinar.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-500">Duration</div>
                          <div className="font-semibold text-gray-900">{webinar.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-500">Attendees</div>
                          <div className="font-semibold text-gray-900">{webinar.attendees.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>

                    <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      <Calendar className="w-4 h-4 mr-2" />
                      Register Now
                    </button>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <span className="text-gray-500">Webinar Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Upcoming Webinars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {upcomingWebinars.filter(webinar => !webinar.featured).map((webinar) => (
              <div key={webinar.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                    {webinar.category}
                  </span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">
                    {webinar.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{new Date(webinar.date).toLocaleDateString()} at {webinar.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{webinar.attendees.toLocaleString()} registered</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Webinars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch recordings of our previous webinars and learn at your own pace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar) => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <span className="text-gray-500 text-sm">Webinar Recording</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                      {webinar.category}
                    </span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">
                      {webinar.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-500">
                    <div>Speaker: {webinar.speaker}</div>
                    <div>Date: {new Date(webinar.date).toLocaleDateString()}</div>
                    <div>Duration: {webinar.duration}</div>
                    <div>Attendees: {webinar.attendees.toLocaleString()}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Recording
                    </button>
                    <Link
                      href={`/webinars/${webinar.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Never Miss a Webinar
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to get notified about upcoming webinars and access to exclusive content.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Webinars;