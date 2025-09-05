<<<<<<< HEAD
import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'services', name: 'Services' },
    { id: 'billing', name: 'Billing' },
    { id: 'technical', name: 'Technical' },
    { id: 'support', name: 'Support' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer a comprehensive range of technology services including AI and machine learning solutions, cloud infrastructure, cybersecurity, custom software development, database solutions, and digital transformation consulting. Our services are designed to help businesses of all sizes leverage technology for growth and efficiency.',
      category: 'general',
      tags: ['services', 'overview', 'technology']
    },
    {
      id: 2,
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form, call us directly, or schedule a consultation. We\'ll discuss your needs, assess your current technology stack, and recommend the best solutions for your business. Our team will guide you through the entire process from initial consultation to implementation.',
      category: 'general',
      tags: ['getting-started', 'consultation', 'process']
    },
    {
      id: 3,
      question: 'Do you offer custom development services?',
      answer: 'Yes! We specialize in custom software development tailored to your specific business needs. Our team can build web applications, mobile apps, APIs, microservices, and more. We work with modern technologies and follow best practices to ensure scalable, maintainable, and secure solutions.',
      category: 'services',
      tags: ['custom-development', 'software', 'applications']
    },
    {
      id: 4,
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 24 hours during business days. For critical issues, we provide 24/7 emergency support for our enterprise clients. Our support team is available via email, phone, and live chat to help you resolve any issues quickly.',
      category: 'support',
      tags: ['support', 'response-time', 'emergency']
    },
    {
      id: 5,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001. We also follow OWASP security guidelines and conduct regular penetration testing to ensure the highest level of security.',
      category: 'technical',
      tags: ['security', 'encryption', 'compliance']
    },
    {
      id: 6,
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! We provide comprehensive integration services and APIs that allow you to seamlessly connect our solutions with your existing business systems and workflows. Our team has experience with a wide range of technologies and can help you integrate with virtually any system.',
      category: 'technical',
      tags: ['integration', 'APIs', 'existing-systems']
    },
    {
      id: 7,
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models to suit different business needs. Our pricing is based on project scope, complexity, and ongoing support requirements. We provide transparent pricing with no hidden fees and offer both fixed-price and time-and-materials options. Contact us for a detailed quote tailored to your specific needs.',
      category: 'billing',
      tags: ['pricing', 'cost', 'billing']
    },
    {
      id: 8,
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions to ensure your team can effectively use and maintain them. Our training includes documentation, video tutorials, hands-on workshops, and ongoing support. We also offer customized training programs based on your specific requirements.',
      category: 'support',
      tags: ['training', 'documentation', 'workshops']
    },
    {
      id: 9,
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Node.js, Python, Java, .NET, AWS, Azure, Google Cloud, Docker, Kubernetes, and more. Our team stays up-to-date with the latest technologies and best practices to provide you with cutting-edge solutions.',
      category: 'technical',
      tags: ['technologies', 'programming', 'cloud']
    },
    {
      id: 10,
      question: 'How do you ensure project quality?',
      answer: 'We follow rigorous quality assurance processes including code reviews, automated testing, manual testing, and continuous integration. Our team uses industry-standard tools and methodologies to ensure high-quality deliverables. We also provide regular project updates and involve you in the review process.',
      category: 'services',
      tags: ['quality', 'testing', 'process']
    },
    {
      id: 11,
      question: 'Do you offer maintenance and support after project completion?',
      answer: 'Yes! We provide ongoing maintenance and support services to ensure your solutions continue to perform optimally. Our support includes bug fixes, updates, security patches, performance monitoring, and technical assistance. We offer various support packages to meet your specific needs.',
      category: 'support',
      tags: ['maintenance', 'support', 'updates']
    },
    {
      id: 12,
      question: 'Can you help with digital transformation?',
      answer: 'Absolutely! Digital transformation is one of our core services. We help businesses modernize their processes, adopt new technologies, and create digital-first strategies. Our approach includes assessment, strategy development, implementation, and change management to ensure successful transformation.',
      category: 'services',
      tags: ['digital-transformation', 'modernization', 'strategy']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const popularQuestions = faqs.filter(faq => 
    faq.tags.includes('getting-started') || 
    faq.tags.includes('services') || 
    faq.tags.includes('pricing')
  );

  return (
    <MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about our services, pricing, support, and more. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, help, support, services, pricing, technical questions"
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import Layout from '../components/Layout';

const faqs = [
  {
    id: 1,
    question: "What services does Zion Tech Group offer?",
    answer: "We offer comprehensive AI services, IT solutions, and micro SAAS platforms including AI-powered code review, smart contract security, cloud migration, cybersecurity, data analytics, and much more."
  },
  {
    id: 2,
    question: "How do I get started with your services?",
    answer: "Getting started is easy! You can contact us at +1 302 464 0950 or email kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs."
  },
  {
    id: 3,
    question: "What are your pricing models?",
    answer: "Our pricing varies by service and ranges from $19/month for basic micro SAAS tools to $2,999+/month for enterprise solutions. Contact us for detailed pricing information."
  },
  {
    id: 4,
    question: "Do you provide support and maintenance?",
    answer: "Yes! We provide comprehensive support and maintenance for all our services including 24/7 technical support, regular updates, and ongoing optimization."
  },
  {
    id: 5,
    question: "Are your services secure and compliant?",
    answer: "Absolutely. We maintain SOC 2 Type II, ISO 27001, GDPR, HIPAA, and PCI DSS compliance with enterprise-grade security measures."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <Layout
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about our services and solutions."
      keywords="FAQ, questions, help, support"
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
    >
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about our services.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
=======
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQ..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#faq-categories"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse FAQ
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Can't find the answer you're looking for? Our support team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Visit Support Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Now that you have the answers you need, let's discuss how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
    </Layout>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  );
}