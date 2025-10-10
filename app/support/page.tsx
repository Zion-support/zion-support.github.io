'use client';
<<<<<<< HEAD
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Link}}from 'react-router-dom';
import {Search, Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight}}from 'lucide-react';

const SupportPage: React.FC = () => {,
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.',},
    {question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish.'},
    {question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, and optimization services.'},
    {question: 'What technologies do you work with?',
      answer: 'We work with all major cloud platforms (AWS, Azure, GCP), AI frameworks (TensorFlow, PyTorch), and modern development stacks.'}];
  const supportChannels = [
    {title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      contact: 'support@ziontechgroup.com',},
    {title: 'Phone Support',
      description: 'Speak directly with our technical team',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST',},
    {title: 'Live Chat',
      description: 'Get instant help through our chat system',
      icon: MessageCircle,
      contact: 'Available on website',}]

  const filteredFaqs = faqs.filter(faq =>)
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return(<>)
      <Helmet />
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageSquare, Clock, CheckCircle, ArrowRight, Search, FileText, Video, Headphones } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7 Emergency Support',
      responseTime: 'Immediate',
      contact: '+1 302 464 0950',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Within 24 hours',
      contact: 'kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Immediate',
      contact: 'Start Chat',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Video,
      title: 'Video Support',
      description: 'Schedule a video call for complex technical issues',
      availability: 'By appointment',
      responseTime: 'Within 2 hours',
      contact: 'Schedule Call',
      color: 'from-orange-500 to-red-600'
    }
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get technical support for Zion Tech Group's AI and IT services. 24/7 phone support, email, live chat, and comprehensive resources." />
>>>>>>> origin/main
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
<<<<<<< HEAD
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
                Support Center;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get the help you need to make the most of your AI and IT solutions.</p>
              </p>
              
              <div className="max-w-md mx-auto relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500",
                />
              </div>
            </div>

            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)}className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20",
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-16">,</div>
              {supportChannels.map((channel, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover: border-cyan-400/30 transition-all duration-300 text-center">,</div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 mb-4">{channel.description</p>}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{channel.contact</div>}</div>
                  <div className="text-sm text-gray-400 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability} </div>
                </div>
              ))}
            </div>

                    <p className="text-gray-300">{faq.answer</p>}</p>
                  </div>
                ))}
              </div>
            </h2>
            <p className="text-xl text-gray-300 mb-8">Our support team is here to help you succeed with our AI and IT solutions.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Our technical team is here to help you succeed. Contact us for personalized assistance.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover: from-cyan-600 hover:to-purple-600 transition-all duration-300">,</button>
                  Contact Support;
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover: bg-white/20 transition-all duration-300">,</button>
                  Schedule Call;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Contact Support;
              </button>
              <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                View Documentation;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get the help you need with our comprehensive support options. 
                Our expert team is here to assist you 24/7 with any questions or issues.
              </p>
            </div>

            {/* Support Channels */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Get Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {channel.availability}
                      </div>
                      <div className="text-cyan-400 font-semibold">
                        Response: {channel.responseTime}
                      </div>
                    </div>
                    <div className="mt-4">
                      {channel.contact.startsWith('+') || channel.contact.includes('@') ? (
                        <a
                          href={channel.contact.startsWith('+') ? `tel:${channel.contact}` : `mailto:${channel.contact}`}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold"
                        >
                          {channel.contact}
                        </a>
                      ) : (
                        <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                          {channel.contact}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              
              {/* Search and Filter */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {faqCategories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="space-y-6">
                {filteredQuestions.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <a
                      href={resource.link}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center group-hover:translate-x-1 transition-all"
                    >
                      Access Resource
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Still Need Help?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call: (302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
>>>>>>> origin/main
  );
};

export default SupportPage;
