import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users, 
  MessageSquare, 
  Calendar, 
  BookOpen, 
  Trophy, 
  ArrowRight,
  Search,
  Filter,
  Star,
  Clock,
  MapPin,
  ExternalLink
} from 'lucide-react';
import Layout from '../components/Layout';

const communityStats = [
  { number: '2,500+', label: 'Active Members' },
  { number: '150+', label: 'Discussions' },
  { number: '50+', label: 'Events This Month' },
  { number: '95%', label: 'Member Satisfaction' }
];

const featuredEvents = [
  {
    id: 1,
    title: 'AI & Machine Learning Workshop',
    date: '2024-02-15',
    time: '2:00 PM - 5:00 PM',
    location: 'Virtual Event',
    type: 'Workshop',
    attendees: 45,
    maxAttendees: 50,
    description: 'Learn the latest AI techniques and best practices from industry experts.'
  },
  {
    id: 2,
    title: 'Cloud Architecture Deep Dive',
    date: '2024-02-20',
    time: '10:00 AM - 12:00 PM',
    location: 'San Francisco, CA',
    type: 'Meetup',
    attendees: 23,
    maxAttendees: 30,
    description: 'Explore advanced cloud architecture patterns and implementation strategies.'
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices',
    date: '2024-02-25',
    time: '3:00 PM - 4:30 PM',
    location: 'Virtual Event',
    type: 'Webinar',
    attendees: 78,
    maxAttendees: 100,
    description: 'Essential cybersecurity practices for modern businesses.'
  }
];

const discussionTopics = [
  {
    id: 1,
    title: 'Best practices for microservices architecture',
    author: 'Sarah Chen',
    replies: 12,
    views: 156,
    lastActivity: '2 hours ago',
    tags: ['architecture', 'microservices', 'best-practices']
  },
  {
    id: 2,
    title: 'Implementing AI in healthcare applications',
    author: 'Dr. Michael Rodriguez',
    replies: 8,
    views: 89,
    lastActivity: '4 hours ago',
    tags: ['ai', 'healthcare', 'implementation']
  },
  {
    id: 3,
    title: 'Cloud migration strategies for enterprise',
    author: 'Alex Thompson',
    replies: 15,
    views: 203,
    lastActivity: '6 hours ago',
    tags: ['cloud', 'migration', 'enterprise']
  },
  {
    id: 4,
    title: 'DevOps automation tools comparison',
    author: 'Emma Wilson',
    replies: 6,
    views: 67,
    lastActivity: '1 day ago',
    tags: ['devops', 'automation', 'tools']
  }
];

const resources = [
  {
    title: 'Community Guidelines',
    description: 'Learn about our community standards and best practices',
    icon: BookOpen,
    href: '/community/guidelines'
  },
  {
    title: 'Technical Documentation',
    description: 'Access our comprehensive technical documentation',
    icon: BookOpen,
    href: '/docs'
  },
  {
    title: 'Code Examples',
    description: 'Browse our collection of code examples and snippets',
    icon: BookOpen,
    href: '/community/code-examples'
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step video tutorials and guides',
    icon: BookOpen,
    href: '/tutorials'
  }
];

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <Layout
      title="Community - Zion Tech Group"
      description="Join the Zion Tech Group community. Connect with developers, attend events, participate in discussions, and access exclusive resources."
      keywords="community, developers, events, discussions, networking, Zion Tech Group, tech community"
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */};
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '};
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Community;
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Connect with developers, share knowledge, attend events, and grow together;
                in our vibrant technology community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Join Community;
                </Link>
                <Link href="/events" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Events;
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Community by the Numbers;
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Our growing community of developers, engineers, and technology enthusiasts.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number};
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))};
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Upcoming Events;
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Join our workshops, meetups, and webinars to learn and network with peers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {event.type};
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.attendees}/{event.maxAttendees};
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title};
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {event.description};
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()};
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time};
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location};
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Register Now;
                  </button>
                </motion.div>
              ))};
            </div>
          </div>
        </section>

        {/* Discussions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Community Discussions;
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Engage in meaningful conversations and share your knowledge with the community.
              </p>
            </motion.div>

            {/* Search and Filter */};
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Topics</option>
                <option value="architecture">Architecture</option>
                <option value="ai">AI & ML</option>
                <option value="cloud">Cloud</option>
                <option value="devops">DevOps</option>
              </select>
            </div>

            <div className="space-y-4">
              {discussionTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {topic.title};
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>by {topic.author}</span>
                        <span className="mx-2">•</span>
                        <span>{topic.replies} replies</span>
                        <span className="mx-2">•</span>
                        <span>{topic.views} views</span>
                        <span className="mx-2">•</span>
                        <span>{topic.lastActivity}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {topic.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tag};
                          </span>
                        ))};
                      </div>
                    </div>
                    <button className="ml-4 p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))};
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Community Resources;
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Access exclusive resources, documentation, and learning materials.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4 flex justify-center">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {resource.title};
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {resource.description};
                    </p>
                    <Link
                      href={resource.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More;
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })};
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Connect with like-minded professionals, share knowledge, and grow your career;
                in our vibrant technology community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Join Now;
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Contact Us;
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};