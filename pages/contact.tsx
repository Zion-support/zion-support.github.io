import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';

const Contact: NextPage = () => {
  return (
    <Layout
      title="Contact Zion Tech Group - Get in Touch Today"
      description="Contact Zion Tech Group for technology solutions, consultations, or support. We're here to help transform your business with innovative technology."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Touch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Ready to transform your business with cutting-edge technology solutions? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. We're here to help with all your technology needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us a message anytime</p>
              <a href="mailto:info@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                info@ziontechgroup.com
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our experts</p>
              <a href="tel:+1-555-123-4567" className="text-purple-600 hover:text-purple-700 font-semibold">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our office location</p>
              <address className="text-green-600 not-italic">
                123 Tech Street<br />
                Innovation District<br />
                San Francisco, CA 94105
              </address>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <p className="text-gray-600 mb-4">When we're available</p>
              <div className="text-orange-600">
                Mon-Fri: 9AM-6PM PST<br />
                Sat: 10AM-2PM PST<br />
                Sun: Closed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours. 
                Let's start the conversation about your technology needs.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
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
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-development">AI Development</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="blockchain-solutions">Blockchain Solutions</option>
                  <option value="iot-platforms">IoT Platforms</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="consulting">Technology Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project or how we can help you..."
                ></textarea>
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  I would like to receive updates about new technologies and industry insights from Zion Tech Group.
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Contact Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you navigate the complex world of technology and find solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Consultation</h3>
              <p className="text-gray-600">
                Get expert advice on your technology challenges without any obligation. 
                We'll help you understand your options and recommend the best path forward.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Our team of certified professionals has years of experience across multiple 
                technologies and industries. We'll guide you to the right solution.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
              <p className="text-gray-600">
                We understand that time is valuable. We'll respond to your inquiry within 
                24 hours and get you the information you need quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about working with Zion Tech Group.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                How quickly can you start working on my project?
              </h3>
              <p className="text-gray-600">
                We can typically begin work on most projects within 1-2 weeks of initial consultation. 
                For urgent projects, we can often start even sooner. Contact us to discuss your timeline.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Do you work with small businesses and startups?
              </h3>
              <p className="text-gray-600">
                Absolutely! We work with organizations of all sizes, from startups to Fortune 500 companies. 
                We tailor our approach and solutions to meet your specific needs and budget.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                What industries do you specialize in?
              </h3>
              <p className="text-gray-600">
                We have experience across multiple industries including healthcare, finance, manufacturing, 
                retail, and government. Our technology solutions are adaptable to any industry.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-gray-600">
                Yes, we offer various support and maintenance packages to ensure your solutions 
                continue to perform optimally. We're here for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Don't wait to transform your business with innovative technology solutions. 
            Contact us today and let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:info@ziontechgroup.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Email Us Now
            </a>
            <a href="tel:+1-555-123-4567" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;