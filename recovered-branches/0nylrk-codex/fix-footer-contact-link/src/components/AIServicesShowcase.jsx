import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Database, Globe, Zap, ArrowRight, Code, Bot, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';
const aiServices = [
    {
        id: 'ai-chat',
        name: 'ZionGPT Pro',
        description: 'Advanced conversational AI with enterprise-grade security and customization',
        category: 'Conversational AI',
        rating: 4.9,
        users: 15420,
        price: 'From $99/month',
        features: ['Multi-language support', 'Custom training', 'API access', 'Analytics'],
        icon: Brain,
        color: 'from-purple-500 to-purple-700',
        status: 'active'
    },
    {
        id: 'ai-vision',
        name: 'VisionAI Suite',
        description: 'Computer vision solutions for image recognition, analysis, and processing',
        category: 'Computer Vision',
        rating: 4.8,
        users: 8920,
        price: 'From $149/month',
        features: ['Real-time processing', 'Custom models', 'Batch processing', 'SDK'],
        icon: Cpu,
        color: 'from-blue-500 to-blue-700',
        status: 'beta'
    },
    {
        id: 'ai-data',
        name: 'DataMind Analytics',
        description: 'Intelligent data analysis and predictive modeling platform',
        category: 'Data Analytics',
        rating: 4.7,
        users: 12340,
        price: 'From $199/month',
        features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'API'],
        icon: Database,
        color: 'from-green-500 to-green-700',
        status: 'active'
    },
    {
        id: 'ai-global',
        name: 'GlobalAI Network',
        description: 'Distributed AI computing network for global scale operations',
        category: 'Infrastructure',
        rating: 4.6,
        users: 5670,
        price: 'From $299/month',
        features: ['Global deployment', 'Auto-scaling', 'Load balancing', 'Monitoring'],
        icon: Globe,
        color: 'from-orange-500 to-orange-700',
        status: 'new'
    },
    {
        id: 'ai-code-review',
        name: 'AI Code Reviewer',
        description: 'Automated pull request reviews with security and quality checks',
        category: 'Developer AI',
        rating: 4.8,
        users: 7420,
        price: 'From $199/month',
        features: ['PR annotations', 'OWASP checks', 'Refactor suggestions'],
        icon: Code,
        color: 'from-cyan-500 to-blue-600',
        status: 'active'
    },
    {
        id: 'ai-rag-assistant',
        name: 'Knowledge RAG Assistant',
        description: 'Private, secure chat over your documents with access controls',
        category: 'Conversational AI',
        rating: 4.7,
        users: 6120,
        price: 'From $299/month',
        features: ['Policy-aware retrieval', 'Redaction', 'Human-in-the-loop'],
        icon: Bot,
        color: 'from-purple-600 to-fuchsia-600',
        status: 'active'
    },
    {
        id: 'ai-vision-edge',
        name: 'Edge Vision Inspector',
        description: 'On-device defect detection with active learning',
        category: 'Computer Vision',
        rating: 4.6,
        users: 3180,
        price: 'From $499/month',
        features: ['Offline inference', 'Model drift alerts', 'Web dashboard'],
        icon: Scan,
        color: 'from-emerald-500 to-teal-600',
        status: 'beta'
    }
];
const categories = ['All', 'Conversational AI', 'Computer Vision', 'Data Analytics', 'Infrastructure', 'Developer AI'];
export function AIServicesShowcase() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedService, setSelectedService] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const filteredServices = selectedCategory === 'All'
        ? aiServices
        : aiServices.filter(service => service.category === selectedCategory);
    const getStatusBadge = (status) => {
        const statusConfig = {
            active: { color: 'bg-green-500', text: 'Active' },
            beta: { color: 'bg-yellow-500', text: 'Beta' },
            new: { color: 'bg-blue-500', text: 'New' }
        };
        const config = statusConfig[status];
        return (<span className={`${config.color} text-white text-xs px-2 py-1 rounded-full font-medium`}>
        {config.text}
      </span>);
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-ping"></div>
      </div>

export default AIServicesShowcase;
