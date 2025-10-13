import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Server, Cloud, Database, Code, Network, Smartphone, Monitor, Headphones, Clock, DollarSign, Globe, Lock, Settings, Zap, BarChart3, Users, Award, Target, TrendingUp } from "lucide-react";
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
        "Security audits",
        "Risk assessment"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 85%",
        "Ensure compliance with regulations",
        "Minimize business disruption"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-solutions",
      featured: true
    },
    {
      id: "web-development",
      name: "Custom Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices",
      price: "From $1,200/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Responsive web design",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "Content Management Systems",
        "API development",
        "Performance optimization",
        "SEO optimization",
        "Mobile-first design"
      ],
      benefits: [
        "Increase conversion rates by 35%",
        "Improve user experience",
        "Boost search engine rankings",
        "Reduce bounce rates"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 1156,
      link: "/web-development",
      featured: false
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience",
      price: "From $1,500/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "App Store optimization",
        "Push notifications",
        "Offline functionality",
        "Social media integration",
        "Payment gateway integration",
        "Analytics & tracking"
      ],
      benefits: [
        "Reach mobile users effectively",
        "Increase customer engagement",
        "Generate additional revenue",
        "Improve brand visibility"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 743,
      link: "/mobile-development",
      featured: false
    },
    {
      id: "database-management",
      name: "Database Management & Optimization",
      description: "Comprehensive database services including design, optimization, migration, and maintenance",
      price: "From $800/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Data migration services",
        "Backup & recovery solutions",
        "Security hardening",
        "Monitoring & maintenance",
        "Query optimization",
        "Scalability planning"
      ],
      benefits: [
        "Improve query performance by 60%",
        "Reduce database costs",
        "Enhance data security",
        "Ensure data integrity"
      ],
      category: "Data",
      rating: 4.7,
      reviews: 634,
      link: "/database-management",
      featured: false
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure & Security",
      description: "Complete network solutions including design, implementation, monitoring, and security",
      price: "From $1,000/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Network design & planning",
        "Firewall configuration",
        "VPN setup & management",
        "Network monitoring",
        "Bandwidth optimization",
        "Wireless network setup",
        "Network security audits",
        "Disaster recovery planning"
      ],
      benefits: [
        "Improve network performance",
        "Enhance security posture",
        "Reduce downtime",
        "Optimize bandwidth usage"
      ],
      category: "Infrastructure",
      rating: 4.6,
      reviews: 521,
      link: "/network-infrastructure",
      featured: false
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,200",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic IT support",
        "Email support",
        "Monthly maintenance",
        "Basic security",
        "Up to 10 users",
        "Standard monitoring"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$2,500",
      period: "/month",
      description: "Advanced features for growing companies",
      features: [
        "Priority support",
        "Phone & email support",
        "Weekly maintenance",
        "Advanced security",
        "Up to 50 users",
        "Real-time monitoring",
        "Custom integrations",
        "SLA guarantee"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,000",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "24/7 dedicated support",
        "Dedicated account manager",
        "Daily maintenance",
        "Enterprise security",
        "Unlimited users",
        "Advanced monitoring",
        "Custom development",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechStart Inc",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their cloud migration service saved us 40% in costs while improving performance significantly.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      title: "IT Director",
      company: "Global Solutions",
      content: "The cybersecurity suite is outstanding. We've had zero security incidents since implementing their solutions. Highly recommended!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "CEO",
      company: "InnovateCorp",
      content: "Their web development team created an amazing platform that increased our online sales by 60%. Professional and reliable service.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive IT services including cloud infrastructure, cybersecurity, web development, and mobile app development." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network security" />
        <meta property="og:title" content="IT Services - Zion Tech Group | Technology Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive IT services and technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Settings className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">Comprehensive IT Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Services That
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Drive Innovation
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive IT services. From cloud infrastructure to cybersecurity, 
                we provide end-to-end technology solutions that scale with your growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Expert Team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs and drive growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className={`text-${service.color.split('-')[1]}-400 mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="text-lg font-bold text-blue-400 mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your business needs. All plans include our core IT services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'border border-gray-600 hover:border-gray-500 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. See what industry leaders say about our IT services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you build, secure, and optimize your technology infrastructure. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}