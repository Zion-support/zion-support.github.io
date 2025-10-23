"use client";
import React from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
import { Brain, Globe, Shield, Zap } from "lucide-react";
const AiAudioProcessorImprovedPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Technology",
      description:
        "Cutting-edge solutions powered by the latest technology and AI.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized for speed and efficiency with real-time processing capabilities.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption and compliance standards.",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description:
        "Scale effortlessly across multiple regions with automatic load balancing.",
    },
=======
import ServicePageTemplate from "../components/ServicePageTemplate";
import {
  MicrophoneIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  SpeakerWaveIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";

const AIAudioProcessorPage: React.FC = () => {
  const features = [
    {
      icon: MicrophoneIcon,
      title: "Real-time Audio Processing",
      description:
        "Advanced AI algorithms process audio in real-time with ultra-low latency for seamless user experience.",
    },
    {
      icon: CpuChipIcon,
      title: "AI-Powered Analysis",
      description:
        "Machine learning models analyze audio patterns, speech recognition, and sound classification with 99.5% accuracy.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and secure processing ensure your audio data remains private and protected.",
    },
    {
      icon: DocumentTextIcon,
      title: "Transcription Services",
      description:
        "Convert speech to text with advanced natural language processing and multi-language support.",
    },
    {
      icon: SpeakerWaveIcon,
      title: "Audio Enhancement",
      description:
        "AI-powered noise reduction, echo cancellation, and audio quality improvement for crystal-clear sound.",
    },
    {
      icon: MusicalNoteIcon,
      title: "Music Analysis",
      description:
        "Analyze music patterns, detect genres, extract features, and provide intelligent music recommendations.",
    },
  ];

  const pricing = {
    monthly: "$199/mo",
    original: "$399/mo",
    features: [
      "Unlimited audio processing",
      "Real-time transcription",
      "50+ language support",
      "Advanced noise reduction",
      "API access included",
      "24/7 technical support",
      "Custom model training",
      "99.9% uptime guarantee",
    ],
  };

  const benefits = [
    "95% accuracy in speech recognition",
    "Real-time processing capabilities",
    "Multi-language support",
    "Enterprise-grade security",
    "Scalable cloud infrastructure",
    "Easy API integration",
    "Custom model training",
    "24/7 technical support",
  ];

  const useCases = [
    {
      title: "Call Center Automation",
      description:
        "Automatically transcribe customer calls, analyze sentiment, and extract key insights for improved customer service.",
    },
    {
      title: "Content Creation",
      description:
        "Generate transcripts, captions, and summaries for podcasts, videos, and audio content automatically.",
    },
    {
      title: "Meeting Intelligence",
      description:
        "Transcribe meetings, extract action items, and provide intelligent summaries for better collaboration.",
    },
    {
      title: "Accessibility Services",
      description:
        "Provide real-time captions and audio descriptions to make content accessible to all users.",
    },
  ];

  const technicalSpecs = [
    {
      category: "Processing",
      specs: [
        "Real-time processing",
        "Batch processing support",
        "Multi-format audio support",
        "Custom model training",
      ],
    },
    {
      category: "Languages",
      specs: [
        "50+ languages supported",
        "Automatic language detection",
        "Custom vocabulary support",
        "Accent recognition",
      ],
    },
    {
      category: "Integration",
      specs: [
        "RESTful API",
        "WebSocket support",
        "SDK for major languages",
        "Webhook notifications",
      ],
    },
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Ai Audio Processor Improved - Zion Tech Group | Advanced AI and IT
          Solutions
        </title>
        <meta
          name="description"
          content="Professional aiaudioprocessorimproved solutions powered by advanced AI and cutting-edge technology."
        />
        <meta
          name="keywords"
          content="aiaudioprocessorimproved, AI solutions, IT services, automation, technology, business solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Audio Processor Improved
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional aiaudioprocessorimproved solutions powered by
              advanced AI and cutting-edge technology.
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
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you implement this solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/services"
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

<<<<<<< HEAD
export default AiAudioProcessorImprovedPage;
=======
export default AIAudioProcessorPage;
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
