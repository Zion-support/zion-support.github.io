import React from "react";"
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code, Globe, Smartphone, ShoppingCart, Zap } from "lucide-react";

const WebDevelopmentPage = () => {
  const webServices = [
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with React, Vue, and Angular",
      icon: <Code className="w-8 h-8" />,
      price: "$1,500/month",
      features: ["React Development", "Vue.js Applications", "Angular Projects", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      description: "Scalable server-side applications and APIs using Node.js, Python, and more",
      icon: <Zap className="w-8 h-8" />,
      price: "$2,000/month",
      features: ["Node.js APIs", "Python Backends", "Database Design", "API Development"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Full-Stack Development",
      description: "Complete web applications from frontend to backend with database integration",
      icon: <Globe className="w-8 h-8" />,
      price: "$3,000/month",
      features: ["End-to-End Development", "Database Integration", "Deployment", "Maintenance"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Solutions",
      description: "Custom e-commerce platforms with payment integration and inventory management",
      icon: <ShoppingCart className="w-8 h-8" />,
      price: "$2,500/month",
      features: ["Online Store", "Payment Gateway", "Inventory Management", "Order Processing"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile-First Design",
      description: "Responsive web applications optimized for mobile devices and tablets",
      icon: <Smartphone className="w-8 h-8" />,
      price: "$1,200/month",
      features: ["Mobile Optimization", "Touch Interfaces", "Progressive Web Apps", "Cross-Platform"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Performance Optimization",
      description: "Speed optimization and SEO improvements for better user experience",
      icon: <Zap className="w-8 h-8" />,
      price: "$800/month",
      features: ["Speed Optimization", "SEO Enhancement", "Image Optimization", "Caching"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const technologies = [
    "React", "Vue.js", "Angular", "Node.js", "Python", "TypeScript", "Next.js", "Express.js",
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional web development services including frontend, backend, full-stack, e-commerce, and performance optimization. Build modern, scalable web applications." />
        <meta name="keywords" content="web development, frontend development, backend development, full-stack, e-commerce, web applications" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Web Development
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Modern, Scalable Web Applications
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Build powerful, responsive web applications with our expert development team. 
            From simple websites to complex enterprise applications, we deliver solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <Link to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-slate-800/50 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-slate-800/70 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert developers bring your vision to life with cutting-edge web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
