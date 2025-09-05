import React from "react";
import Link from "next/link";
import Layout from "./components/Layout";

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
      description: "AI-powered meeting scheduling that eliminates back-and-forth emails with intelligent time optimization and calendar integration.",
      price: "$19/month",
      features: [
        "AI time optimization",
        "Calendar integration (Google, Outlook, Apple)",
        "Automatic time zone handling",
        "Meeting room booking",
        "Follow-up reminders",
        "Custom availability rules",
        "Team scheduling coordination",
        "Meeting analytics dashboard"
      ],
      benefits: [
        "Eliminate scheduling conflicts",
        "Save 90% time on meeting coordination",
        "Reduce no-shows by 70%",
        "Improve meeting efficiency"
      ],
      marketPrice: "$39-59/month",
      savings: "Save up to $40/month",
      category: "Productivity"
    }
  ];

  const categories = [...new Set(microSAASServices.map(service => service.category))];

  return (
    <Layout 
      title="Micro SAAS Services - Zion Tech Group"
      description="Innovative micro SAAS solutions designed to boost productivity and streamline business operations with AI-powered tools."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS solutions that transform your business operations with AI-powered automation and intelligence
            </p>
            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-6 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Why Choose Our Micro SAAS Solutions?</h2>
              <div className="grid md:grid-cols-4 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Affordable</h3>
                  <p className="text-gray-300">Starting from $12/month</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                  <p className="text-gray-300">Intelligent automation and insights</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Easy Setup</h3>
                  <p className="text-gray-300">Get started in minutes</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock assistance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold">
                All Categories
              </button>
              {categories.map((category) => (
                <button key={category} className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-cyan-400">
                        {service.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-400">{service.price}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                      <div className="text-sm text-green-400 font-semibold">{service.savings}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="text-gray-300 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="text-gray-300 space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                    >
                      Get Started
                    </Link>
                    <Link
                      href="/request-quote"
                      className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                    >
                      Free Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Incredible Value Proposition
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Average Savings</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">65%</div>
                <p className="text-gray-300">Compared to market alternatives</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Setup Time</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">5 min</div>
                <p className="text-gray-300">Average time to get started</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">ROI Timeline</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">30 days</div>
                <p className="text-gray-300">Average return on investment</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Phone</h3>
                <p>+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Email</h3>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Address</h3>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/request-quote"
                className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}