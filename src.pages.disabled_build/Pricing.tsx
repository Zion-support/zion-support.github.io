import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  CreditCard,
  Clock,
  Headphones,
  Rocket,
  Award,
  Lock,
  Brain,
  Heart,
  DollarSign,
  Truck,
  Atom
} from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and startups getting started with AI",
      features: [
        "AI Content Generation (500 credits/month)",
        "Basic AI Image Editing",
        "AI Meeting Assistant (10 hours/month)",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access",
        "Standard Security",
        "5 Team Members"
      ],
      popular: false,
      cta: "Get Started",
      link: "/contact",
      savings: null
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and professional teams",
      features: [
        "Everything in Starter",
        "AI Content Generation (2000 credits/month)",
        "Advanced AI Image & Video Editing",
        "AI Code Assistant (Basic)",
        "AI Meeting Assistant (50 hours/month)",
        "AI Translation (25 languages)",
        "Priority Support",
        "Advanced Analytics",
        "API Access (5000 calls/month)",
        "Team Collaboration Tools",
        "Enhanced Security",
        "15 Team Members",
        "Custom Branding"
      ],
      popular: true,
      cta: "Get Started",
      link: "/contact",
      savings: "Save 20% annually"
    },
    {
      name: "Business",
      price: "$599",
      period: "/month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "AI Content Generation (10000 credits/month)",
        "AI Code Assistant (Advanced)",
        "AI Data Analytics Platform",
        "AI Threat Detection",
        "Multi-Cloud Management",
        "AI-Powered CRM",
        "Business Process Automation",
        "AI Meeting Assistant (Unlimited)",
        "AI Translation (100+ languages)",
        "24/7 Support",
        "Custom Integrations",
        "API Access (50000 calls/month)",
        "Advanced Security Features",
        "Unlimited Team Members",
        "White-label Solutions"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact",
      savings: "Save 25% annually"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Everything in Business",
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "Zero Trust Security Suite",
        "Edge Computing Solutions",
        "AI Market Research Platform",
        "AI Legal Document Review",
        "AI Financial Advisor",
        "AI Healthcare Assistant",
        "Dedicated Account Manager",
        "Custom Development",
        "On-Premise Deployment",
        "SLA Guarantees",
        "Compliance Certifications",
        "Custom Training & Support"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact",
      savings: null
    }
  ];

  const addOns = [
    {
      name: "Additional AI Credits",
      price: "$0.10",
      description: "Per credit for AI content generation beyond your plan limit",
      icon: Zap
    },
    {
      name: "Premium Support",
      price: "$99",
      description: "Per month for dedicated support and faster response times",
      icon: Headphones
    },
    {
      name: "Custom Integrations",
      price: "$299",
      description: "Per integration for custom API connections and workflows",
      icon: Rocket
    },
    {
      name: "Advanced Security",
      price: "$199",
      description: "Per month for enhanced security features and compliance",
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "No Setup Fees",
      description: "Get started immediately with zero upfront costs"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Free Trial",
      description: "Try any plan free for 14 days, no credit card required"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Flexible Billing",
      description: "Monthly or annual billing with discounts for longer commitments"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div