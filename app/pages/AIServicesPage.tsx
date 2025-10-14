import React from "react";"
import { Helmet } from "react-helmet-async";"
import { Brain, Bot, BarChart3, Shield, Zap, Target } from "lucide-react;"
const AIServicesPage: React.FC = () => {"
  const services = [{icon: "Brain",title: ""AI Strategy & Consulting"",";"
      description: ""Develop comprehensive AI strategies tailored to your business objectives and industry requirements."",";"
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Planning"]";"
    },
    {
      icon: "Bot",
      title: ""Conversational AI"",";"
      description: ""Build intelligent chatbots and virtual assistants that enhance customer experience and automate support."",";"
      features: ["Natural Language Processing", "Multi-channel Integration", "Sentiment Analysis", "24/7 Availability"]";"
    },
    {
      icon: "BarChart3",
      title: ""Predictive Analytics"",";"
      description: ""Leverage machine learning to predict trends", behaviors, and outcomes for better decision making.",";"
      features: ["Data Mining", "Pattern Recognition", "Forecasting Models", "Real-time Insights"]";"
    },
    {
      icon: "Shield",
      title: ""AI Security Solutions"",";"
      description: ""Protect your AI systems and data with advanced security measures and compliance frameworks."",";"
      features: ["Threat Detection", "Data Privacy", "Model Security", "Compliance Management"]";"
    },
    {
      icon: "Zap",
      title: ""Process Automation"",";"
      description: ""Automate repetitive tasks and workflows using AI to increase efficiency and reduce costs."",";"
      features: ["Workflow Automation", "Document Processing", "Data Entry Automation", "Quality Control"]";"
    },
    {icon: "Target",
      title: ""Computer Vision"",";"
      description: ""Implement visual recognition systems for quality control", security, and enhanced user experiences.",";"
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Quality Inspection"]";"
    }
  ];
const AIServicesPage: React.FC = () => {"
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90 via-purple-90 to-slate-90">
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation solutions." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, automation, artificial intelligence" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-40 to-purple-40">Services</span>
          </h$1>
          <p className="text-xl text-gray-30 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions.;
            From strategy to implementation, we help you harness the power of AI.;
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map(service, _index) => {
            const Icon = service.icon;
            return (
              <div key={_index} className="bg-white"/10 backdrop-blur-sm rounded-xl p-6 border border-white"/20 hover:border-white"/40 transition-all duration-30">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h$1>
                </div>
                <p className="text-gray-30 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map(feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-40 flex items-center">
                      <span className="w-2 h-2 bg-blue-40 rounded-full mr-3"></span>
                      {feature}
                    </li>)}
                </ul>
              </div>
            )})}
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white"/10 backdrop-blur-sm rounded-xl p-8 border border-white"/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h$1>
            <p className="text-gray-30 mb-6">
              Our AI experts are ready to help you implement the right solutions for your specific needs.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-50 to-purple-50 text-white px-8 py-3 rounded-lg font-semibold hover: from-blue-60 hover:to-purple-60 transition-all duration-30">
                Get Started Today;
              </button>
              <button className="border border-white"/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white"/10 transition-all duration-30">
                Schedule Consultation;
              </button>
            </div>
          </div>
const AIServicesPage: React.FC = () => {"
  return (
    <>
      <Helmet>
        <title>AIServicesPage - Zion Tech Group</title>
        <meta name="description" content="AIServicesPage - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-90 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AIServicesPage</h$1>
          <p className="text-gray-30">This page is under construction.</p>
        </div>
      </div>
    </div>;  )}export default AIServicesPage;
