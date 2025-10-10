import {HelpCircle, Search, Phone, Mail, MessageSquare, BookOpen, Video, Download, CheckCircle, ArrowRight, Users} from 'lucide-react';
'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const categories = [
    {
=======
;
const HelpPage: React.FC = () => {
};
const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
;
const categories = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      id: 'getting-started',
      name: 'Getting Started',
      icon: BookOpen,
      color: 'text-blue-400',
      bgColor:     ,
$4},
      id: 'troubleshooting',
      name: 'Troubleshooting',
      icon: HelpCircle,
      color: 'text-red-400',
      bgColor:       ,
idid: 'billing',
      name: 'Billing & Account',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor:       ,
idid: 'technical',
      name: 'Technical Support',
      icon: MessageSquare,
      color: 'text-purple-400',
      bgColor:     ,
$4};
  ];
<<<<<<< HEAD
  const helpArticles = {
=======
;
const helpArticles = {
};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'getting-started': [
        title: 'How to Get Started with AI Services',
        description: 'Complete guide to setting up your AI services and making the most of our platform',
        category: 'Getting Started',
        readTime: '5 min read',
        difficulty: 'Beginner',
        color:         ,
titletitle: 'Setting Up Your First Dashboard',
        description: 'Step-by-step instructions for creating and customizing your analytics dashboard',
        readTime: '3 min read',
        title: 'Understanding AI Pricing Models',
        description: 'Learn about our different pricing tiers and how to choose the right one for your needs',
        readTime: '4 min read',
        title: 'Integration with Existing Systems',
        description: 'How to integrate our AI services with your current business systems',
        readTime: '7 min read',
        difficulty: 'Intermediate'],
    'troubleshooting': [
        title: 'Common Login Issues and Solutions',
        description: 'Troubleshoot common authentication problems and access issues',
        category: 'Troubleshooting',
        color:         ,
titletitle: 'API Connection Problems',
        description: 'Resolve API connectivity issues and authentication errors',
        title: 'Performance Optimization',
        description: 'Improve system performance and resolve slow response times',
        readTime: '6 min read',
        difficulty: 'Advanced',
        title: 'Data Import/Export Issues',
        description: 'Fix problems with data migration and file uploads',
    'billing': [
        title: 'Understanding Your Bill',
        description: 'Learn how to read and understand your monthly billing statement',
        category: 'Billing',
        color:         ,
titletitle: 'Upgrading or Downgrading Plans',
        description: 'How to change your subscription plan and what to expect',
        title: 'Payment Methods and Billing',
        description: 'Manage your payment methods and billing information',
        title: 'Refund and Cancellation Policy',
        description: 'Understand our refund policy and how to cancel your subscription',
    'technical': [
        title: 'API Documentation and Examples',
        description: 'Complete API reference with code examples and best practices',
        category: 'Technical',
        readTime: '10 min read',
        color:         ,
titletitle: 'Security Best Practices',
        description: 'Implement security measures to protect your data and systems',
        readTime: '8 min read',
        title: 'Custom Integration Guide',
        description: 'Build custom integrations with our platform using webhooks and APIs',
        readTime: '12 min read',
        title: 'Monitoring and Logging',
        description: 'Set up monitoring and logging for your AI services and applications']
<<<<<<< HEAD
  }
  const resources = [
=======
  };
;
const resources = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all our services',
      icon: Video,
      count:       ,
titletitle: 'Documentation',
      description: 'Comprehensive technical documentation and guides',
      count:       ,
titletitle: 'API Reference',
      description: 'Complete API documentation with examples',
      count:       ,
titletitle: 'Download Center',
      description: 'SDKs, tools, and resources for developers',
      icon: Download,
<<<<<<< HEAD
      count: '25+ downloads'
  const supportChannels = [
=======
      count: '25+ downloads';
const supportChannels = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      color: 'text-cyan-400',
      availability: '24/7',
      responseTime:       ,
titletitle: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond quickly',
      icon: Mail,
      responseTime:       ,
titletitle: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime:       ,
titletitle: 'Community Forum',
      description: 'Connect with other users and share knowledge',
      icon: Users,
<<<<<<< HEAD
      responseTime: 'Community driven'
  const faqs = [
=======
      responseTime: 'Community driven';
const faqs = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      question: 'How quickly can I get started with your AI services?',
      answer: 'Most of our AI services can be set up within 24-48 hours. We provide comprehensive onboarding support to ensure you\'re up and running quickly.'
      question: 'Do you offer training for our team?',
      answer:       ,
questionquestion: 'What kind of support do you provide?',
      answer:       ,
questionquestion: 'Can I integrate your services with my existing systems?',
      answer:       ,
questionquestion: 'Is there a free trial available?',
<<<<<<< HEAD
      answer: 'Yes, we offer a 14-day free trial for most of our services. This allows you to test our platform and see how it fits your business needs before committing to a paid plan.'
  const getCurrentArticles = () => {
    return helpArticles[activeCategory as keyof typeof helpArticles] || [];
  const filteredArticles = getCurrentArticles().filter(article =>
=======
      answer: 'Yes, we offer a 14-day free trial for most of our services. This allows you to test our platform and see how it fits your business needs before committing to a paid plan.';
const getCurrentArticles = () => {
};
return (
    return helpArticles[activeCategory as keyof typeof helpArticles] || [];
;
const filteredArticles = getCurrentArticles().filter(article =>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <React .Fragment>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
<<<<<<< HEAD
          {/* Header */}
=======
);
};
          {/* Header */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="text-center mb-16">
            <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Help Center,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers, get support, and learn how to make the most of our AI and IT services. 
              We're here to help you succeed.
<<<<<<< HEAD
            </p>
          </div>
          {/* Search */}
=======
            <
          <
          {/* Search *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search help articles..."
<<<<<<< HEAD
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-lg"
              />
          {/* Categories */}
=======
                value = { searchTerm };)
                onChange = { (e) => setSearchTerm(e.target.value) };
                className="w-full pl-10 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
          {/* Categories *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.bgColor} ${category.color} border-2 border-current`
<<<<<<< HEAD
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
          {/* Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              {categories.find(cat => cat.id === activeCategory)?.name} Articles;
  </
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 ${article.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-lg flex items-center justify-center mr-3`}>
                      <article.icon className={`w-5 h-5 ${article.color}`} />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{article.description}</p>
=======
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700
                  }`};
                >
                  <category.icon className="w-5 h-5 mr-2" 
                  <span className="font-medium">{category.name}<
                <
              ))};
          {/* Articles *
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              {categories.find(cat => cat.id === activeCategory)?.name} Articles
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-6">
              {filteredArticles.map((article), index) => (<div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: border-cyan-400
                  <div className="flex items-start mb-4">)
                    <div className={`w-10 h-10 ${article.color.replace('text-'), 'bg-').replace('-400', '-500
                      <article.icon className={`w-5 h-5 ${article.color}`};
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{article.title}<
                      <p className="text-gray-300 text-sm mb-3">{article.description}<
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{article.readTime}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
<<<<<<< HEAD
                      {article.difficulty}
                    </span>
                  <button className="w-full text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors flex items-center justify-center">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1" />
          {/* Resources */}
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Additional Resources
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 ${resource.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <resource.icon className={`w-8 h-8 ${resource.color}`} />
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
                  <div className="text-cyan-400 text-sm font-medium">{resource.count}</div>
          {/* Support Channels */}
              Get Support
              {supportChannels.map((channel, index) => (
                  <div className={`w-16 h-16 ${channel.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <channel.icon className={`w-8 h-8 ${channel.color}`} />
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
=======
                      {article.difficulty};
                    <
                  <button className="w-full text-cyan-400 hover: text-cyan-300 font-medium text-sm transition-colors flex items-center justify-center">
                    Read Article
              Additional Resources
            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-6">)
              {resources.map((resource), index) => (<div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: border-cyan-400)
                  <div className={`w-16 h-16 ${resource.color.replace('text-'), 'bg-').replace('-400', '-500
                    <resource.icon className={`w-8 h-8 ${resource.color}`};
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}<
                  <p className="text-gray-300 text-sm mb-3">{resource.description}<
                  <div className="text-cyan-400 text-sm font-medium">{resource.count}<
          {/* Support Channels *
              Get Support)
              {supportChannels.map((channel, index) => (
                  <div className={`w-16 h-16 ${channel.color.replace('text-', 'bg-').replace('-400', '-500
                    <channel.icon className={`w-8 h-8 ${channel.color}`};
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.title}<
                  <p className="text-gray-300 text-sm mb-3">{channel.description}<
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  <div className="text-sm text-gray-400 mb-2">
                    <div className="font-medium">Availability: {channel.availability}</div>
                    <div>Response: {channel.responseTime}</div>
                  <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors text-sm font-medium">
                    Contact Now
<<<<<<< HEAD
          {/* FAQ */}
              Frequently Asked Questions
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
=======
          {/* FAQ *
              Frequently Asked Questions
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">)
                {faqs.map((faq), index) => (<div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}<
                    <p className="text-gray-300">{faq.answer}<
          {/* CTA Section *
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              with any questions or issues you might have.
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
<<<<<<< HEAD
              <a
                href="/contact"
=======
              <a href="
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
  </
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us
      <Footer />
    </React.Fragment>
  return (
    <div>Coming Soon</div>
<<<<<<< HEAD
  ),
}
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
const categories = [
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  )};
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
const categories = [
[
        {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  i,
  d: 'getting-started',
      nam,
  e: 'Getting Started',
      ico,
  n: BookOpen,
      colo,
  r: 'text-blue-400',
      bgColo,
  r: 'bg-blue-500/10'
    },
      i,
  d: 'troubleshooting',
      nam,
  e: 'Troubleshooting',
      ico,
  n: HelpCircle,
      colo,
  r: 'text-red-400',
      bgColo,
<<<<<<< HEAD
  r: 'bg-red-500/10',
=======
  r: 'bg-red-500
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      i,
  d: 'technical',
      nam,
  e: 'Technical Support',
      ico,
  n: MessageSquare,
      colo,
  r: 'text-purple-400',
      bgColo,
<<<<<<< HEAD
  r: 'bg-purple-500/10'
    }
  ];
  const helpArticles = {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  r: 'bg-purple-500
    };
  ];
  const helpArticles = {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'getting-started': [;
  titl,
  e: 'Setting Up Your First Dashboard',
        descriptio,
  n: 'Step-by-step instructions for creating and customizing your analytics dashboard',
        readTim,
  e: '3 min read',
        titl,
  e: 'Integration with Existing Systems',
        descriptio,
  n: 'How to integrate our AI services with your current business systems',
        readTim,
  e: '7 min read',
        difficult,
  y: 'Intermediate',
        titl,
  e: 'Security Best Practices',
        descriptio,
  n: 'Implement security measures to protect your data and systems',
        readTim,
  e: '8 min read',
      titl,
  e: 'Video Tutorials',
      descriptio,
  n: 'Step-by-step video guides for all our services',
      ico,
  n: Video,
      coun,
  t: '50+ videos',
      titl,
  e: 'API Reference',
      descriptio,
  n: 'Complete API documentation with examples',
      coun,
  t: '100+ endpoints',
      titl,
  e: 'Email Support',
      descriptio,
  n: 'Send us a detailed message and we\'ll respond quickly',
      ico,
  n: Mail,
      responseTim,
  e: 'Within 4 hours',
      titl,
  e: 'Community Forum',
      descriptio,
  n: 'Connect with other users and share knowledge',
      ico,
  n: Users,
      responseTim,
  e: 'Community driven'
<<<<<<< HEAD
          <MessageSquare className="w-5 h-5 mr-2" /></MessageSquare>
// Contact Support;
          </a>
                href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
                href="mailto:kleber@ziontechgroup.com" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us
      <Footer /></Footer>
    </React.Fragment>
export default HelpPage,
  </div>
  </p>
  </h2>
  </div>
  </div>
  </div>
  </div>
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </h2>
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </h2>
  </div>
  </div>
  </div>
  </div>
  </div>
  </h1>
  </div>
  </div>
=======
          <MessageSquare className="w-5 h-5 mr-2" /><
/
          <
                href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" 
                (302) 464-0950;
                href="mailto:kleber@ziontechgroup.com" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hove,
    r:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" 
                Email Us;
      <Footer /></Footer>
    </React.Fragment>
export default HelpPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
