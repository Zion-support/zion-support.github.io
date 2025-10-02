import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  BarChart3, 
  TrendingUp, 
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
  PieChart,
  LineChart,
  Target,
  Database,
  Eye,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Business Intelligence Platform - Zion Tech Group | Advanced Analytics & Insights',
  description: 'Revolutionary AI business intelligence platform with predictive analytics, real-time insights, and automated reporting. Transform your data into actionable business intelligence.',
  keywords: 'AI business intelligence, predictive analytics, data insights, business analytics, AI reporting, data visualization',
};

export default function AIBusinessIntelligencePlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
              <span className="text-indigo-600 font-bold text-lg">AI Business Intelligence Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Advanced Analytics & Insights
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transform your data into actionable business intelligence with AI-powered analytics, 
              predictive insights, and automated reporting capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
                <div className="text-2xl font-extrabold text-indigo-400 mb-1">95%</div>
                <div className="text-xs text-indigo-300">Prediction Accuracy</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">Real-time</div>
                <div className="text-xs text-purple-300">Data Processing</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">50+</div>
                <div className="text-xs text-green-300">Data Sources</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">$899</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced BI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technology for comprehensive business intelligence and analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                AI-powered predictive models with 95% accuracy for forecasting trends and outcomes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Sales forecasting</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Demand prediction</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Risk assessment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Insights</h3>
              <p className="text-gray-600 mb-4">
                Live data processing and instant insights with sub-second response times.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Live dashboards</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Streaming analytics</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Instant alerts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Reporting</h3>
              <p className="text-gray-600 mb-4">
                Intelligent report generation with natural language insights and automated distribution.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Auto-generated reports</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Natural language insights</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Scheduled delivery</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Visualization</h3>
              <p className="text-gray-600 mb-4">
                Interactive dashboards with 50+ chart types and customizable visualizations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Interactive charts</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Custom dashboards</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Mobile responsive</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamless integration with 50+ data sources including CRM, ERP, and cloud platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />50+ connectors</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Real-time sync</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Data transformation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Bank-level security with role-based access controls and audit trails.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Role-based access</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Data encryption</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Compliance ready</li>
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
              Transform business intelligence across industries with AI-powered analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sales & Marketing</h3>
              <p className="text-gray-600 mb-4">
                Advanced sales analytics, customer segmentation, and marketing ROI optimization.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 300% improvement in sales forecasting
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Risk analysis, fraud detection, and regulatory compliance reporting.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 250% improvement in risk assessment
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Patient analytics, operational efficiency, and clinical outcome predictions.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 200% improvement in patient outcomes
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Production optimization, quality control, and predictive maintenance analytics.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 180% improvement in production efficiency
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Customer behavior analysis, inventory optimization, and conversion rate analytics.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 150% improvement in conversion rates
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Retail</h3>
              <p className="text-gray-600 mb-4">
                Store performance analytics, customer journey mapping, and demand forecasting.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">ROI:</span> 120% improvement in inventory management
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
              Choose the perfect plan for your business intelligence needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-2">$899</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Up to 5 data sources</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Basic analytics & reporting</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />10 dashboard views</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Email support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Standard security</li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-2">$1,999</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Up to 25 data sources</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Advanced analytics & AI insights</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Unlimited dashboard views</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Predictive analytics</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />API access</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Enterprise security</li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-2">Custom</div>
                <div className="text-gray-600">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Unlimited data sources</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Custom AI models</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />All features included</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />24/7 dedicated support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Custom analytics</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Full API access</li>
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
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of businesses using our AI business intelligence platform to make data-driven decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="#demo" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
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
              Contact our business intelligence experts to discuss your requirements and get a custom solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-indigo-600 hover:text-indigo-700 font-medium">
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