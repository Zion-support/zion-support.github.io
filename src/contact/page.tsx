'use client';
import React;, { useState } from 'react';
import {Phone;, Mail, MapPin, Clock, Send, CheckCircle, Users, Award, TrendingUp, Shield} from 'lucide-react';
import Navigation from '../components/Navigation';;
import Footer from '../components/Footer';;
import React from 'react';;
const ContactPage: React.FC = () => {}
import { Phone;}, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, User, Building, Globe, Shield, Brain, Zap, Cloud, Database, Code, BarChart, Users, Award, Target, Star, TrendingUp, ArrowRight } from 'lucide-react';
export default function ContactPage() {;
const [formData, setFormData] = useState({
name: '',;,
email: '',;,
company: '',;,
phone: '',;,
service: '',;,
message:   }
$4});
const [isSubmitted, setIsSubmitted] = useState(false);
const _handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
message: '',;,
budget: '',;,
timeline: ''
}
  });
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
const { name}, value } = e.target;
setFormData(prev => ({)
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {;;
e.preventDefault(),
    // Here you would typically send the form data to your backend
    // console.log('Form submitted:', formData);
setIsSubmitted(true)
    // Reset form after 3 seconds;
setTimeout(() => {;
setIsSubmitted(false);
}
setFormData({}, 3000);
const handleSubmit = async (e: React.FormEvent) => {;;
e.preventDefault();
setIsSubmitting(true),
    // Simulate form submission;
await new Promise(resolve => setTimeout(resolve), 2000));
setIsSubmitted(true);
setIsSubmitting(false)
}
  }
  const contactInfo={;;,
phone: '+1 (302) 464-0950',;,
email: 'kleber@ziontechgroup.com',;,
address: '364 E Main St STE 1008, Middletown, DE 19709',;,
hours: 'Mon-Fri: 9AM-6PM EST'}
  const services = [;
    'AI Services',
    'IT Services',
    'Micro SAAS Solutions',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Management',
    'Mobile App Development',
    'Custom Development',
    'Other'
  ];
const achievements = [;
    { icon: Users, text: '100+ Happy Clients' },
    { icon: Award, text: '50+ Successful Projects' },
    { icon: TrendingUp, text: '300% Average ROI' },
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  return (;
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced contact solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover: bg-cyan-600 transition-colors">;
Contact Us</span>
  );
export default ContactPage,
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Migration',
    'Digital Transformation',
    'Custom Development',
    'Consulting',
    'Other'
  ];
const budgetRanges = [;
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K+',
    'Not sure'
  ];
const timelines = [;
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ];
const offices = [;
    {
city: 'Middletown, DE',;,
address: '364 E Main St STE 1008, Middletown, DE 19709',;,
phone: '+1 (302) 464-0950',;,
email: 'kleber@ziontechgroup.com',;,
hours: 'Mon-Fri: 9AM-6PM EST',;,
timezone: 'Eastern Time'
    },
    {
city: 'San Francisco, CA',;,
address: '123 Tech Street, San Francisco, CA 94105',;,
phone: '+1 (415) 555-0123',;,
email: 'sf@ziontechgroup.com',;,
hours: 'Mon-Fri: 9AM-6PM PST',;,
timezone: 'Pacific Time'
    },
    {
city: 'London, UK',;,
address: '456 Innovation Lane, London EC1A 4HD',;,
phone: '+44 20 7946 0958',;,
email: 'london@ziontechgroup.com',;,
hours: 'Mon-Fri: 9AM-6PM GMT',;,
timezone: 'Greenwich Mean Time'
    }
  ];
const faqs = [;
    {
question: 'How quickly can you start my project?',;,
answer: 'We can typically begin most projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited onboarding.'
    },
    {
question: 'Do you offer ongoing support?',;,
answer: 'Yes, we provide comprehensive support and maintenance packages for all our solutions, including 24/7 monitoring and updates.'
    },
    {
question: 'What industries do you serve?',;,
answer: 'We serve clients across healthcare, finance, manufacturing, retail, education, and government sectors.'
    },
    {
question: 'Do you work with small businesses?',;,
answer: 'Absolutely! We offer scalable solutions for businesses of all sizes, from startups to enterprise organizations.'
    }
  ];
if (isSubmitted) {;
return (;
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!
          <p className="text-xl text-gray-300 mb-6">;
Your message has been sent successfully. Our team will get back to you within 24 hours.
              <strong>What happens next?
                <span className="text-gray-300">We'll review your requirements
                <span className="text-gray-300">Schedule a consultation call
                <span className="text-gray-300">Provide a detailed proposal
            <$2 />;
href="/";
className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />;
Back to Home</span>
    )
  }
  return (;
      {/* Hero Section */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">;
Get In Touch
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">;
Ready to transform your business with AI? Let's discuss your project and explore;
how we can help you achieve your goals.
                <span className="text-white font-medium">{contactInfo.phone}
                <span className="text-white font-medium">{contactInfo.email}
      {/* Contact Form & Info */}
            {/* Contact Form */}
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message
                    <label className="block text-sm font-medium text-gray-300 mb-2">;
Full Name *
type="text";
name="name";
value={formData.name}
                      onChange={handleInputChange}
                      required;
className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors";
placeholder="Your full name"
                    />
                    <label className="block text-sm font-medium text-gray-300 mb-2">;
Email Address *
type="email";
name="email";
value={formData.email}
                      onChange={handleInputChange}
                      required;
className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors";
placeholder="your@email.com"
                    />
                    <label className="block text-sm font-medium text-gray-300 mb-2">;
type="text";
name="company";
value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors";
placeholder="Your company name"
                    />
                    <label className="block text-sm font-medium text-gray-300 mb-2">;
Phone Number
type="tel";
name="phone";
value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors";
placeholder="+1 (555) 123-4567"
                    />
                    <label className="block text-sm font-medium text-gray-300 mb-2">;
Service Interest
name="service";
value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors">
                      <option value="">Select a service
                      {services.map((service), index) => (
                        <option key={index} value={service}>{service}
                      ))}
                    <label className="block text-sm font-medium text-gray-300 mb-2">;
Budget Range
name="budget";
value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors">
                      <option value="">Select budget range
                      {budgetRanges.map((range), index) => (
                        <option key={index} value={range}>{range}
                      ))}
                  <label className="block text-sm font-medium text-gray-300 mb-2">;
name="timeline";
value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors">
                    <option value="">Select timeline
                    {timelines.map((timeline), index) => (
                      <option key={index} value={timeline}>{timeline}
                    ))}
                  <label className="block text-sm font-medium text-gray-300 mb-2">;
Message *
name="message";
value={formData.message}
                    onChange={handleInputChange}
                    required;
rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none";
placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                <$2 />;
type="submit";
disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                  {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2">;
Sending...
                  ) : (
                      <Send className="w-5 h-5 mr-2" />;
Send Message
                  )}
            {/* Contact Information */}
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information
                      <div className="text-white font-medium">{contactInfo.phone}
                      <div className="text-gray-400 text-sm">Call us anytime
                      <div className="text-white font-medium">{contactInfo.email}
                      <div className="text-gray-400 text-sm">Email us
                      <div className="text-white font-medium">Middletown, DE
                      <div className="text-gray-400 text-sm">{contactInfo.address}
                      <div className="text-white font-medium">{contactInfo.hours}
                      <div className="text-gray-400 text-sm">Business hours
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?
                    <span className="text-gray-300">300% Average ROI
                    <span className="text-gray-300">99.9% Uptime Guarantee
                    <span className="text-gray-300">24/7 Support
                    <span className="text-gray-300">Enterprise Security
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions
                  <$2 />;
href="/consultation";
className="block w-full bg-cyan-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-cyan-600 transition-colors text-center">
                    <Calendar className="w-5 h-5 inline mr-2" />;
Schedule Free Consultation
                  <$2 />;
href="/demo";
className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-colors text-center">
                    <MessageSquare className="w-5 h-5 inline mr-2" />;
Request Demo
      {/* Global Offices */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
Our Global Offices
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">;
We're here to serve you wherever you are in the world
            {offices.map((office), index) => (
                <h3 className="text-xl font-bold text-white mb-4">{office.city}
                    <span className="text-gray-300 text-sm">{office.address}
                    <span className="text-gray-300 text-sm">{office.phone}
                    <span className="text-gray-300 text-sm">{office.email}
                    <span className="text-gray-300 text-sm">{office.hours}
                  <div className="text-cyan-400 text-sm font-medium">{office.timezone}
            ))}
      {/* FAQ Section */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
Frequently Asked Questions
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">;
Common questions about our services and process
              {faqs.map((faq), index) => (
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}
                  <p className="text-gray-300">{faq.answer}
              ))}
  )
}</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></span></span></span></span></span></span></a></p></p></p></p></p></p></p></h1></h1></h1></h2></h2></h2></h2></h3></h3></h3></h3></section></section></section></section>