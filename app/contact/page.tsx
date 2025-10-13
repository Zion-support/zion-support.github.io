import { ArrowRight, Mail, Smartphone, Globe, MapPin, Clock, Send, CheckCircle, Star, Users, Award, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "kleber@ziontechgroup.com",
      action: "Send Email",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: "+1 302 464 0950",
      action: "Call Now",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      description: "Come see us at our headquarters in Delaware",
      contact: "364 E Main St STE 1008, Middletown DE 19709",
      action: "Get Directions",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Emergency Support Only" }
  ];

  const services = [
    {
      title: "AI Services",
      description: "AI-powered solutions and automation",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/ai-services"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use business software",
      icon: <Award className="w-6 h-6" />,
      link: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity",
      icon: <Globe className="w-6 h-6" />,
      link: "/5g-solutions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group's support team is exceptional. They helped us implement our AI solutions in record time.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The consultation process was thorough and professional. They understood our needs perfectly.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding customer service and technical expertise. Highly recommended for any business transformation project.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch for AI & IT Solutions</title>
        <meta
          name="description"
          content="Contact Zion Tech Group for AI services, micro SAAS solutions, and IT consulting. Call +1 302 464 0950 or email kleber@ziontechgroup.com. Free consultation available."
        />
        <meta
          name="keywords"
          content="contact Zion Tech Group, AI services contact, micro SAAS support, IT consulting contact, business technology solutions, free consultation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Mail className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Contact
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Us
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Get in touch with our expert team 
              for a free consultation and discover how we can accelerate your digital transformation.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Get in Touch
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to reach us. We're here to help you succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <p className="text-cyan-400 font-medium mb-6">
                    {method.contact}
                  </p>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105">
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="micro-saas">Micro SAAS</option>
                      <option value="5g-solutions">5G Solutions</option>
                      <option value="cloud-infrastructure">Cloud Infrastructure</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Contact Info & Hours */}
              <div className="space-y-8">
                {/* Business Hours */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-cyan-400" />
                    Business Hours
                  </h3>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                        <span className="text-gray-300">{schedule.day}</span>
                        <span className="text-cyan-400 font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Quick Links */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                            {service.title}
                          </div>
                          <div className="text-gray-300 text-sm">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our solutions to drive growth and innovation. 
              Contact us today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Our Services
                <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}