import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cloud, Shield, Zap, Database, Server, Globe } from "lucide-react";

export default function CloudServices() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime.",
      features: ["AWS Migration", "Azure Migration", "GCP Migration", "Hybrid Cloud"]
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure.",
      features: ["Identity Management", "Data Encryption", "Compliance", "Threat Detection"]
    },
    {
      icon: Zap,
      title: "Cloud Optimization",
      description: "Optimize your cloud costs and performance for maximum efficiency.",
      features: ["Cost Optimization", "Performance Tuning", "Auto-scaling", "Monitoring"]
    },
    {
      icon: Database,
      title: "Database Services",
      description: "Managed database solutions for all your data needs.",
      features: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automate your infrastructure deployment and management.",
      features: ["Terraform", "Ansible", "Docker", "Kubernetes"]
    },
    {
      icon: Globe,
      title: "Multi-Cloud Strategy",
      description: "Leverage multiple cloud providers for optimal performance and reliability.",
      features: ["Multi-Cloud Setup", "Load Balancing", "Disaster Recovery", "Global Deployment"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, security, optimization, and management services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to optimization, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide end-to-end cloud services to help your business scale and thrive in the digital age.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you migrate, secure, and optimize your cloud environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}