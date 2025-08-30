<<<<<<< HEAD
import React from 'react.ts';
import { SEO             } from '../components/SEO';
import { Users, MessageSquare, BookOpen, Star, TrendingUp, Award             } from 'lucide-react.ts';
=======
import React from 'react.ts';
import { Link            } from 'react-router-dom.ts';
import { motion            } from 'framer-motion.ts';
import { Users,
  MessageCircle,
  Star,
  TrendingUp,
  Calendar,
  MapPin,
  Globe,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Award,
  CheckCircle,
  ArrowRight
<<<<<<< HEAD
import { SEO            } from '../components/SEO';
=======
} from 'lucide-react';
import { SEO            } from '../components/SEO';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function Community(...args: any[]): any {
  const communityStats = [;
    { label: 'Active Members', value: '15,000+', icon: Users, color: 'from-blue-500 to-cyan-500' },;
    { label: 'Discussions', value: '50,000+', icon: MessageCircle, color: 'from-purple-500 to-pink-500' },;
    { label: 'Events Hosted', value: '200+', icon: Calendar, color: 'from-green-500 to-emerald-500' },;
    { label: 'Countries', value: '45+', icon: Globe, color: 'from-orange-500 to-red-500' };
  ];

  const communityForums = [
    {
      title: 'AI & Machine Learning',
      description: 'Discuss AI technologies, share projects, and get help with ML implementations',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      topics: 1250,
      posts: 8900,
      members: 3200,
      href: '/community/ai-ml'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure, DevOps practices, and deployment strategies',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      topics: 980,
      posts: 6700,
      members: 2800,
      href: '/community/cloud-devops'
    },
    {
      title: 'Cybersecurity',
      description: 'Security best practices, threat discussions, and compliance topics',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      topics: 750,
      posts: 5200,
      members: 2100,
      href: '/community/cybersecurity'
    },
    {
      title: 'Digital Transformation',
      description: 'Business transformation strategies and technology adoption',
<<<<<<< HEAD
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      topics: 620,
      posts: 4100,
      members: 1800,
      href: '/community/digital-transformation'

=======
      icon: Rocket,;
      color: 'from-green-600 to-emerald-600',;
      topics: 620,;
      posts: 4100,;
      members: 1800,;
      href: '/community/digital-transformation';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const upcomingEvents = [
    {
      title: 'AI Innovation Summit 2025',
      description: 'Join industry leaders for insights on the future of AI in business',
      date: 'March 15-17, 2025',
      location: 'San Francisco, CA',
      type: 'Conference',
      attendees: 500,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/events/ai-innovation-summit-2025'
    },
    {
      title: 'Cloud Security Workshop',
      description: 'Hands-on workshop on securing cloud infrastructure',
      date: 'March 22, 2025',
      location: 'Virtual Event',
      type: 'Workshop',
      attendees: 150,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/events/cloud-security-workshop'
    },
    {
      title: 'DevOps Best Practices Meetup',
      description: 'Local meetup for DevOps professionals to share experiences',
      date: 'March 28, 2025',
<<<<<<< HEAD
      location: 'New York, NY',
      type: 'Meetup',
      attendees: 75,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/events/devops-meetup-nyc'

=======
      location: 'New York, NY',;
      type: 'Meetup',;
      attendees: 75,;
      icon: Cloud,;
      color: 'from-blue-500 to-cyan-500',;
      href: '/events/devops-meetup-nyc';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const featuredDiscussions = [
    {
      title: 'Implementing Zero Trust Architecture in Enterprise',
      author: 'Sarah Chen',
      category: 'Cybersecurity',
      replies: 45,
      views: 1200,
      lastActivity: '2 hours ago',
      tags: ['Zero Trust', 'Enterprise', 'Security'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/community/discussions/zero-trust-enterprise'
    },
    {
      title: 'Best Practices for AI Model Deployment',
      author: 'Mike Rodriguez',
      category: 'AI & ML',
      replies: 32,
      views: 890,
      lastActivity: '5 hours ago',
      tags: ['AI', 'Deployment', 'Best Practices'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/community/discussions/ai-model-deployment'
    },
    {
      title: 'Cost Optimization Strategies for Multi-Cloud',
      author: 'Lisa Thompson',
      category: 'Cloud & DevOps',
      replies: 28,
<<<<<<< HEAD
      views: 650,
      lastActivity: '1 day ago',
      tags: ['Multi-Cloud', 'Cost Optimization', 'DevOps'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/community/discussions/multi-cloud-cost-optimization'

=======
      views: 650,;
      lastActivity: '1 day ago',;
      tags: ['Multi-Cloud', 'Cost Optimization', 'DevOps'],;
      icon: Cloud,;
      color: 'from-blue-500 to-cyan-500',;
      href: '/community/discussions/multi-cloud-cost-optimization';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const communityResources = [
    {
      title: 'Community Guidelines',
      description: 'Learn about our community standards and participation rules',
      icon: BookOpen,
      href: '/community/guidelines',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Event Calendar',
      description: 'Browse upcoming community events and webinars',
      icon: Calendar,
      href: '/events',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Member Directory',
      description: 'Connect with other community members and experts',
      icon: Users,
      href: '/community/members',
      color: 'from-purple-500 to-pink-500'
    },
<<<<<<< HEAD
    {
      title: 'Resource Library',
      description: 'Access shared resources, templates, and tools',
      icon: Download,
      href: '/community/resources',
      color: 'from-orange-500 to-red-500'

=======
    {;
      title: 'Resource Library',;
      description: 'Access shared resources, templates, and tools',;
      icon: Download,;
      href: '/community/resources',;
      color: 'from-orange-500 to-red-500';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default function Community(...args[]: any):  {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
=======
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        title="Community - Zion Tech Group"
        description="Join our community of technology professionals and enthusiasts. Share knowledge, get help, and connect with peers."
      />
<<<<<<< HEAD

=======
      
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Connect with technology professionals, share knowledge, and stay updated 
              with the latest trends in AI, cloud computing, and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Join Community
              </button>
              <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300">
                View Forums
              </button>
            </div>
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center"

            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Community
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with technology professionals, share knowledge, and stay ahead of industry trends.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index)            => (
            <motion.div
              key={stat.label}
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.2 + index * 0.1 






}}
              className="text-center"

              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Forums */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.3 






}}
            className="text-3xl font-bold text-white text-center mb-12"

            Community Forums
          </motion.h2>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {communityForums.map((forum, index)            => (
              <motion.div
                key={forum.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.4 + index * 0.1 






}}
                className="group"

                <Link
                  to={forum.href}
                  className="block bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full"

                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${forum.color} rounded-xl flex items-center justify-center`}>
                      <forum.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {forum.title}
                      </h3>
                      <p className="text-slate-400 text-sm">{forum.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-lg font-bold text-white">{forum.topics.toLocaleString()}</div>
                      <div className="text-xs text-slate-400">Topics</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-lg font-bold text-white">{forum.posts.toLocaleString()}</div>
                      <div className="text-xs text-slate-400">Posts</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-lg font-bold text-white">{forum.members.toLocaleString()}</div>
                      <div className="text-xs text-slate-400">Members</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Join Discussion
                    </span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Community Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our community platform provides tools and features to help you connect, 
              learn, and grow with fellow technology professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discussion Forums</h3>
              <p className="text-slate-300">Engage in meaningful discussions about technology trends, best practices, and industry insights.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Knowledge Sharing</h3>
              <p className="text-slate-300">Share your expertise and learn from others through articles, tutorials, and case studies.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Recognition</h3>
              <p className="text-slate-300">Get recognized for your contributions and build your reputation in the technology community.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Career Growth</h3>
              <p className="text-slate-300">Connect with mentors, discover job opportunities, and advance your technology career.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Events & Webinars</h3>
              <p className="text-slate-300">Participate in virtual and in-person events to expand your knowledge and network.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Networking</h3>
              <p className="text-slate-300">Build meaningful connections with professionals across different technology domains and industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
=======
      {/* Upcoming Events */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.5 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Upcoming Events
        </motion.h2>

        <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index)            => (
            <motion.div
              key={event.title}
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.6 + index * 0.1 






}}
              className="group"

              <Link
                to={event.href}
                className="block bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 h-full"

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Conference' ? 'bg-purple-500/20 text-purple-400' :
                      event.type === 'Workshop' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {event.type}
                    </span>
                    <div className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-300">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-300">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-300">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="w-full py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-300 text-center">
                    Learn More
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Discussions */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.7 






}}
            className="text-3xl font-bold text-white text-center mb-12"

            Featured Discussions
          </motion.h2>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {featuredDiscussions.map((discussion, index)            => (
              <motion.div
                key={discussion.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.8 + index * 0.1 






}}
                className="group"

                <Link
                  to={discussion.href}
                  className="block bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full"

                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${discussion.color} rounded-lg flex items-center justify-center`}>
                      <discussion.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400">{discussion.category}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {discussion.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                    <span>by {discussion.author}</span>
                    <span>{discussion.lastActivity}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span>{discussion.replies} replies</span>
                    <span>{discussion.views} views</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"

                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Join Discussion
                    </span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Resources */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.9 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Community Resources
        </motion.h2>

        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityResources.map((resource, index)            => (
            <motion.div
              key={resource.title}
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 1.0 + index * 0.1 






}}
              className="group"

              <Link
                to={resource.href}
                className="block bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full text-center"

                <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-400 text-sm">{resource.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 1.1 






}}
          className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 text-center"

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Connect with thousands of technology professionals, share your expertise, 
            and stay ahead of the curve in the rapidly evolving tech landscape.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"

              Get Started
            </Link>
            <Link
              to="/help"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"

=======
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
            </button>
            <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              Learn More
<<<<<<< HEAD
            </button>
          </div>
        </div>
      </section>
    </div>
  )};
=======;
            </Link>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
