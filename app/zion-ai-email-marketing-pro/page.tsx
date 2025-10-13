import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Sparkles,
  Cpu,
  Send,
  Heart,
  MousePointer,
  Shield,
  Zap,
  TrendingUp
} from 'lucide-react';

const ZionAIEmailMarketingProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Email Content Generation",
      description: "Generate compelling email content, subject lines, and CTAs using advanced AI that understands your brand voice.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["AI content generation", "Brand voice consistency", "A/B testing suggestions"]
    },
    {
      title: "Advanced Segmentation & Targeting",
      description: "Intelligent audience segmentation based on behavior, preferences, and engagement patterns for maximum relevance.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Behavioral segmentation", "Predictive targeting", "Dynamic content"]
    },
    {
      title: "Automated Campaign Workflows",
      description: "Create sophisticated email sequences with triggers, conditions, and personalized journeys for each subscriber.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Drip campaigns", "Behavioral triggers", "Personalized journeys"]
    },
    {
      title: "Real-time Analytics & Insights",
      description: "Comprehensive analytics with open rates, click-through rates, conversion tracking, and ROI measurement.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Real-time metrics", "Conversion tracking", "ROI analysis"]
    },
    {
      title: "Advanced A/B Testing",
      description: "Test subject lines, content, send times, and design elements with AI-powered optimization recommendations.",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Multi-variate testing", "AI optimization", "Performance insights"]
    },
    {
      title: "Deliverability Optimization",
      description: "Advanced deliverability tools to ensure your emails reach the inbox and avoid spam filters.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Spam score analysis", "Domain reputation", "Inbox placement"]
    }
  ];

  const emailTypes = [
    { name: "Newsletter", icon: <Mail className="w-6 h-6" />, color: "from-blue-500 to-blue-600" },
    { name: "Promotional", icon: <Zap className="w-6 h-6" />, color: "from-orange-500 to-red-600" },
    { name: "Transactional", icon: <Send className="w-6 h-6" />, color: "from-green-500 to-green-600" },
    { name: "Welcome Series", icon: <Heart className="w-6 h-6" />, color: "from-pink-500 to-purple-600" },
    { name: "Abandoned Cart", icon: <MousePointer className="w-6 h-6" />, color: "from-purple-500 to-pink-600" },
    { name: "Re-engagement", icon: <Target className="w-6 h-6" />, color: "from-cyan-500 to-blue-600" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses starting their email marketing journey",
      features: [
        "Up to 1,000 subscribers",
        "Unlimited emails",
        "Basic templates",
        "Email analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses with advanced email marketing needs",
      features: [
        "Up to 10,000 subscribers",
        "Unlimited emails",
        "AI content generation",
        "Advanced segmentation",
        "A/B testing",
        "Priority support",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with complex email marketing requirements",
      features: [
        "Unlimited subscribers",
        "Unlimited emails",
        "Advanced AI features",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "API access",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rachel Green",
      company: "E-commerce Solutions",
      role: "Marketing Manager",
      content: "Zion AI Email Marketing Pro increased our email ROI by 400%. The AI content generation is absolutely game-changing!",
      rating: 5,
      avatar: "RG",
    },
    {
      name: "Mark Johnson",
      company: "SaaS Startup",
      role: "Growth Manager",
      content: "The segmentation and automation features helped us achieve 35% higher open rates. Our conversion rates have never been better.",
      rating: 5,
      avatar: "MJ",
    },
    {
      name: "Sarah Wilson",
      company: "Retail Brand",
      role: "Digital Marketing Director",
      content: "We manage 50+ email campaigns effortlessly. The AI optimization suggestions have transformed our email strategy.",
      rating: 5,
      avatar: "SW",
    }
  ];

export default function ZionAiEmailMarketingPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Ai Email Marketing Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai email marketing pro solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Zion Ai Email Marketing Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced zion ai email marketing pro solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}