import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Zap, Shield, Globe } from "lucide-react";

const FiveGImplementationPage = () => {
  const features = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: "Ultra-Fast Connectivity",
      description: "Deploy 5G networks with speeds up to 10 Gbps for lightning-fast data transmission."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Low Latency",
      description: "Achieve ultra-low latency of less than 1ms for real-time applications and IoT devices."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Enhanced Security",
      description: "Implement advanced security protocols and encryption for secure 5G communications."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Global Coverage",
      description: "Deploy 5G infrastructure with comprehensive coverage and seamless roaming capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Professional 5G network implementation services. Deploy ultra-fast, low-latency 5G infrastructure for your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Implementation Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Deploy next-generation 5G networks with our expert implementation services. 
            Get ultra-fast speeds, low latency, and enhanced connectivity for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">5G Implementation Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need for successful 5G deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy 5G?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with next-generation 5G connectivity and unlock new possibilities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Implementation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGImplementationPage;