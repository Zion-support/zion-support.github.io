"use client";
import React from "react";
import Head from "next/head";
import { Wifi, BarChart, CheckCircle, ArrowRight } from "lucide-react";

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
        <title>
          5G Network Implementation - Zion Tech Group | AI & IT Solutions
        </title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">>{/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden" loading="lazy">

          <div className="relative max-w-7xl mx-auto text-center" loading="lazy">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" loading="lazy">5G Network{" "}</h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" loading="lazy">Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Complete 5G network implementation services with ultra-low</p>
              latency, high-speed connectivity, and advanced features for modern
              applications and IoT ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300" loading="lazy" aria-label="Action button">Get Started</button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300" loading="lazy" aria-label="Action button">Schedule Demo</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Advanced 5G Features</h2>
              <p className="text-xl text-gray-300" loading="lazy">Cutting-edge 5G technology for the next generation of</p>
                connectivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" loading="lazy">{features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:border-purple-500/50 transition-all duration-300" loading="lazy"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" loading="lazy">
                    <feature.icon className="w-8 h-8 text-white" loading="lazy" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4" loading="lazy">{feature.title}</h3>h3>
                  <p className="text-gray-300 leading-relaxed mb-4" loading="lazy">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2" loading="lazy">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start text-sm text-gray-300" loading="lazy"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" loading="lazy" />
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
        <section className="py-20 px-4" loading="lazy">
          <div className="max-w-4xl mx-auto text-center" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Ready to Implement 5G?</h2>
            <p className="text-xl text-gray-300 mb-8" loading="lazy">Contact our experts to discuss your 5G implementation needs and</p>
              get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">Start Your Project</button>
                <ArrowRight className="w-5 h-5 ml-2" loading="lazy" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300" loading="lazy" aria-label="Action button">Learn More</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};


