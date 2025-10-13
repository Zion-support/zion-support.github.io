'use client;
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Find answers to common questions about our AI and IT services, pricing, and implementation.</p>
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
            <div className="space-y-4">{faqs.map((faq, index) => (</div>
                <div key={index}className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20">
                  <button;
                    onClick={() =>toggleItem(index)</button>}className="w-full px-6 py-4 text-left flex items-center justify-between hover: bg-slate-700/30 transition-colors">,
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    )} </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer</p>}</p>
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

import React, { useState } from 'react;

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

export default FAQPage;
