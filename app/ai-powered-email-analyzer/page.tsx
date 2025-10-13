import React from 'react';
import { Users, ArrowRight, CheckCircle, Star, Globe, Shield, Zap, Brain, BarChart3, Target, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
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
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

const AIPoweredEmailAnalyzerPage = () => {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze email content, sentiment, and intent with 99.5% accuracy."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Detection",
      description: "Automatically detect phishing attempts, spam, and malicious content to protect your organization."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting to track email performance and communication trends."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Processing",
      description: "Process and analyze emails in real-time with instant notifications and alerts."
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

}