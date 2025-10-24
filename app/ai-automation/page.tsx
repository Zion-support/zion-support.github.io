'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Cpu, BarChart3, Zap, Shield, Users, TrendingUp, Bot, Database, Settings, Target } from 'lucide-react';
import Footer from '../components/Footer';

export default function AiAutomationPage() {
  const stats = [
    { number: "95%", label: "Efficiency Gain", icon: TrendingUp },
    { number: "50%", label: "Cost Reduction", icon: BarChart3 },
    { number: "24/7", label: "Automation", icon: Zap },
    { number: "99.9%", label: "Uptime", icon: Shield }
  ];

  const features = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency.",
      icon: Settings
    },
    {
      title: "AI-Powered Analytics",
      description: "Get insights from your data with intelligent analytics.",
      icon: BarChart3
    },
    {
      title: "Smart Integration",
      description: "Seamlessly integrate with your existing systems.",
      icon: Database
    },
    {
      title: "Custom Solutions",
      description: "Tailored automation solutions for your specific needs.",
      icon: Target
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "Automate customer inquiries and support tickets.",
      icon: Users
    },
    {
      title: "Data Processing",
      description: "Automate data entry and processing workflows.",
      icon: Database
    },
    {
      title: "Report Generation",
      description: "Automatically generate and distribute reports.",
      icon: BarChart3
    },
    {
      title: "Quality Control",
      description: "Automate quality checks and validation processes.",
      icon: Shield
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 50%",
    "Increase productivity and efficiency",
    "Eliminate human errors in repetitive tasks",
    "Scale operations without proportional cost increase",
    "Improve customer satisfaction with faster response times"
  ];

  return (
    <>
      <Head>
        <title>Ai Automation - Zion Tech Group</title>
        <meta name="description" content="Professional ai automation services by Zion Tech Group. Transform your business with our expert solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Automation
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ai automation services coming soon.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
