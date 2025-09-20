<<<<<<< HEAD
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>index | Zion Tech Group</title>,
        <meta name="description" content="index - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">index</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
=======
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';

const industries = [
  {
    title: 'Healthcare',
    description: 'AI-powered medical imaging, electronic health records, and telemedicine solutions',
    icon: Heart,
    features: ['Medical Imaging AI', 'EHR Systems', 'Telemedicine', 'Health Analytics'],
    href: '/industries/healthcare'
  },
  {
    title: 'Finance',
    description: 'Fraud detection, predictive analytics, and digital banking solutions',
    icon: DollarSign,
    features: ['Fraud Detection', 'Risk Analytics', 'Digital Banking', 'Compliance'],
    href: '/industries/finance'
  },
  {
    title: 'Education',
    description: 'Learning management systems, virtual classrooms, and student analytics',
    icon: BookOpen,
    features: ['LMS Platforms', 'Virtual Classrooms', 'Student Analytics', 'Content Management'],
    href: '/industries/education'
  },
  {
    title: 'Government',
    description: 'Digital government platforms, cybersecurity, and citizen services',
    icon: Building,
    features: ['Digital Platforms', 'Cybersecurity', 'Citizen Services', 'Data Analytics'],
    href: '/industries/government'
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing, quality control, and supply chain optimization',
    icon: Settings,
    features: ['Smart Manufacturing', 'Quality Control', 'Supply Chain', 'IoT Solutions'],
    href: '/industries/manufacturing'
  },
  {
    title: 'Retail',
    description: 'E-commerce platforms, inventory management, and customer analytics',
    icon: ShoppingCart,
    features: ['E-commerce', 'Inventory Management', 'Customer Analytics', 'Personalization'],
    href: '/industries/retail'
  }
];

const benefits = [
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of industry-specific challenges and requirements',
    icon: Brain
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored solutions designed for your specific industry needs',
    icon: Settings
  },
  {
    title: 'Compliance Ready',
    description: 'Solutions built with industry regulations and compliance in mind',
    icon: Shield
  },
  {
    title: 'Scalable Technology',
    description: 'Solutions that grow with your business and adapt to changing needs',
    icon: Cloud
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>index | Zion Tech Group</title>
        <meta name="description" content="index - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">index</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default index;