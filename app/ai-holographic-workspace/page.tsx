'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  SparklesIcon, 
  CubeIcon, 
  CpuChipIcon, 
  CogIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  EyeIcon,
  HandRaisedIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function AIHolographicWorkspacePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Holographic Workspace Pro",
    "description": "3D holographic collaboration and workspace solutions for remote teams using advanced AI and mixed reality technology.",
    "url": "https://ziontechgroup.com/ai-holographic-workspace",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "2299",
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
      title: "3D Holographic Displays",
      description: "Crystal-clear 3D holographic projections with 4K resolution and 120Hz refresh rate",
      icon: CubeIcon
    },
    {
      title: "AI-Powered Collaboration",
      description: "Intelligent virtual assistants and real-time translation for seamless global teamwork",
      icon: CpuChipIcon
    },
    {
      title: "Mixed Reality Integration",
      description: "Seamless integration with AR/VR devices and traditional 2D interfaces",
      icon: EyeIcon
    },
    {
      title: "Spatial Computing",
      description: "Advanced spatial tracking and gesture recognition for natural interaction",
      icon: HandRaisedIcon
    }
  ];

  const applications = [
    {
      title: "Remote Team Collaboration",
      description: "Bring distributed teams together in immersive 3D workspaces",
      icon: GlobeAltIcon
    },
    {
      title: "Design & Engineering",
      description: "Collaborate on 3D models and prototypes in real-time holographic environments",
      icon: CogIcon
    },
    {
      title: "Training & Education",
      description: "Interactive 3D learning experiences for corporate training and education",
      icon: LightBulbIcon
    },
    {
      title: "Virtual Meetings",
      description: "Conduct meetings in photorealistic 3D environments with spatial audio",
      icon: SparklesIcon
    }
  ];

  const pricingTiers = [
    {
      name: "Team",
      price: "$2,299",
      period: "per month",
      description: "Perfect for small teams and startups",
      features: [
        "Basic holographic workspace",
        "Up to 10 concurrent users",
        "Standard collaboration tools",
        "Email support",
        "100 hours of usage/month"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "per month",
      description: "Ideal for large organizations and enterprises",
      features: [
        "Advanced holographic workspace",
        "Up to 100 concurrent users",
        "AI-powered collaboration",
        "Priority support",
        "500 hours of usage/month",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Global",
      price: "$9,999",
      period: "per month",
      description: "For multinational corporations and large-scale deployments",
      features: [
        "Premium holographic workspace",
        "Unlimited concurrent users",
        "Full AI suite",
        "24/7 dedicated support",
        "Unlimited usage",
        "Custom development",
        "On-premise deployment",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <SEOHead 
        title="AI Holographic Workspace Pro - Zion Tech Group"
        description="3D holographic collaboration and workspace solutions for remote teams using advanced AI and mixed reality technology."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyan-500/20 rounded-full">
                <SparklesIcon className="h-16 w-16 text-cyan-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Holographic Workspace Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Step into the future of remote collaboration with our revolutionary 3D holographic workspace. 
              Experience immersive team collaboration, design reviews, and virtual meetings in stunning 
              holographic environments powered by advanced AI and mixed reality technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200">
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
              Revolutionary Holographic Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of remote collaboration with our advanced holographic workspace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-cyan-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-cyan-600" />
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
              Our holographic workspace is transforming how teams collaborate across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyan-100 rounded-lg mr-4">
                    <app.icon className="h-8 w-8 text-cyan-600" />
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
              Built with cutting-edge holographic and mixed reality technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Holographic Display</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 4K resolution holographic projection</li>
                <li>• 120Hz refresh rate</li>
                <li>• 180-degree viewing angle</li>
                <li>• Spatial audio integration</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time gesture recognition</li>
                <li>• Intelligent virtual assistants</li>
                <li>• Automatic translation</li>
                <li>• Predictive collaboration</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration & Security</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AR/VR device compatibility</li>
                <li>• Enterprise security</li>
                <li>• Cloud and on-premise options</li>
                <li>• API integrations</li>
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
              See how our holographic workspace has transformed team collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Global Engineering Team</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Our global engineering team's productivity increased by 40% with holographic design reviews. We can now collaborate on 3D models as if we're in the same room."
              </p>
              <div className="text-sm text-cyan-600 font-medium">TechCorp Engineering</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Medical Training</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Medical students can now practice complex procedures in 3D holographic environments. Training effectiveness increased by 60%."
              </p>
              <div className="text-sm text-cyan-600 font-medium">University Medical Center</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Remote Sales Team</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Our sales team can now present products in immersive 3D environments. Customer engagement increased by 80% and sales by 35%."
              </p>
              <div className="text-sm text-cyan-600 font-medium">Global Sales Corp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Holographic Workspace Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your team size and collaboration needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
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
                    ? 'bg-cyan-600 text-white hover:bg-cyan-700' 
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
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Team Collaboration?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join leading organizations using our holographic workspace to revolutionize remote collaboration. 
            Contact our mixed reality experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-cyan-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-cyan-600 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}