<<<<<<< HEAD
"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Brain, Globe, Shield, Zap } from "lucide-react";
const AiVoiceAssistantPage: React.FC = () => {
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
  ];
=======
import React from "react";
import SEOHead from "../components/SEOHead";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

  return (
<<<<<<< HEAD
    <React.Fragment>
      <Helmet>
        <title>
          Ai Voice Assistant - Zion Tech Group | Advanced AI and IT Solutions
        </title>
        <meta
          name="description"
          content="Professional aivoiceassistant solutions powered by advanced AI and cutting-edge technology."
        />
        <meta
          name="keywords"
          content="aivoiceassistant, AI solutions, IT services, automation, technology, business solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Voice Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional aivoiceassistant solutions powered by advanced AI and
              cutting-edge technology.
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
=======
    <>
      <SEOHead
        title="AI Voice Assistant - Zion Tech Group"
        description="Custom AI voice assistants for your business. Build intelligent voice interfaces with natural language processing, speech recognition, and conversational AI capabilities."
        keywords="AI voice assistant, voice AI, speech recognition, natural language processing, conversational AI, voice interface"
        canonicalUrl="https://ziontechgroup.com/ai-voice-assistant"
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Voice Assistant Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create custom AI voice assistants for your business. Build
              intelligent voice interfaces with advanced speech recognition,
              natural language understanding, and conversational AI
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Voice AI Features
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-cyan-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Speech Recognition
                    </h3>
                    <p className="text-gray-600">
                      Advanced speech-to-text with high accuracy and multiple
                      language support
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-cyan-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Natural Language Processing
                    </h3>
                    <p className="text-gray-600">
                      Understand context, intent, and sentiment from spoken
                      language
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-cyan-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Text-to-Speech
                    </h3>
                    <p className="text-gray-600">
                      Natural-sounding voice synthesis with multiple voice
                      options
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-cyan-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Conversation Management
                    </h3>
                    <p className="text-gray-600">
                      Maintain context and handle multi-turn conversations
                      intelligently
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-cyan-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Custom Voice Training
                    </h3>
                    <p className="text-gray-600">
                      Train custom voice models for your brand and specific use
                      cases
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pricing Plans
              </h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Starter
                  </h4>
                  <p className="text-3xl font-bold text-cyan-600">
                    $59<span className="text-lg text-gray-600">/month</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 1,000 interactions/month</li>
                    <li>• Basic voice features</li>
                    <li>• Standard voices</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-cyan-500 rounded-lg p-4 bg-cyan-50">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Professional
                  </h4>
                  <p className="text-3xl font-bold text-cyan-600">
                    $199<span className="text-lg text-gray-600">/month</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 10,000 interactions/month</li>
                    <li>• Advanced AI features</li>
                    <li>• Custom voice training</li>
                    <li>• Multi-language support</li>
                    <li>• API integration</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Enterprise
                  </h4>
                  <p className="text-3xl font-bold text-cyan-600">
                    $599<span className="text-lg text-gray-600">/month</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Unlimited interactions</li>
                    <li>• Full AI capabilities</li>
                    <li>• Custom model training</li>
                    <li>• White-label options</li>
                    <li>• 24/7 support</li>
                    <li>• On-premise deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Build Your Voice Assistant
            </h2>
            <p className="text-gray-600 mb-6">
              Create intelligent voice interfaces for your business
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Start Building
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Email: kleber@ziontechgroup.com
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
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
export default AiVoiceAssistantPage;
=======
export default AIVoiceAssistantPage;
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
