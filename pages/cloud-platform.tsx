import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Globe, Cloud, Server, Database, Shield, Zap, Brain, Cpu, Users, Target } from 'lucide-react';
import Layout from '../components/layout/Layout';

const CloudPlatformPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Disaster Recovery',
      description: 'Comprehensive disaster recovery across multiple cloud platforms',
      features: ['Cross-platform backup', 'Automated failover', 'RTO optimization', 'Data protection'],
      href: '/multi-cloud-disaster-recovery'
    },
    {
      icon: Database,
      title: 'Managed PostgreSQL High Availability',
      description: 'Enterprise-grade PostgreSQL with high availability and performance',
      features: ['Automatic failover', 'Performance tuning', 'Backup management', '24/7 monitoring'],
      href: '/managed-postgresql-ha'
    },
    {
      icon: Server,
      title: 'Kubernetes RBAC Auditor',
      description: 'Advanced Kubernetes security and access control management',
      features: ['Role-based access control', 'Security auditing', 'Compliance reporting', 'Policy enforcement'],
      href: '/kubernetes-rbac-auditor'
    },
    {
      icon: Shield,
      title: 'Zero Trust Network Architecture',
      description: 'Secure cloud networking with zero trust principles',
      features: ['Network segmentation', 'Identity verification', 'Continuous monitoring', 'Threat prevention'],
      href: '/zero-trust-network-architecture'
    },
    {
      icon: Zap,
      title: 'Serverless Cron Manager',
      description: 'Automated task scheduling and execution in the cloud',
      features: ['Task scheduling', 'Resource optimization', 'Cost management', 'Monitoring & alerts'],
      href: '/serverless-cron-manager'
    },
    {
      icon: Brain,
      title: 'LLM Gateway & Cost Control',
      description: 'Intelligent language model management and cost optimization',
      features: ['Model routing', 'Cost tracking', 'Performance monitoring', 'Usage analytics'],
      href: '/llm-gateway'
    }
  ];

  const benefits = [
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs with intelligent resource management and pricing optimization.'
    },
    {
      title: 'Global Reach',
      description: 'Deploy applications worldwide with our global infrastructure network.'
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with SOC2, ISO, and other compliance certifications.'
    },
    {
      name: 'E-commerce Platforms',
      description: 'High-traffic online retail solutions',
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      name: 'Data Processing',
      description: 'Big data analytics and processing',
      icon: <Database className="w-6 h-6" />
    },
    {
      name: 'AI/ML Workloads',
      description: 'Machine learning model training and deployment',
      icon: <Brain className="w-6 h-6" />
    }

    <Layout 

import React from 'react';
import Head from 'next/head';
import {;
export default function CloudPlatformPage() {;
      icon: <Server className='w-8 h-8 text-white' />,;
      icon: <Database className='w-8 h-8 text-white' />,;
      icon: <Globe className='w-8 h-8 text-white' />,;
      icon: <Shield className='w-8 h-8 text-white' />,;


export default function CloudPlatformPage() {
      icon: <Server className="w-8 h-8 text-white" />,
      icon: <Database className="w-8 h-8 text-white" />,
      icon: <Globe className="w-8 h-8 text-white" />,
      icon: <Shield className="w-8 h-8 text-white" />,




export default function CloudPlatformPage() {_const _features = [
      icon: <Server className=&quot;w-8 h-8 text-white&quot; />,
      icon: <Database className=&quot;w-8 h-8 text-white&quot; />,
      icon: <Globe className=&quot;w-8 h-8 text-white&quot; />,
      icon: <Shield className=&quot;w-8 h-8 text-white&quot; />,


import Head from 'next/head',
import { Cloud, Shield, Globe, Server, Database, ArrowRight, Check } from 'lucide-react',
export default function CloudPlatformPage() {
      icon: <Server className="w-8 h-8 text-white" />,
      icon: <Database className="w-8 h-8 text-white" />,
      icon: <Globe className="w-8 h-8 text-white" />,
      icon: <Shield className="w-8 h-8 text-white" />,


      <Head>
      </Head>

                <Cloud className="w-4 h-4 mr-2" />










                        <Check className='w-4 h-4 text-blue-500' />;



                        <Check className="w-4 h-4 text-blue-500" />

              


                    <Cloud className="w-24 h-24 mx-auto mb-6 text-blue-400" />



                      <Globe className="w-4 h-4 mr-2" />




              </Link>
              </Link>
            </div>
          </div>
        </div>
      </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Platform Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to optimize performance, security, and scalability
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Scale Your Cloud Infrastructure
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you build a robust and scalable cloud platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CloudPlatform;


                        <Check className="w-4 h-4 text-blue-500" />;
                    <Cloud className='w-24 h-24 mx-auto mb-6 text-blue-400' />;
                      <Globe className='w-4 h-4 mr-2' />                      15+ regions worldwide;
      icon: <Server className='w - 8 h - 8 text - white' />,
      icon: <Database className='w - 8 h - 8 text - white' />,
      icon: <Globe className='w - 8 h - 8 text - white' />,
      icon: <Shield className='w - 8 h - 8 text - white' />,
      <Head>;
      </Head>;
                <Cloud className='w - 4 h - 4 mr - 2' />;
                <ArrowRight className='w - 5 h - 5 ml - 2' />;
                        <Check className='w - 4 h - 4 text - blue - 500' />;
                    <Cloud className='w - 24 h - 24 mx - auto mb - 6 text - blue - 400' />;
                      <Globe className='w - 4 h - 4 mr - 2' />                      15+ regions worldwide;





