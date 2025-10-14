<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Shield, CheckCircle, ArrowRight, Globe, BarChart3, Settings, Clock, Award, Star, Activity, Lock } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CloudInfrastructure = () => {
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with zero downtime and minimal risk",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Zero-downtime migration", "Data integrity assurance", "Cost optimization", "Security compliance"],
      price: "From $2,999/month"
    },
    {
      title: "Infrastructure as Code",
      description: "Automate infrastructure provisioning and management using modern IaC tools and best practices",
      icon: <Settings className="w-8 h-8" />,
      features: ["Terraform automation", "Version control", "Environment consistency", "Disaster recovery"],
      price: "From $1,999/month"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure from threats and vulnerabilities",
      icon: <Shield className="w-8 h-8" />,
      features: ["Identity management", "Network security", "Data encryption", "Compliance monitoring"],
      price: "From $1,499/month"
    },
    {
      title: "Auto Scaling",
      description: "Dynamic resource scaling based on demand to optimize costs and ensure optimal performance",
      icon: <Activity className="w-8 h-8" />,
      features: ["Automatic scaling", "Cost optimization", "Performance monitoring", "Load balancing"],
      price: "From $999/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small businesses starting their cloud journey",
      features: [
        "Up to 10 servers",
        "Basic monitoring",
        "Standard support",
        "Cloud migration assistance",
        "Security baseline",
        "Monthly reporting"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing businesses with complex infrastructure needs",
      features: [
        "Up to 50 servers",
        "Advanced monitoring",
        "Priority support",
        "Full cloud migration",
        "Advanced security",
        "Weekly reporting",
        "Auto-scaling setup",
        "Disaster recovery"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Comprehensive solution for large organizations with mission-critical infrastructure",
      features: [
        "Unlimited servers",
        "Real-time monitoring",
        "24/7 dedicated support",
        "Custom migration strategy",
        "Enterprise security",
        "Daily reporting",
        "Custom auto-scaling",
        "Multi-region setup",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Multi-Cloud Strategy",
      description: "Design and implement hybrid and multi-cloud architectures for maximum flexibility and redundancy",
      icon: <Globe className="w-6 h-6" />,
      stats: "99.99% uptime"
    },
    {
      title: "Cost Optimization",
      description: "Reduce cloud costs by up to 40% through intelligent resource management and optimization",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "40% cost reduction"
    },
    {
      title: "Security First",
      description: "Implement enterprise-grade security measures to protect your cloud infrastructure",
      icon: <Lock className="w-6 h-6" />,
      stats: "Zero security incidents"
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring and alerting to ensure optimal performance and availability",
      icon: <Activity className="w-6 h-6" />,
      stats: "Sub-second response"
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      company: "TechStart Solutions",
      role: "CTO",
      content: "Zion's cloud infrastructure services transformed our operations. We achieved 99.99% uptime and reduced costs by 35% in the first year.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Sarah Rodriguez",
      company: "E-commerce Plus",
      role: "VP of Engineering",
      content: "The migration was seamless and the ongoing support is exceptional. Our applications now scale automatically and perform better than ever.",
      rating: 5,
      avatar: "SR"
    },
    {
      name: "Michael Johnson",
      company: "Financial Services Corp",
      role: "IT Director",
      content: "Enterprise-grade security and compliance features gave us confidence to move our critical systems to the cloud. Highly recommended.",
      rating: 5,
      avatar: "MJ"
    }
  ];

  const stats = [
    { number: "500+", label: "Infrastructure Projects", icon: <Server className="w-6 h-6" /> },
    { number: "99.99%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Savings", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring & Support", icon: <Clock className="w-6 h-6" /> }
  ];
=======
<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
<<<<<<< HEAD
'use client'
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
'use client';
export default function Infrastructure() { return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Professional Infrastructure services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="cloud infrastructure, cloud services, IT services, Zion Tech Group, cloud computing" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud infrastructure solutions designed for scalability, security, and performance.;
          </p>
        </div>
            Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span></h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud infrastructure solutions designed for scalability, security, and performance.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Migration</h3>
            <p className="text-gray-300 mb-4">
              Seamlessly migrate your applications and data to the cloud with minimal downtime.;
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AWS, Azure, GCP expertise</li>
              <li>• Zero-downtime migration</li>
              <li>• Cost optimization</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4"></h3>
            <p className="text-gray-300 mb-4">
              Comprehensive security solutions to protect your cloud infrastructure.;
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Identity and access management</li>
              <li>• Data encryption</li>
              <li>• Compliance monitoring</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Auto Scaling</h3>
            <p className="text-gray-300 mb-4">
              Automatically scale your infrastructure based on demand and usage patterns.;
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Load balancing</li>
              <li>• Resource optimization</li>
              <li>• Cost efficiency</li>
            </ul>
          </div>
        </div>
              Seamlessly migrate your applications and data to the cloud with minimal downtime.</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AWS, Azure, GCP expertise</li>
              <li>• Zero-downtime migration</li>
              <li>• Cost optimization</li></ul></div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4"></h3>
            <p className="text-gray-300 mb-4">
              Comprehensive security solutions to protect your cloud infrastructure.</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Identity and access management</li>
              <li>• Data encryption</li>
              <li>• Compliance monitoring</li></ul></div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Auto Scaling</h3>
            <p className="text-gray-300 mb-4">
              Automatically scale your infrastructure based on demand and usage patterns.</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Load balancing</li>
              <li>• Resource optimization</li>
              <li>• Cost efficiency</li></ul></div></div>
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Our cloud infrastructure experts are ready to help you build a scalable, secure, and efficient cloud environment.;
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today;
            </button>
          </div>
=======
export default function Infrastructure() {
=======
import React from "react";
import { Helmet } from "react-helmet-async";
>>>>>>> origin/main
>>>>>>> origin/main

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Home - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
            </button>;
          </div>
        </div>
      </div>
    </div>
  ); }
}
              Our cloud infrastructure experts are ready to help you build a scalable, secure, and efficient cloud environment.</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today</button></div></div></div></div>
  )}
'
=======
};

export default HomePage;
>>>>>>> origin/main
