<<<<<<< HEAD
"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Eye,
  MousePointer,
  Volume2,
  Shield,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description:
        "Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.",
      benefits: [
        "High contrast modes",
        "Text scaling",
        "Screen reader support",
        "Color blind friendly",
      ],
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description:
        "Keyboard navigation and alternative input methods for users with motor impairments.",
      benefits: [
        "Keyboard navigation",
        "Voice commands",
        "Switch control",
        "Customizable controls",
      ],
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description:
        "Audio alternatives and visual indicators for users with hearing impairments.",
      benefits: [
        "Audio descriptions",
        "Visual alerts",
        "Captions",
        "Sign language support",
      ],
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description:
        "Secure accessibility features that protect user data while providing inclusive experiences.",
      benefits: [
        "Data protection",
        "Secure forms",
        "Privacy controls",
        "Encrypted communications",
      ],
    },
    {
      icon: Users,
      title: "Inclusive Design",
      description:
        "Design principles that ensure our solutions work for users of all abilities and backgrounds.",
      benefits: [
        "Universal design",
        "Cultural sensitivity",
        "Language support",
        "Age-friendly interfaces",
      ],
    },
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.",
      benefits: [
        "WCAG 2.1 AA",
        "Section 508",
        "ADA compliance",
        "International standards",
      ],
    },
  ];

  const standards = [
    {
      name: "WCAG 2.1 AA",
      description:
        "Web Content Accessibility Guidelines 2.1 Level AA compliance",
      status: "Fully Compliant",
    },
    {
      name: "Section 508",
      description:
        "US federal accessibility standards for electronic and information technology",
      status: "Fully Compliant",
    },
    {
      name: "ADA",
      description:
        "Americans with Disabilities Act compliance for digital accessibility",
      status: "Fully Compliant",
    },
    {
      name: "EN 301 549",
      description:
        "European accessibility standard for ICT products and services",
      status: "Fully Compliant",
    },
  ];
=======
import { Helmet } from "react-helmet-async";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>
          Accessibility Solutions - Zion Tech Group | Inclusive Digital
          Experiences
        </title>
        <meta
          name="description"
          content="Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards."
        />
        <meta
          name="keywords"
          content="accessibility, inclusive design, WCAG compliance, screen reader, keyboard navigation, digital accessibility"
=======
        <title>Accessibility - Zion Tech Group</title>
        <meta
          name="description"
          content="Accessibility services and solutions from Zion Tech Group."
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
              Creating inclusive digital experiences that work for everyone. Our
              accessibility solutions ensure your applications are usable by
              people of all abilities and comply with international standards.
=======
              Professional Accessibility services and solutions for your
              business needs.
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
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
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                >
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
                        <li
                          key={benefitIndex}
                          className="text-sm text-gray-400 flex items-center"
                        >
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
                We ensure full compliance with international accessibility
                standards and regulations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {standard.description}
                  </p>
                  <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make Your App Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you create inclusive digital experiences that work for
              everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Accessibility Audit
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

export default AccessibilityPage;
