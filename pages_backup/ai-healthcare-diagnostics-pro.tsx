<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import {motion} from 'framer-motion';
import {Stethoscope, Brain, Eye, Heart, Microscope, Shield, BarChart3, TrendingUp, Target, Users, CheckCircle, ArrowRight, Cpu, Network, Database, Lock, Clock, DollarSign, PieChart, Activity, Zap, Pill, Syringe, Hospital, Ambulance,} from 'lucide-react';
import Link from 'next/link';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Stethoscope, Brain, Eye, Heart;
  Microscope, Shield, BarChart3;
  TrendingUp, Target, Users, CheckCircle;
  ArrowRight, Cpu, Network, Database;
  Lock, Clock, DollarSign, PieChart;
  Activity, Zap, Pill, Syringe, Hospital, Ambulance
 } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx



class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
  ],
  const useCases = [
    {
      icon: Microscope,
      title: "Radiology & Imaging",
      description: "AI-powered analysis of X-rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.",
      benefits: ["95% accuracy rate", "80% faster diagnosis", "Reduced radiologist workload"]
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.",
      benefits: ["Early disease detection", "Risk stratification", "Preventive care"]
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data.",
      benefits: ["Early intervention", "Treatment planning", "Outcome prediction"]
    },
    {
      icon: Microscope,
      title: "Pathology",
      description: "Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.",
      benefits: ["Precision medicine", "Faster results", "Standardized analysis"]
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const pricingPlans = [
    {
      name: "Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for small clinics and practices",
      features: [
        "Up to 1,000 diagnostic scans/month",
        "Basic AI diagnostic models",
        "Standard reporting dashboard",
        "Email support",
        "HIPAA compliance",
        "API access (5,000 calls/month)"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional",
      price: "$12,999",
      period: "/month",
      description: "Ideal for hospitals and medical centers",
      features: [
        "Up to 10,000 diagnostic scans/month",
        "Advanced AI diagnostic models",
        "Multi-modal imaging support",
        "Real-time monitoring & alerts",
        "Priority support",
        "API access (50,000 calls/month)",
        "Custom integrations",
        "Training & certification"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large healthcare networks",
      features: [
        "Unlimited diagnostic scans",
        "Custom AI model development",
        "Full multi-modal support",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited API access",
        "White-label solutions",
        "On-premise deployment",
        "Custom compliance features"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const integrations = [
    {
      name: "PACS Systems",
      icon: Database,
      description: "DICOM integration with major PACS vendors",
      color: "from-blue-500 to-cyan-500"

<<<<<<< HEAD
    },
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
  }
}'
import React from 'react';
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
import Link from 'next/link';

const AIHealthcareDiagnosticsPro: React.FC = () => {;
  const features = [;
    {;
      icon: Brain,;'
      title: 'Advanced AI Diagnostics',;
      description:;'
        'Deep learning algorithms analyze medical images, lab results, and patient data with 99 && 99.2% accuracy for early disease detection.',;'
      color: 'from-blue-500 to-cyan-500',;
    },;
    {;
      icon: Eye,;'
      title: 'Multi-Modal Imaging',;
      description:;'
        'Process X-rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.',;'
      color: 'from-purple-500 to-pink-500',;
    },;
    {;
      icon: Heart,;'
      title: 'Predictive Analytics',;
      description:;'
        'AI-powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.',;'
      color: 'from-red-500 to-orange-500',;
    },;
    {;
      icon: Shield,;'
      title: 'HIPAA Compliant',;
      description:;'
        'Enterprise-grade security with end-to-end encryption, audit trails, and compliance with healthcare data regulations.',;'
      color: 'from-green-500 to-emerald-500',;
    },;
    {;
      icon: BarChart3,;'
      title: 'Real-time Monitoring',;
      description:;'
        'Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.',;'
      color: 'from-indigo-500 to-blue-500',;
    },;
    {;
      icon: Zap,;'
      title: 'Automated Workflows',;
      description:;'
        'Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.',;'
      color: 'from-yellow-500 to-orange-500',;
    },  ];
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import Layout from '../components/layout/Layout',
import { motion } from 'framer-motion',
import {
  Stethoscope, Brain, Eye, Heart,
  Microscope, Shield, BarChart3,
  TrendingUp, Target, Users, CheckCircle,
  ArrowRight, Cpu, Network, Database,
  Lock, Clock, DollarSign, PieChart,
  Activity, Zap, Pill, Syringe, Hospital, Ambulance
} from 'lucide-react',
import Link from 'next/link',
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import Head from 'next / head';
import Layout from '../components / layout / Layout';
import {motion} from 'framer-motion';
import {Stethoscope, Brain, Eye, Heart, Microscope, Shield, BarChart3, TrendingUp, Target, Users, CheckCircle, ArrowRight, Cpu, Network, Database, Lock, Clock, DollarSign, PieChart, Activity, Zap, Pill, Syringe, Hospital, Ambulance, } from 'lucide-react';
=======
'
import Head from 'next / head';'
import Layout from '../components / layout / Layout';'
import {motion} from 'framer-motion';'
import {Stethoscope, Brain, Eye, Heart, Microscope, Shield, BarChart3, TrendingUp, Target, Users, CheckCircle, ArrowRight, Cpu, Network, Database, Lock, Clock, DollarSign, PieChart, Activity, Zap, Pill, Syringe, Hospital, Ambulance, } from 'lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
import Link from 'next / link';



<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const AIHealthcareDiagnosticsPro: React.FC = () => {
  const features = [
    {
=======


const AIHealthcareDiagnosticsPro: React.FC = () => {}
  const features = []
    {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
      icon: Brain,

<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
      title: 'Advanced AI Diagnostics',
      description:;
        'Deep learning algorithms analyze medical images, lab results, and patient data with 99.2% accuracy for early disease detection.',
      color: 'from - blue - 500 to - cyan - 500',
    },
    {
      icon: Eye,
      title: 'Multi - Modal Imaging',
      description:;
        'Process X - rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.',
      color: 'from - purple - 500 to - pink - 500',
    },
    {
      icon: Heart,
      title: 'Predictive Analytics',
      description:;
        'AI - powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.',
      color: 'from - red - 500 to - orange - 500',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description:;
        'Enterprise - grade security with end - to - end encryption, audit trails, and compliance with healthcare data regulations.',
      color: 'from - green - 500 to - emerald - 500',
    },
    {
      icon: BarChart3,
      title: 'Real - time Monitoring',
      description:;
        'Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.',
      color: 'from - indigo - 500 to - blue - 500',
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description:;
        'Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.',
      color: 'from - yellow - 500 to - orange - 500',
    },  ];
;
  const use_cases = [;
    {
      icon: Microscope,
      title: 'Radiology & Imaging',
      description:;
        'AI - powered analysis of X - rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.',
      benefits: [;
=======
const AIHealthcareDiagnosticsPro: React.FC = () => {
  const features = [;
    {
      icon: Brain,
      description:;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const AIHealthcareDiagnosticsPro: React.FC;
      description:
        'AI-powered analysis of X-rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.'
      benefits: [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        '95% accuracy rate',
        '80% faster diagnosis',
        'Reduced radiologist workload',
      ],
    },
    {
      icon: Heart,
      title: 'Cardiology',
<<<<<<< HEAD
      description:;
        'Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.',
      benefits: [;
=======
      description:
        'Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.',
      benefits: [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        'Early disease detection',
        'Risk stratification',
        'Preventive care',
      ],
    },
    {
      icon: Brain,
      title: 'Neurology',
<<<<<<< HEAD
      description:;
        "AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data.",
      benefits: [;
=======
      description:
        "AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data.",
      benefits: [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        'Early intervention',
        'Treatment planning',
        'Outcome prediction',
      ],
    },
    {
      icon: Microscope,
      title: 'Pathology',
<<<<<<< HEAD
      description:;
        'Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.',
      benefits: [;
=======
      description:
        'Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.',
      benefits: [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        'Precision medicine',
        'Faster results',
        'Standardized analysis',
      ],
<<<<<<< HEAD
    },  ];
;
  const pricing_plans = [;
    {
      name: 'Starter',
      price: '$4, 999',
      period: '/month',
      description: 'Perfect for small clinics and practices',
      features: [;
        'Up to 1, 000 diagnostic scans / month',
=======
    },
  ];

  const pricingPlans = [
    {
name: 'Starter',
      price: '$4,999',
      period: '/month',
      description: 'Perfect for small clinics and practices',
      features: [
        'Up to 1,000 diagnostic scans/month',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        'Basic AI diagnostic models',
        'Standard reporting dashboard',
        'Email support',
        'HIPAA compliance',
<<<<<<< HEAD
        'API access (5, 000 calls / month)',
      ],
      color: 'from - blue - 500 to - cyan - 500',
=======
        'API access (5,000 calls/month)',
      ],
      color: 'from-blue-500 to-cyan-500',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      popular: false,
    },
    {
      name: 'Professional',
<<<<<<< HEAD
      price: '$12, 999',
      period: '/month',
      description: 'Ideal for hospitals and medical centers',
      features: [;
        'Up to 10, 000 diagnostic scans / month',
        'Advanced AI diagnostic models',
        'Multi - modal imaging support',
        'Real - time monitoring & alerts',
        'Priority support',
        'API access (50, 000 calls / month)',
        'Custom integrations',
        'Training & certification',
      ],
      color: 'from - purple - 500 to - pink - 500',
=======
      price: '$12,999',
      period: '/month',
      description: 'Ideal for hospitals and medical centers',
      features: [
        'Up to 10,000 diagnostic scans/month',
        'Advanced AI diagnostic models',
        'Multi-modal imaging support',
        'Real-time monitoring & alerts',
        'Priority support',
        'API access (50,000 calls/month)',
        'Custom integrations',
        'Training & certification',
      ],
      color: 'from-purple-500 to-pink-500',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      popular: true,
    },
    {
      name: 'Enterprise',
<<<<<<< HEAD
      price: '$29, 999',
      period: '/month',
      description: 'For large healthcare networks',
      features: [;
        'Unlimited diagnostic scans',
        'Custom AI model development',
        'Full multi - modal support',
        'Dedicated account manager',
        '24 / 7 phone support',
        'Unlimited API access',
        'White - label solutions',
        'On - premise deployment',
        'Custom compliance features',
      ],
      color: 'from - green - 500 to - emerald - 500',
      popular: false,
    },  ];
;
  const integrations = [;

    {
      name: "PACS Systems",
      icon: Database,

      description: 'DICOM integration with major PACS vendors',
      color: 'from - blue - 500 to - cyan - 500',
    },

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    {
      name: "EHR Platforms",
      icon: Database,

=======
      description: 'Epic, Cerner, Allscripts, athenahealth',
      color: 'from - green - 500 to - emerald - 500',
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
      description: "Epic, Cerner, Allscripts, athenahealth",
      color: "from-green-500 to-emerald-500"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    },

    {
=======
    },

    {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
      name: "LIS Systems",
      icon: Microscope,
'
      description: 'Lab information systems integration','
      color: 'from - purple - 500 to - pink - 500',
"
      description: "Lab information systems integration","
      color: "from-purple-500 to-pink-500"
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
    },

    {"
      name: "RIS Systems",
      icon: BarChart3,
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx

=======
      description: 'Radiology information systems',
      color: 'from - orange - 500 to - red - 500',
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
      description: "Radiology information systems",
=======
'
      description: 'Radiology information systems','
      color: 'from - orange - 500 to - red - 500',
"
      description: "Radiology information systems","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
      color: "from-orange-500 to-red-500"

    },

    {"
      name: "Medical Devices",
      icon: Stethoscope,
'
      description: 'CT, MRI, X - ray, ultrasound machines','
      color: 'from - indigo - 500 to - blue - 500',
"
      description: "CT, MRI, X-ray, ultrasound machines","
      color: "from-indigo-500 to-blue-500"
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
    },

    {"
      name: "Cloud Platforms",
      icon: Cpu,
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx

=======
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
          href='https://ziontechgroup && ziontechgroup.com/ai-healthcare-diagnostics-pro'
        />;
      </Head>;


      {/* Hero Section */}'
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>;
        {/* Background Effects */}
'
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900'></div>;'
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0 && 0.15),transparent_50%)]'></div>;'
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0 && 0.1),transparent_50%)]'></div>;
        {/* Floating Elements */}'
        <div className='absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse'></div>;'
        <div className='absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000'></div>;'
        <div className='absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500'></div>;'
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}'
            className='mb-8'>;'
            <div className='inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6'>;'
              <Brain className='w-4 h-4' />;
              <span>AI-Powered Healthcare</span>;
            </div>;'
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>;'
              <span className='bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent'>;
                AI Healthcare;
              </span>;
              <br />;'
              <span className='text-white'>Diagnostics Pro</span>;
            </h1>;'
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>;'
              Transform healthcare delivery with the world's most advanced AI;
              diagnostic platform. Achieve 99 && 99.2% accuracy in disease detection,;
              reduce diagnosis time by 80%, and save countless lives through;
              early intervention.;
            </p>;


            {/* Key Metrics */}'
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>              <motion&& motion.div;
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}'
                className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm'>;'
                <div className='text-3xl font-bold text-green-400 mb-2'>;
                  99 && 99.2%;
                </div>;'
                <div className='text-gray-300'>Diagnostic Accuracy</div>              </motion && motion.div>;
              <motion&& motion.div;
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}'
                className='bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm'>;'
                <div className='text-3xl font-bold text-cyan-400 mb-2'>80%</div>;'
                <div className='text-gray-300'>Faster Diagnosis</div>              </motion && motion.div>;
              <motion&& motion.div;
                initial={{ opacity: 0, scale: 0 && 0.8 }}

<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
=======
=======
      description: 'AWS, Azure, Google Cloud, IBM Cloud',
=======
'
      description: 'AWS, Azure, Google Cloud, IBM Cloud','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
      color: 'from - yellow - 500 to - orange - 500',
    },  ];
;
  const specialties = [;
    {}
      icon: Heart,'
      name: 'Cardiology',
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      description:;
=======
      price: '$29,999',
      period: '/month',
      description: 'For large healthcare networks',
      features: [
        'Unlimited diagnostic scans',
        'Custom AI model development',
        'Full multi-modal support',
        'Dedicated account manager',
        '24/7 phone support',
        'Unlimited API access',
        'White-label solutions',
        'On-premise deployment',
        'Custom compliance features',
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false,
    },
  ];

  const integrations = [
    {
name: 'PACS Systems',
      icon: Database,
      description: 'DICOM integration with major PACS vendors',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'EHR Platforms',
      icon: Database,
      description: 'Epic, Cerner, Allscripts, athenahealth',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'LIS Systems',
      icon: Microscope,
      description: 'Lab information systems integration',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'RIS Systems',
      icon: BarChart3,
      description: 'Radiology information systems',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Medical Devices',
      icon: Stethoscope,
      description: 'CT, MRI, X-ray, ultrasound machines',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Cloud Platforms',
      icon: Cpu,
      description: 'AWS, Azure, Google Cloud, IBM Cloud',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const specialties = [
    {
      icon: Heart,
name: 'Cardiology',
      description:
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        'Heart disease detection, ECG analysis, cardiovascular risk assessment',
=======

      description:;'
        'Heart disease detection, ECG analysis, cardiovascular risk assessment','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
      accuracy: '99.1%',
    },
    {}
      icon: Brain,'
      name: 'Neurology',
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
      description:;
=======
<<<<<<< HEAD
      description:;
=======
      description:
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      description:
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
      description:
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        'Brain tumor detection, stroke diagnosis, neurological disorder analysis',
=======
      description:;'
        'Brain tumor detection, stroke diagnosis, neurological disorder analysis','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
      accuracy: '98.9%',
    },
    {}
      icon: Activity,'
      name: 'Pulmonology',
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
      description:;
=======
<<<<<<< HEAD
      description:;
=======
      description:
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      description:
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
      description:
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        'Lung cancer screening, pneumonia detection, respiratory disease analysis',
=======
      description:;'
        'Lung cancer screening, pneumonia detection, respiratory disease analysis','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
      accuracy: '99.3%',
    },
    {}
      icon: Eye,'
      name: 'Ophthalmology',
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
      description:;
=======
<<<<<<< HEAD
      description:;
=======
      description:
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      description:
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
      description:
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        'Retinal disease detection, glaucoma screening, diabetic retinopathy',
=======
      description:;'
        'Retinal disease detection, glaucoma screening, diabetic retinopathy','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
      accuracy: '98.7%',
    },
    {}
      icon: Shield,'
      name: 'Hepatology',
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
      description:;
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
      description:;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      description:
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        'Liver disease detection, cirrhosis assessment, tumor identification',
      accuracy: '99.0%',
    },
    {
      icon: Microscope,
      name: 'Nephrology',
<<<<<<< HEAD
      description:;
        'Kidney disease detection, renal function analysis, transplant assessment',
      accuracy: '98.8%',
    },  ];
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (

    <Layout>
      <Head>
        <title>AI Healthcare Diagnostics Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and improve patient outcomes with our advanced AI platform." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, medical imaging, disease detection, healthcare AI, medical AI, diagnostic accuracy" />
        <meta property="og:title" content="AI Healthcare Diagnostics Pro - Zion Tech Group" />
        <meta property="og:description" content="Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection and reduce diagnosis time by 80%." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-healthcare-diagnostics-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare-diagnostics-pro" />
      </Head>

<<<<<<< HEAD
=======

      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        {/* Floating Elements */}
=======
<<<<<<< HEAD
=======
      description:
        'Kidney disease detection, renal function analysis, transplant assessment',
      accuracy: '98.8%',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>AI Healthcare Diagnostics Pro - Zion Tech Group</title>
<meta
          name='description'
          content='Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and improve patient outcomes with our advanced AI platform.'
        />
        <meta
          name='keywords'
          content='AI healthcare, medical diagnostics, medical imaging, disease detection, healthcare AI, medical AI, diagnostic accuracy'
        />
        <meta
          property='og:title'
          content='AI Healthcare Diagnostics Pro - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection and reduce diagnosis time by 80%.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/ai-healthcare-diagnostics-pro'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/ai-healthcare-diagnostics-pro'
        />
      </Head>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>
        {/* Background Effects */}
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]'></div>
        {/* Floating Elements */}
        <div className='absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse'></div>
        <div className='absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500'></div>
<<<<<<< HEAD
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Effects */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
<<<<<<< HEAD
        {/* Floating Elements */}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        {/* Floating Elements */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD
=======
<<<<<<< HEAD

  return (_<Layout>
      <Head>
        <title>AI Healthcare Diagnostics Pro - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and improve patient outcomes with our advanced AI platform.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI healthcare, medical diagnostics, medical imaging, disease detection, healthcare AI, medical AI, diagnostic accuracy&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Healthcare Diagnostics Pro - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection and reduce diagnosis time by 80%.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ai-healthcare-diagnostics-pro&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-healthcare-diagnostics-pro&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        {/* Background Effects */}
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900&quot;></div>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]&quot;></div>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]&quot;></div>
        
        {/* Floating Elements */}
        <div className=&quot;absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse&quot;></div>
        <div className=&quot;absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000&quot;></div>
        <div className=&quot;absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500&quot;></div>
        
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
className="mb-8"
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mb-8"



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='mb-8'
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
=======
"
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>"
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>"
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500"></div>"
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


          >"
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              <Brain className="w-4 h-4" />
              <span>AI-Powered Healthcare</span>
            </div>"
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">"
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AI Healthcare;
              </span>
              <br />"
              <span className="text-white">Diagnostics Pro</span>
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform healthcare delivery with the world's most advanced AI diagnostic platform. 
              Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and save countless lives through early intervention.
            </p>
<<<<<<< HEAD
            {/* Key Metrics */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm'
              >
                <div className='text-3xl font-bold text-green-400 mb-2'>
                  99.2%
                </div>
                <div className='text-gray-300'>Diagnostic Accuracy</div>              </motion.div>
            {/* Key Metrics */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >"
                <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>"
                <div className="text-gray-300">Diagnostic Accuracy</div>
              </motion.div>
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
              <motion.div
<<<<<<< HEAD
=======
              <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}"
className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
=======
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Faster Diagnosis</div>
              </motion.div>
              <motion.div
            </div>
            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Transform healthcare delivery with the world's most advanced AI
              diagnostic platform. Achieve 99.2% accuracy in disease detection
              reduce diagnosis time by 80%, and save countless lives through
              early intervention.
            </p>
            {/* Key Metrics */}
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm'
=======
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className='text-3xl font-bold text-green-400 mb-2'>
                  99.2%
                </div>
<<<<<<< HEAD
                <div className='text-gray-300'>Diagnostic Accuracy</div>              </motion.div>
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform healthcare delivery with the world's most advanced AI diagnostic platform.
              Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and save countless lives through early intervention.
            </p>
<<<<<<< HEAD
            {/* Key Metrics */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm'
              >
                <div className='text-3xl font-bold text-green-400 mb-2'>
                  99.2%
                </div>
                <div className='text-gray-300'>Diagnostic Accuracy</div>              </motion.div>
=======
            {/* Key Metrics */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
=======






              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, scale: 1 }  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.2 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >"
                <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>"
                <div className="text-gray-300">Diagnostic Accuracy</div>
              </motion.div>
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
              <motion.div
<<<<<<< HEAD
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.4 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >

=======
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Faster Diagnosis</div>
              </motion.div>
              <motion.div
<<<<<<< HEAD

=======
<<<<<<< HEAD
            </div>
            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                Schedule Demo
              </motion.button>
              <motion.button
=======
<<<<<<< HEAD
=======
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>
              <motion.div
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
=======
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
=======
              <motion.div"
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
"
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>"
                <div className="text-gray-300">Faster Diagnosis</div>
              </motion.div>
              <motion.div;
              >"
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
                <div className="text-gray-300">Continuous Monitoring</div>
              </motion.div>
            </div>
<<<<<<< HEAD

                Schedule Demo
              </motion.button>
=======


                transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}'
                className='bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm'>;'
                <div className='text-3xl font-bold text-purple-400 mb-2'>;
                  24/7;
                </div>;'
                <div className='text-gray-300'>Continuous Monitoring</div>              </motion && motion.div>;
            </div>;



            {/* CTA Buttons */}

<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
            {/* CTA Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <motion.button
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx

            {/* CTA Buttons */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button;
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >


<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                Schedule Demo
=======
            {/* CTA Buttons */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button;
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >



                Schedule Demo;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              </motion.button>
              <motion.button;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
"
                className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >

=======
                <div className='text-gray-300'>Diagnostic Accuracy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
className='bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm'
              >
                <div className='text-3xl font-bold text-cyan-400 mb-2'>80%</div>
                <div className='text-gray-300'>Faster Diagnosis</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
className='bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm'
              >
                <div className='text-3xl font-bold text-purple-400 mb-2'>
                  24/7
                </div>
                <div className='text-gray-300'>Continuous Monitoring</div>
              </motion.div>
            </div>
            {/* CTA Buttons */}
<div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
className='px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                Schedule Demo
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'
              >
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                Contact Sales
=======

              >

                Contact Sales;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              </motion.button>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx




<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
      </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
      {/* Features Section */}
"
      <section className="py-20 bg-gray-900 relative overflow-hidden">"
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>"
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
{/* Features Section */}
      <section className='py-20 bg-gray-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
          <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======

          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              Powered by <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Advanced AI</span>
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge artificial intelligence with deep medical expertise to deliver unprecedented diagnostic accuracy and speed.
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD

              <motion.div
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Advanced AI;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Our platform combines cutting-edge artificial intelligence with;
              deep medical expertise to deliver unprecedented diagnostic;
              accuracy and speed.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features && features.map((feature, index) => (;
              <motion&& motion.div

                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group'
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group'
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>"
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======



                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
            ))}

          </div>;
        </div>;
      </section>

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Medical Specialties Section */}

<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
=======
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      {/* Medical Specialties Section */}

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <h3 className='text-xl font-semibold text-white mb-4'>
                  {feature.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
{/* Medical Specialties Section */}
      <section className='py-20 bg-black relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD

=======

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD


<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              Medical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Specialties</span>
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform covers all major medical specialties with specialized models trained on millions of cases for maximum accuracy.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Specialties;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;

=======
                className='bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 border border - purple - 500 / 30 rounded - 2xl p - 6 backdrop - blur - sm';
              >;
                <div className='text - 3xl font - bold text - purple - 400 mb - 2'>;
                  24 / 7;
                </div>;
                <div className='text - gray - 300'>Continuous Monitoring</div>              </motion.div>;
            </div>;
            {/* CTA Buttons */}
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>              <motion.button;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='px - 8 py - 4 bg - gradient - to - r from - green - 500 to - emerald - 600 text - white font - semibold rounded - xl hover:from - green - 600 hover:to - emerald - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - green - 500 / 25'              >;
                Schedule Demo;
              </motion.button>;
              <motion.button;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className='px - 8 py - 4 border border - green - 500 / 50 text - green - 400 font - semibold rounded - xl hover:bg - green - 500 / 10 transition - all duration - 300'              >;
                Contact Sales;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      {/* Features Section */}
      <section className='py - 20 bg - gray - 900 relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (56, 189, 248, 0.05), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Powered by{' '}
              <span className='bg - gradient - to - r from - green - 400 to - emerald - 400 bg - clip - text text - transparent'>;
                Advanced AI;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Our platform combines cutting - edge artificial intelligence with;
              deep medical expertise to deliver unprecedented diagnostic;
              accuracy and speed.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {features.map ((feature, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 border border - gray - 700 / 50 rounded - 2xl p - 8 backdrop - blur - sm hover:border - green - 500 / 30 transition - all duration - 300 group';
              >;
                <div;
                  className={`w - 16 h - 16 bg - gradient - to - r ${feature.color} rounded - 2xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                >;
                  <feature.icon className='w - 8 h - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 4'>;
                  {feature.title}
                </h3>;
                <p className='text - gray - 300 leading - relaxed'>;
                  {feature.description}
                </p>              </motion.div>))}
          </div>;
        </div>;
      {/* Medical Specialties Section */}
      <section className='py - 20 bg - black relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_20%_80%, rgba (139, 92, 246, 0.08), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Medical{' '}
              <span className='bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Specialties;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              Our AI platform covers all major medical specialties with;
              specialized models trained on millions of cases for maximum;
              accuracy.;
            </p>;


              <li>• CT scan interpretation</li>;
              <li>• MRI diagnostics</li>;
              <li>• Ultrasound imaging</li>;
            </ul>;
          </div>;


<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• X-ray analysis</li>
              <li>• CT scan interpretation</li>
              <li>• MRI diagnostics</li>
              <li>• Ultrasound imaging</li>
            </ul>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {specialties.map((specialty, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300'
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
=======

              >"
                <div className="flex items-center justify-between mb-4">"
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
                    <specialty.icon className="w-8 h-8 text-white" />
                  </div>"
                  <div className="text-right">"
                    <div className="text-2xl font-bold text-green-400">{specialty.accuracy}</div>"
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            ))}

          </div>;
        </div>;
      </section>


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Use Cases Section */}
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      {/* Use Cases Section */}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <h3 className='text-xl font-semibold text-white mb-3'>
                  {specialty.name}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
{/* Use Cases Section */}
      <section className='py-20 bg-gray-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
"
      <section className="py-20 bg-gray-900 relative overflow-hidden">"
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]"></div>"
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD


<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD


=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              Transform Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Practice</span>
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From radiology to pathology, our AI platform adapts to your specific medical specialty and workflow requirements.
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD

              <motion.div
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Practice;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              From radiology to pathology, our AI platform adapts to your;
              specific medical specialty and workflow requirements.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {useCases && useCases.map((useCase, index) => (;
              <motion&& motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {useCases.map((useCase, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm'
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
=======

              >"
                <div className="flex items-start space-x-4">"
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>"
                  <div className="flex-1">"
                    <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>"
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>"
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======



                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <div
                          key={benefitIndex}
                          className='flex items-center space-x-2 text-sm'
                        >
                          <CheckCircle className='w-4 h-4 text-green-400' />
                          <span className='text-gray-300'>{benefit}</span>
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      ))}
                    </div>;
                  </div>;
                </div>;
              </motion && motion.div>;
            ))}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
          </div>;
        </div>;
      </section>;


      {/* Pricing Section */}
      <section className='py-20 bg-black relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0 && 0.05),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

      {/* Pricing Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>
        </div>
      </section>
      {/* Pricing Section */}
<section className='py-20 bg-black relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD


<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD


=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              Choose Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Plan</span>
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your healthcare practice. Start with our Starter plan and upgrade as you grow.
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (


              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Plan;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Flexible pricing options designed to scale with your healthcare;
              practice. Start with our Starter plan and upgrade as you grow.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (;
              <motion&& motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {pricingPlans.map((plan, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 backdrop-blur-sm ${
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                  plan.popular
                    ? 'border-green-500/50 shadow-lg shadow-green-500/25'                    : 'border-gray-700/50'
                }`}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 backdrop-blur-sm ${;
                  plan.popular;
                    ? 'border-green-500/50 shadow-lg shadow-green-500/25';
                    : 'border-gray-700/50';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                viewport={{ once: true }}`
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 backdrop-blur-sm ${}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              >
                {plan.popular && ("
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular;
                    </div>
                  </div>
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======


                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                <div className="text-center mb-8">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                <div className="text-center mb-8">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
<<<<<<< HEAD

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
<<<<<<< HEAD
=======
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
plan.popular
                    ? 'border-green-500/50 shadow-lg shadow-green-500/25'
                    : 'border-gray-700/50'
                }`}
              >
                {plan.popular && (
<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <div className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium'>
                      Most Popular
                    </div>
                  </div>
                )}
<div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {plan.name}
                  </h3>
                  <div className='flex items-baseline justify-center space-x-1 mb-2'>
                    <span className='text-4xl font-bold text-white'>
                      {plan.price}
                    </span>
                    <span className='text-gray-400'>{plan.period}</span>
                  </div>
                  <p className='text-gray-300'>{plan.description}</p>
                </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center space-x-3'
                    >
                      <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
<<<<<<< HEAD
                      <span className='text-gray-300'>{feature}</span>                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Integrations Section */}
      <section className='py-20 bg-gray-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
                <div className="text-center mb-8">
"
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                  <div className="flex items-baseline justify-center space-x-1 mb-2">"
                    <span className="text-4xl font-bold text-white">{plan.price}</span>"
                    <span className="text-gray-400">{plan.period}</span>

                  </div>"
                  <p className="text-gray-300">{plan.description}</p>
                </div>

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => ("
                    <li key={featureIndex} className="flex items-center space-x-3">"
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />"
                      <span className="text-gray-300">{feature}</span>
                    </li>
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
                  ))}
                </ul>

`
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
                      <span className='text-gray-300'>{feature}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                    </li>
                  ))}
                </ul>

<button
                  className={`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  Get Started
=======
                  Get Started;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
                </button>
              </motion.div>

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            ))}

          </div>;
        </div>;
      </section>;


<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
      {/* Integrations Section */}
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
      <section className='py-20 bg-gray-900 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0 && 0.08),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div
<<<<<<< HEAD
=======

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
<<<<<<< HEAD
      <section className='py-20 bg-gray-900 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0 && 0.08),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<section className='py-20 bg-gray-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
      {/* Integrations Section */}'
      <section className='py-20 bg-gray-900 relative overflow-hidden'>;'
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0 && 0.08),transparent_50%)]'></div>;'
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD


<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD


=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              Seamless <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Integrations</span>
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing healthcare systems and workflows. Our platform integrates with all major EHR, PACS, and medical device platforms.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (


              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>;
                Integrations;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;

=======
                    </span>;
                    <span className='text - gray - 400'>{plan.period}</span>;
                  </div>;
                  <p className='text - gray - 300'>{plan.description}</p>;
                </div>;
                <ul className='space - y-4 mb - 8'>;
                  {plan.features.map ((feature, feature_index) => (
                    <li;
                      key={feature_index}
                      className='flex items - center space - x-3';
                    >;
                      <CheckCircle className='w - 5 h - 5 text - green - 400 flex - shrink - 0' />;
                      <span className='text - gray - 300'>{feature}</span>                    </li>))}
                </ul>;
                <button;
                  className={`w - full py - 3 px - 6 bg - gradient - to - r ${plan.color} text - white font - semibold rounded - xl hover:opacity - 90 transition - all duration - 300 transform hover:scale - 105`}
                >                  Get Started;
                </button>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className='py - 20 bg - gray - 900 relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_20%_80%, rgba (139, 92, 246, 0.08), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Seamless{' '}
              <span className='bg - gradient - to - r from - blue - 400 to - cyan - 400 bg - clip - text text - transparent'>;
                Integrations;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              Connect with your existing healthcare systems and workflows. Our;
              platform integrates with all major EHR, PACS, and medical device;
              platforms.;
            </p>;


<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
          </motion.div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {integrations.map((integration, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300'
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300"
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transform</span> Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare institutions worldwide who have already revolutionized patient care with AI-powered diagnostics.
            </p>

                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======



                <h3 className="text-xl font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

              >`
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>"
                  <integration.icon className="w-8 h-8 text-white" />
                </div>



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
            ))}

          </div>;
        </div>;
      </section>;
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-cyan-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transform</span> Healthcare?
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transform</span> Healthcare?

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {integration.name}
                </h3>
                <p className='text-gray-300 text-sm'>
                  {integration.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
<section className='py-20 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-cyan-900/20 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to{' '}
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                Transform
              </span>{' '}
              Healthcare?
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </h2>
=======
          >"
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">"
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transform</span> Healthcare?

            </h2>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join leading healthcare institutions worldwide who have already;
              revolutionized patient care with AI-powered diagnostics.
            </p>
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25'>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                Schedule Demo
              </button>
=======


                Schedule Demo;
              </button>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              <button className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'>
                Contact Sales;
              </button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

              Healthcare?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Join leading healthcare institutions worldwide who have already;
              revolutionized patient care with AI-powered diagnostics.;
            </p>;

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25'>;
                Schedule Demo;
              </button>;
              <button className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'>;
                Contact Sales;
              </button>;
            </div>;

            <div className='mt-8 text-sm text-gray-400'>;
              <p>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
                Questions? Call us at{' '}
                <a'
                  href='tel:+13024640950''
                  className='text-green-400 hover:text-green-300'>;
                  +1 302 464 0950;'
                </a>{' '}'
                or email{' '}
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
                <a
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
                Questions? Call us at{' '}
                <a
                  href='tel:+13024640950'
                  className='text-green-400 hover:text-green-300'>;
                  +1 302 464 0950;
                </a>{' '}
                or email{' '}
                <a
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  href='mailto: kleber@ziontechgroup.com'
                  className='text-green-400 hover:text-green-300'
                >
                  kleber@ziontechgroup.com
                </a>
<<<<<<< HEAD
              </p>            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</Link> or email <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</Link></p>
            </div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              </p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======
                <a;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </motion.div>
        </div>
      </section>
    </Layout>
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  ),
};

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  )
}
export default AIHealthcareDiagnosticsPro;

},
export default AIHealthcareDiagnosticsPro,
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
);
};

export default AIHealthcareDiagnosticsPro;
<<<<<<< HEAD
<<<<<<< HEAD:pages/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD

},
export default AIHealthcareDiagnosticsPro,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx


'
                  href='mailto: kleber@ziontechgroup && ziontechgroup.com''
                  className='text-green-400 hover:text-green-300'>;
                  kleber@ziontechgroup && ziontechgroup.com;
                </a>;
              </p>            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </Layout>;
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
  ),;
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx






export default AIHealthcareDiagnosticsPro;


<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======


export default AIHealthcareDiagnosticsPro;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </motion.div>;
=======

          </motion.div>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {integrations.map ((integration, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}'
                className='bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 border border - gray - 700 / 50 rounded - 2xl p - 6 backdrop - blur - sm text - center hover:border - green - 500 / 30 transition - all duration - 300';
              >;
                <div;`
                  className={`w - 16 h - 16 bg - gradient - to - r ${integration.color} rounded - 2xl flex items - center justify - center mx - auto mb - 4`}
                >;'
                  <integration.icon className='w - 8 h - 8 text - white' />;
                </div>;'
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  {integration.name}
                </h3>;'
                <p className='text - gray - 300 text - sm'>;
                  {integration.description}
                </p>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}'
      <section className='py - 20 bg - gradient - to - r from - green - 900 / 20 via - emerald - 900 / 20 to - cyan - 900 / 20 relative overflow - hidden'>;'
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (56, 189, 248, 0.1), transparent_50%)]'></div>;'
        <div className='relative z - 10 max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
=======
          >;"
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transform</span> Healthcare?;
            </h2>;"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join leading healthcare institutions worldwide who have already revolutionized patient care with AI-powered diagnostics.;
            </p>;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">;
                Schedule Demo;
              </button>;"
              <button className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300">;
                Contact Sales;
              </button>;
            </div>;"
            <div className="mt-8 text-sm text-gray-400">;"
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>;
  );
},;
export default AIHealthcareDiagnosticsPro;
<<<<<<< HEAD:pages_backup/ai-healthcare-diagnostics-pro.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/ai-healthcare-diagnostics-pro.tsx
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-healthcare-diagnostics-pro.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
