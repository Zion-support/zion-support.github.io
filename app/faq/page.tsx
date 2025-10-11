'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, ChevronDown, ChevronUp, HelpCircle, Mail, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      id: 1,
      question: 'What services does Zion Tech Group offer?',
      answer: 'Zion Tech Group offers comprehensive AI and IT solutions including AI-powered customer support, analytics platforms, micro SaaS tools, cloud migration, cybersecurity, quantum computing solutions, and custom software development. We specialize in transforming businesses through cutting-edge technology.',
      category: 'General'
    },
    {
      id: 2,
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! You can contact us through our website, call us at (302) 464-0950, or email us at kleber@ziontechgroup.com. We offer free consultations to understand your needs and recommend the best solutions for your business.',
      category: 'Getting Started'
    },
    {
      id: 3,
      question: 'What is the typical project timeline?',
      answer: 'Project timelines vary depending on the scope and complexity. Simple AI implementations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the project.',
      category: 'Project Management'
    },
    {
      id: 4,
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes! We provide 24/7 support for all our services. Our support includes monitoring, updates, troubleshooting, and optimization. We offer different support tiers to match your needs, from basic email support to dedicated account management.',
      category: 'Support'
    },
    {
      id: 5,
      question: 'What makes your AI solutions different?',
      answer: 'Our AI solutions are built with cutting-edge technology and customized for your specific business needs. We focus on practical applications that deliver real business value, not just technology for technology\'s sake. Our team has deep expertise in AI, machine learning, and quantum computing.',
      category: 'AI Services'
    },
    {
      id: 6,
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing systems. Our solutions are designed to work with popular platforms like Salesforce, Microsoft 365, Google Workspace, and many others. We also provide custom APIs and integration services.',
      category: 'Integration'
    },
    {
      id: 7,
      question: 'What security measures do you have in place?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, secure authentication, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA. All data is protected with multiple layers of security.',
      category: 'Security'
    },
    {
      id: 8,
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs for your team to ensure successful adoption of our solutions. This includes hands-on training, documentation, video tutorials, and ongoing support. We also offer train-the-trainer programs for larger organizations.',
      category: 'Training'
    },
    {
      id: 9,
      question: 'What is your pricing model?',
      answer: 'Our pricing is flexible and depends on the scope of work. We offer subscription-based pricing for our SaaS solutions, project-based pricing for custom development, and hybrid models for ongoing services. Contact us for a detailed quote tailored to your needs.',
      category: 'Pricing'
    },
    {
      id: 10,
      question: 'Do you work with small businesses?',
      answer: 'Yes! We work with businesses of all sizes, from startups to large enterprises. Our micro SaaS tools are specifically designed for small and medium businesses, offering affordable solutions that scale with your growth.',
      category: 'Business Size'
    },
    {
      id: 11,
      question: 'What technologies do you use?',
      answer: 'We use a wide range of cutting-edge technologies including React, Node.js, Python, TensorFlow, PyTorch, AWS, Azure, Google Cloud, Docker, Kubernetes, and more. We choose the best technology stack for each project based on requirements and performance needs.',
      category: 'Technology'
    },
    {
      id: 12,
      question: 'How do you ensure data privacy?',
      answer: 'We follow strict data privacy protocols and comply with all relevant regulations including GDPR, CCPA, and HIPAA. We use encryption, secure data centers, access controls, and regular audits. We also provide data processing agreements and privacy policies.',
      category: 'Privacy'
    }
  ];

  const categories = ['All', 'General', 'Getting Started', 'Project Management', 'Support', 'AI Services', 'Integration', 'Security', 'Training', 'Pricing', 'Business Size', 'Technology', 'Privacy'];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's AI and IT services, pricing, support, and more." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT support, pricing, Zion Tech Group" />
        <meta property="og:title" content="FAQ - Zion Tech Group" />
        <meta property="og:description" content="Frequently asked questions about our services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/faq" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked <span className="text-cyan-400">Questions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact us!
              </p>
            </div>
          </section>

          {/* Search Section */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                />
              </div>
            </div>
          </section>

          {/* FAQ Items */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <div key={faq.id} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                          <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                        )}
                      </button>
                      {openItems.includes(faq.id) && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-white/10 pt-4">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Have <span className="text-cyan-400">Questions?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help! Contact us for personalized assistance with your specific needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 text-sm mb-4">Get detailed answers to your questions</p>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 text-sm mb-4">Speak directly with our experts</p>
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    (302) 464-0950
                  </a>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <MessageSquare className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-300 text-sm mb-4">Get instant help online</p>
                  <a
                    href="/contact"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Start Chat
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  View Services
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