import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Search, 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  BookOpen, 
  Video, 
  Download,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I get started with your services?",
      answer: "Getting started is easy! Simply contact us through our contact form or schedule a consultation call. Our team will assess your needs and provide a customized solution for your business."
    },
    {
      id: 2,
      question: "What technologies do you specialize in?",
      answer: "We specialize in AI and machine learning, cloud solutions (AWS, Azure, GCP), web and mobile development, cybersecurity, data analytics, and IoT platforms. Our team stays current with the latest technologies and best practices."
    },
    {
      id: 3,
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 support for all our enterprise clients. Our support team is available around the clock to help with any issues or questions you may have."
    },
    {
      id: 4,
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity and scope. Simple web applications typically take 2-4 weeks, while complex AI solutions can take 3-6 months. We provide detailed timelines during the consultation phase."
    },
    {
      id: 5,
      question: "Do you work with startups?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We offer flexible pricing and payment options to accommodate different budgets and needs."
    },
    {
      id: 6,
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA where applicable."
    },
    {
      id: 7,
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in system integration and can work with your existing infrastructure. We support most common platforms and can develop custom APIs for seamless integration."
    },
    {
      id: 8,
      question: "What happens after project completion?",
      answer: "We provide ongoing maintenance, support, and updates after project completion. We also offer training for your team and documentation to ensure smooth operation of your new systems."
    }
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      items: [
        { name: "Quick Start Guide", href: "/help/getting-started" },
        { name: "Account Setup", href: "/help/account-setup" },
        { name: "First Project", href: "/help/first-project" }
      ]
    },
    {
      title: "Technical Support",
      icon: HelpCircle,
      items: [
        { name: "API Documentation", href: "/help/api-docs" },
        { name: "Troubleshooting", href: "/help/troubleshooting" },
        { name: "System Requirements", href: "/help/system-requirements" }
      ]
    },
    {
      title: "Billing & Account",
      icon: CheckCircle,
      items: [
        { name: "Billing Information", href: "/help/billing" },
        { name: "Payment Methods", href: "/help/payment" },
        { name: "Account Management", href: "/help/account" }
      ]
    },
    {
      title: "Resources",
      icon: Download,
      items: [
        { name: "Documentation", href: "/help/docs" },
        { name: "Video Tutorials", href: "/help/tutorials" },
        { name: "Best Practices", href: "/help/best-practices" }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri, 9 AM - 6 PM PST",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions and we'll respond quickly",
      availability: "Response within 24 hours",
      action: "Send Email"
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Schedule a screen sharing session",
      availability: "By appointment",
      action: "Schedule Call"
    }
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, documentation, and contact our support team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Help & Support
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers to your questions, access documentation, and get the support you need 
                to make the most of our services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Help Now</h2>
              <p className="text-lg text-gray-600">Choose the support method that works best for you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <method.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{method.title}</h3>
                      <p className="text-sm text-gray-500">{method.availability}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {method.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Help Categories */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Help Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {helpCategories.map((category, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <category.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link href={item.href} className="text-blue-600 hover:text-blue-700 flex items-center">
                              {item.name}
                              <ExternalLink className="w-4 h-4 ml-1" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="bg-white border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        {expandedFAQ === faq.id ? (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      {expandedFAQ === faq.id && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Status Updates */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">All Systems Operational</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">API Services Running</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Support Team Available</span>
                  </div>
                </div>
                <Link href="/status" className="text-blue-600 hover:text-blue-700 text-sm mt-4 inline-block">
                  View detailed status →
                </Link>
              </div>

              {/* Popular Articles */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Articles</h3>
                <div className="space-y-3">
                  <Link href="/help/api-authentication" className="block text-blue-600 hover:text-blue-700">
                    API Authentication Guide
                  </Link>
                  <Link href="/help/deployment-checklist" className="block text-blue-600 hover:text-blue-700">
                    Deployment Checklist
                  </Link>
                  <Link href="/help/security-best-practices" className="block text-blue-600 hover:text-blue-700">
                    Security Best Practices
                  </Link>
                  <Link href="/help/performance-optimization" className="block text-blue-600 hover:text-blue-700">
                    Performance Optimization
                  </Link>
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Still Need Help?</h3>
                <p className="mb-4">Our support team is here to help you succeed.</p>
                <Link href="/contact">
                  <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}