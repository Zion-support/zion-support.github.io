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
  Users,
  ArrowRight,
  Globe,
  Shield,
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
    message: '',
    urgency: 'normal'
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
        budget: '',
        message: '',
        urgency: 'normal'
      });
    }, 3000);
  };

  const services = [
    'AI Solutions',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Web Development',
    'Mobile App Development',
    'Data Analytics',
    'DevOps & Automation',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our experts",
      value: "+1 302 464 0950",
      link: "tel:+13024640950",
      color: "blue"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Send us a detailed message",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      color: "green"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      description: "Come to our office",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      color: "purple"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with us online",
      value: "Available 24/7",
      link: "#",
      color: "orange"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Response",
      description: "We respond to all inquiries within 2 hours during business hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Confidential",
      description: "Your information is protected with enterprise-grade security"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Work with certified professionals with years of experience"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Serving clients worldwide with local expertise"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get In Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, quote, or speak with our experts. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact zion tech group, AI consultation, IT services contact, free quote, business consultation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your business? Let's discuss your project and find the perfect solution for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
              <p className="text-xl text-gray-600">Choose your preferred way to get in touch with us</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className={`bg-gradient-to-br from-${method.color}-50 to-${method.color}-100 border border-${method.color}-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <div className={`w-16 h-16 bg-${method.color}-100 rounded-lg flex items-center justify-center mb-4 text-${method.color}-600`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className={`text-${method.color}-600 font-semibold`}>{method.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 2 hours.</p>
                  </div>
                ) : (
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
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In
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
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Urgency
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="low">Low - Flexible timeline</option>
                        <option value="normal">Normal - Standard timeline</option>
                        <option value="high">High - Rush project</option>
                        <option value="urgent">Urgent - ASAP</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info & Why Choose Us */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-blue-600">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+1 302 464 0950</p>
                        <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 text-green-600">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">kleber@ziontechgroup.com</p>
                        <p className="text-sm text-gray-500">We respond within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 text-purple-600">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                        <p className="text-sm text-gray-500">United States</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 text-orange-600">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Business Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-sm text-gray-500">EST Time Zone</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                  
                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;