import React from 'react'
import SEO from '../components/seo/SEO'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ServiceCard from '../components/cards/ServiceCard'
import Button from '../components/ui/Button'

export default function Services() {
  const services = [
    {
      category: "AI & Machine Learning",
      icon: "🧠",
      description: "Advanced artificial intelligence solutions to automate and optimize your business processes",
      services: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
        "Deep Learning Solutions"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Cloud Infrastructure",
      icon: "☁️",
      description: "Scalable and secure cloud solutions for modern businesses",
      services: [
        "AWS/Azure/GCP Migration",
        "Cloud Architecture Design",
        "Container Orchestration",
        "Serverless Solutions",
        "Cloud Security & Compliance",
        "Cost Optimization"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Cybersecurity",
      icon: "🔒",
      description: "Comprehensive security solutions to protect your digital assets",
      services: [
        "Security Assessment & Auditing",
        "Penetration Testing",
        "Identity & Access Management",
        "Threat Detection & Response",
        "Compliance Management",
        "Security Training"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      category: "DevOps & Automation",
      icon: "⚡",
      description: "Streamlined development and deployment processes for faster delivery",
      services: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Observability",
        "Release Management",
        "Performance Optimization",
        "Disaster Recovery"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Data Analytics",
      icon: "📊",
      description: "Transform your data into actionable business insights",
      services: [
        "Data Warehousing",
        "Business Intelligence",
        "Real-time Analytics",
        "Data Visualization",
        "ETL/ELT Processes",
        "Data Governance"
      ],
      color: "from-yellow-500 to-amber-500"
    },
    {
      category: "Technology Consulting",
      icon: "💡",
      description: "Strategic technology guidance to drive your business forward",
      services: [
        "Technology Roadmapping",
        "Digital Transformation",
        "Architecture Review",
        "Technology Selection",
        "Process Optimization",
        "Change Management"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Our Services"
        description="Comprehensive IT and AI services including cloud infrastructure, cybersecurity, DevOps, data analytics, and technology consulting."
        url="https://ziontechgroup.com/services"
      />

      <Header />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
                <p className="text-gray-300">We analyze your current systems and identify opportunities for improvement.</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3>
                <p className="text-gray-300">We develop a comprehensive roadmap tailored to your business goals.</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Our expert team executes the solution with minimal disruption to your operations.</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">We continuously monitor and optimize your systems for peak performance.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss your specific needs and how our services can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  Get a Quote
                </Button>
                <Button href="/about" variant="secondary">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

