import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { BarChart3,Globe,RefreshCw,Shield,Target,Users,Zap,CheckCircle,ArrowRight } from 'lucide-react';

const transformationAreas = [
  {
    icon: RefreshCw,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and streamline business processes',
    benefits: ['Reduced manual work', 'Improved accuracy', 'Faster processing', 'Cost savings']
  },
  {
    icon: Zap,
    title: 'Cloud Migration',
    description: 'Move your infrastructure to the cloud for better scalability and efficiency',
    benefits: ['Scalable infrastructure', 'Reduced costs', 'Better security', 'Global accessibility']
  },
  {
    icon: Users,
    title: 'Digital Workplace',
    description: 'Modernize your workplace with digital tools and collaboration platforms',
    benefits: ['Remote work capabilities', 'Improved collaboration', 'Enhanced productivity', 'Better communication']
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights for better decision making',
    benefits: ['Real-time insights', 'Predictive analytics', 'Better forecasting', 'Data-driven decisions']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Implement comprehensive security measures for the digital age',
    benefits: ['Enhanced security', 'Compliance assurance', 'Risk mitigation', 'Data protection']
  },
  {
    icon: Globe,
    title: 'Customer Experience',
    description: 'Improve customer interactions through digital channels and platforms',
    benefits: ['Better customer service', 'Omnichannel experience', 'Personalization', 'Increased satisfaction']
  }
];

const industries = [
  {
    name: 'Manufacturing',
    description: 'Industry 4.0 and smart manufacturing solutions',
    icon: '🏭',
    challenges: ['Legacy systems', 'Supply chain optimization', 'Quality control', 'Predictive maintenance']
  },
  {
    name: 'Healthcare',
    description: 'Digital health and patient care transformation',
    icon: '🏥',
    challenges: ['Patient data management', 'Telemedicine', 'Interoperability', 'Regulatory compliance']
  },
  {
    name: 'Financial Services',
    description: 'Fintech and digital banking solutions',
    icon: '🏦',
    challenges: ['Digital payments', 'Regulatory compliance', 'Customer experience', 'Risk management']
  },
  {
    name: 'Retail',
    description: 'E-commerce and omnichannel retail transformation',
    icon: '🛒',
    challenges: ['Online presence', 'Inventory management', 'Customer analytics', 'Supply chain']
  },
  {
    name: 'Education',
    description: 'EdTech and digital learning platforms',
    icon: '🎓',
    challenges: ['Remote learning', 'Student engagement', 'Assessment tools', 'Learning analytics']
  },
  {
    name: 'Government',
    description: 'Digital government and citizen services',
    icon: '🏛️',
    challenges: ['Citizen services', 'Data security', 'Legacy modernization', 'Transparency']
  }
];

const methodology = [
  {
    phase: 'Assessment',
    description: 'Comprehensive analysis of current state and digital readiness',
    duration: '2-4 weeks',
    activities: ['Current state audit', 'Gap analysis', 'Technology assessment', 'Stakeholder interviews']
  },
  {
    phase: 'Strategy',
    description: 'Develop a comprehensive digital transformation roadmap',
    duration: '2-3 weeks',
    activities: ['Vision definition', 'Roadmap creation', 'Resource planning', 'Success metrics']
  },
  {
    phase: 'Implementation',
    description: 'Execute the transformation plan with agile methodology',
    duration: '3-12 months',
    activities: ['Pilot programs', 'System integration', 'Change management', 'Training programs']
  },
  {
    phase: 'Optimization',
    description: 'Continuous improvement and optimization of digital solutions',
    duration: 'Ongoing',
    activities: ['Performance monitoring', 'User feedback', 'Process refinement', 'Technology updates']
  }
];

const benefits = [
  {
    metric: '40%',
    description: 'Average cost reduction through process automation',
    icon: Target
  },
  {
    metric: '60%',
    description: 'Improvement in operational efficiency',
    icon: Zap
  },
  {
    metric: '85%',
    description: 'Increase in customer satisfaction scores',
    icon: Users
  },
  {
    metric: '50%',
    description: 'Faster time-to-market for new products',
    icon: Globe
  }
];

const caseStudies = [
  {
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Legacy systems and manual processes limiting growth',
    solution: 'Complete digital transformation with IoT and AI integration',
    result: '35% cost reduction, 50% faster production, 99% quality improvement'
  },
  {
    company: 'Regional Healthcare System',
    industry: 'Healthcare',
    challenge: 'Fragmented systems and poor patient data management',
    solution: 'Unified digital platform with telemedicine capabilities',
    result: '40% improved patient outcomes, 60% reduced wait times'
  }
];

export default function DigitalTransformationPage() {
=======

const digital-transformation: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>digital-transformation | Zion Tech Group</title>
        <meta name="description" content="digital-transformation - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">digital-transformation</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default digital-transformation;
