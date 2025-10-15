import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0ACompany: ${formData.company}%0AService Interest: ${formData.service}%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT solution needs. We're here to help transform your business." />
        <meta name="keywords" content="contact, AI services, IT solutions, business consultation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="animated-grid"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('hero') ? 'visible' : ''}`} id="hero">
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
                <span className="holographic">Contact Us</span>
              </h1>
              <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
                Ready to transform your business with our AI and IT solutions? Get in touch with our expert team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div className={`slide-in-left ${visibleElements.has('contact-info') ? 'visible' : ''}`} id="contact-info">
                <h2 className="text-3xl font-bold neon-text mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="neon-card">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">📞</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <a 
                          href="tel:+13024640950" 
                          className="text-cyan-400 hover:text-cyan-300 text-lg transition-colors"
                        >
                          +1 (302) 464-0950
                        </a>
                        <p className="text-gray-400 text-sm mt-1">Available 24/7 for urgent matters</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="neon-card">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">📧</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <a 
                          href="mailto:kleber@ziontechgroup.com" 
                          className="text-cyan-400 hover:text-cyan-300 text-lg transition-colors"
                        >
                          kleber@ziontechgroup.com
                        </a>
                        <p className="text-gray-400 text-sm mt-1">We respond within 2 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="neon-card">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">📍</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Address</h3>
                        <p className="text-gray-300 text-lg">
                          364 E Main St STE 1008<br />
                          Middletown DE 19709
                        </p>
                        <p className="text-gray-400 text-sm mt-1">United States</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="neon-card">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🕒</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                        <div className="text-gray-300">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                          <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                          <p>Sunday: Emergency support only</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold neon-text-purple mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href="tel:+13024640950" 
                      className="neon-button text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="neon-button neon-button-purple text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`slide-in-right ${visibleElements.has('contact-form') ? 'visible' : ''}`} id="contact-form">
                <div className="neon-card">
                  <h2 className="text-3xl font-bold neon-text-pink mb-8">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-services">AI Services</option>
                        <option value="micro-saas">Micro SAAS Solutions</option>
                        <option value="it-services">IT Services</option>
                        <option value="cloud-infrastructure">Cloud Infrastructure</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="digital-transformation">Digital Transformation</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full neon-button text-lg py-4"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('faq') ? 'visible' : ''}`} id="faq">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="holographic">Frequently Asked Questions</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                Quick answers to common questions about our services and processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="neon-card">
                <h3 className="text-xl font-bold neon-text mb-4">How quickly can you start my project?</h3>
                <p className="text-gray-300">
                  Most projects can begin within 1-2 weeks after initial consultation. We prioritize urgent requests and can often accommodate faster timelines for critical projects.
                </p>
              </div>

              <div className="neon-card">
                <h3 className="text-xl font-bold neon-text-purple mb-4">Do you offer ongoing support?</h3>
                <p className="text-gray-300">
                  Yes! All our solutions include comprehensive support packages. We offer 24/7 support for critical systems and regular maintenance for all projects.
                </p>
              </div>

              <div className="neon-card">
                <h3 className="text-xl font-bold neon-text-pink mb-4">What's your pricing structure?</h3>
                <p className="text-gray-300">
                  We offer flexible pricing based on project scope and requirements. Contact us for a detailed quote tailored to your specific needs and budget.
                </p>
              </div>

              <div className="neon-card">
                <h3 className="text-xl font-bold neon-text-green mb-4">Do you work with small businesses?</h3>
                <p className="text-gray-300">
                  Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable and designed to grow with your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className={`fade-in ${visibleElements.has('cta') ? 'visible' : ''}`} id="cta">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait to transform your business. Contact us today for a free consultation and discover how our AI and IT solutions can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="neon-button text-lg px-8 py-4"
                >
                  Call +1 (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="neon-button neon-button-purple text-lg px-8 py-4"
                >
                  Email Us Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;