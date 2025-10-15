import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, ChevronDown, ChevronRight, MessageCircle, Phone, Mail, BookOpen, Video, FileText, Users } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const faqCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <BookOpen className="w-5 h-5" />,
      faqs: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact us through our contact form or call us at +1 302 464 0950. We\'ll schedule a free consultation to understand your needs and recommend the best solutions for your business.'
        },
        {
          question: 'Do you offer free trials?',
          answer: 'Yes! All our services come with a 14-day free trial. No credit card required to start your trial. You can explore our AI tools, IT services, and 5G solutions risk-free.'
        },
        {
          question: 'What information do I need to provide to get started?',
          answer: 'We\'ll need basic information about your business, your current technology stack, your goals, and any specific requirements. Our team will guide you through the process during the initial consultation.'
        },
        {
          question: 'How long does implementation take?',
          answer: 'Implementation time varies depending on the service. AI services typically take 1-2 weeks, IT services 2-4 weeks, and 5G solutions 4-8 weeks. We\'ll provide a detailed timeline during your consultation.'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: <MessageCircle className="w-5 h-5" />,
      faqs: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI solutions including content generation, analytics dashboards, project management, customer support automation, email marketing, code assistance, business intelligence, healthcare assistance, financial advisory, and more.'
        },
        {
          question: 'How accurate are your AI models?',
          answer: 'Our AI models achieve 95%+ accuracy across most use cases. We continuously train and improve our models with the latest data and techniques to ensure optimal performance.'
        },
        {
          question: 'Can I customize AI models for my specific needs?',
          answer: 'Absolutely! We offer custom AI model training and fine-tuning for enterprise clients. Our team will work with you to develop AI solutions tailored to your specific business requirements.'
        },
        {
          question: 'Is my data secure with your AI services?',
          answer: 'Yes, we take data security seriously. All data is encrypted in transit and at rest, and we comply with industry standards including SOC 2, GDPR, and HIPAA where applicable.'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: <FileText className="w-5 h-5" />,
      faqs: [
        {
          question: 'What IT services do you provide?',
          answer: 'Our IT services include cloud migration, cybersecurity consulting, database solutions, DevOps, API management, performance monitoring, web development, mobile app development, blockchain development, IoT solutions, AR/VR development, and MLOps.'
        },
        {
          question: 'Do you support all cloud platforms?',
          answer: 'Yes, we support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud environments. We help you choose the best platform for your needs.'
        },
        {
          question: 'What is your response time for IT support?',
          answer: 'Our response times vary by plan: Basic (24 hours), Professional (4 hours), Enterprise (1 hour). We also offer 24/7 support for enterprise clients with critical systems.'
        },
        {
          question: 'Do you provide ongoing maintenance and support?',
          answer: 'Yes, we offer comprehensive maintenance and support packages including monitoring, updates, security patches, and performance optimization. Support levels vary by plan.'
        }
      ]
    },
    {
      id: '5g-solutions',
      title: '5G Solutions',
      icon: <Video className="w-5 h-5" />,
      faqs: [
        {
          question: 'What 5G services do you offer?',
          answer: 'We provide complete 5G solutions including network implementation, infrastructure design, IoT integration, smart city solutions, edge computing, private networks, mobile applications, data analytics, autonomous vehicles, healthcare solutions, and industrial IoT.'
        },
        {
          question: 'How long does 5G implementation take?',
          answer: '5G implementation typically takes 4-8 weeks depending on the scope and complexity. This includes planning, equipment installation, testing, and optimization.'
        },
        {
          question: 'Do you work with existing network infrastructure?',
          answer: 'Yes, we can integrate 5G solutions with your existing network infrastructure. Our team will assess your current setup and design a seamless integration plan.'
        },
        {
          question: 'What are the benefits of 5G for my business?',
          answer: '5G offers ultra-low latency, high bandwidth, massive device connectivity, and enables new applications like IoT, AR/VR, autonomous systems, and real-time analytics that can transform your business operations.'
        }
      ]
    },
    {
      id: 'billing-pricing',
      title: 'Billing & Pricing',
      icon: <Users className="w-5 h-5" />,
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, bank transfers, and for enterprise clients, we can arrange custom payment terms including purchase orders and net payment terms.'
        },
        {
          question: 'Can I change my plan anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
        },
        {
          question: 'Do you offer volume discounts?',
          answer: 'Yes, we offer volume discounts for multiple services and enterprise clients. Contact our sales team to discuss custom pricing based on your needs.'
        },
        {
          question: 'What happens if I exceed my plan limits?',
          answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional resources as needed. We never cut off service without notice.'
        }
      ]
    }
  ];

  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      contact: '+1 302 464 0950',
      icon: <Phone className="w-6 h-6" />,
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'kleber@ziontechgroup.com',
      icon: <Mail className="w-6 h-6" />,
      availability: '24/7 response within 24 hours'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Start Chat',
      icon: <MessageCircle className="w-6 h-6" />,
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team for assistance." />
        <meta name="keywords" content="help, support, documentation, faq, ai services, it services, 5g solutions, customer support" />
        <meta property="og:title" content="Help Center - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive help and support for all our services" />
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
                Find answers to your questions, access documentation, and get support for all our services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, FAQs, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <button
                    onClick={() => toggleSection(category.id)}
                    className="w-full flex items-center justify-between p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {category.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {category.title}
                      </h2>
                    </div>
                    {expandedSections[category.id] ? (
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    )}
                  </button>
                  
                  {expandedSections[category.id] && (
                    <div className="mt-4 space-y-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                          <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our support team is here to help you succeed. Choose your preferred contact method.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{method.contact}</div>
                  <div className="text-gray-400 text-sm">{method.availability}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Quick Links</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our most popular resources and documentation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <a href="/docs" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Documentation</h3>
                <p className="text-gray-300 text-sm">Technical guides and API references</p>
              </a>
              
              <a href="/api-docs" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">API Reference</h3>
                <p className="text-gray-300 text-sm">Complete API documentation</p>
              </a>
              
              <a href="/status" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                <Video className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">System Status</h3>
                <p className="text-gray-300 text-sm">Service status and uptime</p>
              </a>
              
              <a href="/contact" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Contact Us</h3>
                <p className="text-gray-300 text-sm">Get in touch with our team</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpPage;