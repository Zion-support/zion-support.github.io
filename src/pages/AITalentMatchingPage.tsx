import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Bot, Users, TrendingUp } from 'lucide-react';
import Header from "@/components/Header";

const benefits = [
  "AI-powered matching algorithm",
  "Cultural fit assessment",
  "Skills-based recommendations",
  "Real-time candidate tracking"
];

const features = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Matching",
    description: "Advanced algorithms match the best candidates"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Building",
    description: "Build diverse and skilled teams"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Performance Tracking",
    description: "Monitor success rates and improvements"
  }
];

const stats = [
  { label: "Successful Matches", value: "95%" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Time Saved", value: "70%" }
];

export default function AITalentMatchingPage() {
  return (
    <ServiceLandingTemplate
      title="AI Talent Matching"
      subtitle="Find the perfect talent with our AI-powered matching system"
      description="Our advanced AI technology analyzes skills experience and cultural fit to match the right candidates with the right opportunities ensuring successful placements and satisfied clients."
      benefits={benefits}
      features={features}
      stats={stats}
      ctaText="Start Matching Talent"
      ctaLink="/contact"
    />
  );
}