import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Globe, Smartphone, Database, Shield, Zap, ArrowRight, Star, CheckCircle, Monitor } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const WebDevelopmentPage = () => {
  const webServices = [
    {
      title: "Custom Web Applications",
      description: "Build scalable, high-performance web applications tailored to your business needs with modern technologies and best practices.",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["React/Next.js", "Node.js Backend", "Database Design", "API Development"],
      link: "/custom-software"
    },
    {
      title: "E-commerce Solutions",
      description: "Create powerful online stores with advanced features, secure payment processing, and seamless user experience.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Shopping Cart", "Payment Integration", "Inventory Management", "Order Tracking"],
      link: "/ecommerce-solutions"
    },
    {
      title: "Mobile-First Websites",
      description: "Responsive web design that looks and works perfectly on all devices, from mobile phones to desktop computers.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Responsive Design", "Mobile Optimization", "Touch-Friendly UI", "Fast Loading"],
      link: "/mobile-development"
    },
    {
      title: "Database Solutions",
      description: "Design and implement robust database systems that can handle your data requirements and scale with your business.",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Database Design", "Data Migration", "Performance Optimization", "Backup Solutions"],
      link: "/database-management"
    },
    {
      title: "Security Implementation",
      description: "Secure your web applications with industry-standard security measures and best practices to protect your data.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: ["SSL Certificates", "Data Encryption", "Security Audits", "Vulnerability Testing"],
      link: "/cybersecurity-solutions"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your website for speed, SEO, and user experience to maximize conversions and search engine rankings.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["Speed Optimization", "SEO Enhancement", "Core Web Vitals", "Analytics Integration"],
      link: "/performance-optimization"
    }
  ];

  const technologies = [
    { name: "React/Next.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "🔷" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "GraphQL", icon: "🔺" }
  ];

  const stats = [
    { number: "200+", label: "Websites Built", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "50%", label: "Faster Load Times", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Monitor className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development Services - Zion Tech Group | Custom Web Solutions"
        description="Professional web development services including custom web applications, e-commerce solutions, mobile-first websites, and performance optimization."
        keywords="web development, custom web applications, e-commerce development, responsive design, web programming, frontend development, backend development"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Code className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Professional Web Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Web Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create powerful, scalable, and secure web applications that drive your business forward. 
            From concept to deployment, we deliver exceptional web solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Portfolio
              <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive web development solutions designed to meet your business needs 
              and deliver exceptional user experiences across all platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:translate-x-1 transform"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build modern, 
              scalable, and maintainable web applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {tech.name}
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
            Ready to Build Your Web Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project requirements and create a web solution that drives your business forward. 
            Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Portfolio
              <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;