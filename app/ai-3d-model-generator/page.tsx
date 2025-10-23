"use client";
import React from "react";
import Head from "next/head";
import { Box, Zap, Download, ArrowRight, CheckCircle } from "lucide-react";

const AI3DModelGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: Box,
      title: "AI-Powered Generation",
      description: "Generate 3D models using advanced AI algorithms and machine learning.",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Create 3D models in real-time with our optimized processing engine.",
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Export your 3D models in various formats for different applications.",
    },
  ];

  const benefits = [
    "Automated 3D model creation",
    "High-quality mesh generation",
    "Texture mapping and materials",
    "Animation support",
    "Cross-platform compatibility",
    "Batch processing capabilities",
  ];

  return (
    <>
      <Head>
        <title>AI 3D Model Generator - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Generate 3D models using AI technology. Create high-quality 3D assets with our advanced AI-powered model generator." />
        </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1>AI 3D Model Generator
            </h1>
            <p>Create stunning 3D models using advanced AI technology. Generate
              high-quality 3D assets for games, AR/VR, and visualizations.
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
              <h2>Powerful Features
              </h2>
              <p>Everything you need for 3D model generation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Why Choose Our AI 3D Generator?
              </h2>
              <p>Advanced AI technology for professional 3D model creation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3>Key Benefits
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle>{benefit}
                    </CheckCircle>li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3>Use Cases
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Game development and asset creation</li>
                  <li>• AR/VR applications and experiences</li>
                  <li>• Architectural visualization</li>
                  <li>• Product prototyping and design</li>
                  <li>• Educational and training materials</li>
                  <li>• Marketing and advertising content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2>Ready to Generate 3D Models?
            </h2>
            <p>Start creating amazing 3D models with our AI-powered generator today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Generating
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

export default AI3DModelGeneratorPage;