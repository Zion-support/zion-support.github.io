import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Sparkles,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  BarChart3,
  Users,
  Award,
  Clock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageSquare
} from 'lucide-react';

const ConsultationPage = () => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Get expert advice on implementing AI solutions in your business",
      icon: <Brain className="w-8 h-8" />,
      duration: "60 minutes",
      price: "Free",
      features: [
        "AI readiness assessment",
        "Custom AI roadmap",
        "Technology recommendations",
        "Implementation timeline"
      ]
    },
    {
      title: "IT Infrastructure Review",
      description: "Comprehensive analysis of your current IT infrastructure and optimization opportunities",
      icon: <Cloud className="w-8 h-8" />,
      duration: "90 minutes",
      price: "Free",
      features: [
        "Infrastructure audit",
        "Security assessment",
        "Performance optimization",
        "Cost reduction strategies"
      ]
    },
    {
      title: "Digital Transformation Planning",
      description: "Strategic planning for your digital transformation journey",
      icon: <Zap className="w-8 h-8" />,
      duration: "120 minutes",
      price: "Free",
      features: [
        "Digital maturity assessment",
        "Transformation roadmap",
        "Technology stack planning",
        "Change management strategy"
      ]
    }
  ];

  const benefits = [
    {
      title: "Expert Analysis",
      description: "Get insights from certified professionals with years of experience",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Custom Recommendations",
      description: "Tailored solutions based on your specific business needs",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "No Obligation",
      description: "Free consultation with no commitment required",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Quick Response",
      description: "Get scheduled within 24 hours of your request",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "The AI strategy consultation was incredibly valuable. We now have a clear roadmap for implementing AI in our business.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "CTO",
      content: "The infrastructure review helped us identify cost savings of $50K annually. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "GrowthCorp",
      role: "Operations Director",
      content: "The digital transformation planning session gave us the clarity we needed to move forward with confidence.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Strategic planning, infrastructure review, and digital transformation guidance. Schedule your free consultation today." />
        <meta name="keywords" content="free consultation, AI consulting, IT consulting, digital transformation, strategy planning, expert advice" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Free Expert Consultation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Free Expert Consultation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get expert advice from our AI and IT professionals. Free consultation with no obligation required.
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Consultation Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the type of consultation that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="flex items-center text-cyan-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{type.duration}</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm font-semibold">{type.price}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 group-hover:scale-105">
                  Schedule Now
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Consultation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the most out of your free consultation with our expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
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

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule Your Free Consultation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="micro-saas">Micro SAAS</option>
                    <option value="it-services">IT Services</option>
                    <option value="5g-solutions">5G Solutions</option>
                    <option value="consulting">General Consulting</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="timeline" className="block text-white font-medium mb-2">Project Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-3 months)</option>
                  <option value="short-term">Short-term (3-6 months)</option>
                  <option value="medium-term">Medium-term (6-12 months)</option>
                  <option value="long-term">Long-term (12+ months)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us about your project, goals, or any specific questions you have..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center mx-auto group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our consultation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-purple-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-purple-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;