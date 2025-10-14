import React from "react";"react-helmet-async;"
import { Right, Star, Brain, BarChart3, Zap, FileText, MessageSquare, Shield } from "lucide-react;"
import { Right, Star, Brain, BarChart3, Zap, FileText, MessageCircle, Shield } from "lucide-react;"
import FuturisticBackground from "../components/FuturisticBackground;"
const AiServicesPage: React.FC = () => {"
  const services = [{icon: "Brain","";
      title: ""AI Consulting"",";""
      description: ""Strategic AI consulting to help you identify opportunities and develop AI roadmaps."",";""
      color: ""from-purple-50 to-pink-50";"}"
    },
    {
      icon: "BarChart3",""
      title: ""AI Analytics"",";""
      description: ""Advanced analytics solutions powered by machine learning and AI algorithms."",";""
      color: ""from-blue-50 to-cyan-50";"}"
    },
    {
      icon: "Zap",""
      title: ""AI Automation"",";""
      description: ""Intelligent automation solutions to streamline your business processes."",";""
      color: ""from-green-50 to-emerald-50";"}"
    },
    {
      icon: "FileText",""
      title: ""AI Content Generation"",";""
      description: ""AI-powered content creation for marketing", documentation, and communication.",";""
      color: ""from-orange-50 to-red-50";"}"
    },
    {
      icon: "MessageSquare",""
      title: ""AI Customer Service"",";""
      description: ""Intelligent chatbots and customer service solutions powered by AI."",";""
      color: ""from-indigo-50 to-purple-50";"}"
    },
    {
      icon: "ico",n: Shield",
      title: ""AI Security"",";"
      description: ""AI-powered security solutions to protect your business and data."",";"
      color: ""from-cyan-50 to-blue-50";""
import React from "react";"
import { Helmet } from "react-helmet-async";"
import { Right, Brain, BarChart3, Zap, FileText, MessageSquare, Shield } from "lucide-react";"
import FuturisticBackground from "../components/FuturisticBackground";"
import React from "react"
import { Helmet } from "react-helmet-async"
import { Right, Star, Brain, BarChart3, Zap, FileText, MessageCircle, Shield } from "lucide-react"
import FuturisticBackground from "../components/FuturisticBackground"
const AiServicesPage: React.FC = () => {"
  const services = [
    {
      icon: "Brain",
      title: ""AI Consulting"","
      description: ""Strategic AI consulting to help you identify opportunities and develop AI roadmaps."","
      color: ""from-purple-50 to-pink-50""
    },
    {
      icon: "BarChart3",
      title: ""AI Analytics"","
      description: ""Advanced analytics solutions powered by AI to extract insights from your data."","
      color: ""from-blue-50 to-cyan-50""
    },
    {
      icon: "Zap",
      title: ""AI Automation"","
      description: ""Automate repetitive tasks and processes with intelligent AI solutions."","
      color: ""from-green-50 to-emerald-50""
    },
    {
      icon: "FileText",
      title: ""AI Content Generation"","
      description: ""Generate high-quality content at scale using advanced AI models."","
      color: ""from-orange-50 to-red-50""
    },
    {
      icon: "MessageSquare",
      title: ""AI Chatbots"","
      description: ""Intelligent chatbots and virtual assistants for customer support."","
      color: ""from-indigo-50 to-purple-50""
    },
    {icon: "Shield",
      title: ""AI Security"","
      description: ""AI-powered security solutions to protect your business from threats."","
      color: ""from-red-50 to-pink-50""
  }
  ]
  const features = [
    {
      title: ""Custom AI Solutions"","
      description: ""Tailored AI implementations designed specifically for your business needs."","
      icon: ""🤖""
    },
    {
      title: ""Machine Learning Models"","
      description: ""Advanced ML models trained on your data for optimal performance."","
      icon: ""🧠""
    },
    {
      title: ""Real-time Processing"","
      description: ""High-performance AI systems that process data in real-time."","
      icon: ""⚡""
    },{title: ""Scalable Architecture"",";
      description: ""AI solutions that grow with your business and handle increasing loads."",";
      icon: ""📈";",icon: "Shield","";
      title: ""AI Security"",";""
      description: ""AI-powered security solutions to protect your business and data."",";""
      color: ""from-cyan-50 to-blue-50";"}"
    }
  ];
  const testimonials = [{name: "Dr. Sarah Johnson",";
      company: "MedTech Solutions",";
      role: "CTO",""";
      content: "Zion"s AI healthcare solutions have revolutionized our diagnostic capabilities. We"ve seen a 40% improvement in accuracy.",";""
      rating: "5;"},
    {name: "Michael Chen","
      company: "E-commerce Plus","
      role: "CEO","""
      content: "The AI automation tools have transformed our operations. We"ve reduced manual work by 80% and increased productivity significantly.",";""
      rating: "5;"},
    {name: "Emily Rodriguez","
      company: "FinanceFlow","
      role: "Head of Analytics","
      content: "Their AI analytics platform has given us insights we never had before. Our decision-making process is now data-driven and highly effective.","
      rating: "5;"}
  ]
  return (
    <div className="min-h-screen bg-slate-90">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including consulting, analytics, automation, and more." />
      </Helmet>
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Services
            </h$1>
            <p className="text-xl text-gray-30 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI services designed to drive innovation and growth.
            </p>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service, index) => (
                <div
                  key={index}
                  className="bg-white"/10 backdrop-blur-lg rounded-xl p-6 border border-white"/20 hover:bg-white"/20 transition-all duration-30"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white"` />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h$1>
                  <p className="text-gray-30 mb-4">
                    {service.description}
                  </p>
                  <button className="flex items-center text-white hover:text-gray-30 transition-colors">
                    Learn More
                    <Right className="w-4 h-4 ml-2" />
                  </button>
                </div>)}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h$1>
            <p className="text-xl text-gray-30 mb-8">
              Let our AI experts help you unlock the full potential of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-60 to-cyan-60 text-white px-8 py-3 rounded-lg hover: from-purple-70 hover:to-cyan-70 transition-all duration-30">
                Get Started
              </button>
              <button className="border border-white"/30 text-white px-8 py-3 rounded-lg hover:bg-white"/10 transition-all duration-30">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )};
        {/* Services Grid */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Services
            </h$1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service, index) => (
                <div key={index} className="bg-slate-80 rounded-lg p-6 hover: bg-slate-70 transition-all duration-30 transform hover:scale-10o5">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white"` />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h$1>
                  <p className="text-gray-30 mb-4">{service.description}</p>
                  <button className="text-purple-40 hover:text-purple-30 font-medium flex items-center">
                    Learn More <Right className="w-4 h-4 ml-1" />
                  </button>
                </div>)}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Services?
            </h$1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map(feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h$1>
                  <p className="text-gray-30">{feature.description}</p>
                </div>)}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h$1>
            <p className="text-xl text-gray-30 mb-8">
              Let"s discuss how our AI services can help you achieve your goals."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-60 to-cyan-60 hover: from-purple-70 hover:to-cyan-70 text-white font-bold py-3 px-8 rounded-lg transition-all duration-30 transform hover:scale-10o5">
                Schedule Consultation
              </button>
              <button className="border border-purple-50 text-purple-40 hover: bg-purple-50 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-30">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )}
export default AiServicesPage
