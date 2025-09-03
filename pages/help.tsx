import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { HelpCircle, Search, MessageCircle, Phone, Mail, BookOpen, Video, FileText, Users, Clock, CheckCircle } from 'lucide-react';

const Help: NextPage = () => {
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including AI development, cloud services, web development, mobile development, blockchain solutions, IoT platforms, and cybersecurity services."
    },
    {
      question: "How do I get started with a project?",
      answer: "Contact us through our website, email, or phone to schedule a consultation. We'll discuss your requirements and provide a customized solution proposal."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple websites may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after deployment."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Node.js, Python, AWS, Azure, AI/ML frameworks, blockchain platforms, and mobile development frameworks."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security measures including SSL encryption, secure data storage, regular security audits, and compliance with data protection regulations."
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      href: '/contact'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      action: 'Call Now',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions via email',
      action: 'Send Email',
      href: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      action: 'View Docs',
      href: '/docs'
    }
  ];

  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access documentation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Help & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Support</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Get the help you need to make the most of our technology solutions
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Search className="h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                className="flex-1 text-lg border-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* Support Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Support
              </h2>
              <p className="text-xl text-gray-600">
                Choose the best way to get help with your questions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <Link
                      href={option.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {option.action}
                      <CheckCircle className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our services
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600">
                Our support team is here to help you succeed
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance for critical issues</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals ready to help</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Docs</h3>
                <p className="text-gray-600">Detailed guides and tutorials available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Help;