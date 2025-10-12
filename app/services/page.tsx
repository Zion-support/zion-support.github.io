import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, Brain, Shield, Zap, Globe } from "lucide-react"

const ServicesPage = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Shield className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="h-8 w-8" />,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI and IT services designed to transform your business." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive AI and IT services designed to transform your business and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 text-center mb-6">{service.description}</p>
                <Link
                  to="/contact"
                  className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesPage
