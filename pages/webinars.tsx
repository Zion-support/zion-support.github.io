import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  Video,
  BookOpen,
  Award,
  Globe,
  Zap,
  Target,
  Brain
} from 'lucide-react';

const upcomingWebinars = [
  {
    id: 1,
    title: 'AI Revolution in Business: Practical Implementation Strategies',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Johnson',
    speakerTitle: 'CTO, Zion Tech Group',
    description: 'Learn how to implement AI solutions in your business with real-world case studies and practical strategies.',
    topics: ['AI Strategy', 'Implementation', 'ROI Measurement', 'Best Practices'],
    price: 'Free',
    attendees: 1250,
    rating: 4.9,
    image: '/webinar-ai.jpg'
  },
  {
    id: 2,
    title: 'Cloud Migration: From Planning to Execution',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    speaker: 'Michael Rodriguez',
    speakerTitle: 'Cloud Solutions Architect',
    description: 'Comprehensive guide to migrating your infrastructure to the cloud with minimal downtime.',
    topics: ['Cloud Strategy', 'Migration Planning', 'Security', 'Cost Optimization'],
    price: 'Free',
    attendees: 890,
    rating: 4.8,
    image: '/webinar-cloud.jpg'
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for Modern Businesses',
    date: '2024-03-01',
    time: '1:00 PM EST',
    duration: '50 minutes',
    speaker: 'Alex Thompson',
    speakerTitle: 'Head of Security',
    description: 'Essential cybersecurity strategies to protect your business from evolving threats.',
    topics: ['Threat Detection', 'Incident Response', 'Compliance', 'Employee Training'],
    price: 'Free',
    attendees: 2100,
    rating: 4.9,
    image: '/webinar-security.jpg'
  }
];

const pastWebinars = [
  {
    id: 4,
    title: 'Digital Transformation: A Complete Guide',
    date: '2024-01-15',
    duration: '55 minutes',
    speaker: 'Emily Chen',
    speakerTitle: 'Head of Engineering',
    description: 'Comprehensive overview of digital transformation strategies and implementation.',
    topics: ['Strategy', 'Technology', 'Change Management', 'Success Metrics'],
    attendees: 1800,
    rating: 4.8,
    recording: true
  },
  {
    id: 5,
    title: 'Building Scalable Web Applications',
    date: '2024-01-08',
    duration: '65 minutes',
    speaker: 'David Kim',
    speakerTitle: 'Head of Design',
    description: 'Learn the principles of building web applications that can handle millions of users.',
    topics: ['Architecture', 'Performance', 'Scalability', 'Monitoring'],
    attendees: 1200,
    rating: 4.7,
    recording: true
  }
];

const benefits = [
  {
    icon: Brain,
    title: 'Expert Knowledge',
    description: 'Learn from industry experts with years of experience'
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with like-minded professionals and peers'
  },
  {
    icon: BookOpen,
    title: 'Practical Skills',
    description: 'Gain actionable insights you can apply immediately'
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Receive certificates of completion for your records'
  }
];

export default function Webinars() {
  return (
    <Layout 
      title="Webinars - Zion Tech Group"
      description="Join our free webinars to learn about the latest trends in AI, cloud computing, cybersecurity, and digital transformation."
      keywords="webinars, online training, AI webinars, cloud computing, cybersecurity, digital transformation, free training"
    >
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our free webinars to learn about the latest trends in AI, cloud computing, cybersecurity, and digital transformation." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Free Webinars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Learn from industry experts about the latest trends in technology, 
                AI, cloud computing, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Upcoming Webinars
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Watch Recordings
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Join Our Webinars?
              </h2>
              <p className="text-lg text-gray-600">
                Get valuable insights from industry leaders
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-lg text-gray-600">
                Register for our upcoming sessions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.price}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">{webinar.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4">{webinar.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} ({webinar.duration})
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} registered
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Speaker:</p>
                      <p className="text-sm text-gray-600">{webinar.speaker}</p>
                      <p className="text-xs text-gray-500">{webinar.speakerTitle}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {webinar.topics.map((topic, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Past Webinars
              </h2>
              <p className="text-lg text-gray-600">
                Watch recordings of our previous sessions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Video className="w-6 h-6 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-600">Recording Available</span>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{webinar.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.attendees} attendees
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Speaker:</p>
                    <p className="text-sm text-gray-600">{webinar.speaker}</p>
                    <p className="text-xs text-gray-500">{webinar.speakerTitle}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {webinar.topics.map((topic, idx) => (
                        <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Recording
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100">
              Subscribe to our newsletter to get notified about upcoming webinars and exclusive content.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-white text-blue-900 px-6 py-3 rounded-r-lg font-semibold hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}