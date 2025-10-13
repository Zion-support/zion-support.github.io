<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665
=======
const ZionAIInvoiceGeneratorPage = () => {
  // const [selectedPlan, setSelectedPlan] = useState('pro');
  // const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {,
    title: 'Auto Invoice Creation',
        description: 'Generate professional invoices automatically from data sources and templates',
        icon: <FileText className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Data Extraction',
        description: 'Extract invoice data from emails, PDFs, and other documents using AI',
        icon: <Brain className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Smart Categorization',
        description: 'Automatically categorize expenses and income with intelligent classification',
        icon: <Target className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Accounting Integration',
        description: 'Seamlessly integrate with QuickBooks, Xero, and other accounting software',
        icon: <Database className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Multi-currency Support',
        description: 'Handle invoices in multiple currencies with automatic conversion rates',
        icon: <Globe className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'PDF Export',
        description: 'Export invoices as professional PDFs with customizable branding',
        icon: <Download className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Payment Tracking',
        description: 'Track payment status and send automated reminders to clients',
        icon: <CreditCard className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Tax Calculations',
        description: 'Automatically calculate taxes based on location and business rules',
        icon: <Calculator className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Custom Templates',
        description: 'Create and customize invoice templates with your branding',
        icon: <Layout className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Analytics Dashboard',
        description: 'Track invoice performance, payment trends, and financial insights',
        icon: <BarChart3 className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'API Integration',
        description: 'Integrate with your existing business systems and workflows',
        icon: <Settings className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Priority Support',
        description: '24/7 priority support with dedicated account manager',
        icon: <Headphones className="w-6 h-6" />,
        included: true
    }
  ];

  const pricingPlans = [
    {,
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
    },
    {,
    name: 'Pro',
        price: '$199',
        originalPrice: '$399',
        period: '/month',
        description: 'Ideal for growing businesses and agencies',
        features: [
        '200 invoices per month',
        'Premium templates',
        'Accounting integration',
        'Priority support',
        '25GB storage',
        'Multi-currency',
        'Payment tracking'
      ],
        popular: true,
        color: 'from-green-500 to-emerald-500'
    },
    {,
    name: 'Enterprise',
        price: '$399',
        originalPrice: '$799',
        period: '/month',
        description: 'For large organizations and accounting firms',
        features: [
        'Unlimited invoices',
        'All templates',
        'Advanced integrations',
        '24/7 support',
        'Unlimited storage',
        'Custom branding',
        'API access',
        'Team collaboration',
        'Analytics dashboard'
      ],
        popular: false,
        color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    {,
    title: 'Freelancers',
        description: 'Streamline invoicing for independent contractors and consultants',
        icon: <Users className="w-8 h-8" />,
        examples: ['Project invoices', 'Hourly billing', 'Expense tracking', 'Client management']
    },
    {,
    title: 'Small Business',
        description: 'Automate invoicing processes for growing businesses',
        icon: <Target className="w-8 h-8" />,
        examples: ['Recurring invoices', 'Payment reminders', 'Tax calculations', 'Financial reporting']
    },
    {,
    title: 'E-commerce',
        description: 'Handle high-volume invoicing for online stores',
        icon: <Globe className="w-8 h-8" />,
        examples: ['Order processing', 'Multi-currency', 'Automated billing', 'Inventory tracking']
    },
    {,
    title: 'Agencies',
        description: 'Manage complex invoicing for marketing and service agencies',
        icon: <BarChart3 className="w-8 h-8" />,
        examples: ['Client billing', 'Project tracking', 'Team collaboration', 'Financial analytics']
    }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

<<<<<<< HEAD
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
=======
export default function ZionAiInvoiceGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Ai Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai invoice generator solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Ai Invoice Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function ZionaiinvoicegeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion Ai Invoice Generator</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
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
<<<<<<< HEAD
}
=======
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Download, Settings, Sparkles, CheckCircle, Star, Users, Brain, Mail, Smartphone, Globe, Database, BarChart3, Target, Headphones, Layout, CreditCard, Calculator, Play } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const ZionAIInvoiceGeneratorPage = () => {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

const ZionAIInvoiceGeneratorPage = () => {
  // const [selectedPlan, setSelectedPlan] = useState('pro');
  // const [selectedPlan, setSelectedPlan] = useState('pro');

const ZionAIInvoiceGeneratorPage: React.FC = () => {
  const features = [
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
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "50 invoices per month",
        "Basic templates",
        "Email reminders",
        "Payment tracking",
        "Mobile app access",
        "Email support"
      ],
      popular: false;
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "500 invoices per month",
        "Premium templates",
        "Custom branding",
        "Advanced analytics",
        "Client portal",
        "API integration",
        "Priority support"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with complex invoicing needs",
      features: [
        "Unlimited invoices",
        "Custom templates",
        "White-label solution",
        "Advanced reporting",
        "Multi-user access",
        "Dedicated support",
        "Custom integrations"
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Freelance Designer",
      role: "Owner",
      content: "Zion AI Invoice Generator has saved me hours every week. The automated reminders have improved my payment collection rate by 60%.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Consulting Firm",
      role: "Operations Manager",
      content: "The AI-powered data extraction is incredible. We can now process client information from emails automatically, reducing manual work by 80%.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Digital Agency",
      role: "Finance Director",
      content: "The analytics dashboard gives us insights we never had before. We've identified payment patterns and improved our cash flow significantly.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Invoices Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "85%", label: "Faster Processing", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Currencies Supported", icon: <DollarSign className="w-6 h-6" /> },
    { number: "4.8/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Generate professional invoices in seconds instead of hours. Our AI handles all the formatting and calculations automatically."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Improve Cash Flow",
      description: "Automated payment reminders and tracking help you get paid faster. Our analytics show you exactly where your money is coming from."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Stay Compliant",
      description: "Automatic tax calculations and compliance features ensure your invoices meet all legal requirements in your jurisdiction."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Gain Insights",
      description: "Detailed analytics and reporting help you understand your business performance and make data-driven decisions."
    }
  ];
export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
import React from "react";
import { Helmet } from 'react-helmet-async';

const ZionAiInvoiceGenerator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>ZionAiInvoiceGenerator - Zion Tech Group</title>
        <meta name="description" content="Advanced zionaiinvoicegenerator service coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">ZionAiInvoiceGenerator</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
};

export default ZionAiInvoiceGenerator;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
=======
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Invoice Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
              Zion AI Invoice Generator;
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your invoicing process with AI-powered automation. Generate professional invoices, 
            track payments, and improve cash flow with intelligent data extraction and automated reminders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link;
              to="/contact"
              className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Free Trial;
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link;
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Watch Demo;
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
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
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to streamline your invoicing process and improve cash flow;
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your invoicing needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div;
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular;
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-white/20 hover:border-green-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular;
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link;
                  to="/contact"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Get Started;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using our AI invoice generator to improve their cash flow;
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Invoicing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses who are already using our AI invoice generator to;
            streamline their billing process and improve cash flow.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-green-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-green-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link;
              to="/contact"
              className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Your Free Trial;
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link;
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Schedule Demo;
            </Link>
          </div>
        </div>
      </section>    </div>
  );
};

}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
=======
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI Invoice Generation",
      description: "Automatically generate professional invoices from transaction data",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Smart Calculations",
      description: "Automatic tax calculations, discounts, and payment terms",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integration",
      description: "Seamless integration with payment processors and accounting systems",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Centralized invoice management and tracking system",
      color: "from-orange-500 to-red-500"
    }
  ];

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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "ratingCount": "600"
    }
  };

  return (
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
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
                    <Sparkles className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400 text-sm font-medium">AI-Powered Invoice Generation</span>
                  </div>
                  
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
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="right">
                      Get Started
                    </FuturisticButtonEnhanced>
                    <FuturisticButtonEnhanced
                      href="/demo"
                      variant="outline"
                      size="lg"
                      icon={FileText}
                      iconPosition="right">
                      View Demo
                    </FuturisticButtonEnhanced>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Powerful Invoice Generation Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Automate your entire billing process with intelligent invoice generation.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Automate Your Invoicing?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of businesses using Zion AI Invoice Generator to streamline 
                  their billing process and get paid faster. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/demo"
                    variant="outline"
                    size="lg"
                    icon={FileText}
                    iconPosition="right">
                    Schedule Demo
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default ZionAIInvoiceGeneratorPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f847
