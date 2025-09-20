import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Clock,
  Award,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Building,
  Rocket,
  Lock,
  Activity,
  Stethoscope,
  FileText,
  Database,
  Video,
  DollarSign
} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    title: 'AI Medical Imaging Analysis',
    description: 'Advanced AI algorithms for radiology, pathology, and diagnostic imaging analysis.',
    icon: Brain,
    features: ['Radiology AI', 'Pathology Analysis', 'Diagnostic Accuracy', 'Real-time Processing'],
    benefits: ['60% faster diagnosis', '95% accuracy rate', 'Reduced human error', '24/7 availability']
  },
  {
    title: 'Patient Data Analytics',
    description: 'Comprehensive patient data analysis for personalized treatment and care optimization.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Risk Assessment', 'Treatment Optimization', 'Outcome Prediction'],
    benefits: ['30% better outcomes', 'Reduced readmissions', 'Cost savings', 'Improved care quality']
  },
  {
    title: 'Telemedicine Platform',
    description: 'Complete telemedicine solution for remote patient care and consultation.',
    icon: Video,
    features: ['Video Consultations', 'Remote Monitoring', 'Digital Prescriptions', 'Appointment Scheduling'],
    benefits: ['Increased accessibility', 'Reduced travel time', 'Lower costs', 'Better patient engagement']
  },
  {
    title: 'Clinical Decision Support',
    description: 'AI-powered clinical decision support system for healthcare professionals.',
    icon: Stethoscope,
    features: ['Evidence-based Recommendations', 'Drug Interaction Alerts', 'Treatment Guidelines', 'Risk Stratification'],
    benefits: ['Improved accuracy', 'Reduced errors', 'Better outcomes', 'Enhanced safety']
  }
];

const challenges = [
  {
    challenge: 'Data Security & Privacy',
    description: 'Protecting sensitive patient data while enabling data-driven insights.',
    solution: 'HIPAA-compliant encryption, secure cloud infrastructure, and advanced access controls.',
    icon: Shield
  },
  {
    challenge: 'Interoperability',
    description: 'Integrating disparate healthcare systems and data sources.',
    solution: 'Standardized APIs, FHIR compliance, and seamless data integration platforms.',
    icon: Database
  },
  {
    challenge: 'Regulatory Compliance',
    description: 'Meeting strict healthcare regulations and standards.',
    solution: 'Compliance automation, audit trails, and regulatory reporting tools.',
    icon: FileText
  },
  {
    challenge: 'Scalability',
    description: 'Supporting growing patient populations and increasing data volumes.',
    solution: 'Cloud-native architecture, auto-scaling, and performance optimization.',
    icon: TrendingUp
  }
];

const benefits = [
  {
    icon: Activity,
    title: 'Improved Patient Outcomes',
    description: 'AI-powered diagnostics and treatment recommendations lead to better patient care.',
    metric: '40%'
  },
  {
    icon: Clock,
    title: 'Faster Diagnosis',
    description: 'Reduce diagnostic time with automated analysis and AI assistance.',
    metric: '60%'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Optimize operations and reduce unnecessary procedures through data insights.',
    metric: '25%'
  },
  {
    icon: Users,
    title: 'Enhanced Care',
    description: 'Personalized treatment plans based on comprehensive patient data analysis.',
    metric: '95%'
  }
];

const caseStudies = [
  {
    title: 'Major Hospital Network',
    description: 'Implemented AI-powered radiology analysis across 15 hospitals.',
    results: ['60% faster diagnosis', '95% accuracy rate', '$2M annual savings'],
    icon: Building
  },
  {
    title: 'Regional Health System',
    description: 'Deployed telemedicine platform for rural patient care.',
    results: ['40% increase in patient access', '30% reduction in readmissions', '50% cost savings'],
    icon: Globe
  },
  {
    title: 'Specialty Clinic',
    description: 'AI-driven treatment optimization for chronic disease management.',
    results: ['35% better outcomes', '20% fewer complications', '45% patient satisfaction'],
    icon: Heart
  }
];

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>healthcare | Zion Tech Group</title>
        <meta name="description" content="healthcare - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">healthcare</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default healthcare;