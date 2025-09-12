import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Users, Globe, Star, Award, Rocket, Lightbulb } from "lucide-react"

export default function Services() {

  const serviceCategories = [
    {
      name: "AI-Powered Solutions"
      description: "Revolutionary AI services that transform business operations"
      icon: Brain;
      count: 25;
      color: "from-purple-400 to-pink-500"
      href: "/ai-services"
      services: ["AI Revenue Optimization", "AI Customer Experience", "AI Autonomous DevOps", "AI Business Intelligence"]
    }
    {
      name: "Micro SAAS Platforms"
      description: "Innovative software solutions for modern businesses"
      icon: Database;
      count: 35;
      color: "from-blue-400 to-cyan-500"
      href: "/micro-saas"
      services: ["Content Creation Studio", "Project Management", "Customer Support", "Sales Analytics"]
    }
    {
      name: "IT Infrastructure"
      description: "Enterprise-grade technology solutions and services"
      icon: Shield;
      count: 20;
      color: "from-green-400 to-emerald-500"
      href: "/it-services"
      services: ["Quantum Secure Infrastructure", "Edge Computing", "Cloud Migration", "Cybersecurity"]
    }
  ]

  const featuredServices = [
    {
      title: "AI Revenue Optimization Platform"
      description: "Increase revenue by 25-40% with AI-powered optimization that intelligently manages pricing, forecasting, and customer analytics."
      price: "From $2,999/month"
      features: ["AI-Powered Revenue Forecasting", "Dynamic Pricing Optimization", "Customer Lifetime Value Analysis", "Revenue Leakage Detection"]
      href: "/services/ai-revenue-optimization-platform"
      color: "from-purple-400 to-pink-500"
      popular: true;
      benefits: ["Increase revenue by 25-40%", "Reduce revenue leakage by 60%", "Optimize pricing strategies", "Improve customer retention"]
    }
    {
      title: "AI Autonomous DevOps Platform"
      description: "Eliminate 95% of manual DevOps tasks and reduce deployment time by 80% with intelligent automation."
      price: "From $1,999/month"
      features: ["Autonomous Code Deployment", "AI-Powered Infrastructure Management", "Intelligent Monitoring", "Self-Healing Infrastructure"]
      href: "/services/ai-autonomous-devops-platform"
      color: "from-blue-400 to-cyan-500"
      benefits: ["Reduce deployment time by 80%", "Eliminate 95% of manual tasks", "Improve reliability by 99.9%", "Reduce costs by 40%"]
    }
    {
      title: "Quantum Secure Infrastructure"
      description: "Future-proof your organization with quantum-secure infrastructure that protects against quantum computing threats."
      price: "From $15,000"
      features: ["Quantum-Resistant Encryption", "Post-Quantum Cryptography", "Quantum Key Distribution", "Zero-Trust Architecture"]
      href: "/services/quantum-secure-infrastructure"
      color: "from-indigo-400 to-purple-500"
      benefits: ["Protect against quantum threats", "Future-proof security", "Reduce vulnerabilities by 99.9%", "Military-grade standards"]
    }
    {
      title: "Edge Computing Orchestration"
      description: "Reduce latency by 90% and improve performance by 70% with intelligent edge computing orchestration."
      price: "From $3,999/month"
      features: ["Distributed Edge Computing", "Real-time Data Processing", "Intelligent Load Balancing", "Edge AI Inference"]
      href: "/services/edge-computing-orchestration-platform"
      color: "from-green-400 to-teal-500"
      benefits: ["Reduce latency by 90%", "Improve performance by 70%", "Lower bandwidth costs by 60%", "Enable real-time decisions"]
    }
  ]

  const pricing = [
    {
      name: "Starter"
      price: "$1,999/month"
      details: ["Basic AI features", "Standard support", "Up to 10 users", "99.5% uptime SLA"]
    }
    {
      name: "Professional"
      price: "$4,999/month"
      details: ["Advanced AI features", "Priority support", "Up to 100 users", "99.9% uptime SLA"]
    }
    {
      name: "Enterprise"
      price: "$9,999/month"
      details: ["Full AI suite", "24/7 dedicated support", "Unlimited users", "99.99% uptime SLA"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* comment */}
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"   />
            Comprehensive Technology Solutions