import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Cpu,
  Database,
  Lock,
  Settings,
  MessageSquare,
  Eye,
  BarChart3,
  FileText,
  Search,
  Bot,
  Palette,
  DollarSign,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone,
  Box
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Kleber Santos",
      role: "CEO & Founder",
      image: "/team/kleber-santos.webp",
      bio: "AI researcher with 15+ years in machine learning and quantum computing",
      expertise: ["AI Research", "Quantum Computing", "Leadership"]
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/team/sarah-chen.webp",
      bio: "Full-stack architect specializing in scalable AI systems and cloud infrastructure",
      expertise: ["Cloud Architecture", "AI Systems", "DevOps"]
    },
    {
      name: "Marcus Johnson",
      role: "Head of AI Research",
      image: "/team/marcus-johnson.webp",
      bio: "PhD in Computer Science with expertise in neural networks and deep learning",
      expertise: ["Deep Learning", "Neural Networks", "Research"]
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Product",
      image: "/team/elena-rodriguez.webp",
      bio: "Product strategist with 10+ years in AI product development and user experience",
      expertise: ["Product Strategy", "UX Design", "AI Products"]
    }
  ];

  const achievements = [
    { number: "300%", label: "Average ROI for Clients", icon: TrendingUp },
    { number: "70%", label: "Cost Reduction Achieved", icon: DollarSign },
    { number: "90%", label: "Efficiency Gains", icon: Zap },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "50+", label: "Successful Projects", icon: CheckCircle },
    { number: "100+", label: "Happy Clients", icon: Users }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and emerging technologies"
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Enterprise-grade security and compliance are at the core of everything we build"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building solutions that can scale globally and make a positive impact"
    }
  ];

  const technologies = [
    { name: "Machine Learning", icon: Brain, description: "Advanced ML algorithms and models" },
    { name: "Quantum Computing", icon: Cpu, description: "Next-generation quantum algorithms" },
    { name: "Cloud Infrastructure", icon: Cloud, description: "Scalable cloud solutions" },
    { name: "Cybersecurity", icon: Lock, description: "Enterprise security solutions" },
    { name: "Data Analytics", icon: BarChart, description: "Advanced data insights" },
    { name: "Automation", icon: Settings, description: "Intelligent process automation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="About Zion Tech Group - Leading AI & IT Solutions Provider"
        description="Learn about Zion Tech Group, a leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Meet our expert team and discover our mission."
        keywords={["About Zion Tech Group", "AI Company", "IT Solutions Provider", "Team", "Mission", "Values"]}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="cyber-grid h-full"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="neon-text-advanced block mb-4">
                About
              </span>
              <span className="holographic-text text-4xl md:text-6xl lg:text-7xl">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of AI and IT solutions with cutting-edge technology,
              innovative thinking, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-advanced">Our Mission</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              To democratize advanced AI and IT solutions, making cutting-edge technology accessible
              to businesses of all sizes while maintaining the highest standards of security,
              performance, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="quantum-card-advanced p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 text-4xl mb-4">
                  <value.icon className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-advanced">Our Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable results that speak to our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="cyber-card-advanced p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 text-4xl mb-4">
                  <achievement.icon className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-advanced">Meet Our Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class experts in AI, quantum computing, and IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="quantum-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-cyan-400 text-center mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm text-center mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-advanced">Technologies We Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies that power our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="cyber-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 text-3xl mb-4">
                  <tech.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already using our AI solutions to drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
            </Link>
            <Link
              to="/case-studies"
              className="quantum-button px-8 py-4 text-lg font-semibold"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
