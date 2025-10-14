import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CodeBracketIcon, GlobeAltIcon, DevicePhoneMobileIcon, ShoppingCartIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import FuturisticBackground from "../components/FuturisticBackground";

const WebDevelopmentPage = () => {
  const services = [
    {
      icon: <CodeBracketIcon className="w-12 h-12 text-cyan-400" />,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with the latest technologies and best practices.",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Performance Optimization"]
    },
    {
      icon: <GlobeAltIcon className="w-12 h-12 text-cyan-400" />,
      title: "Backend Development",
      description: "Robust server-side applications and APIs that power your web applications.",
      features: ["Node.js & Express", "Python & Django", "Database Design", "API Development", "Cloud Integration"]
    },
    {
      icon: <DevicePhoneMobileIcon className="w-12 h-12 text-cyan-400" />,
      title: "Mobile-First Design",
      description: "Responsive web applications optimized for all devices and screen sizes.",
      features: ["Mobile Optimization", "Touch Interactions", "Progressive Web Apps", "Cross-Browser Compatibility"]
    },
    {
      icon: <ShoppingCartIcon className="w-12 h-12 text-cyan-400" />,
      title: "E-commerce Solutions",
      description: "Complete online store solutions with payment processing and inventory management.",
      features: ["Online Store Setup", "Payment Integration", "Inventory Management", "Order Processing", "Customer Management"]
    },
    {
      icon: <ChartBarIcon className="w-12 h-12 text-cyan-400" />,
      title: "Performance Optimization",
      description: "Fast, efficient web applications with optimal loading times and user experience.",
      features: ["Speed Optimization", "SEO Optimization", "Analytics Integration", "Performance Monitoring"]
    }
  ];

  const technologies = [
    "React & Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", 
    "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs", "Tailwind CSS"
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "50%", label: "Faster Load Times" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development Services - Zion Tech Group | Professional Web Solutions</title>
        <meta name="description" content="Professional web development services including frontend, backend, full-stack, e-commerce, and performance optimization. Build modern, scalable web applications." />
        <meta name="keywords" content="web development, frontend development, backend development, full-stack, e-commerce, web applications" />
        <meta property="og:title" content="Web Development Services - Zion Tech Group" />
        <meta property="og:description" content="Professional web development services for modern businesses." />
        <meta property="og:type" content="website" />
      </Helmet>

      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build modern, scalable web applications that drive business growth. 
            From frontend interfaces to backend systems, we create digital solutions that work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to build modern, efficient web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experienced developers bring your vision to life with cutting-edge web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;