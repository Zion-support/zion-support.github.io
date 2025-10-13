<<<<<<< HEAD
import { Sparkles, PenTool, Video, Image, FileText, CheckCircle, ArrowRight, Star } from 'lucide-react';
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const AIContentStudioZionTechGroup = () => {

  const features = [
    {
      title: "AI Writing Assistant",
      description: "Generate high-quality articles, blogs, and marketing copy with advanced AI writing models",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Video Generation",
      description: "Create professional videos from text prompts with AI-powered video generation technology",
      icon: <Video className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Image Creation",
      description: "Generate stunning visuals, graphics, and artwork using cutting-edge AI image models",
      icon: <Image className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Content Optimization",
      description: "Optimize content for SEO, engagement, and conversion with AI-powered analysis",
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$79",
      period: "month",
      description: "Perfect for individual content creators",
      features: [
        "100 AI-generated articles per month",
        "50 AI-generated images per month",
        "10 AI-generated videos per month",
        "Basic SEO optimization",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Studio Pro",
      price: "$149",
      period: "month",
      description: "Ideal for content teams and agencies",
      features: [
        "Unlimited AI-generated content",
        "Advanced video generation",
        "Premium image creation",
        "Advanced SEO optimization",
        "Priority support",
        "Team collaboration",
        "Custom brand templates",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "For large content operations",
      features: [
        "Everything in Studio Pro",
        "Custom AI model training",
        "White-label solution",
        "Dedicated support team",
        "SLA guarantee",
        "Custom integrations",
        "Advanced analytics",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Lisa Wang",
      role: "Content Manager",
      company: "Creative Agency",
      content: "Zion AI Content Studio has transformed our content creation process. We can now produce high-quality content at scale like never before.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      company: "TechStart Inc",
      content: "The AI-powered video generation is incredible. We've reduced our video production time by 80% while maintaining quality.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Maria Garcia",
      role: "Creative Director",
      company: "Design Studio",
      content: "The design automation features are game-changing. We can create professional visuals in minutes instead of hours.",
      rating: 5,
      avatar: "MG"
    }
  ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b119

export default function AiContentStudioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Content Studio - Zion Tech Group</title>
        <meta name="description" content="Ai Content Studio solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Content Studio</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai content studio solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
