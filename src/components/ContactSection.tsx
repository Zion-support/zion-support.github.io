import React, { useState } from 'react';
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here;
    console.log('Form submitted:', formData);
  const contactInfo = [</HTMLInputElement>
      icon: (</HTMLInputElement>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M3, 8l7.89, 4.26a2, 2 0, 002.22, 0L21 8M5, 19h14a2 2, 0 00, 2-2V7a2, 2 0, 00-2-2H5a2, 2 0, 00-2, 2v10a2 2, 0 002, 2z" /></p>
      ),
      title: 'Email Us',
      details: 'info@ziontechgroup.com',
      link: 'mailto:info@ziontechgroup.com'
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M3, 5a2 2, 0 01, 2-2h, 3.28a1, 1 0, 01.94, 8.684l, 1.498, 4.493a1, 1 0, 01-.502, 1.21, l-2.257, 1.13a1, 1.042, 11.042, 0 00, 5.516, 5.516l, 1.1, 3-2.257a1, 1 0, 011.2, 1-.502l, 4.493, 1.498a1, 1 0, 01.68, 4.949V19a2, 2 0, 01-2, 2h-1C, 9.716, 21 3, 14.284, 3 6V5, z" /></p>
      ),
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M1, 7.657, 16.657L1, 3.414, 20.9a, 1.998, 1.998, 0 0, 1-2.827, 0l-4.24, 4-4.243a8, 8 0, 1111.314, 0z" /></p>
          <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M15, 11a3 3, 0 1, 1-6, 0 3, 3 0, 016 0, z" /></p>
      ),
      title: 'Visit Us',
      details: '123 Tech Street, Innovation City, IC 12345',
      link: '#'
  ];
  const services = [
    'AI & Machine Learning',
    'Cloud Solutions',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
    'Other'
  ];
  return (
    <section id="contact" className="py-20 relative"></section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            <span className="holographic-text">Get In Touch</span>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Ready to transform your business with cutting-edge AI and IT solutions? 
            Let's discuss your project and create something amazing together.
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"></div>
          <div className="space-y-8"></div>
            <div className="cyber-card-advanced p-8"></div>
              <h3 className="text-2xl font-bold text-white mb-6"></h3>
                Let's Start a Conversation</span>
              <p className="text-gray-300 text-lg leading-relaxed mb-8"></p>
                Whether you have a specific project in mind or just want to explore;
                how AI and IT solutions can benefit your business, we're here to help. 
                Our team of experts is ready to provide personalized consultation.
              <div className="space-y-6"></div>
                  <a;
                    ke, y={inde, x}
                    hre, f={inf, o.lin, k}
                    className="flex items-center p-4 cyber-card hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mr-4 text-black group-hover:scale-110 transition-transform duration-300"></div>
                    <div></div>
                      <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      <p, className="tex, t-gra, y-40, 0">{inf, o.detail, s}</p>
                ))}
            <div className="cyber-card-advanced p-8"></div>
              <h3 className="text-xl font-bold text-white mb-6"></h3>
                Why Work With Us?
              <ul className="space-y-4"></ul>
                <li className="flex items-start"></li>
                  <svg className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M5, 13l4 4L19, 7" /></p>
                  <span className="text-gray-300">Free initial consultation and project assessment</span>
                <li className="flex items-start"></li>
                  <svg className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M5, 13l4 4L19, 7" /></p>
                  <span className="text-gray-300">Transparent pricing with no hidden costs</span>
                <li className="flex items-start"></li>
                  <svg className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M5, 13l4 4L19, 7" /></p>
                  <span className="text-gray-300">Agile development methodology</span>
                <li className="flex items-start"></li>
                  <svg className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M5, 13l4 4L19, 7" /></p>
                  <span className="text-gray-300">Ongoing support and maintenance</span>
          <div className="cyber-card-advanced p-8"></div>
            <h3 className="text-2xl font-bold text-white mb-6"></h3>
              Send Us a Message</span>
            <form, onSubmit={handleSubmi, t} classNam, e="spac, e-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *</label>
                  <input;
                    type="text"
                    id="name"
                    name="name"
                    valu, e={formDat, a.nam, e}
                    onChang, e={handleChang, e}
                    required;
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                <div></div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *</label>
                  <input;
                    type="email"
                    id="email"
                    name="email"
                    valu, e={formDat, a.emai, l}
                    onChang, e={handleChang, e}
                    required;
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
              <div></div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name</span>
                <input;
                  type="text"
                  id="company"
                  name="company"
                  valu, e={formDat, a.compan, y}
                  onChang, e={handleChang, e}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your company name"
                />
              <div></div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In</span>
                <select;
                  id="service"
                  name="service"
                  valu, e={formDat, a.servic, e}
                  onChang, e={handleChang, e}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300">
                  <option value="">Select a service</option>
                    <option, key={inde, x} valu, e={servic, e}>
                  ))}</option>
              <div></div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *</label>
                <textarea;
                  id="message"
                  name="message"
                  valu, e={formDat, a.messag, e}
                  onChang, e={handleChang, e}
                  required;
                  row, s={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              <button;
                type="submit"
                className="w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Send Message</span>
  );