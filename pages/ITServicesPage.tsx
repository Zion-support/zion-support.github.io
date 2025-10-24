"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Cloud, Shield, Server, Database, CheckCircle, ArrowRight, Star } from "lucide-react";

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const services = [
    {
      id: "cloud-infrastructure-management",
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance",
      price: "$199/month",
      category: "Infrastructure",
      features: [
        "Auto-scaling Infrastructure",
        "99.9% Uptime Guarantee",
        "24/7 Monitoring",
        "Security Compliance",
        "Backup & Recovery",
        "Cost Optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 30%",
        "Improve system reliability",
        "Scale automatically with demand",
        "Enhance security posture"
      ]
    },
    {
      id: "devops-automation-platform",
      name: "DevOps Automation Platform",
      description: "Complete CI/CD pipeline automation with monitoring, testing, and deployment management",
      price: "$349/month",
      category: "DevOps",
      features: [
        "CI/CD Pipeline Automation",
        "Automated Testing",
        "Deployment Management",
        "Infrastructure as Code",
        "Monitoring & Alerting",
        "Version Control Integration"
      ],
      benefits: [
        "Deploy 10x faster",
        "Reduce deployment errors by 90%",
        "Improve team productivity",
        "Streamline development workflow"
      ]
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure Services",
      description: "Comprehensive network design, implementation, and management for enterprise environments",
      price: "$229/month",
      category: "Networking",
      features: [
        "Network Design & Planning",
        "Security Implementation",
        "Performance Optimization",
        "24/7 Network Monitoring",
        "Disaster Recovery",
        "Compliance Management"
      ],
      benefits: [
        "Improve network performance by 40%",
        "Reduce downtime by 95%",
        "Enhance security posture",
        "Lower operational costs"
      ]
    },
    {
      id: "cybersecurity-suite",
      name: "Cybersecurity Suite",
      description: "Advanced security solutions including threat detection, vulnerability assessment, and incident response",
      price: "$499/month",
      category: "Security",
      features: [
        "Threat Detection & Response",
        "Vulnerability Assessment",
        "Security Monitoring",
        "Incident Response",
        "Compliance Auditing",
        "Security Training"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 80%",
        "Ensure compliance standards",
        "Minimize business risk"
      ]
    },
    {
      id: "data-management-solutions",
      name: "Data Management Solutions",
      description: "Comprehensive data storage, backup, and analytics solutions for modern businesses",
      price: "$179/month",
      category: "Data",
      features: [
        "Data Storage & Backup",
        "Real-time Analytics",
        "Data Integration",
        "Business Intelligence",
        "Data Governance",
        "Compliance Management"
      ],
      benefits: [
        "Improve data accessibility by 60%",
        "Reduce data loss risk",
        "Enable better decision making",
        "Ensure data compliance"
      ]
    },
    {
      id: "it-consulting",
      name: "IT Consulting Services",
      description: "Strategic IT consulting to help businesses optimize their technology infrastructure and processes",
      price: "$299/hour",
      category: "Consulting",
      features: [
        "Technology Strategy",
        "Infrastructure Assessment",
        "Digital Transformation",
        "Process Optimization",
        "Technology Selection",
        "Implementation Planning"
      ],
      benefits: [
        "Align IT with business goals",
        "Optimize technology investments",
        "Improve operational efficiency",
        "Reduce technology risks"
      ]
    }
  ];

  const categories = ["All", "Infrastructure", "Security", "DevOps", "Networking", "Data", "Consulting"];

  const stats = [
    { number: "500+", label: "Infrastructure Projects" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "4.8/5", label: "Client Rating" }
  ];

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps automation, and network management solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-emerald-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <span className="text-emerald-400 font-bold">{service.price}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <Star className="h-4 w-4 text-yellow-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create robust, scalable, and secure technology solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;