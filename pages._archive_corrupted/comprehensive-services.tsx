

origin/cursor/integrate-build-improve-and-re-verify-c7b5
import { 
  Brain, 
  Server, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Globe,
  Lock,
  Settings,
  Palette,
  Code,
  Database,
  Cloud,
  Users
} from 'lucide-react''
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })"
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })"
const "ComprehensiveServicesPage": React.FC = () => {"
  }
  const serviceCategories = [{
      }
      "id": 1,
      "title": "AI & Machine Learning","
      "description": "Cutting-edge artificial intelligence solutions to transform your business","
      "icon": <Brain className="w-8 h-8" />,"
      "services": ["
        "Machine Learning Models","
        "Natural Language Processing","
        "Computer Vision","
        "Predictive Analytics","
        "AI Consulting""
      ],
      "pricing": "Starting at $5,000",
      "delivery": "2-8 weeks"
    },
    {
      "id": 2,
      "title": "IT Infrastructure",
      "description": "Robust and scalable IT infrastructure solutions for modern businesses",
      "icon": <Server className="w-8 h-8"  />,
      "services": ["Cloud Migration",
        "Network Setup",
        "System Integration",
        "Data Management",
        "24/7 Support"
      ],
      "pricing": "Starting at $3,000",
      "delivery": "1-6 weeks"
    },
    {
      "id": 3,
      "title": "Micro SaaS Development",
      "description": "Innovative micro SaaS solutions to streamline your business processes",
      "icon": <Zap className="w-8 h-8"  />,
      "services": ["Custom SaaS Development",
        "API Integration",
        "Scalable Architecture",
        "Performance Optimization",
        "Maintenance & Support"
      ],
      "pricing": "Starting at $4,000",
      "delivery": "2-6 weeks"
    },
    {
      "id": 4,
      "title": "Cybersecurity",
      "description": "Comprehensive security solutions to protect your digital assets",
      "icon": <Shield className="w-8 h-8"  />,
      "services": ["Security Assessment",
        "Threat Detection",
        "Access Control",
        "Data Encryption",
        "Compliance Auditing"
      ],
      "pricing": "Starting at $2,500",
      "delivery": "1-4 weeks"
    },
    {
      "id": 5,
      "title": "Cloud & DevOps",
      "description": "Modern cloud solutions and DevOps practices for scalable applications",
      "icon": <Cloud className="w-8 h-8"  />,
      "services": ["Cloud Migration",
        "DevOps Automation",
        "Container Orchestration",
        "CI/CD Pipelines",
        "Infrastructure Management"
      ],
      "pricing": "Starting at $3,500",
      "delivery": "2-8 weeks"
    },
    {
      "id": 6,
      "title": "Blockchain Solutions",
      "description": "Innovative blockchain technology for secure and transparent operations",
      "icon": <Lock className="w-8 h-8"  />,
      "services": ["Smart Contract Development",
        "DeFi Solutions",
        "NFT Platforms",
        "Cryptocurrency Integration",
        "Blockchain Consulting"
      ],
      "pricing": "Starting at $5,500",
      "delivery": "3-10 weeks"
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {Brain,, Server,, Zap,, Shield,, ArrowRight,, CheckCircle,, Star,, Globe,, Lock,, Settings,, Palette,, Code,, Database,, Cloud,, Users} from 'lucide-react';
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false });
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false });
const "ComprehensiveServicesPage": React.FC = () => {;
  const serviceCategories = [{;
      id: 1,;
      "title": "AI & Machine Learning",;
      "description": "Cutting-edge artificial intelligence solutions to transform your business",;
      "icon": <Brain className="w-8 h-8"  />,;
      "services": [;
        "Machine Learning Models",;
        "Natural Language Processing",;
        "Computer Vision",;
        "Predictive Analytics",;
        "AI Consulting";
      ],;
      "pricing": "Starting at $5,000",;
      "delivery": "2-8 weeks";
    },;
    {;
      "id": 2,;
      "title": "IT Infrastructure",;
      "description": "Robust and scalable IT infrastructure solutions for modern businesses",;
      "icon": <Server className="w-8 h-8"  />,;
      "services": ["Cloud Migration",;
        "Network Setup",;
        "System Integration",;
        "Data Management",;
        "24/7 Support";
      ],;
      "pricing": "Starting at $3,000",;
      "delivery": "1-6 weeks";
    },;
    {;
      "id": 3,;
      "title": "Micro SaaS Development",;
      "description": "Innovative micro SaaS solutions to streamline your business processes",;
      "icon": <Zap className="w-8 h-8"  />,;
      "services": ["Custom SaaS Development",;
        "API Integration",;
        "Scalable Architecture",;
        "Performance Optimization",;
        "Maintenance & Support";
      ],;
      "pricing": "Starting at $4,000",;
      "delivery": "2-6 weeks";
    },;
    {;
      "id": 4,;
      "title": "Cybersecurity",;
      "description": "Comprehensive security solutions to protect your digital assets",;
      "icon": <Shield className="w-8 h-8"  />,;
      "services": ["Security Assessment",;
        "Threat Detection",;
        "Access Control",;
        "Data Encryption",;
        "Compliance Auditing";
      ],;
      "pricing": "Starting at $2,500",;
      "delivery": "1-4 weeks";
    },;
    {;
      "id": 5,;
      "title": "Cloud & DevOps",;
      "description": "Modern cloud solutions and DevOps practices for scalable applications",;
      "icon": <Cloud className="w-8 h-8"  />,;
      "services": ["Cloud Migration",;
        "DevOps Automation",;
        "Container Orchestration",;
        "CI/CD Pipelines",;
        "Infrastructure Management";
      ],;
      "pricing": "Starting at $3,500",;
      "delivery": "2-8 weeks";
    },;
    {;
      "id": 6,;
      "title": "Blockchain Solutions",;
      "description": "Innovative blockchain technology for secure and transparent operations",;
      "icon": <Lock className="w-8 h-8"  />,;
      "services": ["Smart Contract Development",;
        "DeFi Solutions",;
        "NFT Platforms",;
        "Cryptocurrency Integration",;
        "Blockchain Consulting";
      ],;
      "pricing": "Starting at $5,500",;
      "delivery": "3-10 weeks";
    }
  ]
  return (
    <>
      <SEO title="Comprehensive Services - Zion Tech Group"
        description="Complete technology solutions including AI services, IT infrastructure, micro SaaS development, and innovative digital transformation services."
        keywords="comprehensive services, AI, IT, micro SaaS, cybersecurity, cloud, DevOps, blockchain, Zion Tech Group"
        canonical=""https": //ziontechgroup.com/comprehensive-services"
       />
      <PageTransition>
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl "md": text-6xl font-bold text-gray-900 mb-6">
                  Comprehensive <span className="text-blue-600">Services</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Complete technology solutions to transform your business with AI, IT infrastructure, micro SaaS development, and innovative digital transformation services.
                </p>
                <div className="flex flex-col "sm": flex-row gap-4 justify-center">
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Explore Services
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ "scale": 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Services Grid */}
          <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6, "delay": 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
                  Our Service Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology solutions across multiple domains to meet all your business needs.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0.6, "delay": index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg "hover": shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="text-blue-600 mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {category.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Services "Include": </h4>
                        <ul className="space-y-2">
                          {category.services.map((service, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500"  />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <span className="font-semibold text-green-600">{category.pricing}</span>
                        <span>{category.delivery}</span>
                      </div>
                      <motion.button
                        whileHover={{ "scale": 1.02 }}
                        whileTap={{ "scale": 0.98 }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 "hover": b g-blue-700 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5"  />
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Benefits Section */}
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our Services?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We deliver exceptional value through our comprehensive approach and commitment to excellence.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0.6, "delay": index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg "hover": shadow-xl transition-shadow duration-300 text-center"
                  >
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Let us help you achieve your goals with our comprehensive technology solutions.
                </p>
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Get Started Today
                  </motion.a>
                  <motion.a
                    href=""tel": +13024640950"

import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Brain,Server,Zap,Shield,ArrowRight,CheckCircle,Star,Globe,Lock,Settings,Palette,Code,Database,Cloud,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const ComprehensiveServicesPage: React.FC = () => { const serviceCategories = [ { id: 1,title: "AI & Machine Learning",description: "Cutting-edge artificial intelligence solutions to transform your business",icon: <Brain className="w-8 h-8" />,services: [ "Machine Learning Models","Natural Language Processing","Computer Vision","Predictive Analytics","AI Consulting" ],pricing: "Starting at $5,000",delivery: "2-8 weeks" },{ id: 2,title: "IT Infrastructure",description: "Robust and scalable IT infrastructure solutions for modern businesses",icon: <Server className="w-8 h-8" />,services: [ "Cloud Migration","Network Setup","System Integration","Data Management","24/7 Support" ],pricing: "Starting at $3,000",delivery: "1-6 weeks" },{ id: 3,title: "Micro SaaS Development",description: "Innovative micro SaaS solutions to streamline your business processes",icon: <Zap className="w-8 h-8" />,services: [ "Custom SaaS Development","API Integration","Scalable Architecture","Performance Optimization","Maintenance & Support" ],pricing: "Starting at $4,000",delivery: "2-6 weeks" },{ id: 4,title: "Cybersecurity",description: "Comprehensive security solutions to protect your digital assets",icon: <Shield className="w-8 h-8" />,services: [ "Security Assessment","Threat Detection","Access Control","Data Encryption","Compliance Auditing" ],pricing: "Starting at $2,500",delivery: "1-4 weeks" },{ id: 5,title: "Cloud & DevOps",description: "Modern cloud solutions and DevOps practices for scalable applications",icon: <Cloud className="w-8 h-8" />,services: [ "Cloud Migration","DevOps Automation","Container Orchestration","CI/CD Pipelines","Infrastructure Management" ],pricing: "Starting at $3,500",delivery: "2-8 weeks" },{ id: 6,title: "Blockchain Solutions",description: "Innovative blockchain technology for secure and transparent operations",icon: <Lock className="w-8 h-8" />,services: [ "Smart Contract Development","DeFi Solutions","NFT Platforms","Cryptocurrency Integration","Blockchain Consulting" ],pricing: "Starting at $5,500",delivery: "3-10 weeks" } ] const benefits = [ { icon: <Star className="w-6 h-6" />,title: "Expert Team",description: "Experienced professionals with deep expertise in cutting-edge technologies" },{ icon: <Globe className="w-6 h-6" />,title: "Global Reach",description: "Serving clients worldwide with remote and on-site support options" },{ icon: <Settings className="w-6 h-6" />,title: "Custom Solutions",description: "Tailored solutions designed to meet your specific business requirements" },{ icon: <Users className="w-6 h-6" />,title: "24/7 Support",description: "Round-the-clock support to ensure your systems run smoothly" } ] return ( <> <SEO title="Comprehensive Services - Zion Tech Group" description="Complete technology solutions including AI services,IT infrastructure,micro SaaS development,and innovative digital transformation services." keywords="comprehensive services,AI,IT,micro SaaS,cybersecurity,cloud,DevOps,blockchain,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Comprehensive <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Complete technology solutions to transform your business with AI,IT infrastructure,micro SaaS development,and innovative digital transformation services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Service Categories </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive technology solutions across multiple domains to meet all your business needs. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {serviceCategories.map((category,index) => ( <motion.div key={category.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="text-blue-600 mb-4"> {category.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {category.title} </h3> <p className="text-gray-600 mb-6"> {category.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4> <ul className="space-y-2"> {category.services.map((service,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {service} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{category.pricing}</span> <span>{category.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Services? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver exceptional value through our comprehensive approach and commitment to excellence. </p> </motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {benefits.map((benefit,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {benefit.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you achieve your goals with our comprehensive technology solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default ComprehensiveServicesPage

export default ComprehensiveServicesPage
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Brain,Server,Zap,Shield,ArrowRight,CheckCircle,Star,Globe,Lock,Settings,Palette,Code,Database,Cloud,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const ComprehensiveServicesPage: React.FC = () => { const serviceCategories = [ { id: 1,title: "AI & Machine Learning",description: "Cutting-edge artificial intelligence solutions to transform your business",icon: <Brain className="w-8 h-8" />,services: [ "Machine Learning Models","Natural Language Processing","Computer Vision","Predictive Analytics","AI Consulting" ],pricing: "Starting at $5,000",delivery: "2-8 weeks" },{ id: 2,title: "IT Infrastructure",description: "Robust and scalable IT infrastructure solutions for modern businesses",icon: <Server className="w-8 h-8" />,services: [ "Cloud Migration","Network Setup","System Integration","Data Management","24/7 Support" ],pricing: "Starting at $3,000",delivery: "1-6 weeks" },{ id: 3,title: "Micro SaaS Development",description: "Innovative micro SaaS solutions to streamline your business processes",icon: <Zap className="w-8 h-8" />,services: [ "Custom SaaS Development","API Integration","Scalable Architecture","Performance Optimization","Maintenance & Support" ],pricing: "Starting at $4,000",delivery: "2-6 weeks" },{ id: 4,title: "Cybersecurity",description: "Comprehensive security solutions to protect your digital assets",icon: <Shield className="w-8 h-8" />,services: [ "Security Assessment","Threat Detection","Access Control","Data Encryption","Compliance Auditing" ],pricing: "Starting at $2,500",delivery: "1-4 weeks" },{ id: 5,title: "Cloud & DevOps",description: "Modern cloud solutions and DevOps practices for scalable applications",icon: <Cloud className="w-8 h-8" />,services: [ "Cloud Migration","DevOps Automation","Container Orchestration","CI/CD Pipelines","Infrastructure Management" ],pricing: "Starting at $3,500",delivery: "2-8 weeks" },{ id: 6,title: "Blockchain Solutions",description: "Innovative blockchain technology for secure and transparent operations",icon: <Lock className="w-8 h-8" />,services: [ "Smart Contract Development","DeFi Solutions","NFT Platforms","Cryptocurrency Integration","Blockchain Consulting" ],pricing: "Starting at $5,500",delivery: "3-10 weeks" } ] const benefits = [ { icon: <Star className="w-6 h-6" />,title: "Expert Team",description: "Experienced professionals with deep expertise in cutting-edge technologies" },{ icon: <Globe className="w-6 h-6" />,title: "Global Reach",description: "Serving clients worldwide with remote and on-site support options" },{ icon: <Settings className="w-6 h-6" />,title: "Custom Solutions",description: "Tailored solutions designed to meet your specific business requirements" },{ icon: <Users className="w-6 h-6" />,title: "24/7 Support",description: "Round-the-clock support to ensure your systems run smoothly" } ] return ( <> <SEO title="Comprehensive Services - Zion Tech Group" description="Complete technology solutions including AI services,IT infrastructure,micro SaaS development,and innovative digital transformation services." keywords="comprehensive services,AI,IT,micro SaaS,cybersecurity,cloud,DevOps,blockchain,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Comprehensive <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Complete technology solutions to transform your business with AI,IT infrastructure,micro SaaS development,and innovative digital transformation services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Service Categories </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive technology solutions across multiple domains to meet all your business needs. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {serviceCategories.map((category,index) => ( <motion.div key={category.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="text-blue-600 mb-4"> {category.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {category.title} </h3> <p className="text-gray-600 mb-6"> {category.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4> <ul className="space-y-2"> {category.services.map((service,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {service} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{category.pricing}</span> <span>{category.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Services? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver exceptional value through our comprehensive approach and commitment to excellence. </p> </motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {benefits.map((benefit,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {benefit.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you achieve your goals with our comprehensive technology solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default ComprehensiveServicesPage
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Brain,Server,Zap,Shield,ArrowRight,CheckCircle,Star,Globe,Lock,Settings,Palette,Code,Database,Cloud,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const ComprehensiveServicesPage: React.FC = () => { const serviceCategories = [ { id: 1,title: "AI & Machine Learning",description: "Cutting-edge artificial intelligence solutions to transform your business",icon: <Brain className="w-8 h-8" />,services: [ "Machine Learning Models","Natural Language Processing","Computer Vision","Predictive Analytics","AI Consulting" ],pricing: "Starting at $5,000",delivery: "2-8 weeks" },{ id: 2,title: "IT Infrastructure",description: "Robust and scalable IT infrastructure solutions for modern businesses",icon: <Server className="w-8 h-8" />,services: [ "Cloud Migration","Network Setup","System Integration","Data Management","24/7 Support" ],pricing: "Starting at $3,000",delivery: "1-6 weeks" },{ id: 3,title: "Micro SaaS Development",description: "Innovative micro SaaS solutions to streamline your business processes",icon: <Zap className="w-8 h-8" />,services: [ "Custom SaaS Development","API Integration","Scalable Architecture","Performance Optimization","Maintenance & Support" ],pricing: "Starting at $4,000",delivery: "2-6 weeks" },{ id: 4,title: "Cybersecurity",description: "Comprehensive security solutions to protect your digital assets",icon: <Shield className="w-8 h-8" />,services: [ "Security Assessment","Threat Detection","Access Control","Data Encryption","Compliance Auditing" ],pricing: "Starting at $2,500",delivery: "1-4 weeks" },{ id: 5,title: "Cloud & DevOps",description: "Modern cloud solutions and DevOps practices for scalable applications",icon: <Cloud className="w-8 h-8" />,services: [ "Cloud Migration","DevOps Automation","Container Orchestration","CI/CD Pipelines","Infrastructure Management" ],pricing: "Starting at $3,500",delivery: "2-8 weeks" },{ id: 6,title: "Blockchain Solutions",description: "Innovative blockchain technology for secure and transparent operations",icon: <Lock className="w-8 h-8" />,services: [ "Smart Contract Development","DeFi Solutions","NFT Platforms","Cryptocurrency Integration","Blockchain Consulting" ],pricing: "Starting at $5,500",delivery: "3-10 weeks" } ] const benefits = [ { icon: <Star className="w-6 h-6" />,title: "Expert Team",description: "Experienced professionals with deep expertise in cutting-edge technologies" },{ icon: <Globe className="w-6 h-6" />,title: "Global Reach",description: "Serving clients worldwide with remote and on-site support options" },{ icon: <Settings className="w-6 h-6" />,title: "Custom Solutions",description: "Tailored solutions designed to meet your specific business requirements" },{ icon: <Users className="w-6 h-6" />,title: "24/7 Support",description: "Round-the-clock support to ensure your systems run smoothly" } ] return ( <> <SEO title="Comprehensive Services - Zion Tech Group" description="Complete technology solutions including AI services,IT infrastructure,micro SaaS development,and innovative digital transformation services." keywords="comprehensive services,AI,IT,micro SaaS,cybersecurity,cloud,DevOps,blockchain,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Comprehensive <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Complete technology solutions to transform your business with AI,IT infrastructure,micro SaaS development,and innovative digital transformation services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Service Categories </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive technology solutions across multiple domains to meet all your business needs. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {serviceCategories.map((category,index) => ( <motion.div key={category.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="text-blue-600 mb-4"> {category.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {category.title} </h3> <p className="text-gray-600 mb-6"> {category.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4> <ul className="space-y-2"> {category.services.map((service,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {service} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{category.pricing}</span> <span>{category.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Services? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver exceptional value through our comprehensive approach and commitment to excellence. </p> </motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {benefits.map((benefit,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {benefit.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you achieve your goals with our comprehensive technology solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default ComprehensiveServicesPage
;
                    whileTap={{ "scale": 0 && 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;
                    <ArrowRight className="w-5 h-5"  />;
                    Call "Us": +1 302 464 0950;
                  </motion && motion.a>;
                </div>;
              </motion && motion.div>;
            </div>;
          </section>;
        </main>;
      </PageTransition>;
    </>;
  );
}
export default ComprehensiveServicesPage;
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Brain,Server,Zap,Shield,ArrowRight,CheckCircle,Star,Globe,Lock,Settings,Palette,Code,Database,Cloud,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const ComprehensiveServicesPage: React.FC = () => { const serviceCategories = [ { id: 1,title: "AI & Machine Learning",description: "Cutting-edge artificial intelligence solutions to transform your business",icon: <Brain className="w-8 h-8" />,services: [ "Machine Learning Models","Natural Language Processing","Computer Vision","Predictive Analytics","AI Consulting" ],pricing: "Starting at $5,000",delivery: "2-8 weeks" },{ id: 2,title: "IT Infrastructure",description: "Robust and scalable IT infrastructure solutions for modern businesses",icon: <Server className="w-8 h-8" />,services: [ "Cloud Migration","Network Setup","System Integration","Data Management","24/7 Support" ],pricing: "Starting at $3,000",delivery: "1-6 weeks" },{ id: 3,title: "Micro SaaS Development",description: "Innovative micro SaaS solutions to streamline your business processes",icon: <Zap className="w-8 h-8" />,services: [ "Custom SaaS Development","API Integration","Scalable Architecture","Performance Optimization","Maintenance & Support" ],pricing: "Starting at $4,000",delivery: "2-6 weeks" },{ id: 4,title: "Cybersecurity",description: "Comprehensive security solutions to protect your digital assets",icon: <Shield className="w-8 h-8" />,services: [ "Security Assessment","Threat Detection","Access Control","Data Encryption","Compliance Auditing" ],pricing: "Starting at $2,500",delivery: "1-4 weeks" },{ id: 5,title: "Cloud & DevOps",description: "Modern cloud solutions and DevOps practices for scalable applications",icon: <Cloud className="w-8 h-8" />,services: [ "Cloud Migration","DevOps Automation","Container Orchestration","CI/CD Pipelines","Infrastructure Management" ],pricing: "Starting at $3,500",delivery: "2-8 weeks" },{ id: 6,title: "Blockchain Solutions",description: "Innovative blockchain technology for secure and transparent operations",icon: <Lock className="w-8 h-8" />,services: [ "Smart Contract Development","DeFi Solutions","NFT Platforms","Cryptocurrency Integration","Blockchain Consulting" ],pricing: "Starting at $5,500",delivery: "3-10 weeks" } ] const benefits = [ { icon: <Star className="w-6 h-6" />,title: "Expert Team",description: "Experienced professionals with deep expertise in cutting-edge technologies" },{ icon: <Globe className="w-6 h-6" />,title: "Global Reach",description: "Serving clients worldwide with remote and on-site support options" },{ icon: <Settings className="w-6 h-6" />,title: "Custom Solutions",description: "Tailored solutions designed to meet your specific business requirements" },{ icon: <Users className="w-6 h-6" />,title: "24/7 Support",description: "Round-the-clock support to ensure your systems run smoothly" } ] return ( <> <SEO title="Comprehensive Services - Zion Tech Group" description="Complete technology solutions including AI services,IT infrastructure,micro SaaS development,and innovative digital transformation services." keywords="comprehensive services,AI,IT,micro SaaS,cybersecurity,cloud,DevOps,blockchain,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Comprehensive <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Complete technology solutions to transform your business with AI,IT infrastructure,micro SaaS development,and innovative digital transformation services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <motion && motion.a href="#services" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion && motion.a> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion && motion.a> </div> </motion && motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Service Categories </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive technology solutions across multiple domains to meet all your business needs. </p> </motion && motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {serviceCategories && serviceCategories.map((category,index) => ( <motion && motion.div key={category && category.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="text-blue-600 mb-4"> {category && category.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {category && category.title} </h3> <p className="text-gray-600 mb-6"> {category && category.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4> <ul className="space-y-2"> {category && category.services.map((service,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {service} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{category && category.pricing}</span> <span>{category && category.delivery}</span> </div> <motion && motion.button whileHover={{ scale: 1 && 1.02 }} whileTap={{ scale: 0 && 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion && motion.button> </div> </motion && motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Services? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver exceptional value through our comprehensive approach and commitment to excellence. </p> </motion && motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {benefits && benefits.map((benefit,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {benefit && benefit.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {benefit && benefit.title} </h3> <p className="text-gray-600"> {benefit && benefit.description} </p> </motion && motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you achieve your goals with our comprehensive technology solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion && motion.a> <motion && motion.a href="tel:+13024640950" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion && motion.a> </div> </motion ;
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Brain,Server,Zap,Shield,ArrowRight,CheckCircle,Star,Globe,Lock,Settings,Palette,Code,Database,Cloud,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const ComprehensiveServicesPage: React.FC = () => { const serviceCategories = [ { id: 1,title: "AI & Machine Learning",description: "Cutting-edge artificial intelligence solutions to transform your business",icon: <Brain className="w-8 h-8" />,services: [ "Machine Learning Models","Natural Language Processing","Computer Vision","Predictive Analytics","AI Consulting" ],pricing: "Starting at $5,000",delivery: "2-8 weeks" },{ id: 2,title: "IT Infrastructure",description: "Robust and scalable IT infrastructure solutions for modern businesses",icon: <Server className="w-8 h-8" />,services: [ "Cloud Migration","Network Setup","System Integration","Data Management","24/7 Support" ],pricing: "Starting at $3,000",delivery: "1-6 weeks" },{ id: 3,title: "Micro SaaS Development",description: "Innovative micro SaaS solutions to streamline your business processes",icon: <Zap className="w-8 h-8" />,services: [ "Custom SaaS Development","API Integration","Scalable Architecture","Performance Optimization","Maintenance & Support" ],pricing: "Starting at $4,000",delivery: "2-6 weeks" },{ id: 4,title: "Cybersecurity",description: "Comprehensive security solutions to protect your digital assets",icon: <Shield className="w-8 h-8" />,services: [ "Security Assessment","Threat Detection","Access Control","Data Encryption","Compliance Auditing" ],pricing: "Starting at $2,500",delivery: "1-4 weeks" },{ id: 5,title: "Cloud & DevOps",description: "Modern cloud solutions and DevOps practices for scalable applications",icon: <Cloud className="w-8 h-8" />,services: [ "Cloud Migration","DevOps Automation","Container Orchestration","CI/CD Pipelines","Infrastructure Management" ],pricing: "Starting at $3,500",delivery: "2-8 weeks" },{ id: 6,title: "Blockchain Solutions",description: "Innovative blockchain technology for secure and transparent operations",icon: <Lock className="w-8 h-8" />,services: [ "Smart Contract Development","DeFi Solutions","NFT Platforms","Cryptocurrency Integration","Blockchain Consulting" ],pricing: "Starting at $5,500",delivery: "3-10 weeks" } ] const benefits = [ { icon: <Star className="w-6 h-6" />,title: "Expert Team",description: "Experienced professionals with deep expertise in cutting-edge technologies" },{ icon: <Globe className="w-6 h-6" />,title: "Global Reach",description: "Serving clients worldwide with remote and on-site support options" },{ icon: <Settings className="w-6 h-6" />,title: "Custom Solutions",description: "Tailored solutions designed to meet your specific business requirements" },{ icon: <Users className="w-6 h-6" />,title: "24/7 Support",description: "Round-the-clock support to ensure your systems run smoothly" } ] return ( <> <SEO title="Comprehensive Services - Zion Tech Group" description="Complete technology solutions including AI services,IT infrastructure,micro SaaS development,and innovative digital transformation services." keywords="comprehensive services,AI,IT,micro SaaS,cybersecurity,cloud,DevOps,blockchain,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Comprehensive <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Complete technology solutions to transform your business with AI,IT infrastructure,micro SaaS development,and innovative digital transformation services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <motion && motion.a href="#services" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion && motion.a> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion && motion.a> </div> </motion && motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Service Categories </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive technology solutions across multiple domains to meet all your business needs. </p> </motion && motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {serviceCategories && serviceCategories.map((category,index) => ( <motion && motion.div key={category && category.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="text-blue-600 mb-4"> {category && category.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {category && category.title} </h3> <p className="text-gray-600 mb-6"> {category && category.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4> <ul className="space-y-2"> {category && category.services.map((service,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {service} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{category && category.pricing}</span> <span>{category && category.delivery}</span> </div> <motion && motion.button whileHover={{ scale: 1 && 1.02 }} whileTap={{ scale: 0 && 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion && motion.button> </div> </motion && motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Services? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver exceptional value through our comprehensive approach and commitment to excellence. </p> </motion && motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {benefits && benefits.map((benefit,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {benefit && benefit.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {benefit && benefit.title} </h3> <p className="text-gray-600"> {benefit && benefit.description} </p> </motion && motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you achieve your goals with our comprehensive technology solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion && motion.a> <motion && motion.a href="tel:+13024640950" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion && motion.a> </div> </motion && motion.div> </div> </section> </main> </PageTransition> </> ) } export default ComprehensiveServicesPage
origin/cursor/integrate-build-improve-and-re-verify-c7b5
