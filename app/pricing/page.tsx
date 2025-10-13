import { Helmet } from 'react-helmet-async';

export default function Pricing() {

import React from 'react';

export default function pricing() {
  const microSaasPricing = [
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { CheckCircle, ArrowRight, Star, Users, Calendar, Phone, Mail } from 'lucide-react';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Basic features",
        "Email support",
        "Standard monitoring",
        "Basic security"
      ],
      popular: false
    },
      name: "Professional",
      price: "$599",
      description: "Ideal for growing companies",
        "Advanced features",
        "Priority support",
        "Advanced monitoring",
        "Enhanced security",
        "Custom integrations",
        "Performance optimization"
      popular: true
      name: "Enterprise",
      price: "$999",
      description: "For large organizations",
        "All features",
        "Dedicated support team",
        "White-label solution",
        "SLA guarantee",
        "Advanced analytics",
        "24/7 support"
    }
  ];

  const faqItems = [
      question: "What's included in each plan?",
      answer: "Each plan includes different features and support levels. Check the features list for each plan to see what's included."
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required."
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."



import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


  const features = [
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
const services = [
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      icon: "Cloud"
      title: "Security Solutions",
      description: "Advanced security and compliance",
      title: "Performance Optimization",
      description: "Optimize your cloud performance",
      icon: "Zap"
export default function Page() {
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }

  const aiServicesPricing = [
    {,
    name: "AI Analytics Dashboard",
        period: "/month",
        description: "Advanced business intelligence with AI insights",
        "Real-time Analytics Dashboard",
        "Predictive Analytics",
        "Custom Reports",
        "API Integration",
        "Email Support",
        "Up to 5 data sources"
        popular: false,
        color: "from-blue-500 to-cyan-500"
    name: "AI Customer Support",
        price: "$199",
        description: "Intelligent chatbots and automation",
        "Multi-language Support",
        "Sentiment Analysis",
        "CRM Integration",
        "Live Chat Handoff",
        "Priority Support",
        "Up to 10,000 conversations"
        popular: true,
        color: "from-green-500 to-emerald-500"
    name: "AI Content Generation",
        price: "$149",
        description: "AI-powered content creation at scale",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Up to 1,000 articles/month"
        color: "from-purple-500 to-pink-500"
    name: "Zion Analytics Pro",
        price: "$29",
        description: "Business intelligence platform",
        "Real-time Dashboards",
        "API Access",
        color: "from-cyan-500 to-blue-500"
    name: "Zion Security Shield",
        price: "$49",
        description: "Advanced cybersecurity protection",
        "Threat Detection",
        "Real-time Monitoring",
        "Vulnerability Scanning",
        "Incident Response",
        "Up to 10 users"
        color: "from-red-500 to-orange-500"
    name: "Zion Cloud Vault",
        price: "$9",
        description: "Secure cloud storage solution",
        "1TB Storage",
        "End-to-end Encryption",
        "File Synchronization",
        "Mobile Apps",
        "Up to 5 devices"
  const enterprisePricing = [
    name: "AI Solutions Suite",
        price: "Custom",
        period: "",
        description: "Complete AI transformation package",
        "All AI Services Included",
        "Custom Development",
        "Dedicated Support Team",
        "White-label Solutions",
        "24/7 Phone Support",
        "Unlimited Usage",
        "Custom Integrations",
        "SLA Guarantee"
    name: "IT Infrastructure",
        description: "Complete IT infrastructure management",
        "Cloud Infrastructure",
        "Cybersecurity Solutions",
        "5G Implementation",
        "Data Analytics",
        "24/7 Monitoring",
        "Disaster Recovery",
        "Compliance Management",
        "Custom SLA"
        color: "from-indigo-500 to-purple-500"
  const faqs = [
    question: "Do you offer free trials?",
        answer: "Yes! All our services come with a 14-day free trial. No credit card required to get started."
    question: "Can I change my plan anytime?",
        answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
        answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    question: "Is there a setup fee?",
        answer: "No setup fees for any of our services. You only pay the monthly subscription fee."
    question: "Do you offer discounts for annual billing?",
        answer: "Yes! Save 20% when you pay annually. Contact us for custom enterprise pricing."
    question: "What happens if I exceed my plan limits?",
        answer: "We'll notify you before you reach your limits and offer options to upgrade or purchase additional capacity."

  const testimonials = [
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      content: "The pricing is very reasonable for the value we get. The Professional plan has everything we need.",
      rating: 5,
      avatar: "SC"
      name: "Michael Rodriguez",
      role: "IT Director",
      company: "DataFlow Inc",
      content: "Great value for money. The Enterprise plan gives us everything we need to scale our business.",
      avatar: "MR"
      name: "Emily Johnson",
      role: "Startup Founder",
      company: "StartupHub",
      content: "The Starter plan was perfect for our needs when we were starting out. Easy to upgrade as we grew.",
      avatar: "EJ"

import { Helmet } from "react-helmet-async";

  return (
    <div className="min-h-screen bg-gray-900 text-white">
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Pricing</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
          <p className="text-xl text-gray-600 mb-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.

              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
                We use the latest technologies and best practices to ensure optimal performance.

              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                Get round-the-clock support from our dedicated team of professionals.

      <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional page services coming soon.
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
  );
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Pricing - Zion Tech Group | Flexible Plans for Every Business"
            description="Choose the perfect plan for your business. Flexible pricing options with no hidden fees. Start your free trial today."
            keywords="pricing, plans, subscription, free trial, business plans, enterprise pricing"
            canonical="https://ziontechgroup.com/pricing"
          />

          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Users className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Pricing Plans</span>

                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Choose Your Plan
                </FuturisticTextEnhanced>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Flexible pricing options to fit your business needs.
                  Start your free trial today and see the difference.

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#plans"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    View Plans
                  </FuturisticButtonEnhanced>
                    href="#faq"
                    variant="outline"
                    icon={Users}
                    Learn More
              </ResponsiveContainer>
            </section>

            {/* Pricing Plans Section */}
            <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Our Pricing Plans
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Choose the plan that's right for your business
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
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
                        ))}
                      </ul>
                        variant={plan.popular ? "primary" : "outline"}
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                    </FuturisticCardEnhanced>

            {/* FAQ Section */}
            <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Frequently Asked Questions
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Get answers to common questions about our pricing and plans
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {faqItems.map((item, index) => (
                      className="group hover:scale-105 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {item.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                    What Our Clients Say
                    Hear from our satisfied clients about their experience
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                  Ready to Get Started?
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Choose your plan and start your free trial today.
                  No credit card required, cancel anytime.

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    href="/contact"
                    iconPosition="right">
                    Start Free Trial
                    href="mailto:sales@ziontechgroup.com"
                    icon={Mail}
                    Contact Sales
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
};

export default PricingPage;


}}
