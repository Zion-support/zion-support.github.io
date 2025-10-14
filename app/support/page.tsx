<<<<<<< HEAD
import React from 'reactreact-helmet-async;'
import { Link } from 'react-router-dom;'
import { Right, Circle } from 'lucide-react;'
const SupportPage: React.FC = () => {
  const supportOptions = [{''
      icon: "'Chat'",'
      title: "'Live Chat'",'
      description: "'Get instant help from our support team'",'
      action: "'Start Chat'",'
      color: "'from-blue-500 to-cyan-500';"}'
    },
    {''
      icon: "'Phone'",'
      title: "'Phone Support'",'
      description: "'Call us for immediate assistance'",'
      action: "'Call Now'",'
      color: "'from-green-500 to-emerald-500';"}'
    },
    {''
      icon: "'Email'",'
      title: "'Email Support'",'
      description: "'Send us a detailed message'",'
      action: "'Send Email'",'
      color: "'from-purple-500 to-pink-500';"}'
    },
    {
      icon: "'Book'",
      title: "'Documentation'",
      description: "'Browse our comprehensive guides'",
      action: "'View Docs'",
      color: "'from-orange-500 to-red-500';"}'
  ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/main

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Support - Get Help | Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Live chat, phone support, documentation, and more." />''"
const SupportPage: React.FC = () => {
  const supportOptions = [
    {
icon: "MessageCircle",
      title: "'Live Chat'",'
      description: "'Get instant help from our support team'",'
      action: "'Start Chat'",'
      color: "'from-blue-500 to-cyan-500'"
    },
    {
icon: "Mail",
      title: "'Email Support'",'
      description: "'Call us for immediate assistance'",'
      action: "'Call Now'",'
      color: "'from-green-500 to-emerald-500'"
    },
    {
icon: "Phone",
      title: "'Phone Support'",'
      description: "'Call us for immediate assistance'",'
      action: "'Call Now'",'
      color: "'from-purple-500 to-pink-500'"
    },
    {
      icon: "BookOpen",
      title: "'Documentation'",'
      description: "'Browse our comprehensive guides'",'
      action: "'View Docs'",'
      color: "'from-orange-500 to-red-500';"
    {''
      icon: "'Book'",'
      title: "'Documentation'",'
      description: "'Browse our comprehensive guides'",'
      action: "'View Docs'",'
      color: "'from-orange-500 to-red-500';"}'
    }
  ];

  const faqs = [{''
      question: "'How do I get started with your AI services?'",'
      answer: "'Getting started is easy! Contact our team for a consultation", and we\'ll help you identify the best AI solutions for your business needs.'';}'
    },
    {''
      question: "'What is your response time for support requests?'",'
      answer: "'We typically respond to support requests within 2-4 hours during business hours", and within 24 hours for non-urgent matters.';}'
    },
    {''
      question: "'Do you offer training for your solutions?'",'
      answer: "'Yes! We provide comprehensive training programs for all our solutions", including documentation, video tutorials, and live training sessions.';}'
    },
    {''
      question: "'What if I need custom development?'",'
      answer: "'We offer custom development services for unique requirements. Contact our team to discuss your specific needs and get a quote.';"}'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Get Help | Zion Tech Group</title>''
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Live chat, phone support, documentation, and more." />"
        <meta name="keywords" content="support, help, customer service, technical support, documentation, FAQ" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Support;
              <span className="block bg-gradient-to-r from-cyan-40o0 to-blue-500 bg-clip-text text-transparent">
                Center;
              </span>
            </h1>
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
              We're here to help! Get support for our AI and IT solutions through multiple channels.
            </p>
          </div>
        </section>
        {/* Support Options */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              How Can We Help You?;
            </h2>
            <div className="grid md: grid-cols-2 l,g:grid-cols-4 gap-8">
              {supportOptions.map((option, _index) => {
                const Icon = option.icon;
                return (
                  <div key={_index} className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50 hover:border-cyan-500"/50 transition-all duration-30o0 text-center group">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-4 group-hover: "scale-110 transition-transform duration-30o0`"}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-30o0 mb-4">{option.description}</p>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-60o0 text-white rounded-xl font-semibold hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hove,r:scale-10o5">
                      {option.action}
                      <Right className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
  );
              })}
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-80o0"/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Frequently Asked Questions;
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, _index) => (
                <div key={_index} className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-30o0">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Info */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Contact Information;
            </h2>
      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">{/* Hero Section */}"
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Support
              <span className="block bg-gradient-to-r from-cyan-40o0 to-blue-500 bg-clip-text text-transparent">
                Center</span></h1>
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
              We're here to help! Get support for our AI and IT solutions through multiple channels.'</p></div></section>{/* Support Options */}'
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              How Can We Help You?</h2>
            <div className="grid md: grid-cols-2 l,g:grid-cols-4 gap-8">{supportOptions.map((option, _index) => {"
                const Icon = option.icon
                return (
                  <div key={_index} className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50 hover:border-cyan-500"/50 transition-all duration-30o0 text-center group">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-4 group-hover: "scale-110 transition-transform duration-30o0`"}>
                      <Icon className="w-8 h-8 text-white" /></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-30o0 mb-4">{option.description}</p>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-60o0 text-white rounded-xl font-semibold hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hove,r:scale-10o5">{option.action}"
                      <Right className="w-4 h-4 ml-2 inline" /></button></div>
  )})}
            </div></div></section>{/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-80o0"/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, _index) => ("
                <div key={_index} className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-30o0">{faq.answer}</p></div>
              ))}
            </div></div></section>{/* Contact Info */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50 text-center">
                <Circle className="w-12 h-12 text-cyan-40o0 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2"></h3>
                <p className="text-cyan-40o0 font-medium">+1 (555) 123-4567</p>
                <p className="text-gray-40o0 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50 text-center">
                <Circle className="w-12 h-12 text-cyan-40o0 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-40o0 font-medium">support@ziontechgroup.com</p>
                <p className="text-gray-40o0 text-sm">24/7 Support</p>
              </div>
              <div className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50 text-center">
                <Circle className="w-12 h-12 text-cyan-40o0 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-40o0 font-medium">123 Tech Street</p>
                <p className="text-gray-40o0 text-sm">San Francisco, CA 9410o5</p>
=======
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Learn more about page" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about page</p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                This page is currently under development. We're working hard to bring you the best experience.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Home
                </a>
                <a 
                  href="/contact" 
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </a>
>>>>>>> origin/main
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
