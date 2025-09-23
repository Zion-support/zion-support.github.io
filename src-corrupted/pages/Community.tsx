import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, Calendar, BookOpen, Video, 
  Star, TrendingUp, Award, Globe, ArrowRight, 
  Search, Filter, Clock, MapPin, UserPlus, Heart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Community = (props: any) => {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [searchQuery, setSearchQuery] = useState<any>('');

  const communityCategories = [
    {
      id: 'ai-community',
      title: 'AI & Machine Learning',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      members: '2.5k',
      topics: '1.2k',
      description: 'Discuss AI trends, share models, and collaborate on ML projects'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      members: '1.8k',
      topics: '890',
      description: 'Cloud infrastructure, CI/CD, and deployment strategies'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Star,
      color: 'from-red-500 to-orange-500',
      members: '1.2k',
      topics: '650',
      description: 'Security best practices, threat intelligence, and compliance'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      members: '1.5k',
      topics: '720',
      description: 'Data science, business intelligence, and analytics tools'
    },
    {
      id: 'startup-ecosystem',
      title: 'Startup Ecosystem',
      icon: UserPlus,
      color: 'from-yellow-500 to-orange-500',
      members: '3.1k',
      topics: '1.5k',
      description: 'Startup advice, funding, and entrepreneurial insights'
    },
    {
      id: 'general-tech',
      title: 'General Technology',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500',
      members: '2.8k',
      topics: '1.8k',
      description: 'General tech discussions, industry news, and innovation'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Innovation Summit 2024',
      date: 'March 15-16, 2024',
      time: '9:00 AM - 6:00 PM EST',
      location: 'Virtual + New York City',
      type: 'Conference',
      attendees: '500+',
      description: 'Join industry leaders for two days of AI innovation, networking, and insights.',
      registration: 'Open',
      featured: true
    },
    {
      title: 'Cloud Architecture Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 5:00 PM EST',
      location: 'Virtual',
      type: 'Workshop',
      attendees: '100',
      description: 'Learn best practices for designing scalable cloud architectures.',
      registration: 'Open',
      featured: false
    },
    {
      title: 'Cybersecurity Roundtable',
      date: 'March 28, 2024',
      time: '1:00 PM - 3:00 PM EST',
      location: 'Virtual',
      type: 'Roundtable',
      attendees: '50',
      description: 'Expert discussion on emerging cybersecurity threats and solutions.',
      registration: 'Limited',
      featured: false
    },
    {
      title: 'Startup Pitch Competition',
      date: 'April 5, 2024',
      time: '6:00 PM - 9:00 PM EST',
      location: 'San Francisco + Virtual',
      type: 'Competition',
      attendees: '200+',
      description: 'Watch innovative startups pitch their ideas to investors and experts.',
      registration: 'Open',
      featured: true
    }
  ];

  const recentDiscussions = [
    {
      title: 'Best practices for implementing AI in healthcare',
      author: 'Dr. Sarah Chen',
      category: 'AI & Machine Learning',
      replies: 24,
      views: '1.2k',
      lastActivity: '2 hours ago',
      tags: ['AI', 'Healthcare', 'Best Practices']
    },
    {
      title: 'Cloud cost optimization strategies for startups',
      author: 'Mike Rodriguez',
      category: 'Cloud & DevOps',
      replies: 18,
      views: '890',
      lastActivity: '5 hours ago',
      tags: ['Cloud', 'Cost Optimization', 'Startups']
    },
    {
      title: 'Zero-trust security architecture implementation',
      author: 'Alex Thompson',
      category: 'Cybersecurity',
      replies: 31,
      views: '1.5k',
      lastActivity: '1 day ago',
      tags: ['Security', 'Zero Trust', 'Architecture']
    },
    {
      title: 'Data pipeline optimization techniques',
      author: 'Lisa Wang',
      category: 'Data & Analytics',
      replies: 15,
      views: '720',
      lastActivity: '2 days ago',
      tags: ['Data', 'Pipelines', 'Optimization']
    },
    {
      title: 'Building a successful tech startup team',
      author: 'David Kim',
      category: 'Startup Ecosystem',
      replies: 42,
      views: '2.1k',
      lastActivity: '3 days ago',
      tags: ['Startup', 'Team Building', 'Leadership']
    }
  ];

  const communityStats = [
    { label: 'Total Members', value: '12.5k+', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Discussions', value: '6.8k+', icon: MessageCircle, color: 'from-purple-500 to-pink-500' },
    { label: 'Events Hosted', value: '150+', icon: Calendar, color: 'from-green-500 to-emerald-500' },
    { label: 'Resources Shared', value: '2.3k+', icon: BookOpen, color: 'from-orange-500 to-red-500' }
  ];

  const resources = [
    {
      title: 'Community Guidelines',
      description: 'Learn about our community standards and best practices',
      icon: BookOpen,
      href: '/community/guidelines',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Event Calendar',
      description: 'Browse upcoming events and register for sessions',
      icon: Calendar,
      href: '/community/events',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Resource Library',
      description: 'Access shared resources, templates, and tools',
      icon: BookOpen,
      href: '/community/resources',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mentorship Program',
      description: 'Connect with experienced professionals for guidance',
      icon: Star,
      href: '/community/mentorship',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const filteredCategories = communityCategories.filter(category => {
    if (selectedCategory === 'all') return true;
    return category.id === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Community - Zion Tech Group"
        description="Join the Zion Tech Group community. Connect with professionals, participate in discussions, attend events, and access exclusive resources."
        keywords="community, forum, events, networking, professional development, tech community"
        canonicalUrl="https://ziontechgroup.com/community"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Join Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Community
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Connect with professionals, share knowledge, and grow together in the 
            Zion Tech Group community. Join thousands of innovators and experts.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search discussions, events, or members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore different areas of interest and connect with like-minded professionals.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All Categories
            </button>
            {communityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-400">Members:</span>
                  <span className="text-white font-semibold">{category.members}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-400">Topics:</span>
                  <span className="text-white font-semibold">{category.topics}</span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Join Discussion
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our virtual and in-person events to learn, network, and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                  event.featured 
                    ? 'border-blue-400 bg-blue-500/10' 
                    : 'border-gray-700 hover:border-blue-400'
                }`}
              >
                {event.featured && (
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30 mb-4">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Event
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date} • {event.time}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    {event.attendees} attendees
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.registration === 'Open' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {event.registration} Registration
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Discussions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the conversation in our active community discussions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {recentDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{discussion.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span>By {discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.category}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {discussion.lastActivity}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {discussion.replies}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {discussion.views}
                    </span>
                  </div>
                </div>
                
                <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Join Discussion
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access exclusive resources and tools to enhance your community experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{resource.description}</p>
                
                <a
                  href={resource.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Become part of our growing community of innovators, experts, and professionals.
              Connect, learn, and grow with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Community
              </button>
              <a
                href="/community/events"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse Events
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;

</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</SEO>
</any>
</any>
</div>