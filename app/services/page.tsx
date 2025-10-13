import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Star, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Users, 
  Zap, 
  Award, 
  Sparkles, 
  Mail, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Settings, 
  Monitor, 
  Lock, 
  BarChart3, 
  Target, 
  Brain, 
  Server, 
  Wifi, 
  HardDrive, 
  Cpu, 
  Network, 
  FileText, 
  Key, 
  Activity,
  Phone,
  MessageCircle,
  Headphones
} from "lucide-react";

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: "ai-services",
      name: "AI Services",
      description: "Cutting-edge artificial intelligence solutions to transform your business",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "AI Business Intelligence",
          description: "Transform data into actionable insights with AI-powered analytics",
          price: "From $199/month",
          features: ["Real-time dashboards", "Predictive analytics", "Automated reporting", "Custom metrics"],
          link: "/ai-business-intelligence-pro"
        },
        {
          name: "AI Customer Support",
          description: "24/7 intelligent customer service with natural language processing",
          price: "From $149/month",
          features: ["Multi-language support", "Sentiment analysis", "Automated responses", "Human handoff"],
          link: "/ai-customer-support-chatbot"
        },
        {
          name: "AI Content Generation",
          description: "Create engaging content at scale with AI assistance",
          price: "From $99/month",
          features: ["Multi-format content", "Brand voice training", "SEO optimization", "Content calendar"],
          link: "/ai-content-generation-pro"
        },
        {
          name: "AI Cybersecurity",
          description: "Advanced threat detection and automated security response",
          price: "From $299/month",
          features: ["Real-time monitoring", "Threat intelligence", "Automated response", "Compliance reporting"],
          link: "/ai-cybersecurity-suite-pro"
        }
      ]
    },
    {
      id: "it-services",
      name: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Cloud Infrastructure",
          description: "Scalable cloud solutions with 99.9% uptime guarantee",
          price: "From $299/month",
          features: ["AWS/Azure/GCP", "Auto-scaling", "Disaster recovery", "24/7 monitoring"],
          link: "/cloud-infrastructure"
        },
        {
          name: "Cybersecurity Solutions",
          description: "Comprehensive security protection for your digital assets",
          price: "From $199/month",
          features: ["Firewall management", "Vulnerability scanning", "Incident response", "Compliance support"],
          link: "/cybersecurity-solutions"
        },
        {
          name: "Web Development",
          description: "Custom web applications and responsive websites",
          price: "From $2,999/project",
          features: ["Responsive design", "SEO optimization", "Performance tuning", "Maintenance support"],
          link: "/web-development"
        },
        {
          name: "Mobile Development",
          description: "Native and cross-platform mobile applications",
          price: "From $4,999/project",
          features: ["iOS & Android", "Cross-platform", "App store optimization", "Push notifications"],
          link: "/mobile-development"
        },
        {
          name: "Database Management",
          description: "Optimized database design and management services",
          price: "From $149/month",
          features: ["Performance tuning", "Backup & recovery", "Security hardening", "Migration support"],
          link: "/database-management"
        },
        {
          name: "Custom Software",
          description: "Tailored software solutions for unique business needs",
          price: "From $5,999/project",
          features: ["Requirements analysis", "Custom development", "Testing & QA", "Deployment support"],
          link: "/custom-software"
        }
      ]
    },
    {
      id: "micro-saas",
      name: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Zion Analytics Pro",
          description: "AI-powered business intelligence platform",
          price: "From $29/month",
          features: ["Real-time dashboards", "Predictive analytics", "Automated reports", "Multi-source integration"],
          link: "/zion-analytics-pro"
        },
        {
          name: "Zion Security Shield",
          description: "Advanced cybersecurity protection suite",
          price: "From $49/month",
          features: ["AI threat detection", "24/7 monitoring", "Automated response", "Compliance reporting"],
          link: "/zion-security-shield"
        },
        {
          name: "Zion Cloud Vault",
          description: "Secure cloud storage and collaboration platform",
          price: "From $9/month",
          features: ["End-to-end encryption", "Real-time collaboration", "AI organization", "Version control"],
          link: "/zion-cloud-vault"
        },
        {
          name: "Zion Content Studio",
          description: "AI-powered content creation and management",
          price: "From $19/month",
          features: ["AI content generation", "Multi-format support", "Brand customization", "Performance analytics"],
          link: "/zion-content-studio"
        }
      ]
    },
    {
      id: "5g-solutions",
      name: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "5G Network Infrastructure",
          description: "Complete 5G network design and implementation",
          price: "From $50,000/project",
          features: ["Network planning", "Equipment installation", "Performance optimization", "Maintenance support"],
          link: "/5g-network-infrastructure"
        },
        {
          name: "5G IoT Solutions",
          description: "Internet of Things solutions powered by 5G connectivity",
          price: "From $15,000/project",
          features: ["Device integration", "Data analytics", "Real-time monitoring", "Scalable architecture"],
          link: "/5g-iot-solutions"
        },
        {
          name: "5G Smart City Solutions",
          description: "Smart city infrastructure and management systems",
          price: "From $100,000/project",
          features: ["Traffic management", "Environmental monitoring", "Public safety", "Citizen services"],
          link: "/5g-smart-city-solutions"
        },
        {
          name: "5G Edge Computing",
          description: "Distributed computing solutions for ultra-low latency",
          price: "From $25,000/project",
          features: ["Edge deployment", "Latency optimization", "Data processing", "Cloud integration"],
          link: "/5g-edge-computing"
        }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Expertise",
      description: "15+ years of experience in cutting-edge technology solutions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with compliance certifications"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Results",
      description: "98% client satisfaction rate with measurable ROI"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We analyze your business needs and challenges to understand your requirements."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a customized solution strategy tailored to your specific goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our expert team implements the solution with minimal disruption to your operations."
    },
    {
      step: "04",
      title: "Support",
      description: "We provide ongoing support, monitoring, and optimization to ensure success."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our entire technology infrastructure. Their AI solutions increased our productivity by 60% in just 3 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services & Solutions - Zion Tech Group | AI, Cloud, Cybersecurity & More</title>
        <meta
          name="description"
          content="Comprehensive IT services including AI solutions, cloud infrastructure, cybersecurity, web development, and micro SAAS. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="IT services, AI solutions, cloud infrastructure, cybersecurity, web development, mobile development, database management, custom software, micro saas, 5G solutions"
        />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Comprehensive Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of technology services. 
              From AI-powered solutions to cloud infrastructure, we have everything you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results with cutting-edge technology and unmatched expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.id} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <div className="text-white">{category.icon}</div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                    >
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Link
                          to={service.link}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          to="/contact"
                          className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach to ensure successful project delivery and client satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
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
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about working with Zion Tech Group
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
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;