import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Cpu, 
  Database, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  Zap,
  Globe,
  Lock
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const features = [
  {
    icon: Wifi,
    title: 'Device Management',
    description: 'Comprehensive IoT device management with real-time monitoring and control capabilities.'
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Process data at the edge for faster response times and reduced latency.'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Advanced analytics and insights from your IoT data streams.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security for all connected devices and data transmission.'
  }
];

const services = [
  {
    title: 'IoT Platform Development',
    description: 'Custom IoT platforms with device connectivity, data processing, and analytics.',
    features: ['Device Connectivity', 'Real-time Monitoring', 'Data Processing', 'Analytics Dashboard'],
    pricing: 'Starting at $8,000'
  },
  {
    title: 'Smart City Solutions',
    description: 'Comprehensive smart city infrastructure with sensors, monitoring, and automation.',
    features: ['Traffic Management', 'Environmental Monitoring', 'Energy Management', 'Public Safety'],
    pricing: 'Starting at $25,000'
  },
  {
    title: 'Industrial IoT',
    description: 'Manufacturing and industrial IoT solutions for process optimization and monitoring.',
    features: ['Predictive Maintenance', 'Quality Control', 'Asset Tracking', 'Process Optimization'],
    pricing: 'Starting at $15,000'
  },
  {
    title: 'IoT Integration',
    description: 'Integrate existing systems with IoT capabilities and data connectivity.',
    features: ['Legacy Integration', 'API Development', 'Data Migration', 'System Monitoring'],
    pricing: 'Starting at $5,000'
  }
];

const stats = [
  { number: '100+', label: 'IoT Devices Connected' },
  { number: '50+', label: 'Smart Projects' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Monitoring' }
];

export default function IoTPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>iot | Zion Tech Group</title>
        <meta name="description" content="iot - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">iot</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default iot;