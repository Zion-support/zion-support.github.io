'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  QuestionMarkCircleIcon, 
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const HelpPage: React.FC = () => {
  const faqs = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact us through our contact form or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business."
    },
    {
      question: "What AI solutions do you offer?",
      answer: "We offer comprehensive AI solutions including machine learning, natural language processing, computer vision, predictive analytics, and custom AI model development tailored to your specific business requirements."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, we offer 24/7 technical support for all our clients. Our support team is available around the clock to assist with any issues or questions you may have."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is flexible and based on your specific needs and project scope. We offer both project-based and subscription-based pricing models. Contact us for a personalized quote."
    },
    {
      question: "How long does it take to implement a solution?",
      answer: "Implementation timelines vary depending on the complexity of the project. Simple solutions can be deployed in weeks, while complex enterprise solutions may take several months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you offer training for your solutions?",
      answer: "Absolutely! We provide comprehensive training for all our solutions, including user guides, video tutorials, and hands-on training sessions to ensure your team can effectively use our platforms."
    }
  ];

  const supportOptions = [
    {
      title: "Knowledge Base",
      description: "Browse our comprehensive documentation and guides",
      icon: DocumentTextIcon,
      href: "/docs"
    },
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: ChatBubbleLeftRightIcon,
      href: "/contact"
    },
    {
      title: "Phone Support",
      description: "Call us for immediate assistance",
      icon: PhoneIcon,
      href: "tel:+1-555-0123"
    },
    {
      title: "Email Support",
      description: "Send us your questions via email",
      icon: EnvelopeIcon,
      href: "mailto:support@ziontechgroup.com"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team."
        keywords="help center, support, FAQ, documentation, customer service, technical support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Help Center
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Find answers to your questions and get the support you need for all Zion Tech Group services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, and FAQs..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How can we <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">help you</span>?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {option.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg text-gray-300">
                Find quick answers to the most common questions
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <QuestionMarkCircleIcon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  </button>
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Still need <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">help</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our support team is here to help you succeed. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                Contact Support
              </a>
              <a
                href="/docs"
                className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpPage;
