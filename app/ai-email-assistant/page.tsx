import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageSquare, Brain, Shield, Zap, Mail, BarChart3, Settings, Users } from 'lucide-react';

export default function AIEmailAssistant() {
  const features = [
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      title: "Smart Classification",
      description:
        "Automatically categorize and prioritize emails based on content and sender.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: "Auto-Responses",
      description:
        "Generate intelligent responses using AI to handle common inquiries.",
    },
    {
      icon: <Brain className="w-6 h-6 text-yellow-400" />,
      title: "Sentiment Analysis",
      description:
        "Analyze email tone and sentiment to provide better customer service.",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-400" />,
      title: "Workflow Automation",
      description:
        "Create automated workflows to streamline your email management.",
    },
  ];

  const useCases = [
    {
      title: "Customer Support",
      description:
        "Handle customer inquiries efficiently with AI-powered responses and routing.",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Sales Outreach",
      description:
        "Generate personalized sales emails and follow-up sequences automatically.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Email Marketing",
      description:
        "Create compelling marketing campaigns with AI-generated content and optimization.",
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Internal Communications",
      description:
        "Streamline internal email processes and improve team collaboration.",
      icon: <Shield className="w-8 h-8 text-purple-400" />,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 emails/month",
        "Basic AI features",
        "Email classification",
        "Auto-responses",
        "Email support",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI features",
        "Sentiment analysis",
        "Workflow automation",
        "Priority support",
        "Advanced analytics",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Custom AI training",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Ai Email Assistant solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Email Assistant</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai email assistant solutions designed to meet your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

}