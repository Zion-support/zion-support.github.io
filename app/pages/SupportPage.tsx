import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRightIcon, CheckIcon, PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, ClockIcon } from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'General',
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer AI solutions, IT services, cloud infrastructure, cybersecurity, micro SAAS development, and digital transformation services.'
    },
    {
      category: 'Billing',
      question: 'What are your payment terms?',
      answer: 'Payment is due within 30 days of invoice date. We accept major credit cards, bank transfers, and ACH payments.'
    },
    {
      category: 'Technical',
      question: 'Do you provide 24/7 technical support?',
      answer: 'Yes, we offer 24/7 technical support for all our clients. You can reach us via phone, email, or our support portal.'
    },
    {
      category: 'General',
      question: 'How long does it take to implement a solution?',
      answer: 'Implementation time varies depending on the complexity of the solution. Simple implementations can take 2-4 weeks, while complex projects may take 3-6 months.'
    },
    {
      category: 'Billing',
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all new customers. If you are not satisfied, we will refund your payment in full.'
    },
    {
      category: 'Technical',
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our services. If we fail to meet this standard, we provide service credits.'
    }
  ];

  const supportChannels = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: PhoneIcon,
      contact: '+1 302 464 0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get written responses',
      icon: EnvelopeIcon,
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      icon: ChatBubbleLeftRightIcon,
      contact: 'Available on website',
      availability: 'Business hours',
      responseTime: 'Immediate'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === '' || faq.category === selectedCategory) &&
    (searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support from Zion Tech Group. Contact us via phone, email, or live chat for immediate assistance with our AI and IT solutions." />
        <meta name="keywords" content="technical support, customer support, help desk, AI support, IT support, 24/7 support" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get 24/7 technical support from Zion Tech Group. Contact us via phone, email, or live chat for immediate assistance." />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get the help you need with our comprehensive support services. 
            Our expert team is available 24/7 to assist you with any questions or issues.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Can We <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Help You?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to get the support you need, when you need it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{channel.title}</h3>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="text-lg text-purple-400 font-semibold">{channel.contact}</div>
                  <div className="text-sm text-gray-400">Availability: {channel.availability}</div>
                  <div className="text-sm text-gray-400">Response Time: {channel.responseTime}</div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and support
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">All Categories</option>
                  <option value="General">General</option>
                  <option value="Billing">Billing</option>
                  <option value="Technical">Technical</option>
                </select>
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 glass-dark">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Need <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Help?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 glass-dark">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">24/7 Support Available</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 glass-dark">
                <h3 className="text-2xl font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                  <div>Saturday: 10:00 AM - 4:00 PM EST</div>
                  <div>Sunday: Emergency Support Only</div>
                  <div className="text-purple-400 font-semibold mt-4">24/7 Emergency Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;