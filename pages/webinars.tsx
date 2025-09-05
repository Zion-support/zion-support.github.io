import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Play, 
  ArrowRight,
  ExternalLink,
  Download,
  Share2,
  BookOpen,
  Brain,
  Cloud,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';

const upcomingWebinars = [
  {
    id: 1,
    title: 'AI in Healthcare: Transforming Patient Care',
    description: 'Learn how artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes.',
    speaker: 'Dr. Sarah Chen',
    speakerTitle: 'Chief Medical Officer, HealthTech Solutions',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    category: 'Healthcare AI',
    image: '/webinars/healthcare-ai.jpg',
    icon: Brain,
    registrationUrl: '#',
    isLive: false
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Discover proven strategies for successful cloud migration and optimization.',
    speaker: 'Michael Rodriguez',
    speakerTitle: 'Senior Cloud Architect, Zion Tech Group',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    category: 'Cloud Computing',
    image: '/webinars/cloud-migration.jpg',
    icon: Cloud,
    registrationUrl: '#',
    isLive: false
  },
  {
    id: 3,
    title: 'Cybersecurity Trends 2024',
    description: 'Stay ahead of emerging threats with the latest cybersecurity trends and solutions.',
    speaker: 'Alex Thompson',
    speakerTitle: 'Cybersecurity Expert, SecureTech Inc.',
    date: '2024-02-28',
    time: '1:00 PM EST',
    duration: '50 minutes',
    category: 'Cybersecurity',
    image: '/webinars/cybersecurity.jpg',
    icon: Shield,
    registrationUrl: '#',
    isLive: false
  }
];

const pastWebinars = [
  {
    id: 4,
    title: 'Micro SaaS Development: From Idea to Market',
    description: 'Learn how to build and launch successful micro SaaS applications.',
    speaker: 'Jennifer Lee',
    speakerTitle: 'Product Manager, SaaS Solutions',
    date: '2024-01-15',
    duration: '55 minutes',
    category: 'SaaS Development',
    image: '/webinars/micro-saas.jpg',
    icon: BookOpen,
    recordingUrl: '#',
    slidesUrl: '#'
  },
  {
    id: 5,
    title: 'Digital Transformation in Manufacturing',
    description: 'Explore how Industry 4.0 technologies are transforming manufacturing operations.',
    speaker: 'David Park',
    speakerTitle: 'IoT Solutions Architect',
    date: '2024-01-08',
    duration: '65 minutes',
    category: 'Manufacturing',
    image: '/webinars/manufacturing.jpg',
    icon: BookOpen,
    recordingUrl: '#',
    slidesUrl: '#'
  }
];

const categories = [
  { name: 'All', count: upcomingWebinars.length + pastWebinars.length },
  { name: 'Healthcare AI', count: upcomingWebinars.filter(w => w.category === 'Healthcare AI').length },
  { name: 'Cloud Computing', count: upcomingWebinars.filter(w => w.category === 'Cloud Computing').length },
  { name: 'Cybersecurity', count: upcomingWebinars.filter(w => w.category === 'Cybersecurity').length },
  { name: 'SaaS Development', count: pastWebinars.filter(w => w.category === 'SaaS Development').length },
  { name: 'Manufacturing', count: pastWebinars.filter(w => w.category === 'Manufacturing').length }
];

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [activeTab, setActiveTab] = React.useState('upcoming');

  const filteredUpcoming = selectedCategory === 'All' 
    ? upcomingWebinars 
    : upcomingWebinars.filter(w => w.category === selectedCategory);

  const filteredPast = selectedCategory === 'All' 
    ? pastWebinars 
    : pastWebinars.filter(w => w.category === selectedCategory);

  return (
    <Layout 
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on AI, cloud computing, cybersecurity, and digital transformation. Learn from industry leaders and stay ahead of technology trends."
      keywords="webinars, technology education, AI training, cloud computing, cybersecurity, digital transformation, online learning"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert Webinars
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Learn from industry experts and stay ahead of technology trends with our comprehensive webinar series.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'upcoming'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Upcoming Webinars
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'past'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Past Webinars
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Webinars Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {activeTab === 'upcoming' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUpcoming.map((webinar, index) => {
                  const IconComponent = webinar.icon;
                  return (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative">
                        <IconComponent className="w-16 h-16 text-white" />
                        {webinar.isLive && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            LIVE
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {webinar.category}
                          </span>
                          <span className="text-sm text-gray-500">{webinar.duration}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {webinar.description}
                        </p>
                        
                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span className="font-medium">{webinar.speaker}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(webinar.date).toLocaleDateString()} at {webinar.time}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <a
                            href={webinar.registrationUrl}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                          >
                            Register Now
                          </a>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {activeTab === 'past' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPast.map((webinar, index) => {
                  const IconComponent = webinar.icon;
                  return (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="h-48 bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center relative">
                        <IconComponent className="w-16 h-16 text-white" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                            {webinar.category}
                          </span>
                          <span className="text-sm text-gray-500">{webinar.duration}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {webinar.description}
                        </p>
                        
                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span className="font-medium">{webinar.speaker}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(webinar.date).toLocaleDateString()}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <a
                            href={webinar.recordingUrl}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                          >
                            Watch Recording
                          </a>
                          <a
                            href={webinar.slidesUrl}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            title="Download Slides"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {((activeTab === 'upcoming' && filteredUpcoming.length === 0) || 
              (activeTab === 'past' && filteredPast.length === 0)) && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <BookOpen className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No webinars found</h3>
                <p className="text-gray-600">Try selecting a different category or check back later for new webinars.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming webinars and the latest technology insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/newsletter"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Subscribe to Newsletter
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Request a Topic
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}