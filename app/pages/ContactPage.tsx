import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare,
  Calendar,
  User,
  Building,
  Globe,
  Zap
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 302 464 0950",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "364 E Main St STE 1008",
      details2: "Middletown DE 19709",
      description: "Visit our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      details2: "Saturday: 10:00 AM - 4:00 PM",
      description: "EST Time Zone"
    }
  ];

  const services = [
    "AI Services",
    "IT Services", 
    "Cloud Solutions",
    "Cybersecurity",
    "Web Development",
    "Mobile Apps",
    "Data Analytics",
    "Digital Transformation",
    "Micro SAAS",
    "Consulting"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "Not sure yet"
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get Your Project Quote</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com. Located in Middletown, DE." />
        <meta name="keywords" content="contact Zion Tech Group, AI services contact, IT solutions contact, project quote, consultation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Let's discuss your project and create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-slate-700 rounded-xl p-6 text-center hover:bg-slate-600 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-cyan-500/20 rounded-full">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                    {info.details2 && (
                      <p className="text-cyan-400 font-medium mb-2">{info.details2}</p>
                    )}
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Project</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-slate-800 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-cyan-400" />
                    Send us a Message
                  </h3>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                      <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="your@email.com"
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
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                            Service Needed *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                            Project Budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range, index) => (
                              <option key={index} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>

                {/* Contact Information & Features */}
                <div className="space-y-8">
                  {/* Why Choose Us */}
                  <div className="bg-slate-800 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Zap className="w-6 h-6 mr-3 text-cyan-400" />
                      Why Choose Zion Tech Group?
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-semibold">Expert Team</h4>
                          <p className="text-gray-300 text-sm">Certified professionals with 10+ years of experience</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-semibold">24/7 Support</h4>
                          <p className="text-gray-300 text-sm">Round-the-clock technical support and monitoring</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-semibold">Proven Track Record</h4>
                          <p className="text-gray-300 text-sm">500+ successful projects delivered on time</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-semibold">Competitive Pricing</h4>
                          <p className="text-gray-300 text-sm">Transparent pricing with no hidden costs</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h3>
                    <p className="text-cyan-100 mb-6">
                      Call us now for urgent technical support or project consultation.
                    </p>
                    <a 
                      href="tel:+13024640950" 
                      className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call +1 302 464 0950
                    </a>
                  </div>

                  {/* Response Time */}
                  <div className="bg-slate-800 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                      Response Times
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Email inquiries</span>
                        <span className="text-cyan-400 font-semibold">Within 2 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Phone calls</span>
                        <span className="text-cyan-400 font-semibold">Immediate</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Project quotes</span>
                        <span className="text-cyan-400 font-semibold">Within 24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;