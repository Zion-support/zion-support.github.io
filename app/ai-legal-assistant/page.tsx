import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Scale, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  DollarSign,
  Calendar,
  BarChart3,
  Users,
  Globe,
  Lock,
  Download,
  Upload,
  Bell,
  Settings,
  CreditCard,
  Smartphone,
  Shield,
  PieChart,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Edit,
  Trash2,
  Copy,
  Eye,
  Plus,
  Minus,
  Calculator,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Database,
  Cpu,
  Activity,
  MessageSquare,
  UserPlus,
  TrendingDown,
  Award,
  Briefcase,
  Building,
  FileText,
  Link,
  Share2,
  RefreshCw,
  BookOpen,
  Gavel,
  FileCheck,
  AlertTriangle,
  Clock3,
  Target
} from 'lucide-react';

export default function AILegalAssistantPage() {
  const features = [
    {
      icon: Cpu,
      title: 'AI Contract Analysis',
      description: 'Advanced NLP analyzes contracts, identifies risks, and suggests improvements with 98% accuracy',
      benefit: 'Reduce contract review time by 80% and identify 95% of potential issues'
    },
    {
      icon: Search,
      title: 'Legal Research Assistant',
      description: 'AI-powered legal research that finds relevant cases, statutes, and precedents in seconds',
      benefit: 'Complete research tasks 10x faster than traditional methods'
    },
    {
      icon: FileText,
      title: 'Document Generation',
      description: 'Generate legal documents, contracts, and forms using AI-powered templates and customization',
      benefit: 'Create professional legal documents in minutes instead of hours'
    },
    {
      icon: BarChart3,
      title: 'Case Outcome Prediction',
      description: 'Machine learning predicts case outcomes and settlement values based on historical data',
      benefit: 'Make informed decisions with 85% accuracy predictions'
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Automated compliance tracking and alerts for regulatory changes and deadlines',
      benefit: 'Stay compliant and avoid costly penalties automatically'
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Intelligent client portal with case tracking, document sharing, and communication tools',
      benefit: 'Improve client satisfaction and case organization'
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practice',
      price: '$79',
      period: '/month',
      description: 'Perfect for individual lawyers and small practices',
      features: [
        'Up to 50 cases/month',
        'Basic AI analysis',
        'Document generation',
        'Client portal',
        'Email support',
        '2 user accounts',
        'Standard templates'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Law Firm',
      price: '$199',
      period: '/month',
      description: 'Most popular for growing law firms',
      features: [
        'Up to 500 cases/month',
        'Advanced AI analysis',
        'Legal research assistant',
        'Case outcome prediction',
        'Compliance monitoring',
        'API access',
        'Priority support',
        '10 user accounts',
        'Custom templates',
        'Advanced reporting'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large law firms and corporate legal departments',
      features: [
        'Unlimited cases',
        'Custom AI models',
        'White-label solution',
        'Advanced automation',
        'Custom integrations',
        'Dedicated support',
        'Unlimited users',
        'Advanced compliance tools',
        'Custom reporting',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Partner, Mitchell & Associates',
      content: 'AI Legal Assistant reduced our contract review time by 85% and helped us identify risks we would have missed. It\'s like having a senior associate working 24/7.',
      rating: 5,
      company: 'Mitchell & Associates'
    },
    {
      name: 'David Chen',
      role: 'Corporate Counsel, TechCorp',
      content: 'The compliance monitoring feature saved us from a major regulatory violation. The AI caught something our team missed, potentially saving us millions in fines.',
      rating: 5,
      company: 'TechCorp Legal'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Solo Practitioner',
      content: 'As a solo practitioner, AI Legal Assistant gives me the research power of a large firm. I can compete with bigger practices and serve my clients better.',
      rating: 5,
      company: 'Rodriguez Law Office'
    }
  ];

  const integrations = [
    { name: 'Clio', logo: 'C' },
    { name: 'MyCase', logo: 'MC' },
    { name: 'PracticePanther', logo: 'PP' },
    { name: 'Smokeball', logo: 'SB' },
    { name: 'LexisNexis', logo: 'LN' },
    { name: 'Westlaw', logo: 'WL' },
    { name: 'DocuSign', logo: 'DS' },
    { name: 'Adobe Sign', logo: 'AS' }
  ];

  const practiceAreas = [
    {
      title: 'Corporate Law',
      description: 'Contract analysis, M&A support, and compliance monitoring',
      icon: Building,
      benefits: ['Contract review', 'Due diligence', 'Compliance tracking']
    },
    {
      title: 'Litigation',
      description: 'Case research, outcome prediction, and document management',
      icon: Gavel,
      benefits: ['Case research', 'Outcome prediction', 'Document discovery']
    },
    {
      title: 'Real Estate',
      description: 'Property law, lease analysis, and transaction support',
      icon: Building,
      benefits: ['Lease analysis', 'Title research', 'Transaction support']
    },
    {
      title: 'Family Law',
      description: 'Document generation, case tracking, and client management',
      icon: Users,
      benefits: ['Document prep', 'Case tracking', 'Client portal']
    }
  ];

  const benefits = [
    {
      metric: '80%',
      label: 'Time Savings',
      description: 'Faster document review and research'
    },
    {
      metric: '98%',
      label: 'Accuracy Rate',
      description: 'AI-powered analysis precision'
    },
    {
      metric: '95%',
      label: 'Risk Detection',
      description: 'Identifies potential legal issues'
    },
    {
      metric: '85%',
      label: 'Outcome Prediction',
      description: 'Case success probability'
    }
  ];

  const legalFeatures = [
    {
      title: 'Contract Analysis',
      description: 'AI analyzes contracts for risks, clauses, and compliance issues',
      icon: FileCheck,
      time: '5 minutes vs 2 hours'
    },
    {
      title: 'Legal Research',
      description: 'Find relevant cases, statutes, and precedents instantly',
      icon: BookOpen,
      time: '30 seconds vs 3 hours'
    },
    {
      title: 'Document Generation',
      description: 'Create legal documents from AI-powered templates',
      icon: FileText,
      time: '10 minutes vs 4 hours'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Track regulatory changes and deadlines automatically',
      icon: AlertTriangle,
      time: 'Real-time vs manual checking'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Legal Assistant - Smart Legal Research & Document Analysis | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered legal assistant with contract analysis, legal research, document generation, and compliance monitoring. Start your free trial today!" />
        <meta name="keywords" content="AI legal assistant, legal research, contract analysis, document generation, compliance monitoring, law firm software" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-assistant" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="absolute inset-0 cyber-grid-ultra"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-ultra neon-pulse">
              AI Legal Assistant
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI-powered legal assistant that analyzes contracts, conducts research, 
              generates documents, and monitors compliance with unprecedented accuracy and speed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">98% Analysis Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">80% Time Savings</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="neon-button-ultra hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-slate-900 transition-colors inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Legal Results
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI Legal Assistant delivers for law firms
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{benefit.metric}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{benefit.label}</div>
                <div className="text-gray-300 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Intelligent Legal Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powered by advanced AI to transform your legal practice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-ultra p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <p className="text-cyan-400 text-sm font-medium">{feature.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Features Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Time-Saving Legal Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how AI Legal Assistant transforms time-consuming legal tasks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalFeatures.map((feature, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">{feature.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Perfect for Every Practice Area
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From corporate law to family law, AI Legal Assistant adapts to your practice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <div className="space-y-2">
                  {area.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your practice needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`futuristic-card-ultra p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? 'neon-button-ultra'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by 5,000+ Legal Professionals
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what legal professionals say about AI Legal Assistant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card-ultra p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite legal software and tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{integration.logo}</span>
                </div>
                <div className="text-white font-medium">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of legal professionals already saving time and improving accuracy with AI-powered legal assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Scale className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300">
            <p className="mb-4">
              <strong>Contact us:</strong> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a> | 
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-2">kleber@ziontechgroup.com</a>
            </p>
            <p className="text-sm">
              364 E Main St STE 1008, Middletown, DE 19709 | <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}