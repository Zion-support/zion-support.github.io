'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin } from 'lucide-react'
const ContactPage: React.FC = () => {
    return (
    <>
      <Navigation />
      
      <main className="...">
        {/* Hero Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="...">
                Ready to transform your business? Let's discuss your project
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <div className="...">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <form className="...">
                    <div className="...">
                      <div>
                        <label htmlFor="firstName" className="...">
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
                        <label htmlFor="lastName" className="...">
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
                      <label htmlFor="email" className="...">
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
                      <label htmlFor="company" className="...">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="...">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="...">
                        <option value="">Select a service</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="cloud-architecture">Cloud Architecture</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="...">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project..."
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="...">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="...">
                    <div className="...">
                      <div className="...">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">info@ziontechgroup.com</p>
                        <p className="text-gray-600">support@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="...">
                      <div className="...">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                    <div className="...">
                      <div className="...">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                        <p className="...">
                          123 Tech Street<br />
                          Innovation City, IC 12345<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="...">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                    <ul className="...">
                      <li>• 24/7 customer support</li>
                      <li>• Free consultation and project assessment</li>
                      <li>• Custom solutions tailored to your needs</li>
                      <li>• Proven track record with 500+ successful projects</li>
                      <li>• Competitive pricing and flexible payment options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      )
}
export default ContactPage