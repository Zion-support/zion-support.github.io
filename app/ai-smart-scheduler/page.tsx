import React from 'react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Calendar } from 'lucide-react';

import { Helmet } from 'react-helmet-async';
const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      content: "The AI financial analysis platform has revolutionized our decision-making process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Manager",
      company: "FinancePro",
      content: "Incredible accuracy and insights that have improved our portfolio performance.",
      rating: 5
    }
  ];
export default function AISmartScheduler() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      role: "Operations Manager",
      content: "AI Smart Scheduler has revolutionized our team coordination. It automatically finds the best meeting times and eliminates scheduling conflicts.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Global Consulting",
      role: "Project Director",
      content: "The AI understands our team's preferences and automatically schedules meetings that work for everyone. It's like having a personal assistant.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Remote Teams Inc",
      role: "Team Lead",
      content: "Managing a distributed team across time zones is now effortless. The AI handles all the complexity and finds optimal meeting times.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Scheduling",
      description:
        "Intelligent scheduling that learns from your patterns and preferences",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Team Coordination",
      description:
        "Seamlessly coordinate meetings across multiple time zones and schedules",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Auto-Optimization",
      description:
        "Automatically finds the best meeting times for maximum productivity",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: "Global Integration",
      description: "Works with all major calendar platforms and time zones",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 5 team members",
        "Basic AI scheduling",
        "Calendar integration",
        "Email notifications",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 team members",
        "Advanced AI optimization",
        "Custom meeting templates",
        "Analytics dashboard",
        "Priority support",
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
        "Unlimited team members",
        "Custom AI training",
        "White-label options",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations",
      ],
      popular: false,
    },
  ];

export default function AiSmartSchedulerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Smart Scheduler - Zion Tech Group</title>
        <meta name="description" content="Ai Smart Scheduler solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Smart Scheduler</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai smart scheduler solutions designed to meet your business needs.
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