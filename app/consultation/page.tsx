import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Star, Brain, Shield, Zap } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ConsultationPage = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Develop a comprehensive AI strategy tailored to your business goals and challenges.",
      icon: <Brain className="w-8 h-8" />,
      duration: "2-4 hours",
      price: "From $500",
      features: [
        "AI readiness assessment",
        "Technology roadmap",
        "ROI analysis",
        "Implementation timeline"
      ]
    },
    {
      title: "Technology Audit",
      description: "Comprehensive review of your current technology stack and infrastructure.",
      icon: <Shield className="w-8 h-8" />,
      duration: "1-2 days",
      price: "From $1,500",
      features: [
        "Security assessment",
        "Performance analysis",
        "Scalability review",
        "Optimization recommendations"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Strategic guidance for modernizing your business processes and technology.",
      icon: <Zap className="w-8 h-8" />,
      duration: "1-2 weeks",
      price: "From $5,000",
      features: [
        "Process analysis",
        "Technology selection",
        "Change management",
        "Implementation support"
      ]
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Get advice from industry experts with 15+ years of experience"
    },
    {
      title: "Custom Solutions",
      description: "Tailored recommendations based on your specific business needs"
    },
    {
      title: "Cost Savings",
      description: "Avoid costly mistakes with expert guidance and planning"
    },
    {
      title: "Fast Track",
      description: "Accelerate your technology initiatives with proven strategies"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Discussion",
      description: "We discuss your goals, challenges, and current technology landscape"
    },
    {
      step: "02",
      title: "Assessment",
      description: "We analyze your business and technology requirements in detail"
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "We create a customized strategy and implementation plan"
    },
    {
      step: "04",
      title: "Presentation",
      description: "We present our findings and recommendations with actionable next steps"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Free Consultation - AI & Technology Strategy | Zion Tech Group"
        description="Get expert consultation on AI solutions, technology strategy, and digital transformation. Free consultation to help you make informed technology decisions."
        keywords="technology consultation, AI strategy, digital transformation, technology audit, business consultation, free consultation"
        canonical="https://ziontechgroup.com/consultation"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Free
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get expert guidance on AI solutions, technology strategy, and digital transformation. 
            Our free consultation helps you make informed decisions about your technology investments.
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Consultation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {type.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {type.duration}
                    </div>
                    <div className="flex items-center text-sm text-cyan-400 font-medium">
                      {type.price}
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Consultation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guidance that delivers real value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Consultation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology for successful consultations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-strategy" className="bg-slate-800">AI Strategy Consultation</option>
                    <option value="technology-audit" className="bg-slate-800">Technology Audit</option>
                    <option value="digital-transformation" className="bg-slate-800">Digital Transformation</option>
                    <option value="ai-services" className="bg-slate-800">AI Services</option>
                    <option value="it-solutions" className="bg-slate-800">IT Solutions</option>
                    <option value="micro-saas" className="bg-slate-800">Micro SAAS</option>
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate" className="bg-slate-800">Immediate (1-2 weeks)</option>
                    <option value="short-term" className="bg-slate-800">Short-term (1-3 months)</option>
                    <option value="medium-term" className="bg-slate-800">Medium-term (3-6 months)</option>
                    <option value="long-term" className="bg-slate-800">Long-term (6+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k" className="bg-slate-800">Under $10,000</option>
                  <option value="10k-50k" className="bg-slate-800">$10,000 - $50,000</option>
                  <option value="50k-100k" className="bg-slate-800">$50,000 - $100,000</option>
                  <option value="100k-500k" className="bg-slate-800">$100,000 - $500,000</option>
                  <option value="over-500k" className="bg-slate-800">Over $500,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Describe your project, challenges, and goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait to transform your business. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;