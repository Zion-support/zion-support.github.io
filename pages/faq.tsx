<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';

export default function FAQ() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer 40+ micro SaaS products, 16+ AI services, and 16+ IT solutions including cloud migration, cybersecurity, data engineering, machine learning, and more."
    },
    {
      question: "How do I get started with your services?",
      answer: "Contact us through our contact form, call us at +1 302 464 0950, or email kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs and provide a custom solution."
    },
    {
      question: "What is the typical pricing for your services?",
      answer: "Pricing varies by service and complexity. Micro SaaS products typically range from $99-$3,500/month, AI services from $699-$12,999/month, and IT services from $999-$15,999/month. Contact us for a custom quote."
    },
    {
      question: "Do you offer custom development?",
      answer: "Yes, we specialize in custom development for micro SaaS products, AI solutions, and IT services. We work closely with clients to build tailored solutions that meet their specific business requirements."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including AWS, Azure, GCP, Kubernetes, Docker, Python, JavaScript, React, Node.js, machine learning frameworks, and various cloud and AI platforms."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple micro SaaS products can be delivered in 2-4 weeks, while complex AI or IT solutions may take 2-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance services for all our solutions. This includes monitoring, updates, troubleshooting, and optimization to ensure optimal performance."
    },
    {
      question: "Can you help with cloud migration?",
      answer: "Absolutely! We specialize in cloud migration and modernization services, helping businesses move to AWS, Azure, or GCP with minimal downtime and maximum efficiency."
    },
    {
      question: "What makes your AI services different?",
      answer: "Our AI services are tailored to specific business needs, not generic solutions. We focus on practical applications that deliver measurable ROI, with custom model development and integration support."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we work with businesses of all sizes, from startups to enterprises. Our micro SaaS products are particularly well-suited for small and medium businesses looking for cost-effective solutions."
    }
  ];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about Zion Tech Group's micro SaaS products, AI services, and IT solutions. Get help with pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, zion tech group, micro SaaS, AI services, IT solutions" />
        <link rel="canonical" href={`${contact.site}/faq`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Get Answers to Common Questions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Find answers to the most common questions about our services, pricing, 
              implementation, and support. Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
=======
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
        answer: "You can get started by contacting us through our website, calling us at +1 302 464 0950, or emailing us at kleber@ziontechgroup.com. We'll schedule a consultation to discuss your specific needs."
      },
      {
        question: "Do you offer custom solutions?",
        answer: "Yes, we specialize in creating custom solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop the perfect solution."
      }
    ]
  },
  {
    category: "AI Services",
    questions: [
      {
        question: "What AI technologies do you work with?",
        answer: "We work with a wide range of AI technologies including machine learning, natural language processing, computer vision, deep learning, and generative AI. We stay up-to-date with the latest advancements in AI."
      },
      {
        question: "How long does it take to develop an AI solution?",
        answer: "The timeline depends on the complexity of the project. Simple AI solutions can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our consultation."
      },
      {
        question: "Do you provide AI training and support?",
        answer: "Yes, we provide comprehensive training and ongoing support for all our AI solutions. This includes user training, documentation, and technical support to ensure successful implementation."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including project-based pricing, hourly rates, and subscription plans. Our pricing depends on the scope and complexity of the project. Contact us for a detailed quote."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for larger projects. We can work with you to create a payment schedule that fits your budget and project timeline."
      },
      {
        question: "Is there a free consultation?",
        answer: "Yes, we offer free initial consultations to discuss your project requirements and provide recommendations. This helps us understand your needs and provide accurate pricing."
      }
    ]
  },
  {
    category: "Support",
    questions: [
      {
        question: "What kind of support do you provide?",
        answer: "We provide comprehensive support including 24/7 technical support, regular maintenance, updates, and training. Our support team is always available to help with any issues or questions."
      },
      {
        question: "How do I contact support?",
        answer: "You can contact our support team through email at kleber@ziontechgroup.com, phone at +1 302 464 0950, or through our online support portal. We typically respond within 24 hours."
      },
      {
        question: "Do you provide documentation?",
        answer: "Yes, we provide comprehensive documentation for all our solutions including user guides, API documentation, and technical specifications. All documentation is regularly updated."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Layout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about our AI services, IT solutions, pricing, and support. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, AI services, IT support, pricing, help"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <HelpCircle className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact us directly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqs.map((section, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    {section.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.questions.map((faq, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openItems[key];
                      
                      return (
                        <div
                          key={questionIndex}
                          className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-lg font-semibold text-gray-900">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
<<<<<<< HEAD
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our team is here to help. Contact us for personalized answers to your specific questions 
              and to discuss how we can help your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. Contact us directly for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call: +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
  );
}