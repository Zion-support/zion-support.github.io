import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Code, 
  Globe, 
  Smartphone, 
  Monitor, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Layers
} from "lucide-react";

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      name: "Custom Web Applications",
      description: "Build powerful, scalable web applications tailored to your business needs",
      icon: Code,
      features: ["React/Next.js", "Node.js backend", "Database integration", "API development"],
      price: "From $5,000"
    },
    {
      name: "E-commerce Solutions",
      description: "Create stunning online stores with advanced shopping cart and payment integration",
      icon: Globe,
      features: ["Payment processing", "Inventory management", "Order tracking", "Mobile responsive"],
      price: "From $8,000"
    },
    {
      name: "Progressive Web Apps",
      description: "Build fast, reliable web apps that work offline and feel native",
      icon: Smartphone,
      features: ["Offline functionality", "Push notifications", "App-like experience", "Cross-platform"],
      price: "From $6,000"
    },
    {
      name: "CMS Development",
      description: "Custom content management systems for easy website updates and maintenance",
      icon: Layers,
      features: ["Admin dashboard", "Content editing", "User management", "SEO optimization"],
      price: "From $4,000"
    }
  ];

  const technologies = [
    { name: "React", description: "Modern UI library for building interactive interfaces" },
    { name: "Next.js", description: "Full-stack React framework for production-ready apps" },
    { name: "Node.js", description: "Server-side JavaScript for scalable backend development" },
    { name: "TypeScript", description: "Type-safe JavaScript for better code quality" },
    { name: "MongoDB", description: "NoSQL database for flexible data storage" },
    { name: "PostgreSQL", description: "Reliable relational database for complex applications" }
  ];

  const benefits = [
    "Responsive design for all devices",
    "SEO optimized for better search rankings",
    "Fast loading times and performance",
    "Secure and scalable architecture",
    "Modern UI/UX design",
    "Ongoing maintenance and support"
  ];

  return (
    <>
      <Helmet>
        <title>Web Development | Zion Tech Group - Custom Web Solutions</title>
        <meta 
          name="description" 
          content="Professional web development services including custom web applications, e-commerce solutions, and progressive web apps built with modern technologies." 
        />
        <meta 
          name="keywords" 
          content="web development, custom web apps, e-commerce, progressive web apps, React, Next.js, web design" 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-cyan-500/10 rounded-2xl">
                <Code className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build powerful, scalable web applications with our expert development team. 
              From custom web apps to e-commerce solutions, we create digital experiences that drive results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors duration-200"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Web Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive web development solutions tailored to your business requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webServices.map((service, index) => (
                <div
                  key={service.name}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-200">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Modern, proven technologies for building robust and scalable web applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Web Development?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver high-quality web solutions that drive business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Web Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create a custom web solution that meets your business goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDevelopmentPage;
