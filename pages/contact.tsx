import React, { useState } from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import Link from 'next/link',
import Layout from '../components/Layout',
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle, Send } from 'lucide-react',
,
export default function Contact() {,
  const [formData, setFormData] = useState({,
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '',
  ,}),
,
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
,
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,
    setFormData({,
      ...formData,;
      [e.target.name]: e.target.value,
    }),
  };
,
  const handleSubmit = async (e: React.FormEvent) => {,
    e.preventDefault(),
    setIsSubmitting(true),
,
    // Simulate form submission,
    await new Promise(resolve => setTimeout(resolve, 2000)),
,
    setIsSubmitting(false),
    setIsSubmitted(true),
    console.log('Form submitted:', formData),
  };
,
  const contactInfo = [,
    {,
      icon: Phone,;
      title: 'Phone',;
      details: '+1 302 464 0950',;
      description: 'Call us for immediate assistance',
    ,},;
    {,
      icon: Mail,;
      title: 'Email',;
      details: 'kleber@ziontechgroup.com',;
      description: 'Send us an email anytime',
    ,},;
    {,
      icon: MapPin,;
      title: 'Address',;
      details: '364 E Main St STE 1008',;
      description: 'Middletown DE 19709',
    ,},;
    {,
      icon: Clock,;
      title: 'Business Hours',;
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',;
      description: 'EST Time Zone',
    ,};
  ],
,
  const services = [,
    'AI Services',;
    'IT Services',;
    'Micro SaaS',;
    'Cybersecurity',;
    'Cloud Solutions',;
    'Custom Development',;
    'Consulting',;
    'Other',
  ],
,
  return (,
    <Layout,
      title="Contact Us - Zion Tech Group",
      description="Get in touch with Zion Tech Group for AI services, IT solutions, and technology consulting. We're here to help transform your business.",
      keywords="contact us, AI services, IT consulting, technology solutions, business transformation",
    >,
      <Head>,
        <title>Contact Us - Zion Tech Group</title>,
        <meta name="description" content="Get in touch with Zion Tech Group for AI services, IT solutions, and technology consulting. We're here to help transform your business." />,
      </Head>,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center max-w-4xl mx-auto",
            >,
              <h1 className="text-5xl md: text-6xl font-bold mb-6">,
                Get In Touch,
              </h1>,
              <p className="text-xl md:text-2xl mb-8 text-blue-100">,
                Ready to transform your business with cutting-edge technology?,
                Let's discuss how we can help you achieve your goals.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Contact Info */,};
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
              {contactInfo.map((info, index) => (,
                <motion.div,
                  key={info.title};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className="text-center p-6 bg-gray-50 rounded-xl hover: bg-gray-100 transition-colors",
                >,
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">,
                    <info.icon className="w-6 h-6 text-blue-600" />,
                  </div>,
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title,}</h3>,
                  <p className="text-blue-600 font-medium mb-1">{info.details}</p>,
                  <p className="text-gray-600 text-sm">{info.description}</p>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* Contact Form */};
        <section className="py-16 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <div className="max-w-4xl mx-auto">,
              <motion.div,
                initial={{ opacity: 0, y: 20 ,}};
                whileInView={{ opacity: 1, y: 0 ,}};
                transition={{ duration: 0.6 ,}};
                viewport={{ once: true ,}};
                className="text-center mb-12",
              >,
                <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                  Send Us a Message,
                </h2>,
                <p className="text-lg text-gray-600">,
                  Fill out the form below and we'll get back to you within 24 hours,
                </p>,
              </motion.div>,
              <motion.div,
                initial={{ opacity: 0, y: 20 ,}};
                whileInView={{ opacity: 1, y: 0 ,}};
                transition={{ duration: 0.6, delay: 0.2 ,}};
                viewport={{ once: true ,}};
                className="bg-white rounded-xl shadow-lg p-8",
              >,
                {isSubmitted ? (,
                  <div className="text-center py-12">,
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />,
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>,
                    <p className="text-gray-600 mb-6">,
                      Your message has been sent successfully. We'll get back to you soon.,
                    </p>,
                    <button,
                      onClick={() => {,
                        setIsSubmitted(false),
                        setFormData({,
                          name: '',;
                          email: '',;
                          company: '',;
                          phone: '',;
                          service: '',;
                          message: '',
                        ,}),
                      }};
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover: bg-blue-700 transition-colors",
                    >,
                      Send Another Message,
                    </button>,
                  </div>,
                ) : (,
                  <form onSubmit={handleSubmit,} className="space-y-6">,
                    <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,
                      <div>,
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">,
                          Full Name *,
                        </label>,
                        <input,
                          type="text",
                          id="name",
                          name="name",
                          value={formData.name,};
                          onChange={handleChange};
                          required,
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent",
                          placeholder="Your full name",
                        />,
                      </div>,
                      <div>,
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">,
                          Email Address *,
                        </label>,
                        <input,
                          type="email",
                          id="email",
                          name="email",
                          value={formData.email,};
                          onChange={handleChange};
                          required,
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent",
                          placeholder="your.email@company.com",
                        />,
                      </div>,
                    </div>,
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">,
                      <div>,
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">,
                          Company,
                        </label>,
                        <input,
                          type="text",
                          id="company",
                          name="company",
                          value={formData.company,};
                          onChange={handleChange};
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent",
                          placeholder="Your company name",
                        />,
                      </div>,
                      <div>,
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">,
                          Phone Number,
                        </label>,
                        <input,
                          type="tel",
                          id="phone",
                          name="phone",
                          value={formData.phone,};
                          onChange={handleChange};
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent",
                          placeholder="+1 (555) 123-4567",
                        />,
                      </div>,
                    </div>,
                    <div>,
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">,
                        Service Interest,
                      </label>,
                      <select,
                        id="service",
                        name="service",
                        value={formData.service,};
                        onChange={handleChange};
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent",
                      >,
                        <option value="">Select a service</option>,
                        {services.map((service) => (,
                          <option key={service,} value={service}>,
                            {service};
                          </option>,
                        ))};
                      </select>,
                    </div>,
                    <div>,
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">,
                        Message *,
                      </label>,
                      <textarea,
                        id="message",
                        name="message",
                        value={formData.message};
                        onChange={handleChange};
                        required,
                        rows={6};
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent",
                        placeholder="Tell us about your project or how we can help you...",
                      />,
                    </div>,
                    <button,
                      type="submit",
                      disabled={isSubmitting,};
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover: bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                    >,
                      {isSubmitting ? (,
                        <>,
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>,
                          Sending...,
                        </>,
                      ) : (,
                        <>,
                          <Send className="w-5 h-5 mr-2" />,
                          Send Message,
                        </>,
                      ),};
                    </button>,
                  </form>,
                )};
              </motion.div>,
            </div>,
          </div>,
        </section>,
        {/* CTA Section */};
        <section className="py-16 bg-blue-900 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>,
            <p className="text-xl mb-8 text-blue-100">,
              Don't wait - let's discuss your project today and see how we can help you succeed.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <a href="tel:+13024640950" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">,
                Call Now: +1 302 464 0950,
              </a>,
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">,
                Email Us,
              </a>,
            </div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};