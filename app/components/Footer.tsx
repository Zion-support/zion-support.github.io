<<<<<<< HEAD
"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const aiServices = [
    { name: "AI Chatbot Builder", href: "/ai-chatbot-builder" },
    { name: "AI Content Generator", href: "/ai-content-generator" },
    { name: "AI Data Visualizer", href: "/ai-data-visualizer" },
    { name: "AI Document Intelligence", href: "/ai-document-intelligence" },
    { name: "AI Financial Forecasting", href: "/ai-financial-forecasting" },
    { name: "AI Fraud Detection", href: "/ai-fraud-detection" },
  ];

  const itServices = [
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile Development", href: "/mobile-development" },
    { name: "API Development", href: "/api-development" },
    { name: "Cloud Solutions", href: "/cloud-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Data Analytics", href: "/data-analytics" },
  ];

  const microSaas = [
    { name: "Analytics Dashboard", href: "/analytics-dashboard" },
    { name: "Expense Tracker Pro", href: "/expense-tracker-pro" },
    { name: "Inventory Manager", href: "/inventory-manager" },
    { name: "Task Manager Pro", href: "/task-manager-pro" },
    { name: "Social Media Scheduler", href: "/social-media-scheduler" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Partnerships", href: "/partnerships" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "API Documentation", href: "/api-docs" },
    { name: "Status Page", href: "/status" },
  ];

  const _quickLinks = [
    { name: "Free Consultation", href: "/consultation" },
    { name: "Request Demo", href: "/demo" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "Support", href: "/support" },
  ];
=======
import React, { memo } from "react";
import { Link } from "react-router-dom";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Advanced AI and IT solutions for modern businesses. We help you
              leverage cutting-edge technology to drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
=======
    <footer className="relative mt-20 overflow-hidden">
      {/* Enhanced Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="cyber-grid-enhanced"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

      {/* Quantum Particles */}
      <div className="quantum-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="quantum-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Scan Lines */}
      <div className="scan-lines"></div>

      <div className="relative z-10 glass-card">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h3
                className="text-2xl font-bold mb-6 holographic-text font-['Orbitron'] cyber-glitch"
                data-text="ZION TECH GROUP"
              >
                ZION TECH GROUP
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed matrix-text">
                Advanced AI and IT Solutions for the modern world. We help
                businesses transform through cutting-edge technology.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center">
                  <strong className="text-cyan-400 mr-2">📞</strong>{" "}
                  <a
                    href="tel:+13024640950"
                    className="hover:text-cyan-300 transition-colors neon-glow"
                  >
                    +1 302 464 0950
                  </a>
                </p>
                <p className="flex items-center">
                  <strong className="text-cyan-400 mr-2">✉️</strong>{" "}
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </p>
                <p className="flex items-center">
                  <strong className="text-cyan-400 mr-2">📍</strong> 364 E Main
                  St STE 1008
                  <br />
                  Middletown DE 19709
                </p>
                <p className="flex items-center">
                  <strong className="text-cyan-400 mr-2">🌐</strong>{" "}
                  <a
                    href="https://ziontechgroup.com"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    https://ziontechgroup.com
                  </a>
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://ziontechgroup.com"
                  className="text-gray-300 hover:text-cyan-300 transition-colors neon-glow p-2 rounded-lg hover:bg-cyan-500/10"
                >
                  <span className="sr-only">Website</span>
                  <svg
                    className="h-6 w-6 hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-gradient holographic-text">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/ai-services"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    AI Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/it-services"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/it-solutions"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    IT Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Advanced Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cloud-infrastructure"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cybersecurity"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link
                    to="/data-analytics"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/web-development"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mobile-development"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/micro-saas-solutions"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Micro SaaS Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">AI Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/ai-solutions"
                    className="text-gray-300 hover:text-white font-semibold"
                  >
                    AI Solutions Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-chatbot-builder"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Chatbot Builder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-document-processor"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Document Processor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-form-builder"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Form Builder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-voice-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Voice Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-fraud-detection"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Fraud Detection
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-image-recognition"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Image Recognition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-lead-scoring"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Lead Scoring
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-predictive-maintenance"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Predictive Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-price-optimizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Price Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-scheduling-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Scheduling Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-crm-optimizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI CRM Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-data-visualizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Data Visualizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-email-optimizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Email Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-content-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Content Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-social-media-manager"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Social Media Manager
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-video-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Video Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-translator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Translator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-legal-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Legal Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-medical-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Medical Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-education-tutor"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Education Tutor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-real-estate-analyzer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Real Estate Analyzer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-supply-chain-optimizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Supply Chain Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-3d-model-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI 3D Model Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-audio-processor"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Audio Processor
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Micro SaaS Tools</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/micro-saas-solutions"
                    className="text-gray-300 hover:text-white font-semibold"
                  >
                    Micro SaaS Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/social-media-scheduler"
                    className="text-gray-300 hover:text-white"
                  >
                    Social Media Scheduler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/expense-tracker-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Expense Tracker Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/task-manager-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Task Manager Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-content-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Content Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-translator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Translator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-video-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Video Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-audio-processor"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Audio Processor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/analytics-dashboard"
                    className="text-gray-300 hover:text-white"
                  >
                    Analytics Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/customer-support-hub"
                    className="text-gray-300 hover:text-white"
                  >
                    Customer Support Hub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Zion AI Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/zion-ai-chatbot-builder"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Chatbot Builder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-code-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Code Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-content-moderator"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Content Moderator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-customer-support-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Customer Support Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-workflow-automator-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Workflow Automator Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-email-marketing-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Email Marketing Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-financial-forecaster"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Financial Forecaster
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-sales-predictor"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Sales Predictor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-translation-service"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Translation Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-voice-synthesis"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Voice Synthesis
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Advanced Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/blockchain-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Blockchain Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/iot-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    IoT Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/5g-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    5G Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quantum-computing-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Quantum Computing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/edge-computing-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Edge Computing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/augmented-reality-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Augmented Reality
                  </Link>
                </li>
                <li>
                  <Link
                    to="/virtual-reality-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Virtual Reality
                  </Link>
                </li>
                <li>
                  <Link
                    to="/robotic-process-automation"
                    className="text-gray-300 hover:text-white"
                  >
                    Robotic Process Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/low-code-platform"
                    className="text-gray-300 hover:text-white"
                  >
                    Low-Code Platform
                  </Link>
                </li>
                <li>
                  <Link
                    to="/serverless-architecture"
                    className="text-gray-300 hover:text-white"
                  >
                    Serverless Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/container-orchestration"
                    className="text-gray-300 hover:text-white"
                  >
                    Container Orchestration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-infrastructure"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/data-lake-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Data Lake Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-300 hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-300 hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partnerships"
                    className="text-gray-300 hover:text-white"
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies"
                    className="text-gray-300 hover:text-white"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tutorials"
                    className="text-gray-300 hover:text-white"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-gray-300 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/api-docs"
                    className="text-gray-300 hover:text-white"
                  >
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-gray-300 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-gray-300 hover:text-white"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/demo" className="text-gray-300 hover:text-white">
                    Live Demos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accessibility"
                    className="text-gray-300 hover:text-white"
                  >
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-gray-300 hover:text-white"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-cyan-500/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
                <p className="mb-2">
                  © 2025 Zion Tech Group. All rights reserved.
                </p>
                <p className="mb-2">
                  📞{" "}
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +1 (302) 464-0950
                  </a>
                </p>
                <p className="mb-2">
                  ✉️{" "}
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
=======
Footer.displayName = "Footer";

>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
export default Footer;
