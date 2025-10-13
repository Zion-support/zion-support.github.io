import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Target, 
  Sparkles,
  Cpu,
  Globe,
  Users
} from 'lucide-react';

const ZionAISocialSchedulerProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Content Optimization",
      description: "Advanced AI analyzes your audience and optimizes posting times, hashtags, and content for maximum engagement.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["Optimal posting times", "Hashtag suggestions", "Content performance prediction"]
    },
    {
      title: "Multi-Platform Management",
      description: "Schedule and manage content across all major social media platforms from one unified dashboard.",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["15+ platforms", "Bulk scheduling", "Cross-platform analytics"]
    },
    {
      title: "Smart Content Calendar",
      description: "Visual calendar with drag-and-drop scheduling, content planning, and campaign management.",
      icon: <Calendar className="w-6 h-6" />,
      benefits: ["Visual planning", "Campaign tracking", "Content approval workflow"]
    },
    {
      title: "Advanced Analytics & Insights",
      description: "Comprehensive analytics with engagement metrics, audience insights, and ROI tracking.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Engagement analytics", "Audience demographics", "ROI measurement"]
    },
    {
      title: "AI Content Generation",
      description: "Generate engaging social media content using AI, including captions, hashtags, and post ideas.",
      icon: <Sparkles className="w-6 h-6" />,
      benefits: ["AI captions", "Content ideas", "Brand voice consistency"]
    },
    {
      title: "Team Collaboration",
      description: "Collaborate with your team with approval workflows, role-based access, and content review processes.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Team workflows", "Approval processes", "Role management"]
    }
  ];

  const platforms = [
    { name: "Facebook", icon: "📘", color: "from-blue-500 to-blue-600" },
    { name: "Instagram", icon: "📷", color: "from-pink-500 to-purple-600" },
    { name: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-500" },
    { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-700" },
    { name: "TikTok", icon: "🎵", color: "from-black to-gray-800" },
    { name: "YouTube", icon: "📺", color: "from-red-500 to-red-600" },
    { name: "Pinterest", icon: "📌", color: "from-red-500 to-pink-500" },
    { name: "Snapchat", icon: "👻", color: "from-yellow-400 to-yellow-500" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and individual creators",
      features: [
        "Up to 3 social accounts",
        "30 posts per month",
        "Basic analytics",
        "Content calendar",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 10 social accounts",
        "Unlimited posts",
        "Advanced analytics",
        "AI content generation",
        "Team collaboration",
        "Priority support",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with complex social media needs",
      features: [
        "Unlimited social accounts",
        "Unlimited posts",
        "Enterprise analytics",
        "Advanced AI features",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "API access"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Creative Agency Co.",
      role: "Social Media Manager",
      content: "Zion AI Social Scheduler Pro increased our engagement by 300%. The AI optimization features are incredible!",
      rating: 5,
      avatar: "JM",
    },
    {
      name: "David Kim",
      company: "E-commerce Plus",
      role: "Marketing Director",
      content: "We manage 20+ social accounts effortlessly. The team collaboration features have streamlined our entire workflow.",
      rating: 5,
      avatar: "DK",
    },
    {
      name: "Lisa Thompson",
      company: "Fashion Forward",
      role: "Brand Manager",
      content: "The AI content generation saves us hours every week. Our content quality has improved dramatically.",
      rating: 5,
      avatar: "LT",
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c832

export default function ZionAiSocialSchedulerPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Ai Social Scheduler Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai social scheduler pro solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Zion Ai Social Scheduler Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced zion ai social scheduler pro solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}