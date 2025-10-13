import React from 'react';
import { Helmet } from 'react-helmet-async';

const testimonials = [
  {,
    name: "Sarah Johnson",
      role: "CEO",
      content: "Zion Tech Group has transformed our business with their AI solutions.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "TechCorp"
  },
    name: "Michael Chen",
      role: "CTO", ,
    content: "The performance improvements are remarkable. Highly recommended!",
      company: "InnovateLabs"
    name: "Emily Rodriguez",
      role: "Product Manager",
      content: "Outstanding support and cutting-edge technology solutions.",
      company: "FutureTech"
  }
import { Link } from 'react-router-dom';
import { Users, Star, Shield, Zap, Brain, Settings, BarChart3, Mail, MessageSquare, Hand, Sparkles, Target } from 'lucide-react';

"use client";

export default function AIEmailAssistant() {
  const features = [
    icon: <Mail className="w-6 h-6 text-cyan-400" />,
        title: "Smart Classification",
        description:
        "Automatically categorize and prioritize emails based on content and sender.",
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
        title: "Auto-Responses",
        "Generate intelligent responses using AI to handle common inquiries.",
    icon: <Brain className="w-6 h-6 text-yellow-400" />,
        title: "Sentiment Analysis",
        "Analyze email tone and sentiment to provide better customer service.",
    icon: <Settings className="w-6 h-6 text-green-400" />,
        title: "Workflow Automation",
        "Create automated workflows to streamline your email management.",

  const useCases = [
    title: "Customer Support",
        "Handle customer inquiries efficiently with AI-powered responses and routing.",
        icon: <Users className="w-8 h-8 text-blue-400" />,
    title: "Sales Outreach",
        "Generate personalized sales emails and follow-up sequences automatically.",
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Email Marketing",
        "Create compelling marketing campaigns with AI-generated content and optimization.",
        icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    title: "Internal Communications",
        "Streamline internal email processes and improve team collaboration.",
        icon: <Shield className="w-8 h-8 text-purple-400" />,

  const pricingPlans = [
    name: "Starter",
        price: "$29",
        period: "/month",
        description: "Perfect for small teams",
        features: [
        "Up to 1,000 emails/month",
        "Basic AI features",
        "Email classification",
        "Auto-responses",
        "Email support",
        "Basic analytics",
      ],
        popular: false,
    name: "Professional",
        price: "$79",
        description: "Ideal for growing businesses",
        "Up to 10,000 emails/month",
        "Advanced AI features",
        "Sentiment analysis",
        "Workflow automation",
        "Priority support",
        "Advanced analytics",
        "API access",
        popular: true,
    name: "Enterprise",
        price: "$199",
        description: "For large organizations",
        "Unlimited emails",
        "Custom AI training",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",


export default function aiEmailAssistant() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Ai Email Assistant solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Email Assistant</h1>
          <p className="text-xl text-gray-300 mb-8">
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <meta name="description" content="Advanced ai email assistant solutions by Zion Tech Group" />

      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Email Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Email Assistant</h1>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
            ))}

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/50 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI email assistant can transform your business communication

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  {useCase.icon}
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Pricing Plans
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? "ring-2 ring-cyan-500" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-300">
                        {plan.period}
                    <p className="text-gray-300">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-300 flex items-center"
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    }`}

