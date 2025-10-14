import React from 'react';'react-helmet-async;
import {  Link  } from 'react-router-dom;';'lucide-react;
const SupportPage: React.FC = () => {
  const supportOptions = [{,

      icon: 'Chat',';
      title: 'Live Chat',',
        description: 'Get instant help from our support team',';
      action: 'Start Chat',';
      color: 'from-blue-500 to-cyan-500'';
    },
    {
      icon: 'Phone',';
      title: 'Phone Support',',
        description: 'Call us for immediate assistance',';
      action: 'Call Now',';
      color: 'from-green-500 to-emerald-500'';
    },
    {
      icon: 'Email',';
      title: 'Email Support',',
        description: 'Send us a detailed message',';
      action: 'Send Email',';
      color: 'from-purple-500 to-pink-500'';
    },
    {
      icon: 'Book',';
      title: 'Documentation',',
        description: 'Browse our comprehensive guides',';
      action: 'View Docs',';
      color: 'from-orange-500 to-red-500'';    }
  ];

    }
  ]
  const faqs = [{
      question: 'How do I get started with your AI services?','
      answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll help you identify the best AI solutions for your business needs.''
    },
    {
      question: 'What is your response time for support requests?','
      answer: 'We typically respond to support requests within 2-4 hours during business hours, and within 24 hours for non-urgent matters.''
    },
    {
      question: 'Do you offer training for your solutions?','
      answer: 'Yes! We provide comprehensive training programs for all our solutions, including documentation, video tutorials, and live training sessions.''
    },
    {
      question: 'What if I need custom development?','
      answer: 'We offer custom development services for unique requirements. Contact our team to discuss your specific needs and get a quote.''
    }
  ];

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support - Get Help | Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Live chat, phone support, documentation, and more." />'
        <meta name="keywords" content="support, help, customer service, technical support, documentation, FAQ" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">
              Support;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Center,
              </span>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              </span>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              We're here to help! Get support for our AI and IT solutions through multiple channels.'
            </p></div>;
        </section>;
        {/* Support Options */}
}