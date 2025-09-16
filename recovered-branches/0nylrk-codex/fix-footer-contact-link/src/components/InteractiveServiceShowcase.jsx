<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
const InteractiveServiceShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredService, setHoveredService] = useState(null);
    const categories = [
        { id: 'all', name: 'All Services', icon: '🚀', count: 35 },
        { id: 'ai', name: 'AI & ML', icon: '🤖', count: 13 },
        { id: 'quantum', name: 'Quantum', icon: '🔮', count: 5 },
        { id: 'cloud', name: 'Cloud', icon: '☁️', count: 8 },
        { id: 'security', name: 'Security', icon: '🛡️', count: 6 },
        { id: 'automation', name: 'Automation', icon: '⚡', count: 3 }
    ];
    const services = [
        {
            id: 'ai-strategy',
            title: 'AI Strategy Consulting',
            description: 'Comprehensive AI strategy development and implementation consulting for enterprises',
            icon: '🤖',
            price: 'From $2,500',
            category: 'ai',
            features: ['Strategic Planning', 'Implementation Roadmap', 'ROI Analysis', 'Team Training'],
            isPopular: true,
            color: 'from-zion-cyan to-zion-blue',
            href: '/services/ai'
        },
        {
            id: 'quantum-ai',
            title: 'Quantum AI Fusion Platform',
            description: 'Revolutionary platform combining quantum computing with artificial intelligence',
            icon: '🔮',
            price: 'From $25,000',
            category: 'quantum',
            features: ['Quantum Algorithms', 'AI Integration', 'Performance Optimization', 'Scalable Architecture'],
            isNew: true,
            color: 'from-zion-purple to-zion-cyan',
            href: '/services/quantum'
        },
        {
            id: 'neuromorphic',
            title: 'Neuromorphic Computing Platform',
            description: 'Brain-inspired computing architecture for ultra-efficient AI processing',
            icon: '🧠',
            price: 'From $35,000',
            category: 'ai',
            features: ['Neural Networks', 'Efficient Processing', 'Scalable Architecture', 'Low Power Consumption'],
            color: 'from-zion-blue to-zion-cyan',
            href: '/services/ai'
        },
        {
            id: 'edge-ai',
            title: 'Edge AI Orchestration Platform',
            description: 'Intelligent orchestration of AI workloads across distributed edge computing',
            icon: '🌐',
            price: 'From $15,000',
            category: 'cloud',
            features: ['Edge Deployment', 'Load Balancing', 'Real-time Processing', 'IoT Integration'],
            color: 'from-zion-cyan to-zion-green',
            href: '/services/cloud'
        },
        {
            id: 'federated-learning',
            title: 'Federated Learning Platform',
            description: 'Privacy-preserving AI training across distributed data sources',
            icon: '🔒',
            price: 'From $20,000',
            category: 'security',
            features: ['Data Privacy', 'Distributed Training', 'Secure Communication', 'Compliance Ready'],
            color: 'from-zion-green to-zion-cyan',
            href: '/services/security'
        },
        {
            id: 'ai-ethics',
            title: 'AI Ethics & Governance Platform',
            description: 'Comprehensive framework for ethical AI development and governance',
            icon: '⚖️',
            price: 'From $18,000',
            category: 'ai',
            features: ['Ethical Guidelines', 'Compliance Tools', 'Audit Trails', 'Risk Assessment'],
            color: 'from-zion-yellow to-zion-orange',
            href: '/services/ai'
        },
        {
            id: 'quantum-security',
            title: 'Quantum-Safe Security Suite',
            description: 'Next-generation security solutions resistant to quantum attacks',
            icon: '🔐',
            price: 'From $30,000',
            category: 'security',
            features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Threat Detection', 'Zero Trust'],
            isNew: true,
            color: 'from-zion-purple to-zion-red',
            href: '/services/security'
        },
        {
            id: 'cloud-automation',
            title: 'Cloud Infrastructure Automation',
            description: 'Intelligent automation of cloud infrastructure deployment and management',
            icon: '⚙️',
            price: 'From $12,000',
            category: 'automation',
            features: ['Infrastructure as Code', 'Auto-scaling', 'Cost Optimization', 'Monitoring'],
            color: 'from-zion-orange to-zion-yellow',
            href: '/services/automation'
        }
    ];
    const filteredServices = activeCategory === 'all'
        ? services
        : services.filter(service => service.category === activeCategory);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    const categoryVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    return (<section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Innovative Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge technology solutions designed to transform your business operations 
            and drive innovation across all industries
          </p>
        </motion.div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveServiceShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveServiceShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveServiceShowcase;