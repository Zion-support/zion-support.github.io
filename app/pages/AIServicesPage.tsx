import React from "react";
import { Helmet } from "react-helmet-async";
import { Brain, Bot, BarChart3, Shield, Zap, Target } from "lucide-react";

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies tailored to your business objectives and industry requirements.",
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Planning"]
    },
    {
      icon: Bot,
      title: "Conversational AI",
      description: "Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.",
      features: ["Natural Language Processing", "Multi-channel Integration", "Sentiment Analysis", "24/7 Availability"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.",
      features: ["Data Mining", "Pattern Recognition", "Forecasting Models", "Real-time Insights"]
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description: "Protect your AI systems and data with advanced security measures and compliance frameworks.",
      features: ["Threat Detection", "Data Privacy", "Model Security", "Compliance Management"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows using AI to increase efficiency and reduce costs.",
      features: ["Workflow Automation", "Document Processing", "Data Entry Automation", "Quality Control"]
    },
    {
      icon: Target,
      title: "Computer Vision",
      description: "Implement visual recognition systems for quality control, security, and enhanced user experiences.",
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Quality Inspection"]
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
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions 
            designed to drive innovation and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you implement cutting-edge solutions that drive growth and innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;