"use client"
import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Database, CheckCircle, ArrowRight } from 'lucide-react'

export default function ITServicesPage() {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed to support your business growth with high availability and security.",
      icon: Cloud,
      features: [
        "AWS/Azure/GCP Setup",
        "Auto-scaling Solutions",
        "Disaster Recovery",
        "24/7 Monitoring"
      ],
      price: "Starting at $2,000/month"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from evolving cyber threats and vulnerabilities.",
      icon: Shield,
      features: [
        "Security Audits",
        "Penetration Testing",
        "Firewall Configuration",
        "Incident Response"
      ],
      price: "Starting at $1,500/month"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with modern DevOps practices and automation tools.",
      icon: Server,
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Performance Optimization"
      ],
      price: "Starting at $3,000/month"
    },
    {
      title: "Data Management",
      description: "Efficient data storage, processing, and analytics solutions to unlock the value in your business data.",
      icon: Database,
      features: [
        "Database Design",
        "Data Migration",
        "Backup Solutions",
        "Analytics Setup"
      ],
      price: "Starting at $2,500/month"
    }
  ]

  const benefits = [
    "Reduce IT costs by up to 35%",
    "Improve system reliability and uptime",
    "Enhance security posture",
    "Accelerate development cycles",
    "Scale infrastructure on demand"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">IT Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions to modernize your infrastructure, 
            enhance security, and accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Solutions
            </button>
          </div>
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
              End-to-end technology services designed to support your business objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
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
              Our expertise and proven methodologies deliver reliable, scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
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
            Let&apos;s discuss how our IT services can optimize your technology stack and drive efficiency.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your IT Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}