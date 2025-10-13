'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  ChartBarIcon, 
  CpuChipIcon, 
  CogIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  BeakerIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export default function AIClimatePredictionEnginePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Climate Prediction Engine Pro",
    "description": "Advanced AI climate modeling and weather prediction for environmental planning using machine learning and big data analytics.",
    "url": "https://ziontechgroup.com/ai-climate-prediction-engine",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "1599",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      title: "Advanced Climate Modeling",
      description: "Sophisticated AI models predict climate patterns with 95% accuracy up to 10 years ahead",
      icon: GlobeAltIcon
    },
    {
      title: "Real-time Weather Analysis",
      description: "Continuous monitoring and analysis of weather patterns with instant updates",
      icon: CloudIcon
    },
    {
      title: "Environmental Impact Assessment",
      description: "Comprehensive analysis of environmental factors and their long-term effects",
      icon: ChartBarIcon
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning algorithms identify trends and predict future climate events",
      icon: CpuChipIcon
    }
  ];

  const applications = [
    {
      title: "Agricultural Planning",
      description: "Optimize crop planting and harvesting schedules based on climate predictions",
      icon: BeakerIcon
    },
    {
      title: "Disaster Preparedness",
      description: "Early warning systems for extreme weather events and natural disasters",
      icon: ShieldCheckIcon
    },
    {
      title: "Urban Planning",
      description: "Design climate-resilient cities and infrastructure for the future",
      icon: CogIcon
    },
    {
      title: "Energy Management",
      description: "Optimize renewable energy production and grid management",
      icon: LightBulbIcon
    }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      price: "$1,599",
      period: "per month",
      description: "Perfect for small organizations and research institutions",
      features: [
        "Basic climate modeling",
        "7-day weather forecasts",
        "Email support",
        "5 user licenses",
        "100 API calls/month"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$3,999",
      period: "per month",
      description: "Ideal for government agencies and large organizations",
      features: [
        "Advanced climate modeling",
        "30-day weather forecasts",
        "Priority support",
        "25 user licenses",
        "1000 API calls/month",
        "Custom models",
        "Real-time alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$7,999",
      period: "per month",
      description: "For large-scale climate research and global deployments",
      features: [
        "Premium climate modeling",
        "Unlimited forecasts",
        "24/7 dedicated support",
        "Unlimited user licenses",
        "Unlimited API calls",
        "Custom development",
        "On-premise deployment",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOHead 
        title="AI Climate Prediction Engine Pro - Zion Tech Group"
        description="Advanced AI climate modeling and weather prediction for environmental planning using machine learning and big data analytics."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-500/20 rounded-full">
                <GlobeAltIcon className="h-16 w-16 text-green-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Climate Prediction Engine Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to predict and understand climate patterns. 
              Our advanced climate modeling engine provides accurate weather forecasts, environmental 
              impact assessments, and long-term climate predictions to help organizations make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Climate Prediction Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most accurate climate prediction technology powered by AI and big data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-green-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our climate prediction engine is helping organizations across various industries make better decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <app.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{app.title}</h3>
                </div>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge climate science and AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Climate Modeling</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Global climate models (GCMs)</li>
                <li>• Regional climate models (RCMs)</li>
                <li>• Ensemble forecasting</li>
                <li>• Machine learning integration</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Sources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Satellite observations</li>
                <li>• Weather station data</li>
                <li>• Ocean buoys</li>
                <li>• Historical climate data</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Analytics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Deep learning models</li>
                <li>• Pattern recognition</li>
                <li>• Predictive analytics</li>
                <li>• Real-time processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our climate prediction engine has helped organizations make better decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Agricultural Success</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Our crop yield increased by 25% using climate predictions to optimize planting schedules. The accuracy of weather forecasts helped us avoid major losses."
              </p>
              <div className="text-sm text-green-600 font-medium">GreenFields Agriculture</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Disaster Prevention</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Early warning systems helped us evacuate 50,000 people before a major hurricane. The prediction accuracy saved countless lives."
              </p>
              <div className="text-sm text-green-600 font-medium">Emergency Management Agency</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Energy Optimization</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Climate predictions helped us optimize our renewable energy grid, reducing costs by 30% and increasing efficiency by 40%."
              </p>
              <div className="text-sm text-green-600 font-medium">CleanEnergy Corp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Climate Prediction Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your climate prediction needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-green-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <StarIcon className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  tier.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Predict the Future of Climate?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join leading organizations using our AI climate prediction engine to make informed decisions. 
            Contact our climate science experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-green-600 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}