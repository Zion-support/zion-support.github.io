<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Network } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';

export default function Cybersecurity() {

const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
  ];
const capabilities = [
    "Machine Learning Models",
    "Real-time Data Processing",
    "Risk Assessment Algorithms",
    "Predictive Analytics",
    "Automated Reporting",
    "API Integration"
  ];
const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      icon: "Cloud"
    },
    {
      title: "Security Solutions",
      description: "Advanced security and compliance",
      icon: "Shield"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your cloud performance",
      icon: "Zap"
  ];
  return null;
};

export default function Page() {

  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const services = [
    {
      title: "AI Cybersecurity Suite",
      description: "Advanced AI-powered threat detection and response system. Real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["AI Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions including vulnerability assessments, penetration testing, and security architecture design.",
      icon: <Lock className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture", "Risk Management"]
    },
    {
      title: "Advanced Security Suite",
      description: "Enterprise-grade security with advanced threat protection, identity management, and security automation capabilities.",
      icon: <AlertTriangle className="w-8 h-8" />,
      path: "/advanced-security-suite",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $499/month",
      features: ["Threat Protection", "Identity Management", "Security Automation", "Incident Response"]
    },
    {
      title: "Security Monitoring",
      description: "Continuous security monitoring with real-time alerts, log analysis, and security event correlation across your entire infrastructure.",
      icon: <Eye className="w-8 h-8" />,
      path: "/security-monitoring-suite",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $249/month",
      features: ["Real-time Monitoring", "Log Analysis", "Event Correlation", "Alert Management"]
    },
    {
      title: "Network Security",
      description: "Comprehensive network security solutions including firewall management, intrusion detection, and network segmentation.",
      icon: <Database className="w-8 h-8" />,
      path: "/network-security",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      features: ["Firewall Management", "Intrusion Detection", "Network Segmentation", "Traffic Analysis"]
    },
    {
      title: "Security Automation",
      description: "Automated security processes including vulnerability scanning, patch management, and security policy enforcement.",
      icon: <Users className="w-8 h-8" />,
      path: "/security-automation",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      features: ["Vulnerability Scanning", "Patch Management", "Policy Enforcement", "Compliance Automation"]
  ];

  return null;
};

export default function CybersecurityPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Cybersecurity solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Cybersecurity</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive cybersecurity solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Lock, Eye, AlertTriangle, FileText, Server, Network } from 'lucide-react'

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and risks.',
      features: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Compliance audit']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Advanced encryption and data security solutions.',
      features: ['Data encryption', 'Access controls', 'Data backup', 'Recovery planning']
    },
    {
      icon: Eye,
      title: 'Threat Monitoring',
      description: '24/7 monitoring and threat detection services.',
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security alerts']
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Secure network infrastructure and firewall management.',
      features: ['Firewall configuration', 'Network segmentation', 'VPN setup', 'Traffic monitoring']
    },
    {
      icon: Users,
      title: 'Identity Management',
      description: 'Secure user authentication and access management.',
      features: ['Multi-factor authentication', 'Single sign-on', 'User provisioning', 'Access reviews']
    },
    {
      icon: FileText,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards and regulations.',
      features: ['GDPR compliance', 'HIPAA compliance', 'SOC 2', 'ISO 27001']
    }
  ]

  const threats = [
    {
      name: 'Phishing Attacks',
      description: 'Deceptive emails and messages designed to steal sensitive information',
      icon: AlertTriangle,
      severity: 'High'
    },
    {
      name: 'Ransomware',
      description: 'Malicious software that encrypts data and demands payment',
      icon: Lock,
      severity: 'Critical'
    },
    {
      name: 'Data Breaches',
      description: 'Unauthorized access to sensitive or confidential information',
      icon: Database,
      severity: 'High'
    },
    {
      name: 'Insider Threats',
      description: 'Security risks from within the organization',
      icon: Users,
      severity: 'Medium'
    }
  ]

  const stats = [
    { label: 'Security Incidents Prevented', value: '10,000+', icon: Shield },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Response Time', value: '<1 hour', icon: Clock },
    { label: 'Compliance Rate', value: '100%', icon: CheckCircle }
  ]

  return (
    <>
      <Helmet>
        <title>Cybersecurity | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats and ensure compliance." />
        <meta name="keywords" content="cybersecurity, security audit, data protection, threat monitoring, compliance, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business from evolving cyber threats with our comprehensive security solutions. 
              We provide end-to-end cybersecurity services to keep your data and systems secure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer a comprehensive suite of cybersecurity services designed to protect your 
                business from all types of cyber threats.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Common Cyber Threats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the threats is the first step in protecting your business. 
                Here are the most common cyber threats we help defend against.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <threat.icon className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">{threat.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          threat.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                          threat.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {threat.severity}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{threat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't Wait for a Breach
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Cyber threats are constantly evolving. Protect your business today with our 
              comprehensive cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default CybersecurityPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
