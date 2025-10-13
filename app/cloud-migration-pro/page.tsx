import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const CloudMigrationProPage = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security protocols throughout the migration process'    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security throughout the migration process",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/project",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 10 servers",
        "Basic migration planning",
        "Email support",
        "Standard documentation",
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security-First Approach',
    }
  ]

  const pricingPlans = [
    {
      name: 'Small Business',
      ],
      popular: false,
    },
    {
      name: 'Enterprise',
      ],
      popular: true,
    },
    {
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Data Migration',
      description: 'Safe and secure migration of databases and data warehouses'    },
  ];

  const testimonials = [
    {
}
