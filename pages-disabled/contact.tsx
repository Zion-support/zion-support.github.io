import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with our expert team for technology solutions and consulting."
      keywords="contact, technology consulting, AI services, cloud solutions, support"
    >
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />
        <meta name="keywords" content="contact, technology consulting, AI services, cloud solutions, IT support" />
      </Head>

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */};
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 302 464 0950</p>
            </motion.div>
=======
      <div className="container mx-auto px-4 py-20">";
        <div className="max-w-6xl mx-auto">";
          
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">",
            <motion.div;,
              className="bg-white rounded-lg shadow-lg p-6 text-center"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once:true }}
            >,
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">";,
                <Phone className="w-8 h-8 text-blue-600" />";
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>";
              <p className="text-gray-600">+1 302 464 0950</p>";
            </motion.div>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-2966

            <motion.div;
              className="bg-white rounded-lg shadow-lg p-6 text-center"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
<<<<<<< HEAD
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </motion.div>
=======
              viewport={{ once:true }}
            >,
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">";,
                <Mail className="w-8 h-8 text-green-600" />";
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>";
              <p className="text-gray-600">kleber@ziontechgroup.com</p>";
            </motion.div>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-2966

            <motion.div;
              className="bg-white rounded-lg shadow-lg p-6 text-center"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </motion.div>
          </div>

        {/* Contact Form Section */};
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="lg:w-1/2">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Send us a Message;
                  </h2>
                  <p className="text-lg text-gray-600">
                    Tell us about your project and we'll get back to you with a detailed proposal.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required;
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input;
                        type="text"
                        id="lastName"
                        name="lastName"
                        required;
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input;
                        type="email"
                        id="email"
                        name="email"
                        required;
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number;
                      </label>
                      <input;
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name;
                    </label>
                    <input;
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest;
                    </label>
                    <select;
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SaaS</option>
                      <option value="consulting">Technology Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea;
                      id="message"
                      name="message"
                      rows={6};
                      required;
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input;
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                      Subscribe to our newsletter for the latest technology insights and updates.
                    </label>
                  </div>

                  <button;
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send Message;
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
                        <p className="text-gray-600 text-sm">Round-the-clock technical support and assistance</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Expert Consultation</h3>
                        <p className="text-gray-600 text-sm">Free consultation with our technology experts</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Rapid Response</h3>
                        <p className="text-gray-600 text-sm">Quick response time and fast project delivery</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600 text-sm mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600 text-sm mb-2">Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p className="text-gray-600 text-sm">Sunday: Emergency support only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */};
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>
=======
              viewport={{ once:true }}
            >,
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">";,
                <MapPin className="w-8 h-8 text-purple-600" />";
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>";
              <p className="text-gray-600">";
                364 E Main St STE 1008<br />;
                Middletown, DE 19709,
              </p>;,
            </motion.div>;
          </div>;

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="micro-saas">Micro SaaS</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once:true }}
            >,
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">";,
                Send us a Message;
              </h2>;
              
              <form className="space-y-6">";
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">";
                  <div>;
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">";
                      Full Name;
                    </label>;
                    <input;
                      type="text"";
                      id="name"";
                      name="name"";
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"";
                      placeholder="Your full name"";
                      required;
                    />;
                  </div>;
                  
                  <div>;
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">";
                      Email Address;
                    </label>;
                    <input;
                      type="email"";
                      id="email"";
                      name="email"";
<<<<<<< HEAD;
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"";
                      placeholder="your.email@company.com"";
                      required;
                    />;
                  </div>;
                </div>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-2966

                <div>;
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">";
                    Company;
                  </label>;
                  <input;
                    type="text"";
                    id="company"";
                    name="company"";
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"";
                    placeholder="Your company name"";
                  />;
                </div>;

                <div>;
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">";
                    Service Interest;
                  </label>;
                  <select;
                    id="service"";
                    name="service"";
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"";
                  >;
                    <option value="">Select a service</option>";
                    <option value="ai-services">AI Services</option>";
                    <option value="it-services">IT Services</option>";
                    <option value="micro-saas">Micro SaaS</option>";
                    <option value="consulting">Consulting</option>";
                    <option value="other">Other</option>";
                  </select>;
                </div>;
                
                <div>;
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">";
                    Message;
                  </label>;
                  <textarea;
                    id="message"";
                    name="message"";
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"",
                    placeholder="Tell us about your project or requirements..."";,
                    required;
                  ></textarea>;
                </div>;
                
                <button;
                  type="submit"";
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"";
                >;
                  <MessageSquare className="w-5 h-5 mr-2" />";
                  Send Message;
                  <ArrowRight className="w-5 h-5 ml-2" />";
                </button>;
              </form>;
            </motion.div>;

            <motion.div;
              className="bg-white rounded-lg shadow-lg p-8"";
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
=======
              viewport={{ once:true }}
            >,
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">";,
                Why Choose Zion Tech Group?;
              </h2>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-2966
              
              <div className="space-y-6">";
                <div className="flex items-start space-x-4">";
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">";
                    <Clock className="w-5 h-5 text-blue-600" />";
                  </div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>";
                    <p className="text-gray-600 text-sm">Round-the-clock technical support and assistance</p>";
                  </div>;
                </div>;

                <div className="flex items-start space-x-4">";
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">";
                    <MessageSquare className="w-5 h-5 text-green-600" />";
                  </div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Consultation</h3>";
                    <p className="text-gray-600 text-sm">Free consultation with our technology experts</p>";
                  </div>;
                </div>;

                <div className="flex items-start space-x-4">";
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">";
                    <ArrowRight className="w-5 h-5 text-purple-600" />";
                  </div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900 mb-1">Rapid Response</h3>";
                    <p className="text-gray-600 text-sm">Quick response time and fast project delivery</p>";
                  </div>;
                </div>;
              </div>;

<<<<<<< HEAD
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600 text-sm mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM EST</p>
                <p className="text-gray-600 text-sm">Sunday: Emergency support only</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
