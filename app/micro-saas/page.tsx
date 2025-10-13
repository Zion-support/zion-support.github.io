
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function microSaas() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Micro Saas solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Micro Saas</h1>
          <p className="text-xl text-gray-300 mb-8">
export default function MicroSaasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Advanced micro saas solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Micro Saas
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

export default function MicrosaasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro Saas</h1>
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
        </div>
      </div>
    </div>
  );
}
import { ArrowRight, Brain, Shield, Zap, BarChart3, Users, Sparkles, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Page() {
import React from 'react';
import { ArrowRight, Brain, Shield, Zap, BarChart3, Cloud, Sparkles, Users, TrendingUp, Award, Database, Cpu, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Analytics Pro',
      description: 'Advanced AI-powered analytics platform for business intelligence and data insights.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      link: '/zion-ai-analytics-pro',
      price: '$99/month',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered automation.',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Insights'],
      link: '/zion-ai-crm-pro',
      price: '$149/month'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Video Generator',
      description: 'Create professional videos automatically with AI-powered content generation.',
      features: ['Auto Video Creation', 'Multiple Templates', 'Voice Synthesis', 'Brand Customization'],
      link: '/zion-ai-video-generator',
      price: '$79/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation and management with smart categorization.',
      features: ['Auto Invoice Creation', 'Payment Tracking', 'Tax Calculations', 'Multi-currency'],
      link: '/zion-ai-invoice-generator',
      price: '$59/month'
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

  Zap,
  BarChart3,
  Shield,
  Cloud,
  Users,
  TrendingUp,
  Database,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Mail,
  Smartphone,
  Monitor  } from 'lucide-react';
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/zion-analytics-pro',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'API integration'],
      price: '$299/month',
      featured: true;
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'AI Customer Insights',
      description: 'Deep customer analytics and sentiment analysis for better business decisions.',
      features: ['Sentiment Analysis', 'Customer Segmentation', 'Churn Prediction', 'Behavior Analytics'],
      link: '/zion-ai-customer-insights',
      price: '$129/month'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Email Analyzer',
      description: 'Smart email analysis and optimization for better communication.',
      features: ['Email Scoring', 'Content Optimization', 'A/B Testing', 'Performance Analytics'],
      link: '/zion-ai-email-analyzer',
      price: '$89/month'
      title: 'Zion Security Shield',
      description: 'Comprehensive security monitoring and threat detection for your applications.',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-security-shield',
      features: ['Threat detection', 'Security monitoring', 'Incident response', 'Compliance reporting'],
      price: '$199/month',
      featured: true;
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with advanced encryption and backup features.',
      icon: <Cloud className="w-8 h-8" />,
      path: '/zion-cloud-vault',
      features: ['End-to-end encryption', 'Automated backups', 'File sharing', 'Version control'],
      price: '$99/month',
      featured: false
      featured: false;
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/zion-content-studio',
      features: ['AI content generation', 'Content calendar', 'Team collaboration', 'Multi-platform publishing'],
      price: '$149/month',
      featured: false;
    },
    {
      title: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered automation.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-crm-pro',
      features: ['AI lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Customer segmentation'],
      price: '$229/month',
      featured: true;
    },
    {
      title: 'Zion AI Marketing Automation Pro',
      description: 'Complete marketing automation platform with AI-driven campaign optimization.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/zion-ai-marketing-automation-pro',
      features: ['Email automation', 'Social media scheduling', 'Lead nurturing', 'A/B testing'],
      price: '$199/month',
      featured: false;
    },
    {
      title: 'Zion AI Project Manager Pro',
      description: 'Smart project management tool with AI-powered resource allocation and timeline optimization.',
      icon: <Award className="w-8 h-8" />,
      path: '/zion-ai-project-manager-pro',
      features: ['AI task prioritization', 'Resource optimization', 'Timeline forecasting', 'Team collaboration'],
      price: '$159/month',
      featured: false;
    },
    {
      title: 'Zion AI Data Analytics Pro',
      description: 'Advanced data analytics platform with machine learning insights and predictive modeling.',
      icon: <Database className="w-8 h-8" />,
      path: '/zion-ai-data-analytics-pro',
      features: ['ML insights', 'Predictive modeling', 'Data visualization', 'Custom dashboards'],
      price: '$279/month',
      featured: true;
    },
    {
      title: 'Zion AI Code Assistant Pro',
      description: 'Intelligent code generation and review tool with support for multiple programming languages.',
      icon: <Cpu className="w-8 h-8" />,
      path: '/zion-ai-code-assistant-pro',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation'],
      price: '$129/month',
      featured: false;
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'No Setup Required',
      description: 'Get started immediately with our ready-to-use solutions.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible pricing and features.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team.'
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mic } from 'lucide-react';

export default function MicroSaasPage() {
  const features = [
    {
      title: "Rapid Development",
      description: "Quick turnaround times for MVP development and deployment",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business from day one",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Cost Effective",
      description: "Affordable solutions for startups and small businesses",
      icon: <Mic className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'Zion\'s AI Analytics Pro transformed our data analysis. We saw 300% improvement in insights quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      content: 'The AI CRM Pro is a game-changer. Our sales team productivity increased by 150%.',
      rating: 5
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Zion Tech Group helped us launch our micro SaaS in record time. Their expertise is unmatched.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Founder, DataFlow",
      content: "The team delivered exactly what we needed. Highly recommend their services.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, CloudSync",
      content: "Professional, reliable, and innovative. They exceeded our expectations.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use AI Tools</title>
        <meta name="description" content="Discover our collection of ready-to-use Micro SAAS solutions powered by AI. No setup required - start using immediately and transform your business operations." />
        <meta name="keywords" content="micro saas, ai tools, business automation, ready-to-use software, ai analytics, crm, video generator, invoice generator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use AI-powered software solutions that can transform your business operations immediately.
              No setup required - start using today and see results tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Sparkles className="w-5 h-5" />
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:scale-105"
              >
                <Brain className="w-5 h-5" />
                View Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are designed for immediate deployment with maximum impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of AI-powered tools designed for immediate business impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${service.popular ? 'ring-2 ring-cyan-500/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our Micro SAAS solutions are transforming businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Professional micro SaaS services for modern business solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of micro SaaS solutions designed to streamline your business operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SaaS applications designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <Link
                    to={service.link || service.path || '/contact'}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional micro SaaS services for modern business solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <Link
                    to={service.link || service.path || '/contact'}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their business with our micro SaaS solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">"{testimonial.content}"</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using our Micro SAAS solutions today and see immediate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Sparkles className="w-5 h-5" />
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:scale-105"
              >
                <Brain className="w-5 h-5" />
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional page services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey with our micro SaaS solutions and experience the power of focused, specialized tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Journey
            </Link>
            <Link
              to="/consultation"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-cyan-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

}}
}
