import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Globe, Users, BarChart3, Target, Settings, Database, Database, BarChart, Download, File, Globe, Settings, User, Users, CreditCard, FileText, File } from 'lucide-react';

const ZionAIInvoiceGeneratorPage = () => {
  // const [selectedPlan, setSelectedPlan] = useState('pro');
  // const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      title: 'Auto Invoice Creation',
      description: 'Generate professional invoices automatically from data sources and templates',
      icon: <FileText className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Data Extraction',
      description: 'Extract invoice data from emails, PDFs, and other documents using AI',
      icon: <Brain className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Smart Categorization',
      description: 'Automatically categorize expenses and income with intelligent classification',
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Accounting Integration',
      description: 'Seamlessly integrate with QuickBooks, Xero, and other accounting software',
      icon: <Database className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Multi-currency Support',
      description: 'Handle invoices in multiple currencies with automatic conversion rates',
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: 'PDF Export',
      description: 'Export invoices as professional PDFs with customizable branding',
      icon: <Download className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Payment Tracking',
      description: 'Track payment status and send automated reminders to clients',
      icon: <CreditCard className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Tax Calculations',
      description: 'Automatically calculate taxes based on location and business rules',
      icon: <Calculator className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Custom Templates',
      description: 'Create and customize invoice templates with your branding',
      icon: <Layout className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track invoice performance, payment trends, and financial insights',
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: 'API Integration',
      description: 'Integrate with your existing business systems and workflows',
      icon: <Settings className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Priority Support',
      description: '24/7 priority support with dedicated account manager',
      icon: <Headphones className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
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
    {
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
    {
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
    {
      title: 'Freelancers',
      description: 'Streamline invoicing for independent contractors and consultants',
      icon: <Users className="w-8 h-8" />,
      examples: ['Project invoices', 'Hourly billing', 'Expense tracking', 'Client management']
    },
    {
      title: 'Small Business',
      description: 'Automate invoicing processes for growing businesses',
      icon: <Target className="w-8 h-8" />,
      examples: ['Recurring invoices', 'Payment reminders', 'Tax calculations', 'Financial reporting']
    },
    {
      title: 'E-commerce',
      description: 'Handle high-volume invoicing for online stores',
      icon: <Globe className="w-8 h-8" />,
      examples: ['Order processing', 'Multi-currency', 'Automated billing', 'Inventory tracking']
    },
    {
      title: 'Agencies',
      description: 'Manage complex invoicing for marketing and service agencies',
      icon: <BarChart3 className="w-8 h-8" />,
      examples: ['Client billing', 'Project tracking', 'Team collaboration', 'Financial analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Invoice Generator solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Invoice Generator</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai invoice generator solutions designed to meet your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
