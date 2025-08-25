
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Settings, 
  Code, 
  Globe, 
  Zap, 
  Shield,
  LinkIcon,
  Brain,
  Rocket,
  Target,
  Star,
  Lightbulb
} from 'lucide-react';
import { GradientHeading } from './GradientHeading';

const categories = [
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions",
    icon: <Brain className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    link: "/ai-services",
    features: ["Neural Networks", "Computer Vision", "NLP", "Predictive Analytics"]
  },
  {
    title: "Micro SAAS",
    description: "Innovative software solutions and business automation tools",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/micro-saas-services",
    color: "from-emerald-500 to-green-600",
    features: ["AI Solutions", "Business Automation", "Cloud Services", "Enterprise Tools"]
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
<<<<<<< HEAD
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
=======
    features: ["AI Experts", "Developers", "Tech Specialists", "Consultants"]
  },
  {
    title: "Mobile Development",
    description: "iOS and Android applications",
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-blue to-zion-blue-dark",
    link: "/expanded-services?category=mobile-development",
    features: ["Native Apps", "Cross-Platform", "UI/UX", "App Store Optimization"]
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure and deployment solutions",
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    link: "/expanded-services?category=cloud-devops",
    features: ["AWS", "Docker", "Kubernetes", "CI/CD"]
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
  },
  {
    title: "Cybersecurity",
    description: "Protection and security services",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    link: "/expanded-services?category=cybersecurity",
    features: ["Penetration Testing", "Security Audits", "Incident Response", "Compliance"]
  },
  {
    title: "Data Science",
    description: "Analytics and insights solutions",
    icon: <Target className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    link: "/expanded-services?category=data-science",
    features: ["Big Data", "Business Intelligence", "Data Visualization", "Statistical Analysis"]
  },
  {
    title: "Blockchain & Web3",
    description: "Decentralized solutions and smart contracts",
    icon: <LinkIcon className="w-8 h-8" />,
    color: "from-teal-500 to-blue-600",
    link: "/expanded-services?category=blockchain-web3",
    features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
  },
  {
    title: "Enterprise Solutions",
    description: "Large-scale business applications",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    link: "/expanded-services?category=enterprise",
    features: ["ERP Systems", "CRM", "Workflow Automation", "Integration"]
  }
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    title: "Comprehensive Services",
    link: "/comprehensive-services"
=======
    title: "Services Overview",
    link: "/services-overview"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
  },
  {
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
    title: "AI Services",
    link: "/ai-services"
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    title: "Cybersecurity Services",
    link: "/cybersecurity-services"
  },
  {
    title: "Micro SAAS",
    link: "/micro-saas"
  },
  {
    title: "All Services",
    link: "/comprehensive-services"
  },
  {
    title: "Pricing",
    link: "/services-pricing"
  },
  {
    title: "Enterprise Solutions",
    link: "/enterprise-solutions"
  },
  {
    title: "Innovative Services",
    link: "/innovative-services"
=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
=======
    title: "Blockchain Solutions",
    link: "/blockchain-services"
  },
  {
    title: "IoT Platform",
    link: "/iot-services"
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity-services"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
  }
];

const serviceCategories = [
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and deployment automation",
    icon: <Cloud className="w-8 h-8" />,
    link: "/cloud-services",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Data & Analytics",
    description: "Big data processing, analytics, and business intelligence",
    icon: <Database className="w-8 h-8" />,
    link: "/data-analytics",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics",
    icon: <Cpu className="w-8 h-8" />,
    link: "/ai-solutions",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Cybersecurity",
    description: "Advanced threat protection and security compliance",
    icon: <LinkIcon className="w-8 h-8" />,
    link: "/cybersecurity-services",
    color: "from-red-500 to-pink-600",
  },
  {
    title: "IoT & Edge Computing",
    description: "Connected devices and edge processing solutions",
    icon: <TrendingUp className="w-8 h-8" />,
    link: "/iot-solutions",
    color: "from-orange-500 to-yellow-600",
  },
  {
    title: "Blockchain",
    description: "Distributed ledger technology and smart contracts",
    icon: <Sparkles className="w-8 h-8" />,
    link: "/blockchain",
    color: "from-indigo-500 to-purple-600",
  },
=======
    title: "AI Chatbot Builder",
    link: "/micro-saas-services#ai-chatbot-builder"
  },
  {
    title: "Cloud Migration Pro",
    link: "/micro-saas-services#cloud-migration-pro"
  },
  {
    title: "Cybersecurity Suite",
    link: "/micro-saas-services#cybersecurity-suite"
  }
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
];

export function CategoriesSection() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Categories
          </GradientHeading>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover comprehensive solutions across all major technology domains
          </p>
        </motion.div>

        {/* Main Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
<<<<<<< HEAD
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
=======
            <motion.div key={category.title} variants={itemVariants}>
              <Link to={category.link} className="group block">
                <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:scale-[1.02]">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                        <Star className="w-3 h-3 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan text-sm font-medium">Explore</span>
                    <div className="w-8 h-8 rounded-full bg-zion-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-4 h-4 text-zion-cyan" />
                    </div>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
              <p className="text-zion-slate-light text-sm mb-4">{category.description}</p>
              <Link 
                to={category.link}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group-hover:translate-x-1"
              >
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
<<<<<<< HEAD

        {/* Service Categories */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Specialized Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group-hover:translate-x-1"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Access Links */}
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link 
                  to={service.link}
                  className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 text-center"
                >
                  <span className="text-zion-slate-light group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {service.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
=======
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/comprehensive-services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <Rocket className="w-5 h-5" />
          </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
        </motion.div>
      </div>
    </section>
  );
}
