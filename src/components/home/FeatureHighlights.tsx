
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react';

import { cn } from "@/lib/utils";

interface FeatureHighlightsProps {
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureHighlights({ className, style }: FeatureHighlightsProps) {
  const highlightsData = [
    {
      title: "For Talent Seekers",
      features: [
        "AI-powered talent matching based on your specific project requirements",
        "Verified profiles with skills validation and credential checking",
        "Transparent pricing and no hidden fees",
        "Direct communication with potential candidates",
        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI-matched applicants"
      ]
    },
    {
      title: "For Talent & Service Providers",
