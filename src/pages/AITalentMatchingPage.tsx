import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Bot, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI-Powered Matching",
    description: "Advanced algorithms analyze skills, experience, and cultural fit"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Quality Candidates",
    description: "Pre-screened professionals matched to your specific needs"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Higher Success Rate",
    description: "Data-driven matching leads to better placements and retention"
  }
];

const features = [
  "Intelligent skill assessment",
  "Cultural fit analysis",
  "Real-time matching",
  "Performance tracking"
];

const stats = [
  { value: "95%", label: "Match Accuracy" },
  { value: "40%", label: "Faster Hiring" },
  { value: "85%", label: "Client Satisfaction" }
];

export default function AITalentMatchingPage() {
  return (
    <ServiceLandingTemplate
      title="AI Talent Matching"
      subtitle="Find the perfect talent with our AI-powered matching system"
      description="Our advanced AI technology analyzes skills, experience, and cultural fit to match the right candidates with the right opportunities, ensuring successful placements and satisfied clients."
      benefits={benefits}
      features={features}
      stats={stats}
      ctaText="Start Matching Talent"
      ctaLink="/contact"
    />
  );
}