'use client';
import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Upload, 
  Download, 
  Eye, 
  Search, 
  Settings, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  BarChart,
  Scan,
  FileImage,
  FilePdf,
  FileSpreadsheet,
  File,
  Folder,
  Archive,
  Image as ImageIcon,
  Camera,
  ScanLine,
  Database,
  Cloud,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Printer,
  Mail,
  Phone,
  MapPin,
  Award,
  TrendingUp
} from 'lucide-react';

const AIDocumentScannerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [scanResults, setScanResults] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Scan,
      title: 'Advanced OCR Technology',
      description: '99% accuracy OCR with support for 100+ languages and handwriting recognition',
      capabilities: ['100+ languages', 'Handwriting recognition', '99% accuracy', 'Multi-format support']
    },
    {
      icon: Database,
      title: 'Intelligent Data Extraction',
      description: 'AI-powered data extraction with automatic field recognition and validation',
      capabilities: ['Auto field detection', 'Data validation', 'Smart categorization', 'Error correction']
    },
    {
      icon: Search,
      title: 'Smart Document Classification',
      description: 'Automatic document classification and organization with machine learning',
      capabilities: ['Auto classification', 'Smart sorting', 'Tag generation', 'Folder organization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance features',
      capabilities: ['End-to-end encryption', 'Access controls', 'Audit logs', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Batch Processing',
      description: 'Process thousands of documents simultaneously with intelligent queuing',
      capabilities: ['Bulk processing', 'Queue management', 'Progress tracking', 'Error handling']
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud storage and business applications',
      capabilities: ['Cloud storage', 'API integration', 'Real-time sync', 'Multi-platform access']
    }
  ];

  const supportedFormats = [
    { name: 'PDF', icon: FilePdf, description: 'Portable Document Format' },
    { name: 'JPEG', icon: ImageIcon, description: 'Joint Photographic Experts Group' },
    { name: 'PNG', icon: ImageIcon, description: 'Portable Network Graphics' },
    { name: 'TIFF', icon: ImageIcon, description: 'Tagged Image File Format' },
    { name: 'BMP', icon: ImageIcon, description: 'Bitmap Image File' },
    { name: 'GIF', icon: ImageIcon, description: 'Graphics Interchange Format' },
    { name: 'DOCX', icon: FileText, description: 'Microsoft Word Document' },
    { name: 'XLSX', icon: FileSpreadsheet, description: 'Microsoft Excel Spreadsheet' },
    { name: 'PPTX', icon: File, description: 'Microsoft PowerPoint Presentation' },
    { name: 'TXT', icon: FileText, description: 'Plain Text File' },
    { name: 'RTF', icon: FileText, description: 'Rich Text Format' },
    { name: 'HTML', icon: FileText, description: 'HyperText Markup Language' }
  ];

  const useCases = [
    {
      category: 'Financial Services',
      icon: BarChart,
      applications: [
        'Invoice processing',
        'Receipt scanning',
        'Bank statement analysis',
        'Tax document management',
        'Expense tracking'
      ],
      benefits: ['90% time savings', 'Error reduction', 'Compliance automation', 'Cost reduction']
    },
    {
      category: 'Healthcare',
      icon: Shield,
      applications: [
        'Patient record digitization',
        'Insurance claim processing',
        'Medical report scanning',
        'Prescription management',
        'Lab result processing'
      ],
      benefits: ['HIPAA compliant', 'Faster processing', 'Improved accuracy', 'Better patient care']
    },
    {
      category: 'Legal',
      icon: FileText,
      applications: [
        'Contract analysis',
        'Case document review',
        'Legal research',
        'Compliance checking',
        'Document discovery'
      ],
      benefits: ['Faster review', 'Better accuracy', 'Cost savings', 'Improved efficiency']
    },
    {
      category: 'Education',
      icon: Users,
      applications: [
        'Student record management',
        'Exam paper digitization',
        'Research document processing',
        'Grade book automation',
        'Library cataloging'
      ],
      benefits: ['Improved efficiency', 'Better organization', 'Cost savings', 'Enhanced accessibility']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        'Up to 1,000 pages/month',
        'Basic OCR',
        '5 languages supported',
        'Email support',
        'Cloud storage (10GB)',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 10,000 pages/month',
        'Advanced OCR',
        '50+ languages supported',
        'Priority support',
        'Cloud storage (100GB)',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited pages',
        'Premium OCR',
        '100+ languages supported',
        '24/7 dedicated support',
        'Unlimited cloud storage',
        'Real-time analytics',
        'Full API access',
        'White-label solution',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Drive', icon: Cloud, description: 'Direct integration with Google Drive' },
    { name: 'Dropbox', icon: Cloud, description: 'Seamless Dropbox synchronization' },
    { name: 'OneDrive', icon: Cloud, description: 'Microsoft OneDrive integration' },
    { name: 'Salesforce', icon: BarChart, description: 'CRM data extraction' },
    { name: 'QuickBooks', icon: BarChart, description: 'Accounting software integration' },
    { name: 'Slack', icon: Mail, description: 'Team collaboration platform' },
    { name: 'Zapier', icon: Zap, description: 'Connect with 3,000+ apps' },
    { name: 'REST API', icon: Settings, description: 'Custom API integration' }
  ];

  const stats = [
    { number: '99%', label: 'OCR Accuracy', icon: Scan },
    { number: '1000+', label: 'Docs/Hour Processing', icon: Zap },
    { number: '100+', label: 'Languages Supported', icon: Globe },
    { number: '50+', label: 'File Formats', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Document Scanner Pro
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Intelligent document scanning with advanced OCR, data extraction, and automated organization. 
              Transform your document management with AI-powered precision.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Scan className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">99% OCR Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">1000+ Docs/Hour</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">100+ Languages</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center"
              >
                <Upload className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Try Our Document Scanner
            </h2>
            <div className="futuristic-card-enhanced p-8 mb-8">
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 mb-6">
                <div className="text-center">
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <div className="text-xl font-bold text-white mb-2">
                    {isScanning ? 'Processing Documents...' : 'Drop files here or click to upload'}
                  </div>
                  <div className="text-gray-400 mb-4">
                    Supports PDF, JPEG, PNG, TIFF, DOCX, and more
                  </div>
                  <button
                    className="neon-button-enhanced px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    onClick={() => setIsScanning(!isScanning)}
                  >
                    {isScanning ? 'Processing...' : 'Upload Documents'}
                  </button>
                </div>
              </div>
              {isScanning && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>Processing document.pdf</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="text-sm text-cyan-400">
                    Extracting text and data... Almost done!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Document Processing Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology that understands, extracts, and organizes your documents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Supported File Formats
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Process virtually any document format with our comprehensive support
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {supportedFormats.map((format, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-slate-600 transition-colors duration-300">
                  <format.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-sm font-medium text-white mb-1">{format.name}</div>
                <div className="text-xs text-gray-400">{format.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your industry with intelligent document processing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.category}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {useCase.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-sm text-gray-300">• {app}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-300">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-slate-600 transition-colors duration-300">
                  <integration.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-sm font-medium text-white mb-1">{integration.name}</div>
                <div className="text-xs text-gray-400">{integration.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs and scale as you grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`futuristic-card-enhanced hover-lift p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'neon-button-enhanced'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Document Management?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 2,100+ businesses already using our AI Document Scanner. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center"
            >
              <Upload className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDocumentScannerPage;
