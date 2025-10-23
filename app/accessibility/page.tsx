"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Accessibility, Eye, MousePointer, Volume2, CheckCircle } from "lucide-react";

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Accessibility,
      title: "WCAG 2.1 AA Compliance",
      description: "Full compliance with Web Content Accessibility Guidelines 2.1 AA standards for maximum accessibility.",
      benefits: [
        "Perceivable content and interface",
        "Operable user interface and navigation",
        "Understandable information and UI",
        "Robust content and reliable interpretation",
      ],
    },
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "Comprehensive visual accessibility features for users with visual impairments and color vision differences.",
      benefits: [
        "High contrast mode support",
        "Scalable fonts and responsive design",
        "Screen reader compatibility",
        "Color-blind friendly palettes",
      ],
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Full keyboard navigation and alternative input methods for users with motor disabilities.",
      benefits: [
        "Complete keyboard navigation",
        "Focus management and indicators",
        "Alternative input device support",
        "Voice control integration",
      ],
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description: "Comprehensive audio accessibility features for users with hearing impairments.",
      benefits: [
        "Closed captions and subtitles",
        "Audio descriptions for media",
        "Visual alerts and notifications",
        "Sign language video support",
      ],
    },
  ];

  const standards = [
    "WCAG 2.1 AA",
    "Section 508",
    "ADA Compliance",
    "EN 301 549",
    "ISO/IEC 40500",
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions and compliance services for digital inclusion" />
        <meta property="og:title" content="Accessibility Solutions | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive accessibility solutions and compliance services for digital inclusion" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">

          <div className="relative max-w-7xl mx-auto text-center">

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Making technology accessible to everyone through comprehensive accessibility solutions, 
              compliance services, and inclusive design practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Accessibility Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital
                inclusion, ensuring your applications work seamlessly for users
                with diverse needs and abilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 group hover:bg-white/10 transition-all duration-300">

                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">

                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
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

        {/* Standards Section */}
        <section className="py-20 px-4 bg-white/5">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We ensure compliance with international accessibility standards and regulations.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">

              {standards.map((standard, index) => (
                <div key={index} className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg px-6 py-3">

                  <span className="text-cyan-300 font-semibold">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your App Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our accessibility experts to audit your application and implement comprehensive accessibility solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Accessibility Audit
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

export default AccessibilityPage;