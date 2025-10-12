'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, Users, Zap, Shield } from 'lucide-react'

export default function AIChatbotBuilderPage() {

  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: '24/7 Customer Support',
      description: 'Provide round-the-clock customer support with intelligent chatbots that never sleep.',
      benefits: ['Instant responses', 'Multi-language support', 'Context awareness', 'Escalation handling']
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'Lead Qualification',
      description: 'Automatically qualify leads and route them to the right team member instantly.',
      benefits: ['Smart routing', 'Lead scoring', 'CRM integration', 'Follow-up automation']
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR compliance and data protection features.',
      benefits: ['Data encryption', 'Privacy controls', 'Audit trails', 'Compliance reporting']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | Intelligent Customer Support</title>
        <meta name="description" content="Build intelligent chatbots for your business with our AI-powered chatbot builder. 24/7 customer support, lead qualification, and more." />
        <meta name="keywords" content="AI chatbot, chatbot builder, customer support, lead qualification, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build intelligent chatbots for your business with our AI-powered platform. Create, deploy, and manage chatbots that understand context and provide exceptional customer experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              {feature.icon}
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Build Your AI Chatbot?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start building intelligent chatbots that will transform your customer experience and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start Building Today
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}