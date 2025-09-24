import React from 'react';
import { ServiceLandingTemplate } from '../components/services/ServiceLandingTemplate';
import { Bot, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    title: "Intelligent Matching",
    description: "AI-powered algorithms match candidates with the perfect opportunities.",
    icon: <Bot className="h-6 w-6 text-zion-purple" />,
  },
  {
    title: "Quality Candidates",
    description: "Access to a curated pool of top-tier professionals.",
    icon: <Users className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Faster Hiring",
    description: "Reduce time-to-hire with our efficient matching process.",
    icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
  },
];

const features = [
  "AI-powered candidate matching",
  "Skills and experience analysis",
  "Cultural fit assessment",
  "Real-time candidate updates",
];

const stats = [
  { label: "Successful Placements", value: "95%" },
  { label: "Time Saved", value: "60%" },
  { label: "Client Satisfaction", value: "98%" },
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
  )
}