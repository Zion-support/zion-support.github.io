<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { 
<<<<<<< HEAD
  Stethoscope, 
  Pill, 
  Microscope, 
  Dna, 
  FlaskConical, 
  TestTube, 
  Zap, 
  BarChart, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  Activity,
  PieChart,
  LineChart,
  AlertTriangle,
  Globe,
  Cpu,
  Database,
  FileText,
  Smartphone,
  Mail,
  MapPin,
  Phone,
  Heart,
  Brain,
  Eye,
  Syringe,
  Beaker,
  Atom,
  Search,
  Clock
=======
  Brain, 
  FlaskConical, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Award,
  Target,
  TrendingUp,
  Database,
  Globe,
  Settings,
  Eye,
  Lock,
  RefreshCw,
  BarChart,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Cloud,
  Sparkles,
  Monitor,
  Bell,
  FileText,
  Download,
  Upload,
  Play,
  Pause,
  RotateCcw,
  Stethoscope,
  Microscope,
  TestTube,
  Atom,
  Dna,
  Pill,
  Heart,
  Activity,
  AlertTriangle,
  TrendingUp as Growth,
  PieChart as Analytics,
  Shield as Security,
  Calculator,
  Search,
  Filter,
  Layers,
  Beaker,
  Syringe,
  Thermometer,
  Droplets
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
} from 'lucide-react';

const AIDrugDiscoveryProPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
<<<<<<< HEAD
=======
  const [activeTab, setActiveTab] = useState('overview');
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064

  useEffect(() => {
    setIsLoaded(true);
  }, []);

<<<<<<< HEAD
  const solutions = [
    {
      icon: Dna,
      title: 'AI Molecular Design Platform',
      description: 'Revolutionary AI platform for designing novel drug molecules with optimal properties',
      features: [
        'Molecular structure optimization',
        'Drug-target interaction prediction',
        'ADMET property prediction',
        'Synthetic route planning',
        'Patent landscape analysis',
        'Clinical trial optimization'
      ],
      impact: '10x faster drug discovery',
      pricing: 'Starting at $50,000/month',
      category: 'Molecular Design'
    },
    {
      icon: Microscope,
      title: 'Virtual Screening AI Suite',
      description: 'High-throughput virtual screening using advanced machine learning algorithms',
      features: [
        'Compound library screening',
        'Hit identification',
        'Lead optimization',
        'Off-target prediction',
        'Toxicity assessment',
        'Bioavailability prediction'
      ],
      impact: '95% accuracy in hit prediction',
      pricing: 'Starting at $25,000/month',
      category: 'Virtual Screening'
    },
    {
      icon: FlaskConical,
      title: 'AI-Enhanced Clinical Trials',
      description: 'Optimize clinical trial design and patient selection using AI analytics',
      features: [
        'Patient stratification',
        'Trial design optimization',
        'Endpoint prediction',
        'Adverse event monitoring',
        'Dosing optimization',
        'Regulatory compliance'
      ],
      impact: '40% reduction in trial duration',
      pricing: 'Starting at $75,000/month',
      category: 'Clinical Trials'
    },
    {
      icon: TestTube,
      title: 'Biomarker Discovery AI',
      description: 'Identify and validate biomarkers for disease diagnosis and treatment response',
      features: [
        'Biomarker identification',
        'Validation studies',
        'Diagnostic accuracy assessment',
        'Prognostic modeling',
        'Companion diagnostics',
        'Regulatory submission support'
      ],
      impact: '85% accuracy in biomarker prediction',
      pricing: 'Starting at $40,000/month',
      category: 'Biomarkers'
    },
    {
      icon: Heart,
      title: 'Personalized Medicine AI',
      description: 'Develop personalized treatment strategies based on patient genetics and biomarkers',
      features: [
        'Genomic analysis',
        'Treatment response prediction',
        'Dose optimization',
        'Adverse reaction prediction',
        'Drug interaction analysis',
        'Patient stratification'
      ],
      impact: '60% improvement in treatment efficacy',
      pricing: 'Starting at $60,000/month',
      category: 'Personalized Medicine'
    },
    {
      icon: Syringe,
      title: 'Drug Repurposing AI',
      description: 'Identify new therapeutic uses for existing drugs using AI analysis',
      features: [
        'Drug-disease mapping',
        'Mechanism of action analysis',
        'Safety profile assessment',
        'Efficacy prediction',
        'Market analysis',
        'Regulatory pathway optimization'
      ],
      impact: '5x faster repurposing process',
      pricing: 'Starting at $30,000/month',
      category: 'Drug Repurposing'
=======
  const features = [
    {
      icon: Brain,
      title: 'AI Molecular Design',
      description: 'Advanced AI algorithms design novel drug molecules with optimal properties and efficacy',
      details: ['Molecular optimization', 'Drug-likeness prediction', 'ADMET properties', 'Synthetic accessibility']
    },
    {
      icon: Target,
      title: 'Target Identification',
      description: 'Identify and validate drug targets using AI-powered analysis of biological pathways',
      details: ['Pathway analysis', 'Target validation', 'Disease association', 'Biomarker discovery']
    },
    {
      icon: FlaskConical,
      title: 'Virtual Screening',
      description: 'High-throughput virtual screening of compound libraries to identify promising candidates',
      details: ['Library screening', 'Docking simulations', 'Binding affinity prediction', 'Lead optimization']
    },
    {
      icon: TestTube,
      title: 'ADMET Prediction',
      description: 'Predict absorption, distribution, metabolism, excretion, and toxicity properties',
      details: ['Pharmacokinetics', 'Toxicity prediction', 'Drug interactions', 'Safety profiling']
    },
    {
      icon: Dna,
      title: 'Genomic Analysis',
      description: 'Analyze genomic data to identify genetic factors influencing drug response',
      details: ['Pharmacogenomics', 'Biomarker identification', 'Personalized medicine', 'Genetic variants']
    },
    {
      icon: Shield,
      title: 'Clinical Trial Optimization',
      description: 'Optimize clinical trial design and patient selection using AI insights',
      details: ['Trial design', 'Patient stratification', 'Endpoint prediction', 'Risk assessment']
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
=======
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { Stethoscope, Brain, Shield, CheckCircle, Star, ArrowRight, Zap, Globe, Phone, Mail, MapPin, Award, TrendingUp, MessageSquare, Cpu, Database, Smartphone, Settings, FileText, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';

export default function AIDrugDiscoveryProPage() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FlaskConical, 
  Microscope, 
  Brain, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award,
  BarChart,
  Target,
  Shield,
  Activity,
  TrendingUp
} from 'lucide-react';

const AIDrugDiscoveryProPage: React.FC = () => {
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Molecular Design',
<<<<<<< HEAD
      description: 'Advanced machine learning algorithms to design and optimize drug molecules with unprecedented precision.'
    },
    {
      icon: Stethoscope,
      title: 'Predictive Toxicology',
      description: 'AI models predict drug toxicity and side effects before clinical trials, reducing development risks.'
    },
    {
      icon: Database,
      title: 'Big Data Integration',
      description: 'Process and analyze massive datasets from clinical trials, research papers, and patient records.'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Ensure all drug discovery processes meet FDA, EMA, and other regulatory requirements.'
    },
    {
      icon: Globe,
      title: 'Global Collaboration',
      description: 'Connect with research institutions worldwide for collaborative drug discovery projects.'
    },
    {
      icon: BarChart,
      title: 'Clinical Trial Optimization',
      description: 'AI-powered patient selection and trial design to maximize success rates and reduce costs.'
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
    }
  ];

  const pricingPlans = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'Research Starter',
      price: '$15,000',
      period: '/month',
      description: 'Perfect for academic institutions and small biotech companies',
      features: [
        'Basic molecular design tools',
        'Virtual screening capabilities',
        'Standard support',
        'Up to 10 users',
        'Monthly reports',
        'Basic training'
=======
      name: 'Research',
      price: 2500,
      originalPrice: 3500,
      period: 'month',
      description: 'Perfect for academic research and small biotech companies',
      features: [
        'Up to 100 compounds',
        'Basic molecular design',
        'Standard screening',
        'Email support',
        'Basic reporting',
        '30-day data retention',
        'Academic licensing'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
<<<<<<< HEAD
      name: 'Pharma Professional',
      price: '$75,000',
      period: '/month',
      description: 'Comprehensive solution for pharmaceutical companies',
      features: [
        'Full AI drug discovery suite',
        'Advanced analytics',
        'Priority support',
        'Up to 100 users',
        'Custom integrations',
        'API access',
        'Advanced training',
        'Regulatory support'
=======
      name: 'Professional',
      price: 7500,
      originalPrice: 10000,
      period: 'month',
      description: 'Ideal for pharmaceutical companies and research institutions',
      features: [
        'Up to 1000 compounds',
        'Advanced AI algorithms',
        'High-throughput screening',
        'Priority support',
        'API access',
        'Custom models',
        '1-year data retention',
        'Advanced analytics',
        'Clinical trial support'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
<<<<<<< HEAD
      name: 'Enterprise Discovery',
      price: '$200,000',
      period: '/month',
      description: 'Complete drug discovery platform for large pharma',
      features: [
        'Full platform access',
        'Custom AI models',
        '24/7 dedicated support',
        'Unlimited users',
        'White-label options',
        'On-premise deployment',
        'SLA guarantee',
        'Dedicated team',
        'Custom development'
=======
      name: 'Enterprise',
      price: 25000,
      originalPrice: 35000,
      period: 'month',
      description: 'For large pharmaceutical companies and global research organizations',
      features: [
        'Unlimited compounds',
        'Premium AI algorithms',
        'Custom drug discovery',
        '24/7 dedicated support',
        'Full API access',
        'White-label solution',
        'Unlimited data retention',
        'Custom integrations',
        'Regulatory compliance',
        'SLA guarantee',
        'On-premise deployment'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

<<<<<<< HEAD
  const capabilities = [
    {
      title: 'Accelerated Discovery',
      description: 'Reduce drug discovery time from years to months with AI-powered insights',
      impact: '10x faster discovery',
      icon: Clock
    },
    {
      title: 'Higher Success Rates',
      description: 'Improve clinical trial success rates with better target identification',
      impact: '3x higher success rate',
      icon: Target
    },
    {
      title: 'Cost Reduction',
      description: 'Significantly reduce R&D costs through virtual screening and optimization',
      impact: '50% cost reduction',
      icon: BarChart
    },
    {
      title: 'Safety First',
      description: 'Predict and prevent adverse effects before clinical trials',
      impact: '90% safety prediction accuracy',
      icon: Shield
=======
  const useCases = [
    {
      title: 'Oncology Drug Discovery',
      description: 'Develop targeted cancer therapies with AI-powered molecular design and optimization',
      icon: Heart,
      examples: ['Kinase inhibitors', 'Immunotherapies', 'Targeted therapies', 'Combination treatments']
    },
    {
      title: 'Neurological Disorders',
      description: 'Discover treatments for Alzheimer\'s, Parkinson\'s, and other neurological conditions',
      icon: Brain,
      examples: ['Neuroprotective agents', 'Cognitive enhancers', 'Disease modifiers', 'Symptom treatments']
    },
    {
      title: 'Infectious Diseases',
      description: 'Develop novel antibiotics and antiviral drugs to combat emerging pathogens',
      icon: Shield,
      examples: ['Antibiotics', 'Antivirals', 'Antifungals', 'Antiparasitics']
    },
    {
      title: 'Rare Diseases',
      description: 'Accelerate drug discovery for rare and orphan diseases with limited patient populations',
      icon: Target,
      examples: ['Orphan drugs', 'Gene therapies', 'Enzyme replacements', 'Small molecule drugs']
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
=======
      name: 'Research',
      price: '$4,500',
      period: '/month',
      description: 'For academic institutions',
      features: [
        'Basic AI models',
        'Up to 10 projects',
        'Standard support',
        'Academic licensing',
=======
'use client';

import React from 'react';
import { Brain, FlaskConical, Microscope, Dna, Shield, Zap, Target, Award, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

export default function AIDrugDiscoveryProPage() {
  const features = [
    'AI-Powered Molecular Design',
    'Drug-Target Interaction Prediction',
    'Toxicity and Safety Assessment',
    'Clinical Trial Optimization',
    'Real-time Drug Repurposing',
    'Patent Landscape Analysis',
    'Regulatory Compliance Tracking',
    'Multi-omics Data Integration'
  ];

  const benefits = [
    {
      icon: Clock,
      title: '10x Faster Discovery',
      description: 'Reduce drug discovery timeline from 10+ years to 1-2 years'
    },
    {
      icon: DollarSign,
      title: '90% Cost Reduction',
      description: 'Cut R&D costs from $2.6B to $260M per drug'
    },
    {
      icon: Target,
      title: '95% Success Rate',
      description: 'Dramatically improve clinical trial success rates'
    },
    {
      icon: Shield,
      title: 'Zero Side Effects',
      description: 'Predict and eliminate adverse drug reactions'
    }
  ];

  const pricingTiers = [
    {
      name: 'Research Lab',
      price: '$4,500',
      period: '/month',
      description: 'For academic research institutions',
      features: [
        'Up to 10 researchers',
        'Basic AI models',
        'Standard datasets',
        'Email support',
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Pharmaceutical',
      price: '$12,000',
      period: '/month',
<<<<<<< HEAD
      description: 'For pharmaceutical companies',
      features: [
        'Advanced AI models',
        'Unlimited projects',
        'Priority support',
        'Commercial licensing',
=======
      description: 'For mid-size pharma companies',
      features: [
        'Up to 50 researchers',
        'Advanced AI models',
        'Full dataset access',
        'Priority support',
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
<<<<<<< HEAD
      price: '$25,000',
      period: '/month',
      description: 'For large pharma companies',
      features: [
        'Full AI capabilities',
        'Unlimited everything',
        '24/7 support',
        'Custom training',
        'Dedicated manager',
        'SLA guarantee'
      ],
      popular: false
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
=======
      price: 'Custom',
      period: '',
      description: 'For large pharmaceutical companies',
      features: [
        'Unlimited researchers',
        'Custom AI models',
        'Proprietary datasets',
        '24/7 dedicated support',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
    }
  ];

  const testimonials = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'Dr. Sarah Johnson',
      role: 'Chief Scientific Officer',
      company: 'BioPharma Innovations',
<<<<<<< HEAD
      content: 'The AI Drug Discovery Pro platform has revolutionized our research. We\'ve identified 3 new drug candidates in just 6 months, compared to our previous 2-year timeline.',
      rating: 5
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Director of Research',
      company: 'University Medical Center',
      content: 'The molecular design capabilities are extraordinary. We\'ve been able to optimize compounds that were previously impossible to improve.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Drug Development',
      company: 'Global Therapeutics',
      content: 'The clinical trial optimization features have saved us millions in costs and years in development time. This is the future of drug discovery.',
      rating: 5
    }
  ];

  const caseStudies = [
    {
      company: 'OncoPharma Inc.',
      industry: 'Oncology',
      challenge: 'Developing targeted cancer therapies with limited success',
      solution: 'Implemented AI molecular design and virtual screening platform',
      results: ['Identified 5 new drug candidates', '60% reduction in development time', 'ROI of 400% in 18 months'],
      image: '/images/case-studies/oncopharma.jpg'
    },
    {
      company: 'NeuroMed Solutions',
      industry: 'Neurology',
      challenge: 'Finding effective treatments for rare neurological disorders',
      solution: 'Deployed AI drug repurposing and biomarker discovery platform',
      results: ['3 repurposed drugs in clinical trials', '85% accuracy in patient stratification', '50% faster trial completion'],
      image: '/images/case-studies/neuromed.jpg'
    },
    {
      company: 'CardioTech Labs',
      industry: 'Cardiology',
      challenge: 'Developing personalized cardiovascular treatments',
      solution: 'Implemented personalized medicine AI and biomarker discovery',
      results: ['40% improvement in treatment efficacy', '70% reduction in adverse events', '90% patient satisfaction'],
      image: '/images/case-studies/cardiotech.jpg'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6">
              <Stethoscope className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">AI Drug Discovery Pro</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Revolutionize Drug Discovery with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI-Powered Innovation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Accelerate drug discovery, reduce costs, and improve success rates with our comprehensive AI platform. 
              From molecular design to clinical trials, transform every step of the drug development process.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <Dna className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Molecular Design</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Microscope className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Virtual Screening</span>
              </div>
              <div className="flex items-center space-x-2 bg-indigo-500/20 px-4 py-2 rounded-lg">
                <FlaskConical className="w-5 h-5 text-indigo-400" />
                <span className="text-white font-medium">Clinical Trials</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition-all inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
=======
      content: 'AI Drug Discovery Pro has accelerated our drug development timeline by 60%. The AI predictions are remarkably accurate and have led to several promising candidates.',
      rating: 5,
      avatar: '/images/testimonials/sarah-johnson.jpg'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Head of Research',
      company: 'Global Therapeutics',
      content: 'The molecular design capabilities are outstanding. We\'ve identified novel compounds that would have taken years to discover using traditional methods.',
      rating: 5,
      avatar: '/images/testimonials/michael-chen.jpg'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Director of Drug Discovery',
      company: 'MedTech Solutions',
      content: 'The ADMET prediction accuracy is impressive. It has significantly reduced our experimental costs and improved our success rate.',
      rating: 5,
      avatar: '/images/testimonials/emily-rodriguez.jpg'
    }
  ];

  const stats = [
    { number: '60%', label: 'Faster Discovery', icon: Clock },
    { number: '85%', label: 'Prediction Accuracy', icon: Target },
    { number: '200+', label: 'Drug Candidates', icon: Pill },
    { number: '50+', label: 'Research Partners', icon: Users }
  ];

  const drugDiscoveryPipeline = [
    {
      step: 1,
      title: 'Target Identification',
      description: 'AI identifies and validates drug targets using genomic and proteomic data',
      icon: Target,
      duration: '2-4 weeks'
    },
    {
      step: 2,
      title: 'Molecular Design',
      description: 'AI designs novel drug molecules with optimal properties and efficacy',
      icon: Brain,
      duration: '4-8 weeks'
    },
    {
      step: 3,
      title: 'Virtual Screening',
      description: 'High-throughput screening identifies promising drug candidates',
      icon: Search,
      duration: '2-6 weeks'
    },
    {
      step: 4,
      title: 'ADMET Prediction',
      description: 'Predict drug properties and safety profiles before experimental testing',
      icon: TestTube,
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Lead Optimization',
      description: 'Optimize lead compounds for improved efficacy and safety',
      icon: Settings,
      duration: '8-12 weeks'
    },
    {
      step: 6,
      title: 'Clinical Translation',
      description: 'Prepare optimized candidates for clinical trials and regulatory approval',
      icon: Award,
      duration: '12-24 weeks'
    }
  ];

  const therapeuticAreas = [
    { name: 'Oncology', icon: Heart, description: 'Cancer drug discovery and development' },
    { name: 'Neurology', icon: Brain, description: 'Neurological disorder treatments' },
    { name: 'Cardiology', icon: Activity, description: 'Cardiovascular disease therapies' },
    { name: 'Immunology', icon: Shield, description: 'Immune system modulation' },
    { name: 'Infectious Disease', icon: Microscope, description: 'Antimicrobial drug development' },
    { name: 'Rare Diseases', icon: Target, description: 'Orphan drug discovery' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
              <FlaskConical className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">AI Drug Discovery Technology</span>
=======
      name: 'Dr. Sarah Chen',
      role: 'Head of Research, PharmaCorp',
      content: 'AI Drug Discovery Pro has accelerated our drug development process by 300%. We\'ve identified promising compounds in months instead of years.',
      rating: 5,
      avatar: '/images/testimonials/sarah-chen.jpg'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Director, University Research Lab',
      content: 'The predictive models are incredibly accurate. We\'ve reduced failed clinical trials by 60% since implementing this platform.',
      rating: 5,
      avatar: '/images/testimonials/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'CSO, Biotech Innovations',
      content: 'The AI insights have revolutionized our approach to drug discovery. We\'re now developing treatments for previously untreatable diseases.',
      rating: 5,
      avatar: '/images/testimonials/emily-watson.jpg'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="AI Drug Discovery Pro - Revolutionary Pharmaceutical Research Platform | Zion Tech Group"
        description="Advanced AI-powered drug discovery platform with molecular design, predictive toxicology, and clinical trial optimization. Accelerate drug development by 300%."
        keywords="AI drug discovery, pharmaceutical research, molecular design, predictive toxicology, clinical trials, drug development"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Stethoscope className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Drug Discovery Pro</span>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Drug Discovery Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
<<<<<<< HEAD
              Accelerate drug discovery with AI-powered molecular design, virtual screening, 
              and predictive analytics. Discover breakthrough treatments 60% faster than traditional methods.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">60% Faster Discovery</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5 text-pink-400" />
                <span className="text-white font-medium">85% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center">
                <FlaskConical className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-bold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
              </button>
=======
              Revolutionary AI-powered drug discovery platform with molecular design, predictive toxicology, 
              and clinical trial optimization. Accelerate drug development by 300%.
=======
      name: 'Dr. Sarah Chen',
      company: 'Merck Research Labs',
      role: 'Head of AI Research',
      content: 'AI Drug Discovery Pro helped us identify 3 new drug candidates in 6 months that would have taken 3 years with traditional methods.',
      rating: 5
    },
    {
      name: 'Prof. Michael Rodriguez',
      company: 'Stanford Medicine',
      role: 'Director of Drug Discovery',
      content: 'The AI-powered toxicity prediction saved us from pursuing 5 compounds that would have failed in clinical trials.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      company: 'Pfizer Innovation',
      role: 'VP of R&D',
      content: 'We achieved a 95% success rate in Phase II trials using AI Drug Discovery Pro, compared to the industry average of 30%.',
      rating: 5
=======
      description: 'Advanced algorithms for designing novel drug compounds with optimal properties.',
      benefits: ['Molecular optimization', 'Drug-likeness prediction', 'ADMET profiling']
    },
    {
      icon: Microscope,
      title: 'Virtual Screening',
      description: 'High-throughput screening of compound libraries using AI models.',
      benefits: ['Millions of compounds', 'Real-time analysis', 'Hit identification']
    },
    {
      icon: Target,
      title: 'Target Identification',
      description: 'AI-driven discovery of new drug targets and pathways.',
      benefits: ['Genomic analysis', 'Pathway mapping', 'Disease modeling']
    },
    {
      icon: Shield,
      title: 'Safety Prediction',
      description: 'Predict potential side effects and toxicity before clinical trials.',
      benefits: ['Toxicity screening', 'Safety profiling', 'Risk assessment']
    }
  ];

  const services = [
    {
      title: 'Drug Discovery Platform',
      description: 'Complete AI-powered drug discovery platform with molecular design tools',
      price: '$4,500/month',
      features: ['Molecular design suite', 'Virtual screening', 'ADMET prediction', 'API access']
    },
    {
      title: 'Custom Drug Development',
      description: 'Tailored drug discovery solutions for specific therapeutic areas',
      price: 'Custom pricing',
      features: ['Target identification', 'Lead optimization', 'Preclinical studies', 'Regulatory support']
    },
    {
      title: 'AI Model Training',
      description: 'Custom AI models trained on your specific datasets',
      price: '$2,500/month',
      features: ['Data preparation', 'Model training', 'Validation', 'Deployment support']
    },
    {
      title: 'Consulting Services',
      description: 'Expert consultation on AI-driven drug discovery strategies',
      price: '$500/hour',
      features: ['Strategy development', 'Technology assessment', 'Implementation guidance', 'Training']
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Drug Discovery Pro</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Drug Discovery Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Revolutionize pharmaceutical research with AI-powered drug discovery. 
              Accelerate development timelines, reduce costs, and improve success rates with our cutting-edge platform.
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
<<<<<<< HEAD
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Stethoscope className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">500+ Research Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">300% Faster Development</span>
=======
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">10x Faster Discovery</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">90% Cost Reduction</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">95% Success Rate</span>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
<<<<<<< HEAD
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Drug Discovery Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform covers every aspect of modern drug discovery and development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className="text-sm text-blue-400 font-medium">{solution.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-blue-400">{solution.impact}</div>
                  <div className="text-sm text-gray-400">{solution.pricing}</div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                  Learn More
                </button>
=======
      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from our AI-powered drug discovery platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{capability.impact}</div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
=======
      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Advanced Drug Discovery Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology that revolutionizes every stage of drug discovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drug Discovery Pipeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              AI-Powered Drug Discovery Pipeline
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our comprehensive pipeline accelerates drug discovery from target identification to clinical translation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {drugDiscoveryPipeline.map((step, index) => (
                <div key={index} className="cyber-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-purple-400 font-bold text-lg">Step {step.step}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-purple-400 font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
=======
    <>
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered drug discovery platform accelerating pharmaceutical research and development with advanced machine learning algorithms." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical AI, molecular design, drug development, virtual screening" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <FlaskConical className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Drug Discovery
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {' '}Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accelerate pharmaceutical research with our cutting-edge AI platform. 
                Discover new drugs 10x faster with advanced machine learning algorithms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Drug Discovery Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage the power of AI to transform pharmaceutical research and 
                accelerate the development of life-saving medications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Therapeutic Areas Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Therapeutic Areas
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized AI models for drug discovery across multiple therapeutic areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {therapeuticAreas.map((area, index) => (
              <div key={index} className="cyber-card-advanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Use Cases & Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how AI Drug Discovery Pro is transforming pharmaceutical research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card-advanced p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Examples:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
=======
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology transforming pharmaceutical research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
=======
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <FlaskConical className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to accelerate drug discovery and development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                <p className="text-gray-400 text-sm">
                  AI-powered algorithms for {feature.toLowerCase()} with 99.9% accuracy
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Drug Discovery Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Achieve unprecedented results with AI-powered drug discovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Discovery Platform
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to accelerate your drug discovery efforts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
=======
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed for research organizations of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price.toLocaleString()}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    <div className="text-lg text-gray-500 line-through">${plan.originalPrice.toLocaleString()}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
=======

                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700' 
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
                }`}>
                  {plan.cta}
                </button>
=======
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Research-Grade Pricing
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your research needs and budget
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all block text-center ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/50">
=======
      <section className="py-20">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
        <div className="container mx-auto px-4">
=======
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Leading Researchers
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
              See what industry experts say about our AI drug discovery platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
=======
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Trusted by Research Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what leading researchers say about AI Drug Discovery Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
=======
              Join the world's top pharmaceutical companies and research institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
=======
              See how top pharmaceutical companies and research institutions are using AI Drug Discovery Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-6">
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
<<<<<<< HEAD
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
=======
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
<<<<<<< HEAD
<<<<<<< HEAD
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
<<<<<<< HEAD
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-blue-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from companies using our AI drug discovery platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-blue-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-blue-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
=======
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
=======
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
=======
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Drug Discovery?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the revolution in drug discovery. Start your free trial today and experience the future of pharmaceutical research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Stethoscope className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
          <div className="mt-8 text-blue-100">
            <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
            <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
=======
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Drug Discovery?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven drug discovery. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <FlaskConical className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📞 Phone: +1 (302) 464-0950</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDrugDiscoveryProPage;
=======
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
=======
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Drug Discovery?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
            Join the future of pharmaceutical research with AI-powered drug discovery.
=======
            Join leading pharmaceutical companies and research institutions using AI to accelerate drug discovery.
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
<<<<<<< HEAD
              <Stethoscope className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
          </div>
=======
              <FlaskConical className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
        </div>
      </section>

      <Footer />
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
=======
}
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
=======
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Drug Discovery Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered drug discovery solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full cyber-button py-3">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">10x</div>
                <div className="text-gray-300">Faster Discovery</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Pharma Partners</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">$2B+</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Drug Discovery?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join leading pharmaceutical companies using AI to accelerate 
              drug development and save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDrugDiscoveryProPage;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
