import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Calendar,
  Video,
  Users,
  Award,
  Shield,
  Zap,
  Globe,
  Building,
  TrendingUp,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Database,
  Code,
  Smartphone,
  Wifi,
  Eye,
  Heart,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Check,
  X
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
        newsletter: false
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 302 464 0950",
      description: "Call us for immediate assistance",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Send us an email anytime",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "364 E Main St STE 1008\nMiddletown, DE 19709",
      description: "Visit our headquarters",
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
      description: "We're here to help",
      action: "Schedule Meeting"
    }
  ];

  const services = [
    "AI Services & Machine Learning",
    "IT Infrastructure & Cloud Solutions",
    "Micro SaaS Development",
    "Cybersecurity & Compliance",
    "Digital Transformation",
    "Data Analytics & Business Intelligence",
    "Mobile App Development",
    "Web Development & E-commerce",
    "DevOps & CI/CD",
    "Blockchain & Web3 Solutions"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "$500,000+",
    "Not sure yet"
  ];

  const timelines = [
    "ASAP (Rush project)",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring options"
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Proven track record with 500+ successful projects"
    },
    {
      icon: Shield,
      title: "99.9% Uptime Guarantee",
      description: "Reliable service with enterprise-grade security"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "200+ skilled professionals ready to help"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance when you need it"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group exceeded our expectations. Their AI solutions increased our efficiency by 300% and reduced costs by 50%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "InnovateLabs",
      role: "Founder",
      content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Global Dynamics",
      role: "IT Director",
      content: "Professional, reliable, and innovative. They delivered our cloud migration project on time and under budget.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Free Consultation",
      description: "30-minute call to discuss your project needs",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      action: "Book Now"
    },
    {
      title: "Get a Project Quote",
      description: "Detailed estimate for your specific requirements",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      action: "Request Quote"
    },
    {
      title: "View Our Portfolio",
      description: "See examples of our successful projects",
      icon: Eye,
      color: "from-purple-500 to-pink-500",
      action: "View Portfolio"
    },
    {
      title: "Download Resources",
      description: "Free guides, templates, and whitepapers",
      icon: Download,
      color: "from-orange-500 to-red-500",
      action: "Download"
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group | Get Free Consultation & Project Quote</title>
        <meta name="description" content="Ready to start your project? Contact Zion Tech Group for a free consultation. Get expert advice on AI, IT, and micro SaaS solutions. Call +1 302 464 0950." />
        <meta name="keywords" content="contact us, free consultation, project quote, AI services, IT solutions, micro SaaS, technology consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Build Something
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Amazing Together
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Ready to transform your business with cutting-edge technology? 
                Get a free consultation and discover how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Call Now: +1 302 464 0950
                </a>
                <Link href="#contact-form" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
              <p className="text-xl text-gray-600">Choose the best way to get started with your project</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-gray-600 mb-4">{action.description}</p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      {action.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section id="contact-form" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Consultation</h2>
                  <p className="text-lg text-gray-600">
                    Tell us about your project and we'll provide a detailed proposal within 24 hours.
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-semibold">Thank you! We'll contact you within 24 hours.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Project Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Project Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm text-gray-600">
                      Subscribe to our newsletter for tech insights and updates
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                  <p className="text-lg text-gray-600">
                    Multiple ways to reach us. We're here to help with your technology needs.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="bg-blue-600 p-3 rounded-lg mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-600 mb-2 whitespace-pre-line">{info.details}</p>
                          <p className="text-sm text-gray-500 mb-3">{info.description}</p>
                          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                            {info.action} →
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Why Choose Us */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {whyChooseUs.map((reason, index) => {
                      const IconComponent = reason.icon;
                      return (
                        <div key={index} className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                          <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">{reason.title}</h4>
                          <p className="text-xs text-gray-600">{reason.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their technology needs. 
              Let's discuss how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+13024640950" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call: +1 302 464 0950
              </a>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}