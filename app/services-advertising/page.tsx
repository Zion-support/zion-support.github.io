import {
  ArrowLeft,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesAdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-sm font-semibold mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI-Powered Advertising Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Advertising Services
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Revolutionize Your Marketing with 300% ROI Guaranteed
            </p>

            <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
              Transform your advertising campaigns with our breakthrough AI
              technology. Achieve 95% targeting accuracy, 60% cost reduction,
              and 300% ROI with intelligent automation and predictive analytics.
              Our proven methodology has helped 500+ businesses increase their
              advertising effectiveness while reducing costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Start Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Advertising Results
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-powered advertising delivers measurable business impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Targeting Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Campaign Optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Advertising Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered advertising services for maximum impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">
                AI-Powered Targeting
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning algorithms that identify and target
                your ideal customers with 95% accuracy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Behavioral analysis</li>
                <li>• Predictive modeling</li>
                <li>• Real-time optimization</li>
                <li>• Lookalike audience creation</li>
                <li>• Cross-platform targeting</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $2,000-5,000/month | Our Price: $1,200/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-green-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">
                Campaign Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Continuous AI-driven optimization that maximizes performance and
                minimizes costs across all channels.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• A/B testing automation</li>
                <li>• Budget allocation</li>
                <li>• Performance monitoring</li>
                <li>• Bid optimization</li>
                <li>• Landing page optimization</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $3,000-7,000/month | Our Price: $1,800/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-purple-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">
                Creative Generation
              </h3>
              <p className="text-gray-600 mb-4">
                AI-generated ad creatives that adapt to audience preferences and
                platform requirements in real-time.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dynamic creative optimization</li>
                <li>• Personalization at scale</li>
                <li>• Multi-platform adaptation</li>
                <li>• Video ad generation</li>
                <li>• Brand consistency maintenance</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $2,500-6,000/month | Our Price: $1,500/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-orange-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">
                Social Media Advertising
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive social media advertising management across all
                major platforms with AI optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Facebook & Instagram ads</li>
                <li>• LinkedIn advertising</li>
                <li>• TikTok & Snapchat ads</li>
                <li>• Twitter advertising</li>
                <li>• Cross-platform analytics</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $2,000-5,000/month | Our Price: $1,200/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-red-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">
                Search Engine Marketing
              </h3>
              <p className="text-gray-600 mb-4">
                AI-powered Google Ads and Bing advertising with intelligent
                keyword optimization and bid management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Google Ads management</li>
                <li>• Bing advertising</li>
                <li>• Keyword research & optimization</li>
                <li>• Ad copy generation</li>
                <li>• Performance tracking</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $1,500-4,000/month | Our Price: $900/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-indigo-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">
                Analytics & Reporting
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics and reporting with AI insights and automated
                performance recommendations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time dashboards</li>
                <li>• AI-powered insights</li>
                <li>• Automated reporting</li>
                <li>• ROI optimization</li>
                <li>• Competitive analysis</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $1,000-3,000/month | Our Price: $600/month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your advertising needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                $1,200<span className="text-lg text-gray-500">/month</span>
              </div>
              <div className="text-sm text-green-600 font-semibold mb-6">
                Save 40% vs market rates
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Up to $10K ad spend</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>AI targeting optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic reporting & analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>2 platforms included</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
            <div className="bg-blue-600 text-white rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-2">
                $2,500<span className="text-lg text-blue-200">/month</span>
              </div>
              <div className="text-sm text-green-300 font-semibold mb-6">
                Save 50% vs market rates
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Up to $50K ad spend</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Advanced AI optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Creative generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Custom reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>All platforms included</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                $5,000<span className="text-lg text-gray-500">/month</span>
              </div>
              <div className="text-sm text-green-600 font-semibold mb-6">
                Save 60% vs market rates
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Unlimited ad spend</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Full AI suite</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>White-label options</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free AI advertising assessment and discover how we can boost
            your ROI by 300%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Free Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
