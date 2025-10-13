import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  SunIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  BeakerIcon,
  MapIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function AIAgriculturalIntelligenceProPage() {
  const features = [
    "AI-powered crop monitoring",
    "Weather prediction & analysis",
    "Soil health assessment",
    "Pest & disease detection",
    "Yield optimization",
    "Irrigation management",
    "Fertilizer recommendations",
    "Harvest timing prediction",
    "Market price analysis",
    "Sustainability tracking"
  ];

  const useCases = [
    "Crop farming",
    "Livestock management",
    "Greenhouse operations",
    "Precision agriculture",
    "Organic farming",
    "Aquaculture",
    "Forestry management",
    "Agricultural research",
    "Supply chain optimization",
    "Food safety compliance"
  ];

  const benefits = [
    "30% increase in yield",
    "25% reduction in costs",
    "40% water savings",
    "Real-time monitoring",
    "Predictive insights"
  ];

  const pricingPlans = [
    {
      name: "Small Farm",
      price: "$299",
      period: "/month",
      description: "Perfect for small farms and individual farmers",
      features: [
        "Up to 50 acres monitoring",
        "Basic AI recommendations",
        "Weather alerts",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Commercial Farm",
      price: "$799",
      period: "/month",
      description: "Ideal for medium to large commercial operations",
      features: [
        "Up to 500 acres monitoring",
        "Advanced AI analytics",
        "Real-time alerts",
        "API integration",
        "Priority support",
        "Custom reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      description: "For large agricultural enterprises and cooperatives",
      features: [
        "Unlimited acreage",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "On-site training",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered agricultural intelligence platform that optimizes crop yields, reduces costs, and promotes sustainable farming practices through advanced analytics and real-time monitoring." />
        <meta name="keywords" content="AI agriculture, precision farming, crop monitoring, agricultural analytics, smart farming, sustainable agriculture, yield optimization" />
        <meta property="og:title" content="AI Agricultural Intelligence Pro - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered agricultural intelligence platform that optimizes crop yields and promotes sustainable farming." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-agricultural-intelligence-pro" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <SunIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Agricultural Intelligence Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your farming operations with AI-powered intelligence that maximizes yields and promotes sustainability
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our advanced AI platform combines satellite imagery, weather data, soil analysis, and machine learning 
              to provide real-time insights that help farmers make data-driven decisions and optimize their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Agricultural Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of AI to revolutionize your farming operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every Agricultural Operation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From small family farms to large agricultural enterprises
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BeakerIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable improvements in agricultural operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for farms of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br ${plan.popular ? 'from-green-800 to-emerald-800 border-green-500' : 'from-slate-800 to-slate-700 border-slate-600'} p-8 rounded-xl border relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold text-green-400 mb-6">
                  {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full ${plan.popular ? 'bg-white text-green-900 hover:bg-gray-100' : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'} px-6 py-3 rounded-lg font-semibold text-center transition-all`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by advanced AI and satellite technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CpuChipIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
                <p className="text-gray-300">
                  Advanced ML algorithms analyze patterns and predict outcomes
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Satellite Imagery</h3>
                <p className="text-gray-300">
                  High-resolution satellite data for comprehensive field monitoring
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CloudIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">IoT Sensors</h3>
                <p className="text-gray-300">
                  Real-time data collection from soil, weather, and crop sensors
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Data Security</h3>
                <p className="text-gray-300">
                  Enterprise-grade security to protect your agricultural data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Revolutionize Your Farming?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of farmers who are already using AI to optimize their operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-green-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}