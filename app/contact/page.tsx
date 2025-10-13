import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Globe,
  Building,
  Users,
  Award
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
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
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 302 464 0950",
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
      title: "Address",
      details: "364 E Main St STE 1008",
      description: "Middletown DE 19709, USA"
    }
  ];

  const services = [
    "AI Services",
    "IT Services", 
    "Micro SAAS",
    "5G Solutions",
    "Web Development",
    "Mobile Development",
    "Cloud Infrastructure",
    "Cybersecurity",
    "Data Analytics",
    "Custom Software",
    "Consultation",
    "Other"
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch for AI & IT Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact, AI solutions, IT services, technology consulting, digital transformation" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="holographic">Get In Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-gray-800">
                          {service}
                        </option>
                      ))}
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full neon-button neon-cyan px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Business Hours</h2>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-cyan-400 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Call Now</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Send Email</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>
                  <a
                    href="https://ziontechgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Visit Website</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
