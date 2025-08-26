<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Sparkles, Users, Building, Rocket, Brain, Shield, Cpu, Globe, Zap, Target, Lightbulb, Code, Database, Network, Cloud, Lock, BarChart3, Palette, Smartphone, Server } from 'lucide-react';

export const FeatureHighlights = () => {
  const highlightsData = [
    {
      title: "Enterprise Solutions",
      icon: <Building className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      features: [
        "AI-powered business process automation",
        "Enterprise-grade security and compliance",
        "Scalable cloud infrastructure solutions",
        "Advanced analytics and reporting tools"
      ]
    },
    {
      title: "Startup & SMB",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      features: [
        "Cost-effective technology solutions",
        "Rapid prototyping and MVP development",
        "Growth-focused digital transformation",
        "Flexible scaling options"
      ]
    },
    {
      title: "Developers & Engineers",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      features: [
        "Advanced development tools and APIs",
        "AI-powered code assistance",
        "DevOps and CI/CD automation",
        "Performance optimization tools"
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
      title: "Micro SAAS Solutions",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      features: [
        "AI-powered content generation and code assistance tools",
        "Cloud migration and cybersecurity audit services",
        "Custom software development and integration",
        "24/7 technical support and maintenance"
      ]
    }
  ];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Advanced algorithms connect you with the perfect talent and services",
    color: "from-zion-purple to-zion-purple-dark"
  },
  {
    icon: Users,
    title: "Global Talent Network",
    description: "Access to verified professionals from around the world",
    color: "from-zion-cyan to-zion-cyan-dark"
  },
  {
    icon: Globe,
    title: "24/7 Global Services",
    description: "IT support and technical services available worldwide anytime",
    color: "from-zion-blue to-zion-blue-dark"
  },
  {
    icon: Shield,
    title: "Verified & Secure",
    description: "All users and services are thoroughly vetted and secured",
    color: "from-zion-green to-zion-green-dark"
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Get started in minutes with our streamlined onboarding",
    color: "from-zion-orange to-zion-orange-dark"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track success metrics and optimize your projects",
    color: "from-zion-pink to-zion-pink-dark"
  }
];

const stats = [
  { label: "Countries Served", value: "150+", icon: Globe },
  { label: "Active Users", value: "50K+", icon: Users },
  { label: "Response Time", value: "<2hrs", icon: Clock },
  { label: "Success Rate", value: "98%", icon: Star }
];

export function FeatureHighlights() {
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
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
      }
    },
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
=======
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Zion</span>?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the future of tech services with our cutting-edge platform designed for 
            global collaboration and innovation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6350
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
<<<<<<< HEAD
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
=======
  const stats = [
    { label: "Countries Served", value: "150+", icon: Globe },
    { label: "Verified Talents", value: "10,000+", icon: Users },
    { label: "Success Rate", value: "98%", icon: Award },
    { label: "Response Time", value: "<2hrs", icon: Zap }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tailored Solutions for Everyone
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Whatever your role in the tech ecosystem, Zion offers specialized features and enterprise-grade solutions to help you succeed in the digital age
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-zion-purple/20 rounded-full">
                  <stat.icon className="h-6 w-6 text-zion-purple" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

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
=======
        {/* Trust indicators */}
        <div className="text-center mt-16 pt-16 border-t border-zion-purple/20">
          <h3 className="text-2xl font-bold text-white mb-6">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-zion-slate-light font-semibold">Fortune 500 Companies</div>
            <div className="text-zion-slate-light font-semibold">Government Agencies</div>
            <div className="text-zion-slate-light font-semibold">Startups & Scale-ups</div>
            <div className="text-zion-slate-light font-semibold">Educational Institutions</div>
          </div>
        </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
=======
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className="bg-zion-blue-light/10 backdrop-blur-sm p-8 rounded-2xl border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-zion-blue-light/10 backdrop-blur-sm rounded-3xl p-8 border border-zion-purple/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={statsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6350
      </div>
    </section>
  );
};
