import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Globe, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Brain,
  Clock,
  Award,
  CheckCircle,
  Play,
  Download,
  Star,
  Target,
  TrendingUp,
  Rocket,
  Lightbulb,
  Code,
  Heart,
  Calendar,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Slack,
  MessageSquare
} from 'lucide-react';

export default function Community() {
  const communityEvents = [
    {
      name: 'AI Innovation Summit 2025',
      description: 'Join industry leaders and innovators for a day of AI insights and networking',
      date: 'March 15, 2025',
      location: 'San Francisco, CA + Virtual',
      type: 'Conference',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      featured: true
    },
    {
      name: 'Cloud Architecture Workshop',
      description: 'Hands-on workshop on modern cloud infrastructure design',
      date: 'March 22, 2025',
      location: 'Online',
      type: 'Workshop',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      featured: false
    },
    {
      name: 'Cybersecurity Roundtable',
      description: 'Expert discussion on emerging security threats and solutions',
      date: 'April 5, 2025',
      location: 'New York, NY',
      type: 'Roundtable',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      featured: false
    },
    {
      name: 'Data Science Meetup',
      description: 'Monthly meetup for data scientists and analysts',
      date: 'April 12, 2025',
      location: 'Chicago, IL',
      type: 'Meetup',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      featured: false
    }
  ];

  const communityChannels = [
    {
      name: 'Developer Forum',
      description: 'Technical discussions and Q&A for developers',
      members: '2.5K+',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      href: 'https://forum.ziontechgroup.com',
      featured: true
    },
    {
      name: 'Discord Server',
      description: 'Real-time chat and voice channels for community members',
      members: '3.2K+',
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-600',
      href: 'https://discord.gg/ziontechgroup',
      featured: true
    },
    {
      name: 'LinkedIn Group',
      description: 'Professional networking and industry discussions',
      members: '5.1K+',
      icon: Linkedin,
      color: 'from-blue-500 to-cyan-600',
      href: 'https://linkedin.com/groups/ziontechgroup',
      featured: false
    },
    {
      name: 'GitHub Discussions',
      description: 'Open source collaboration and code discussions',
      members: '1.8K+',
      icon: Github,
      color: 'from-gray-500 to-slate-600',
      href: 'https://github.com/ziontechgroup/discussions',
      featured: false
    }
  ];

  const communityPrograms = [
    {
      name: 'Mentorship Program',
      description: 'Connect with experienced professionals for career guidance',
      participants: '150+',
      icon: Users,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Hackathon Series',
      description: 'Regular coding challenges with prizes and recognition',
      participants: '500+',
      icon: Code,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Open Source Projects',
      description: 'Contribute to community-driven development projects',
      participants: '300+',
      icon: Github,
      color: 'from-gray-500 to-slate-600'
    },
    {
      name: 'Knowledge Sharing',
      description: 'Share expertise through articles, tutorials, and presentations',
      participants: '200+',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const upcomingActivities = [
    {
      title: 'Weekly Office Hours',
      description: 'Live Q&A with our engineering team',
      schedule: 'Every Tuesday, 2-3 PM EST',
      icon: Clock,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Monthly Webinars',
      description: 'Expert-led sessions on trending topics',
      schedule: 'First Thursday of each month',
      icon: Play,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Quarterly Meetups',
      description: 'In-person networking events in major cities',
      schedule: 'Rotating locations quarterly',
      icon: MapPin,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Annual Conference',
      description: 'Our flagship community gathering',
      schedule: 'September 2025',
      icon: Users,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our thriving community of developers, professionals, and technology enthusiasts. Connect, learn, and grow together in the Zion Tech Group ecosystem."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Join Our Community
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to Our Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with thousands of developers, professionals, and technology enthusiasts. Share knowledge, collaborate on projects, and advance your career together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#events"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                View Events
              </a>
              <a
                href="#channels"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <MessageSquare className="w-4 h-4" />
                Join Channels
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">15K+</div>
              <div className="text-gray-400">Community Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400">Events Per Year</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-400">Active Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Community Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      <section id="events" className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us for exciting events, workshops, and networking opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {communityEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 group hover:bg-slate-700/50 transition-all duration-300 ${
                  event.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  {event.featured && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      <Star className="w-4 h-4" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">{event.name}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>

                <div className="space-y-3 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {event.type}
                  </div>
                </div>

                <a
                  href="/request-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 w-full justify-center"
                >
                  <Play className="w-4 h-4" />
                  Register Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels Section */}
      <section id="channels" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Channels</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with community members through various communication channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group hover:bg-slate-700/50 transition-all duration-300 ${
                  channel.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{channel.members} members</span>
                  {channel.featured && (
                    <span className="inline-flex items-center gap-1 text-xs text-cyan-400">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Join Channel
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Community Programs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get involved in our community-driven initiatives and programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{program.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{program.description}</p>
                <div className="text-cyan-400 font-medium">{program.participants} participants</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Activities Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Regular Activities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ongoing opportunities to engage with our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{activity.description}</p>
                <div className="text-sm text-cyan-400">{activity.schedule}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with like-minded professionals and take your career to the next level
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Users className="w-5 h-5" />
                Get Started
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <MessageSquare className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}