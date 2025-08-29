import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, Mail, Phone, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData: FAQItem[] = [
    // Services
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including AI & Machine Learning, Cloud & DevOps, Cybersecurity, Data & Analytics, Enterprise Solutions, and Emerging Technologies like quantum computing and blockchain.",
      category: "services"
    },
    {
      question: "Do you provide custom AI solutions?",
      answer: "Yes, we specialize in custom AI solutions including multi-agent workflows, RAG systems, natural language processing, computer vision, and intelligent automation platforms tailored to your business needs.",
      category: "services"
    },
    {
      question: "What cloud platforms do you work with?",
      answer: "We work with all major cloud platforms including AWS, Azure, Google Cloud, and provide multi-cloud solutions, Kubernetes orchestration, and DevOps automation services.",
      category: "services"
    },
    {
      question: "Do you offer cybersecurity consulting?",
      answer: "Absolutely. Our cybersecurity services include zero-trust architecture implementation, SOC 2 compliance, threat detection systems, security hardening, and comprehensive security audits.",
      category: "services"
    },
    // Pricing
    {
      question: "How do you price your services?",
      answer: "Our pricing varies based on project scope, complexity, and requirements. We offer flexible engagement models including project-based pricing, retainer agreements, and subscription services. Contact us for a custom quote.",
      category: "pricing"
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we provide free initial consultations to understand your needs and discuss how our solutions can help your business. This includes a comprehensive assessment and proposal discussion.",
      category: "pricing"
    },
    {
      question: "What payment terms do you offer?",
      answer: "We offer flexible payment terms including milestone-based payments, monthly retainers, and project completion payments. We can work with your budget and cash flow requirements.",
      category: "pricing"
    },
    // Support
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support, regular maintenance, monitoring, and ongoing consultation. Our support includes emergency response, regular updates, and proactive issue prevention.",
      category: "support"
    },
    {
      question: "Do you provide training for your solutions?",
      answer: "Yes, we provide comprehensive training for all our solutions including user training, administrator training, and ongoing support to ensure your team can effectively use and maintain the systems.",
      category: "support"
    },
    {
      question: "What is your response time for support issues?",
      answer: "We guarantee response times based on issue severity: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (48 hours).",
      category: "support"
    },
    // Implementation
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary from 2-8 weeks for standard solutions to 3-6 months for complex enterprise systems. We provide detailed project timelines during the planning phase.",
      category: "implementation"
    },
    {
      question: "Do you handle data migration?",
      answer: "Yes, we provide comprehensive data migration services including data analysis, mapping, validation, and testing to ensure smooth transitions with minimal downtime.",
      category: "implementation"
    },
    {
      question: "What happens after implementation?",
      answer: "Post-implementation, we provide go-live support, user training, documentation, and ongoing maintenance. We also offer optimization services to continuously improve performance.",
      category: "implementation"
    },
    // Company
    {
      question: "Where is Zion Tech Group located?",
      answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown DE 19709. We serve clients globally and have team members across different time zones.",
      category: "company"
    },
    {
      question: "How long has Zion Tech Group been in business?",
      answer: "Zion Tech Group has been delivering innovative technology solutions for over a decade, helping hundreds of businesses transform their digital presence and achieve their technology goals.",
      category: "company"
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and technology. Our solutions are adaptable to any industry's specific needs.",
      category: "company"
    }
  ];

  const categories = ['all', 'services', 'pricing', 'support', 'implementation', 'company'];

  const filteredFAQs = faqData.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
              <HelpCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-full sm:w-auto"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {expandedItems.has(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedItems.has(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Our team is here to help. Get in touch with us for personalized assistance and expert guidance.
            </p>
            
            {/* Contact Methods */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="mx-auto h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
                <p className="mt-2 text-blue-100">
                  +1 302 464 0950
                </p>
              </div>
              <div>
                <div className="mx-auto h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="mt-2 text-blue-100">
                  kleber@ziontechgroup.com
                </p>
              </div>
              <div>
                <div className="mx-auto h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                <p className="mt-2 text-blue-100">
                  Available during business hours
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+13024640950"
                className="w-full sm:w-auto rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200"
              >
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="w-full sm:w-auto rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}