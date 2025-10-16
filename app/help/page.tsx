import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, HelpCircle, MessageCircle, BookOpen, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I get started with your AI services?",
      answer: "Getting started is easy! Simply contact us through our contact form or call us directly. We'll schedule a free consultation to understand your needs and recommend the best AI solutions for your business."
    },
    {
      id: 2,
      question: "What is the typical project timeline?",
      answer: "Project timelines vary depending on complexity. Simple web applications typically take 2-4 weeks, while complex AI implementations can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      id: 3,
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes! We provide comprehensive support packages including maintenance, updates, and 24/7 technical support. Our SLA guarantees 99.9% uptime and response times under 2 hours for critical issues."
    },
    {
      id: 4,
      question: "What technologies do you work with?",
      answer: "We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and various AI/ML frameworks like TensorFlow and PyTorch."
    },
    {
      id: 5,
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including data encryption, secure authentication, regular security audits, and compliance with SOC 2, GDPR, and other industry standards."
    },
    {
      id: 6,
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing systems and can work with your current infrastructure. We'll assess your systems and provide seamless integration solutions."
    },
    {
      id: 7,
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote."
    },
    {
      id: 8,
      question: "Do you provide training for our team?",
      answer: "Yes! We offer comprehensive training programs to help your team understand and maintain the solutions we build. This includes documentation, video tutorials, and hands-on training sessions."
    }
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      icon: <HelpCircle className="w-6 h-6" />,
      description: "New to our services? Start here for basic information and setup guides.",
      articles: [
        "How to get started",
        "Account setup guide",
        "First project walkthrough",
        "Basic configuration"
      ]
    },
    {
      title: "AI Services",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Learn about our AI solutions and how to implement them effectively.",
      articles: [
        "AI Analytics setup",
        "Machine Learning models",
        "Content generation tools",
        "Natural Language Processing"
      ]
    },
    {
      title: "Technical Support",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Get help with technical issues and troubleshooting.",
      articles: [
        "Common issues",
        "API documentation",
        "Error codes",
        "Performance optimization"
      ]
    },
    {
      title: "Account & Billing",
      icon: <Phone className="w-6 h-6" />,
      description: "Manage your account, billing, and subscription settings.",
      articles: [
        "Billing information",
        "Payment methods",
        "Subscription management",
        "Invoice downloads"
      ]
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+1 302 464 0950",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@ziontechgroup.com",
      availability: "Response within 24 hours"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST"
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
        <meta name="description" content="Get help with Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team." />
        <meta name="keywords" content="help, support, documentation, FAQ, troubleshooting, contact support" />
        <meta property="og:title" content="Help Center - Zion Tech Group" />
        <meta property="og:description" content="Get help and support for our AI and IT services" />
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
                Find answers to your questions, access documentation, and get the support you need.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Browse Help Topics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the information you need organized by category
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">
                        • {article}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to the most common questions
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our support team is here to help you succeed
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                  <div className="text-cyan-400 mb-6 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{method.contact}</div>
                  <div className="text-gray-400 text-sm">{method.availability}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8">
                Can't find what you're looking for? Contact us directly and we'll help you find the right solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/docs"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpPage;