<<<<<<< HEAD

export default CategoriesSection;
=======
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
    return (<section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

export default CategoriesSection;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
