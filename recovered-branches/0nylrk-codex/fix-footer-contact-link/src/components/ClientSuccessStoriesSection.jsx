<<<<<<< HEAD

export default ClientSuccessStoriesSection;
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, TrendingUp, Users, DollarSign, Clock, Star, ArrowRight, Building } from 'lucide-react';
const successStories = [
    {
        id: 1,
        client: "TechFlow Solutions",
        industry: "FinTech",
        logo: "/logos/techflow.svg",
        challenge: "Legacy system modernization and digital transformation for a growing fintech startup",
        solution: "Implemented cloud-native architecture with microservices, real-time data processing, and AI-powered fraud detection",
        results: {
            performance: "300%",
            efficiency: "85%",
            cost: "40%",
            time: "60%"
        },
        metrics: [
            { label: "Transaction Processing", before: "1,000/sec", after: "10,000/sec", improvement: "900%" },
            { label: "System Uptime", before: "95%", after: "99.9%", improvement: "5.2%" },
            { label: "Customer Satisfaction", before: "3.2/5", after: "4.8/5", improvement: "50%" },
            { label: "Development Speed", before: "6 months", after: "2 months", improvement: "67%" }
        ],
        technologies: ["AWS", "Kubernetes", "React", "Node.js", "PostgreSQL", "Redis"],
        team: "12 developers",
        duration: "8 months",
        budget: "$2.5M",
        testimonial: "Zion Tech Group transformed our entire technology stack. The results exceeded our expectations - we're now processing 10x more transactions with better reliability than ever before.",
        author: "Sarah Chen",
        role: "CTO",
        rating: 5,
        featured: true
    },
    {
        id: 2,
        client: "HealthTech Innovations",
        industry: "Healthcare",
        logo: "/logos/healthtech.svg",
        challenge: "Building a secure, HIPAA-compliant telemedicine platform with AI-powered diagnostics",
        solution: "Developed end-to-end telemedicine solution with advanced security, AI diagnostics, and seamless patient experience",
        results: {
            performance: "250%",
            efficiency: "90%",
            cost: "35%",
            time: "70%"
        },
        metrics: [
            { label: "Patient Wait Time", before: "45 minutes", after: "5 minutes", improvement: "89%" },
            { label: "Diagnostic Accuracy", before: "78%", after: "94%", improvement: "21%" },
            { label: "Platform Security", before: "Basic", after: "Enterprise-grade", improvement: "N/A" },
            { label: "User Adoption", before: "60%", after: "95%", improvement: "58%" }
        ],
        technologies: ["React Native", "Python", "TensorFlow", "AWS", "HIPAA Compliance", "WebRTC"],
        team: "15 developers",
        duration: "12 months",
        budget: "$3.2M",
        testimonial: "Zion's expertise in healthcare technology and security is unmatched. They delivered a platform that our doctors and patients love, while maintaining the highest security standards.",
        author: "Dr. Michael Rodriguez",
        role: "Chief Medical Officer",
        rating: 5,
        featured: true
    },
    {
        id: 3,
        client: "Retail Dynamics",
        industry: "E-commerce",
        logo: "/logos/retaildynamics.svg",
        challenge: "Creating an omnichannel retail experience with AI-powered inventory management and personalized recommendations",
        solution: "Built comprehensive omnichannel platform with AI inventory optimization, personalized shopping, and seamless integration",
        results: {
            performance: "400%",
            efficiency: "80%",
            cost: "30%",
            time: "65%"
        },
        metrics: [
            { label: "Sales Conversion", before: "2.1%", after: "6.8%", improvement: "224%" },
            { label: "Inventory Turnover", before: "4x/year", after: "12x/year", improvement: "200%" },
            { label: "Customer Retention", before: "45%", after: "78%", improvement: "73%" },
            { label: "Operational Costs", before: "$2.1M", after: "$1.4M", improvement: "33%" }
        ],
        technologies: ["React", "Next.js", "Python", "Machine Learning", "AWS", "Stripe"],
        team: "18 developers",
        duration: "10 months",
        budget: "$2.8M",
        testimonial: "The omnichannel platform Zion built for us has revolutionized our business. Our sales have increased dramatically, and our customers love the seamless experience across all channels.",
        author: "Emily Thompson",
        role: "VP of Digital",
        rating: 5,
        featured: false
    },
    {
        id: 4,
        client: "Manufacturing Plus",
        industry: "Manufacturing",
        logo: "/logos/manufacturingplus.svg",
        challenge: "Implementing Industry 4.0 solutions with IoT sensors, predictive maintenance, and smart factory automation",
        solution: "Deployed comprehensive IoT infrastructure with predictive analytics, automation systems, and real-time monitoring",
        results: {
            performance: "180%",
            efficiency: "75%",
            cost: "45%",
            time: "55%"
        },
        metrics: [
            { label: "Production Output", before: "85%", after: "98%", improvement: "15%" },
            { label: "Downtime Reduction", before: "12%", after: "2%", improvement: "83%" },
            { label: "Energy Efficiency", before: "70%", after: "92%", improvement: "31%" },
            { label: "Quality Control", before: "94%", after: "99.5%", improvement: "6%" }
        ],
        technologies: ["IoT Sensors", "Python", "Machine Learning", "Azure", "React", "Real-time Analytics"],
        team: "20 developers",
        duration: "14 months",
        budget: "$4.1M",
        testimonial: "Zion's IoT and automation solutions have transformed our manufacturing process. We've seen dramatic improvements in efficiency, quality, and cost savings that exceeded our projections.",
        author: "David Kim",
        role: "Operations Director",
        rating: 5,
        featured: false
    },
    {
        id: 5,
        client: "EduTech Pro",
        industry: "Education",
        logo: "/logos/edutechpro.svg",
        challenge: "Building a scalable online learning platform with AI-powered content recommendations and adaptive learning",
        solution: "Developed comprehensive LMS with AI content curation, adaptive learning paths, and advanced analytics",
        results: {
            performance: "220%",
            efficiency: "85%",
            cost: "50%",
            time: "75%"
        },
        metrics: [
            { label: "Student Engagement", before: "45%", after: "87%", improvement: "93%" },
            { label: "Learning Outcomes", before: "72%", after: "91%", improvement: "26%" },
            { label: "Content Delivery", before: "Manual", after: "AI-powered", improvement: "N/A" },
            { label: "Platform Scalability", before: "1,000 users", after: "50,000 users", improvement: "4,900%" }
        ],
        technologies: ["React", "Node.js", "Python", "AI/ML", "AWS", "MongoDB"],
        team: "16 developers",
        duration: "11 months",
        budget: "$2.9M",
        testimonial: "Zion created an incredible learning platform that adapts to each student's needs. Our student engagement and learning outcomes have improved dramatically since the launch.",
        author: "Lisa Patel",
        role: "Chief Learning Officer",
        rating: 5,
        featured: false
    },
    {
        id: 6,
        client: "Green Energy Corp",
        industry: "Energy",
        logo: "/logos/greenenergy.svg",
        challenge: "Developing smart grid management system with renewable energy integration and demand response optimization",
        solution: "Built intelligent grid management platform with renewable energy forecasting, demand optimization, and real-time monitoring",
        results: {
            performance: "150%",
            efficiency: "70%",
            cost: "60%",
            time: "80%"
        },
        metrics: [
            { label: "Energy Efficiency", before: "65%", after: "89%", improvement: "37%" },
            { label: "Renewable Integration", before: "20%", after: "75%", improvement: "275%" },
            { label: "Grid Reliability", before: "92%", after: "99.5%", improvement: "8%" },
            { label: "Operational Costs", before: "$5.2M", after: "$2.1M", improvement: "60%" }
        ],
        technologies: ["Python", "Machine Learning", "IoT", "React", "AWS", "Real-time Analytics"],
        team: "22 developers",
        duration: "16 months",
        budget: "$5.5M",
        testimonial: "Zion's smart grid solution has revolutionized our energy management. We've significantly increased our renewable energy integration while improving grid reliability and reducing costs.",
        author: "Alex Johnson",
        role: "Chief Technology Officer",
        rating: 5,
        featured: false
    }
];
const industryStats = [
    { industry: "FinTech", projects: 45, successRate: "98%", avgROI: "340%" },
    { industry: "Healthcare", projects: 38, successRate: "96%", avgROI: "280%" },
    { industry: "E-commerce", projects: 52, successRate: "97%", avgROI: "420%" },
    { industry: "Manufacturing", projects: 41, successRate: "95%", avgROI: "310%" },
    { industry: "Education", projects: 29, successRate: "94%", avgROI: "290%" },
    { industry: "Energy", projects: 33, successRate: "97%", avgROI: "380%" }
];
const overallStats = [
    { icon: <Trophy className="w-6 h-6"/>, value: "238+", label: "Successful Projects" },
    { icon: <Users className="w-6 h-6"/>, value: "180+", label: "Happy Clients" },
    { icon: <Star className="w-6 h-6"/>, value: "4.9/5", label: "Client Rating" },
    { icon: <TrendingUp className="w-6 h-6"/>, value: "95%", label: "Success Rate" },
    { icon: <DollarSign className="w-6 h-6"/>, value: "320%", label: "Average ROI" },
    { icon: <Clock className="w-6 h-6"/>, value: "12 months", label: "Avg. Delivery Time" }
];
export function ClientSuccessStoriesSection() {
    const [selectedStory, setSelectedStory] = useState(null);
    const [hoveredIndustry, setHoveredIndustry] = useState(null);
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
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

export default ClientSuccessStoriesSection;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
