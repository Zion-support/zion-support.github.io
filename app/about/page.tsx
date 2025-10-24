"use client"
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CheckCircle, Brain, BarChart, Target, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations."
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-500" />,
      title: "Data Analytics",
      description: "Advanced analytics to drive data-driven decisions and insights."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Precision Targeting",
      description: "Targeted solutions tailored to your specific business needs."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Growth Acceleration",
      description: "Accelerate your business growth with our proven methodologies."
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through AI and technology solutions." />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are pioneers in AI-driven business solutions, dedicated to transforming how companies operate and grow in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}