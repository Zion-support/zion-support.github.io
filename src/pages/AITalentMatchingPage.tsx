import React from "react";
import { ServiceLandingTemplate } from "@/components/ServiceLandingTemplate";
import { Bot, Users, TrendingUp } from 'lucide-react';
import { Star } from 'lucide-react';

export default function AITalentMatchingPage() {
  const benefits = [
    {
      icon: Bot,
      title: "AI-Powered Matching",
      description: "Advanced algorithms match candidates with the perfect roles based on skills, experience, and cultural fit."
    },
    {
      icon: Users,
      title: "Talent Pool Access",
      description: "Access to a vast network of pre-vetted professionals across various industries and skill levels."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track hiring success rates, time-to-fill metrics, and candidate satisfaction scores."
    }
  ];

  const features = [
    "Intelligent candidate screening and ranking",
    "Automated interview scheduling and coordination",
    "Real-time collaboration tools for hiring teams",
    "Comprehensive candidate profiles and assessments",
    "Integration with popular HR and ATS systems",
    "Advanced reporting and analytics dashboard"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$99/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 job postings",
        "Basic AI matching",
        "Standard support",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: "$299/month",
      description: "Ideal for growing companies",
      features: [
        "Unlimited job postings",
        "Advanced AI matching",
        "Priority support",
        "Advanced analytics",
        "Team collaboration tools"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "Advanced security features"
      ]
    }
  ];

  return (
    <ServiceLandingTemplate
      title="AI Talent Matching Platform"
      subtitle="Revolutionize your hiring process with intelligent candidate matching and automated recruitment workflows"
      description="Our AI-powered talent matching platform uses advanced machine learning algorithms to connect the right candidates with the right opportunities, reducing time-to-hire and improving quality of matches."
      benefits={benefits}
      features={features}
      pricing={pricing}
      ctaText="Start Hiring Smarter"
      ctaLink="/contact"
    />
  );
}