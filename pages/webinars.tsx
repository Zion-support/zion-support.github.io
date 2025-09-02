import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, Clock, Users, Play, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';

const Webinars: NextPage = () => {
  const webinars = [
    {
      id: 1,
      title: 'AI Implementation Strategies for Small Businesses',
      description: 'Learn how to leverage artificial intelligence to streamline operations and improve efficiency in your small business.',
      speaker: 'Dr. Sarah Johnson',
      speakerTitle: 'AI Solutions Architect',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      attendees: '1,250',
      category: 'Artificial Intelligence',
      image: '/webinars/ai-small-business.jpg',
      href: '/webinars/ai-implementation-small-business',
      isUpcoming: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices and Common Pitfalls',
      description: 'Expert insights on planning and executing successful cloud migration projects while avoiding costly mistakes.',
      speaker: 'Michael Chen',
      speakerTitle: 'Cloud Solutions Expert',
      date: '2024-02-08',
      time: '3:00 PM EST',
      duration: '45 minutes',
      attendees: '980',
      category: 'Cloud Computing',
      image: '/webinars/cloud-migration.jpg',
      href: '/webinars/cloud-migration-best-practices',
      isUpcoming: false
    },
    {
      id: 3,
      title: 'Cybersecurity Trends and Threat Prevention 2024',
      description: 'Stay ahead of emerging cybersecurity threats and learn the latest defense strategies for your organization.',
      speaker: 'Alex Rodriguez',
      speakerTitle: 'Cybersecurity Specialist',
      date: '2024-01-25',
      time: '1:00 PM EST',
      duration: '50 minutes',
      attendees: '1,150',
      category: 'Cybersecurity',
      image: '/webinars/cybersecurity-trends.jpg',
      href: '/webinars/cybersecurity-trends-2024',
      isUpcoming: false
    },
    {
      id: 4,
      title: 'Building Profitable Micro SaaS Products',
      description: 'Discover the secrets to creating and scaling successful micro SaaS solutions in competitive markets.',
      speaker: 'Emily Davis',
      speakerTitle: 'SaaS Development Lead',
      date: '2024-01-18',
      time: '2:30 PM EST',
      duration: '55 minutes',
      attendees: '850',
      category: 'SaaS Development',
      image: '/webinars/micro-saas.jpg',
      href: '/webinars/building-profitable-micro-saas',
      isUpcoming: false
    },
    {
      id: 5,
      title: 'Data Analytics for Business Decision Making',
      description: 'Learn how to transform raw data into actionable insights that drive better business decisions.',
      speaker: 'David Kim',
      speakerTitle: 'Data Analytics Consultant',
      date: '2024-01-11',
      time: '4:00 PM EST',
      duration: '40 minutes',
      attendees: '720',
      category: 'Data Analytics',
      image: '/webinars/data-analytics.jpg',
      href: '/webinars/data-analytics-decision-making',
      isUpcoming: false
    },
    {
      id: 6,
      title: 'DevOps Automation: Streamlining Your Pipeline',
      description: 'Explore advanced DevOps practices and automation tools to accelerate your software delivery process.',
      speaker: 'Lisa Wang',
      speakerTitle: 'DevOps Engineer',
      date: '2024-01-04',
      time: '3:30 PM EST',
      duration: '65 minutes',
      attendees: '1,100',
      category: 'DevOps',
      image: '/webinars/devops-automation.jpg',
      href: '/webinars/devops-automation-pipeline',
      isUpcoming: false
    }
  ];

  const categories = [
    'All Topics',
    'Artificial Intelligence',
    'Cloud Computing',
    'Cybersecurity',
    'SaaS Development',
    'Data Analytics',
    'DevOps'
  ];

  const upcomingWebinars = webinars.filter(webinar => webinar.isUpcoming);
  const pastWebinars = webinars.filter(webinar => !webinar.isUpcoming);

  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on the latest technology trends, best practices, and industry insights. Learn from industry leaders and connect with peers."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Webinars</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Join our expert-led webinars on the latest technology trends, best practices, and industry insights. 
            Learn from industry leaders and connect with peers.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search webinars..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      {upcomingWebinars.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
              <p className="text-gray-600">Register for our upcoming expert-led sessions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Upcoming
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{webinar.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-700"><strong>Speaker:</strong> {webinar.speaker}</p>
                      <p className="text-sm text-gray-500">{webinar.speakerTitle}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(webinar.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{webinar.time}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={webinar.href}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Register Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Webinars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Webinars</h2>
            <p className="text-gray-600">Watch recordings of our previous expert sessions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar) => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {webinar.category}
                    </span>
                    <span className="text-gray-500 text-sm">{webinar.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{webinar.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-700"><strong>Speaker:</strong> {webinar.speaker}</p>
                    <p className="text-sm text-gray-500">{webinar.speakerTitle}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{webinar.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <Link
                    href={webinar.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Recording
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Webinar
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to receive notifications about upcoming webinars and access to exclusive content.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Webinars;