'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { CheckCircle ArrowRight Phone Mail MapPin Zap Shield Brain Globe Users MessageCircle Calendar } from "lucide-react";
const CommunityPage: React.FC = () => {
  const features = [
      icon: Users,
      title: 'Active Community',
      description: 'Join our vibrant community of developers, entrepreneurs, and tech enthusiasts'
      icon: MessageCircle,
      title: 'Knowledge Sharing',
      description: 'Share knowledge, ask questions, and collaborate with like-minded professionals'
      icon: Calendar,
      title: 'Events & Meetups',
      description: 'Participate in regular events, workshops, and networking opportunities'
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with professionals from around the world'
  ];
  const benefits = [
    'Access to exclusive community resources',
    'Networking opportunities with industry leaders',
    'Regular workshops and training sessions',
    'Early access to new features and updates',
    '24/7 community support',
    'Collaboration opportunities',
    'Career development resources',
    'Proven track record of success'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts." />
        <meta name="keywords" content="community, developers, tech community, networking, Zion Tech Group" />
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"/>
            Community;</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Join our vibrant community of developers, entrepreneurs, and tech enthusiasts. 
            Connect, learn, and grow together.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Our community provides opportunities for networking, learning, and collaboration.
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
            <div, key={inde, x} classNam, e="b, g-whit, e/10, backdrop-blu, r-sm, rounded-xl, p-6, text-center, hover:b, g-whit, e/20, transition-all, duration-30, 0"></di, v>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{featur, e.titl, e}</h, 3>
              <p, className="tex, t-gra, y-30, 0">{featur, e.descriptio, n}</p>
          ))}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-8"></h2>
            Why Join Our Community?
          <div className="grid md:grid-cols-2 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-center, space-x-3"></di, v>
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}
        <div className="text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-6"></h2>
            Ready to Join?
          <p className="text-xl text-purple-100 mb-8"></p>
            Become part of our growing community and start connecting with like-minded professionals.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Users className="mr-2 h-5 w-5" />
              Join Community;
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <MessageCircle className="mr-2 h-5 w-5" />
              Learn More;
  );
export default CommunityPage;