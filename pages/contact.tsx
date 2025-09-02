import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your technology needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in <span className="text-blue-600">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge technology? 
                Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-8 bg-white">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                        <a href="tel:+13024640950" className="text-gray-600 hover:text-blue-600 transition-colors">
                          +1 302 464 0950
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                          kleber@ziontechgroup.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                        <p className="text-gray-600">
                          364 E Main St STE 1008<br />
                          Middletown, DE 19709
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                          Saturday: 10:00 AM - 4:00 PM EST<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Contact Options */}
                <Card className="p-8 bg-white">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h2>
                  <div className="space-y-4">
                    <a 
                      href="tel:+13024640950" 
                      className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="flex items-center justify-center w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </a>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 bg-white">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-services">AI Services</option>
                        <option value="cloud-platforms">Cloud Platforms</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="micro-saas">Micro SaaS</option>
                        <option value="data-engineering">Data Engineering</option>
                        <option value="mlops">MLOps Platform</option>
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
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project requirements..."
                        required
                      ></textarea>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't wait to transform your business. Contact us today for a free consultation and discover how our technology solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 transition-colors text-lg font-medium rounded-md">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors text-lg font-medium rounded-md">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;