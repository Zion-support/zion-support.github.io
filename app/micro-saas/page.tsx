'use client';

import React from 'react';
import { 
  Zap, 
  BarChart, 
  Users, 
  FileText, 
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Rocket,
  Code,
  Cloud,
  Smartphone,
  TrendingUp
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      name: "AI Project Manager Pro",
      description: "Intelligent project management with predictive analytics and automated resource allocation",
      price: "$99/mo",
      features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking"],
      icon: BarChart,
      popular: true
    },
    {
      name: "AI Analytics Dashboard",
      description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
      price: "$149/mo",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization"],
      icon: TrendingUp,
      popular: true
    },
    {
      name: "AI Customer Support Bot",
      description: "24/7 AI-powered customer support with natural language processing and instant responses",
      price: "$199/mo",
      features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management"],
      icon: Users,
      popular: false
    },
    {
      name: "AI Content Generator",
      description: "Create high-quality content automatically with AI-powered writing and editing tools",
      price: "$79/mo",
      features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice"],
      icon: FileText,
      popular: true
    },
    {
      name: "AI Social Media Manager",
      description: "Automated social media management with AI-powered content creation and scheduling",
      price: "$129/mo",
      features: ["Content Creation", "Auto Posting", "Engagement Analysis", "Multi-platform"],
      icon: Smartphone,
      popular: true
    },
    {
      name: "AI Email Marketing Suite",
      description: "Intelligent email campaigns with AI-powered personalization and optimization",
      price: "$89/mo",
      features: ["Email Automation", "Personalization", "A/B Testing", "Analytics"],
      icon: Settings,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Powerful AI-powered micro SaaS tools to streamline your business operations. Affordable, scalable, and designed for modern businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-green-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-400">Integrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, powerful AI tools designed to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-green-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-4">{service.price}</div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-green-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free trial today and discover how our micro SaaS tools can transform your business operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-green-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;