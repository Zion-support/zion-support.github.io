// import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Upload, 
  Download, 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  FileCheck,
  Search,
  Edit3
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Document Automation Platform - Zion Tech Group | Intelligent Document Processing',
  description: 'Revolutionary AI document automation platform with 99.8% accuracy, OCR, data extraction, and workflow automation. Transform your document processing with intelligent automation.',
  keywords: 'AI document automation, document processing, OCR, data extraction, workflow automation, intelligent documents',
};

export default function AIDocumentAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <FileText className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-bold text-lg">AI Document Automation Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Intelligent Document Processing
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transform your document workflows with AI-powered automation featuring 99.8% accuracy, 
              intelligent data extraction, and seamless workflow integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="#demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-500 hover:text-green-600 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">99.8%</div>
                <div className="text-xs text-green-300">Accuracy Rate</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">95%</div>
                <div className="text-xs text-blue-300">Time Savings</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">50+</div>
                <div className="text-xs text-purple-300">File Formats</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">$199</div>
                <div className="text-xs text-orange-300">Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Document AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technology for intelligent document processing and automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent OCR</h3>
              <p className="text-gray-600 mb-4">
                Advanced optical character recognition with 99.8% accuracy for handwritten and printed text.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Handwritten text recognition</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Multi-language support</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Table extraction</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Data Extraction</h3>
              <p className="text-gray-600 mb-4">
                AI-powered extraction of key information from documents with context understanding.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Named entity recognition</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Key-value pair extraction</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Custom field mapping</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workflow Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated document processing workflows with intelligent routing and approval processes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Automated routing</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Approval workflows</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Integration APIs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Document Validation</h3>
              <p className="text-gray-600 mb-4">
                Intelligent document validation with fraud detection and compliance checking.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fraud detection</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Compliance checking</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Quality scoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Edit3 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Document Classification</h3>
              <p className="text-gray-600 mb-4">
                Automatic document classification and categorization with machine learning models.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Auto-categorization</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Content analysis</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Priority scoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Bank-level security with encryption, access controls, and audit trails.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />End-to-end encryption</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Access controls</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Audit trails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform document processing across industries with AI automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Automated processing of invoices, contracts, and financial documents with compliance validation.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 400% reduction in processing time
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                HIPAA-compliant processing of medical records, insurance claims, and patient documents.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 300% improvement in accuracy
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Legal Services</h3>
              <p className="text-gray-600 mb-4">
                Automated contract analysis, legal document review, and case file organization.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 250% faster document review
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Insurance</h3>
              <p className="text-gray-600 mb-4">
                Automated claims processing, policy document analysis, and risk assessment.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 200% improvement in claims processing
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Estate</h3>
              <p className="text-gray-600 mb-4">
                Automated processing of property documents, contracts, and transaction records.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 180% faster transaction processing
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Government</h3>
              <p className="text-gray-600 mb-4">
                Automated processing of forms, applications, and regulatory documents.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 150% improvement in citizen services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your document automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$199</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Up to 1,000 documents/month</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Basic OCR & data extraction</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />5 file formats supported</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Email support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Basic analytics</li>
              </ul>
              <Link to="/contact" 
                className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$599</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Up to 10,000 documents/month</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Advanced OCR & AI extraction</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />All file formats supported</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Workflow automation</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />API access</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Advanced analytics</li>
              </ul>
              <Link to="/contact" 
                className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">Custom</div>
                <div className="text-gray-600">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Unlimited documents</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Custom AI models</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />All features included</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />24/7 dedicated support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Custom workflows</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Full API access</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />On-premise deployment</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />SLA guarantees</li>
              </ul>
              <Link to="/contact" 
                className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors text-center block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Document Processing?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses using our AI document automation platform to streamline workflows
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="#demo" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact our document automation experts to discuss your requirements and get a custom solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-green-600 hover:text-green-700 font-medium">
                +1 302 464 0950
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <div className="text-purple-600 font-medium">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}