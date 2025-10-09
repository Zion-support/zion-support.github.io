'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Video, Download, BookOpen, Users, Calendar, ArrowRight } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: 'Documentation',
      items: [
        {
          title: 'API Documentation',
          description: 'Complete API reference for all our services and endpoints.',
          icon: <FileText className="w-8 h-8 text-blue-500" />,
          type: 'Documentation',
          link: '/api-docs'
        },
        {
          title: 'Integration Guide',
          description: 'Step-by-step guide to integrate our services with your existing systems.',
          icon: <BookOpen className="w-8 h-8 text-green-500" />,
          type: 'Guide',
          link: '/docs'
        },
        {
          title: 'Best Practices',
          description: 'Industry best practices for AI implementation and data security.',
          icon: <FileText className="w-8 h-8 text-purple-500" />,
          type: 'Guide',
          link: '/best-practices'
        }
      ]
    },
    {
      category: 'Learning Resources',
      items: [
        {
          title: 'Video Tutorials',
          description: 'Comprehensive video tutorials covering all aspects of our platform.',
          icon: <Video className="w-8 h-8 text-red-500" />,
          type: 'Video',
          link: '/tutorials'
        },
        {
          title: 'Webinars',
          description: 'Live and recorded webinars on AI trends and implementation strategies.',
          icon: <Users className="w-8 h-8 text-orange-500" />,
          type: 'Webinar',
          link: '/webinars'
        },
        {
          title: 'Case Studies',
          description: 'Real-world case studies showcasing successful AI implementations.',
          icon: <FileText className="w-8 h-8 text-indigo-500" />,
          type: 'Case Study',
          link: '/case-studies'
        }
      ]
    },
    {
      category: 'Tools & Downloads',
      items: [
        {
          title: 'SDK Downloads',
          description: 'Software development kits for various programming languages.',
          icon: <Download className="w-8 h-8 text-cyan-500" />,
          type: 'SDK',
          link: '/downloads'
        },
        {
          title: 'Sample Code',
          description: 'Ready-to-use code samples and templates for quick implementation.',
          icon: <FileText className="w-8 h-8 text-yellow-500" />,
          type: 'Code',
          link: '/samples'
        },
        {
          title: 'Configuration Templates',
          description: 'Pre-configured templates for common use cases and scenarios.',
          icon: <FileText className="w-8 h-8 text-pink-500" />,
          type: 'Template',
          link: '/templates'
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Healthcare: Future Trends',
      date: 'March 15, 2024',
      time: '2:00 PM EST',
      type: 'Webinar',
      description: 'Explore the latest AI applications in healthcare and their impact on patient care.'
    },
    {
      title: 'Building Scalable AI Systems',
      date: 'March 22, 2024',
      time: '3:00 PM EST',
      type: 'Workshop',
      description: 'Learn how to design and implement AI systems that can scale with your business.'
    },
    {
      title: 'Data Privacy & AI Compliance',
      date: 'March 29, 2024',
      time: '1:00 PM EST',
      type: 'Seminar',
      description: 'Understanding regulatory requirements and best practices for AI data handling.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Comprehensive resources including documentation, tutorials, webinars, and tools to help you succeed with AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to succeed with AI and IT solutions - documentation, tutorials, tools, and more
            </p>
          </section>

          {/* Resources by Category */}
          <section className="mb-16">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        {item.icon}
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <a
                        href={item.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Access Resource
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Upcoming Events</h2>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.date}
                          </div>
                          <div>{event.time}</div>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is here to help you make the most of our resources and services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Support
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ResourcesPage;
