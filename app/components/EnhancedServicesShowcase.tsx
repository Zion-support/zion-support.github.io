import React from "react"
import {
  Brain,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { Link } from "react-router-dom"

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ],
      href: "/ai-solutions",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: [
        "Threat Detection",
        "Data Encryption",
        "Security Audits",
        "Compliance Management"
      ],
      href: "/cybersecurity",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Cloud Infrastructure",
      description: "Scalable and reliable cloud solutions to power your business growth.",
      features: [
        "Cloud Migration",
        "Auto-scaling",
        "Disaster Recovery",
        "Cost Optimization"
      ],
      href: "/cloud-infrastructure",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business operations.",
      features: [
        "Process Automation",
        "Legacy System Integration",
        "Digital Strategy",
        "Change Management"
      ],
      href: "/digital-transformation",
      color: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.href}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EnhancedServicesShowcase
