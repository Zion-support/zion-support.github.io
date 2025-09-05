import { motion } from 'framer-motion';
import Head from 'next/head';
import { MessageCircle, Mail, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const supportOptions = [
  {
    title: 'Live Chat Support',
    description: 'Get instant help with our live chat support available 24/7.',
    icon: MessageCircle,
    color: 'from-blue-500 to-cyan-500',
    availability: '24/7',
    responseTime: 'Instant',
    features: ['Real-time chat', 'Screen sharing', 'File sharing', 'Chat history']
  },
  {
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive responses.',
    icon: Mail,
    color: 'from-green-500 to-emerald-500',
    availability: '24/7',
    responseTime: '4 hours',
    features: ['Detailed responses', 'File attachments', 'Priority queuing', 'Email tracking']
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts for immediate assistance.',
    icon: Phone,
    color: 'from-purple-500 to-pink-500',
    availability: 'Business Hours',
    responseTime: 'Immediate',
    features: ['Direct communication', 'Screen sharing', 'Call recording', 'Follow-up']
  }
];

const faqs = [
  {
    question: 'How do I get started with your services?',
    answer: 'You can get started by contacting our sales team through our contact form or by calling us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
  },
  {
    question: 'What is your response time for support requests?',
    answer: 'Our response times vary by support channel: Live chat is instant, email support responds within 4 hours, and phone support is available during business hours.'
  },
  {
    question: 'Do you offer training for your solutions?',
    answer: 'Yes, we provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions with our experts.'
  }
];

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our technology solutions" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the help you need with our comprehensive support options and resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color} mr-4`}>
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{option.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Availability:</span>
                  <span className="ml-2">{option.availability}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Response Time:</span>
                  <span className="ml-2">{option.responseTime}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-gray-200 pb-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}