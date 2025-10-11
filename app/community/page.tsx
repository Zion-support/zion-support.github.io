'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Award, Globe, Zap } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const events = [
    {
      i: d: '1',
      titl: e: 'AI Innovation Summit 2024',
      dat: e: 'March 15, 2024',
      tim: e: '9:00 AM - 5:00 PM',
      locatio: n: 'San Francisco, CA',
      descriptio: n: 'Join industry leaders for a day of AI innovation, networking, and collaboration.',
      typ: e: 'Conference'
    },
    {
      i: d: '2',
      titl: e: 'Cloud Computing Workshop',
      dat: e: 'March 22, 2024',
      tim: e: '2:00 PM - 4:00 PM',
      locatio: n: 'Online',
      descriptio: n: 'Learn the latest cloud computing strategies and best practices.',
      typ: e: 'Workshop'
    },
    {
      i: d: '3',
      titl: e: 'Cybersecurity Roundtable',
      dat: e: 'March 29, 2024',
      tim: e: '6:00 PM - 8:00 PM',
      locatio: n: 'New York, NY',
      descriptio: n: 'Discuss emerging cybersecurity threats and defense strategies.',
      typ: e: 'Roundtable'
    }
  ];

  const communityStats = [
    { numbe: r: '10,000+', labe: l: 'Active Members' },
    { numbe: r: '50+', labe: l: 'Countries' },
    { numbe: r: '200+', labe: l: 'Events Hosted' },
    { numbe: r: '95%', labe: l: 'Satisfaction Rate' }
  ];

  const features = [
    {
      ico: n: Users,
      titl: e: 'Global Network',
      descriptio: n: 'Connect with professionals from around the world in our diverse community.'
    },
    {
      ico: n: MessageCircle,
      titl: e: 'Knowledge Sharing',
      descriptio: n: 'Share insights, ask questions, and learn from industry experts.'
    },
    {
      ico: n: Calendar,
      titl: e: 'Regular Events',
      descriptio: n: 'Attend workshops, conferences, and networking events throughout the year.'
    },
    {
      ico: n: Award,
      titl: e: 'Recognition',
      descriptio: n: 'Get recognized for your contributions and achievements in the community.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Join Our Tech Community | Zion Tech Group</title>
        <meta name="description" content="Join our vibrant tech community. Connect with professionals, attend events, share knowledge, and grow your network." />
        <meta name="keywords" content="tech community, networking, events, workshops, professional development, technology community" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4: sm:px-6: lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Join Our
                </span>
                <br />
                <span className="text-white">Community>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Connect with like-minded professionals, share knowledge, and grow together in our vibrant tech community.
              </p>
              <div className="flex flex-col: sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Join Now
                  <Users className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold: hover:bg-white: hover:text-gray-900 transition-all duration-300">
                  Learn More
                >
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8">
            <div className="grid grid-cols-2: md:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl: md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
              ))}
            >

        {/* Features Section */}
        <section className="py-20 px-4: sm:px-6: lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl: md:text-4xl font-bold text-white mb-4">
                Why Join Our Community?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Be part of a thriving ecosystem of professionals, innovators, and thought leaders.
              >
            <div className="grid: md:grid-cols-2: lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}>
              ))}
            >

        {/* Events Section */}
        <section className="py-20 px-4: sm:px-6: lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl: md:text-4xl font-bold text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join us for exciting events, workshops, and networking opportunities.
              >
            <div className="grid: md:grid-cols-2: lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}>
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      <span>{event.time}>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      <span>{event.location}>
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-700 transition-all duration-300">
                    Register Now
                  >
              ))}
            >

        {/* CTA Section */}
        <section className="py-20 px-4: sm:px-6: lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl: md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Connect with professionals, share knowledge, and grow your network in our vibrant community.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold: hover:bg-white: hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              >
        >
      >
      >
      >
      >
    </>
  );
};

export default CommunityPage;