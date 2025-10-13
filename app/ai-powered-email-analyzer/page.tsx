import React from 'react';
import { Users, ArrowRight, CheckCircle, Star, Globe, Shield, Zap, Brain, BarChart3, Target, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';

const AIPoweredEmailAnalyzerPage = () => {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced machine learning algorithms analyze email tone, sentiment, and emotional context to help you craft perfect responses."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Smart Response Suggestions",
      description: "Get intelligent, context-aware response suggestions that match your communication style and business objectives."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Email Performance Analytics",
      description: "Track open rates, response times, and engagement metrics with detailed analytics and actionable insights."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance, data encryption, and secure cloud storage for all email data."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Real-time Processing",
      description: "Instant analysis and suggestions as you type, with lightning-fast processing powered by advanced AI models."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Team Collaboration",
      description: "Share insights across teams, set up approval workflows, and maintain consistent communication standards."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams and individuals",
      features: [
        "Up to 1,000 emails/month",
        "Basic sentiment analysis",
        "Response suggestions",
        "Email templates",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI analysis",
        "Custom response templates",
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Custom integrations",
        "Dedicated support",
        "On-premise deployment"
      ],
      popular: false
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

export default function AiPoweredEmailAnalyzerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Powered Email Analyzer - Zion Tech Group</title>
        <meta name="description" content="Ai Powered Email Analyzer solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Powered Email Analyzer</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai powered email analyzer solutions designed to meet your business needs.
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
