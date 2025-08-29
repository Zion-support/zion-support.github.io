import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users,
  MessageCircle,
  Calendar,
  Star,
  TrendingUp,
  Award,
  Globe,
  Heart,
  Share2,
  BookOpen,
  Video,
  FileText,
  Zap,
  Brain,
  Cloud,
  Shield,
  ChevronRight,
  Plus,
  Search,
  Filter,
  Clock,
  MapPin,
  User,
  CheckCircle,
  ExternalLink,
  Eye
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Community() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const communityCategories = [
    { id: 'all', name: 'All Communities', count: 12, color: 'from-cyan-500 to-blue-600' },
    { id: 'ai', name: 'AI & Machine Learning', count: 3, color: 'from-purple-500 to-pink-600' },
    { id: 'cloud', name: 'Cloud & DevOps', count: 2, color: 'from-blue-500 to-cyan-600' },
    { id: 'security', name: 'Cybersecurity', count: 2, color: 'from-red-500 to-orange-600' },
    { id: 'transformation', name: 'Digital Transformation', count: 2, color: 'from-green-500 to-emerald-600' },
    { id: 'general', name: 'General Discussion', count: 3, color: 'from-slate-500 to-gray-600' }
  ];

  const communities = [
    {
      id: 'ai-enthusiasts',
      name: 'AI Enthusiasts',
      category: 'ai',
      description: 'Connect with AI professionals, share insights, and discuss the latest developments in machine learning and artificial intelligence.',
      members: 2847,
      topics: 156,
      posts: 892,
      lastActivity: '2 hours ago',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      tags: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      id: 'cloud-practitioners',
      name: 'Cloud Practitioners',
      category: 'cloud',
      description: 'A community for cloud architects, DevOps engineers, and infrastructure specialists to share best practices and solutions.',
      members: 1923,
      topics: 89,
      posts: 456,
      lastActivity: '4 hours ago',
      featured: true,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker']
    },
    {
      id: 'security-experts',
      name: 'Security Experts',
      category: 'security',
      description: 'Join cybersecurity professionals to discuss threat intelligence, security best practices, and emerging security challenges.',
      members: 1456,
      topics: 67,
      posts: 234,
      lastActivity: '6 hours ago',
      featured: false,
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      tags: ['Threat Detection', 'Compliance', 'Zero Trust', 'Incident Response']
    },
    {
      id: 'digital-transformers',
      name: 'Digital Transformers',
      category: 'transformation',
      description: 'Share experiences and strategies for successful digital transformation initiatives across industries.',
      members: 1234,
      topics: 45,
      posts: 189,
      lastActivity: '1 day ago',
      featured: false,
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      tags: ['Change Management', 'Process Automation', 'Innovation', 'Strategy']
    },
    {
      id: 'tech-innovators',
      name: 'Tech Innovators',
      category: 'general',
      description: 'A space for discussing emerging technologies, innovation trends, and future tech possibilities.',
      members: 2156,
      topics: 123,
      posts: 567,
      lastActivity: '3 hours ago',
      featured: false,
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-600',
      tags: ['Innovation', 'Emerging Tech', 'Startups', 'Research']
    },
    {
      id: 'enterprise-architects',
      name: 'Enterprise Architects',
      category: 'general',
      description: 'Connect with enterprise architects to discuss system design, scalability, and architectural best practices.',
      members: 987,
      topics: 34,
      posts: 123,
      lastActivity: '2 days ago',
      featured: false,
      icon: Building,
      color: 'from-slate-500 to-gray-600',
      tags: ['Architecture', 'Scalability', 'Integration', 'Design Patterns']
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Healthcare: Opportunities & Challenges',
      date: 'Dec 15, 2024',
      time: '2:00 PM PST',
      type: 'webinar',
      attendees: 156,
      featured: true,
      speaker: 'Dr. Sarah Chen',
      description: 'Explore the latest AI applications in healthcare and discuss ethical considerations and implementation challenges.'
    },
    {
      title: 'Cloud Security Best Practices Workshop',
      date: 'Dec 18, 2024',
      time: '10:00 AM PST',
      type: 'workshop',
      attendees: 89,
      featured: false,
      speaker: 'Mike Rodriguez',
      description: 'Hands-on workshop covering cloud security fundamentals, threat modeling, and security automation.'
    },
    {
      title: 'Digital Transformation Success Stories',
      date: 'Dec 20, 2024',
      time: '1:00 PM PST',
      type: 'panel',
      attendees: 234,
      featured: true,
      speaker: 'Industry Leaders Panel',
      description: 'Learn from successful digital transformation initiatives across different industries and company sizes.'
    }
  ];

  const recentDiscussions = [
    {
      title: 'Best practices for implementing MLOps pipelines?',
      author: 'Alex Thompson',
      community: 'AI Enthusiasts',
      replies: 23,
      views: 156,
      lastReply: '1 hour ago',
      tags: ['MLOps', 'Best Practices', 'Pipeline']
    },
    {
      title: 'Kubernetes vs Docker Swarm for production environments',
      author: 'Maria Garcia',
      community: 'Cloud Practitioners',
      replies: 18,
      views: 89,
      lastReply: '3 hours ago',
      tags: ['Kubernetes', 'Docker', 'Production']
    },
    {
      title: 'Zero Trust Architecture implementation guide',
      author: 'David Kim',
      community: 'Security Experts',
      replies: 31,
      views: 234,
      lastReply: '5 hours ago',
      tags: ['Zero Trust', 'Security', 'Implementation']
    },
    {
      title: 'How to measure ROI of digital transformation projects?',
      author: 'Lisa Wang',
      community: 'Digital Transformers',
      replies: 27,
      views: 167,
      lastReply: '1 day ago',
      tags: ['ROI', 'Digital Transformation', 'Metrics']
    }
  ];

  const communityBenefits = [
    {
      title: 'Knowledge Sharing',
      description: 'Learn from industry experts and share your own experiences',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Networking',
      description: 'Connect with professionals in your field and build relationships',
      icon: Users,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Professional Growth',
      description: 'Stay updated with latest trends and advance your career',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Problem Solving',
      description: 'Get help with technical challenges and find solutions',
      icon: Zap,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const filteredCommunities = communities.filter(community => 
    selectedCategory === 'all' || community.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of technology professionals. Connect, learn, and grow with peers in AI, cloud computing, cybersecurity, and digital transformation."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Connect with technology professionals, share knowledge, and stay ahead of industry trends in our vibrant community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Join Community
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Explore Events
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">12+</div>
                <div className="text-slate-400 text-sm">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-slate-400 text-sm">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-slate-400 text-sm">Topics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2K+</div>
                <div className="text-slate-400 text-sm">Posts</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Community Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Join Our Community?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityBenefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Community Categories & Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Find Your Community</h2>
              <p className="text-slate-400">Join communities that match your interests and expertise</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search communities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {communityCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Communities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommunities.map((community, index) => (
              <div
                key={community.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  community.featured 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {community.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured Community</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${community.color} rounded-xl flex items-center justify-center`}>
                    <community.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{community.name}</h3>
                    <p className="text-slate-400 text-sm">{community.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {community.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {community.members.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {community.posts}
                    </span>
                  </div>
                  <span className="text-xs">Active {community.lastActivity}</span>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Join Community
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Upcoming Events</h2>
              <p className="text-slate-400">Join our live events, webinars, and workshops</p>
            </div>
            <Link
              to="/events"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View All Events
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  event.featured 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {event.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured Event</span>
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{event.description}</p>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {event.date} at {event.time}
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                    <User className="w-4 h-4" />
                    {event.speaker}
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Users className="w-4 h-4" />
                    {event.attendees} attending
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Discussions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Recent Discussions</h2>
              <p className="text-slate-400">Latest conversations and questions from our community</p>
            </div>
            <Link
              to="/discussions"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View All Discussions
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentDiscussions.map((discussion, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 hover:text-cyan-400 transition-colors cursor-pointer">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                      <span>By {discussion.author}</span>
                      <span>In {discussion.community}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {discussion.lastReply}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-400 ml-4">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {discussion.replies}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {discussion.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Connect with thousands of technology professionals, share your expertise, and stay ahead of industry trends
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <p className="text-slate-400 text-sm mt-6">
            Free to join • No commitment required • Instant access to all communities
          </p>
        </motion.div>
      </div>
    </div>
  );
}