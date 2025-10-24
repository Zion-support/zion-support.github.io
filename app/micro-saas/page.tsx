"use client"
import React from "react"
import { Zap, Layers, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
const MicroSaasPage: React.FC = () => {
  const services = [
  {
      icon: Zap,
      title: "Rapid Development",
      description: "Get your SaaS product to market in weeks, not months",
      features: [
        "MVP Development",
        "Rapid Prototyping",
        "Agile Methodology",
    "Quick Iterations"
    ],
    price: "Starting at $8,000"
  },
    {
  icon: Layers,
    title: "Scalable Architecture",
      description: "Built to grow with your business from day one",
    features: [
      "Microservices Design",
      "Cloud-Native Solutions",
      "Auto-Scaling",
      "Load Balancing"
    ],
    price: "Starting at $12,000"
  },
    {
  icon: Users,
    title: "User Management",
      description: "Complete user authentication and management system",
    features: [
      "Multi-Tenant Support",
      "Role-Based Access",
      "SSO Integration",
      "User Analytics"
    ],
    price: "Starting at $6,000"
  },
    {
  icon: TrendingUp,
    title: "Analytics & Insights",
      description: "Comprehensive analytics to drive growth",
    features: [
      "Usage Analytics",
      "Performance Metrics",
      "Business Intelligence",
      "Custom Dashboards"
    ],
    price: "Starting at $4,000"
  }
  ]
  const platforms = [
    "Web Applications",
    "Mobile Apps (iOS/Android)",
    "Desktop Applications",
    "API-First Solutions",
    "Progressive Web Apps",
    "Chrome Extensions"
  ]
  const techStack = [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "Go",
    "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes",
    "Stripe", "Auth0", "SendGrid", "Twilio", "WebSocket", "GraphQL"
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">SaaS</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build, launch, and scale your software-as-a-service product with our comprehensive development and growth services.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Start Your SaaS
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Examples
            </button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our SaaS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end SaaS development and growth services to help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-emerald-600 font-semibold mb-4">{service.price}</div>
                <button className="w-full bg-emerald-600 hover: bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Platforms Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Platforms We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create SaaS solutions across multiple platforms to reach your target audience.
            </p>
          </div>
          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover: shadow-lg transition-shadow duration-300">
                <span className="text-gray-700 font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use proven technologies to build robust, scalable, and maintainable SaaS applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md: grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover: shadow-lg transition-shadow duration-300">
                <span className="text-gray-700 font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our SaaS Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for building successful SaaS products.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery & Planning</h3>
              <p className="text-gray-600">We analyze your market, define your MVP, and create a detailed roadmap for your SaaS product.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design & Development</h3>
              <p className="text-gray-600">We design the user experience and develop your SaaS application using modern technologies and best practices.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Testing & Launch</h3>
              <p className="text-gray-600">We thoroughly test your application and help you launch it to market with a solid go-to-market strategy.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth & Optimization</h3>
              <p className="text-gray-600">We help you scale your SaaS product, optimize performance, and implement growth strategies.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                5
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600">We provide ongoing maintenance, updates, and support to ensure your SaaS product continues to thrive.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                6
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scaling & Expansion</h3>
              <p className="text-gray-600">We help you scale your infrastructure and expand your product features as your business grows.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Your SaaS Product?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s turn your SaaS idea into a successful, scalable business.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/ai-services"
              className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore AI Integration
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default MicroSaasPage