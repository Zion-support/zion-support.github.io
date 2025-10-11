'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Package, Workflow, Wifi, MessageSquare, ShoppingCart, Phone, Mail, MapPin, Layers, Activity, RefreshCw, Download, Upload, Eye, Filter } from 'lucide-react';

const AdvancedCloudInfrastructurePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Advanced Cloud Infrastructure Solutions | Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade cloud infrastructure solutions with multi-cloud architecture, auto-scaling, disaster recovery, and 99.99% uptime guarantee. Transform your IT infrastructure." />
        <meta name="keywords" content="cloud infrastructure, multi-cloud, AWS, Azure, GCP, cloud migration, disaster recovery, auto-scaling, cloud security" />
        <meta property="og:title" content="Advanced Cloud Infrastructure Solutions | Zion Tech Group" />
        <meta property="og:description" content="Enterprise-grade cloud infrastructure solutions with multi-cloud architecture, auto-scaling, disaster recovery, and 99.99% uptime guarantee. Transform your IT infrastructure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/advanced-cloud-infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-cloud-infrastructure" />
      </Helmet>
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Enterprise Cloud Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Enterprise-grade cloud infrastructure solutions with multi-cloud architecture, auto-scaling, 
                disaster recovery, and 99.99% uptime guarantee. Transform your IT infrastructure today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Cloud Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#demo" className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                  <Server className="w-5 h-5 mr-2" />
                  View Architecture
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud infrastructure solutions designed for enterprise scalability, security, and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Multi-Cloud Architecture</h3>
                <p className="text-gray-300 mb-4">
                  Design and implement multi-cloud strategies across AWS, Azure, and GCP for optimal performance and cost efficiency.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Cross-cloud migration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Vendor lock-in prevention</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Cost optimization</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Auto-Scaling Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Implement intelligent auto-scaling to handle traffic spikes and optimize resource utilization automatically.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Horizontal scaling</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Vertical scaling</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Predictive scaling</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Security</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security solutions including encryption, access control, and compliance management.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />End-to-end encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Identity management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Compliance monitoring</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Disaster Recovery</h3>
                <p className="text-gray-300 mb-4">
                  Robust disaster recovery solutions with RTO/RPO optimization and automated failover capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Automated backups</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Cross-region replication</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Failover testing</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Container Orchestration</h3>
                <p className="text-gray-300 mb-4">
                  Kubernetes and Docker container management with microservices architecture and service mesh.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Kubernetes clusters</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Service mesh</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />CI/CD pipelines</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Monitoring & Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Advanced monitoring solutions with real-time analytics, alerting, and performance optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time monitoring</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Performance analytics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Cost optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Provider Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Certified expertise across all major cloud platforms with specialized solutions for each provider.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-900/50 to-yellow-900/50 rounded-xl p-8 border border-orange-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Amazon Web Services</h3>
                    <p className="text-orange-200">AWS Certified Solutions</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />EC2, S3, RDS, Lambda</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />EKS, ECS, Fargate</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />CloudFormation, CDK</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Well-Architected Framework</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl p-8 border border-blue-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Microsoft Azure</h3>
                    <p className="text-blue-200">Azure Certified Solutions</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Virtual Machines, Storage</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />AKS, Container Instances</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />ARM Templates, Bicep</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Azure Well-Architected</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-xl p-8 border border-green-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Google Cloud Platform</h3>
                    <p className="text-green-200">GCP Certified Solutions</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Compute Engine, Cloud Storage</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />GKE, Cloud Run</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Deployment Manager, Terraform</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Cloud Architecture Framework</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamless migration to the cloud with zero downtime and minimal business disruption.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Comprehensive analysis of your current infrastructure and cloud readiness</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Planning</h3>
                <p className="text-gray-300 text-sm">Detailed migration strategy and timeline with risk mitigation</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Migration</h3>
                <p className="text-gray-300 text-sm">Zero-downtime migration with automated tools and monitoring</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300 text-sm">Post-migration optimization for performance and cost efficiency</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Infrastructure Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for cloud infrastructure services with no hidden costs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Basic Cloud</h3>
                  <p className="text-gray-300 mb-4">Small to medium businesses</p>
                  <div className="text-4xl font-bold text-white mb-2">$2,999<span className="text-lg text-gray-300">/month</span></div>
                  <p className="text-sm text-gray-400">Up to 10 servers</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Single cloud provider</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Basic monitoring</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Standard support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />99.9% uptime SLA</li>
                </ul>
                <a href="#contact" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center block">
                  Get Started
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-8 border border-blue-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Cloud</h3>
                  <p className="text-blue-100 mb-4">Large organizations</p>
                  <div className="text-4xl font-bold text-white mb-2">$9,999<span className="text-lg text-blue-100">/month</span></div>
                  <p className="text-sm text-blue-200">Unlimited servers</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Multi-cloud architecture</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Advanced monitoring</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Priority support</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />99.99% uptime SLA</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Disaster recovery</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />24/7 monitoring</li>
                </ul>
                <a href="#contact" className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 text-center block">
                  Get Started
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Custom Solution</h3>
                  <p className="text-gray-300 mb-4">Tailored infrastructure</p>
                  <div className="text-4xl font-bold text-white mb-2">Custom</div>
                  <p className="text-sm text-gray-400">Based on requirements</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Custom architecture</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Dedicated resources</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />On-premise hybrid</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Dedicated support team</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />SLA guarantee</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Training & certification</li>
                </ul>
                <a href="#contact" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact our cloud infrastructure experts for a free assessment and customized solution.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your company" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your infrastructure needs..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdvancedCloudInfrastructurePage;