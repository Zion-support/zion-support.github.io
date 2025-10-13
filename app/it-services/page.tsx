import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Server, 
  Shield, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Monitor, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign,
  Globe,
  Users,
  BarChart3,
  Zap,
  Lock,
  Settings,
  Wrench,
  Network
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const ITServicesPage = () => {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Comprehensive cloud solutions including migration, optimization, and management",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Cost Optimization"],
      price: "From $2,500/month",
      link: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security services to protect your digital assets and data",
      icon: <Shield className="w-8 h-8" />,
      features: ["Security Assessment", "Threat Detection", "Incident Response", "Compliance"],
      price: "From $1,800/month",
      link: "/cybersecurity-solutions"
    },
    {
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies",
      icon: <Code className="w-8 h-8" />,
      features: ["Custom Development", "Responsive Design", "Performance Optimization", "SEO"],
      price: "From $3,000/project",
      link: "/web-development"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Native Apps", "Cross-platform", "UI/UX Design", "App Store Optimization"],
      price: "From $5,000/project",
      link: "/mobile-development"
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and maintenance services",
      icon: <Database className="w-8 h-8" />,
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Migration"],
      price: "From $1,200/month",
      link: "/database-management"
    },
    {
      title: "Network Infrastructure",
      description: "Network design, implementation, and ongoing management",
      icon: <Network className="w-8 h-8" />,
      features: ["Network Design", "Security Implementation", "Monitoring", "Maintenance"],
      price: "From $2,000/month",
      link: "/network-infrastructure"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic IT Support",
      price: "$1,200",
      period: "per month",
      description: "Essential IT support for small businesses",
      features: [
        "24/7 Help Desk Support",
        "Remote Monitoring",
        "Basic Security",
        "Software Updates",
        "Email Support",
        "Monthly Reports"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional IT Services",
      price: "$3,500",
      period: "per month",
      description: "Comprehensive IT services for growing businesses",
      features: [
        "Dedicated IT Manager",
        "Advanced Security Suite",
        "Cloud Infrastructure",
        "Backup & Recovery",
        "Priority Support",
        "Quarterly Reviews",
        "Custom Solutions"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise IT Solutions",
      price: "Custom",
      period: "pricing",
      description: "Complete IT transformation for large organizations",
      features: [
        "Custom IT Strategy",
        "Full Infrastructure Overhaul",
        "Advanced Security",
        "24/7 Dedicated Support",
        "Compliance Management",
        "Custom Development",
        "SLA Guarantees"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const technologies = [
    {
      category: "Cloud Platforms",
      items: ["AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud"]
    },
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python", "Java", "C#", "Go", "Rust", "TypeScript"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"]
    },
    {
      category: "Security Tools",
      items: ["Firewalls", "SIEM", "EDR", "VPN", "Identity Management", "Encryption"]
    }
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      company: "Manufacturing Corp",
      role: "IT Director",
      content: "Zion Tech Group transformed our entire IT infrastructure. The cloud migration was seamless, and our security posture improved dramatically.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Williams",
      company: "Healthcare Solutions",
      role: "CTO",
      content: "The team's expertise in healthcare compliance and security is outstanding. They helped us achieve HIPAA compliance while modernizing our systems.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "David Chen",
      company: "E-commerce Platform",
      role: "VP Engineering",
      content: "Our mobile app development project exceeded expectations. The team delivered on time and within budget, with excellent ongoing support.",
      rating: 5,
      avatar: "DC"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Server className="w-6 h-6" /> },
    { number: "50+", label: "Technologies", icon: <Settings className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Transform your business with Zion Tech Group's comprehensive IT services. Cloud infrastructure, cybersecurity, web development, and more. Expert solutions for modern enterprises." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network infrastructure, technology consulting" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, and custom development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-it-services.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <SEOOptimizer
          title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
          description="Transform your business with Zion Tech Group's comprehensive IT services. Cloud infrastructure, cybersecurity, web development, and more. Expert solutions for modern enterprises."
          keywords="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network infrastructure, technology consulting, enterprise solutions"
          canonical="https://ziontechgroup.com/it-services"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Server className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Comprehensive IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 animate-pulse">
                {" "}& Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive IT services. From cloud infrastructure 
              to cybersecurity, we provide expert solutions for modern enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Consultation
                <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-green-400 mb-2">{service.price}</div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 2 && (
                        <span className="text-xs text-gray-400">
                          +{service.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We stay current with the latest technologies to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-green-400 mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible IT Service Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the IT support level that matches your business needs. All plans include a free consultation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-green-500/20' 
                    : 'border-white/20 hover:border-green-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === 'Enterprise IT Solutions' ? '/contact' : '/contact'}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-green-500/25'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about working with Zion Tech Group
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of businesses already using our IT services to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Consultation
                <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;