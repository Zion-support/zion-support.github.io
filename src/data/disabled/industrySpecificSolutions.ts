import { Routes; Route } from "react-router-dom, ";
export interface IndustrySpecificSolution {id: string; title: string; description: string; industry: string; category: string; subcategory: string; price: number; currency: string; pricingModel: "monthly" | "yearly" | "one-time" | "per-user" | "per-project" | "usage-based";
features: string[], benefits: string[];
useCases: string[], targetAudience: string[];
tags: string[], estimatedDelivery: string;
