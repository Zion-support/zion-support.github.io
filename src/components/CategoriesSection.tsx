import React from 'react';
import { Link } from 'react-router-dom';

import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
    gradient: "from-zion-purple to-zion-purple-dark",
  },
  {
    title: "Talents",
=======
import { Briefcase, HardDrive, Lightbulb, Users, Brain, Monitor, Zap, Settings, Zap as ZapIcon } from "lucide-react";

const categories = [
  {
    title: "Micro SAAS Services",
    description: "AI-powered tools, business automation, and innovative solutions",
    icon: <ZapIcon className="w-10 h-10" />,
    link: "/micro-saas-services",
    color: "from-zion-cyan to-zion-blue",
    featured: true
  },
  {
    title: "AI & IT Services",
    description: "Professional IT consulting, development, and AI integration",
    icon: <Brain className="w-10 h-10" />,
    link: "/services",
    color: "from-zion-purple to-zion-purple-dark",
    featured: true
  },
  {
    title: "Talent Network",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/10",
    borderColor: "border-zion-cyan/20",
    features: ["Vetted Experts", "AI Matching", "Instant Connect"]
=======
    color: "from-emerald-500 to-green-600",
=======
    color: "from-zion-cyan to-zion-blue",
    featured: false
  },
  {
    title: "Equipment & Hardware",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-8 h-8" />,
    link: "/equipment",
import { Briefcase, HardDrive, Lightbulb, Users, Brain, Code, Shield, BarChart3, Link as LinkIcon, UserCheck } from "lucide-react";
import Workflow from "lucide-react/dist/esm/icons/workflow";

const categories = [
  {
    title: "AI Services",
    description: "AI-powered solutions for content generation, chatbots, analytics, and automation",
    icon: <Brain className="w-10 h-10" />,
    link: "/micro-saas-services?category=AI",
    color: "from-purple-500 to-pink-600",
    count: "12 Services"
  },
    color: "from-amber-500 to-orange-600",
    featured: false
  },
  {
    title: "Innovation Hub",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
=======
    color: "from-emerald-500 to-green-600",
    featured: false
  },
  {
    title: "AI Hiring Platform",
    description: "AI-powered recruitment and talent acquisition tools",
    icon: <ZapIcon className="w-10 h-10" />,
    link: "/zion-hire-ai",
    color: "from-zion-purple to-zion-purple-dark",
    featured: true
  }
];

const specialServices = [
  {
    title: "IT Onsite Services",
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
=======
import React from 'react';
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Brain, Shield, Globe, Database, Network, Zap, Leaf, Eye, CreditCard, ArrowRight, TrendingUp, Sparkles, Clock, Rocket, Target, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Enhanced Services",
    description: "AI, cybersecurity, cloud, and specialized IT solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-purple-500 to-indigo-600",
    features: ["AI Solutions", "Cybersecurity", "Cloud Services", "Data Analytics"]
  },
  {
    title: "Services Pricing",
    description: "Compare pricing and ROI for all our services",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/services-pricing",
    color: "from-green-500 to-emerald-600",
    features: ["Transparent Pricing", "ROI Calculator", "Custom Quotes", "Volume Discounts"]
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-services",
    color: "from-cyan-500 to-blue-600",
    features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Cybersecurity",
    description: "Advanced security and threat protection services",
    icon: <Shield className="w-10 h-10" />,
    link: "/cybersecurity-services",
    color: "from-red-500 to-pink-600",
    features: ["Threat Detection", "Penetration Testing", "Compliance", "Incident Response"]
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automation",
    icon: <Globe className="w-10 h-10" />,
    link: "/expanded-services",
    color: "from-blue-500 to-cyan-600",
    features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "Data Analytics",
    description: "Big data processing and business intelligence",
    icon: <Database className="w-10 h-10" />,
    link: "/expanded-services",
    color: "from-emerald-500 to-green-600",
    features: ["Big Data", "Business Intelligence", "Data Visualization", "Predictive Models"]
  },
];

const specialServices = [
  {
    title: "Comprehensive Services",
    link: "/enhanced-services",
    icon: <Briefcase className="w-4 h-4" />
  },
  {
    title: "Services Pricing",
    link: "/services-pricing",
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    title: "AI Services",
    link: "/ai-services",
    icon: <Brain className="w-4 h-4" />
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity-services",
    icon: <Shield className="w-4 h-4" />
  },
  {
    title: "Cloud Solutions",
    link: "/expanded-services",
    icon: <Globe className="w-4 h-4" />
  },
  {
    title: "Advanced Technology",
    link: "/expanded-services",
    icon: <Zap className="w-4 h-4" />
  }
];

const advancedCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    description: "Process automation, NLP, computer vision",
    link: "/expanded-services?category=AI%20%26%20Machine%20Learning",
    color: "from-purple-500 to-pink-600",
    features: ["Neural Networks", "Deep Learning", "Natural Language Processing"]
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    description: "Zero-trust, threat detection, compliance",
    link: "/expanded-services?category=Cybersecurity",
    color: "from-red-500 to-orange-600",
    features: ["Zero Trust", "Threat Intelligence", "SOC Services"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe className="w-6 h-6" />,
    description: "Multi-cloud, automation, orchestration",
    link: "/expanded-services?category=Cloud%20%26%20DevOps",
    color: "from-blue-500 to-cyan-600",
    features: ["Multi-Cloud", "Infrastructure as Code", "Monitoring"]
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    description: "Big data, BI, predictive analytics",
    link: "/expanded-services?category=Data%20%26%20Analytics",
    color: "from-green-500 to-emerald-600",
    features: ["Data Warehousing", "ETL Pipelines", "Real-time Analytics"]
  },
  {
    title: "IoT & Edge Computing",
    icon: <Network className="w-6 h-6" />,
    description: "Connected devices, real-time processing",
    link: "/expanded-services?category=IoT%20%26%20Edge%20Computing",
    color: "from-indigo-500 to-purple-600",
    features: ["IoT Platforms", "Edge Computing", "Sensor Networks"]
  },
  {
    title: "Blockchain & Web3",
    icon: <Zap className="w-6 h-6" />,
    description: "Smart contracts, decentralized solutions",
    link: "/expanded-services?category=Blockchain%20%26%20Web3",
    color: "from-yellow-500 to-orange-600",
    features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
  },
  {
    title: "Quantum Computing",
    icon: <Leaf className="w-6 h-6" />,
    description: "Quantum algorithms, optimization",
    link: "/expanded-services?category=Quantum%20Computing",
    color: "from-teal-500 to-blue-600",
    features: ["Quantum Algorithms", "Optimization", "Simulation"]
  },
  {
    title: "AR/VR & Metaverse",
    icon: <Eye className="w-6 h-6" />,
    description: "Immersive experiences, virtual worlds",
    link: "/expanded-services?category=AR%2FVR%20%26%20Metaverse",
    color: "from-pink-500 to-rose-600",
    features: ["Virtual Reality", "Augmented Reality", "3D Modeling"]
  },
  {
    title: "FinTech & Digital Banking",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Digital banking, payments, lending",
    link: "/expanded-services?category=FinTech%20%26%20Digital%20Banking",
    color: "from-blue-600 to-indigo-600",
    features: ["Digital Banking", "Payment Systems", "Lending Platforms"]
=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  },
  {
    title: "Pricing & Plans",
    link: "/pricing"
=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
=======
    link: "/it-onsite-services",
    description: "Global IT support and consulting"
  },
  {
    title: "Micro SAAS Solutions",
    link: "/micro-saas-services",
    description: "Complete suite of business solutions"
  },
  {
    title: "AI Development",
    link: "/zion-hire-ai",
    description: "Custom AI solutions and platforms"
=======
=======
    title: "Micro SAAS Services",
    link: "/micro-saas-services"
=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  },
  {
    title: "Services Pricing",
    link: "/services-pricing"
    title: "Enhanced Services",
    link: "/enhanced-services"
=======
    title: "Advanced AI Services",
    link: "/advanced-services"
  },
  {
    title: "Services Comparison",
    link: "/services-comparison"
    title: "Cybersecurity",
    link: "/cybersecurity"
=======
    link: "/it-onsite-services",
    description: "Global IT support and onsite technical services"
  },
  {
    title: "AI Strategy Consulting",
    link: "/category/ai-services",
    description: "Transform your business with AI implementation"
  },
  {
    title: "Cybersecurity Assessment",
    link: "/category/security-services",
    description: "Comprehensive security audits and protection"
  },
  {
    title: "Cloud Migration",
    link: "/category/cloud-services",
    description: "Seamless cloud infrastructure transition"
=======
=======
    title: "Cloud Services",
    link: "/cloud-services"
  },
  {
    title: "Data Analytics Services",
    link: "/data-analytics-services"
=======
    title: "Micro SAAS Services",
    link: "/micro-saas-services"
=======
=======
    title: "Comprehensive Services",
    link: "/comprehensive-services"
=======
    link: "/it-onsite-services",
    description: "Global IT support and maintenance"
  },
  {
    title: "Cloud Solutions",
    link: "/services",
    description: "Scalable cloud infrastructure"
  },
  {
    title: "Cybersecurity",
    link: "/micro-saas-services",
    description: "Advanced threat protection"
  }
];

interface CategoriesSectionProps extends React.HTMLAttributes<HTMLElement> {
  showTitle?: boolean;
  className?: string;
}

    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate">
=======
export function CategoriesSection({ showTitle = true, className, style, ...props }: CategoriesSectionProps) {
  return (
    <section
      className={cn("py-20 bg-zion-blue", className)}
      style={style}
      {...props}
    >
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Ecosystem</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation solutions
            </p>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
=======
            <GradientHeading>Explore Our Services</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of micro SAAS services, IT solutions, and innovative technology platforms
            </p>
            <div className="mt-6">
              <span className="inline-block bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full text-sm border border-zion-purple/30">
                ✨ {categories.length} Service Categories • 73+ Solutions Available
              </span>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
=======
        {/* Featured Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <Link 
                key={category.title} 
                to={category.link} 
                className="group block"
              >
                <div className="rounded-xl overflow-hidden h-full border-2 border-zion-blue-light bg-zion-blue-dark p-8 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-zion-slate-light text-lg leading-relaxed">{category.description}</p>
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-purple-light transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Regular Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularCategories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
=======
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">{category.title}</h3>
                <p className="text-zion-slate-light group-hover:text-zion-cyan/80 transition-colors">{category.description}</p>
=======
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-7 h-7 text-zion-cyan" />
              <span className="text-zion-cyan text-base font-semibold bg-zion-cyan/10 px-4 py-2 rounded-full">Explore Categories</span>
              <Sparkles className="w-7 h-7 text-zion-cyan" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Discover Our Ecosystem</h2>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive tech services, talent, equipment, and innovation solutions
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
              aria-label={`Explore ${category.title} - ${category.description}`}
            >
              <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark/90">
=======
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-zion-purple/20">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
=======
              <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20 backdrop-blur-sm">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
=======
              <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/60 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">{category.title}</h3>
                <p className="text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors duration-300">{category.description}</p>
                
                {/* Hover indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-zion-cyan text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">{category.description}</p>
                  
                  {/* Feature tags */}
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        <span className="text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
=======
        <div className="mb-8">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Service Categories</h3>
=======
        {/* Special Services */}
        <div className="mb-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Specialized Solutions</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                </h4>
                <p className="text-zion-slate-light text-sm">
                  {service.description}
                </p>
=======
                className="group px-6 py-4 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-xl text-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20"
              >
                <div className="text-center">
                  <div className="font-semibold text-lg mb-1">{service.title}</div>
                  <div className="text-sm text-zion-slate-light opacity-80">{service.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/categories" 
            className="group inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-light transition-colors pb-1 hover:text-zion-cyan-light"
          >
            <span className="font-medium">View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
=======
                className="px-6 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/40 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
              >
                {service.icon}
                {service.title}
=======
                className="group px-6 py-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/20"
              >
                <div className="text-center">
                  <div className="font-semibold mb-1">{service.title}</div>
                  <div className="text-xs text-zion-slate-light opacity-80">{service.description}</div>
                </div>
              </Link>
            ))}
              to="/comprehensive-services"
              className="px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark border border-zion-purple/50 hover:border-zion-purple text-white transition-all duration-300"
            >
              View All Services
            </Link>
=======
          </div>
        </div>
        
            to="/micro-saas-services" 
            className="inline-flex items-center text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors group"
          >
            View All Services
            <div className="ml-2 w-5 h-5 bg-zion-cyan/20 rounded-full flex items-center justify-center group-hover:bg-zion-cyan/40 transition-colors duration-300">
              <div className="w-2 h-2 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></div>
            </div>
=======
        <div className="mt-16 flex justify-center">
          <Link 
            to="/categories" 
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/30 hover:scale-105"
          >
            Explore All Categories
            <BarChart3 className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
=======
        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link 
            to="/micro-saas-services" 
            className="inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-dark transition-colors text-lg font-semibold pb-1"
          >
            Explore All Services
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}