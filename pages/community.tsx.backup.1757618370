import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, FileText, Code, Eye, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink,
  Search, Filter, Tag, HelpCircle, Calendar, Clock
} from 'lucide-react';

export default function Community() {
  const communityForums = [
    {
      title: 'AI & Consciousness Discussion',
      description: 'Discuss AI consciousness, emotional intelligence, and the future of human-AI interaction',
      topics: "156",
      posts: "2,847",
      members: "1,234",
      icon: <Brain className="w-8 h-8 text-violet-500" />,
      category: 'AI Technology',
      featured: true
    },
    {
      title: 'Quantum Computing & AI',
      description: 'Explore the convergence of quantum computing and artificial intelligence',
      topics: "89",
      posts: "1,456",
      members: "892",
      icon: <Atom className="w-8 h-8 text-blue-500" />,
      category: 'Quantum Technology',
      featured: false
    },
    {
      title: 'Business Automation & AI',
      description: 'Share experiences and best practices for AI-powered business automation',
      topics: "234",
      posts: "3,567",
      members: "2,156",
      icon: <Rocket className="w-8 h-8 text-teal-500" />,
      category: 'Business',
      featured: false
    },
    {
      title: 'IT Asset Management',
      description: 'Discuss AI-powered IT infrastructure management and optimization',
      topics: "123",
      posts: "1,789",
      members: "1,045",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      category: 'IT Management',
      featured: false
    },
    {
      title: 'Developer Community',
      description: 'Technical discussions, code sharing, and development best practices',
      topics: "445",
      posts: "5,234",
      members: "3,456",
      icon: <Code className="w-8 h-8 text-orange-500" />,
      category: 'Development',
      featured: false
    },
    {
      title: 'AI Ethics & Governance',
      description: 'Important discussions about responsible AI development and ethical considerations',
      topics: "67",
      posts: "892",
      members: "567",
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      category: 'Ethics',
      featured: false
    }
  ];

  const recentDiscussions = [
    {
      title: 'How to implement emotional intelligence in AI models?',
      author: 'Dr. Sarah Chen',
      replies: 23,
      views: 456,
      lastActivity: '2 hours ago',
      category: 'AI & Consciousness',
      hot: true
    },
    {
      title: 'Quantum neural networks vs classical neural networks',
      author: 'Michael Rodriguez',
      replies: 18,
      views: 234,
      lastActivity: '5 hours ago',
      category: 'Quantum Technology',
      hot: false
    },
    {
      title: 'Best practices for autonomous business operations',
      author: 'Alexandra Thompson',
      replies: 31,
      views: 567,
      lastActivity: '1 day ago',
      category: 'Business Automation',
      hot: true
    },
    {
      title: 'AI asset management security considerations',
      author: 'David Kim',
      replies: 15,
      views: 189,
      lastActivity: '2 days ago',
      category: 'IT Management',
      hot: false
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Consciousness Workshop 2025',
      date: '2025-02-15',
      time: '10:00 AM EST',
      type: 'Virtual Workshop',
      attendees: 156,
      description: 'Deep dive into AI consciousness development and emotional intelligence'
    },
    {
      title: 'Quantum AI Fusion Demo Day',
      date: '2025-02-20',
      time: '2:00 PM EST',
      type: 'Live Demo',
      attendees: 89,
      description: 'See our quantum AI fusion platform in action with live demonstrations'
    },
    {
      title: 'Community Meetup - East Coast',
      date: '2025-02-25',
      time: '6:00 PM EST',
      type: 'In-Person',
      attendees: 45,
      description: 'Network with fellow AI and quantum computing enthusiasts'
    }
  ];

  const categories = [
    { name: 'All Forums', count: communityForums.length, active: true },
    { name: 'AI Technology', count: 2, active: false },
    { name: 'Quantum Technology', count: 1, active: false },
    { name: 'Business', count: 1, active: false },
    { name: 'IT Management', count: 1, active: false },
    { name: 'Development', count: 1, active: false },
    { name: 'Ethics', count: 1, active: false }
  ];

  return (
    <>
      <Head>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community of AI and quantum computing enthusiasts. Connect, learn, and collaborate with experts and peers." />
        <meta name="keywords" content="community, forum, AI community, quantum computing community, technology discussion, AI enthusiasts" />
        <link rel="canonical" href="https://ziontechgroup.com/community" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Join Our Community
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Community Hub
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Connect with fellow AI and quantum computing enthusiasts, share knowledge, 
                and collaborate on the future of technology innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#forums" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Explore Forums
                  <Users className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                  Join Community
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: 'Community Members', value: '8,456', icon: <Users className="w-8 h-8 text-blue-400" /> },
                { label: 'Active Discussions', value: '1,234', icon: <MessageCircle className="w-8 h-8 text-green-400" /> },
                { label: 'Knowledge Articles', value: '567', icon: <FileText className="w-8 h-8 text-purple-400" /> },
                { label: 'Events This Month', value: '12', icon: <Calendar className="w-8 h-8 text-orange-400" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Forum */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Community Forum</h2>
              
              {communityForums.filter(forum => forum.featured).map((forum, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-full">
                          {forum.category}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{forum.title}</h3>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{forum.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">{forum.topics}</div>
                          <div className="text-gray-400 text-sm">Topics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400">{forum.posts}</div>
                          <div className="text-gray-400 text-sm">Posts</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">{forum.members}</div>
                          <div className="text-gray-400 text-sm">Members</div>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/community/forum/${forum.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200"
                      >
                        Join Discussion
                        <MessageCircle className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        {forum.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Community Forums Grid */}
        <section id="forums" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">All Community Forums</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {communityForums.filter(forum => !forum.featured).map((forum, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{forum.icon}</div>
                      <div>
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-xs font-medium rounded-full">
                          {forum.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{forum.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{forum.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-400">{forum.topics}</div>
                        <div className="text-gray-400 text-xs">Topics</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-400">{forum.posts}</div>
                        <div className="text-gray-400 text-xs">Posts</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-400">{forum.members}</div>
                        <div className="text-gray-400 text-xs">Members</div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/community/forum/${forum.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-200"
                    >
                      Join Discussion
                      <MessageCircle className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Discussions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Recent Discussions</h2>
              
              <div className="space-y-4">
                {recentDiscussions.map((discussion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{discussion.title}</h3>
                          {discussion.hot && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">
                              Hot
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-6 text-gray-400 text-sm mb-3">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {discussion.author}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {discussion.replies} replies
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {discussion.views} views
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {discussion.lastActivity}
                          </div>
                        </div>
                        
                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-300 text-xs rounded-full">
                          {discussion.category}
                        </span>
                      </div>
                      
                      <Link 
                        href={`/community/discussion/${discussion.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="ml-4 text-green-400 hover:text-green-300 transition-colors duration-200"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Community Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-xs font-medium rounded-full">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} attending
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:scale-105 transition-all duration-200">
                      Register Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Connect with AI and quantum computing enthusiasts, share your knowledge, 
                and be part of the future of technology innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 transform hover:scale-105">
                  Join Community
                  <Users className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
=======

export default function CommunityPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Community | Zion Tech Group</title>
				<meta name="description" content="Community forum and resources for Zion Tech Group users" />
				<link rel="canonical" href="https://ziontechgroup.com/community" />
				<meta name="description" content="Join the Zion Tech Group community and stay updated." />
			</Head>
			<div className="max-w-5xl mx-auto space-y-8">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Community</h1>
				<p className="text-slate-300">Join our community. Ask questions, share solutions, and learn best practices.</p>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Get Help</h2>
						<p className="text-slate-300">Visit the <a className="text-cyan-400 underline" href="/support">Support Center</a> or email <a className="text-purple-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
					</div>
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Follow Us</h2>
						<ul className="text-slate-300 space-y-1">
							<li><a className="text-cyan-400" href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
							<li><a className="text-cyan-400" href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer">GitHub</a></li>
							<li><a className="text-cyan-400" href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer">Instagram</a></li>
							<li><a className="text-cyan-400" href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer">YouTube</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
>>>>>>> autobot/2025-08-24T03-49-38-332Z
