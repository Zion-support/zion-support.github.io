'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, MessageCircle, Star, Calendar, TrendingUp, Award, ArrowRight, Search, Filter } from 'lucide-react';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'discussions', name: 'Discussions', icon: MessageCircle },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'resources', name: 'Resources', icon: Star },
    { id: 'jobs', name: 'Jobs', icon: TrendingUp }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best Practices for AI Model Deployment in Production',
      author: 'Sarah Chen',
      authorRole: 'AI Engineer',
      replies: 24,
      views: 156,
      lastActivity: '2 hours ago',
      tags: ['AI', 'Deployment', 'Production'],
      pinned: true
    },
    {
      id: 2,
      title: 'Kubernetes vs Docker Swarm: Which Should I Choose?',
      author: 'Mike Rodriguez',
      authorRole: 'DevOps Lead',
      replies: 18,
      views: 89,
      lastActivity: '4 hours ago',
      tags: ['Kubernetes', 'Docker', 'DevOps']
    },
    {
      id: 3,
      title: 'Implementing Zero Trust Security Architecture',
      author: 'Alex Thompson',
      authorRole: 'Security Architect',
      replies: 31,
      views: 203,
      lastActivity: '6 hours ago',
      tags: ['Security', 'Zero Trust', 'Architecture']
    },
    {
      id: 4,
      title: 'GDPR Compliance for AI Systems - Practical Guide',
      author: 'Emma Wilson',
      authorRole: 'Compliance Officer',
      replies: 15,
      views: 127,
      lastActivity: '8 hours ago',
      tags: ['GDPR', 'Compliance', 'AI']
    },
    {
      id: 5,
      title: 'Microservices Communication Patterns',
      author: 'David Park',
      authorRole: 'Software Architect',
      replies: 22,
      views: 98,
      lastActivity: '1 day ago',
      tags: ['Microservices', 'Architecture', 'Communication']
    }
  ];

  const events = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      type: 'Conference',
      attendees: 500,
      description: 'Join industry leaders for a day of AI innovation, networking, and hands-on workshops.'
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      type: 'Workshop',
      attendees: 150,
      description: 'Learn the latest cloud security strategies and implementation techniques.'
    },
    {
      id: 3,
      title: 'DevOps Automation Meetup',
      date: 'March 28, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'New York, NY',
      type: 'Meetup',
      attendees: 75,
      description: 'Network with DevOps professionals and discuss automation strategies.'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI Implementation Checklist',
      type: 'Template',
      downloads: 1250,
      rating: 4.8,
      description: 'Comprehensive checklist for implementing AI solutions in your organization.'
    },
    {
      id: 2,
      title: 'Cloud Migration Playbook',
      type: 'Guide',
      downloads: 890,
      rating: 4.7,
      description: 'Step-by-step guide for migrating applications to the cloud.'
    },
    {
      id: 3,
      title: 'Security Architecture Templates',
      type: 'Template',
      downloads: 650,
      rating: 4.9,
      description: 'Ready-to-use templates for implementing security architectures.'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      posted: '2 days ago',
      description: 'Lead AI initiatives and develop machine learning solutions for enterprise clients.'
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      company: 'CloudTech Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140k - $180k',
      posted: '3 days ago',
      description: 'Design and implement cloud infrastructure solutions for large-scale applications.'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $130k',
      posted: '5 days ago',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation.'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'discussions':
        return (
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {discussion.pinned && (
                        <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium mr-2">
                          Pinned
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer">
                        {discussion.title}
                      </h3>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <span>By {discussion.author}</span>
                      <span className="mx-2">•</span>
                      <span>{discussion.authorRole}</span>
                      <span className="mx-2">•</span>
                      <span>{discussion.lastActivity}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {discussion.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {discussion.replies}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {discussion.views}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'events':
        return (
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Date:</span>
                        <div className="text-white">{event.date}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Time:</span>
                        <div className="text-white">{event.time}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Location:</span>
                        <div className="text-white">{event.location}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Attendees:</span>
                        <div className="text-white">{event.attendees}</div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'resources':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{resource.title}</h3>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{resource.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {resource.downloads} downloads
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    {resource.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'jobs':
        return (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <span>{job.company}</span>
                      <span className="mx-2">•</span>
                      <span>{job.location}</span>
                      <span className="mx-2">•</span>
                      <span>{job.type}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{job.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">{job.salary}</span>
                      <span className="text-gray-400 text-sm">{job.posted}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Community Hub
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Connect, learn, and grow with fellow professionals
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our vibrant community of AI engineers, cloud architects, and technology professionals. 
              Share knowledge, ask questions, and collaborate on innovative projects.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search discussions, events, resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <button className="flex items-center px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Content */}
            {renderContent()}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Connect with like-minded professionals, share your expertise, and stay updated 
                with the latest trends in AI, cloud, and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                >
                  Join Community
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}