import { Brain, Shield, Zap, Users, Target, BarChart3, ArrowRight, CheckCircle, } from 'lucide-react';
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FuturisticBackground from "../components/FuturisticBackground";

const AIServicesPage = () => {
  const stats = [
    { icon: <Brain className="w-8 h-8 text-cyan-400" />, value: "500+", label: "AI Models Deployed" },
    { icon: <Shield className="w-8 h-8 text-cyan-400" />, value: "99.9%", label: "Security Uptime" },
    { icon: <Zap className="w-8 h-8 text-cyan-400" />, value: "50%", label: "Efficiency Gain" },
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: "200+", label: "Happy Clients" }
  ];

  const services = [
    {
      title: "AI Video Generation",
      description: "Create stunning videos from text prompts using advanced AI models. Perfect for marketing, training, and content creation.",
      features: ["Text-to-video generation", "Custom branding", "Multiple formats", "Real-time preview"],
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "AI Content Creation",
      description: "Generate high-quality content for blogs, social media, and marketing materials using cutting-edge AI technology.",
      features: ["Blog post generation", "Social media content", "Email campaigns", "SEO optimization"],
      icon: <Target className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "AI Analytics & Insights",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.",
      features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "Data visualization"],
      icon: <BarChart3 className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your business with AI-driven security solutions that adapt and learn from threats.",
      features: ["Threat detection", "Automated response", "Risk assessment", "Compliance monitoring"],
      icon: <Shield className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent automation that reduces manual work.",
      features: ["Process automation", "Task scheduling", "Integration management", "Performance monitoring"],
      icon: <Zap className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "AI Consulting",
      description: "Get expert guidance on implementing AI solutions that align with your business goals.",
      features: ["Strategy development", "Implementation planning", "Training programs", "Ongoing support"],
      icon: <Users className="w-12 h-12 text-cyan-400" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify AI opportunities for maximum impact."
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Our experts design custom AI solutions tailored to your specific requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We implement the AI solutions with minimal disruption to your operations."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization to ensure peak performance and ROI."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions for Business</title>
        <meta name="description" content="Discover our comprehensive AI services including video generation, content creation, analytics, cybersecurity, and workflow automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI cybersecurity, business AI solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive suite of AI services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto text-center">
          <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Transform your business with our comprehensive suite of AI services. 
            From content generation to cybersecurity, we provide intelligent solutions 
            that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get ted</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3 xl md:text-4 xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              A proven methodology for successful AI implementation and transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4 xl mx-auto text-center">
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              t Your AI Journey
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;