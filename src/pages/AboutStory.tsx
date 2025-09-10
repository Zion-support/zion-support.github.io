import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Calendar,
  TrendingUp,
  Building,
  Eye
} from "lucide-react";
const AboutStory = () => {
  const timeline = [
    {
      year: "2009",
      title: "The Beginning",
      description: "Founded in a small garage by three Stanford PhD students with a vision to democratize AI technology.",
      milestone: "Company Founded",
      icon: Rocket,
      achievements: ["3 Co-founders", "First AI prototype", "Initial funding secured"]
    },
    {
      year: "2012",
      title: "First Breakthrough",
      description: "Developed our first commercial AI solution for natural language processing, serving 10 enterprise clients.",
      milestone: "First Product Launch",
      icon: Target,
      achievements: ["10 Enterprise Clients", "NLP breakthrough", "Series A funding"]
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Expanded operations to Europe and Asia, establishing regional headquarters and local teams.",
      milestone: "International Growth",
      icon: Globe,
      achievements: ["25 Countries", "500+ Team Members", "Series B funding"]
    },
    {
      year: "2018",
      title: "AI Revolution",
      description: "Launched our flagship AI platform, revolutionizing how businesses integrate artificial intelligence.",
      milestone: "AI Platform Launch",
      icon: Lightbulb,
      achievements: ["1000+ Clients", "AI Platform", "Unicorn Status"]
    },
    {
      year: "2021",
      title: "Industry Leadership",
      description: "Recognized as a leader in AI technology, serving Fortune 500 companies across all major industries.",
      milestone: "Market Leadership",
      icon: Award,
      achievements: ["Fortune 500 Clients", "Industry Awards", "5000+ Team Members"]
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Pioneering next-generation AI solutions and expanding into emerging markets and technologies.",
      milestone: "Innovation Leader",
      icon: Star,
      achievements: ["Next-gen AI", "Emerging Markets", "10,000+ Projects"]