import React, { useState} from "react"
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

// Contact information
const contactInfo = [
  { icon: <Phone className="w-6 h-6" />, title: "Phone", details: "+1-302-464-0950", description: "Call us for immediate assistance" },
  { icon: <Mail className="w-6 h-6" />, title: "Email", details: "kleber@ziontechgroup.com", description: "Send us an email anytime" },
  { icon: <MapPin className="w-6 h-6" />, title: "Location", details: "Delaware, USA", description: "Serving clients globally" },
  { icon: <Clock className="w-6 h-6" />, title: "Business Hours", details: "24/7 Support", description: "We're always here to help" }
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
      setFormData(prev => ({ ...prev, [name]: value }));
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
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    }, 3000);
  };
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Contact page" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Us</span>
              </h1>
              
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to transform your business? Get in touch with our experts for a consultation,
    on AI solutions, IT services, and 5G technology.
              </p>
            </div>
          </div>
        </section>
        { /* Contact Information */ }
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to help you succeed. Choose the best way to reach us.
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              { contactInfo.map((info, index) => (
                <div key={index } className="text-center bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300">
                  
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    { info.icon }
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{ info.title }</h3>
                  
          <p className="text-cyan-400 font-semibold mb-2">{ info.details }</p>
                  
          <p className="text-gray-300 text-sm">{ info.description }</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Contact Form */ }
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Send us a Message</h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50">
                { isSubmitted ? (
                  
        <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit } className="space-y-6">
                    
        <div className="grid md:grid-cols-2 gap-6">
                      <div>
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
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
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
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
        <div className="grid md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
    type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
    id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                        <option value="">Select a service</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="5g-technology">5G Technology</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="cloud-solutions">Solutions</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="consultation">Consultation</option>
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Tell us about your project or how we can help you..."
                      />
                    </div>
                    
        <div className="text-center">
                      <button
    type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto">
                        { isSubmitting ? (
                          <>
                            
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        ) }
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
