

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useWhitelabel } from "@/context/WhitelabelContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
  ArrowRight,
  Briefcase,
  PenTool,
  BarChart3,
  Users,
  Shield,
  Globe
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel();
  const { isAuthenticated } = useAuth();


  return (
    <>
      <SEO
        title="Zion Hire AI - White-labeled AI Recruiting Assistant"
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."


    </>);
}




