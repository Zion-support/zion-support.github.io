import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target, TrendingUp, Users, Zap, CheckCircle, Star, Smartphone, Mail, MapPin } from 'lucide-react';


export default function ServicesAdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
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
              Transform your advertising campaigns with our breakthrough AI technology. Achieve 95% targeting accuracy, 
              60% cost reduction, and 300% ROI with intelligent automation and predictive analytics. Our proven 
              solutions have helped 500+ businesses increase their marketing ROI by an average of 300%.
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
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
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
              <h3 className="text-xl font-semibold mb-3">AI-Powered Targeting</h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning algorithms that identify and target your ideal customers with 95% accuracy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Behavioral analysis</li>
                <li>• Predictive modeling</li>
                <li>• Real-time optimization</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-semibold text-blue-800">Starting at $1,500/month</div>
                <div className="text-xs text-blue-600">Includes setup and optimization</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-green-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Campaign Optimization</h3>
              <p className="text-gray-600 mb-4">
                Continuous AI-driven optimization that maximizes performance and minimizes costs across all channels.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• A/B testing automation</li>
                <li>• Budget allocation</li>
                <li>• Performance monitoring</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="text-sm font-semibold text-green-800">Starting at $2,000/month</div>
                <div className="text-xs text-green-600">Includes 24/7 monitoring</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-purple-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">Creative Generation</h3>
              <p className="text-gray-600 mb-4">
                AI-generated ad creatives that adapt to audience preferences and platform requirements in real-time.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dynamic creative optimization</li>
                <li>• Personalization at scale</li>
                <li>• Multi-platform adaptation</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <div className="text-sm font-semibold text-purple-800">Starting at $1,200/month</div>
                <div className="text-xs text-purple-600">Unlimited creative variations</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-orange-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Social Media Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated social media management with AI-powered content creation and engagement optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Content calendar automation</li>
                <li>• Engagement optimization</li>
                <li>• Cross-platform posting</li>
              </ul>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <div className="text-sm font-semibold text-orange-800">Starting at $800/month</div>
                <div className="text-xs text-orange-600">All major platforms included</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-red-600 text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-3">Email Marketing AI</h3>
              <p className="text-gray-600 mb-4">
                Intelligent email marketing with personalization, send-time optimization, and performance tracking.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personalization engine</li>
                <li>• Send-time optimization</li>
                <li>• A/B testing automation</li>
              </ul>
              <div className="mt-4 p-3 bg-red-50 rounded-lg">
                <div className="text-sm font-semibold text-red-800">Starting at $600/month</div>
                <div className="text-xs text-red-600">Up to 100K subscribers</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-cyan-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics and reporting with predictive insights and actionable recommendations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time dashboards</li>
                <li>• Predictive analytics</li>
                <li>• Custom reporting</li>
              </ul>
              <div className="mt-4 p-3 bg-cyan-50 rounded-lg">
                <div className="text-sm font-semibold text-cyan-800">Starting at $1,000/month</div>
                <div className="text-xs text-cyan-600">Includes custom dashboards</div>
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
              <div className="text-4xl font-bold text-blue-600 mb-6">$1,500<span className="text-lg text-gray-500">/month</span></div>
              <div className="text-sm text-gray-500 mb-6">Perfect for small businesses and startups</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Up to $5K monthly ad spend</span>
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
                  <span>Email support (24-48hrs)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>2 social media platforms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic creative generation</span>
                </li>
              </ul>
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-sm font-semibold text-blue-800">ROI Guarantee: 200%</div>
                <div className="text-xs text-blue-600">Or we refund the difference</div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
            <div className="bg-blue-600 text-white rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$3,500<span className="text-lg text-blue-200">/month</span></div>
              <div className="text-sm text-blue-200 mb-6">Ideal for growing businesses and agencies</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Up to $25K monthly ad spend</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Advanced AI optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Unlimited creative generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Priority support (4-8hrs)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Custom reporting & dashboards</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>All social media platforms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Email marketing automation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Monthly strategy calls</span>
                </li>
              </ul>
              <div className="mb-6 p-4 bg-blue-500 rounded-lg">
                <div className="text-sm font-semibold text-white">ROI Guarantee: 300%</div>
                <div className="text-xs text-blue-100">Or we refund the difference</div>
              </div>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">Custom<span className="text-lg text-gray-500">/month</span></div>
              <div className="text-sm text-gray-500 mb-6">Tailored solutions for large enterprises</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Unlimited ad spend</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Full AI suite & custom models</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom integrations & APIs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>White-label solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced analytics & BI</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>On-site training & support</span>
                </li>
              </ul>
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm font-semibold text-gray-800">ROI Guarantee: 400%</div>
                <div className="text-xs text-gray-600">Plus dedicated success manager</div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Advertising?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a free AI advertising assessment and discover how we can boost your ROI by 300%. 
              Our team of experts is ready to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">Available 24/7 for urgent matters</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Response within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Get Free Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>500+ successful campaigns</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>300% average ROI increase</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>24/7 AI-powered optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
