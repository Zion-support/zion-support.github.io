"use client";
import React from "react";
import Head from "next/head";
import { Volume2, Mic, Music, Headphones, ArrowRight, CheckCircle, Zap } from "lucide-react";

const features = [
    {
      icon: Volume2,
      title: "Enhanced Audio Quality",
      description: "Advanced AI algorithms for superior audio enhancement and noise reduction.",
    },
    {
      icon: Mic,
      title: "Intelligent Voice Processing",
      description: "State-of-the-art voice processing with real-time speech recognition.",
    },
    {
      icon: Music,
      title: "Smart Music Analysis",
      description: "AI-powered music analysis with automatic genre classification and tagging.",
    },
    {
      icon: Headphones,
      title: "Real-time Processing",
      description: "Ultra-low latency real-time audio processing for live applications.",
    },
    {
      icon: Zap,
      title: "Advanced AI Models",
      description: "Latest machine learning models for superior audio processing performance.",
    },
  ];

  const benefits = [
    "Advanced noise reduction algorithms",
    "Real-time voice enhancement",
    "Intelligent music classification",
    "Ultra-low latency processing",
    "Batch processing capabilities",
    "Multiple audio format support",
    "Custom AI model training",
    "API integration support",
  ];

  return (
    <>
      <Head>
        <title>
          AI Audio Processor Improved - Zion Tech Group | Advanced AI and IT Solutions
        </title>
        <meta name="description" content="Professional AI audio processor with advanced features for enhanced audio processing, voice recognition, and real-time analysis." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">>{/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Audio Processor Improved</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Professional AI audio processor solutions powered by advanced AI</p>
              and cutting-edge technology for superior audio processing.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Audio Processing Features</h2>h2>
              <p className="text-lg text-gray-300">Cutting-edge AI technology for professional audio processing</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Improved AI Audio Processor?</h2>h2>
              <p className="text-lg text-gray-300">Advanced AI technology with enhanced performance and capabilities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Enhanced Benefits</h3>h3>
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
                <h3 className="text-2xl font-bold text-white mb-6">Professional Use Cases</h3>h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Professional podcast production</li>
                  <li>• Music mastering and production</li>
                  <li>• Voice recognition and transcription</li>
                  <li>• Live streaming and broadcasting</li>
                  <li>• Audio restoration and archival</li>
                  <li>• Real-time communication systems</li>
                  <li>• AI-powered audio analysis</li>
                  <li>• Custom audio processing pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Improved Audio Processing?</h2>h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get started with our advanced AI audio processor and experience</p>
              the next level of audio processing technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >Start Your Project</a>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#features"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >Learn More</a>a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};


