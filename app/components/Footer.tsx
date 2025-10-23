"use client";
import React from "react";

import Link from "next/link";
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

  const quickLinks = [
    { name: "Free Consultation", href: "/consultation" },
    { name: "Request Demo", href: "/demo" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "Support", href: "/support" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span>Zion Tech Group</span>
            </div>
            <p>Advanced AI and IT solutions for modern businesses. We help you
              leverage cutting-edge technology to drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span>Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path> </path>svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span>LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path> </path>svg>
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3>AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight>{service.name}
                  </ArrowRight>Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3>IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight>{service.name}
                  </ArrowRight>Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3>Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight>{service.name}
                  </ArrowRight>Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3>Company</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link>{link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3>Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link>{link.name}
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
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div>© 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link>Privacy Policy
            </Link>
            <Link>Terms of Service
            </Link>
            <Link>Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
