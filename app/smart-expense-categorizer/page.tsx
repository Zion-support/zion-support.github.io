import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Receipt } from 'lucide-react';

const SmartExpenseCategorizerPage = () => {
  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

export default function smartExpenseCategorizer() {
  const benefits: string[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Categorization",
      description: "Advanced machine learning automatically categorizes expenses with 98% accuracy, learning from your patterns and preferences.",
    },
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Smart Receipt Processing",
      description: "Automatically extract data from receipts, invoices, and bills using OCR technology and AI-powered data extraction.",
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Real-time Analytics",
      description: "Comprehensive expense analytics with spending trends, budget tracking, and financial insights to optimize your finances.",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Bank Integration",
      description: "Securely connect with your bank accounts and credit cards for automatic transaction import and categorization.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Workflows",
      description: "Set up automated rules for expense approval, reimbursement, and reporting to streamline your financial processes.",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Team Management",
      description: "Manage team expenses with role-based permissions, approval workflows, and centralized expense reporting.",
    }
  ];

  const pricingPlans = [
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Up to 500 transactions/month",
        "Basic AI categorization",
        "Receipt scanning",
        "Basic analytics",
        "Email support",
        "1 user account"
      ],
      popular: false;
      name: "Business",
      price: "$59",
      description: "Ideal for small businesses",
        "Up to 5,000 transactions/month",
        "Advanced AI categorization",
        "Bank integration",
        "Advanced analytics",
        "Priority support",
        "5 user accounts",
        "API access"
      popular: true;
      name: "Enterprise",
      price: "$149",
      description: "For large organizations",
        "Unlimited transactions",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Unlimited users",
        "Custom integrations"

export default function SmartExpenseCategorizerPage() {
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Smart Expense Categorizer</h1>
          <p className="text-xl text-gray-300 mb-8">
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <title>Smart Expense Categorizer - Zion Tech Group</title>
        <meta name="description" content="Advanced smart expense categorizer solutions by Zion Tech Group" />

      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Expense Categorizer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Smart Expense Categorizer</h1>
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
      <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          <p className="text-lg text-gray-300 mb-8">
            Professional page services coming soon.
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
  );
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { CheckCircle, ArrowRight, Star, Users, Calendar, Phone, Mail } from 'lucide-react';

      icon: <CheckCircle className="w-8 h-8" />,
      description: "Automatically categorize expenses using advanced AI algorithms",
      color: "from-blue-500 to-cyan-500"
      icon: <Users className="w-8 h-8" />,
      title: "Smart Learning",
      description: "Learn from your categorization patterns to improve accuracy over time",
      color: "from-green-500 to-emerald-500"
      icon: <Calendar className="w-8 h-8" />,
      title: "Real-time Processing",
      description: "Process and categorize expenses in real-time as they occur",
      color: "from-purple-500 to-pink-500"
      icon: <Phone className="w-8 h-8" />,
      title: "Multi-format Support",
      description: "Support for various expense formats and data sources",
      color: "from-orange-500 to-red-500"

  const benefits = [
    "Save time on manual expense categorization",
    "Improve accuracy with AI-powered algorithms",
    "Reduce human error in expense management",
    "Gain insights into spending patterns",
    "Streamline financial reporting",
    "Integrate with existing accounting systems"

      name: "Basic",
      price: "$29",
      period: "month",
      description: "Perfect for small businesses",
        "Up to 100 transactions/month",
        "Basic categorization",
        "Standard reporting"
      popular: false
      name: "Professional",
      description: "Ideal for growing companies",
        "Advanced reporting",
        "API access",
        "Custom categories"
      popular: true
      price: "$99",
        "SLA guarantee",
        "Advanced analytics"

  const testimonials = [
      name: "Sarah Chen",
      role: "CFO",
      company: "TechCorp",
      content: "The smart expense categorizer has saved us hours every week. The AI accuracy is impressive.",
      rating: 5,
      avatar: "SC"
      name: "Michael Rodriguez",
      role: "Finance Manager",
      company: "DataFlow Inc",
      content: "Excellent categorization accuracy. The learning feature has improved over time.",
      avatar: "MR"
      name: "Emily Johnson",
      role: "Startup Founder",
      company: "StartupHub",
      content: "Perfect for our small business. Easy to use and integrates well with our accounting system.",
      avatar: "EJ"


    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Smart Expense Categorizer - Zion Tech Group | AI-Powered Expense Management"
            description="Automatically categorize expenses with our AI-powered smart expense categorizer. Save time and improve accuracy in expense management."
            keywords="expense categorizer, AI expense management, automated categorization, financial management, expense tracking"
            canonical="https://ziontechgroup.com/smart-expense-categorizer"
          />

          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Smart Expense Categorizer</span>

                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                </FuturisticTextEnhanced>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Automatically categorize expenses with our AI-powered smart expense categorizer.
                  Save time and improve accuracy in expense management.

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#contact"
                    variant="primary"
                    size="lg"
                    icon={CheckCircle}
                    iconPosition="left">
                  </FuturisticButtonEnhanced>
                    href="#features"
                    variant="outline"
                    icon={ArrowRight}
                    Learn More
              </ResponsiveContainer>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Key Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Powerful features to streamline your expense management
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {feature.icon}
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                    </FuturisticCardEnhanced>
                  ))}

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Choose Our Solution?
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Get the most out of your expense management with our AI-powered solution
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                    Choose Your Plan
                    Flexible pricing options to fit your expense management needs
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-blue-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        <p className="text-gray-300">{plan.description}</p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                      </ul>
                        variant={plan.popular ? "primary" : "outline"}
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                    What Our Clients Say
                    Hear from our satisfied clients about their experience
                  {testimonials.map((testimonial, index) => (
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>

            {/* CTA Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                  Ready to Streamline Your Expenses?
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Start using our smart expense categorizer today and see the difference
                  AI can make in your expense management.

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    href="/contact"
                    iconPosition="right">
                    href="mailto:expenses@ziontechgroup.com"
                    icon={Mail}
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
};

export default SmartExpenseCategorizerPage;
          <h1 className="text-4xl font-bold text-gray-900 mb-6">



export default $1;
