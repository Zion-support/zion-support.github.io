import React from "react";
import { Right, Circle, Workflow, Brain, Settings, Zap, Play } from "lucide-react";
import { Helmet } from "react-helmet-async";
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Analytics",
      description: "Get insights from your data with intelligent analytics",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Solutions",
      description: "Tailored automation solutions for your specific needs",
      icon: <Settings className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI automation platform for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">AI Automation Platform</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI automation platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className={`bg-gradient-to-r ${feature.color} p-6 rounded-xl`}>
                <div className="text-white">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </FuturisticCard>
            ))}
          </div>

          <div className="text-center">
            <FuturisticButton className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg">
              Get Started
            </FuturisticButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutomationPlatform;