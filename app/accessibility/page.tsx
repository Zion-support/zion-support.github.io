"use client";
import React from "react";
import Head from "next/head";
import { Accessibility, Eye, Volume2, MousePointer, CheckCircle, ArrowRight } from "lucide-react";

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, text scaling, and screen reader compatibility for users with visual impairments.",
      benefits: [
        "Screen reader optimization",
        "High contrast mode support",
        "Text scaling up to 200%",
        "Alternative text for images",
      ],
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description: "Audio descriptions, captions, and alternative audio formats for users with hearing impairments.",
      benefits: [
        "Closed captions for videos",
        "Audio descriptions",
        "Visual indicators for audio",
        "Sign language support",
      ],
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Keyboard navigation, voice control, and adaptive input methods for users with motor disabilities.",
      benefits: [
        "Full keyboard navigation",
        "Voice control support",
        "Switch navigation",
        "Customizable input methods",
      ],
    },
    {
      icon: Accessibility,
      title: "Cognitive Accessibility",
      description: "Clear navigation, simplified interfaces, and cognitive support tools for users with cognitive disabilities.",
      benefits: [
        "Clear navigation structure",
        "Simplified interfaces",
        "Consistent design patterns",
        "Error prevention and recovery",
      ],
    },
  ];

  const standards = [
    "WCAG 2.1 AA compliance",
    "Section 508 compliance",
    "ADA compliance",
    "EN 301 549 compliance",
  ];

  return (
    <>
      <Head>
        <title>Accessibility Solutions - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive accessibility solutions for inclusive digital experiences. WCAG 2.1 AA compliant designs." />
        </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility{" "}
              <span>Solutions
              </span>
            </h1>
            <p>Comprehensive accessibility solutions for inclusive digital
              experiences that work for everyone, regardless of ability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button>Get Accessibility Audit
              </button>
              <button>Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Comprehensive Accessibility Features
              </h2>
              <p>Our accessibility solutions cover all aspects of digital
                inclusion, ensuring your applications work seamlessly for users
                with diverse needs and abilities.
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

        {/* Standards Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Compliance Standards
              </h2>
              <p>We ensure your applications meet international accessibility
                standards and guidelines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <h3>{standard}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2>Ready to Make Your App Accessible?
            </h2>
            <p>Let's work together to create inclusive digital experiences that
              work for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight> </ArrowRight>button>
              <button>Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AccessibilityPage;