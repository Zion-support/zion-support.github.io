<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {Cloud, Server, Shield, Zap, Database, Globe, ArrowRight, Play, Code, BarChart3, MessageSquare, Phone, Mail, Lock, Cpu, HardDrive, Wifi, TrendingUp, DollarSign} from 'lucide-react';
export default function CloudInfrastructure
export {CloudInfrastructure}() {
    const [selectedProvider, setSelectedProvider] = useState('aws');
    const cloudServices = [
        {
            title: 'Infrastructure as Code',
            description: 'Automate cloud infrastructure deployment and management',
            icon: Code,
            features['Terraform', 'CloudFormation', 'ARM Templates', 'Deployment Automation'];
        },;
        {title: 'Container Orchestration',
            description: 'Manage and scale containerized applications',
            icon: Cpu,
            features['Kubernetes', 'Docker', 'ECS/EKS', 'Azure AKS', 'GKE'];},;
        {title: 'Serverless Computing',
            description: 'Build and run applications without managing servers',
            icon: Zap,
            features['AWS Lambda', 'Azure Functions', 'Cloud Functions', 'Event-driven Architecture'];},;
        {title: 'Database Solutions',
            description: 'Managed database services for optimal performance',
            icon: Database,
            features['RDS, Aurora', 'Azure SQL', 'Cloud SQL', 'NoSQL Options'];},;
        {title: 'Security & Compliance',
            description: 'Enterprise-grade security and compliance features',
            icon: Shield,
            features['IAM & Access Control', 'Encryption', 'Compliance Frameworks', 'Security Monitoring'];},;
        {title: 'Monitoring & Analytics',
            description: 'Comprehensive monitoring and observability',
            icon: BarChart3,
            features['CloudWatch', 'Azure Monitor', 'Stackdriver', 'Log Management'];}
    ];
    const benefits = [
        {title: 'Scalability', description: 'Scale resources up or down based on demand', icon: TrendingUp},
        {title: 'Cost Optimization', description: 'Pay only for what you use with smart resource management', icon: DollarSign},
        {title: 'High Availability', description: '99.9%+ uptime with multi-region deployments', icon: Shield},
        {title: 'Security', description: 'Enterprise-grade security with compliance certifications', icon: Lock},
        {title: 'Performance', description: 'Global CDN and edge computing for optimal speed', icon: Zap},
        {title: 'Disaster Recovery', description: 'Automated backup and recovery solutions', icon: HardDrive}
    ];
    const stats = [
        {number: '99.9%', label: 'Uptime SLA', icon: Shield},
        {number: '50%', label: 'Cost Reduction', icon: TrendingUp},
        {number: '10x', label: 'Faster Deployment', icon: Zap},
        {number: '24/7', label: 'Monitoring', icon: Wifi}
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div initial = {
  { opacity: 0,
  y: 20 
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const CloudInfrastructure.js: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>CloudInfrastructure.js | Zion Tech Group</title>
        <meta name="description" content="CloudInfrastructure.js - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">CloudInfrastructure.js</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructure.js;