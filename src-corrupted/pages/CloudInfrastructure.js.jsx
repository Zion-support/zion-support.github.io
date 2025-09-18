import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
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

}} animate = {
  { opacity: 1,
  y: 0 

}} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {' '}That Scales{' '}
              </span>
              With Your Business
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build, deploy, and manage robust cloud infrastructure across AWS, Azure, and Google Cloud. 
              Our expertise ensures optimal performance, security, and cost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Get Cloud Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20">
                <Play className="w-5 h-5 mr-2" />
                View Architecture
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (<motion.div key={stat.label} initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ delay: 0.2 + index * 0.1 }} className="text-center p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <stat .icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructure.js;
