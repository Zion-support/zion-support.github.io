<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { 
import React from 'react
import dynamic from 'next/dynamic
import Head from 'next/head
import Link from 'next/link
import { motion } from 'framer-motion
import {
  // TODO: Implement
}
pr-12325
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Globe,
  Lock,
  Settings
} from 'lucide-react''
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })"
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })"
const "CloudDevOpsPage": React.FC = () => {"
  }
  const services = [{
      }
      "id": 1,
      "title": "Cloud Migration","
      "description": "Seamlessly migrate your applications and data to the cloud with zero downtime.","
      "features": ["
        "Assessment and planning","
        "Data migration strategies","
        "Application modernization","
        "Performance optimization","
        "Cost optimization""
      ],
      "pricing": "Starting at $5,000","
      "delivery": "2-8 weeks","
      "category": "Migration","
      "icon": <Cloud className="w-8 h-8" />"
    },
    {
      "id": 2,"
      "title": "DevOps Automation","
      "description": "Implement CI/CD pipelines and automation to accelerate your development process.","
      "features": ["CI/CD pipeline setup","
        "Automated testing","
        "Deployment automation","
        "Monitoring and alerting","
        "Infrastructure as code""
      ],
      "pricing": "Starting at $3,000","
      "delivery": "1-4 weeks","
      "category": "Automation","
      "icon": <Zap className="w-8 h-8" />"
    },
    {
      "id": 3,"
      "title": "Infrastructure Management","
      "description": "Manage and optimize your cloud infrastructure for maximum performance and cost efficiency.","
      "features": ["Infrastructure monitoring","
        "Performance optimization","
        "Cost management","
        "Security hardening","
        "24/7 support""
      ],
      "pricing": "Starting at $2,000/month","
      "delivery": "Ongoing","
      "category": "Management","
      "icon": <Server className="w-8 h-8" />"
    },
    {
      "id": 4,"
      "title": "Container Orchestration","
      "description": "Deploy and manage containerized applications with Kubernetes and Docker.","
      "features": ["Kubernetes setup","
        "Container optimization","
        "Service mesh implementation","
        "Auto-scaling configuration","
        "Health monitoring""
      ],
      "pricing": "Starting at $4,000","
      "delivery": "2-6 weeks","
      "category": "Containers","
      "icon": <Settings className="w-8 h-8" />"
    },
    {
      "id": 5,"
      "title": "Security & Compliance","
      "description": "Implement comprehensive security measures and ensure compliance with industry standards.","
      "features": ["Security assessment","
        "Compliance auditing","
        "Access control setup","
        "Encryption implementation","
        "Security monitoring""
      ],
      "pricing": "Starting at $3,500","
      "delivery": "2-4 weeks","
      "category": "Security","
      "icon": <Shield className="w-8 h-8" />"
    },
    {
      "id": 6,"
      "title": "Multi-Cloud Strategy","
      "description": "Design and implement a multi-cloud strategy for maximum flexibility and redundancy.","
      "features": ["Multi-cloud architecture","
        "Data synchronization","
        "Disaster recovery","
        "Load balancing","
        "Cost optimization""
      ],
      "pricing": "Starting at $6,000",
      "delivery": "4-8 weeks",
      "category": "Strategy",
      "icon": <Globe className="w-8 h-8"  />
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
import {Cloud,, Server,, Shield,, Zap,, ArrowRight,, CheckCircle,, Star,, Globe,, Lock,, Settings} from 'lucide-react';
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false });
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false });
const "CloudDevOpsPage": React.FC = () => {;
  const services = [{;
      id: 1,;
      "title": "Cloud Migration",;
      "description": "Seamlessly migrate your applications and data to the cloud with zero downtime.",;
      "features": [;
        "Assessment and planning",;
        "Data migration strategies",;
        "Application modernization",;
        "Performance optimization",;
        "Cost optimization";
      ],;
      "pricing": "Starting at $5,000",;
      "delivery": "2-8 weeks",;
      "category": "Migration",;
      "icon": <Cloud className="w-8 h-8"  />;
    },;
    {;
      "id": 2,;
      "title": "DevOps Automation",;
      "description": "Implement CI/CD pipelines and automation to accelerate your development process.",;
      "features": ["CI/CD pipeline setup",;
        "Automated testing",;
        "Deployment automation",;
        "Monitoring and alerting",;
        "Infrastructure as code";
      ],;
      "pricing": "Starting at $3,000",;
      "delivery": "1-4 weeks",;
      "category": "Automation",;
      "icon": <Zap className="w-8 h-8"  />;
    },;
    {;
      "id": 3,;
      "title": "Infrastructure Management",;
      "description": "Manage and optimize your cloud infrastructure for maximum performance and cost efficiency.",;
      "features": ["Infrastructure monitoring",;
        "Performance optimization",;
        "Cost management",;
        "Security hardening",;
        "24/7 support";
      ],;
      "pricing": "Starting at $2,000/month",;
      "delivery": "Ongoing",;
      "category": "Management",;
      "icon": <Server className="w-8 h-8"  />;
    },;
    {;
      "id": 4,;
      "title": "Container Orchestration",;
      "description": "Deploy and manage containerized applications with Kubernetes and Docker.",;
      "features": ["Kubernetes setup",;
        "Container optimization",;
        "Service mesh implementation",;
        "Auto-scaling configuration",;
        "Health monitoring";
      ],;
      "pricing": "Starting at $4,000",;
      "delivery": "2-6 weeks",;
      "category": "Containers",;
      "icon": <Settings className="w-8 h-8"  />;
    },;
    {;
      "id": 5,;
      "title": "Security & Compliance",;
      "description": "Implement comprehensive security measures and ensure compliance with industry standards.",;
      "features": ["Security assessment",;
        "Compliance auditing",;
        "Access control setup",;
        "Encryption implementation",;
        "Security monitoring";
      ],;
      "pricing": "Starting at $3,500",;
      "delivery": "2-4 weeks",;
      "category": "Security",;
      "icon": <Shield className="w-8 h-8"  />;
    },;
    {;
      "id": 6,;
      "title": "Multi-Cloud Strategy",;
      "description": "Design and implement a multi-cloud strategy for maximum flexibility and redundancy.",;
      "features": ["Multi-cloud architecture",;
        "Data synchronization",;
        "Disaster recovery",;
        "Load balancing",;
        "Cost optimization";
      ],;
      "pricing": "Starting at $6,000",;
      "delivery": "4-8 weeks",;
      "category": "Strategy",;
      "icon": <Globe className="w-8 h-8"  />;
    }
  ];
  const technologies = [{ "name": "AWS", "description": "Amazon Web Services" },;
    { "name": "Azure", "description": "Microsoft Azure" },;
    { "name": "GCP", "description": "Google Cloud Platform" },;
    { "name": "Kubernetes", "description": "Container Orchestration" },;
    { "name": "Docker", "description": "Containerization" },;
    { "name": "Terraform", "description": "Infrastructure as Code" },;
    { "name": "Jenkins", "description": "CI/CD Pipeline" },;
    { "name": "Prometheus", "description": "Monitoring" }
  ]
  return (
    <>
      <SEO title="Cloud & DevOps Services - Zion Tech Group"
        description="Expert cloud migration, DevOps automation, and infrastructure management services. Scale your applications with our cloud and DevOps solutions."
        keywords="cloud migration, devops, infrastructure as code, CI/CD, AWS, Azure, GCP, Kubernetes"
        canonical=""https": //ziontechgroup.com/cloud-devops"
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
                  Cloud & <span className="text-blue-600">DevOps</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Scale your applications with expert cloud migration, DevOps automation, and infrastructure management services.
                </p>
                <div className="flex flex-col "sm": fle x-row gap-4 justify-center">
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ "scale": 0 && 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;
                    <ArrowRight className="w-5 h-5"  />;
                    Explore Services;
                  </motion && motion.a>;
                  <motion&& motion.a
                    href="/contact"
                    whileHover={{ "scale": 1 && 1.05 }}
                    whileTap={{ "scale": 0 && 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;
                    <ArrowRight className="w-5 h-5"  />;
                    Get Started;
                  </motion && motion.a>;
                </div>;
              </motion && motion.div>;
            </div>;
          </section>;
          {/* Services Grid */}
          <section id="services" className="py-20">;
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
              <motion&& motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0 && 0.6, "delay": 0 && 0.2 }}
                className="text-center mb-16">;
                <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">;
                  Our Cloud & DevOps Services;
                </h2>;
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                  Comprehensive solutions to modernize your infrastructure and accelerate your development process.;
                </p>;
              </motion && motion.div>;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
                {services && services.map((service, index) => (;
                  <motion&& motion.div
                    key={service && service.id}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0 && 0.6, "delay": index * 0 && 0.1 }}
                    className="bg-white rounded-xl shadow-lg "hover": shadow-xl transition-shadow duration-300 overflow-hidden">;
                    <div className="p-8">;
                      <div className="flex items-center justify-between mb-4">;
                        <div className="text-blue-600">;
                          {service && service.icon}
                        </div>;
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">;
                          {service && service.category}
                        </span>;
                      </div>;
                      <h3 className="text-xl font-bold text-gray-900 mb-3">;
                        {service && service.title}
                      </h3>;
                      <p className="text-gray-600 mb-6">;
                        {service && service.description}
                      </p>;
                      <div className="mb-6">;
                        <h4 className="font-semibold text-gray-900 mb-3">Key "Features": </h4>;
                        <ul className="space-y-2">;
                          {service && service.features.map((feature, idx) => (;
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">;
                              <CheckCircle className="w-4 h-4 text-green-500"  />;
                              {feature}
                            </li>;
                          ))}
                        </ul>;
                      </div>;
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">;
                        <span className="font-semibold text-green-600">{service && service.pricing}</span>;
                        <span>{service && service.delivery}</span>;
                      </div>;
                      <motion&& motion.button
                        whileHover={{ "scale": 1 && 1.02 }}
                        whileTap={{ "scale": 0 && 0.98 }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 "hover": b g-blue-700 transition-colors">;
                        <ArrowRight className="w-5 h-5"  />;
                        Learn More;
                      </motion && motion.button>;
                    </div>;
                  </motion && motion.div>;
                ))}
              </div>;
            </div>;
          </section>;
          {/* Technologies Section */}
          <section className="bg-gray-50 py-20">;
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
              <motion&& motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0 && 0.6 }}
                className="text-center mb-16">;
                <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">;
                  Technologies We Use;
                </h2>;
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                  We work with the latest cloud and DevOps technologies to deliver cutting-edge solutions.;
                </p>;
              </motion && motion.div>;
              <div className="grid grid-cols-2 md: gri d-cols-4 gap-8">;
                {technologies && technologies.map((tech, index) => (;
                  <motion&& motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0 && 0.6, "delay": index * 0 && 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg "hover": shadow-xl transition-shadow duration-300 text-center">;
                    <h3 className="text-lg font-bold text-gray-900 mb-2">;
                      {tech && tech.name}
                    </h3>;
                    <p className="text-sm text-gray-600">;
                      {tech && tech.description}
                    </p>;
                  </motion && motion.div>;
                ))}
              </div>;
            </div>;
          </section>;
          {/* CTA Section */}
          <section className="py-20">;
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
              <motion&& motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0 && 0.6 }}
                className="text-center">;
                <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-6">;
                  Ready to Modernize Your Infrastructure?;
                </h2>;
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
                  Let us help you scale your applications with our expert cloud and DevOps services.;
                </p>;
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">;
                  <motion&& motion.a
                    href="/contact"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ "scale": 0 && 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;
                    <ArrowRight className="w-5 h-5"  />;
                    Get Started Today;
                  </motion && motion.a>;
                  <motion&& motion.a
                    href=""tel": +13024640950"
<<<<<<< HEAD
}
export default CloudDevOpsPage
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Cloud,Server,Shield,Zap,ArrowRight,CheckCircle,Star,Globe,Lock,Settings } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CloudDevOpsPage: React.FC = () => { const services = [ { id: 1,title: "Cloud Migration",description: "Seamlessly migrate your applications and data to the cloud with zero downtime.",features: [ "Assessment and planning","Data migration strategies","Application modernization","Performance optimization","Cost optimization" ],pricing: "Starting at $5,000",delivery: "2-8 weeks",category: "Migration",icon: <Cloud className="w-8 h-8" /> },{ id: 2,title: "DevOps Automation",description: "Implement CI/CD pipelines and automation to accelerate your development process.",features: [ "CI/CD pipeline setup","Automated testing","Deployment automation","Monitoring and alerting","Infrastructure as code" ],pricing: "Starting at $3,000",delivery: "1-4 weeks",category: "Automation",icon: <Zap className="w-8 h-8" /> },{ id: 3,title: "Infrastructure Management",description: "Manage and optimize your cloud infrastructure for maximum performance and cost efficiency.",features: [ "Infrastructure monitoring","Performance optimization","Cost management","Security hardening","24/7 support" ],pricing: "Starting at $2,000/month",delivery: "Ongoing",category: "Management",icon: <Server className="w-8 h-8" /> },{ id: 4,title: "Container Orchestration",description: "Deploy and manage containerized applications with Kubernetes and Docker.",features: [ "Kubernetes setup","Container optimization","Service mesh implementation","Auto-scaling configuration","Health monitoring" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Containers",icon: <Settings className="w-8 h-8" /> },{ id: 5,title: "Security & Compliance",description: "Implement comprehensive security measures and ensure compliance with industry standards.",features: [ "Security assessment","Compliance auditing","Access control setup","Encryption implementation","Security monitoring" ],pricing: "Starting at $3,500",delivery: "2-4 weeks",category: "Security",icon: <Shield className="w-8 h-8" /> },{ id: 6,title: "Multi-Cloud Strategy",description: "Design and implement a multi-cloud strategy for maximum flexibility and redundancy.",features: [ "Multi-cloud architecture","Data synchronization","Disaster recovery","Load balancing","Cost optimization" ],pricing: "Starting at $6,000",delivery: "4-8 weeks",category: "Strategy",icon: <Globe className="w-8 h-8" /> } ] const technologies = [ { name: "AWS",description: "Amazon Web Services" },{ name: "Azure",description: "Microsoft Azure" },{ name: "GCP",description: "Google Cloud Platform" },{ name: "Kubernetes",description: "Container Orchestration" },{ name: "Docker",description: "Containerization" },{ name: "Terraform",description: "Infrastructure as Code" },{ name: "Jenkins",description: "CI/CD Pipeline" },{ name: "Prometheus",description: "Monitoring" } ] return ( <> <SEO title="Cloud & DevOps Services - Zion Tech Group" description="Expert cloud migration,DevOps automation,and infrastructure management services. Scale your applications with our cloud and DevOps solutions." keywords="cloud migration,devops,infrastructure as code,CI/CD,AWS,Azure,GCP,Kubernetes" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Cloud & <span className="text-blue-600">DevOps</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Scale your applications with expert cloud migration,DevOps automation,and infrastructure management services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Cloud & DevOps Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions to modernize your infrastructure and accelerate your development process. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <motion.div key={service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service.title} </h3> <p className="text-gray-600 mb-6"> {service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service.pricing}</span> <span>{service.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Technologies We Use </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We work with the latest cloud and DevOps technologies to deliver cutting-edge solutions. </p> </motion.div> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {technologies.map((tech,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {tech.name} </h3> <p className="text-sm text-gray-600"> {tech.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Modernize Your Infrastructure? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you scale your applications with our expert cloud and DevOps services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default CloudDevOpsPage
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Cloud,Server,Shield,Zap,ArrowRight,CheckCircle,Star,Globe,Lock,Settings } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CloudDevOpsPage: React.FC = () => { const services = [ { id: 1,title: "Cloud Migration",description: "Seamlessly migrate your applications and data to the cloud with zero downtime.",features: [ "Assessment and planning","Data migration strategies","Application modernization","Performance optimization","Cost optimization" ],pricing: "Starting at $5,000",delivery: "2-8 weeks",category: "Migration",icon: <Cloud className="w-8 h-8" /> },{ id: 2,title: "DevOps Automation",description: "Implement CI/CD pipelines and automation to accelerate your development process.",features: [ "CI/CD pipeline setup","Automated testing","Deployment automation","Monitoring and alerting","Infrastructure as code" ],pricing: "Starting at $3,000",delivery: "1-4 weeks",category: "Automation",icon: <Zap className="w-8 h-8" /> },{ id: 3,title: "Infrastructure Management",description: "Manage and optimize your cloud infrastructure for maximum performance and cost efficiency.",features: [ "Infrastructure monitoring","Performance optimization","Cost management","Security hardening","24/7 support" ],pricing: "Starting at $2,000/month",delivery: "Ongoing",category: "Management",icon: <Server className="w-8 h-8" /> },{ id: 4,title: "Container Orchestration",description: "Deploy and manage containerized applications with Kubernetes and Docker.",features: [ "Kubernetes setup","Container optimization","Service mesh implementation","Auto-scaling configuration","Health monitoring" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Containers",icon: <Settings className="w-8 h-8" /> },{ id: 5,title: "Security & Compliance",description: "Implement comprehensive security measures and ensure compliance with industry standards.",features: [ "Security assessment","Compliance auditing","Access control setup","Encryption implementation","Security monitoring" ],pricing: "Starting at $3,500",delivery: "2-4 weeks",category: "Security",icon: <Shield className="w-8 h-8" /> },{ id: 6,title: "Multi-Cloud Strategy",description: "Design and implement a multi-cloud strategy for maximum flexibility and redundancy.",features: [ "Multi-cloud architecture","Data synchronization","Disaster recovery","Load balancing","Cost optimization" ],pricing: "Starting at $6,000",delivery: "4-8 weeks",category: "Strategy",icon: <Globe className="w-8 h-8" /> } ] const technologies = [ { name: "AWS",description: "Amazon Web Services" },{ name: "Azure",description: "Microsoft Azure" },{ name: "GCP",description: "Google Cloud Platform" },{ name: "Kubernetes",description: "Container Orchestration" },{ name: "Docker",description: "Containerization" },{ name: "Terraform",description: "Infrastructure as Code" },{ name: "Jenkins",description: "CI/CD Pipeline" },{ name: "Prometheus",description: "Monitoring" } ] return ( <> <SEO title="Cloud & DevOps Services - Zion Tech Group" description="Expert cloud migration,DevOps automation,and infrastructure management services. Scale your applications with our cloud and DevOps solutions." keywords="cloud migration,devops,infrastructure as code,CI/CD,AWS,Azure,GCP,Kubernetes" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Cloud & <span className="text-blue-600">DevOps</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Scale your applications with expert cloud migration,DevOps automation,and infrastructure management services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Cloud & DevOps Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions to modernize your infrastructure and accelerate your development process. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <motion.div key={service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service.title} </h3> <p className="text-gray-600 mb-6"> {service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service.pricing}</span> <span>{service.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Technologies We Use </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We work with the latest cloud and DevOps technologies to deliver cutting-edge solutions. </p> </motion.div> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {technologies.map((tech,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {tech.name} </h3> <p className="text-sm text-gray-600"> {tech.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Modernize Your Infrastructure? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you scale your applications with our expert cloud and DevOps services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default CloudDevOpsPage
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Cloud,Server,Shield,Zap,ArrowRight,CheckCircle,Star,Globe,Lock,Settings } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CloudDevOpsPage: React.FC = () => { const services = [ { id: 1,title: "Cloud Migration",description: "Seamlessly migrate your applications and data to the cloud with zero downtime.",features: [ "Assessment and planning","Data migration strategies","Application modernization","Performance optimization","Cost optimization" ],pricing: "Starting at $5,000",delivery: "2-8 weeks",category: "Migration",icon: <Cloud className="w-8 h-8" /> },{ id: 2,title: "DevOps Automation",description: "Implement CI/CD pipelines and automation to accelerate your development process.",features: [ "CI/CD pipeline setup","Automated testing","Deployment automation","Monitoring and alerting","Infrastructure as code" ],pricing: "Starting at $3,000",delivery: "1-4 weeks",category: "Automation",icon: <Zap className="w-8 h-8" /> },{ id: 3,title: "Infrastructure Management",description: "Manage and optimize your cloud infrastructure for maximum performance and cost efficiency.",features: [ "Infrastructure monitoring","Performance optimization","Cost management","Security hardening","24/7 support" ],pricing: "Starting at $2,000/month",delivery: "Ongoing",category: "Management",icon: <Server className="w-8 h-8" /> },{ id: 4,title: "Container Orchestration",description: "Deploy and manage containerized applications with Kubernetes and Docker.",features: [ "Kubernetes setup","Container optimization","Service mesh implementation","Auto-scaling configuration","Health monitoring" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Containers",icon: <Settings className="w-8 h-8" /> },{ id: 5,title: "Security & Compliance",description: "Implement comprehensive security measures and ensure compliance with industry standards.",features: [ "Security assessment","Compliance auditing","Access control setup","Encryption implementation","Security monitoring" ],pricing: "Starting at $3,500",delivery: "2-4 weeks",category: "Security",icon: <Shield className="w-8 h-8" /> },{ id: 6,title: "Multi-Cloud Strategy",description: "Design and implement a multi-cloud strategy for maximum flexibility and redundancy.",features: [ "Multi-cloud architecture","Data synchronization","Disaster recovery","Load balancing","Cost optimization" ],pricing: "Starting at $6,000",delivery: "4-8 weeks",category: "Strategy",icon: <Globe className="w-8 h-8" /> } ] const technologies = [ { name: "AWS",description: "Amazon Web Services" },{ name: "Azure",description: "Microsoft Azure" },{ name: "GCP",description: "Google Cloud Platform" },{ name: "Kubernetes",description: "Container Orchestration" },{ name: "Docker",description: "Containerization" },{ name: "Terraform",description: "Infrastructure as Code" },{ name: "Jenkins",description: "CI/CD Pipeline" },{ name: "Prometheus",description: "Monitoring" } ] return ( <> <SEO title="Cloud & DevOps Services - Zion Tech Group" description="Expert cloud migration,DevOps automation,and infrastructure management services. Scale your applications with our cloud and DevOps solutions." keywords="cloud migration,devops,infrastructure as code,CI/CD,AWS,Azure,GCP,Kubernetes" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Cloud & <span className="text-blue-600">DevOps</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Scale your applications with expert cloud migration,DevOps automation,and infrastructure management services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Cloud & DevOps Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions to modernize your infrastructure and accelerate your development process. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <motion.div key={service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service.title} </h3> <p className="text-gray-600 mb-6"> {service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service.pricing}</span> <span>{service.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Technologies We Use </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We work with the latest cloud and DevOps technologies to deliver cutting-edge solutions. </p> </motion.div> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {technologies.map((tech,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {tech.name} </h3> <p className="text-sm text-gray-600"> {tech.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Modernize Your Infrastructure? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you scale your applications with our expert cloud and DevOps services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default CloudDevOpsPage
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default CloudDevOpsPage
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Cloud,Server,Shield,Zap,ArrowRight,CheckCircle,Star,Globe,Lock,Settings } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CloudDevOpsPage: React.FC = () => { const services = [ { id: 1,title: "Cloud Migration",description: "Seamlessly migrate your applications and data to the cloud with zero downtime.",features: [ "Assessment and planning","Data migration strategies","Application modernization","Performance optimization","Cost optimization" ],pricing: "Starting at $5,000",delivery: "2-8 weeks",category: "Migration",icon: <Cloud className="w-8 h-8" /> },{ id: 2,title: "DevOps Automation",description: "Implement CI/CD pipelines and automation to accelerate your development process.",features: [ "CI/CD pipeline setup","Automated testing","Deployment automation","Monitoring and alerting","Infrastructure as code" ],pricing: "Starting at $3,000",delivery: "1-4 weeks",category: "Automation",icon: <Zap className="w-8 h-8" /> },{ id: 3,title: "Infrastructure Management",description: "Manage and optimize your cloud infrastructure for maximum performance and cost efficiency.",features: [ "Infrastructure monitoring","Performance optimization","Cost management","Security hardening","24/7 support" ],pricing: "Starting at $2,000/month",delivery: "Ongoing",category: "Management",icon: <Server className="w-8 h-8" /> },{ id: 4,title: "Container Orchestration",description: "Deploy and manage containerized applications with Kubernetes and Docker.",features: [ "Kubernetes setup","Container optimization","Service mesh implementation","Auto-scaling configuration","Health monitoring" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Containers",icon: <Settings className="w-8 h-8" /> },{ id: 5,title: "Security & Compliance",description: "Implement comprehensive security measures and ensure compliance with industry standards.",features: [ "Security assessment","Compliance auditing","Access control setup","Encryption implementation","Security monitoring" ],pricing: "Starting at $3,500",delivery: "2-4 weeks",category: "Security",icon: <Shield className="w-8 h-8" /> },{ id: 6,title: "Multi-Cloud Strategy",description: "Design and implement a multi-cloud strategy for maximum flexibility and redundancy.",features: [ "Multi-cloud architecture","Data synchronization","Disaster recovery","Load balancing","Cost optimization" ],pricing: "Starting at $6,000",delivery: "4-8 weeks",category: "Strategy",icon: <Globe className="w-8 h-8" /> } ] const technologies = [ { name: "AWS",description: "Amazon Web Services" },{ name: "Azure",description: "Microsoft Azure" },{ name: "GCP",description: "Google Cloud Platform" },{ name: "Kubernetes",description: "Container Orchestration" },{ name: "Docker",description: "Containerization" },{ name: "Terraform",description: "Infrastructure as Code" },{ name: "Jenkins",description: "CI/CD Pipeline" },{ name: "Prometheus",description: "Monitoring" } ] return ( <> <SEO title="Cloud & DevOps Services - Zion Tech Group" description="Expert cloud migration,DevOps automation,and infrastructure management services. Scale your applications with our cloud and DevOps solutions." keywords="cloud migration,devops,infrastructure as code,CI/CD,AWS,Azure,GCP,Kubernetes" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Cloud & <span className="text-blue-600">DevOps</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Scale your applications with expert cloud migration,DevOps automation,and infrastructure management services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Cloud & DevOps Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions to modernize your infrastructure and accelerate your development process. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <motion.div key={service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service.title} </h3> <p className="text-gray-600 mb-6"> {service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service.pricing}</span> <span>{service.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Technologies We Use </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We work with the latest cloud and DevOps technologies to deliver cutting-edge solutions. </p> </motion.div> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {technologies.map((tech,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {tech.name} </h3> <p className="text-sm text-gray-600"> {tech.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Modernize Your Infrastructure? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you scale your applications with our expert cloud and DevOps services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default CloudDevOpsPage
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Cloud,Server,Shield,Zap,ArrowRight,CheckCircle,Star,Globe,Lock,Settings } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CloudDevOpsPage: React.FC = () => { const services = [ { id: 1,title: "Cloud Migration",description: "Seamlessly migrate your applications and data to the cloud with zero downtime.",features: [ "Assessment and planning","Data migration strategies","Application modernization","Performance optimization","Cost optimization" ],pricing: "Starting at $5,000",delivery: "2-8 weeks",category: "Migration",icon: <Cloud className="w-8 h-8" /> },{ id: 2,title: "DevOps Automation",description: "Implement CI/CD pipelines and automation to accelerate your development process.",features: [ "CI/CD pipeline setup","Automated testing","Deployment automation","Monitoring and alerting","Infrastructure as code" ],pricing: "Starting at $3,000",delivery: "1-4 weeks",category: "Automation",icon: <Zap className="w-8 h-8" /> },{ id: 3,title: "Infrastructure Management",description: "Manage and optimize your cloud infrastructure for maximum performance and cost efficiency.",features: [ "Infrastructure monitoring","Performance optimization","Cost management","Security hardening","24/7 support" ],pricing: "Starting at $2,000/month",delivery: "Ongoing",category: "Management",icon: <Server className="w-8 h-8" /> },{ id: 4,title: "Container Orchestration",description: "Deploy and manage containerized applications with Kubernetes and Docker.",features: [ "Kubernetes setup","Container optimization","Service mesh implementation","Auto-scaling configuration","Health monitoring" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Containers",icon: <Settings className="w-8 h-8" /> },{ id: 5,title: "Security & Compliance",description: "Implement comprehensive security measures and ensure compliance with industry standards.",features: [ "Security assessment","Compliance auditing","Access control setup","Encryption implementation","Security monitoring" ],pricing: "Starting at $3,500",delivery: "2-4 weeks",category: "Security",icon: <Shield className="w-8 h-8" /> },{ id: 6,title: "Multi-Cloud Strategy",description: "Design and implement a multi-cloud strategy for maximum flexibility and redundancy.",features: [ "Multi-cloud architecture","Data synchronization","Disaster recovery","Load balancing","Cost optimization" ],pricing: "Starting at $6,000",delivery: "4-8 weeks",category: "Strategy",icon: <Globe className="w-8 h-8" /> } ] const technologies = [ { name: "AWS",description: "Amazon Web Services" },{ name: "Azure",description: "Microsoft Azure" },{ name: "GCP",description: "Google Cloud Platform" },{ name: "Kubernetes",description: "Container Orchestration" },{ name: "Docker",description: "Containerization" },{ name: "Terraform",description: "Infrastructure as Code" },{ name: "Jenkins",description: "CI/CD Pipeline" },{ name: "Prometheus",description: "Monitoring" } ] return ( <> <SEO title="Cloud & DevOps Services - Zion Tech Group" description="Expert cloud migration,DevOps automation,and infrastructure management services. Scale your applications with our cloud and DevOps solutions." keywords="cloud migration,devops,infrastructure as code,CI/CD,AWS,Azure,GCP,Kubernetes" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Cloud & <span className="text-blue-600">DevOps</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Scale your applications with expert cloud migration,DevOps automation,and infrastructure management services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Cloud & DevOps Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions to modernize your infrastructure and accelerate your development process. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <motion.div key={service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service.title} </h3> <p className="text-gray-600 mb-6"> {service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service.pricing}</span> <span>{service.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Technologies We Use </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We work with the latest cloud and DevOps technologies to deliver cutting-edge solutions. </p> </motion.div> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {technologies.map((tech,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {tech.name} </h3> <p className="text-sm text-gray-600"> {tech.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Modernize Your Infrastructure? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you scale your applications with our expert cloud and DevOps services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default CloudDevOpsPage
;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    whileHover={{ scale: 1 && 1.05 }}
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
export default CloudDevOpsPage;
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Cloud,Server,Shield,Zap,ArrowRight,CheckCircle,Star,Globe,Lock,Settings } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CloudDevOpsPage: React.FC = () => { const services = [ { id: 1,title: "Cloud Migration",description: "Seamlessly migrate your applications and data to the cloud with zero downtime.",features: [ "Assessment and planning","Data migration strategies","Application modernization","Performance optimization","Cost optimization" ],pricing: "Starting at $5,000",delivery: "2-8 weeks",category: "Migration",icon: <Cloud className="w-8 h-8" /> },{ id: 2,title: "DevOps Automation",description: "Implement CI/CD pipelines and automation to accelerate your development process.",features: [ "CI/CD pipeline setup","Automated testing","Deployment automation","Monitoring and alerting","Infrastructure as code" ],pricing: "Starting at $3,000",delivery: "1-4 weeks",category: "Automation",icon: <Zap className="w-8 h-8" /> },{ id: 3,title: "Infrastructure Management",description: "Manage and optimize your cloud infrastructure for maximum performance and cost efficiency.",features: [ "Infrastructure monitoring","Performance optimization","Cost management","Security hardening","24/7 support" ],pricing: "Starting at $2,000/month",delivery: "Ongoing",category: "Management",icon: <Server className="w-8 h-8" /> },{ id: 4,title: "Container Orchestration",description: "Deploy and manage containerized applications with Kubernetes and Docker.",features: [ "Kubernetes setup","Container optimization","Service mesh implementation","Auto-scaling configuration","Health monitoring" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Containers",icon: <Settings className="w-8 h-8" /> },{ id: 5,title: "Security & Compliance",description: "Implement comprehensive security measures and ensure compliance with industry standards.",features: [ "Security assessment","Compliance auditing","Access control setup","Encryption implementation","Security monitoring" ],pricing: "Starting at $3,500",delivery: "2-4 weeks",category: "Security",icon: <Shield className="w-8 h-8" /> },{ id: 6,title: "Multi-Cloud Strategy",description: "Design and implement a multi-cloud strategy for maximum flexibility and redundancy.",features: [ "Multi-cloud architecture","Data synchronization","Disaster recovery","Load balancing","Cost optimization" ],pricing: "Starting at $6,000",delivery: "4-8 weeks",category: "Strategy",icon: <Globe className="w-8 h-8" /> } ] const technologies = [ { name: "AWS",description: "Amazon Web Services" },{ name: "Azure",description: "Microsoft Azure" },{ name: "GCP",description: "Google Cloud Platform" },{ name: "Kubernetes",description: "Container Orchestration" },{ name: "Docker",description: "Containerization" },{ name: "Terraform",description: "Infrastructure as Code" },{ name: "Jenkins",description: "CI/CD Pipeline" },{ name: "Prometheus",description: "Monitoring" } ] return ( <> <SEO title="Cloud & DevOps Services - Zion Tech Group" description="Expert cloud migration,DevOps automation,and infrastructure management services. Scale your applications with our cloud and DevOps solutions." keywords="cloud migration,devops,infrastructure as code,CI/CD,AWS,Azure,GCP,Kubernetes" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Cloud & <span className="text-blue-600">DevOps</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Scale your applications with expert cloud migration,DevOps automation,and infrastructure management services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="#services" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion && motion.a> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion && motion.a> </div> </motion && motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Cloud & DevOps Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions to modernize your infrastructure and accelerate your development process. </p> </motion && motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services && services.map((service,index) => ( <motion && motion.div key={service && service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service && service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service && service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service && service.title} </h3> <p className="text-gray-600 mb-6"> {service && service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service && service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service && service.pricing}</span> <span>{service && service.delivery}</span> </div> <motion && motion.button whileHover={{ scale: 1 && 1.02 }} whileTap={{ scale: 0 && 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion && motion.button> </div> </motion && motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Technologies We Use </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We work with the latest cloud and DevOps technologies to deliver cutting-edge solutions. </p> </motion && motion.div> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {technologies && technologies.map((tech,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {tech && tech.name} </h3> <p className="text-sm text-gray-600"> {tech && tech.description} </p> </motion && motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Modernize Your Infrastructure? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you scale your applications with our expert cloud and DevOps services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion && motion.a> <motion && motion.a href="tel:+13024640950" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion && motion.a> </div> </motion ;
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Cloud,Server,Shield,Zap,ArrowRight,CheckCircle,Star,Globe,Lock,Settings } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CloudDevOpsPage: React.FC = () => { const services = [ { id: 1,title: "Cloud Migration",description: "Seamlessly migrate your applications and data to the cloud with zero downtime.",features: [ "Assessment and planning","Data migration strategies","Application modernization","Performance optimization","Cost optimization" ],pricing: "Starting at $5,000",delivery: "2-8 weeks",category: "Migration",icon: <Cloud className="w-8 h-8" /> },{ id: 2,title: "DevOps Automation",description: "Implement CI/CD pipelines and automation to accelerate your development process.",features: [ "CI/CD pipeline setup","Automated testing","Deployment automation","Monitoring and alerting","Infrastructure as code" ],pricing: "Starting at $3,000",delivery: "1-4 weeks",category: "Automation",icon: <Zap className="w-8 h-8" /> },{ id: 3,title: "Infrastructure Management",description: "Manage and optimize your cloud infrastructure for maximum performance and cost efficiency.",features: [ "Infrastructure monitoring","Performance optimization","Cost management","Security hardening","24/7 support" ],pricing: "Starting at $2,000/month",delivery: "Ongoing",category: "Management",icon: <Server className="w-8 h-8" /> },{ id: 4,title: "Container Orchestration",description: "Deploy and manage containerized applications with Kubernetes and Docker.",features: [ "Kubernetes setup","Container optimization","Service mesh implementation","Auto-scaling configuration","Health monitoring" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Containers",icon: <Settings className="w-8 h-8" /> },{ id: 5,title: "Security & Compliance",description: "Implement comprehensive security measures and ensure compliance with industry standards.",features: [ "Security assessment","Compliance auditing","Access control setup","Encryption implementation","Security monitoring" ],pricing: "Starting at $3,500",delivery: "2-4 weeks",category: "Security",icon: <Shield className="w-8 h-8" /> },{ id: 6,title: "Multi-Cloud Strategy",description: "Design and implement a multi-cloud strategy for maximum flexibility and redundancy.",features: [ "Multi-cloud architecture","Data synchronization","Disaster recovery","Load balancing","Cost optimization" ],pricing: "Starting at $6,000",delivery: "4-8 weeks",category: "Strategy",icon: <Globe className="w-8 h-8" /> } ] const technologies = [ { name: "AWS",description: "Amazon Web Services" },{ name: "Azure",description: "Microsoft Azure" },{ name: "GCP",description: "Google Cloud Platform" },{ name: "Kubernetes",description: "Container Orchestration" },{ name: "Docker",description: "Containerization" },{ name: "Terraform",description: "Infrastructure as Code" },{ name: "Jenkins",description: "CI/CD Pipeline" },{ name: "Prometheus",description: "Monitoring" } ] return ( <> <SEO title="Cloud & DevOps Services - Zion Tech Group" description="Expert cloud migration,DevOps automation,and infrastructure management services. Scale your applications with our cloud and DevOps solutions." keywords="cloud migration,devops,infrastructure as code,CI/CD,AWS,Azure,GCP,Kubernetes" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Cloud & <span className="text-blue-600">DevOps</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Scale your applications with expert cloud migration,DevOps automation,and infrastructure management services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="#services" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion && motion.a> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion && motion.a> </div> </motion && motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Cloud & DevOps Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive solutions to modernize your infrastructure and accelerate your development process. </p> </motion && motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services && services.map((service,index) => ( <motion && motion.div key={service && service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service && service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service && service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service && service.title} </h3> <p className="text-gray-600 mb-6"> {service && service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service && service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service && service.pricing}</span> <span>{service && service.delivery}</span> </div> <motion && motion.button whileHover={{ scale: 1 && 1.02 }} whileTap={{ scale: 0 && 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion && motion.button> </div> </motion && motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Technologies We Use </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We work with the latest cloud and DevOps technologies to deliver cutting-edge solutions. </p> </motion && motion.div> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {technologies && technologies.map((tech,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {tech && tech.name} </h3> <p className="text-sm text-gray-600"> {tech && tech.description} </p> </motion && motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Ready to Modernize Your Infrastructure? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you scale your applications with our expert cloud and DevOps services. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion && motion.a> <motion && motion.a href="tel:+13024640950" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion && motion.a> </div> </motion && motion.div> </div> </section> </main> </PageTransition> </> ) } export default CloudDevOpsPage
origin/cursor/integrate-build-improve-and-re-verify-c7b5
