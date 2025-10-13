<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Brain, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  BarChart3,
  Clock,
  DollarSign,
  Target,
  Sparkles,
  Eye,
  Search,
  Download,
  Upload,
  FileCheck,
  AlertTriangle,
  TrendingUp,
  Globe,
  Lock,
  Smartphone,
  Monitor
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIDocumentAnalyzerPage = () => {
  const features = [
    {
      title: "AI-Powered Document Processing",
      description: "Advanced OCR and NLP technology to extract, analyze, and understand content from any document format",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Format Support",
      description: "Process PDFs, Word docs, images, scanned documents, and more with 99.9% accuracy",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Intelligent Data Extraction",
      description: "Automatically extract key information, dates, names, amounts, and structured data",
      icon: <Search className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Document Classification",
      description: "Automatically categorize and tag documents by type, importance, and content",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Ensure documents meet regulatory requirements and flag potential compliance issues",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Real-time Analytics",
      description: "Get insights and analytics on document processing patterns and trends",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 documents/month",
        "Basic OCR and text extraction",
        "5 user accounts",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Most popular for growing teams",
      features: [
        "Up to 10,000 documents/month",
        "Advanced AI analysis",
        "25 user accounts",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "API access",
        "Integration tools"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited documents",
        "Full AI suite",
        "Unlimited users",
        "24/7 phone support",
        "Custom development",
        "Advanced security",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "Legal Document Review",
      description: "Automatically analyze contracts, agreements, and legal documents for key terms and potential risks",
      icon: <FileCheck className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Document Processing",
      description: "Extract data from invoices, receipts, and financial statements for accounting and reporting",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Medical Record Analysis",
      description: "Process patient records, lab reports, and medical documents with healthcare-specific AI models",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Insurance Claims Processing",
      description: "Automatically analyze insurance claims, damage reports, and supporting documentation",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Research Document Analysis",
      description: "Process academic papers, research reports, and scientific documents for data extraction",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance Auditing",
      description: "Ensure documents meet regulatory requirements and identify compliance gaps automatically",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];
>>>>>>> 3a0c14507e7fb2ceadeeae23292a951fd32ccfd0

export default function ZionAIDocumentAnalyzer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>ZionAIDocumentAnalyzer - Coming Soon | Zion Tech Group</title>
        <meta name="description" content="AI-powered service coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">ZionAIDocumentAnalyzer</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
}
