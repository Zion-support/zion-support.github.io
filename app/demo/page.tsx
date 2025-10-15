import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
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
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    }, 3000);
  };

  const demoOptions = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "AI Solutions Demo",
      description: "See our AI analytics, content generation, and automation tools in action.",
      duration: "30 minutes"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "5G Technology Demo",
      description: "Experience next-generation connectivity and IoT solutions powered by 5G.",
      duration: "45 minutes"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "IT Services Demo",
      description: "Explore our cloud infrastructure, security, and DevOps solutions.",
      duration: "30 minutes"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Custom Demo",
      description: "Tailored demonstration based on your specific business needs and requirements.",
      duration: "60 minutes"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Schedule Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Schedule a personalized demo of our AI solutions, 5G technology, and IT services. See how we can transform your business." />
        <meta name="keywords" content="demo, schedule demo, AI solutions demo, 5G demo, IT services demo, consultation" />
        <meta property="og:title" content="Schedule Demo - Zion Tech Group" />
        <meta property="og:description" content="See our solutions in action with a personalized demo." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="responsive-section">
          <div className="responsive-container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="responsive-hero-title mb-6">
                Schedule a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Demo</span>
              </h1>
              <p className="responsive-hero-subtitle mb-8">
                See our AI solutions, 5G technology, and IT services in action. 
                Get a personalized demonstration tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Options */}
        <section className="responsive-section">
          <div className="responsive-container">
            <div className="text-center responsive-margin-bottom">
              <h2 className="responsive-section-title">Choose Your Demo</h2>
              <p className="responsive-section-subtitle max-w-3xl mx-auto">
                Select the type of demonstration that best fits your interests and business needs
              </p>
            </div>
            <div className="responsive-features-grid">
              {demoOptions.map((option, index) => (
                <div key={index} className="responsive-card group">
                  <div className="responsive-icon-hero bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="responsive-subheading font-bold text-white mb-4">{option.title}</h3>
                  <p className="responsive-text text-gray-300 mb-4 leading-relaxed">{option.description}</p>
                  <p className="text-cyan-400 font-semibold responsive-text">Duration: {option.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section className="responsive-section bg-white/5 backdrop-blur-sm">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center responsive-margin-bottom">
                <h2 className="responsive-section-title">Request Your Demo</h2>
                <p className="responsive-section-subtitle">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your personalized demo.
                </p>
              </div>

              <div className="responsive-card">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="responsive-subheading text-white mb-4">Demo Request Received!</h3>
                    <p className="responsive-text text-gray-300">
                      Thank you for your interest. We'll contact you within 24 hours to schedule your demo.
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

                      <div className="responsive-form-group">
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
                          <option value="5g-technology">5G Technology</option>
                          <option value="it-services">IT Services</option>
                          <option value="micro-saas">Micro SAAS</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="responsive-form-group">
                        <label htmlFor="preferredDate" className="responsive-form-label">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="responsive-form-input"
                        />
                      </div>

                      <div className="responsive-form-group">
                        <label htmlFor="preferredTime" className="responsive-form-label">
                          Preferred Time
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="responsive-form-input"
                        >
                          <option value="">Select a time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                        </select>
                      </div>

                      <div className="responsive-form-group md:col-span-2">
                        <label htmlFor="message" className="responsive-form-label">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="responsive-form-textarea"
                          placeholder="Tell us about your specific needs or questions..."
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
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Calendar className="responsive-icon mr-2" />
                            Schedule Demo
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
                Ready to See Our Solutions?
              </h2>
              <p className="responsive-hero-subtitle mb-8">
                Don't wait to discover how our technology can transform your business. 
                Schedule your demo today and see the difference we can make.
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

export default DemoPage;