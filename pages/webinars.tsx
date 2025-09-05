import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import {
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink,
  Play,
  Download,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Trends and Predictions",
    description: "Join our experts as they discuss the latest AI trends, emerging technologies, and how businesses can prepare for the future of artificial intelligence.",
    date: "2024-02-15",
    time: "2:00 PM EST",
    duration: "60 minutes",
    presenter: "Dr. Sarah Johnson, AI Strategy Director",
    category: "AI & Technology",
    status: "upcoming",
    registrationUrl: "/register-webinar",
    topics: [
      "AI Market Trends 2025",
      "Emerging AI Technologies",
      "Business Implementation Strategies",
      "ROI Measurement",
      "Q&A Session"
    ]
  },
  {
    id: 2,
    title: "Building Scalable Micro SaaS Products",
    description: "Learn how to build and scale micro SaaS products from idea to profitable business. Includes real case studies and actionable insights.",
    date: "2024-02-08",
    time: "3:00 PM EST",
    duration: "45 minutes",
    presenter: "Mike Chen, Product Director",
    category: "SaaS Development",
    status: "recorded",
    recordingUrl: "/webinar-recordings/micro-saas",
    topics: [
      "Market Research & Validation",
      "MVP Development",
      "Scaling Strategies",
      "Monetization Models",
      "Case Studies"
    ]
  },
  {
    id: 3,
    title: "Cloud Migration Best Practices",
    description: "Essential strategies for successful cloud migration. Learn from real-world examples and avoid common pitfalls.",
    date: "2024-01-25",
    time: "1:00 PM EST",
    duration: "50 minutes",
    presenter: "Alex Rodriguez, Cloud Architect",
    category: "Cloud Infrastructure",
    status: "recorded",
    recordingUrl: "/webinar-recordings/cloud-migration",
    topics: [
      "Migration Planning",
      "Security Considerations",
      "Cost Optimization",
      "Performance Monitoring",
      "Best Practices"
    ]
  }
];

const categories = [
  "All Categories",
  "AI & Technology",
  "SaaS Development", 
  "Cloud Infrastructure",
  "Digital Transformation"
];

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredWebinars = webinars.filter(webinar => 
    selectedCategory === "All Categories" || webinar.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our expert-led webinars on AI, technology, and business transformation. Learn from industry leaders and get actionable insights." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-16 h-16 text-purple-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Webinars
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Learn from experts, get insights, and stay ahead of technology trends
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Expert-Led Sessions
              </h2>
              <p className="text-lg text-gray-600">
                Join our webinars to learn from industry experts and get actionable insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                        {webinar.category}
                      </span>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        webinar.status === 'upcoming' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(webinar.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} • {webinar.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {webinar.presenter}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                      <ul className="space-y-1">
                        {webinar.topics.slice(0, 3).map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {topic}
                          </li>
                        ))}
                        {webinar.topics.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{webinar.topics.length - 3} more topics
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      {webinar.status === 'upcoming' ? (
                        <Link
                          href={webinar.registrationUrl}
                          className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center inline-flex items-center justify-center"
                        >
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      ) : (
                        <>
                          <Link
                            href={webinar.recordingUrl}
                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center"
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Watch
                          </Link>
                          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center">
                            <Download className="w-4 h-4" />
                          </button>
                        </>
                      )}
=======
import { 
  Video, 
  ArrowRight,
  Calendar,
  Clock,
  User,
  Play,
  ExternalLink,
  TrendingUp,
  Star,
  Globe,
  Zap,
  Shield,
  Building
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const webinars = [
  {
    title: "AI Revolution: Transforming Business Operations",
    description: "Learn how AI is revolutionizing business operations and how to implement AI solutions in your organization.",
    presenter: "Dr. Sarah Johnson",
    date: "2024-02-15",
    time: "2:00 PM EST",
    duration: "60 minutes",
    category: "AI & Machine Learning",
    attendees: 1250,
    featured: true,
    href: "/webinars/ai-revolution-business-operations"
  },
  {
    title: "Cloud Migration Strategies for Enterprise",
    description: "Best practices and strategies for successful cloud migration projects in enterprise environments.",
    presenter: "Michael Chen",
    date: "2024-02-10",
    time: "3:00 PM EST",
    duration: "45 minutes",
    category: "Cloud Computing",
    attendees: 980,
    featured: true,
    href: "/webinars/cloud-migration-strategies-enterprise"
  },
  {
    title: "Cybersecurity in the Modern Workplace",
    description: "Essential cybersecurity practices and strategies to protect your organization from modern threats.",
    presenter: "Lisa Wang",
    date: "2024-02-05",
    time: "1:00 PM EST",
    duration: "50 minutes",
    category: "Security",
    attendees: 750,
    featured: false,
    href: "/webinars/cybersecurity-modern-workplace"
  },
  {
    title: "Digital Transformation: A Practical Guide",
    description: "Step-by-step guide to planning and executing successful digital transformation initiatives.",
    presenter: "David Kim",
    date: "2024-01-30",
    time: "2:30 PM EST",
    duration: "55 minutes",
    category: "Digital Transformation",
    attendees: 1100,
    featured: false,
    href: "/webinars/digital-transformation-practical-guide"
  },
  {
    title: "IoT Implementation in Manufacturing",
    description: "How to successfully implement IoT solutions in manufacturing and industrial environments.",
    presenter: "Emily Rodriguez",
    date: "2024-01-25",
    time: "11:00 AM EST",
    duration: "40 minutes",
    category: "IoT & Manufacturing",
    attendees: 650,
    featured: false,
    href: "/webinars/iot-implementation-manufacturing"
  },
  {
    title: "Data Analytics for Business Intelligence",
    description: "Leverage data analytics to gain insights and make informed business decisions.",
    presenter: "James Wilson",
    date: "2024-01-20",
    time: "4:00 PM EST",
    duration: "50 minutes",
    category: "Data Analytics",
    attendees: 890,
    featured: false,
    href: "/webinars/data-analytics-business-intelligence"
  }
];

const upcomingWebinars = [
  {
    title: "Future of Work: Remote Collaboration Tools",
    description: "Explore the latest tools and technologies for effective remote collaboration.",
    presenter: "Maria Garcia",
    date: "2024-02-20",
    time: "2:00 PM EST",
    duration: "60 minutes",
    category: "Remote Work",
    href: "/webinars/future-work-remote-collaboration"
  },
  {
    title: "Blockchain Technology in Business",
    description: "Understanding blockchain technology and its practical applications in business.",
    presenter: "Alex Thompson",
    date: "2024-02-25",
    time: "3:30 PM EST",
    duration: "45 minutes",
    category: "Blockchain",
    href: "/webinars/blockchain-technology-business"
  },
  {
    title: "Machine Learning for Beginners",
    description: "Introduction to machine learning concepts and practical applications.",
    presenter: "Dr. Sarah Johnson",
    date: "2024-03-01",
    time: "1:00 PM EST",
    duration: "90 minutes",
    category: "AI & Machine Learning",
    href: "/webinars/machine-learning-beginners"
  }
];

const categories = [
  { name: "All Webinars", count: 25, active: true },
  { name: "AI & Machine Learning", count: 8, active: false },
  { name: "Cloud Computing", count: 6, active: false },
  { name: "Security", count: 5, active: false },
  { name: "Digital Transformation", count: 4, active: false },
  { name: "Data Analytics", count: 2, active: false }
];

const stats = [
  { number: '25+', label: "Webinars Available" },
  { number: '15K+', label: "Total Attendees" },
  { number: '95%', label: "Satisfaction Rate" },
  { number: '50+', label: "Industry Experts" }
];

export default function WebinarsPage() {
  return (
    <MainLayout 
      title="Webinars - Zion Tech Group"
      description="Join our educational webinars on AI, cloud computing, cybersecurity, and digital transformation. Learn from industry experts and stay ahead of technology trends."
      keywords="webinars, online events, AI webinars, cloud computing, cybersecurity, digital transformation, technology education, industry experts"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Webinars</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Join our expert-led webinars and stay ahead of technology trends. 
                Learn from industry leaders and gain practical insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="#featured-webinars"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Browse Webinars <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Request Custom Webinar
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Webinars Section */}
        <section id="featured-webinars" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Webinars</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and highly-rated webinars covering the latest 
                technology trends and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {webinars.filter(webinar => webinar.featured).map((webinar, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative">
                    <Video className="w-16 h-16 text-white opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {webinar.attendees} attendees
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {webinar.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="w-4 h-4 mr-2" />
                        {webinar.presenter}
                        <Calendar className="w-4 h-4 ml-4 mr-2" />
                        {new Date(webinar.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {webinar.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link 
                        href={webinar.href}
                        className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                      >
                        Watch Now <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Never Miss a Session
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Subscribe to get notified about upcoming webinars and exclusive content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Subscribe to Updates
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors inline-flex items-center justify-center"
                >
                  Request Custom Webinar
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
=======
          </div>
        </section>

        {/* Upcoming Webinars Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Webinars</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't miss our upcoming webinars. Register now to secure your spot.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {upcomingWebinars.map((webinar, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      {webinar.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(webinar.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {webinar.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {webinar.presenter}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {webinar.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link 
                      href={webinar.href}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                    >
                      Register Now <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <div className="text-gray-400 text-sm">
                      {webinar.time}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Webinars Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Webinars</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete collection of our educational webinars and recorded sessions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {webinar.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {webinar.attendees}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {webinar.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {webinar.presenter}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {webinar.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link 
                      href={webinar.href}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                    >
                      Watch Now <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with us to host educational webinars and share your expertise 
                with our community of technology professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Partner With Us <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/resources"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Browse All Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
  );
}