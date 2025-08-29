import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Star, 
  TrendingUp, 
  Award, 
  Calendar, 
  MapPin, 
  Globe,
  ArrowRight,
  CheckCircle,
  Heart,
  Share2,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Community: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const communityCategories = [
    {
      id: 'all',
      name: 'All Topics',
      icon: Users,
      color: 'from-blue-600 to-cyan-600',
      count: '15,000+'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      count: '8,500+'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      count: '6,200+'
    },
    {
      id: 'quantum-tech',
      name: 'Quantum Technology',
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      count: '2,800+'
    }
  ];

  const communityStats = [
    {
      metric: '15,000+',
      label: 'Community Members',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      metric: '50,000+',
      label: 'Discussions',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-500'
    },
    {
      metric: '1,000+',
      label: 'Solutions Shared',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      metric: '95%',
      label: 'Satisfaction Rate',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const featuredDiscussions = [
    {
      title: 'Best practices for AI model deployment in production',
      author: 'Sarah Chen',
      category: 'AI Services',
      replies: 24,
      views: 1.2k,
      tags: ['AI', 'Deployment', 'Best Practices'],
      popular: true
    },
    {
      title: 'Cloud cost optimization strategies for startups',
      author: 'Mike Rodriguez',
      category: 'Cloud & DevOps',
      replies: 18,
      views: 856,
      tags: ['Cloud', 'Cost Optimization', 'Startups'],
      popular: false
    },
    {
      title: 'Implementing Zero Trust architecture step-by-step',
      author: 'Alex Thompson',
      category: 'Security',
      replies: 31,
      views: 2.1k,
      tags: ['Security', 'Zero Trust', 'Implementation'],
      popular: true
    },
    {
      title: 'Quantum computing use cases in finance',
      author: 'Dr. Emily Watson',
      category: 'Quantum Technology',
      replies: 15,
      views: 743,
      tags: ['Quantum', 'Finance', 'Use Cases'],
      popular: false
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Implementation Workshop',
      date: 'Dec 15, 2024',
      time: '2:00 PM EST',
      type: 'Virtual',
      attendees: 150,
      description: 'Learn how to implement AI solutions in your business'
    },
    {
      title: 'Cloud Migration Best Practices',
      date: 'Dec 20, 2024',
      time: '1:00 PM EST',
      type: 'Virtual',
      attendees: 89,
      description: 'Expert tips for successful cloud migration'
    },
    {
      title: 'Quantum Computing Meetup',
      date: 'Jan 10, 2025',
      time: '6:00 PM EST',
      type: 'In-Person',
      location: 'New York, NY',
      attendees: 45,
      description: 'Network with quantum computing enthusiasts'
    }
  ];

  const communityResources = [
    {
      title: 'Community Guidelines',
      icon: BookOpen,
      description: 'Learn about our community standards and best practices',
      link: '/community/guidelines'
    },
    {
      title: 'Knowledge Base',
      icon: Download,
      description: 'Access shared solutions and troubleshooting guides',
      link: '/community/knowledge-base'
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      description: 'Community-created tutorials and walkthroughs',
      link: '/community/tutorials'
    },
    {
      title: 'Expert Directory',
      icon: Users,
      description: 'Find and connect with community experts',
      link: '/community/experts'
    }
  ];

  const topContributors = [
    {
      name: 'Sarah Chen',
      role: 'AI Solutions Architect',
      contributions: 156,
      badges: ['AI Expert', 'Top Contributor', 'Community Leader'],
      avatar: 'SC'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Cloud Infrastructure Engineer',
      contributions: 142,
      badges: ['Cloud Expert', 'DevOps Specialist', 'Mentor'],
      avatar: 'MR'
    },
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      contributions: 128,
      badges: ['Security Expert', 'Zero Trust Specialist', 'Speaker'],
      avatar: 'AT'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Quantum Computing Researcher',
      contributions: 95,
      badges: ['Quantum Expert', 'Researcher', 'Innovator'],
      avatar: 'EW'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of technology professionals. Connect, learn, and collaborate with experts in AI, cloud, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Connect with technology professionals, share knowledge, and collaborate on innovative solutions. Be part of a community that's shaping the future of technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/community/join"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Join Community
              </Link>
              <Link
                to="/community/forums"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Browse Forums
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Community Topics</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore discussions organized by technology areas and interests.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {communityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                    : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Discussions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Discussions</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Join the conversation on trending topics and popular discussions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full">
                  {discussion.popular && (
                    <div className="flex items-center space-x-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-xs text-yellow-400 font-medium">Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {discussion.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-slate-400">
                    <span>By {discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.category}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{discussion.replies}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{discussion.views}</span>
                      </span>
                    </div>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Join Discussion</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Join our virtual and in-person events to learn, network, and grow your skills.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">{event.type}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Top Contributors</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Meet our community leaders and experts who are making a difference.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{contributor.avatar}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-1">{contributor.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{contributor.role}</p>
                
                <div className="text-cyan-400 font-semibold mb-4">
                  {contributor.contributions} contributions
                </div>
                
                <div className="space-y-2">
                  {contributor.badges.map((badge) => (
                    <span key={badge} className="inline-block px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded mr-2 mb-2">
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Community Resources</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Access helpful resources to make the most of your community experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={resource.link}>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Connect with thousands of technology professionals, share your expertise, and learn from others. Join us today!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/community/join"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Join Now - It's Free
              </Link>
              <Link
                to="/community/forums"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Forums
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Community Guidelines</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Be Respectful</h3>
                    <p className="text-slate-300 text-sm">Treat all community members with respect and kindness.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Share Knowledge</h3>
                    <p className="text-slate-300 text-sm">Contribute valuable insights and help others learn.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Stay Professional</h3>
                    <p className="text-slate-300 text-sm">Maintain professional conduct in all interactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Follow Rules</h3>
                    <p className="text-slate-300 text-sm">Adhere to community guidelines and platform rules.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Community Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-slate-300">Access to expert knowledge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Network with professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Learn new skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Earn recognition</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;