import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Award,
  Users,
  Globe,
  Code,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';

const teamMembers = [
  {
    id: 1,
    name: "Kleber Santos",
    position: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/klebersantos",
    twitter: "https://twitter.com/klebersantos",
    github: "https://github.com/klebersantos",
    expertise: ["Strategic Leadership", "AI/ML", "Cloud Architecture", "Business Development"]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    department: "Technology",
    bio: "Technology visionary with expertise in cloud computing, AI, and scalable architecture. Led digital transformations for Fortune 500 companies.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    expertise: ["Cloud Computing", "AI/ML", "System Architecture", "DevOps"]
  },

  {
    id: 3,
    name: "Mike Chen",
    position: "Head of Cybersecurity",
    department: "Security",
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in zero-trust architecture and threat intelligence.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/mikechen",
    twitter: "https://twitter.com/mikechen",
    github: "https://github.com/mikechen",
    expertise: ["Cybersecurity", "Zero-Trust", "Threat Intelligence", "Compliance"]
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Head of AI/ML",
    department: "AI & Machine Learning",
    bio: "AI researcher and practitioner with deep expertise in machine learning, natural language processing, and computer vision applications.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    twitter: "https://twitter.com/emilyrodriguez",
    github: "https://github.com/emilyrodriguez",
    expertise: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"]
  },
  {
    id: 5,
    name: "David Kim",
    position: "Head of Data Analytics",
    department: "Data & Analytics",
    bio: "Data science leader with expertise in big data, predictive analytics, and business intelligence. Transforms data into actionable insights.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/davidkim",
    twitter: "https://twitter.com/davidkim",
    github: "https://github.com/davidkim",
    expertise: ["Data Science", "Big Data", "Predictive Analytics", "BI"]
  },
  {
    id: 6,
    name: "Lisa Wang",
    position: "Head of Product Development",
    department: "Product",
    bio: "Product strategist with experience building scalable SaaS platforms and mobile applications. Focuses on user experience and market fit.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/lisawang",
    twitter: "https://twitter.com/lisawang",
    github: "https://github.com/lisawang",
    expertise: ["Product Strategy", "SaaS Development", "UX/UI", "Mobile Apps"]
  }
];

const departments = [
  {
    name: "Leadership",
    description: "Strategic vision and company direction",
    icon: "👑",
    count: 1
  },
  {
    name: "Technology",
    description: "Engineering and technical innovation",
    icon: "💻",
    count: 15
  },
  {
    name: "AI & Machine Learning",
    description: "Artificial intelligence and data science",
    icon: "🤖",
    count: 12
  },
  {
    name: "Cybersecurity",
    description: "Security and compliance solutions",
    icon: "🛡️",
    count: 8
  },
  {
    name: "Data & Analytics",
    description: "Business intelligence and analytics",
    icon: "📊",
    count: 10
  },
  {
    name: "Product",
    description: "Product development and design",
    icon: "🎨",
    count: 6
  },
  {
    name: "Sales & Marketing",
    description: "Business development and growth",
    icon: "📈",
    count: 8
  },
  {
    name: "Operations",
    description: "Project management and delivery",
    icon: "⚙️",
    count: 5
  }
];

const stats = [
  { number: "65+", label: "Team Members" },
  { number: "15+", label: "Years Experience" },
  { number: "25+", label: "Countries Represented" },
  { number: "95%", label: "Employee Satisfaction" }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>team | Zion Tech Group</title>
        <meta name="description" content="team - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">team</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default team;