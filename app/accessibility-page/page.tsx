"use client";
import React from "react";
import Head from "next/head";
import { Accessibility, Eye, Volume2, MousePointer, CheckCircle, ArrowRight } from "lucide-react";

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, text scaling, and screen reader compatibility.",
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description: "Audio descriptions, captions, and alternative audio formats.",
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Keyboard navigation, voice control, and adaptive input methods.",
    },
    {
      icon: Accessibility,
      title: "Cognitive Accessibility",
      description: "Clear navigation, simplified interfaces, and cognitive support tools.",
    },
  ];

  const accessibilityFeatures = [
    "WCAG 2.1 AA compliance",
    "Screen reader optimization",
    "Keyboard navigation support",
    "High contrast mode",
    "Text scaling up to 200%",
    "Focus indicators",
    "Alternative text for images",
    "Semantic HTML structure",
  ];

  return (
    <>
      <Head>
        <title>Accessibility - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." />
        </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1>Accessibility
            </h1>
            <p>We're committed to creating inclusive digital experiences that are
              accessible to everyone, regardless of ability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a>Get Started
              </a>
              <a>View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Accessibility Features
              </h2>
              <p>Comprehensive accessibility solutions for inclusive design
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature> </feature>
                  <h3>{feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Accessibility Standards
              </h2>
              <p>We follow international accessibility guidelines and best practices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3>WCAG 2.1 Compliance
                </h3>
                <ul className="space-y-3">
                  {accessibilityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle>{feature}
                    </CheckCircle>li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3>Our Commitment
                </h3>
                <p>We believe that digital experiences should be accessible to everyone.
                  Our team is trained in accessibility best practices and we continuously
                  work to improve the user experience for all users.
                </p>
                <p>From design to development, we ensure that accessibility is considered
                  at every step of the process, creating inclusive solutions that work
                  for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2>Ready to Get Started?
            </h2>
            <p>Let's work together to create accessible digital experiences that
              include everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
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