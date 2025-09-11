import React, { useState } from "react";
import { CheckCircle, X, Star, TrendingUp, DollarSign, Users, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
interface ServicePricing {
  category: string;
  services: {
    name: string;
    starter: number;
    professional: number;
    enterprise: number;
    marketAverage: number;
    savings: number;
    features: string[];
  }[];
const PricingGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("micro-saas");
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic features and functionality",
        "Email support",
        "Standard integrations",
        "Basic analytics",
        "Up to 5 users",
        "99.9% uptime guarantee"
      ],
      icon: <Users className="w-8 h-8"   />,
      color: "blue"
    },
    {
      name: "Professional",
      price: 79,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "All Starter features",
        "Priority support",
        "Advanced integrations",
        "Custom branding",
        "Advanced analytics",
        "Up to 25 users",
        "API access",
        "Mobile apps"
      ],
      popular: true,
      icon: <TrendingUp className="w-8 h-8"   />,
      color: "purple"
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large organizations",
      features: [
        "All Professional features",
        "Dedicated support",
        "Custom development",
        "SLA guarantee",
        "White-label options",
        "Unlimited users",
        "Advanced security",
        "24/7 phone support"
      ],
      icon: <Shield className="w-8 h-8"   />,
      color: "green"