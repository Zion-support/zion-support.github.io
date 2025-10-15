<<<<<<< HEAD
'use client";";";";
import React, { useState } from 'react";";";";
import SEOHead from '../components/SEOHead";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,";
  CheckCircleIcon,";";
  ArrowRightIcon;";";";
} from '@heroicons/react/24/outline";";
const ContactPage: React.FC  =  () => {";,";
    const [formData, setFormData] = useState({";";";
    name: '",";";";
    email: '",";";";
    company: '",";";";
    phone: '",";";";
    service: '",";";";
    message: '"

  });
  const handleInputChange  =  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => const { ;,
    const { name, value  } = e.target;
=======
<<<<<<< HEAD
import React, { useState } from 'react;'";
import { Helmet , Circle,  Send,  Phone,  Mail,  MapPin,  Clock  } from 'lucide-react;'";
export default function ContactPage()    {
  const [formData, setFormData] = useState({
    name: ',''";
    email: ',''";
    company: ',''";
    phone: ',''";
    subject: ',''";
    message: '''";
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const: handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value;
    })};
  const: handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false)};
  const: contactInfo = [
    {;
      title: 'Phone',''";
      value: '+1 (555) 123-4567',''";
      description: 'Mon-Fri 9AM-6PM EST''";
    },
    {''";
      icon: 'Email',''";
      title: 'Email',''";
      value: 'contact@ziontechgroup.com',''";
      description: 'We respond within 24 hours'}''";
    },
    {''";
      icon: 'Location',''";
      title: 'Address',''";
      value: '123 Tech Street, Suite 100',''";
      description: 'San Francisco, CA 94105'}''";
    },
    {''";
      icon: 'Clock',''";
      description: '9:00 AM - 6:00 PM EST''";
      description: '9:00 AM - 6:00 PM EST'}''";
    }
  ]
  const: subjects = [;
    'AI Services''";
    'IT Services''";
    'Services''";
    'Micro SAAS''";
    'Digital Transformation''";
    '5G Implementation''";
    'Other''";
  ];
  return (
    <></>
      <EnhancedSEO: title ="Page - Zion Tech Group""";
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""";
        keywords="page, business solutions, technology services, professional services""";
      />
      {/* Hero Section */}
      <section: className ="relative py-20 px-4">""";
        <div: className ="max-w-7xl mx-auto text-center">""";
          <h1: className ="text-5xl md:text-7xl font-bold text-white mb-6">""";
            Contact
            <span: className ="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">""";
              Us
            </span>
          </h1>
          <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""";
            Ready to transform your business with AI and IT solutions?
            Get in touch with our experts today.
          </p>
        </div>
      </section>
      {/* Contact Info */}
      <section: className ="py-20 px-4">""";
        <div: className ="max-w-7xl mx-auto">""";
          <h2: className ="text-4xl font-bold text-white text-center mb-16">""";
            Get in Touch
          </h2>
          <div: className ="grid md:grid-cols-2 lg:grid-cols-4 gap-8">""";
            {contactInfo.map((info, index) => {
              const: Icon = info.icon;
              return (
                <div: key ={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">""";
                  <div: className ="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">""";
                    <Icon: className ="w-6 h-6 text-white" />""";
                  </div>
                  <h3: className ="text-lg font-semibold text-white mb-2">{info.title}</h3>""";
                  <p: className ="text-cyan-400 font-medium mb-1">{info.value}</p>""";
                  <p: className ="text-gray-400 text-sm">{info.description}</p>""";
                </div>
              )})}
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section: className ="py-20 px-4 bg-slate-800/30">""";
        <div: className ="max-w-4xl mx-auto">""";
          <h2: className ="text-4xl font-bold text-white text-center mb-16">""";
            Send us a Message
          </h2>
          {isSubmitted ? (
            <div: className ="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center">""";
              <div: className ="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">""";
                <Circle: className ="w-8 h-8 text-white" />""";
              </div>
              <h3: className ="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>""";
              <p: className ="text-gray-300 mb-6">""";
                Thank you for contacting us. We'll get back to you within 24 hours.''";
              </p>
              <button: onClick ={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: ',''";
                    email: ',''";
                    company: ',''";
                    phone: ',''";
                    subject: ',''";
                    message: '''";
                  })}}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300""";
              >
                Get Started
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/demo""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto">""";
            <div: className ="text-center mb-16">""";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
                Why Choose Our Page Services?
              </h2>
              <p: className ="text-xl text-gray-300 max-w-2xl mx-auto">""";
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">""";
              {features.map((feature, index) => (
                <div: key ={index} className="text-center">""";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""";
                  <p: className ="text-gray-300">{feature.description}</p>""";
                </div>
              ))}
            </div>
              <div: className ="mb-6">""";
                <label: htmlFor ="subject" className="block text-white font-medium mb-2">""";
                  Subject *
                </label>
                <select: id ="subject""";
                  name="subject""";
                  value={formData.subject}
                  onChange={handleChange}
                  required: className ="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""";
                >
                  <option: value =">Select a subject</option>""";
                  {subjects.map((subject, index) => (
                    <option: key ={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div: className ="mb-8">""";
                <label: htmlFor ="message" className="block text-white font-medium mb-2">""";
                  Message *
                </label>
                <textarea: id ="message""";
                  name="message""";
                  value={formData.message}
                  onChange={handleChange}
                  required: rows ={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none""";
                  placeholder="Tell us about your project or how we can help you...""";
                />
              </div>
              <div: className ="text-center">""";
                <button: type ="submit""";
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none""";
                >
                  {isSubmitting ? (
                    <></>
                      <div: className ="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>""";
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                      <Send: className ="w-5 h-5 ml-2 inline" />""";
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )}
=======
'use client';";
import React, { useState } from 'react';";
import SEOHead from '../components/SEOHead';";
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon;
} from '@heroicons/react/24/outline';";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',";
    email: '',";
    company: '',";
    phone: '',";
    service: '',";
    message: ''";
  });

  const: handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
>>>>>>> main
    setFormData(prev => ({
    ...prev,
      [name]: value
  
  }));
  };
<<<<<<< HEAD
  const handleSubmit  =  (e: React.FormEvent) => {;";
    e.preventDefault();";";
    // Handle form submission here";";,";
    console.log('Form submitted:", formData);";";";
    alert('Thank you for your message! We will get back to you within 24 hours.");
  };
  const contactInfo  =  [";
    {";";
      icon: PhoneIcon,";";";
      title: 'Phone",";";";
      details: '+1 302 464 0950",";";";
      description: 'Call us for immediate assistance"
    },";
    {";";
      icon: EnvelopeIcon,";";";
      title: 'Email",";";";
      details: 'kleber@ziontechgroup.com",";";";
      description: 'Send us an email anytime"
    },";
    {";";
      icon: MapPinIcon,";";";
      title: 'Address",";";";
      details: '364 E Main St STE 1008",";";";
      city: 'Middletown, DE 19709",";";";
      description: 'Visit our office"
    },";
    {";";
      icon: ClockIcon,";";";
      title: 'Business Hours",";";";
      details: 'Monday - Friday: 9:00 AM - 6:00 PM",";";";
      description: 'Eastern Time Zone"
    };";
  ];";";
  const services  =  [";";";
    'AI Solutions & Machine Learning",";";";
    'Cybersecurity Services",";";";
    'Cloud Infrastructure",";";";
    'Digital Transformation",";";";
    'Micro SaaS Solutions",";";";
    '5G & IoT Solutions",";";";
    'Web Development",";";";
    'Mobile App Development",";";";
    'Data Analytics",";";";
    'IT Consulting";
  ];
  return (";
    <>";";
      <SEOHead ";";";
        title="Contact Us - Zion Tech Group | Get in Touch"
        description="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        keywords="contact, AI solutions, IT services, digital transformation, phone, email, address"
      />"
      <div className="min-h-screen bg-slate-900 text-white">";";";
        {/* Hero Section */}"
        <section className="relative overflow-hidden py-20 lg: py-32">"
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>"
          <div className="absolute inset-0 opacity-20" style={{",";
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`";";";
          }}></div>"
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center">"
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">"
                Get in <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>";";";
              </h1>"
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Ready to transform your business with cutting-edge technology? Contact our expert team for a consultation.
              </p>
            </div>";
          </div>";";
        </section>";";";
        {/* Contact Information */}"
        <section className="py-16 sm:py-20 bg-slate-800/30">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">"
                Contact <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Information</span>";";";
              </h2>"
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">";";";
                Multiple ways to reach us. We"re here to help with your technology needs.";";
              </p>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {contactInfo.map((info, index) => (";";
                <div ";";";
                  key={index}"
                  className="text-center p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group">"
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">"
                    <info.icon className="w-8 h-8 text-white" />";";";
                  </div>"
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">";";
                    {info.title}";";";
                  </h3>"
                  <p className="text-cyan-400 font-semibold mb-2">{info.details}</p>"
                  {info.city && <p className="text-cyan-400 font-semibold mb-2">{info.city}</p>}"
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              ))};
            </div>";
          </div>";";
        </section>";";";
        {/* Contact Form */}"
        <section className="py-16 sm:py-20">"
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-12">"
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">"
                Send Us a <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Message</span>";";";
              </h2>"
              <p className="text-lg text-gray-300">";";";
                Fill out the form below and we"ll get back to you within 24 hours.";";
              </p>";";";
            </div>"
            <div className="bg-slate-800/50 rounded-xl p-8">"
              <form onSubmit={handleSubmit} className="space-y-6">"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">";";";
                  <div>"
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">";
                      Full Name *";";
                    </label>";";";
                    <input"
                      type="text"
                      id="name"
                      name="name"
                      required";";
                      value={formData.name}";";";
                      onChange={handleInputChange}"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your full name"
                    />";";
                  </div>";";";
                  <div>"
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">";
                      Email Address *";";
                    </label>";";";
                    <input"
                      type="email"
                      id="email"
                      name="email"
                      required";";
                      value={formData.email}";";";
                      onChange={handleInputChange}"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />";";
                  </div>";";";
                </div>"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">";";";
                  <div>"
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">";
                      Company";";
                    </label>";";";
                    <input"
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}";";";
                      onChange={handleInputChange}"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your company name"
                    />";";
                  </div>";";";
                  <div>"
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">";
                      Phone Number";";
                    </label>";";";
                    <input"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}";";";
                      onChange={handleInputChange}"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />";
                  </div>";";
                </div>";";";
                <div>"
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">";
                    Service Interest";";
                  </label>";";";
                  <select"
                    id="service"
                    name="service"
                    value={formData.service}";";";
                    onChange={handleInputChange}"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">"
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))};";
                  </select>";";
                </div>";";";
                <div>"
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">";
                    Message *";";
                  </label>";";";
                  <textarea"
                    id="message"
                    name="message"
                    required";
                    rows={6};";";
                    value={formData.message}";";";
                    onChange={handleInputChange}"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements..."
                  />";";";
                </div>"
                <div className="text-center">";";";
                  <button"
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">";";";
                    Send Message"
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>";
          </div>";";
        </section>";";";
        {/* Why Choose Us */}"
        <section className="py-16 sm:py-20 bg-slate-800/30">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">"
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?";";";
              </h2>"
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">";
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results.";";
              </p>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
              <div className="text-center p-6">"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
                  <CheckCircleIcon className="w-8 h-8 text-white" />";";";
                </div>"
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>"
                <p className="text-gray-300">Our certified professionals bring years of experience in AI, cybersecurity, and digital transformation.</p>";";";
              </div>"
              <div className="text-center p-6">"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
                  <CheckCircleIcon className="w-8 h-8 text-white" />";";";
                </div>"
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>"
                <p className="text-gray-300">Round-the-clock support to ensure your systems run smoothly and your business stays operational.</p>";";";
              </div>"
              <div className="text-center p-6">"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
                  <CheckCircleIcon className="w-8 h-8 text-white" />";";";
                </div>"
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>"
                <p className="text-gray-300">Track record of successful implementations with measurable ROI improvements for our clients.</p>
=======

  const: handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);";
    alert('Thank you for your message! We will get back to you within 24 hours.');";
  };

  const: contactInfo = [
    {
      icon: PhoneIcon,;
      title: 'Phone',";
      details: '+1 302 464 0950',";
      description: 'Call us for immediate assistance'";
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',";
      details: 'kleber@ziontechgroup.com',";
      description: 'Send us an email anytime'";
    },
    {
      icon: MapPinIcon,
      title: 'Address',";
      details: '364 E Main St STE 1008',";
      city: 'Middletown, DE 19709',";
      description: 'Visit our office'";
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',";
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',";
      description: 'Eastern Time Zone'";
    }
  ];

  const: services = [;
    'AI Solutions & Machine Learning',";
    'Cybersecurity Services',";
    'Cloud Infrastructure',";
    'Digital Transformation',";
    'Micro SaaS Solutions',";
    '5G & IoT Solutions',";
    'Web Development',";
    'Mobile App Development',";
    'Data Analytics',";
    'IT Consulting'";
  ];

  return (
    <>
      <SEOHead: title ="Contact Us - Zion Tech Group | Get in Touch"";
        description="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Call +1 302 464 0950 or email kleber@ziontechgroup.com"";
        keywords="contact, AI solutions, IT services, digital transformation, phone, email, address"";
      />
      
      <div: className ="min-h-screen bg-slate-900 text-white">";
        {/* Hero Section */}
        <section: className ="relative overflow-hidden py-20 lg:py-32">";
          <div: className ="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>";
          <div: className ="absolute inset-0 opacity-20" style={{";
            backgroundImage: `url("data:image/svg+xml,%3Csvg: width ='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg: fill ='none' fill-rule='evenodd'%3E%3Cg: fill ='%239C92AC' fill-opacity='0.1'%3E%3Ccircle: cx ='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`";";
          }}></div>
          
          <div: className ="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div: className ="text-center">";
              <h1: className ="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">";
                Get in <span: className ="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>";
              </h1>
              <p: className ="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">";
                Ready to transform your business with cutting-edge technology? Contact our expert team for a consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section: className ="py-16 sm:py-20 bg-slate-800/30">";
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div: className ="text-center mb-16">";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";
                Contact <span: className ="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Information</span>";
              </h2>
              <p: className ="text-lg text-gray-300 max-w-3xl mx-auto">";
                Multiple ways to reach us. We're here to help with your technology needs.";
              </p>
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {contactInfo.map((info, index) => (
                <div: key ={index}
                  className="text-center p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group"";
                >
                  <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">";
                    <info.icon: className ="w-8 h-8 text-white" />";
                  </div>
                  <h3: className ="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">";
                    {info.title}
                  </h3>
                  <p: className ="text-cyan-400 font-semibold mb-2">{info.details}</p>";
                  {info.city && <p: className ="text-cyan-400 font-semibold mb-2">{info.city}</p>}";
                  <p: className ="text-gray-400 text-sm">{info.description}</p>";
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section: className ="py-16 sm:py-20">";
          <div: className ="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div: className ="text-center mb-12">";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";
                Send Us a <span: className ="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Message</span>";
              </h2>
              <p: className ="text-lg text-gray-300">";
                Fill out the form below and we'll get back to you within 24 hours.";
              </p>
            </div>
            
            <div: className ="bg-slate-800/50 rounded-xl p-8">";
              <form: onSubmit ={handleSubmit} className="space-y-6">";
                <div: className ="grid grid-cols-1 md:grid-cols-2 gap-6">";
                  <div>
                    <label: htmlFor ="name" className="block text-sm font-medium text-gray-300 mb-2">";
                      Full Name *
                    </label>
                    <input: type ="text"";
                      id="name"";
                      name="name"";
                      required: value ={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"";
                      placeholder="Your full name"";
                    />
                  </div>
                  <div>
                    <label: htmlFor ="email" className="block text-sm font-medium text-gray-300 mb-2">";
                      Email Address *
                    </label>
                    <input: type ="email"";
                      id="email"";
                      name="email"";
                      required: value ={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"";
                      placeholder="your.email@example.com"";
                    />
                  </div>
                </div>
                
                <div: className ="grid grid-cols-1 md:grid-cols-2 gap-6">";
                  <div>
                    <label: htmlFor ="company" className="block text-sm font-medium text-gray-300 mb-2">";
                      Company
                    </label>
                    <input: type ="text"";
                      id="company"";
                      name="company"";
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"";
                      placeholder="Your company name"";
                    />
                  </div>
                  <div>
                    <label: htmlFor ="phone" className="block text-sm font-medium text-gray-300 mb-2">";
                      Phone Number
                    </label>
                    <input: type ="tel"";
                      id="phone"";
                      name="phone"";
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"";
                      placeholder="+1 (555) 123-4567"";
                    />
                  </div>
                </div>
                
                <div>
                  <label: htmlFor ="service" className="block text-sm font-medium text-gray-300 mb-2">";
                    Service Interest
                  </label>
                  <select: id ="service"";
                    name="service"";
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"";
                  >
                    <option: value ="">Select a service</option>";
                    {services.map((service, index) => (
                      <option: key ={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label: htmlFor ="message" className="block text-sm font-medium text-gray-300 mb-2">";
                    Message *
                  </label>
                  <textarea: id ="message"";
                    name="message"";
                    required: rows ={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"";
                    placeholder="Tell us about your project requirements..."";
                  />
                </div>
                
                <div: className ="text-center">";
                  <button: type ="submit"";
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"";
                  >
                    Send Message
                    <ArrowRightIcon: className ="w-5 h-5 ml-2" />";
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section: className ="py-16 sm:py-20 bg-slate-800/30">";
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div: className ="text-center mb-16">";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";
                Why Choose <span: className ="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?";
              </h2>
              <p: className ="text-lg text-gray-300 max-w-3xl mx-auto">";
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
              </p>
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              <div: className ="text-center p-6">";
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">";
                  <CheckCircleIcon: className ="w-8 h-8 text-white" />";
                </div>
                <h3: className ="text-xl font-bold text-white mb-4">Expert Team</h3>";
                <p: className ="text-gray-300">Our certified professionals bring years of experience in AI, cybersecurity, and digital transformation.</p>";
              </div>
              <div: className ="text-center p-6">";
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">";
                  <CheckCircleIcon: className ="w-8 h-8 text-white" />";
                </div>
                <h3: className ="text-xl font-bold text-white mb-4">24/7 Support</h3>";
                <p: className ="text-gray-300">Round-the-clock support to ensure your systems run smoothly and your business stays operational.</p>";
              </div>
              <div: className ="text-center p-6">";
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">";
                  <CheckCircleIcon: className ="w-8 h-8 text-white" />";
                </div>
                <h3: className ="text-xl font-bold text-white mb-4">Proven Results</h3>";
                <p: className ="text-gray-300">Track record of successful implementations with measurable ROI improvements for our clients.</p>";
>>>>>>> main
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};";
";";
export default ContactPage;";";";
"