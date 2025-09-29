import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'hello@ziontechsolutions.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm EST'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Tech Street, Innovation City',
      description: 'Suite 100, IC 12345'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant support from our team'
    }
  ];

  const serviceAreas = [
    'AI Development & Machine Learning',
    'Cloud Architecture & Migration',
    'Web & Mobile Application Development',
    'Cybersecurity & Compliance',
    'Data Analytics & Business Intelligence',
    'Blockchain & Web3 Solutions',
    'DevOps & Automation',
    'Technical Consulting'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Contact Us - Zion Tech Solutions | Get in Touch Today</title>
        <meta name="description" content="Get in touch with Zion Tech Solutions for your technology needs. Expert consultation on AI, cloud computing, cybersecurity, and more. Contact us today!" />
        <meta name="keywords" content="contact us, technology consultation, AI services, cloud computing, cybersecurity, web development" />
      </Head>
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our expert team for a free consultation.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Service Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
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
                        placeholder="John"
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
                        placeholder="Doe"
                      />
                    </div>
                  </div>

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
                      placeholder="john.doe@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company Name"
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
                      <option value="ai-development">AI Development</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="blockchain">Blockchain</option>
                      <option value="devops">DevOps</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Service Areas & Additional Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Can Help
                </h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Our Service Areas
                  </h3>
                  <ul className="space-y-2">
                    {serviceAreas.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Free Consultation
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Schedule a free 30-minute consultation with our experts to discuss your project requirements and get personalized recommendations.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Schedule Now
                  </button>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Response Time
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> Within 24 hours
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> Immediate during business hours
                  </p>
                  <p className="text-gray-700">
                    <strong>Live Chat:</strong> Instant response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful companies that have transformed their business with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now: (555) 123-4567
              </a>
              <a 
                href="mailto:hello@ziontechsolutions.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email Us Today
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;