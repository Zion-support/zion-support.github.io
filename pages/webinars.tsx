import React from 'react';
import Layout from '../components/Layout';
import { Calendar, Clock, Users, Play, ArrowRight, CheckCircle } from 'lucide-react';

const upcomingWebinars = [
  {
    title: 'AI in Healthcare: Transforming Patient Care',
    date: 'March 15, 2024',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Johnson, AI Research Director',
    description: 'Learn how artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes.',
    topics: ['Medical AI Applications', 'Diagnostic Accuracy', 'Patient Experience', 'Implementation Strategies'],
    attendees: 150,
    status: 'upcoming'
  },
  {
    title: 'Cloud Migration Best Practices',
    date: 'March 22, 2024',
    time: '1:00 PM EST',
    duration: '45 minutes',
    speaker: 'Michael Chen, Cloud Solutions Architect',
    description: 'Discover proven strategies for successful cloud migration and optimization.',
    topics: ['Migration Planning', 'Cost Optimization', 'Security Considerations', 'Performance Monitoring'],
    attendees: 200,
    status: 'upcoming'
  },
  {
    title: 'Cybersecurity Trends 2024',
    date: 'March 29, 2024',
    time: '3:00 PM EST',
    duration: '50 minutes',
    speaker: 'Jennifer Martinez, Security Expert',
    description: 'Stay ahead of the latest cybersecurity threats and protection strategies.',
    topics: ['Threat Landscape', 'Zero Trust Architecture', 'Compliance Requirements', 'Incident Response'],
    attendees: 180,
    status: 'upcoming'
  }
];

const pastWebinars = [
  {
    title: 'Digital Transformation Strategies',
    date: 'February 28, 2024',
    duration: '55 minutes',
    speaker: 'David Thompson, Digital Transformation Lead',
    description: 'Comprehensive guide to digital transformation for modern businesses.',
    topics: ['Strategy Development', 'Technology Selection', 'Change Management', 'ROI Measurement'],
    attendees: 250,
    status: 'past',
    recording: true
  },
  {
    title: 'Data Analytics for Business Growth',
    date: 'February 15, 2024',
    duration: '60 minutes',
    speaker: 'Lisa Wang, Data Analytics Director',
    description: 'How to leverage data analytics to drive business growth and decision-making.',
    topics: ['Data Strategy', 'Analytics Tools', 'Business Intelligence', 'Predictive Analytics'],
    attendees: 300,
    status: 'past',
    recording: true
  }
];

export default function WebinarsPage() {
  return (
    <Layout
      title="Webinars - Zion Tech Group"
      description="Join our educational webinars on technology trends, best practices, and industry insights. Learn from experts and stay ahead of the curve."
      keywords="webinars, technology education, industry insights, best practices, expert sessions, online learning"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Educational Webinars
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Learn from industry experts and stay ahead of technology trends with our comprehensive 
                webinar series covering the latest in AI, cloud, cybersecurity, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our upcoming sessions and learn from industry experts
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Upcoming
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {webinar.attendees} registered
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{webinar.title}</h3>
                  <p className="text-gray-600 mb-6">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {webinar.time} ({webinar.duration})
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {webinar.speaker}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {webinar.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Past Webinars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access recordings of our previous educational sessions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {pastWebinars.map((webinar, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      Past Event
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {webinar.attendees} attended
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {webinar.speaker}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Play className="h-4 w-4 mr-2" />
                      Recording Available
                    </div>
                    <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                      Watch Recording
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Webinars
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming webinars and educational content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}