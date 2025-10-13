'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CommandLineIcon, 
  BrainIcon, 
  CpuChipIcon, 
  CogIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  EyeIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

export default function AINeuralInterfacePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Neural Interface Pro",
    "description": "Cutting-edge brain-computer interface solutions for medical and research applications using advanced AI algorithms.",
    "url": "https://ziontechgroup.com/ai-neural-interface",
    "applicationCategory": "MedicalApplication",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "2499",
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
      title: "Real-time Brain Signal Processing",
      description: "Advanced AI algorithms process neural signals in real-time with 99.9% accuracy",
      icon: BrainIcon
    },
    {
      title: "Thought-to-Text Conversion",
      description: "Convert neural patterns directly into text with natural language processing",
      icon: CommandLineIcon
    },
    {
      title: "Mind-Controlled Computing",
      description: "Control computers and devices using only your thoughts and neural patterns",
      icon: CpuChipIcon
    },
    {
      title: "Medical Grade Security",
      description: "HIPAA-compliant security with encrypted neural data transmission",
      icon: ShieldCheckIcon
    }
  ];

  const applications = [
    {
      title: "Medical Rehabilitation",
      description: "Help patients with paralysis control prosthetic limbs and assistive devices",
      icon: HandRaisedIcon
    },
    {
      title: "Research & Development",
      description: "Advanced neuroscience research and brain-computer interface development",
      icon: LightBulbIcon
    },
    {
      title: "Accessibility Solutions",
      description: "Enable communication for individuals with severe motor disabilities",
      icon: EyeIcon
    },
    {
      title: "Gaming & Entertainment",
      description: "Immersive gaming experiences controlled by neural signals",
      icon: CogIcon
    }
  ];

  const pricingTiers = [
    {
      name: "Research",
      price: "$2,499",
      period: "per month",
      description: "Perfect for academic research and development",
      features: [
        "Basic neural signal processing",
        "Standard BCI protocols",
        "Research support",
        "5 concurrent sessions",
        "100 hours of data processing/month"
      ],
      popular: false
    },
    {
      name: "Medical",
      price: "$4,999",
      period: "per month",
      description: "Ideal for medical institutions and rehabilitation centers",
      features: [
        "Advanced neural signal processing",
        "Medical-grade BCI protocols",
        "HIPAA compliance",
        "Priority support",
        "25 concurrent sessions",
        "500 hours of data processing/month",
        "Custom medical integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "per month",
      description: "For large-scale neural interface deployments",
      features: [
        "Premium neural signal processing",
        "Custom BCI protocols",
        "Full compliance suite",
        "24/7 dedicated support",
        "Unlimited sessions",
        "Unlimited data processing",
        "Custom hardware integration",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEOHead 
        title="AI Neural Interface Pro - Zion Tech Group"
        description="Cutting-edge brain-computer interface solutions for medical and research applications using advanced AI algorithms."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-indigo-500/20 rounded-full">
                <CommandLineIcon className="h-16 w-16 text-indigo-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Neural Interface Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Break through the boundaries of human-computer interaction with our revolutionary 
              brain-computer interface technology. Experience seamless thought-to-action control 
              powered by advanced AI algorithms and cutting-edge neuroscience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
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
              Revolutionary Neural Interface Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of human-computer interaction with our advanced BCI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-indigo-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-indigo-600" />
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
              Our neural interface technology is transforming lives across multiple industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    <app.icon className="h-8 w-8 text-indigo-600" />
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
              Built with cutting-edge technology and medical-grade precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Signal Processing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 256-channel EEG processing</li>
                <li>• Real-time signal filtering</li>
                <li>• Noise reduction algorithms</li>
                <li>• Adaptive learning protocols</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Algorithms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Deep neural networks</li>
                <li>• Pattern recognition</li>
                <li>• Machine learning models</li>
                <li>• Real-time adaptation</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Compliance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• HIPAA compliant</li>
                <li>• End-to-end encryption</li>
                <li>• Secure data storage</li>
                <li>• Privacy protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Neural Interface Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your research and application needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
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
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
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
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join the neural interface revolution and unlock new possibilities for human-computer interaction. 
            Contact our BCI experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-indigo-600 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}