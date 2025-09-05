'use client',;
import React, { useState } from 'react',;
import { motion } from 'framer-motion',;
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react',;
const ContactForm: React.FC = () => {;
  const [formData, setFormData] = useState({;
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '';
  }),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'),;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    setFormData({;
      ...formData,;
      [e.target.name]: e.target.value;
    });
  },;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
    // Simulate API call;
    try {;
      await new Promise(resolve => setTimeout(resolve, 2000)),;
      setSubmitStatus('success'),;
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        phone: '',;
        service: '',;
        message: '';
      });
    } catch (error) {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);
    }
  },;
  const services = [;
    'AI DevelopmentCloud ArchitectureDigital TransformationIoT PlatformsBlockchain SolutionsData AnalyticsOther';
  ],;
  const contactInfo = [;
    {;
      icon: Mail,;
      title: 'Email Us',;
      content: 'contact@ziontechgroup.com',;
      href: 'mailto:contact@ziontechgroup.com';
    },;
    {;
      icon: Phone,;
      title: 'Call Us',;
      content: '+1 (555) 123-4567',;
      href: 'tel:+15551234567';
    },;
    {;
      icon: MapPin,;
      title: 'Visit Us',;
      content: '123 Tech Street, Innovation City, IC 12345',;
      href: '#';
    }
<<<<<<< HEAD
  ],

  return (
    <section className=&quot;py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden&quot;>
      {/* Background Elements */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
        <div className=&quot;absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]&quot; />
      </div>

      <div className=&quot;relative container mx-auto px-4&quot;>
=======
  ],;
  return (;
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">;
      {/* Background Elements */}
      <div className="absolute inset-0">;
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />;
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />;
      </div>;
      <div className="relative container mx-auto px-4">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        {/* Section Header */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className=&quot;text-center mb-16&quot;
        >
<<<<<<< HEAD
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Start a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
=======
          <h2 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            Let's Start a
            <span className=&quot;block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              Conversation
            </span>
          </h2>
          
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;>
            Ready to transform your business? Get in touch with our team of experts to discuss 
            how we can help you achieve your technology goals.
          </p>
        </motion.div>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto&quot;>
=======
          className="text-center mb-16";
        >;
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">;
            Let's Start a;
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
              Conversation;
            </span>;
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
            Ready to transform your business? Get in touch with our team of experts to discuss;
            how we can help you achieve your technology goals.;
          </p>;
        </motion.div>;
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {/* Contact Information */}
          <motion.div;
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className=&quot;space-y-8&quot;
          >
            <div>
              <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Get in Touch</h3>
              <p className=&quot;text-gray-300 leading-relaxed mb-8&quot;>
                Our team is here to help you navigate the complex world of technology and find 
                the perfect solutions for your business needs. Reach out to us today.
              </p>
            </div>

            {/* Contact Details */}
            <div className=&quot;space-y-6&quot;>
              {contactInfo.map((info, index) => (
                <motion.a
=======
            className="space-y-8";
          >;
            <div>;
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>;
              <p className="text-gray-300 leading-relaxed mb-8">;
                Our team is here to help you navigate the complex world of technology and find;
                the perfect solutions for your business needs. Reach out to us today.;
              </p>;
            </div>;
            {/* Contact Details */}
            <div className="space-y-6">;
              {contactInfo.map((info, index) => (;
                <motion.a;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  className=&quot;flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group&quot;
                >
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300&quot;>
                    <info.icon className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div>
                    <h4 className=&quot;text-lg font-semibold text-white mb-1&quot;>{info.title}</h4>
                    <p className=&quot;text-gray-300 group-hover:text-blue-400 transition-colors duration-300&quot;>
=======
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group";
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">;
                    <info.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>;
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      {info.content}
                    </p>;
                  </div>;
                </motion.a>;
              ))}
            </div>;
            {/* Additional Info */}
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className=&quot;bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6&quot;
            >
              <h4 className=&quot;text-lg font-semibold text-white mb-3&quot;>Why Choose Zion Tech?</h4>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li className=&quot;flex items-center space-x-2&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className=&quot;flex items-center space-x-2&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className=&quot;flex items-center space-x-2&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className=&quot;flex items-center space-x-2&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                  <span>Competitive pricing and flexible solutions</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

=======
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6";
            >;
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Zion Tech?</h4>;
              <ul className="space-y-2 text-gray-300">;
                <li className="flex items-center space-x-2">;
                  <CheckCircle className="w-5 h-5 text-green-400" />;
                  <span>Expert team with 10+ years experience</span>;
                </li>;
                <li className="flex items-center space-x-2">;
                  <CheckCircle className="w-5 h-5 text-green-400" />;
                  <span>Proven track record of successful projects</span>;
                </li>;
                <li className="flex items-center space-x-2">;
                  <CheckCircle className="w-5 h-5 text-green-400" />;
                  <span>24/7 support and maintenance</span>;
                </li>;
                <li className="flex items-center space-x-2">;
                  <CheckCircle className="w-5 h-5 text-green-400" />;
                  <span>Competitive pricing and flexible solutions</span>;
                </li>;
              </ul>;
            </motion.div>;
          </motion.div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {/* Contact Form */}
          <motion.div;
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className=&quot;bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8&quot;
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className=&quot;text-center py-12&quot;
              >
                <CheckCircle className=&quot;w-20 h-20 text-green-400 mx-auto mb-6&quot; />
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Message Sent Successfully!</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300&quot;
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                  <div>
                    <label htmlFor=&quot;name&quot; className=&quot;block text-white font-medium mb-2&quot;>
                      Full Name *
                    </label>
                    <input
                      type=&quot;text&quot;
                      id=&quot;name&quot;
                      name=&quot;name&quot;
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className=&quot;w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors&quot;
                      placeholder=&quot;Enter your full name&quot;
                    />
                  </div>
                  
                  <div>
                    <label htmlFor=&quot;email&quot; className=&quot;block text-white font-medium mb-2&quot;>
                      Email Address *
                    </label>
                    <input
                      type=&quot;email&quot;
                      id=&quot;email&quot;
                      name=&quot;email&quot;
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className=&quot;w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors&quot;
                      placeholder=&quot;Enter your email&quot;
                    />
                  </div>
                </div>

                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                  <div>
                    <label htmlFor=&quot;company&quot; className=&quot;block text-white font-medium mb-2&quot;>
                      Company
                    </label>
                    <input
                      type=&quot;text&quot;
                      id=&quot;company&quot;
                      name=&quot;company&quot;
                      value={formData.company}
                      onChange={handleChange}
                      className=&quot;w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors&quot;
                      placeholder=&quot;Enter company name&quot;
                    />
                  </div>
                  
                  <div>
                    <label htmlFor=&quot;phone&quot; className=&quot;block text-white font-medium mb-2&quot;>
                      Phone Number
                    </label>
                    <input
                      type=&quot;tel&quot;
                      id=&quot;phone&quot;
                      name=&quot;phone&quot;
                      value={formData.phone}
                      onChange={handleChange}
                      className=&quot;w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors&quot;
                      placeholder=&quot;Enter phone number&quot;
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor=&quot;service&quot; className=&quot;block text-white font-medium mb-2&quot;>
                    Service of Interest
                  </label>
                  <select
                    id=&quot;service&quot;
                    name=&quot;service&quot;
                    value={formData.service}
                    onChange={handleChange}
                    className=&quot;w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors&quot;
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800 text-white&quot;>
=======
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8";
          >;
            {submitStatus === 'success' ? (;
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12";
              >;
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />;
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>;
                <p className="text-gray-300 mb-6">;
                  Thank you for reaching out. Our team will get back to you within 24 hours.;
                </p>;
                <button;
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300";
                >;
                  Send Another Message;
                </button>;
              </motion.div>;
            ) : (;
              <form onSubmit={handleSubmit} className="space-y-6">;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div>;
                    <label htmlFor="name" className="block text-white font-medium mb-2">;
                      Full Name *;
                    </label>;
                    <input;
                      type="text";
                      id="name";
                      name="name";
                      value={formData.name}
                      onChange={handleChange}
                      required;
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors";
                      placeholder="Enter your full name";
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-white font-medium mb-2">;
                      Email Address *;
                    </label>;
                    <input;
                      type="email";
                      id="email";
                      name="email";
                      value={formData.email}
                      onChange={handleChange}
                      required;
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors";
                      placeholder="Enter your email";
                    />;
                  </div>;
                </div>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div>;
                    <label htmlFor="company" className="block text-white font-medium mb-2">;
                      Company;
                    </label>;
                    <input;
                      type="text";
                      id="company";
                      name="company";
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors";
                      placeholder="Enter company name";
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="phone" className="block text-white font-medium mb-2">;
                      Phone Number;
                    </label>;
                    <input;
                      type="tel";
                      id="phone";
                      name="phone";
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors";
                      placeholder="Enter phone number";
                    />;
                  </div>;
                </div>;
                <div>;
                  <label htmlFor="service" className="block text-white font-medium mb-2">;
                    Service of Interest;
                  </label>;
                  <select;
                    id="service";
                    name="service";
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors";
                  >;
                    <option value="">Select a service</option>;
                    {services.map((service) => (;
                      <option key={service} value={service} className="bg-gray-800 text-white">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                        {service}
                      </option>;
                    ))}
<<<<<<< HEAD
                  </select>
                </div>

                <div>
                  <label htmlFor=&quot;message" className="block text-white font-medium mb-2&quot;>
                    Message *
                  </label>
                  <textarea
                    id=&quot;message&quot;
                    name=&quot;message"
=======
                  </select>;
                </div>;
                <div>;
                  <label htmlFor="message" className="block text-white font-medium mb-2">;
                    Message *;
                  </label>;
                  <textarea;
                    id="message";
                    name="message";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    value={formData.message}
                    onChange={handleChange}
                    required;
                    rows={5}
<<<<<<< HEAD
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none&quot;
                    placeholder=&quot;Tell us about your project or inquiry..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4"
                  >
                    <AlertCircle className="w-5 h-5&quot; />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                <button
                  type=&quot;submit"
=======
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none";
                    placeholder="Tell us about your project or inquiry...";
                  />;
                </div>;
                {submitStatus === 'error' && (;
                  <motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4";
                  >;
                    <AlertCircle className="w-5 h-5" />;
                    <span>Something went wrong. Please try again.</span>;
                  </motion.div>;
                )}
;
                <button;
                  type="submit";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2";
                >;
                  {isSubmitting ? (;
                    <>;
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />;
                      <span>Sending...</span>;
                    </>;
                  ) : (;
                    <>;
                      <Send className="w-5 h-5" />;
                      <span>Send Message</span>;
                    </>;
                  )}
                </button>;
              </form>;
            )}
          </motion.div>;
        </div>;
      </div>;
    </section>;
  );
},;
export default ContactForm;