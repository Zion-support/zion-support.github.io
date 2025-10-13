import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function zionAiProjectManagerPro() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Project Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Project Manager Pro solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Zion Ai Project Manager Pro</h1>
          <p className="text-xl text-gray-300 mb-8">
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <meta name="description" content="Advanced zion ai project manager pro solutions by Zion Tech Group" />

      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Ai Project Manager Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion Ai Project Manager Pro</h1>
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
import { useState, useEffect } from 'react';
import { Calendar, Brain, Users, Zap, CheckCircle, Star, Award, BarChart3, Target, Sparkles, TrendingUp, Monitor, FileText, MessageSquare, Workflow, Shield, Lightbulb, GitBranch, Timer } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';

const ZionAIProjectManagerProPage = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const pricingPlans = [
    {,
    name: "Starter",
        price: "$19",
        period: "per user/month",
        description: "Perfect for small teams",
        features: [
        "Up to 10 projects",
        "Basic AI task management",
        "5 team members",
        "Email support",
        "Standard templates",
        "Basic analytics",
        "Mobile app access"
      ],
        popular: false,
        color: "from-gray-500 to-gray-600"
      color: "from-gray-500 to-gray-600",
    },
    name: "Professional",
        price: "$49",
        description: "Most popular for growing teams",
        "Unlimited projects",
        "Advanced AI features",
        "Unlimited team members",
        "Priority support",
        "Custom workflows",
        "Advanced analytics",
        "API access",
        "Integration tools",
        "Time tracking",
        "Resource management"
        popular: true,
        color: "from-cyan-500 to-purple-600"
      color: "from-cyan-500 to-purple-600",
    name: "Enterprise",
        price: "$99",
        description: "For large organizations",
        "Everything in Professional",
        "Custom AI models",
        "Dedicated support",
        "White-label options",
        "Advanced security",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment",
        "SLA guarantees"
        color: "from-purple-500 to-pink-500"
      color: "from-purple-500 to-pink-500",
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
          </p>
          </p>
    }
  ];

  const useCases = [
    title: "Software Development",
        description: "Manage agile sprints, code reviews, and deployment pipelines with AI-powered sprint planning and bug tracking",
        icon: <GitBranch className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-500"
    title: "Marketing Campaigns",
        description: "Plan and execute multi-channel marketing campaigns with AI-optimized content scheduling and performance tracking",
        icon: <Target className="w-6 h-6" />,
        color: "from-green-500 to-emerald-500"
    title: "Event Planning",
        description: "Coordinate complex events with AI-powered vendor management, timeline optimization, and resource allocation",
        icon: <Calendar className="w-6 h-6" />,
    title: "Construction Projects",
        description: "Manage construction timelines, resource allocation, and compliance tracking with industry-specific AI models",
        icon: <Workflow className="w-6 h-6" />,
        color: "from-orange-500 to-red-500"
    title: "Research & Development",
        description: "Track R&D milestones, manage experiments, and optimize research workflows with AI-powered insights",
        icon: <Lightbulb className="w-6 h-6" />,
        color: "from-yellow-500 to-orange-500"
    title: "Client Services",
        description: "Deliver exceptional client projects with AI-optimized resource planning and automated progress reporting",
        icon: <Users className="w-6 h-6" />,
        color: "from-cyan-500 to-blue-500"
    {
      color: "from-blue-500 to-cyan-500",
      color: "from-green-500 to-emerald-500",
      color: "from-orange-500 to-red-500",
      color: "from-yellow-500 to-orange-500",
      color: "from-cyan-500 to-blue-500",

  const aiCapabilities = [
    title: "Intelligent Task Prioritization",
        description: "AI analyzes task dependencies, deadlines, and team capacity to automatically prioritize tasks for optimal project flow",
        icon: <Target className="w-8 h-8" />,
    title: "Predictive Timeline Management",
        description: "Machine learning algorithms predict project completion dates and identify potential delays before they occur",
        icon: <Timer className="w-8 h-8" />,
    title: "Smart Resource Optimization",
        description: "AI automatically assigns tasks to the most suitable team members based on skills, availability, and workload",
        icon: <Users className="w-8 h-8" />,
    title: "Automated Risk Assessment",
        description: "Continuous monitoring and analysis of project risks with AI-powered early warning systems and mitigation strategies",
        icon: <Shield className="w-8 h-8" />,
        color: "from-red-500 to-pink-500"
    title: "Intelligent Reporting",
        description: "Generate comprehensive project reports, stakeholder updates, and performance analytics automatically",
        icon: <BarChart3 className="w-8 h-8" />,
    title: "Workflow Automation",
        description: "Automate repetitive tasks, approvals, and notifications to streamline project management processes",
        icon: <Zap className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Project Manager Pro - Intelligent Project Management & Team Collaboration | Zion Tech Group"
        description="Revolutionize project management with AI-powered task prioritization, predictive analytics, and smart resource allocation. Boost team productivity by 40%. Starting at $19/user/month."
        keywords="AI project management, intelligent project planning, team collaboration, predictive analytics, resource allocation, project automation, agile project management"
        canonical="https://ziontechgroup.com/zion-ai-project-manager-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        </section>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Project Intelligence</span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Project Manager Pro
            </span>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your project management with AI-powered task prioritization, predictive analytics,
            and intelligent resource allocation. Boost team productivity by 40% and deliver projects on time, every time.

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              >
              Start Free Trial
            </FuturisticButton>
              Watch Demo

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300 text-xs md:text-sm">Productivity Boost</div>
                <Target className="w-6 h-6 text-cyan-400" />
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-xs md:text-sm">On-Time Delivery</div>
                <Users className="w-6 h-6 text-cyan-400" />
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">50,000+</div>
              <div className="text-gray-300 text-xs md:text-sm">Active Users</div>
                <Award className="w-6 h-6 text-cyan-400" />
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-xs md:text-sm">Uptime SLA</div>
        </ResponsiveContainer>

      {/* AI Capabilities Section */}
      <section$1>
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our advanced AI technology learns from your team's patterns and optimizes project management
              processes automatically for maximum efficiency and success.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  {capability.icon}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {capability.description}
              </FuturisticCard>
            ))}

      {/* Features Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive project management features designed to streamline workflows and boost team productivity.
            {features.map((feature, index) => (
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  {feature.icon}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}

      {/* Use Cases Section */}
              Perfect for Every Industry
              From software development to event planning, our AI adapts to your specific project management needs.
            {useCases.map((useCase, index) => (
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  {useCase.icon}
                  {useCase.title}
                  {useCase.description}

      {/* Pricing Section */}
              Simple, Transparent Pricing
              Choose the plan that fits your team size and project complexity. All plans include our core AI features.
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature.title}</span>
                    </li>
                </ul>
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"

      {/* Testimonials Section */}
              Trusted by Project Teams Worldwide
              See what project managers and teams say about Zion AI Project Manager Pro
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {`/avatars/avatar-${index + 1}.jpg`}
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>

      {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
              Ready to Revolutionize Your Project Management?
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of teams already using Zion AI Project Manager Pro to deliver projects faster,
              more efficiently, and with greater success. Start your free trial today.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                Schedule Demo
            <p className="text-gray-400 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
};

export default ZionAIProjectManagerProPage;

export default $1;
