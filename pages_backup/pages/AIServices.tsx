import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Database,
  Cpu,
  Network,
  Target,
  Rocket
} from 'lucide-react';

const aiServices = [
  {
    title: "Machine Learning Models",
    description: "Custom ML models tailored to your business needs with advanced algorithms and real-time processing",
    icon: Brain,
    features: ["Predictive Analytics", "Pattern Recognition", "Real-time Processing", "Model Optimization"],
    pricing: "Starting at $3,000/month"
  },
  {
    title: "Computer Vision",
    description: "Advanced image and video analysis solutions for automation and quality control",
    icon: Eye,
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    pricing: "Starting at $2,500/month"
  },
  {
    title: "Natural Language Processing",
    description: "Intelligent text analysis and language understanding for chatbots and content processing",
    icon: MessageSquare,
    features: ["Sentiment Analysis", "Text Classification", "Language Translation", "Content Generation"],
    pricing: "Starting at $2,200/month"
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting to optimize business decisions and outcomes",
    icon: BarChart3,
    features: ["Demand Forecasting", "Risk Assessment", "Performance Prediction", "Trend Analysis"],
    pricing: "Starting at $2,800/month"
  },
  {
    title: "AI Automation",
    description: "Intelligent process automation to streamline workflows and reduce manual tasks",
    icon: Zap,
    features: ["Workflow Automation", "Document Processing", "Data Entry", "Task Scheduling"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "AI Security",
    description: "Advanced threat detection and security solutions powered by artificial intelligence",
    icon: Shield,
  }
];

const stats = [
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];

export default function AIServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>AIServices | Zion Tech Group</title>
        <meta name="description" content="AIServices - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">AIServices</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default AIServices;
