<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
=======
=======
import React from 'react';
import { Helmet } from "react-helmet-async";
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8


const testimonials = [
  {,
    name: "Sarah Johnson",
      role: "CEO",
      content: "Zion Tech Group has transformed our business with their AI solutions.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "TechCorp"
  },
  {,
    name: "Michael Chen",
      role: "CTO", ,
    content: "The performance improvements are remarkable. Highly recommended!",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "InnovateLabs"
  },
  {,
    name: "Emily Rodriguez",
      role: "Product Manager",
      content: "Outstanding support and cutting-edge technology solutions.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "FutureTech"
  }
export default function AIProjectManagementPro() {

  const features = [
    {,
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
        title: "AI-Powered Planning",
        description:
        "Intelligent project planning with automated task breakdown and resource allocation",
    },
    {,
    icon: <Clock className="w-6 h-6 text-purple-400" />,
        title: "Smart Scheduling",
        description:
        "Automated scheduling that considers dependencies, resources, and deadlines",
    },
    {,
    icon: <Target className="w-6 h-6 text-yellow-400" />,
        title: "Progress Tracking",
        description:
        "Real-time project monitoring with predictive analytics and risk assessment",
    },
    {,
    icon: <BarChart3 className="w-6 h-6 text-green-400" />,
        title: "Analytics & Insights",
        description:
        "Comprehensive reporting and analytics to optimize project performance",
    },

  const projectFeatures = [
    {,
    category: "Project Planning",
        items: [
        "AI Task Breakdown",
        "Resource Optimization",
        "Timeline Generation",
        "Risk Assessment",
        "Dependency Mapping",
        "Milestone Tracking",
      ],
    },
    {,
    category: "Team Management",
        items: [
        "Team Collaboration",
        "Role Assignment",
        "Workload Balancing",
        "Communication Tools",
        "Progress Updates",
        "Performance Tracking",
      ],
    },
    {,
    category: "Automation",
        items: [
        "Workflow Automation",
        "Notification System",
        "Report Generation",
        "Status Updates",
        "Deadline Alerts",
        "Quality Checks",
      ],
    },
    {,
    category: "Integration",
        items: [
        "Tool Integration",
        "API Connectivity",
        "Data Synchronization",
        "Third-party Apps",
        "Cloud Storage",
        "Version Control",
      ],
    },

  const pricingPlans = [
    {,
    name: "Professional",
        price: "$99",
        period: "/month",
        description: "Perfect for small teams",
        features: [
        "Up to 10 projects",
        "Basic AI features",
        "Team collaboration",
        "Email support",
        "Basic reporting",
        "Mobile access",
      ],
        popular: false,
    },
    {,
    name: "Enterprise",
        price: "$299",
        period: "/month",
        description: "Ideal for growing businesses",
        features: [
        "Unlimited projects",
        "Advanced AI features",
        "Custom workflows",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
      ],
        popular: true,
    },
    {,
    name: "Custom",
        price: "Contact Us",
        period: "",
        description: "Tailored solutions",
        features: [
        "Custom features",
        "On-premise deployment",
        "24/7 support",
        "Training & consulting",
        "White-label solution",
        "SLA guarantee",
      ],
        popular: false,
    },

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function aiProjectManagementPro() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Project Management Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Project Management Pro</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function AiProjectManagementProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced ai project management pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Project Management Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function AiprojectmanagementproPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Project Management Pro</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
"use client";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======

"use client";
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
