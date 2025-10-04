import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  FileText, 
  BarChart3, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Database,
  Eye,
  Search,
  Edit3,
  Upload,
  Download,
  PieChart,
  LineChart,
  AlertTriangle,
  Cpu,
  Cloud,
  Lock,
  Settings,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comprehensive Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Micro SaaS',
  description: 'Revolutionary micro SaaS solutions across AI automation, data analytics, cybersecurity, cloud infrastructure, e-commerce, healthcare, fintech, education, real estate, and logistics with proven ROI.',
  keywords: 'micro SaaS, AI automation, data analytics, cybersecurity, cloud infrastructure, e-commerce SaaS, healthcare tech, fintech solutions, education technology, real estate tech, logistics solutions',
};

export default function ComprehensiveMicroSaaSSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Brain className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-bold text-lg">Comprehensive Micro SaaS Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              50+ Revolutionary Micro SaaS Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered micro SaaS solutions 
              across every industry vertical with proven ROI and fast deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#solutions" 
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">50+</div>
                <div className="text-xs text-blue-300">Micro SaaS Solutions</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9%</div>
                <div className="text-xs text-purple-300">Uptime Guarantee</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">24/7</div>
                <div className="text-xs text-green-300">Support Available</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">$49</div>
                <div className="text-xs text-orange-300">Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section id="solutions" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary AI-powered micro SaaS solutions designed for maximum impact and ROI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Voice Assistant Platform */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Voice Assistant Platform</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary voice AI with 99.9% accuracy, multilingual support, and enterprise-grade security.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Starting at:</span> $299/month
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
              <Link 
                href="/services/ai-voice-assistant-platform" 
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
              >
                Learn More →
              </Link>
            </div>

            {/* AI Document Automation Platform */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Document Automation Platform</h3>
              <p className="text-gray-600 mb-4">
                Intelligent document processing with 99.8% accuracy, OCR, and workflow automation.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Starting at:</span> $199/month
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8/5</span>
                </div>
              </div>
              <Link 
                href="/services/ai-document-automation-platform" 
                className="text-green-600 font-semibold hover:text-green-700 flex items-center"
              >
                Learn More →
              </Link>
            </div>

            {/* AI Business Intelligence Platform */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Business Intelligence Platform</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics with predictive insights, real-time processing, and automated reporting.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Starting at:</span> $899/month
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
              <Link 
                href="/services/ai-business-intelligence-platform" 
                className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center"
              >
                Learn More →
              </Link>
            </div>

            {/* AI Content Optimization Suite */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Edit3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Content Optimization Suite</h3>
              <p className="text-gray-600 mb-4">
                AI-powered content creation, optimization, and SEO with automated publishing workflows.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Starting at:</span> $199/month
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.7/5</span>
                </div>
              </div>
              <Link 
                href="/services/ai-content-optimization-suite" 
                className="text-purple-600 font-semibold hover:text-purple-700 flex items-center"
              >
                Learn More →
              </Link>
            </div>

            {/* AI Lead Scoring API */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Lead Scoring API</h3>
              <p className="text-gray-600 mb-4">
                Intelligent lead qualification and scoring with predictive analytics and automated follow-up.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Starting at:</span> $299/month
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8/5</span>
                </div>
              </div>
              <Link 
                href="/services/ai-lead-scoring-api" 
                className="text-orange-600 font-semibold hover:text-orange-700 flex items-center"
              >
                Learn More →
              </Link>
            </div>

            {/* AI Financial Forecasting Suite */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Financial Forecasting Suite</h3>
              <p className="text-gray-600 mb-4">
                Advanced financial modeling, risk analysis, and predictive forecasting with 95% accuracy.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Starting at:</span> $499/month
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
              <Link 
                href="/services/ai-financial-forecasting-suite" 
                className="text-green-600 font-semibold hover:text-green-700 flex items-center"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored micro SaaS solutions designed for specific industry needs and challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare Solutions */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare Technology</h3>
              <p className="text-gray-600 mb-4">
                HIPAA-compliant solutions for patient management, telemedicine, and medical analytics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Telemedicine Platform</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Patient Scheduling SaaS</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Medical Records Management</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $299/month
              </div>
            </div>

            {/* Financial Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Technology</h3>
              <p className="text-gray-600 mb-4">
                Secure fintech solutions for payments, risk management, and financial analytics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Payment Processing API</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Risk Assessment Platform</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fraud Detection System</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $399/month
              </div>
            </div>

            {/* E-commerce Solutions */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce Technology</h3>
              <p className="text-gray-600 mb-4">
                Complete e-commerce solutions for inventory, analytics, and customer experience.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Smart Inventory Management</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Customer Analytics Platform</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Order Processing Automation</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $199/month
              </div>
            </div>

            {/* Education Technology */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education Technology</h3>
              <p className="text-gray-600 mb-4">
                EdTech solutions for learning management, student analytics, and educational content.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Learning Management System</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Student Performance Analytics</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Content Creation Platform</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $149/month
              </div>
            </div>

            {/* Real Estate Technology */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Estate Technology</h3>
              <p className="text-gray-600 mb-4">
                PropTech solutions for property management, analytics, and transaction processing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Property Management SaaS</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Market Analytics Platform</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Transaction Processing System</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $249/month
              </div>
            </div>

            {/* Logistics Solutions */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Logistics Technology</h3>
              <p className="text-gray-600 mb-4">
                Supply chain solutions for tracking, optimization, and logistics management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Supply Chain Intelligence</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Route Optimization Platform</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fleet Management System</li>
              </ul>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Starting at:</span> $349/month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your micro SaaS needs with transparent pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$49</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />1 Micro SaaS Solution</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Basic features included</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Email support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Standard security</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />99.9% uptime</li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$199</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Up to 5 Micro SaaS Solutions</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Advanced features included</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Enterprise security</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />API access</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Custom integrations</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />99.99% uptime</li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">Custom</div>
                <div className="text-gray-600">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Unlimited Micro SaaS Solutions</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />All features included</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />24/7 dedicated support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Custom security</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Full API access</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Custom development</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />On-premise deployment</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />SLA guarantees</li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors text-center block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Micro SaaS?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses using our comprehensive micro SaaS solutions to drive growth and efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="#solutions" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore All Solutions
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
              Contact our micro SaaS experts to discuss your requirements and get a custom solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-medium">
                +1 302 464 0950
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 hover:text-purple-700 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <div className="text-green-600 font-medium">
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