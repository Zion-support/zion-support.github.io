import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Code, Server, Lock, BarChart3, Rocket, Heart, Sparkles, Calculator, BookOpen, Lightbulb, HelpCircle, Cpu, Wifi, Smartphone, Monitor, HardDrive, Settings, FileText, Search, MessageSquare, Calendar, CreditCard, ShoppingCart, User, Building, MapPin, Headphones, Camera, Video, Music, Image, Download, Upload, Share, Edit, Trash2, Plus, Minus, X, Check, AlertTriangle, Info, ExternalLink, Menu, X as XIcon } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  const microSaasServices = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence with predictive analytics and automated insights",
      icon: BarChart3,
      features: ["Real-time data visualization", "Predictive analytics", "Custom reporting", "API integrations"],
      price: "$299/month",
      href: "/services/ai-analytics"
    },
    {
      title: "Smart Document Management",
      description: "AI-driven document processing, OCR, and intelligent search capabilities",
      icon: FileText,
      features: ["OCR & text extraction", "Smart categorization", "Advanced search", "Workflow automation"],
      price: "$199/month",
      href: "/services/document-management"
    },
    {
      title: "Customer Support Automation",
      description: "AI chatbot with natural language processing and multi-channel support",
      icon: MessageSquare,
      features: ["24/7 chatbot", "Multi-language support", "Ticket routing", "Analytics dashboard"],
      price: "$149/month",
      href: "/services/support-automation"
    },
    {
      title: "Inventory Management System",
      description: "Smart inventory tracking with demand forecasting and automated reordering",
      icon: ShoppingCart,
      features: ["Real-time tracking", "Demand forecasting", "Automated reordering", "Multi-location support"],
      price: "$249/month",
      href: "/services/inventory-management"
    },
    {
      title: "Project Management Suite",
      description: "Comprehensive project tracking with AI-powered resource optimization",
      icon: Calendar,
      features: ["Task automation", "Resource optimization", "Progress tracking", "Team collaboration"],
      price: "$179/month",
      href: "/services/project-management"
    },
    {
      title: "Social Media Management",
      description: "AI-powered social media scheduling, analytics, and content optimization",
      icon: Share,
      features: ["Auto-scheduling", "Content optimization", "Analytics & insights", "Multi-platform support"],
      price: "$129/month",
      href: "/services/social-media"
    }
  ];

  const itServices = [
    {
      title: "Cloud Infrastructure Setup",
      description: "Complete cloud migration and infrastructure optimization",
      icon: Cloud,
      features: ["AWS/Azure/GCP setup", "Cost optimization", "Security hardening", "Monitoring setup"],
      price: "$2,500 - $15,000",
      href: "/services/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audit and vulnerability assessment",
      icon: Shield,
      features: ["Penetration testing", "Vulnerability scanning", "Compliance audit", "Security recommendations"],
      price: "$3,000 - $10,000",
      href: "/services/cybersecurity"
    },
    {
      title: "Network Design & Implementation",
      description: "Enterprise network architecture and implementation",
      icon: Network,
      features: ["Network design", "Hardware procurement", "Implementation", "Performance optimization"],
      price: "$5,000 - $25,000",
      href: "/services/network-design"
    },
    {
      title: "IT Support & Maintenance",
      description: "24/7 IT support and proactive system maintenance",
      icon: Headphones,
      features: ["24/7 support", "Proactive monitoring", "System updates", "Backup management"],
      price: "$500 - $2,000/month",
      href: "/services/it-support"
    },
    {
      title: "Data Backup & Recovery",
      description: "Comprehensive data protection and disaster recovery solutions",
      icon: HardDrive,
      features: ["Automated backups", "Disaster recovery", "Data encryption", "Recovery testing"],
      price: "$1,000 - $5,000",
      href: "/services/backup-recovery"
    },
    {
      title: "Software Development",
      description: "Custom software development and system integration",
      icon: Code,
      features: ["Custom development", "API integration", "Database design", "Quality assurance"],
      price: "$5,000 - $50,000",
      href: "/services/software-development"
    }
  ];

  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models for predictive analytics and automation",
      icon: Brain,
      features: ["Custom model development", "Data preprocessing", "Model training", "Deployment & monitoring"],
      price: "$10,000 - $50,000",
      href: "/services/ml-models"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis and language understanding",
      icon: MessageSquare,
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Chatbot development"],
      price: "$8,000 - $30,000",
      href: "/services/nlp"
    },
    {
      title: "Computer Vision Solutions",
      description: "Image and video analysis with AI-powered recognition",
      icon: Camera,
      features: ["Image recognition", "Object detection", "Video analysis", "Quality inspection"],
      price: "$12,000 - $40,000",
      href: "/services/computer-vision"
    },
    {
      title: "AI Chatbot Development",
      description: "Intelligent conversational AI for customer service and support",
      icon: MessageSquare,
      features: ["Natural conversations", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      price: "$5,000 - $20,000",
      href: "/services/ai-chatbot"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting and predictive modeling for business insights",
      icon: TrendingUp,
      features: ["Demand forecasting", "Risk assessment", "Performance prediction", "Real-time insights"],
      price: "$15,000 - $60,000",
      href: "/services/predictive-analytics"
    },
    {
      title: "AI Process Automation",
      description: "Intelligent automation for repetitive business processes",
      icon: Zap,
      features: ["Workflow automation", "Document processing", "Data extraction", "Decision automation"],
      price: "$8,000 - $35,000",
      href: "/services/ai-automation"
    }
  ];

  return (
    <>
      <SEO
        title="Zion Tech Group - Leading Technology Solutions Provider"
        description="Comprehensive AI services, IT solutions, and micro SaaS platforms. Expert technology consulting with 24/7 support. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com"
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Trusted by 50+ Companies
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of revolutionary AI services, comprehensive IT solutions, and innovative micro SaaS platforms. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Email kleber@ziontechgroup.com
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-300">Scalable software-as-a-service solutions for modern businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <Card key={index} className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="text-lg font-semibold text-blue-400">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">IT Services & Solutions</h2>
              <p className="text-xl text-gray-300">Comprehensive information technology services for enterprise needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <Card key={index} className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="text-lg font-semibold text-green-400">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Services & Solutions</h2>
              <p className="text-xl text-gray-300">Cutting-edge artificial intelligence solutions for business transformation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Card key={index} className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="text-lg font-semibold text-purple-400">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our technology solutions can drive your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Our Website
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
