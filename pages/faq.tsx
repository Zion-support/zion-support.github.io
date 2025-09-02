import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ: NextPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: "General",
      questions: [
        {
          id: 1,
          question: "What services does Zion Tech Group offer?",
          answer: "Zion Tech Group provides comprehensive technology solutions including AI development, cloud services, micro SaaS applications, IT infrastructure, cybersecurity, and digital transformation consulting. We serve businesses of all sizes with scalable, customized solutions."
        },
        {
          id: 2,
          question: "How long has Zion Tech Group been in business?",
          answer: "Zion Tech Group has been providing technology solutions and services for several years, helping businesses transform their digital presence with cutting-edge technology and innovative approaches."
        },
        {
          id: 3,
          question: "Do you work with international clients?",
          answer: "Yes, we work with clients globally. Our team is experienced in serving international businesses and can accommodate different time zones and requirements."
        }
      ]
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          id: 4,
          question: "What are your pricing models?",
          answer: "We offer flexible pricing models to suit different needs: fixed-price projects for defined scope, hourly consulting rates, and subscription-based services for ongoing support. Pricing varies based on project complexity, timeline, and specific requirements."
        },
        {
          id: 5,
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your requirements and provide recommendations. This helps us create a tailored proposal that meets your specific needs and budget."
        },
        {
          id: 6,
          question: "What is included in your support services?",
          answer: "Our support services include 24/7 monitoring, regular maintenance, security updates, performance optimization, and technical assistance. Support level and response times depend on your chosen service package."
        },
        {
          id: 7,
          question: "Can you help with existing systems?",
          answer: "Absolutely! We specialize in modernizing and integrating with existing systems. Our team can assess your current infrastructure and provide solutions for improvement, migration, or integration."
        }
      ]
    },
    {
      category: "AI & Technology",
      questions: [
        {
          id: 8,
          question: "What AI services do you provide?",
          answer: "We offer comprehensive AI services including custom AI model development, machine learning implementation, natural language processing, computer vision, predictive analytics, and AI-powered automation solutions."
        },
        {
          id: 9,
          question: "How do you ensure data security in AI projects?",
          answer: "Data security is our top priority. We implement industry-standard encryption, access controls, and compliance measures. All AI projects follow strict data protection protocols and we can work with your existing security frameworks."
        },
        {
          id: 10,
          question: "What cloud platforms do you work with?",
          answer: "We work with all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and others. We can help you choose the best platform for your needs or work with your existing cloud infrastructure."
        }
      ]
    },
    {
      category: "Project Management",
      questions: [
        {
          id: 11,
          question: "How do you manage projects?",
          answer: "We use agile project management methodologies with regular communication, milestone tracking, and transparent reporting. You'll have a dedicated project manager and regular updates on progress."
        },
        {
          id: 12,
          question: "What is your typical project timeline?",
          answer: "Project timelines vary based on scope and complexity. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase."
        },
        {
          id: 13,
          question: "Do you provide training for new systems?",
          answer: "Yes, we provide comprehensive training for all implemented systems. This includes user training, administrator training, and detailed documentation to ensure your team can effectively use the new technology."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          id: 14,
          question: "What are your support response times?",
          answer: "Response times vary by priority: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (72 hours). We offer 24/7 support for critical systems."
        },
        {
          id: 15,
          question: "Do you offer maintenance contracts?",
          answer: "Yes, we offer various maintenance contracts including preventive maintenance, system updates, security patches, and performance monitoring. Contracts can be customized to your specific needs."
        },
        {
          id: 16,
          question: "How do you handle system updates?",
          answer: "We provide scheduled maintenance windows for updates and coordinate with your team to minimize disruption. All updates are tested in staging environments before production deployment."
        }
      ]
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about Zion Tech Group services, pricing, support, and more."
      keywords="FAQ, frequently asked questions, help, support, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Find answers to common questions about our services, pricing, and support.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for questions or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {filteredData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                        {openItems.includes(item.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      
                      {openItems.includes(item.id) && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredData.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No questions found matching your search.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Us
              </a>
              <a
                href="/help"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default FAQ;