import { ArrowRight, Calendar, Clock, Users, CheckCircle, Star, Brain, Shield, Zap, Mail, Smartphone, Globe, Target, Award, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    consultationType: '',
    industry: '',
    projectSize: '',
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
        consultationType: '',
        industry: '',
        projectSize: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const consultationTypes = [
    {
      title: "AI Strategy & Implementation",
      description: "Comprehensive AI strategy development and implementation roadmap",
      icon: Brain,
      features: ["AI Readiness Assessment", "Technology Stack Planning", "Implementation Roadmap", "ROI Analysis"],
      duration: "2-4 weeks",
      price: "Starting at $5,000"
    },
    {
      title: "Cloud Infrastructure Design",
      description: "Scalable and secure cloud architecture design and migration",
      icon: Globe,
      features: ["Architecture Review", "Migration Planning", "Security Assessment", "Cost Optimization"],
      duration: "3-6 weeks",
      price: "Starting at $8,000"
    },
    {
      title: "Cybersecurity Audit",
      description: "Comprehensive security assessment and vulnerability analysis",
      icon: Shield,
      features: ["Security Assessment", "Penetration Testing", "Compliance Review", "Remediation Plan"],
      duration: "1-3 weeks",
      price: "Starting at $3,000"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategy and implementation",
      icon: Target,
      features: ["Process Analysis", "Technology Integration", "Change Management", "Performance Monitoring"],
      duration: "4-8 weeks",
      price: "Starting at $15,000"
    }
  ];

  const industries = [
    "Healthcare", "Finance", "Manufacturing", "Retail", "Education", 
    "Technology", "Government", "Non-profit", "Other"
  ];

  const projectSizes = [
    "Small (1-10 employees)",
    "Medium (11-100 employees)", 
    "Large (101-500 employees)",
    "Enterprise (500+ employees)"
  ];

  const timelines = [
    "ASAP (Within 1 month)",
    "Short-term (1-3 months)",
    "Medium-term (3-6 months)",
    "Long-term (6+ months)"
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Expert Analysis",
      description: "In-depth analysis by our team of certified professionals"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful implementations across industries"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Ongoing support and guidance throughout your project"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get a free consultation with our technology experts. Discuss your AI, cloud, and digital transformation needs with certified professionals." />
        <meta name="keywords" content="free consultation, technology consulting, AI strategy, cloud migration, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get expert advice on your technology challenges. Our certified professionals are ready to help you transform your business with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Schedule Now
                <Calendar className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                Call Us
                <Smartphone className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Consultation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Consultation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                      <p className="text-gray-300 text-sm">{type.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="w-4 h-4" />
                        {type.duration}
                      </div>
                      <div className="font-semibold text-white">{type.price}</div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Free Consultation</h2>
                <p className="text-gray-300">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">We've received your consultation request and will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Consultation Type *</label>
                      <select
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Select consultation type</option>
                        {consultationTypes.map((type, index) => (
                          <option key={index} value={type.title}>{type.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Industry</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Select your industry</option>
                        {industries.map((industry, index) => (
                          <option key={index} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Project Size</label>
                      <select
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Select project size</option>
                        {projectSizes.map((size, index) => (
                          <option key={index} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Tell us about your project and specific requirements..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to start your digital transformation journey. Our experts are ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                View Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}