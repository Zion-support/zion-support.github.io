<<<<<<< HEAD
<<<<<<< HEAD
'use client;
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
<<<<<<< HEAD
  const toggleItem = (index: number) => {,
    setOpenItems(prev =>)
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );}const faqs = [
    {question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including marketing automation, customer support, data analytics, content generation, healthcare solutions, financial services, e-commerce solutions, cybersecurity, mobile apps, sales automation, workflow automation, and data visualization."},
    {question: "How can AI benefit my business?",
      answer: "AI can automate repetitive tasks, provide data-driven insights, improve customer experience, enhance security, optimize operations, and drive innovation. Our solutions typically deliver 300% ROI within the first year."},
    {question: "Do you provide IT infrastructure services?",
      answer: "Yes, we offer complete IT infrastructure services including cloud migration, DevOps, database management, cybersecurity, managed IT services, and IT consulting to modernize your technology stack."},
    {question: "What is your pricing model?",
      answer: "We offer flexible pricing models including subscription-based plans starting at $99/month for small businesses, custom enterprise solutions, and project-based pricing. Contact us for a personalized quote."},
    {question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via phone, email, and live chat to ensure your systems run smoothly around the clock."},
    {question: "How long does implementation take?",
      answer: "Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed timelines during consultation."},
    {question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. Our micro SAAS solutions are specifically designed for small businesses looking to leverage AI technology."},
    {question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards."}]
  return(<React.Fragment>)</React.Fragment>
      <Helmet />
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT services, support, pricing" />
=======
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs: FAQItem[] = [
    {
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including marketing automation, customer support, data analytics, content generation, healthcare solutions, financial services, e-commerce solutions, cybersecurity, mobile apps, sales automation, workflow automation, and data visualization.",
      category: "Services"
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer: "Implementation timelines vary based on complexity, but typically range from 4-12 weeks for standard solutions. Complex enterprise implementations may take 3-6 months. We provide detailed project timelines during our initial consultation.",
      category: "Implementation"
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we offer comprehensive training programs including hands-on workshops, documentation, video tutorials, and ongoing support to ensure your team can effectively use and maintain the AI solutions.",
      category: "Training"
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including monthly subscriptions, project-based pricing, and enterprise agreements. Pricing depends on the scope, complexity, and scale of your requirements. Contact us for a customized quote.",
      category: "Pricing"
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in seamless integration with existing enterprise systems including CRM, ERP, databases, and cloud platforms. Our team works closely with your IT department to ensure smooth integration.",
      category: "Integration"
    },
    {
      question: "What security measures do you implement?",
      answer: "We implement enterprise-grade security including end-to-end encryption, secure data transmission, access controls, regular security audits, compliance with industry standards (GDPR, HIPAA, SOC 2), and secure cloud infrastructure.",
      category: "Security"
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 support for critical issues and business hours support for general inquiries. Our support includes phone, email, live chat, and dedicated account managers for enterprise clients.",
      category: "Support"
    },
    {
      question: "What happens if we need to scale our solution?",
      answer: "Our solutions are designed to scale with your business. We offer flexible scaling options, performance monitoring, and can quickly adjust resources and features as your needs grow.",
      category: "Scaling"
    },
    {
      question: "Do you offer custom AI model development?",
      answer: "Yes, we develop custom AI models tailored to your specific business needs and data. Our team of data scientists and AI engineers can create models for any industry or use case.",
      category: "Custom Development"
    },
    {
      question: "What is your data privacy policy?",
      answer: "We are committed to protecting your data. We follow strict data privacy policies, never share your data with third parties without consent, and comply with all relevant privacy regulations including GDPR and CCPA.",
      category: "Privacy"
    }
  ];

  const categories = ['all', 'Services', 'Implementation', 'Training', 'Pricing', 'Integration', 'Security', 'Support', 'Scaling', 'Custom Development', 'Privacy'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT solutions, services, and support." />
        <meta name="keywords" content="FAQ, questions, answers, AI services, IT solutions, support" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Find answers to common questions about our AI and IT services, pricing, and implementation.</p>
=======
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT solutions. Can't find what you're looking for? Contact our support team.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-center text-sm text-gray-400">
              <HelpCircle className="w-4 h-4 mr-2" />
              <span>Can't find your answer? <a href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact us</a></span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
            <div className="space-y-4">{faqs.map((faq, index) => (</div>
                <div key={index}className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20">
                  <button;
                    onClick={() =>toggleItem(index)</button>}className="w-full px-6 py-4 text-left flex items-center justify-between hover: bg-slate-700/30 transition-colors">,
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
=======
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

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{faq.question}</h3>
                      <span className="text-sm text-cyan-400 bg-slate-700 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                    ) : (
<<<<<<< HEAD
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    )} </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer</p>}</p>
=======
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-slate-700 pt-4">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg mb-4">No FAQs found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Contact Support
                <ChevronDown className="w-5 h-5 ml-2 rotate-90" />
              </a>
              <a
                href="/support"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                View All Support Options
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

import React, { useState } from 'react;
=======
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

import { Helmet } from 'react-helmet-async;

import { ChevronDown, ChevronUp } from lucide-react;

;

const FAQPage: React.FC = () => {

const toggleItem = (index: number) => {;;


const faqs = [;;;

    {
    {
      question: "Do you provide IT infrastructure services?,
      answer: "Yes, we offer complete IT infrastructure services including cloud migration, DevOps, database management, cybersecurity, managed IT services, and IT consulting to modernize your technology stack.
    },
    {
      question: "What is your pricing model?,
      answer: "We offer flexible pricing models including subscription-based plans starting at $99/month for small businesses, custom enterprise solutions, and project-based pricing. Contact us for a personalized quote.
    },
    {
      question: "Do you offer 24/7 support?,
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via phone, email, and live chat to ensure your systems run smoothly around the clock.
    },
    {
      question: "Do you provide ongoing support?,
      answer: Yes, we offer comprehensive support and maintenance services including 24
    },
    {
      question: "What technologies do you use?,
      answer: We use cutting-edge technologies including React, TypeScript, Python, TensorFlow, PyTorch, AWS, Azure, Docker, Kubernetes, and various AI
    },    {
      question: "What industries do you serve?,
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.
                  <
                <)
              ))}
            <

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still have questions?
              <
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help. Contact us for personalized assistance.
              <
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="
                  className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Contact Us
                <
                <a
                  href="
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-purple-700 transition-colors"
                >
                  Free Consultation
                <
              <
            <
          <
        <
      <
    <
    </React.Fragment>)
export default FAQPage;
=======

export default FAQPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
