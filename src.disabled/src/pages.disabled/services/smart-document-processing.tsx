import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Eye, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Star,
  Award,
  DollarSign,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  Users,
  Settings,
  Shield,
  Activity,
  TrendingUp,
  Target,
  MessageSquare,
  Calendar,
  Bell,
  AlertCircle,
  Search,
  Filter,
  Download,
  Share2,
  HelpCircle,
  ExternalLink,
  Cpu,
  Network,
  Lock,
  Play,
  Pause,
  RotateCcw,
  RefreshCw,
  Upload,
  File,
  Folder,
  Archive,
  Edit,
  Plus,
  Info,
  Clock,
  Brain,
  Bot,
  Workflow
} from 'lucide-react';

export default function SmartDocumentProcessing() {
  const features = [
    {
      icon: Eye,
      title: "Intelligent Document Recognition",
      description: "AI-powered OCR and document classification that automatically identifies and processes any document type with 99.5% accuracy.",
      benefits: ["99.5% accuracy rate", "Process 1000+ documents/hour", "Support for 50+ languages", "Handwriting recognition"]
    },
    {
      icon: Brain,
      title: "Smart Data Extraction",
      description: "Advanced AI algorithms extract structured data from unstructured documents, including tables, forms, and complex layouts.",
      benefits: ["Extract data from any format", "Automated validation", "Real-time processing", "Custom field mapping"]
    },
    {
      icon: Zap,
      title: "Automated Workflow Integration",
      description: "Seamlessly integrate with your existing systems and automate document processing workflows without manual intervention.",
      benefits: ["Zero-touch processing", "API integration", "Custom workflows", "Real-time notifications"]
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-level security with GDPR, HIPAA, and SOC2 compliance to protect sensitive document data.",
      benefits: ["End-to-end encryption", "Audit trails", "Access controls", "Compliance reporting"]
    }
  ];

  const documentTypes = [
    {
      category: "Financial Documents",
      icon: DollarSign,
      documents: [
        "Invoices and receipts",
        "Bank statements",
        "Tax forms (W-2, 1099)",
        "Purchase orders",
        "Expense reports"
      ]
    },
    {
      category: "Legal Documents",
      icon: FileText,
      documents: [
        "Contracts and agreements",
        "Legal briefs",
        "Court documents",
        "Patent applications",
        "Compliance reports"
      ]
    },
    {
      category: "HR Documents",
      icon: Users,
      documents: [
        "Resumes and CVs",
        "Employment contracts",
        "Performance reviews",
        "Training certificates",
        "Benefits enrollment"
      ]
    },
    {
      category: "Medical Records",
      icon: Shield,
      documents: [
        "Patient records",
        "Insurance claims",
        "Medical reports",
        "Prescription forms",
        "Lab results"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$149/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 documents/month",
        "Basic OCR and extraction",
        "5 document types",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 documents/month",
        "Advanced AI extraction",
        "Unlimited document types",
        "Priority support",
        "Custom workflows",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999/month",
      description: "For large organizations",
      features: [
        "Unlimited documents",
        "Full AI suite",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const successMetrics = [
    {
      metric: "95%",
      description: "Reduction in manual data entry",
      icon: TrendingUp
    },
    {
      metric: "10x",
      description: "Faster document processing",
      icon: Clock
    },
    {
      metric: "99.5%",
      description: "Data extraction accuracy",
      icon: CheckCircle
    },
    {
      metric: "70%",
      description: "Cost savings on document processing",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Smart Document Processing - Zion Tech Group</title>
        <meta name="description" content="Transform document processing with AI-powered OCR and data extraction. Reduce manual work by 95% and process documents 10x faster with 99.5% accuracy." />
        <meta name="keywords" content="document processing, OCR, data extraction, document automation, AI document processing, intelligent document recognition" />
        <link rel="canonical" href="https://ziontechgroup.com/services/smart-document-processing" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <FileText className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">AI-Powered Document Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart Document Processing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform document processing with AI-powered OCR and data extraction. 
              Reduce manual work by 95% and process documents 10x faster with 99.5% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Processing Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="#demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Document Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to automate document processing and data extraction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Process Any Document Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From invoices to legal documents, our AI handles all document types with precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.category}</h3>
                <ul className="space-y-2">
                  {type.documents.map((document, documentIndex) => (
                    <li key={documentIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {document}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 3-step process to transform your document processing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Upload Documents</h3>
              <p className="text-gray-600">
                Upload documents via web interface, email, API, or integrate with your existing systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. AI Processing</h3>
              <p className="text-gray-600">
                Our AI automatically recognizes document types, extracts data, and validates information
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Get Results</h3>
              <p className="text-gray-600">
                Receive structured data, processed documents, and automated workflows in real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your document processing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-green-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-green-600 mb-2">{tier.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite business applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Salesforce", "HubSpot", "QuickBooks", "Xero", "SAP", "Oracle",
              "Microsoft 365", "Google Workspace", "Slack", "Teams", "Zapier", "Workato",
              "AWS", "Azure", "Google Cloud", "Box", "Dropbox", "SharePoint"
            ].map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3"></div>
                <p className="text-sm font-medium text-gray-700">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Document Processing?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of companies already saving time and money with smart document processing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-gray-600 hover:text-green-600">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-green-600">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600 text-center">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}