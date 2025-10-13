'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, ArrowRight, CheckCircle, Star, Users, BarChart, Target, Clock } from 'lucide-react';

export default function ZionCloudVaultPage() {
  const features = [
    {
      title: "Secure Cloud Storage",
      description: "Enterprise-grade cloud storage with advanced encryption and security",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["End-to-end encryption", "Zero-knowledge architecture", "Multi-factor authentication", "Compliance ready"]
    },
    {
      title: "AI-Powered Organization",
      description: "Intelligent file organization and search with AI-powered categorization",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Smart categorization", "Content recognition", "Automated tagging", "Intelligent search"]
    },
    {
      title: "Collaborative Workspace",
      description: "Seamless collaboration tools for teams with real-time synchronization",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Real-time sync", "Team sharing", "Version control", "Activity tracking"]
    }
  ];

  const vaultTypes = [
    {
      title: "Document Vault",
      description: "Secure storage for documents and files",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Media Vault",
      description: "Organized storage for photos and videos",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Code Vault",
      description: "Version-controlled code repository",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive usage analytics and insights",
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime" },
    { number: "256-bit", label: "Encryption" },
    { number: "50TB", label: "Storage Limit" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Cloud Vault - Zion Tech Group</title>
        <meta name="description" content="Secure cloud storage with AI-powered organization. Enterprise-grade security, collaboration tools, and intelligent file management." />
        <meta name="keywords" content="cloud storage, secure vault, file management, collaboration, AI organization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Cloud Vault
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure cloud storage with AI-powered organization. Enterprise-grade security, 
              intelligent file management, and seamless collaboration for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cloud Vault Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud vault provides secure, intelligent storage solutions that protect and organize your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vault Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Vault Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized vaults for different types of content and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vaultTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our cloud vault experts help you implement secure, intelligent storage solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}