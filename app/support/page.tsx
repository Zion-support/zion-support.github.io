<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
'use client';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac

export default function Support() {
import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react;

interface FAQ {}
  question: string;

  answer: string;

  category: string});)
}

<<<<<<< HEAD
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react;

import Navigation from ../components
import Footer from ../components
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, MessageCircle, Clock, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';
=======

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Phone, Mail, MessageCircle, Clock, CheckCircle, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460

interface FAQ {
  question: string;
  answer: string;
  category: string;
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

const SupportPage: React.FC = () => {
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState(');

  const [selectedCategory, setSelectedCategory] = useState('all);
=======
const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
<<<<<<< HEAD
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Link}}from 'react-router-dom';
import {Search, Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight}}from 'lucide-react';
=======
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const SupportPage: React.FC = () => {,
=======
const SupportPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
const SupportPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
const SupportPage: React.FC = () => {
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  Search, 
  Send, 
  FileText, 
  Video, 
  Users, 
  BookOpen,
  ArrowRight,
  Star,
  Shield,
  Zap
} from 'lucide-react';

const SupportPage: React.FC = () => {
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

    {
<<<<<<< HEAD
      question: 'How do I get started with your AI solutions?,
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.,
      category: 'general
=======

  const faqs: FAQ[] = [
    {
<<<<<<< HEAD
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.',
      category: 'Getting Started'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    },
      category: 'general});)},
    {
<<<<<<< HEAD
      question: 'What support do you provide after implementation?,
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.,
      category: 'support
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      question: 'How long does implementation typically take?,
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.,
      category: 'implementation});)
},
      question: 'What security measures do you have in place?,
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.,
      category: 'security});)
},
    {
      question: 'Can you integrate with our existing systems?,
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.,
      category: 'integration});)
},
    {
      question: 'What happens if we need to scale up?,
      answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.,
      category: 'scaling});)
},
    {
      question: 'Do you provide custom development?,
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.,
      category: 'development
    }  ];

  const supportChannels = [;;

    {
      name: 'Phone Support,
      description: 'Speak directly with our technical experts,
      category: 'implementation'});;)
},
    {}
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.',
      category: 'training'});;)
},
    {}
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'security'});;)
},
    {}
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.',
      category: 'integration'});;)
},
    {}
      question: 'What happens if we need to scale up?',
      answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.',
      category: 'scaling'});;)
},
    {}
      question: 'Do you provide custom development?',
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.',
      category: 'development'
<<<<<<< HEAD
      contact: '+1 (555) 123-4567,
      availability: '24/7 Available,
      color: 'text-blue-400
      color: 'text-blue-400});)},
    {
      name: 'Email Support,
      description: 'Get detailed responses to your questions,
      color: 'text-green-400});)},
    {
      name: 'Live Chat,
      description: 'Instant help when you need it most,
    {
      name: 'Emergency Support,
      description: 'Critical issues resolved quickly,
  const filteredFAQs = faqs.filter(faq => {;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());;

  const toggleFAQ = (index: number) => {;
    return matchesSearch && matchesCategory});;)
});;

  const toggleFAQ = (index: number) => {}
=======
    }
  ];
=======
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish.',
      category: 'Project Management'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes, we offer comprehensive training programs for your team to ensure successful adoption and ongoing management of AI solutions.',
      category: 'Training'
    },
    {
      question: 'What support do you offer after implementation?',
      answer: 'We provide ongoing support including monitoring, maintenance, updates, and 24/7 technical assistance for critical issues.',
      category: 'Support'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing enterprise systems and can work with most platforms and technologies.',
      category: 'Integration'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, compliance with industry standards, and regular security audits.',
      category: 'Security'
    }
  ];

  const categories = ['all', 'Getting Started', 'Project Management', 'Training', 'Support', 'Integration', 'Security'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

=======
<<<<<<< HEAD
      question: 'How do I get started with your AI services?',
<<<<<<< HEAD
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.',},
    {question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish.'},
    {question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, and optimization services.'},
    {question: 'What technologies do you work with?',
      answer: 'We work with all major cloud platforms (AWS, Azure, GCP), AI frameworks (TensorFlow, PyTorch), and modern development stacks.'}];
=======
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.'
=======
      category: 'General',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Contact our sales team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
    },
    {
      category: 'Technical',
      question: 'What technical support do you provide?',
      answer: 'We offer 24/7 technical support for all our services, including AI solutions, cloud infrastructure, and custom software. Our support includes phone, email, and live chat options.'
    },
    {
      category: 'Billing',
      question: 'How does your pricing work?',
      answer: 'Our pricing is flexible and based on your specific needs. We offer both project-based and subscription models. Contact us for a custom quote tailored to your requirements.'
    },
    {
      category: 'Technical',
      question: 'Do you provide training for your AI solutions?',
      answer: 'Yes! We provide comprehensive training for all our AI solutions, including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our tools.'
    },
    {
      category: 'General',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and more. Our AI and IT solutions are adaptable to various business needs.'
    },
    {
      category: 'Technical',
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures, comply with industry standards, and provide regular security audits and updates.'
    }
  ];
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  const supportChannels = [
    {
<<<<<<< HEAD
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: '24/7 Available',
      color: 'text-blue-400'
    },
    {
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
      icon: Mail,
      contact: 'support@ziontech.com',
      availability: 'Response within 2 hours',
      color: 'text-green-400'
    },
    {
      name: 'Live Chat',
      description: 'Instant help when you need it most',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-400'
    },
    {
      name: 'Emergency Support',
      description: 'Critical issues resolved quickly',
      icon: Zap,
      contact: '+1 (555) 911-TECH',
      availability: '24/7 Critical Support',
      color: 'text-red-400'
    }
  ];

  const categories = ['all', 'general', 'support', 'implementation', 'training', 'security', 'integration', 'scaling', 'development'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
    setExpandedFAQ(expandedFAQ === index ? null : index);

  };
<<<<<<< HEAD

const PagePage: React.FC = () => {}
      description: 'Get instant help through our chat system',
=======
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7 for critical issues'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 4 hours'
    },
    {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: HelpCircle,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and tutorials',
      link: '/knowledge-base'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      link: '/community'
    },
    {
      icon: Zap,
      title: 'Status Page',
      description: 'Real-time system status and updates',
      link: '/status'
    }
  ];

<<<<<<< HEAD
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Support</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get help and support for our AI and IT solutions.
          </p>
        </div>
      </div>
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      hours: 'Response within 4 hours'
      hours: '24/7'
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Customer support by Zion Tech Group" />
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Contact our expert team via phone, email, or live chat. />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            How Can We
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get help and support for all your needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600">
                Comprehensive documentation and guides for all our services.
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
              <p className="text-gray-600">
                Reach out to our support team for personalized assistance.
              </p>
          </div>

}
  );  ));)
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Contact Support
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Call
              </button>
    </div>

export default SupportPage;
=======
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Support services by Zion Tech Group. Advanced AI and IT solutions for your business." />
=======
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Contact our expert team via phone, email, or live chat." />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Support solutions by Zion Tech Group
            </p>
          </div>
<<<<<<< HEAD
        </div>
=======
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
=======
<<<<<<< HEAD
  return(<>)
      <Helmet />
=======
  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 phone support for urgent issues',
      contact: '+1 (302) 464-0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed technical assistance via email',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Real-time chat support on our website',
      contact: 'Available on website',
      availability: 'Business hours',
      responseTime: 'Within 5 minutes'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and video consultations',
      contact: 'Schedule via portal',
      availability: 'Business hours',
      responseTime: 'Scheduled'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      link: '/community'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category.toLowerCase() === selectedCategory.toLowerCase()) &&
    (searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. 24/7 support available." />
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
=======
        <meta name="description" content="Get help and support for your AI and IT solutions. Find answers, contact our team, and access resources." />
        <meta name="keywords" content="support, help, documentation, FAQ, technical support" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Get Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you. All channels are monitored by our expert team.
              </p>
<<<<<<< HEAD
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
              
              <div className="max-w-md mx-auto relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500",
=======
  return (
    <>
      <Helmet></Helmet>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Get the help you need to make the most of your AI and IT solutions.
              </p>
              
              <div className="max-w-md mx-auto relative mb-8"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Search>
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) =></input> setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the support you need to make the most of your AI and IT solutions. We're here to help you succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                />
              </div>
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)}className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20",
=======
            <div className="mb-12"></div>
              <div className="relative max-w-2xl mx-auto"></div>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Search>
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) =></input> setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
                />
              </div>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-16">,</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 ${channel.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <channel.icon className="w-8 h-8" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-bold text-white mb-3">{channel.name}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className={`${channel.color} font-medium mb-2`}>{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
=======
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                24/7 Support Available
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-400" />
                &lt; 4 Hour Response Time
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-purple-400" />
                Expert Team
              </span>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Get in Touch
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-400 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-medium mb-2">{channel.contact}</p>
                  <p className="text-sm text-gray-500">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                  <span className="inline-block mt-3 bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {faq.category}
                  </span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Support Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Access Resource →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 mb-8">Find answers to common questions</p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category === 'all' ? 'All Questions' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
=======
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              </div>
            )}
          </div>
        </section>

<<<<<<< HEAD
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <div className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                      <HelpCircle className="w-6 h-6 text-purple-400" />
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
=======
                  <p className="text-gray-300 mb-4">{channel.description</p>}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{channel.contact</div>}</div>
                  <div className="text-sm text-gray-400 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability} </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"></div>
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <channel.icon className="w-8 h-8 text-white" /></channel>
                  </div>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2"></di>{channel.contact}</div>
                  <div className="text-sm text-gray-400 flex items-center justify-center"></div>
                    <Clock className="w-4 h-4 mr-2" /></Clock>
                    {channel.availability}
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No questions found matching your search criteria.</p>
              </div>
<<<<<<< HEAD
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation, tutorials, and community resources.
              </p>
=======
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8">Our support team is here to help you succeed with our AI and IT solutions.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
                <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300 mb-6">Comprehensive guides and API documentation for all our solutions.</p>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  View Docs
                </button>
<<<<<<< HEAD
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Community Forum</h3>
                <p className="text-gray-300 mb-6">Connect with other users and get help from the community.</p>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Join Community
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
                <Clock className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Status Page</h3>
                <p className="text-gray-300 mb-6">Check the real-time status of all our services and systems.</p>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Check Status
=======
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover: bg-white/20 transition-all duration-300">,</button>
                  Schedule Call;
=======
            <p className="text-xl text-gray-300 mb-8"></p>
              Our support team is here to help you succeed with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center"></div>
              <h2 className="text-3xl font-bold text-white mb-4"></h>Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
                Our technical team is here to help you succeed. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"></button>
=======
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Support
              </span>
              <br />
              <span className="text-white">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get instant support, find answers to common questions, 
              and access our comprehensive knowledge base.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Search
                  <Search className="w-5 h-5" />
                </button>
=======
        {/* Resources */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Resources
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.link}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                  <div className="flex items-center mt-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is ready to assist you with any questions or issues.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>support@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Middletown, DE</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span className="font-medium">Contact:</span>
                      <span>{channel.contact}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Zap className="w-4 h-4" />
                      <span>{channel.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20'
                }`}
              >
                All
              </button>
              {['General', 'Technical', 'Billing'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      </div>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 ml-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Access Resource</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
                  Contact Support
                  <MessageCircle className="w-5 h-5" />
                </button>
<<<<<<< HEAD
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"></button>
                  Schedule Call
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  Schedule Call
                  <Phone className="w-5 h-5" />
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our expert team is here to help with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5" />
                  Call Support
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  Email Support
                </button>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

export default SupportPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap, Globe, Target, Phone } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', label: 'All Topics', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'getting-started', label: 'Getting Started', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai-services', label: 'AI Services', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'cloud', label: 'Cloud & Infrastructure', icon: <Globe className="w-5 h-5" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'billing', label: 'Billing & Account', icon: <Settings className="w-5 h-5" /> }
  ];

  const faqItems = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact us through our consultation form or call us directly. We'll schedule a free consultation to understand your needs and recommend the best solutions for your business.",
      category: "getting-started",
      featured: true
    },
    {
      id: 2,
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including business intelligence, customer support chatbots, content generation, cybersecurity monitoring, data analytics, and custom AI solutions tailored to your specific needs.",
      category: "ai-services",
      featured: false
    },
    {
      id: 3,
      question: "How secure are your cloud solutions?",
      answer: "Security is our top priority. We implement enterprise-grade security measures including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and GDPR.",
      category: "cloud",
      featured: false
    },
    {
      id: 4,
      question: "Do you provide 24/7 support?",
      answer: "Yes! We offer 24/7 technical support for all our clients. Our support team is available around the clock to help you with any issues or questions you may have.",
      category: "getting-started",
      featured: true
    },
    {
      id: 5,
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex AI solutions may require 3-6 months. We provide detailed timelines during our initial consultation.",
      category: "getting-started",
      featured: false
    },
    {
      id: 6,
      question: "How do you ensure data privacy and compliance?",
      answer: "We follow strict data privacy protocols and are compliant with GDPR, CCPA, and other major privacy regulations. All data is encrypted in transit and at rest, and we never share your data with third parties without explicit consent.",
      category: "security",
      featured: false
    },
    {
      id: 7,
      question: "Can I integrate your solutions with my existing systems?",
      answer: "Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure. We support most major platforms and can create custom integrations as needed.",
      category: "ai-services",
      featured: false
    },
    {
      id: 8,
      question: "What happens if I need to scale my solution?",
      answer: "Our solutions are built to scale with your business. We can easily adjust capacity, add new features, or expand functionality as your needs grow. We also provide ongoing optimization and performance monitoring.",
      category: "cloud",
      featured: false
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageCircle className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "Immediate",
      link: "#chat"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: <Phone className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "Immediate",
      link: "tel:+13024640950"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: <Mail className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "Within 2 hours",
      link: "mailto:support@ziontechgroup.com"
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive knowledge base",
      icon: <BookOpen className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "Immediate",
      link: "/docs"
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete guide to setting up your Zion Tech Group services",
      type: "Guide",
      icon: <BookOpen className="w-6 h-6" />,
      link: "/docs/getting-started"
    },
    {
      title: "API Documentation",
      description: "Comprehensive API reference for developers",
      type: "Technical",
      icon: <FileText className="w-6 h-6" />,
      link: "/api"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      type: "Video",
      icon: <Calendar className="w-6 h-6" />,
      link: "/tutorials"
    },
    {
      title: "Best Practices",
      description: "Industry best practices and recommendations",
      type: "Guide",
      icon: <Award className="w-6 h-6" />,
      link: "/best-practices"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "< 2 min", label: "Average Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Customer Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  const searchResults = searchQuery 
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFAQs;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Support - Zion Tech Group | 24/7 Technical Support"
        description="Get 24/7 technical support from Zion Tech Group. Live chat, phone support, documentation, and expert help for all your AI and technology needs."
        keywords="technical support, customer service, help desk, AI support, cloud support, 24/7 support"
        canonical="https://ziontechgroup.com/support"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We're Here to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Help
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get 24/7 support from our expert team. Whether you need technical assistance, have questions about our services, or want to explore new possibilities, we're here for you.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help, documentation, or answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                How Can We Help?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you. All channels are available 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {channel.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                      <Clock className="w-4 h-4" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-cyan-400 font-semibold">
                      <Target className="w-4 h-4" />
                      <span>{channel.responseTime}</span>
                    </div>
                  </div>
                  <a
                    href={channel.link}
                    className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Get Help
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
=======
<<<<<<< HEAD
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Contact Support;
              </button>
              <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                View Documentation;
=======
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Contact Support
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                View Documentation
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {searchResults.map((item) => (
              <div
                key={item.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  item.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="pr-20">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {searchResults.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-300">Try searching with different keywords or browse our categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Helpful Resources
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation, guides, and resources to get the most out of our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {resource.icon}
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Call Us Now
              </a>
=======
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation. We\'ll assess your needs and recommend the best solution for your business.',
      category: 'general'
    },
    {
      question: 'What is the typical implementation timeline?',
      answer: 'Implementation timelines vary based on project complexity. Simple integrations can take 2-4 weeks, while complex enterprise solutions may require 3-6 months.',
      category: 'implementation'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes! We provide comprehensive training sessions for your team, including hands-on workshops, documentation, and ongoing support.',
      category: 'technical'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer multiple support tiers: email support, phone support, priority support, and dedicated account management for enterprise clients.',
      category: 'general'
    },
    {
      question: 'How do you handle data security?',
      answer: 'We follow industry best practices for data security, including encryption, secure data centers, compliance with regulations, and regular security audits.',
      category: 'technical'
    },
    {
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing including monthly subscriptions, annual contracts, and custom enterprise pricing. Contact our sales team for detailed pricing information.',
      category: 'billing'
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <Mail className="w-8 h-8 text-green-500" />,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 response within 24 hours'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      contact: 'docs.ziontechgroup.com',
      availability: 'Always available'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'all' || faq.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. Find answers to common questions, contact our support team, and access documentation." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service, documentation" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get help and support for your technology solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to your questions, get technical support, and access our comprehensive documentation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-800">
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="mb-4">
                {channel.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{channel.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
              <div className="space-y-2">
                <p className="text-purple-300 text-sm font-semibold">{channel.contact}</p>
                <p className="text-gray-400 text-xs">{channel.availability}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {faq.category}
                    </span>
                    <div className={`transform transition-transform duration-200 ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Contact Support
                <MessageCircle className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Call
              </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Support page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Support
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
  );
};

export default SupportPage;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
