"use client";
import React from "react";
import Head from "next/head";
import { ArrowRight, Brain, CheckCircle, Star } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Advanced AI-powered solutions for modern businesses"
    },
    {
      icon: CheckCircle,
      title: "IT Services",
      description: "Comprehensive IT services and infrastructure solutions"
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Cutting-edge technology and innovative approaches"
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions that transform businesses and drive growth." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI and IT solutions that transform businesses and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <feature.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}