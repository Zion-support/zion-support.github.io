import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const supportOptions = [
  {
    title: 'Live Chat Support',
    description: 'Get instant help with our live chat support available 24/7.',
    icon: MessageCircle,
    availability: '24/7',
    responseTime: '< 2 minutes'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts for complex issues.',
    icon: Phone,
    availability: 'Mon-Fri 9AM-6PM',
    responseTime: 'Immediate'
  },
  {
    title: 'Email Support',
    description: 'Send us detailed descriptions and we\'ll get back to you quickly.',
    icon: Mail,
    availability: '24/7',
    responseTime: '< 4 hours'
  },
  {
    title: 'Priority Support',
    description: 'Dedicated support for enterprise customers with SLA guarantees.',
    icon: Clock,
    availability: '24/7',
    responseTime: '< 1 hour'
  }
];

const faqs = [
  {
    question: 'How quickly can I get support?',
    answer: 'Our response times vary by support type. Live chat typically responds within 2 minutes, while email support responds within 4 hours.'
  },
  {
    question: 'Do you offer 24/7 support?',
    answer: 'Yes, we provide 24/7 support through live chat and email. Phone support is available during business hours.'
  },
  {
    question: 'What types of issues can you help with?',
    answer: 'We can help with technical issues, billing questions, account management, and general product guidance.'
  },
  {
    question: 'Is there a cost for support?',
    answer: 'Basic support is included with all plans. Premium support features are available for enterprise customers.'
  }
];

export default function Support() {
  return (
    <Layout>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for all your technology needs. 24/7 support available." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get help and support for all your technology needs. We're here to help you succeed.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Support Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                        <p className="text-gray-600 text-sm">{option.description}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Availability:</span>
                          <span className="font-medium">{option.availability}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Response Time:</span>
                          <span className="font-medium">{option.responseTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Can't find what you're looking for? Contact our support team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Live Chat
                </button>
                <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}