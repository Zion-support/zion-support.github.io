import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  CheckCircle, 
  Star, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  Database, 
  Settings, 
  Monitor, 
  Sparkles, 
  Lightbulb, 
  TrendingDown,
  Users,
  Award,
  Clock,
  Smartphone
} from "lucide-react";

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      id: 1,
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered analytics platform for business intelligence",
      features: ["Real-time analytics", "Predictive insights", "Custom dashboards", "Data visualization"],
      price: "$99/month",
      icon: <Brain className="w-8 h-8" />,
      href: "/zion-ai-analytics-pro"
    },
    {
      id: 2,
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI automation",
      features: ["AI-powered lead scoring", "Automated follow-ups", "Customer insights", "Sales forecasting"],
      price: "$149/month",
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-crm-pro"
    },
    {
      id: 3,
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered automation",
      features: ["AI video creation", "Auto-editing", "Voice synthesis", "Multi-platform export"],
      price: "$199/month",
      icon: <Zap className="w-8 h-8" />,
      href: "/zion-ai-video-generator"
    }
  ];

  const features = [
    {
      title: "AI-Powered Automation",
      description: "Leverage advanced AI to automate complex business processes and workflows.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights and analytics to make data-driven decisions.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Scalable Infrastructure",
      description: "Built on cloud infrastructure that scales with your business needs.",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SAAS solutions designed to streamline your business operations with AI-powered automation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our innovative micro SAAS applications designed for modern enterprises.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Micro SAAS Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <p className="text-cyan-400 font-bold">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}