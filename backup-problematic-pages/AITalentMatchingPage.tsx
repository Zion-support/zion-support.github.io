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
      benefits={benefits}
    />
  );
