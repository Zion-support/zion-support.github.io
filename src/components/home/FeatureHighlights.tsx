<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

export function FeatureHighlights(): any ({;
  className,;
  style,;
}: FeatureHighlightsProps) {;
  const highlightsData = [;
    {;
      title: 'For Talent Seekers',;
      features: [;
        'AI-powered talent matching based on your specific project requirements',;
        'Verified profiles with skills validation and credential checking',;
        'Transparent pricing and no hidden fees',;
        'Direct communication with potential candidates',;
        'Secure payment protection and dispute resolution',;
        'Post jobs and receive AI-matched applicants',;
      ],;
    },;
    {;
      title: 'For Talent & Service Providers',;
      features: [;
        'Create a professional profile showcasing your skills and experience',;
        'Get matched with relevant projects that fit your expertise',;
        'Secure payment processing with on-time disbursements',;
        'Build your reputation through client reviews and ratings',;
        'Access to enterprise clients and high-value projects',;
        'Professional development resources and community support',;
      ],;
    },;
    {;
      title: 'For Enterprise Clients',;
      features: [;
        'White-labeled talent portal with your company branding',;
        'Dedicated account management and priority support',;
        'Custom talent pools and preferred provider networks',;
        'Advanced analytics and reporting capabilities',;
        'API access for seamless integration with your HR systems',;
        'Customizable workflow and approval processes',;
      ],;
    },;
  ];

  return (

import React from 'react';
import { Check, Star, Shield, Zap, Users, Globe, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function FeatureHighlights() {
  const highlightsData = [
    {
<<<<<<< HEAD
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
    }
  ];

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

  const cardVariants = {
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
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

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

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
=======
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced machine learning algorithms that adapt and learn from your business patterns',
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-services',
      benefits: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      title: 'For Talent & Service Providers',
      features: [;
        'Create a professional profile showcasing your skills and experience',
        'Get matched with relevant projects that fit your expertise',
        'Secure payment processing with on - time disbursements',
        'Build your reputation through client reviews and ratings',
        'Access to enterprise clients and high - value projects',
        'Professional development resources and community support',
      ],
    },
    {

      title: "For Enterprise Clients",
      features: [

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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
<<<<<<< HEAD
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge technology with human expertise to deliver 
            exceptional results that drive your business forward.
          </p>
        </motion.div>

<<<<<<< HEAD
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
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                  </div>

                  <p className="text-zion-slate-light leading-relaxed mb-6 group-hover:text-white transition-colors">
                    {category.description}
                  </p>

<<<<<<< HEAD
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
=======
                  {/* Benefits List */}
                  <div className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm text-zion-slate-light">{benefit}</span>
                      </div>
                    ))}
                  </div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

        {/* Additional Features Grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
<<<<<<< HEAD
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
      </div>
    </section>
  );
}
=======
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
>>>>>>> origin/cursor/build-and-fix-errors-e276
    </section>
  );
};
=======
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightsData.map((category, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>

import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Check } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface FeatureHighlightsProps {;
  className?: string,;
  style?: React.CSSProperties;
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
