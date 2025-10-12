'use client';
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us | Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, and inquiries." />
        <meta name="keywords" content="contact, Zion Tech Group, AI solutions, IT services, consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Contact
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta const name = "description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." / / />
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" / / />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900py-20"></div>
        <div className="containermx-autopx-4"></div>
          {/* Header */}
          <div className="text-centermb-16"></div>
            <h1 className="text-5 xl lg:text-7 xl font-bold text-white mb-6" />
              Get in
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500bg-clip-texttext-transparent">{' '}Touch
              </span>
              <br />
              <span className="text-white">Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with our AI and IT solutions? Get in touch with our experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xll p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400">Message sent successfully!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                </div>}
              )}
              <form onSubmit="{handleSubmit}" className="space-y-6" />
                <div className="grid grid-cols-1md:grid-cols-2gap-6"></div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Full Name *
                    </label>
                    <div className="relative"></div>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />
                    </div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Email Address *
                    </label>
                    <div className="relative"></div>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />
                    </div>
                </div>
                <div className="grid grid-cols-1md:grid-cols-2gap-6"></div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Company
                    </label>
                    <div className="relative"></div>
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />
                    </div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Phone Number
                    </label>
                    <div className="relative"></div>
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />
                    </div>
                </div>
                <div /></div>
                  <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Service Interest
                  </label>
                  <div className="relative"></div>
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <option value="">Select a service</option>
                      {services.map((service) => (}
                        <option key="{service}" value="{service}">{service}
                        </option>))}
                    </select>
                  </div>
                <div />
                  <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Message *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5h-5text-gray-400" />
                    </select>
                  </div>
                <div /></div>
                  <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Message *
                  </label>
                  <div className="relative"></div>
                    <MessageCircle className="absolute left-3 top-3 w-5h-5text-gray-400" />
                    />
                  </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="it-services">IT Services</option>
                    <option value="consultation">Consultation</option>
                    <option value="support">Support</option>
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
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...

                  ) : (
                      <Send className="w-5 h-5 mr-2" />
                      Send Message

                    </React.Fragment>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
                <p className="text-gray-300 mb-8">
                  Ready to transform your business with cutting-edge AI and IT solutions? 
                  Our team of experts is here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div className="space-y-8">
                <div />
                  <h2 className="text-3 xl font-bold text-white mb-6"  >Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
              We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-centerjustify-centermr-4">
                      <Phone className="w-6h-6text-white" />
                    </div>
                    <div>
            <h3 className="text-lg font-semiboldtext-white mb-1" />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                  </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (302) 464-0950</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
                    </>}

                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8"></div>
              <div /></div>
                <h2 className="text-3 xl font-bold text-white mb-6"  >Contact Information</h2>
                <p className="text-lg text-gray-300 mb-8">
              We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div className="space-y-8"></div>
                <div /></div>
                  <h2 className="text-3 xl font-bold text-white mb-6"  >Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
              We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6"></div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <Phone className="w-6h-6text-white" />
                    </div>
                    <div /></div>
<h3 className="text-lg font-semiboldtext-white mb-1"  />{info.title}
                      </h3>
                      <p className="text-cyan-400font-mediummb-1">
              {info.details}
                      </p>
                      <p className="text-gray-300text-sm">
              {info.description}
                      </p>
                    </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-centerjustify-centermr-4">
                      <Mail className="w-6h-6text-white" />
                    </div>
                    <div>
            <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-centerjustify-centermr-4">
                      <MapPin className="w-6h-6text-white" />
                    </div>
                    <div>
            <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br / />San Francisco, CA 94105</p>
                    </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-centerjustify-centermr-4">
                      <Clock className="w-6h-6text-white" />
                    </div>
                    <div>
            <h3 className="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
  )}
export default ContactPage
  </textarea>
  </label>
  </label>
  </label>
  </span>
  </HTMLInputElement>
                      </p>
                    </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <Mail className="w-6h-6text-white" />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <MapPin className="w-6h-6text-white" />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white">Address</h3>
                      <p className="text-gray-300" />123 Tech Street<br / />San Francisco, CA 94105</p>
                    </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <Clock className="w-6h-6text-white" />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white">Business Hours</h3>
                      <p className="text-gray-300" />Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
;
