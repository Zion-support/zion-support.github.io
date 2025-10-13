import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Mic } from "lucide-react";
import EnhancedSEO from "./components/EnhancedSEO";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer", 
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity solutions and protection"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure", 
        "description": "Cloud computing and infrastructure services"
      }
    ]
  };
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime SLA",
      link: "/services"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50+ solutions",
      link: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "10x faster speeds",
      link: "/5g-solutions"
    },
  ];

  const microSaasHighlights = [
    {
      name: "Zion AI Neural Interface",
      description: "Revolutionary brain-computer interface for thought-to-text conversion and mind control",
      price: "From $199/month",
      icon: <Brain className="w-6 h-6" />,
      link: "/zion-ai-neural-interface",
      featured: true
    },
    {
      name: "AI Voice Cloning Studio",
      description: "Professional voice synthesis with 95% accuracy and multi-language support",
      price: "From $29/month",
      icon: <Mic className="w-6 h-6" />,
      link: "/ai-voice-cloning-studio",
      featured: true
    },
    {
      name: "AI Quantum Financial Oracle",
      description: "Quantum-powered financial predictions with 99.7% accuracy for market analysis",
      price: "From $199/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/ai-quantum-financial-oracle",
      featured: true
    },
    {
      name: "AI Space Mission Optimizer",
      description: "Advanced space mission optimization with 99.9% trajectory accuracy",
      price: "From $499/month",
      icon: <Globe className="w-6 h-6" />,
      link: "/ai-space-mission-optimizer",
      featured: true
    },
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-analytics-pro",
      featured: false
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/zion-security-shield",
      featured: false
    },
    {
      name: "AI Holographic Workspace",
      description: "3D holographic interface for immersive remote collaboration and data visualization",
      price: "From $399/month",
      icon: <Monitor className="w-6 h-6" />,
      link: "/ai-holographic-workspace",
      featured: true
    },
    {
      name: "Quantum Data Encryption Vault",
      description: "Unbreakable quantum encryption for sensitive data with zero-knowledge architecture",
      price: "From $599/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/quantum-data-encryption-vault",
      featured: true
    },
    {
      name: "AI Climate Prediction Engine",
      description: "Advanced climate modeling with 98.5% accuracy for weather and environmental forecasting",
      price: "From $299/month",
      icon: <Globe className="w-6 h-6" />,
      link: "/ai-climate-prediction-engine",
      featured: false
    },
    {
      name: "Neural Memory Assistant",
      description: "AI-powered memory enhancement and knowledge management system",
      price: "From $149/month",
      icon: <Brain className="w-6 h-6" />,
      link: "/ai-neural-memory-assistant",
      featured: false
    },
    {
      name: "AI Drug Discovery Pro",
      description: "Accelerated pharmaceutical research with AI-powered molecular analysis",
      price: "From $999/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/ai-drug-discovery-pro",
      featured: false
    },
    {
      name: "Telepathic Interface System",
      description: "Direct neural communication interface for seamless human-AI interaction",
      price: "From $799/month",
      icon: <Brain className="w-6 h-6" />,
      link: "/ai-telepathic-interface",
      featured: false
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our entire technology stack. The AI solutions increased our productivity by 60% in just 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5
    }
  ];


export default HomePage;
