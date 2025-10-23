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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI solutions, cloud infrastructure, and innovative technology services.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@ziontechgroup.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+1-555-0123"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h1 className="text-lg font-semibold mb-4">AI Services</h1>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h1 className="text-lg font-semibold mb-4">IT Services</h1>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h1 className="text-lg font-semibold mb-4">Micro SaaS</h1>
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h1 className="text-lg font-semibold mb-4">Company</h1>
            <ul className="space-y-2">
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

            <h3 className="text-lg font-semibold mb-4 mt-8">Support</h3>
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

export default Footer;