import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { comprehensivePricingGuide2027 } from '../data/comprehensivePricingGuide2027';

const ComprehensivePricingGuide2027: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = useMemo(() => {
        const cats = ['all', ...Array.from(new Set(comprehensivePricingGuide2027.map(service => service.category)))];
        return cats;
    }, []);

    const subcategories = useMemo(() => {
        if (selectedCategory === 'all') {
            const subcats = ['all', ...Array.from(new Set(comprehensivePricingGuide2027.map(service => service.subcategory)))];
            return subcats;
        } else {
            const subcats = ['all', ...Array.from(new Set(comprehensivePricingGuide2027.filter(service => service.category === selectedCategory).map(service => service.subcategory)))];
            return subcats;
        }
    }, [selectedCategory]);

    const filteredServices = useMemo(() => {
        let filtered = comprehensivePricingGuide2027;

        if (searchTerm) {
            filtered = filtered.filter(service =>
                service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(service => service.category === selectedCategory);
        }

        if (selectedSubcategory !== 'all') {
            filtered = filtered.filter(service => service.subcategory === selectedSubcategory);
        }

        return filtered;
    }, [searchTerm, selectedCategory, selectedSubcategory]);

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
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20"
            >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Comprehensive Pricing Guide 2027
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
                        Transparent pricing for our cutting-edge innovative services. Choose the plan that fits your business needs and budget.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-zion-blue px-8 py-3 rounded-full font-semibold hover:bg-zion-cyan transition-colors"
                        >
                            View All Services
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-zion-blue transition-colors"
                        >
                            Contact Sales
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Contact Info Banner */}
            <div className="bg-zion-slate-dark text-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-zion-cyan">📞</span>
                            <span>+1 302 464 0950</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-zion-cyan">✉️</span>
                            <span>kleber@ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-zion-cyan">🌐</span>
                            <span>https://ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-zion-cyan">📍</span>
                            <span>364 E Main St STE 1008 Middletown DE 19709</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Search Services</label>
                            <input
                                type="text"
                                placeholder="Search by name, description, or category..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                            />
                        </div>

                        {/* Category Filter */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value);
                                    setSelectedSubcategory('all');
                                }}
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category} className="bg-zion-slate-dark text-white">
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Subcategory Filter */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Subcategory</label>
                            <select
                                value={selectedSubcategory}
                                onChange={(e) => setSelectedSubcategory(e.target.value)}
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                            >
                                {subcategories.map(subcategory => (
                                    <option key={subcategory} value={subcategory} className="bg-zion-slate-dark text-white">
                                        {subcategory === 'all' ? 'All Subcategories' : subcategory}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="text-white mb-6">
                    <p className="text-lg">
                        Showing {filteredServices.length} of {comprehensivePricingGuide2027.length} pricing plans
                    </p>
                </div>

                {/* Services Pricing */}
                {filteredServices.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="text-white text-xl mb-4">No pricing plans found</div>
                        <p className="text-white/70">Try adjusting your search criteria or filters</p>
                    </motion.div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        {filteredServices.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                            >
                                {/* Service Header */}
                                <div className="mb-8">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full mb-3">
                                                {service.category} • {service.subcategory}
                                            </span>
                                            <h2 className="text-3xl font-bold text-white mb-3">{service.title}</h2>
                                            <p className="text-white/80 text-lg leading-relaxed max-w-4xl">{service.description}</p>
                                        </div>
                                    </div>

                                    {/* Market Info */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/5 rounded-lg">
                                        <div>
                                            <span className="text-white/60 text-sm">Market Size</span>
                                            <div className="text-zion-cyan font-bold">{service.marketInfo.marketSize}</div>
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-sm">Growth Rate</span>
                                            <div className="text-white font-medium">{service.marketInfo.growthRate}</div>
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-sm">ROI</span>
                                            <div className="text-white font-medium">{service.marketInfo.roi}</div>
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-sm">Setup Time</span>
                                            <div className="text-white font-medium">{service.marketInfo.setupTime}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing Tiers */}
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                                    {/* Starter */}
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                                            <div className="text-3xl font-bold text-zion-cyan mb-1">{service.pricing.starter.price}</div>
                                            <div className="text-white/60 text-sm">per {service.pricing.starter.billing}</div>
                                        </div>
                                        <ul className="space-y-2 mb-6">
                                            {service.pricing.starter.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                                                    <span className="text-zion-cyan">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-center">
                                            <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                                            <ul className="space-y-1">
                                                {service.pricing.starter.limitations.map((limitation, index) => (
                                                    <li key={index} className="text-white/60 text-xs">• {limitation}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Professional */}
                                    <div className="bg-gradient-to-b from-zion-cyan/20 to-zion-blue/20 rounded-xl p-6 border-2 border-zion-cyan/50 relative">
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-zion-cyan text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
                                        </div>
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
                                            <div className="text-3xl font-bold text-zion-cyan mb-1">{service.pricing.professional.price}</div>
                                            <div className="text-white/60 text-sm">per {service.pricing.professional.billing}</div>
                                        </div>
                                        <ul className="space-y-2 mb-6">
                                            {service.pricing.professional.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                                                    <span className="text-zion-cyan">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-center">
                                            <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                                            <ul className="space-y-1">
                                                {service.pricing.professional.limitations.map((limitation, index) => (
                                                    <li key={index} className="text-white/60 text-xs">• {limitation}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Enterprise */}
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                                            <div className="text-3xl font-bold text-zion-cyan mb-1">{service.pricing.enterprise.price}</div>
                                            <div className="text-white/60 text-sm">per {service.pricing.enterprise.billing}</div>
                                        </div>
                                        <ul className="space-y-2 mb-6">
                                            {service.pricing.enterprise.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                                                    <span className="text-zion-cyan">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-center">
                                            <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                                            <ul className="space-y-1">
                                                {service.pricing.enterprise.limitations.map((limitation, index) => (
                                                    <li key={index} className="text-white/60 text-xs">• {limitation}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Custom */}
                                    <div className="bg-gradient-to-b from-zion-purple/20 to-zion-blue/20 rounded-xl p-6 border border-zion-purple/50">
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-white mb-2">Custom</h3>
                                            <div className="text-zion-purple font-bold text-lg mb-2">Tailored Solution</div>
                                        </div>
                                        <p className="text-white/80 text-sm mb-4 text-center">{service.pricing.custom.description}</p>
                                        <ul className="space-y-2 mb-6">
                                            {service.pricing.custom.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                                                    <span className="text-zion-purple">★</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-center">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-gradient-to-r from-zion-purple to-zion-blue text-white px-6 py-2 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-purple transition-all duration-300"
                                            >
                                                Contact Sales
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Features */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4">Features Breakdown</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-zion-cyan font-semibold mb-2">Core Features</h4>
                                                <ul className="space-y-1">
                                                    {service.features.core.map((feature, index) => (
                                                        <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                                                            <span className="text-zion-cyan">•</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-zion-cyan font-semibold mb-2">Advanced Features</h4>
                                                <ul className="space-y-1">
                                                    {service.features.advanced.map((feature, index) => (
                                                        <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                                                            <span className="text-zion-cyan">•</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-zion-cyan font-semibold mb-2">Enterprise Features</h4>
                                                <ul className="space-y-1">
                                                    {service.features.enterprise.map((feature, index) => (
                                                        <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                                                            <span className="text-zion-cyan">•</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Benefits & Use Cases */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4">Benefits & Use Cases</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-zion-cyan font-semibold mb-2">Key Benefits</h4>
                                                <ul className="space-y-1">
                                                    {service.benefits.map((benefit, index) => (
                                                        <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                                                            <span className="text-zion-cyan">✓</span>
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-zion-cyan font-semibold mb-2">Use Cases</h4>
                                                <ul className="space-y-1">
                                                    {service.useCases.map((useCase, index) => (
                                                        <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                                                            <span className="text-zion-cyan">•</span>
                                                            {useCase}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Support & Compliance */}
                                <div className="mt-8 p-6 bg-white/5 rounded-lg">
                                    <h3 className="text-xl font-bold text-white mb-4">Support & Compliance</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="text-zion-cyan font-semibold mb-2">Support Options</h4>
                                            <ul className="space-y-1">
                                                <li className="text-white/80 text-sm flex items-center gap-2">
                                                    <span className={service.support.email ? 'text-zion-cyan' : 'text-white/40'}>✓</span>
                                                    Email Support
                                                </li>
                                                <li className="text-white/80 text-sm flex items-center gap-2">
                                                    <span className={service.support.phone ? 'text-zion-cyan' : 'text-white/40'}>✓</span>
                                                    Phone Support
                                                </li>
                                                <li className="text-white/80 text-sm flex items-center gap-2">
                                                    <span className={service.support.chat ? 'text-zion-cyan' : 'text-white/40'}>✓</span>
                                                    Live Chat
                                                </li>
                                                <li className="text-white/80 text-sm flex items-center gap-2">
                                                    <span className={service.support.dedicated ? 'text-zion-cyan' : 'text-white/40'}>✓</span>
                                                    Dedicated Support
                                                </li>
                                            </ul>
                                            <p className="text-white/60 text-xs mt-2">SLA: {service.support.sla}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-zion-cyan font-semibold mb-2">Compliance</h4>
                                            <ul className="space-y-1">
                                                {service.compliance.map((compliance, index) => (
                                                    <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                                                        <span className="text-zion-cyan">✓</span>
                                                        {compliance}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-zion-cyan font-semibold mb-2">Integrations</h4>
                                            <ul className="space-y-1">
                                                {service.integrations.slice(0, 6).map((integration, index) => (
                                                    <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                                                        <span className="text-zion-cyan">🔗</span>
                                                        {integration}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-8 text-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
                                    >
                                        Get Started Today
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Final CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20 mt-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Need Custom Pricing?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Our sales team is ready to help you find the perfect plan for your business needs. Contact us for a personalized quote.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-zion-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-zion-cyan transition-colors"
                        >
                            Contact Sales Team
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-zion-blue transition-colors"
                        >
                            Schedule Demo
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ComprehensivePricingGuide2027;