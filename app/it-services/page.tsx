import { ArrowRight, Cloud, Shield, Code, Database, Smartphone, Globe, Zap, CheckCircle, Mail, Phone, Award, Users, Clock, Star, TrendingUp, BarChart3, Cpu, Network, Server } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      name: "Cloud Infrastructure Management",
      description: "Complete cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "24/7 Monitoring"],
      link: "/cloud-infrastructure",
      popular: true
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, vulnerability assessment, and incident response.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance Management", "Security Training"],
      link: "/cybersecurity-solutions",
      popular: true
    },
    {
      name: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and processes.",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "Custom Pricing",
      features: ["Custom Applications", "API Development", "Integration Services", "Maintenance & Support", "Scalable Architecture"],
      link: "/custom-software",
      popular: false
    },
    {
      name: "Web Development",
      description: "Modern, responsive web applications with cutting-edge technologies and optimal performance.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,999/project",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "CMS Integration", "E-commerce Solutions"],
      link: "/web-development",
      popular: false
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,999/project",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Optimization", "Push Notifications"],
      link: "/mobile-development",
      popular: false
    },
    {
      name: "Database Management",
      description: "Expert database design, optimization, and management services for optimal performance and security.",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $199/month",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Security Hardening", "Migration Services"],
      link: "/database-management",
      popular: false
    },
    {
      name: "Network Infrastructure",
      description: "Complete network design, implementation, and management for reliable and secure connectivity.",
      icon: <Network className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $299/month",
      features: ["Network Design", "Security Implementation", "Performance Monitoring", "Troubleshooting", "Upgrade Planning"],
      link: "/network-infrastructure",
      popular: false
    },
    {
      name: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "Starting at $179/month",
      features: ["Data Visualization", "Predictive Analytics", "Custom Dashboards", "ETL Processes", "Real-time Reporting"],
      link: "/data-analytics",
      popular: false
    },
    {
      name: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions and optimize your IT infrastructure.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "Starting at $150/hour",
      features: ["Technology Assessment", "Strategic Planning", "Vendor Selection", "Cost Optimization", "Digital Transformation"],
      link: "/consultation",
      popular: false
    }
  ];

  const serviceCategories = [
    {
      title: "Infrastructure Services",
      description: "Complete infrastructure management and optimization",
      services: ["Cloud Management", "Network Infrastructure", "Server Management", "Backup & Recovery"],
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Security Services",
      description: "Comprehensive cybersecurity and compliance solutions",
      services: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Compliance Management"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Development Services",
      description: "Custom software and application development",
      services: ["Web Development", "Mobile Apps", "Custom Software", "API Development"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Data Services",
      description: "Data management, analytics, and business intelligence",
      services: ["Database Management", "Data Analytics", "Business Intelligence", "Data Migration"],
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Proactive Monitoring",
      description: "Continuous monitoring to prevent issues before they occur",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business needs",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Expert Team",
      description: "Certified professionals with years of experience",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Manufacturing Corp",
      role: "IT Director",
      content: "Zion Tech Group transformed our entire IT infrastructure. The cloud migration was seamless and our uptime improved to 99.9%.",
      rating: 5,
      service: "Cloud Infrastructure"
    },
    {
      name: "Lisa Wang",
      company: "Financial Services",
      role: "CTO",
      content: "Their cybersecurity solutions are top-notch. We've had zero security incidents since implementing their services.",
      rating: 5,
      service: "Cybersecurity"
    },
    {
      name: "Robert Martinez",
      company: "E-commerce Platform",
      role: "CEO",
      content: "The custom software they built for us has streamlined our operations and increased efficiency by 40%.",
      rating: 5,
      service: "Custom Development"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional Technology Solutions</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, custom development, web development, mobile apps, and data analytics. Professional technology solutions for modern businesses."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, custom development, web development, mobile development, database management, network infrastructure, data analytics, IT consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                IT
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Services
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services designed to keep your business running smoothly and securely. 
              From cloud infrastructure to cybersecurity, we provide end-to-end technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services organized by category to meet all your technology needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{category.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{category.description}</p>
                  <div className="space-y-1">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="text-sm text-cyan-300 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services designed to optimize your technology infrastructure and drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    service.popular
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Link
                      to={service.link}
                      className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        service.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full block text-center py-2 px-4 rounded-lg border border-gray-500 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-sm"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive IT solutions with unmatched expertise and support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of businesses that trust us with their IT infrastructure and technology needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-xs text-cyan-400 mt-1">{testimonial.service}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our expert team for a free consultation and discover how we can transform your technology infrastructure.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
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
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
