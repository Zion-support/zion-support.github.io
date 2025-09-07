import { Star } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
export default function MicroSAAS() {
  const microSAASServices = [
    {
      name: "AI Invoice Generator Pro",
      description: "Intelligent invoice creation and payment tracking platform with AI-powered templates, automated follow-ups, and multi-currency support.",
      price: "$29/month",
      features: [
        "AI-powered invoice generation",
        "Automated payment reminders",
        "Multi-currency support",
        "Client management system",
        "Payment tracking dashboard",
        "Custom branding options",
        "Tax calculation automation",
        "Integration with accounting software"
      ],
      benefits: [
        "Save 80% time on invoicing",
        "Reduce payment delays by 60%",
        "Professional invoice templates",
        "Automated follow-up system"
      ],
      marketPrice: "$49-79/month",
      savings: "Save up to $50/month",
      category: "Financial Tools"
    },
    {
      name: "Smart Meeting Scheduler AI",
      description: "AI-powered meeting scheduling that automatically finds optimal times, sends reminders, and handles rescheduling conflicts.",
      price: "$19/month",
      features: [
        "AI-powered time optimization",
        "Calendar integration",
        "Automated reminders",
        "Conflict resolution",
        "Multi-timezone support",
        "Custom meeting templates",
        "Follow-up automation",
        "Analytics dashboard"
      ],
      benefits: [
        "Save 90% scheduling time",
        "Reduce no-shows by 70%",
        "Optimize meeting efficiency",
        "Professional scheduling"
      ],
      marketPrice: "$39-59/month",
      savings: "Save up to $40/month",
      category: "Productivity"
    }
  ]
  return (
    <Layout 
      title="Micro SaaS Solutions - Zion Tech Group" 
      description="Discover our innovative micro SaaS solutions designed to solve specific business problems with powerful, easy-to-use tools. From AI-powered invoicing to smart scheduling, we have the perfect solution for your needs."
      keywords="micro SaaS, business tools, AI solutions, productivity software, automation tools, business software"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Powerful, focused tools that solve specific business problems. 
              No bloat, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
              <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each solution is designed to solve a specific business problem with maximum efficiency and minimum complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">vs {service.marketPrice}</span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">{service.savings}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you leverage cutting-edge micro SaaS solutions to drive growth and innovation.
              <br className="hidden md:block" />
              <span className="text-blue-200 font-semibold">Get your free consultation today!</span>
            </p>
            <div className="mb-8">
              <p className="text-lg text-blue-100 mb-2">
                📞 <strong>Call us:</strong> +1 302 464 0950
              </p>
              <p className="text-lg text-blue-100 mb-2">
                📧 <strong>Email us:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-lg text-blue-100">
                📍 <strong>Visit us:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}