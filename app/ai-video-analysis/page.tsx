"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Video, Eye, Brain, Zap } from "lucide-react";

const AiVideoAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: "Video Analysis",
      description: "AI-powered video analysis with object detection, scene recognition, and content understanding."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced computer vision technology for accurate video content analysis and interpretation."
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "Intelligent AI analysis with contextual understanding and pattern recognition."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Real-time video processing with instant analysis and automated insights."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Video Analysis - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="AI-powered video analysis with computer vision, object detection, and real-time processing for video content understanding." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Video Analysis
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent video analysis powered by AI. 
              Computer vision, object detection, and real-time processing for video content understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Video Analysis Features
              </h2>
              <p className="text-lg text-gray-300">
                Advanced AI video analysis capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Analyze Videos?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Implement our AI video analysis solution to understand video content automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiVideoAnalysisPage;