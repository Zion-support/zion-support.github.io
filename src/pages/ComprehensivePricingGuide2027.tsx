import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Brain, 
  Cloud, 
  Cpu, 
  Heart, 
  ShoppingCart, 
  Rocket, 
  Target, 
  Globe, 
  Lock, 
  BarChart3,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Settings,
  Workflow,
  Database,
  Smartphone,
  Monitor,
  Activity,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensivePricingGuide2027() {
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Business Intelligence",
          starter: { price: "$2,999", features: ["Basic ML models", "Standard analytics", "5 users", "Email support"] },
          professional: { price: "$5,999", features: ["Advanced ML models", "Custom dashboards", "25 users", "Priority support", "API access"] },
          enterprise: { price: "$12,999", features: ["Custom AI models", "Unlimited users", "Dedicated support", "On-premise option", "SLA guarantees"] }
        },
        {
          name: "AI Workflow Orchestrator",
          starter: { price: "$299", features: ["Up to 10 workflows", "Basic AI integration", "5 team members", "Standard support"] },
          professional: { price: "$799", features: ["Up to 50 workflows", "Advanced AI capabilities", "Unlimited team", "Priority support", "Custom integrations"] },
          enterprise: { price: "Custom", features: ["Unlimited workflows", "Custom AI models", "On-premise deployment", "Dedicated support", "SLA guarantees"] }
        },
        {
          name: "AI Data Governance",
          starter: { price: "$1,299", features: ["Up to 10TB data", "Basic AI classification", "100 users", "Standard compliance"] },
          professional: { price: "$2,999", features: ["Up to 100TB data", "Advanced AI capabilities", "Unlimited users", "Full compliance automation", "Custom integrations"] },
          enterprise: { price: "Custom", features: ["Unlimited data", "Custom AI models", "On-premise deployment", "Dedicated support", "Custom frameworks"] }
        },
        {
          name: "AI Customer Success Platform",
          starter: { price: "$799", features: ["Up to 1,000 customers", "Basic AI insights", "Email automation", "Standard support"] },
          professional: { price: "$1,999", features: ["Up to 10,000 customers", "Advanced AI capabilities", "Multi-channel automation", "Priority support", "Custom success journeys"] },
          enterprise: { price: "Custom", features: ["Unlimited customers", "Custom AI models", "White-label solution", "Dedicated support", "Custom integrations"] }
        }
      ]
    },
    {
      name: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Cloud DevOps",
          starter: { price: "$1,999", features: ["Basic CI/CD", "Standard monitoring", "5 environments", "Email support"] },
          professional: { price: "$4,999", features: ["Advanced CI/CD", "Custom monitoring", "25 environments", "Priority support", "Custom integrations"] },
          enterprise: { price: "$12,999", features: ["Custom pipelines", "Unlimited environments", "Dedicated support", "On-premise option", "SLA guarantees"] }
        },
        {
          name: "Edge Computing Platform",
          starter: { price: "$499", features: ["Up to 5 edge nodes", "Basic monitoring", "100GB bandwidth", "Standard support"] },
          professional: { price: "$1,999", features: ["Up to 25 edge nodes", "Advanced monitoring", "1TB bandwidth", "Priority support", "Custom domains"] },
          enterprise: { price: "Custom", features: ["Unlimited edge nodes", "Custom monitoring", "Unlimited bandwidth", "Dedicated support", "On-premise options"] }
        },
        {
          name: "Cloud FinOps Optimizer",
          starter: { price: "$799", features: ["Basic cost analysis", "Standard optimization", "5 cloud accounts", "Email support"] },
          professional: { price: "$1,999", features: ["Advanced cost analysis", "Custom optimization", "25 cloud accounts", "Priority support", "Custom integrations"] },
          enterprise: { price: "$4,999", features: ["Custom cost models", "Unlimited accounts", "Dedicated support", "On-premise option", "SLA guarantees"] }
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "AI Lead Scoring",
          starter: { price: "$399", features: ["Basic ML scoring", "Up to 1,000 leads", "Standard analytics", "Email support"] },
          professional: { price: "$999", features: ["Advanced ML scoring", "Up to 10,000 leads", "Custom analytics", "Priority support", "API access"] },
          enterprise: { price: "$2,499", features: ["Custom ML models", "Unlimited leads", "Custom integrations", "Dedicated support", "SLA guarantees"] }
        },
        {
          name: "Website AI Chatbot",
          starter: { price: "$199", features: ["Basic chatbot", "Standard responses", "1 website", "Email support"] },
          professional: { price: "$599", features: ["Advanced chatbot", "Custom responses", "5 websites", "Priority support", "Custom integrations"] },
          enterprise: { price: "$1,499", features: ["Custom AI models", "Unlimited websites", "White-label option", "Dedicated support", "SLA guarantees"] }
        },
        {
          name: "RAG Search",
          starter: { price: "$299", features: ["Basic search", "Up to 10GB data", "Standard citations", "Email support"] },
          professional: { price: "$799", features: ["Advanced search", "Up to 100GB data", "Custom citations", "Priority support", "API access"] },
          enterprise: { price: "$1,999", features: ["Custom search models", "Unlimited data", "Custom integrations", "Dedicated support", "SLA guarantees"] }
        },
        {
          name: "MLOps Pipeline",
          starter: { price: "$599", features: ["Basic pipeline", "Standard monitoring", "5 models", "Email support"] },
          professional: { price: "$1,499", features: ["Advanced pipeline", "Custom monitoring", "25 models", "Priority support", "Custom integrations"] },
          enterprise: { price: "$3,999", features: ["Custom pipeline", "Unlimited models", "On-premise option", "Dedicated support", "SLA guarantees"] }
        }
      ]
    },
    {
      name: "Digital Transformation",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "Digital Twin",
          starter: { price: "$3,999", features: ["Basic 3D modeling", "Standard monitoring", "5 assets", "Email support"] },
          professional: { price: "$8,999", features: ["Advanced 3D modeling", "Custom monitoring", "25 assets", "Priority support", "Custom integrations"] },
          enterprise: { price: "$19,999", features: ["Custom 3D models", "Unlimited assets", "On-premise option", "Dedicated support", "SLA guarantees"] }
        },
        {
          name: "IoT & Edge Computing",
          starter: { price: "$2,499", features: ["Basic device management", "Standard edge processing", "100 devices", "Email support"] },
          professional: { price: "$5,999", features: ["Advanced device management", "Custom edge processing", "1,000 devices", "Priority support", "Custom integrations"] },
          enterprise: { price: "$14,999", features: ["Custom device management", "Unlimited devices", "On-premise option", "Dedicated support", "SLA guarantees"] }
        },
        {
          name: "Blockchain Solutions",
          starter: { price: "$4,999", features: ["Basic smart contracts", "Standard security", "1 network", "Email support"] },
          professional: { price: "$11,999", features: ["Advanced smart contracts", "Custom security", "5 networks", "Priority support", "Custom integrations"] },
          enterprise: { price: "$24,999", features: ["Custom blockchain", "Unlimited networks", "On-premise option", "Dedicated support", "SLA guarantees"] }
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Deploy solutions in weeks, not months"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Grow with your business needs"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 technical support and guidance"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our competitive pricing for AI, IT, and micro SaaS services. Transparent pricing with flexible plans for every business size and need."
        canonical="/pricing"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing 2027
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Comprehensive
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Pricing Guide
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              Transparent, competitive pricing for all our AI, IT, and micro SaaS services. Choose the plan that fits your business needs and budget.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Pricing?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We offer competitive pricing with enterprise-grade features and exceptional support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Service Pricing</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Competitive pricing for every business size and requirement
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                    <p className="text-slate-300 text-lg">Comprehensive pricing for all service tiers</p>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left py-4 px-6 text-slate-300 font-semibold">Service</th>
                        <th className="text-center py-4 px-6 text-slate-300 font-semibold">Starter</th>
                        <th className="text-center py-4 px-6 text-slate-300 font-semibold">Professional</th>
                        <th className="text-center py-4 px-6 text-slate-300 font-semibold">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.services.map((service, serviceIndex) => (
                        <tr key={serviceIndex} className="border-b border-slate-700/50">
                          <td className="py-4 px-6">
                            <h4 className="font-semibold text-lg">{service.name}</h4>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="text-2xl font-bold text-blue-400 mb-2">{service.starter.price}</div>
                            <ul className="text-sm text-slate-300 space-y-1">
                              {service.starter.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center justify-center">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="text-2xl font-bold text-green-400 mb-2">{service.professional.price}</div>
                            <ul className="text-sm text-slate-300 space-y-1">
                              {service.professional.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center justify-center">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="text-2xl font-bold text-purple-400 mb-2">{service.enterprise.price}</div>
                            <ul className="text-sm text-slate-300 space-y-1">
                              {service.enterprise.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center justify-center">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to get started? Contact our team for a custom quote or consultation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300">
                {contactInfo.phone}
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">
                {contactInfo.email}
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-slate-300 text-sm">{contactInfo.address}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Website</h3>
              <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
                ziontechgroup.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our team for a custom quote tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
