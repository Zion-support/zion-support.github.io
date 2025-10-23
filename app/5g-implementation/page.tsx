"use client";
import React from "react";
import Head from "next/head";
import { Wifi, BarChart, CheckCircle, ArrowRight } from "lucide-react";

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "5G Network Design",
      description:
        "Complete 5G network design and implementation with optimal coverage and performance.",
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
      description:
        "Advanced analytics and reporting for 5G network performance and optimization.",
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
      description:
        "Seamless integration of IoT devices with 5G networks for smart applications.",
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
      <Head>
        <title>5G Network Implementation - Zion Tech Group | AI & IT Solutions
        </title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">

          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Network{" "}
              <span>Implementation
              </span>
            </h1>
            <p>Complete 5G network implementation services with ultra-low
              latency, high-speed connectivity, and advanced features for modern
              applications and IoT ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button>Get Started
              </button>
              <button>Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Advanced 5G Features
              </h2>
              <p>Cutting-edge 5G technology for the next generation of
                connectivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature> </feature>
                  <h3>{feature.title}
                  </h3>
                  <p>{feature.description}
                  </p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start text-sm text-gray-300"
                        >
                          <CheckCircle>{benefit}
                        </CheckCircle>li>
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
            <h2>Ready to Implement 5G?
            </h2>
            <p>Contact our experts to discuss your 5G implementation needs and
              get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight> </ArrowRight>button>
              <button>Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGImplementationPage;
