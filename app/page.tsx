import React from 'react';
import { Link } from 'react-router-dom';
import QuantumNeuralIntegrationAdvertisingBanner from '../components/QuantumNeuralIntegrationAdvertisingBanner';
import AutonomousEnterpriseMeshAdvertisingBanner from '../components/AutonomousEnterpriseMeshAdvertisingBanner';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3,
  Brain,
  Cpu,
  Cloud,
  Database,
  Lock,
  TrendingUp,
  Award,
  Target,
  Rocket
} from 'lucide-react';

export const metadata = {
  title: 'Zion Tech Group — Revolutionary AI Breakthroughs 2026 | 1000x Performance Gains',
  description: 'Discover revolutionary AI breakthroughs: Quantum Computing (1000x gains), Autonomous Enterprise (95% automation), and $150M ROI success stories. Transform your organization with cutting-edge AI innovations.',
  keywords: 'AI quantum computing 2026, autonomous enterprise AI, AI breakthrough 2026, quantum AI performance, AI transformation case study, enterprise AI automation, AI ROI 150M, Fortune 500 AI success, AI innovation 2026, quantum-enhanced AI',
  openGraph: {
    title: 'Zion Tech Group — Revolutionary AI Breakthroughs 2026 | 1000x Performance Gains',
    description: 'Discover revolutionary AI breakthroughs: Quantum Computing (1000x gains), Autonomous Enterprise (95% automation), and $150M ROI success stories.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — Revolutionary AI Breakthroughs 2026 | 1000x Performance Gains',
    description: 'Discover revolutionary AI breakthroughs: Quantum Computing (1000x gains), Autonomous Enterprise (95% automation), and $150M ROI success stories.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* NEW: Quantum-Neural Integration Revolution Banner - Most Prominent */}
      <QuantumNeuralIntegrationAdvertisingBanner />
      
      {/* NEW: Autonomous Enterprise Mesh Revolution Banner - Most Prominent */}
      <AutonomousEnterpriseMeshAdvertisingBanner />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Revolutionary AI Breakthroughs 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover revolutionary AI breakthroughs: Quantum Computing (1000x gains), 
            Autonomous Enterprise (95% automation), and $150M ROI success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Explore AI Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/case-studies" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000x</div>
              <div className="text-gray-600">Performance Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$150M</div>
              <div className="text-gray-600">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your organization with cutting-edge AI innovations and enterprise-grade solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning models for business forecasting with 85% accuracy in predictions.
              </p>
              <div className="text-sm text-blue-600 font-semibold mb-2">Starting at $999/month</div>
              <Link to="/services/ai-predictive-analytics-platform" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Business Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Intelligent automation of complex business processes with 70% reduction in execution time.
              </p>
              <div className="text-sm text-purple-600 font-semibold mb-2">Starting at $1,299/month</div>
              <Link to="/services/ai-business-process-automation" className="text-purple-600 font-semibold hover:text-purple-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Invoice Processing SaaS</h3>
              <p className="text-gray-600 mb-4">
                Automate invoice processing with 90% reduction in manual data entry and 99.5% accuracy.
              </p>
              <div className="text-sm text-green-600 font-semibold mb-2">Starting at $99/month</div>
              <Link to="/services/ai-invoice-processing-saas" className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Fraud Detection System</h3>
              <p className="text-gray-600 mb-4">
                Advanced fraud detection with 99.5% accuracy and 90% reduction in false positives.
              </p>
              <div className="text-sm text-orange-600 font-semibold mb-2">Starting at $1,599/month</div>
              <Link to="/services/ai-fraud-detection-system" className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Migration Services</h3>
              <p className="text-gray-600 mb-4">
                Seamless cloud migration with 60% cost reduction and 99.9% uptime during migration.
              </p>
              <div className="text-sm text-red-600 font-semibold mb-2">Starting at $2,500/month</div>
              <Link to="/services/cloud-migration-services" className="text-red-600 font-semibold hover:text-red-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Customer Insights Platform</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive customer insights with 300% improvement in customer understanding.
              </p>
              <div className="text-sm text-indigo-600 font-semibold mb-2">Starting at $799/month</div>
              <Link to="/services/ai-customer-insights-platform" className="text-indigo-600 font-semibold hover:text-indigo-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Services Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative AI-powered micro SaaS solutions designed to solve specific business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Expense Management</h3>
              <p className="text-gray-600 text-sm mb-3">75% reduction in expense processing time</p>
              <div className="text-xs text-blue-600 font-semibold">Starting at $49/month</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Customer Onboarding</h3>
              <p className="text-gray-600 text-sm mb-3">60% faster time-to-value</p>
              <div className="text-xs text-green-600 font-semibold">Starting at $79/month</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Lead Generation</h3>
              <p className="text-gray-600 text-sm mb-3">300% increase in qualified leads</p>
              <div className="text-xs text-purple-600 font-semibold">Starting at $97/month</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Appointment Scheduling</h3>
              <p className="text-gray-600 text-sm mb-3">80% reduction in scheduling conflicts</p>
              <div className="text-xs text-orange-600 font-semibold">Starting at $29/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from Fortune 500 companies and enterprise clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold">Fortune 500 Transformation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                "Zion Tech Group's AI solutions delivered a 1000x performance improvement 
                and $150M ROI within the first year of implementation."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-gray-600">CTO, Global Tech Corp</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold">95% Automation Achievement</h3>
              </div>
              <p className="text-gray-600 mb-6">
                "Our autonomous enterprise system now handles 95% of routine operations, 
                freeing our team to focus on strategic initiatives."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">Michael Rodriguez</div>
                  <div className="text-gray-600">CEO, InnovateCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the AI revolution and unlock unprecedented growth with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our experts today to discuss how our AI and IT solutions can drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-blue-100 hover:text-white transition-colors font-medium">
                +1 302 464 0950
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <a href="https://ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors font-medium">
                ziontechgroup.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Office</h3>
              <div className="text-blue-100 font-medium">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}