import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Share2,
  Bookmark,
  Tag,
  Filter,
  TrendingUp,
  Globe,
  Settings,
  Code,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Crosshair,
  Radar,
  Satellite,
  Telescope,
  Microscope,
  Binoculars,
  Camera,
  Video2,
  Film,
  Tv,
  Radio,
  Speaker,
  Headphones,
  Mic,
  Phone2,
  Smartphone2,
  Tablet,
  Laptop,
  Watch,
  Clock2,
  Calendar2,
  User2,
  Users2,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2
} from 'lucide-react';

export default function Community() {
  const upcomingEvents = [
    {
      title: 'AI Development Meetup',
      date: 'March 20, 2025',
      time: '6:00 PM - 8:00 PM EST',
      location: 'Virtual + New York',
      attendees: 45,
      type: 'Meetup',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Workshop',
      date: 'March 25, 2025',
      time: '2:00 PM - 5:00 PM EST',
      location: 'San Francisco',
      attendees: 32,
      type: 'Workshop',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud Architecture Summit',
      date: 'April 5, 2025',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Austin, TX',
      attendees: 120,
      type: 'Conference',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Science Hackathon',
      date: 'April 12-13, 2025',
      time: '48 hours',
      location: 'Virtual',
      attendees: 200,
      type: 'Hackathon',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const discussionTopics = [
    {
      title: 'Best practices for AI model deployment',
      author: 'Sarah Chen',
      replies: 23,
      views: '1.2k',
      lastActivity: '2 hours ago',
      category: 'AI & ML',
      isHot: true
    },
    {
      title: 'Cybersecurity challenges in 2025',
      author: 'Mike Rodriguez',
      replies: 18,
      views: '856',
      lastActivity: '5 hours ago',
      category: 'Security',
      isHot: false
    },
    {
      title: 'Cloud cost optimization strategies',
      author: 'Lisa Thompson',
      replies: 31,
      views: '1.5k',
      lastActivity: '1 day ago',
      category: 'Cloud',
      isHot: true
    },
    {
      title: 'IoT security best practices',
      author: 'David Kim',
      replies: 15,
      views: '623',
      lastActivity: '2 days ago',
      category: 'IoT',
      isHot: false
    }
  ];

  const communityStats = [
    { label: 'Active Members', value: '12,847', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Discussions', value: '8,392', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
    { label: 'Events Hosted', value: '156', icon: Calendar, color: 'from-purple-500 to-pink-500' },
    { label: 'Countries', value: '47', icon: Globe, color: 'from-yellow-500 to-orange-500' }
  ];

  const memberSpotlight = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead',
      company: 'TechCorp',
      contributions: 45,
      avatar: 'SC',
      expertise: ['AI/ML', 'Neural Networks', 'Research']
    },
    {
      name: 'Mike Rodriguez',
      role: 'Security Architect',
      company: 'SecureNet',
      contributions: 38,
      avatar: 'MR',
      expertise: ['Cybersecurity', 'Threat Detection', 'Compliance']
    },
    {
      name: 'Lisa Thompson',
      role: 'Cloud Solutions Engineer',
      company: 'CloudTech',
      contributions: 42,
      avatar: 'LT',
      expertise: ['AWS', 'Azure', 'DevOps']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Community
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join Our Global
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Tech Community
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect with fellow developers, engineers, and tech enthusiasts. 
              Share knowledge, collaborate on projects, and grow your network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Join Community
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-8 py-4 border border-green-500/30 text-green-300 hover:bg-green-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                View Events
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} w-fit mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Upcoming Community Events
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join us for exciting meetups, workshops, and conferences around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${event.color} w-fit`}>
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{event.attendees} attending</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300">
                    RSVP
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion Topics Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Hot Discussions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join the conversation on trending topics and get help from the community.
            </p>
          </motion.div>

          <div className="space-y-6">
            {discussionTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                        {topic.category}
                      </span>
                      {topic.isHot && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                          <TrendingUp className="w-3 h-3" />
                          Hot
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {topic.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span>By {topic.author}</span>
                      <span>{topic.replies} replies</span>
                      <span>{topic.views} views</span>
                      <span>{topic.lastActivity}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-green-400 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Spotlight Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Community Leaders
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet some of our most active and helpful community members.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberSpotlight.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {member.avatar}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-1">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.company}</p>
                
                <div className="mb-4">
                  <span className="text-sm text-gray-400">{member.contributions} contributions</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the Community?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Connect with thousands of tech professionals, share your knowledge, 
              and grow your network in our vibrant community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-8 py-4 border border-green-500/30 text-green-300 hover:bg-green-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Browse Events
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}