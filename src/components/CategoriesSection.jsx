import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Sparkles, Zap, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Comprehensive Services",
        description: "Micro SAAS, IT services, and AI solutions",
        icon: <Briefcase className="w-10 h-10"/>,
        link: "/services",
        color: "from-zion-purple to-zion-purple-dark",
        gradient: "from-zion-purple/20 to-zion-purple-dark/20",
        features: ["24/7 Support", "Expert Team", "Custom Solutions"],
        stats: "500+ Services"
    },
    {
        title: "Talents",
        description: "Connect with AI experts, developers, and tech specialists",
        icon: <Users className="w-10 h-10"/>,
        link: "/talent",
        color: "from-zion-cyan to-zion-blue",
        gradient: "from-zion-cyan/20 to-zion-blue/20",
        features: ["AI Experts", "Global Network", "Verified Profiles"],
        stats: "10K+ Experts"
    },
    {
        title: "Equipment",
        description: "Rent or buy specialized hardware, servers, and devices",
        icon: <HardDrive className="w-10 h-10"/>,
        link: "/equipment",
        color: "from-zion-cyan-light to-zion-cyan",
        gradient: "from-zion-cyan-light/20 to-zion-cyan/20",
        features: ["High-Performance", "Flexible Rental", "24/7 Monitoring"],
        stats: "1000+ Devices"
    },
    {
        title: "Innovation",
        description: "Discover cutting-edge solutions and tech breakthroughs",
        icon: <Lightbulb className="w-10 h-10"/>,
        link: "/category/innovation",
        color: "from-zion-purple-light to-zion-purple",
        gradient: "from-zion-purple-light/20 to-zion-purple/20",
        features: ["Latest Tech", "AI Solutions", "Future-Ready"],
        stats: "100+ Innovations"
    },
];

const specialServices = [
    {
        title: "Enhanced AI & IT Services",
        link: "/enhanced-services"
    },
    {
        title: "IT Onsite Services",
        link: "/it-onsite-services",
        icon: <Shield className="w-5 h-5"/>,
        description: "Professional on-site technical support"
    },
    {
        title: "Comprehensive Services",
        link: "/comprehensive-services",
        icon: <Rocket className="w-5 h-5"/>,
        description: "End-to-end technology solutions"
    },
    {
        title: "AI Integration",
        link: "/ai-integration",
        icon: <Sparkles className="w-5 h-5"/>,
        description: "Seamless AI implementation"
    },
    {
        title: "Cloud Solutions",
        link: "/cloud-solutions",
        icon: <Zap className="w-5 h-5"/>,
        description: "Scalable cloud infrastructure"
    }
];

export function CategoriesSection({ showTitle = true }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            y: 30,
            opacity: 0 
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {showTitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <GradientHeading>Explore Our Categories</GradientHeading>
                        <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover comprehensive solutions across technology, talent, and innovation
                        </p>
                    </motion.div>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <Link to={category.link} className="block">
                                <div className={`bg-gradient-to-br ${category.gradient} border border-slate-700/50 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-slate-600/50 group-hover:shadow-2xl group-hover:shadow-purple-500/10`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-slate-300">
                                            {category.icon}
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200">
                                        {category.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm mb-4">
                                        {category.description}
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        {category.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center text-xs text-slate-400">
                                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm font-medium text-purple-400">
                                            {category.stats}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-semibold text-white mb-8">
                        Specialized Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specialServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <Link to={service.link} className="block">
                                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-200 group-hover:bg-slate-800/70">
                                        {service.icon && (
                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                {service.icon}
                                            </div>
                                        )}
                                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200">
                                            {service.title}
                                        </h4>
                                        {service.description && (
                                            <p className="text-slate-300 text-sm">
                                                {service.description}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


export default CategoriesSection;