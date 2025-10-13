import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Database, Shield, Zap, Users, BarChart3, Cloud, Settings } from 'lucide-react';

const SoftwareDevelopmentPage = () => {
  const services = [
    {
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      icon: <Globe className="w-8 h-8" />,
      features: ["React/Next.js", "Node.js/Express", "Responsive design", "SEO optimization"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["React Native", "Flutter", "Native iOS/Android", "App store optimization"]
    },
    {
      title: "Backend Development",
      description: "Scalable server-side applications and APIs for robust performance",
      icon: <Database className="w-8 h-8" />,
      features: ["RESTful APIs", "GraphQL", "Microservices", "Database design"]
    },
    {
      title: "Cloud-Native Solutions",
      description: "Applications designed for cloud platforms with scalability and reliability",
      icon: <Cloud className="w-8 h-8" />,
      features: ["AWS/Azure/GCP", "Serverless architecture", "Containerization", "Auto-scaling"]
    },
    {
      title: "Enterprise Software",
      description: "Custom enterprise solutions tailored to your business requirements",
      icon: <Settings className="w-8 h-8" />,
      features: ["Custom workflows", "Integration APIs", "Security compliance", "Scalability"]
    },
    {
      title: "E-commerce Platforms",
      description: "Full-featured e-commerce solutions with payment processing and inventory management",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Payment integration", "Inventory management", "Order processing", "Analytics"]
    }
  ];

  const technologies = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js/Express", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS/Azure", category: "Cloud" },
    { name: "Docker/Kubernetes", category: "DevOps" },
    { name: "GraphQL", category: "API" },
    { name: "React Native", category: "Mobile" }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap"
    },
    {
      step: "2", 
      title: "Design & Architecture",
      description: "Our team designs the user experience and technical architecture"
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance"
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Launch your application and provide ongoing maintenance and support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Software Development Services - Zion Tech Group | Custom Web & Mobile Apps</title>
        <meta name="description" content="Professional software development services including web applications, mobile apps, backend systems, and enterprise solutions. Built with modern technologies." />
        <meta name="keywords" content="software development, web development, mobile app development, custom software, enterprise solutions, React, Node.js" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Software Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your ideas into powerful software solutions. From web applications to mobile apps, 
            we build custom software that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                <p className="text-cyan-400 text-sm">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures quality, efficiency, and successful project delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Software Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experienced development team bring your vision to life with cutting-edge technology and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;