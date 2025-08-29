import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Globe, 
  Heart,
  Star,
  Award,
  Rocket,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Cloud,
  Database,
  Brain,
  Server,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  BookOpen,
  HelpCircle,
  Settings,
  Building,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot,
  Lightbulb,
  Code,
  Palette,
  FileText,
  BarChart3,
  Monitor,
  Smartphone,
  Laptop,
  Eye,
  Fingerprint,
  Key,
  Clock,
  Phone,
  Mail
} from 'lucide-react';

const communityFeatures = [
  {
    title: 'Developer Forums',
    description: 'Connect with fellow developers, share knowledge, and get help with technical challenges',
    icon: MessageSquare,
    color: 'from-blue-400 to-cyan-500',
    features: ['Technical discussions', 'Code reviews', 'Best practices', 'Problem solving']
  },
  {
    title: 'Learning Resources',
    description: 'Access tutorials, documentation, and learning materials to enhance your skills',
    icon: BookOpen,
    color: 'from-purple-400 to-pink-500',
    features: ['Video tutorials', 'Interactive courses', 'Documentation', 'Code examples']
  },
  {
    title: 'Events & Meetups',
    description: 'Join virtual and in-person events to network and learn from industry experts',
    icon: Calendar,
    color: 'from-green-400 to-emerald-500',
    features: ['Webinars', 'Workshops', 'Conferences', 'Networking events']
  },
  {
    title: 'Project Showcase',
    description: 'Share your projects and get feedback from the community',
    icon: Rocket,
    color: 'from-orange-400 to-red-500',
    features: ['Project demos', 'Code sharing', 'Feedback loops', 'Collaboration opportunities']
  }
];

const upcomingEvents = [
  {
    title: 'AI & Machine Learning Workshop',
    date: 'March 15, 2024',
    time: '2:00 PM - 5:00 PM EST',
    type: 'Virtual Workshop',
    description: 'Learn the fundamentals of AI and ML with hands-on exercises',
    attendees: 45,
    icon: Brain,
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Cloud Architecture Best Practices',
    date: 'March 22, 2024',
    time: '1:00 PM - 4:00 PM EST',
    type: 'Webinar',
    description: 'Explore cloud-native architecture patterns and implementation strategies',
    attendees: 78,
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'Cybersecurity Roundtable',
    date: 'March 29, 2024',
    time: '3:00 PM - 6:00 PM EST',
    type: 'Panel Discussion',
    description: 'Industry experts discuss emerging security threats and solutions',
    attendees: 32,
    icon: Shield,
    color: 'from-red-400 to-pink-500'
  }
];

const communityStats = [
  {
    metric: '5,000+',
    label: 'Members',
    description: 'Active community members from around the world'
  },
  {
    metric: '200+',
    label: 'Events',
    description: 'Workshops, webinars, and meetups hosted annually'
  },
  {
    metric: '50+',
    label: 'Countries',
    description: 'Global reach across multiple time zones'
  },
  {
    metric: '24/7',
    label: 'Support',
    description: 'Round-the-clock community support and engagement'
  }
];

const discussionTopics = [
  {
    category: 'AI & Machine Learning',
    topics: ['Model training', 'Data preprocessing', 'Deployment strategies', 'Ethics in AI'],
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    postCount: 156
  },
  {
    category: 'Cloud & DevOps',
    topics: ['Container orchestration', 'CI/CD pipelines', 'Infrastructure as code', 'Cost optimization'],
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500',
    postCount: 234
  },
  {
    category: 'Cybersecurity',
    topics: ['Threat detection', 'Compliance frameworks', 'Incident response', 'Security automation'],
    icon: Shield,
    color: 'from-red-400 to-pink-500',
    postCount: 89
  },
  {
    category: 'Data & Analytics',
    topics: ['Data visualization', 'ETL processes', 'Real-time analytics', 'Business intelligence'],
    icon: BarChart3,
    color: 'from-green-400 to-emerald-500',
    postCount: 178
  }
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of technology professionals. Connect, learn, and grow with fellow developers and industry experts."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Connect with thousands of technology professionals, share knowledge, and grow your skills in our vibrant community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-400/25"
              >
                Join Community
              </Link>
              <Link
                to="/events"
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-slate-900 transition-colors duration-300"
              >
                View Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community by the Numbers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our growing community spans the globe with diverse expertise and shared passion for technology
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  {stat.metric}
                </div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You'll Find Here
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the tools and resources that make our community thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.features.map((feat, featIndex) => (
                    <div key={featIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join our upcoming workshops, webinars, and networking events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                <p className="text-slate-300 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-medium rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion Topics */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Discussion Topics
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Engage in meaningful conversations about the latest technology trends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {discussionTopics.map((topic, index) => (
              <motion.div
                key={topic.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${topic.color} rounded-lg flex items-center justify-center`}>
                      <topic.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{topic.category}</h4>
                  </div>
                  <span className="text-slate-400 text-sm">{topic.postCount} posts</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  {topic.topics.map((subtopic, subtopicIndex) => (
                    <div key={subtopicIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{subtopic}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full px-4 py-2 border border-green-400 text-green-400 font-medium rounded-lg hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
                  Join Discussion
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Connect with thousands of technology professionals and start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-400/25"
              >
                Join Community
              </Link>
              <Link
                to="/events"
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-slate-900 transition-colors duration-300"
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