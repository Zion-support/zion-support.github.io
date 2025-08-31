import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Calendar,
  MapPin,
  Globe,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Slack,
  Discord,
  BookOpen,
  Video,
  Code,
  Zap,
  Lightbulb,
  Rocket,
  Heart,
  TrendingUp,
  Users2,
  Building2,
  GraduationCap,
  Shield,
  Cloud,
  Brain,
  Target,
  Clock
} from 'lucide-react';

const Community: React.FC = () => {
  const communityEvents = [
    {
      name: 'AI Innovation Summit 2024',
      description: 'Join industry leaders and innovators for a day of AI insights, networking, and collaboration.',
      date: '2024-02-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Middletown, DE & Virtual',
      type: 'Conference',
      attendees: 250,
      price: 'Free',
      featured: true,
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cybersecurity Workshop Series',
      description: 'Hands-on workshops covering the latest cybersecurity threats and defense strategies.',
      date: '2024-02-22',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual',
      type: 'Workshop',
      attendees: 75,
      price: '$49',
      featured: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Cloud Architecture Meetup',
      description: 'Monthly meetup for cloud architects and DevOps engineers to share best practices.',
      date: '2024-03-01',
      time: '6:00 PM - 8:00 PM',
      location: 'Middletown, DE',
      type: 'Meetup',
      attendees: 45,
      price: 'Free',
      featured: false,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Women in Tech Networking',
      description: 'Empowering women in technology through networking, mentorship, and skill development.',
      date: '2024-03-08',
      time: '5:30 PM - 7:30 PM',
      location: 'Middletown, DE',
      type: 'Networking',
      attendees: 60,
      price: 'Free',
      featured: false,
      icon: Users2,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const communityGroups = [
    {
      name: 'AI & Machine Learning Enthusiasts',
      description: 'Connect with fellow AI practitioners, share projects, and discuss the latest developments.',
      members: 1250,
      category: 'Technology',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Weekly AI challenges',
        'Project showcase events',
        'Expert Q&A sessions',
        'Resource sharing'
      ]
    },
    {
      name: 'Cybersecurity Professionals',
      description: 'Network with security experts and stay updated on the latest threats and solutions.',
      members: 890,
      category: 'Security',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Threat intelligence sharing',
        'Security tool discussions',
        'Incident response case studies',
        'Compliance updates'
      ]
    },
    {
      name: 'Cloud & DevOps Engineers',
      description: 'Share best practices, tools, and experiences in cloud computing and DevOps.',
      members: 1100,
      category: 'Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Architecture reviews',
        'Tool comparisons',
        'Best practice sharing',
        'Troubleshooting sessions'
      ]
    },
    {
      name: 'Digital Transformation Leaders',
      description: 'Connect with executives and leaders driving digital transformation initiatives.',
      members: 450,
      category: 'Leadership',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Strategy discussions',
        'Change management insights',
        'ROI measurement',
        'Industry benchmarking'
      ]
    }
  ];

  const mentorshipPrograms = [
    {
      name: 'Tech Career Mentorship',
      description: 'Get guidance from experienced professionals to advance your technology career.',
      mentors: 25,
      mentees: 120,
      duration: '6 months',
      focus: 'Career Development',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Startup Mentorship',
      description: 'Connect with successful entrepreneurs and business leaders for startup guidance.',
      mentors: 15,
      mentees: 45,
      duration: '12 months',
      focus: 'Business Strategy',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Technical Skills Mentorship',
      description: 'Improve your technical skills with guidance from senior developers and architects.',
      mentors: 40,
      mentees: 200,
      duration: '3 months',
      focus: 'Technical Skills',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const resources = [
    {
      name: 'Knowledge Base',
      description: 'Comprehensive documentation, tutorials, and best practices.',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      items: ['Technical guides', 'Best practices', 'Tutorials', 'FAQs']
    },
    {
      name: 'Video Library',
      description: 'Recorded webinars, training sessions, and expert interviews.',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      items: ['Webinars', 'Training videos', 'Expert interviews', 'Case studies']
    },
    {
      name: 'Code Repository',
      description: 'Open-source projects, code samples, and development tools.',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      items: ['Open source projects', 'Code samples', 'Templates', 'Tools']
    },
    {
      name: 'Innovation Hub',
      description: 'Ideas, prototypes, and collaborative innovation projects.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      items: ['Innovation ideas', 'Prototypes', 'Collaborative projects', 'Hackathons']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {' '}Community
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect, collaborate, and grow with fellow technology professionals. 
              Join our vibrant community of innovators, developers, and business leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Join Community
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                View Events
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5,000+', label: 'Community Members', icon: Users, color: 'from-blue-500 to-cyan-500' },
              { number: '50+', label: 'Events Per Year', icon: Calendar, color: 'from-purple-500 to-pink-500' },
              { number: '100+', label: 'Expert Mentors', icon: Award, color: 'from-green-500 to-emerald-500' },
              { number: '25+', label: 'Active Groups', icon: Users2, color: 'from-yellow-500 to-orange-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us for exciting events, workshops, and networking opportunities.
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
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 ${
                  event.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                {event.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Featured Event
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-xl flex items-center justify-center`}>
                      <event.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-slate-700 text-blue-400 text-xs font-medium rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{event.name}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-400">{event.price}</span>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                      Register Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Groups */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Groups
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join specialized groups based on your interests and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityGroups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${group.color} rounded-xl flex items-center justify-center`}>
                    <group.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-slate-700 text-blue-400 text-xs font-medium rounded-full">
                      {group.category}
                    </span>
                    <div className="text-sm text-gray-400 mt-1">{group.members} members</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{group.name}</h3>
                <p className="text-gray-300 mb-4">{group.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Group Features:</h4>
                  <ul className="space-y-1">
                    {group.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Join Group
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mentorship Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get guidance from experienced professionals and accelerate your growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentorshipPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{program.name}</h3>
                <p className="text-gray-300 mb-4">{program.description}</p>
                
                <div className="space-y-2 mb-6 text-sm text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{program.mentors} mentors</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Users2 className="w-4 h-4" />
                    <span>{program.mentees} mentees</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>{program.focus}</span>
                  </div>
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access valuable resources to support your learning and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{resource.name}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                
                <ul className="space-y-1 text-left">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Explore
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Involved
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to join our community? Choose how you'd like to get involved.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">Join as a Member</h3>
                <p className="text-gray-300 mb-4">Connect with peers, attend events, and access resources.</p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Become a Member
                </button>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">Become a Mentor</h3>
                <p className="text-gray-300 mb-4">Share your expertise and help others grow in their careers.</p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                  Apply as Mentor
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our community team for more information and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Community Team
              </a>
              <a
                href="mailto:community@ziontechgroup.com"
                className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;