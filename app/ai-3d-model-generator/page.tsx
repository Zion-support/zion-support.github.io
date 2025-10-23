"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Zap, Download, ArrowRight, CheckCircle } from "lucide-react";

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
    <React.Fragment>
      <Helmet>
        <title>AI 3D Model Generator - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Generate 3D models using AI technology. Create high-quality 3D assets with our advanced AI-powered model generator." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">>{/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI 3D Model Generator</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create stunning 3D models using advanced AI technology. Generate</p>
              high-quality 3D assets for games, AR/VR, and visualizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >Get Started</a>a>
              <a
                href="#contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >View All Services</a>a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>h2>
              <p className="text-lg text-gray-300">Everything you need for 3D model generation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI 3D Generator?</h2>h2>
              <p className="text-lg text-gray-300">Advanced AI technology for professional 3D model creation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Use Cases</h3>h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Generate 3D Models?</h2>h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Start creating amazing 3D models with our AI-powered generator today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">Start Generating</button>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};


