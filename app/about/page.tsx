"use client";
import React from "react";
import Head from "next/head";
import { Target, Users, Award, ArrowRight, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible with AI and technology.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong relationships with our clients.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest quality in everything we do, from code to customer service.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years in AI and technology leadership.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Expert in machine learning and cloud architecture.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description:
        "Passionate about creating beautiful, user-centered experiences.",
    },
  ];

  return (
    <ErrorBoundary>
      <>
      <Head>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're passionate about AI and IT solutions that transform businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Advanced AI and IT solutions for modern businesses" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">
        <section className="relative py-20 px-4 overflow-hidden" loading="lazy">
          <div className="relative max-w-7xl mx-auto text-center" loading="lazy">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" loading="lazy">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" loading="lazy">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">
              We're a team of passionate technologists dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" loading="lazy" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300" loading="lazy" aria-label="Action button">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
    </ErrorBoundary>
  );
}
