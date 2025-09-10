import React from 'react';
import Head from 'next/head';
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages/MicroSAAS.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import { 
  Video, 
  Palette, 
  QrCode, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const microSaasServices = [
  {
    title: 'Video Analytics Platform',
    description: 'AI-powered video analysis for business insights and security monitoring.',
    icon: Video,
    features: ['Real-time analysis', 'Object detection', 'Behavior tracking', 'Custom dashboards'],
    price: '$299/month',
    benefits: ['Enhanced security', 'Business insights', 'Automated monitoring', 'Cost savings']
  },
  {
    title: 'Design System Builder',
    description: 'Create and manage consistent design systems for your products.',
    icon: Palette,
    features: ['Component library', 'Style guide', 'Version control', 'Team collaboration'],
    price: '$199/month',
    benefits: ['Consistent design', 'Faster development', 'Team efficiency', 'Brand consistency']
  },
  {
    title: 'QR Code Generator Pro',
    description: 'Advanced QR code generation and analytics for marketing campaigns.',
    icon: QrCode,
    features: ['Custom designs', 'Analytics tracking', 'Bulk generation', 'API integration'],
    price: '$99/month',
    benefits: ['Marketing insights', 'Easy tracking', 'Professional appearance', 'Scalable solution']
  }
];

export default function MicroSAASPage() {
  return (
    <Layout
      title="Micro SAAS Services - Zion Tech Group"
      description="Innovative micro SAAS solutions designed to boost productivity and streamline business operations with AI-powered tools."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Innovative micro SAAS solutions for modern businesses
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}