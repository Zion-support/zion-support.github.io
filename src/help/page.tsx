'use client';
import {HelpCircle, Search, Phone, Mail, MessageSquare, BookOpen, Video, Download, CheckCircle, ArrowRight, Users} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer;

const HelpPage: any,
    C= () => {';
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any},
    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any},
    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any},
    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any}
  ];

  const helpArticles = {
    'getting-started': [
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any}
    ],
    'troubleshooting': [
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any}
    ],
    'billing': [
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any}
    ],
    'technical': [
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any},
      {
        title: any,
        description: any,
        category: any,
        readTime: any,
        difficulty: any,
        icon: any,
        color: any}
    ];
  };

  const resources = [
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      count: any},
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      count: any},
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      count: any},
    {
      title: any,
      description: any, tools, and resources for developers',
      icon: any,
      color: any,
      count: any}
  ];

  const supportChannels = [
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      availability: any,
      responseTime: any},
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      availability: any,
      responseTime: any},
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      availability: any,
      responseTime: any},
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      availability: any,
      responseTime: any}
  ];

  const faqs = [
    {
      question: any,
      answer: any},
    {
      question: any,
      answer: any, we provide comprehensive training programs including online courses, live workshops, and one-on-one sessions to help your team master our platform.
    },
    {
      question: any,
      answer: any, email, phone, and our community forum. Our response times vary by channel but we aim to respond within 4 hours for most inquiries.
    },
    {
      question: any,
      answer: any, webhooks, and integration tools to seamlessly connect with your existing business systems and workflows.
    },
    {
      question: any,
      answer: any, we offer a 14-day free trial for most of our services. This allows you to test our platform and see how it fits your business needs before committing to a paid plan.
    }
  ];

  const getCurrentArticles: ,
    y= () => {
    return helpArticles[activeCategory as keyof typeof helpArticles] || [];
  };

  const filteredArticles = getCurrentArticles().filter(article =>);
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase());
  );

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md: any,>";
    e="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers, get support, and learn how to make the most of our AI and IT services. 
              We're here to help you succeed.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input ";>
                type="text";>
                placeholder="Search help articles...">;
                value={searchTerm});>
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,
    s: any{/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button >
                  key={category.id}>
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${';
                    activeCategory === category.id'`';
                      ? `${category.bgColor} ${category.color} border-2 border-current`'`"';
                      : 'bg-slate-800/50 text-gray-300 hover: any}`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              {categories.find(cat => cat.id === activeCategory)?.name} Articles
            </h2>
            <div className="grid grid-cols-1 md: any,>";
    g: any{filteredArticles.map((article, index) => ("'"';
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: any,>'`';
    e={`w-10 h-10 ${article.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-lg flex items-center justify-center mr-3`}>`";
                      <article.icon className={`w-5 h-5 ${article.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{article.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">';
                    <span>{article.readTime}</span>'`';
                    <span className={`px-2 py-1 rounded text-xs ${'>
                      article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :'>
                      article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :'>';
                      'bg-red-500/20 text-red-400'>
                    }`}>
                      {article.difficulty}
                    </span>
                  </div>
                  
                  <button className="w-full text-cyan-400 hover: any,>
    e="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md: any,>";
    g: any{resources.map((resource, index) => ("'"';
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: any,>'`';
    e={`w-16 h-16 ${resource.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>`";
                    <resource.icon className={`w-8 h-8 ${resource.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
                  <div className="text-cyan-400 text-sm font-medium">{resource.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Get Support
            </h2>
            <div className="grid grid-cols-1 md: any,>";
    g: any{supportChannels.map((channel, index) => ("'"';
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: any,>'`';
    e={`w-16 h-16 ${channel.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>`";
                    <channel.icon className={`w-8 h-8 ${channel.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                  <div className="text-sm text-gray-400 mb-2">
                    <div className="font-medium">Availability: any{channel.availability}</div>
                    <div>Response: any{channel.responseTime}</div>
                  </div>
                  <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover: any}>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Need Help?";
            </h2>"'";
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              with any questions or issues you might have.
            </p>
            <div className="flex flex-col sm: any,>
    r: any,>
    e="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
};

export default HelpPage;'";
import React, { useState } from 'react';"'"';
"'"'`"';