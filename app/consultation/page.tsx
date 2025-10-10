'use client';

import React from 'react';
import { 
  Calendar,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Brain,
  Cloud,
  Code
} from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Get expert advice on implementing AI in your business",
      duration: "60 min",
      price: "Free",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      features: [
        "AI readiness assessment",
        "Custom AI roadmap",
        "ROI projections",
        "Implementation timeline"
      ]
    },
    {
      title: "IT Infrastructure Review",
      description: "Comprehensive analysis of your current IT setup",
      duration: "90 min",
      price: "Free",
      icon: Cloud,
      color: "from-cyan-500 to-blue-600",
      features: [
        "Infrastructure audit",
        "Security assessment",
        "Performance analysis",
        "Optimization recommendations"
      ]
    },
    {
      title: "Digital Transformation Planning",
      description: "Strategic planning for your digital transformation journey",
      duration: "120 min",
      price: "Free",
      icon: Code,
      color: "from-green-500 to-emerald-600",
      features: [
        "Current state analysis",
        "Future state vision",
        "Gap analysis",
        "Transformation roadmap"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "We'll review your current setup and understand your goals"
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Create a customized strategy based on your specific needs"
    },
    {
      step: 3,
      title: "Implementation Plan",
      description: "Develop a detailed roadmap for implementation"
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Provide continuous support throughout your journey"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Free Consultation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Get expert advice on how AI and IT solutions can transform your business. Our consultations are completely free and tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation that best fits your needs. All consultations are completely free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${consultation.color} rounded-xl flex items-center justify-center`}>
                  <consultation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{consultation.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{consultation.description}</p>
                
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{consultation.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{consultation.price}</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {consultation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${consultation.color} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center`}>
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here's how we work with you to deliver the best results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
            </p>
          </div>
          
          <div className="cyber-card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Company *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Consultation Type *</label>
                <select
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  <option value="">Select consultation type</option>
                  <option value="ai-strategy">AI Strategy Consultation</option>
                  <option value="it-infrastructure">IT Infrastructure Review</option>
                  <option value="digital-transformation">Digital Transformation Planning</option>
                  <option value="custom">Custom Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Tell us about your project *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Describe your current challenges and what you hope to achieve..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prefer to Talk?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us directly for immediate assistance or to schedule your consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                +1 (302) 464-0950
              </a>
              <p className="text-sm text-gray-400 mt-2">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                kleber@ziontechgroup.com
              </a>
              <p className="text-sm text-gray-400 mt-2">24/7 Support</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-cyan-400 font-semibold text-lg">364 E Main St STE 1008</p>
              <p className="text-cyan-400 font-semibold text-lg">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;