<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Cloud,
  Shield,
  Code,
  Database,
  Users,
  Zap,
  Settings,
} from "lucide-react";

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "Cloud Infrastructure",
      description:
        "Scalable and secure cloud solutions tailored to your business needs.",
      category: "infrastructure",
      icon: Cloud,
      features: [
        "AWS, Azure, GCP expertise",
        "Auto-scaling solutions",
        "Disaster recovery",
        "24/7 monitoring",
      ],
      price: "Starting at $299/month",
    },
    {
      id: 2,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security services to protect your digital assets.",
      category: "security",
      icon: Shield,
      features: [
        "Security audits",
        "Threat monitoring",
        "Incident response",
        "Compliance management",
      ],
      price: "Starting at $399/month",
    },
    {
      id: 3,
      title: "Custom Development",
      description:
        "Bespoke software solutions designed for your specific requirements.",
      category: "development",
      icon: Code,
      features: [
        "Web applications",
        "Mobile apps",
        "API development",
        "System integration",
      ],
      price: "Starting at $199/hour",
    },
    {
      id: 4,
      title: "Database Management",
      description:
        "Optimize and maintain your database infrastructure for peak performance.",
      category: "database",
      icon: Database,
      features: [
        "Performance tuning",
        "Backup strategies",
        "Data migration",
        "Security hardening",
      ],
      price: "Starting at $249/month",
    },
    {
      id: 5,
      title: "IT Support & Maintenance",
      description:
        "Comprehensive IT support to keep your systems running smoothly.",
      category: "support",
      icon: Users,
      features: [
        "24/7 helpdesk",
        "Remote support",
        "System updates",
        "Performance monitoring",
      ],
      price: "Starting at $149/month",
    },
    {
      id: 6,
      title: "DevOps & Automation",
      description:
        "Streamline your development and deployment processes with DevOps practices.",
      category: "devops",
      icon: Zap,
      features: [
        "CI/CD pipelines",
        "Infrastructure as code",
        "Monitoring setup",
        "Automated testing",
      ],
      price: "Starting at $349/month",
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "security", name: "Security" },
    { id: "development", name: "Development" },
    { id: "database", name: "Database" },
    { id: "support", name: "Support" },
    { id: "devops", name: "DevOps" },
  ];

  const filteredServices = services.filter(
    (service) =>
      selectedCategory === "all" || service.category === selectedCategory,
  );
=======
import React from "react";
import { Helmet } from "react-helmet-async";
import { servicesData } from "../data/servicesData";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>IT Services - Zion Tech Group | Technology Solutions</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, custom development, and DevOps solutions. Transform your technology infrastructure."
        />
        <meta
          name="keywords"
          content="IT services, cloud computing, cybersecurity, custom development, DevOps, database management, IT support"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services including cloud infrastructure,
              cybersecurity, custom development, and DevOps solutions. Transform
              your technology infrastructure.
=======
        <title>IT Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation solutions."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, data analytics, mobile development, web development"
        />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          <div className="particles absolute inset-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">IT Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive{" "}
              <span className="text-pink-400 font-semibold">IT solutions</span>{" "}
              to power your digital transformation and business growth
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">
                      {service.price}
                    </span>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
=======
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">IT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT services designed to modernize and secure your
                business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-center"
                        >
                          <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-center"
                        >
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-2xl font-bold text-pink-400">
                        ${service.pricing.basic}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                    <a
                      href={service.contactInfo.website}
                      className="text-pink-400 hover:text-pink-300 text-sm font-semibold"
                    >
                      Learn More →
                    </a>
                  </div>

                  <button className="w-full cyber-button">Get Started</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Technology Stack</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use cutting-edge technologies to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "AWS", icon: "☁️" },
                { name: "Azure", icon: "🔷" },
                { name: "Google Cloud", icon: "🌐" },
                { name: "Docker", icon: "🐳" },
                { name: "Kubernetes", icon: "⚙️" },
                { name: "React", icon: "⚛️" },
                { name: "Node.js", icon: "🟢" },
                { name: "Python", icon: "🐍" },
                { name: "TypeScript", icon: "📘" },
                { name: "MongoDB", icon: "🍃" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "Redis", icon: "🔴" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="glass-dark rounded-lg p-6 text-center hover-lift"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-white font-semibold">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Development Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description:
                    "We analyze your requirements and create a detailed project roadmap",
                  icon: "🔍",
                },
                {
                  step: "02",
                  title: "Design & Architecture",
                  description:
                    "Our team designs the solution architecture and user experience",
                  icon: "🎨",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description:
                    "We build and thoroughly test your solution using agile methodologies",
                  icon: "⚡",
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description:
                    "We deploy your solution and provide ongoing maintenance and support",
                  icon: "🚀",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="glass-dark rounded-lg p-8 text-center hover-lift"
                >
                  <div className="text-6xl mb-4">{process.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-300">{process.description}</p>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help you build a robust and
              scalable technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your IT Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;
