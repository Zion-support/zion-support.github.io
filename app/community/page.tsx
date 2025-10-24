'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
<<<<<<< HEAD
  return (
    <>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PagePage;
=======
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'},
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'},
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'},
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'}
  ];
'use client';
import React, {useState}from 'react';
import { Helmet } from 'react-helmet-async';
import {Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart} from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart } from 'lucide-react'
const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const communityStats = [
    { icon: Users, value: '5,000+', label: 'Active Members' },
    {icon: MessageCircle, value: '50+', label: 'Discussions Daily' },
    {icon: Calendar, value: '12', label: 'Events Monthly' },
    {icon: Star, value: '4.9', label: 'Average Rating' }];
  const events = [
    {title: 'AI Development Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'Workshop',
      attendees: 150,
      description: 'Learn advanced AI development techniques and best practices'},
    {title: 'Cloud Infrastructure Meetup',
      date: '2024-02-20',
      time: '6:00 PM EST',
      type: 'Meetup',
      attendees: 75,
      description: 'Discuss cloud architecture and deployment strategies'},
    {title: 'SaaS Business Growth Panel',
      date: '2024-02-25',
      time: '3:00 PM EST',
      type: 'Panel',
      attendees: 200,
      description: 'Expert panel on scaling SaaS businesses'}];
  const forums = [
    {name: 'AI Services',
      description: 'Discuss AI development, machine learning, and automation',
      posts: 1250,
      members: 1800},
    {name: 'IT Services',
      description: 'Cloud infrastructure, DevOps, and system administration',
      posts: 980,
      members: 1200},
    {name: 'Micro SaaS',
      description: 'Building and scaling micro SaaS applications',
      posts: 750,
      members: 900},
    {name: 'General Discussion',
      description: 'General tech discussions and community updates',
      posts: 2100,
      members: 3000}];
  const benefits = [
    {icon: Users,
      title: 'Network with Peers',
      description: 'Connect with like-minded developers and entrepreneurs'},
    {icon: MessageCircle,
      title: 'Expert Support',
      description: 'Get help from our team of experts and community members'},
    {icon: Calendar,
      title: 'Exclusive Events',
      description: 'Access to workshops, webinars, and networking events'},
    {icon: Award,
      title: 'Recognition',
      description: 'Showcase your projects and get community recognition'}]

  return(<>)
      <Helmet><title>Community - Zion Tech Group</title>
        </Helmet><title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts. Learn, share, and grow together." />
        <meta name="keywords" content="community, developers, tech community, networking, events, forums, AI community" />
        <link rel="canonical" href="https: //ziontechgroup.com/community" />,
      </Helmet>

      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <div className="containermx-autopx-4py-16 pt-24">{/* Header */</div>} <div className="text-center mb-16">
            <div className="flexitems-centerjustify-centermb-6">
              <div className="w-16h-16bg-gradient-to-rfrom-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-8h-8text-white" />
              </div>
              <h1 className="text-4xlmd:text-5xlfont-bold text-white neon-text-enhanced">,</h1>
                Community;
              </h1>
            </div>
            <p className="text-xltext-gray-300max-w-3xlmx-auto mb-8">Join our vibrant community of developers, entrepreneurs, and tech enthusiasts.</p>
              Connect, learn, and grow together.
            </p>
            <div className="flexflex-wrapjustify-centergap-4">
              <a;
                href="#join"
                className="bg-gradient-to-rfrom-cyan-500to-blue-600hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300",
              >
                Join Community;
              </a>
              <a;
                href="#events"
                className="border-2border-cyan-400text-cyan-400px-6 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                View Events;
              </a>
              <a;
                href="#forums"
                className="border-2border-whitetext-whitepx-6 py-3 rounded-lg font-semibold hover: bg-white hover:text-slate-900 transition-all duration-300",
              >
                Browse Forums;
              </a>
            </div>
          </div>

      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10backdrop-blur-smrounded-xlp-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              <div key={index}className="cyber-card-enhancedp-6text-center">
                <stat.icon className="w-8h-8text-cyan-400mx-auto mb-4" />
                <div className="text-2xlfont-boldtext-whitemb-2">{stat.value</div>}</div>
                <div className="text-gray-300">{stat.label</div>}</div>
              </div>
            ))}
          </div>

      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flexitems-startspace-x-3">
                <CheckCircle className="h-6w-6text-purple-400mt-1 flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-4xlmx-autotext-center">
          <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xl p-8 md:p-12">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2h-5w-5" />
                Call Now
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2h-5w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )};

export default PagePage;
          {/* Tabs */} <div className="mb-8">
            <div className="flexflex-wrapjustify-centergap-4">{[</div>
                { id: 'overview', name: 'Overview' },
                {id: 'events', name: 'Events' },
                {id: 'forums', name: 'Forums' },
                {id: 'benefits', name: 'Benefits' }].map((tab) => (
                <button;
                  key={tab.id}onClick={() =>setActiveTab(tab.id)</button>}className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id;
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover: bg-slate-700'}`}
                >
                  {tab.name} </button>
              ))}
            </div>
          </div>

          {/* Overview Tab */}{activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="cyber-card-enhancedp-8">
                <h2 className="text-2xlfont-boldtext-whitemb-6">Welcome to Our Community</h2>
                <p className="text-gray-300mb-6leading-relaxed">Our community is a place where developers, entrepreneurs, and tech enthusiasts come together;</p>
                  to share knowledge, collaborate on projects, and support each other's growth. Whether you're;
                  just starting out or you're a seasoned professional, you'll find value in our diverse and;
                  welcoming community.
                </p>
                <div className="gridgrid-cols-1md:grid-cols-2gap-6">,</div>
                  <div>
                    <h3 className="text-lgfont-semiboldtext-whitemb-3">What You'll Find</h3>
                    <ul className="space-y-2">
                      <li className="flexitems-centertext-gray-300">
                        <CheckCircle className="w-5h-5text-green-400mr-2" />
                        Technical discussions and problem-solving;
                      </li>
                      <li className="flexitems-centertext-gray-300">
                        <CheckCircle className="w-5h-5text-green-400mr-2" />
                        Project showcases and feedback;
                      </li>
                      <li className="flexitems-centertext-gray-300">
                        <CheckCircle className="w-5h-5text-green-400mr-2" />
                        Career advice and networking;
                      </li>
                      <li className="flexitems-centertext-gray-300">
                        <CheckCircle className="w-5h-5text-green-400mr-2" />
                        Industry insights and trends;
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="cyber-card-enhancedp-8">
                </div><h2 className="text-2xlfont-boldtext-whitemb-6">Welcome to Our Community</h2>
                <p className="text-gray-300mb-6leading-relaxed">
                  Our community is a place where developers, entrepreneurs, and tech enthusiasts come together 
                  to share knowledge, collaborate on projects, and support each other's growth. Whether you're 
                  just starting out or you're a seasoned professional, you'll find value in our diverse and 
                  welcoming community.
                </p>
                <div className="gridgrid-cols-1md:grid-cols-2gap-6">
                  <div>
                    </div><h3 className="text-lgfont-semiboldtext-whitemb-3">What You'll Find</h3>
                    <ul className="space-y-2">
                      </ul><li className="flexitems-centertext-gray-300">
                        </li><CheckCircle className="w-5h-5text-green-400mr-2" />
                        Technical discussions and problem-solving
                      </li>
                      <li className="flexitems-centertext-gray-300">
                        </li><CheckCircle className="w-5h-5text-green-400mr-2" />
                        Project showcases and feedback
                      </li>
                      <li className="flexitems-centertext-gray-300">
                        </li><CheckCircle className="w-5h-5text-green-400mr-2" />
                        Career advice and networking
                      </li>
                      <li className="flexitems-centertext-gray-300">
                        </li><CheckCircle className="w-5h-5text-green-400mr-2" />
                        Industry insights and trends
                      </li>
                    </ul>
                  </div>
                  <div>
                    </div><h3 className="text-lgfont-semiboldtext-whitemb-3">Community Guidelines</h3>
                    <ul className="space-y-2">
                      <li className="flexitems-centertext-gray-300">
                        <CheckCircle className="w-5h-5text-green-400mr-2" />
                        Be respectful and inclusive;
                      </li>
                      <li className="flexitems-centertext-gray-300">
                        <CheckCircle className="w-5h-5text-green-400mr-2" />
                        Share knowledge generously;
                      </li>
                      <li className="flexitems-centertext-gray-300">
                        <CheckCircle className="w-5h-5text-green-400mr-2" />
                        Help others learn and grow;
                      </li>
                      <li className="flexitems-centertext-gray-300">
                        <CheckCircle className="w-5h-5text-green-400mr-2" />
                        Keep discussions relevant and constructive;
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Events Tab */}{activeTab === 'events' && (
            <div className="space-y-8">
              <div className="cyber-card-enhancedp-8">
                <h2 className="text-2xlfont-boldtext-whitemb-6">Upcoming Events</h2>
                <div className="space-y-6">{events.map((event, index) => (</div>
                    <div key={index}className="bg-slate-800rounded-lgp-6">
                      <div className="flexitems-startjustify-betweenmb-4">
                        <div className="flex-1">
                          <h3 className="text-xlfont-semiboldtext-whitemb-2">{event.title}</h3>
                          <p className="text-gray-300mb-3">{event.description</p>}</p>
                          <div className="flexitems-centerspace-x-6text-sm text-gray-400">
                            <span className="flexitems-center">
                              <Calendar className="w-4h-4mr-1" />
                              {event.date} </span>
                            <span className="flexitems-center">
                              <Clock className="w-4h-4mr-1" />
                              {event.time} </span>
                            <span className="flexitems-center">
                              <Users className="w-4h-4mr-1" />
                              {event.attendees}attendees;
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-8">
              <div className="cyber-card-enhancedp-8">
                </div><h2 className="text-2xlfont-boldtext-whitemb-6">Upcoming Events</h2>
                <div className="space-y-6">
                  {events.map((event, index) => (
                    <div key={index} className="bg-slate-800rounded-lgp-6">
                      <div className="flexitems-startjustify-betweenmb-4">
                        <div className="flex-1">
                          </div><h3 className="text-xlfont-semiboldtext-whitemb-2">{event.title}</h3>
                          <p className="text-gray-300mb-3">{event.description}</p>
                          <div className="flexitems-centerspace-x-6text-sm text-gray-400">
                            </div><span className="flexitems-center">
                              </span><Calendar className="w-4h-4mr-1" />
                              {event.date}
                            </span>
                            <span className="flexitems-center">
                              </span><Clock className="w-4h-4mr-1" />
                              {event.time}
                            </span>
                            <span className="flexitems-center">
                              </span><Users className="w-4h-4mr-1" />
                              {event.attendees} attendees
                            </span>
                          </div>
                        </div>
                        <div className="ml-6">
                          <span className="px-3py-1bg-cyan-600text-white text-xs font-semibold rounded">{event.type</span>} </span>
                        </div>
                      </div>
                      <a;
                        href="#"
                        className="bg-gradient-to-rfrom-cyan-500to-blue-600hover: from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 inline-flex items-center",
                      >
                        Register Now;
                        <ArrowRight className="w-4h-4ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Forums Tab */}{activeTab === 'forums' && (
            <div className="space-y-8">
              <div className="cyber-card-enhancedp-8">
                <h2 className="text-2xlfont-boldtext-whitemb-6">Community Forums</h2>
                <div className="gridgrid-cols-1md:grid-cols-2gap-6">,</div>
                  {forums.map((forum, index) => (
                    <div key={index}className="bg-slate-800rounded-lgp-6">
                      <h3 className="text-lgfont-semiboldtext-whitemb-2">{forum.name}</h3>
                      <p className="text-gray-300mb-4">{forum.description</p>}</p>
                      <div className="flexitems-centerjustify-betweenmb-4">
                        <div className="flexitems-centerspace-x-4text-sm text-gray-400">
                          <span className="flexitems-center">
                            <MessageCircle className="w-4h-4mr-1" />
                            {forum.posts}posts;
                          </span>
                          <span className="flexitems-center">
                            <Users className="w-4h-4mr-1" />
                            {forum.members}members;
                          </span>
                        </div>
                      </div>
                      <a;
          )}

          {/* Forums Tab */}
          {activeTab === 'forums' && (
            <div className="space-y-8">
              <div className="cyber-card-enhancedp-8">
                </div><h2 className="text-2xlfont-boldtext-whitemb-6">Community Forums</h2>
                <div className="gridgrid-cols-1md:grid-cols-2gap-6">
                  {forums.map((forum, index) => (
                    <div key={index} className="bg-slate-800rounded-lgp-6">
                      </div><h3 className="text-lgfont-semiboldtext-whitemb-2">{forum.name}</h3>
                      <p className="text-gray-300mb-4">{forum.description}</p>
                      <div className="flexitems-centerjustify-betweenmb-4">
                        <div className="flexitems-centerspace-x-4text-sm text-gray-400">
                          </div><span className="flexitems-center">
                            </span><MessageCircle className="w-4h-4mr-1" />
                            {forum.posts} posts
                          </span>
                          <span className="flexitems-center">
                            </span><Users className="w-4h-4mr-1" />
                            {forum.members} members
                          </span>
                        </div>
                      </div>
                      <$2 />
                        href="#"
                        className="text-cyan-400hover:text-cyan-300font-semibold flex items-center",
                      >
                        Visit Forum;
                        <ArrowRight className="w-4h-4ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}{activeTab === 'benefits' && (
            <div className="space-y-8">
              <div className="cyber-card-enhancedp-8">
                <h2 className="text-2xlfont-boldtext-whitemb-6">Community Benefits</h2>
                <div className="gridgrid-cols-1md:grid-cols-2gap-6">,</div>
                  {benefits.map((benefit, index) => (
                    <div key={index}className="flexitems-startspace-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12h-12bg-gradient-to-rfrom-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <benefit.icon className="w-6h-6text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lgfont-semiboldtext-whitemb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description</p>}</p>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-8">
              <div className="cyber-card-enhancedp-8">
                </div><h2 className="text-2xlfont-boldtext-whitemb-6">Community Benefits</h2>
                <div className="gridgrid-cols-1md:grid-cols-2gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flexitems-startspace-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12h-12bg-gradient-to-rfrom-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          </div><benefit.icon className="w-6h-6text-white" />
                        </div>
                      </div>
                      <div>
                        </div><h3 className="text-lgfont-semiboldtext-whitemb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Join Community CTA */} <div id="join" className="cyber-card-enhancedp-8mt-16text-center">
            <h2 className="text-2xlfont-boldtext-whitemb-4">Ready to Join Our Community?</h2>
            <p className="text-gray-300mb-8max-w-2xlmx-auto">Join thousands of developers and entrepreneurs who are already part of our vibrant community.</p>
              Start connecting, learning, and growing today.
            </p>
            <div className="flexflex-wrapjustify-centergap-4">
              <a;
          )}

          {/* Join Community CTA */}
          <div id="join" className="cyber-card-enhancedp-8mt-16text-center">
            </div><h2 className="text-2xlfont-boldtext-whitemb-4">Ready to Join Our Community?</h2>
            <p className="text-gray-300mb-8max-w-2xlmx-auto">
              Join thousands of developers and entrepreneurs who are already part of our vibrant community. 
              Start connecting, learning, and growing today.
            </p>
            <div className="flexflex-wrapjustify-centergap-4">
              </div><$2 />
                href="/contact"
                className="bg-gradient-to-rfrom-cyan-500to-blue-600hover: from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300",
              >
                Join Now;
              </a>
              <a;
                href="/contact"
                className="border-2border-cyan-400text-cyan-400px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                Learn More;
              </a>
            </div>
          </div>

          {/* Contact Information */} <div className="cyber-card-enhancedp-8mt-8">
            <h2 className="text-2xlfont-boldtext-whitemb-6 text-center">Get in Touch</h2>
            <div className="gridgrid-cols-1md:grid-cols-3 gap-6">,</div>
              <div className="flexitems-centerspace-x-3">
                <Mail className="w-6h-6text-cyan-400" />
                <div>
                  <div className="text-whitefont-semibold">Email</div>
                  <a href="mailto: community@ziontechgroup.com" className="text-cyan-400hover:text-cyan-300">,
                    community@ziontechgroup.com;
                  </a>
                </div>
              </div>
              <div className="flexitems-centerspace-x-3">
                </div><Phone className="w-6h-6text-cyan-400" />
                <div>
                  <div className="text-whitefont-semibold">Phone</div>
                  <a href="tel: +13024640950" className="text-cyan-400hover:text-cyan-300">,
                    +1 (302) 464-0950;
                  </a>
                </div>
              </div>
              <div className="flexitems-centerspace-x-3">
                </div><MapPin className="w-6h-6text-cyan-400" />
                <div>
                  <div className="text-whitefont-semibold">Address</div>
                  <div className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CommunityPage
        <title>Community | Zion Tech Group
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts." />
        <meta name="keywords" content="community, developers, tech community, networking, Zion Tech Group" />
      <div className="containermx-autopx-4py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xlfont-boldtext-whitemb-6">Community
          <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">
            Join our vibrant community of developers, entrepreneurs, and tech enthusiasts. 
            Connect, learn, and grow together.
          <p className="text-xltext-gray-300max-w-3xlmx-auto">
            Our community provides opportunities for networking, learning, and collaboration.
        <div className="gridmd:grid-cols-2lg:grid-cols-4gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10backdrop-blur-smrounded-xlp-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12w-12text-purple-400mx-auto mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}
              <p className="text-gray-300">{feature.description}
          ))}
        <div className="bg-white/10backdrop-blur-smrounded-2xlp-8 mb-16">
          <h2 className="text-3xlfont-boldtext-whitetext-center mb-8">
            Why Join Our Community?
          <div className="gridmd:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flexitems-centerspace-x-3">
                <CheckCircle className="h-6w-6text-green-400flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
        <div className="text-center">
          <h2 className="text-3xlfont-boldtext-whitemb-6">
            Ready to Join?
          <p className="text-xltext-purple-100mb-8">
            Become part of our growing community and start connecting with like-minded professionals.
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Users className="mr-2h-5w-5" />
              Join Community
              <MessageCircle className="mr-2h-5w-5" />
              Learn More
  )
}
export default CommunityPage</div></div></div></div></div></span></button></p></p></p></p></h1></h2></h2></h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
