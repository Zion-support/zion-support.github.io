<<<<<<< HEAD

export default TechSolutionsSection;
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cloud, Shield, Database, Globe, Smartphone, Cpu, Lock, TrendingUp, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
const solutions = [
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Cutting-edge artificial intelligence and machine learning solutions',
        icon: <Brain className="w-8 h-8"/>,
        color: 'from-zion-purple to-zion-purple-dark',
        bgColor: 'from-zion-purple/20 to-zion-purple-dark/20',
        features: [
            'Custom AI model development',
            'Natural language processing',
            'Computer vision solutions',
            'Predictive analytics',
            'Automated decision making'
        ],
        benefits: [
            'Increase efficiency by 300%',
            'Reduce operational costs by 40%',
            'Improve accuracy by 95%'
        ],
        useCases: ['Healthcare', 'Finance', 'Retail', 'Manufacturing'],
        rating: 4.9,
        projects: 150,
        category: 'Emerging Tech'
    },
    {
        id: 'cloud-infrastructure',
        title: 'Cloud Infrastructure',
        description: 'Scalable and secure cloud solutions for modern businesses',
        icon: <Cloud className="w-8 h-8"/>,
        color: 'from-zion-cyan to-zion-blue',
        bgColor: 'from-zion-cyan/20 to-zion-blue/20',
        features: [
            'Multi-cloud architecture',
            'Auto-scaling solutions',
            'Disaster recovery',
            'Performance optimization',
            'Cost management'
        ],
        benefits: [
            'Reduce infrastructure costs by 60%',
            'Improve uptime to 99.99%',
            'Scale resources automatically'
        ],
        useCases: ['E-commerce', 'SaaS', 'Enterprise', 'Startups'],
        rating: 4.8,
        projects: 200,
        category: 'Infrastructure'
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your digital assets',
        icon: <Shield className="w-8 h-8"/>,
        color: 'from-zion-cyan-light to-zion-cyan',
        bgColor: 'from-zion-cyan-light/20 to-zion-cyan/20',
        features: [
            'Threat detection & response',
            'Vulnerability assessment',
            'Identity & access management',
            'Data encryption',
            'Compliance management'
        ],
        benefits: [
            'Prevent 99.9% of cyber attacks',
            'Meet industry compliance standards',
            'Protect customer data integrity'
        ],
        useCases: ['Banking', 'Healthcare', 'Government', 'Education'],
        rating: 4.9,
        projects: 120,
        category: 'Security'
    },
    {
        id: 'data-analytics',
        title: 'Data Analytics',
        description: 'Transform raw data into actionable business insights',
        icon: <Database className="w-8 h-8"/>,
        color: 'from-zion-purple-light to-zion-purple',
        bgColor: 'from-zion-purple-light/20 to-zion-purple/20',
        features: [
            'Real-time data processing',
            'Advanced reporting dashboards',
            'Predictive modeling',
            'Data visualization',
            'Business intelligence'
        ],
        benefits: [
            'Make data-driven decisions',
            'Identify new business opportunities',
            'Optimize operational processes'
        ],
        useCases: ['Marketing', 'Operations', 'Sales', 'Research'],
        rating: 4.7,
        projects: 180,
        category: 'Analytics'
    },
    {
        id: 'iot-solutions',
        title: 'IoT Solutions',
        description: 'Connected devices and smart systems for the modern world',
        icon: <Cpu className="w-8 h-8"/>,
        color: 'from-zion-cyan to-zion-purple',
        bgColor: 'from-zion-cyan/20 to-zion-purple/20',
        features: [
            'Device connectivity management',
            'Real-time monitoring',
            'Data collection & analysis',
            'Remote control systems',
            'Predictive maintenance'
        ],
        benefits: [
            'Monitor assets in real-time',
            'Reduce maintenance costs by 30%',
            'Improve operational efficiency'
        ],
        useCases: ['Manufacturing', 'Smart Cities', 'Agriculture', 'Healthcare'],
        rating: 4.6,
        projects: 90,
        category: 'Connected Devices'
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile solutions for all devices',
        icon: <Smartphone className="w-8 h-8"/>,
        color: 'from-zion-purple to-zion-cyan',
        bgColor: 'from-zion-purple/20 to-zion-cyan/20',
        features: [
            'iOS & Android development',
            'Cross-platform solutions',
            'UI/UX design',
            'Performance optimization',
            'App store deployment'
        ],
        benefits: [
            'Reach customers on all devices',
            'Improve user engagement',
            'Increase brand visibility'
        ],
        useCases: ['Retail', 'Entertainment', 'Education', 'Healthcare'],
        rating: 4.8,
        projects: 250,
        category: 'Mobile'
    }
];
const industries = [
    { name: 'Healthcare', icon: <Shield className="w-5 h-5"/>, projects: 80 },
    { name: 'Finance', icon: <TrendingUp className="w-5 h-5"/>, projects: 120 },
    { name: 'Retail', icon: <Globe className="w-5 h-5"/>, projects: 95 },
    { name: 'Manufacturing', icon: <Cpu className="w-5 h-5"/>, projects: 75 },
    { name: 'Education', icon: <Users className="w-5 h-5"/>, projects: 60 },
    { name: 'Government', icon: <Lock className="w-5 h-5"/>, projects: 45 }
];
export function TechSolutionsSection() {
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [hoveredSolution, setHoveredSolution] = useState(null);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

export default TechSolutionsSection;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
