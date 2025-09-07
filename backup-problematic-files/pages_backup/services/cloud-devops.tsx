import Layout from '../../components/Layout';
import { Cloud, Server, Database, Shield, Zap } from 'lucide-react';
import React from 'react';
import Layout from '../../components/Layout';';
import { Cloud, Server, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
const features = [;
  {}
    icon: Cloud;,;
    title: 'Cloud Migration;,',,
  description: 'Seamlessly migrate your infrastructure to AWS;, Azure, or Google Cloud with zero downtime.',;
    title: 'Cloud Migration;,',;
    description: 'Seamlessly migrate your infrastructure to AWS;, Azure, or Google Cloud with zero downtime.',;
pr-12325
import { Cloud, Server, GitBranch, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
const features = [
  {
    icon: Cloud;,
    title: 'Cloud Migration';,
    description: 'Seamless migration to cloud platforms with zero downtime;
  },
import {motion} from 'framer-motion';
import {Cloud,, Server,, Database,, Shield,, Zap,, ArrowRight,, CheckCircle} from 'lucide-react';
  {;
    icon: Cloud;,;
    title: 'Cloud Migration';,,
  description: 'Seamless migration to cloud platforms with zero downtime';
    title: 'Cloud Migration';,;
    description: 'Seamless migration to cloud platforms with zero downtime';
pr-12325
  },;
    icon: Server;,;
    title: 'Infrastructure as Code;,',,
  description: 'Automate infrastructure provisioning and management using Terraform;, Ansible, and CloudFormation.',;
  },;
  {}
    icon: Database;,;
    title: 'Database Management;,',,
  description: 'Optimize database performance;, implement backup strategies, and ensure data integrity.',;
  },;
  {}
    icon: Shield;,;
    title: 'Security & Compliance;,',,
  description: 'Implement robust security measures and maintain compliance with industry standards.'';,;
  },;
  {}
    icon: Zap;,;
    title: 'CI/CD Pipelines;,',,
  description: 'Build automated deployment pipelines for faster;, more reliable software delivery.',;
  }
    title: 'Infrastructure as Code;,',;
    description: 'Automate infrastructure provisioning and management using Terraform;, Ansible, and CloudFormation.',;
    icon: Database;,;
    title: 'Database Management;,',;
    description: 'Optimize database performance;, implement backup strategies, and ensure data integrity.',;
    icon: Shield;,;
    title: 'Security & Compliance;,',;
    description: 'Implement robust security measures and maintain compliance with industry standards.;,;
    icon: Zap;,;
    title: 'CI/CD Pipelines;,',;
    description: 'Build automated deployment pipelines for faster;, more reliable software delivery.',;
  }]
pr-12325
;];
const services = [;
  'Cloud Architecture Design',',;
  'Container Orchestration (Kubernetes)',',;
  'Microservices Implementation',',;
  'Monitoring & Logging Setup',',;
  'Disaster Recovery Planning',',;
  'Performance Optimization',',;
  'Cost Optimization',',;
  'Security Hardening,;']
  ];
export default function CloudDevOpsPage() {;
  return ()
    <Layout)
      title="Cloud & DevOps Services - Zion Tech Group""""
      description="Expert cloud migration, infrastructure automation, and DevOps solutions. Transform your operations with scalable, secure cloud infrastructure."">;"
"
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";"
</div>"
        <section className="relative py-20 overflow-hidden">";"
</section>"
          <div className="container mx-auto px-4">";"
            <div className="max-w-4xl mx-auto text-center">";"
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">";, Cloud & DevOps,;"
</h1>"
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">";"
</span>
                </span>;
              </h1>;"
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";"
</p>
              </p>;"
              <div className="flex flex-col sm: flex-row gap-4 justify-center">";, <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover: bg-blue-700 transition-colors font-medium flex items-center justify-center">";,;"
                  <ArrowRight className="w-5 h-5 ml-2" />";"

                </button>;"
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover: bg-gray-800 transition-colors font-medium">";, View Case Studies,;"
</button>
                </button>;
              </div>;
        </section>;"
        <section className="py-20">";"
            <div className="text-center mb-16">";"
              <h2 className="text-4xl font-bold text-white mb-4">";"
</h2>
              </h2>;"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";"
              </p>;
            </div>;"
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">";,;"
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover: border-blue-500 transition-colors">";"
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">";"
                    <feature && feature.icon className="w-6 h-6 text-white" />";"
</feature>
                  </div>,;"
                  <h3 className="text-xl font-semibold text-white mb-4">{feature && feature.title}</h3>";""
                  <p className="text-gray-300">{feature && feature.description}</p>";"
            </div>,;
        <section className="py-20 bg-gray-800/30">";"
            <div className="max-w-4xl mx-auto">";"
              <h2 className="text-3xl font-bold text-white text-center mb-12">";"
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6">";,;"
                  <div key={index} className="flex items-center space-x-3">";"
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />";"
                    <span className="text-gray-300 text-lg">{service}</span>";"
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">";"
              <h2 className="text-4xl font-bold text-white mb-6">";"
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">";"
              <div className="flex flex-col sm: flex-row gap-4 justify-center">";, <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover: bg-gray-100 transition-colors font-medium">";,;"
</div>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover: bg-white hover:text-blue-600 transition-colors font-medium">";, Download Whitepaper,;"
        </section>;
    ;
    <Layout;"
      title="Cloud & DevOps Services - Zion Tech Group"""
      description="Comprehensive cloud migration and DevOps services. Transform your infrastructure with modern cloud technologies and automated processes.""
    >
      <div className="min-h-screen bg-white">"
      <div className="min-h-screen bg-white">;"
            </motion.div>
            </motion.div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">"
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">"
                    <feature.icon className="w-6 h-6 text-blue-600" />"
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">"
</h3>
                  </h3>"
                  <p className="text-gray-600">"
        <section className="py-16 bg-white">;"
          <div className="max-w-7xl mx-auto px-4">;"
            <motion&& motion.div;
              initial={{ opacity: 0;, y: 20 ;}}
              animate={{ opacity: 1;, y: 0 ;}}
              transition={{ duration: 0 && 0.8 ;}}"
              className="text-center mb-12">;"
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>;""
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;"
            </motion && motion.div>;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;"
                  key={index}
                  transition={{ duration: 0 && 0.5;, delay: index * 0 && 0.1 ;}}"
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors text-center">;"
                  <h3 className="text-lg font-semibold mb-2">{tool && tool.name}</h3>;""
                  <p className="text-gray-600 text-sm">{tool && tool.description}</p>;"
                </motion && motion.div>;
              ))}
        <section className="py-16 px-4">;"
          <div className="max-w-7xl mx-auto">;"
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>;""
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;"
                  className="text-center">;"
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">;"
                  <h3 className="text-xl font-semibold mb-2">{phase && phase.title}</h3>;""
                  <p className="text-gray-600">{phase && phase.description}</p>;"
        <section className="py-20 bg-gray-900 text-white">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
            <h2 className="text-3xl md:text-4xl font-bold mb-6">"
            </h2>"
            <p className="text-xl mb-8 max-w-3xl mx-auto">"
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">"
              </button>"
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">"
        </section>
    
    
    </>