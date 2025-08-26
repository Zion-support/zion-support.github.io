import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Award, 
  BookOpen, 
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Star,
  Heart,
  Share2,
  TrendingUp
} from 'lucide-react';

export default function Community() {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Community Forum',
      description: 'Connect with fellow developers, share knowledge, and get answers to your questions',
      href: '/forum',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Calendar,
      title: 'Events & Meetups',
      description: 'Join our virtual and in-person events to network and learn',
      href: '/events',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'Contribute to our community knowledge base and help others grow',
      href: '/blog',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Get recognized for your contributions and achievements',
      href: '/community',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Development Workshop',
      date: 'March 15, 2025',
      time: '2:00 PM EST',
      type: 'Workshop',
      attendees: 45,
      href: '/events'
    },
    {
      title: 'Tech Innovation Summit',
      date: 'April 22, 2025',
      time: '9:00 AM EST',
      type: 'Conference',
      attendees: 120,
      href: '/events'
    },
    {
      title: 'Developer Q&A Session',
      date: 'March 28, 2025',
      time: '7:00 PM EST',
      type: 'Q&A',
      attendees: 32,
      href: '/events'
    }
  ];

  const communityStats = [
    { label: 'Active Members', value: '10,000+', icon: Users },
    { label: 'Knowledge Articles', value: '500+', icon: BookOpen },
    { label: 'Events Hosted', value: '100+', icon: Calendar },
    { label: 'Countries', value: '25+', icon: TrendingUp }
  ];

  const waysToContribute = [
    {
      title: 'Share Your Knowledge',
      description: 'Write articles, create tutorials, or share your experiences',
      icon: BookOpen,
      href: '/blog'
    },
    {
      title: 'Answer Questions',
      description: 'Help other community members by answering their questions',
      icon: MessageCircle,
      href: '/forum'
    },
    {
      title: 'Organize Events',
      description: 'Host meetups, workshops, or study groups in your area',
      icon: Calendar,
      href: '/events'
    },
    {
      title: 'Provide Feedback',
      description: 'Share your ideas and suggestions to improve our platform',
      icon: Lightbulb,
      href: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Connect with like-minded professionals, share knowledge, and grow together 
              in the world of technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/forum"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Join Community
              </Link>
              <Link
                to="/events"
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Community Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover all the ways you can engage with our vibrant community of tech professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                
                <Link
                  to={feature.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-300">
                Join our upcoming community events and connect with fellow professionals.
              </p>
            </div>
            <Link
              to="/events"
              className="px-6 py-3 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              View All Events
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {event.attendees}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {event.title}
                </h3>
                <div className="text-gray-300 text-sm space-y-1 mb-4">
                  <div>{event.date}</div>
                  <div>{event.time}</div>
                </div>
                
                <Link
                  to={event.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                >
                  Join Event
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ways to Contribute
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Make a difference in our community by sharing your knowledge and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waysToContribute.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <way.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {way.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {way.description}
                    </p>
                    <Link
                      to={way.href}
                      className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-12 text-center border border-green-500/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with thousands of tech professionals, share your expertise, 
              and be part of the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/forum"
                className="px-8 py-4 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Join Community Forum
              </Link>
              <Link
                to="/events"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zinc-900 transition-all duration-300"
              >
                Browse Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
