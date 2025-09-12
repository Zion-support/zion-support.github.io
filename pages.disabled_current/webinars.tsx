<<<<<<< HEAD
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  Play, 
  Download 
} from 'lucide-react';

const upcomingWebinars = [
  {
    title: 'AI in Enterprise: Best Practices',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    attendees: 150,
    description: 'Learn how to implement AI solutions in your enterprise environment.'
  },
  {
    title: 'Cloud Migration Strategies',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    attendees: 200,
    description: 'Discover the best practices for migrating to the cloud.'
  },
  {
    title: 'Cybersecurity Trends 2024',
    date: '2024-03-01',
    time: '1:00 PM EST',
    duration: '90 minutes',
    attendees: 300,
    description: 'Stay ahead of the latest cybersecurity threats and solutions.'
  }
];

export default function WebinarsPage() {
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  return (
    <>
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our educational webinars and learn from industry experts." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
import {
  Play,
  Calendar,
  Clock,
  Users,
  ExternalLink,
  ArrowRight,
  Filter,
  Search,
  Star,
  BookOpen,
  Video,
  Download
} from 'lucide-react';

export default function WebinarsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Webinars' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Development' },
    { id: 'business', name: 'Business Strategy' }
  ];

  const webinars = [
    {
      id: 1,
      title: 'Introduction to AI and Machine Learning',
      description: 'Learn the fundamentals of AI and ML, including key concepts, applications, and implementation strategies for your business.',
      category: 'ai',
      date: '2024-01-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      attendees: 1250,
      speaker: 'Dr. Sarah Johnson',
      speakerTitle: 'AI Research Director',
      image: '/api/placeholder/400/250',
      videoUrl: '#',
      slidesUrl: '#',
      isLive: false,
      isUpcoming: true,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Discover proven strategies for migrating your infrastructure to the cloud while minimizing downtime and maximizing efficiency.',
      category: 'cloud',
      date: '2024-01-22',
      time: '3:00 PM EST',
      duration: '45 minutes',
      attendees: 980,
      speaker: 'Mike Chen',
      speakerTitle: 'Cloud Solutions Architect',
      image: '/api/placeholder/400/250',
      videoUrl: '#',
      slidesUrl: '#',
      isLive: false,
      isUpcoming: true,
      rating: 4.9
    },
    {
      id: 3,
      title: 'Cybersecurity in the Digital Age',
      description: 'Explore the latest cybersecurity threats and learn how to protect your organization with modern security practices.',
      category: 'security',
      date: '2024-01-08',
      time: '1:00 PM EST',
      duration: '75 minutes',
      attendees: 2100,
      speaker: 'Alex Rodriguez',
      speakerTitle: 'Chief Security Officer',
      image: '/api/placeholder/400/250',
      videoUrl: '#',
      slidesUrl: '#',
      isLive: false,
      isUpcoming: false,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications',
      description: 'Learn how to design and build web applications that can handle millions of users with modern development practices.',
      category: 'development',
      date: '2024-01-29',
      time: '4:00 PM EST',
      duration: '90 minutes',
      attendees: 0,
      speaker: 'Emily Watson',
      speakerTitle: 'Senior Full-Stack Developer',
      image: '/api/placeholder/400/250',
      videoUrl: '#',
      slidesUrl: '#',
      isLive: true,
      isUpcoming: false,
      rating: 0
    },
    {
      id: 5,
      title: 'Digital Transformation Strategy',
      description: 'Understand how to create and execute a successful digital transformation strategy for your organization.',
      category: 'business',
      date: '2024-02-05',
      time: '2:30 PM EST',
      duration: '60 minutes',
      attendees: 0,
      speaker: 'David Kim',
      speakerTitle: 'Digital Transformation Consultant',
      image: '/api/placeholder/400/250',
      videoUrl: '#',
      slidesUrl: '#',
      isLive: false,
      isUpcoming: true,
      rating: 0
    },
    {
      id: 6,
      title: 'Advanced AI Implementation',
      description: 'Deep dive into advanced AI techniques and learn how to implement complex AI solutions in production environments.',
      category: 'ai',
      date: '2023-12-20',
      time: '3:30 PM EST',
      duration: '120 minutes',
      attendees: 1850,
      speaker: 'Dr. Sarah Johnson',
      speakerTitle: 'AI Research Director',
      image: '/api/placeholder/400/250',
      videoUrl: '#',
      slidesUrl: '#',
      isLive: false,
      isUpcoming: false,
      rating: 4.9
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const upcomingWebinars = webinars.filter(webinar => webinar.isUpcoming);
  const liveWebinars = webinars.filter(webinar => webinar.isLive);
  const pastWebinars = webinars.filter(webinar => !webinar.isUpcoming && !webinar.isLive);

  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our educational webinars on AI, cloud solutions, cybersecurity, and more. Learn from industry experts and advance your technical knowledge."
      keywords="webinars, AI training, cloud education, cybersecurity, technology learning, online courses"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Webinars</h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Webinars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Register for our upcoming educational sessions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-indigo-600 mr-2" />
                    <span className="text-sm text-gray-500">{webinar.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {webinar.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {webinar.attendees} registered
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Webinars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access recordings and materials from our previous webinars.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Play className="w-6 h-6 text-indigo-600 mr-2" />
                  <span className="text-sm text-gray-500">Recording Available</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Introduction to Machine Learning</h3>
                <p className="text-gray-600 mb-4">Learn the basics of machine learning and AI</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    75 minutes
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Watch Now
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Download className="w-6 h-6 text-indigo-600 mr-2" />
                  <span className="text-sm text-gray-500">Materials Available</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Security Best Practices</h3>
                <p className="text-gray-600 mb-4">Secure your cloud infrastructure effectively</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    90 minutes
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming webinars.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/newsletter"
                  className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold"
                >
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