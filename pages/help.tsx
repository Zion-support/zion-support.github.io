import React from 'react';
import type { NextPage } from 'next';
import { HelpCircle, Search, MessageCircle, Phone, Mail, Clock, BookOpen, Video, FileText } from 'lucide-react';

const Help: NextPage = () => {
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI services, micro SaaS solutions, and IT infrastructure including AI customer sentiment analysis, automated email follow-up, content generation, CRM systems, project management, zero trust security, and cloud cost optimization."
    },
    {
      question: "How do I get started with your services?",
      answer: "You can get started by contacting us for a free consultation. Call us at +1 302 464 0950 or email kleber@ziontechgroup.com. We'll assess your needs and recommend the best solutions for your business."
    },
    {
      question: "What is the typical implementation timeline?",
      answer: "Implementation timelines vary depending on the service and complexity. Most AI services can be implemented within 2-4 weeks, while larger IT infrastructure projects may take 2-3 months. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, all our services include ongoing support. We provide 24/7 monitoring, regular updates, and dedicated support teams to ensure your systems run smoothly and efficiently."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. Our solutions are designed to integrate seamlessly with existing systems including CRM platforms, cloud services, and other business applications. We handle the integration process as part of our service."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including zero trust architecture, data encryption, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA."
    }
  ];

  const supportOptions = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+1 302 464 0950",
      availability: "24/7 Emergency Support"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us your questions via email",
      contact: "kleber@ziontechgroup.com",
      availability: "Response within 2 hours"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available on website",
      availability: "Business hours"
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Documentation",
      description: "Comprehensive guides and API documentation"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Knowledge Base",
      description: "Searchable database of articles and solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <HelpCircle className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Help & Support
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Get the help you need to make the most of our AI and technology solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support option that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-blue-600 font-semibold mb-2">{option.contact}</p>
                <p className="text-sm text-gray-500">{option.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive resources to get the most out of our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                </div>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Our expert support team is here to help you succeed. Contact us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
              <Phone className="mr-2 w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;