<<<<<<< HEAD
=======
'use client';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

<<<<<<< HEAD
export default function Support() {
=======
<<<<<<< HEAD
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

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(');

  const [selectedCategory, setSelectedCategory] = useState('all);

=======
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {}
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [;
    { id: 'all', name: 'All Topics },
    { id: 'general', name: 'General },
    { id: 'technical', name: 'Technical },
    { id: 'billing', name: 'Billing },
    { id: 'implementation', name: 'Implementation }

  ];

  const faqs: FAQ[] = [
<<<<<<< HEAD
    {
      question: 'How do I get started with your AI solutions?,
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.,
      category: 'general
    },
      category: 'general});)},
    {
      question: 'What support do you provide after implementation?,
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.,
      category: 'support
=======
    {}
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
=======
import { Search, Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight, Star, Users, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
import React from 'react';

const SupportPage: React.FC = () => {
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and create a customized implementation plan.',
      category: 'Getting Started'
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
      category: 'general'
    },
      category: 'general'});;)
},
    {}
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.',
      category: 'support'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    },
      category: 'support});)},
    {
<<<<<<< HEAD
      question: 'How long does implementation typically take?,
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.,
      category: 'implementation});)
},
<<<<<<< HEAD
=======
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing infrastructure and third-party applications.',
      category: 'Integration'
    },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
    {
      question: 'Do you offer training for our team?,
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.,
      category: 'training});)
},
    {
<<<<<<< HEAD
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
=======
    {}
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.',
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
    }
  ];

  const supportChannels = [
    {}
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: Phone,
      contact: '+1 (555) 123-4567,
      availability: '24/7 Available,
      color: 'text-blue-400
    },
<<<<<<< HEAD
      color: 'text-blue-400});)},
    {
      name: 'Email Support,
      description: 'Get detailed responses to your questions,
=======
      color: 'text-blue-400'});;)
},
    {}
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: Mail,
      contact: 'support@ziontech.com,
      availability: 'Response within 2 hours,
      color: 'text-green-400
    },
<<<<<<< HEAD
      color: 'text-green-400});)},
    {
      name: 'Live Chat,
      description: 'Instant help when you need it most,
=======
      color: 'text-green-400'});;)
},
    {}
      name: 'Live Chat',
      description: 'Instant help when you need it most',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: MessageCircle,
      contact: 'Available on website,
      availability: 'Mon-Fri 9AM-6PM EST,
      color: 'text-purple-400});)
},
<<<<<<< HEAD
    {
      name: 'Emergency Support,
      description: 'Critical issues resolved quickly,
=======
    {}
      name: 'Emergency Support',
      description: 'Critical issues resolved quickly',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: Zap,
      contact: '+1 (555) 911-TECH,
      availability: '24/7 Critical Support,
      color: 'text-red-400});)
}

=======
      question: 'Do you offer training for my team?',
      answer: 'Absolutely! We provide comprehensive training programs to ensure your team can effectively use and maintain the solutions.',
      category: 'Training'
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      hours: '24/7 Available'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
  ];

<<<<<<< HEAD
  const filteredFAQs = faqs.filter(faq => {;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());;

  const toggleFAQ = (index: number) => {;
=======
  const filteredFAQs = faqs.filter(faq => {}
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
<<<<<<< HEAD
    return matchesSearch && matchesCategory});;)
});;

  const toggleFAQ = (index: number) => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    setExpandedFAQ(expandedFAQ === index ? null : index);

  };

const PagePage: React.FC = () => {}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
=======
    return matchesSearch && matchesCategory;
  });
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      icon: MessageCircle,
      contact: 'Available on website',
    }
  ]

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
      <Helmet>
<<<<<<< HEAD
        <title>Support - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Customer support by Zion Tech Group" />
=======
<<<<<<< HEAD
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Contact our expert team via phone, email, or live chat. />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk />
>>>>>>> origin/cursor/ad-creation-and-management-f267
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
=======
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers, contact support, and access resources." />
      availability: '24/7'
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: <Users className="w-5 h-5" />,
      link: '/community'
  return (
    <>
  </>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." />
        <meta name="keywords" content="technical support, AI support, IT help, customer service, documentation, troubleshooting" />
      </Helmet>
      
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get help and support for all your needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600">
                Comprehensive documentation and guides for all our services.
=======
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Search for Help</h2>
            <p className="text-gray-300">Find answers to common questions and solutions</p>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help, questions, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>
            <p className="text-xl text-gray-300">Get in touch with our support team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <p className="text-cyan-400 font-semibold mb-2">{channel.contact}</p>
                <p className="text-sm text-gray-400">{channel.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Find answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-2 py-1 rounded-full mr-3">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
        {/* Search Section */}
        <section className="py-16 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How can we help you?</h2>
              <p className="text-xl text-gray-300">Search our knowledge base or contact our support team</p>
            </div>
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value</div>
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id</div>
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to contact our support team
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
              <p className="text-gray-600">
                Reach out to our support team for personalized assistance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Join our community forum for discussions and tips.
              </p>
            </div>
<<<<<<< HEAD
          </div>
<<<<<<< HEAD

=======
>>>>>>> origin/clean-main-20251013-145848
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======

  );  ));)
=======
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Support services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Support</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
=======
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            ))
          </div>
        </div>
      </section>

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};
<<<<<<< HEAD

export default SupportPage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
export default SupportPage;
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
