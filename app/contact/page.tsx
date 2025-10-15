import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

// Contact information
const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: "+1-302-464-0950",
    description: "Call us for immediate assistance"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: "kleber@ziontechgroup.com",
    description: "Send us an email anytime"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    details: "364 E Main St STE 1008, Middletown DE 19709",
    description: "Serving clients globally"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    details: "24/7 Support",
    description: "We're always here to help"
  }
];

// Contact form data
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, IT services, and 5G technology. Get in touch with our experts for consultation and support." />
        <meta name="keywords" content="contact, AI solutions, IT services, 5G technology, consultation, support" />
        <meta property="og:title" content="Contact - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with our experts for AI solutions and IT services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="responsive-section">
          <div className="responsive-container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="responsive-hero-title mb-6">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Us</span>
              </h1>
              <p className="responsive-hero-subtitle mb-8">
                Ready to transform your business? Get in touch with our experts for a consultation 
                on AI solutions, IT services, and 5G technology.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="responsive-section">
          <div className="responsive-container">
            <div className="responsive-stats-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="responsive-card text-center">
                  <div className="responsive-icon-large bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="responsive-subheading font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{info.details}</p>
                  <p className="responsive-text text-gray-300">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="responsive-section bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center responsive-margin-bottom">
                <h2 className="responsive-section-title">
                  Get in Touch
                </h2>
                <p className="responsive-section-subtitle">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="responsive-card">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="responsive-subheading text-white mb-4">Thank You!</h3>
                    <p className="responsive-text text-gray-300">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="responsive-form">
                    <div className="responsive-grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="responsive-form-group">
                        <label htmlFor="name" className="responsive-form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="responsive-form-input"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="responsive-form-group">
                        <label htmlFor="email" className="responsive-form-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="responsive-form-input"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div className="responsive-form-group">
                        <label htmlFor="company" className="responsive-form-label">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="responsive-form-input"
                          placeholder="Enter your company name"
                        />
                      </div>

                      <div className="responsive-form-group">
                        <label htmlFor="phone" className="responsive-form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="responsive-form-input"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div className="responsive-form-group md:col-span-2">
                        <label htmlFor="service" className="responsive-form-label">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="responsive-form-input"
                        >
                          <option value="">Select a service</option>
                          <option value="ai-solutions">AI Solutions</option>
                          <option value="it-services">IT Services</option>
                          <option value="micro-saas">Micro SAAS</option>
                          <option value="5g-solutions">5G Solutions</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="responsive-form-group md:col-span-2">
                        <label htmlFor="message" className="responsive-form-label">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="responsive-form-textarea"
                          placeholder="Tell us about your project or requirements..."
                        />
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="responsive-button responsive-button-primary group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="responsive-icon ml-2 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="responsive-section">
          <div className="responsive-container text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="responsive-hero-title mb-6">
                Ready to Get Started?
              </h2>
              <p className="responsive-hero-subtitle mb-8">
                Don't wait to transform your business. Contact us today for a free consultation 
                and discover how our solutions can help you achieve your goals.
              </p>
              
              <div className="responsive-flex gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="responsive-button responsive-button-primary group"
                >
                  <Phone className="responsive-icon mr-2" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="responsive-button responsive-button-secondary group"
                >
                  <Mail className="responsive-icon mr-2" />
                  Email Us
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