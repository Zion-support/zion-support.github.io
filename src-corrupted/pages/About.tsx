import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
  Clock, 
  CheckCircle,
  Star,
  Zap,
  Brain,
  Cloud,
  Shield,
  Database,
  Code,
  Rocket,
  Lightbulb,
  Heart,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageSquare,
  Settings,
  Palette,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Building,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Eye,
  Smartphone
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function About() {
  const mission = {
    title: "Our Mission",
    description: "To democratize cutting-edge technology and make AI, cloud, and cybersecurity solutions accessible to businesses of all sizes.",
    details: "We believe that every organization, regardless of size or industry, deserves access to enterprise-grade technology solutions that can transform their operations and drive growth."
  };

  const vision = {
    title: "Our Vision",
    description: "To be the leading force in democratizing advanced technology, creating a world where innovation is accessible to all.",
    details: "We envision a future where technology barriers are eliminated, and every business can leverage the power of AI, cloud computing, and cybersecurity to achieve their full potential."
  };

  const values = [
    {
      icon: Heart,
      title: "Passion for Innovation",
      description: "We're driven by curiosity and a relentless pursuit of technological advancement.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Leaf,
      title: "Sustainable Growth",
      description: "We believe in building solutions that grow with your business and adapt to change.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and business operations are protected with enterprise-grade security.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to your growth and satisfaction.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "We strive for excellence in every solution, service, and interaction.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "We stay ahead of technology trends to provide cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries and technologies"
    },
    {
      number: "50+",
      label: "Enterprise Clients",
      description: "Trusted by businesses ranging from startups to Fortune 500 companies"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services with proven track record"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and monitoring services"
    }
  ];

  const team = [
    {
      name: "Kleber Garcia Alcatrao",
      role: "Founder & CEO",
      expertise: "AI Strategy, Cloud Architecture, Business Development",
      experience: "15+ years in technology leadership and innovation",
      avatar: "/images/team/kleber.jpg"
    },
    {
      name: "AI Development Team",
      role: "Machine Learning Engineers",
      expertise: "Deep Learning, NLP, Computer Vision, Predictive Analytics",
      experience: "Collectively 50+ years in AI research and development",
      avatar: "/images/team/ai-team.jpg"
    },
    {
      name: "Cloud & DevOps Team",
      role: "Infrastructure Specialists",
      expertise: "AWS, Azure, Kubernetes, CI/CD, Microservices",
      experience: "Collectively 40+ years in cloud infrastructure",
      avatar: "/images/team/cloud-team.jpg"
    },
    {
      name: "Cybersecurity Team",
      role: "Security Experts",
      expertise: "Penetration Testing, Compliance, Threat Intelligence, Incident Response",
      experience: "Collectively 35+ years in cybersecurity",
      avatar: "/images/team/security-team.jpg"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "AI-First Transformation",
      description: "Launched comprehensive AI services portfolio and expanded into emerging technologies",
      achievements: ["AI-powered business intelligence platform", "Quantum computing partnerships", "Advanced cybersecurity solutions"]
    },
    {
      year: "2024",
      title: "Cloud & Security Expansion",
      description: "Expanded cloud services and launched enterprise cybersecurity division",
      achievements: ["Multi-cloud migration services", "SOC 2 compliance solutions", "Zero-trust architecture implementation"]
    },
    {
      year: "2023",
      title: "Technology Innovation Hub",
      description: "Established research and development center for emerging technologies",
      achievements: ["IoT platform development", "Blockchain solutions", "Edge computing infrastructure"]
    },
    {
      year: "2022",
      title: "Digital Transformation Focus",
      description: "Launched comprehensive digital transformation consulting services",
      achievements: ["Process automation solutions", "Data analytics platforms", "Customer experience optimization"]
    },
    {
      year: "2021",
      title: "Company Foundation",
      description: "Founded Zion Tech Group with focus on technology consulting and development",
      achievements: ["Initial client portfolio", "Core team formation", "Service portfolio development"]
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain, category: "AI/ML" },
    { name: "Cloud Computing", icon: Cloud, category: "Infrastructure" },
    { name: "Cybersecurity", icon: Shield, category: "Security" },
    { name: "Data Analytics", icon: Database, category: "Analytics" },
    { name: "Web Development", icon: Code, category: "Development" },
    { name: "Mobile Apps", icon: Gamepad2, category: "Development" },
    { name: "DevOps", icon: Settings, category: "Operations" },
    { name: "Blockchain", icon: Coins, category: "Emerging Tech" },
    { name: "IoT", icon: Satellite, category: "Emerging Tech" },
    { name: "Quantum Computing", icon: Zap, category: "Future Tech" }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

=======

const About: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>About | Zion Tech Group</title>
        <meta name="description" content="About - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">About</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default About;
