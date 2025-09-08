import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Globe, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us directly for immediate assistance',
      action: 'tel:+13024640950',
      actionText: 'Call Now'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email for detailed inquiries',
      action: 'mailto:kleber@ziontechgroup.com',
      actionText: 'Send Email'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit our headquarters for in-person meetings',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      actionText: 'Get Directions'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: 'We\'re available during business hours for consultations',
      action: '#',
      actionText: 'Schedule Meeting'
    }
  ];

  const services = [
    'AI Solutions',
    'Cloud & DevOps',
    'Cybersecurity',
    'Data & Analytics',
    'Micro SaaS',
    'Quantum Computing',
    'Edge AI IoT',
    'Blockchain Solutions',
    'GreenTech',
    'Healthcare AI',
    'Financial Services',
    'Custom Development'
  ];

  const budgets = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K - $1M',
    'Over $1M'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6-12 months)',
    'Long-term (1+ years)'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss how our innovative solutions can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-2">{method.details}</p>
                <p className="text-sm text-gray-500 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  target={method.action === '#' ? undefined : '_blank'}
                  rel={method.action === '#' ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {method.actionText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, requirements, and goals..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Company Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About Zion Tech Group</h2>
                <p className="text-gray-600 mb-4">
                  We are a leading technology company specializing in cutting-edge AI, IT infrastructure, 
                  and micro SaaS solutions. Our mission is to empower businesses with innovative technology 
                  that drives growth and transformation.
                </p>
                <p className="text-gray-600 mb-4">
                  With over 500+ active customers and a 4.9/5 rating, we've established ourselves as a 
                  trusted partner for organizations seeking to leverage the latest technological advancements.
                </p>
                <p className="text-gray-600">
                  Our team of experts is committed to delivering exceptional value through personalized 
                  solutions, comprehensive support, and continuous innovation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Cutting-edge AI and quantum computing solutions</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Enterprise-grade security and compliance</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>24/7 expert support and consultation</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Proven track record with Fortune 500 companies</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Custom solutions tailored to your needs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Ready to Get Started?</h3>
                <p className="text-blue-800 mb-4">
                  Schedule a free consultation with our experts to discuss your project requirements 
                  and explore how our solutions can benefit your business.
                </p>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Location */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Headquarters</h2>
            <p className="text-gray-600">
              Located in the heart of Delaware, our office is easily accessible and welcomes visitors 
              for in-person consultations and meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">Google Maps integration</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                <p className="text-gray-600">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Getting Here</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 15 minutes from Wilmington Airport (ILG)</li>
                  <li>• 45 minutes from Philadelphia International Airport (PHL)</li>
                  <li>• 2 hours from New York City</li>
                  <li>• Easy access from I-95 and Route 1</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Parking</h3>
                <p className="text-gray-600">
                  Free parking available in the building lot. Additional street parking available 
                  on Main Street and surrounding areas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  Our office is fully accessible with wheelchair ramps, elevators, and accessible 
                  restrooms. Please let us know if you need any special accommodations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait to get started. Contact us today to begin your digital transformation journey 
            with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
