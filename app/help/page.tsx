import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  QuestionMarkCircleIcon, 
  MagnifyingGlassIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CogIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpenIcon,
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact our sales team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
        },
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive AI solutions, IT services, cloud infrastructure, cybersecurity, digital transformation, and micro SaaS solutions. Each service is tailored to meet specific business needs and objectives.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes! We provide free initial consultations to assess your needs and recommend the best solutions. This includes a detailed analysis of your current infrastructure and a customized proposal.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: CogIcon,
      questions: [
        {
          question: 'What kind of technical support do you provide?',
          answer: 'We offer 24/7 technical support for all our services, including phone, email, and chat support. Our expert team is always ready to help with any technical issues or questions you may have.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We guarantee response times based on the severity of the issue: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (48 hours).'
        },
        {
          question: 'Do you provide remote support?',
          answer: 'Yes, we offer secure remote support for most technical issues. Our team can access your systems safely to diagnose and resolve problems quickly and efficiently.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      icon: ChartBarIcon,
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including monthly subscriptions, annual contracts, and project-based pricing. Our pricing is transparent and competitive, with no hidden fees.'
        },
        {
          question: 'Do you offer volume discounts?',
          answer: 'Yes, we provide volume discounts for large deployments and long-term contracts. Contact our sales team to discuss custom pricing based on your specific requirements.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and corporate purchase orders. We also offer flexible payment terms for enterprise customers.'
        }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: ShieldCheckIcon,
      questions: [
        {
          question: 'What security measures do you have in place?',
          answer: 'We implement enterprise-grade security including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and GDPR.'
        },
        {
          question: 'Do you sign NDAs and security agreements?',
          answer: 'Yes, we understand the importance of confidentiality and security. We\'re happy to sign NDAs and security agreements to protect your sensitive information and intellectual property.'
        },
        {
          question: 'How do you handle data privacy?',
          answer: 'We follow strict data privacy protocols and are fully compliant with GDPR, CCPA, and other privacy regulations. Your data is encrypted and stored securely, and we never share it with third parties without your consent.'
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 302 464 0950',
      availability: '24/7 Available'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond quickly',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 4 hours'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on our website',
      availability: 'Business hours'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpenIcon,
      href: '/docs'
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step tutorials and video guides',
      icon: GlobeAltIcon,
      href: '/tutorials'
    },
    {
      title: 'Blog',
      description: 'Latest news, tips, and industry insights',
      icon: ChartBarIcon,
      href: '/blog'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Help Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers to common questions, contact support, and access documentation."
        keywords="help center, support, FAQ, technical support, customer service, documentation, tutorials"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <QuestionMarkCircleIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">Help Center</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                How Can We
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent block">
                  Help You?
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find answers to your questions, get technical support, and access resources to make the most of our services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, and FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Get in <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to reach our support team for immediate assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                    {method.description}
                  </p>
                  <div className="text-blue-400 font-medium mb-2">{method.contact}</div>
                  <div className="text-sm text-gray-500">{method.availability}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Find quick answers to the most common questions about our services.
              </p>
            </div>
            
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Helpful <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Resources</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Access documentation, tutorials, and other resources to help you succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {resource.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpPage;