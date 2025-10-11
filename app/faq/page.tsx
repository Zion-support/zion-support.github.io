'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search, Mail, Phone, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI services, IT solutions, and micro SaaS tools including AI chatbots, quantum computing solutions, cloud migration, cybersecurity, business analytics, and more. Our services are designed to help businesses leverage cutting-edge technology for growth and innovation.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing varies by service and scale. AI services start at $199/month, IT services range from $499/month to $15,000/project, and micro SaaS tools start at $29/month. We offer competitive pricing that\'s typically 30-50% below market rates. Contact us for a custom quote based on your specific needs.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes! We provide free consultations to help you understand how our services can benefit your business. Our experts will analyze your needs and recommend the best solutions. You can schedule a consultation by calling (302) 464-0950 or emailing kleber@ziontechgroup.com.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple implementations can take 2-4 weeks, while complex AI or infrastructure projects may take 3-6 months. We provide detailed timelines during the consultation phase and keep you updated throughout the project.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer 24/7 support for all our services. Our support includes technical assistance, system monitoring, updates, and maintenance. We also provide training for your team to ensure smooth operation of implemented solutions.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing systems. Our team has experience with all major platforms and can ensure smooth integration without disrupting your current operations.'
    },
    {
      question: 'What makes your AI solutions different?',
      answer: 'Our AI solutions are built with cutting-edge technology including GPT-4, quantum computing capabilities, and advanced machine learning algorithms. We focus on practical, business-ready AI that delivers measurable results and ROI.'
    },
    {
      question: 'Do you offer custom development?',
      answer: 'Yes, we provide custom development services for unique business requirements. Our team can build custom AI models, software applications, and integrations tailored to your specific needs and industry requirements.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'Security is our top priority. We implement enterprise-grade security including encryption, multi-factor authentication, regular security audits, and compliance with industry standards. All data is protected with advanced security protocols.'
    },
    {
      question: 'Can you help with digital transformation?',
      answer: 'Yes, digital transformation is one of our core specialties. We help businesses modernize their technology stack, implement AI solutions, migrate to cloud platforms, and optimize processes for better efficiency and growth.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and more. Our solutions are adaptable to various sectors and we have industry-specific expertise to deliver relevant solutions.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply contact us through our website, call (302) 464-0950, or email kleber@ziontechgroup.com. We\'ll schedule a free consultation to discuss your needs and create a customized solution plan.'
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's AI services, IT solutions, and micro SaaS tools." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT solutions, micro saas, support" />
        <meta property="og:title" content="FAQ - Zion Tech Group" />
        <meta property="og:description" content="Frequently asked questions about our services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/faq" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Find Answers to Common Questions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get answers to the most common questions about our AI services, IT solutions, 
              and micro SaaS tools. Can't find what you're looking for? Contact us directly.
            </p>
          </section>

          {/* Search Section */}
          <section className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* FAQ Items */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                  <p className="text-gray-300 mb-6">
                    Try adjusting your search terms or contact us directly.
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team is here to help! Contact us directly for personalized assistance 
                and detailed answers to your specific questions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Call Us</div>
                    <div className="text-cyan-400">(302) 464-0950</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Email Us</div>
                    <div className="text-cyan-400">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Live Chat</div>
                    <div className="text-cyan-400">Available 24/7</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Send Email
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
