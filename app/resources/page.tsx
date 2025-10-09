'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Download, ExternalLink, FileText, Video, BookOpen, Users, Calendar, Star } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Documentation',
      icon: FileText,
      color: 'blue',
      resources: [
        {
          title: 'API Documentation',
          description: 'Complete API reference with examples and integration guides',
          type: 'Documentation',
          link: '/api-docs',
          isExternal: false
        },
        {
          title: 'Developer Guide',
          description: 'Step-by-step guide for developers and technical teams',
          type: 'Guide',
          link: '/docs',
          isExternal: false
        },
        {
          title: 'Security Best Practices',
          description: 'Comprehensive security guidelines and compliance standards',
          type: 'Security',
          link: '/security',
          isExternal: false
        },
        {
          title: 'Deployment Guide',
          description: 'Production deployment and scaling best practices',
          type: 'Deployment',
          link: '/deployment-guide',
          isExternal: false
        }
      ]
    },
    {
      title: 'Learning Resources',
      icon: BookOpen,
      color: 'green',
      resources: [
        {
          title: 'AI Fundamentals Course',
          description: 'Free online course covering AI basics and applications',
          type: 'Course',
          link: '/ai-fundamentals-course',
          isExternal: false
        },
        {
          title: 'Webinar Series',
          description: 'Monthly webinars on AI trends and industry insights',
          type: 'Webinar',
          link: '/webinars',
          isExternal: false
        },
        {
          title: 'White Papers',
          description: 'In-depth research papers on AI and technology trends',
          type: 'Research',
          link: '/white-papers',
          isExternal: false
        },
        {
          title: 'Tutorial Videos',
          description: 'Step-by-step video tutorials for our platforms',
          type: 'Video',
          link: '/tutorials',
          isExternal: false
        }
      ]
    },
    {
      title: 'Tools & Templates',
      icon: Download,
      color: 'purple',
      resources: [
        {
          title: 'AI Project Templates',
          description: 'Ready-to-use templates for AI project planning and execution',
          type: 'Template',
          link: '/ai-templates',
          isExternal: false
        },
        {
          title: 'ROI Calculator',
          description: 'Calculate potential ROI for your AI implementation',
          type: 'Tool',
          link: '/roi-calculator',
          isExternal: false
        },
        {
          title: 'Security Checklist',
          description: 'Comprehensive security checklist for AI implementations',
          type: 'Checklist',
          link: '/security-checklist',
          isExternal: false
        },
        {
          title: 'Integration Kits',
          description: 'SDKs and integration kits for popular platforms',
          type: 'SDK',
          link: '/integration-kits',
          isExternal: false
        }
      ]
    },
    {
      title: 'Community',
      icon: Users,
      color: 'orange',
      resources: [
        {
          title: 'Developer Community',
          description: 'Join our developer community for support and collaboration',
          type: 'Community',
          link: '/community',
          isExternal: false
        },
        {
          title: 'Support Forum',
          description: 'Get help from our technical support team and community',
          type: 'Support',
          link: '/support',
          isExternal: false
        },
        {
          title: 'GitHub Repository',
          description: 'Open source projects and code examples',
          type: 'Code',
          link: 'https://github.com/ziontechgroup',
          isExternal: true
        },
        {
          title: 'Slack Channel',
          description: 'Real-time chat with our team and community members',
          type: 'Chat',
          link: '/slack',
          isExternal: false
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Enterprise Transformation Guide 2025',
      description: 'Comprehensive guide to implementing AI in enterprise environments',
      type: 'Guide',
      rating: 4.9,
      downloads: '2.5K',
      link: '/ai-enterprise-guide-2025',
      isNew: true
    },
    {
      title: 'Quantum Computing Primer',
      description: 'Introduction to quantum computing and its business applications',
      type: 'Research',
      rating: 4.8,
      downloads: '1.8K',
      link: '/quantum-computing-primer',
      isNew: false
    },
    {
      title: 'AI Security Best Practices',
      description: 'Essential security guidelines for AI implementations',
      type: 'Security',
      rating: 4.9,
      downloads: '3.2K',
      link: '/ai-security-best-practices',
      isNew: false
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Trends 2026: Future of Enterprise',
      date: '2025-01-15',
      time: '2:00 PM EST',
      type: 'Webinar',
      description: 'Join us for insights into the latest AI trends and their impact on enterprise'
    },
    {
      title: 'Quantum Computing Workshop',
      date: '2025-01-22',
      time: '10:00 AM EST',
      type: 'Workshop',
      description: 'Hands-on workshop on quantum computing applications'
    },
    {
      title: 'AI Security Summit',
      date: '2025-02-05',
      time: '9:00 AM EST',
      type: 'Conference',
      description: 'Annual conference on AI security and compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Resources & Learning
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Access our comprehensive library of resources, documentation, tools, and learning materials. 
            Everything you need to succeed with AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Personalized Resources
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Read Our Blog
            </Link>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Featured Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                {resource.isNew && (
                  <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-4">
                    NEW
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-300">{resource.rating}</span>
                    <span className="text-sm text-gray-500 ml-2">({resource.downloads} downloads)</span>
                  </div>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                
                <Link
                  href={resource.link}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors inline-flex items-center"
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Resource Categories */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Browse by Category
          </h2>
          
          <div className="space-y-12">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-${category.color}-500 rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="cyber-card p-4 hover:scale-105 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-white mb-2">{resource.title}</h4>
                      <p className="text-sm text-gray-300 mb-3">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        <Link
                          href={resource.link}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center"
                        >
                          {resource.isExternal ? (
                            <>
                              Visit
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </>
                          ) : (
                            <>
                              Access
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </>
                          )}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">
                    {event.type}
                  </span>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                
                <div className="text-sm text-gray-400">
                  <div>{new Date(event.date).toLocaleDateString()}</div>
                  <div>{event.time}</div>
                </div>
                
                <button className="mt-4 text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                  Register Now →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest resources, updates, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:border-cyan-400 focus:outline-none"
              />
              <button className="cyber-button px-8 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Finding the Right Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team can help you identify the most relevant resources for your specific needs. 
              Get personalized recommendations and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                Get Personalized Recommendations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;