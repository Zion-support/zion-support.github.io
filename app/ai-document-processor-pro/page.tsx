import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Search,
  Download,
  Upload,
  Eye
} from 'lucide-react';

const AiDocumentProcessorProPage: React.FC = () => {
  const features = [
    "OCR Text Extraction (99.9% accuracy)",
    "Multi-format Support (PDF, DOC, XLS, PPT, Images)",
    "Intelligent Data Classification",
    "Automated Form Processing",
    "Document Comparison & Version Control",
    "Smart Search & Indexing",
    "Batch Processing (1000+ docs/min)",
    "API Integration & Webhooks",
    "Compliance & Audit Trails",
    "Cloud & On-premise Deployment"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 documents/month",
        "5 supported formats",
        "Basic OCR extraction",
        "Email support",
        "Cloud storage (10GB)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular for businesses",
      features: [
        "Up to 10,000 documents/month",
        "All supported formats",
        "Advanced OCR + AI classification",
        "Priority support",
        "Cloud storage (100GB)",
        "API access",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited documents",
        "All formats + custom parsers",
        "Full AI suite + ML training",
        "24/7 dedicated support",
        "Unlimited cloud storage",
        "Full API + webhooks",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const documentTypes = [
    {
      type: "Invoices & Receipts",
      description: "Automatically extract vendor info, amounts, dates, and line items",
      icon: <FileText className="w-6 h-6" />
    },
    {
      type: "Contracts & Legal",
      description: "Identify key terms, clauses, and important dates in legal documents",
      icon: <Shield className="w-6 h-6" />
    },
    {
      type: "Forms & Applications",
      description: "Process structured forms and extract data into databases",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      type: "Reports & Analytics",
      description: "Extract tables, charts, and metrics from business reports",
      icon: <Search className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Save 80% Time",
      description: "Automate document processing that used to take hours",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "99.9% Accuracy",
      description: "AI-powered extraction with human-level precision",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Scale Instantly",
      description: "Process thousands of documents in minutes",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Secure & Compliant",
      description: "Enterprise-grade security with audit trails",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Document Processor Pro - Zion Tech Group | Intelligent Document Processing</title>
        <meta name="description" content="Revolutionary AI document processing with 99.9% accuracy OCR, intelligent classification, and automated data extraction. Transform your document workflows." />
        <meta name="keywords" content="AI document processing, OCR, document automation, data extraction, intelligent classification, document management" />
        <meta property="og:title" content="AI Document Processor Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI document processing with enterprise-grade accuracy and automation." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Industry-Leading Document AI
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Document Processor Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your document workflows with AI-powered processing. Extract, classify, and analyze 
                documents with 99.9% accuracy. From invoices to contracts, automate it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities that make document processing effortless and accurate
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Supported Document Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Process any document type with intelligent AI classification and extraction
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documentTypes.map((docType, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{docType.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{docType.type}</h3>
                  <p className="text-gray-300">{docType.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Solution?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven document processing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your document processing needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                } transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">1M+</div>
                <div className="text-gray-400">Documents Processed</div>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-gray-400">Docs/Minute</div>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Documents?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to schedule a demo and see how AI Document Processor Pro can transform your workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiDocumentProcessorProPage;