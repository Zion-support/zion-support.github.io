'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Calendar, Users, ArrowRight, CheckCircle, Star, Target, BarChart } from 'lucide-react';

export default function AiProjectManagementPage() {
  const features = [
    {
      title: "AI-Powered Planning",
      description: "Intelligent project planning with AI-driven resource allocation and timeline optimization",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Smart scheduling", "Resource optimization", "Risk assessment", "Timeline prediction"]
    },
    {
      title: "Team Collaboration",
      description: "Enhanced team collaboration with AI-powered communication and task management",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Real-time collaboration", "Task assignment", "Progress tracking", "Team analytics"]
    },
    {
      title: "Automated Workflows",
      description: "Streamline project workflows with AI automation and intelligent task routing",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Workflow automation", "Task routing", "Status updates", "Progress monitoring"]
    }
  ];

  const managementTypes = [
    {
      title: "Task Management",
      description: "AI-powered task creation, assignment, and tracking",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Resource Planning",
      description: "Intelligent resource allocation and capacity planning",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Timeline Management",
      description: "Smart scheduling and deadline management",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive project analytics and performance reporting",
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "40%", label: "Faster Delivery" },
    { number: "30%", label: "Cost Reduction" },
    { number: "50%", label: "Better Planning" },
    { number: "95%", label: "Team Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Project Management - Zion Tech Group</title>
        <meta name="description" content="Streamline your projects with AI-powered project management. Smart planning, team collaboration, and automated workflows." />
        <meta name="keywords" content="AI project management, project planning, team collaboration, workflow automation, project analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Project Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your projects with AI-powered project management that optimizes planning, 
              enhances team collaboration, and automates workflows for better results.
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
              AI-Powered Project Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI project management platform provides intelligent tools that help you plan, execute, and deliver projects successfully.
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

      {/* Management Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Project Management Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive project management tools that cover all aspects of project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTypes.map((type, index) => (
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
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI project management experts help you implement intelligent project management that delivers better results.
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