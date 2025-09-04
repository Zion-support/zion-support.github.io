import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Target,
  Brain,
  Database,
  Cloud,
  Lock,
  Eye,
  Download,
  Upload,
  Settings,
  Bell,
  Search,
  Filter,
  Calendar,
  CreditCard,
  Receipt,
  Calculator,
  PieChart,
  Activity,
  CheckSquare,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';

export default function SmartInvoiceAutomationSuite() {
  const features = [
    {
      icon: Brain,
      title: "AI Document Recognition",
      description: "Advanced OCR and machine learning algorithms extract data from any invoice format with 99.8% accuracy",
      benefits: ["99.8% accuracy rate", "Supports 50+ languages", "Handles complex layouts", "Multi-format support"]
    },
    {
      icon: Zap,
      title: "Automated Approval Workflows",
      description: "Intelligent routing and approval processes that adapt to your business rules and hierarchy",
      benefits: ["Custom approval chains", "Smart routing", "Exception handling", "Audit trails"]
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Handle invoices in any currency with real-time exchange rates and automatic conversions",
      benefits: ["150+ currencies", "Real-time rates", "Auto-conversion", "Tax calculations"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards and reports to track spending, identify trends, and optimize processes",
      benefits: ["Live dashboards", "Custom reports", "Trend analysis", "Cost optimization"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 500 invoices/month",
        "Basic AI recognition",
        "Standard approval workflows",
        "Email support",
        "Basic analytics",
        "5 user accounts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 2,000 invoices/month",
        "Advanced AI recognition",
        "Custom approval workflows",
        "Priority support",
        "Advanced analytics",
        "15 user accounts",
        "API integration",
        "Custom fields"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299/month",
      description: "For large organizations",
      features: [
        "Unlimited invoices",
        "Premium AI recognition",
        "Complex approval workflows",
        "24/7 dedicated support",
        "Custom analytics",
        "Unlimited users",
        "Full API access",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "95%",
      description: "Reduction in processing time",
      icon: Clock
    },
    {
      metric: "99.8%",
      description: "Accuracy in data extraction",
      icon: CheckCircle
    },
    {
      metric: "20+",
      description: "Hours saved weekly",
      icon: TrendingUp
    },
    {
      metric: "60%",
      description: "Reduction in errors",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Smart Invoice Automation Suite - Zion Tech Group</title>
        <meta name="description" content="Automate 95% of invoice processing with AI-powered document recognition and approval workflows. Reduce processing time, eliminate errors, and save 20+ hours weekly." />
        <meta name="keywords" content="invoice automation, AI document recognition, approval workflows, invoice processing, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/smart-invoice-automation-suite" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 py-20 text-center text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <FileText className="w-4 h-4 mr-2" />
            Micro SAAS Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Smart Invoice Automation Suite</h1>
          <p className="text-green-100 text-xl max-w-3xl mx-auto mb-8">
            Automate 95% of invoice processing with AI-powered document recognition and approval workflows. 
            Reduce processing time, eliminate errors, and save 20+ hours weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Start Free Trial
            </Link>
            <Link href="#demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Invoice Processing</h2>
            <p className="text-gray-600 text-lg">See the measurable impact on your business operations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-gray-600 text-lg">Everything you need to automate your invoice processing</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">Choose the plan that fits your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white border rounded-xl p-6 shadow-lg ${tier.popular ? 'border-green-500 ring-2 ring-green-500' : 'border-gray-200'}`}>
                {tier.popular && (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-green-600 mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Invoices?</h2>
            <p className="text-gray-300 text-lg">Contact our automation experts today</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-3" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-white">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-3" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-green-400 mr-3" />
                  <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white">https://ziontechgroup.com</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Free Trial</h3>
              <p className="text-gray-600 mb-4">Get started with a 14-day free trial. No credit card required.</p>
              <Link href="https://ziontechgroup.com/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}