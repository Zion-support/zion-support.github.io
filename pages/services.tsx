import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Network,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  Shield,
  Zap,
  BarChart3,
  Target,
  TrendingUp,
  Globe,
  Database,
  Lock,
  Cpu,
  Bot,
  FileText,
  MessageSquare,
  Search,
  Eye,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  Truck,
  Factory,
  Banknote,
  Calendar,
  MapPin,
  Phone,
  Headphones,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero
} from 'lucide-react';
import Layout from '../components/Layout';

  }
];

const mainServices = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions to transform your business operations",
    icon: Brain,
    href: "/ai-services",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Chatbots",
      "Process Automation"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "IT Services",
    description: "Comprehensive information technology solutions for modern businesses",
    icon: Network,
    href: "/it-services",
    features: [
      "Cloud Migration",
      "Infrastructure Management",
      "Network Security",
      "System Integration",
      "IT Consulting",
      "24/7 Support"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions for specific business needs",
    icon: Cloud,
    href: "/micro-saas",
    features: [
      "Custom Applications",
      "API Development",
      "Data Management",
      "User Analytics",
      "Scalable Architecture",
      "Multi-tenant Solutions"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

const additionalServices = [
  {
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions",
    icon: Shield,
    features: ["Threat Detection", "Data Encryption", "Security Audits", "Compliance"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services",
    icon: Server,
    features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Monitoring"]
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    icon: BarChart3,
    features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Reporting"]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
    features: ["iOS/Android Apps", "React Native", "Flutter", "App Store Optimization"]
  },
  {
    title: "Database Solutions",
    description: "Optimized database design and management",
    icon: Database,
    features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"]
  },
  {
    title: "IoT Solutions",
    description: "Internet of Things integration and development",
    icon: Cpu,
    features: ["Sensor Integration", "Real-time Monitoring", "Edge Computing", "Device Management"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We analyze your requirements and propose the best solution for your needs"
  },
  {
    step: "02",
    title: "Planning",
    description: "Detailed project planning with clear milestones and timelines"
  },
  {
    step: "03",
    title: "Development",
    description: "Build and implement your solution with regular updates and communication"
  },
  {
    step: "04",
    title: "Deployment",
    description: "Launch your solution with full support, training, and ongoing maintenance"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "50+", label: "Expert Team Members" },
  { number: "24/7", label: "Support Available" }
];

export default function ServicesPage() {
  return (
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ "opacity": 0, "y": 30 }}
                  whileInView={{ "opacity": 1, "y": 0 }}
                  transition={{ "duration": 0.8, "delay": index * 0.1 }}
                  viewport={{ "once": true }}
                >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
  );
}