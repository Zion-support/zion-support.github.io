import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';
const ContactPage: React.FC = () => (,
  <>,
    <SEOHead,
title="Contact Us - Zion Tech Group"",
      description="Get in touch with Zion Tech Group for your technology needs. Contact our team for AI solutions, cybersecurity, and cloud infrastructure consulting."",
      keywords="contact zion tech group, technology consulting, get in touch, business inquiry, project consultation"",
      canonicalUrl="https: //ziontechgroup.com/contact"",
    />,
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">",
    <motion.div,
      className="container mx-auto px-4 sm:px-6 lg:px-8"";
      initial={{ opacity: 0, y: 20 ,}}
      animate={{ opacity: 1, y: 0 ,}}
      transition={{ duration: 0.8 ,}}
    >,
      <motion.h1,
className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"";
        initial={{ opacity: 0, y: 30 ,}}
        animate={{ opacity: 1, y: 0 ,}}
        transition={{ duration: 0.8, delay: 0.2 ,}}
      >,
        Contact Us,
      </motion.h1>,
      <div className="max-w-4xl mx-auto">",
        <motion.div,
          initial={{ opacity: 0, y: 40 ,}}
          animate={{ opacity: 1, y: 0 ,}}
          transition={{ duration: 0.8, delay: 0.4 ,}}
        >,
          <Card,
title="Get In Touch" ",
            description="Ready to transform your business? Let's discuss your project and see how we can help you achieve your goals."",
            className="mb-8"",
          />,
        </motion.div>,
        <div className="grid grid-cols-1 sm: grid-cols-2 gap-6 lg:gap-8 mb-12">",
          <motion.div,
            initial={{ opacity: 0, x: -50 ,}}
            animate={{ opacity: 1, x: 0 ,}}
            transition={{ duration: 0.8, delay: 0.6 ,}}
            whileHover={{ scale: 1.05, y: -5 ,}}
          >,
            <Card,
title="Email" ",
              description="info@ziontechgroup.com"",
              className="h-full"",
            />,
          </motion.div>,
          <motion.div,
            initial={{ opacity: 0, x: 50 ,}}
            animate={{ opacity: 1, x: 0 ,}}
            transition={{ duration: 0.8, delay: 0.8 ,}}
            whileHover={{ scale: 1.05, y: -5 ,}}
          >,
            <Card,
title="Phone" ",
              description="+1 (555) 123-4567"",
              className="h-full"",
            />,
          </motion.div>,
        </div>,
        <ContactForm />,
      </div>,
    </motion.div>,
    </div>,
  </>,
);
export default ContactPage;