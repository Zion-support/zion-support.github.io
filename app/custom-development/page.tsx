"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, Star, BarChart, Shield, Zap } from "lucide-react";

const CustomDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis with AI-powered insights and real-time reporting."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee and advanced protection."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Expert Support",
      description: "24/7 expert support and monitoring to ensure your success."
    }
  ];

  const benefits = [
    "Improve efficiency by 40%",
    "Reduce costs by 30%",
    "Enhance security posture",
    "Scale operations seamlessly",
    "Get 24/7 expert support"
  ];

  return (
    <>
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Professional custom development services by Zion Tech Group. Advanced solutions for your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Custom Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional custom development services by Zion Tech Group. Advanced solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomDevelopmentPage;