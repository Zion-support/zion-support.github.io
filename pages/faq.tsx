import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import Layout from '../components/Layout';

const faqCategories = [
  {
    name: 'General',
    icon: HelpCircle,
    questions: [
      {
        question: 'What is Zion Tech Group?',
        answer: 'Zion Tech Group is a leading technology solutions provider specializing in AI, cloud services, cybersecurity, and digital transformation. We help businesses leverage cutting-edge technology to achieve their goals and drive growth.'
      },
      {
        question: 'What services do you offer?',
        answer: 'We offer a comprehensive range of services including AI solutions, IT services, micro SaaS development, cloud migration, cybersecurity, data analytics, and digital transformation consulting. Our team provides end-to-end technology solutions tailored to your business needs.'
      },
      {
        question: 'Do you work with small businesses?',
        answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. We offer scalable solutions that can grow with your business and provide flexible engagement models to fit different budgets and requirements.'
      },
      {
        question: 'How do I get started?',
        answer: 'Getting started is easy! Simply contact us through our website, schedule a free consultation, or call us directly. We\'ll discuss your needs, provide recommendations, and create a customized plan for your project.'
      }
    ]
  },
  {
    name: 'AI Services',
    icon: HelpCircle,
    questions: [
      {
        question: 'What AI services do you provide?',
        answer: 'We offer comprehensive AI services including machine learning model development, natural language processing, computer vision, predictive analytics, AI-powered chatbots, and custom AI solution development. Our team specializes in implementing AI that delivers real business value.'
      },
      {
        question: 'How long does AI implementation take?',
        answer: 'AI implementation timelines vary depending on the complexity of the project. Simple AI solutions can be implemented in 2-4 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Do I need technical expertise to use your AI solutions?',
        answer: 'No technical expertise required! We design user-friendly AI solutions with intuitive interfaces. We also provide comprehensive training and ongoing support to ensure your team can effectively use and maintain the AI systems.'
      },
      {
        question: 'Can you integrate AI with our existing systems?',
        answer: 'Absolutely! We specialize in integrating AI solutions with existing business systems, databases, and workflows. Our team ensures seamless integration while maintaining data security and system performance.'
      }
    ]
  },
  {
    name: 'Cloud Services',
    icon: HelpCircle,
    questions: [
      {
        question: 'What cloud platforms do you support?',
        answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud environments. We help you choose the best platform for your specific needs and ensure optimal performance and cost efficiency.'
      },
      {
        question: 'How do you ensure cloud security?',
        answer: 'We implement comprehensive cloud security measures including encryption, access controls, network security, compliance monitoring, and regular security audits. Our team follows industry best practices and compliance standards to protect your data.'
      },
      {
        question: 'Can you help with cloud migration?',
        answer: 'Yes, we provide end-to-end cloud migration services including assessment, planning, execution, and optimization. We ensure zero-downtime migration and provide ongoing support to maximize the benefits of your cloud infrastructure.'
      },
      {
        question: 'What is your cloud support model?',
        answer: 'We offer 24/7 cloud support with different tiers based on your needs. Our support includes monitoring, maintenance, troubleshooting, optimization, and proactive issue resolution to ensure maximum uptime and performance.'
      }
    ]
  },
  {
    name: 'Pricing & Billing',
    icon: HelpCircle,
    questions: [
      {
        question: 'How do you price your services?',
        answer: 'Our pricing is based on project scope, complexity, timeline, and specific requirements. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a customized quote based on your needs.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans for larger projects. We can structure payments based on project milestones or provide monthly payment options. We work with you to find a payment structure that fits your budget.'
      },
      {
        question: 'Are there any hidden costs?',
        answer: 'No hidden costs! We provide transparent pricing with detailed breakdowns of all costs upfront. Any additional work or changes to the project scope will be discussed and approved before implementation.'
      },
      {
        question: 'Do you offer discounts for long-term contracts?',
        answer: 'Yes, we offer competitive discounts for long-term contracts and retainer agreements. Contact us to discuss our long-term partnership options and pricing benefits.'
      }
    ]
  },
  {
    name: 'Support & Maintenance',
    icon: HelpCircle,
    questions: [
      {
        question: 'What support do you provide after project completion?',
        answer: 'We provide comprehensive post-project support including bug fixes, updates, maintenance, monitoring, and optimization. Our support packages are tailored to your needs and can include 24/7 monitoring and response.'
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer: 'Response times vary by support tier. For critical issues, we respond within 1 hour. For standard support requests, we respond within 4-8 hours during business hours. We also offer 24/7 support for critical systems.'
      },
      {
        question: 'Do you provide training for our team?',
        answer: 'Yes, we provide comprehensive training for your team on all systems and solutions we implement. Training includes documentation, hands-on sessions, and ongoing support to ensure your team can effectively use and maintain the systems.'
      },
      {
        question: 'Can you help with system updates and upgrades?',
        answer: 'Absolutely! We provide regular system updates, security patches, and feature upgrades. We also help plan and execute major system upgrades with minimal disruption to your business operations.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = selectedCategory === 'All' 
    ? faqCategories 
    : faqCategories.filter(cat => cat.name === selectedCategory);

  const filteredQuestions = filteredCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <Layout 
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about our AI services, cloud solutions, pricing, and support. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, AI services, cloud computing, pricing, support, help"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find answers to common questions about our services, pricing, and support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All Categories
                </button>
                {faqCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredQuestions.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <HelpCircle className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredQuestions.map((category, categoryIndex) => (
                    <div key={category.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center">
                          <category.icon className="w-6 h-6 mr-3 text-blue-600" />
                          {category.name}
                        </h2>
                      </div>
                      
                      <div className="divide-y divide-gray-200">
                        {category.questions.map((item, questionIndex) => {
                          const key = `${categoryIndex}-${questionIndex}`;
                          const isOpen = openItems[key];
                          
                          return (
                            <div key={questionIndex} className="p-6">
                              <button
                                onClick={() => toggleItem(categoryIndex, questionIndex)}
                                className="w-full text-left flex items-center justify-between group"
                              >
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                                  {item.question}
                                </h3>
                                {isOpen ? (
                                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                )}
                              </button>
                              
                              <motion.div
                                initial={false}
                                animate={{ height: isOpen ? 'auto' : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 text-gray-600 leading-relaxed">
                                  {item.answer}
                                </div>
                              </motion.div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our expert team is here to help. Contact us for personalized assistance with your specific needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                  <p className="text-blue-100 mb-4">Get instant answers to your questions</p>
                  <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                    Start Chat
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                  <p className="text-blue-100 mb-4">Speak directly with our experts</p>
                  <a 
                    href="tel:+13024640950"
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
                  >
                    Call Now
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Support</h3>
                  <p className="text-blue-100 mb-4">Send us your detailed questions</p>
                  <a 
                    href="mailto:support@ziontechgroup.com"
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}