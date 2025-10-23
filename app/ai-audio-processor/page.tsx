"use client";
import React from "react";
import Head from "next/head";
import { Volume2, Mic, Music, Headphones, ArrowRight, CheckCircle } from "lucide-react";

const features = [
    {
      icon: Volume2,
      title: "Audio Enhancement",
      description: "AI-powered audio enhancement and noise reduction for crystal clear sound.",
    },
    {
      icon: Mic,
      title: "Voice Processing",
      description: "Advanced voice processing and speech recognition capabilities.",
    },
    {
      icon: Music,
      title: "Music Analysis",
      description: "Intelligent music analysis and automatic tagging for audio content.",
    },
    {
      icon: Headphones,
      title: "Real-time Processing",
      description: "Real-time audio processing with low latency for live applications.",
    },
  ];

  const benefits = [
    "Automatic noise reduction",
    "Voice enhancement and clarity",
    "Music genre classification",
    "Real-time audio analysis",
    "Batch processing capabilities",
    "Multiple audio format support",
  ];

  return (
    <>
      <Head>
        <title>AI Audio Processor - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Advanced AI-powered audio processing solutions for enhancement, analysis, and real-time processing." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">>{/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Audio Processor</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Advanced AI-powered audio processing solutions for enhancement,</p>
              analysis, and real-time processing of audio content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >Get Started</a>a>
              <a
                href="#contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >Learn More</a>a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Audio Processing Features</h2>
              <p className="text-lg text-gray-300">Everything you need for professional audio processing</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Audio Processor?</h2>
              <p className="text-lg text-gray-300">Advanced AI technology for professional audio processing</p>
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
                  <li>• Podcast and audio content production</li>
                  <li>• Music production and mastering</li>
                  <li>• Voice recognition and transcription</li>
                  <li>• Live streaming and broadcasting</li>
                  <li>• Audio restoration and archival</li>
                  <li>• Real-time communication systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Process Audio with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Start using our AI audio processor to enhance and analyze your</p>
              audio content today.
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


