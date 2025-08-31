import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Smartphone,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  RefreshCw,
  Target,
  Lightbulb,
  Rocket,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Layers,
  GitBranch,
  Monitor,
  Settings,
<<<<<<< HEAD
  Key,
  Users,
  Building2
} from 'lucide-react';

const CloudSolutions = () => {
=======
  Users
 } from 'lucide-react';
export default function CloudSolutions(...args[]):  {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const cloudServices = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure with minimal disruption and maximum efficiency.",
      features: ["Legacy System Migration", "Data Migration", "Application Modernization", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure designed for enterprise needs.",
      features: ["Auto-scaling", "Load Balancing", "High Availability", "Disaster Recovery"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Cloud Databases",
      description: "Managed database services with high performance and reliability.",
      features: ["Managed Databases", "Data Backup", "Replication", "Monitoring"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Cloud Networking",
      description: "Advanced networking solutions for cloud environments.",
      features: ["VPC Configuration", "CDN Services", "API Gateway", "Load Balancing"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud infrastructure.",
      features: ["Identity Management", "Encryption", "Compliance", "Threat Detection"],
      color: "from-yellow-500 to-orange-500"
    },
    {
<<<<<<< HEAD
      icon: <Zap className="w-12 h-12" />,
      title: "Serverless Computing",
      description: "Event-driven computing for scalable and cost-effective applications.",
      features: ["Function as a Service", "Event Processing", "Auto-scaling", "Pay-per-use"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const cloudProviders = [
    {
      name: "AWS",
      description: "Amazon Web Services - Comprehensive cloud platform",
      services: ["EC2", "S3", "Lambda", "RDS", "CloudFront"],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: "Azure",
      description: "Microsoft Azure - Enterprise cloud solutions",
      services: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "CDN"],
      icon: <Cloud className="w-8 h-8" />
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform - AI and data-focused cloud",
      services: ["Compute Engine", "Cloud Storage", "Cloud Functions", "BigQuery", "Cloud CDN"],
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "Multi-Cloud",
      description: "Hybrid and multi-cloud strategies",
      services: ["Cross-platform", "Hybrid Solutions", "Migration", "Optimization", "Management"],
      icon: <Layers className="w-8 h-8" />
    }
=======
      features["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Auto-scaling"]
    };
=======;
      icon: Zap,;
      title: "DevOps Automation",;
      description: "Streamline your development and deployment processes with automation",;
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Auto-scaling"];
    };
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  ];
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalability",
      description: "Scale resources up or down based on demand"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Cost Optimization",
      description: "Pay only for resources you use"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Enterprise-grade security and compliance"
    },
    {
<<<<<<< HEAD
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "High-performance infrastructure and global reach"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Flexibility",
      description: "Adapt quickly to changing business needs"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Monitoring",
      description: "Real-time monitoring and analytics"
    }
  ];

=======
      icon: Lock,
      title: "Enhanced Security",
      description: "Enterprise-grade security with advanced threat protection and compliance";
    },;
    {;
      icon: Users,;
      title: "24/7 Support",;
      description: "Round-the-clock expert support for your cloud infrastructure needs";
    };
  ];
  const technologies = [;
    { name: "AWS", logo: "AWS", description: "Amazon Web Services" },;
    { name: "Azure", logo: "Azure", description: "Microsoft Azure" },;
    { name: "GCP", logo: "GCP", description: "Google Cloud Platform" },;
    { name: "Kubernetes", logo: "K8s", description: "Container Orchestration" },;
    { name: "Docker", logo: "Docker", description: "Containerization" },;
    { name: "Terraform", logo: "TF", description: "Infrastructure as Code" };
  ];
  const containerVariants = {
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      };
    };
  };
  const itemVariants = {
  hidden: { opacity: 0,
  y: 20 
;
},;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: { duration: 0.6 };
    };
  };
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Solutions
=======
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Cloud Solutions for the{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Digital Age
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with scalable, secure, and cost-effective cloud solutions. 
              From migration to optimization, we help you leverage the full power of the cloud.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Get Cloud Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Services
=======
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial = {
  { opacity: 0,
  y: 30 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: 0.8,
  delay: 0.3 
}}
            >
              <motion.button
                className="group px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Cloud Services Grid */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Cloud Services
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cloud solutions designed for modern businesses
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
=======
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover = {
  { y: -5,
  scale: 1.02 
}}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Cloud Providers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Providers
=======
      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Cloud Solutions?
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work with leading cloud providers to deliver the best solutions for your needs
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{provider.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{provider.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{provider.description}</p>
                <ul className="space-y-1 text-xs">
                  {provider.services.map((service, idx) => (
                    <li key={idx} className="text-gray-400">
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Why organizations choose cloud solutions for their digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
=======
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our expertise spans the leading cloud platforms and tools, ensuring
              you get the best solution for your specific needs.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                <div className="w-20 h-20 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:border-zion-cyan/40 transition-colors duration-300">
                  <span className="text-zion-cyan font-bold text-lg">{tech.logo}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-zion-slate-light text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
=======
            initial = {
  { opacity: 0,
  y: 30 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how cloud solutions can transform your business operations, 
              improve scalability, and reduce costs.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Schedule Cloud Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/enterprise"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Enterprise Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
=======
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              Start Your Cloud Journey
            </motion.button>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
