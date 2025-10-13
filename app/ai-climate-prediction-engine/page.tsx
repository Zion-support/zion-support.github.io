import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
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
  ShieldCheckIcon,
  SunIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

export default function AIClimatePredictionEnginePage() {
  const features = [
    "Advanced climate modeling",
    "Weather pattern analysis",
    "Temperature predictions",
    "Precipitation forecasting",
    "Extreme weather alerts",
    "Seasonal trend analysis",
    "Carbon footprint tracking",
    "Renewable energy optimization",
    "Climate risk assessment",
    "Sustainability reporting"
  ];

  const useCases = [
    "Agriculture planning",
    "Energy management",
    "Disaster preparedness",
    "Urban planning",
    "Insurance risk assessment",
    "Environmental monitoring",
    "Renewable energy projects",
    "Climate research",
    "Supply chain optimization",
    "Policy development"
  ];

  const benefits = [
    "95% accuracy rate",
    "Real-time predictions",
    "Cost savings",
    "Risk mitigation",
    "Data-driven decisions"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$499",
      period: "/month",
      description: "Essential climate predictions for small organizations",
      features: [
        "7-day weather forecasts",
        "Basic climate models",
        "Email alerts",
        "API access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Advanced climate intelligence for growing businesses",
      features: [
        "30-day climate forecasts",
        "Advanced AI models",
        "Real-time alerts",
        "Custom dashboards",
        "Priority support",
        "Historical data access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      description: "Comprehensive climate solutions for large organizations",
      features: [
        "Unlimited forecasting",
        "Custom AI training",
        "White-label solution",
        "24/7 dedicated support",
        "On-site deployment",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered climate prediction engine that provides accurate weather forecasts, climate modeling, and environmental insights for better decision-making and risk management." />
        <meta name="keywords" content="AI climate prediction, weather forecasting, climate modeling, environmental AI, climate risk assessment, weather analytics" />
        <meta property="og:title" content="AI Climate Prediction Engine - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered climate prediction engine that provides accurate weather forecasts and climate modeling." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-climate-prediction-engine" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CloudIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Climate Prediction Engine
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Predict climate patterns with unprecedented accuracy using advanced AI and machine learning
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our cutting-edge climate prediction engine combines satellite data, weather stations, 
              and machine learning algorithms to provide accurate forecasts and climate insights 
              that help organizations make informed decisions and mitigate risks.
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
                Advanced Climate Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of AI to predict and understand climate patterns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Applications Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Climate intelligence that drives decision-making across multiple sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GlobeAltIcon className="w-8 h-8 text-white" />
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
              Proven Accuracy & Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI engine delivers reliable climate predictions with measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by the latest advances in AI, machine learning, and climate science
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CpuChipIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Deep Learning</h3>
                <p className="text-gray-300">
                  Advanced neural networks trained on massive climate datasets
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Satellite Data</h3>
                <p className="text-gray-300">
                  Real-time satellite imagery and atmospheric data integration
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BoltIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real-time Processing</h3>
                <p className="text-gray-300">
                  High-performance computing for instant climate predictions
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Data Security</h3>
                <p className="text-gray-300">
                  Enterprise-grade security for sensitive climate data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your climate prediction needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br ${plan.popular ? 'from-blue-800 to-cyan-800 border-blue-500' : 'from-slate-800 to-slate-700 border-slate-600'} p-8 rounded-xl border relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold text-blue-400 mb-6">
                  {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full ${plan.popular ? 'bg-white text-blue-900 hover:bg-gray-100' : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'} px-6 py-3 rounded-lg font-semibold text-center transition-all`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Predict the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start using AI-powered climate predictions to make better decisions and reduce risks
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}