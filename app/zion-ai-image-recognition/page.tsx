import React from 'react';
import SEOHead from '../../components/SEOHead';

const ZionAIImageRecognitionPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Image Recognition Pro",
    "description": "Advanced AI-powered image recognition and computer vision platform with 99.8% accuracy",
    "url": "https://ziontechgroup.com/zion-ai-image-recognition",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, API, Cloud",
    "offers": {
      "@type": "Offer",
      "price": "399",
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
        title="Zion AI Image Recognition Pro - Advanced Computer Vision"
        description="Transform your business with AI-powered image recognition. 99.8% accuracy, real-time processing, and custom model training. Starting from $399/month."
        keywords="AI image recognition, computer vision, image analysis, object detection, facial recognition, AI vision technology"
        canonicalUrl="https://ziontechgroup.com/zion-ai-image-recognition"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-8 animate-pulse">
                <span className="text-4xl">👁️</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Zion AI Image Recognition Pro
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI-powered image recognition platform with 99.8% accuracy. 
                Transform visual data into actionable insights with advanced computer vision technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#demo" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Try Image Demo
                </a>
                <a 
                  href="/contact?service=image-recognition" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>

          {/* Accuracy Stats */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "99.8%", label: "Recognition Accuracy" },
                { number: "< 200ms", label: "Processing Time" },
                { number: "1000+", label: "Object Categories" },
                { number: "50+", label: "Supported Languages" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Vision Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful computer vision features powered by state-of-the-art AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Object Detection",
                  description: "Identify and locate objects in images with precise bounding boxes and confidence scores"
                },
                {
                  icon: "👤",
                  title: "Facial Recognition",
                  description: "Advanced facial analysis including emotion detection, age estimation, and identity verification"
                },
                {
                  icon: "📝",
                  title: "Text Recognition",
                  description: "Extract text from images with OCR technology supporting 50+ languages"
                },
                {
                  icon: "🏷️",
                  title: "Image Classification",
                  description: "Categorize images into predefined classes with high accuracy and confidence"
                },
                {
                  icon: "🔍",
                  title: "Visual Search",
                  description: "Find similar images using visual similarity search and reverse image lookup"
                },
                {
                  icon: "🎨",
                  title: "Custom Models",
                  description: "Train custom recognition models for your specific business needs and use cases"
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

          {/* Use Cases Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300">Transform your business with AI-powered image recognition</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  industry: "Retail & E-commerce",
                  useCase: "Visual Product Search",
                  description: "Enable customers to search products using images, improving discovery and conversion rates",
                  features: ["Visual search engine", "Product recommendation", "Inventory management", "Quality control"]
                },
                {
                  industry: "Healthcare",
                  useCase: "Medical Image Analysis",
                  description: "Analyze medical images for diagnosis assistance and treatment planning",
                  features: ["X-ray analysis", "MRI interpretation", "Dermatology screening", "Pathology detection"]
                },
                {
                  industry: "Manufacturing",
                  useCase: "Quality Control",
                  description: "Automated quality inspection and defect detection in production lines",
                  features: ["Defect detection", "Quality scoring", "Process optimization", "Predictive maintenance"]
                },
                {
                  industry: "Security & Surveillance",
                  useCase: "Intelligent Monitoring",
                  description: "Advanced surveillance with facial recognition and behavior analysis",
                  features: ["Facial recognition", "Intrusion detection", "Crowd analysis", "Anomaly detection"]
                },
                {
                  industry: "Automotive",
                  useCase: "Autonomous Driving",
                  description: "Computer vision for self-driving cars and advanced driver assistance systems",
                  features: ["Object detection", "Lane detection", "Traffic sign recognition", "Pedestrian detection"]
                },
                {
                  industry: "Agriculture",
                  useCase: "Crop Monitoring",
                  description: "Monitor crop health, detect diseases, and optimize farming operations",
                  features: ["Crop health analysis", "Disease detection", "Yield prediction", "Soil analysis"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-sm font-semibold text-green-400 mb-2">{useCase.industry}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.useCase}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-1">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* API Features */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Developer-Friendly API</h2>
              <p className="text-xl text-gray-300">Easy integration with comprehensive documentation and SDKs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">API Features</h3>
                <ul className="space-y-4">
                  {[
                    "RESTful API with JSON responses",
                    "Real-time processing capabilities",
                    "Batch processing support",
                    "Webhook notifications",
                    "Rate limiting and quotas",
                    "Comprehensive error handling"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">SDK Support</h3>
                <ul className="space-y-4">
                  {[
                    "Python SDK with examples",
                    "JavaScript/Node.js integration",
                    "Java and C# libraries",
                    "Mobile SDKs (iOS/Android)",
                    "Docker containers",
                    "Cloud deployment guides"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the plan that fits your image processing needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$399",
                  period: "/month",
                  description: "Perfect for small applications",
                  features: [
                    "Up to 10,000 images/month",
                    "Basic recognition models",
                    "Standard API access",
                    "Email support",
                    "Basic analytics"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$999",
                  period: "/month",
                  description: "Ideal for growing businesses",
                  features: [
                    "Up to 100,000 images/month",
                    "Advanced recognition models",
                    "Priority API access",
                    "Custom model training",
                    "Advanced analytics",
                    "Phone support"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "For large-scale applications",
                  features: [
                    "Unlimited images",
                    "Custom model development",
                    "Dedicated infrastructure",
                    "24/7 support",
                    "SLA guarantees",
                    "White-label solution"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${plan.popular ? 'border-green-500 ring-2 ring-green-500' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 transform hover:scale-105`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                    href="/contact?service=image-recognition&plan={plan.name.toLowerCase()}"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">See the Future with AI Vision</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1000+ companies using our image recognition technology to transform their business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=image-recognition" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
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

export default ZionAIImageRecognitionPage;