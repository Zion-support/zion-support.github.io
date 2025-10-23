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

  return (
    <>
      <Helmet>
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
