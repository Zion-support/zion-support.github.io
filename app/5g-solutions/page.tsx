"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Wifi, BarChart, CheckCircle, ArrowRight } from "lucide-react";

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Wifi,
      title: "5G Network Solutions",
      description: "Complete 5G network solutions with ultra-low latency and high-speed connectivity.",
      benefits: [
        "Ultra-low latency connectivity",
        "High-speed data transmission",
        "Massive device connectivity",
        "Enhanced mobile broadband",
      ],
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Advanced analytics and reporting for 5G network performance and optimization.",
      benefits: [
        "Real-time network monitoring",
        "Performance optimization",
        "Predictive maintenance",
        "Quality of service management",
      ],
    },
    {
      icon: CheckCircle,
      title: "IoT Integration",
      description: "Seamless integration of IoT devices with 5G networks for smart applications.",
      benefits: [
        "Massive IoT connectivity",
        "Edge computing support",
        "Real-time data processing",
        "Scalable device management",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          5G Solutions - Zion Tech Group | AI & IT Solutions
        </title>
        <meta name="description" content="Advanced 5G solutions for modern connectivity and IoT applications." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced 5G solutions for modern connectivity and IoT applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Cutting-edge 5G technology for the next generation of connectivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  {solution.benefits && (
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you implement cutting-edge 5G solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;