import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  ArrowRight,
  Brain,
  Star,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const stats = [
  Rocket, 
  Shield, 
  Brain, 
  Globe, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Lightbulb,
  Clock
} from 'lucide-react';
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Lightbulb, 
  Award, 
  Globe, 
  Zap,
  CheckCircle,
  TrendingUp,
  Shield,
  Heart
} from "lucide-react";

export default function About() {
  const companyStats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
=======
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
=======
=======
=======
import React from 'react';
=======
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Zap, 
  Circle,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';
import { AnimatedBackground, NeonGlow } from '@/components/ui/AnimatedBackground';

export default function About() {
  const stats = [
    { label: 'Countries Served', value: '50+', icon: <Globe className="h-8 w-8 text-zion-cyan" /> },
    { label: 'Projects Completed', value: '500+', icon: <CheckCircle className="h-8 w-8 text-zion-purple" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Star className="h-8 w-8 text-zion-blue" /> },
    { label: 'Years Experience', value: '10+', icon: <Award className="h-8 w-8 text-zion-cyan" /> }
  ];

  const coreServices = [
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI development, machine learning solutions, and intelligent automation',
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      features: ['Custom AI Models', 'ML Pipeline Development', 'AI Integration', 'Automation Solutions'],
      link: '/ai-services'
    },
    {
      title: 'IT Infrastructure',
      description: 'Cloud migration, cybersecurity, DevOps, and managed IT services',
      icon: <Cloud className="h-8 w-8 text-zion-blue" />,
      features: ['Cloud Migration', 'Cybersecurity', 'DevOps Implementation', 'Managed Services'],
      link: '/it-services'
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation for business modernization',
      icon: <TrendingUp className="h-8 w-8 text-zion-purple" />,
      features: ['Digital Strategy', 'Process Optimization', 'Legacy Modernization', 'Change Management'],
      link: '/digital-transformation'
    },
    {
      title: 'Global IT Support',
      description: 'Onsite IT services available in 50+ countries with local technicians',
      icon: <Globe className="h-8 w-8 text-green-500" />,
      features: ['24/7 Support', 'Local Technicians', 'Rapid Response', 'Global Coverage'],
      link: '/it-onsite-services'
    }
=======
  Shield,
  Brain,
  Cloud,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Building
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Building },
    { number: "99.9%", label: "Uptime SLA", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Users }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and business operations are protected with enterprise-grade security and compliance standards.'
=======
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring emerging technologies and creative solutions.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results that drive your business forward.",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and with our clients.",
      icon: Users,
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Cloud,
  TrendingUp,
  CheckCircle,
  Star,
  Heart
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  const values = [
    {
import { Zap, Shield, Cpu, Cloud, Brain, Rocket, Users, Award, Globe, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Target },
=======
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap, Globe, Shield, Sparkles, Lightbulb } from 'lucide-react';
import { Header } from "@/components/Header";
=======
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '5+', icon: Award, color: 'text-zion-cyan' },
    { label: 'Projects Completed', value: '100+', icon: Target, color: 'text-zion-purple' },
    { label: 'Happy Clients', value: '50+', icon: Users, color: 'text-zion-cyan' },
    { label: 'Team Members', value: '15+', icon: Users, color: 'text-zion-purple' }
  ];

  const values = [
    {
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business dealings.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
=======
      icon: Zap,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.',
      color: 'text-zion-cyan'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Every project we deliver meets the highest standards of quality, security, and performance that our clients expect.',
      color: 'text-zion-purple'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, understanding their needs and building solutions that truly serve their business objectives.',
      color: 'text-zion-cyan'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our services are available worldwide, helping businesses across different industries and regions achieve digital transformation.',
      color: 'text-zion-purple'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with 5+ years of experience in technology and business transformation.',
      avatar: '👨‍💼'
    },
    {
      name: 'AI Team',
      role: 'AI Specialists',
      description: 'Expert team specializing in machine learning, natural language processing, and AI-powered solutions.',
      avatar: '🤖'
    },
    {
      name: 'Dev Team',
      role: 'Development Engineers',
      description: 'Skilled developers creating robust, scalable, and innovative software solutions.',
      avatar: '👨‍💻'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated professionals ensuring exceptional customer experience and support.',
      avatar: '🎯'
    }
  ];

  const timeline = [
      description: 'Zion Tech Group established with a vision to democratize AI technology'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business automation platform'
    },
    {
      year: '2022',
      title: 'Enterprise Expansion',
      description: 'Expanded to serve Fortune 500 companies and government agencies'
    },
    {
      year: '2023',
      title: 'Quantum Innovation',
      description: 'Pioneered quantum computing solutions for enterprise applications'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Extended services to international markets and emerging economies'
    },
    {
      year: '2025',
      title: 'AI Revolution',
      description: 'Leading the charge in autonomous AI systems and consciousness evolution'
=======
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision for technological innovation"
    },
    {
      year: "2021",
      title: "First AI Platform",
      description: "Launched our flagship AI-powered business solutions platform"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to serve clients worldwide"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded multiple industry awards for innovation and excellence"
    },
    {
      year: "2024",
      title: "Future Technologies",
      description: "Pioneering quantum computing and advanced AI solutions"
    }
  ];
=======

      title: 'Innovation First',
      description: 'We stay at the cutting edge of technology to deliver the most advanced solutions',
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our performance by your outcomes',
      icon: <Circle className="h-8 w-8 text-green-500" />
    },
    {
      title: 'Global Excellence',
      description: 'Consistent quality and service standards across all our global operations',
      icon: <Award className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Continuous Learning',
      description: 'We continuously evolve our skills and knowledge to serve you better',
      icon: <Zap className="h-8 w-8 text-purple-500" />
    }
  ];

  return (
    <>
      <SEO 
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      description: "Former AI researcher with 15+ years in technology leadership"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      description: "Expert in emerging technologies and system architecture"
    },
    {
      name: "Dr. James Kim",
      role: "Chief Innovation Officer",
      description: "Leading research in quantum computing and AI"
    },
    {
      name: "Lisa Thompson",
      role: "Chief Operations Officer",
      description: "Specialist in scaling technology operations globally"
=======
      description: 'We measure our success by your success, building long-term partnerships based on results.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Our team stays ahead of industry trends, ensuring you benefit from the latest technological advancements.'
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored solutions that address your unique business challenges and requirements.'
    },
    {
      icon: Database,
      title: 'Data Analytics & AI',
      description: 'Transform your data into actionable insights with advanced analytics and machine learning.'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure and streamlined development processes for modern applications.'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions that automate processes and enhance decision-making.'
    }
  ];
=======
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transforming businesses through innovative technology solutions, 
              cutting-edge AI, and comprehensive digital transformation services.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div className="text-3xl font-bold text-zion-cyan">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </div>
              ))}
            </div>
=======
    {
      year: '2020',
      title: 'Foundation',
      description: 'Zion Tech Group was founded with a vision to revolutionize business technology solutions.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and began building our reputation in the industry.'
    },
    {
      year: '2022',
      title: 'AI Services Launch',
      description: 'Launched our AI and machine learning services division, expanding our capabilities.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across multiple countries and continents.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Established our innovation lab for cutting-edge research and development.'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Leading the charge in next-generation technology solutions and digital transformation.'
    }
  ];

=======
=======
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your business security and data protection are our top priorities in every solution we deliver.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'We measure our success by the growth and success of our clients\' businesses.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
  Award, 
  Globe, 
  Rocket, 
  Shield, 
  Cpu, 
  Brain,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Target,
  Heart,
  Eye
} from 'lucide-react';

export default function About() {
  const companyStats = [
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across diverse industries"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Dedicated professionals with diverse expertise"
    },
    {
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    {
      number: "99.9%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations"
    }
  ];

  const companyHistory = [
    {
      year: "2020",
      title: "Foundation",
      description: "Zion Tech Group was founded with a vision to democratize cutting-edge technology and make AI accessible to businesses of all sizes.",
      achievements: ["Company established", "First AI research team formed", "Initial funding secured"]
    },
    {
      year: "2021",
      title: "First Breakthrough",
      description: "Developed our first AI-powered business solution and secured our first enterprise client.",
      achievements: ["First AI solution launched", "Enterprise client acquired", "Research partnerships established"]
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded our service portfolio and opened our first international office.",
      achievements: ["Service portfolio expanded", "International office opened", "Team doubled in size"]
    },
    {
      year: "2023",
      title: "Innovation Milestone",
      description: "Achieved breakthrough in quantum computing research and launched autonomous business operations platform.",
      achievements: ["Quantum computing breakthrough", "Autonomous platform launch", "Industry recognition awards"]
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Recognized as a leader in AI solutions and expanded to serve clients in 25+ countries.",
      achievements: ["Industry leadership recognition", "Global expansion", "Strategic partnerships formed"]
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to push boundaries in AI, quantum computing, and autonomous systems.",
      achievements: ["Next-gen AI platform", "Quantum commercial solutions", "Autonomous business revolution"]
    }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer & Chief AI Officer",
      bio: "Dr. Chen is a visionary leader with over 15 years of experience in AI research and enterprise technology. She holds a PhD in Computer Science from MIT and has led breakthrough research in autonomous AI systems.",
      expertise: ["AI & Machine Learning", "Strategic Leadership", "Research & Development"],
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "James Wilson",
      role: "Chief Technology Officer",
      bio: "James leads our technology strategy and oversees the development of cutting-edge solutions. He has extensive experience in cloud architecture, cybersecurity, and emerging technologies.",
      expertise: ["Cloud Architecture", "Cybersecurity", "Technology Strategy"],
      image: "/images/team/james-wilson.jpg"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Research Officer",
      bio: "Dr. Rodriguez leads our quantum computing and advanced research initiatives. His work has been published in leading scientific journals and has received international recognition.",
      expertise: ["Quantum Computing", "Research & Development", "Scientific Innovation"],
      image: "/images/team/michael-rodriguez.jpg"
    }
  ];

  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology",
      icon: Rocket,
      details: [
        "Continuous research and development",
        "Adoption of emerging technologies",
        "Creative problem-solving approaches"
      ]
    },
    {
      title: "Excellence",
      description: "We deliver the highest quality solutions and exceptional service",
      icon: Award,
      details: [
        "Rigorous quality standards",
        "Continuous improvement processes",
        "Customer satisfaction focus"
      ]
    },
    {
      title: "Collaboration",
      description: "We work together to achieve extraordinary results for our clients",
      icon: Users,
      details: [
        "Team-based problem solving",
        "Cross-functional expertise",
        "Knowledge sharing culture"
      ]
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions",
      icon: Shield,
      details: [
        "Transparent communication",
        "Ethical AI development",
        "Trust-based relationships"
      ]
    }
  ];

  const awards = [
    {
      title: "Top AI Solutions Provider 2024",
      organization: "TechResearch Insights",
      description: "Recognized for excellence in AI-powered business solutions and innovation",
      year: "2024"
    },
    {
      title: "Innovation Excellence Award",
      organization: "Technology Innovation Forum",
      description: "Awarded for breakthrough developments in quantum computing and autonomous systems",
      year: "2023"
    },
    {
      title: "Best Cybersecurity Solution",
      organization: "Security Excellence Awards",
      description: "Recognized for outstanding cybersecurity and compliance automation solutions",
      year: "2023"
    },
    {
      title: "Rising Star in Tech",
      organization: "Global Technology Awards",
      description: "Acknowledged as an emerging leader in the technology industry",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
=======
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, ArrowRight, CheckCircle, Star, Rocket, Shield, Cpu, Brain } from 'lucide-react';
import { SEO } from '@/components/SEO';

const values = [
  {
    title: "Innovation First",
    description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
    icon: Zap,
    color: "text-zion-cyan"
  },
  {
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering solutions that drive real business value.",
    icon: Target,
    color: "text-zion-purple"
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do, from code to customer service.",
    icon: Award,
    color: "text-green-400"
  },
  {
    title: "Global Impact",
    description: "We believe technology should make the world better, more connected, and more sustainable.",
    icon: Globe,
    color: "text-blue-400"
  }
];

const team = [
  {
    name: "Kleber Santos",
    role: "Founder & CEO",
    description: "Visionary leader with 15+ years in technology and business transformation.",
    expertise: ["AI & Machine Learning", "Digital Transformation", "Strategic Planning"]
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    description: "Technology expert specializing in cloud architecture and emerging technologies.",
    expertise: ["Cloud Computing", "DevOps", "Emerging Tech"]
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    description: "Engineering leader focused on scalable solutions and technical excellence.",
    expertise: ["Software Architecture", "Team Leadership", "Quality Assurance"]
  }
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Zion Tech Group established with a vision to transform businesses through technology."
  },
  {
    year: "2021",
    title: "First AI Solutions",
    description: "Successfully deployed our first AI-powered business solutions for enterprise clients."
  },
  {
    year: "2022",
    title: "Cloud Platform Launch",
    description: "Launched our comprehensive cloud and DevOps platform serving 100+ clients."
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations internationally, serving clients across 15+ countries."
  },
  {
    year: "2024",
    title: "Innovation Leader",
    description: "Recognized as a leader in emerging technology solutions and digital transformation."
  }
];
=======
      description: 'We serve clients worldwide, bringing technology solutions that transcend borders and cultures.',
      color: 'from-green-500 to-emerald-500'
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Lock, 
  Globe, 
  Cpu, 
  Users, 
  Award, 
  Target, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  Lightbulb,
  Rocket
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Building secure, reliable solutions that our clients can trust with their most critical business operations.',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve measurable business outcomes and growth.',
      color: 'from-zion-cyan to-zion-blue-light'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'Delivering world-class solutions with attention to detail, quality, and performance that exceeds expectations.',
      color: 'from-zion-purple to-zion-cyan'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to revolutionize technology solutions.',
      icon: Calendar
    },
    {
      year: '2024',
      title: 'First AI Platform',
      description: 'Launched our flagship AI-powered analytics platform.',
      icon: Brain
    },
    {
      year: '2024',
      title: 'Quantum Computing',
      description: 'Introduced quantum computing services for research institutions.',
      icon: Cpu
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded services to serve clients worldwide.',
      icon: Globe
    }
  ];

  const team = [
    {
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative micro SAAS solutions, cutting-edge IT services, and advanced AI technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
=======
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Pioneering the future of technology through innovative micro SAAS solutions, 
            cutting-edge AI services, and transformative digital solutions.
=======
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "10x", label: "Performance Improvement", icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge AI and quantum technologies"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success - we're committed to delivering measurable results"
    },
    {
      icon: Star,
      title: "Future-Focused",
      description: "Anticipating tomorrow's challenges and building solutions today"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision to revolutionize technology"
    },
    {
      year: "2021",
      title: "First AI Solutions",
      description: "Launched our first AI autonomous systems for enterprise clients"
    },
    {
      year: "2022",
      title: "Quantum Breakthrough",
      description: "Introduced quantum computing infrastructure solutions"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to 50+ countries worldwide"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leader in AI and quantum technology"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to pioneer the next generation of technology solutions"
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in technology innovation",
      image: "/images/team/kleber-santos.jpg"
    },
    {
      name: "Dr. Sarah Chen",
      role: "CTO",
      description: "Quantum computing expert with PhD from MIT",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of AI Research",
      description: "Leading our AI autonomous systems development",
      image: "/images/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Security Officer",
      description: "Cybersecurity specialist with government experience",
      image: "/images/team/emily-watson.jpg"
=======
      color: "from-purple-500 to-pink-500"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former AI researcher at Stanford with 15+ years in technology leadership. Passionate about democratizing AI for businesses.",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership"],
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Ex-Google engineer with deep expertise in machine learning, cloud architecture, and scalable systems.",
      expertise: ["Machine Learning", "Cloud Architecture", "System Design"],
      image: "/team/michael-rodriguez.jpg"
    },
    {
      name: "Lisa Thompson",
      role: "Chief Innovation Officer",
      bio: "Serial entrepreneur and technology visionary with a track record of building successful AI startups.",
      expertise: ["Product Strategy", "AI Innovation", "Market Analysis"],
      image: "/team/lisa-thompson.jpg"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Former engineering leader at Microsoft with expertise in building high-performance, scalable applications.",
      expertise: ["Software Engineering", "Team Leadership", "Performance Optimization"],
      image: "/team/david-kim.jpg"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize AI technology for businesses of all sizes."
    },
    {
      year: "2021",
      title: "First AI Platform Launch",
      description: "Successfully launched our flagship AI platform, serving 50+ clients in the first year."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $25M in Series A funding to accelerate product development and market expansion."
    },
    {
      year: "2023",
      title: "Enterprise Expansion",
      description: "Expanded to serve Fortune 500 companies and opened international offices in London and Singapore."
    },
    {
      year: "2024",
      title: "AI Innovation Leader",
      description: "Recognized as a leader in AI innovation, serving 500+ clients across 25+ industries."
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management", icon: Shield },
    { name: "SOC 2 Type II", description: "Security, Availability, and Confidentiality", icon: CheckCircle },
    { name: "GDPR Compliance", description: "Data Protection and Privacy", icon: Globe },
    { name: "AWS Advanced Consulting", description: "Cloud Solutions Partner", icon: Cloud },
    { name: "Microsoft Gold Partner", description: "AI and Cloud Services", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to democratize AI technology. Discover our team, values, and commitment to innovation and client success."
        keywords="about us, Zion Tech Group, AI company, technology leadership, team, mission, values, innovation"
      />
      
      {/* Hero Section */}
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - Zion Tech Group" 
        description="Learn about Zion Tech Group's mission to revolutionize the tech and AI marketplace, our team, and our commitment to innovation."
        keywords="Zion Tech Group, about us, tech marketplace, AI marketplace, company mission"
        canonical="https://ziontechgroup.com/about"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-zion-cyan">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Pioneering the future of technology through innovative marketplace solutions, 
            AI integration, and sustainable tech practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark">
              <Link to="/careers">Join Our Team</Link>
            </Button>
=======
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About Zion Tech Group
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            We're on a mission to democratize AI technology, making cutting-edge artificial intelligence 
            accessible to businesses of all sizes. Our team combines deep technical expertise with 
            a passion for innovation and client success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Meet Our Team
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
=======
      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6">
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/careers" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Join Our Team
            </Link>
=======
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              We are a forward-thinking technology company dedicated to democratizing cutting-edge 
              AI solutions, quantum computing, and autonomous systems. Our mission is to empower 
              businesses of all sizes to achieve extraordinary results through innovative technology.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>Est. 2020</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                <span>Innovation Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>

                To democratize access to cutting-edge technology solutions, enabling businesses 
                of all sizes to thrive in the digital age through innovative micro SAAS platforms 
                and AI-powered services.
              </p>
              <p className="text-zion-slate-light">
                We believe that every organization deserves access to enterprise-grade technology 
                that drives growth, efficiency, and competitive advantage.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To be the leading force in the democratization of advanced technology, 
                creating a world where innovation is accessible, sustainable, and beneficial 
                for all.
              </p>
              <p className="text-zion-slate-light">
                We envision a future where technology serves humanity, enhances productivity, 
                and creates meaningful impact across industries and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              The principles that guide everything we do, from client relationships to technology development.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
=======
=======
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      icon: Rocket,
      color: 'from-zion-cyan to-zion-cyan-dark'
    },
    {
      title: 'Excellence in Execution',
      description: 'Every project is delivered with precision, quality, and attention to detail that exceeds expectations.',
      icon: Star,
      color: 'from-zion-purple to-zion-purple-dark'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve measurable, transformative results.',
      icon: Target,
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve through continuous research, training, and adoption of cutting-edge technologies.',
      icon: Brain,
      color: 'from-zion-purple to-zion-cyan'
    }
  ];

  const team = [
    {
      name: 'Kleber Silva',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Business Development'],
      avatar: '/avatars/kleber.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      bio: 'PhD in Machine Learning with expertise in neural networks and quantum computing.',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development'],
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      bio: 'Former government cybersecurity expert with deep knowledge of threat intelligence.',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance'],
      avatar: '/avatars/marcus.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Engineering',
      bio: 'Software architect with experience building scalable systems for Fortune 500 companies.',
      expertise: ['Software Architecture', 'Cloud Computing', 'DevOps'],
      avatar: '/avatars/emily.jpg'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions in healthcare and finance',
      category: 'Industry Recognition'
    },
    {
      year: '2023',
      title: '500+ Projects Milestone',
      description: 'Successfully delivered over 500 technology solutions worldwide',
      category: 'Business Growth'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 15+ countries across 3 continents',
      category: 'Market Expansion'
    },
    {
      year: '2021',
      title: 'Patent Portfolio',
      description: 'Filed 25+ patents in AI, cybersecurity, and quantum computing',
      category: 'Innovation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Pioneering the future of technology with revolutionary AI consciousness, quantum computing, 
            and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Founded 2014
            </span>
            <span className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan">
              Global Presence
            </span>
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Innovation Leader
            </span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-cyan">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-zion-cyan/20 rounded-lg text-zion-cyan">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to harness the power of AI, quantum computing, and advanced automation for sustainable growth 
                and competitive advantage.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Accelerate digital transformation</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Bridge the technology gap</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Foster innovation ecosystems</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-purple">
                  <Rocket className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To be the global leader in AI-powered technology solutions, creating a future where every 
                organization can leverage intelligent automation, predictive analytics, and quantum computing 
                to solve humanity's greatest challenges.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-purple flex-shrink-0" />
                  <span>AI-first world</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-purple flex-shrink-0" />
                  <span>Sustainable technology</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-purple flex-shrink-0" />
                  <span>Human-AI collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
=======
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-zion-slate-light">{value.description}</p>
                </motion.div>
=======
      {/* Company Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company History */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full"></div>
            
            <div className="space-y-12">
              {companyHistory.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-800"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300 mb-4">{milestone.description}</p>
                      
                      <ul className="space-y-1">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                {/* Member Image Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{value.description}</p>
                  
                  <ul className="space-y-2">
                    {value.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-300 text-xs flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
=======
      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">
                We constantly push boundaries and explore new technologies to deliver 
                cutting-edge solutions that drive real business value.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customer Success</h3>
              <p className="text-zion-slate-light">
                Our success is measured by our customers' success. We build lasting 
                partnerships and ensure every solution delivers measurable results.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trust & Security</h3>
              <p className="text-zion-slate-light">
                We maintain the highest standards of security and data protection, 
                ensuring our clients' information and systems remain safe and secure.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
              <p className="text-zion-slate-light">
                We're committed to creating positive change through technology, 
                supporting sustainable practices and inclusive growth worldwide.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-zion-slate-light">
                We strive for excellence in everything we do, from code quality 
                to customer service, ensuring the highest standards of delivery.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-zion-slate-light">
                We foster a culture of continuous learning and improvement, 
                staying ahead of industry trends and technological advancements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">Micro SAAS Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are pioneers in AI technology, quantum computing, and digital transformation, 
            empowering businesses to thrive in the digital age through innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
=======
      {/* Timeline */}
=======
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward in the digital age.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
=======
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
              <p className="text-zion-cyan mb-2">Founder & CEO</p>
              <p className="text-zion-slate-light text-sm">
                Visionary leader driving innovation and strategic growth across all business units.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tech Team</h3>
              <p className="text-zion-cyan mb-2">Engineering Excellence</p>
              <p className="text-zion-slate-light text-sm">
                World-class developers and engineers building the future of technology.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Division</h3>
              <p className="text-zion-cyan mb-2">AI & ML Specialists</p>
              <p className="text-zion-slate-light text-sm">
                Experts in artificial intelligence and machine learning solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-zion-slate">
                  {value.description}
                </p>
=======
                <div className="bg-cyan-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

                To democratize access to cutting-edge technology and AI solutions by creating 
                the world's most comprehensive and accessible marketplace for tech talent, 
                services, and equipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-zion-cyan w-5 h-5" />
                  <span className="text-zion-slate-light">Connect businesses with top tech talent</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-zion-cyan w-5 h-5" />
                  <span className="text-zion-slate-light">Accelerate AI adoption across industries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-zion-cyan w-5 h-5" />
                  <span className="text-zion-slate-light">Promote sustainable technology practices</span>
=======
      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To democratize AI technology by providing accessible, scalable, and innovative solutions 
                    that empower businesses to achieve their full potential in the digital age.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in AI innovation, creating a future where every business, 
                    regardless of size, can harness the power of artificial intelligence to drive growth and success.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-400 text-sm">Next-generation processing power</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-400 text-sm">Advanced protection solutions</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Industry Solutions</h3>
                <p className="text-gray-400 text-sm">Tailored for your business</p>
              </div>
            </div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge AI technology and empower organizations 
                of all sizes to achieve digital transformation through innovative, secure, 
                and scalable solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that every business deserves access to the same powerful AI tools 
                that Fortune 500 companies use, leveling the playing field and driving 
                innovation across industries.
              </p>
              <Link
                to="/mission"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <Target className="w-32 h-32 text-cyan-400" />
              </div>
=======
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              About
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              We're a forward-thinking technology company dedicated to transforming businesses through 
              innovative AI solutions, cloud computing, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Join Our Team
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and shape our culture of innovation and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
=======
      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Zap className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">
                We constantly push the boundaries of what's possible, embracing emerging technologies 
                and creative solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Shield className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Trust & Security</h3>
              <p className="text-zion-slate-light">
                We prioritize data security, privacy, and ethical AI practices in everything we build.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Customer Success</h3>
              <p className="text-zion-slate-light">
                Your success is our success. We're committed to delivering measurable results and 
                exceptional support.
              </p>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      <SEO 
        title="About Zion Tech Group - Technology Innovation Leaders"
        description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions, AI expertise, and digital transformation leadership."
        canonical="/about"
      />
      
      <FuturisticAnimatedBackground intensity="medium" />

      {/* Header Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
=======
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI/ML', 'Quantum Computing', 'Strategic Planning'],
      avatar: '👨‍💼'
    },
    {
      name: 'AI Research Team',
      role: 'AI & ML Specialists',
      description: 'Expert researchers developing cutting-edge artificial intelligence solutions.',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      avatar: '🤖'
    },
    {
      name: 'Security Experts',
      role: 'Cybersecurity Team',
      description: 'Certified security professionals protecting digital assets and infrastructure.',
      expertise: ['Penetration Testing', 'Threat Intelligence', 'Compliance', 'Incident Response'],
      avatar: '🛡️'
    },
    {
      name: 'Cloud Architects',
      role: 'DevOps & Cloud',
      description: 'Infrastructure specialists building scalable, resilient cloud solutions.',
      expertise: ['AWS/Azure/GCP', 'Kubernetes', 'Terraform', 'CI/CD'],
      avatar: '☁️'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue-light to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in the future of technology, building revolutionary solutions that transform 
              businesses and drive human progress through innovation, excellence, and unwavering commitment to success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes 
                to achieve digital transformation and competitive advantage through innovative AI, quantum computing, 
                and autonomous systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Democratize advanced technology</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Drive digital transformation</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Enable competitive advantage</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To be the world's leading technology partner, pioneering the future of AI consciousness, 
                quantum supremacy, and autonomous systems that create a more intelligent, secure, and 
                sustainable world for future generations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Global technology leadership</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>AI consciousness advancement</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Sustainable future technology</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-6 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do, from product development to client relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {value.description}
=======
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <div className="text-center">
                <Target className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">What We Believe</h3>
                <p className="text-gray-300 leading-relaxed">
                  Technology should be an enabler, not a barrier. We believe that AI has the power to 
                  transform businesses and create opportunities that were previously unimaginable.
                </p>
              </motion.div>
            ))}
          </div>
=======
      {/* Awards & Recognition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-cyan-400 font-semibold">{award.year}</span>
              </div>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              From a bold vision to a revolutionary technology company, discover the journey that brought us here.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
=======
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{member.name}</h3>
                <p className="text-cyan-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 text-center">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="h-3 w-3 text-cyan-400 mr-2" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-cyan-500/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
=======
      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">AI Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">1000+</div>
              <div className="text-zion-slate-light">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-16 h-16 text-zion-purple" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Vision 2030</h3>
              <p className="text-zion-slate-light">
                To become the global standard for technology marketplace excellence, 
                driving innovation and sustainability in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
              To democratize cutting-edge technology and make AI, cloud computing, and digital transformation 
              accessible to businesses of all sizes. We believe that every organization deserves access to 
              the tools and expertise needed to thrive in the digital age.
            </p>
            <p className="text-lg text-zion-slate-light leading-relaxed">
              Through our innovative solutions and dedicated team, we're helping companies across industries 
              transform their operations, enhance customer experiences, and achieve sustainable growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                  <div className="text-zion-slate-light">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">200+</div>
                  <div className="text-zion-slate-light">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-zion-slate-light">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-zion-slate-light">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join hundreds of organizations that trust Zion Tech Group to drive their digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </Link>
=======
      {/* Team Section */}
      <section className="relative z-10 py-20 px-4 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-zion-cyan">Team</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience 
              in technology, AI, and business transformation.
=======
      {/* Team Section */}
      <section className="py-20 px-6 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Passionate experts dedicated to pushing the boundaries of technology and delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              What We Do
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet the diverse needs of modern businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-zion-slate text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
=======
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-semibold mb-3">{member.role}</div>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="bg-white/10 text-zion-slate-light text-xs px-2 py-1 rounded-full">
=======
=======
=======
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${value.color} rounded-lg text-white`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 text-center hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-zion-cyan text-sm mb-3">{member.role}</p>
                <p className="text-zion-slate-light text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan mr-1 mb-1"
                    >
=======
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
            Join hundreds of organizations that trust Zion Tech Group with their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zion Tech Group is a leading technology company specializing in innovative solutions 
            for businesses and organizations. We are committed to delivering cutting-edge 
            technology services that drive growth and efficiency.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Pushing the boundaries of what's possible in technology</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Delivering excellence in every project we undertake</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
            <p className="text-gray-600">Building lasting relationships with our clients</p>
          </div>
=======
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries driving our company forward
=======
      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              From humble beginnings to industry leadership - our story of growth and innovation.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-zion-cyan to-zion-purple"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}
              >
                <div className={`absolute top-0 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark ${
                  index % 2 === 0 ? 'right-0 transform translate-x-2' : 'left-0 transform -translate-x-2'
                }`}></div>
                
                <div className={`max-w-md ${
                  index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                }`}>
                  <div className="bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                    <div className="text-2xl font-bold text-zion-cyan mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-zion-slate-light">{item.description}</p>
                  </div>
                </div>
=======
      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Core Values
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            The principles that guide everything we do and shape our company culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${value.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experienced professionals passionate about technology and committed to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                Kleber
              </h3>
              <p className="text-zion-slate mb-2">CEO & Founder</p>
              <p className="text-sm text-zion-slate-light">
                Technology visionary with over 10 years of experience in software development and business transformation.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Team Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Passionate experts dedicated to delivering exceptional technology solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Kleber Santos',
                role: 'CEO & Founder',
                description: 'Visionary leader with 15+ years in technology and business transformation.',
                image: '/api/placeholder/300/300'
              },
              {
                name: 'Sarah Chen',
                role: 'CTO',
                description: 'Technology expert specializing in AI, cloud architecture, and emerging technologies.',
                image: '/api/placeholder/300/300'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Head of AI Research',
                description: 'Leading our AI initiatives and developing cutting-edge machine learning solutions.',
                image: '/api/placeholder/300/300'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-zion-cyan mb-3">{member.role}</div>
                <p className="text-zion-slate-light">{member.description}</p>
              </motion.div>
            ))}
=======
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kleber</h3>
              <p className="text-zion-cyan mb-2">Founder & CEO</p>
              <p className="text-zion-slate-light text-sm">
                Visionary leader with 15+ years in tech innovation and business transformation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Team</h3>
              <p className="text-zion-cyan mb-2">AI Research & Development</p>
              <p className="text-zion-slate-light text-sm">
                Experts in machine learning, neural networks, and AI ethics.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-purple-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dev Team</h3>
              <p className="text-zion-cyan mb-2">Software Development</p>
              <p className="text-zion-slate-light text-sm">
                Full-stack developers specializing in scalable microservices and cloud solutions.
              </p>
            </div>
=======
      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our impact in numbers - delivering results that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can drive your business forward 
              and create lasting competitive advantages.
=======
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how our innovative solutions can transform your business and help you 
              achieve extraordinary results in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Request Quote
            </Link>
          </div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/pricing" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
=======

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Zion Tech Group</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          We are a leading technology company specializing in AI, IT services, and micro SAAS solutions.
        </p>
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <p className="text-gray-300 text-lg leading-relaxed">
            Zion Tech Group is dedicated to transforming businesses through innovative technology solutions. 
            Our team of experts combines cutting-edge AI with proven IT infrastructure to deliver results 
            that drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have transformed their operations 
                and achieved remarkable growth with Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticNeonButton
                  onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Partnership Inquiry'}
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start a Partnership
                </FuturisticNeonButton>
                <FuturisticNeonButton
                  onClick={() => window.location.href = '/contact'}
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  Get in Touch
                </FuturisticNeonButton>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
=======
export default About;
=======
export default About;
=======
      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Experienced professionals passionate about technology and committed to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-medium">{member.role}</div>
              </div>
              <p className="text-zion-slate-light mb-6 text-center">{member.description}</p>
              <div>
                <h4 className="text-white font-semibold mb-3">Expertise:</h4>
                <ul className="space-y-2">
                  {member.expertise.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Journey
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Key milestones that have shaped our company and our impact on the technology industry.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-zion-cyan/30 h-full"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                  <div className="text-zion-cyan font-bold text-lg mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-zion-slate-light">{milestone.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
            </motion.div>
          ))}
=======
      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our mission to transform technology
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10`}></div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
=======
      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We constantly push boundaries and embrace emerging technologies to stay ahead of the curve.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  Our success is built on the strength and collaboration of our global tech community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Trust & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We prioritize the security and privacy of our users above all else.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We're committed to promoting green technology and reducing our environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We strive for excellence in everything we do, from product quality to customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-zion-cyan">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-center">
                  We're building solutions that make technology accessible to everyone, everywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Zion by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">10K+</div>
              <p className="text-zion-slate-light">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <p className="text-zion-slate-light">Tech Companies</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <p className="text-zion-slate-light">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <p className="text-zion-slate-light">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">AI Talent Marketplace</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Connect businesses with top AI and tech professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Our AI-powered matching system helps companies find the perfect talent 
                  for their projects, from developers to data scientists.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Tech Services Hub</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Comprehensive tech services and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  From IT consulting to custom software development, we provide 
                  end-to-end technology solutions for businesses of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Equipment & Infrastructure</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  High-tech equipment and infrastructure solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Access to cutting-edge hardware, cloud infrastructure, and 
                  specialized equipment for tech projects and research.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Green IT Solutions</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Sustainable technology practices and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  We help businesses implement eco-friendly technology solutions 
                  that reduce environmental impact while improving efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Community & Learning</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Knowledge sharing and professional development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Our community platform fosters collaboration, learning, and 
                  innovation among tech professionals worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Enterprise Solutions</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Custom solutions for large organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Tailored technology solutions and consulting services designed 
                  specifically for enterprise-level organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
};

export default About;
=======
export default About;
=======
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded services to 25+ countries and launched revolutionary AI consciousness platform.'
    },
    {
      year: '2023',
      title: 'AI Breakthrough',
      description: 'Developed breakthrough AI solutions that increased client efficiency by 300%.'
    },
    {
      year: '2022',
      title: 'Quantum Computing',
      description: 'Pioneered quantum computing applications for enterprise solutions.'
    },
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Zion Tech Group was founded with a vision to revolutionize technology solutions.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEO
        title="About Zion Tech Group - Our Story & Mission"
        description="Learn about Zion Tech Group's journey from startup to global technology leader, our mission to revolutionize business through AI and innovation, and the team behind our success."
        keywords="about Zion Tech Group, company history, team, mission, vision, technology innovation"
        canonical="https://ziontechgroup.com/about"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                About Zion Tech Group
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-zion-blue-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    variants={itemVariants}
                  >
                    <div className={`${stat.color} mb-2 flex justify-center`}>
                      <stat.icon className="h-12 w-12" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                  <p className="text-xl text-zion-slate-light mb-6 leading-relaxed">
                    To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to achieve digital transformation and competitive advantage through innovative AI, cybersecurity, and cloud solutions.
                  </p>
                  <p className="text-lg text-zion-slate-light leading-relaxed">
                    We believe that every business deserves access to enterprise-grade technology that can drive growth, improve efficiency, and create new opportunities in the digital economy.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl border border-zion-cyan/30 flex items-center justify-center">
                    <Sparkles className="h-24 w-24 text-zion-cyan" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 bg-zion-blue-dark/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Our Core Values
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  The principles that guide everything we do and every solution we deliver
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {values.map((value, index) => (
                  <motion.div 
                    key={value.title}
                    className="text-center group"
                    variants={itemVariants}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className={`w-10 h-10 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Meet Our Team
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  The brilliant minds behind our innovative solutions and exceptional service delivery
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={member.name}
                    className="bg-gradient-to-br from-zion-slate-dark to-zion-slate rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                    variants={itemVariants}
                  >
                    <div className="text-6xl mb-4 text-center">{member.avatar}</div>
                    <h3 className="text-2xl font-bold mb-2 text-white text-center">{member.name}</h3>
                    <p className="text-zion-cyan font-semibold mb-4 text-center">{member.role}</p>
                    <p className="text-zion-slate-light text-center leading-relaxed">{member.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-24 bg-zion-blue-dark/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Our Journey
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  From startup to global technology leader - our story of innovation and growth
                </p>
              </motion.div>

              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {timeline.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    className="flex items-center space-x-8"
                    variants={itemVariants}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
=======
        title="About Zion Tech Group - Leading AI & IT Services Provider" 
        description="Learn about Zion Tech Group, a leading provider of AI services, IT solutions, and digital transformation services. Discover our mission, values, and global reach."
        keywords="about Zion Tech Group, AI services company, IT services provider, digital transformation company"
        canonical="https://ziontechgroup.com/about"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-purple to-zion-cyan py-20 overflow-hidden">
          <AnimatedBackground variant="stars" intensity="low" />
          
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <NeonGlow color="#22ddd2" intensity="high">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  About Zion Tech Group
                </h1>
              </NeonGlow>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Leading the digital revolution with cutting-edge AI services, comprehensive IT solutions, 
                and transformative digital strategies that empower businesses to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/services-hub">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission & Vision
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-zion-cyan mb-3">Mission</h3>
                    <p className="text-zion-slate-light">
                      To democratize access to cutting-edge AI and IT services, enabling businesses of all sizes 
                      to leverage the power of technology for growth, innovation, and competitive advantage.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-purple mb-3">Vision</h3>
                    <p className="text-zion-slate-light">
                      To be the global leader in AI-powered business solutions, driving the digital transformation 
                      of industries and creating a more intelligent, efficient, and sustainable future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-zion-cyan/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate-light">Expert team with 10+ years experience</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate-light">Global presence in 50+ countries</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate-light">Cutting-edge AI and ML solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate-light">Proven track record of success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions designed to address the most critical technology challenges 
                facing modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardContent className="pt-0">
                    <Button asChild className="w-full group-hover:bg-zion-purple group-hover:text-white transition-all duration-300">
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple-dark/50 to-zion-cyan-dark/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do and shape our relationships with clients, 
                partners, and our team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-zion-slate-light text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Company Information</h2>
                <div className="space-y-4 text-zion-slate-light">
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Company Name</h3>
                    <p>Zion Tech Group</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Founded</h3>
                    <p>2014</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Headquarters</h3>
                    <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Contact</h3>
                    <p>Mobile: +1 302 464 0950<br />Email: kleber@ziontechgroup.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br />Saturday: 10:00 AM - 4:00 PM EST<br />24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-zion-blue/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-zion-slate-light mb-6">
                    Let's discuss how our services can help transform your business and drive growth.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                      <Link to="/request-quote">Request Free Consultation</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                      <Link to="/contact">Contact Our Team</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that trust Zion Tech Group for their technology needs. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                <Link to="/request-quote">Start Your Journey</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services-hub">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
=======
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the Future of Tech?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Whether you're looking for talent, services, or want to be part of our mission, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark">
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
=======
      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Certifications & Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Ready to transform your business with AI? Let's work together to create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
export default About;
=======
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-zion-cyan" />
                Cutting-Edge Technology
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Latest AI/ML algorithms and frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Quantum computing capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Advanced cybersecurity solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Cloud-native architecture</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-zion-cyan" />
                Proven Expertise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">15+ years of technology experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Certified security professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Industry-recognized solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Continuous learning and innovation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our revolutionary technology solutions can transform your business 
              and help you achieve your goals. Our team is ready to partner with you on your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
=======
=======
          </div>
        </motion.div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-zion-cyan via-zion-purple to-zion-cyan"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{achievement.year}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                      <p className="text-zion-slate-light text-sm mb-2">{achievement.description}</p>
                      <span className="inline-block px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner with us, join our team, or learn more about our solutions, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
=======
}
=======
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Join the Future?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how Zion Tech Group can transform your business with cutting-edge technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Our Services
            </Link>
=======
          </div>
        </div>
      </div>
    </div>
  );
}
=======
};

export default About;
