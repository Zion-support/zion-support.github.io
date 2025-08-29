import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  TrendingUp,
  Clock
} from 'lucide-react';

interface ServiceCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  count: number;
  color: string;
  features: string[];
  stats: { label: string; value: string; icon: React.ComponentType<any> }[];
  gradient: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    name: "AI & Machine Learning",
    description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions",
    icon: Brain,
    href: "/ai-services",
    count: 25,
    color: "from-cyan-500 to-blue-600",
    gradient: "from-cyan-500/20 to-blue-500/20",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Automated Decision Making",
      "Process Optimization"
    ],
    stats: [
      { label: "Accuracy Rate", value: "96%", icon: Star },
      { label: "ROI Increase", value: "400%", icon: TrendingUp },
      { label: "Time Savings", value: "80%", icon: Clock }
    ]
  },
  {
    name: "Cloud & DevOps",
    description: "Build, deploy, and scale your applications with enterprise-grade cloud infrastructure",
    icon: Cloud,
    href: "/services/cloud-devops",
    count: 18,
    color: "from-green-500 to-emerald-600",
    gradient: "from-green-500/20 to-emerald-500/20",
    features: [
      "CI/CD Automation",
      "Infrastructure as Code",
      "Container Orchestration",
      "Multi-Cloud Strategy",
      "Performance Optimization"
    ],
    stats: [
      { label: "Deployment Speed", value: "10x", icon: Rocket },
      { label: "Cost Reduction", value: "60%", icon: TrendingUp },
      { label: "Uptime SLA", value: "99.99%", icon: CheckCircle }
    ]
  },
  {
    name: "Cybersecurity",
    description: "Protect your digital assets with advanced security protocols and threat intelligence",
    icon: Shield,
    href: "/services/ai-compliance-copilot",
    count: 15,
    color: "from-red-500 to-orange-600",
    gradient: "from-red-500/20 to-orange-500/20",
    features: [
      "Threat Detection & Response",
      "Zero Trust Architecture",
      "Compliance Management",
      "Security Auditing",
      "Incident Response"
    ],
    stats: [
      { label: "Threat Detection", value: "99.9%", icon: Shield },
      { label: "Response Time", value: "<5min", icon: Clock },
      { label: "Compliance Rate", value: "100%", icon: CheckCircle }
    ]
  },
  {
    name: "Edge Computing & IoT",
    description: "Leverage ultra-low latency edge computing for real-time data processing",
    icon: Zap,
    href: "/services/edge-computing-platform",
    count: 12,
    color: "from-blue-500 to-purple-600",
    gradient: "from-blue-500/20 to-purple-500/20",
    features: [
      "Real-time Processing",
      "Low Latency Networks",
      "IoT Integration",
      "Edge AI Deployment",
      "Scalable Architecture"
    ],
    stats: [
      { label: "Latency Reduction", value: "90%", icon: Zap },
      { label: "Processing Speed", value: "100x", icon: Rocket },
      { label: "Cost Efficiency", value: "70%", icon: TrendingUp }
    ]
  },
  {
    name: "Data & Analytics",
    description: "Unlock insights from your data with advanced analytics and visualization",
    icon: Globe,
    href: "/services/ai-data-governance",
    count: 20,
    color: "from-purple-500 to-pink-600",
    gradient: "from-purple-500/20 to-pink-500/20",
    features: [
      "Big Data Processing",
      "Real-time Analytics",
      "Data Visualization",
      "Predictive Modeling",
      "Data Governance"
    ],
    stats: [
      { label: "Data Processing", value: "1000x", icon: Rocket },
      { label: "Insight Generation", value: "24/7", icon: Clock },
      { label: "Accuracy Rate", value: "95%", icon: Star }
    ]
  },
  {
    name: "Customer Experience",
    description: "Deliver exceptional customer experiences with AI-powered engagement platforms",
    icon: Heart,
    href: "/services/ai-customer-success-platform",
    count: 10,
    color: "from-yellow-500 to-orange-600",
    gradient: "from-yellow-500/20 to-orange-500/20",
    features: [
      "Customer Analytics",
      "Personalization Engine",
      "Omnichannel Support",
      "Sentiment Analysis",
      "Retention Optimization"
    ],
    stats: [
      { label: "Customer Satisfaction", value: "98%", icon: Heart },
      { label: "Engagement Rate", value: "300%", icon: TrendingUp },
      { label: "Retention Rate", value: "85%", icon: Users }
    ]
  }
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Explore Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Service Categories</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to address every aspect of your digital transformation journey
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-slate-400 text-sm font-medium">
                        {category.count} Services Available
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {category.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="mb-6">
                    <div className="grid grid-cols-3 gap-4">
                      {category.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <stat.icon className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-slate-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link 
                      to={category.href}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105"
                    >
                      Explore Services
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-slate-300 text-lg mb-6">
            Can't find what you're looking for? Let's discuss your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
