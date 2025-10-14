import React from "react";
import { Helmet } from "react-helmet-async";
import { Right, Star, Brain, BarChart3, Zap, FileText, MessageSquare, Shield } from "lucide-react";
import FuturisticBackground from "../components/FuturisticBackground";

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and develop AI roadmaps.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "AI Analytics",
      description: "Advanced analytics solutions powered by machine learning and AI algorithms.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline your business processes.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "AI Content Generation",
      description: "AI-powered content creation for marketing, documentation, and communication.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MessageSquare,
      title: "AI Customer Service",
      description: "Intelligent chatbots and customer service solutions powered by AI.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "AI-powered security solutions to protect your business and data.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const features = [
    "Custom AI model development",
    "Machine learning implementation",
    "Natural language processing",
    "Computer vision solutions",
    "Predictive analytics",
    "AI integration consulting"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including consulting, analytics, automation, and custom AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, AI automation" />
      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                Get Started
                <Right className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-gray-500 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our AI experts help you implement cutting-edge solutions that drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                Start Your AI Journey
                <Right className="w-5 h-5" />
              </button>
              <button className="px-10 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiServicesPage;