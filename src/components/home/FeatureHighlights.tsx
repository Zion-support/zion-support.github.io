<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
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
      ],
      stats: "60% Cost Reduction",
      cta: "Enterprise Solutions"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-zion-blue to-zion-blue-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group?
            </span>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
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
    </section>
  );
};
