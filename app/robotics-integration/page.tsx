'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Settings, Zap, Globe, Shield, Clock, BarChart, Users, Brain, Activity, Cpu, Wrench, Target } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const RoboticsIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: "Robotics Integration",
      description: "Seamless integration of robotic systems with existing infrastructure and workflows"
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Intelligent automation powered by advanced AI algorithms and machine learning"
    },
    {
      icon: Globe,
      title: "Control Systems",
      description: "Advanced control systems for precise robot operation and coordination"
    },
    {
      icon: Shield,
      title: "Safety Protocols",
      description: "Comprehensive safety systems and protocols for secure robotic operations"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and diagnostics for optimal robot performance"
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Detailed analytics and reporting for robotic system optimization"
    }
  ];

  const applications = [
    {
      title: "Manufacturing",
      description: "Automated assembly lines, quality control, and production optimization",
      icon: "🏭",
      features: ["Assembly Automation", "Quality Control", "Material Handling", "Welding & Cutting"]
    },
    {
      title: "Healthcare",
      description: "Surgical robots, patient care, and medical device automation",
      icon: "🏥",
      features: ["Surgical Assistance", "Patient Care", "Lab Automation", "Rehabilitation"]
    },
    {
      title: "Logistics",
      description: "Warehouse automation, delivery robots, and supply chain optimization",
      icon: "📦",
      features: ["Warehouse Robots", "Delivery Systems", "Inventory Management", "Sorting Systems"]
    },
    {
      title: "Agriculture",
      description: "Precision farming, crop monitoring, and automated harvesting",
      icon: "🌾",
      features: ["Precision Farming", "Crop Monitoring", "Automated Harvesting", "Livestock Management"]
    }
  ];

  const benefits = [
    {
      title: "Productivity Increase",
      value: "300%",
      description: "Significant productivity gains through robotic automation"
    },
    {
      title: "Cost Reduction",
      value: "50%",
      description: "Reduced operational costs and improved efficiency"
    },
    {
      title: "Quality Improvement",
      value: "95%",
      description: "Consistent quality and precision in operations"
    },
    {
      title: "Safety Enhancement",
      value: "80%",
      description: "Reduced workplace accidents and improved safety"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Robotics Integration Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced robotics integration with AI-powered automation and control systems. 
            Transform your operations with intelligent robotic solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-400">Productivity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-400">Quality</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Integration Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive robotics integration solutions for modern industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Robotics solutions across diverse industries and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{application.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{application.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{application.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {application.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable results from our robotics integration projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our systematic approach to successful robotics integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Assessment</h3>
              <p className="text-gray-300 text-sm">Comprehensive analysis of current systems and requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Design</h3>
              <p className="text-gray-300 text-sm">Custom robotics solution design and architecture planning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Integration</h3>
              <p className="text-gray-300 text-sm">Seamless integration with existing systems and workflows</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Optimization</h3>
              <p className="text-gray-300 text-sm">Continuous monitoring and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integration Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible solutions for robotics integration projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Basic Integration</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$4,500/mo</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Single robot integration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Basic automation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Standard support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Training included
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Integration</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$8,500/mo</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Multi-robot systems
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  AI-powered automation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom development
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solution</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Complete automation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom robotics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  SLA guarantees
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  White-label solutions
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Integrate Robotics?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your operations with intelligent robotics integration. 
            Get started with a free consultation today.
          </p>
          
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoboticsIntegrationPage;