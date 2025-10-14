import React from 'react';
import { Right, Circle, Workflow, Brain, Settings, Zap, Play  } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Smart Decision Making",
      description: "AI-driven decision making for automated business processes",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Process Optimization",
      description: "Continuously optimize processes using machine learning",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Integration Hub",
      description: "Connect and automate across all your business systems",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    }
  ];

  const benefits = [
    "Reduce manual work by up to 80%",
    "Improve process accuracy by 95%",
    "Scale operations without linear cost increase",
    "Real-time monitoring and analytics",
    "Seamless integration with existing systems",
    "24/7 automated operations"
  ];

  return (
    <>
      <EnhancedSEO title="AI Automation Platform - Intelligent Process Automation | Zion Tech Group"
        description="Transform your business with AI-powered automation. Workflow automation, smart decision making, and process optimization for modern enterprises."
        keywords="AI automation, workflow automation, process optimization, business automation, intelligent automation, RPA"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7 xl mx-auto text-center">
            <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6">
              AI Automation
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Platform
              </>
            </>
            <p >
              Transform your business with intelligent automation. Our AI-powered platform
              streamlines processes, reduces costs, and accelerates growth.
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton className="px-8 py-4">
                Get Started
                <Right className="w-5 h-5 ml-2 inline" />
              </>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300">
                Watch Demo
                <Play className="w-5 h-5 ml-2 inline" />
              </>
            </>
          </>
        </>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <h2 className="text-4 xl font-bold text-white text-center mb-16">
              Powerful Automation Features
            </>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="p-6 text-center group">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div >
                      {feature.icon}
                    </>
                  </>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</>
                  <p>{feature.description}</>
                </>
              ))}
            </>
          </>
        </>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7 xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div >
                <h2 className="text-4 xl font-bold text-white mb-6">
                  Why Choose Our AI Automation Platform?
                </>
                <p >
                  Our platform combines cutting-edge AI technology with enterprise-grade security
                  to deliver automation solutions that scale with your business.
                </>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <Circle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </>
                  ))}
                </>
              </>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2 xl p-8 backdrop-blur-sm border border-blue-500/30">
                  <h3 className="text-2 xl font-bold text-white mb-4">Ready to Automate?</>
                  <p >
                    Schedule a consultation to see how our AI automation platform
                    can transform your business processes.
                  </>
                  <FuturisticButton className="w-full">
                    Schedule Consultation
                    <Right className="w-5 h-5 ml-2 inline" />
                  </>
                </>
              </>
            </>
          </>
        </>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4 xl mx-auto text-center">
            <h2 className="text-4 xl font-bold text-white mb-6">
              Start Your Automation Journey Today
            </>
            <p >
              Join thousands of businesses already using our AI automation platform
              to streamline operations and drive growth.
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton className="px-8 py-4">
                Get Started Now
                <Right className="w-5 h-5 ml-2 inline" />
              </>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300">
                Contact Sales
              </>
            </>
          </>
        </>
      </>
    </>
  );
};

export default AIAutomationPlatform;