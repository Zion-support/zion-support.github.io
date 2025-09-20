import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Shield, Users, TrendingUp, CheckCircle, ArrowRight, Star, Award } from 'lucide-react';
const highlights = [
    {
        icon: Brain,
        title: 'AI-Powered Intelligence',
        description: 'Advanced machine learning algorithms that continuously learn and adapt to provide smarter solutions.',
        features: ['Predictive Analytics', 'Smart Recommendations', 'Automated Workflows'],
        color: 'from-zion-purple to-zion-purple-dark',
        bgColor: 'bg-zion-purple/10',
        borderColor: 'border-zion-purple/20'
    },
    {
        icon: Globe,
        title: 'Global Network',
        description: 'Connect with professionals and businesses from over 150 countries worldwide.',
        features: ['Multi-language Support', 'Local Expertise', '24/7 Availability'],
        color: 'from-zion-cyan to-zion-cyan-dark',
        bgColor: 'bg-zion-cyan/10',
        borderColor: 'border-zion-cyan/20'
    },
    {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',
        features: ['Data Protection', 'Access Control', 'Audit Trails'],
        color: 'from-zion-blue to-zion-blue-dark',
        bgColor: 'bg-zion-blue/10',
        borderColor: 'border-zion-blue/20'
    }
];
const achievements = [
    { icon: Award, number: '50+', label: 'Industry Awards', color: 'text-yellow-400' },
    { icon: Users, number: '1M+', label: 'Active Users', color: 'text-zion-cyan' },
    { icon: TrendingUp, number: '300%', label: 'Growth Rate', color: 'text-green-400' },
    { icon: Star, number: '4.9/5', label: 'User Rating', color: 'text-zion-purple' }
];
const technologies = [
    'Machine Learning', 'Blockchain', 'Cloud Computing', 'IoT', 'Cybersecurity', 'Data Analytics'
];
export function FeatureHighlights() {
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
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const achievementVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };
    const techVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };
    return (<section className="py-20 bg-gradient-to-b from-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan rounded-full blur-3xl"></div>
      </div>

export default FeatureHighlights;
