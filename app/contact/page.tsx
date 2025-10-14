import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Circle, Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  return (
    <div className="min-h-screen bg-white">"
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions." />"
      </Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Ready to transform your business with our AI and IT solutions?
            Get in touch with our team of experts.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">"
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>"
            <div className="space-y-6">"
              <div className="flex items-start">"
                <div className="bg-blue-100 rounded-full p-3 mr-4">"
                  <Phone className="w-6 h-6 text-blue-600" />"
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>"
                  <p className="text-gray-600">+1 (555) 123-4567</p>"
                  <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>"
                </div>
              </div>
              <div className="flex items-start">"
                <div className="bg-green-100 rounded-full p-3 mr-4">"
                  <Mail className="w-6 h-6 text-green-600" />"
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>"
                  <p className="text-gray-600">contact@ziontechgroup.com</p>"
                  <p className="text-sm text-gray-500>We'll respond within 24 hours</p>"
                </div>
              </div>
              <div className="flex items-start">"
                <div className="bg-purple-100 rounded-full p-3 mr-4">"
                  <MapPin className="w-6 h-6 text-purple-600" />"
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>"
                  <p className="text-gray-600">"
                    123 Tech Street<br />
                    Innovation District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-start">"
                <div className="bg-orange-100 rounded-full p-3 mr-4">"
                  <Clock className="w-6 h-6 text-orange-600" />"
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>"
                  <p className="text-gray-600">"
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>"
            <form onSubmit={handleSubmit} className="space-y-6">"
              <div className="grid md:grid-cols-2 gap-6">"
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">"
                    Full Name *
                  </label>
                  <input>
                    type="text""
                    id="name""
                    name="name""
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">"
                    Email Address *
                  </label>
                  <input>
                    type="email""
                    id="email""
                    name="email""
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">"
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">"
                    Company
                  </label>
                  <input>
                    type="text""
                    id="company""
                    name="company""
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">"
                    Phone Number
                  </label>
                  <input>
                    type="tel""
                    id="phone""
                    name="phone""
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">"
                  Subject *
                </label>
                <select>
                  id="subject""
                  name="subject""
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                >
                  <option value="">Select a subject</option>"
                  <option value="ai-solutions">AI Solutions</option>"
                  <option value="cloud-services">Cloud Services</option>"
                  <option value="cybersecurity">Cybersecurity</option>"
                  <option value="consultation">Consultation</option>"
                  <option value="other">Other</option>"
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">"
                  Message *
                </label>
                <textarea>
                  id="message""
                  name="message""
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                  placeholder="Tell us about your project or how we can help...""
                ></textarea>
              </div>
              <button>
                type="submit""
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center""
              >
                <Send className="w-5 h-5 mr-2" />"
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div></div>);