"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "next/navigation";
import { CheckCircle, Star, ArrowRight, Clock, Users, Shield } from "lucide-react";

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock service data - in a real app, this would come from an API
  const serviceData = {
    "ai-analytics-dashboard-pro": {
      name: "AI Analytics Dashboard Pro",
      description: "Advanced business intelligence platform with AI-powered insights and real-time analytics",
      price: "$299/month",
      category: "AI Services",
      features: [
        "Real-time Data Visualization",
        "AI-Powered Predictions",
        "Custom Dashboard Builder",
        "API Integration",
        "Mobile App Access",
        "24/7 Support",
        "Advanced Analytics",
        "Custom Reports",
        "Data Export"
      ],
      benefits: [
        "Increase decision speed by 40%",
        "Reduce manual reporting by 80%",
        "Improve forecast accuracy by 60%",
        "Save 20+ hours per week"
      ]
    },
    "cloud-infrastructure-management": {
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance",
      price: "$199/month",
      category: "IT Services",
      features: [
        "Auto-scaling Infrastructure",
        "99.9% Uptime Guarantee",
        "24/7 Monitoring",
        "Security Compliance",
        "Backup & Recovery",
        "Cost Optimization",
        "Load Balancing",
        "CDN Integration",
        "SSL Certificates"
      ],
      benefits: [
        "Reduce infrastructure costs by 30%",
        "Improve system reliability",
        "Scale automatically with demand",
        "Enhance security posture"
      ]
    },
    "project-management-pro": {
      name: "Project Management Pro",
      description: "Comprehensive project management platform with AI-powered insights and team collaboration",
      price: "$149/month",
      category: "Micro SAAS",
      features: [
        "Task Management",
        "Team Collaboration",
        "AI Progress Insights",
        "Resource Planning",
        "Time Tracking",
        "Reporting & Analytics",
        "Gantt Charts",
        "File Sharing",
        "Communication Tools"
      ],
      benefits: [
        "Increase project success rate by 40%",
        "Improve team productivity by 50%",
        "Reduce project delays by 60%",
        "Better resource utilization"
      ]
    }
  };

  const service = serviceData[id as keyof typeof serviceData] || serviceData["ai-analytics-dashboard-pro"];

  const stats = [
    { icon: <Clock className="w-6 h-6" />, label: "Setup Time", value: "24 hours" },
    { icon: <Users className="w-6 h-6" />, label: "Team Size", value: "5-50 users" },
    { icon: <Shield className="w-6 h-6" />, label: "Security", value: "Enterprise-grade" }
  ];

  return (
    <>
      <Helmet>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {service.category}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {service.name}
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center space-x-8 mb-8">
                  <div className="text-4xl font-bold text-blue-400">{service.price}</div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-300 ml-2">4.9/5 rating</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                    Schedule Demo
                  </button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-blue-400">{stat.icon}</div>
                      <div>
                        <div className="text-white font-semibold">{stat.value}</div>
                        <div className="text-gray-300 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to succeed with our comprehensive solution
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-semibold">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose This Solution?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven benefits that drive real business results
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-semibold">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers who trust us with their business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetailPage;