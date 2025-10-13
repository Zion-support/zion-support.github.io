import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  Globe,
  Mail,
  Smartphone,
  MapPin,
  Star,
  Users,
  Award,
  BarChart3
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
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
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Comprehensive AI strategy development and implementation planning",
      duration: "2-3 hours",
      price: "Free",
      icon: <Brain className="w-6 h-6" />,
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Plan"]
    },
    {
      title: "IT Infrastructure Review",
      description: "Complete IT infrastructure assessment and optimization recommendations",
      duration: "1-2 hours",
      price: "Free",
      icon: <Shield className="w-6 h-6" />,
      features: ["Security Audit", "Performance Analysis", "Cost Optimization", "Scalability Planning"]
    },
    {
      title: "Digital Transformation Planning",
      description: "End-to-end digital transformation strategy and execution plan",
      duration: "3-4 hours",
      price: "Free",
      icon: <Zap className="w-6 h-6" />,
      features: ["Current State Analysis", "Future State Vision", "Gap Analysis", "Change Management"]
    },
    {
      title: "5G Implementation Strategy",
      description: "5G network planning and implementation strategy consultation",
      duration: "2-3 hours",
      price: "Free",
      icon: <Globe className="w-6 h-6" />,
      features: ["Network Planning", "Use Case Analysis", "Technology Selection", "Implementation Timeline"]
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Get insights from our team of AI and IT experts with 10+ years of experience",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Free Consultation",
      description: "No cost, no obligation consultation to understand your needs and provide recommendations",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Actionable Insights",
      description: "Receive a detailed report with actionable recommendations and next steps",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

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
    "Financial Analytics"
  ];

  const timelines = [
    "Immediate (1-2 weeks)",
    "Short-term (1-3 months)",
    "Medium-term (3-6 months)",
    "Long-term (6+ months)"
  ];

  const budgets = [
    "Under $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "$500,000+"
  ];

  const stats = [
    { number: "500+", label: "Consultations Completed", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Savings", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Free Consultation - Zion Tech Group | Expert Technology Consulting"
        description="Get a free consultation with our technology experts. Discover how AI, cybersecurity, and cloud solutions can transform your business. Schedule your consultation today."
        keywords="free consultation, technology consulting, AI consulting, cybersecurity audit, cloud migration, digital transformation"
        canonical="https://ziontechgroup.com/consultation"
      />
      
      <Helmet>
        <title>Free Consultation - Zion Tech Group | AI & IT Strategy Planning</title>
        <meta
          name="description"
          content="Schedule a free consultation with Zion Tech Group experts. Get personalized AI and IT strategy recommendations for your business. No obligation, expert guidance."
        />
        <meta
          name="keywords"
          content="free consultation, AI strategy, IT consulting, digital transformation, business technology planning, expert guidance"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Technology Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert guidance on AI, cybersecurity, cloud solutions, and digital transformation. 
              No cost, no obligation - just valuable insights for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#schedule"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Schedule Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consultation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of free consultation services designed to address your specific technology needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="text-sm text-cyan-400 mb-4">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 mr-2" />
                    {type.duration}
                  </div>
                  <div className="font-semibold">{type.price}</div>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Consultation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team provides valuable insights and actionable recommendations to help your business succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule Your Free Consultation
            </h2>
            <p className="text-xl text-gray-300">
              Fill out the form below and we'll contact you within 24 hours to schedule your consultation.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your interest. We'll contact you within 24 hours to schedule your free consultation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your full name"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your company name"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
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
                    <option value="ai-strategy" className="bg-slate-800">AI Strategy Consultation</option>
                    <option value="it-infrastructure" className="bg-slate-800">IT Infrastructure Review</option>
                    <option value="digital-transformation" className="bg-slate-800">Digital Transformation Planning</option>
                    <option value="5g-implementation" className="bg-slate-800">5G Implementation Strategy</option>
                    <option value="general" className="bg-slate-800">General Technology Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
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
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Describe your project, goals, and any specific challenges you're facing..."
                />
              </div>

              <button
                type="submit"
                className="w-full group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}