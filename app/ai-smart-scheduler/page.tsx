import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Calendar } from 'lucide-react';

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      role: "Operations Manager",
      content: "AI Smart Scheduler has revolutionized our team coordination. It automatically finds the best meeting times and eliminates scheduling conflicts.",
      rating: 5,
      avatar: "SJ"
    },
      name: "Michael Chen",
      company: "Global Consulting",
      role: "Project Director",
      content: "The AI understands our team's preferences and automatically schedules meetings that work for everyone. It's like having a personal assistant.",
      avatar: "MC"
      name: "Emily Rodriguez",
      company: "Remote Teams Inc",
      role: "Team Lead",
      content: "Managing a distributed team across time zones is now effortless. The AI handles all the complexity and finds optimal meeting times.",
      avatar: "ER"
    }
  ];

export default function aiSmartScheduler() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Smart Scheduler - Zion Tech Group</title>
        <meta name="description" content="Ai Smart Scheduler solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Smart Scheduler</h1>
          <p className="text-xl text-gray-300 mb-8">

  {,
      role: "CEO",
      content: "Zion Tech Group has transformed our business with their AI solutions.",
      avatar: "/api/placeholder/60/60",
      company: "TechCorp"
      role: "CTO", ,
    content: "The performance improvements are remarkable. Highly recommended!",
      company: "InnovateLabs"
      role: "Product Manager",
      content: "Outstanding support and cutting-edge technology solutions.",
      company: "FutureTech"

  const features = [
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
        title: "AI-Powered Scheduling",
        description:
        "Intelligent scheduling that learns from your patterns and preferences",
    icon: <Users className="w-6 h-6 text-purple-400" />,
        title: "Team Coordination",
        "Seamlessly coordinate meetings across multiple time zones and schedules",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Auto-Optimization",
        "Automatically finds the best meeting times for maximum productivity",
    icon: <Globe className="w-6 h-6 text-green-400" />,
        title: "Global Integration",
        description: "Works with all major calendar platforms and time zones",

  const pricingPlans = [
    name: "Starter",
        price: "$29",
        period: "/month",
        description: "Perfect for individuals and small teams",
        features: [
        "Intelligent scheduling that learns from your patterns and preferences"},
        "Seamlessly coordinate meetings across multiple time zones and schedules"},
        "Automatically finds the best meeting times for maximum productivity"},
      description: "Works with all major calendar platforms and time zones"},

        "Up to 5 team members",
        "Basic AI scheduling",
        "Calendar integration",
        "Email notifications",
        "Mobile app access",
      ],
        popular: false,
    name: "Professional",
        price: "$79",
        description: "Ideal for growing businesses",
      popular: false},
        "Up to 25 team members",
        "Advanced AI optimization",
        "Custom meeting templates",
        "Analytics dashboard",
        "Priority support",
        "API access",
        popular: true,
    name: "Enterprise",
        price: "$199",
        description: "For large organizations",
      popular: true},
        "Unlimited team members",
        "Custom AI training",
        "White-label options",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations",


    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <meta name="description" content="Advanced ai smart scheduler solutions by Zion Tech Group" />

      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Smart Scheduler
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Smart Scheduler</h1>
            Advanced AI and IT solutions for your business needs.

          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              Advanced technology integration and optimization.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              Scalable and secure implementation.

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>

  );

import { Link } from 'react-router-dom';
import { Brain, Users, Zap, Globe, Clock, CheckCircle } from 'lucide-react';
import Layout from "../layout";
