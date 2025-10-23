"use client";
import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
const PagePage: React.FC = () => {
  const features = [
    {
      title: "Feature 1",
      description: "Description of feature 1",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
    {
      title: "Feature 2",
      description: "Description of feature 2",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
    {
      title: "Feature 3",
      description: "Description of feature 3",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
  ];

  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3",
    "Benefit 4",
    "Benefit 5",
    "Benefit 6",
  ];

  return (
    <>
      <Head>
        <title>Page | Zion Tech Group</title>
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Page
            <span>Solutions
            </span>
          </h1>
          <p>Professional page solutions by Zion Tech Group. Advanced AI and IT
            solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
              <ArrowRight> </ArrowRight>button>
            <button>View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Page Features
            </h2>
            <p>Advanced solutions designed for modern business needs
            </p>
            <button>Start Your Free Trial
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle> </CheckCircle>div>
                <h3>{feature.title}
                </h3>
                <p>{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle>{benefit}
                    </CheckCircle>li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Why Choose Our Page?
            </h2>
            <p>Experience the benefits of our proven solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle> </CheckCircle>div>
                <h3>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2>Ready to Get Started?
          </h2>
          <p>Transform your business with our page solutions today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button>Start Free Trial
            </button>
            <button>Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer> </Footer>>
  );
};

export default PagePage;
