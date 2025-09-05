import React from 'react';
import { ServiceVariant } from "../types/service-variants";
export interface AIEmergingTechService {;
  id: string
  name: string
  tagline: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
  icon: string
  color: string
  textColor: string
  link: string
  marketPosition: string
  targetAudience: string
  trialDays: number
  setupTime: string
  category: string
  realService: boolean
  technology: string[]
  integrations: string[]
  useCases: string[]
  roi: string
  competitors: string[]
  marketSize: string
  growthRate: string
  variant: ServiceVariant
  contactInfo: {
    mobile: string
    email: string
    address: string
    website: string
  };
  realImplementation: boolean
  implementationDetails: string
  launchDate: string
  customers: number
  rating: number
  reviews: number
};
export const aiEmergingTechServices: AIEmergingTechService[] = [
  {
    id: "ai-video-generation-platform"
    name: "AI Video Generation Platform"
    tagline: "Create professional videos with AI in minutes"
    price: "$499"
    period: "/month"
    description: "Advanced AI-powered video generation platform that creates professional-quality videos from text, images, and audio inputs. Perfect for marketers, content creators, and businesses."
    features: [
      "Text-to-video generation"
      "Image-to-video conversion"
      "AI voice synthesis"
      "Automatic scene generation"
      "Professional templates library"
      "Multi-language support"
      "4K video export"
      "Brand customization"
      "Social media optimization"
      "API access for developers"
    ]
    popular: true
    icon: "🎬"
    color: "from-purple-500 to-pink-600"
    textColor: "text-purple-400"
    link: "https://ziontechgroup.com/ai-video-generation"
    marketPosition: "Competitive with Runway ML ($35/month), Synthesia ($30/month), and Lumen5 ($19/month). Our advantage: Better quality, more features, and professional-grade output."
    targetAudience: "Content creators, Marketing teams, Video producers, Social media managers, Businesses"
    trialDays: 7
    setupTime: "30 minutes"
    category: "AI & Content Creation"
    realService: true
    technology: ["Python", "TensorFlow", "PyTorch", "React", "Node.js", "AWS", "GPU clusters"]
    integrations: ["YouTube", "Vimeo", "Facebook", "Instagram", "TikTok", "Adobe Premiere"]
    useCases: ["Marketing videos", "Social media content", "Product demos", "Training videos", "Brand storytelling"]
    roi: "Average customer sees 500% ROI within 3 months through increased engagement and reduced production costs."
    competitors: ["Runway ML", "Synthesia", "Lumen5", "InVideo", "Pictory"]
    marketSize: "$3.2B market"
    growthRate: "45% annual growth"
    variant: "ai-futuristic"
    contactInfo: {
      mobile: "+1 302 464 0950"
      email: "kleber@ziontechgroup.com"
      address: "364 E Main St STE 1008 Middletown DE 19709"
      website: "https://ziontechgroup.com"
    }
    realImplementation: true
    implementationDetails: "Production-ready AI video generation platform with state-of-the-art models, GPU acceleration, and comprehensive video editing tools. Includes mobile apps and API access."
    launchDate: "2024-02-01"
    customers: 3200
    rating: 4.8
    reviews: 1800
  };
]