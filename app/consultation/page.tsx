import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Target, 
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  BarChart3,
  Settings,
  Monitor,
  Smartphone,
  Laptop,
  Headphones,
  MapPin,
  Send
} from "lucide-react";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    timeline: '',
    budget: '',
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
        timeline: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    "AI Business Intelligence",
    "AI Customer Support",
    "AI Content Generation",
    "AI Cybersecurity",
    "5G Solutions",
    "Cloud Infrastructure",
    "Data Analytics",
    "Code Assistant",
    "Marketing Automation",
    "Document Processing",
    "CRM Assistant",
    "Financial Analytics",
    "Custom AI Solution",
    "IT Consulting",
    "System Integration"
  ];

  const timelines = [
    "Immediate (Within 1 month)",
    "Short-term (1-3 months)",
    "Medium-term (3-6 months)",
    "Long-term (6+ months)",
    "Flexible"
  ];

  const budgets = [
    "Under $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "Over $500,000",
    "To be discussed"
  ];

  const consultationTypes = [
    {
      title: "Free Initial Consultation",
      description: "30-minute discovery call to understand your needs and challenges",
      duration: "30 minutes",
      price: "Free",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Needs Assessment", "Solution Overview", "Next Steps Planning", "No Obligation"]
    },
    {
      title: "Technical Deep Dive",
      description: "Comprehensive technical analysis and solution architecture review",
      duration: "2 hours",
      price: "$500",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Technical Analysis", "Architecture Review", "Implementation Plan", "Resource Requirements"]
    },
    {
      title: "Strategy Workshop",
      description: "Full-day strategic planning session with your team and our experts",
      duration: "Full Day",
      price: "$2,500",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Strategic Planning", "Team Alignment", "Roadmap Creation", "Priority Setting"]
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Get insights from our experienced AI and IT professionals",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Customized Solutions",
      description: "Tailored recommendations based on your specific business needs",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Cost Optimization",
      description: "Identify opportunities to reduce costs and improve efficiency",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Future-Proof Strategy",
      description: "Plan for long-term success with scalable and adaptable solutions",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert AI & IT Guidance</title>
        <meta 
          name="description" 
          content="Get expert guidance on AI and IT solutions with our free consultation. Discover how our technology can transform your business and accelerate growth." 
        />
        <meta 
          name="keywords" 
          content="free consultation, AI consulting, IT consulting, business transformation, technology strategy, expert guidance" 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Expert Guidance</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Free Consultation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get expert guidance on how our AI and IT solutions can transform your business. 
              Schedule a free consultation with our technology experts today.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Schedule a Consultation?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our consultations provide valuable insights and strategic guidance to help you make informed decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Consultation Options
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation type that best fits your needs and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {type.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                    <div className="text-gray-400 text-sm">{type.duration}</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                    Schedule Now
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Schedule Your Consultation
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Consultation Requested!</h3>
                  <p className="text-gray-300">We'll contact you within 24 hours to schedule your consultation.</p>
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-slate-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline} className="bg-slate-800">
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select budget</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget} className="bg-slate-800">
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Describe your project, challenges, and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Request Free Consultation
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Prefer to Talk Directly?
                </span>
              </h2>
              <p className="text-gray-300 mb-8">
                Contact us directly for immediate assistance or to schedule your consultation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">consultation@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Schedule</h3>
                  <p className="text-cyan-400">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}