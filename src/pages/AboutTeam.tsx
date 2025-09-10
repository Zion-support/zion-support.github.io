import React from "react";
import { motion } from "framer-motion";
import { 
  Linkedin,
  Twitter,
  Mail,
  Users,
  Award,
  Heart,
  Lightbulb,
  Target,
  Globe,
  Shield,
  Zap,
  Star
} from "lucide-react";
const AboutTeam = () => {
  const leadershipTeam = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      bio: "Former AI researcher at Stanford with 15+ years in enterprise technology. Led three successful tech startups to acquisition.",
      image: "/images/team/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarah-chen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah.chen@ziontechgroup.com",
      expertise: ["AI Strategy", "Enterprise Technology", "Strategic Leadership"],
      achievements: ["Forbes 30 Under 30", "MIT Technology Review Innovator", "500+ Team Members Led"]
    },
    {
      name: "Marcus Rodriguez",
      position: "Chief Technology Officer",
      bio: "Ex-Google engineer specializing in scalable cloud infrastructure and AI systems. Built systems serving 100M+ users.",
      image: "/images/team/marcus-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/marcus-rodriguez",
      twitter: "https://twitter.com/marcusrodriguez",
      email: "marcus.rodriguez@ziontechgroup.com",
      expertise: ["Cloud Architecture", "AI Systems", "Scalable Infrastructure"],
      achievements: ["Google Cloud MVP", "15+ Patents", "Led 50+ Engineering Teams"]
    },
    {
      name: "Dr. Emily Watson",
      position: "Chief AI Officer",
      bio: "Leading researcher in machine learning and natural language processing. Published 50+ papers in top AI conferences.",
      image: "/images/team/emily-watson.jpg",
      linkedin: "https://linkedin.com/in/emily-watson",
      twitter: "https://twitter.com/emilywatson",
      email: "emily.watson@ziontechgroup.com",
      expertise: ["Machine Learning", "NLP", "AI Ethics"],
      achievements: ["NeurIPS Best Paper", "MIT CSAIL Alumni", "AI Ethics Committee Chair"]
    },
    {
      name: "David Kim",
      position: "Chief Financial Officer",
      bio: "Former investment banker with deep expertise in tech financing and strategic partnerships. Raised $500M+ in funding.",
      image: "/images/team/david-kim.jpg",
      linkedin: "https://linkedin.com/in/david-kim",
      twitter: "https://twitter.com/davidkim",
      email: "david.kim@ziontechgroup.com",
      expertise: ["Financial Strategy", "Strategic Partnerships", "Growth Financing"],
      achievements: ["Goldman Sachs Alumni", "500M+ Funding Raised", "15+ Strategic Partnerships"]