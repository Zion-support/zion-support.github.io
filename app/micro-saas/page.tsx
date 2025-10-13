import React from 'react';
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mic, Brain, Zap, Shield, BarChart3, Users, Settings } from 'lucide-react';

export default function MicroSaasPage() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const generalFeatures = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Analytics Pro',
      description: 'Advanced AI-powered analytics platform for business intelligence and data insights.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      link: '/zion-ai-analytics-pro',
      price: '$99/month',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Email Marketing Pro',
      description: 'Complete email marketing automation platform with AI-powered personalization.',
      features: ['AI Personalization', 'Automated Campaigns', 'Advanced Analytics', 'A/B Testing'],
      link: '/zion-email-marketing-pro',
      price: '$79/month',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Monitor Pro',
      description: 'Real-time security monitoring and threat detection for your digital assets.',
      features: ['Real-time Monitoring', 'Threat Detection', 'Automated Alerts', 'Compliance Reports'],
      link: '/zion-security-monitor-pro',
      price: '$149/month',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Business Intelligence Pro',
      description: 'Comprehensive business intelligence platform with advanced reporting and analytics.',
      features: ['Custom Dashboards', 'Data Visualization', 'Report Automation', 'API Integration'],
      link: '/zion-business-intelligence-pro',
      price: '$199/month',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'CRM Pro',
      description: 'Advanced customer relationship management with AI-powered insights and automation.',
      features: ['AI Insights', 'Lead Scoring', 'Automated Workflows', 'Advanced Analytics'],
      link: '/zion-crm-pro',
      price: '$129/month',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Project Manager Pro',
      description: 'Comprehensive project management platform with team collaboration and automation.',
      features: ['Team Collaboration', 'Task Automation', 'Time Tracking', 'Resource Planning'],
      link: '/zion-project-manager-pro',
      price: '$89/month',
      popular: false
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 micro SaaS tools",
        "Basic features",
        "Email support",
        "Standard templates",
        "Basic analytics",
        "1 user account"
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 micro SaaS tools",
        "Advanced features",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "Up to 5 user accounts",
        "API access",
        "White-label options"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited micro SaaS tools",
        "Premium features",
        "Dedicated support",
        "Fully custom solutions",
        "Enterprise analytics",
        "Unlimited user accounts",
        "Full API access",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      text: "Zion Tech Group's micro SaaS solutions have transformed our business operations. The AI-powered tools are incredibly intuitive and powerful.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      rating: 5,
      avatar: "SJ"
    },
    {
      text: "The level of customization and support we received was outstanding. Our productivity has increased by 300% since implementing their solutions.",
      author: "Michael Chen",
      role: "CTO, DataFlow Systems",
      rating: 5,
      avatar: "MC"
    },
    {
      text: "Best investment we've made for our business. The micro SaaS approach allows us to scale exactly what we need, when we need it.",
      author: "Emily Rodriguez",
      role: "Operations Director, GrowthCorp",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Professional micro SaaS services for modern business solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional micro SaaS services for modern business solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}