import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email Us',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Call Us',
      details: '+1 302 464 0950',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: 'Visit Us',
      details: '364 E Main St STE 1008 Middletown DE 19709',
      description: 'Come say hello at our office'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you start a project?',
      answer: 'We can typically begin new projects within 1-2 weeks of contract signing, depending on our current workload and project complexity.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide comprehensive support and maintenance packages for all our solutions to ensure continued success.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, and many others.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises, tailoring our solutions to fit your needs and budget.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation. We're here to help your business succeed." />
        <meta name="keywords" content="contact, AI services, IT consulting, digital transformation, business solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to transform your business? Let's discuss how our AI and IT solutions 
            can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-lg text-gray-300 mb-2">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Email Us Now
              <Send className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;