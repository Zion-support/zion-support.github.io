"use client";
import React from "react";
import Head from "next/head";
import { MessageCircle, Bot, Zap, CheckCircle, ArrowRight } from "lucide-react";

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Intelligent Conversations",
      description: "Build chatbots with advanced natural language processing capabilities.",
    },
    {
      icon: Bot,
      title: "Easy Builder Interface",
      description: "Drag-and-drop interface for creating chatbot flows without coding.",
    },
    {
      icon: Zap,
      title: "Real-time Integration",
      description: "Seamlessly integrate with your existing systems and platforms.",
    },
  ];

  const benefits = [
    "No-code chatbot creation",
    "Multi-language support",
    "Advanced AI capabilities",
    "Real-time analytics",
    "Custom integrations",
    "24/7 customer support",
  ];

  return (
    <>
      <Head>
        <title>AI Chatbot Builder - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered chatbot builder. No coding required, advanced features included." />
        </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1>AI Chatbot Builder
            </h1>
            <p>Build intelligent chatbots with our AI-powered builder. No coding
              required, advanced features included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a>Get Started
              </a>
              <a>View Demo
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
              <p>Everything you need to build intelligent chatbots
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
              <h2>Why Choose Our Chatbot Builder?
              </h2>
              <p>Advanced AI technology for professional chatbot creation
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
                  <li>• Customer support automation</li>
                  <li>• Lead generation and qualification</li>
                  <li>• E-commerce assistance</li>
                  <li>• FAQ automation</li>
                  <li>• Appointment scheduling</li>
                  <li>• Multi-channel support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2>Ready to Build Your Chatbot?
            </h2>
            <p>Start building intelligent chatbots today with our AI-powered
              builder platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Building
                <ArrowRight> </ArrowRight>a>
              <a>Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIChatbotBuilderPage;
