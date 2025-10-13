import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Package, Zap, BarChart3, Users, CheckCircle, ArrowRight, Brain, Target, Globe, Shield } from 'lucide-react';
<<<<<<< HEAD
=======
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Package } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
const SmartInventoryOptimizerPage = () => {
  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const benefits: string[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Reorder point alerts",
        "Basic analytics",
        "Email support",
        "1 warehouse location"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Supplier integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

}