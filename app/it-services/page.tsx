import { ArrowRight, Shield, Cloud, Code, Database, Smartphone, Globe, Server, Users, Mail, CheckCircle, Star, Award, Clock, TrendingUp, Zap, Target, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "From $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening"],
      popular: true
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security services including threat detection, vulnerability assessment, and compliance management.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500",
      price: "From $399/month",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "24/7 Monitoring"],
      popular: true
    },
    {
      title: "Web Development Services",
      description: "Custom web applications, e-commerce solutions, and responsive websites built with modern technologies.",
      icon: <Code className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "From $2,999/project",
      features: ["Custom Development", "E-commerce Solutions", "Responsive Design", "SEO Optimization"],
      popular: false
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "From $4,999/project",
      features: ["Native & Cross-platform", "iOS & Android", "Modern UI/UX", "App Store Optimization"],
      popular: false
    },
    {
      title: "Database Management",
      description: "Database design, optimization, migration, and maintenance services for all major database systems.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "From $199/month",
      features: ["Database Design", "Performance Optimization", "Migration Services", "Backup & Recovery"],
      popular: false
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs with modern architecture and scalability.",
      icon: <Code className="w-8 h-8" />,
      path: "/custom-software",
      color: "from-teal-500 to-cyan-500",
      price: "From $5,999/project",
      features: ["Custom Solutions", "Modern Architecture", "Scalable Design", "API Development"],
      popular: false
    },
    {
      title: "Network Infrastructure",
      description: "Complete network design, implementation, and management services for enterprise environments.",
      icon: <Server className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-yellow-500 to-orange-500",
      price: "From $299/month",
      features: ["Network Design", "Implementation", "Monitoring", "Security Hardening"],
      popular: false
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/data-analytics",
      color: "from-pink-500 to-rose-500",
      price: "From $179/month",
      features: ["Data Visualization", "Business Intelligence", "Predictive Analytics", "Custom Dashboards"],
      popular: false
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting to help you plan, implement, and optimize your technology infrastructure.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-violet-500 to-purple-500",
      price: "From $150/hour",
      features: ["IT Strategy", "Technology Assessment", "Digital Transformation", "Vendor Management"],
      popular: false
    },
    {
      title: "DevOps & CI/CD",
      description: "Streamline your development and deployment processes with modern DevOps practices and automation.",
      icon: <Zap className="w-8 h-8" />,
      path: "/devops-services",
      color: "from-amber-500 to-yellow-500",
      price: "From $229/month",
      features: ["CI/CD Pipeline", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
      popular: false
    },
    {
      title: "5G Network Solutions",
      description: "Next-generation 5G network implementation, optimization, and management for modern businesses.",
      icon: <Globe className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Custom Pricing",
      features: ["5G Implementation", "Network Optimization", "IoT Integration", "Edge Computing"],
      popular: false
    },
    {
      title: "IT Support & Maintenance",
      description: "Comprehensive IT support services including help desk, maintenance, and technical assistance.",
      icon: <Target className="w-8 h-8" />,
      path: "/it-support",
      color: "from-emerald-500 to-green-500",
      price: "From $99/month",
      features: ["24/7 Help Desk", "Remote Support", "Preventive Maintenance", "Technical Training"],
      popular: false
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "IT Solutions", icon: <Code className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Financial Services Inc.",
      role: "CTO",
      content: "Zion's IT services transformed our entire infrastructure. We now have 99.9% uptime and our team is 40% more productive.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "Outstanding cloud migration services. They made the transition seamless and our costs decreased by 30%.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "Technical Lead",
      content: "The custom software development exceeded our expectations. The solution is scalable and perfectly fits our needs.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const serviceCategories = [
    {
      name: "Infrastructure",
      services: ["Cloud Management", "Network Infrastructure", "Server Management", "Data Centers"],
      icon: <Server className="w-6 h-6" />
    },
    {
      name: "Security",
      services: ["Cybersecurity", "Compliance", "Threat Detection", "Security Audits"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Development",
      services: ["Web Development", "Mobile Apps", "Custom Software", "API Development"],
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Data & Analytics",
      services: ["Database Management", "Data Analytics", "Business Intelligence", "Data Migration"],
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and more. Transform your business with our technology solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, custom software, network infrastructure, data analytics, DevOps"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">50+ IT Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From cloud infrastructure to custom software development, we provide end-to-end IT services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price and Features */}
                    <div className="space-y-3">
                      <div className="text-center">
                        <span className="text-green-400 font-bold text-lg">{service.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our IT services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our IT services to drive growth and innovation. 
                Contact us today for a personalized consultation.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-green-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-green-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  Start Your IT Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free IT Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}