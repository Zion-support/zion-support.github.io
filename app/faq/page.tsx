'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
=======
  const toggleItem = (index: number) => 
    setOpenItems(prev => )
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including marketing automation, customer support, data analytics, content generation, healthcare solutions, financial services, e-commerce solutions, cybersecurity, mobile apps, sales automation, workflow automation, and data visualization.",
      category: "AI Services"
    },
    {
      question: "How can AI benefit my business?",
      answer: "AI can automate repetitive tasks, provide data-driven insights, improve customer experience, enhance security, optimize operations, and drive innovation. Our solutions typically deliver 300% ROI within the first year.",
      category: "AI Services"
    },
    {
      question: "Do you provide IT infrastructure services?",
      answer: "Yes, we offer complete IT infrastructure services including cloud migration, DevOps, database management, cybersecurity, managed IT services, and IT consulting to modernize your technology stack.",
      category: "IT Services"
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including subscription-based plans starting at $99/month for small businesses, custom enterprise solutions, and project-based pricing. Contact us for a personalized quote.",
      category: "Pricing"
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via phone, email, and live chat to ensure your systems run smoothly around the clock.",
      category: "Support"
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed timelines during consultation.",
      category: "Implementation"
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. Our micro SAAS solutions are specifically designed for small businesses looking to leverage AI technology.",
      category: "Business Size"
    },
    {
      question: "What industries do you serve?",
<<<<<<< HEAD
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.",
      category: "Industries"
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we offer comprehensive training programs for your team to ensure they can effectively use and maintain our solutions. This includes documentation, video tutorials, and hands-on workshops.",
      category: "Training"
    },
    {
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, regular security audits, compliance with industry standards (SOC 2, GDPR, HIPAA), and 24/7 monitoring.",
      category: "Security"
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, our solutions are designed to integrate seamlessly with existing systems through APIs, webhooks, and custom connectors. We ensure minimal disruption to your current workflows.",
      category: "Integration"
    },
    {
      question: "What happens if we need to scale up?",
      answer: "Our solutions are built to scale with your business. We can easily accommodate growth through cloud infrastructure, load balancing, and performance optimization. We also provide ongoing monitoring and optimization.",
      category: "Scaling"
=======
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards."
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
    }
  ];

  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT services, support, pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/faq" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white neon-text-enhanced">
                  Frequently Asked <span className="text-cyan-400">Questions</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find answers to common questions about our AI and IT services, pricing, and implementation.
              </p>
            </div>
          </section>

          {/* Search Bar */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ List */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      )}
                    </button>
                    {openItems.includes(index) && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        <div className="mt-3">
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredFaqs.length === 0 && searchQuery && (
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 text-center">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                  <p className="text-gray-300 mb-6">
                    Try adjusting your search terms or browse our FAQ categories.
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

          {/* Contact CTA */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Can't find what you're looking for? Our team is here to help. 
                  Contact us for personalized assistance with your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Contact Support
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
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