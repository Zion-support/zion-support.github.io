import { ArrowRight } from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CommunityZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
      </Helmet>
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, MessageCircle, Calendar, Award, Globe, Heart, Star, ArrowRight } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const events = [
    {
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      location: 'San Francisco, CA',
      description: 'Join industry leaders for a day of AI innovation and networking.',
      attendees: 500
    },
    {
      title: 'Cloud Computing Workshop',
      date: 'March 22, 2024',
      location: 'Online',
      description: 'Learn the latest cloud technologies and best practices.',
      attendees: 200
    },
    {
      title: 'Cybersecurity Conference',
      date: 'April 5, 2024',
      location: 'New York, NY',
      description: 'Explore the latest trends in cybersecurity and data protection.',
      attendees: 300
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'The Zion Tech community has been instrumental in our digital transformation journey.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, StartupXYZ',
      content: 'Amazing support and resources. The community events are always insightful.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'IT Director, GlobalCorp',
      content: 'The knowledge sharing and networking opportunities are invaluable.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech community. Connect with industry experts, attend events, and grow your network in AI and IT." />
        <meta name="keywords" content="tech community, AI community, IT networking, tech events, professional development" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with like-minded professionals, learn from industry experts, and grow your network 
            in the world of AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Events
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-6 mb-4">
                <Users className="w-12 h-12 text-purple-400 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-gray-300">Active Members</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 mb-4">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-300">Events Annually</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 mb-4">
                <Award className="w-12 h-12 text-green-400 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-6 mb-4">
                <Globe className="w-12 h-12 text-orange-400 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">25+</h3>
              <p className="text-gray-300">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our community events and connect with industry leaders and peers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-400">{event.attendees} attendees</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our community members about their experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full p-3 mr-4">
                    <Heart className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with industry experts, attend exclusive events, and grow your professional network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Join Community
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
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
>>>>>>> cursor/fix-errors-and-merge-to-main-0ca7
