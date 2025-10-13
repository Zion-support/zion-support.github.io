<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Network } from 'lucide-react';
import { Code } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Activity } from 'lucide-react';
import { Cloud } from 'lucide-react';

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
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function cloudInfrastructure() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Cloud Infrastructure solutions by Zion Tech Group" />
=======
        <meta name="description" content="Advanced cloud infrastructure solutions by Zion Tech Group" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
<<<<<<< HEAD
          <h1 className="text-4xl font-bold mb-8">Cloud Infrastructure</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Infrastructure
=======
  const capabilities = [
    "Multi-cloud deployment and management",
    "Automated scaling and load balancing",
    "High availability and disaster recovery",
    "Security and compliance monitoring"
  ];

  const testimonials = [
    {,
    name: "Sarah Johnson",
        role: "CTO",
        company: "TechCorp",
        content: "Zion's cloud infrastructure transformed our business operations."
    }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
          </p>
<<<<<<< HEAD
=======

export default function CloudinfrastructurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cloud Infrastructure</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======

}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
