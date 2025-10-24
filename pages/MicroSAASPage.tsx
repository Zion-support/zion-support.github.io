"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Zap, BarChart, Target, TrendingUp, CheckCircle, ArrowRight, Star } from "lucide-react";

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const services = [
    {
      id: "project-management-pro",
      name: "Project Management Pro",
      description: "Comprehensive project management platform with AI-powered insights and team collaboration",
      price: "$149/month",
      category: "Productivity",
      features: [
        "Task Management",
        "Team Collaboration",
        "AI Progress Insights",
        "Resource Planning",
        "Time Tracking",
        "Reporting & Analytics"
      ],
      benefits: [
        "Increase project success rate by 40%",
        "Improve team productivity by 50%",
        "Reduce project delays by 60%",
        "Better resource utilization"
      ]
    },
    {
      id: "api-management-platform",
      name: "API Management Platform",
      description: "Complete API lifecycle management with monitoring, security, and developer portal",
      price: "$179/month",
      category: "Development",
      features: [
        "API Gateway",
        "Rate Limiting",
        "Authentication",
        "Analytics Dashboard",
        "Developer Portal",
        "Documentation Generator"
      ],
      benefits: [
        "Reduce API development time by 50%",
        "Improve API security by 90%",
        "Increase developer productivity",
        "Better API performance monitoring"
      ]
    },
    {
      id: "monitoring-suite",
      name: "Application Monitoring Suite",
      description: "Real-time application performance monitoring with alerting and root cause analysis",
      price: "$129/month",
      category: "Monitoring",
      features: [
        "Real-time Monitoring",
        "Performance Analytics",
        "Alert Management",
        "Root Cause Analysis",
        "Custom Dashboards",
        "Integration APIs"
      ],
      benefits: [
        "Reduce downtime by 80%",
        "Improve application performance",
        "Faster issue resolution",
        "Better user experience"
      ]
    },
    {
      id: "automation-tools",
      name: "Business Automation Tools",
      description: "Workflow automation platform with drag-and-drop builder and integration capabilities",
      price: "$99/month",
      category: "Automation",
      features: [
        "Drag-and-Drop Builder",
        "Workflow Templates",
        "Integration Library",
        "Conditional Logic",
        "Scheduling & Triggers",
        "Analytics & Reporting"
      ],
      benefits: [
        "Automate 70% of repetitive tasks",
        "Reduce manual errors by 85%",
        "Improve process efficiency",
        "Save 20+ hours per week"
      ]
    },
    {
      id: "email-marketing-suite",
      name: "Email Marketing Suite",
      description: "Advanced email marketing platform with AI-powered personalization and analytics",
      price: "$89/month",
      category: "Marketing",
      features: [
        "AI Personalization",
        "Email Templates",
        "A/B Testing",
        "Analytics Dashboard",
        "List Management",
        "Automation Workflows"
      ],
      benefits: [
        "Increase email open rates by 40%",
        "Improve click-through rates by 60%",
        "Better customer engagement",
        "Higher conversion rates"
      ]
    },
    {
      id: "document-management",
      name: "Document Management System",
      description: "Secure document storage, collaboration, and workflow management platform",
      price: "$79/month",
      category: "Document Management",
      features: [
        "Secure Storage",
        "Version Control",
        "Collaboration Tools",
        "Workflow Management",
        "Search & Indexing",
        "Access Control"
      ],
      benefits: [
        "Improve document accessibility by 70%",
        "Reduce document search time by 80%",
        "Better collaboration efficiency",
        "Enhanced security and compliance"
      ]
    }
  ];

  const categories = ["All", "Productivity", "Development", "Monitoring", "Automation", "Marketing", "Document Management"];

  const stats = [
    { number: "200+", label: "Micro SAAS Solutions" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "4.7/5", label: "Client Rating" }
  ];

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable micro SAAS solutions designed for rapid deployment and growth, perfect for startups and enterprises." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <span className="text-purple-400 font-bold">{service.price}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <Star className="h-4 w-4 text-yellow-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Micro SAAS?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create powerful, scalable solutions that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;