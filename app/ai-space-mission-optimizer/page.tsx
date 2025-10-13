'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  RocketLaunchIcon, 
  GlobeAltIcon, 
  CpuChipIcon, 
  CogIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ChartBarIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

export default function AISpaceMissionOptimizerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Space Mission Optimizer Pro",
    "description": "AI-powered space mission planning and optimization for aerospace companies using advanced algorithms and machine learning.",
    "url": "https://ziontechgroup.com/ai-space-mission-optimizer",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "3999",
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
      title: "Mission Trajectory Optimization",
      description: "AI algorithms calculate optimal flight paths and fuel consumption for space missions",
      icon: RocketLaunchIcon
    },
    {
      title: "Resource Management",
      description: "Intelligent allocation of spacecraft resources including power, fuel, and life support",
      icon: CogIcon
    },
    {
      title: "Risk Assessment",
      description: "Advanced risk analysis and mitigation strategies for space mission planning",
      icon: ShieldCheckIcon
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring and adjustment of mission parameters during flight",
      icon: ChartBarIcon
    }
  ];

  const capabilities = [
    {
      title: "Satellite Constellation Management",
      description: "Optimize satellite deployment and orbital positioning for maximum coverage",
      icon: GlobeAltIcon
    },
    {
      title: "Deep Space Exploration",
      description: "Plan and optimize missions to Mars, Jupiter, and beyond",
      icon: RocketLaunchIcon
    },
    {
      title: "Space Station Operations",
      description: "Manage complex space station logistics and crew scheduling",
      icon: CpuChipIcon
    },
    {
      title: "Asteroid Mining Planning",
      description: "Optimize routes and operations for asteroid resource extraction",
      icon: BeakerIcon
    }
  ];

  const pricingTiers = [
    {
      name: "Explorer",
      price: "$3,999",
      period: "per month",
      description: "Perfect for small aerospace companies and research institutions",
      features: [
        "Basic mission planning tools",
        "Standard optimization algorithms",
        "Email support",
        "5 concurrent missions",
        "100 simulation hours/month"
      ],
      popular: false
    },
    {
      name: "Mission Control",
      price: "$7,999",
      period: "per month",
      description: "Ideal for established aerospace companies and space agencies",
      features: [
        "Advanced mission planning suite",
        "AI-powered optimization",
        "Priority support",
        "25 concurrent missions",
        "500 simulation hours/month",
        "Custom algorithm development",
        "Real-time mission monitoring"
      ],
      popular: true
    },
    {
      name: "Space Command",
      price: "$14,999",
      period: "per month",
      description: "For large space agencies and commercial space companies",
      features: [
        "Complete mission control suite",
        "Advanced AI algorithms",
        "24/7 dedicated support",
        "Unlimited missions",
        "Unlimited simulation hours",
        "Custom space hardware integration",
        "On-premise deployment",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOHead 
        title="AI Space Mission Optimizer Pro - Zion Tech Group"
        description="AI-powered space mission planning and optimization for aerospace companies using advanced algorithms and machine learning."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <RocketLaunchIcon className="h-16 w-16 text-blue-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Space Mission Optimizer Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize space mission planning with our AI-powered optimization platform. 
              Maximize mission success while minimizing costs and risks using advanced machine 
              learning algorithms and real-time data analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
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
              Advanced Space Mission Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of AI to optimize every aspect of your space missions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform supports a wide range of space mission types and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <capability.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{capability.title}</h3>
                </div>
                <p className="text-gray-600">{capability.description}</p>
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
              Built with cutting-edge technology and aerospace-grade precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mission Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-body orbital mechanics</li>
                <li>• Fuel optimization algorithms</li>
                <li>• Launch window calculations</li>
                <li>• Trajectory optimization</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Deep learning models</li>
                <li>• Predictive analytics</li>
                <li>• Anomaly detection</li>
                <li>• Adaptive algorithms</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data & Analytics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time telemetry</li>
                <li>• Historical mission data</li>
                <li>• Weather and space weather</li>
                <li>• Performance analytics</li>
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
              Mission Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI optimization has helped achieve mission success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Mars Rover Mission</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Optimized landing trajectory reduced fuel consumption by 23% and increased mission success probability by 15%.
              </p>
              <div className="text-sm text-blue-600 font-medium">NASA Partnership</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Satellite Constellation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Deployed 120 satellites with optimal orbital positioning, achieving 99.8% coverage efficiency.
              </p>
              <div className="text-sm text-blue-600 font-medium">Commercial Space Company</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Space Station Resupply</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Optimized cargo missions reduced costs by 18% while maintaining 100% mission success rate.
              </p>
              <div className="text-sm text-blue-600 font-medium">International Space Agency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Space Mission Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your space mission requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
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
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Space Missions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading space agencies and aerospace companies using our AI-powered mission optimization platform. 
            Contact our space technology experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}