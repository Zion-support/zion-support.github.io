import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  AlertTriangle, 
  TrendingUp, 
  Target, 
  Brain, 
  BarChart3, 
  Clock, 
  CheckCircle,
  DollarSign,
  Star,
  ArrowRight,
  Settings,
  FileText,
  Calendar,
  Shield,
  Globe,
  Activity,
  Zap,
  Cpu,
  Database,
  Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Predictive Maintenance Platform - Zion Tech Group',
  description: 'Revolutionary AI-powered predictive maintenance platform that prevents equipment failures, reduces downtime by 80%, and saves millions in maintenance costs.',
  keywords: 'AI predictive maintenance, equipment monitoring, IoT sensors, maintenance optimization, failure prediction',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIPredictiveMaintenancePlatform() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
          <Brain className="w-4 h-4 mr-2" />
          AI-Powered Maintenance Intelligence
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Predictive Maintenance Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Prevent equipment failures before they happen. Our AI platform monitors equipment health in real-time, 
          predicts failures with 95% accuracy, and reduces maintenance costs by 40% while increasing uptime by 80%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="mailto:kleber@ziontechgroup.com?subject=AI Predictive Maintenance Platform Inquiry"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Prevent Failures Today
          </Link>
          <Link to="tel:+13024640950"
            className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
            <Eye className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Monitoring</h3>
          <p className="text-gray-600 mb-4">
            Continuous monitoring of equipment health using IoT sensors and advanced analytics for instant alerts.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• IoT sensor integration</li>
            <li>• Real-time data streaming</li>
            <li>• Instant anomaly detection</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Failure Prediction</h3>
          <p className="text-gray-600 mb-4">
            Advanced machine learning algorithms predict equipment failures with 95% accuracy up to 30 days in advance.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• 95% prediction accuracy</li>
            <li>• 30-day advance warning</li>
            <li>• Root cause analysis</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Alerts</h3>
          <p className="text-gray-600 mb-4">
            Intelligent alerting system that prioritizes critical issues and provides actionable maintenance recommendations.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Priority-based alerts</li>
            <li>• Maintenance recommendations</li>
            <li>• Escalation workflows</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <Wrench className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance Optimization</h3>
          <p className="text-gray-600 mb-4">
            Optimize maintenance schedules and resource allocation based on equipment health and usage patterns.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Dynamic scheduling</li>
            <li>• Resource optimization</li>
            <li>• Cost minimization</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive analytics dashboard with equipment performance metrics, trends, and predictive insights.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Performance dashboards</li>
            <li>• Trend analysis</li>
            <li>• Predictive insights</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
          <p className="text-gray-600 mb-4">
            Bank-level security with encrypted data transmission, secure cloud storage, and compliance features.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• End-to-end encryption</li>
            <li>• Secure cloud storage</li>
            <li>• Compliance ready</li>
          </ul>
        </div>
      </div>

      {/* Equipment Types */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Monitor Any Equipment Type</h2>
          <p className="text-lg text-gray-600">From manufacturing to utilities, we monitor everything</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing</h3>
            <p className="text-gray-600 text-sm">CNC machines, conveyor systems, robotic arms</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Utilities</h3>
            <p className="text-gray-600 text-sm">Power generators, transformers, pumps</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Centers</h3>
            <p className="text-gray-600 text-sm">Servers, cooling systems, UPS units</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Transportation</h3>
            <p className="text-gray-600 text-sm">Fleet vehicles, aircraft engines, trains</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 rounded-2xl p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your equipment monitoring needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Fleet</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$299<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Perfect for small operations</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Up to 50 equipment units
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Basic monitoring
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Standard alerts
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Email support
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Cloud deployment
              </li>
            </ul>
            <Link to="mailto:kleber@ziontechgroup.com?subject=Small Fleet Plan - AI Predictive Maintenance"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-red-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$999<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Ideal for large operations</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Up to 500 equipment units
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Advanced AI predictions
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Custom dashboards
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Priority support
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                API access
              </li>
            </ul>
            <Link to="mailto:kleber@ziontechgroup.com?subject=Enterprise Plan - AI Predictive Maintenance"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-red-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
              <p className="text-gray-600">For large organizations</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Unlimited equipment
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Custom AI models
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                White-label solution
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                24/7 dedicated support
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                On-premise deployment
              </li>
            </ul>
            <Link to="mailto:kleber@ziontechgroup.com?subject=Custom Plan - AI Predictive Maintenance"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Business Impact</h2>
          <p className="text-lg text-gray-600">See how our AI Predictive Maintenance Platform delivers measurable results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">80%</h3>
            <p className="text-gray-600">Reduction in unplanned downtime</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">40%</h3>
            <p className="text-gray-600">Reduction in maintenance costs</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600">Accuracy in failure prediction</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">300%</h3>
            <p className="text-gray-600">ROI within first year</p>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12 text-white mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-xl opacity-90">Connect with your existing systems and tools</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">IoT Platforms</h3>
            <p className="text-sm opacity-80">AWS IoT, Azure IoT, Google Cloud IoT</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">CMMS Systems</h3>
            <p className="text-sm opacity-80">SAP PM, IBM Maximo, Oracle EAM</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm opacity-80">Tableau, Power BI, Grafana</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm opacity-80">Enterprise SSO, VPN, Firewall</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Prevent Equipment Failures?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of organizations using our AI Predictive Maintenance Platform to prevent failures and optimize maintenance operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="mailto:kleber@ziontechgroup.com?subject=AI Predictive Maintenance Platform Demo Request"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Schedule Demo
          </Link>
          <Link to="tel:+13024640950"
            className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 🌐 <Link to="https://ziontechgroup.com" className="text-red-600 hover:underline">ziontechgroup.com</Link></p>
        </div>
      </div>
    </div>
  );
}