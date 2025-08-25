import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
import { 
  Brain, 
  Search, 
  BookOpen, 
<<<<<<< HEAD
  Zap, 
<<<<<<< HEAD
  Shield, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Network,
  Lock,
  Eye,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Monitor,
  AlertTriangle,
  Clock,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Lightbulb,
  Rocket,
  Award,
  Microscope,
  TestTube,
=======
import { Brain, Search, BookOpen, Zap, TrendingUp, Users, Globe, ArrowRight, Cpu, Database, Network } from 'lucide-react';
import SEOHead from '../components/SEOHead';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
=======
  FileText, 
  Database, 
  Globe, 
  Zap, 
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Cloud,
  Server,
  Workflow,
  BarChart,
  Settings as SettingsIcon,
  BarChart3 as Intelligence,
  Monitor,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Settings,
  Eye,
  Heart,
  DollarSign,
  ShoppingCart,
  Palette,
  Users2,
  Briefcase,
  Lightbulb,
  Code,
  Lock,
  Rocket,
  Cpu,
  Network
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9

  Database,
  BarChart3,
  TrendingUp as TrendingUpIcon,
  BookOpen as BookOpenIcon,
  Search as SearchIcon,
  Brain as BrainIcon
=======
  Globe, 
  BarChart3, 
  Cpu, 
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Shield
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
} from 'lucide-react';

const AIAutonomousResearchAssistant = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Intelligent Research",
      description: "AI-powered autonomous research with deep learning and natural language processing"
    },
    {
      icon: Search,
      title: "Advanced Discovery",
      description: "Comprehensive research across multiple databases and knowledge sources"
    },
    {
      icon: BookOpen,
      title: "Literature Analysis",
      description: "Automated literature review and citation management"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant research results and continuous learning capabilities"
    },
    {
      icon: Shield,
      title: "Data Validation",
      description: "Automated fact-checking and source credibility assessment"
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "Team-based research coordination and knowledge sharing"
=======
      title: "Autonomous Research",
      description: "AI-powered research that works independently to discover insights and patterns"
    },
    {
      icon: Search,
      title: "Intelligent Discovery",
      description: "Advanced algorithms that find relevant information across multiple data sources"
=======
      title: "Autonomous Research",
      description: "AI-powered research that operates independently to discover new insights and connections."
    },
    {
      icon: Search,
      title: "Intelligent Discovery",
      description: "Advanced search algorithms that find relevant information across multiple sources."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
    },
    {
      icon: BookOpen,
      title: "Knowledge Synthesis",
<<<<<<< HEAD
      description: "Automatically synthesize information from multiple sources into coherent insights"
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Instant analysis and insights as new data becomes available"
    },
    {
      icon: Globe,
      title: "Multi-source Integration",
      description: "Connect to academic databases, research papers, and industry reports"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Transform complex research data into clear, actionable visualizations"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
import { motion } from 'framer-motion';
import { Brain, Search, Database, TrendingUp, Users, Globe, Shield, Zap } from 'lucide-react';

export default function AIAutonomousResearchAssistant() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Research",
      description: "Advanced machine learning algorithms that understand context and generate insights from vast datasets"
    },
    {
      icon: Search,
      title: "Intelligent Discovery",
      description: "Automated literature review, hypothesis generation, and research gap identification"
    },
    {
      icon: Database,
      title: "Multi-Source Integration",
      description: "Seamlessly connects academic databases, research papers, and real-time data sources"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecasts research trends and identifies emerging opportunities in your field"
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "Facilitates team collaboration with shared research spaces and real-time updates"
    },
    {
      icon: Globe,
      title: "Global Knowledge Access",
      description: "Access to international research databases and cross-cultural insights"
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
=======
      title: "AI-Powered Research",
      description: "Advanced artificial intelligence that autonomously conducts comprehensive research"
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Smart search algorithms that find relevant information across multiple sources"
    },
    {
      icon: BookOpen,
      title: "Literature Review",
      description: "Automated literature review and analysis of academic and industry sources"
    },
    {
      icon: FileText,
      title: "Report Generation",
      description: "Automatic generation of comprehensive research reports and summaries"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Advanced data analysis and pattern recognition capabilities"
    },
    {
      icon: Globe,
      title: "Multi-Source Research",
      description: "Research across academic databases, industry reports, and web sources"
    }
  ];

  const capabilities = [
    {
      title: "Academic Research",
      description: "Comprehensive academic research with citation management",
      icon: BookOpen,
      features: ["Peer-reviewed papers", "Citation tracking", "Literature synthesis", "Research gaps identification"]
    },
    {
      title: "Market Research",
      description: "Industry and market analysis with competitive intelligence",
      icon: BarChart3,
      features: ["Market trends", "Competitor analysis", "Industry reports", "Market sizing"]
    },
    {
      title: "Technical Research",
      description: "Deep technical research and technology assessment",
      icon: Code,
      features: ["Technology evaluation", "Patent research", "Technical specifications", "Innovation tracking"]
    },
    {
      title: "Business Intelligence",
      description: "Business research and strategic intelligence gathering",
      icon: Building,
      features: ["Company research", "Financial analysis", "Strategic insights", "Risk assessment"]
    }
  ];

  const benefits = [
    "Reduce research time by up to 80%",
    "Access to millions of research sources",
    "Automated citation and reference management",
    "Real-time research updates and alerts",
    "Multi-language research capabilities",
    "24/7 autonomous research operation"
  ];

  const useCases = [
    {
      title: "Academic Institutions",
      description: "Support researchers and students with comprehensive research assistance",
      icon: Building,
      benefits: ["Literature reviews", "Research methodology", "Citation management", "Publication support"]
    },
    {
      title: "Research Organizations",
      description: "Accelerate research projects with AI-powered assistance",
      icon: Rocket,
      benefits: ["Project research", "Data collection", "Analysis support", "Report generation"]
    },
    {
      title: "Business Intelligence",
      description: "Market research and competitive intelligence for businesses",
      icon: BarChart3,
      benefits: ["Market analysis", "Competitor research", "Industry trends", "Strategic insights"]
    },
    {
      title: "Legal Research",
      description: "Comprehensive legal research and case law analysis",
      icon: BookOpen,
      benefits: ["Case law research", "Legal precedent", "Regulatory analysis", "Document review"]
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
    }
  ];

  const capabilities = [
<<<<<<< HEAD
<<<<<<< HEAD
    "Autonomous literature search and discovery",
    "Real-time data analysis and pattern recognition",
    "Automated citation management and formatting",
    "Multi-language research support",
    "Source credibility assessment and validation",
    "Research trend analysis and prediction",
    "Automated research report generation",
    "Collaborative research coordination",
    "Integration with academic databases",
    "Custom research framework development"
  ];

  const useCases = [
    {
<<<<<<< HEAD
      title: "Academic Research",
      description: "Automated literature reviews and research synthesis"
    },
    {
      title: "Market Research",
      description: "Competitive analysis and market trend identification"
    },
    {
      title: "Scientific Discovery",
      description: "Hypothesis generation and experimental design"
    },
    {
      title: "Legal Research",
      description: "Case law analysis and precedent identification"
    },
    {
      title: "Medical Research",
      description: "Clinical trial analysis and drug discovery"
    },
    {
      title: "Business Intelligence",
      description: "Industry analysis and strategic planning support"
=======
    {
      title: "Academic Research",
      description: "Access to peer-reviewed journals, research papers, and academic databases",
      benefits: ["Literature review automation", "Citation management", "Research gap identification"]
    },
    {
      title: "Market Intelligence",
      description: "Real-time market analysis and competitive intelligence gathering",
      benefits: ["Trend analysis", "Competitor monitoring", "Market opportunity identification"]
    },
    {
      title: "Scientific Discovery",
      description: "AI-powered hypothesis generation and experimental design",
      benefits: ["Pattern recognition", "Hypothesis testing", "Experimental optimization"]
    },
    {
      title: "Patent Analysis",
      description: "Comprehensive patent research and intellectual property analysis",
      benefits: ["Patent landscape mapping", "Prior art search", "Innovation tracking"]
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
    }
  ];

  const benefits = [
    "10x faster research completion",
    "24/7 autonomous operation",
    "Multi-language support",
    "Real-time updates and alerts",
    "Comprehensive source verification",
    "Customizable research parameters"
  ];

  const useCases = [
    {
<<<<<<< HEAD
      icon: Zap,
      title: "10x Faster Research",
      description: "Complete research tasks in minutes, not days"
    },
    {
      icon: Brain,
      title: "Deeper Insights",
      description: "AI-powered analysis reveals hidden patterns"
    },
    {
      icon: Search,
      title: "Comprehensive Coverage",
      description: "Access to millions of research sources"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Improves research quality over time"
=======
      description: "Automated synthesis of research findings into comprehensive reports and insights."
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Continuous monitoring and updates on research topics and emerging trends."
    }
  ];

  const capabilities = [
    {
      title: "Literature Review",
      description: "Automated comprehensive literature reviews across multiple databases and sources."
    },
    {
      title: "Data Analysis",
      description: "Advanced data analysis and statistical modeling for research insights."
    },
    {
      title: "Trend Identification",
      description: "AI-powered identification of emerging trends and research opportunities."
    },
    {
      title: "Collaboration Tools",
      description: "Seamless collaboration features for research teams and stakeholders."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
    }
  ];

  const researchAreas = [
<<<<<<< HEAD
    {
      title: "Scientific Research",
      description: "Physics, chemistry, biology, and engineering",
      icon: Microscope
    },
    {
      title: "Medical Research",
      description: "Clinical trials, drug discovery, and healthcare",
      icon: TestTube
    },
    {
      title: "Business Research",
      description: "Market analysis, strategy, and innovation",
      icon: BarChart3
    },
    {
      title: "Academic Research",
      description: "Literature review, citation analysis, and synthesis",
      icon: BookOpen
=======
      title: "R&D Departments",
      description: "Accelerate product development with comprehensive research insights"
    },
    {
      title: "Academic Institutions",
      description: "Enhance research capabilities and publication quality"
    },
    {
      title: "Consulting Firms",
      description: "Deliver deeper insights to clients with comprehensive research"
    },
    {
      title: "Legal Teams",
      description: "Comprehensive case research and precedent analysis"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
    "Automated literature review and synthesis",
    "Intelligent hypothesis generation",
    "Research methodology optimization",
    "Data analysis and visualization",
    "Citation management and formatting",
    "Research trend analysis",
    "Collaborative research coordination",
    "Publication strategy planning",
    "Grant proposal assistance",
    "Research impact assessment"
  ];

  const useCases = [
    {
      industry: "Academic Research",
      description: "Accelerate PhD research, streamline literature reviews, and enhance publication quality",
      benefits: ["50% faster research completion", "Improved citation accuracy", "Enhanced collaboration"]
    },
    {
      industry: "Pharmaceutical R&D",
      description: "Drug discovery optimization, clinical trial analysis, and regulatory compliance research",
      benefits: ["60% faster drug discovery", "Reduced research costs", "Improved success rates"]
    },
    {
      industry: "Technology Innovation",
      description: "Patent research, competitive analysis, and emerging technology assessment",
      benefits: ["Faster innovation cycles", "Better market positioning", "Reduced R&D risks"]
    },
    {
      industry: "Market Research",
      description: "Industry analysis, consumer behavior research, and competitive intelligence",
      benefits: ["Real-time market insights", "Data-driven decisions", "Competitive advantage"]
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
=======
      title: "Technology",
      icon: Cpu,
      description: "AI, blockchain, IoT, and emerging technologies"
    },
    {
      title: "Healthcare",
      icon: Heart,
      description: "Medical research, pharmaceuticals, and healthcare innovation"
    },
    {
      title: "Finance",
      icon: DollarSign,
      description: "Financial markets, fintech, and economic research"
    },
    {
      title: "Manufacturing",
      icon: Building,
      description: "Industry 4.0, automation, and manufacturing innovation"
    },
    {
      title: "Energy",
      icon: Zap,
      description: "Renewable energy, sustainability, and energy innovation"
    },
    {
      title: "Education",
      icon: Users,
      description: "Educational technology, pedagogy, and learning innovation"
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-100">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Helmet>
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="Transform your research with our AI Autonomous Research Assistant. Intelligent research automation, comprehensive analysis, and automated report generation powered by advanced AI." />
        <meta name="keywords" content="AI research assistant, autonomous research, research automation, AI research, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-research-assistant" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
<<<<<<< HEAD
              <div className="p-3 bg-white/20 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
              Revolutionize your research with intelligent, autonomous AI that discovers, 
              analyzes, and synthesizes information across all domains.
=======
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AI Autonomous Research Assistant
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your research process with our AI-powered autonomous research assistant. 
              Discover insights faster, analyze deeper, and stay ahead of the competition with 
              intelligent research automation.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
=======
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Brain className="h-12 w-12 text-purple-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto">
              Revolutionize your research with intelligent AI that autonomously conducts comprehensive research, analysis, and report generation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Research
              </button>
              <button className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
                Watch Demo
              </Link>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
    "Scientific Research",
    "Market Analysis",
    "Academic Studies",
    "Technology Trends",
    "Healthcare Research",
    "Financial Analysis"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="AI Autonomous Research Assistant - Zion Tech Group"
        description="Revolutionary AI-powered research assistant that autonomously conducts research, analyzes data, and generates insights across multiple domains."
        keywords="AI research assistant, autonomous research, research automation, AI analysis, research insights, automated research"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
              <Brain className="h-12 w-12 text-white" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Autonomous Research Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your research capabilities with our revolutionary AI-powered assistant that autonomously 
            conducts research, analyzes data, and generates insights across multiple domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/ai-autonomous-systems"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float">
          <div className="w-3 h-3 bg-indigo-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous Research Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered research assistant autonomously discovers, analyzes, and 
              synthesizes information with unprecedented speed and accuracy.
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Research Innovation
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            AI Autonomous
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> Research Assistant</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
          >
            Transform your research capabilities with our AI-powered autonomous research assistant. 
            Accelerate discovery, enhance collaboration, and unlock insights that drive innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/30 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Research Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI research assistant combines cutting-edge technology with intuitive design to 
              transform how research is conducted across industries.
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-green-600 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with comprehensive research capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
              </div>
=======
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Research Assistant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative benefits of AI-powered autonomous research.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600 rounded-full">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research assistant combines cutting-edge artificial intelligence with 
              comprehensive data access to deliver unprecedented research capabilities.
=======
      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Research Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From initial discovery to final publication, our AI assistant handles every aspect of the research process.
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the powerful capabilities that make our research assistant truly autonomous.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 text-lg">{capability.description}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
              </div>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="w-3 h-3 bg-zion-cyan rounded-full flex-shrink-0"></div>
                <span className="text-zion-slate-light">{capability}</span>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Research Areas Section */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Domains
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research support across all major domains and disciplines.
=======
      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Domains & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive research coverage across multiple domains with specialized AI capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
=======
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent Research Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Autonomous Research Assistant combines cutting-edge artificial intelligence with comprehensive research methodologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your research process with AI-powered automation and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
=======
      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research capabilities across multiple domains and industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Research Assistant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented research efficiency and comprehensive analysis capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Research Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From academic research to business intelligence, our AI assistant adapts to your research requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Benefits?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research assistant is designed for organizations that need comprehensive, 
              fast, and accurate research capabilities.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI research assistant is transforming research across diverse industries and applications.
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
<<<<<<< HEAD
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg mr-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {area.description}
                </p>
=======
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Domains
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI assistant covers a wide range of research areas and disciplines.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white">{area}</h3>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research capabilities that adapt and learn from your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {capabilities.slice(0, 5).map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {capabilities.slice(5).map((capability, index) => (
                <div key={index + 5} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI Autonomous Research Assistant transforms research across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
=======
      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum research capabilities and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, name: "AI Processing" },
              { icon: Database, name: "Big Data" },
              { icon: Network, name: "Cloud Native" },
              { icon: Brain, name: "Machine Learning" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gray-800/50 rounded-xl mb-4 mx-auto w-fit">
                  <tech.icon className="h-8 w-8 text-cyan-500 mx-auto" />
                </div>
                <p className="text-white font-medium">{tech.name}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
=======
      {/* Research Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research coverage across all major industries and domains
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <area.icon className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{area.title}</h3>
                <p className="text-gray-600 text-xs">{area.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
              </div>
=======
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-slate-light text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the future of autonomous research with Zion Tech Group.
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the research revolution with AI-powered autonomous research capabilities. 
            Our expert team is ready to help you implement cutting-edge research automation.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI-powered research revolution and transform your research capabilities.
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              View Pricing
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/ai-autonomous-systems"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore AI Services
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
            </Link>
=======
      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge AI and machine learning technologies for optimal research performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Machine Learning</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Natural Language Processing</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Network className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Knowledge Graphs</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Deep Learning</h3>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
          </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Research?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who have already transformed their work with our AI-powered 
              research assistant. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-purple px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the future of intelligent research with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your research? Contact our AI experts today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (302) 464-0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}