import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
=======
import MainLayout from '../src/components/layout/MainLayout';
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  Database, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Globe,
  BarChart3
} from 'lucide-react';
import Layout from '../components/Layout';

const cloudServices = [
  {
    title: "Cloud Migration",
    description: "Seamless migration to AWS, Azure, or Google Cloud Platform",
    icon: Cloud,
    features: [
      "Assessment & Planning",
      "Data Migration",
      "Application Migration",
      "Infrastructure Setup",
      "Security Configuration",
      "Performance Optimization"
    ],
    price: "Starting at $2,500/month"
  },
  {
    title: "Container Orchestration",
    description: "Kubernetes and Docker solutions for scalable applications",
    icon: Server,
    features: [
      "Kubernetes Setup",
      "Docker Containerization",
      "Auto-scaling",
      "Load Balancing",
      "Service Mesh",
      "Monitoring & Logging"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "Serverless Architecture",
    description: "Build and deploy serverless applications with maximum efficiency",
    icon: Zap,
    features: [
      "AWS Lambda Functions",
      "Azure Functions",
      "Google Cloud Functions",
      "API Gateway Setup",
      "Event-driven Architecture",
      "Cost Optimization"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "Cloud Security",
    description: "Comprehensive security solutions for your cloud infrastructure",
    icon: Shield,
    features: [
      "Identity & Access Management",
      "Network Security",
      "Data Encryption",
      "Compliance Auditing",
      "Threat Detection",
      "Security Monitoring"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "Database Solutions",
    description: "Managed database services and optimization",
    icon: Database,
    features: [
      "Database Migration",
      "Performance Tuning",
      "Backup & Recovery",
      "High Availability",
      "Scaling Solutions",
      "Monitoring & Alerts"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment and continuous integration pipelines",
    icon: Settings,
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Automated Testing",
      "Deployment Automation",
      "Monitoring & Alerts",
      "Version Control"
    ],
    price: "Starting at $1,800/month"
  }
];

const cloudProviders = [
  {
    name: "Amazon Web Services",
    description: "Comprehensive cloud services with global reach",
    icon: "☁️",
    features: ["EC2, S3, RDS", "Lambda Functions", "CloudFront CDN", "Route 53 DNS"]
  },
  {
    name: "Microsoft Azure",
    description: "Enterprise-grade cloud platform with hybrid capabilities",
    icon: "🔵",
    features: ["Virtual Machines", "Azure Functions", "Cosmos DB", "Azure Active Directory"]
  },
  {
    name: "Google Cloud Platform",
    description: "Advanced AI and machine learning capabilities",
    icon: "🔍",
    features: ["Compute Engine", "Cloud Functions", "BigQuery", "AI/ML Services"]
  }
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified cloud architects with years of experience",
    icon: "👥"
  },
  {
    title: "Cost Optimization",
    description: "Reduce cloud costs by up to 40% with our optimization strategies",
    icon: "💰"
  },
  {
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring and support for your cloud infrastructure",
    icon: "🛡️"
  },
  {
    title: "Scalable Solutions",
    description: "Built to grow with your business from startup to enterprise",
    icon: "📈"
  }
];

export default function CloudSolutionsPage() {
  return (
    <Layout
      title="Cloud Solutions - Zion Tech Group"
      description="Comprehensive cloud solutions including migration, containerization, serverless architecture, and DevOps. Transform your business with scalable cloud infrastructure."
      keywords="cloud solutions, AWS, Azure, Google Cloud, migration, containerization, serverless, DevOps"
      canonical="https://ziontechgroup.com/cloud-solutions"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Scalable 
              <span className="text-cyan-400"> Cloud Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with our comprehensive cloud solutions. 
              From migration to optimization, we help you leverage the full power 
              of cloud computing for maximum efficiency and growth.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <service.icon className="w-12 h-12 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Providers We Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're certified partners with all major cloud providers to give you the best solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <motion.div 
                key={index}
                className="text-center p-8 rounded-lg border-2 border-gray-200 hover:border-cyan-300 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{provider.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{provider.name}</h3>
                <p className="text-gray-600 mb-6">{provider.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {provider.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Cloud Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their cloud needs. 
            Let's discuss how we can help accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}