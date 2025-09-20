import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";

export default function AITalentMatchingPage() {
  const benefits = [
    "AI-powered candidate matching",
    "Reduced time-to-hire",
    "Improved candidate quality",
    "Cultural fit analysis"
  ];

  return (
    <ServiceLandingTemplate
      title="AI Talent Matching"
      description="Our advanced AI technology analyzes skills, experience, and cultural fit to match the right candidates with the right opportunities, ensuring successful placements and satisfied clients."
      benefits={benefits}
    />
  );
}