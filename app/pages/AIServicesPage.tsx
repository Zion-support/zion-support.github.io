import React from "react";
import { Helmet } from "react-helmet-async";
import { Brain, Bot, BarChart3, Shield, Zap, Target } from "lucide-react";

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies tailored to your business objectives and industry requirements.",
      features: [
        "AI Readiness Assessment",
        "Technology Roadmap",
        "ROI Analysis",
        "Implementation Planning"
      ]
    },
    {
      icon: Bot,
      title: "Conversational AI",
      description: "Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.",
      features: [
        "Natural Language Processing",
        "Multi-channel Integration",
        "Sentiment Analysis",
        "24/7 Availability"
      ]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.",
      features: [
        "Data Mining",
        "Pattern Recognition",
        "Forecasting Models",
        "Real-time Insights"
      ]
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description: "Protect your AI systems and data with advanced security measures and compliance frameworks.",
      features: [
        "Threat Detection",
        "Data Privacy",
        "Model Security",
        "Compliance Management"
      ]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows using AI to increase efficiency and reduce costs.",
      features: [
        "Workflow Automation",
        "Document Processing",
        "Data Entry Automation",
        "Quality Control"
      ]
    },
    {
      icon: Target,
      title: "Computer Vision",
      description: "Implement visual recognition systems for quality control, security, and enhanced user experiences.",
      features: [
        "Image Recognition",
        "Object Detection",
        "Facial Recognition",
        "Quality Inspection"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation solutions." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, automation, artificial intelligence" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-cyan-600 text-cyan-400 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-cyan-400 mb-4">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts help you implement cutting-edge solutions that drive real business value.
          </p>
          <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;