"use client"
import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Zap, Layers, Smartphone, Globe, CheckCircle, ArrowRight } from 'lucide-react'

export default function MicroSaasPage() {
  const services = [
    {
      title: "SaaS Development",
      description: "Custom software-as-a-service solutions built for rapid deployment and scalable growth.",
      icon: Zap,
      features: [
        "Custom Web Applications",
        "User Management Systems",
        "Payment Integration",
        "API Development"
      ],
      price: "Starting at $10,000"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      icon: Smartphone,
      features: [
        "iOS & Android Apps",
        "Cross-platform Solutions",
        "Push Notifications",
        "Offline Capabilities"
      ],
      price: "Starting at $15,000"
    },
    {
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs to extend your application's capabilities.",
      icon: Layers,
      features: [
        "Third-party Integrations",
        "Custom API Development",
        "Data Synchronization",
        "Webhook Implementation"
      ],
      price: "Starting at $5,000"
    },
    {
      title: "Web Platforms",
      description: "Modern web platforms with responsive design and advanced functionality for your business needs.",
      icon: Globe,
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "Real-time Features",
        "SEO Optimization"
      ],
      price: "Starting at $8,000"
    }
  ]

  const benefits = [
    "Rapid time-to-market",
    "Scalable architecture",
    "Cost-effective solutions",
    "Ongoing maintenance and support",
    "Modern technology stack"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Micro SaaS</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Scalable software solutions designed for rapid deployment and growth. 
            Perfect for startups and enterprises looking to digitize their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom software solutions built with modern technologies and best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-purple-600 mb-4">{service.price}</div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
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
              Why Choose Our SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our development approach focuses on quality, scalability, and user experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
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
            Ready to Build Your SaaS Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}