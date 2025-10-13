import React from 'react;
import React, { useState } from 'react;
import { Helmet } from 'react-helmet-async;
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react;
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',';
    email: '',';
    company: '',';
    phone: '',';
    service: '',';
    message: ''';
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend;
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds;
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',';
        email: '',';
        company: '',';
        phone: '',';
        service: '',';
        message: ''';
      });
    }, 3000);
  };

  const contactInfo = [{
      icon: Mail,
      title: 'Email',';
      details: 'kleber@ziontechgroup.com',';
      description: 'Send us an email anytime'';
    },
    {
      icon: Phone,
      title: 'Phone',';
      details: '+1-302-464-0950',';
      description: 'Call us during business hours'';
    },
    {
      icon: MapPin,
      title: 'Address',';
      details: '364 E Main St STE 1008',';
      description: 'Middletown, DE 19709'';
    },
    {
      icon: Clock,
      title: 'Business Hours',';
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',';
      description: 'EST (Eastern Standard Time)'';
    }
  ];

  const services = ['AI Solutions',';
    'IT Services',';
    'Cloud Infrastructure',';
    'Digital Transformation',';
    'Cybersecurity',';
    'Consulting'';
  ];

  return (
    <>;
      <Helmet>;
        <title>Contact Us - Zion Tech Group</title>;
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT solution needs. Contact our experts for consultation and support." />;
        <meta name="keywords" content="contact, support, consultation, AI solutions, IT services, help" />;
      </Helmet>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">;
        <div className="container mx-auto px-4 py-16">;
          {/* Hero Section */}
          <div className="text-center mb-16">;
            <h1 className="text-5xl font-bold text-white mb-6">;
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Touch</span>;
            </h1>;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Ready to transform your business? Contact our team of experts for a consultation;
              and discover how we can help you achieve your goals.;
            </p>;
          </div>;
          <div className="grid lg:grid-cols-2 gap-12">;
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">;
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>;
              {isSubmitted ? (
                <div className="text-center py-8">;
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />;
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>;
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>';
                </div>;
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">;
                  <div className="grid md:grid-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">;
                        Full Name *;
                      </label>;
                      <input;
                        type="text";
                        id="name";
                        name="name";
                        value={formData.name}
                        onChange={handleInputChange}
                        required;
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";
                        placeholder="Your full name";
                      />;
                    </div>;
                    <div>;
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">;
                        Email Address *;
                      </label>;
                      <input;
                        type="email";
                        id="email";
                        name="email";
                        value={formData.email}
                        onChange={handleInputChange}
                        required;
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";
                        placeholder="your@email.com";
                      />;
                    </div>;
                  </div>;
                  <div className="grid md:grid-cols-2 gap-6">;
                    <div>;
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">;
                        Company;
                      </label>;
                      <input;
                        type="text";
                        id="company";
                        name="company";
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";
                        placeholder="Your company name";
                      />;
                    </div>;
                    <div>;
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">;
                        Phone Number;
                      </label>;
                      <input;
                        type="tel";
                        id="phone";
                        name="phone";
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";
                        placeholder="+1 (555) 123-4567";
                      />;
                    </div>;
                  </div>;
                  <div>;
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">;
                      Service Interest;
                    </label>;
                    <select;
                      id="service";
                      name="service";
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";
                    >;
                      <option value="">Select a service</option>;
                      {services.map((service, _index) => (
                        <option key={_index} value={service} className="bg-slate-800">;
                          {service}
                        </option>;
                      ))}
                    </select>;
                  </div>;
                  <div>;
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">;
                      Message *;
                    </label>;
                    <textarea;
                      id="message";
                      name="message";
                      value={formData.message}
                      onChange={handleInputChange}
                      required;
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";
                      placeholder="Tell us about your project or requirements...";
                    />;
                  </div>;
                  <button;
                    type="submit";
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center";
                  >;
                    Send Message;
                    <Send className="w-5 h-5 ml-2" />;
                  </button>;
                </form>;
              )}
            </div>;
            {/* Contact Information */}
            <div className="space-y-8">;
              <div>;
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>;
                <div className="space-y-6">;
                  {contactInfo.map((info, _index) => {
                    const Icon = info.icon;
                    return (
                      <div key={_index} className="flex items-start">;
                        <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-4 flex-shrink-0">;
                          <Icon className="w-6 h-6 text-white" />;
                        </div>;
                        <div>;
                          <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>;
                          <p className="text-gray-300 mb-1">{info.details}</p>;
                          <p className="text-gray-400 text-sm">{info.description}</p>;
                        </div>;
                      </div>;
                    );
                  })}
                </div>;
              </div>;
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">;
                <h3 className="text-xl font-semibold text-white mb-4">Why Contact Us?</h3>;
                <ul className="space-y-3 text-gray-300">;
                  <li className="flex items-start">;
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>;
                    Free consultation and project assessment;
                  </li>;
                  <li className="flex items-start">;
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>;
                    Customized solutions for your business needs;
                  </li>;
                  <li className="flex items-start">;
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>;
                    Expert guidance and technical support;
                  </li>;
                  <li className="flex items-start">;
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>;
                    Proven track record of successful implementations;
                  </li>;
                </ul>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}