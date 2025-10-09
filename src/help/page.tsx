import React, { useState } from 'react';
import { HelpCircle, Search, Phone, Mail, MessageSquare, BookOpen, Video, Download, CheckCircle, ArrowRight, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const _categories = [
    {
      id: 'getting-started',
      label: 'Getting Started',
      icon: BookOpen
    },
    {
      id: 'tutorials',
      label: 'Tutorials',
      icon: Video
    },
    {
      id: 'troubleshooting',
      label: 'Troubleshooting',
      icon: HelpCircle
    },
    {
      id: 'support',
      label: 'Support',
      icon: Users
    }
  ];

  const helpItems = [
    {
      category: 'getting-started',
      title: 'How to set up your account',
      description: 'Step-by-step guide to creating and configuring your Zion Tech Group account.',
      type: 'guide'
    },
    {
      category: 'getting-started',
      title: 'First project setup',
      description: 'Learn how to create your first AI project and configure basic settings.',
      type: 'guide'
    },
    {
      category: 'tutorials',
      title: 'AI Model Training',
      description: 'Comprehensive tutorial on training your first AI model with our platform.',
      type: 'video'
    },
    {
      category: 'tutorials',
      title: 'API Integration',
      description: 'How to integrate our AI services into your existing applications.',
      type: 'video'
    },
    {
      category: 'troubleshooting',
      title: 'Common login issues',
      description: 'Solutions for the most common login and authentication problems.',
      type: 'article'
    },
    {
      category: 'troubleshooting',
      title: 'Performance optimization',
      description: 'Tips and tricks to optimize your AI model performance.',
      type: 'article'
    }
  ];

  const filteredItems = helpItems.filter(item => 
    item.category === activeCategory &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Help Center</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers, tutorials, and support resources to help you get the most out of our AI solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="flex flex-wrap justify-center mb-12">
            {_categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 m-2 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {item.type === 'video' && <Video className="h-5 w-5 text-cyan-400 mr-2" />}
                    {item.type === 'guide' && <BookOpen className="h-5 w-5 text-cyan-400 mr-2" />}
                    {item.type === 'article' && <HelpCircle className="h-5 w-5 text-cyan-400 mr-2" />}
                    <span className="text-cyan-400 text-sm font-medium capitalize">{item.type}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
              <p className="text-gray-300 mb-8">Our support team is here to assist you with any questions or issues.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-300 mb-4">Get instant help from our support team</p>
                  <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                    Start Chat
                  </button>
                </div>
                <div className="text-center">
                  <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                  <p className="text-gray-300 mb-4">Send us a detailed message</p>
                  <a href="mailto:support@ziontechgroup.com" className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors inline-block">
                    Send Email
                  </a>
                </div>
                <div className="text-center">
                  <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                  <p className="text-gray-300 mb-4">Call us for immediate assistance</p>
                  <a href="tel:+15551234567" className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors inline-block">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HelpPage;