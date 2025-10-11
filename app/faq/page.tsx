'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqItems: FAQItem[] = [
    {
      id: 'what-ai-services',
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive range of AI services including chatbots, natural language processing, computer vision, machine learning models, predictive analytics, and custom AI solutions. Our services are designed to help businesses automate processes, gain insights from data, and improve customer experiences.',
      category: 'AI Services',
      tags: ['AI', 'Services', 'Automation']
    },
    {
      id: 'pricing-structure',
      question: 'How does your pricing work?',
      answer: 'Our pricing is flexible and based on your specific needs. We offer subscription plans for our SaaS products, project-based pricing for custom development, and enterprise solutions with volume discounts. Contact us for a personalized quote based on your requirements.',
      category: 'Pricing',
      tags: ['Pricing', 'Cost', 'Plans']
    },
    {
      id: 'implementation-time',
      question: 'How long does implementation take?',
      answer: 'Implementation time varies depending on the complexity of your project. Simple AI integrations can take 2-4 weeks, while complex enterprise solutions may require 3-6 months. We provide detailed timelines during our consultation process.',
      category: 'Implementation',
      tags: ['Timeline', 'Implementation', 'Duration']
    },
    {
      id: 'data-security',
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and compliance with GDPR, HIPAA, and SOC 2 standards. Your data is never shared with third parties without explicit consent.',
      category: 'Security',
      tags: ['Security', 'Privacy', 'Compliance']
    },
    {
      id: 'support-availability',
      question: 'What support do you provide?',
      answer: 'We offer 24/7 technical support, dedicated account managers for enterprise clients, comprehensive documentation, video tutorials, and regular check-ins. Our support team is available via email, phone, and live chat.',
      category: 'Support',
      tags: ['Support', 'Help', 'Documentation']
    },
    {
      id: 'custom-solutions',
      question: 'Do you provide custom AI solutions?',
      answer: 'Yes, we specialize in custom AI solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop bespoke AI applications that integrate seamlessly with your existing systems.',
      category: 'Custom Development',
      tags: ['Custom', 'Development', 'Bespoke']
    },
    {
      id: 'integration-process',
      question: 'How do you integrate with existing systems?',
      answer: 'We use APIs, webhooks, and standard integration protocols to connect with your existing systems. Our team conducts a thorough analysis of your current infrastructure and provides seamless integration with minimal disruption to your operations.',
      category: 'Integration',
      tags: ['Integration', 'APIs', 'Systems']
    },
    {
      id: 'training-provided',
      question: 'Do you provide training for our team?',
      answer: 'Yes, we provide comprehensive training programs for your team including hands-on workshops, documentation, video tutorials, and ongoing support. We ensure your team is fully equipped to use and maintain the AI solutions we implement.',
      category: 'Training',
      tags: ['Training', 'Education', 'Workshops']
    },
    {
      id: 'scalability',
      question: 'Can your solutions scale with our business?',
      answer: 'Absolutely. Our solutions are designed with scalability in mind. We use cloud-based architectures and microservices that can automatically scale based on demand, ensuring your AI solutions grow with your business.',
      category: 'Scalability',
      tags: ['Scalability', 'Growth', 'Cloud']
    },
    {
      id: 'roi-expectations',
      question: 'What ROI can we expect?',
      answer: 'Our clients typically see 200-400% ROI within the first year through increased efficiency, reduced costs, and improved customer satisfaction. We provide detailed ROI projections and regular performance reports to track your investment returns.',
      category: 'ROI',
      tags: ['ROI', 'Returns', 'Investment']
    },
    {
      id: 'maintenance-updates',
      question: 'How do you handle maintenance and updates?',
      answer: 'We provide continuous monitoring, regular updates, and proactive maintenance. Our solutions are designed for minimal downtime, and we schedule updates during off-peak hours. Critical updates are deployed immediately with proper testing.',
      category: 'Maintenance',
      tags: ['Maintenance', 'Updates', 'Monitoring']
    },
    {
      id: 'contract-terms',
      question: 'What are your contract terms?',
      answer: 'We offer flexible contract terms ranging from monthly subscriptions to annual agreements. Enterprise clients can benefit from multi-year contracts with volume discounts. All contracts include our standard SLA guarantees and support terms.',
      category: 'Contracts',
      tags: ['Contracts', 'Terms', 'SLA']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: faqItems.length },
    { id: 'AI Services', name: 'AI Services', count: faqItems.filter(item => item.category === 'AI Services').length },
    { id: 'Pricing', name: 'Pricing', count: faqItems.filter(item => item.category === 'Pricing').length },
    { id: 'Implementation', name: 'Implementation', count: faqItems.filter(item => item.category === 'Implementation').length },
    { id: 'Security', name: 'Security', count: faqItems.filter(item => item.category === 'Security').length },
    { id: 'Support', name: 'Support', count: faqItems.filter(item => item.category === 'Support').length },
    { id: 'Custom Development', name: 'Custom Development', count: faqItems.filter(item => item.category === 'Custom Development').length },
    { id: 'Integration', name: 'Integration', count: faqItems.filter(item => item.category === 'Integration').length },
    { id: 'Training', name: 'Training', count: faqItems.filter(item => item.category === 'Training').length },
    { id: 'Scalability', name: 'Scalability', count: faqItems.filter(item => item.category === 'Scalability').length },
    { id: 'ROI', name: 'ROI', count: faqItems.filter(item => item.category === 'ROI').length },
    { id: 'Maintenance', name: 'Maintenance', count: faqItems.filter(item => item.category === 'Maintenance').length },
    { id: 'Contracts', name: 'Contracts', count: faqItems.filter(item => item.category === 'Contracts').length }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredItems = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT services, support, pricing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT services. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{item.question}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                          {item.category}
                        </span>
                        <div className="flex gap-1">
                          {item.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-600 text-gray-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-slate-700 pt-4">
                        <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria.</p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have <span className="text-cyan-400">Questions?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help. Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQPage;