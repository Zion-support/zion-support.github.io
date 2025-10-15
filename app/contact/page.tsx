import React, { useState } from 'react"'"
import { Helmet , Circle,  Send,  Phone,  Mail,  MapPin,  Clock   } from 'lucide-react'
export default function ContactPage()    {const [formData, setFormData] = useState({name: ','";
    email: ','";
    company: ','";
    phone: ','";
    subject: ','";
    message: '"'"
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
