import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  MessageSquare,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group | Get in Touch for Technology Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for cutting-edge technology solutions. Reach out to our team for innovative micro SAAS, IT infrastructure, and AI services." />
        <meta name="keywords" content="contact Zion Tech Group, technology solutions, micro SAAS, IT services, AI solutions, support" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get in Touch with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Zion Tech Group</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ready to transform your business with cutting-edge technology solutions? Contact our team today to discuss how we can revolutionize your operations.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                      <p className="text-gray-300 mb-2">+1 302 464 0950</p>
                      <p className="text-sm text-gray-400">Available Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                      <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                      <p className="text-sm text-gray-400">We typically respond within 2-4 hours during business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                      <p className="text-gray-300 mb-2">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709<br />
                        United States
                      </p>
                      <p className="text-sm text-gray-400">Headquarters location</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                      <a 
                        href="https://ziontechgroup.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        https://ziontechgroup.com
                      </a>
                      <p className="text-sm text-gray-400">Visit our main website for more information</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    * Emergency support available 24/7 for enterprise clients
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="micro-saas">Micro SAAS Solutions</option>
                      <option value="it-infrastructure">IT Infrastructure Services</option>
                      <option value="ai-services">AI Services</option>
                      <option value="consulting">Technology Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Quick Actions</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link 
                href="/services"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Explore Our Services</h3>
                <p className="text-gray-300">Discover our comprehensive portfolio of innovative technology solutions</p>
              </Link>

              <Link 
                href="/products"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">View Our Products</h3>
                <p className="text-gray-300">Browse our revolutionary product portfolio designed for 2031 and beyond</p>
              </Link>

              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Our Website</h3>
                <p className="text-gray-300">Explore our main website for more information and resources</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;