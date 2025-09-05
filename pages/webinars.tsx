import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, 
  Clock, 
  Users, 
  Play, 
  Download, 
  Share2, 
  ArrowRight,
  Star,
  Globe,
  BookOpen,
  Video,
  Mic,
  MessageSquare,
  ExternalLink,
  CheckCircle,
  Award,
  Target,
  Zap,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Settings,
  Code,
  Database,
  Network,
  Smartphone,
  Laptop,
  Server
} from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: "AI Revolution: Transforming Business Operations",
    description: "Learn how AI is revolutionizing business operations and how to implement AI solutions in your organization.",
    presenter: "Dr. Sarah Johnson",
    date: "2024-02-15",
    time: "2:00 PM EST",
    duration: "60 minutes",
    category: "AI & Machine Learning",
    level: "Intermediate",
    attendees: 1250,
    rating: 4.8,
    image: "/images/webinar-1.jpg",
    topics: [
      "AI implementation strategies",
      "ROI measurement for AI projects",
      "Common pitfalls and how to avoid them",
      "Future trends in AI"
    ],
    isLive: false,
    isUpcoming: true
  },
  {
    id: 2,
    title: "Cloud Migration Best Practices",
    description: "Comprehensive guide to migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.",
    presenter: "Michael Chen",
    date: "2024-01-28",
    time: "3:00 PM EST",
    duration: "45 minutes",
    category: "Cloud Computing",
    level: "Advanced",
    attendees: 980,
    rating: 4.9,
    image: "/images/webinar-2.jpg",
    topics: [
      "Migration planning and strategy",
      "Security considerations",
      "Cost optimization techniques",
      "Post-migration monitoring"
    ],
    isLive: false,
    isUpcoming: false
  },
  {
    id: 3,
    title: "Cybersecurity in the Digital Age",
    description: "Essential cybersecurity strategies to protect your business from evolving threats and ensure compliance.",
    presenter: "Emily Rodriguez",
    date: "2024-01-15",
    time: "1:00 PM EST",
    duration: "50 minutes",
    category: "Cybersecurity",
    level: "Beginner",
    attendees: 2100,
    rating: 4.7,
    image: "/images/webinar-3.jpg",
    topics: [
      "Threat landscape overview",
      "Security framework implementation",
      "Employee training best practices",
      "Incident response planning"
    ],
    isLive: false,
    isUpcoming: false
  },
  {
    id: 4,
    title: "Micro SaaS Development: From Idea to Launch",
    description: "Step-by-step guide to building and launching successful micro SaaS applications.",
    presenter: "David Kim",
    date: "2024-02-22",
    time: "4:00 PM EST",
    duration: "75 minutes",
    category: "Software Development",
    level: "Intermediate",
    attendees: 0,
    rating: 0,
    image: "/images/webinar-4.jpg",
    topics: [
      "Market research and validation",
      "Technical architecture decisions",
      "MVP development strategies",
      "Go-to-market planning"
    ],
    isLive: false,
    isUpcoming: true
  },
  {
    id: 5,
    title: "Data Analytics for Business Growth",
    description: "Leverage data analytics to drive business growth and make informed decisions.",
    presenter: "Lisa Wang",
    date: "2024-01-08",
    time: "2:30 PM EST",
    duration: "55 minutes",
    category: "Data Analytics",
    level: "Intermediate",
    attendees: 1450,
    rating: 4.6,
    image: "/images/webinar-5.jpg",
    topics: [
      "Data collection strategies",
      "Analytics tools and platforms",
      "Creating actionable insights",
      "Building data-driven culture"
    ],
    isLive: false,
    isUpcoming: false
  },
  {
    id: 6,
    title: "Live Q&A: Ask the Experts",
    description: "Join our panel of experts for an interactive Q&A session covering all aspects of technology and business.",
    presenter: "Panel Discussion",
    date: "2024-02-29",
    time: "3:30 PM EST",
    duration: "90 minutes",
    category: "General",
    level: "All Levels",
    attendees: 0,
    rating: 0,
    image: "/images/webinar-6.jpg",
    topics: [
      "Open Q&A format",
      "Technology trends discussion",
      "Industry insights",
      "Career advice"
    ],
    isLive: true,
    isUpcoming: true
  }
];

const categories = [
  { name: "AI & Machine Learning", count: 8, icon: Brain },
  { name: "Cloud Computing", count: 6, icon: Cloud },
  { name: "Cybersecurity", count: 5, icon: Shield },
  { name: "Data Analytics", count: 4, icon: BarChart3 },
  { name: "Software Development", count: 7, icon: Code },
  { name: "General", count: 3, icon: Globe }
];

const upcomingWebinars = webinars.filter(webinar => webinar.isUpcoming);
const pastWebinars = webinars.filter(webinar => !webinar.isUpcoming);

export default function WebinarsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Webinars & Events
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join our expert-led webinars and events to learn about the latest trends, 
                technologies, and best practices in the industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find webinars and events that match your interests and expertise level.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-600">{category.count} webinars</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't miss our upcoming webinars. Register now to secure your spot.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Video className="w-16 h-16 text-white" />
                    </div>
                    {webinar.isLive && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        LIVE
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {webinar.level}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{webinar.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{webinar.presenter}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{webinar.date} at {webinar.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{webinar.duration}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Topics Covered:</h4>
                      <ul className="space-y-1">
                        {webinar.topics.slice(0, 3).map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-xs text-gray-700">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      webinar.isLive 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}>
                      {webinar.isLive ? 'Join Live' : 'Register Now'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Past Webinars
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Missed a webinar? Watch the recordings and access the resources from our past events.
              </p>
            </motion.div>

            <div className="space-y-6">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold mr-3">
                          {webinar.category}
                        </span>
                        <span className="text-sm text-gray-600">{webinar.level}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{webinar.presenter}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{webinar.attendees} attendees</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          <span>{webinar.rating}/5</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                      <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Play className="w-4 h-4 mr-2" />
                        Watch
                      </button>
                      <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                      <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming webinars, 
                events, and the latest industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}