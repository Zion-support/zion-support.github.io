import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Lock, 
  Monitor, 
  HardDrive, 
  Wifi, 
  Smartphone, 
  Laptop, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Zap,
  Settings,
  BarChart3,
  Headphones,
  Wrench,
  FileText,
  Cpu,
  Lock
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud strategy', 'Cost optimization', 'Security compliance', '24/7 monitoring'],
    price: '$2,500/month',
    benefits: ['Scalable infrastructure', 'Reduced operational costs', 'Enhanced security', 'Improved performance']
  },
  {
    title: 'Network Security Solutions',
    description: 'Advanced cybersecurity measures to protect your business from threats.',
    icon: Shield,
    features: ['Firewall management', 'Intrusion detection', 'Vulnerability assessments', 'Security audits'],
    price: '$1,800/month',
    benefits: ['Threat protection', 'Compliance assurance', 'Risk mitigation', 'Peace of mind']
  },
  {
    title: 'Database Administration',
    description: 'Expert database management and optimization services.',
    icon: Database,
    features: ['Performance tuning', 'Backup strategies', 'Data migration', 'Monitoring'],
    price: '$1,200/month',
    benefits: ['Optimized performance', 'Data protection', 'Reduced downtime', 'Expert support']
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 technical support for all your IT needs.',
    icon: Monitor,
    features: ['Remote assistance', 'Hardware support', 'Software installation', 'User training'],
    price: '$800/month',
    benefits: ['Quick response times', 'Expert technicians', 'Reduced downtime', 'User satisfaction']
  },
  {
    title: 'Network Design & Implementation',
    description: 'Custom network solutions tailored to your business requirements.',
    icon: Network,
    features: ['Network planning', 'Hardware selection', 'Installation', 'Testing'],
    price: '$3,000/project',
    benefits: ['Reliable connectivity', 'Scalable design', 'Future-proof architecture', 'Expert implementation']
  },
  {
    title: 'Server Management',
    description: 'Complete server administration and maintenance services.',
    icon: Server,
    features: ['Server setup', 'Performance monitoring', 'Updates & patches', 'Backup management'],
    price: '$1,500/month',
    benefits: ['Reliable servers', 'Optimal performance', 'Data protection', 'Minimal downtime']
  }
];

const stats = [
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" },
  { number: "500+", label: "Systems Managed" },
  { number: "15min", label: "Average Response Time" }
];

export default function ITServicesPage() {
  return (
    <MainLayout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud management, network security, database administration, and 24/7 support."
      keywords="IT services, cloud management, network security, database administration, IT support, infrastructure"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly. 
              From cloud management to cybersecurity, we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-blue-600 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Reliable IT Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your IT needs and get expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}