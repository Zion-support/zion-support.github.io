'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  LightBulbIcon, 
  BrainIcon, 
  CpuChipIcon, 
  CogIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  EyeIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

export default function AITelepathicInterfacePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Telepathic Interface Pro",
    "description": "Advanced thought-to-text and mind-controlled computing interfaces using cutting-edge AI and neural signal processing.",
    "url": "https://ziontechgroup.com/ai-telepathic-interface",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "1799",
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
      title: "Thought-to-Text Conversion",
      description: "Convert neural patterns directly into text with 99.5% accuracy using advanced AI",
      icon: CommandLineIcon
    },
    {
      title: "Mind-Controlled Computing",
      description: "Control computers, applications, and devices using only your thoughts",
      icon: CpuChipIcon
    },
    {
      title: "Neural Pattern Recognition",
      description: "Advanced AI algorithms recognize and interpret complex neural patterns",
      icon: BrainIcon
    },
    {
      title: "Real-time Processing",
      description: "Ultra-low latency processing for seamless thought-to-action conversion",
      icon: CogIcon
    }
  ];

  const applications = [
    {
      title: "Accessibility Solutions",
      description: "Enable communication and computer control for individuals with severe motor disabilities",
      icon: HandRaisedIcon
    },
    {
      title: "Medical Rehabilitation",
      description: "Assist patients in regaining motor control through neural interface therapy",
      icon: EyeIcon
    },
    {
      title: "Gaming & Entertainment",
      description: "Immersive gaming experiences controlled entirely by neural signals",
      icon: CpuChipIcon
    },
    {
      title: "Professional Productivity",
      description: "Hands-free computing for professionals in sterile or hazardous environments",
      icon: LightBulbIcon
    }
  ];

  const pricingTiers = [
    {
      name: "Personal",
      price: "$1,799",
      period: "per month",
      description: "Perfect for individual users and accessibility needs",
      features: [
        "Basic thought-to-text",
        "Simple mind control",
        "Email support",
        "1 user license",
        "100 hours of usage/month"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$3,499",
      period: "per month",
      description: "Ideal for medical professionals and researchers",
      features: [
        "Advanced thought-to-text",
        "Complex mind control",
        "Priority support",
        "5 user licenses",
        "500 hours of usage/month",
        "Custom neural patterns",
        "Medical-grade security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$6,999",
      period: "per month",
      description: "For large organizations and research institutions",
      features: [
        "Premium thought-to-text",
        "Full mind control suite",
        "24/7 dedicated support",
        "Unlimited user licenses",
        "Unlimited usage",
        "Custom AI training",
        "On-premise deployment",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Telepathic Interface Pro - Zion Tech Group"
        description="Advanced thought-to-text and mind-controlled computing interfaces using cutting-edge AI and neural signal processing."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-500/20 rounded-full">
                <LightBulbIcon className="h-16 w-16 text-purple-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Telepathic Interface Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of human-computer interaction with our revolutionary telepathic interface. 
              Control computers, convert thoughts to text, and interact with technology using only your mind 
              powered by advanced AI and neural signal processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
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
              Revolutionary Telepathic Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Break through the barriers of traditional input methods with our advanced neural interface.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-purple-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-purple-600" />
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
              Our telepathic interface technology is transforming lives across multiple industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <app.icon className="h-8 w-8 text-purple-600" />
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Neural Processing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 256-channel EEG processing</li>
                <li>• Real-time signal analysis</li>
                <li>• Advanced noise filtering</li>
                <li>• Adaptive learning algorithms</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Deep neural networks</li>
                <li>• Pattern recognition</li>
                <li>• Real-time adaptation</li>
                <li>• Personalization algorithms</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Privacy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• End-to-end encryption</li>
                <li>• HIPAA compliance</li>
                <li>• Secure data storage</li>
                <li>• Privacy protection</li>
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
              See how our telepathic interface has transformed lives and improved accessibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Medical Breakthrough</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "This technology has given me back my ability to communicate. I can now type 40 words per minute using only my thoughts."
              </p>
              <div className="text-sm text-purple-600 font-medium">Sarah M., ALS Patient</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Research Advancement</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Our research productivity increased by 300% with hands-free computing in our sterile laboratory environment."
              </p>
              <div className="text-sm text-purple-600 font-medium">Dr. James Chen, Research Institute</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Gaming Innovation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "The most immersive gaming experience I've ever had. Controlling the game with my mind is absolutely incredible."
              </p>
              <div className="text-sm text-purple-600 font-medium">Alex R., Gaming Enthusiast</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Telepathic Interface Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
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
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
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
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Telepathic Computing?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join the telepathic interface revolution and unlock new possibilities for human-computer interaction. 
            Contact our neural interface experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}