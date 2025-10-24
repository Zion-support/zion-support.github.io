"use client"
import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Zap, Target, Layers, Rocket, CheckCircle, ArrowRight } from 'lucide-react'

export default function MicroSaasPage() {
  const services = [
    {
      title: "SaaS Development",
      description: "Custom software-as-a-service solutions built for scalability, performance, and user experience.",
      icon: Zap,
      features: [
        "Custom SaaS Applications",
        "Multi-tenant Architecture",
        "API Development",
        "User Management Systems"
      ]
    },
    {
      title: "Rapid Prototyping",
      description: "Quick MVP development to validate your ideas and get to market faster with minimal investment.",
      icon: Target,
      features: [
        "MVP Development",
        "User Testing",
        "Iterative Design",
        "Market Validation"
      ]
    },
    {
      title: "Scalable Architecture",
      description: "Cloud-native solutions designed to grow with your business from startup to enterprise scale.",
      icon: Layers,
      features: [
        "Microservices Architecture",
        "Auto-scaling Solutions",
        "Load Balancing",
        "Performance Optimization"
      ]
    },
    {
      title: "Deployment & Support",
      description: "Complete deployment services with ongoing maintenance and support to keep your SaaS running smoothly.",
      icon: Rocket,
      features: [
        "Cloud Deployment",
        "CI/CD Pipeline",
        "Monitoring & Analytics",
        "24/7 Support"
      ]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Ideation & Planning",
      description: "We work with you to define your SaaS vision and create a comprehensive development plan."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our team creates wireframes, mockups, and interactive prototypes to visualize your solution."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your SaaS application using modern technologies and rigorous testing practices."
    },
    {
      step: "04",
      title: "Launch & Scale",
      description: "We deploy your solution and provide ongoing support as you scale your business."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Micro SaaS</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build, launch, and scale your software-as-a-service solution with our expert development team. 
            From MVP to enterprise, we've got you covered.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your SaaS Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
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
              End-to-end SaaS development services designed to bring your ideas to life.
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering successful SaaS solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
            Let's turn your SaaS idea into a successful business with our expert development team.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Building Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
