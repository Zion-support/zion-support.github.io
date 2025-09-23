import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Brain, 
    Cloud, 
    Shield, 
    Zap, 
    Globe, 
    Cpu, 
    Database, 
    Network,
    ArrowRight,
    Star,
    Users,
    TrendingUp
} from 'lucide-react';

interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    category: string;
    features: string[];
    rating: number;
    users: number;
    price: string;
    color: string;
    gradient: string;
}

const services: Service[] = [
    {
        id: 'ai-solutions',
        title: 'AI-Powered Solutions',
        description: 'Cutting-edge artificial intelligence solutions for business automation and decision-making',
        icon: Brain,
        category: 'AI & Machine Learning',
        features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making'],
        rating: 4.9,
        users: 2500,
        price: 'From $2,500',
        color: 'text-zion-cyan',
        gradient: 'from-zion-cyan to-zion-cyan-dark'
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        description: 'Scalable cloud infrastructure and automated deployment pipelines',
        icon: Cloud,
        category: 'Infrastructure',
        features: ['AWS/Azure/GCP', 'Kubernetes', 'CI/CD Pipelines', 'Monitoring & Logging'],
        rating: 4.8,
        users: 1800,
        price: 'From $1,800',
        color: 'text-zion-purple',
        gradient: 'from-zion-purple to-zion-purple-dark'
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your digital assets',
        icon: Shield,
        category: 'Security',
        features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'],
        rating: 4.9,
        users: 1200,
        price: 'From $3,200',
        color: 'text-zion-cyan',
        gradient: 'from-zion-cyan to-zion-cyan-dark'
    },
    {
        id: 'quantum-computing',
        title: 'Quantum Computing',
        description: 'Next-generation quantum solutions for complex computational problems',
        icon: Cpu,
        category: 'Emerging Tech',
        features: ['Quantum Algorithms', 'Optimization', 'Simulation', 'Research Support'],
        rating: 4.7,
        users: 800,
        price: 'From $5,000',
        color: 'text-zion-purple',
        gradient: 'from-zion-purple to-zion-purple-dark'
    },
    {
        id: 'data-analytics',
        title: 'Data Analytics',
        description: 'Transform raw data into actionable business insights',
        icon: Database,
        category: 'Data Science',
        features: ['Big Data Processing', 'Business Intelligence', 'Data Visualization', 'Statistical Analysis'],
        rating: 4.8,
        users: 2100,
        price: 'From $2,200',
        color: 'text-zion-cyan',
        gradient: 'from-zion-cyan to-zion-cyan-dark'
    },
    {
        id: 'blockchain',
        title: 'Blockchain Solutions',
        description: 'Decentralized applications and smart contract development',
        icon: Network,
        category: 'Web3',
        features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms', 'DApp Development'],
        rating: 4.6,
        users: 950,
        price: 'From $3,800',
        color: 'text-zion-purple',
        gradient: 'from-zion-purple to-zion-purple-dark'
    }
];

const categories = ['All', 'AI & Machine Learning', 'Infrastructure', 'Security', 'Emerging Tech', 'Data Science', 'Web3'];

export function EnhancedServicesShowcase() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredService, setHoveredService] = useState<string | null>(null);

    const filteredServices = selectedCategory === 'All' 
        ? services 
        : services.filter(service => service.category === selectedCategory);

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
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-zion-blue-dark/50 to-zion-blue-dark">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Services</span>
                    </h2>
                    <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
                        Discover our comprehensive range of cutting-edge technology services designed to transform your business
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-zion-cyan text-zion-blue-dark shadow-neon-lg'
                                    : 'bg-zion-slate-dark/30 text-zion-slate-light hover:bg-zion-slate-dark/50 hover:text-white border border-zion-slate/20'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {filteredServices.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="group relative"
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="relative h-full bg-gradient-to-br from-zion-slate-dark/40 to-zion-slate-dark/20 backdrop-blur-sm border border-zion-slate/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-neon-xl overflow-hidden">
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                
                                {/* Icon */}
                                <div className="relative z-10 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="mb-4">
                                        <span className="text-sm text-zion-cyan font-medium">{service.category}</span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <ul className="space-y-2">
                                            {service.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="flex items-center text-sm text-zion-slate-light">
                                                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-3" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-white font-medium">{service.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-zion-slate-light">
                                            <Users className="w-4 h-4" />
                                            <span className="text-sm">{service.users.toLocaleString()}+</span>
                                        </div>
                                    </div>

                                    {/* Price and CTA */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-zion-cyan font-bold text-lg">{service.price}</span>
                                        <Link
                                            to={`/services/${service.id}`}
                                            className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 hover:bg-zion-cyan/20 text-zion-cyan rounded-lg transition-all duration-300 hover:scale-105"
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                {hoveredService === service.id && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 border border-zion-cyan/20 rounded-2xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-12 max-w-4xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-xl text-zion-slate-light mb-8">
                            Let's discuss how our services can help you achieve your goals
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/request-quote"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-neon-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Get Started Today
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}