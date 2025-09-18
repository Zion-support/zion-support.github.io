import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Target,
  TrendingUp,
  Server,
  Database,
  Lock
} from 'lucide-react';

const CloudMigrationServices = (props: any) => {
  const features = [
    'Zero-downtime migration',
    'Data security & encryption',
    'Performance optimization',
    '24/7 monitoring & support',
    'Disaster recovery setup',
    'Cost optimization analysis',
    'Compliance & governance',
    'Training & documentation'
  ];

  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve scalability & flexibility',
    'Enhanced security & compliance',
    'Disaster recovery & backup',
    'Global accessibility',
    'Automatic updates & maintenance',
    'Better performance & reliability',
    'Future-proof technology stack'
  ];

  const migrationSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      duration: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Custom migration strategy tailored to your business needs and goals',
      duration: '1 week'
    },
    {
      step: '3',
      title: 'Pilot Migration',
      description: 'Small-scale migration to test and validate the process',
      duration: '2-3 weeks'
    },
    {
      step: '4',
      title: 'Full Migration',
      description: 'Complete migration with zero downtime and data integrity',
      duration: '2-4 weeks'
    },
    {
      step: '5',
      title: 'Optimization & Support',
      description: 'Performance tuning, monitoring setup, and ongoing support',
      duration: 'Ongoing'
    }
  ];

  const pricing = {
    small: {
      name: 'Small Business',
      price: '$2,999',
      description: 'Up to 10 servers, basic migration',
      features: ['Assessment & planning', 'Basic migration', '30 days support', 'Documentation'],
      marketPrice: '$5,000'
    },
    medium: {
      name: 'Medium Business',
      price: '$7,999',
      description: 'Up to 50 servers, advanced migration',
      features: ['Comprehensive assessment', 'Advanced migration', '90 days support', 'Training', 'Monitoring setup'],
      marketPrice: '$12,000',
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Unlimited servers, enterprise-grade migration',
      features: ['Full assessment', 'Enterprise migration', '1 year support', 'Dedicated team', 'Custom solutions', 'SLA guarantee'],
      marketPrice: '$25,000+'
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

=======

const cloud-migration-services: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>cloud-migration-services | Zion Tech Group</title>
        <meta name="description" content="cloud-migration-services - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">cloud-migration-services</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default cloud-migration-services;
