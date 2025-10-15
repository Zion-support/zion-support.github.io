import React from 'react';
import SEOHead from '../../components/SEOHead';

const ZionAIVoiceAssistantPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Voice Assistant Pro",
    "description": "Advanced AI-powered voice assistant with natural language processing and multi-platform integration",
    "url": "https://ziontechgroup.com/zion-ai-voice-assistant",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android, Windows, macOS",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Voice Assistant Pro - Advanced Voice AI Solutions"
        description="Transform your business with our AI-powered voice assistant. Natural language processing, multi-platform support, and enterprise-grade security. Starting from $299/month."
        keywords="AI voice assistant, voice AI, natural language processing, voice automation, business voice assistant, AI voice technology"
        canonicalUrl="https://ziontechgroup.com/zion-ai-voice-assistant"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8 animate-pulse">
                <span className="text-4xl">🎤</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion AI Voice Assistant Pro
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI-powered voice assistant that understands, learns, and responds with human-like intelligence. 
                Transform your business operations with advanced voice automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#demo" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Try Live Demo
                </a>
                <a 
                  href="/contact?service=voice-assistant" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Voice AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of voice interaction with our cutting-edge AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧠",
                  title: "Advanced NLP",
                  description: "Natural language understanding with 99.7% accuracy across 50+ languages"
                },
                {
                  icon: "🎯",
                  title: "Context Awareness",
                  description: "Maintains conversation context and learns from user preferences"
                },
                {
                  icon: "🔊",
                  title: "Multi-Platform",
                  description: "Works seamlessly across web, mobile, desktop, and IoT devices"
                },
                {
                  icon: "🔒",
                  title: "Enterprise Security",
                  description: "End-to-end encryption and compliance with GDPR, HIPAA, SOC 2"
                },
                {
                  icon: "⚡",
                  title: "Real-time Processing",
                  description: "Ultra-low latency voice processing under 100ms response time"
                },
                {
                  icon: "🎨",
                  title: "Custom Voice Training",
                  description: "Train custom voice models for your brand and industry needs"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$299",
                  period: "/month",
                  description: "Perfect for small businesses",
                  features: [
                    "Up to 1,000 voice interactions/month",
                    "Basic NLP capabilities",
                    "Web & mobile integration",
                    "Email support",
                    "Standard security"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$799",
                  period: "/month",
                  description: "Ideal for growing companies",
                  features: [
                    "Up to 10,000 voice interactions/month",
                    "Advanced NLP & ML",
                    "Multi-platform support",
                    "Priority support",
                    "Custom voice training",
                    "Analytics dashboard"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "For large organizations",
                  features: [
                    "Unlimited voice interactions",
                    "Full AI customization",
                    "Dedicated infrastructure",
                    "24/7 dedicated support",
                    "Advanced security & compliance",
                    "Custom integrations"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 transform hover:scale-105`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact?service=voice-assistant&plan={plan.name.toLowerCase()}"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Transform Your Business</h2>
              <p className="text-xl text-gray-300">See how leading companies use our voice AI</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  industry: "Healthcare",
                  useCase: "Patient Intake & Triage",
                  description: "Automate patient check-ins, symptom collection, and appointment scheduling with HIPAA-compliant voice AI",
                  results: "40% reduction in wait times, 95% patient satisfaction"
                },
                {
                  industry: "E-commerce",
                  useCase: "Voice Shopping Assistant",
                  description: "Enable customers to browse, search, and purchase products using natural voice commands",
                  results: "60% increase in mobile conversions, 25% higher average order value"
                },
                {
                  industry: "Banking",
                  useCase: "Voice Banking & Support",
                  description: "Secure voice authentication and account management with advanced fraud detection",
                  results: "50% reduction in call center volume, 99.9% security accuracy"
                },
                {
                  industry: "Manufacturing",
                  useCase: "Voice-Controlled Operations",
                  description: "Hands-free control of machinery and equipment with voice commands for safety and efficiency",
                  results: "30% improvement in safety, 20% faster operations"
                }
              ].map((caseStudy, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-sm font-semibold text-purple-400 mb-2">{caseStudy.industry}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{caseStudy.useCase}</h3>
                  <p className="text-gray-300 mb-4">{caseStudy.description}</p>
                  <div className="text-sm text-green-400 font-semibold">{caseStudy.results}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Voice Experience?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ companies already using Zion AI Voice Assistant to revolutionize their customer interactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=voice-assistant" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIVoiceAssistantPage;