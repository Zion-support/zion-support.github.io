import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 302 464 0950",
      link: "tel:+13024640950",
      description: "Call us anytime"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      description: "Send us an email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "364 E Main St STE 1008 Middletown DE 19709",
      link: "https://maps.google.com",
      description: "Visit our office"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM EST",
      link: "",
      description: "24/7 support available"
    }
  ];

  const services = [
    "AI Development",
    "Cloud Migration",
    "Cybersecurity",
    "Web Development",
    "Mobile Development",
    "Data Analytics",
    "Blockchain Solutions",
    "Technology Consulting",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for AI development, cloud migration, cybersecurity, and technology consulting services." />
        <meta name="keywords" content="contact Zion Tech Group, technology consulting, AI services, cloud migration, cybersecurity" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our technology solutions 
            can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-blue-600 hover:text-blue-700 font-medium block mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600 font-medium mb-2">{info.value}</p>
                )}
                <p className="text-gray-500 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        placeholder="Your company name"
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
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
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

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-600">Expert team with 15+ years of experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-600">Free consultation and project assessment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-600">Competitive pricing and transparent quotes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-600">24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-600">Proven track record of successful projects</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6">
                    For urgent matters or technical support, call us directly:
                  </p>
                  <a 
                    href="tel:+13024640950"
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;