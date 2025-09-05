import Head from 'next/head';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

const faqs = [
  {
    question: 'What services does Zion Tech Group offer?',
    answer: 'We offer a comprehensive range of technology services including AI solutions, cloud migration, custom development, digital transformation, cybersecurity, and consulting services.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity and scope. Simple projects can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase.'
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. We tailor our solutions to fit your budget and requirements.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern technologies including React, Next.js, Node.js, Python, AI/ML, cloud platforms (AWS, Azure, GCP), and various databases and frameworks.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after deployment.'
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We follow industry best practices for data security, including encryption, secure coding practices, regular security audits, and compliance with relevant regulations.'
  }
];

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <title>Frequently Asked Questions - Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about our services, processes, and solutions." />
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services and solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <ChevronDown className="w-6 h-6 text-blue-600 mr-3" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our team is here to help. Get in touch with us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hello@ziontechgroup.com"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}