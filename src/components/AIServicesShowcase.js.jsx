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
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Zap className="w-5 h-5 text-purple-400"/>
            <span className="text-purple-300 font-medium">Latest AI Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Future of
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Experience cutting-edge AI solutions designed to transform your business operations and drive innovation
          </p>
          <div className="mt-6">
            <Link to="/services" className="text-zion-cyan underline">Browse all services</Link>
          </div>
        </motion.div>
        {/* Category Filter */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          {categories.map((category, index) => (<motion.button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-white/20'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              {category}
            </motion.button>))}
        </motion.div>
        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (<motion.div key={service.id} variants={itemVariants} layout whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
            }} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}/>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <div className="text-zion-slate-light text-sm">{service.category}</div>
                      </div>
                    </div>
                    {getStatusBadge(service.status)}
                  </div>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.slice(0, 4).map((feature, i) => (<div key={i} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </div>))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-zion-cyan font-semibold">{service.price}</div>
                    <Link to="/services" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                      Learn more <ArrowRight className="w-4 h-4"/>
                    </Link>
                  </div>
                </div>
              </motion.div>))}
          </AnimatePresence>
        </motion.div>
        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-zion-cyan to-zion-blue text-white border border-zion-cyan/30">
            Talk to sales <ArrowRight className="w-4 h-4"/>
          </Link>
        </div>
      </div>
    </section>);
}
