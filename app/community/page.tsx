'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, MessageCircle, Calendar, Award, Globe, BookOpen, Code, Shield, Brain } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'AI & Machine Learning Workshop',
      date: '2024-02-15',
      time: '10:00 AM - 4:00 PM',
      location: 'San Francisco, CA',
      type: 'Workshop',
      description: 'Hands-on workshop covering the latest AI and ML techniques for enterprise applications.',
      attendees: 45,
      maxAttendees: 50,
      image: '/images/events/ai-workshop.jpg'
    },
    {
      id: 2,
      title: 'Cybersecurity Summit 2024',
      date: '2024-03-20',
      time: '9:00 AM - 6:00 PM',
      location: 'New York, NY',
      type: 'Conference',
      description: 'Annual cybersecurity conference featuring industry experts and latest security trends.',
      attendees: 200,
      maxAttendees: 300,
      image: '/images/events/cybersecurity-summit.jpg'
    },
    {
      id: 3,
      title: 'Cloud Architecture Meetup',
      date: '2024-02-28',
      time: '6:00 PM - 8:00 PM',
      location: 'Austin, TX',
      type: 'Meetup',
      description: 'Monthly meetup discussing cloud architecture patterns and best practices.',
      attendees: 25,
      maxAttendees: 40,
      image: '/images/events/cloud-meetup.jpg'
    }
  ];

  const forums = [
    {
      title: 'AI & Machine Learning',
      description: 'Discuss the latest developments in artificial intelligence and machine learning.',
      members: 1250,
      posts: 3400,
      icon: Brain
    },
    {
      title: 'Cybersecurity',
      description: 'Share knowledge about security best practices and threat intelligence.',
      members: 890,
      posts: 2100,
      icon: Shield
    },
    {
      title: 'Cloud Computing',
      description: 'Exchange ideas about cloud platforms, architecture, and optimization.',
      members: 1100,
      posts: 2800,
      icon: Globe
    },
    {
      title: 'Software Development',
      description: 'Connect with developers and share coding tips and project ideas.',
      members: 1500,
      posts: 4200,
      icon: Code
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Network with Experts',
      description: 'Connect with industry professionals and thought leaders'
    },
    {
      icon: BookOpen,
      title: 'Learn & Grow',
      description: 'Access exclusive resources, workshops, and training materials'
    },
    {
      icon: MessageCircle,
      title: 'Share Knowledge',
      description: 'Contribute to discussions and help others in the community'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Get recognized for your contributions and expertise'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group | Join Our Tech Community</title>
        <meta
          name="description"
          content="Join the Zion Tech Group community. Connect with professionals, attend events, participate in forums, and grow your network in AI, cybersecurity, and cloud computing."
        />
        <meta
          name="keywords"
          content="tech community, professional network, AI community, cybersecurity forum, cloud computing meetup, tech events, professional development"
        />
        <meta property="og:title" content="Community - Zion Tech Group | Join Our Tech Community" />
        <meta property="og:description" content="Join the Zion Tech Group community and connect with professionals." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Community</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with like-minded professionals, share knowledge, and grow together in the world of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Join Community
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  View Events
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Our Community?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of a vibrant community of technology professionals and enthusiasts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Forums Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Discussion Forums</h2>
              <p className="text-xl text-gray-600">
                Join conversations about the topics that matter to you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {forums.map((forum, index) => {
                const Icon = forum.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{forum.title}</h3>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>{forum.members} members</span>
                          <span>{forum.posts} posts</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{forum.description}</p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Join Discussion
                      <ArrowRight className="w-4 h-4 inline ml-1" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">
                Join us for workshops, conferences, and networking events
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {event.attendees}/{event.maxAttendees} attendees
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Globe className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Connect with thousands of professionals and start your journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Sign Up Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CommunityPage;