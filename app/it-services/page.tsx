"use client"
import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Database, CheckCircle, ArrowRight } from 'lucide-react'

export default function ITServicesPage() {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed to support your business growth with high availability and performance.",
      icon: Cloud,
      features: [
        "AWS/Azure/GCP Migration",
        "Container Orchestration",
        "Auto-scaling Solutions",
        "Disaster Recovery"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      icon: Shield,
      features: [
        "Security Audits",
        "Threat Detection",
        "Compliance Management",
        "Incident Response"
      ]
    },
    {
      title: "DevOps & Automation",
      description: "Streamlined development and deployment processes with continuous integration and delivery pipelines.",
      icon: Server,
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Performance Optimization"
      ]
    },
    {
      title: "Data Management",
      description: "Robust data solutions for storage, processing, and analytics to drive informed business decisions.",
      icon: Database,
      features: [
        "Database Design",
        "Data Migration",
        "Backup & Recovery",
        "Data Analytics"
      ]
    }
  ]

  const benefits = [
    "24/7 Technical Support",
    "Scalable Infrastructure",
    "Enhanced Security",
    "Reduced Downtime",
    "Cost Optimization",
    "Compliance Assurance"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">IT Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to modernize your infrastructure, enhance security, 
            and optimize performance for sustainable business growth.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end IT services designed to keep your business running smoothly and securely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver reliable, secure, and scalable IT solutions that drive business success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our IT services can optimize your technology stack.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your IT Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}