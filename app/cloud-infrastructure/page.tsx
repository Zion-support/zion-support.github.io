<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, CheckCircle, ArrowRight, Globe, BarChart3, Settings, Activity, Lock } from 'lucide-react';
=======
import React from 'react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Network } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Code } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Activity } from 'lucide-react';
import { Cloud } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

const CloudInfrastructure = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

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

  const stats = [
    {
      number: "99.99%",
      label: "Uptime Guarantee",
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      number: "40%",
      label: "Cost Reduction",
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />
    },
    {
      number: "0",
      label: "Security Incidents",
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      number: "<1s",
      label: "Response Time",
      icon: <Activity className="w-6 h-6 text-purple-400" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our cloud infrastructure. We achieved 40% cost savings while improving performance.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "Their cloud migration expertise saved us months of work. Zero downtime and seamless transition.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of IT, InnovateLab",
      content: "The security implementation was flawless. We now have enterprise-grade protection at a fraction of the cost.",
      avatar: "ER"
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
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ArrowRight, Activity, BarChart3, CheckCircle } from 'lucide-react';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

export default function CloudInfrastructurePage() {
  const stats = [
    { label: "Uptime", value: "99.9%", icon: <Activity className="w-6 h-6" /> },
    { label: "Cost Savings", value: "40%", icon: <BarChart3 className="w-6 h-6" /> },
    { label: "Performance", value: "3x Faster", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const capabilities = [
    "Multi-cloud deployment and management",
    "Automated scaling and load balancing",
    "High availability and disaster recovery",
    "Security and compliance monitoring"
  ];

  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "CTO", 
      company: "TechCorp", 
      content: "Zion's cloud infrastructure transformed our business operations." 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services for businesses" />
      </Helmet>
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional cloud infrastructure services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
