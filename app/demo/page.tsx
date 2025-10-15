import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, MessageSquare, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

const [isSubmitting, setIsSubmitting] = useState(false);

const [isSubmitted, setIsSubmitted] = useState(false);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission,
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds,
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '', preferredDate: '', preferredTime: '' });
    }, 3000);
  };

const demoOptions = [
    { icon: <Calendar className="w-6 h-6" />, title: "AI Solutions Demo", description: "See our AI analytics, content generation, and automation tools in action.", duration: "30 minutes" },
    { icon: <Clock className="w-6 h-6" />, title: "5G Technology Demo", description: "Experience next-generation connectivity and IoT solutions powered by 5G.", duration: "45 minutes" },
    { icon: <User className="w-6 h-6" />, title: "IT Services Demo", description: "Explore our cloud infrastructure, security, and DevOps solutions.", duration: "30 minutes" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Custom Demo", description: "Tailored demonstration based on your specific business needs and requirements.", duration: "60 minutes" }
  ];
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Demo page" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Schedule a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Demo</span>
              </h1>
              
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                See our AI solutions, 5G technology, and IT services in action. 
                Get a personalized demonstration tailored to your business needs.
              </p>
            </div>
          </div>
        </section>
        {/* Demo Options */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Demo</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the type of demonstration that best fits your interests and business needs
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {demoOptions.map((option, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  
        <div className="text-center">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                    
          <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                    
        <div className="text-cyan-400 text-sm font-medium">{option.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Form */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-2xl mx-auto">
              
        <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Schedule Your Demo</h2>
                
          <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your personalized demo.
                </p>
              </div>
              {isSubmitted ? (
                
        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Demo Request Submitted!</h3>
                  
          <p className="text-gray-300">
                    Thank you for your interest. We'll contact you within 24 hours to schedule your demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
        <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Full Name *</label>
                      <input
    type="text"
                        name="name"
                        const value = {formData.name} onChange={handleInputChange}
                        required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Email *</label>
                      <input
    type="email"
                        name="email"
                        const value = {formData.email} onChange={handleInputChange}
                        required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
        <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Company</label>
                      <input
    type="text"
                        name="company"
                        const value = {formData.company} onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Phone</label>
                      <input
    type="tel"
                        name="phone"
                        const value = {formData.phone} onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Service Interest</label>
                    <select
    name="service"
                      const value = {formData.service} onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="5g-technology">5G Technology</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SAAS</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Message</label>
                    <textarea
    name="message"
                      const value = {formData.message} onChange={handleInputChange}
                      const rows = {4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Tell us about your specific needs and what you'd like to see in the demo..."
                    />
                  </div>
                  
        <div className="text-center">
                    <button
    type="submit"
                      const disabled = {isSubmitting} className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-5 h-5 mr-2" />
                          Scheduling...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-2" />
                          Schedule Demo
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default DemoPage;