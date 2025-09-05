import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Video, 
  Play, 
  Calendar, 
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Settings,
  Globe,
  ExternalLink
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const upcomingWebinars = [
  {
    title: 'AI Revolution: Transforming Business Operations',
    description: 'Join our experts as they discuss how AI is revolutionizing business operations and creating new opportunities for growth.',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Johnson',
    speakerTitle: 'Chief AI Officer',
    attendees: 0,
    maxAttendees: 500,
    category: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-blue-500 to-purple-500',
    status: 'upcoming'
  },
  {
    title: 'Cloud Migration Strategies: Best Practices and Pitfalls',
    description: 'Learn the essential strategies for successful cloud migration and how to avoid common pitfalls.',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    speaker: 'Michael Chen',
    speakerTitle: 'Cloud Solutions Architect',
    attendees: 0,
    maxAttendees: 300,
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    status: 'upcoming'
  },
  {
    title: 'Cybersecurity in 2024: Emerging Threats and Defenses',
    description: 'Stay ahead of the latest cybersecurity threats and learn about cutting-edge defense strategies.',
    date: '2024-03-01',
    time: '1:00 PM EST',
    duration: '75 minutes',
    speaker: 'Alex Rodriguez',
    speakerTitle: 'Chief Security Officer',
    attendees: 0,
    maxAttendees: 400,
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    status: 'upcoming'
  }
];

const pastWebinars = [
  {
    title: 'Digital Transformation: A Complete Roadmap',
    description: 'Comprehensive guide to planning and executing successful digital transformation initiatives.',
    date: '2024-01-15',
    duration: '60 minutes',
    speaker: 'David Kim',
    speakerTitle: 'Digital Transformation Lead',
    attendees: 450,
    category: 'Digital Transformation',
    icon: Settings,
    color: 'from-purple-500 to-indigo-500',
    status: 'past',
    recordingUrl: '#'
  },
  {
    title: 'Data Analytics for Business Intelligence',
    description: 'Discover how to leverage data analytics to drive business intelligence and make data-driven decisions.',
    date: '2024-01-08',
    duration: '50 minutes',
    speaker: 'Dr. Emily Watson',
    speakerTitle: 'Data Science Director',
    attendees: 380,
    category: 'Data Analytics',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500',
    status: 'past',
    recordingUrl: '#'
  },
  {
    title: 'The Future of Remote Work Technology',
    description: 'Explore the technologies and strategies enabling the future of remote and hybrid work environments.',
    date: '2023-12-20',
    duration: '55 minutes',
    speaker: 'Lisa Thompson',
    speakerTitle: 'Workplace Technology Specialist',
    attendees: 320,
    category: 'Workplace Technology',
    icon: Globe,
    color: 'from-orange-500 to-yellow-500',
    status: 'past',
    recordingUrl: '#'
  }
];

const categories = [
  { name: 'All', count: 6, active: true },
  { name: 'AI & Machine Learning', count: 1, active: false },
  { name: 'Cloud Computing', count: 1, active: false },
  { name: 'Cybersecurity', count: 1, active: false },
  { name: 'Digital Transformation', count: 1, active: false },
  { name: 'Data Analytics', count: 1, active: false },
  { name: 'Workplace Technology', count: 1, active: false }
];

const stats = [
  { number: '50+', label: 'Webinars Hosted' },
  { number: '15K+', label: 'Total Attendees' },
  { number: '95%', label: 'Satisfaction Rate' },
  { number: '4.8/5', label: 'Average Rating' }
];

export default function WebinarsPage() {
  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars covering AI, cloud computing, cybersecurity, data analytics, and digital transformation. Learn from industry leaders."
      keywords="webinars, online events, technology training, AI webinars, cloud computing, cybersecurity, data analytics, digital transformation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Video className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Expert{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Webinars
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our expert-led webinars and learn from industry leaders about the latest trends 
                in AI, cloud computing, cybersecurity, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#upcoming" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Upcoming Webinars
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Request Custom Webinar
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section id="upcoming" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Join our upcoming webinars and learn from industry experts about the latest technology trends and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => {
                const IconComponent = webinar.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${webinar.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        Upcoming
                      </span>
                      <span className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(webinar.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{webinar.time} • {webinar.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{webinar.speaker} - {webinar.speakerTitle}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Registration</span>
                        <span>{webinar.attendees}/{webinar.maxAttendees}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${(webinar.attendees / webinar.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center group">
                      <Play className="w-4 h-4 mr-2" />
                      Register Now
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Past Webinars
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Access recordings of our past webinars and continue learning from our expert sessions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => {
                const IconComponent = webinar.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${webinar.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        Past Event
                      </span>
                      <span className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(webinar.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{webinar.speaker} - {webinar.speakerTitle}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{webinar.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center group">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Recording
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Stay Updated with Our Webinars
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Subscribe to our newsletter to receive notifications about upcoming webinars, 
                  exclusive content, and technology insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Partner with us to host your own webinar and share your expertise with our audience of technology professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request to Host
                </Link>
                <Link href="/resources" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  View All Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}