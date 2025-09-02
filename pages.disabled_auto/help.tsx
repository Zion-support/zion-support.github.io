import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, MessageCircle, Book, Phone, Mail, Clock } from 'lucide-react';

const HelpCenter: NextPage = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I get started with Zion Tech Group services?",
          answer: "Getting started is easy! Simply contact us through our contact form or call us at +1 302 464 0950. We'll schedule a consultation to understand your needs and provide a customized solution."
        },
        {
          question: "What services do you offer?",
          answer: "We offer comprehensive technology solutions including AI development, cloud services, micro SaaS applications, IT infrastructure, cybersecurity, and digital transformation consulting."
        },
        {
          question: "Do you work with small businesses?",
          answer: "Yes! We work with businesses of all sizes, from startups to enterprise organizations. Our solutions are scalable and tailored to meet your specific needs and budget."
        }
      ]
    },
    {
      title: "Services & Pricing",
      questions: [
        {
          question: "What are your pricing models?",
          answer: "Our pricing varies based on the scope and complexity of your project. We offer flexible pricing models including fixed-price projects, hourly consulting, and subscription-based services for ongoing support."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your requirements and provide recommendations. This helps us create a tailored proposal for your specific needs."
        },
        {
          question: "What is included in your support services?",
          answer: "Our support services include 24/7 monitoring, regular maintenance, security updates, performance optimization, and technical assistance. Support level depends on your chosen service package."
        }
      ]
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "How do I get technical support?",
          answer: "You can reach our technical support team through multiple channels: email (kleber@ziontechgroup.com), phone (+1 302 464 0950), or through our client portal for urgent issues."
        },
        {
          question: "What are your response times?",
          answer: "Response times vary by priority level: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (72 hours)."
        },
        {
          question: "Do you provide training for new systems?",
          answer: "Yes, we provide comprehensive training for all implemented systems. This includes user training, administrator training, and documentation to ensure your team can effectively use the new technology."
        }
      ]
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+1 302 464 0950",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions via email",
      contact: "kleber@ziontechgroup.com",
      availability: "24/7 response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST"
    }
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to frequently asked questions and contact our support team."
      keywords="help center, support, FAQ, technical support, customer service"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help You?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Find answers to your questions, get technical support, and learn how to make the most of our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <channel.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <p className="text-blue-600 font-semibold mb-2">{channel.contact}</p>
                  <p className="text-sm text-gray-500">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Support
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HelpCenter;