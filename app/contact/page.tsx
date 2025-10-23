"use client";
import React from "react";
import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    urgency: "normal",
    preferredContact: "email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const _handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const _handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        urgency: "normal",
        preferredContact: "email"
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  React.useEffect(() => {
    if (submitStatus === 'success') {
      const _timer = setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
          urgency: "normal",
          preferredContact: "email"
        });
        setSubmitStatus('idle');
      }, 3000);
    }
  }, [submitStatus]);
  return (
    <>
    </><<<<<<< HEAD
      <Helmet>
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts to discuss your project requirements and get started today."
        />
        <meta
          name="keywords"
          content="contact us, AI solutions, IT services, project consultation, business inquiry"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        
          </div>
        <section className="relative py-20 px-4 overflow-hidden">
          
        </section>
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        
          </div><div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge AI and IT solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4">
          
        </section>
          <div className="max-w-4xl mx-auto">
        
          </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
        
          </div><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-white mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
        
          </div><div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
        
          </div><div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
        
          </div><div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
        
          </div><div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
        
          </div><div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="it-services">IT Services</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="custom-development">Custom Development</option>
                      <option value="consulting">Consulting</option>
                    </select>
        
          </div><div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under Page0,000</option>
                      <option value="10k-50k">Page0,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - Page00,000</option>
                      <option value="100k-500k">Page00,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
        
          </div><div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
    <>
    </><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
    <>
                        Send Message
                        
    </><ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
        
          </div><div>
          <h1 className="text-2xl font-bold text-white mb-6">
                    Get in Touch
                  </h2>
          
          </div><p className="text-gray-300 mb-8">
                    We're here to help you transform your business with innovative AI and IT solutions. 
                    Reach out to us through any of the channels below.
                  </p>
        <div className="space-y-6">
        
          </div><div className="flex items-start space-x-4">
        
          </div><div className="bg-blue-600/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-400" />
        
          </div><div>
          <h1 className="text-lg font-semibold text-white mb-1">Email Us</h3>
          
          </div><p className="text-gray-300 mb-2">Send us an email anytime</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
        <div className="flex items-start space-x-4">
        
          </div><div className="bg-green-600/20 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-400" />
        
          </div><div>
          <h1 className="text-lg font-semibold text-white mb-1">Call Us</h3>
          
          </div><p className="text-gray-300 mb-2">Speak with our team directly</p>
                      <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                        +1 (302) 464-0950
                      </a>
        <div className="flex items-start space-x-4">
        
          </div><div className="bg-purple-600/20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-400" />
        
          </div><div>
          <h1 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
          
          </div><p className="text-gray-300 mb-2">Our headquarters location</p>
                      <p className="text-purple-400">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </p>
        <div className="flex items-start space-x-4">
        
          </div><div className="bg-orange-600/20 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-400" />
        
          </div><div>
          <h1 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
          
          </div><p className="text-gray-300 mb-2">We're available during these times</p>
                      <p className="text-orange-400">
                        Mon - Fri: 9:00 AM - 6:00 PM EST<br />
                        Sat: 10:00 AM - 4:00 PM EST
                      </p>
        </div>
      </div>
        </div>
      </div>
=======

          </div>
        </section>

>>>>>>> ff557e59c0f892dc6b5ba2dc5c603355d3eaebf1
        </div>
      </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default Page;
=======
>>>>>>> ff557e59c0f892dc6b5ba2dc5c603355d3eaebf1

export default ContactPage;
