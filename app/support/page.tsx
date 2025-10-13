import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, HelpCircle, ChevronDown } from 'lucide-react';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I get started with your AI services?",
      answer: "Getting started is easy! Contact our team through the contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best AI solutions for your business."
    },
    {
      id: 2,
      question: "What is the typical implementation timeline?",
      answer: "Implementation timelines vary based on project complexity. Simple AI tools can be deployed in 2-4 weeks, while comprehensive solutions may take 2-6 months. We provide detailed timelines during the consultation phase."
    },
    {
      id: 3,
      question: "Do you provide training for our team?",
      answer: "Yes! We offer comprehensive training programs for all our solutions. This includes initial setup training, ongoing support, and advanced feature workshops to ensure your team can maximize the value of our services."
    },
    {
      id: 4,
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support, regular system monitoring, software updates, and dedicated account management. Our support team is available via phone, email, and our support portal."
    },
    {
      id: 5,
      question: "Can your solutions integrate with our existing systems?",
      answer: "Absolutely! Our solutions are designed with integration in mind. We work with most major platforms and can create custom integrations to ensure seamless connectivity with your existing infrastructure."
    },
    {
      id: 6,
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA where applicable."
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      action: "Start Chat"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri 9AM-6PM PST",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      availability: "24/7",
      action: "Send Email"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. 24/7 technical support, documentation, and expert assistance." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Support Center</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're here to help! Get the support you need for all our AI and IT services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-cyan-400 mb-4">{channel.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
              <p className="text-gray-300 mb-4">{channel.description}</p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>{channel.availability}</span>
              </div>
              <button className="w-full bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors">
                {channel.action}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our expert team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors">
                Contact Support
              </button>
              <button className="bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}