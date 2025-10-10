'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'We offer comprehensive AI solutions, cloud services, cybersecurity, custom development, data analytics, and IT consulting. Our services are designed to help businesses transform digitally and achieve their goals.',
      category: 'Services'
    },
    {
      id: 2,
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the specific services and scope of work. We offer flexible pricing plans starting from $2,999/month for our Starter plan. Contact us for a customized quote based on your needs.',
      category: 'Pricing'
    },
    {
      id: 3,
      question: 'Do you work with small businesses?',
      answer: 'Yes! We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to meet the specific needs and budget of small businesses.',
      category: 'Business Size'
    },
    {
      id: 4,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. Simple AI integrations can take 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed timelines during our consultation.',
      category: 'Timeline'
    },
    {
      id: 5,
      question: 'What technologies do you use?',
      answer: 'We use cutting-edge technologies including machine learning frameworks (TensorFlow, PyTorch), cloud platforms (AWS, Azure, GCP), modern programming languages (Python, JavaScript, TypeScript), and various AI/ML tools and libraries.',
      category: 'Technology'
    },
    {
      id: 6,
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We provide 24/7 technical support, regular system monitoring, proactive maintenance, and dedicated account management. Our support team ensures your solutions continue to perform optimally.',
      category: 'Support'
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT solutions, services, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI solutions, IT services, support" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT solutions, 
              services, and support options.
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-lg">
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
                >
                  <div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm mr-3">
                      {faq.category}
                    </span>
                    <span className="text-white font-semibold">{faq.question}</span>
                  </div>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. 
              Contact us and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;