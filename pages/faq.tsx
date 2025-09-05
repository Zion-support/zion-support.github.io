import { Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive AI solutions, IT services, cloud computing, cybersecurity, and micro SaaS solutions. Our services include machine learning, natural language processing, cloud infrastructure, and custom software development."
      },
      {
        question: "How can I get started with your services?",
        answer: "Getting started is easy! Simply contact us through our contact form, schedule a consultation, or call us directly. We'll assess your needs and provide a customized solution plan."
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, we provide 24/7 support for all our clients. Our dedicated support team is always available to help with any technical issues or questions you may have."
      }
    ]
  },
  {
    category: "AI Services",
    questions: [
      {
        question: "What AI technologies do you specialize in?",
        answer: "We specialize in machine learning, natural language processing, computer vision, predictive analytics, and AI automation. Our team has extensive experience with various AI frameworks and platforms."
      },
      {
        question: "How long does it take to implement an AI solution?",
        answer: "Implementation time varies depending on the complexity of the project. Simple AI solutions can be deployed in 2-4 weeks, while more complex enterprise solutions may take 3-6 months."
      },
      {
        question: "Do you provide AI training for our team?",
        answer: "Yes, we offer comprehensive AI training programs for your team, including hands-on workshops, documentation, and ongoing support to ensure successful adoption."
      }
    ]
  },
  {
    category: "Cloud & IT Services",
    questions: [
      {
        question: "Which cloud platforms do you support?",
        answer: "We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. We help you choose the best platform for your specific needs."
      },
      {
        question: "What is your approach to cybersecurity?",
        answer: "We take a comprehensive approach to cybersecurity, including threat assessment, security architecture design, implementation of security controls, and ongoing monitoring and maintenance."
      },
      {
        question: "Do you offer cloud migration services?",
        answer: "Yes, we provide end-to-end cloud migration services, including assessment, planning, migration execution, and post-migration optimization to ensure a smooth transition."
      }
    ]
  },
  {
    category: "Pricing & Billing",
    questions: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including hourly rates, project-based pricing, and monthly retainers. Pricing depends on the scope and complexity of your project."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer free initial consultations to understand your needs and provide recommendations. This helps us create a tailored solution that fits your budget and requirements."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we'll discuss any potential additional costs upfront before starting any work."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = ['All', ...faqs.map(faq => faq.category)];
  
  const allQuestions = faqs.flatMap(faq => faq.questions);
  const filteredQuestions = allQuestions.filter(q => 
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayQuestions = selectedCategory === 'All' 
    ? filteredQuestions 
    : filteredQuestions.filter((_, index) => {
        const categoryIndex = faqs.findIndex(faq => faq.category === selectedCategory);
        return faqs[categoryIndex]?.questions.includes(allQuestions[index]);
      });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Frequently asked questions about Zion Tech Group's services, pricing, and support." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about our services and solutions
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {displayQuestions.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openItems.includes(index) ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-600" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <div className="bg-blue-50 rounded-lg p-8">
                <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help. Contact us for personalized assistance.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}