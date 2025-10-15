import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Globe, Zap, CheckCircle, ArrowRight, Clock, Target, Users, Settings, BarChart3, Database, Server, Wifi, Lock, RefreshCw, AlertTriangle, TrendingUp, Building, Home, Car, Heart, Briefcase, Calendar, Bell, Eye, Search, Filter, Download, Upload, Share2, Edit, Trash2, Plus, Minus, X, Check } from 'lucide-react';

const WebApplicationDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Applications",
      description: "Tailored web applications built with modern technologies and best practices",
      features: ["React/Next.js", "TypeScript", "Responsive design", "API integration", "Database design", "Performance optimization"],
      price: "Starting at $5,000"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment processing and inventory management",
      features: ["Shopping cart", "Payment gateway", "Inventory management", "Order tracking", "Admin dashboard", "Mobile responsive"],
      price: "Starting at $8,000"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Progressive Web Apps",
      description: "Web applications that work like native apps with offline capabilities",
      features: ["Service workers", "Offline functionality", "Push notifications", "App-like experience", "Cross-platform", "Easy deployment"],
      price: "Starting at $6,000"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database-Driven Applications",
      description: "Complex web applications with robust database architecture and data management",
      features: ["Database design", "Data modeling", "Query optimization", "Data security", "Backup systems", "Scalability"],
      price: "Starting at $7,000"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs for web and mobile applications",
      features: ["RESTful APIs", "GraphQL", "Authentication", "Rate limiting", "Documentation", "Testing"],
      price: "Starting at $3,000"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Web applications with comprehensive analytics and reporting capabilities",
      features: ["Real-time analytics", "Custom dashboards", "Data visualization", "Export functionality", "Scheduled reports", "User insights"],
      price: "Starting at $4,000"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Understand your business needs and technical requirements"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Create wireframes, mockups, and technical architecture"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your application with rigorous testing at every stage"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Deploy to production and provide ongoing maintenance"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Development",
      description: "Rapid development with modern frameworks and tools"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "User-Focused Design",
      description: "Intuitive user interfaces designed for optimal user experience"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Scalable",
      description: "Built with security and scalability as top priorities"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Optimized for speed, SEO, and search engine visibility"
    }
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "TypeScript", 
    "MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes"
  ];

  return (
    <>
      <Helmet>
        <title>Web Application Development - Zion Tech Group | Custom Web Apps, E-commerce, PWA</title>
        <meta name="description" content="Expert web application development services. Custom web apps, e-commerce solutions, PWAs, and database-driven applications built with modern technologies." />
        <meta name="keywords" content="web application development, custom web apps, e-commerce, progressive web apps, react, next.js, web development" />
        <meta property="og:title" content="Web Application Development - Zion Tech Group" />
        <meta property="og:description" content="Expert web application development for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Web Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Development</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Expert web application development services. Custom web apps, e-commerce solutions, 
                and progressive web applications built with modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Web Development Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web application development solutions for all business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful web application development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use the latest technologies and frameworks to build cutting-edge web applications
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Web Development?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with us for exceptional web application development services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Web Application?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let's bring your web application idea to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebApplicationDevelopmentPage;
