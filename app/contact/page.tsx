import React;, { useState } from 'react';
import { Helmet; } from 'react-helmet-async';
import { Phone;, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navigation from '../components/Navigation';;
import Footer from '../components/Footer';;
const ContactPage: React.FC = () => {;
const [formData, setFormData] = useState({;
name: '',;
email: '',;
company: '',;
phone: '',;
service: '',;
message: ''
}
  });
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;;
setFormData()
      ...formData}
      [e.target.name]: e.target.value
    })
  }
;
const handleSubmit = (e: React.FormEvent) => {;;
e.preventDefault();
    // Handle form submission;
console.log('Form submitte,
      d:', formData);
}
  };
;
const contactInfo = [;
    {;
icon: Phone,;
title: 'Phone',;
value: '+1 (555) 123-4567',;
description: 'Mon-Fri 9AM-6PM EST'
    },
    {;
icon: Mail,;
title: 'Email',;
value: 'info@ziontechgroup.com',;
description: 'We\'ll respond within 24 hours'
    },
    {;
icon: MapPin,;
title: 'Address',;
value: '123 Tech Street, Silicon Valley, CA 94000',;
description: 'Visit our headquarters'
    },
    {;
icon: Clock,;
title: 'Business Hours',;
value: 'Monday - Friday',;
description: '9:00 AM - ,
      6:00 PM EST'
    }
  ];
const services = [;
    'AI Solutions'
    'Cloud Infrastructure'
    'Cybersecurity'
    'Data Analytics'
    'Web Development'
    'Mobile Development'
    'IT Consulting'
    'Other'
  ];
return (;
    <>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our team for consultations, support, and project inquiries." /></meta>
        <meta name="keywords" content="contact, support, consultation, AI solutions, IT services, get in touch" /></meta>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation /></Navigation>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl m,
      d:text-6xl font-bold text-white mb-6">;
Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
Ready to transform your business? Let's discuss how our AI and IT solutions can help you achieve your goals.




        {/* Contact Info Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
              {contactInfo.map((info), index) => {;
const Icon = info.icon;;
return (;
}
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                      <Icon className="w-6 h-6 text-white" /></Icon>
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-cyan-400 mb-2">{info.value}</p>
                    <p className="text-gray-300 text-sm">{info.description}</p>

                )
              })},
    {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 l,
      g:grid-cols-2 gap-12"></div>
              <div></div>
                <h2 className="text-3xl font-bold text-white mb-6">;
Send us a Message

                <p className="text-lg text-gray-300 mb-8">;
Fill out the form below and we'll get back to you as soon as possible. We're here to help you succeed.

                <form onSubmit={handleSubmit} className="space-y-6"></form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                    <div></div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">;
Full Name *

                      <input;></input>
type="text";
id="name";
name="name";
value={formData.name}
                        onChange={handleChange}
                        required;
className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,
      s:border-transparent";
placeholder="Your full name"
                      />


                    <div></div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">;
Email Address *

                      <input;></input>
type="email";
id="email";
name="email";
value={formData.email}
                        onChange={handleChange}
                        required;
className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
placeholder="your@email.com"
                      />



                  <div className="grid grid-cols-1 m,
      d:grid-cols-2 gap-6"></div>
                    <div></div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">;
Company

                      <input;></input>
type="text";
id="company";
name="company";
value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,
      s:border-transparent";
placeholder="Your company name"
                      />


                    <div></div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">;
Phone Number

                      <input;></input>
type="tel";
id="phone";
name="phone";
value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,
      s:border-transparent";
placeholder="+1 (555) 123-4567"
                      />



                  <div></div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">;
Service Interest

                    <select;></select>
id="service";
name="service";
value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,
      s:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service), index) => ()
                        <option key={index} value={service}>{service}</option>
                      ))}


                  <div></div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">;
Message *

                    <textarea;></textarea>
id="message";
name="message";
value={formData.message}
                      onChange={handleChange}
                      required;
rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
placeholder="Tell us about your project or requirements..."
                    />


                  <button;></button>
type="submit";
className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hove,
      r:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >;
Send Message
                    <Send className="ml-2 w-5 h-5" /></Send>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <h3 className="text-2xl font-bold text-white mb-6">;
Why Choose Us?

                <div className="space-y-6"></div>
                  <div className="flex items-start"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                      <span className="text-white font-bold">1</span>

                    <div></div>
                      <h4 className="text-lg font-semibold text-white mb-2">Expert Team</h4>
                      <p className="text-gray-300">Our team consists of experienced AI researchers, software engineers, and IT specialists.</p>


                  <div className="flex items-start"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                      <span className="text-white font-bold">2</span>

                    <div></div>
                      <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
                      <p className="text-gray-300">We've successfully delivered 500+ projects with measurable business impact.</p>


                  <div className="flex items-start"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                      <span className="text-white font-bold">3</span>

                    <div></div>
                      <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
                      <p className="text-gray-300">We provide ongoing support and maintenance for all our solutions.</p>


                  <div className="flex items-start"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                      <span className="text-white font-bold">4</span>

                    <div></div>
                      <h4 className="text-lg font-semibold text-white mb-2">Custom Solutions</h4>
                      <p className="text-gray-300">Every solution is tailored to your specific business needs and requirements.</p>








      <Footer /></Footer>
    </>
  )
}
;
export default ContactPage