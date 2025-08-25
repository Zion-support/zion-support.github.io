<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======

>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, TrendingUp, Users, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function FeatureHighlights() {
  const highlights = [
    {
      title: "For Talent Seekers",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      features: [
        "AI-powered talent matching based on your specific project requirements",
        "Verified profiles with skills validation and credential checking",
        "Transparent pricing and no hidden fees",
        "Direct communication with potential candidates",
        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI-matched applicants"
      ],
      stats: "95% Match Rate",
      cta: "Find Talent"
    },
    {
      title: "For Talent & Service Providers",
      icon: <Award className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      features: [
        "Create a professional profile showcasing your skills and experience",
        "Get matched with relevant projects that fit your expertise",
        "Secure payment processing with on-time disbursements",
        "Build your reputation through client reviews and ratings",
        "Access to enterprise clients and high-value projects",
        "Professional development resources and community support"
      ],
      stats: "40% Higher Earnings",
      cta: "Join as Provider"
    },
    {
      title: "For Enterprise Clients",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      features: [
        "White-labeled talent portal with your company branding",
        "Dedicated account management and priority support",
        "Custom talent pools and preferred provider networks",
        "Advanced analytics and reporting capabilities",
        "API access for seamless integration with your HR systems",
        "Customizable workflow and approval processes"
<<<<<<< HEAD
      ],
      stats: "60% Cost Reduction",
      cta: "Enterprise Solutions"
=======
      ]
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======

import React from 'react';
import { Check, Star, Shield, Zap, Users, Globe, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function FeatureHighlights() {
  const highlightsData = [
    {
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms that understand your needs and connect you with the perfect tech professionals.',
      features: [
        'Smart talent matching',
        'Skills-based recommendations',
        'Project compatibility scoring',
        'Real-time availability tracking'
      ],
      icon: <Zap className="h-8 w-8 text-zion-cyan" />,
      color: 'from-zion-purple/20 to-zion-blue/20',
      borderColor: 'border-zion-purple/30'
    },
    {
      title: 'Verified Professionals',
      description: 'Every talent on our platform is thoroughly vetted and verified for quality and reliability.',
      features: [
        'Background verification',
        'Skills assessment',
        'Portfolio review',
        'Client feedback system'
      ],
      icon: <Shield className="h-8 w-8 text-zion-purple" />,
      color: 'from-zion-cyan/20 to-zion-purple/20',
      borderColor: 'border-zion-cyan/30'
    },
    {
      title: 'Comprehensive Services',
      description: 'From development to infrastructure, we offer end-to-end technology solutions for your business.',
      features: [
        'Custom software development',
        'Cloud infrastructure',
        'Data analytics & AI',
        'Cybersecurity solutions'
      ],
      icon: <Code className="h-8 w-8 text-zion-blue" />,
      color: 'from-zion-blue/20 to-zion-cyan/20',
      borderColor: 'border-zion-blue/30'
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    }
  ];

=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Advanced machine learning algorithms that understand your needs and provide intelligent recommendations.',
    benefits: ['Smart matching', 'Predictive analytics', 'Automated workflows'],
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    borderColor: 'border-zion-purple/30'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with talent and services from over 150 countries worldwide, breaking geographical barriers.',
    benefits: ['150+ countries', '24/7 availability', 'Local expertise'],
    color: 'from-zion-cyan to-zion-cyan-dark',
    bgColor: 'bg-zion-cyan/10',
    borderColor: 'border-zion-cyan/30'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with enterprise-level compliance, ensuring your data and transactions are protected.',
    benefits: ['SOC 2 compliance', 'End-to-end encryption', 'GDPR compliant'],
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    borderColor: 'border-zion-blue/30'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times and real-time updates across all platforms.',
    benefits: ['<1s response time', 'Real-time sync', '99.9% uptime'],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30'
  }
];

const stats = [
  { label: 'Active Users', value: '50K+', icon: Users },
  { label: 'Success Rate', value: '98%', icon: TrendingUp },
  { label: 'Response Time', value: '<15min', icon: Clock },
  { label: 'Satisfaction', value: '4.9/5', icon: Star }
];

export function FeatureHighlights() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        staggerChildren: 0.2
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      }
    }
  };

  const itemVariants = {
<<<<<<< HEAD
<<<<<<< HEAD
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
<<<<<<< HEAD
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-xl max-w-4xl mx-auto leading-relaxed">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
=======
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Platform <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover how Zion Tech Group's platform serves different user types with tailored features and capabilities
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
<<<<<<< HEAD
          animate="visible"
=======
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
      }
    }
  };

  const cardVariants = {
<<<<<<< HEAD
=======
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

<<<<<<< HEAD
  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zion-cyan/5 rounded-full opacity-20"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
>>>>>>> origin/cursor/build-and-fix-errors-e276
        >
          {highlightsData.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-zion-blue-dark/90 to-zion-blue-dark border-zion-blue-light/30 hover:border-zion-purple/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/20 group overflow-hidden">
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Header with icon and stats */}
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {category.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-blue-light/20 rounded-full border border-zion-cyan/30">
                      <Star className="w-4 h-4 text-zion-cyan fill-current" />
                      <span className="text-zion-cyan text-sm font-semibold">{category.stats}</span>
                    </div>
                  </div>
                  
                  {/* Features list */}
                  <div className="flex-1 space-y-4 mb-6">
                    {category.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-zion-slate-light text-sm leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button className="w-full py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group-hover:shadow-zion-purple/50 flex items-center justify-center gap-2">
                      {category.cta}
                      <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
=======
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlightsData.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Card className={`h-full border-2 ${highlight.borderColor} bg-gradient-to-br from-zion-slate-dark to-zion-slate hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${highlight.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-white ${highlight.color} bg-gradient-to-r bg-clip-text`}>
                      {highlight.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {highlight.title}
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    {highlight.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

<<<<<<< HEAD
  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge technology with human expertise to deliver 
            exceptional results that drive your business forward.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlightsData.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Card className={`
                bg-gradient-to-br ${category.color} 
                border ${category.borderColor} 
                backdrop-blur-sm
                hover:shadow-2xl hover:shadow-zion-purple/20
                transition-all duration-300
                group-hover:border-opacity-60
                h-full
              `}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-zion-blue-dark/50 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-zion-slate-light leading-relaxed mb-6 group-hover:text-white transition-colors">
                    {category.description}
                  </p>

                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {category.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        variants={featureVariants}
                      >
                        <div className="flex-shrink-0 mr-3 mt-1">
                          <Check className="h-5 w-5 text-zion-cyan group-hover:text-zion-purple transition-colors" />
                        </div>
                        <span className="text-zion-slate-light leading-relaxed group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center group-hover:bg-zion-purple/40 transition-colors">
                      <ArrowRight className="w-4 h-4 text-zion-purple" />
                    </div>
                    <span className="text-xs text-zion-cyan font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">
                      Learn More
                    </span>
                  </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
                </CardContent>
              </Card>
            </motion.div>
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        </motion.div>
<<<<<<< HEAD
        
        {/* Bottom CTA */}
=======
        </div>

        {/* Call to action */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
=======
        </div>

        {/* Call to action */}
>>>>>>> origin/main
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm rounded-2xl p-8 border border-zion-purple/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Tech Experience?
            </h3>
            <p className="text-zion-slate-light mb-6 text-lg">
              Join the future of technology services and discover why thousands choose Zion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Started Free
              </button>
              <button className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const FeatureHighlights: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced machine learning algorithms that adapt and learn from your business patterns',
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-services',
      benefits: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Scalable, resilient cloud solutions built for modern business demands',
      color: 'from-purple-500 to-pink-500',
      link: '/cloud-devops-solutions',
      benefits: ['Auto-scaling', 'Multi-region', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and advanced threat protection',
      color: 'from-green-500 to-emerald-500',
      link: '/enterprise-solutions',
      benefits: ['SOC 2 Compliant', 'End-to-end Encryption', '24/7 Monitoring']
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized systems delivering sub-second response times and 99.9% uptime',
      color: 'from-yellow-500 to-orange-500',
      link: '/performance-solutions',
      benefits: ['Sub-second Response', '99.9% Uptime', 'Global CDN']
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with decades of combined industry experience',
      color: 'from-indigo-500 to-blue-500',
      link: '/about',
      benefits: ['Certified Experts', 'Industry Veterans', 'Continuous Training']
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Real-time analytics and actionable insights to drive business decisions',
      color: 'from-red-500 to-pink-500',
      link: '/analytics',
      benefits: ['Real-time Data', 'Custom Dashboards', 'Predictive Insights']
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-24 bg-gradient-to-b from-zion-blue to-zion-blue-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
=======
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark/30 to-zion-blue-dark/10">
      <div className="container mx-auto px-4">
        {/* Header */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
<<<<<<< HEAD
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group?
            </span>
<<<<<<< HEAD
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions 
            that drive real business value and accelerate your digital transformation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 h-full hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm text-zion-slate-light">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <Link
                    to={feature.link}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
=======
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">
              Why Choose Zion
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for the Future of Work
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of talent marketplace technology. 
            Our platform combines cutting-edge AI with human expertise to deliver 
            unparalleled results for businesses and professionals worldwide.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-blue/20 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-zion-cyan" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`p-8 rounded-2xl border ${feature.borderColor} ${feature.bgColor} hover:bg-opacity-20 transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-zion-purple/20">
                <div className="flex items-center gap-2 text-zion-cyan font-medium group-hover:text-zion-cyan-light transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transform transition-transform duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
<<<<<<< HEAD
=======
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations 
              with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5" />
                  Free Consultation
                </button>
              </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-609d
            </div>
          </div>
        </motion.div>
      </div>
=======
      </motion.div>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
          </div>
        </motion.div>
      </motion.div>
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-e276
    </section>
  );
};
=======
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center p-6 bg-zion-purple/10 border border-zion-purple/20 rounded-2xl hover:bg-zion-purple/20 transition-all duration-300">
            <Users className="h-12 w-12 text-zion-purple mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Global Network</h4>
            <p className="text-zion-slate-light text-sm">Access talent worldwide</p>
          </div>
          
          <div className="text-center p-6 bg-zion-cyan/10 border border-zion-cyan/20 rounded-2xl hover:bg-zion-cyan/20 transition-all duration-300">
            <Database className="h-12 w-12 text-zion-cyan mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Data-Driven</h4>
            <p className="text-zion-slate-light text-sm">Insights and analytics</p>
          </div>
          
          <div className="text-center p-6 bg-zion-blue/10 border border-zion-blue/20 rounded-2xl hover:bg-zion-blue/20 transition-all duration-300">
            <Globe className="h-12 w-12 text-zion-blue mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
            <p className="text-zion-slate-light text-sm">Always here to help</p>
          </div>
          
          <div className="text-center p-6 bg-zion-purple/10 border border-zion-purple/20 rounded-2xl hover:bg-zion-purple/20 transition-all duration-300">
            <Star className="h-12 w-12 text-zion-purple mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Premium Quality</h4>
            <p className="text-zion-slate-light text-sm">Excellence guaranteed</p>
          </div>
        </motion.div>
=======
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of businesses and professionals who trust Zion for their talent and service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Started Free
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-217b
      </div>
    </section>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
    </section>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
