import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, HelpCircle, MessageSquare, Phone, Mail, Book, ChevronDown, ChevronRight } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      articles: 12
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Account & Billing",
      description: "Manage your account, billing, and subscription",
      articles: 8
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Technical Support",
      description: "Troubleshooting and technical assistance",
      articles: 15
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "API Documentation",
      description: "Integrate with our services using our APIs",
      articles: 20
    }
  ];

  const faqs = [
    {
      question: "How do I get started with your AI services?",
      answer: "Getting started is easy! Simply contact our sales team for a free consultation. We'll assess your needs and recommend the best AI solutions for your business. You can also start with our free trial to explore our platform."
    },
    {
      question: "What is included in the free trial?",
      answer: "Our free trial includes access to all basic features, limited AI requests, and email support. You can test our AI tools, explore the dashboard, and experience our platform for 14 days with no credit card required."
    },
    {
      question: "How do I upgrade my plan?",
      answer: "You can upgrade your plan anytime from your account dashboard. Simply go to the billing section, select your desired plan, and the changes will take effect immediately. You'll be charged the prorated amount for the remainder of your billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings. Go to the billing section and click 'Cancel Subscription'. Your access will continue until the end of your current billing period."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes! We offer custom AI and IT solutions tailored to your specific needs. Contact our sales team to discuss your requirements and get a personalized quote for your project."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including email support, live chat, phone support, and dedicated account managers for enterprise clients. Our support team is available 24/7 for critical issues."
    },
    {
      question: "How secure is my data?",
      answer: "We take data security seriously. All data is encrypted in transit and at rest, we're SOC 2 compliant, and we follow industry best practices for data protection. We also offer additional security features for enterprise clients."
    }
  ];

  const contactMethods = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "Immediate"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us a detailed message and we'll respond quickly",
      availability: "24/7",
      responseTime: "< 2 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help with Zion Tech Group's AI and IT services. Find answers to common questions, browse documentation, and contact our support team." />
        <meta name="keywords" content="help center, support, documentation, FAQ, customer service, technical support" />
        <meta property="og:title" content="Help Center - Zion Tech Group" />
        <meta property="og:description" content="Get help and support for our services" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to your questions, browse our documentation, and get the support you need.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, FAQs, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Browse by Category</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the help you need organized by topic
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer">
                  <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{category.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{category.description}</p>
                  <div className="text-cyan-400 text-sm text-center">
                    {category.articles} articles
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-300">
                  Quick answers to the most common questions
                </p>
              </div>
              
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <span className="text-white font-semibold">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronDown className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-cyan-400" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our support team is here to help you succeed. Choose the contact method that works best for you.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                    <div className="text-cyan-400 mb-6 flex justify-center">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                    <p className="text-gray-300 mb-4">{method.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Availability:</span>
                        <span className="text-cyan-400">{method.availability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Response:</span>
                        <span className="text-cyan-400">{method.responseTime}</span>
                      </div>
                    </div>
                    <button className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      Contact Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Quick Links</h2>
                <p className="text-xl text-white/90 mb-8">
                  Access our most popular resources and documentation
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <a 
                    href="/docs" 
                    className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    View Documentation
                  </a>
                  <a 
                    href="/api-docs" 
                    className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    API Reference
                  </a>
                  <a 
                    href="/status" 
                    className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    System Status
                  </a>
                  <a 
                    href="/contact" 
                    className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpPage;