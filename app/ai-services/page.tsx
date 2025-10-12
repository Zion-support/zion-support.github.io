import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, Brain, Bot, BarChart, Zap } from "lucide-react"

const AIServicesPage = () => {
  const services = [
    {
      title: "Machine Learning",
      description: "Custom ML models tailored to your business needs",
      icon: <Brain className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Chatbots",
      description: "Intelligent conversational agents for customer service",
      icon: <Bot className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights for better decision making",
      icon: <BarChart className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation",
      icon: <Zap className="h-8 w-8" />,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions for modern businesses." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">AI Services</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business and drive innovation.
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

export default AIServicesPage
