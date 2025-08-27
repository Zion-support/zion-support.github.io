import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Calendar, MapPin, Globe, Heart, Star, Award, TrendingUp, BookOpen, Video, Code } from 'lucide-react';

export default function Community() {
  const communityEvents = [
    {
      id: 1,
      title: "AI Innovation Meetup",
      description: "Join fellow developers and AI enthusiasts for an evening of networking and knowledge sharing.",
      date: "March 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Virtual + San Francisco",
      attendees: 127,
      category: "AI & Machine Learning"
    },
    {
      id: 2,
      title: "Cybersecurity Workshop",
      description: "Hands-on workshop covering the latest cybersecurity threats and defense strategies.",
      date: "March 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "New York City",
      attendees: 89,
      category: "Security"
    },
    {
      id: 3,
      title: "Cloud Native Development",
      description: "Learn about building scalable applications with modern cloud technologies.",
      date: "March 29, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Austin, TX",
      attendees: 156,
      category: "Cloud & DevOps"
    }
  ];

  const communityStats = [
    { label: "Active Members", value: "2,847", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Events Hosted", value: "156", icon: Calendar, color: "from-purple-500 to-pink-500" },
    { label: "Countries", value: "23", icon: Globe, color: "from-green-500 to-emerald-500" },
    { label: "Knowledge Articles", value: "1,234", icon: BookOpen, color: "from-orange-500 to-red-500" }
  ];

  const discussionTopics = [
    {
      title: "Best practices for AI model deployment",
      replies: 23,
      views: 456,
      lastActivity: "2 hours ago",
      category: "AI & ML"
    },
    {
      title: "Cybersecurity compliance in healthcare",
      replies: 18,
      views: 234,
      lastActivity: "5 hours ago",
      category: "Security"
    },
    {
      title: "Microservices architecture patterns",
      replies: 31,
      views: 678,
      lastActivity: "1 day ago",
      category: "Architecture"
    },
    {
      title: "Data privacy regulations 2025",
      replies: 15,
      views: 189,
      lastActivity: "2 days ago",
      category: "Compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with technology professionals, share knowledge, and stay ahead of industry trends
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300">Join us for these exciting community events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                    <span className="text-gray-400 text-sm">{event.attendees} attending</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Register Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion Forum */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Community Discussions</h2>
            <p className="text-xl text-gray-300">Join the conversation on trending topics</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <div className="grid grid-cols-1 gap-4">
              {discussionTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{topic.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">
                        {topic.category}
                      </span>
                      <span>{topic.replies} replies</span>
                      <span>{topic.views} views</span>
                      <span>{topic.lastActivity}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Join Discussion →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with like-minded professionals, share your expertise, and grow your network
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View All Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}