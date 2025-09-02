import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, MessageCircle, Phone, Mail, FileText, Video, BookOpen, HelpCircle } from 'lucide-react';

const Help: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer a comprehensive range of technology services including AI solutions, cloud computing, cybersecurity, software development, digital transformation, and micro SaaS development. Our services are designed to help businesses of all sizes achieve their digital goals.'
    },
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! You can contact us through our website, call us directly, or schedule a consultation. We\'ll discuss your needs and provide a customized solution that fits your business requirements and budget.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes! We work with businesses of all sizes, from startups to large enterprises. We have solutions tailored for different business needs and budgets, including special packages for small businesses and startups.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on the scope and complexity of the work. Simple projects can be completed in a few weeks, while larger implementations may take several months. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Absolutely! We offer comprehensive support and maintenance services to ensure your solutions continue to perform optimally. Our support packages include regular updates, monitoring, and technical assistance.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern technologies including AI/ML, cloud platforms (AWS, Azure, GCP), cybersecurity tools, modern web frameworks (React, Next.js, Node.js), and emerging technologies like blockchain and IoT.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support through our website chat',
      contact: 'Available on website',
      availability: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Schedule a video call with our experts',
      contact: 'Schedule online',
      availability: 'By appointment'
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
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and webinars',
      link: '/tutorials'
    },
    {
      icon: HelpCircle,
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      link: '/community'
    }
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to common questions and connect with our support team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find answers, get support, and learn how to make the most of our services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <channel.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {channel.description}
                </p>
                <p className="text-blue-600 font-semibold mb-2">
                  {channel.contact}
                </p>
                <p className="text-sm text-gray-500">
                  {channel.availability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Helpful Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <resource.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <a 
                  href={resource.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Access Resource →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you succeed. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="mailto:support@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;