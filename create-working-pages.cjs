#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {;
  constructor() {;
  this.projectRoot = process.cwd();,
}

  log(message) {;
  console.log(`[${new Date().toISOString()}] ${message}`);,
}

  createWorkingPricingGuide() {;
  const filePath = path.join(this.projectRoot, "pages/pricing-guide.tsx");
    const content = `import React from "react";
import Head from "next/head";
import { motion  } from "framer-motion";
import { CheckCircle, Star, Zap, Shield, Globe, TrendingUp, Brain, Cloud, Network, Phone, Mail  } from "lucide-react";
import { Layout  } from "../components/Layout";
export default function $1() {
  const costSavingTips = [;
  {;
  question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\"ll prorate any billing differences.";,
},
    {;
  question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.";,
},
    {;
  question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.";,
},
    {;
  question: "Do you offer discounts for annual subscriptions?",
      answer: "Yes, we offer up to 20% discount for annual subscriptions compared to monthly billing.";,
}
  ];
  const pricingFactors = [;
  {;
  factor: "Project Complexity",
      description: "The complexity of your project directly impacts development time and resources required.",
      details: [ "Simple websites: 1-2 weeks",
        "E-commerce platforms: 4-8 weeks",
        "Custom applications: 8-16 weeks",
        "Enterprise solutions: 16+ weeks" ];,
},
    {;
  factor: "Team Size",
      description: "The number of developers and specialists needed for your project.",
      details: [ "Solo developer: $75-125/hour",
        "Small team (2-3): $100-150/hour",
        "Medium team (4-6): $125-175/hour",
        "Large team (7+): $150-200/hour" ];,
},
    {;
  factor: "Technology Stack",
      description: "The technologies and frameworks used in your project.",
      details: [ "Standard web technologies: Base rate",
        "Modern frameworks (React, Vue): +15%",
        "Mobile development: +25%",
        "AI/ML integration: +50%" ];,
}
  ];
  return (;
    <Layout;
      title="Pricing Guide - Zion Tech Group";
      description="Understand our pricing structure and get transparent estimates for your technology projects.";
    >;
      <Head>;
        <title>Pricing Guide - Zion Tech Group</title>;
      </Head>;