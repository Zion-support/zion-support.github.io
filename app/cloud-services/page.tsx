<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with advanced threat protection"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "High-performance cloud infrastructure for optimal speed"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Deploy applications worldwide with our global network"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      description: "Comprehensive data storage and management solutions"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Robust cloud infrastructure for all your needs"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with cloud",
      features: [
        "Basic cloud infrastructure",
        "24/7 email support",
        "Standard security features",
        "10GB storage included",
        "Monthly backups"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Advanced cloud infrastructure",
        "Priority support",
        "Enhanced security features",
        "100GB storage included",
        "Daily backups",
        "Load balancing",
        "Auto-scaling"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex requirements",
      features: [
        "Enterprise cloud infrastructure",
        "24/7 dedicated support",
        "Advanced security suite",
        "Unlimited storage",
        "Real-time backups",
        "Advanced monitoring",
        "Custom configurations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];
=======
<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Page() {
=======
import React from "react";
import { Helmet } from "react-helmet-async";
>>>>>>> origin/main
>>>>>>> origin/main

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
=======
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Home - Zion Tech Group" />
>>>>>>> origin/main
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  ); }
            Page</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today</button></div></div></div></div>
  )}
            </button>;
          </div>
        </div>
      </div>
    </div>
  );}
}'
=======
  );
<<<<<<< HEAD
}
  );
=======
};

export default HomePage;
>>>>>>> origin/main
>>>>>>> origin/main
