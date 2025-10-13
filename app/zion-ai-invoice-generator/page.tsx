import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIInvoiceGeneratorPage = () => {
  // const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {,
    title: 'Auto Invoice Creation',
        description: 'Generate professional invoices automatically from data sources and templates',
        icon: <FileText className="w-6 h-6" />,
        included: true
    },
    title: 'Data Extraction',
        description: 'Extract invoice data from emails, PDFs, and other documents using AI',
        icon: <Brain className="w-6 h-6" />,
    title: 'Smart Categorization',
        description: 'Automatically categorize expenses and income with intelligent classification',
        icon: <Target className="w-6 h-6" />,
    title: 'Accounting Integration',
        description: 'Seamlessly integrate with QuickBooks, Xero, and other accounting software',
        icon: <Database className="w-6 h-6" />,
    title: 'Multi-currency Support',
        description: 'Handle invoices in multiple currencies with automatic conversion rates',
        icon: <Globe className="w-6 h-6" />,
    title: 'PDF Export',
        description: 'Export invoices as professional PDFs with customizable branding',
        icon: <Download className="w-6 h-6" />,
    title: 'Payment Tracking',
        description: 'Track payment status and send automated reminders to clients',
        icon: <CreditCard className="w-6 h-6" />,
    title: 'Tax Calculations',
        description: 'Automatically calculate taxes based on location and business rules',
        icon: <Calculator className="w-6 h-6" />,
    title: 'Custom Templates',
        description: 'Create and customize invoice templates with your branding',
        icon: <Layout className="w-6 h-6" />,
    title: 'Analytics Dashboard',
        description: 'Track invoice performance, payment trends, and financial insights',
        icon: <BarChart3 className="w-6 h-6" />,
    title: 'API Integration',
        description: 'Integrate with your existing business systems and workflows',
        icon: <Settings className="w-6 h-6" />,
    title: 'Priority Support',
        description: '24/7 priority support with dedicated account manager',
        icon: <Headphones className="w-6 h-6" />,
    }
  ];

  const pricingPlans = [
    name: 'Starter',
        price: '$99',
        originalPrice: '$199',
        period: '/month',
        description: 'Perfect for freelancers and small businesses',
        features: [
        '50 invoices per month',
        'Basic templates',
        'PDF export',
        'Email support',
        '5GB storage'
      ],
        popular: false,
        color: 'from-gray-500 to-gray-600'
    name: 'Pro',
        price: '$199',
        originalPrice: '$399',
        description: 'Ideal for growing businesses and agencies',
        '200 invoices per month',
        'Premium templates',
        'Accounting integration',
        'Priority support',
        '25GB storage',
        'Multi-currency',
        'Payment tracking'
        popular: true,
        color: 'from-green-500 to-emerald-500'
    name: 'Enterprise',
        price: '$399',
        originalPrice: '$799',
        description: 'For large organizations and accounting firms',
        'Unlimited invoices',
        'All templates',
        'Advanced integrations',
        '24/7 support',
        'Unlimited storage',
        'Custom branding',
        'API access',
        'Team collaboration',
        'Analytics dashboard'
        color: 'from-cyan-500 to-blue-500'

  const useCases = [
    title: 'Freelancers',
        description: 'Streamline invoicing for independent contractors and consultants',
        icon: <Users className="w-8 h-8" />,
        examples: ['Project invoices', 'Hourly billing', 'Expense tracking', 'Client management']
    title: 'Small Business',
        description: 'Automate invoicing processes for growing businesses',
        icon: <Target className="w-8 h-8" />,
        examples: ['Recurring invoices', 'Payment reminders', 'Tax calculations', 'Financial reporting']
    title: 'E-commerce',
        description: 'Handle high-volume invoicing for online stores',
        icon: <Globe className="w-8 h-8" />,
        examples: ['Order processing', 'Multi-currency', 'Automated billing', 'Inventory tracking']
    title: 'Agencies',
        description: 'Manage complex invoicing for marketing and service agencies',
        icon: <BarChart3 className="w-8 h-8" />,
        examples: ['Client billing', 'Project tracking', 'Team collaboration', 'Financial analytics']

export default function zionAiInvoiceGenerator() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Invoice Generator solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Zion Ai Invoice Generator</h1>
          <p className="text-xl text-gray-300 mb-8">
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <meta name="description" content="Advanced zion ai invoice generator solutions by Zion Tech Group" />

      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Ai Invoice Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion Ai Invoice Generator</h1>
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
import { ArrowRight, FileText, Download, Settings, Sparkles, CheckCircle, Star, Users, Brain, Mail, Smartphone, Globe, Database, BarChart3, Target, Headphones, Layout, CreditCard, Calculator, Play } from 'lucide-react';
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";



import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

  FileText,
  Download,
  Upload,
  Sparkles,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Smartphone,
  Globe,
  Zap,
  Target,
  BarChart3,
  Shield,
  Award,
  TrendingUp,
  Calculator,
  CreditCard,
  Receipt,
  DollarSign,
  Calendar,
  Send,
  Eye,
  Edit,
  Trash2,
  Copy,
  Share  } from 'lucide-react';
} from 'lucide-react';import { Link  } from 'react-router-dom';


const ZionAIInvoiceGeneratorPage: React.FC = () => {
    "AI-powered invoice generation",
    "Automated data extraction from emails",
    "Smart payment reminders",
    "Multi-currency support (50+ currencies)",
    "Custom branding and templates",
    "Automated tax calculations",
    "Payment tracking and analytics",
    "Client portal integration",
    "Mobile app for on-the-go invoicing",
    "Cloud-based storage and backup"

    {
      name: "Solo",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
        "50 invoices per month",
        "Basic templates",
        "Email reminders",
        "Payment tracking",
        "Mobile app access",
        "Email support"
      popular: false;
      name: "Business",
      price: "$49",
      description: "Ideal for small to medium businesses",
        "500 invoices per month",
        "Premium templates",
        "Custom branding",
        "Advanced analytics",
        "Client portal",
        "API integration",
        "Priority support"
      popular: true;
      name: "Enterprise",
      price: "$99",
      description: "For large organizations with complex invoicing needs",
        "Unlimited invoices",
        "Custom templates",
        "White-label solution",
        "Advanced reporting",
        "Multi-user access",
        "Dedicated support",
        "Custom integrations"

  const testimonials = [
      name: "David Kim",
      company: "Freelance Designer",
      role: "Owner",
      content: "Zion AI Invoice Generator has saved me hours every week. The automated reminders have improved my payment collection rate by 60%.",
      rating: 5,
      avatar: "DK"
      name: "Lisa Martinez",
      company: "Consulting Firm",
      role: "Operations Manager",
      content: "The AI-powered data extraction is incredible. We can now process client information from emails automatically, reducing manual work by 80%.",
      avatar: "LM"
      name: "James Wilson",
      company: "Digital Agency",
      role: "Finance Director",
      content: "The analytics dashboard gives us insights we never had before. We've identified payment patterns and improved our cash flow significantly.",
      avatar: "JW"

  const stats = [
    { number: "50,000+", label: "Invoices Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "85%", label: "Faster Processing", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Currencies Supported", icon: <DollarSign className="w-6 h-6" /> },
    { number: "4.8/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }

  const benefits = [
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Generate professional invoices in seconds instead of hours. Our AI handles all the formatting and calculations automatically."
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Improve Cash Flow",
      description: "Automated payment reminders and tracking help you get paid faster. Our analytics show you exactly where your money is coming from."
      icon: <Shield className="w-8 h-8" />,
      title: "Stay Compliant",
      description: "Automatic tax calculations and compliance features ensure your invoices meet all legal requirements in your jurisdiction."
      title: "Gain Insights",
      description: "Detailed analytics and reporting help you understand your business performance and make data-driven decisions."
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
import React from "react";

const ZionAiInvoiceGenerator = () => {
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <title>ZionAiInvoiceGenerator - Zion Tech Group</title>
        <meta name="description" content="Advanced zionaiinvoicegenerator service coming soon." />
        <h1 className="text-4xl font-bold text-white mb-4">ZionAiInvoiceGenerator</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
};

export default ZionAiInvoiceGenerator;
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Invoice Automation</span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
              Zion AI Invoice Generator;
            </span>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your invoicing process with AI-powered automation. Generate professional invoices,
            track payments, and improve cash flow with intelligent data extraction and automated reminders.

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link;
              className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
              Start Free Trial;
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              Watch Demo;

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
            ))}
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Invoice Generator?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our intelligent invoicing solution automates every aspect of your billing process,
              from creation to payment collection;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 text-center"
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to streamline your invoicing process and improve cash flow;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>

      {/* Pricing Section */}
              Simple, Transparent Pricing;
              Choose the plan that fits your invoicing needs. All plans include our core AI features.

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular;
                    ? 'border-green-500/50 ring-2 ring-green-500/20'
                    : 'border-white/20 hover:border-green-500/30'
                }`}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular;
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                </ul>

                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  Get Started;

      {/* Testimonials Section */}
              Trusted by Businesses Worldwide;
              See how businesses are using our AI invoice generator to improve their cash flow;

            {testimonials.map((testimonial, index) => (
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
            Ready to Transform Your Invoicing?
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses who are already using our AI invoice generator to;
            streamline their billing process and improve cash flow.

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-green-400">kleber@ziontechgroup.com</p>
                <Smartphone className="w-6 h-6 text-white" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-green-400">+1 302 464 0950</p>
                <Globe className="w-6 h-6 text-white" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              Start Your Free Trial;
              Schedule Demo;
      </section>    </div>

      icon: <FileText className="w-8 h-8" />,
      title: "AI Invoice Generation",
      description: "Automatically generate professional invoices from transaction data",
      color: "from-blue-500 to-cyan-500"
      icon: <Calculator className="w-8 h-8" />,
      title: "Smart Calculations",
      description: "Automatic tax calculations, discounts, and payment terms",
      color: "from-green-500 to-emerald-500"
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integration",
      description: "Seamless integration with payment processors and accounting systems",
      color: "from-purple-500 to-pink-500"
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Centralized invoice management and tracking system",
      color: "from-orange-500 to-red-500"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Invoice Generator",
    "description": "AI-powered invoice generation platform for automated billing and payment processing",
    "url": "https://ziontechgroup.com/zion-ai-invoice-generator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "ratingCount": "600"

    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI Invoice Generator - Automated Invoice Creation Platform"
            description="Streamline your billing process with our AI invoice generator. Automatically create professional invoices, calculate taxes, and integrate with payment systems."
            keywords="AI invoice generator, automated billing, invoice creation, payment processing, accounting automation, Zion Tech Group"
            canonicalUrl="https://ziontechgroup.com/zion-ai-invoice-generator"
          />
          <StructuredData data={structuredData} />

          <main className="min-h-screen">
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="text-center relative z-10">
                    <span className="text-green-400 text-sm font-medium">AI-Powered Invoice Generation</span>

                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6 leading-tight">
                    Zion AI Invoice Generator
                  </FuturisticTextEnhanced>

                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                    Streamline your billing process with our AI invoice generator.
                    Automatically create professional invoices, calculate taxes, and integrate with payment systems.

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="right">
                    </FuturisticButtonEnhanced>
                      href="/demo"
                      variant="outline"
                      icon={FileText}
                      View Demo

              <ResponsiveContainer>
                    Powerful Invoice Generation Features
                    Automate your entire billing process with intelligent invoice generation.
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FuturisticCardEnhanced
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {feature.icon}
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {feature.title}
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                    </FuturisticCardEnhanced>
              </ResponsiveContainer>

                  Ready to Automate Your Invoicing?
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of businesses using Zion AI Invoice Generator to streamline
                  their billing process and get paid faster. Start your free trial today.

                    Start Free Trial
                    Schedule Demo
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>

export default ZionAIInvoiceGeneratorPage;
