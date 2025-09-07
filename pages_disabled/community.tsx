import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Award, 
  Star, 
  ThumbsUp, 
  Share2, 
  ExternalLink,
  Search,
  Filter,
  Clock,
  MapPin,
  Video,
  BookOpen,
  Code,
  Lightbulb;
} from 'lucide-react';
import Layout from '../components/Layout';

const communityStats = [
  { number: '2,500+', label: 'Active Members' },
  { number: '15,000+', label: 'Discussions' },
  { number: '500+', label: 'Solutions Shared' },
  { number: '50+', label: 'Countries Represented' }
];

const communityFeatures = [
  {
    icon: MessageSquare,
    title: 'Discussion Forums',
    description: 'Join conversations about AI, cloud computing, cybersecurity, and more.',
    color: 'blue',
    stats: '15,000+ posts'
  },
  {
    icon: Users,
    title: 'Expert Network',
    description: 'Connect with industry experts and thought leaders.',
    color: 'green',
    stats: '500+ experts'
  },
  {
    icon: Calendar,
    title: 'Events & Webinars',
    description: 'Attend virtual events, workshops, and training sessions.',
    color: 'purple',
    stats: '50+ events/year'
  },
  {
    icon: Award,
    title: 'Knowledge Base',
    description: 'Access shared solutions, best practices, and tutorials.',
    color: 'orange',
    stats: '1,000+ articles'
  }
];

const recentDiscussions = [
  {
    title: 'Best Practices for AI Model Deployment',
    author: 'Sarah Chen',
    replies: 24,
    views: 156,
    lastActivity: '2 hours ago',
    category: 'AI Services',
    tags: ['AI', 'Deployment', 'Best Practices']
  },
  {
    title: 'Cloud Migration Success Story',
    author: 'Mike Rodriguez',
    replies: 18,
    views: 203,
    lastActivity: '4 hours ago',
    category: 'Cloud Solutions',
    tags: ['Cloud', 'Migration', 'Success']
  },
  {
    title: 'Cybersecurity Trends 2024',
    author: 'Alex Thompson',
    replies: 31,
    views: 289,
    lastActivity: '6 hours ago',
    category: 'Cybersecurity',
    tags: ['Security', 'Trends', '2024']
  },
  {
    title: 'Micro SaaS Development Tips',
    author: 'Emma Wilson',
    replies: 15,
    views: 134,
    lastActivity: '8 hours ago',
    category: 'Micro SaaS',
    tags: ['SaaS', 'Development', 'Tips']
  }
];

const upcomingEvents = [
  {
    title: 'AI Implementation Workshop',
    date: '2024-02-15',
    time: '2:00 PM EST',
    type: 'Workshop',
    attendees: 45,
    maxAttendees: 50,
    description: 'Hands-on workshop on implementing AI solutions in your business.'
  },
  {
    title: 'Cloud Security Best Practices',
    date: '2024-02-20',
    time: '3:00 PM EST',
    type: 'Webinar',
    attendees: 120,
    maxAttendees: 200,
    description: 'Learn essential security practices for cloud environments.'
  },
  {
    title: 'Community Meetup - NYC',
    date: '2024-02-25',
    time: '6:00 PM EST',
    type: 'Meetup',
    attendees: 25,
    maxAttendees: 30,
    description: 'In-person networking event for local community members.'
  }
];

const topContributors = [
  {
    name: 'Sarah Chen',
    role: 'AI Solutions Architect',
    contributions: 156,
    badges: ['Expert', 'Mentor', 'Top Contributor'],
    avatar: 'SC'
  },
  {
    name: 'Mike Rodriguez',
    role: 'Cloud Engineer',
    contributions: 142,
    badges: ['Expert', 'Community Leader'],
    avatar: 'MR'
  },
  {
    name: 'Alex Thompson',
    role: 'Cybersecurity Specialist',
    contributions: 128,
    badges: ['Expert', 'Security Champion'],
    avatar: 'AT'
  },
  {
    name: 'Emma Wilson',
    role: 'SaaS Developer',
    contributions: 115,
    badges: ['Expert', 'Innovator'],
    avatar: 'EW'
  }
];
}

export default function Community() {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDiscussions = recentDiscussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <Head>
        <title>Community - Zion Tech Group</title>
        <meta name='description' content='Join the Zion Tech Group community. Connect with experts, share knowledge, and learn from industry leaders in AI, cloud computing, and cybersecurity.' />
        <meta name='keywords' content='community, forum, discussions, experts, networking, Zion Tech Group, AI community, tech community' />
        <link rel='canonical' href='https://ziontechgroup.com/community' />
      </Head>

      <div className='min-h-screen bg-gray-50'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20'>
          <div className='container mx-auto px-4'>
            <motion.div
              initial={ opacity: 0, y: 20 }
              animate={ opacity: 1, y: 0 }
              transition={ duration: 0.6 }
              className='text-center max-w-4xl mx-auto'
            >
              <h1 className='text-5xl font-bold mb-6'>Join Our Community</h1>
              <p className='text-xl text-blue-100 mb-8'>
                Connect with experts, share knowledge, and learn from industry leaders in technology.
              </p>
              
              {/* Search Bar */}
              <div className='max-w-2xl mx-auto mb-8'>
                <div className='relative'>
                  <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <input
                    type='text'
                    placeholder='Search discussions, events, or members...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300'
                  />
                </div>
              </div>

              {/* Community Stats */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto'>
                {communityStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={ opacity: 0, y: 20 }
                    animate={ opacity: 1, y: 0 }
                    transition={ duration: 0.6, delay: index * 0.1 }
                    className='text-center'
                  >
                    <div className='text-3xl font-bold mb-2'>{stat.number}</div>
                    <div className='text-blue-200 text-sm'>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Features */}
        <section className='py-20'>
          <div className='container mx-auto px-4'>
            <motion.div
              initial={ opacity: 0, y: 20 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.6 }
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>Community Features</h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Engage with our community through various channels and activities.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={ opacity: 0, y: 20 }
                  whileInView={ opacity: 1, y: 0 }
                  transition={ duration: 0.6, delay: index * 0.1 }
                  className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'
                >
                  <div className={`bg-${feature.color}-100 w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                  <p className='text-gray-600 mb-3'>{feature.description}</p>
                  <div className='text-sm text-gray-500'>{feature.stats}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              {/* Tab Navigation */}
              <div className='flex flex-wrap justify-center mb-8 border-b border-gray-200'>
                {[
                  { id: 'discussions', label: 'Discussions', icon: MessageSquare },
                  { id: 'events', label: 'Events', icon: Calendar },
                  { id: 'contributors', label: 'Top Contributors', icon: Award }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 font-medium border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon className='w-5 h-5 mr-2' />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={ opacity: 0, y: 20 }
                animate={ opacity: 1, y: 0 }
                transition={ duration: 0.6 }
              >
                {activeTab === 'discussions' && (
                  <div className='space-y-6'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-2xl font-bold text-gray-900'>Recent Discussions</h3>
                      <div className='flex items-center space-x-2'>
                        <Filter className='w-5 h-5 text-gray-400' />
                        <span className='text-sm text-gray-500'>Filter</span>
                      </div>
                    </div>
                    
                    {filteredDiscussions.map((discussion, index) => (
                      <motion.div
                        key={index}
                        initial={ opacity: 0, x: -20 }
                        animate={ opacity: 1, x: 0 }
                        transition={ duration: 0.6, delay: index * 0.1 }
                        className='bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer'
                      >
                        <div className='flex items-start justify-between'>
                          <div className='flex-1'>
                            <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                              {discussion.title}
                            </h4>
                            <div className='flex items-center space-x-4 text-sm text-gray-500 mb-3'>
                              <span>By {discussion.author}</span>
                              <span>•</span>
                              <span>{discussion.replies} replies</span>
                              <span>•</span>
                              <span>{discussion.views} views</span>
                              <span>•</span>
                              <span>{discussion.lastActivity}</span>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'>
                                {discussion.category}
                              </span>
                              {discussion.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className='px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full'
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <ExternalLink className='w-5 h-5 text-gray-400' />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'events' && (
                  <div className='space-y-6'>
                    <h3 className='text-2xl font-bold text-gray-900'>Upcoming Events</h3>
                    
                    {upcomingEvents.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={ opacity: 0, x: -20 }
                        animate={ opacity: 1, x: 0 }
                        transition={ duration: 0.6, delay: index * 0.1 }
                        className='bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors'
                      >
                        <div className='flex items-start justify-between'>
                          <div className='flex-1'>
                            <div className='flex items-center space-x-3 mb-2'>
                              <h4 className='text-lg font-semibold text-gray-900'>
                                {event.title}
                              </h4>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                                event.type === 'Webinar' ? 'bg-blue-100 text-blue-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {event.type}
                              </span>
                            </div>
                            <p className='text-gray-600 mb-3'>{event.description}</p>
                            <div className='flex items-center space-x-6 text-sm text-gray-500'>
                              <div className='flex items-center'>
                                <Calendar className='w-4 h-4 mr-1' />
                                {event.date}
                              </div>
                              <div className='flex items-center'>
                                <Clock className='w-4 h-4 mr-1' />
                                {event.time}
                              </div>
                              <div className='flex items-center'>
                                <Users className='w-4 h-4 mr-1' />
                                {event.attendees}/{event.maxAttendees} attendees
                              </div>
                            </div>
                          </div>
                          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                            Join Event
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'contributors' && (
                  <div className='space-y-6'>
                    <h3 className='text-2xl font-bold text-gray-900'>Top Contributors</h3>
                    
                    <div className='grid md:grid-cols-2 gap-6'>
                      {topContributors.map((contributor, index) => (
                        <motion.div
                          key={index}
                          initial={ opacity: 0, y: 20 }
                          animate={ opacity: 1, y: 0 }
                          transition={ duration: 0.6, delay: index * 0.1 }
                          className='bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors'
                        >
                          <div className='flex items-center space-x-4'>
                            <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold'>
                              {contributor.avatar}
                            </div>
                            <div className='flex-1'>
                              <h4 className='text-lg font-semibold text-gray-900'>
                                {contributor.name}
                              </h4>
                              <p className='text-gray-600 text-sm mb-2'>{contributor.role}</p>
                              <div className='flex items-center space-x-2 mb-2'>
                                <span className='text-sm text-gray-500'>
                                  {contributor.contributions} contributions
                                </span>
                              </div>
                              <div className='flex flex-wrap gap-1'>
                                {contributor.badges.map((badge, badgeIndex) => (
                                  <span
                                    key={badgeIndex}
                                    className='px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full'
                                  >
                                    {badge}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join Community CTA */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
          <div className='container mx-auto px-4'>
            <motion.div
              initial={ opacity: 0, y: 20 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.6 }
              className='text-center max-w-4xl mx-auto'
            >
              <h2 className='text-4xl font-bold mb-6'>Ready to Join Our Community?</h2>
              <p className='text-xl text-blue-100 mb-8'>
                Connect with thousands of professionals, share your knowledge, and learn from the best in the industry.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg'>
                  Join Now - It's Free
                </button>
                <button className='border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg'>
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
