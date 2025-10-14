import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Cloud, Database, Code, Smartphone, Monitor, Clock, Settings, Zap, Award, Target, TrendingUp, Star as StarIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ITServices() {
  const itServices = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud transformation services including AWS, Azure, and Google Cloud Platform migration and optimization",
      price: "From $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-cloud strategy & planning",
        "AWS/Azure/GCP migration",
        "Cloud cost optimization",
        "Disaster recovery setup",
        "Auto-scaling configuration",
        "Security & compliance",
        "24/7 monitoring & support",
        "Performance optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability & flexibility",
        "Enhance security & compliance",
        "Increase system reliability"
      ],
      category: "Infrastructure",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure",
      featured: true
    },
    {
      id: "cybersecurity-suite",
      name: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, and incident response",
      price: "From $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "24/7 threat monitoring",
        "Vulnerability assessments",
        "Penetration testing",
        "Security awareness training",
        "Incident response planning",
        "Compliance management",
        "Firewall configuration",
        "Intrusion detection"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Ensure compliance with regulations",
        "Reduce security incidents by 85%",
        "Improve security posture"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-solutions",
      featured: true
    },
    {
      id: "web-development",
      name: "Web Development Services",
      description: "Custom web applications, e-commerce solutions, and responsive websites built with modern technologies",
      price: "From $2,999/project",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Custom web applications",
        "E-commerce solutions",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "Security implementation",
        "Content management systems",
        "API development"
      ],
      benefits: [
        "Increase online presence",
        "Improve user experience",
        "Boost conversion rates",
        "Enhance brand credibility"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 1156,
      link: "/web-development",
      featured: true
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
      price: "From $4,999/project",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "UI/UX design",
        "App store optimization",
        "Push notifications",
        "Analytics integration",
        "Offline functionality",
        "Security implementation"
      ],
      benefits: [
        "Reach mobile users effectively",
        "Improve customer engagement",
        "Increase brand visibility",
        "Generate additional revenue"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 743,
      link: "/mobile-development",
      featured: false
    },
    {
      id: "database-management",
      name: "Database Management",
      description: "Comprehensive database services including design, optimization, migration, and performance tuning",
      price: "From $199/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Database design & architecture",
        "Performance tuning",
        "Migration services",
        "Backup & recovery",
        "Security hardening",
        "Monitoring & maintenance",
        "Query optimization",
        "Data integrity checks"
      ],
      benefits: [
        "Improve database performance",
        "Ensure data security",
        "Reduce downtime",
        "Optimize storage costs"
      ],
      category: "Data Services",
      rating: 4.7,
      reviews: 567,
      link: "/database-management",
      featured: false
    },
    {
      id: "custom-software",
      name: "Custom Software Development",
      description: "Tailored software solutions designed to meet specific business requirements with scalable architecture",
      price: "From $5,999/project",
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Custom software solutions",
        "Scalable architecture",
        "API development",
        "Integration services",
        "Quality assurance",
        "Documentation",
        "User training",
        "Ongoing support"
      ],
      benefits: [
        "Meet specific business needs",
        "Improve operational efficiency",
        "Gain competitive advantage",
        "Reduce manual processes"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 423,
      link: "/custom-software",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: 12, active: true },
    { name: "Infrastructure", count: 3, active: false },
    { name: "Security", count: 2, active: false },
    { name: "Development", count: 4, active: false },
    { name: "Data Services", count: 2, active: false },
    { name: "Support", count: 1, active: false }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "IT Services", icon: <Settings className="w-6 h-6" /> }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Analyze your current IT infrastructure and identify areas for improvement",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive IT strategy aligned with your business goals",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with minimal disruption to your business operations",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance and security",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Enterprise Solutions Inc.",
      role: "CTO",
      content: "Zion's IT services transformed our entire infrastructure. The cloud migration was seamless and our systems are now 40% more efficient.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      company: "TechStart Ventures",
      role: "CEO",
      content: "Outstanding cybersecurity solutions and support. Our security posture improved dramatically with their comprehensive approach.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Robert Martinez",
      company: "Digital Agency",
      role: "Operations Director",
      content: "The custom software development exceeded our expectations. Professional, reliable, and delivered on time and within budget.",
      rating: 5,
      avatar: "RM"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic IT Support",
      price: "$99",
      period: "/month",
      description: "Essential IT support for small businesses",
      features: [
        "24/7 Help Desk",
        "Remote Support",
        "Basic Maintenance",
        "Email Support",
        "System Monitoring",
        "Monthly Reports"
      ],
      popular: false
    },
    {
      name: "Professional IT Services",
      price: "$299",
      period: "/month",
      description: "Comprehensive IT services for growing businesses",
      features: [
        "All Basic Features",
        "Proactive Monitoring",
        "Security Management",
        "Cloud Services",
        "Priority Support",
        "Quarterly Reviews",
        "Backup & Recovery",
        "Software Updates"
      ],
      popular: true
    },
    {
      name: "Enterprise IT Solutions",
      price: "$599",
      period: "/month",
      description: "Full-service IT solutions for large organizations",
      features: [
        "All Professional Features",
        "Dedicated Account Manager",
        "Custom Solutions",
        "Advanced Security",
        "Disaster Recovery",
        "Compliance Management",
        "Strategic Consulting",
        "Unlimited Support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Professional IT services including cloud infrastructure, cybersecurity, network engineering, DevOps, and managed services. Transform your technology with expert solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud migration, cybersecurity, network engineering, DevOps, managed services, IT consulting, infrastructure, database management"
        />
      </Helmet>
      <SEOOptimizer
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Professional IT services including cloud infrastructure, cybersecurity, network engineering, DevOps, and managed services. Transform your technology with expert solutions."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  IT Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions to transform your business. From cloud infrastructure 
                to cybersecurity, we provide expert IT services that drive growth and innovation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">15+ years experience</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">500+ projects completed</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.9% uptime SLA</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Award className="mr-2 h-5 w-5" />
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Process
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most popular IT services trusted by leading organizations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.filter(service => service.featured).map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {itServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="ml-1 text-xs font-medium">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm line-clamp-2">{service.description}</p>

                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-white">{service.price}</span>
                  </div>

                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Client Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how we've helped organizations transform their technology infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the IT service plan that best fits your business needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                      : 'border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our expert team help you modernize your technology stack and drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <Settings className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}