<<<<<<< HEAD
<<<<<<< HEAD

=======
import React from 'react
import Link from next/link'
import { motion } from 'framer-motion
  Building,
import React from react';
import Link from 'next/link;
import { motion } from framer-motion';
import { 
=======
=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}


<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
  Heart,
  DollarSign,
  Settings,
  ShoppingCart,
  ArrowRight,
  Building,
  Users,
  CheckCircle,
  Globe,
  Database,
  Shield,

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { ;
  Heart, ;
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Heart, ;
  DollarSign, ;
  Settings, ;
  ShoppingCart, ;
  BookOpen, ;

<<<<<<< HEAD
import { 
  Heart, 
  Heart, ;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Heart, 
  DollarSign, 
  Settings, 
  ShoppingCart, 
  BookOpen, 
  Building,
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Building,;
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import { 
  Heart,
  DollarSign,
  Settings,
  ShoppingCart,
  ArrowRight,
  Building,
  Users,
  CheckCircle,
  Globe,
  Database,
  Shield,
  Cloud,
  Brain;
} from 'lucide-react';
ursor/fix-syntax-push-and-merge-to-main-40de
  Brain
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from 'lucide-react';


origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import SimpleLayout from '../../components/SimpleLayout';
  Brain;
<<<<<<< HEAD
} from 'lucide-react;
  Brain;
} from lucide-react';
    href: '/industries/healthcare,,
    features: [AI Diagnostics, 'Telemedicine', Patient Management, 'HIPAA Compliance'],,
=======
} from 'lucide-react';
import Layout from '../../components/Layout';';
<<<<<<< HEAD
const industries = [
  {
    name: 'Healthcare',
    description: 'Transform healthcare delivery with AI-powered diagnostics, telemedicine platforms, and patient management systems.',
    icon: Heart,
    href: '/industries/healthcare',
    features: ['AI Diagnostics', 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],
    color: 'from-red-500 to-pink-500'
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    href: '/industries/healthcare,',
    features: ['AI Diagnostics, 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],',
>>>>>>> origin/chore/fix-lint-and-merge

    color: from-red-500 to-pink-500'';
  },
<<<<<<< HEAD
  {
    name: Finance','
    description: Secure financial services with blockchain technology, fraud detection, and automated trading systems.,
    icon: DollarSign,
=======
<<<<<<< HEAD
  {'
    name: 'Finance','
    description: 'Secure financial services with blockchain technology, fraud detection, and automated trading systems.',
>>>>>>> origin/chore/fix-lint-and-merge

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const industries = [;
  {;
    name: 'Healthcare',;
    description: 'Transform healthcare delivery with AI-powered diagnostics, telemedicine platforms, and patient management systems.',;
    icon: Heart,;
    href: '/industries/healthcare',;
    features: ['AI Diagnostics', 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],;
    color: 'from-red-500 to-pink-500';

<<<<<<< HEAD
const industries = [
  {
    name: 'Healthcare',
    description: 'Transform healthcare delivery with AI-powered diagnostics, telemedicine platforms, and patient management systems.',
    icon: Heart,
    href: '/industries/healthcare',
    features: ['AI Diagnostics', 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],
    color: 'from-red-500 to-pink-500'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Brain;
} from 'lucide-react';
  Brain;
} from 'lucide-react';
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    href: '/industries/healthcare,',
    features: ['AI Diagnostics, 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],',
    color: 'from-red-500 to-pink-500'';
  },
  {
    name: 'Finance',
    description: 'Secure financial services with blockchain technology, fraud detection, and automated trading systems.',
    icon: DollarSign,
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    href: '/industries/finance',
    features: ['Blockchain Solutions', 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],
    color: 'from-green-500 to-emerald-500'
    href: '/industries/finance',
    features: ['Blockchain Solutions', 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],
    color: 'from-green-500 to-emerald-500'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    href: '/industries/finance',
    features: ['Blockchain Solutions', 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],
    color: 'from-green-500 to-emerald-500'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    href: '/industries/finance,',

import SimpleLayout from ../../components/SimpleLayout;
  Brain;
} from 'lucide-react';
import Layout from ../../components/Layout;';
  Brain;
} from 'lucide-react;
  Brain;
} from lucide-react';    href: '/industries/finance,,

    features: [Blockchain Solutions, 'Fraud Detection', Trading Systems, 'Regulatory Compliance'],,

    color: from-green-500 to-emerald-500'';
  },
<<<<<<< HEAD
  {
    name: Manufacturing','
    description: Optimize production with IoT sensors, predictive maintenance, and smart factory solutions.,
    icon: Settings,
<<<<<<< HEAD
=======
  {'
    name: 'Manufacturing','
    description: 'Optimize production with IoT sensors, predictive maintenance, and smart factory solutions.',
>>>>>>> origin/chore/fix-lint-and-merge

=======
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],
    color: 'from-blue-500 to-cyan-500'
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],
    color: 'from-blue-500 to-cyan-500'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],
    color: 'from-blue-500 to-cyan-500'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    href: '/industries/manufacturing,',
    features: [IoT Integration, Predictive Maintenance', 'Smart Factories, Quality Control'],',

    color: from-blue-500 to-cyan-500';
  },
  {'
<<<<<<< HEAD
    name: Retail,'
    description: 'Enhance customer experience with personalized recommendations, inventory management, and omnichannel solutions.,
    icon: ShoppingCart,
<<<<<<< HEAD

=======
    href: /industries/retail,',
    features: ['Personalization, Inventory Management, 'Omnichannel', Customer Analytics],',
=======
    name: 'Retail','
    description: 'Enhance customer experience with personalized recommendations, inventory management, and omnichannel solutions.',

=======
    href: '/industries/retail',
    features: ['Personalization', 'Inventory Management', 'Omnichannel', 'Customer Analytics'],
    color: 'from-purple-500 to-violet-500'
    href: '/industries/retail',
    features: ['Personalization', 'Inventory Management', 'Omnichannel', 'Customer Analytics'],
    color: 'from-purple-500 to-violet-500'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    href: '/industries/retail',
    features: ['Personalization', 'Inventory Management', 'Omnichannel', 'Customer Analytics'],
    color: 'from-purple-500 to-violet-500'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    href: '/industries/retail,',
    features: ['Personalization, 'Inventory Management', 'Omnichannel', 'Customer Analytics'],',
>>>>>>> origin/chore/fix-lint-and-merge

    color: 'from-purple-500 to-violet-500;
  },
  {'
    name: 'Education,
    description: 'Revolutionize learning with AI tutoring, virtual classrooms, and personalized education platforms.',
<<<<<<< HEAD

<<<<<<< HEAD
=======
    href: /industries/education,,
    features: ['AI Tutoring, 'Virtual Classrooms, Personalized Learning', 'Assessment Tools],,
=======
=======
    icon: BookOpen,
    href: '/industries/education',
    features: ['AI Tutoring', 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],
    color: 'from-orange-500 to-yellow-500'
    href: '/industries/education',
    features: ['AI Tutoring', 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],
    color: 'from-orange-500 to-yellow-500'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    href: '/industries/education',
    features: ['AI Tutoring', 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],
    color: 'from-orange-500 to-yellow-500'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    href: '/industries/education,',
    features: ['AI Tutoring, 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],',
>>>>>>> origin/chore/fix-lint-and-merge

    color: 'from-orange-500 to-yellow-500';
  },
<<<<<<< HEAD
  {
    name: 'Government',
    description: Modernize public services with secure citizen portals, data analytics, and digital transformation.',
    icon: Building,
<<<<<<< HEAD

=======
    href: '/industries/government,,
    features: [Citizen Portals, 'Data Analytics', Digital Services, 'Security Compliance'],,
=======
  {'
    name: 'Government','
    description: 'Modernize public services with secure citizen portals, data analytics, and digital transformation.',

=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    href: '/industries/government',
    features: ['Citizen Portals', 'Data Analytics', 'Digital Services', 'Security Compliance'],
    color: 'from-gray-500 to-slate-500'
  }
];
const stats = [
  { number: '500+', label: 'Industry Projects' },
  { number: '50+', label: 'Fortune 500 Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
<<<<<<< HEAD
  { number: '24/7', label: 'Industry Support' }
];

    href: '/industries/government,',
    features: ['Citizen Portals, 'Data Analytics', 'Digital Services', 'Security Compliance'],',
>>>>>>> origin/chore/fix-lint-and-merge

    color: from-gray-500 to-slate-500'';

    href: /industries/government,
    features: ['Citizen Portals', Data Analytics, 'Digital Services', Security Compliance],
    color: 'from-gray-500 to-slate-500'
  Brain;
} from lucide-react;
import SimpleLayout from '../../components/SimpleLayout';
  Brain;
} from lucide-react;
import Layout from '../../components/Layout';;
const industries = [;
  {
    name: Healthcare',,
  description: 'Transform healthcare delivery with AI-powered diagnostics, telemedicine platforms, and patient management systems.,
    icon: Heart,
    href: /industries/healthcare',
    features: ['AI Diagnostics, Telemedicine', 'Patient Management, HIPAA Compliance'],
    color: 'from-red-500 to-pink-500;
    href: /industries/healthcare,',
    features: ['AI Diagnostics, Telemedicine, 'Patient Management', HIPAA Compliance],',
    color: 'from-red-500 to-pink-500},
  {
    name: 'Finance',,
  description: Secure financial services with blockchain technology, fraud detection, and automated trading systems.,
    icon: DollarSign,
    href: '/industries/finance',
    features: [Blockchain Solutions, 'Fraud Detection', Trading Systems, 'Regulatory Compliance'],
    color: from-green-500 to-emerald-500;
    href: '/industries/finance',
    features: [Blockchain Solutions, 'Fraud Detection', Trading Systems, 'Regulatory Compliance'],
    color: from-green-500 to-emerald-500;
    href: '/industries/finance',
    features: [Blockchain Solutions, 'Fraud Detection', Trading Systems, 'Regulatory Compliance'],
    color: from-green-500 to-emerald-500;
    href: '/industries/finance,',
    features: [Blockchain Solutions, Fraud Detection', 'Trading Systems, Regulatory Compliance'],',
    color: from-green-500 to-emerald-500'},
  {
    name: 'Manufacturing,,
  description: Optimize production with IoT sensors, predictive maintenance, and smart factory solutions.',
    icon: Settings,
    href: '/industries/manufacturing,
    features: [IoT Integration', 'Predictive Maintenance, Smart Factories', 'Quality Control],
    color: from-blue-500 to-cyan-500';
    href: '/industries/manufacturing,
    features: [IoT Integration', 'Predictive Maintenance, Smart Factories', 'Quality Control],
    color: from-blue-500 to-cyan-500';
    href: '/industries/manufacturing,
    features: [IoT Integration', 'Predictive Maintenance, Smart Factories', 'Quality Control],
    color: from-blue-500 to-cyan-500';
    href: '/industries/manufacturing,,
    features: [IoT Integration, 'Predictive Maintenance', Smart Factories, 'Quality Control'],,
    color: from-blue-500 to-cyan-500''},
  {
    name: Retail,,
  description: 'Enhance customer experience with personalized recommendations, inventory management, and omnichannel solutions.',
    icon: ShoppingCart,
    href: /industries/retail,
    features: ['Personalization', Inventory Management, 'Omnichannel', Customer Analytics],
    color: 'from-purple-500 to-violet-500';
    href: /industries/retail,
    features: ['Personalization', Inventory Management, 'Omnichannel', Customer Analytics],
    color: 'from-purple-500 to-violet-500';
    href: /industries/retail,
    features: ['Personalization', Inventory Management, 'Omnichannel', Customer Analytics],
    color: 'from-purple-500 to-violet-500';
    href: /industries/retail,,
    features: ['Personalization, 'Inventory Management, Omnichannel', 'Customer Analytics],,
    color: 'from-purple-500 to-violet-500'},
  {
    name: Education',,
  description: 'Revolutionize learning with AI tutoring, virtual classrooms, and personalized education platforms.,
    icon: BookOpen,
    href: /industries/education',
    features: ['AI Tutoring, Virtual Classrooms', 'Personalized Learning, Assessment Tools'],
    color: 'from-orange-500 to-yellow-500;
    href: /industries/education',
    features: ['AI Tutoring, Virtual Classrooms', 'Personalized Learning, Assessment Tools'],
    color: 'from-orange-500 to-yellow-500;
    href: /industries/education',
    features: ['AI Tutoring, Virtual Classrooms', 'Personalized Learning, Assessment Tools'],
    color: 'from-orange-500 to-yellow-500;
    href: /industries/education,',
    features: ['AI Tutoring, Virtual Classrooms, 'Personalized Learning', Assessment Tools],',
    color: 'from-orange-500 to-yellow-500},
  {
    name: 'Government',,
  description: Modernize public services with secure citizen portals, data analytics, and digital transformation.,
    icon: Building,
    href: '/industries/government',
    features: [Citizen Portals, 'Data Analytics', Digital Services, 'Security Compliance'],
    color: from-gray-500 to-slate-500;

<<<<<<< HEAD
  }];

const stats = [;
  { number: '500+, label: 'Industry Projects },,
  { number: '50+, label: 'Fortune 500 Clients },,
  { number: '99.9%, label: 'Uptime Guarantee },,
  { number: '24/7, label: 'Industry Support }];


=======
  }
>>>>>>> origin/chore/fix-lint-and-merge

export default function IndustriesPage() {
  return (;
    <Layout);
<<<<<<< HEAD
      title="Industry Solutions - Zion Tech Group;
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors."
      keywords=industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services""
    >;
      <div className=min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900>";
import Layout from '../../components/Layout';

const industries = [
  {
    title: Healthcare,
=======
      title="Industry Solutions - Zion Tech Group"";
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors.""

  { number: '500+', label: 'Industry Projects' },;
  { number: '50+', label: 'Fortune 500 Clients' },;
  { number: '99 && 99.9%', label: 'Uptime Guarantee' },;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  { number: '24/7', label: 'Industry Support' }
];      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors.""

<<<<<<< HEAD
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services""
    >;"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";'
import Layout from '../../components/Layout';

const industries = []
  {'
    title: 'Healthcare','
>>>>>>> origin/chore/fix-lint-and-merge
    description: 'Transform healthcare delivery with innovative technology solutions',
    icon: Heart,
    href: /industries/healthcare','
    features: [Electronic Health Records, 'Telemedicine Platforms', AI Diagnostics]
  },
  {'
    title: 'Finance,
    description: 'Secure and scalable financial technology solutions',
    icon: DollarSign,
    href: /industries/finance','
    features: [Digital Banking, 'Payment Processing', Risk Management]
  },
  {'
    title: 'Manufacturing,
    description: 'Smart manufacturing solutions for Industry 4.0',
    icon: Settings,
    href: /industries/manufacturing','
    features: [IoT Integration, 'Predictive Maintenance', Quality Control]
  },
  {'
    title: 'Retail,
    description: 'Enhance customer experience with retail technology',
    icon: ShoppingCart,
    href: /industries/retail','
    features: [E-commerce Platforms, 'Inventory Management', Customer Analytics]
  },
  {'
    title: 'Education,
    description: 'Modernize education with technology solutions',
    icon: Users,
    href: /industries/education','
    features: [Learning Management Systems, 'Virtual Classrooms', Student Analytics]
  },
  {'
    title: 'Government,
    description: 'Secure government technology solutions',
    icon: Globe,
    href: /industries/government','
    features: [Citizen Services, 'Data Security', Digital Transformation]
=======

<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    href: '/industries/government,',
    features: ['Citizen Portals, 'Data Analytics', 'Digital Services', 'Security Compliance'],',
    color: 'from-gray-500 to-slate-500'';
  }
;];
const stats = [;
  { number: '500+, label: 'Industry Projects' },',
  { number: '50+, label: 'Fortune 500 Clients' },',
  { number: '99.9%, label: 'Uptime Guarantee' },',
  { number: '24/7, label: 'Industry Support' }',
;];



<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

origin/cursor/integrate-build-improve-and-re-verify-c7b5
export default function IndustriesPage() {
  return (;
    <Layout);
      title="Industry Solutions - Zion Tech Group"";
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors.""
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
import Layout from '../../components/Layout';
const industries = [
  {
    title: 'Healthcare',
    description: 'Transform healthcare delivery with innovative technology solutions',
    icon: Heart,
    href: '/industries/healthcare',
    features: ['Electronic Health Records', 'Telemedicine Platforms', 'AI Diagnostics']
  },
  {
    title: 'Finance',
    description: 'Secure and scalable financial technology solutions',
    icon: DollarSign,
    href: '/industries/finance',
    features: ['Digital Banking', 'Payment Processing', 'Risk Management']
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing solutions for Industry 4.0',
    icon: Settings,
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Quality Control']
  },
  {
    title: 'Retail',
    description: 'Enhance customer experience with retail technology',
    icon: ShoppingCart,
    href: '/industries/retail',
    features: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics']
  },
  {
    title: 'Education',
    description: 'Modernize education with technology solutions',
    icon: Users,
    href: '/industries/education',
    features: ['Learning Management Systems', 'Virtual Classrooms', 'Student Analytics']
  },
  {
    title: 'Government',
    description: 'Secure government technology solutions',
    icon: Globe,
    href: '/industries/government',
    features: ['Citizen Services', 'Data Security', 'Digital Transformation']
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
<<<<<<< HEAD
=======

<<<<<<< HEAD
export default function Industries() {
  
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900>
=======
<<<<<<< HEAD
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

  return (
    <Layout"
      title="Industry Solutions - Zion Tech Group""
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors.""
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services"
    >"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
>>>>>>> origin/chore/fix-lint-and-merge

        {/* Hero Section */}
<<<<<<< HEAD
        <section className=relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
          <div className=absolute inset-0>";
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
            <div className=absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;



          <div className=container mx-auto px-4 relative z-10>
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
];
export default function Industries() {;
  return (
    <Layout
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors."
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;


<<<<<<< HEAD
]
export default function Industries() {
  
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
ursor/fix-syntax-push-and-merge-to-main-40de
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Hero Section */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
<<<<<<< HEAD

          </div>          <div className="absolute inset-0">";
=======
          </div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;

<<<<<<< HEAD
=======


<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className="container mx-auto px-4 relative z-10">
>>>>>>> origin/chore/fix-lint-and-merge
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

=======
              transition={{ duration: 0.8 }}
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className="text-center"
<<<<<<< HEAD
            >
<<<<<<< HEAD
              <h1 className=text-4xl md:text-6xl font-bold mb-6>
                Industry Solutions
              </h1>
=======
            >"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">

>>>>>>> origin/chore/fix-lint-and-merge
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">

              </p>
            </motion.div>
          </div>
        </section>

          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Industry-Specific{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We understand the unique challenges and requirements of different industries. Our specialized solutions 
                are designed to address sector-specific needs while ensuring compliance, security, and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Industry Consultation
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
<<<<<<< HEAD
                Industry-Specific{' '}',;

=======
                Industry-Specific{' '}',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
                  Technology Solutions;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                We understand the unique challenges and requirements of different industries. Our specialized solutions;
<<<<<<< HEAD

=======
                are designed to address sector-specific needs while ensuring compliance, security, and scalability.,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">";
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">";
                  View All Solutions;
                </Link>;
              </div>;
<<<<<<< HEAD

=======
            </motion.div>;
          </div>;
        </section>;
        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
<<<<<<< HEAD
            <motion.div;
              className="text-center mb-16"";
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
=======

            <motion&& motion.div
              className="text-center mb-16""
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Industry-Specific{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
                  Technology Solutions;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                We understand the unique challenges and requirements of different industries. Our specialized solutions ;
                are designed to address sector-specific needs while ensuring compliance, security, and scalability.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">;
                  View All Solutions;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              className="text-center"">;

                Industry-Specific{' '}',;
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
                  Technology Solutions;
                </span>;
              </h1>;

                are designed to address sector-specific needs while ensuring compliance, security, and scalability.,;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">",;
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-gray-900 transition-all duration-300 font-semibold">", View All Solutions,;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              className="text-center mb-16""
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Industry Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Specialized technology solutions tailored to meet the unique challenges and opportunities across different industries.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;

        {/* Industries Grid */}
        <section className=py-20>

          <div className="container mx-auto px-4">
            <motion.div
              className=text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

<<<<<<< HEAD
=======

<<<<<<< HEAD
            <motion.div;
              className="text-center mb-16"";
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Specialized technology solutions tailored to meet the unique challenges and opportunities across different industries.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
ursor/fix-syntax-push-and-merge-to-main-40de
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our deep industry expertise allows us to deliver tailored solutions that address specific sector challenges 
                and drive measurable business outcomes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                return (
                  <motion.div
                    key={index}
<<<<<<< HEAD
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">,;

=======
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                Industries We Serve;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                Our deep industry expertise allows us to deliver tailored solutions that address specific sector challenges;
                and drive measurable business outcomes.;
              </p>;
<<<<<<< HEAD
            </motion.div>;


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4>
                Industries We Serve
              </h2>
              <p className=text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our deep industry expertise allows us to deliver tailored solutions that address specific sector challenges 
                and drive measurable business outcomes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                
            >,
              <h2 className=text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                Industries We Serve;
              </h2>;
              <p className=text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed>";
                Our deep industry expertise allows us to deliver tailored solutions that address specific sector challenges;
                and drive measurable business outcomes.;
              </p>;
            </motion.div>;            >

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>
                Industries We Serve;
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We provide specialized technology solutions across various industries, helping organizations leverage technology to achieve their goals.
              </p>
            </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD


            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>";
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
>>>>>>> origin/chore/fix-lint-and-merge
              {industries.map((industry, index) => {}
                return (;
                  <motion.div);

<<<<<<< HEAD
=======
                    className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group
=======
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
<<<<<<< HEAD
              {industries.map((industry, index) => {}
                const IconComponent = industry.icon;
                return (;
                  <motion.div);
=======


            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",;
              {industries && industries.map((industry, index) => {}
                const IconComponent = industry && industry.icon;
                return (
                  <motion&& motion.div)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
>>>>>>> origin/chore/fix-lint-and-merge
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
                    whileHover={{ y: -5 }}
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  >,
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>,
                      <IconComponent className="w-8 h-8 text-white" />";
                    </div>;
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
                    <p className=text-gray-600 mb-6 leading-relaxed">";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <p className="text-gray-600 mb-6 leading-relaxed">";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  >
                    <div className=text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">"
                      <IconComponent className=w-12 h-12 />
=======
                    <p className="text-gray-600 mb-6 leading-relaxed">";
                  >"
                    <div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">"
                      <IconComponent className="w-12 h-12" />
>>>>>>> origin/chore/fix-lint-and-merge
                    </div>
                    "
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {industry.title}
                    </h3>
<<<<<<< HEAD
                    
                    <p className=text-gray-300 mb-6 leading-relaxed>
=======
                    "
                    <p className="text-gray-300 mb-6 leading-relaxed">
>>>>>>> origin/chore/fix-lint-and-merge
                      {industry.description}
                    </p>
<<<<<<< HEAD
=======

                      </div>,
                    </div>;

<<<<<<< HEAD
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"
                    >;
                      <span>Learn More</span>;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />;
                    </Link>;

        {/* Why Choose Us Section */}
        <section className=py-20 bg-white">
          <div className="container mx-auto px-4>
            <motion.div

        {/* Why Choose Us Section */}
        <section className=py-20 bg-white">
          <div className="container mx-auto px-4>
            <motion.div
              className=text-center mb-16"

                    <div className="space-y-2 mb-6>
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className=w-4 h-4 text-green-400 mr-2 flex-shrink-0" />"
                          <span className=text-sm>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={industry.href}>"
                      <a className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                        Learn More
                        <ArrowRight className=w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Solutions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                    <div className="mb-6">";
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Solutions:</h4>";
                      <div className="flex flex-wrap gap-2">";
                        {industry.features.map((feature, idx) => (,
                          <span}),
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full""
                          >;
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                      </div>,
                    </div>;
                    <Link
                      href={industry.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </Link>
                  </motion.div>
                );
              })}
<<<<<<< HEAD
            </div>,
          </div>;
        </section>;

<<<<<<< HEAD


        <section className="py-20 bg-white>
          <div className="container mx-auto px-4">;
            <motion.div;
              className=text-center mb-16"";
=======
          <div className="container mx-auto px-4">";
            <motion.div;"
              className="text-center mb-16"";
>>>>>>> origin/chore/fix-lint-and-merge
              initial={{ opacity: 0, y: 30 }}
=======
<<<<<<< HEAD
            </div>
          </div>
        </section>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
                    
                      </div>,
                    </div>;
                    
                    <Link
                      href={industry.href}
ursor/fix-syntax-push-and-merge-to-main-40de
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Solutions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                    <div className="mb-6">";
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Solutions:</h4>";
                      <div className="flex flex-wrap gap-2">";
                        {industry.features.map((feature, idx) => (,
                          <span}),
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full""
                          >;
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                      </div>,
                    </div>;
                    <Link
                      href={industry.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors""
                    >;
                      <span>Learn More</span>;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />";
                    </Link>;
                  </motion.div>;
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={industry.href}>
                      <a className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </motion.div>
                );
=======

            </div>;
          </div>;
        </section>;
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"";
                    >;
                      <span>Learn More</span>,;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover: translate-x-1 transition-transform" />", </Link>,;
                  </motion && motion.div>;
                    <div className="space-y-2 mb-6">;
                      {industry && industry.features.map((feature, idx) => (;
                        <div key={idx} className="flex items-center text-gray-300">;
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
                          <span className="text-sm">{feature}</span>;
                        </div>;
                      ))}
                    </div>;
                    <Link href={industry && industry.href}>;
                      <a className="inline-flex items-center text-blue-400 hover: text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">;
                        Learn More;
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
                      </a>;
                    </Link>;
                  </motion && motion.div>;
                ),;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              })}
            </div>,
          </div>;
        </section>;
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"

<<<<<<< HEAD

origin/cursor/integrate-build-improve-and-re-verify-c7b5

ursor/fix-syntax-push-and-merge-to-main-40de
=======


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages_backup/industries/index.tsx
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"

<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Our Industry Solutions?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We combine deep industry knowledge with cutting-edge technology to deliver solutions that truly understand your business.
              </p>
            </motion.div>
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >,

              <h2 className=text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4>";
                Why Choose Our Industry Solutions?;
              </h2>;"
              <p className=text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed>";
                We combine deep industry knowledge with cutting-edge technology to deliver solutions that truly understand your business.;
              </p>;
            </motion.div>;

<<<<<<< HEAD
<<<<<<< HEAD


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <motion.div
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div"
>>>>>>> origin/chore/fix-lint-and-merge
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD

=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
                <p className="text-gray-600">
<<<<<<< HEAD

              >,
                <div className=w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6>";

                  <Users className="w-8 h-8 text-blue-600 />;
                </div>;"
                <h3 className="text-xl font-bold text-gray-900 mb-4>Industry Expertise</h3>;"
                <p className="text-gray-600>;
                  Our team includes specialists with deep experience in each industry we serve,
                  ensuring solutions that address real-world challenges.
                </p>
              </motion.div>

              <motion.div"
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}

              >,
                <div className=w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6>";

                  <Shield className="w-8 h-8 text-green-600 />;
                </div>;"
                <h3 className="text-xl font-bold text-gray-900 mb-4>Compliance & Security</h3>;"
                <p className="text-gray-600>;
                  We ensure all solutions meet industry-specific regulatory requirements and;
                  maintain the highest security standards.;
                </p>;
              </motion.div>;
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
              >,
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Users className="w-8 h-8 text-blue-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>";
                <p className="text-gray-600">";
                  Our team includes specialists with deep experience in each industry we serve, 
                  ensuring solutions that address real-world challenges.
                </p>
              </motion.div>
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>
                <p className="text-gray-600">
                  We ensure all solutions meet industry-specific regulatory requirements and 
                  maintain the highest security standards.
                </p>
              </motion.div>
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >,
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Shield className="w-8 h-8 text-green-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>";
                <p className="text-gray-600">";
                  We ensure all solutions meet industry-specific regulatory requirements and;
                  maintain the highest security standards.;
                </p>;
<<<<<<< HEAD
              </motion.div>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

origin/cursor/integrate-build-improve-and-re-verify-c7b5
              <motion.div

                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
<<<<<<< HEAD

=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
                <p className="text-gray-600">
<<<<<<< HEAD

              >,
              </motion && motion.div>;

              <motion&& motion.div
                className=text-center p-8
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}
                viewport={{ once: true }}>;
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">;
                  <Cloud className=w-8 h-8 text-purple-600 />;
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>;
                <p className=text-gray-600>;
              >,                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">;

                  <Cloud className=w-8 h-8 text-purple-600" />";
                </div>;
                <h3 className=text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>";
                <p className=text-gray-600">";
                  Our solutions are designed to grow with your business, from startup to enterprise scale,
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
              >,
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Cloud className="w-8 h-8 text-purple-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>";
                <p className="text-gray-600">";
                  Our solutions are designed to grow with your business, from startup to enterprise scale, 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  with flexible deployment options.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

=======
        {/* Stats Section */}


<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
<<<<<<< HEAD

<<<<<<< HEAD
=======
        <section className=py-20 bg-gray-50>"
          <div className="container mx-auto px-4>;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
=======
=======
                  key={index}
                  className="text-center"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";
>>>>>>> origin/chore/fix-lint-and-merge
              {stats.map((stat, index) => (,
                <motion.div}),
<<<<<<< HEAD
=======
                  key={index}
                  className="text-center""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  key={index}
                  className=text-center"                  key={index}

                  className="text-center
                  initial={{ opacity: 0, y: 30 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                >,

                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">;
                    {stat.number}
                  </div>,
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>;
              ))}
            </div>,
<<<<<<< HEAD

<<<<<<< HEAD
        {/* CTA Section */}
        <section className=py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className=container mx-auto px-4 text-center>";
            <motion.div;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600>
          <div className=container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6>

=======
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
ursor/fix-syntax-push-and-merge-to-main-40de
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our industry experts help you leverage technology to solve your sector-specific challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Industry Consultation
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Explore Solutions
                </Link>
              </div>
            >,
              <h2 className="text-3xl md:text-4xl font-bold mb-6">";
                Ready to Transform Your Industry?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">";
                Let our industry experts help you leverage technology to solve your sector-specific challenges.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">";
                  Explore Solutions;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our industry experts help you leverage technology to solve your sector-specific challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Industry Consultation
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Explore Solutions
                </Link>
              </div>
            >,
=======

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">;
                Ready to Transform Your Industry?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">;
                Let our industry experts help you leverage technology to solve your sector-specific challenges.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  Explore Solutions;
                </Link>;
              </div>;
            >,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <h2 className="text-3xl md:text-4xl font-bold mb-6">";
                Ready to Transform Your Industry?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">";
                Let our industry experts help you leverage technology to solve your sector-specific challenges.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">";
                  Explore Solutions;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
<<<<<<< HEAD
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We work with organizations across all sectors. Contact us to discuss your specific industry needs.
              </p>
<<<<<<< HEAD
              <Link href=/contact">"
                <a className=inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold>
                  Contact Us"
=======
              <Link href="/contact">
                <a className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD

    </Layout>
  );
}

                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">;
                    {stat && stat.number}
                  </div>;
                  <div className="text-gray-600 font-medium">{stat && stat.label}</div>;
                </motion && motion.div>;
              ))}
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </SimpleLayout>
    </SimpleLayout>
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    </SimpleLayout>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    </Layout>
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
