import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield,
  Zap,
  Globe,
  Lock,
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
export default function CloudServices() {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency",
      features: [
        "Legacy System Assessment",
        "Migration Strategy Planning",
        "Data Migration & Validation",
        "Performance Optimization"
      ],
      icon: Cloud,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and operations with automated CI/CD pipelines and infrastructure management",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Automated Testing",
        "Deployment Automation"
      ],
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Container Orchestration",
      description: "Manage and scale containerized applications with Kubernetes and Docker expertise",
      features: [
        "Kubernetes Clusters",
        "Docker Containerization",
        "Service Mesh Implementation",
        "Auto-scaling Solutions"
      ],
      icon: Server,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Cloud Management",
      description: "Optimize costs and performance across multiple cloud providers",
      features: [
        "Multi-Cloud Strategy",
        "Cost Optimization",
        "Performance Monitoring",
        "Unified Management"
      ],
      icon: Globe,
      color: "from-orange-500 to-red-500"
    }
  ];
  const cloudPlatforms = [
    {
      name: "AWS",
      description: "Amazon Web Services solutions and optimization",
      icon: "☁️",
      features: ["EC2 & Lambda", "S3 & RDS", "CloudFormation", "CloudWatch"]
    },
    {
      name: "Azure",
      description: "Microsoft Azure cloud services and integration",
      icon: "🔷",
      features: ["Virtual Machines", "Azure DevOps", "Functions", "Monitor"]
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform services and AI integration",
      icon: "🔵",
      features: ["Compute Engine", "Cloud Run", "BigQuery", "AI Platform"]
    },
    {
      name: "Hybrid Cloud",
      description: "On-premises and cloud hybrid solutions",
      icon: "🔄",
      features: ["Private Cloud", "Public Cloud", "Edge Computing", "Data Sync"]
    }
  ];
  const benefits = [
    {
      icon: Zap,
      title: "Scalability",
      description: "Scale resources up or down based on demand"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security and compliance"
    },
    {
      icon: BarChart3,
      title: "Cost Efficiency",
      description: "Pay only for what you use with optimized resource allocation"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy applications worldwide with low latency"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Cloud & DevOps Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Scalable cloud solutions and DevOps automation to accelerate your digital transformation
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From cloud migration to container orchestration, we help businesses leverage the power 
              of cloud computing and DevOps practices for optimal performance and efficiency.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Cloud Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud and DevOps solutions designed for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 rounded-full mb-6 bg-gradient-to-r ${service.color}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Cloud Platforms Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expertise across major cloud providers and hybrid solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{platform.description}</p>
                
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Cloud & DevOps
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cloud-native solutions and DevOps practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale with Cloud & DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our cloud solutions can accelerate your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}