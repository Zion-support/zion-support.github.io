import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Video, 
  Calendar, 
  Clock, 
  User,
  ArrowRight,
  Play,
  Download,
  Share2,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Zap,
  Globe,
  Database
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const upcomingWebinars = [
  {
    title: 'AI Revolution: Transforming Business Operations',
    description: 'Learn how artificial intelligence is revolutionizing business operations and what it means for your organization.',
    speaker: 'Dr. Sarah Johnson',
    speakerTitle: 'Chief AI Officer',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    category: 'AI & Machine Learning',
    icon: Brain,
    attendees: 1250,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Cloud Migration Strategies for Enterprise',
    description: 'Best practices and strategies for successful enterprise cloud migration projects.',
    speaker: 'Michael Chen',
    speakerTitle: 'Cloud Solutions Architect',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    category: 'Cloud Computing',
    icon: Cloud,
    attendees: 890,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Cybersecurity in the Digital Age',
    description: 'Protecting your organization from evolving cyber threats and implementing robust security measures.',
    speaker: 'Alex Rodriguez',
    speakerTitle: 'Chief Security Officer',
    date: '2024-03-01',
    time: '1:00 PM EST',
    duration: '50 minutes',
    category: 'Security',
    icon: Shield,
    attendees: 1100,
    color: 'from-red-500 to-pink-600'
  },
  {
    title: 'Data Analytics for Business Intelligence',
    description: 'Leveraging data analytics to drive informed business decisions and competitive advantage.',
    speaker: 'Dr. Emily Watson',
    speakerTitle: 'Data Science Director',
    date: '2024-03-08',
    time: '2:30 PM EST',
    duration: '55 minutes',
    category: 'Data & Analytics',
    icon: BarChart3,
    attendees: 750,
    color: 'from-green-500 to-emerald-600'
  }
];

const pastWebinars = [
  {
    title: 'Digital Transformation: A Roadmap for Success',
    description: 'Step-by-step guide to planning and executing successful digital transformation initiatives.',
    speaker: 'David Kim',
    speakerTitle: 'Digital Transformation Lead',
    date: '2024-01-15',
    duration: '60 minutes',
    category: 'Digital Transformation',
    icon: Zap,
    views: 2847,
    color: 'from-orange-500 to-amber-600'
  },
  {
    title: 'The Future of Remote Work Technology',
    description: 'Exploring the technologies and strategies that enable effective remote collaboration.',
    speaker: 'Lisa Thompson',
    speakerTitle: 'Workplace Technology Expert',
    date: '2024-01-08',
    duration: '45 minutes',
    category: 'Workplace Technology',
    icon: Globe,
    views: 1923,
    color: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Blockchain Beyond Cryptocurrency',
    description: 'Understanding blockchain applications in business and enterprise solutions.',
    speaker: 'Robert Martinez',
    speakerTitle: 'Blockchain Solutions Architect',
    date: '2023-12-20',
    duration: '50 minutes',
    category: 'Blockchain',
    icon: Database,
    views: 1654,
    color: 'from-teal-500 to-cyan-600'
  }
];

export default function WebinarsPage() {
  return (
    <MainLayout 
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars covering AI, cloud computing, cybersecurity, and digital transformation trends."
      keywords="webinars, online events, technology training, AI webinars, cloud computing, cybersecurity"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Video className="w-12 h-12 text-purple-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Expert
                  <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Webinars
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our expert-led webinars and stay ahead of the latest technology trends. 
                Learn from industry leaders and get practical insights for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Custom Webinar
                </Link>
                <Link href="/newsletter" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Subscribe for Updates
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our upcoming webinars and learn from industry experts about the latest 
                technology trends and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className={`h-2 bg-gradient-to-r ${webinar.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${webinar.color} rounded-lg flex items-center justify-center mr-3`}>
                        <webinar.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {webinar.description}
                    </p>

                    <div className="flex items-center mb-4">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <div>
                        <div className="font-medium text-gray-900">{webinar.speaker}</div>
                        <div className="text-sm text-gray-600">{webinar.speakerTitle}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(webinar.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center">
                        <span>{webinar.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">{webinar.attendees}</span> registered
                      </div>
                    </div>

                    <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 font-medium group">
                      <Calendar className="w-4 h-4 mr-2" />
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Past Webinars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access recordings of our previous webinars and continue learning 
                from our expert sessions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${webinar.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-8 h-8 bg-gradient-to-r ${webinar.color} rounded-lg flex items-center justify-center mr-3`}>
                        <webinar.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {webinar.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        <span>{webinar.speaker}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(webinar.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Play className="w-3 h-3 mr-1" />
                        <span>{webinar.views} views</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 text-sm font-medium">
                        <Play className="w-3 h-3 mr-1" />
                        Watch
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300">
                        <Download className="w-3 h-3" />
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300">
                        <Share2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Partner with us to host your own webinar and share your expertise 
                with our community of technology professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Partner With Us
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Learn About Our Platform
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}