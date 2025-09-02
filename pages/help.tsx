import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { 
  Search, HelpCircle, 
  MessageCircle, Phone, 
  Mail, BookOpen, 
  Video, FileText, 
  ChevronDown, ChevronRight,
  CheckCircle, ExternalLink
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const faqCategories = [
    {
      title: 'Getting Started', icon: BookOpen,
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?', answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a free consultation to understand your needs and provide a customized solution.'
        },
        {
          question: 'What services do you offer?', answer: 'We offer comprehensive technology services including AI development, IT services, web development, cloud services, and micro SaaS solutions. Visit our services page for detailed information.'
        },
        {
          question: 'Do you provide free consultations?', answer: 'Yes! We offer free initial consultations to discuss your project requirements and provide recommendations. This helps us understand your needs and you understand our capabilities.'
        }
      ]
    }, {
      title: 'Technical Support',
      icon: HelpCircle, questions: [
        {
          question: 'What kind of technical support do you provide?',
          answer: 'We provide comprehensive technical support including 24/7 monitoring, troubleshooting, maintenance, and updates. Our support team is available via phone, email, and chat.'
        },
        {
          question: 'How quickly do you respond to support requests?', answer: 'We respond to critical issues within 1 hour and non-critical issues within 4 hours during business hours. Emergency support is available 24/7 for enterprise clients.'
        },
        {
          question: 'Do you provide training for new systems?', answer: 'Yes, we provide comprehensive training for all systems we implement. This includes user training, administrator training, and documentation to ensure smooth adoption.'
        }
      ]
    }, {
      title: 'Billing & Pricing',
      icon: FileText, questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including project-based pricing, hourly rates, and retainer agreements. Pricing depends on the scope and complexity of your project.'
        }, {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can discuss payment terms that work best for your budget and project timeline.'
        },
        {
          question: 'Are there any hidden fees?', answer: 'No hidden fees! We provide transparent pricing with detailed estimates before starting any project. All costs are clearly outlined in our proposals.'
        }
      ]
    }, {
      title: 'Project Management',
      icon: MessageCircle, questions: [
        {
          question: 'How do you manage projects?',
          answer: 'We use agile project management methodologies with regular check-ins, progress reports, and milestone reviews. You\'ll have a dedicated project manager and direct access to the development team.'
        }, {
          question: 'What is your typical project timeline?',
          answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase.'
        },
        {
          question: 'Can I track project progress?', answer: 'Yes! We provide regular progress updates, milestone reports, and access to project management tools where you can track progress in real-time.'
        }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Contact Support', href: '/contact', icon: MessageCircle }, { title: 'Documentation', href: '/docs', icon: BookOpen },
    { title: 'Video Tutorials', href: '/training', icon: Video }, { title: 'API Reference', href: '/api', icon: FileText },
    { title: 'Status Page', href: '/status', icon: CheckCircle }
  ];

  const contactMethods = [
    {
      icon: Phone, title: 'Phone Support',
      description: 'Call us for immediate assistance', contact: '+1 302 464 0950',
      href: 'tel:+13024640950'
    }, {
      icon: Mail,
      title: 'Email Support', description: 'Send us a detailed message',
      contact: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MessageCircle, title: 'Live Chat',
      description: 'Chat with our support team', contact: 'Available 9 AM - 6 PM EST',
      href: '/contact'
    }
  ];

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to frequently asked questions, contact support, and access documentation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/help" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Help & <span className="text-blue-600">Support</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers to your questions, get technical support, and access helpful resources. 
                We&apos;re here to help you succeed with our technology solutions.'
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-lg text-gray-600">Access helpful resources and support channels</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="bg-gray-50 rounded-lg p-6 text-center hover: bg-blue-50 hover:border-blue-200 border border-transparent transition-all group"
                >
                  <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Support</h2>
              <p className="text-lg text-gray-600">Get in touch with our support team</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="bg-white rounded-lg p-8 text-center hover: shadow-lg transition-shadow border border-gray-200"
                >
                  <method.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-blue-600 font-medium">{method.contact}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Find answers to common questions</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-lg hover: bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <category.icon className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    </div>
                    {expandedCategory === category.title ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedCategory === category.title && (
                    <div className="mt-4 space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-white border border-gray-200 rounded-lg p-6">
                          <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </Link>
              <Link href="/docs" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
</>
  );
}