'use client'';
import React, { useState } from 'react';';
import {Phone, Mail, MapPin, Clock, Send, CheckCircle, Users, Award, TrendingUp, Shield} from 'lucide-react';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';';
import React from 'react';';';
const ContactPage: React.FC = () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, User, Building, Globe, Shield, Brain, Zap, Cloud, Database, Code, BarChart, Users, Award, Target, Star, TrendingUp, ArrowRight } from 'lucide-react';';';
export default function ContactPage() {;
const [formData, setFormData] = useState({
  // TODO: Add properties
}
  // TODO: Add properties
}
    name: ',''
    email: ',''
    company: ',''
    phone: ',''
    service: ',''
    message:   ,
$4});
const [isSubmitted, setIsSubmitted] = useState(false);
const _handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: ',''
    budget: ',''
    timeline: '''
  });
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
const { name, value } = e.target
    setFormData(prev => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    e.preventDefault(),
    // Here you would typically send the form data to your backend
    // console.log('Form submitted:', formData)'
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
      setIsSubmitted(false)
      setFormData({}, 3000);
const handleSubmit = async (e: React.FormEvent) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    e.preventDefault()
    setIsSubmitting(true),
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }
  const contactInfo = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    phone: '+1 (302) 464-0950','
    email: 'kleber@ziontechgroup.com','
    address: '364 E Main St STE 1008, Middletown, DE 19709','
    hours: 'Mon-Fri: 9 AM-6 PM EST''
  }
  const services = [
  // TODO: Add items
]
  // TODO: Add items
]
    'AI Services','
    'IT Services','
    'Micro SAAS Solutions','
    'Cloud Migration','
    'Cybersecurity','
    'DevOps & CI/CD','
    'Database Management','
    'Mobile App Development','
    'Custom Development','
    'Other''
  ];
const achievements = [
  // TODO: Add items
]
  // TODO: Add items
]
    { icon: Users, text: '100+ Happy Clients' },'
    { icon: Award, text: '50+ Successful Projects' },'
    { icon: TrendingUp, text: '300% Average ROI' },'
    { icon: Shield, text: '99.9% Uptime Guarantee' }'
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"text-center"
<h1 className="
<p className="text-gray-300 mb-8"/contact" className="
          Contact Us</span></div>
  );
export default ContactPage,;
    'Quantum Computing','
    'Cybersecurity','
    'Cloud Migration','
    'Digital Transformation','
    'Custom Development','
    'Consulting','
    'Other''
  ];
const budgetRanges = [
  // TODO: Add items
]
  // TODO: Add items
]
    'Under $10 K','
    '$10 K - $50 K','
    '$50 K - $100 K','
    '$100 K - $500 K','
    '$500 K+','
    'Not sure''
  ];
const timelines = [
  // TODO: Add items
]
  // TODO: Add items
]
    'ASAP','
    'Within 1 month','
    '1-3 months','
    '3-6 months','
    '6+ months','
    'Just exploring''
  ];
const offices = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      city: 'Middletown, DE','
      address: '364 E Main St STE 1008, Middletown, DE 19709','
      phone: '+1 (302) 464-0950','
      email: 'kleber@ziontechgroup.com','
      hours: 'Mon-Fri: 9 AM-6 PM EST','
      timezone: 'Eastern Time''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      city: 'San Francisco, CA','
      address: '123 Tech Street, San Francisco, CA 94105','
      phone: '+1 (415) 555-0123','
      email: 'sf@ziontechgroup.com','
      hours: 'Mon-Fri: 9 AM-6 PM PST','
      timezone: 'Pacific Time''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      city: 'London, UK','
      address: '456 Innovation Lane, London EC1 A 4 HD','
      phone: '+44 20 7946 0958','
      email: 'london@ziontechgroup.com','
      hours: 'Mon-Fri: 9 AM-6 PM GMT','
      timezone: 'Greenwich Mean Time''
    }
  ];
const faqs = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'How quickly can you start my project?','
      answer: 'We can typically begin most projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited onboarding.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Do you offer ongoing support?','
      answer: 'Yes, we provide comprehensive support and maintenance packages for all our solutions, including 24/7 monitoring and updates.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'What industries do you serve?','
      answer: 'We serve clients across healthcare, finance, manufacturing, retail, education, and government sectors.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Do you work with small businesses?','
      answer: 'Absolutely! We offer scalable solutions for businesses of all sizes, from startups to enterprise organizations.''
    }
  ]
  if (isSubmitted) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return (
  // TODO: Add parameters
)
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"max-w-2 xl mx-auto text-center p-8"
<div className="
<CheckCircle className="w-10 h-10 text-white"text-3 xl font-bold text-white mb-4"
          <p className="
            Your message has been sent successfully. Our team will get back to you within 24 hours.
          <div className="space-y-4"text-gray-400"
<strong>What happens next?
            <div className="
<div className="flex items-center space-x-3"w-5 h-5 text-green-400 flex-shrink-0"
<span className="
              <div className="flex items-center space-x-3"w-5 h-5 text-green-400 flex-shrink-0"
<span className="
              <div className="flex items-center space-x-3"w-5 h-5 text-green-400 flex-shrink-0"
<span className="
          <div className="mt-8"/""bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center"
<ArrowRight className="
              Back to Home</span></div>
</div></div>
    )
  }
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"relative py-20 lg:py-32 overflow-hidden"
<div className="
<div className="container mx-auto px-4 relative z-10"max-w-4 xl mx-auto text-center"
<h1 className="
              Get In Touch
            <p className="text-xl lg:text-2 xl text-gray-300 mb-8 leading-relaxed"flex flex-wrap justify-center gap-6"
<div className="
<Phone className="w-5 h-5 text-cyan-400"text-white font-medium"
              <div className="
<Mail className="w-5 h-5 text-purple-400"text-white font-medium"
      {/* Contact Form & Info */}
      <section className="
<div className="container mx-auto px-4"grid grid-cols-1 lg:grid-cols-2 gap-12"
            {/* Contact Form */}
            <div className="
<h2 className="text-2 xl font-bold text-white mb-6"space-y-6"
<div className="
<div>
<label className="block text-sm font-medium text-gray-300 mb-2"text""name""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder=""
                    />
<div>
<label className="
                      Email Address *
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"your@email.com""grid grid-cols-1 md:grid-cols-2 gap-6"
<div>
<label className="
                      Company
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"Your company name""block text-sm font-medium text-gray-300 mb-2"
                      Phone Number
                    <input
                      type=""
                      name=""
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="
                      placeholder="+1 (555) 123-4567"
                    />
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"block text-sm font-medium text-gray-300 mb-2"
                      Service Interest
                    <select
                      name=""
                      value={formData.service}
                      onChange={handleInputChange}
                      className="
<option value=""
                      {services.map((service, index) => (
  // TODO: Add parameters
)
                        <option key={index} value={service}>{service}
                      ))}
                  <div>
<label className="block text-sm font-medium text-gray-300 mb-2"budget""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
<option value=">Select budget range"
                      {budgetRanges.map((range, index) => (
  // TODO: Add parameters
)
                        <option key={index} value={range}>{range}
                      ))}
                <div>
<label className="
                    Timeline
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"">Select timeline"block text-sm font-medium text-gray-300 mb-2"
                    Message *
                  <textarea
                    name=""
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
<$2 />
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                      Sending...
                  ) : (
  // TODO: Add parameters
)
                    <React.Fragment>
<Send className="
                      Send Message
                  )}
            {/* Contact Information */}
            <div className="space-y-8"text-2 xl font-bold text-white mb-6"
                <div className="
<div className="flex items-start space-x-4"w-6 h-6 text-cyan-400 mt-1 flex-shrink-0"
<div>
<div className="
                      <div className="text-gray-400 text-sm"flex items-start space-x-4"
<Mail className="
<div>
<div className="text-white font-medium"text-gray-400 text-sm"
                  <div className="
<MapPin className="w-6 h-6 text-green-400 mt-1 flex-shrink-0"text-white font-medium"
                      <div className="
                  <div className="flex items-start space-x-4"w-6 h-6 text-yellow-400 mt-1 flex-shrink-0"
<div>
<div className="
                      <div className="text-gray-400 text-sm"bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg"
<h3 className="
                <div className="space-y-3"flex items-center space-x-3"
<CheckCircle className="
<span className="text-gray-300"flex items-center space-x-3"
<CheckCircle className="
<span className="text-gray-300"flex items-center space-x-3"
<CheckCircle className="
<span className="text-gray-300"flex items-center space-x-3"
<CheckCircle className="
<span className="text-gray-300"bg-slate-800/50 p-6 rounded-lg"
<h3 className="
                <div className="space-y-3"/consultation""block w-full bg-cyan-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-cyan-600 transition-colors text-center"
<Calendar className="
                    Schedule Free Consultation
                  <$2 />
                    href="/demo"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-colors text-center"w-5 h-5 inline mr-2"
                    Request Demo
      {/* Global Offices */}
      <section className="
<div className="container mx-auto px-4"text-center mb-16"
<h2 className="
              Our Global Offices
            <p className="text-lg text-gray-300 max-w-3 xl mx-auto"grid grid-cols-1 md:grid-cols-3 gap-8"
            {offices.map((office, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<h3 className="text-xl font-bold text-white mb-4"space-y-3"
<div className="
<MapPin className="w-4 h-4 text-cyan-400"text-gray-300 text-sm"
                  <div className="
<Phone className="w-4 h-4 text-purple-400"text-gray-300 text-sm"
                  <div className="
<Mail className="w-4 h-4 text-green-400"text-gray-300 text-sm"
                  <div className="
<Clock className="w-4 h-4 text-yellow-400"text-gray-300 text-sm"
                  <div className="
            ))}
      {/* FAQ Section */}
      <section className="py-20"container mx-auto px-4"
<div className="
<h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"text-lg text-gray-300 max-w-3 xl mx-auto"
              Common questions about our services and process
          <div className="
<div className="space-y-6"bg-slate-800/50 rounded-lg p-6"
<h3 className="
                  <p className="text-gray-300"
              ))}
  )
}</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</a></p>
</p></p>
</p></p>
</p></p>
</h1></h1>
</h1></h2>
</h2></h2>
</h2></h3>
</h3></h3>
</h3></section>
</section></section>
</section>
}