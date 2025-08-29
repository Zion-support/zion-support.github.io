import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Lock, 
  Database, 
  FileText,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Leaf,
  Sparkles,
  Target,
  BarChart3,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Cpu,
  Network,
  Eye,
  Building,
  Video,
  Image,
  Music,
  Code,
  Zap,
  Heart,
  Atom,
  PenTool,
  Shield,
  Brain,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Slack,
  MessageCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Community: React.FC = () => {
  const communityPlatforms = [
    {
      icon: Github,
      title: 'GitHub',
      description: 'Open source projects and code collaboration',
      href: 'https://github.com/ziontechgroup',
      color: 'from-gray-700 to-gray-800',
      members: '500+'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Professional networking and industry insights',
      href: 'https://linkedin.com/company/ziontechgroup',
      color: 'from-blue-600 to-blue-700',
      members: '2K+'
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      description: 'Real-time chat and community discussions',
      href: 'https://discord.gg/ziontechgroup',
      color: 'from-purple-500 to-purple-600',
      members: '1K+'
    },
    {
      icon: Slack,
      title: 'Slack',
      description: 'Team collaboration and project discussions',
      href: 'https://ziontechgroup.slack.com',
      color: 'from-green-500 to-green-600',
      members: '300+'
    }
  ];

  const events = [
    {
      title: 'AI Innovation Summit',
      date: 'March 15, 2025',
      time: '10:00 AM EST',
      type: 'Virtual',
      description: 'Join industry leaders for insights on AI transformation',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Tech Meetup',
      date: 'March 22, 2025',
      time: '6:00 PM EST',
      type: 'In-Person',
      description: 'Network with local tech professionals',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Developer Workshop',
      date: 'March 29, 2025',
      time: '2:00 PM EST',
      type: 'Hybrid',
      description: 'Hands-on coding and best practices',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    'Connect with industry experts and peers',
    'Access exclusive resources and insights',
    'Participate in collaborative projects',
    'Stay updated with latest technology trends',
    'Share knowledge and best practices',
    'Build professional relationships'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of technology professionals, developers, and innovators. Connect, collaborate, and grow with Zion Tech Group."
        keywords="community, tech community, developer community, AI community, Zion Tech Group, networking"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Community
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Join Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Community
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Connect with thousands of technology professionals, developers, and innovators. 
                Share knowledge, collaborate on projects, and grow your network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
                >
                  Join Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="#events"
                  className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200"
                >
                  View Events
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Platforms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Connect Across Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our community on your preferred platform and start connecting with fellow tech enthusiasts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{platform.title}</h3>
                  <p className="text-gray-300 mb-4">{platform.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400">{platform.members} members</span>
                    <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our community events to learn, network, and grow your skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${event.color} flex items-center justify-center mb-6`}>
                  <event.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Globe className="w-4 h-4 mr-2" />
                    {event.type}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <button className="w-full px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-200">
                  Register
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the benefits of being part of our growing technology community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of technology professionals in our vibrant community. 
              Start connecting, learning, and growing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Join Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#events"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200"
              >
                View Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;