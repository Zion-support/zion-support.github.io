import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, Bot, Zap, BarChart3 } from 'lucide-react';

export default function MicroSaasAiChatbotBuilderPage() {
  const features = [
    {
      title: "Easy Setup",
      description: "Get your chatbot up and running in minutes with our simple setup process",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "AI-Powered Responses",
      description: "Natural language processing for intelligent and contextual conversations",
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: "Multi-Channel Support",
      description: "Deploy across websites, mobile apps, and messaging platforms",
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      title: "Analytics Dashboard",
      description: "Track performance and optimize with detailed conversation analytics",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Micro SAAS Services | Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our micro SAAS AI chatbot builder solution." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create intelligent chatbots for your business with our micro SAAS solution. No coding required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}