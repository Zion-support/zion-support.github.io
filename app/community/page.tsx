'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, MessageCircle, Calendar, Award, Globe, Heart } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: 'Developer Community',
      description: 'Connect with fellow developers, share knowledge, and collaborate on projects',
      benefits: ['Technical Discussions', 'Code Reviews', 'Mentorship Programs', 'Project Collaboration']
    },
    {
      icon: MessageCircle,
      title: 'Support Forums',
      description: 'Get help from our community and technical support team',
      benefits: ['24/7 Support', 'Community Help', 'Documentation', 'Best Practices']
    },
    {
      icon: Calendar,
      title: 'Events & Workshops',
      description: 'Join our regular events, workshops, and training sessions',
      benefits: ['Monthly Meetups', 'Technical Workshops', 'Webinars', 'Hackathons']
    },
    {
      icon: Award,
      title: 'Certification Program',
      description: 'Earn certifications and showcase your expertise',
      benefits: ['Skill Assessments', 'Certificates', 'Badges', 'Career Advancement']
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with professionals from around the world',
      benefits: ['International Events', 'Cultural Exchange', 'Global Projects', 'Networking']
    },
    {
      icon: Heart,
      title: 'Open Source',
      description: 'Contribute to open source projects and make a difference',
      benefits: ['Project Contributions', 'Code Reviews', 'Documentation', 'Community Impact']
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI & Machine Learning Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'Workshop',
      description: 'Learn the latest AI/ML techniques and best practices'
    },
    {
      title: 'Cloud Architecture Deep Dive',
      date: '2024-02-20',
      time: '3:00 PM EST',
      type: 'Webinar',
      description: 'Advanced cloud architecture patterns and optimization strategies'
    },
    {
      title: 'Community Hackathon',
      date: '2024-02-25',
      time: '9:00 AM EST',
      type: 'Hackathon',
      description: '48-hour hackathon with prizes and networking opportunities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, attend events, and grow your skills." />
        <meta name="keywords" content="developer community, tech events, workshops, networking, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Join Our Community
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with like-minded professionals, learn new skills, and grow your career 
              in our vibrant tech community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Join Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover all the ways you can engage with our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't miss out on our exciting community events and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{event.date}</span>
                  <span className="mx-2">•</span>
                  <span>{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with thousands of developers and tech professionals worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Join Community
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Browse Events
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;