<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
=======
import Head from 'next/head';
>>>>>>> pr-11913
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
<<<<<<< HEAD
  Users, 
  ArrowRight, 
  Play, 
  Download 
=======
  User, 
  Play,
  ChevronUp
>>>>>>> pr-11913
} from 'lucide-react';
import Layout from '../components/Layout';

<<<<<<< HEAD
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
<<<<<<< HEAD
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Webinars</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts.
              </p>
            </motion.div>
          </div>
        </section>
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
      id: 1,,
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
      id: 2,,
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
      id: 3,,
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
      id: 4,,
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
      id: 5,,
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
      id: 6,,
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
=======
>>>>>>> pr-11914
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Educational{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Webinars
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn from industry experts through our comprehensive webinar series. 
                Covering AI, cloud solutions, cybersecurity, and more.
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Webinars</h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts.
>>>>>>> pr-11914
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
=======
const webinars = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise',
    description: 'Join us for an in-depth discussion about how AI is transforming enterprise operations.',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '1 hour',
    speaker: 'Dr. Sarah Johnson',
    attendees: 1250,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices',
    description: 'Learn about the latest security practices for cloud environments.',
    date: '2024-02-20',
    time: '3:00 PM EST',
    duration: '45 minutes',
    speaker: 'Mike Chen',
    attendees: 890,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: 'Building Scalable Microservices',
    description: 'Discover how to design and implement scalable microservices architectures.',
    date: '2024-02-25',
    time: '1:00 PM EST',
    duration: '1.5 hours',
    speaker: 'Alex Rodriguez',
    attendees: 2100,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 4,
    title: 'Data Science in Production',
    description: 'Learn how to deploy and maintain data science models in production environments.',
    date: '2024-03-01',
    time: '4:00 PM EST',
    duration: '1 hour',
    speaker: 'Dr. Lisa Wang',
    attendees: 1650,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 5,
    title: 'DevOps Culture and Practices',
    description: 'Explore the cultural and technical aspects of successful DevOps implementation.',
    date: '2024-03-05',
    time: '2:30 PM EST',
    duration: '1 hour',
    speaker: 'David Kim',
    attendees: 980,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 6,
    title: 'Mobile App Performance Optimization',
    description: 'Best practices for optimizing mobile app performance and user experience.',
    date: '2024-03-10',
    time: '3:30 PM EST',
    duration: '45 minutes',
    speaker: 'Maria Garcia',
    attendees: 1450,
    thumbnail: '/api/placeholder/300/200'
  }
];

const categories = [
  'AI & Machine Learning',
  'Cloud Computing',
  'DevOps',
  'Data Science',
  'Mobile Development',
  'Web Development'
];

export default function Webinars() {
  return (
    <Layout>
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our expert-led webinars and learn from industry professionals." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
>>>>>>> pr-11913
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Webinars
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our expert-led webinars and learn from industry professionals.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Upcoming Webinars
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webinars.map((webinar, index) => (
                  <motion.div
                    key={webinar.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-video bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      
                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {webinar.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {webinar.time} ({webinar.duration})
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {webinar.speaker}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">
                          {webinar.attendees} attendees
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Stay Updated
              </h2>
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming webinars, 
                new content, and exclusive learning opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming webinars.
=======
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter to get notified about upcoming webinars and events.
>>>>>>> pr-11913
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
<<<<<<< HEAD
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
>>>>>>> pr-11914
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
<<<<<<< HEAD
    </MainLayout>
=======
>>>>>>> pr-11914
=======
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}