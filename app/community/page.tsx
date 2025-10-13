<<<<<<< HEAD
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];
'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart}}from 'lucide-react';

const CommunityPage: React.FC = () => {,
  const [activeTab, setActiveTab] = useState('overview');

    { icon: Users, value: '5,000+', label: 'Active Members' ,},
    {icon: MessageCircle, value: '50+', label: 'Discussions Daily' ,},
    {icon: Calendar, value: '12', label: 'Events Monthly' ,},
    {icon: Star, value: '4.9', label: 'Average Rating' ,}];
  ];];];
      description: 'Expert panel on scaling SaaS businesses',}];
      members: 3000;,}];
  ];];];
      description: 'Showcase your projects and get community recognition',}]

  return(<>)
      <Helmet />
        <title>Community - Zion Tech Group</title>
        <div className="container mx-auto px-4 py-16 pt-24">{/* Header */</div>} <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              <a;
              <a;
              <a;
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              <div key={index}className="cyber-card-enhanced p-6 text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">{stat.value</div>}</div>
                <div className="text-gray-300">{stat.label</div>}</div>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default PagePage;
          {/* Tabs */} <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">{[</div>
                { id: 'overview', name: 'Overview' ,},
                {id: 'events', name: 'Events' ,},
                {id: 'forums', name: 'Forums' ,},
                {id: 'benefits', name: 'Benefits' ,}].map((tab) => (
                <button;
                  key={tab.id}onClick={() =>setActiveTab(tab.id)</button>}className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id;
          {/* Overview Tab */}{activeTab === 'overview' && (
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Be respectful and inclusive;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Share knowledge generously;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Help others learn and grow;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Keep discussions relevant and constructive;
          )}

          {/* Events Tab */}{activeTab === 'events' && (
                          <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded">{event.type</span>} </span>
                        </div>
                      </div>
                      <a;
                        Register Now;
                        <ArrowRight className="w-4 h-4 ml-2" />
          )}

          {/* Forums Tab */}{activeTab === 'forums' && (
                        Visit Forum;
                        <ArrowRight className="w-4 h-4 ml-1" />
          )}

          {/* Benefits Tab */}{activeTab === 'benefits' && (
          )}

          {/* Join Community CTA */} <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center">
              <a;
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                Learn More;
          {/* Contact Information */} <div className="cyber-card-enhanced p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,</div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto: community@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">,
                    community@ziontechgroup.com;
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel: +13024640950" className="text-cyan-400 hover:text-cyan-300">,
                    +1 (302) 464-0950;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0acf
