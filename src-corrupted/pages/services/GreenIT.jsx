import React from 'react';
import {motion} from 'framer-motion';
import {SEO} from "../../components/SEO";
import {Leaf, 
  Zap, 
  Globe, 
  Shield, 
  CheckCircle, 
  TrendingUp,
  Users,
  Award,
  Database,
  Server,
  Cloud,
  Cpu,
  Monitor,
  HardDrive,
  Network,
  Battery} from 'lucide-react';

export default function GreenIT
export {GreenIT}() {
  const services = [
    {
      icon: Leaf,
      title: 'Green Data Centers',
      description: 'Energy-efficient data center design and optimization',
      features: ['Renewable energy integration', 'Cooling system optimization', 'Energy monitoring', 'Carbon footprint reduction']
    },
    {icon: Zap,
      title: 'Energy Management',
      description: 'Smart energy monitoring and optimization systems',
      features: ['Real-time energy tracking', 'Automated optimization', 'Peak demand management', 'Energy cost reduction']},
    {icon: Cloud,
      title: 'Cloud Optimization',
      description: 'Eco-friendly cloud infrastructure and services',
      features: ['Green cloud providers', 'Resource optimization', 'Carbon-aware computing', 'Sustainable scaling']},
    {icon: Server,
      title: 'Hardware Efficiency',
      description: 'Energy-efficient hardware selection and management',
      features: ['Low-power processors', 'Efficient storage', 'Smart power management', 'Hardware lifecycle optimization']},
    {icon: Network,
      title: 'Network Optimization',
      description: 'Efficient network infrastructure and protocols',
      features: ['Traffic optimization', 'Bandwidth management', 'Network virtualization', 'Green networking protocols']},
    {icon: Monitor,
      title: 'Software Efficiency',
      description: 'Energy-efficient software development and deployment',
      features: ['Code optimization', 'Resource management', 'Efficient algorithms', 'Green software practices']}
  ];

  const benefits = [
    {icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Lower energy costs and operational expenses'},
    {icon: Shield,
      title: 'Compliance',
      description: 'Meet environmental regulations and standards'},
    {icon: Users,
      title: 'Brand Value',
      description: 'Enhanced reputation and customer trust'},
    {icon: Award,
      title: 'Innovation',
      description: 'Leading-edge sustainable technology solutions'}
  ];

  const technologies = [
    {icon: Battery,
      title: 'Renewable Energy',
      description: 'Solar, wind, and hydroelectric power integration'},
    {icon: Cpu,
      title: 'AI Optimization',
      description: 'Machine learning for energy efficiency'},
    {icon: Database,
      title: 'Smart Monitoring',
      description: 'IoT sensors and real-time analytics'},
    {icon: Globe,
      title: 'Carbon Tracking',
      description: 'Comprehensive carbon footprint measurement'}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>GreenIT | Zion Tech Group</title>
        <meta name="description" content="GreenIT - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">GreenIT</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default GreenIT;