import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ: NextPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          id: 1,
          question: 'What services does Zion Tech Group offer?',
          answer: 'Zion Tech Group offers comprehensive technology solutions including AI development, cloud architecture, web and mobile development, IT consulting, cybersecurity services, and custom software solutions. We specialize in helping businesses transform their digital presence with cutting-edge technology.'
        },
        {
          id: 2,
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group has been providing technology solutions for over 5 years, helping businesses across various industries achieve their digital transformation goals. We have a proven track record of delivering high-quality solutions and maintaining long-term client relationships.'
        },
        {
          id: 3,
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, government, education, and startups. Our solutions are tailored to meet the specific needs and compliance requirements of each industry we work with.'
        },
        {
          id: 4,
          question: 'Do you work with small businesses or only large enterprises?',
          answer: 'We work with businesses of all sizes, from startups and small businesses to large enterprises. Our flexible approach allows us to scale our services to meet the needs and budget of any organization, regardless of size.'
        }
      ]
    },
    {
      title: 'Services & Solutions',
      icon: MessageCircle,
      questions: [
        {
          id: 5,
          question: 'What is your AI development process?',
          answer: 'Our AI development process includes requirements analysis, data assessment, model selection, training and testing, deployment, and ongoing monitoring. We use industry-leading frameworks and tools to ensure optimal performance and scalability of AI solutions.'
        },
        {
          id: 6,
          question: 'Do you provide cloud migration services?',
          answer: 'Yes, we offer comprehensive cloud migration services including assessment, planning, migration execution, and post-migration support. We work with all major cloud providers (AWS, Azure, Google Cloud) to ensure a smooth transition to the cloud.'
        },
        {
          id: 7,
          question: 'What technologies do you specialize in?',
          answer: 'We specialize in modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms, microservices architecture, DevOps tools, and cybersecurity solutions. We stay current with the latest technology trends to provide cutting-edge solutions.'
        },
        {
          id: 8,
          question: 'Do you offer ongoing support and maintenance?',
          answer: 'Yes, we provide comprehensive support and maintenance services including 24/7 monitoring, regular updates, security patches, performance optimization, and technical support. Our support plans are tailored to meet your specific needs and budget.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      icon: Phone,
      questions: [
        {
          id: 9,
          question: 'How do you price your services?',
          answer: 'Our pricing is based on project scope, complexity, timeline, and specific requirements. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. We provide detailed quotes after understanding your specific needs.'
        },
        {
          id: 10,
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans to accommodate different budgets. Payment terms are typically structured with milestones for larger projects, and we can discuss payment options that work best for your business during the consultation process.'
        },
        {
          id: 11,
          question: 'Are there any hidden costs?',
          answer: 'No, we believe in transparent pricing. All costs are clearly outlined in our proposals and contracts. We will discuss any potential additional costs upfront and get your approval before proceeding with any work that may incur extra charges.'
        }
      ]
    },
    {
      title: 'Project Management',
      icon: Mail,
      questions: [
        {
          id: 12,
          question: 'How long do projects typically take?',
          answer: 'Project timelines vary based on scope and complexity. Simple websites may take 2-4 weeks, while complex enterprise solutions can take 3-6 months or longer. We provide detailed timelines during the planning phase and keep you updated on progress throughout the project.'
        },
        {
          id: 13,
          question: 'How do you ensure project quality?',
          answer: 'We follow industry best practices including code reviews, automated testing, quality assurance processes, and regular client feedback sessions. Our team includes experienced developers and QA specialists who ensure high-quality deliverables.'
        },
        {
          id: 14,
          question: 'What is your communication process?',
          answer: 'We maintain regular communication through scheduled meetings, progress reports, and project management tools. You will have a dedicated project manager who serves as your primary point of contact and keeps you informed throughout the project lifecycle.'
        },
        {
          id: 15,
          question: 'Do you provide training for delivered solutions?',
          answer: 'Yes, we provide comprehensive training for all delivered solutions including user training, administrator training, and documentation. We ensure your team is fully equipped to use and maintain the solutions we deliver.'
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

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about Zion Tech Group services, pricing, and processes."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find answers to common questions about our services, processes, and solutions.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((item) => (
                      <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{item.question}</span>
                          {openItems.includes(item.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        {openItems.includes(item.id) && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Phone className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak with our experts directly</p>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-medium">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Mail className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get detailed answers via email</p>
                <a href="mailto:info@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  info@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  <MessageCircle className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with us in real-time</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;