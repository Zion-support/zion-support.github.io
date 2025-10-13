import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Users, CheckCircle, Brain, Shield, Cloud, Zap } from "lucide-react";
import { useState } from "react";

export default function Consultation() {
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
    // Handle form submission here
    setIsSubmitted(true);
  };

  const services = [
    {
      title: "AI Solutions",
      description: "Transform your business with AI-powered solutions",
      icon: <Brain className="w-8 h-8" />,
      features: ["Analytics", "Automation", "Content Generation", "Customer Service"]
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Compliance", "Risk Assessment", "Incident Response"]
    },
    {
      title: "Cloud Services",
      description: "Scale your infrastructure with cloud solutions",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Migration", "Infrastructure", "Security", "Cost Optimization"]
    },
    {
      title: "Custom Development",
      description: "Build tailored solutions for your specific needs",
      icon: <Zap className="w-8 h-8" />,
      features: ["Web Apps", "Mobile Apps", "APIs", "Integration"]
    }
  ];

  const consultationTypes = [
    {
      title: "Discovery Call",
      description: "Free 30-minute consultation to understand your needs",
      duration: "30 minutes",
      price: "Free",
      features: ["Needs assessment", "Solution overview", "Next steps planning"]
    },
    {
      title: "Technical Consultation",
      description: "Deep dive into technical requirements and architecture",
      duration: "60 minutes",
      price: "$200",
      features: ["Technical analysis", "Architecture review", "Implementation planning"]
    },
    {
      title: "Strategy Session",
      description: "Comprehensive business strategy and roadmap development",
      duration: "2 hours",
      price: "$500",
      features: ["Business analysis", "Strategic planning", "ROI assessment"]
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Get advice from our team of experienced professionals"
    },
    {
      title: "Custom Solutions",
      description: "Tailored recommendations based on your specific needs"
    },
    {
      title: "Proven Results",
      description: "Track record of successful implementations and transformations"
    },
    {
      title: "Ongoing Support",
      description: "Continued partnership throughout your digital journey"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-gray-300 mb-6">
              Your consultation request has been submitted successfully. Our team will contact you within 24 hours to schedule your consultation.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Return Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta
          name="description"
          content="Schedule a consultation with our experts to discuss your AI and IT needs. Get personalized recommendations and solutions for your business."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Schedule a Consultation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized recommendations from our experts. 
                Let us help you find the perfect AI and IT solutions for your business.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group text-center"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Types */}
        <div className="bg-slate-800/30 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consultation Options
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the consultation type that best fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div
                  key={index}
                  className={`bg-slate-700/30 rounded-xl p-6 border transition-all duration-300 ${
                    index === 1 
                      ? 'border-purple-500/40 bg-purple-500/5' 
                      : 'border-cyan-500/20 hover:border-cyan-500/40'
                  }`}
                >
                  {index === 1 && (
                    <div className="text-center mb-4">
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {type.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cyan-400 font-semibold">{type.duration}</span>
                    <span className="text-2xl font-bold text-white">{type.price}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white'
                      : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                  }`}>
                    Choose This Option
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Request Your Consultation
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="micro-saas">Micro SAAS</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-2 weeks)</option>
                    <option value="short">Short term (1-3 months)</option>
                    <option value="medium">Medium term (3-6 months)</option>
                    <option value="long">Long term (6+ months)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select budget</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Submit Request</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-slate-800/30 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Consultation?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Get expert guidance tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}